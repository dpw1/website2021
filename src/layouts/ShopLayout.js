import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import Shop from "./../components/Shop"
import { SEO } from "./../components/SEO"

const ShopLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
    setTimeout(window.ezfy.removeLoader, 50)
  }, [])

  return (
    <React.Fragment>
      <SEO
        title="EZFY Shop: code snippets and sections for Shopify"
        description="Custom, easy to install Shopify code snippets coded by a certified Shopify partner."
      ></SEO>

      <Header page="shop" darkMode={true}></Header>
      <ScrollToTop></ScrollToTop>
      <Shop page="shop"></Shop>

      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ShopLayout
