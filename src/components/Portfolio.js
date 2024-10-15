import React, { useState } from "react"
import ModalVideo from "react-modal-video"

import "./Portfolio.scss"

const items = [
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/lightmybricks-video-2024.webm"),
    image: require("../copy/img/thumbnail/thumbnail-light-bricks.jpg"),
    sourceCode: "",
    liveWebsite: "http://lightmybricks.com.au/",
    title: "Light My Bricks",
    subtitle: `Australian worldwide famous company selling leds for Legos®. Our
    work consisted of coding a custom Shopify theme.`,
    alt: "Portfolio - Light my Bricks Shopify store",
  },
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-zudo.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-zudo.jpg"),
    sourceCode: "",
    liveWebsite: "http://zudo.co/",
    title: "Zudo",
    subtitle: `Shopify website fully customized for client. We worked on a complete overhaul on top of the Impulse theme.`,
    alt: "Portfolio - Zudo Shopify Store",
  },

  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-yokd.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-yokd.jpg"),
    sourceCode: "",
    liveWebsite: "https://www.getyokd.com/",
    title: "GET YOK'D",
    subtitle: `The project owner requested website optimizations, implementation of custom sections and
    multiple styling modifications.`,
    alt: "Portfolio - GET YOKED's Website",
  },
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-bubs.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-bubs.jpg"),
    sourceCode: "",
    liveWebsite: "https://www.bubswarehouse.com/",
    title: "Bubswarehouse",
    subtitle: `Bubswarehouse was one of the biggest online stores in
    Australia selling baby clothes and toys. We've worked
    closely together to maximize the store's conversion rates.`,
    alt: "Portfolio - Bubswarehouse's Shopify website",
  },
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-dog.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-dog.jpg"),
    sourceCode: "",
    liveWebsite: "https://dogsbestfriendaustralia.com.au/",
    title: "DOG'S BEST FRIEND AUSTRALIA",
    subtitle: `    Creation of new components on top of a theme.
    Implementation of the new collection section "Best
    Sellers".`,
    alt: "Portfolio - Dog's Best Friend Australia Shopify Website",
  },
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-birthcanva.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-birthcanva.jpg"),
    sourceCode: "",
    liveWebsite: "https://birthcanva.com/",
    title: "Birthcanva",
    subtitle: `Shopify website. We worked together to improve the overall
    performance, add new sections and styles customizations.`,
    alt: "Portfolio - Birthcanva Shopify Website",
  },
  {
    tags: ["HTML5", "CSS3", "Shopify", "Liquid", "ES6", "SCSS / SASS"],
    video: require("../copy/videos/video-jim.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-jim.jpg"),
    sourceCode: "",
    liveWebsite: "https://www.cosycribs.com.au/",
    title: "Cosy Cribs",
    subtitle: `Australian e-commerce based on Shopify selling furnitures.`,
    alt: "Portfolio - Cosy Cribs' Website",
  },
  {
    tags: ["HTML5", "CSS3", "Handlebars.js", "SCSS / SASS", "UX"],
    video: require("../copy/videos/video-studiotagus.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-studiotagus.jpg"),
    sourceCode: "https://github.com/dpw1/tagus-v3",
    liveWebsite: "",
    title: "Studio Tagus",
    subtitle: `Digital agency coded by EZFY from the ground up for a startup.`,
    alt: "Portfolio - Studio Tagus digital agency",
  },
  {
    tags: ["HTML5", "CSS3", "Stylus", "UX", "Shopify"],
    video: require("../copy/videos/video-megalancers.mp4"),
    image: require("../copy/img/thumbnail/thumbnail-megalancers.jpg"),
    sourceCode: "",
    liveWebsite: "https://megalancers.com/",
    title: "Megalancers",
    subtitle: `Popularly known as the “Brazilian Fiverr” , EZFY
    assisted the company to bring their website idea to life in. Everything was coded
    from scratch based on a .PSD file, wired up with Shopify's API.`,
    alt: "Portfolio - Megalancers Website",
  },
]

const PortfolioItem = item => {
  const {
    tags,
    video,
    image,
    sourceCode,
    liveWebsite,
    title,
    subtitle,
    alt,
  } = item

  const [play, setPlay] = useState(false)
  return (
    <div
      className="col-12 col-md-4 portfolio-item"
      data-portfolio-item-tags={tags.join(", ")}
    >
      <div className="single-portfolio res-margin">
        {/* Portfolio Thumb */}
        <div className="portfolio-thumb blog-thumb">
          <a className="play-btn">
            <div className="btn-circle play-animation" />
            <div className="btn-circle play-animation animation-short" />
            {/* Play Icon */}
            <div className="play-icon">
              <svg
                className="svg-inline--fa fa-play fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg
              >
                <path
                  fill="currentColor"
                  d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                ></path>
              </svg>
              {/* <i class="fas fa-play"></i> */}
            </div>
          </a>
          <figure
            onClick={() => {
              setPlay(true)
            }}
            className="Portfolio-figure aspect-ratio custom-overlay"
          >
            <img
              className="lazyload"
              data-src={image}
              alt={alt ? alt : title}
            />
            <video
              className={`Portfolio-video ${
                play ? "Portfolio-video--visible" : ""
              }`}
              controls
              autoPlay={play}
              loop
              playsInline
              src={play && video}
            ></video>
          </figure>
        </div>
        {/* Portfolio Content */}
        <div className="portfolio-content blog-content p-4">
          {/* Meta Info */}

          {/* Portfolio Title */}
          <h3 className="blog-title my-3">
            <a
              className={
                liveWebsite.length <= 0
                  ? "portfolio-blocked"
                  : "custom-emphasis"
              }
              href={liveWebsite}
              target="_blank"
            >
              <span>{title}</span>{" "}
            </a>
          </h3>
          <p>{subtitle}</p>
        </div>
        <ul className="portfolio-tags blog-content p-4"></ul>
      </div>
    </div>
  )
}

function Portfolio() {
  return (
    <section id="portfolio" className="section blog-area  bg-gray ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Portfolio</h2>
              <p className="d-sm-block mt-4">
                All sites below were hosted on Shopify. Some were themes custom
                coded from scratch, others already existing themes with
                additional fixes and implementations.
                <br />
                <span className="custom-emphasis">
                  Click on the play button
                </span>{" "}
                to watch a brief video showcasing the respective project.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-12 col-lg-3">
            <aside className="sidebar">
      
              <div className="single-widget">
      
                <div
                  className="accordions widget tags-widget"
                  id="tags-accordion"
                >
                  <div className="single-accordion blog-accordion">
                    <h5>
                      <a
                        role="button"
                        className="collapse show text-uppercase d-block p-3"
                        data-toggle="collapse"
                        href="#accordion3"
                      >
                        Filter
                      </a>
                    </h5>
           
                    <div
                      id="accordion3"
                      className="accordion-content widget-content collapse show"
                      data-parent="#tags-accordion"
                    >
     
                      <div
                        id="tagsWidget"
                        className="widget-content tags-widget-items pt-2"
                      >
                        <a
                          href="#"
                          data-tag-name="all"
                          className="d-inline-block mt-2 mr-1 px-2 py-1 tags-widget-item tags-widget-item--active "
                        >
                          All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div> */}
          <div className="col-12 col-lg-12">
            <div className="portfolio-row row">
              {items.map(e => PortfolioItem(e))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
