import React, { useEffect, useState } from "react"
import "./FrequentlyBoughtTogether.scss"
import { ruleOfThree } from "./../utils/utils"

export default function FrequentlyBoughtTogether(props) {
  /* Those variables are wired up to Ecwid. 
  You can navigate to "Automatic Discounts" from the ecwid admin to configure them. 
  
  https://my.ecwid.com/store/61271341#discounts
  
  */
  const minimumPriceForDiscount = 45
  const discount = 15

  const [currentProduct, setCurrentProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

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

  const hasDiscount = () => {
    if (sumAllProducts() >= 45) {
      return true
    }
    return false
  }

  /**
   *
   * @returns Calculates the sum of all products with a specific % discount.
   */
  const smallPriceSum = (formatted = true) => {
    const subtotal = products.map(e => e.rawPrice).reduce((a, b) => a + b, 0)
    const subtract = ruleOfThree(100, subtotal, discount)
    const total = subtotal - subtract

    if (!formatted) {
      return total
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)
  }

  const addToCartBundle = async event => {
    let productsInCart = []
    event.preventDefault()

    setLoading(true)

    while (!window.hasOwnProperty("Ecwid")) {
      console.log("waiting for Ecwid                      ")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.hasOwnProperty("Cart")) {
      console.log("waiting for Ecwid Cart")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    while (!Ecwid.Cart.hasOwnProperty("addProduct")) {
      console.log("waiting for 'addProduct'              ")
      await new Promise(resolve => setTimeout(resolve, 50))
    }

    Ecwid.Cart.get(function (cart) {
      cart.items
        .map(e => e.product)
        .map(_product => productsInCart.push(_product.id))
    })

    products.map(e => {
      const id = e.id

      if (productsInCart.filter(_e => _e === id).length >= 1) {
        return
      }

      Ecwid.Cart.addProduct({
        id,
        quantity: 1,
      })
    })

    Ecwid.Cart.gotoCheckout()
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

  useEffect(() => {}, [props.product])

  useEffect(() => {
    console.log("xxx props.product: ", props.product)
    if (!props.product || props.product.length <= 0) {
      // return
    }

    setProducts(sanitizeRelatedProducts(props.product))
  }, [props.product])

  useEffect(() => {
    console.log("XXX look      :")
  }, [products])

  const RenderFBT = () => {
    return (
      <div className="fbt">
        <div className="fbt-container">
          <div className="fbt-products">
            <h4 className="fbt-subtitle">
              {hasDiscount()
                ? "Save by buying these products together:"
                : "Products frequently bought together:"}
            </h4>

            <div className="fbt-figures">
              {products &&
                products.length >= 2 &&
                products.map(e => {
                  return (
                    <React.Fragment>
                      <a
                        href={`${e.slug}`}
                        target="_blank"
                        className="fbt-figure "
                      >
                        <img src={e.thumbnail} title={e.title} alt={e.title} />
                      </a>
                      <span className="fbt-icon">+</span>
                    </React.Fragment>
                  )
                })}
            </div>
            <p className="fbt-total">
              <span>Total bundle price: </span>
              {hasDiscount() && (
                <span className="fbt-total-small">
                  {products && smallPriceSum()}
                </span>
              )}{" "}
              <span className="fbt-total-big">
                {products && allProductsSum()}
              </span>
              {hasDiscount() && (
                <div className="fbt-discount">
                  <span class="discount">
                    <span>{discount}% OFF </span>
                    <span className="fbt-discount--small">
                      (YOU SAVE {youSave()})
                    </span>
                  </span>
                </div>
              )}
            </p>

            <button onClick={e => addToCartBundle(e)} className="fbt-button">
              {loading ? "Adding bundle..." : "Add Bundle"}
            </button>
          </div>

          <div className="fbt-options">
            {products &&
              products.length >= 2 &&
              products.map((e, i) => {
                return (
                  <div className="fbt-option">
                    <label className="fbt-label" htmlFor={`fbt-checkbox${i}`}>
                      <div className="fbt-name">
                        <input
                          checked
                          className="fbt-checkbox"
                          type="checkbox"
                          id={`fbt-checkbox${i}`}
                        />
                        {i === 0 && (
                          <span className="fbt-this-item">This item: </span>
                        )}
                        <span>{e.title} </span>
                        <div className="fbt-price">{e.price}</div>
                      </div>
                    </label>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }

  return products && products.length >= 2 ? (
    <RenderFBT></RenderFBT>
  ) : (
    <div></div>
  )
}
