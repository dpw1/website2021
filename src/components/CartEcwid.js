import React, { useEffect } from "react"
import { _waitForElement } from "../utils/utils"
import "./CartEcwid.scss"

export default function CartEcwid(props) {
  const { isMobile } = props

  const handleBackToShoppingButtonClick = async () => {
    const $cart = window.document.querySelector(`.ec-cart-widget`)

    if (!$cart) {
      return
    }

    $cart.addEventListener("click", async function () {
      const $button = await _waitForElement(
        `.ec-cart__button > .form-control > button`
      )

      $button.addEventListener("click", function () {
        const $close = document.querySelector(`.ecwid-popup-closeButton`)

        if (!/shop/.test(window.location.href)) {
          return (window.location.href = `${window.location.origin}/shop`)
        }

        return $close.click()
      })

      console.log("continue shopping btn", $button)
    })
  }

  useEffect(() => {
    handleBackToShoppingButtonClick()
  }, [])

  return (
    <div
      className={`CartEcwid ${
        isMobile ? "CartEcwid--mobile" : "CartEcwid--desktop"
      }`}
    >
      <div className="CartEcwid-skeleton">
        <svg
          className="icon-default"
          width="36"
          height="30"
          viewBox="0 0 36 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M2 3h5l4 17h18l3-12H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="13.5"
              cy="26.5"
              r="2.5"
              stroke="currentColor"
              strokeWidth="2"
            ></circle>
            <circle
              cx="27.5"
              cy="26.5"
              r="2.5"
              stroke="currentColor"
              strokeWidth="2"
            ></circle>
          </g>
        </svg>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        data-responsive="FALSE"
        data-icon="CART"
        className="ec-cart-widget"
      ></div>
    </div>
  )
}
