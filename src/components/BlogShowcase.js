import React, { useEffect, useState } from "react"
import "./BlogShowcase.scss"
import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import { useQueryParam, NumberParam } from "use-query-params"
import { siteRoutes } from "./../utils/siteRoutes"

// const PAGINATION_BUTTONS = 3
// posts per page is defined via props

const BlogItem = props => {
  let {
    // date: _date,
    slug,
    featured_image_src: image,
    excerpt,
    title,
  } = props.data

  let description = excerpt
  title = parse(title)
  // let date = timeSince(_date)
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

const BlogShowcase = props => {
  let { postsPerPage, totalPosts } = props

  let { nodes: data } = useStaticQuery(graphql`
    query BlogsQuery {
      allWordpressPost(
        filter: { categories: {}, categories_names: { eq: "Blog" } }
      ) {
        nodes {
          title
          slug
          date
          featured_image_src
          image_alt
          excerpt
        }
      }
    }
  `).allWordpressPost

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))

  const [page, setPage] = useQueryParam("page", NumberParam)
  const [posts, setPosts] = useState(null)

  const totalPages = Math.ceil(sortedData.length / postsPerPage)

  const handleUpdatePosts = () => {
    return setPosts(
      sortedData.slice((page - 1) * postsPerPage, page * postsPerPage)
    )
  }

  useEffect(() => {
    if (totalPosts) {
      return setPosts(sortedData.slice(0, totalPosts))
    }

    if (!page && /blog/.test(window.location.href)) {
      setPage(1)
    }

    if (postsPerPage) {
      return handleUpdatePosts()
    }

    return setPosts(sortedData)
  }, [])

  useEffect(() => {
    if (totalPosts) {
      return setPosts(sortedData.slice(0, totalPosts))
    }

    return handleUpdatePosts()
  }, [page])

  useEffect(() => {
    if (!posts) {
      return
    }

    setTimeout(() => {
      if (window.ezfy) {
        window.ezfy.init()
      }
    }, 50)
  }, [posts])

  const generatePaginationButtons = () => {
    return (
      <li>
        <p>
          {page} / {totalPages}
        </p>
      </li>
    )
  }

  return (
    <section
      id="blogShowcase"
      className="section blog-area blog-showcase ptb_50 bg-gray"
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
            {totalPosts && (
              <Link className="btn" to={siteRoutes.blog}>
                See all blogs
              </Link>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              {page > 1 && (
                <li className="pagination-arrow pagination-arrow-prev">
                  <a
                    href="#"
                    onClick={() => {
                      if (page > 1) {
                        setPage(page - 1)
                      }
                    }}
                    aria-label="Previous"
                  >
                    <i className="fas fa-arrow-left" />
                    <span> Previous Page</span>
                  </a>
                </li>
              )}
              {!totalPosts && generatePaginationButtons()}
              {page < totalPages && (
                <li className="pagination-arrow pagination-arrow-next">
                  <a
                    href="#"
                    onClick={() => {
                      if (page < totalPages) {
                        setPage(page + 1)
                      }
                    }}
                    aria-label="Next"
                  >
                    <span>Next Page</span>
                    <i className="fas fa-arrow-right" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogShowcase
