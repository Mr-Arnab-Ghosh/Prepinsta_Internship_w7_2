import React from 'react'
import Hero from '../HeroSection/Hero'
import contactImg_var from "../../assets/2.webp"
import ContactForm from './ContactForm/ContactForm'

function Contact() {
  return (
    <>
        <Hero cName="hero" 
            heroImg={contactImg_var}
            title="Contact"  
            btnClass="hide"
        />
        <ContactForm/>
    </>
  )
}

export default Contact