import "./PostsSidebar.scss"
import React, { useEffect, useState } from "react"

import { formatDate, generateBlogUrl, shuffle } from "../utils/utils"
import parse from "html-react-parser"
import { blogApi } from "../api/api"

const PostsSidebar = props => {
  const [posts, setPosts] = useState([])

  const _posts = blogApi.getSidebarPostsGraphql()

  useEffect(() => {
    const getPosts = async () => {
      console.log("side bar posts: ", _posts)
      const filteredPosts = shuffle(_posts).slice(0, 5)

      setPosts(filteredPosts)
    }

    getPosts()
  }, [])
  return (
    <div className="single-widget posts-sidebar">
      {/* Post Widget */}
      <div className="accordions widget post-widget" id="post-accordion">
        <div className="single-accordion">
          <h5>
            <a
              role="button"
              className="collapse show text-uppercase d-block p-3"
              data-toggle="collapse"
              href="#accordion2"
            >
              More Posts
            </a>
          </h5>
          {/* Post Widget Content */}
          <div
            id="accordion2"
            className="accordion-content widget-content collapse show"
            data-parent="#post-accordion"
          >
            {/* Post Widget Items */}
            <ul className="widget-items">
              {posts &&
                posts.map((e, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={generateBlogUrl(e.slug)}
                        className="single-post align-items-center align-items-lg-start media p-3"
                      >
                        {/* Post Thumb */}
                        <div className="post-thumb avatar-md">
                          <img
                            className="align-self-center"
                            src={e.featured_image_small_src}
                            alt={e.title}
                          />
                        </div>
                        <div className="post-content media-body pl-3">
                          <h6>{parse(e.title)}</h6>
                          <p className="post-date posts-sidebar-date mb-2">
                            {formatDate(e.date)}
                          </p>
                        </div>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsSidebar
