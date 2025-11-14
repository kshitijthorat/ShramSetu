# User Authentication Guide - ShramSetu

## Current Login System

### Registration Process
When a user registers, they provide:
- **First Name**: Must be 3-24 characters, starting with a letter (e.g., "Kshitij")
- **Last Name**: Must be 3-24 characters, starting with a letter
- **Phone**: Must be exactly 10 digits (e.g., "9876543210")
- **Email**: Valid email format (e.g., "kshitij@example.com")
- **Password**: 8-24 characters with:
  - At least one uppercase letter (A-Z)
  - At least one lowercase letter (a-z)
  - At least one number (0-9)
  - At least one special character (!@#$%)
  - Example valid password: "Kshitij@123"
- **City**: Text (e.g., "Pune")
- **Pincode**: Exactly 6 digits (e.g., "411001")
- **Role-specific fields**:
  - Worker: Skill selection + Experience
  - Leader: Group Name + Team Skill
  - NGO: Organization Name

### Login Process
To login, users need:
- **Phone OR Email** (at least one must be provided)
- **Password** (same one used during registration)

**Important**: The login form does NOT ask for a first name - it only needs phone/email and password.

### Example Registration & Login Flow

#### Registration:
```
First Name: Kshitij
Last Name: Patil
Phone: 9876543210
Email: kshitij@example.com
Password: Kshitij@123
City: Pune
Pincode: 411001
Role: Worker
Skill: Electrician
Experience: 5
```

#### Login:
```
Phone: 9876543210 (OR Email: kshitij@example.com)
Password: Kshitij@123
```

## Error Message: "invalidFirstname"

If you're seeing "invalidFirstname" error:

1. **During Registration**: This means the first name doesn't meet the requirements:
   - Must start with a letter
   - Must be 3-24 characters long
   - Can contain letters, numbers, hyphens (-), and underscores (_)
   - ✅ Valid: "Kshitij", "Ram123", "Sita-kumari"
   - ❌ Invalid: "K" (too short), "12Kshitij" (starts with number), "K@" (special char not allowed)

2. **During Login**: The login form doesn't validate first names. If you see this error during login, you may be:
   - Entering the name in the Phone field (Phone expects 10 digits only)
   - Entering the name in the Email field (Email expects email format)

## How to Test the System

### Step 1: Register a User
1. Go to `/register`
2. Fill in all fields with valid data
3. Example valid data:
   - First Name: `Kshitij`
   - Last Name: `Patil`
   - Phone: `9876543210`
   - Email: `kshitij@example.com`
   - Password: `Kshitij@123`
   - City: `Pune`
   - Pincode: `411001`
4. Click "Register"

### Step 2: Login
1. Go to `/login`
2. Enter EITHER:
   - Phone: `9876543210` OR
   - Email: `kshitij@example.com`
3. Enter Password: `Kshitij@123`
4. Click "Login"
5. You should be redirected to the appropriate home page based on role

## Role-Based Navigation

After successful login, users are redirected based on their role:
- **User/Contractor** → `/userhome`
- **Worker** → `/workerhome`
- **Group Leader** → `/leaderhome`
- **NGO** → `/ngohome`

## Data Storage

Currently using **localStorage**:
- Registered users: `localStorage.getItem('users')`
- Current logged-in user: `localStorage.getItem('currentUser')`

## Common Issues & Solutions

### Issue 1: "Invalid phone number"
- **Solution**: Enter exactly 10 digits, no spaces, no country code
- ✅ Correct: `9876543210`
- ❌ Wrong: `+91 9876543210`, `98765 43210`

### Issue 2: "Invalid email"
- **Solution**: Use proper email format
- ✅ Correct: `user@example.com`
- ❌ Wrong: `user@`, `@example.com`, `user.example.com`

### Issue 3: Password error
- **Solution**: Include all required character types
- ✅ Correct: `Kshitij@123`, `Worker#2024`
- ❌ Wrong: `kshitij123` (no uppercase, no special), `KSHITIJ@` (no lowercase, no number)

### Issue 4: Login not working
- **Cause**: Credentials don't match registered user
- **Solution**: 
  1. Make sure you registered first
  2. Use the exact same phone/email and password
  3. Passwords are case-sensitive

### Issue 5: "invalidFirstname" during login
- **Cause**: Likely entering name in phone/email field
- **Solution**: 
  - In the **Phone** field, enter your 10-digit phone number (not your name)
  - In the **Email** field, enter your email address (not your name)
  - Your name is used only during registration, not login

## Validation Rules Summary

| Field | Regex/Rule | Example Valid | Example Invalid |
|-------|-----------|---------------|-----------------|
| First/Last Name | `/^[A-Za-z][A-Za-z0-9-_]{2,23}$/` | "Kshitij" | "K", "12Ram" |
| Phone | `/^[0-9]{10}$/` | "9876543210" | "98765", "+919876543210" |
| Email | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | "user@example.com" | "user@", "user" |
| Password | `/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/` | "Kshitij@123" | "kshitij", "KSHITIJ" |
| Pincode | `/^[0-9]{6}$/` | "411001" | "4110", "41100" |

## Need Help?

If you're still experiencing issues:
1. Clear your browser's localStorage: `localStorage.clear()` in browser console
2. Try registering a fresh user
3. Make sure you're using the correct field formats
4. Check browser console for error messages
