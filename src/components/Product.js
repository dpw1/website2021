import React, { useEffect } from "react"
import parse from "html-react-parser"

import "./Product.scss"
import StarRating from "./StarRating"

export default function Product(props) {
  const { product: productData } = props

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
  }, [])

  console.log(productData)
  return (
    <section className="Product">
      <div className="Product-container container">
        <div className="Product-image">
          <figure className="Product-figure">
            <img src={productData.thumbnail} alt="" />
          </figure>
        </div>

        <div className="Product-description">
          <h1 className="Product-title">{productData.title}</h1>
          <h2 className="Product-price">
            {productData.price.toLowerCase() === "free"
              ? productData.price
              : `$${productData.price}`}
          </h2>
          {/* <div className="Product-stars">
            <StarRating></StarRating>
          </div> */}

          <a
            href={
              productData.addToCart ? productData.addToCart : productData.url
            }
            target="_blank"
            className="Product-atc btn--custom"
          >
            Download now
          </a>

          <div className="Product-text">
            {parse(productData.description || " ")}
          </div>
        </div>
      </div>
    </section>
  )
}
