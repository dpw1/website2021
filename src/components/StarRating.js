import React from "react"
import Stars from "./atom/Stars"
import "./StarRating.scss"
export default function StarRating() {
  return (
    <div
      className="StarRating product-ratings-container js-average-rating-container soft-hidden"
      style={{ display: "block" }}
    >
      <div className="ratings-box ratings-box--is-small js-ratings-box showing-histogram">
        <p className="ratings-box__count show-histogram">
          <Stars />
          <span className="js-reviews-count" data-custom-highlight-text>
            50 ratings
          </span>
          <i className="gi gi-chevron-bottom"> &gt; </i>
        </p>
        <ul className="ratings-box__histogram">
          <li className="js-rating-percent-container" data-value={5}>
            <div className="ratings-box__histogram bar">
              <div
                className="filled js-rating-percent-bar"
                style={{ width: "92%" }}
              />
            </div>
            <label>
              5 star
              <span className="js-rating-percent">92%</span>
            </label>
          </li>
          <li className="js-rating-percent-container" data-value={4}>
            <div className="ratings-box__histogram bar">
              <div
                className="filled js-rating-percent-bar"
                style={{ width: "2%" }}
              />
            </div>
            <label>
              4 star
              <span className="js-rating-percent">2%</span>
            </label>
          </li>
          <li className="js-rating-percent-container" data-value={3}>
            <div className="ratings-box__histogram bar">
              <div
                className="filled js-rating-percent-bar"
                style={{ width: "4%" }}
              />
            </div>
            <label>
              3 star
              <span className="js-rating-percent">4%</span>
            </label>
          </li>
          <li className="js-rating-percent-container" data-value={2}>
            <div className="ratings-box__histogram bar">
              <div
                className="filled js-rating-percent-bar"
                style={{ width: "2%" }}
              />
            </div>
            <label>
              2 star
              <span className="js-rating-percent">2%</span>
            </label>
          </li>
          <li className="js-rating-percent-container" data-value={1}>
            <div className="ratings-box__histogram bar">
              <div
                className="filled js-rating-percent-bar"
                style={{ width: "0%" }}
              />
            </div>
            <label>
              1 star
              <span className="js-rating-percent">0%</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}
