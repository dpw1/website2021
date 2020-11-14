import React, { Component } from "react";
import "./Parallax.scss";

function Parallax(props) {
  const { title, subtitle, buttonText } = props;

  return (
    <div className="ezfy-parallax">
      <div className="ezfy-parallax-container">
        <div className="ezfy-parallax-background">
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;"
            alt="Background with geometric patterns."
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;"
            alt="Background with geometric patterns."
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;"
            alt="Background with geometric patterns."
          />
          <img
            loading="lazy"
            className="lazyload"
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;"
            alt="Background with geometric patterns."
          />
          <img
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
            className="lazyload"
            alt="Background with geometric patterns."
          />
          <img
            data-src="https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg"
            loading="lazy"
            className="lazyload"
            alt="Background with geometric patterns."
          />
        </div>

        <div className="ezfy-parallax-text">
          <h2>{title}</h2>
          <h3 className="ezfy-parallax-subtitle">{subtitle}</h3>
          <a
            className="btn custom-btn scroll"
            href={"#contact"}
            data-scroll-offset={-60}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
