import React, { useEffect } from "react"
import {
  addDiscountCoupon,
  addDiscountCouponBasedOnQuantity,
  awaitEcwid,
  discounts,
  doesCartNeedDiscountToBeApplied,
  handleEmptCartButtonClick,
  removeDiscountCoupon,
  _waitForElement,
} from "../utils/utils"
import "./CartEcwid.scss"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import { sleep } from "../../global-utils"
import { isBrowser } from "./../utils/utils"

export default function CartEcwid(props) {
  const { isMobile } = props

  useEffect(async () => {
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
      const $loaders = document.querySelectorAll(`.CartEcwid-loader`)

      if (!$loaders) {
        return
      }

      for (const $loader of $loaders) {
        $loader.addEventListener(`click`, async function () {
          const $cart = await _waitForElement(
            `[data-ec-widget-loaded="true"]`,
            50,
            10
          )

          if (!$cart) {
            return
          }

          $cart.click()

          Ecwid.ShoppingCartController.openCart()
        })
      }
    }

    async function handleCartChanges() {
      await awaitEcwid()

      Ecwid.OnCartChanged.add(async function (cart) {
        console.log("cart changes", cart)

        if (
          window.hasOwnProperty("previousCartData") &&
          window.previousCartData === JSON.stringify(cart)
        ) {
          console.log("no updates needed", cart)
          return
        }

        if (cart.productsQuantity <= 1) {
          await removeDiscountCoupon()
        } else if (cart.productsQuantity >= 2) {
          await addDiscountCouponBasedOnQuantity(cart)
        }

        window.previousCartData = JSON.stringify(cart)
        return

        // if (
        //   window.previousCartQuantity &&
        //   cart.productsQuantity !== window.previousCartQuantity
        // ) {
        //   const applyDiscount = doesCartNeedDiscountToBeApplied(cart)

        //   console.log("apply discount? ", applyDiscount, cart)

        //   if (applyDiscount === "NOTHING") {
        //     return
        //   }

        //   if (applyDiscount === "APPLY") {
        //     console.log("apply - applying discount...")
        //     await removeDiscountCoupon()
        //     await sleep(1000)
        //     await addDiscountCouponBasedOnQuantity()
        //   } else if (applyDiscount === "REMOVE") {
        //     console.log("apply - REMOVING discount...")

        //     await removeDiscountCoupon()
        //   }
        // }

        // window.previousCartQuantity = cart.productsQuantity
      })
    }

    handleCartChanges()
    handleBackToShoppingButtonClick()
    handleDelayedEcwidCartOpen()
    handleEmptCartButtonClick()
  }, [])

  return (
    <div
      className={`CartEcwid ${
        isMobile ? "CartEcwid--mobile" : "CartEcwid--desktop"
      }`}
    >
      <a href="#">
        <div
          data-responsive="FALSE"
          data-icon="CART"
          className="CartEcwid-cart ec-cart-widget"
          onClick={async () => {
            await addDiscountCouponBasedOnQuantity()
            handleEmptCartButtonClick()
          }}
        ></div>
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
      </a>
    </div>
  )
}
