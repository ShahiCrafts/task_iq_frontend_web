import React, { useEffect } from "react";
import { X } from "lucide-react";

const VideoPlayerModal = ({ isOpen, onClose, videoSrc }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>

      <div
        className="relative w-full max-w-2xl bg-black rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 scale-100 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 bg-gray-900 bg-opacity-50 rounded-full p-2 transition-colors duration-200"
          aria-label="Close video player"
        >
          <X className="w-6 h-6" />
        </button>

        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default VideoPlayerModal;