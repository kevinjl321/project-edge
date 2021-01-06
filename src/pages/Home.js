import React, {Component} from 'react';
import Hero from "components/sections/Hero"
import Footer from "components/essentials/Footer"
import Stats from "components/sections/Mission";
import About from "components/sections/Description"
import People from "components/sections/Ethos"
import Pricing from "components/sections/Pricing"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function Home() {
    return (
      <AnimationRevealPage disabled>
        <Hero />
        <About />
        <Stats />
        <People />
        <Pricing />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default Home