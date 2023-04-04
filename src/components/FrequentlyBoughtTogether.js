import React, { useEffect, useState } from "react"
import "./FrequentlyBoughtTogether.scss"
import {
  addDiscountCoupon,
  addDiscountCouponBasedOnQuantity,
  addEcwidProductsToCart,
  discounts,
  getProductsInCart,
  ruleOfThree,
} from "./../utils/utils"
import FBTItem from "./FBTItem"
import { useCart } from "../store/cartStore"
import confetti from "canvas-confetti"
import { sleep } from "../../global-utils"

export default function FrequentlyBoughtTogether(props) {
  const [state, actions] = useCart()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const [progress, setProgress] = useState(`0%`)

  const [bundlePrice, setBundlePrice] = useState(props.product.price)
  const [bundleDiscountPrice, setBundleDiscountPrice] = useState("")

  /**
   * Shows how much the user will save in a bundle.
   * For example, if the sum of all products is $40 and the bundle discount totalizes in $30,
   * this function will return "$10".
   */
  const youSave = () => {
    const total = allProductsSum(false) - smallPriceSum(false)

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)
  }

  const addBundleProductToCart = _product => {
    return actions.addProduct(_product)
  }

  const sumAllProducts = () => {
    return products.map(e => e.rawPrice).reduce((a, b) => a + b, 0)
  }

  const allProductsSum = (formatted = true) => {
    if (!formatted) {
      return sumAllProducts()
    }

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(sumAllProducts())
  }

  const addToCartBundle = async event => {
    event.preventDefault()

    setLoading(true)

    delete window.removedDiscountCoupon
    delete window.discountCodeApplied

    await addEcwidProductsToCart(state.products)

    await sleep(50)

    await addDiscountCouponBasedOnQuantity()

    setLoading(false)
  }

  const sanitizeRelatedProducts = product => {
    console.log(
      "xxx sanitizing this:      ",
      product,
      typeof product.relatedProducts === "object"
    )
    if (typeof product.relatedProducts !== "object") {
      return []
    }

    console.log("xxx after sanitizing...", product.relatedProducts)

    let productCopy = { ...product }
    const related = productCopy.relatedProducts
    delete productCopy.relatedProducts

    return [productCopy, ...related]
  }

  const sumBundlePrice = _ => {
    const total = state.products.map(e => e.rawPrice).reduce((a, b) => a + b, 0)

    console.log("test - total", total)

    const price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)

    setBundlePrice(price)
  }

  const sumBundleDiscountPrice = _ => {
    if (state.products.length <= 1) {
      setBundleDiscountPrice("")
      return
    }

    const subtotal = state.products
      .map(e => e.rawPrice)
      .reduce((a, b) => a + b, 0)

    const discount = discounts.filter(
      e => e.quantity === state.products.length
    )[0]

    if (!discount) {
      setBundleDiscountPrice("")
      return
    }

    const subtract = ruleOfThree(100, subtotal, discount.percentage)
    const total = subtotal - subtract

    const price = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)

    setBundleDiscountPrice(price)
  }

  function handleTitle() {
    if (state.products.length <= 0) {
      window.confettiPlayed = false
      return (
        <span>
          Add <b>2</b> to unlock{" "}
          <b className="discount">{discounts[0].amount}</b> off today!{" "}
        </span>
      )
    }

    if (state.products.length === 1) {
      window.confettiPlayed = false
      return (
        <span>
          Add <b>1</b> to unlock{" "}
          <b className="discount">{discounts[0].amount}</b> off today!{" "}
        </span>
      )
    }

    if (state.products.length === 2) {
      window.confettiPlayed = false
      return (
        <span>
          <b>{discounts[0].amount} </b>unlocked! Add <b>1</b> more for{" "}
          <b className="discount">{discounts[1].amount}</b> off!{" "}
        </span>
      )
    }

    if (state.products.length === 3) {
      if (!window.confettiPlayed) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        window.confettiPlayed = true
      }

      return (
        <span className="fbt-title--discount-unlocked">
          {" "}
          <img
            style={{ top: -2, marginRight: 5 }}
            className="fbt-gif"
            src="https://media.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.gif"
            alt=""
          />{" "}
          <span style={{ fontSize: 18 }} className="discount">
            {discounts[1].amount} off unlocked!
          </span>
          <img
            style={{ marginLeft: 5, top: -2 }}
            className="fbt-gif fbt-gif--reversed"
            src="https://media.giphy.com/media/1wX5TJZPqVw3HhyDYn/giphy.gif"
            alt=""
          />{" "}
        </span>
      )
    }
  }

  useEffect(() => {
    if (!props.product || props.product.length <= 0) {
      // return
    }

    setProducts(sanitizeRelatedProducts(props.product))
  }, [props.product])

  useEffect(() => {
    sumBundlePrice()
    sumBundleDiscountPrice()
    setProgress(`${state.products.length * 33.33}%`)
  }, [state.products])

  useEffect(() => {
    actions.resetProducts()

    console.log("confetti,", confetti)
  }, [])

  return products && products.length >= 2 ? (
    <div className="fbt">
      <div className="fbt-container">
        <div className="fbt-products">
          <h4 className="fbt-title">Bundle And Save More</h4>
          <h5 className="fbt-subtitle">{handleTitle()}</h5>
          <div className="fbt-progress">
            <div
              style={{
                width: progress,
              }}
              className="animated-gradient"
            ></div>
          </div>

          <div className="fbt-items">
            {products &&
              products.length >= 2 &&
              products.map((e, i) => {
                const index = i + 1

                if (index === 1 || index === 2) {
                  if (!e.hasOwnProperty("selected")) {
                    e.selected = true
                  }
                }

                return (
                  <FBTItem
                    addBundleProductToCart={addBundleProductToCart}
                    key={e.id}
                    index={index}
                    product={e}
                    isSelected={e.selected}
                  ></FBTItem>
                )
              })}
          </div>

          {/* Price
      ============================  */}
          {/* <p className="fbt-total"></p>
<span
                className={`fbt-total-price ${
                  bundleDiscountPrice.length >= 1 && "fbt-total-price--discount"
                }`}
              >
                {bundlePrice}
              </span> */}

          <div className="fbt-pricing">
            {bundleDiscountPrice.length >= 1 && (
              <div className="fbt-total fbt-total--original">
                <span>Previous: </span>
                <span
                  className={`fbt-total-price ${
                    bundleDiscountPrice.length >= 1 &&
                    "fbt-total-price--discount"
                  }`}
                >
                  {bundlePrice}
                </span>
              </div>
            )}
            <div className="fbt-total">
              <span>Total: </span>
              <span className="fbt-total-wrap">
                {bundleDiscountPrice.length >= 1 ? (
                  <div className="fbt-total-discounted-price">
                    {bundleDiscountPrice}
                  </div>
                ) : (
                  <span>{bundlePrice}</span>
                )}
              </span>
            </div>
          </div>

          {/* ATC
      ============================  */}
          <button onClick={e => addToCartBundle(e)} className="fbt-button">
            {loading ? "Adding bundle..." : "Add bundle"}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
