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
        image={post.featured_image_src}
        url={url}
      ></SEO>
      <Header page={"blog"}></Header>
      <BlogContent post={post}></BlogContent>
      <ProductShowcase
        backgroundColor="gray"
        chosenProducts={[
          `Debut Slider & Sticky Nav (Ultimate Bundle)`,
          "Debut Theme Slider (PRO)",
          "Debut Theme - Second Image on Hover",
        ]}
        page="home"
      />
      <Parallax
        title="In need of a Shopify developer?"
        subtitle={`Feel free to reach out, we'll work together to find
            a custom solution that attend your needs.`}
        buttonText="Request a free quote"
      ></Parallax>
      <Contact></Contact>
      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default BlogPostLayout
