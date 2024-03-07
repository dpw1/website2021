import React, { useState, useEffect } from "react"
import "./Advertise.scss"

import { siteRoutes } from "../utils/siteRoutes"

export default function Advertise(props) {
  const { title, image, link, list, subtitle } = props.advertisement
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
            data-src="https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-x.png"
            className="lazyload zyro-image trial-popup__bg-figure trial-popup__bg-figure--top ls-is-cached lazyload"
          />
          <img
            data-v-c1b39a62
            data-v-66b79341
            data-src="https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-1.png"
            className="lazyload zyro-image trial-popup__bg-figure trial-popup__bg-figure--bottom lazyload"
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
              href={siteRoutes.contactSection}
            ></a>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__title advertise-title body body--desktop  strong"
              data-v-cad483e2
            >
              {title}
            </p>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__subtitle body body--desktop  standard"
              data-v-cad483e2
            >
              {subtitle && subtitle.length >= 1 ? (
                subtitle
              ) : (
                <span>
                  Enhance your theme with <b>copy &amp; paste</b> code snippets.
                </span>
              )}
            </p>
            <div>{/* <img src={image} alt="" /> */}</div>
            <div
              data-v-66b79341
              data-v-cad483e2
              className="trial-popup__checklist"
            >
              {list &&
                list.length >= 1 &&
                list.map(e => {
                  return (
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
                        {e}
                      </p>
                    </div>
                  )
                })}
            </div>{" "}
            <a
              data-v-119b77a1
              data-v-66b79341
              className="button button--medium button--medium-mobile btn"
              data-qa="trialpopup-button-startfreetrial"
              data-v-cad483e2
              href={link}
            >
              FREE QUOTE
            </a>
            <p
              data-v-570454cb
              data-v-66b79341
              className="trial-popup__disclaimer body body--desktop  standard"
              data-v-cad483e2
            >
              <span data-v-66b79341 data-v-570454cb>
                Available from Monday to Saturday.
              </span>
            </p>
          </div>
        </div>
        <div
          data-v-cad483e2
          className="loading-backdrop"
          style={{ display: "none" }}
        ></div>
      </div>
    </div>
  )
}
