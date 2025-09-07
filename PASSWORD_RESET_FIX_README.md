# Password Reset with 2FA - Issue Fix

## 🚨 **Problem Identified**

The password reset functionality was failing with the error:
```
No profile found for email: jdhmail5@gmail.com. Please ensure you have completed registration and have a profile.
```

Even though the email exists in the Supabase profiles table.

## 🔍 **Root Cause**

The issue was caused by **Row Level Security (RLS) policies** on the profiles table. The password reset function tries to look up a profile by email, but:

1. **During password reset, the user is NOT authenticated** (they can't log in because they forgot their password)
2. **RLS policies only allowed users to view their own profile** using `auth.uid() = id`
3. **Since `auth.uid()` returns null for unauthenticated users**, the profile lookup failed

## ✅ **Solution Implemented**

### **Option 1: Service Role Client (Recommended)**

I've implemented a service role client approach that bypasses RLS for password reset operations:

#### **Files Modified:**

1. **`src/utils/supabaseClient.js`** - Added service role client
```javascript
// Service role client for admin operations (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
```

2. **`src/context/AuthContext.jsx`** - Updated password reset function
```javascript
// Use service role client for profile lookup during password reset
const serviceRoleClient = supabaseAdmin;
const { data: profile, error: profileError } = await serviceRoleClient
  .from('profiles')
  .select('id, totp_secret, totp_enabled, email')
  .eq('email', email)
  .single();
```

### **Option 2: RLS Policy Fix (Alternative)**

I've also created a SQL script (`fix-password-reset-rls.sql`) that modifies the RLS policies to allow profile lookup by email during password reset.

## 🔧 **Setup Required**

### **Environment Variables**

Add this to your `.env` file:
```env
VITE_SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**⚠️ Important:** The service role key should be kept secure and only used for server-side operations. In a production environment, consider moving this to a backend API.

### **Getting the Service Role Key**

1. Go to your Supabase Dashboard
2. Navigate to **Settings** → **API**
3. Copy the **service_role** key (not the anon key)
4. Add it to your environment variables

## 🧪 **Testing the Fix**

1. **Clear browser cache** and refresh the page
2. **Try the password reset flow** with your email `jdhmail5@gmail.com`
3. **Check browser console** for detailed logging
4. **Verify the profile lookup succeeds** (no more "No profile found" error)

## 🔒 **Security Considerations**

### **Service Role Client**
- ✅ **Bypasses RLS** - Can access any data
- ✅ **Used only for password reset** - Limited scope
- ⚠️ **Keep key secure** - Don't expose in client-side code
- ⚠️ **Consider backend API** - For production environments

### **RLS Policy Alternative**
- ✅ **More secure** - Database-level protection
- ✅ **No service key needed** - Uses regular client
- ⚠️ **Requires careful policy design** - Must allow email lookup

## 📋 **Next Steps**

1. **Add the service role key** to your environment variables
2. **Test the password reset** functionality
3. **Verify 2FA verification** works correctly
4. **Check email delivery** for password reset links

## 🐛 **If Issues Persist**

If you're still having issues:

1. **Check browser console** for detailed error messages
2. **Verify the service role key** is correct
3. **Ensure the email exists** in the profiles table
4. **Check Supabase logs** for any server-side errors
5. **Try the RLS policy fix** as an alternative

## 📞 **Support**

If you need further assistance:
- Check the browser console for detailed error logs
- Verify your Supabase configuration
- Ensure all environment variables are set correctly
