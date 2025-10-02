import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EmailEntryPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    navigate(`/signup/password/${encodeURIComponent(email)}`);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-6 left-6">
        <img
          src="/path-to-your-logo.png"
          alt="Brand Logo"
          className="h-10 w-auto"
        />
      </div>

      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Create your account
            </h1>
            <p className="text-gray-500 text-md pt-1">
              Start your journey today
            </p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user.taskiq@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Sign In link */}
        <p className="mt-6 text-center text-md text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            Sign in
          </a>
        </p>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-md text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full bg-white text-gray-700 font-semibold py-2 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors flex items-center justify-center">
          <FcGoogle className="h-5 w-5 mr-2" />
          <span>Continue with Google</span>
        </button>

        <p className="mt-4 text-center text-sm text-gray-400 px-4">
          By clicking continue, you agree to our{" "}
          <a
            href="#"
            className="underline font-medium text-orange-500 hover:text-orange-600"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="underline font-medium text-orange-500 hover:text-orange-600"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
