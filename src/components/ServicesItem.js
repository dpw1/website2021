import React, { useState, useRef } from "react";
import "./ServicesItem.scss";
import TrustBadge from "./TrustBadge";
import { servicesItems } from "./../utils/utils";
// import ReactGA from "react-ga";
import parse from "html-react-parser";
// ReactGA.initialize("UA-112401482-2", { testMode: true });
// ReactGA.pageview(window.location.pathname + window.location.search);
// import PaypalCheckout from "./PaypalCheckout";

/* 
 *
INFO:

You can find all items' JSON at servicesItems in utils/utils
 *
 */

function ServicesItem(props) {
  const {
    tags,
    video,
    price,
    image,
    preview,
    title,
    loadImage,
    paymentLink,
    descriptionList,
    subtitle,
    readmore,
  } = props;

  const text = descriptionList ? descriptionList() : subtitle();

  //   const [isButtonLoading, setIsButtonLoading] = useState(false);

  return (
    <div
      key={JSON.stringify(props)}
      className="col-12 col-md-6 col-lg-4  portfolio-item services-item"
      data-portfolio-item-tags={tags.join(", ")}>
      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb */}
        <div
          href={video}
          className="portfolio-thumb blog-thumb"
          data-fancybox="/lightbox-service">
          <figure className="custom-overlay">
            <img
              className="lazyload"
              src={loadImage ? image : undefined}
              data-src={loadImage || image}
              alt={title}
            />
          </figure>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content services-content blog-content p-4">
          {/* Portfolio Title */}
          <div className="services-price">
            <h3 className="blog-title services-price-title my-3">
              <a href={video} data-fancybox="/lightbox-service-1">
                <span>{parse(title)}</span>
              </a>
            </h3>
            <h3 className="services-price-small color-primary">
              <small className="fw-7">$</small>
              {price}
            </h3>
          </div>
          <ul className="meta-info d-flex services-item-list">
            <li>
              <a
                rel="noopener noreferrer"
                className={
                  preview.length > 0
                    ? "custom-link"
                    : " custom-link portfolio-blocked"
                }
                href={preview.length <= 0 ? "#" : preview}
                target="_blank">
                Live demo
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                className={
                  preview.length > 0
                    ? "custom-link"
                    : " custom-link portfolio-blocked"
                }
                href={video}
                data-fancybox="/lightbox-service-2">
                More information
              </a>
            </li>
          </ul>

          <div
            className={`services-subtitle services-item-subtitle ${
              !readmore ? "services-item-subtitle--margin" : ""
            }`}>
            {/* <div className="services-description">{subtitle && subtitle()}</div> */}
            <React.Fragment>{text}</React.Fragment>

            {console.log(text)}

            {readmore && (
              <a href="#" className="services-read-more custom-link">
                Read more
              </a>
            )}
          </div>
        </div>
        <div
          className={`services-button ${
            paymentLink === "contact" ? "services-button--contact" : undefined
          }`}>
          {paymentLink && (
            <a
              onClick={() => {
                console.log("bought");
              }}
              href={
                paymentLink === "contact"
                  ? "#contact"
                  : `${paymentLink}?wanted=true`
              }
              data-gumroad-single-product="true"
              className={`btn mt-4 buy-now-button ${
                paymentLink === "contact" ? "scroll" : undefined
              }`}>
              Buy Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
