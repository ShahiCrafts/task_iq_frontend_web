import api from "./api";

export const signup = async (email, password) => {
  const response = await api.post("/auth/register", { email, password });
  return response;
};
