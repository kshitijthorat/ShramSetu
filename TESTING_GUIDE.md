# Testing Guide for ShramSetu

## Quick Test Scenario

### Step 1: Register Users (Test all 4 roles)

#### Test User 1 - Worker
```
First Name: Rama
Last Name: Kumar
Phone: 9876543210
Email: rama@test.com
Password: Test@123
Role: Daily Worker
City: Pune
Pincode: 411001
Skill: Electrician
Experience: 5
```

#### Test User 2 - Contractor
```
First Name: Anita
Last Name: Sharma
Phone: 9876543211
Email: anita@test.com
Password: Test@123
Role: Contractor/User
City: Mumbai
Pincode: 400001
```

#### Test User 3 - Group Leader
```
First Name: Suresh
Last Name: Patil
Phone: 9876543212
Email: suresh@test.com
Password: Test@123
Role: Group Leader
City: Nashik
Pincode: 422001
Group Name: Shakti Builders
Team Skill: Mason
```

#### Test User 4 - NGO
```
First Name: Helping
Last Name: Hands
Phone: 9876543213
Email: help@ngo.com
Password: Test@123
Role: NGO
City: Pune
Pincode: 411002
NGO Name: Helping Hands Foundation
```

### Step 2: Login & Verify Navigation

1. **Login as Rama (Worker)**
   - Phone: 9876543210
   - Password: Test@123
   - Expected: Navigate to `/workerhome`
   - Check: User name "Rama" appears in navbar

2. **Logout & Login as Anita (Contractor)**
   - Phone: 9876543211
   - Expected: Navigate to `/userhome`
   - Check: User name "Anita" appears in navbar

3. **Logout & Login as Suresh (Group Leader)**
   - Phone: 9876543212
   - Expected: Navigate to `/leaderhome`
   - Check: User name "Suresh" appears in navbar

4. **Logout & Login as NGO**
   - Phone: 9876543213
   - Expected: Navigate to `/ngohome`
   - Check: User name "Helping" appears in navbar

### Step 3: Test Search & Filter

1. Go to User/Worker/Leader/NGO home
2. Try searching:
   - "Electrician" - should show posts with electrician role
   - "Pune" - should show posts from Pune
   - "411001" - should filter by pincode

3. Use filters:
   - Select "Looking for Work"
   - Enter location "Mumbai"
   - Check results update
   - Click "Clear Filters"

### Step 4: Create Posts

#### As Worker (Rama)
```
Type: Looking for Work
Skill: Electrician
Title: Experienced Electrician Available
Description: 5 years experience in residential and commercial wiring
City: Pune
Pincode: 411001
Experience: 5
Availability: Immediate
Wage: 800
Contact: 9876543210
```

#### As Contractor (Anita)
```
Type: Hiring Worker
Skill: Plumber
Title: Plumber Needed for Bathroom Work
Description: Need reliable plumber for 2 weeks renovation project
City: Mumbai
Pincode: 400001
Availability: Within 1 week
Wage: 900
Contact: 9876543211
```

#### As Group Leader (Suresh)
```
Type: Group Available
Skill: Mason
Title: Skilled Mason Team Available
Description: Team of 8 experienced masons available for construction
City: Nashik
Pincode: 422001
Experience: 7
Availability: Immediate
Contact: 9876543212
```

### Step 5: Verify Language Switch

1. Go to Registration page
2. Click language switcher
3. Change to हिन्दी
4. Verify labels change
5. Change to मराठी
6. Verify labels change again
7. Go back to English

### Step 6: Test Settings Page

1. Click on user profile in navbar
2. Navigate to Settings (if linked)
3. Or go to `/settings`
4. Change language
5. Check notifications would be here
6. Click "Back to Home"

## Common Issues & Solutions

### Issue 1: User data not persisting
**Solution**: Check browser localStorage - should see 'users' and 'currentUser' keys

### Issue 2: Navigation not working after login
**Solution**: Clear localStorage and try again
```javascript
localStorage.clear()
```

### Issue 3: Search not showing results
**Solution**: Make sure posts array has data with matching fields

### Issue 4: Role-specific pages not loading
**Solution**: Check if routes are properly defined in App.jsx

## Browser Console Tests

Open browser console (F12) and run:

```javascript
// Check registered users
console.log(JSON.parse(localStorage.getItem('users')))

// Check current user
console.log(JSON.parse(localStorage.getItem('currentUser')))

// Check posts
console.log(JSON.parse(localStorage.getItem('posts')))

// Clear all data
localStorage.clear()
```

## Expected Behavior Summary

✅ Registration stores user in localStorage
✅ Login validates credentials
✅ Role-based navigation works
✅ User name appears in navbar
✅ Search filters posts correctly
✅ Filters work independently and combined
✅ Posts are created and stored
✅ Language switching works on forms
✅ All pages are responsive
✅ Animations are smooth

## Performance Checklist

- [ ] Pages load in < 1 second
- [ ] Animations are smooth (60fps)
- [ ] No console errors
- [ ] Forms validate properly
- [ ] Search responds quickly
- [ ] Filters update instantly
- [ ] Navigation is seamless

## Accessibility Checklist

- [ ] All forms have labels
- [ ] Buttons have proper text/aria-labels
- [ ] Tab navigation works
- [ ] Colors have good contrast
- [ ] Text is readable
- [ ] Mobile responsive

---

**Happy Testing! 🚀**
