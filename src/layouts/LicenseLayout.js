import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Shop from "../components/Shop"
import { SEO } from "../components/SEO"
import License from "../components/License"

const LicenseLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
    setTimeout(window.ezfy.removeLoader, 50)
  }, [])

  return (
    <React.Fragment>
      <SEO title="EZFY Plugins - License"></SEO>

      <Header page="shop" darkMode={true}></Header>
      <ScrollToTop></ScrollToTop>
      <License></License>

      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default LicenseLayout
