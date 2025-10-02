import api from "./api";

export const verifyEmail = async (token, email) => {
  const response = await api.get(
    `/auth/verify-email?token=${encodeURIComponent(
      token
    )}&email=${encodeURIComponent(email)}`
  );
  return response;
};

export const getUserStatus = async (email) => {
  const response = await api.get(
    `/auth/user-status?email=${encodeURIComponent(email)}`
  );
  return response;
};
