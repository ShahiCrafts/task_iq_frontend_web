import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e2a47] text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h2 className="text-white text-2xl font-bold">TaskIQ</h2>
            </div>
            <p className="text-gray-300 text-[16px] leading-relaxed mb-1">
              TaskIQ helps teams and individuals organize, track, and complete
              their work seamlessly with smart task management.
            </p>
            <p className="text-gray-400 text-[16px]">
              Trusted by 10,000+ teams worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-[18px]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[16px]">
              {["Home", "Features", "Pricing", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-[18px]">
              Resources
            </h3>
            <ul className="space-y-2 text-[16px]">
              {["Blog", "Help Center", "Guides", "API Docs", "Community"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media + Awards */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-[18px]">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="hover:text-orange-400 transition-transform transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-transform transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-transform transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition-transform transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <h3 className="text-white font-semibold mb-2 text-[18px]">
              Awards
            </h3>
            <ul className="space-y-1 text-gray-400 text-[16px]">
              <li className="flex items-center gap-2">
                Best Productivity App 2023
              </li>
              <li className="flex items-center gap-2">Top Rated SaaS 2022</li>
              <li className="flex items-center gap-2">
                Excellence in UI/UX 2021
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-[16px] text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} TaskIQ. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
            {["Privacy Policy", "Terms & Conditions", "Cookies", "Sitemap"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-orange-400 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
