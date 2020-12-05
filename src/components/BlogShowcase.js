import React, { useEffect, useState } from "react"
import "./BlogShowcase.scss"
import parse from "html-react-parser"
import { blogApi } from "../api/api"

import { generateBlogUrl, links, timeSince } from "./../utils/utils"
import { Link } from "gatsby"

const BlogItem = props => {
  let { date: _date, slug, featured_image_src: image } = props.data

  // let description = props.data.excerpt.rendered.replace(/(<([^>]+)>)/gi, "");
  let description = props.data.excerpt.rendered
  let title = parse(props.data.title.rendered)
  let date = timeSince(_date)
  let url = `/blog/${slug}`
  const imagealt = props.data.image_alt

  return (
    <div className="col-12 col-md-6 col-lg-4 blog-item">
      <article className="single-blog res-margin">
        <figure className="blog-thumb">
          <Link className="linked" to={url}>
            <img
              className="lazyload"
              loading="lazy"
              data-src={image}
              alt={imagealt && imagealt.length >= 1 ? imagealt : title}
            />
          </Link>
        </figure>

        <div className="blog-content p-4">
          <ul className="meta-info d-flex justify-content-between">
            <li>
              By <Link to={url}>Diego Fortes</Link>
            </li>
          </ul>
          {/* Blog Title */}
          <h3 className="blog-title my-3">
            <Link to={url}>{title}</Link>
          </h3>
          <div>{parse(description)}</div>

          <Link to={url} className="blog-btn mt-3">
            Read More
          </Link>
        </div>
      </article>
    </div>
  )
}

function BlogShowcase(props) {
  const [posts, setPosts] = useState(null)

  // console.log("ppoo", props);
  const { paginate, totalPosts } = props

  useEffect(() => {
    const getPosts = async () => {
      const data = await blogApi.getPosts(
        `${totalPosts ? `?per_page=${totalPosts}` : ""}`
      )
      setPosts(data)
    }

    getPosts()
  }, [totalPosts])

  useEffect(() => {
    if (!posts) {
      return
    }

    setTimeout(() => {
      window.ezfy && window.ezfy.lazyload()
    }, 50)
  }, [posts])

  return (
    <section
      id="blogShowcase"
      className="section blog-area blog-showcase ptb_50"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Blog</h2>
              <p className="d-sm-block mt-4">
                Check our latest tips, tricks, articles and insights for the
                Shopify realm.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {posts
            ? [...posts].map((data, i) => (
                <BlogItem key={i} data={data}></BlogItem>
              ))
            : "Retrieving blog posts, please wait..."}
        </div>
        <div className="row">
          <div className="col-12">
            {paginate ? (
              <div> </div>
            ) : (
              <Link className="btn" to={links.blog}>
                See all blogs
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogShowcase
