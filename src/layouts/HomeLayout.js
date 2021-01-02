import React from "react"
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

const HomeLayout = props => {
  return (
    <React.Fragment>
      <SEO />
      <ScrollToTop></ScrollToTop>
      <Header page={"home"}></Header>
      <Hero scrollTo="#about"></Hero>
      <WhatDoWeDo></WhatDoWeDo>
      {/* <Features> </Features> */}
      <BlogShowcase totalPosts={3} posts={props.posts}></BlogShowcase>
      <ReviewsText></ReviewsText>
      <Parallax
        title="Request immediate assistance"
        subtitle={`In need of technical support? Please send us a message or an email, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>
      <Faq></Faq>
      <Steps></Steps>
      <Contact></Contact>
      <Footer page={"home"}></Footer>
    </React.Fragment>
  )
}

export default HomeLayout
