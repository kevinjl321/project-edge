import React, {Component} from 'react';
import Header from "components/essentials/Header"
import Footer from "components/essentials/Footer"
import Team from "components/sections/Team"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function OurTeam() {
    document.title = "Our Team | Project Edge"
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Team />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default OurTeam