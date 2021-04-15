import React, { useEffect } from "react"
import parse from "html-react-parser"

import "./Product.scss"
import StarRating from "./StarRating"
import FloatingButton from "./FloatingButton"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"

/**
 *
 * Item for product page.
 *
 * @param {*} props
 *
 */

export default function Product(props) {
  const { product: productData } = props

  const price =
    productData.price.toLowerCase() === "free"
      ? productData.price
      : `$${productData.price}`

  const url = productData.addToCart ? productData.addToCart : productData.url

  useEffect(() => {
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

  return (
    <section className="Product" data-product-slug={productData.slug}>
      <div className="Product-container container">
        <div className="Product-picture">
          <figure className="Product-figure">
            <img className="Product-img" src={productData.thumbnail} alt="" />
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
            onClick={e => {
              e.preventDefault()
              window.open(url, "_blank", "noopener,noreferrer")
            }}
            target="_blank"
            className="Product-atc btn--custom"
          >
            Download now
          </a>

          {/* <small className="Product-license">
            By downloading this product you confirm you have read the product's
            description.
          </small> */}

          <div className="Product-text">
            {parse(productData.description || " ")}
          </div>

          <small>
            Important note: by purchasing this product you agree to our{" "}
            <Link to="/license">terms of service</Link>.
          </small>
        </div>
      </div>
      <FloatingButton url={url} price={price} />
    </section>
  )
}
