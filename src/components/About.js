import React from "react"
import "./About.scss"
import image from "../copy/img/avatar/diego.jpg"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"
import { scrollTo } from "../utils/utils"

function About(props) {
  return (
    <section
      id="about"
      className={`about section features-area overflow-hidden bg-gray ptb_25 ${
        props.page === "about" && "about-page"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>About EZFY</h2>
              <p className=" d-sm-block mt-4">
                A little bit about the story behind EZFY.
              </p>
            </div>
          </div>
        </div>
        <div className="row about-image-with-text">
          <div className="col-12 col-md-6">
            <figure
              className="about-image wow fadeInLeft"
              data-aos-duration="2s"
              data-wow-delay="0.2s"
            >
              {/* Work Slider */}
              <img src={image} alt="Diego Moretti- EZFY's creator" />
            </figure>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <ul className="features-item">
              <li>
                {/* Image Box */}
                <div
                  className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight"
                  data-aos-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="about-text icon-text media-body align-self-center align-self-md-start">
                    <p className="d-sm-block">
                      Greetings! My name is Diego. I am a Computer Science
                      graduate software engineer who has been working as a
                      Shopify developer since 2012.
                    </p>

                    <p className="d-block mt-4">
                      The main intent of <b className="custom-emphasis">EZFY</b>{" "}
                      is to take care of all of your technical Shopify needs so
                      you can focus on the business side of your e-commerce.
                    </p>
                    <p className="d-block mt-4">
                      We'll help you with customizations, bug fixes, creating
                      custom sections and anything else related to customizing
                      your theme. Feel free to check our{" "}
                      <Link to={siteRoutes.shop} className="custom-link">
                        shop
                      </Link>{" "}
                      out for some ideas as well.
                    </p>
                    <p className="d-block mt-4">
                      We also invite you to take a look at what our previous
                      customers testimonials, just{" "}
                      <Link to="/#reviews" className=" custom-link">
                        click here
                      </Link>
                      .
                    </p>
                    <p className="d-block mt-4">
                      Thank you for your time and for your visit!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container about-help">
        <div className="row justify-content-center">
          <div className="col-12 ">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>How EZFY can help you</h2>
            </div>
          </div>
        </div>
        <div className="row about-buttons">
          <button
            onClick={() => {
              const $el = window.document.querySelector(`[id='CodeSnippets']`)

              if ($el) {
                scrollTo($el, -60)
              }
            }}
            className="btn  "
          >
            Code Snippets
          </button>
          <button
            onClick={() => {
              const $el = window.document.querySelector(`[id='custom-coding']`)

              if ($el) {
                scrollTo($el, -60)
              }
            }}
            className="btn btn--white"
          >
            Custom Coding
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
