# Supabase Profiles Table Setup

This guide will help you set up the profiles table in Supabase to work with Google OAuth and email authentication.

## Step 1: Run the SQL Script

1. Go to your Supabase dashboard
2. Navigate to the **SQL Editor** section
3. Copy and paste the contents of `supabase-setup.sql` into the editor
4. Click **Run** to execute the script

## Step 2: Verify the Setup

After running the script, you should see:

1. **profiles table created** with the following columns:
   - `id` (UUID, primary key, references auth.users)
   - `email` (TEXT)
   - `name` (TEXT)
   - `role` (TEXT, default 'user')
   - `created_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

2. **Row Level Security (RLS) enabled** with policies for:
   - Users can view/update their own profile
   - Admins can view/update all profiles
   - Users can insert their own profile during registration

3. **Database trigger** that automatically creates a profile when a new user signs up

## Step 3: Test the Setup

1. Try signing in with Google OAuth
2. Check the **profiles** table in the **Table Editor** to see if a new profile was created
3. Verify that the profile contains the user's email and name from Google

## What the Fix Does

The updated `AuthContext.jsx` now:

1. **Properly handles profile creation** for Google OAuth users
2. **Adds a delay** to ensure Google user metadata is populated before creating the profile
3. **Improves error handling** and logging for debugging
4. **Uses the database trigger** as a backup method for profile creation

## Troubleshooting

If profiles are still not being created:

1. **Check the browser console** for any error messages
2. **Verify the database trigger** is working by checking the Supabase logs
3. **Ensure RLS policies** are correctly applied
4. **Check if the profiles table** exists and has the correct structure

## Manual Profile Creation (if needed)

If you need to manually create a profile for an existing user:

```sql
INSERT INTO public.profiles (id, email, name, role)
VALUES (
    'user-uuid-here',
    'user@example.com',
    'User Name',
    'user'
);
```

## Next Steps

After setting this up:

1. Test Google OAuth sign-in
2. Verify profiles are created automatically
3. Test admin functionality if you have admin users
4. Monitor the application for any authentication issues

The system should now automatically create profiles for both Google OAuth and email authentication users.
