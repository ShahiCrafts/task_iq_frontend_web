import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useSignup } from "../../hooks/useAuthHook";

export default function PasswordEntryPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { email } = useParams();
  const navigate = useNavigate();
  const { mutate: signup, isPending, isSuccess, isError, error } = useSignup();

  useEffect(() => {
    if (isSuccess) {
      navigate(`/check-email/${encodeURIComponent(email)}`);
    }
  }, [isSuccess, navigate, email]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      signup({ email, password });
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Enter your password
          </h1>
          <p className="text-gray-500 text-md pt-1">
            Signing up with your email
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                value={email || ""}
                disabled
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed text-gray-700 text-sm md:text-base pr-12"
              />
              <button
                type="button"
                onClick={() =>
                  navigate(`/signup/email?email=${encodeURIComponent(email)}`)
                }
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {isError && (
              <p className="text-red-500 text-xs mt-2">{error.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 rounded-lg text-sm md:text-base hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            disabled={isPending}
          >
            {isPending ? "Continuing..." : "Continue"}
          </button>
        </form>
        <p className="mt-6 text-center text-md text-gray-500">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            Log in
          </a>
        </p>
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-md text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button className="w-full bg-white text-gray-700 font-semibold py-2 rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors flex items-center justify-center gap-2 text-sm md:text-base">
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
