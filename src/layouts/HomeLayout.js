import React, { useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"

import BlogShowcase from "../components/BlogShowcase"
import Parallax from "../components/Parallax"
import Faq from "../components/Faq"
import Steps from "../components/Steps"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import ReviewsText from "./../components/ReviewsText"
import { SEO } from "../components/SEO.js"
import WhatDoWeDo from "./../components/WhatDoWeDo"
import Features from "./../components/Features"
import ProductShowcase from "./../components/ProductShowcase"

import axios from "axios"
import TabsSlider from "../components/TabsSlider"

const HomeLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.removeLoader, 50)

    async function test() {}

    test()
  }, [])

  return (
    <React.Fragment>
      <SEO />
      <ScrollToTop></ScrollToTop>
      <Header page={"home"}></Header>
      <Hero scrollTo="#about"></Hero>
      <About></About>
      <TabsSlider></TabsSlider>
      {/* <Features> </Features> */}
      {/* <ProductShowcase
        subtitle={`Simple, affordable and high quality copy-paste code snippets for
        your Shopify theme. <br /> Pay once, use forever - no monthly fees.`}
        chosenProducts={[
          "Dawn Theme Slider (PRO)",
          "Slideshow Section (PRO)",
          "Anti Theft - Disable Right Click",
        ]}
        page="home"
      ></ProductShowcase> */}
      <BlogShowcase isHomePage={true} posts={props.posts}></BlogShowcase>
      <ReviewsText></ReviewsText>
      <Parallax
        title="In need of coding help for your Shopify store?"
        subtitle={`Let us know what you need, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>

      <Contact></Contact>
      <Footer page={"home"}></Footer>
    </React.Fragment>
  )
}

export default HomeLayout
