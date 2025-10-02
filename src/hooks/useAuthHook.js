import { useMutation, useQuery } from "@tanstack/react-query";
import {
  loginService,
  signupService,
  verifyEmailService,
  checkUserStatusService
} from "../services/authService";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => loginService(email, password),
    mutationKey: ["login"],
    onSuccess: (data) => {
      console.log("Login success:", data);
    },
    onError: (err) => {
      console.error("Login failed:", err.message);
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: ({ email, password }) => signupService(email, password),
    mutationKey: ["signup"],
    onSuccess: (data) => {
      console.log("Signup success:", data);
    },
    onError: (err) => {
      console.error("Signup failed:", err.message);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: ({ token, email }) => verifyEmailService(token, email),
    mutationKey: ["verifyEmail"],
    onSuccess: (data) => {
      console.log("Email verification success:", data);
    },
    onError: (err) => {
      console.error("Email verification failed:", err.message);
    },
  });
};

export const useUserStatus = (email, interval = 5000) => {
  return useQuery({
    queryKey: ["userStatus", email],
    queryFn: () => checkUserStatusService(email),
    enabled: !!email,
    refetchInterval: interval,
    refetchOnWindowFocus: true,
  });
};
