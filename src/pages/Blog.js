import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/essentials/Header"
import Footer from "components/essentials/Footer"
import Blogger from "components/sections/Blogger"

function Blog() {
    document.title = "Blog | Project Edge";
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Blogger />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default Blog