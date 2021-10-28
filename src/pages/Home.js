import React, {Component} from 'react';
import Hero from "components/sections/Hero"
import Footer from "components/essentials/Footer"
import Mission from "components/sections/Mission";
import Stats from "components/sections/Stats"
import About from "components/sections/Description"
import People from "components/sections/Ethos"
import FAQ from "components/sections/FAQ"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Sponsors from "components/sections/Sponsors"


function Home() {
    return (
      <AnimationRevealPage disabled>
        <Hero />
        <About />
        <Mission />
        <Stats />
        <People />
        <Sponsors />
        <FAQ />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default Home