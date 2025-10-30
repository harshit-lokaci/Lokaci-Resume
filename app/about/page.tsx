import React from "react";
import Hero from "./components/Hero";
import Header from "../components/layout/Header";
import MetricsSection from "./components/Metrics";
import Footer from "../components/layout/Footer";
import PhilosophySection from "./components/Philosophy";
import CTASection from "../components/home/CTA";
import FAQSection from "./components/FAQs";

const AboutPage = () => {

  return (
    <>
      <Header />
      <Hero />
      <MetricsSection />
      <PhilosophySection />
      <FAQSection/>
      <CTASection />
      <Footer />
    </>
  );
};

export default AboutPage;
