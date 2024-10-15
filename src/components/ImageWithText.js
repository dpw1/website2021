import React from "react"
import "./ImageWithText.scss"

import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import { scrollTo } from "../utils/utils"

export default function ImageWithText(props) {
  return (
    <section
      id="imagewithtext"
      className={`ImageWithText section features-area overflow-hidden bg-gray ptb_25 
      
      
      ${props.directionReverse ? "ImageWithText--reverse" : ""}
      ${props.page === "about" && "about-page"}`}
    >
      <div className="container">
        {props.hasOwnProperty("title") && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-6">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2>{props.title}</h2>
                <p className=" d-sm-block mt-4">{props.subtitle}</p>
              </div>
            </div>
          </div>
        )}

        <div className="row about-image-with-text">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <div className="features-item">
              <div>
                <div
                  className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight"
                  data-aos-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="about-text icon-text media-body align-self-center align-self-md-start">
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
