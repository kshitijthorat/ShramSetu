import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
        <Languages className="w-5 h-5 text-gray-800 dark:text-gray-200" />
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 uppercase">
          {i18n.language}
        </span>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          onClick={() => changeLanguage('en')}
          className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg ${
            i18n.language === 'en' ? 'bg-blue-50 dark:bg-blue-900' : ''
          }`}
        >
          <span className="text-gray-800 dark:text-gray-200">English</span>
        </button>
        <button
          onClick={() => changeLanguage('hi')}
          className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
            i18n.language === 'hi' ? 'bg-blue-50 dark:bg-blue-900' : ''
          }`}
        >
          <span className="text-gray-800 dark:text-gray-200">हिंदी</span>
        </button>
        <button
          onClick={() => changeLanguage('mr')}
          className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg ${
            i18n.language === 'mr' ? 'bg-blue-50 dark:bg-blue-900' : ''
          }`}
        >
          <span className="text-gray-800 dark:text-gray-200">मराठी</span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
