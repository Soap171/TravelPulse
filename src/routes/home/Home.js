import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Section from "../../components/image-section/Section";
import SectionImg from "../../assets/images/TravelPulse (2).jpg";
import AboutSection from "../../components/about/AboutSection";
import Quiz from "../../components/Quiz/Quiz";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        classType="hero-section-home "
        header="Welcome To TravelPulse"
        text="Ease | Cheap | Affordable Travels With Us"
        btnLink="#start"
        btnTxt="Start Now"
      />
      <Section
        img={SectionImg}
        header="New To Traveling ?"
        txt="Don't Worry TravelPulse Got You"
        listItems={[
          {
            header: "What is TravelPulse ?",
            text: "Services From Us as TravelPuls",
          },

          {
            header: "Why You Choose It ?",
            text: "Because We Provide All The Services Regarding Travels ",
          },
          {
            header: "What Type Of Services We Provide",
            text: "Consultant | Accomadations | Medical",
          },
        ]}
        btnLink="/service"
        btnTxt="Check out"
      />
      <AboutSection />
      <Quiz />
      <Footer />
    </div>
  );
}

export default Home;
