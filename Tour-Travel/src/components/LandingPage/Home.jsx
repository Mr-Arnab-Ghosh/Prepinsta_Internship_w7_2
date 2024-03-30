import React from "react";
import Hero from "../HeroSection/Hero";
import Destination from "./Destinations/destination";

function Home() {
  return (
    <>
      <Hero cName="hero" 
            heroImg="https://images.unsplash.com/photo-1597027269532-558925ca9ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwYmV0d2VlbiUyMG1vdW50YWlufGVufDB8fDB8fHww" 
            title="Your Journey Your Story" 
            text="Choose Your Favorite Destination" 
            buttonText="Travel Plan" 
            url="/" 
            btnClass="show"
      />
      <Destination/>
      </>
  );
}

export default Home;
