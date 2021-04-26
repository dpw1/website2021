import React, { useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import { Helmet } from "react-helmet"

import About from "./../components/About"

const BlogLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
    setTimeout(window.ezfy.removeLoader, 50)
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZFY | About Us</title>
      </Helmet>
      <React.Fragment>
        <ScrollToTop></ScrollToTop>
        <Header page="shop" darkMode={true}></Header>
        <About page="about"></About>
        <Contact></Contact>
        <Footer page={"blog"}></Footer>
      </React.Fragment>
    </React.Fragment>
  )
}

export default BlogLayout
