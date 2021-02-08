import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import Shop from "./../components/Shop"
import { SEO } from "./../components/SEO"
import Services from "./../components/Services"

import { ToastProvider } from "react-toast-notifications"

const ServicesLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <ToastProvider
        autoDismiss
        placement="bottom-center"
        autoDismissTimeout={10000000}
      >
        <SEO
          title="EZFY Services | have a Shopify partner to build your dream store."
          description="Custom, easy to install Shopify code snippets coded by a certified Shopify partner."
        ></SEO>

        <Header page="shop" darkMode={true}></Header>
        <ScrollToTop></ScrollToTop>
        <Services paddingTop={100}> </Services>
        <Contact></Contact>
        <Footer></Footer>
      </ToastProvider>
    </React.Fragment>
  )
}

export default ServicesLayout
