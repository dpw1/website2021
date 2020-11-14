import React, { Component } from "react";
import mobileImage from "../copy/img/ezfy-proof-mobile-up.jpg";
import desktopImage from "../copy/img/pixel_quite_black_portrait_trim_up.png";
import "./Hero.scss";

function Hero(props) {
  const { scrollTo, buttonText } = props;
  return (
    <section
      id="hero"
      className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center hero-column">
          <div className="col-12 col-md-4 order-2 order-md-1 image-column">
            {/* Welcome Thumb */}
            <div className="welcome-thumb mx-auto">
              <picture>
                <source
                  media="(max-width: 767px)"
                  sizes="1px"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
                />
                <img
                  className="desktop-only animation--float proof-image"
                  src={desktopImage}
                  alt="Top 1 rated Shopify Expert in the official Shopify forums."
                />
              </picture>
            </div>
          </div>
          {/* Welcome Intro Start */}
          <div className="col-12 col-md-8 order-1 order-md-2 text-column">
            <div className="welcome-intro px-0 px-lg-4">
              <h1 className="text-white font-italic mb-2 mb-md-3">
                <span className="animation--gradient-text">Top #1</span> Rated
                Shopify Expert
              </h1>
              <picture>
                <source
                  media="(min-width: 767px)"
                  sizes="1px"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w"
                />
                <img
                  className="mobile-only animation--float proof-image"
                  src={mobileImage}
                  alt="Top 1 rated Shopify Expert in the official Shopify forums."
                />
              </picture>
              <h3 className="text-white">
                <span
                  style={{
                    display: "block",
                    marginBottom: "-12px",
                    marginTop: 9,
                  }}>
                  at the official Shopify forums.
                </span>
                <br />
                <span>
                  Hire a{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://community.shopify.com/c/user/viewprofilepage/user-id/577094"
                    target="_blank"
                    className="hero-link">
                    certified Shopify Partner
                  </a>{" "}
                  to quickly attend all of your technical needs.
                </span>
              </h3>
              <p className="text-white mt-3 mb-4">
                <span>
                  More than 25 public recommendations, 200+ Shopify merchants
                  helped.
                </span>
              </p>
              {/* Store Buttons */}
              <div className="button-group store-buttons d-flex">
                <a
                  className="btn custom-btn text-uppercase scroll"
                  href={scrollTo}
                  data-scroll-offset={-60}>
                  {buttonText ? buttonText : "Get started"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shape Bottom */}
      <div className="shape-bottom">
        <svg
          viewBox="0 0 1920 310"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="svg replaced-svg">
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g
              id="v1.0"
              transform="translate(0.000000, -554.000000)"
              fill="#f6f9fe">
              <path
                d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395"
                id="v1.0"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
