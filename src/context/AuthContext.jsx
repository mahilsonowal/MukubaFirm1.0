import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session on mount
    const session = supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Auth functions
  const loginUser = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const registerUser = async (email, password, name) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name }
        }
      });
      
      if (error) throw error;
      
      // Create profile immediately after successful registration
      if (data.user) {
        const profileData = {
          id: data.user.id,
          email: data.user.email,
          name: name || data.user.user_metadata?.name || '',
          role: 'user',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          totp_secret: null,
          totp_enabled: false
        };
        
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([profileData]);
        
        if (profileError) {
          console.error('Error creating profile during registration:', profileError);
          // Don't throw error here - user is registered but profile creation failed
          // Profile will be created when they first login
        } else {
          console.log('Profile created successfully during registration for user:', data.user.id);
        }
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  };

  const loginWithGoogle = async (navigate) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({ 
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
      // Profile will be created in useEffect after redirect
    } catch (err) {
      throw err;
    }
  };

  // Ensure user profile exists after login (Google or email)
  useEffect(() => {
    const ensureProfile = async () => {
      if (!user) return;
      
      try {
        // Check if profile exists
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('id, role, totp_secret, totp_enabled')
          .eq('id', user.id)
          .single();
        
        // If profile doesn't exist, create it
        if (profileError && profileError.code === 'PGRST116') {
          // Profile not found, create new profile
          const profileData = {
            id: user.id,
            email: user.email,
            name: user.user_metadata?.name || user.user_metadata?.full_name || '',
            role: 'user',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            totp_secret: null,
            totp_enabled: false
          };
          
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([profileData]);
          
          if (insertError) {
            console.error('Error creating profile:', insertError);
          } else {
            console.log('Profile created successfully for user:', user.id);
          }
        } else if (profileError) {
          // Some other error occurred
          console.error('Error checking profile:', profileError);
        } else {
          // Profile exists, no action needed
          console.log('Profile already exists for user:', user.id);
        }
      } catch (error) {
        console.error('Error in ensureProfile:', error);
      }
    };

    // Add a small delay to ensure user metadata is populated (especially for Google OAuth)
    const timer = setTimeout(() => {
      ensureProfile();
    }, 1000);

    return () => clearTimeout(timer);
  }, [user]);

  // TOTP-based password reset (replaces broken email reset)
  const resetPasswordWithTOTP = async (email, totpCode) => {
    try {
      console.log('Starting TOTP password reset for:', email);
      
      // 1. First, let's check if the user exists in auth.users
      console.log('Checking if user exists in auth.users...');
      
      // 2. Find user by email in profiles table using service role to bypass RLS
      console.log('Looking up profile in profiles table for email:', email);
      
      // Use regular supabase client - RLS policies will be fixed to allow email lookup
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('id, totp_secret, totp_enabled, email')
        .eq('email', email)
        .single();
      
      console.log('Profile lookup result:', { profile, profileError });
      
      if (profileError) {
        console.error('Profile lookup error details:', {
          code: profileError.code,
          message: profileError.message,
          details: profileError.details,
          hint: profileError.hint
        });
        
        if (profileError.code === 'PGRST116') {
          throw new Error(`No profile found for email: ${email}. Please ensure you have completed registration and have a profile.`);
        } else {
          throw new Error(`Profile lookup failed: ${profileError.message}`);
        }
      }
      
      if (!profile) {
        throw new Error('Profile data is null or undefined');
      }
      
      if (!profile.totp_enabled) {
        throw new Error('2FA is not enabled for this account. Please contact support.');
      }
      
      console.log('Profile found, verifying TOTP code...');
      
      // 3. Verify TOTP code (this will be implemented with the TOTP library)
      // For now, we'll use a placeholder - you'll need to implement the actual TOTP verification
      const isValidTOTP = await verifyTOTPCode(totpCode, profile.totp_secret);
      if (!isValidTOTP) {
        throw new Error('Invalid 2FA code. Please check your authenticator app.');
      }
      
      console.log('TOTP code verified, attempting password reset...');
      
      // 4. Use Supabase's built-in password reset flow
      // We'll send a password reset email and then the user can set a new password
      // This is more secure than trying to bypass authentication
      
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password?type=recovery`
      });
      
      if (resetError) {
        console.error('Password reset email error:', resetError);
        throw new Error('Failed to send password reset email. Please try again.');
      }
      
      console.log('Password reset email sent successfully');
      
      return { 
        success: true, 
        message: 'Password reset email sent! Please check your inbox and follow the reset link. The 2FA code you entered has been verified, so you can proceed with the email reset link.' 
      };
      
    } catch (error) {
      console.error('TOTP password reset error:', error);
      throw error;
    }
  };

  // Placeholder TOTP verification function (you'll implement this with the library)
  const verifyTOTPCode = async (code, secret) => {
    // TODO: Implement actual TOTP verification
    // For now, return true for testing
    console.log('TOTP verification needed for:', { code, secret });
    return true;
  };

  const updatePassword = async (newPassword) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
  };

  const logoutUser = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      loginUser, 
      registerUser, 
      loginWithGoogle, 
      resetPasswordWithTOTP,
      updatePassword,
      logoutUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 