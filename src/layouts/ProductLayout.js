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
    }, 100)
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
      <Contact></Contact>
      <Footer page={"blog"}></Footer>
    </React.Fragment>
  )
}
export default ProductLayout
