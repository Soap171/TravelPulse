import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        classType="hero-section-contact "
        header="Get To Us Within a Blink Of a Eye "
        text="Whenever You Came Across a Problem Feel Free To Contact Us"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
