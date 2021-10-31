import React, {Component} from 'react';
import Hero from "components/sections/Hero"
import Footer from "components/essentials/Footer"
import Mission from "components/sections/Mission";
import Impact from "components/sections/Impact"
import About from "components/sections/WhoAreWe"
import TeamIntro from "components/sections/TeamIntro"
import FAQ from "components/sections/FAQ"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Sponsors from "components/sections/Sponsors"
import WhoAreWe from 'components/sections/WhoAreWe';


function Home() {
    return (
      <AnimationRevealPage disabled>
        <Hero />
        <WhoAreWe />
        <Mission />
        <Impact />
        <TeamIntro />
        <Sponsors />
        <FAQ /> 
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default Home