import React, { useState, useEffect } from "react";
import { Star, ArrowRight, Play, X } from "lucide-react";
import Navbar from "./Navbar";
import VideoPlayerModal from "./VideoPlayerModal";

export default function TaskIQHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  return (
    <div className="bg-gradient-to-br w-full from-orange-50 via-red-50 to-pink-50 relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar isVisible={isVisible} />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 pt-20 lg:pt-24 pb-20 flex flex-col items-center justify-between max-w-full lg:max-w-7xl lg:flex-row">
        <div
          className={`transition-opacity duration-700 w-full max-w-xl lg:max-w-2xl text-center lg:text-left ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">
              Trusted by 50k+ teams
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            A collaborative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Time Tracking
            </span>{" "}
            that you Need
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            Optimize team performance with intuitive time tracking that
            simplifies workflows and ensures every project stays on schedule.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 flex items-center justify-center space-x-2">
              <span>Start 14 Days trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={handleOpenVideo}
              className="bg-white text-gray-700 px-8 py-3 rounded-xl font-semibold border border-gray-200 hover:border-orange-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5 text-orange-500" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-gray-900">50k+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">App Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 flex items-center space-x-2 w-full justify-center lg:justify-end">
          <div className="w-40 sm:w-48 md:w-64 lg:w-80 max-w-xs md:max-w-none">
            <img
              src="src/assets/mockup_first.png"
              alt="Mobile 1"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          <div className="w-40 sm:w-48 md:w-64 lg:w-80 max-w-xs md:max-w-none">
            <img
              src="src/assets/mockup_second.png"
              alt="Mobile 2"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>

      <VideoPlayerModal
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        videoSrc="src/assets/videos/demo.mp4"
      />
    </div>
  );
}
