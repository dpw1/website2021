import React, { Component, useState, useEffect } from "react"

import Header from "../components/Header"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import sanitizeHtml from "sanitize-html"

import BlogContent from "../components/BlogContent"

import Parallax from "../components/Parallax"
import parse from "html-react-parser"
import { SEO } from "./../components/SEO"

const BlogPostLayout = props => {
  const [url, setUrl] = useState("")

  const post = props.pageContext

  // const slug = post.slug

  useEffect(() => {
    setUrl(window.location.href)
    setTimeout(() => {
      window.scrollTo(0, 0)
      window.ezfy.start()
    }, 100)
  }, [])

  const description = parse(sanitizeHtml(post.excerpt.rendered))[0].props
    .children

  return (
    <React.Fragment>
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
