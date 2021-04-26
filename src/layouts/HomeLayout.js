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

const HomeLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.removeLoader, 50)
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
        your Shopify theme. <br /> No coding knowledge required.`}
        chosenProducts={[
          "Debut Theme Slider (PRO)",
          "Debut Theme - Second Image on Hover",
          `Debut Slider & Sticky Nav (Ultimate Bundle)`,
        ]}
        page="home"
      ></ProductShowcase>
      <BlogShowcase totalPosts={3} posts={props.posts}></BlogShowcase>
      <ReviewsText></ReviewsText>
      <Parallax
        title="Request immediate assistance"
        subtitle={`In need of technical support? Send us a message or an email, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>
      <Faq></Faq>
      <Contact></Contact>
      <Footer page={"home"}></Footer>
    </React.Fragment>
  )
}

export default HomeLayout
