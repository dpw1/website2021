import React, { useState, useEffect } from "react"
import "./BlogContent.scss"
import parse from "html-react-parser"

import {
  cleanDescription,
  extractTextBetween,
  formatDate,
  getWordpressImageBiggestSize,
} from "../utils/utils"
import BlogBreadcrumb from "./BlogBreadcrumb"
import { FacebookMessengerShareButton, WhatsappShareButton } from "react-share"

import PostsSidebar from "./PostsSidebar"

import { renderGistsDynamically } from "./../utils/utils"
import { sleep } from "../../global-utils"

const readingTime = require("reading-time")

const BlogContent = props => {
  const [posts, setPosts] = useState(null)
  const [url, setUrl] = useState(null)

  const { post } = props

  // if (!post) {
  //   // window.location = window.location.origin;
  // }

  let date = `${formatDate(post.date)}`
  const title = post.title.rendered
  const image = getWordpressImageBiggestSize(post.featured_image_src)

  const time = readingTime(post.content.rendered).text

  useEffect(() => {
    setUrl(window !== undefined ? window.location.href : "https://ezfycode.com")
    ;(async _ => {
      await sleep(1000)
      renderGistsDynamically()
    })()
  }, [])

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
                <PostsSidebar></PostsSidebar>
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
                      <img src={image} alt="" />
                    </figure>
                    <div className="blog-text">
                      {cleanDescription(post.content.rendered)}
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
