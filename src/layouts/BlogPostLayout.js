import React, { Component, useState, useEffect, Suspense } from "react"
import { useLocation } from "react-router-dom"

import Header from "../components/Header"

// import Contact from "../components/Contact"
import Footer from "../components/Footer"

import sanitizeHtml from "sanitize-html"

import BlogContent from "../components/BlogContent"

import Parallax from "../components/Parallax"
import parse from "html-react-parser"
import { SEO } from "./../components/SEO"
import ProductShowcase from "./../components/ProductShowcase"
import BlogShowcase from "./../components/BlogShowcase"

import { isBrowser } from "./../utils/utils"
import Contact from "./../components/Contact"
import ReviewsText from "../components/ReviewsText"

const BlogPostLayout = props => {
  const [url, setUrl] = useState("")

  /* This is coming directly from WP, so you have access to all object's values. */
  const post = props.pageContext

  console.log("look at me", post)

  // const slug = post.slug

  useEffect(() => {
    setUrl(window.location.href)
    setTimeout(() => {
      window.scrollTo(0, 0)
      window.ezfy.start()
      window.ezfy.removeLoader()
    }, 100)
  }, [])

  const description = parse(sanitizeHtml(post.excerpt.rendered))[0].props
    .children

  const title = parse(post.title.rendered)

  return (
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        image={post.featured_image_large_src}
        url={url}
      ></SEO>
      <Header page={"blog"}></Header>
      <BlogContent post={post}></BlogContent>

      <ProductShowcase
        chosenProducts={[
          "Dawn Theme Slider (PRO)",
          "Slideshow Section (PRO)",
          "Collections Tabs",
        ]}
        page="home"
      />
      <BlogShowcase
        title={"You may also like"}
        subtitle={"Here are some other blog posts you may be interested in."}
        page={"blogpost"}
        post={post}
      ></BlogShowcase>

      <ReviewsText></ReviewsText>

      <Contact></Contact>

      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default BlogPostLayout
