import React from 'react'
import Hero from '../HeroSection/Hero'
import aboutImg_var from "../../assets/night.jpg"

function About() {
  return (
    <>
        <Hero cName="hero-mid"
            heroImg={aboutImg_var} 
            title="About"  
            btnClass="hide"
        />
    </>
  )
}

export default About