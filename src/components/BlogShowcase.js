import React, { useEffect, useState } from "react"
import "./BlogShowcase.scss"
import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import { useQueryParam, NumberParam } from "use-query-params"
import { siteRoutes } from "./../utils/siteRoutes"
import Search from "./Search"
import Tags from "./Tags"

import {
  cleanDescription,
  isThereCurrentActiveTag,
  shuffle,
} from "../utils/utils"
import BlogPaginated from "./BlogPaginated"

const readingTime = require("reading-time")

// const PAGINATION_BUTTONS = 3
// posts per page is defined via props

const BlogShowcase = props => {
  let { postsPerPage, totalPosts, isHomePage, page: currentPage, post } = props

  const blogPostPageLimit = 6

  let { nodes: data } = useStaticQuery(graphql`
    query BlogsQuery {
      allWordpressPost(
        filter: { categories: {}, categories_names: { eq: "Blog" } }
      ) {
        nodes {
          title
          content
          slug
          date
          featured_image_src
          image_alt
          excerpt
          tag_names
        }
      }
    }
  `).allWordpressPost

  let sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))

  const isBlogPage = () => {
    return currentPage === "blog" ? true : false
  }

  const [isSearching, setIsSearching] = useState(false)
  const [posts, setPosts] = useState([])
  const [randomPosts, setRandomPposts] = useState([])

  useEffect(() => {
    if (isHomePage) {
      return setPosts(sortedData.slice(0, 3))
    }

    if (isBlogPage()) {
      setPosts(sortedData)
    }
  }, [sortedData])

  useEffect(() => {
    if (currentPage === "blogpost") {
      setPosts(randomPosts.slice(0, blogPostPageLimit))
    }
  }, [randomPosts])

  useEffect(() => {
    ;(async () => {
      const getPostsAtBlogPostPage = async () => {
        const _posts = sortedData
        const tags = post.tag_names
        /* gets all post with same tag */

        let filtered
        let _filtered = _posts
          .map(e => {
            const res = e.tag_names.filter(x => tags.includes(x))

            if (res.length > 0) {
              return e
            }
          })
          .filter(x => x !== undefined)

        /* If there are not enough tags, return "all themes" as well */
        if (_filtered.length < blogPostPageLimit) {
          const _all = _posts
            .map(e => {
              const res = e.tag_names.filter(x => x.includes("all themes"))

              console.log(e)
              if (res.length > 0 || res) {
                return e
              }
            })
            .filter(x => x !== undefined)
          const all = shuffle(_all).slice(
            0,
            blogPostPageLimit - _filtered.length
          )

          _filtered = [..._filtered, ...all]
        }

        filtered = shuffle(_filtered).slice(0, blogPostPageLimit)

        console.log("random posts filter", filtered)

        setRandomPposts(filtered)
      }

      if (currentPage === "blogpost") {
        getPostsAtBlogPostPage()
      }
    })()
  }, [])

  useEffect(() => {
    if (!posts) {
      return
    }

    console.log("we are searching  ", isSearching)
    console.log("all blog posts: ", posts)
    console.log("we have x posts  ", posts.length)

    setTimeout(() => {
      if (window.ezfy && currentPage !== "blogpost") {
        window.ezfy.init()
      }
    }, 50)
  }, [posts])

  useEffect(() => {
    if (currentPage === "blogpost") {
      return
    }

    if (isSearching) {
      setTimeout(() => {
        if (window.ezfy) {
          window.ezfy.init()
        }
      }, 50)
    }

    if (isHomePage) {
      setPosts(sortedData.slice(0, 3))
    } else {
      setPosts(sortedData)
    }
  }, [isSearching])

  return (
    <section
      id="blogShowcase"
      className={`section blog-area blog-showcase ptb_50
      ${props.backgroundColor === "white" ? "" : "bg-gray"}
      `}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">
                {props.title ? props.title : "Blog"}
              </h2>
              <p className="d-sm-block mt-4">
                {props.subtitle
                  ? props.subtitle
                  : `Check our latest tips, tricks, articles and insights for the
                Shopify realm.`}
              </p>
            </div>
          </div>
        </div>
        {isBlogPage() && (
          <React.Fragment>
            {/* <Tags
              data={sortedData}
              updateData={setPosts}
              tagKeyName="tag_names"
            ></Tags> */}
            <Search
              type="blog"
              data={sortedData}
              dataKey="title"
              updateData={setPosts}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            ></Search>
          </React.Fragment>
        )}
        <div className="row row--first">
          {/* {posts
            ? [...posts].map((data, i) => (
                <BlogItem
                  isSearching={isSearching}
                  key={i}
                  data={data}
                  currentPage={currentPage}
                ></BlogItem>
              ))
            : "Retrieving blog posts, please wait..."} */}
        </div>

        <div className="row paginated-blog">
          {posts && posts.length >= 1 && (
            <BlogPaginated posts={posts}></BlogPaginated>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            {isHomePage && (
              <Link className="btn" to={siteRoutes.blog}>
                See all blogs
              </Link>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Pagination */}
            {/* {!isSearching && posts && <PaginationButton></PaginationButton>} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export const BlogItem = props => {
  let {
    // date: _date,
    slug,
    featured_image_src: image,
    excerpt,
    title,
    tag_names,
    content,
    isSearching,
    isTagActive,
    resetImage,
  } = props.data

  let description = excerpt
  title = parse(title)

  let url = `/blog/${slug}`
  const imagealt = props.data.image_alt
  const tags = tag_names.map(e => e.toLowerCase()).join(";")
  const time = readingTime(content).text

  return (
    <div data-blog-tags={tags} className="col-12 col-md-6 col-lg-4 blog-item">
      <article className="single-blog res-margin">
        <Link className="linked" to={url}>
          <figure className="aspect-ratio blog-thumb">
            {resetImage ? (
              <>
                <img
                  className=""
                  src={image}
                  alt={imagealt && imagealt.length >= 1 ? imagealt : title}
                />
              </>
            ) : (
              <img
                className="xx "
                src={image}
                data-src={image}
                alt={imagealt && imagealt.length >= 1 ? imagealt : title}
              />
            )}
          </figure>
        </Link>

        <div className="blog-content p-4">
          <ul className="meta-info d-flex justify-content-between blog-content-info">
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

export default BlogShowcase
