import React from 'react'
import Hero from '../Service/Hero'
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="md:px-12 px-4 sm:px-12 2xl:px-0  2xl:mx-[20%] 3xl:mx-[25%] 4xl:mx-[30%] 5xl:mx-[35%]">
      <Hero
        heading1="Home"
        heading2="contact us"
        subheading="Get In Touch With Us"
        description="We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully."
        // img="/Rectangle 4406.png"
      ></Hero>
      <ContactForm></ContactForm>
    </div>
  );
}

export default ContactUs
