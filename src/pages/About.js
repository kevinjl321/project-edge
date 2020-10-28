import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/MiniCenteredFooter"
import Story from "components/features/TwoColWithTwoHorizontalFeaturesAndButton"
import AboutInfo from "components/cards/ThreeColContactDetails"
import Testimonial from "components/testimonials/TwoColumnWithImage"

function About() {
    document.title = "about | edge learning";
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Story />
        <AboutInfo />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default About