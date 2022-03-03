import React, { useState, useEffect } from "react"
import "./Advertise.scss"
import { getCookie, setCookie, removeCookie } from "../utils/utils"

import { siteRoutes } from "../utils/siteRoutes"

export default function Advertise() {
  return (
    <div
      data-v-cad483e2
      data-v-66b79341
      data-v-4929b0a9
      className={`advertise`}
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
            src="https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-1.png"
            className="zyro-image trial-popup__bg-figure trial-popup__bg-figure--bottom lazyload"
          />
          <div
            data-v-66b79341
            data-v-cad483e2
            className="trial-popup__content trial-popup__content--with-price-disclaimer"
          >
            <a
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__title advertise-title body body--desktop  strong advertise-custom-link"
              data-v-cad483e2
              target="_blank"
              href={siteRoutes.shop}
            ></a>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__title advertise-title body body--desktop  strong"
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
                  Over <b>6000</b> active users
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
              VIEW PLUGINS
            </a>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__disclaimer body body--desktop  standard"
              data-v-cad483e2
            >
              <span data-v-66b79341 data-v-570454cb>
                No coding knowledge required.
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
      </div>
    </div>
  )
}
