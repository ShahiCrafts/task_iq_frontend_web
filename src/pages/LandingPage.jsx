import React from "react";
import Hero from "../components/webpage/TaskIQHero";
import { Contact } from "lucide-react";
import Features from "../components/webpage/Features";
import Pricing from "../components/webpage/Pricing";
import Contacts from "../components/webpage/Contacts";
import Footer from "../components/webpage/Footer";
import EmailEntryPage from "../components/signup/EmailEntryPage";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Contacts />
      <Footer />
    </>
  );
}
