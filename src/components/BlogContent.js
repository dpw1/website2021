import React, { useState, useEffect } from "react"
import "./BlogContent.scss"
import parse from "html-react-parser"

import {
  cleanDescription,
  extractTextBetween,
  formatDate,
  getEcwidProducts,
  getWordpressImageBiggestSize,
  isBrowser,
  productPromos,
} from "../utils/utils"
import BlogBreadcrumb from "./BlogBreadcrumb"
import { FacebookMessengerShareButton, WhatsappShareButton } from "react-share"

import PostsSidebar from "./PostsSidebar"

import { renderGistsDynamically } from "./../utils/utils"
import { sleep } from "../../global-utils"
import BlogPromoBar from "./BlogPromoBar"
import Feedback from "./Feedback"
import Advertise from "./Advertise"

const readingTime = require("reading-time")

const BlogContent = props => {
  const [posts, setPosts] = useState(null)
  const [url, setUrl] = useState(null)
  const [ad, setAd] = useState([])

  const { post } = props

  // if (!post) {
  //   // window.location = window.location.origin;
  // }

  console.log("ppp", props)

  let date = `${formatDate(post.date)}`
  const title = post.title.rendered
  const image = getWordpressImageBiggestSize(post.featured_image_src)
  const alt = post.featured_image_url_alt

  const time = readingTime(post.content.rendered).text

  useEffect(() => {
    setUrl(window !== undefined ? window.location.href : "https://ezfycode.com")
    ;(async _ => {
      await sleep(1000)
      renderGistsDynamically()
      /* Todo 
      show custom sidebar depending on the blog post being viewed
      */
      showProductsRelatedToBlog(post)
    })()
  }, [])

  async function showProductsRelatedToBlog(post) {
    let productTags = []

    const blogTags = post.tag_names.map(e => {
      return e.toLowerCase().replace("theme", "").trim()
    })

    // Gets all product tags
    productPromos.map(e => {
      const tags = e.tags.map(e =>
        e
          .toLowerCase()
          .replace(/\s?theme(s)?/, "")
          .trim()
      )

      const filtered = blogTags.filter(
        value =>
          tags.includes(value) ||
          tags.includes("app functionality") ||
          tags.includes("all")
      )

      if (filtered && filtered.length >= 1) {
        productTags.push([...tags])
      }
    })

    const _result = productTags
      .map(e => {
        var isRemovable = e.filter(x =>
          x.match(
            /sense|craft|refresh|colorblock|taste|ride|studio|crave|origina|publisher/
          )
        )

        if (isRemovable.length >= 1) {
          return null
        }
        return e.join("|")
      })
      .filter(e => e !== null)
      .join("|")
      .split("|")

    const result = [...new Set(_result)]

    const products = await getEcwidProducts()

    console.log("xx - blog tags", result, products)
  }

  return (
    <React.Fragment>
      <BlogBreadcrumb post={post}></BlogBreadcrumb>
      <section
        id="blogContent "
        className="section blog-content blog-area ptb_100"
      >
        <div className="container">
          <div className="row blog-content-wrapper">
            <div className="blog-content-block blog-content-block--sidebar col-12 col-lg-3">
              <aside className="sidebar">
                {/* Single Widget */}
                <Advertise
                  advertisement={{
                    title: `Replace apps with code snippets.`,
                    image: `https://media0.giphy.com/media/WvvzxI0VWF8kVo4olS/giphy.gif`,
                    link: `https://ezfycode.com/shop?source=blog-sidebar`,
                    list: [
                      "No monthly fees",
                      "Plugins tested in real stores w/ thousands of daily visits",
                      "Same day response support",
                      "Pay once use forever",
                    ],
                  }}
                ></Advertise>
                {/* <PostsSidebar
                 
                  id={post.id}
                  tags={post.tag_names}
                ></PostsSidebar> */}
              </aside>
            </div>
            <div className="blog-content-block col-12 col-lg-9">
              {/* Single Blog Details */}
              <article className="single-blog-details">
                {/* Blog Content */}
                <div className="sApp-blog blog-content-text">
                  {/* Meta Info */}
                  <div className="meta-info d-flex flex-wrap align-items-center py-2">
                    <ul className="blog-content-info">
                      <li className="d-inline-block p-2">
                        <span>By Diego Moretti</span>
                      </li>
                      <li className="d-inline-block p-2 blog-content-info--time">
                        <svg
                          className="blog-content-info-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <g>
                            <circle
                              cx={7}
                              cy={7}
                              r="6.5"
                              style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }}
                            />
                            <polyline
                              points="7 4.5 7 7 9.54 9.96"
                              style={{
                                fill: "none",
                                stroke: "#000000",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }}
                            />
                          </g>
                        </svg>

                        <span className="blog-content-info-length">{time}</span>
                      </li>
                      {/* <li className="d-inline-block p-2">
                        <span>{date}</span>
                      </li> */}
                    </ul>
                  </div>
                  {/* Blog Details */}

                  {/* <Gist id={"e53c3dffd9cb43d49274f8df5d91a499"} /> */}

                  <div className="blog-details blog-content-details">
                    <h3 className="blog-title py-2 py-sm-3">
                      <span>{parse(title)}</span>
                    </h3>
                    <figure className="blog-featured-image">
                      <img src={image} alt={alt} />
                    </figure>
                    <div className="blog-text">
                      {cleanDescription(post.content.rendered)}
                      <Feedback></Feedback>
                    </div>
                  </div>

                  {/* Blog Share */}
                  <div className="blog-share blog-content-share ml-auto d-none d-sm-block">
                    {/* Social Icons */}
                    <div className="social-icons social-icons--blog d-flex ">
                      <a
                        className="bg-white facebook social-icon"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="bg-white twitter  social-icon"
                        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="bg-white pinterest social-icon"
                        href={`http://pinterest.com/pin/create/button/?url=${url}&description=${title}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab  fa-pinterest" aria-hidden="true"></i>
                        <i className="fab fa-pinterest" aria-hidden="true"></i>
                      </a>
                      <a
                        className="bg-white linkedin social-icon"
                        href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fab  fa-linkedin" aria-hidden="true"></i>
                        <i className="fab  fa-linkedin" aria-hidden="true"></i>
                      </a>

                      <WhatsappShareButton url={url}>
                        <span className="bg-white social-icon whatsapp social-icon">
                          <i className="fab fa-whatsapp" aria-hidden="true"></i>
                          <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </span>
                      </WhatsappShareButton>

                      <FacebookMessengerShareButton
                        appId={"2995462243875033"}
                        url={url}
                      >
                        <span className="bg-white social-icon facebook-messenger social-icon">
                          <i
                            className="fab fa-facebook-messenger"
                            aria-hidden="true"
                          ></i>
                          <i
                            className="fab fa-facebook-messenger"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </FacebookMessengerShareButton>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
export default BlogContent
