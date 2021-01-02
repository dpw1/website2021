import React, { useEffect, useState } from "react"
import "./Product.scss"
import parse from "html-react-parser"
import { replaceAll } from "./../utils/utils"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

function Product(item) {
  const { title, price, description, thumbnail, url } = item

  const fancyboxOptions = { buttons: ["close"], gutter: 15, loop: true }

  return (
    <article
      key={JSON.stringify(item)}
      className="product col-12 col-md-6 col-lg-4  portfolio-item services-item"
    >
      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb */}
        <div
          href="#"
          className="product-image   portfolio-thumb blog-thumb"
          data-type="iframe"
          data-src={url}
          href="javascript:;"
          data-options={JSON.stringify(fancyboxOptions)}
          data-fancybox="fancybox-products-thumbnail"
        >
          {/\.mp4/gim.test(thumbnail) ? (
            <video controls>
              <source src={thumbnail} />
            </video>
          ) : (
            <figure className="custom-overlay ">
              <img
                className="lazyload"
                src={""}
                data-src={thumbnail}
                alt={title}
              />
            </figure>
          )}
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content services-content blog-content p-4">
          {/* Portfolio Title */}
          <div className="services-price product-price">
            <h3 className="blog-title services-price-title my-3">
              <a
                data-type="iframe"
                data-src={url}
                href="javascript:;"
                data-options={JSON.stringify(fancyboxOptions)}
                data-fancybox="fancybox-products-title"
              >
                <span>{parse(title)}</span>
              </a>
            </h3>
            <h3 className="services-price-small product-price-small color-primary">
              {/free/gim.test(price) || <small className="fw-7">$</small>}
              {price}
            </h3>
          </div>

          <div className="product-description ">
            <React.Fragment>
              {parse(replaceAll(description, { "\n": " ", "<br>": "" }))}
            </React.Fragment>
          </div>
        </div>
        <div className="product-action">
          <a
            className="product-action-button btn mt-4 buy-now-button"
            data-type="iframe"
            data-src={url}
            href="javascript:;"
            data-options={JSON.stringify(fancyboxOptions)}
            data-fancybox="fancybox-products-action"
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  )
}

export default Product
