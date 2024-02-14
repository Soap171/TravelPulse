import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import ServiceArea from "../../components/services-section/ServiceArea";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        classType="hero-section-services "
        header="What TravelPulse Offfer For Customers "
        text="Here Are The Top Facilities That We Offering To Our Customers As TravelPulse"
      />
      <ServiceArea />
      <Footer />
    </div>
  );
}

export default Service;
