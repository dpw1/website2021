import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"
import Hero from "./../components/Hero"
import Portfolio from "./../components/Portfolio"
import Faq from "./../components/Faq"
import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import Skeleton from "react-loading-skeleton"
import { blogApi } from "./../api/api"
import BlogContent from "../components/BlogContent"
import Preloader from "./../components/Preloader"
import BlogShowcase from "./../components/BlogShowcase"
import BlogBreadcrumb from "./../components/BlogBreadcrumb"
import { Helmet } from "react-helmet"

const BlogLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <script defer src={`js/vendors.js`} type="text/javascript" />
        <script defer src={`js/custom.js`} type="text/javascript" />
      </Helmet>
      <React.Fragment>
        <ScrollToTop></ScrollToTop>
        <Header page={"blog"}></Header>
        <BlogBreadcrumb></BlogBreadcrumb>
        <BlogShowcase paginate={true}></BlogShowcase>
        <Contact></Contact>
        <Footer page={"blog"}></Footer>
      </React.Fragment>
    </React.Fragment>
  )
}
export default BlogLayout
