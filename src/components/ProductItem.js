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
    url,
    slug: _slug,
  } = "item" in props ? props.item : props

  const slug = props.page === "home" ? `/shop/${_slug}` : _slug
  const fancyboxOptions = { buttons: ["close"], gutter: 15, loop: true }
  const isHidden = attributes
    ? attributes.find(e => e.name.toLowerCase() === "development")
    : false

  console.log("all", props)
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
