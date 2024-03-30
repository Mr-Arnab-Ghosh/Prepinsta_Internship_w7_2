import React from 'react'
import Hero from '../HeroSection/Hero'
import serviceImg_var from "../../assets/"

function Service() {
  return (
    <>
        <Hero cName="hero" 
            heroImg={serviceImg_var}
            title="Service" 
            btnClass="hide"
        />
    </>
  )
}

export default Service