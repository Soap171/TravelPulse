import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import AboutSection from "../../components/about/AboutSection";
import AboutCards from "../../components/about-card/AboutCards";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        classType="hero-section-about "
        header="Get To Know About TravelPulse"
        text="Let us Hear After You Learn About TravelPulse"
      />
      <AboutSection />
      <AboutCards />
      <Footer />
    </div>
  );
}

export default About;
