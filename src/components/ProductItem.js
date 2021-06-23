import React, { useEffect, useState } from "react"
import "./ProductItem.scss"
import parse from "html-react-parser"

import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { Link } from "gatsby"
import { replaceAll } from "./../utils/utils"

function ProductItem(props) {
  const {
    title,
    price,
    description,
    miniDescription,
    thumbnail,
    url,
    slug: _slug,
  } = "item" in props ? props.item : props

  // debugger

  const slug = props.page === "home" ? `/shop/${_slug}` : _slug
  const fancyboxOptions = { buttons: ["close"], gutter: 15, loop: true }

  return (
    <article
      key={JSON.stringify(props)}
      className={`product ProductItem col-12 col-md-6 col-lg-4      portfolio-item services-item ${
        props.page === "home" ? "ProductItem--homepage" : ""
      }`}
    >
      {/* <a
        href="https://www.fatfreecartpro.com/ecom/gb.php?&c=cart&ejc=2&cl=374804&i=1695842"
        style={{
          display: "inline-block",
          background:
            "#3da5d9 url(https://www.e-junkie.com/ej/images/newaddtocart.png) center/100px no-repeat",
          border: "none",
          padding: "7px 55px",
          borderRadius: 3,
          boxShadow: "1px 2px 2px rgba(0,0,0,0.2)",
          textDecoration: "none",
        }}
        target="ej_ejc"
        className="ec_ejc_thkbx"
      >
        add item
      </a> */}

      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb  */}
        <Link
          className="ProductItem-image portfolio-thumb blog-thumb"
          to={slug}
        >
          {/\.mp4/gim.test(thumbnail) ? (
            <video controls>
              <source src={thumbnail} />
            </video>
          ) : (
            <figure className="aspect-ratio custom-overlay ">
              <img
                className="lazyload"
                src={""}
                data-src={thumbnail}
                alt={title}
              />
            </figure>
          )}
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
            <p className="services-price-small ProductItem-price-small color-primary">
              {/free/gim.test(price)
                ? price
                : price.toString().replace(".00", "").replace("$0", "Free")}
            </p>
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
}

export default ProductItem
