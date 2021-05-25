import React, { useEffect, useState } from "react"
import "./FrequentlyBoughtTogether.scss"

export default function FrequentlyBoughtTogether(props) {
  // const { product: _product } = props

  const [products, setProducts] = useState([])

  const sanitizeRelatedProducts = product => {
    if (product.length <= 0 || typeof product.relatedProducts !== "object") {
      return
    }

    let productCopy = product
    const related = productCopy.relatedProducts
    delete productCopy.relatedProducts

    return [productCopy, ...related]
  }

  useEffect(() => {
    setProducts(sanitizeRelatedProducts(props.product))
  }, [props.product])

  useEffect(() => {
    console.log("MY RELATED PRODUCTS                      ", products)
  }, [products])

  return (
    <div className="fbt">
      <div className="fbt-container">
        <h3 className="fbt-title">Save With Our Bundle Of Love Special</h3>

        <div className="fbt-products">
          <h4 className="fbt-subtitle">
            Save by buying these products together
          </h4>

          <div className="fbt-figures">
            {products &&
              products.length >= 1 &&
              products.map(e => {
                return (
                  <a href={e.slug} className="fbt-figure ">
                    <img src={e.thumbnail} alt="" />
                  </a>
                )
              })}
          </div>
          <p className="fbt-total">
            Total bundle price: <span className="fbt-total-small">$74.91</span>{" "}
            <span className="fbt-total-big">$74.91</span>
          </p>
        </div>

        <div className="fbt-options">
          {products &&
            products.length >= 1 &&
            products.map((e, i) => {
              return (
                <div className="fbt-option">
                  <input
                    checked
                    className="fbt-checkbox"
                    type="checkbox"
                    id={`fbt-checkbox${i}`}
                  />
                  <label
                    className="fbt-option-label"
                    htmlFor={`fbt-checkbox${i}`}
                  >
                    <div className="fbt-option-name">
                      {i === 0 && <span>This item: </span>}
                      {e.title}
                    </div>
                    <div className="fbt-option-price">{e.price}</div>
                  </label>
                </div>
              )
            })}
          {/* <div className="fbt-option">
            <input
              className="fbt-checkbox"
              type="checkbox"
              id="fbt-checkbox1"
            />
            <label className="fbt-option-label" htmlFor="fbt-checkbox1">
              <div className="fbt-option-name">Debut Theme Pro</div>
              <div className="fbt-option-price">$10.00</div>
            </label>
          </div>

          <div className="fbt-option">
            <input className="fbt-checkbox" type="checkbox" />
            <label className="fbt-option-label" htmlFor="fbt-checkbox1">
              <div className="fbt-option-name">Debut Theme Pro</div>
              <div className="fbt-option-price">$10.00</div>
            </label>
          </div>

          <div className="fbt-option">
            <input className="fbt-checkbox" type="checkbox" />
            <label className="fbt-option-label" htmlFor="fbt-checkbox2">
              <div className="fbt-option-name">Debut Theme Pro</div>
              <div className="fbt-option-price">$10.00</div>
            </label>
          </div> */}
        </div>
      </div>
    </div>
  )
}
