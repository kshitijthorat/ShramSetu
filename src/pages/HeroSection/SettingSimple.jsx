import React from "react";
import { useTranslation } from "react-i18next";

const Setting = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <div className="p-6 min-h-screen bg-gray-100 text-gray-800 w-full flex flex-col items-center ">
        <div className="border-1 w-full max-w-lg flex items-center justify-center gap-4">
      <h2>🌐 Change Language</h2>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className="border rounded px-3 py-2 max-w-lg"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="mr">मराठी</option>
      </select>
        </div>
    </div>
    </div>
  );
};

export default Setting;
