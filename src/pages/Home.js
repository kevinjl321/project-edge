import React, {Component} from 'react';
import Hero from "components/hero/BackgroundAsImage"
import Footer from "components/footers/MiniCenteredFooter"
import Stats from "components/features/TwoColSingleFeatureWithStats2";
import About from "components/features/ThreeColWithSideImageWithPrimaryBackground"
import People from "components/features/TwoColWithButton"
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher"
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