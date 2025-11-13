import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MorphingCard = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* 🔹 Card (Default view) */}
      <motion.div
        layoutId={`card-${post.id}`}
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex items-center gap-4 p-4">
          <img
            src={post.avatar}
            alt={post.name}
            className="w-12 h-12 rounded-full border border-gray-200"
          />
          <div>
            <motion.h2
              layoutId={`title-${post.id}`}
              className="font-semibold text-gray-800"
            >
              {post.name}
            </motion.h2>
            <p className="text-sm text-gray-500">{post.type}</p>
          </div>
        </div>
        <div className="px-4 pb-4">
          <motion.h3
            layoutId={`role-${post.id}`}
            className="text-base font-medium text-blue-600"
          >
            {post.role}
          </motion.h3>
          <motion.p
            layoutId={`desc-${post.id}`}
            className="text-gray-600 text-sm mt-1 line-clamp-2"
          >
            {post.description}
          </motion.p>
          <p className="text-xs text-gray-400 mt-2">{post.location}</p>
        </div>
      </motion.div>

      {/* 🔹 Expanded (Modal view) */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      layoutId={`card-${post.id}`}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        layoutId={`content-${post.id}`}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-lg w-full relative"
      >
        {/* Header Image / Avatar */}
        <div className="flex items-center gap-4 p-6 border-b">
          <img
            src={post.avatar}
            alt={post.name}
            className="w-14 h-14 rounded-full border border-gray-300"
          />
          <div>
            <motion.h2
              layoutId={`title-${post.id}`}
              className="text-xl font-semibold text-gray-900"
            >
              {post.name}
            </motion.h2>
            <p className="text-sm text-gray-500">{post.type}</p>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 bg-gray-100 rounded-full p-2 shadow hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-700" />
        </motion.button>

        {/* Body */}
        <div className="p-6">
          <motion.h3
            layoutId={`role-${post.id}`}
            className="text-lg font-medium text-blue-600"
          >
            {post.role}
          </motion.h3>
          <motion.p
            layoutId={`desc-${post.id}`}
            className="text-gray-700 mt-3 text-base leading-relaxed"
          >
            {post.description}
          </motion.p>
          <p className="text-sm text-gray-500 mt-4">📍 {post.location}</p>
          <p className="text-xs text-gray-400 mt-2 italic">
            Posted {post.posted}
          </p>

          {/* 🔹 Contact Button + Hidden Details */}
          <ConfirmationSection post={post} />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default MorphingCard;
const ConfirmationSection = ({ post }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Example data — later this can come from backend (Spring Boot)
  const contactInfo = {
    phone: "+91 98765 43210",
    email: "rahul.patil@example.com",
  };

  return (
    <div className="mt-6">
      {!isConfirmed ? (
        <>
          <p className="text-sm text-gray-600 mb-3">
            To view {post.name}'s contact details, please confirm your interest in this job post.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsConfirmed(true)}
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-500 transition-all duration-200"
          >
            ✅ Confirm Interest
          </motion.button>
        </>
      ) : !showContact ? (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowContact(true)}
          className="w-full bg-blue-600 text-white py-2 mt-4 rounded-xl hover:bg-blue-500 transition-all duration-200"
        >
          📞 View Contact Details
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 p-4 mt-4 rounded-xl border"
        >
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p className="text-sm text-gray-700 mt-1">
            <strong>Email:</strong> {contactInfo.email}
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContact(false)}
            className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded-xl hover:bg-gray-300 transition-all"
          >
            Hide Contact Info
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};
