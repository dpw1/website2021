import React, { useEffect, useState } from "react"
import parse from "html-react-parser"

import "./Product.scss"
import StarRating from "./StarRating"
import FloatingButton from "./FloatingButton"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import Benefits from "./Benefits"

// import { replaceAll } from "./../utils/utils"
import FrequentlyBoughtTogether from "./FrequentlyBoughtTogether"

/**
 *
 * Item for product page.
 *
 * @param {*} props
 *
 */

export default function Product(props) {
  const [loading, setLoading] = useState(false)
  const [currentProduct, setCurrentProduct] = useState("")
  const { product: productData } = props

  // console.log("my product data      ", productData)

  const price = productData.price
    .replace("$0.00 or more", "Free")
    .replace("$0.00", "Free")
    .replace(".00", "")

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
  }, [])

  useEffect(() => {
    console.log("current product: ", productData)
    setCurrentProduct(productData)
  }, [productData])

  const hasToDisplayFrequentlyBoughtTogether = () => {
    if (window.document.querySelector(`.fbt`)) {
      return true
    }

    if (
      !currentProduct ||
      !currentProduct.relatedProducts ||
      currentProduct.relatedProducts.length <= 0
    ) {
      return false
    }

    return true
  }

  /* 
  The add to cart ought to be made via a function because of Google Tag Manager click detection.
  */

  const addToCart = async e => {
    let productsInCart = []
    e.preventDefault()

    setLoading(true)

    while (!window.hasOwnProperty("Ecwid")) {
      console.log("waiting for Ecwid          ")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.hasOwnProperty("Cart")) {
      console.log("waiting for Ecwid Cart")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.Cart.hasOwnProperty("addProduct")) {
      console.log("waiting for 'addProduct'                  ")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    Ecwid.Cart.get(function (cart) {
      cart.items
        .map(e => e.product)
        .map(_product => productsInCart.push(_product.id))
    })

    if (productsInCart.filter(e => e === productData.id).length >= 1) {
      // openInNewTab(`https://store61271341.company.site/products/cart`)
      Ecwid.Cart.gotoCheckout()
      setLoading(false)
      return
    }

    Ecwid.Cart.addProduct({
      id: productData.id,
      quantity: 1,

      callback: function (success, product, cart) {
        // openInNewTab(`https://store61271341.company.site/products/cart`)
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
            {productData.liveDemo ? (
              <a href={productData.liveDemo} target="_blank">
                <img className="Product-img" src={productData.image} alt="" />
              </a>
            ) : (
              <img className="Product-img" src={productData.image} alt="" />
            )}
          </figure>
        </div>

        <div className="Product-description">
          <h1 className="Product-title">{productData.title}</h1>
          <h2 className="Product-price">{price}</h2>
          {/* <div className="Product-stars">
            <StarRating></StarRating>
          </div> */}

          <a
            href={"#"}
            onClick={e => addToCart(e)}
            target="_blank"
            className="Product-atc btn--custom"
          >
            {loading ? "Adding to cart..." : "Download now"}
          </a>

          {/* <a
            href={productData.liveDemo}
            target="_blank"
            className="btn  btn--LiveDemo"
          >
            Live Demo
          </a> */}

          {/* <small className="Product-license">
            By downloading this product you confirm you have read the product's
            description.
          </small> */}

          <Benefits></Benefits>

          <FrequentlyBoughtTogether
            product={currentProduct}
          ></FrequentlyBoughtTogether>

          <div className="Product-text">{parse(description)}</div>

          <small>
            Important note: by purchasing this product you agree to our{" "}
            <Link to="/license">terms of service</Link>.
          </small>
        </div>
      </div>
      <FloatingButton loading={loading} addToCart={addToCart} price={price} />
    </section>
  )
}
