import React from "react"
import Header from "components/essentials/Header"
import SignUpBody from "components/sections/Registration"
import Footer from "components/essentials/Footer"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function SignUp() {
    document.title = "Schedule a Class | Project Edge";
    return (
      <AnimationRevealPage disabled>
        <Header />
        <SignUpBody />
        <Footer />
      </AnimationRevealPage>
    )
}

export default SignUp