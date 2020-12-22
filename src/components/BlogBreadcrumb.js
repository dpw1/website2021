import React, { Component } from "react"
import "./BlogBreadcrumb.scss"
import officeImage from "../copy/img/bg/ezfy-office.jpg"
import { getWordpressImageBiggestSize } from "./../utils/utils"
import parse from "html-react-parser"
import { siteRoutes } from "./../utils/siteRoutes"
import { Link } from "gatsby"

const BlogBreadcrumb = props => {
  const { post, title } = props

  const image = post
    ? getWordpressImageBiggestSize(post.featured_image_src)
    : officeImage

  const name = post ? parse(post.title.rendered) : "Ezfy Blog"

  const background = `url(${image}) no-repeat scroll center center / ${
    post ? "contain" : "cover"
  }`
  return (
    <section
      className="section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center"
      style={{
        background,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Breamcrumb Content */}
            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
              <h3 className="text-white blog-breadcrumb-title">
                {title ? title : name}
              </h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={siteRoutes.home}>Home</Link>
                </li>

                {post && (
                  <li className="breadcrumb-item">
                    <Link to={siteRoutes.blog}>Blog</Link>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BlogBreadcrumb
