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
              const $el = window.document.querySelector(`[id='contact']`)

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
