import React, { Component, useState, useEffect } from "react"

import Header from "../components/Header"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import sanitizeHtml from "sanitize-html"

import BlogContent from "../components/BlogContent"

import Parallax from "../components/Parallax"
import parse from "html-react-parser"
import { SEO } from "./../components/SEO"
import ProductShowcase from "./../components/ProductShowcase"

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

  return (
    <React.Fragment>
      <SEO
        title={parse(post.title.rendered)}
        description={description}
        image={post.featured_image_large_src}
        url={url}
      ></SEO>
      <Header page={"blog"}></Header>
      <BlogContent post={post}></BlogContent>
      <ProductShowcase
        backgroundColor="gray"
        chosenProducts={[
          "Dawn Theme Slider (PRO)",
          "Slideshow Section (PRO)",
          "Anti Theft - Disable Right Click",
        ]}
        page="home"
      />
      <Parallax
        title="Can't find the code snippet you're looking for?"
        subtitle={`Most apps can be replaced by simple, portable and lightweight code snippets that will save you time and money. Let us know what you need, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>
      <Contact></Contact>
      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default BlogPostLayout
