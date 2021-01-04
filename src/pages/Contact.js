import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/essentials/Header"
import Footer from "components/essentials/Footer"
import Contact from "components/sections/ContactUs"

function ContactUs() {
    document.title = "Contact Us | Project Edge"
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Contact />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default ContactUs