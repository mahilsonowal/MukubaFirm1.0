-- Debug script to check profiles table and fix any issues

-- 1. Check table structure
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default
FROM information_schema.columns 
WHERE table_name = 'profiles' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Check RLS policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'profiles';

-- 3. Check if RLS is enabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE tablename = 'profiles';

-- 4. Check current user permissions
SELECT current_user, session_user;

-- 5. Check if the profiles table has the correct columns
SELECT 
  id,
  email,
  name,
  role,
  created_at,
  updated_at,
  totp_secret,
  totp_enabled
FROM public.profiles 
LIMIT 5;

-- 6. Check RLS policy for authenticated users
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'profiles' 
AND policyname LIKE '%authenticated%';

-- 7. Test update permission (run this as the authenticated user)
-- This should work if RLS is properly configured
UPDATE public.profiles 
SET totp_enabled = true, 
    totp_secret = 'TEST123',
    updated_at = NOW()
WHERE id = auth.uid()
RETURNING id, totp_enabled, totp_secret, updated_at;
