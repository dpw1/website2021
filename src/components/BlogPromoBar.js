import React, { useEffect, useState } from "react"
import { setCookie, getCookie, scrollToImmediate } from "../utils/utils"

import "./BlogPromoBar.scss"

export default function BlogPromoBar() {
  const COOKIE_NAME = "ezfy_blog_promo"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookie = getCookie(COOKIE_NAME)

    if (!cookie) {
      setIsVisible(true)
    }
  }, [])

  function closePopup() {
    setCookie(COOKIE_NAME, "true", 3)
    setIsVisible(false)
  }
  return (
    <div className={`PromoBar ${isVisible ? "PromoBar--visible" : ""}`}>
      <div className="PromoBar-wrapper">
        <span
          onClick={e => {
            e.preventDefault()
            closePopup()
          }}
          className="PromoBar-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19 19"
            fill="none"
          >
            <rect
              x="16.9706"
              width={2}
              height={24}
              transform="rotate(45 16.9706 0)"
              fill="#C4C4C4"
            />
            <rect
              y="1.41418"
              width={2}
              height={24}
              transform="rotate(-45 0 1.41418)"
              fill="#C4C4C4"
            />
          </svg>
        </span>
        <div className="PromoBar-text">
          <p className="PromoBar-title">
            Looking for a <u>reliable</u> Shopify expert?
          </p>

          <p className="PromoBar-subtitle">
            From bug fixes to custom sections, feel free to get in touch with
            us.
          </p>
        </div>
        <a
          onClick={() => {
            try {
              scrollToImmediate(
                document.querySelector(`#contact #contact-form button`)
              )

              const $form = document.querySelector(`[type="email"]`)
              $form.focus()
            } catch (err) {}
          }}
          href="#"
          className="PromoBar-button btn buy-now-button"
        >
          Request a Quote
        </a>
      </div>
    </div>
  )
}
