import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import EmailEntryPage from "../components/signup/EmailEntryPage";
import PasswordEntryPage from "../components/signup/PasswordEntryPage";
import CheckEmailPage from "../components/signup/CheckEmailPage";
import VerifyEmailPage from "../components/signup/VerifyEmailPage";
import AccountSetup from "../components/signup/AccountSetupPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup/email" element={<EmailEntryPage />} />
      <Route path="/signup/password/:email" element={<PasswordEntryPage />} />
      <Route path="/check-email/:email" element={<CheckEmailPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/account-setup" element={<AccountSetup />} />
    </Routes>
  );
};

export default AppRoutes;
