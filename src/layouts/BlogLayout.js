import React, { useEffect } from "react"
import ScrollToTop from "./../components/ScrollToTop"
import Header from "./../components/Header"

import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

import BlogBreadcrumb from "./../components/BlogBreadcrumb"
import { Helmet } from "react-helmet"
import BlogShowcase from "../components/BlogShowcase"

const BlogLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>EZFY Blogs</title>
      </Helmet>
      <React.Fragment>
        <ScrollToTop></ScrollToTop>
        <Header page={"blog"}></Header>
        <BlogBreadcrumb></BlogBreadcrumb>
        <BlogShowcase page="blog" postsPerPage={9}></BlogShowcase>
        <Contact></Contact>
        <Footer page={"blog"}></Footer>
      </React.Fragment>
    </React.Fragment>
  )
}

export default BlogLayout
