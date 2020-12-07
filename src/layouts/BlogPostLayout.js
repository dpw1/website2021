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
import { SEO } from "./../components/SEO"

const BlogPostLayout = props => {
  const [url, setUrl] = useState("")

  const post = props.pageContext

  const slug = post.slug

  useEffect(() => {
    setUrl(window.location.href)
    setTimeout(() => {
      window.scrollTo(0, 0)
      window.ezfy.start()
    }, 100)
  }, [])

  const description = parse(sanitizeHtml(post.excerpt.rendered))[0].props
    .children

  console.log("description", description)
  return (
    <React.Fragment>
      {console.log(post)}
      <SEO
        title={parse(post.title.rendered)}
        description={description}
        image={post.featured_image_small_src}
        url={url}
      ></SEO>
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
