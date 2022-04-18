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
      <Hero></Hero>
      <About></About>
      {/* <Features> </Features> */}
      <ProductShowcase
        subtitle={`Simple, affordable and high quality copy-paste code snippets for
        your Shopify theme. <br /> Pay once, use forever - no monthly fees.`}
        chosenProducts={[
          "Debut Theme Slider (PRO)",
          "Slideshow Section (PRO)",
          "Anti Theft - Disable Right Click",
        ]}
        page="home"
      ></ProductShowcase>
      <BlogShowcase isHomePage={true} posts={props.posts}></BlogShowcase>
      <ReviewsText></ReviewsText>
      <Parallax
        title="Can't find the code snippet you're looking for?"
        subtitle={`Most apps can be replaced by simple, portable and lightweight code snippets that will save you time and money. Let us know what you need, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>
      <Faq></Faq>
      <Contact></Contact>
      <Footer page={"home"}></Footer>
    </React.Fragment>
  )
}

export default HomeLayout
