import React, { useState, useEffect } from "react"
import "./Popup.scss"
import { getCookie, setCookie, removeCookie } from "./../utils/utils"

import { siteRoutes } from "./../utils/siteRoutes"

export default function Popup() {
  const COOKIE_NAME = `ezfy-modal-popup`
  const COOKIE_EXPIRATION = 5
  const [open, setOpen] = useState(false)

  useEffect(() => {
    /**
     *
     * Persistent countdown using local storage. Counts from interval to 0, returning a promise once it's over.
     * @returns
     */
    function countdown(interval = 20000) {
      return new Promise(async (resolve, reject) => {
        let intervalLoop = null

        function countTimer() {
          if (!localStorage.endTime) {
            localStorage.endTime = +new Date() + interval
          }

          let remaining = localStorage.endTime - new Date()
          if (remaining >= 0) {
            let currentTime = Math.floor(remaining / 1000)
          } else {
            clearInterval(intervalLoop)
            localStorage.removeItem("endTime")
            resolve(true)
          }
        }

        intervalLoop = setInterval(countTimer, 1000)
      })
    }

    /* In case something goes wrong, removes the broken popup */
    function removePopup() {
      const $popup = window.document.querySelector(
        `.modal-backdrop--visible.modal-backdrop--invisible`
      )

      if (!$popup) {
        return
      }

      $popup.remove()
    }

    ;(async _ => {
      removePopup()
      /* Popup has already been shown, return. */
      if (getCookie(COOKIE_NAME) === "true") {
        return
      } else {
      }

      console.log("waiting handle timer...")
      await countdown()

      if (/\/shop/.test(window.location.href)) {
        return
      }

      setOpen(true)
      setCookie(COOKIE_NAME, "true", COOKIE_EXPIRATION)

      removePopup()

      document.addEventListener(
        "click",
        function (event) {
          const _class = event.target.classList
          const hasToClose =
            _class.contains("modal-backdrop--visible") ||
            _class.contains("PopupModalClose")

          if (hasToClose) {
            setOpen(false)
            removePopup()
            localStorage.removeItem("endTime")

            return
          }
        },
        false
      )
    })()
  }, [])
  return open ? (
    <div
      data-v-cad483e2
      data-v-66b79341
      data-v-4929b0a9
      className={`modal-backdrop trial-popup ${
        open ? "modal-backdrop--visible" : "modal-backdrop--invisible"
      }`}
    >
      <div
        data-v-cad483e2
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        className="modal modal--with-shadow modal--rounded"
      >
        <div
          data-v-66b79341
          data-v-cad483e2
          className="trial-popup__content-wrapper"
        >
          <img
            data-v-c1b39a62
            data-v-66b79341
            src="https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-x.png"
            className="zyro-image trial-popup__bg-figure trial-popup__bg-figure--top ls-is-cached lazyload"
          />
          <img
            data-v-c1b39a62
            data-v-66b79341
            src="https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower.png"
            className="zyro-image trial-popup__bg-figure trial-popup__bg-figure--bottom lazyload"
          />
          <div
            data-v-66b79341
            data-v-cad483e2
            className="trial-popup__content trial-popup__content--with-price-disclaimer"
          >
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__title body body--desktop  strong"
              data-v-cad483e2
            >
              No more monthly fees for Shopify apps.
            </p>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__subtitle body body--desktop  standard"
              data-v-cad483e2
            >
              Enhance your theme with <b>copy &amp; paste</b> code snippets.
            </p>
            <div
              data-v-66b79341
              data-v-cad483e2
              className="trial-popup__checklist"
            >
              <div
                data-v-66b79341
                data-v-cad483e2
                className="trial-popup__checklist-item"
              >
                <div
                  data-v-66b79341
                  data-v-cad483e2
                  className="trial-popup__checklist-item-icon-wrapper"
                >
                  <svg
                    className="checkmark-icon"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <p
                  data-v-570454cb
                  data-v-66b79341
                  className="trial-popup__checklist-item-text body body--desktop  standard"
                  data-v-cad483e2
                >
                  Same day response customer support
                </p>
              </div>
              <div
                data-v-66b79341
                data-v-cad483e2
                className="trial-popup__checklist-item"
              >
                <div
                  data-v-66b79341
                  data-v-cad483e2
                  className="trial-popup__checklist-item-icon-wrapper"
                >
                  <svg
                    className="checkmark-icon"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <p
                  data-v-570454cb
                  data-v-66b79341
                  className="trial-popup__checklist-item-text body body--desktop  standard"
                  data-v-cad483e2
                >
                  Over <b>5000</b> active users
                </p>
              </div>
              <div
                data-v-66b79341
                data-v-cad483e2
                className="trial-popup__checklist-item"
              >
                <div
                  data-v-66b79341
                  data-v-cad483e2
                  className="trial-popup__checklist-item-icon-wrapper"
                >
                  <svg
                    className="checkmark-icon"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                  >
                    <g>
                      <g>
                        <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <p
                  data-v-570454cb
                  data-v-66b79341
                  className="trial-popup__checklist-item-text body body--desktop  standard"
                  data-v-cad483e2
                >
                  Coded by certified Shopify Partners
                </p>
              </div>
            </div>{" "}
            <a
              data-v-119b77a1
              data-v-66b79341
              className="button button--medium button--medium-mobile btn"
              data-qa="trialpopup-button-startfreetrial"
              data-v-cad483e2
              href={siteRoutes.shop}
            >
              VIEW CODE SNIPPETS
            </a>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__disclaimer body body--desktop  standard"
              data-v-cad483e2
            >
              <span data-v-66b79341 data-v-570454cb>
                Free and premium options available.
              </span>
            </p>
          </div>
        </div>
        <div
          data-v-cad483e2
          className="loading-backdrop"
          style={{ display: "none" }}
        >
          <div
            data-v-4f31bd68
            data-v-cad483e2
            className="loader loaderSize--medium"
            style={{ justifyContent: "center" }}
          >
            <div
              data-v-4f31bd68
              className="loader__element loaderColor--grey loaderSize--medium"
            />
            <div
              data-v-4f31bd68
              className="loader__element loaderColor--grey loaderSize--medium"
            />
            <div
              data-v-4f31bd68
              className="loader__element loaderColor--grey loaderSize--medium"
            />
            <div
              data-v-4f31bd68
              className="loader__element loaderColor--grey loaderSize--medium"
            />
          </div>
        </div>
        <button
          data-v-3d0c5569
          data-v-cad483e2
          aria-label="Close"
          className="PopupModalClose button-close close-button"
        >
          <svg
            viewBox="0 0 512.001 512.001"
            style={{ enableBackground: "new 0 0 512.001 512.001" }}
          >
            <g>
              <g>
                <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <div />
  )
}
