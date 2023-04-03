import React, { useEffect, useState } from "react"
import "./ProductItem.scss"
import parse from "html-react-parser"

import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { Link } from "gatsby"
import { replaceAll } from "./../utils/utils"
import Label from "./Label"

function ProductItem(props) {
  const {
    title,
    price,
    comparePrice,
    rawPrice,
    rawComparePrice,
    attributes,
    description,
    miniDescription,
    thumbnail,
    liveDemo,
    url,
    slug: _slug,
  } = "item" in props ? props.item : props

  const slug = props.page === "home" ? `/shop/${_slug}` : _slug
  const fancyboxOptions = { buttons: ["close"], gutter: 15, loop: true }
  const isHidden = attributes
    ? attributes.find(e => e.name.toLowerCase() === "development")
    : false

  console.log("all xx", props)
  return (
    !isHidden && (
      <article
        key={JSON.stringify(props)}
        className={`product ProductItem col-12 col-md-6 col-lg-4      portfolio-item services-item ${
          props.page === "home" ? "ProductItem--homepage" : ""
        }`}
      >
        {comparePrice && rawComparePrice > rawPrice && (
          <Label rawPrice={rawPrice} rawComparePrice={rawComparePrice}></Label>
        )}

        <div className="single-portfolio service-single res-margin">
          {/* Portfolio Thumb  */}
          <Link
            className="ProductItem-image portfolio-thumb blog-thumb"
            to={slug}
          >
            <figure className="aspect-ratio custom-overlay ">
              <img className="lazyload" src={thumbnail} alt={title} />
            </figure>
          </Link>
          {/* Portfolio Content */}
          <div className="ProductItem-content   portfolio-content services-content blog-content p-4">
            {/* Portfolio Title */}
            <div className="services-price ProductItem-price">
              <h3 className="ProductItem-title blog-title services-price-title my-3">
                <Link to={slug} data-options={JSON.stringify(fancyboxOptions)}>
                  <span>{parse(title)}</span>
                </Link>
              </h3>
              <div className="ProductItem-sale   ">
                <p className="services-price-small ProductItem-price-small color-primary">
                  {/free/gim.test(price)
                    ? price
                    : price.toString().replace(".00", "").replace("$0", "Free")}
                </p>
                {rawComparePrice > rawPrice && (
                  <p className="ProductItem-price-big color-primary">
                    {comparePrice}
                  </p>
                )}
              </div>
            </div>

            <div className="ProductItem-description ">
              <React.Fragment>
                {miniDescription &&
                  parse(replaceAll(miniDescription, { "\n": " ", "<br>": "" }))}
              </React.Fragment>
            </div>
          </div>
          <div className="ProductItem-action">
            {/* <p>Slug: {slug}</p> */}

            <Link
              to={slug}
              className="ProductItem-action-button btn mt-4 buy-now-button"
            >
              View Details
            </Link>
            <a className="ProductItem-preview" target="_blank" href={liveDemo}>
              <span>View Live Demo</span>{" "}
              <svg
                className="ProductItem-arrow"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 120.64 122.88"
                style={{ enableBackground: "new 0 0 120.64 122.88" }}
                xmlSpace="preserve"
              >
                <g>
                  <path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z" />
                </g>
              </svg>
            </a>
            {/* <a
            className="product-action-button btn mt-4 buy-now-button"
            data-type="iframe"
            data-src={url}
            href="javascript:;"
            data-options={JSON.stringify(fancyboxOptions)}
            data-fancybox="fancybox-products-action"
          >
            View Details
          </a> */}
          </div>
        </div>
      </article>
    )
  )
}

export default ProductItem
