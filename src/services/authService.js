import { login } from "../api/auth/login";
import { signup } from "../api/auth/signup";
import { verifyEmail, getUserStatus } from "../api/auth/verifyEmail";
import { accountSetup } from "../api/auth/accountSetup";

export const loginService = async (email, password) => {
  try {
    const response = await login(email, password);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Login failed!" };
  }
};

export const signupService = async (email, password) => {
  try {
    const response = await signup(email, password);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Signup failed!" };
  }
};

export const verifyEmailService = async (token, email) => {
  try {
    const response = await verifyEmail(token, email);
    return response;
  } catch (err) {
    throw err.response?.data || { message: "Email verification failed!" };
  }
};

export const checkUserStatusService = async (email) => {
  try {
    const response = await getUserStatus(email);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Failed to get user status!" };
  }
};

export const accountSetupService = async (fullName) => {
  try {
    const response = await accountSetup(fullName);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to setup account!" };
  }
};
