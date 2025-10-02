import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUserStatus } from "../../hooks/useAuthHook";
import confetti from "canvas-confetti";

export default function CheckEmailPage() {
  const { email } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("Waiting for verification...");
  const [verified, setVerified] = useState(false);

  const { data, isSuccess } = useUserStatus(email, 5000);

  useEffect(() => {
    if (isSuccess && data?.isVerified) {
      setVerified(true);
      setStatus("Email verified successfully!");

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f97316", "#fb923c", "#facc15", "#34d399"], // orange theme + accent
      });
    }
  }, [isSuccess, data]);

  const handleContinue = () => {
    navigate("/account-setup");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center font-sans">
      <AnimatePresence mode="wait">
        {!verified ? (
          // 🔸 Waiting for verification
          <motion.div
            key="waiting"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="mx-auto flex items-center justify-center h-18 w-18 rounded-full bg-orange-100 mb-4">
              <Mail className="h-9 w-9 text-orange-500" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
              {status}
            </h1>

            <p className="text-lg text-gray-700 mb-2">We’ve sent a link to</p>
            <p className="text-lg font-semibold text-gray-900 mb-6">{email}</p>

            <p className="text-base text-gray-500 mb-10 max-w-md">
              Please click the link inside the email to activate your account.
              If you don’t see it, check your spam folder.
            </p>

            <div className="flex items-center justify-center text-md font-medium text-gray-500 mb-10">
              <Loader2 className="animate-spin mr-2 h-5 w-5 text-orange-500" />
              Waiting for verification...
            </div>

            <div className="space-y-3">
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-base tracking-wide transition">
                Resend verification email
              </button>
              <p className="text-sm text-gray-400">
                Didn’t get the email? Try again in a few minutes.
              </p>
            </div>
          </motion.div>
        ) : (
          // ✅ Success state
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center"
          >
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
              <CheckCircle2 className="h-12 w-12 text-orange-500" />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
              {status}
            </h1>

            <p className="text-lg text-gray-700 mb-2">
              Your email{" "}
              <span className="font-semibold text-gray-900">{email}</span> has
              been verified.
            </p>

            <p className="text-base text-gray-500 mb-8 max-w-md">
              You’re all set! Let’s finish setting up your account.
            </p>

            <button
              onClick={handleContinue}
              className="px-8 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-base tracking-wide transition"
            >
              Continue
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
