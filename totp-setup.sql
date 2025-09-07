-- TOTP Setup for Mukuba Economic Research
-- Run this in your Supabase SQL Editor

-- Add TOTP fields to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS totp_secret TEXT,
ADD COLUMN IF NOT EXISTS totp_enabled BOOLEAN DEFAULT false;

-- Create index for TOTP lookup
CREATE INDEX IF NOT EXISTS profiles_totp_enabled_idx ON public.profiles(totp_enabled);

-- Update existing profiles to have TOTP disabled by default
UPDATE public.profiles 
SET totp_enabled = false 
WHERE totp_enabled IS NULL;

-- Grant necessary permissions
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- Create or replace the trigger function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role, created_at, updated_at, totp_secret, totp_enabled)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name', ''),
    'user',
    NOW(),
    NOW(),
    NULL,
    false
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Optional: Create a function to enable TOTP for a user
CREATE OR REPLACE FUNCTION enable_totp_for_user(user_email TEXT, totp_secret TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.profiles 
    SET totp_secret = enable_totp_for_user.totp_secret,
        totp_enabled = true,
        updated_at = NOW()
    WHERE email = user_email;
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Optional: Create a function to disable TOTP for a user
CREATE OR REPLACE FUNCTION disable_totp_for_user(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.profiles 
    SET totp_secret = NULL,
        totp_enabled = false,
        updated_at = NOW()
    WHERE email = user_email;
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions on functions
GRANT EXECUTE ON FUNCTION enable_totp_for_user(TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION disable_totp_for_user(TEXT) TO authenticated;

-- Grant execute permission on the trigger function
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role;
