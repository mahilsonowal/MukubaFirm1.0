# Supabase Password Reset Debugging Guide

## 🚨 **Current Issue:**
The password reset is getting stuck on "Setting up password reset..." screen.

## 🔍 **Root Cause Analysis:**

### **1. URL Structure Problem**
Your reset link currently goes to:
```
https://abxawbrpfhlddansbfzi.supabase.co/auth/v1/verify?token=...&type=recovery&redirect_to=...
```

**This is wrong!** It should go directly to your app, not to Supabase's verify endpoint.

### **2. Supabase Configuration Issues**
- **Redirect URLs** might be incorrect
- **Site URL** might be wrong
- **Email template** might have wrong structure

## 🔧 **Step-by-Step Fix:**

### **Step 1: Fix Supabase URL Configuration**

Go to **Supabase Dashboard** → **Authentication** → **URL Configuration**

**Set Site URL to:**
```
http://localhost:3000
```

**Add ONLY these Redirect URLs:**
```
http://localhost:3000/reset-password
http://localhost:3000/reset-password?type=recovery
```

**Remove ALL other redirect URLs** to avoid conflicts.

### **Step 2: Fix Email Template**

Go to **Supabase** → **Authentication** → **Email Templates** → **Password Reset**

**Replace the entire template with:**
```html
<h2>Password Reset Request</h2>
<p>Hello,</p>
<p>You requested a password reset for your Mukuba Economic Research account.</p>
<p>Click the button below to reset your password:</p>
<div style="text-align: center; margin: 30px 0;">
    <a href="{{ .ConfirmationURL }}" style="background-color: #AF9871; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
</div>
<p>If you didn't request this, please ignore this email.</p>
<p>Best regards,<br>Mukuba Economic Research Team</p>
```

**IMPORTANT:** Use ONLY `{{ .ConfirmationURL }}` - don't add any other variables or manual URL construction.

### **Step 3: Test the Configuration**

1. **Clear your browser cache**
2. **Try forgot password again**
3. **Check the new email**
4. **The reset link should now look like:**
   ```
   http://localhost:3000/reset-password?type=recovery&token=...
   ```

## 🧪 **Testing Steps:**

### **Test 1: Verify Supabase Settings**
- [ ] Site URL is set to `http://localhost:3000`
- [ ] Only 2 redirect URLs are configured
- [ ] Email template uses only `{{ .ConfirmationURL }}`

### **Test 2: Test Email Generation**
- [ ] Request password reset
- [ ] Check email content
- [ ] Verify reset link structure

### **Test 3: Test Reset Link**
- [ ] Click reset link from email
- [ ] Should redirect to your app
- [ ] Should show password reset form

## 🚨 **Common Mistakes:**

### **❌ Don't do this:**
- Add multiple redirect URLs
- Use `{{ .Token }}` instead of `{{ .ConfirmationURL }}`
- Manually construct URLs in templates
- Add extra query parameters

### **✅ Do this:**
- Use only `{{ .ConfirmationURL }}`
- Keep redirect URLs simple
- Let Supabase handle URL construction
- Test with clean configuration

## 🔍 **Debug Information:**

The updated ResetPassword component now shows:
- **Debug info** during session setup
- **Timeout protection** (30 seconds)
- **Better error handling**
- **Retry functionality**

## 📋 **Expected Flow:**

1. **User requests password reset** → Email sent ✅
2. **User clicks reset link** → Redirects to your app ✅
3. **App validates token** → Establishes session ✅
4. **User sets new password** → Password updated ✅
5. **User redirected to login** → Process complete ✅

## 🆘 **If Still Not Working:**

### **Option 1: Use Supabase Default Email**
1. **Disable** custom SMTP temporarily
2. Test forgot password feature
3. See if default emails work

### **Option 2: Check Browser Console**
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for JavaScript errors
4. Check Network tab for failed requests

### **Option 3: Verify Environment Variables**
Check your `.env` file:
```env
VITE_SUPABASE_URL=https://abxawbrpfhlddansbfzi.supabase.co
VITE_SUPABASE_ANON=your-anon-key
```

## 🎯 **Success Criteria:**

After fixing:
- ✅ Reset emails are sent successfully
- ✅ Reset links redirect to your app
- ✅ Password reset form loads properly
- ✅ Users can set new passwords
- ✅ Users are redirected to login

## 📞 **Next Steps:**

1. **Fix Supabase URL configuration**
2. **Update email template**
3. **Test forgot password feature**
4. **Check new reset link structure**
5. **Verify password reset works**

The main issue is the URL configuration in Supabase. Once that's fixed, the password reset should work properly!
