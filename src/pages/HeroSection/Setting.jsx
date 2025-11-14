import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Bell, Shield, User, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showPhone: false,
    showEmail: true,
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePrivacyToggle = (key) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and settings</p>
        </div>

        {/* Settings Grid */}
        <div className="space-y-6">
          
          {/* Language Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold text-gray-800">Language</h2>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { code: 'en', label: 'English', flag: '🇬🇧' },
                { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
                { code: 'mr', label: 'मराठी', flag: '🇮🇳' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    i18n.language === lang.code
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{lang.flag}</div>
                  <div className="font-medium text-gray-700">{lang.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => navigate('/userhome')}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
