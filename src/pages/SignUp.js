import React from "react"
import Calendly from "components/Calendly"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function SignUp() {
    document.title = "Schedule a Class | Edge Learning";
    return (
      <AnimationRevealPage disabled>
        <Calendly />
      </AnimationRevealPage>
    )
}

export default SignUp