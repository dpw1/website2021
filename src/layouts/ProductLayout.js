import React, { Component, useState, useEffect } from "react"

import Header from "../components/Header"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import BlogContent from "../components/BlogContent"

import Parallax from "../components/Parallax"
import parse from "html-react-parser"
import { SEO } from "./../components/SEO"
import Product from "./../components/Product"
import striptags from "striptags"
import BlogBreadcrumb from "../components/BlogBreadcrumb"
import ProductBreadcrumb from "./../components/ProductBreadcrumb"
import ProductShowcase from "../components/ProductShowcase"

const ProductLayout = props => {
  const [url, setUrl] = useState("")

  console.log(props)
  const productData = props.pageContext

  const description = productData.miniDescription
    ? productData.miniDescription
    : `${striptags(productData.description)
        .split(" ")
        .splice(0, 15)
        .join(" ")} (...)`
  // const slug = post.slug

  useEffect(() => {
    setUrl(window.location.href)
    setTimeout(() => {
      window.scrollTo(0, 0)
      window.ezfy.start()
      window.ezfy.removeLoader()
    }, 10)
  }, [])

  return (
    <React.Fragment>
      <SEO
        title={productData.title}
        description={description}
        image={productData.thumbnail}
      ></SEO>
      <Header page={"shop"} darkMode={true}>
        {" "}
      </Header>
      {/* <ProductBreadcrumb></ProductBreadcrumb> */}

      <Product product={productData}></Product>
      <ProductShowcase
        title="You may also like"
        backgroundColor={"gray"}
        chosenProducts={[
          "Debut Theme Slider (PRO)",
          "Minimal Theme Slider (PRO)",
          `Brooklyn Theme Slider (PRO)`,
        ]}
        page="home"
      ></ProductShowcase>
      <Parallax
        title="Looking for something different?"
        subtitle={`Feel free to reach out, we'll work together to find
            a custom solution that attend your needs.`}
        buttonText="Send us an email"
      ></Parallax>
      <Contact></Contact>
      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default ProductLayout
