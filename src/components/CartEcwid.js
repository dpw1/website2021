import React, { useEffect } from "react"
import {
  addDiscountCoupon,
  addDiscountCouponBasedOnQuantity,
  awaitEcwid,
  discounts,
  getProductsInCart,
  removeDiscountCoupon,
  _waitForElement,
} from "../utils/utils"
import "./CartEcwid.scss"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import { sleep } from "../../global-utils"

export default function CartEcwid(props) {
  const { isMobile } = props

  useEffect(async () => {
    await awaitEcwid()

    Ecwid.OnCartChanged.add(async function (cart) {
      var quantity = cart.productsQuantity

      if (
        window.previousCartQuantity &&
        quantity !== window.previousCartQuantity
      ) {
        console.log(
          "xx cart current X prev",
          quantity,

          window.previousCartQuantity
        )
        await removeDiscountCoupon()
        await sleep(1000)
        await addDiscountCouponBasedOnQuantity()
      }

      window.previousCartQuantity = cart.productsQuantity
    })

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

    /* if the user clicks the cart and it hasn't loaded yet,
    it will wait until the cart loads and then show it up */

    // TODO - shower loader only if user click here
    function handleDelayedEcwidCartOpen() {
      const $carts = document.querySelectorAll(`.CartEcwid-loader`)

      if (!$carts) {
        return
      }

      for (const $cart of $carts) {
        $cart.addEventListener(`click`, async function () {
          $cart.classList.add(`CartEcwid-loader--loading`)
          const $counter = document.querySelector(`.ec-minicart__counter`)

          if ($counter) {
            return
          }

          await _waitForElement(`.ec-minicart__counter`)

          Ecwid.ShoppingCartController.openCart()
        })
      }
    }

    function openCartExternally() {}

    handleBackToShoppingButtonClick()
    handleDelayedEcwidCartOpen()
    openCartExternally()
  }, [])

  return (
    <div
      className={`CartEcwid ${
        isMobile ? "CartEcwid--mobile" : "CartEcwid--desktop"
      }`}
      onClick={async () => {
        await addDiscountCouponBasedOnQuantity()
      }}
    >
      <a href="#">
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
          <div
            style={{ display: "none" }}
            className="lds-ring CartEcwid-loader"
          >
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
      </a>
    </div>
  )
}
