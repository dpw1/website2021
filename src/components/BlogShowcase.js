import React, { useEffect, useState } from "react"
import "./BlogShowcase.scss"
import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import { useQueryParam, NumberParam } from "use-query-params"
import { siteRoutes } from "./../utils/siteRoutes"
import Search from "./Search"
import Tags from "./Tags"

// const PAGINATION_BUTTONS = 3
// posts per page is defined via props

const BlogItem = props => {
  let {
    // date: _date,
    slug,
    featured_image_src: image,
    excerpt,
    title,
    tag_names,
  } = props.data

  let description = excerpt
  title = parse(title)
  // let date = timeSince(_date)
  let url = `/blog/${slug}`
  const imagealt = props.data.image_alt
  const tags = tag_names.map(e => e.toLowerCase()).join(";")

  return (
    <div data-blog-tags={tags} className="col-12 col-md-6 col-lg-4 blog-item">
      <article className="single-blog res-margin">
        <Link className="linked" to={url}>
          <figure className="aspect-ratio blog-thumb">
            <img
              className="lazyload"
              data-src={image}
              alt={imagealt && imagealt.length >= 1 ? imagealt : title}
            />
          </figure>
        </Link>

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
  let { postsPerPage, totalPosts, page: currentPage } = props

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
          tag_names
        }
      }
    }
  `).allWordpressPost

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date))

  const _isBlogPage = () => {
    return currentPage === "blog" ? true : false
  }

  const [isSearching, setIsSearching] = useState(false)
  const [page, setPage] = useQueryParam("page", NumberParam)
  const [posts, setPosts] = useState(null)

  const totalPages = Math.ceil(sortedData.length / postsPerPage)

  const scrollToBlogStart = () => {
    /* force lazyload */
    window.ezfy.forceLazyload()

    setTimeout(
      () => window.document.querySelector(".row--first").scrollIntoView(),
      200
    )
  }

  const organizePosts = () => {
    if (totalPosts) {
      return setPosts(sortedData.slice(0, totalPosts))
    }

    if (!page && _isBlogPage()) {
      setPage(1)
    }

    if (postsPerPage) {
      return setPosts(
        sortedData.slice((page - 1) * postsPerPage, page * postsPerPage)
      )
    }

    return setPosts(sortedData)
  }

  const populateWithPostsForThisPage = () => {
    if (totalPosts) {
      return setPosts(sortedData.slice(0, totalPosts))
    }

    return setPosts(
      sortedData.slice((page - 1) * postsPerPage, page * postsPerPage)
    )
  }

  useEffect(() => {
    organizePosts()
  }, [])

  useEffect(() => {
    populateWithPostsForThisPage()
  }, [page])

  useEffect(() => {
    if (!posts) {
      return
    }

    console.log("we are searching  ", isSearching)
    console.log("all blog posts: ", posts)
    console.log("we have x posts  ", posts.length)

    setTimeout(() => {
      if (window.ezfy) {
        window.ezfy.init()
      }
    }, 50)
  }, [posts])

  useEffect(() => {
    console.log("searching? ", isSearching)

    if (isSearching) {
      console.log("inside is searching")
      setTimeout(() => {
        if (window.ezfy) {
          window.ezfy.init()
        }
      }, 50)

      return
    }

    return populateWithPostsForThisPage()
  }, [isSearching])

  const PaginationButton = () => {
    return (
      <ul className="pagination justify-content-center">
        {page > 1 && (
          <li className="pagination-arrow pagination-arrow-prev">
            <a
              href="#"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1)
                }

                scrollToBlogStart()
              }}
              aria-label="Previous"
            >
              <i className="fas fa-arrow-left " />
              <span> Previous Page</span>
            </a>
          </li>
        )}
        {!totalPosts && (
          <li>
            <p>
              {page} / {totalPages}
            </p>
          </li>
        )}
        {page < totalPages && (
          <li className="pagination-arrow pagination-arrow-next">
            <a
              href="#"
              onClick={() => {
                if (page < totalPages) {
                  setPage(page + 1)
                }

                scrollToBlogStart()
              }}
              aria-label="Next"
            >
              <span>Next Page</span>
              <i className="fas fa-arrow-right" />
            </a>
          </li>
        )}
      </ul>
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
        {_isBlogPage() && (
          <React.Fragment>
            <Tags
              data={sortedData}
              updateData={setPosts}
              tagKeyName="tag_names"
            ></Tags>
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
          {posts
            ? [...posts].map((data, i) => (
                <BlogItem
                  isSearching={isSearching}
                  key={i}
                  data={data}
                ></BlogItem>
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
            {!isSearching && posts && <PaginationButton></PaginationButton>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogShowcase
