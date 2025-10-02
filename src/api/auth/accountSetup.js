import api from "./api";

export const accountSetup = async (fullName) => {
  const response = await api.post("/setup-account", { fullName });
  return response;
};
