import React, { useEffect } from "react"
import { _waitForElement } from "../utils/utils"
import "./CartEcwid.scss"

export default function CartEcwid(props) {
  const { isMobile } = props

  useEffect(() => {
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

    function _waitForElement(selector, delay = 50, tries = 250) {
      const element = document.querySelector(selector)

      if (!window[`__${selector}`]) {
        window[`__${selector}`] = 0
      }

      function _search() {
        return new Promise(resolve => {
          window[`__${selector}`]++
          setTimeout(resolve, delay)
        })
      }

      if (element === null) {
        if (window[`__${selector}`] >= tries) {
          window[`__${selector}`] = 0
          return Promise.reject(null)
        }

        return _search().then(() => _waitForElement(selector))
      } else {
        return Promise.resolve(element)
      }
    }

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    /* if the user clicks the cart and it hasn't loaded yet,
    it will wait until the cart loads and then show it up */
    function handleDelayedEcwidCartOpen() {
      const $carts = document.querySelectorAll(`.CartEcwid-loader`)

      if (!$carts) {
        return
      }

      for (const $cart of $carts) {
        $cart.addEventListener(`click`, async function () {
          const $counter = document.querySelector(`.ec-minicart__counter`)

          if ($counter) {
            return
          }

          await _waitForElement(`.ec-minicart__counter`)

          Ecwid.ShoppingCartController.openCart()
        })
      }
    }

    handleBackToShoppingButtonClick()
    handleDelayedEcwidCartOpen()
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
        <div className="lds-ring CartEcwid-loader">
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
