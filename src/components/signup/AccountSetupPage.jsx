import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function AccountSetup() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    navigate(
      `/signup/password/${encodeURIComponent(email)}?name=${encodeURIComponent(
        fullName
      )}`
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img
          src="/path-to-your-logo.png"
          alt="Brand Logo"
          className="h-10 w-auto"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm bg-white p-6"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🚀</div>
          <h1 className="text-2xl font-bold text-gray-900">
            Let’s personalize your account
          </h1>
          <p className="text-gray-500 text-md pt-1">
            Almost done! Just tell us your full name.
          </p>

          {email && (
            <p className="mt-2 text-sm text-gray-400">
              Setting up for <span className="font-medium">{email}</span>
            </p>
          )}
        </div>

        {/* Full Name form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Saugat Shahi"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none transition-colors"
          >
            Continue
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
