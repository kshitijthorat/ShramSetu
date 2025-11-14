import React from 'react'

const Registerformtemplete = () => {
  return (
    <div>
        <div className="flex items-center justify-center h-full p-4">
      
      <motion.form
        onSubmit={submitHandler}
        className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-2xl p-10 flex flex-col items-center border border-gray-200 max-h-[90vh] overflow-y-auto"
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

        <h1 className="text-2xl font-semibold text-blue-600 mb-4">
          {t('createAccount') || 'Create Your Account'}
        </h1>

        {/* Role Selection */}
        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          {roleOptions.map((opt) => (
            <motion.button
              key={opt.id}
              type="button"
              onClick={() => setRole(opt.id)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-xl border transition-all duration-200 ${
                role === opt.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {opt.icon}
              {opt.label}
            </motion.button>
          ))}
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-2 w-full text-base">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 text-sm">{t('firstName') || 'First Name'}</label>
              <input
                ref={userRef}
                value={userFname}
                onChange={(e) => setUserFname(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="First name"
              />
              {errors.fname && <p className="text-red-500 text-xs mt-1">{errors.fname}</p>}
            </div>

            <div>
              <label className="text-gray-700 text-sm">{t('lastName') || 'Last Name'}</label>
              <input
                value={userLname}
                onChange={(e) => setUserLname(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="Last name"
              />
              {errors.lname && <p className="text-red-500 text-xs mt-1">{errors.lname}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 text-sm">{t('phone') || 'Phone'}</label>
              <input
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="10 digit mobile"
                type="tel"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-gray-700 text-sm">{t('email') || 'Email'}</label>
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="your@email.com"
                type="email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 text-sm">City</label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="e.g., Pune"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="text-gray-700 text-sm">Pincode</label>
              <input
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                placeholder="6 digits"
                type="tel"
                maxLength="6"
              />
              {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {role === "worker" && (
              <motion.div
                key="worker-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <label className="text-gray-700 text-sm">{t('primarySkill') || 'Primary Skill'}</label>
                <select
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                >
                  <option value="">Select your skill</option>
                  {skillOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.skill && <p className="text-red-500 text-xs mt-1">{errors.skill}</p>}
                
                <label className="text-gray-700 text-sm">Experience (years)</label>
                <input
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                  placeholder="0"
                  type="number"
                  min="0"
                />
              </motion.div>
            )}

            {role === "leader" && (
              <motion.div
                key="leader-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <label className="text-gray-700 text-sm">{t('groupName') || 'Group Name'}</label>
                <input
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                  placeholder="Enter your group name"
                />
                {errors.groupName && <p className="text-red-500 text-xs mt-1">{errors.groupName}</p>}
                
                <label className="text-gray-700 text-sm">Team Skill</label>
                <select
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                >
                  <option value="">Select team specialization</option>
                  {skillOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </motion.div>
            )}

            {role === "ngo" && (
              <motion.div
                key="ngo-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <label className="text-gray-700 text-sm">{t('organizationName') || 'Organization Name'}</label>
                <input
                  value={ngoName}
                  onChange={(e) => setNgoName(e.target.value)}
                  className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
                  placeholder="Enter NGO name"
                />
                {errors.ngoName && <p className="text-red-500 text-xs mt-1">{errors.ngoName}</p>}
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="text-gray-700 text-sm">{t('password') || 'Password'}</label>
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              className="border border-gray-300 rounded-xl p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
              placeholder="Strong password"
              type="password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mt-6 gap-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-400 shadow active:scale-95 transition-all"
          >
            {t('submit') || 'Register'}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-400 shadow active:scale-95 transition-all"
          >
            {t('cancel') || 'Cancel'}
          </button>
        </div>
      </motion.form>
    </div>
    </div>
  )
}

export default Registerformtemplete