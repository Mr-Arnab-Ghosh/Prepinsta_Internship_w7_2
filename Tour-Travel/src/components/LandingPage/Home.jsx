import React from "react";
import Hero from "../HeroSection/Hero";
import Destination from "./Destinations/Destination";
import Trip from "./Trips/Trip";


function Home() {
  return (
    <>
      <Hero cName="hero" 
            heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="Your Journey Your Story" 
            text="Choose Your Favorite Destination" 
            buttonText="Travel Plan" 
            url="/" 
            btnClass="show"
      />
      <Destination/>
      <Trip/>
    </>
  );
}

export default Home;
