import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Briefcase, Building2 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import ThemeToggle from '../../components/ThemeToggle';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import GridMotion from '../../components/GridMotion';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^[0-9]{10}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [userFname, setUserFname] = useState("");
  const [userLname, setUserLname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
  });

  const items = [
  'Item 1',
  <div key='jsx-item-1'>Custom JSX Content</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Item 2',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'Item 4',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Item 5',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'Item 7',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Item 8',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'Item 10',
  <div key='jsx-item-3'>Custom JSX Content</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Item 11',
  <div key='jsx-item-2'>Custom JSX Content</div>,
  'Item 13',
  <div key='jsx-item-4'>Custom JSX Content</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'Item 14',
  // Add more items as needed
];
  const userRef = useRef(null);

  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, []);

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      const timer = setTimeout(() => {
        setErrors({ fname: "", lname: "", phone: "", email: "", password: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors({ fname: "", lname: "", phone: "", email: "", password: "" });

    let hasError = false;
    const newErrors = { fname: "", lname: "", phone: "", email: "", password: "" };

    if (!USER_REGEX.test(userFname)) {
      newErrors.fname = "Invalid first name (4–24 chars)";
      hasError = true;
    }
    if (!USER_REGEX.test(userLname)) {
      newErrors.lname = "Invalid last name (4–24 chars)";
      hasError = true;
    }
    if (!PHONE_REGEX.test(userPhone)) {
      newErrors.phone = "Invalid phone number (10 digits)";
      hasError = true;
    }
    if (!EMAIL_REGEX.test(userEmail)) {
      newErrors.email = "Invalid email address";
      hasError = true;
    }
    if (!PWD_REGEX.test(userPassword)) {
      newErrors.password =
        "Password must be 8–24 chars with upper, lower, number, special (!@#$%)";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    console.log({
      userFname,
      userLname,
      userPhone,
      userEmail,
      userPassword,
      role,
    });

    setUserFname("");
    setUserLname("");
    setUserPhone("");
    setUserEmail("");
    setUserPassword("");
    navigate("/login");
  };

  const handleCancel = () => navigate("/");

  const roleOptions = [
    { id: "user", label: t('user') || "User", icon: <User className="w-5 h-5" /> },
    { id: "worker", label: t('worker') || "Worker", icon: <Briefcase className="w-5 h-5" /> },
    { id: "leader", label: t('groupLeader') || "Group Leader", icon: <Users className="w-5 h-5" /> },
    { id: "ngo", label: t('ngo') || "NGO", icon: <Building2 className="w-5 h-5" /> },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-gray-800 p-4 transition-colors duration-300">
      


<GridMotion items={items} />
      {/* Theme and Language Switcher */}
      <div className='absolute top-4 right-4 flex gap-3 z-50'>
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      
      <motion.form
        onSubmit={submitHandler}
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-xl p-10 flex flex-col items-center border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/pro1.png"
            alt="avatar"
            className="h-20 w-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>

        <h1 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {t('createAccount') || 'Create Your Account'}
        </h1>

        {/* Role Selection */}
        <div className="flex gap-3 mb-6 flex-wrap justify-center">
          {roleOptions.map((opt) => (
            <motion.button
              key={opt.id}
              type="button"
              onClick={() => setRole(opt.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 ${
                role === opt.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600"
              }`}
            >
              {opt.icon}
              {opt.label}
            </motion.button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-3 w-full text-lg">
          <label className="text-gray-700 dark:text-gray-300">{t('firstName')}</label>
          <input
            ref={userRef}
            value={userFname}
            onChange={(e) => setUserFname(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            placeholder={t('firstNamePlaceholder')}
          />
          {errors.fname && <p className="text-red-500 text-sm -mt-2">{errors.fname}</p>}

          <label className="text-gray-700 dark:text-gray-300">{t('lastName')}</label>
          <input
            value={userLname}
            onChange={(e) => setUserLname(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            placeholder={t('lastNamePlaceholder')}
          />
          {errors.lname && <p className="text-red-500 text-sm -mt-2">{errors.lname}</p>}

          <label className="text-gray-700 dark:text-gray-300">{t('phone')}</label>
          <input
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            placeholder={t('phonePlaceholder')}
            type="number"
          />
          {errors.phone && <p className="text-red-500 text-sm -mt-2">{errors.phone}</p>}

          <AnimatePresence mode="wait">
            {role === "ngo" && (
              <motion.div
                key="ngo-field"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <label className="text-gray-700 dark:text-gray-300">{t('organizationName') || 'Organization Name'}</label>
                <input
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm w-full mt-2"
                  placeholder={t('ngoPlaceholder') || 'Enter NGO name'}
                />
              </motion.div>
            )}

            {role === "leader" && (
              <motion.div
                key="group-field"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <label className="text-gray-700 dark:text-gray-300">{t('groupName') || 'Group Name'}</label>
                <input
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm w-full mt-2"
                  placeholder={t('groupPlaceholder') || 'Enter your group name'}
                />
              </motion.div>
            )}

            {role === "worker" && (
              <motion.div
                key="skill-field"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <label className="text-gray-700 dark:text-gray-300">{t('primarySkill') || 'Primary Skill'}</label>
                <input
                  className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm w-full mt-2"
                  placeholder={t('skillPlaceholder') || 'e.g., Electrician, Plumber'}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <label className="text-gray-700 dark:text-gray-300">{t('email')}</label>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            placeholder={t('emailPlaceholder')}
            type="email"
          />
          {errors.email && <p className="text-red-500 text-sm -mt-2">{errors.email}</p>}

          <label className="text-gray-700 dark:text-gray-300">{t('password')}</label>
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
            placeholder={t('passwordPlaceholder')}
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm -mt-2">{errors.password}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex mt-6 gap-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-400 shadow active:scale-95 transition-all"
          >
            {t('submit')}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-2xl hover:bg-gray-400 dark:hover:bg-gray-500 shadow active:scale-95 transition-all"
          >
            {t('cancel')}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Register;
