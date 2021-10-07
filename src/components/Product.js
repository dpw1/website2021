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
    window.ezfy.forceHrefLinkOnFirefox()

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
    console.log("xxx current product: ", productData)
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
      console.log("waiting for 'addProduct'                      ")
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
          <div className="Product-title-container">
            <h1 className="Product-title">{productData.title}</h1>

            {productData.liveDemo && (
              <React.Fragment>
                <a
                  className="Product-demo"
                  target="_blank"
                  href={productData.liveDemo}
                >
                  <span>
                    <svg
                      width="444.819px"
                      height="444.819px"
                      viewBox="0 0 444.819 444.819"
                      style={{ enableBackground: "new 0 0 444.819 444.819" }}
                    >
                      <g>
                        <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264   c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168   c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413   c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864   c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z" />
                      </g>
                    </svg>
                  </span>
                  <span className="custom-link">Live Demo</span>
                </a>
                <span class="Product-password">
                  password: <b>123</b>
                </span>
              </React.Fragment>
            )}
          </div>

          <div className="Product-prices">
            <h2 className="Product-price">{price}</h2>

            {productData.comparePrice && (
              <span className="Product-big-price">
                {productData.comparePrice}
              </span>
            )}
          </div>
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

          {/* <small className="Product-license     ">
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
