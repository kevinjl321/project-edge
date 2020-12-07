import React from "react"
import Header from "components/headers/light"
import SignUpBody from "components/cards/SignUpBody"
import Footer from "components/footers/MiniCenteredFooter"
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