import React, { Component } from "react";
import "./BlogBreadcrumb.scss";
import officeImage from "../copy/img/bg/ezfy-office.jpg";
import { getWordpressImageBiggestSize } from "./../utils/utils";
import parse from "html-react-parser";

const BlogBreadcrumb = (props) => {
  const { post } = props;

  const image = post
    ? getWordpressImageBiggestSize(post.featured_image_src)
    : officeImage;

  const title = post ? parse(post.title.rendered) : "Ezfy Blog";

  const background = `url(${image}) no-repeat scroll center center / ${
    post ? "contain" : "cover"
  }`;
  return (
    <section
      className="section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center"
      style={{
        background,
      }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Breamcrumb Content */}
            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
              <h3 className="text-white blog-breadcrumb-title">{title}</h3>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>

                {post && (
                  <li className="breadcrumb-item">
                    <a href={`/blog`}>Blog</a>
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogBreadcrumb;
