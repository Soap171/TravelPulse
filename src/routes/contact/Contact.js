import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        classType="hero-section-contact "
        header="Get To Us Within a Blink Of a Eye "
        text="Whenever You Came Across a Problem Feel Free To Contact Us"
      />
    </div>
  );
}

export default Contact;
