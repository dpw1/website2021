import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import Cart from "./../components/Cart"
import { SEO } from "./../components/SEO"
import Steps from "./../components/Steps"

const CartLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
    setTimeout(window.ezfy.removeLoader, 50)
  }, [])

  return (
    <React.Fragment>
      <SEO
        title="EZFY | Check your order"
        description="Custom, easy to install Shopify code snippets coded by a certified Shopify partner."
      ></SEO>

      <Header page="shop" darkMode={true}></Header>
      <ScrollToTop></ScrollToTop>

      <Cart></Cart>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default CartLayout
