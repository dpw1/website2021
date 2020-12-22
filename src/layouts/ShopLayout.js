import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import BlogBreadcrumb from "./../components/BlogBreadcrumb"
import { Helmet } from "react-helmet"
import BlogShowcase from "../components/BlogShowcase"
import { useStaticQuery, graphql } from "gatsby"
import Shop from "./../components/Shop"
import Hero from "./../components/Hero"
import { SEO } from "./../components/SEO"

const ShopLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <SEO
        title="EZFY | Shop"
        description="Custom, easy to install Shopify code snippets coded by a certified Shopify partner."
      ></SEO>

      <Header page="shop" darkMode={true}></Header>
      <ScrollToTop></ScrollToTop>
      <Shop paddingTop={100}></Shop>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default ShopLayout
