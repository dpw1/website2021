import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"
import Faq from "../components/Faq"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Skeleton from "react-loading-skeleton"
import { Helmet } from "react-helmet"
import sanitizeHtml from "sanitize-html"

import { blogApi } from "../api/api"
import BlogBreadcrumb from "../components/BlogBreadcrumb"
import BlogContent from "../components/BlogContent"
import Preloader from "../components/Preloader"
import { generateBlogUrl } from "../utils/utils"
import Parallax from "../components/Parallax"
import parse from "html-react-parser"

const BlogPostLayout = props => {
  console.log("blog layout props", props.pageContext)

  const post = props.pageContext

  const slug = post.slug

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      window.ezfy.start()
    }, 100)
  }, [])

  return (
    <React.Fragment>
      {/* <Helmet>
        <script defer src={`js/vendors.js`} type="text/javascript" />
        <script defer src={`js/custom.js`} type="text/javascript" />
      </Helmet> */}
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{parse(post.title.rendered)}</title>
        <meta
          name="description"
          content={sanitizeHtml(parse(post.excerpt.rendered), {
            allowedTags: [],
            allowedAttributes: [],
          }).trim()}
        />
      </Helmet> */}
      <Header page={"blog"}></Header>
      <BlogContent post={post}></BlogContent>
      <Parallax
        title="In need of a Shopify developer?"
        subtitle={`Get in touch with us, we'll work together to find
            a custom solution that attend your needs.`}
        buttonText="Request a free quote"
      ></Parallax>
      <Contact></Contact>
      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default BlogPostLayout
