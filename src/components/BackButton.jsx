import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium 
                 hover:bg-blue-600 active:scale-95 transition-all shadow-md
                 fixed top-6 right-6 z-50 w-fit flex items-center gap-2"
    >
         <FaArrowLeft className="text-2xl" /> 
         <span>Back</span>
    </button>
  );
};

export default BackButton;