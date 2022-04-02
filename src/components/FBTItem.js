import React, { useEffect, useState } from "react"
import { useIsMounted } from "../hooks/useIsMounted"
import { useCart } from "../store/cartStore"

import "./FBTItem.scss"

function FBTItem(props) {
  const [state, actions] = useCart()

  const { product, index, addBundleProductToCart } = props

  // let isSelected =
  //   state.products.filter(e => e.id === props.product.id).length >= 1 || isFirst
  //     ? true
  //     : false

  useEffect(() => {
    if (product.selected) {
      addBundleProductToCart(product)
    }
    console.log("testtttttttttt", index)
  }, [])

  return (
    <div
      data-product-id={product.id}
      data-is-selected={product.selected}
      className="fbt-item"
    >
      <img src={product.thumbnail} title={product.title} alt={product.title} />

      <div className="fbt-item-content">
        <div className="fbt-item-title">{product.title}</div>

        <div className="fbt-item-bottom">
          <div className="fbt-item-text">
            <div className="fbt-item-price">
              Only{" "}
              <span className="fbt-item-price-amount">{product.price}</span>
            </div>
            <a className="fbt-item-details" target="_blank" href={product.slug}>
              View details
            </a>
          </div>
          {/* 
          <button
            onClick={async e => {
              e.preventDefault()

              props.addBundleProductToCart(product.id)
            }}
            className="fbt-item-atc"
          >
            {buttonText()}
          </button> */}

          <label htmlFor={product.id}></label>
          <input
            id={product.id}
            type="checkbox"
            checked={product.selected}
            onChange={e => {
              const isChecked = e.target.checked

              if (!isChecked) {
                actions.removeProduct(product)
              } else {
                actions.addProduct(product)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(FBTItem)
