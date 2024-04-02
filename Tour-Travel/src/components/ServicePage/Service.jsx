import React from 'react'
import Hero from '../HeroSection/Hero'
import serviceImg_var from "../../assets/night.webp"
import Trip from '../LandingPage/Trips/Trip'

function Service() {
  return (
    <>
        <Hero cName="hero" 
            heroImg={serviceImg_var}
            title="Service" 
            btnClass="hide"
        />
        <Trip/>
    </>
  )
}

export default Service