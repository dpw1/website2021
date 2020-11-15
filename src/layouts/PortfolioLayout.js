import React, { Component, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"
import Hero from "./../components/Hero"
import Portfolio from "./../components/Portfolio"
import Faq from "./../components/Faq"
import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

const PortfolioLayout = () => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <ScrollToTop></ScrollToTop>
      <Header page="portfolio"></Header>
      <Hero scrollTo="#portfolio" buttonText={"View Portfolio"}></Hero>
      <Portfolio></Portfolio>
      <Faq></Faq>
      <Contact></Contact>
      <Footer page={"portfolio"}></Footer>
    </React.Fragment>
  )
}

export default PortfolioLayout
