import React from 'react'
import Hero from '../HeroSection/Hero'
import aboutImg_var from "../../assets/night.webp"
import AboutUs from './AboutData/AboutUs'

function About() {
  return (
    <>
        <Hero cName="hero-mid"
            heroImg={aboutImg_var} 
            title="About"  
            btnClass="hide"
        />
        <AboutUs/>
    </>
  )
}

export default About