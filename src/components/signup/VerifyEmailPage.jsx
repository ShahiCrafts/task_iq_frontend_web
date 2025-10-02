import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyEmail } from "../../hooks/useAuthHook";

export default function VerifyEmailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");
  const email = query.get("email");

  const { mutate, isSuccess, isError } = useVerifyEmail();

  useEffect(() => {
    if (token && email) {
      mutate({ token, email });
    }
  }, [token, email, mutate]);

  useEffect(() => {
    if (isSuccess || isError) {
      try {
        window.close();
      } catch (e) {
        navigate("/check-email");
      }
    }
  }, [isSuccess, isError, navigate]);

  return null;
}
