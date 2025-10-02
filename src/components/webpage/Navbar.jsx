import React from "react";
import { CheckCircle } from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function Navbar({ isVisible }) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="w-full bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Task IQ</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Demos
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex space-x-4">
            <button className="text-orange-500 hover:text-orange-600 transition-colors">
              Login
            </button>
            <button
              onClick={() => navigate("/signup/email")}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-7 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
