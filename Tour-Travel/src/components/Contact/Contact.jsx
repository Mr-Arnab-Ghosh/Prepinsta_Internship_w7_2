import React from 'react'
import Hero from '../HeroSection/Hero'
import contactImg_var from "../../assets/2.jpg"

function Contact() {
  return (
    <>
        <Hero cName="hero" 
            heroImg={contactImg_var}
            title="Contact"  
            btnClass="hide"
        />
    </>
  )
}

export default Contact