import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/essentials/Header"
import Footer from "components/essentials/Footer"
import Story from "components/sections/Story"
import AboutInfo from "components/sections/Courses"
import Testimonials from "components/sections/Testimonials"

function About() {
    document.title = "About | Project Edge";
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Story />
        <AboutInfo />
        <Testimonials />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default About