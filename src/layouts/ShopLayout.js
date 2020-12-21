import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import BlogBreadcrumb from "./../components/BlogBreadcrumb"
import { Helmet } from "react-helmet"
import BlogShowcase from "../components/BlogShowcase"
import { useStaticQuery, graphql } from "gatsby"

const ShopLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <Header></Header>
      <ScrollToTop></ScrollToTop>
      <p>shop</p>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ShopLayout
