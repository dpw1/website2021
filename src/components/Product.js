import React, { useEffect, useState } from "react"
import parse from "html-react-parser"

import "./Product.scss"
import StarRating from "./StarRating"
import FloatingButton from "./FloatingButton"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import Benefits from "./Benefits"

// import { replaceAll } from "./../utils/utils"

/**
 *
 * Item for product page.
 *
 * @param {*} props
 *
 */

export default function Product(props) {
  const [loading, setLoading] = useState(false)
  const { product: productData } = props

  console.log(productData)

  const price = productData.price

  const url = productData.addToCart ? productData.addToCart : productData.url

  const description =
    productData.description.replace(/<img /g, `<img loading="lazy"`) || " "

  useEffect(() => {
    window.ezfy.loadEcwidScript()

    window.productPage = (function () {
      function stickyImage() {
        const el = window.document.querySelector(".Product-figure")
        const observer = new IntersectionObserver(
          ([e]) =>
            e.target.classList.toggle(
              "Product-figure--is-pinned",
              e.intersectionRatio < 1
            ),
          { threshold: [1] }
        )

        observer.observe(el)
      }

      return {
        init: () => {
          stickyImage()
        },
      }
    })()

    window.productPage.init()

    console.log(productData)
  }, [])

  /* 
  The add to cart ought to be made via a function because of Google Tag Manager click detection.
  */
  const addToCart = async e => {
    e.preventDefault()

    setLoading(true)

    while (!window.hasOwnProperty("Ecwid")) {
      console.log("waiting for Ecwid")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.hasOwnProperty("Cart")) {
      console.log("waiting for Ecwid Cart")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.Cart.hasOwnProperty("addProduct")) {
      console.log("waiting for 'add to product' ")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    Ecwid.Cart.addProduct({
      id: productData.id,
      quantity: 1,
      callback: function (success, product, cart) {
        Ecwid.Cart.gotoCheckout()
        setLoading(false)
      },
    })
  }

  return (
    <section className="Product" data-product-slug={productData.slug}>
      <div className="Product-container container">
        <div className="Product-picture">
          <figure className="Product-figure">
            <img className="Product-img" src={productData.image} alt="" />
          </figure>
        </div>

        <div className="Product-description">
          <h1 className="Product-title">{productData.title}</h1>
          <h2 className="Product-price">{price}</h2>
          {/* <div className="Product-stars">
            <StarRating></StarRating>
          </div> */}

          <a
            href={url}
            onClick={e => addToCart(e)}
            target="_blank"
            className="Product-atc btn--custom"
          >
            {loading ? "Adding to cart..." : "Download now"}
          </a>

          <div
            className="ecsp ecsp-SingleProduct-v2 ecsp-Product ec-Product-359233331"
            itemType="http://schema.org/Product"
            data-single-product-id={359233331}
          >
            <div
              className="ecsp-title"
              itemProp="name"
              style={{ display: "none" }}
              content="Brooklyn Theme Slider (PRO)"
            />
            <div customprop="addtobag" />
          </div>

          {/* <small className="Product-license">
            By downloading this product you confirm you have read the product's
            description.
          </small> */}

          <Benefits></Benefits>

          <div className="Product-text">{parse(description)}</div>

          <small>
            Important note: by purchasing this product you agree to our{" "}
            <Link to="/license">terms of service</Link>.
          </small>
        </div>
      </div>
      <FloatingButton
        loading={loading}
        addToCart={addToCart}
        url={url}
        price={price}
      />
    </section>
  )
}
