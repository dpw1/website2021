import React, { Component, useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link, withPrefix } from "gatsby"

import "./index.scss"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import BlogShowcase from "../components/BlogShowcase"
import Parallax from "../components/Parallax"
import Faq from "../components/Faq"
import Steps from "../components/Steps"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// const ScrollToTop = React.lazy(() => import("./../components/ScrollToTop"))
// const Header = React.lazy(() => import("./../components/Header"))
// const Hero = React.lazy(() => import("./../components/Hero"))
// const Faq = React.lazy(() => import("./../components/Faq"))
// const Contact = React.lazy(() => import("./../components/Contact"))
// const Footer = React.lazy(() => import("./../components/Footer"))

// const About = React.lazy(() => import("./../components/About"))
// const BlogShowcase = React.lazy(() => import("./../components/BlogShowcase"))
// const ReviewsText = React.lazy(() => import("./../components/ReviewsText"))
// const Services = React.lazy(() => import("./../components/Services"))
// const Parallax = React.lazy(() => import("./../components/Parallax"))
// const Steps = React.lazy(() => import("./../components/Steps"))

export default () => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZFY | Shopify Coding For Merchants</title>
      </Helmet>

      <ScrollToTop></ScrollToTop>
      <Header page={"home"}></Header>
      <Hero scrollTo="#about"></Hero>
      <About></About>
      <BlogShowcase totalPosts={3}></BlogShowcase>
      {/* <ReviewsText></ReviewsText> */}
      <Services></Services>
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
