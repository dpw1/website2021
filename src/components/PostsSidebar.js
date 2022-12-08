import "./PostsSidebar.scss"
import React, { useEffect, useState } from "react"

import { formatDate, generateBlogUrl, shuffle } from "../utils/utils"
import parse from "html-react-parser"
import { blogApi } from "../api/api"
import { Link } from "gatsby"
import { siteRoutes } from "../utils/siteRoutes"
import Advertise from "./Advertise"

const PostsSidebar = props => {
  const [posts, setPosts] = useState([])

  const _posts = blogApi.getSidebarPostsGraphql()
  const { id, tags } = props

  useEffect(() => {
    const getPosts = async () => {
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

      console.log("x     x     ", _filtered)

      /* If there are not enough tags, return "all themes" as well */
      if (_filtered.length < 5) {
        const _all = _posts
          .map(e => {
            const res = e.tag_names.filter(x => x.includes("all themes"))

            console.log(e)
            if (res.length > 0 || res) {
              return e
            }
          })
          .filter(x => x !== undefined)
        const all = shuffle(_all).slice(0, 5 - _filtered.length)

        _filtered = [..._filtered, ...all]
      }

      filtered = shuffle(_filtered).slice(0, 5)

      setPosts(filtered)
    }

    getPosts()
  }, [])
  return (
    <div className="single-widget posts-sidebar">
      {/* Post Widget */}
      <div className="accordions widget post-widget" id="post-accordion">
        <div className="single-accordion">
          <h5>
            <Link
              to={siteRoutes.blog}
              className="collapse show text-uppercase d-block p-3 posts-sidebar-button posts-sidebar-button--desktop"
            >
              More Posts
            </Link>
            <a
              role="button"
              className="collapse show text-uppercase d-block p-3 posts-sidebar-button posts-sidebar-button--mobile"
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
                        </div>
                      </a>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>

      <Link className="btn posts-sidebar-view-more" to={siteRoutes.blog}>
        View all blogs
      </Link>

      <Advertise advertisement={props.advertisement}></Advertise>
    </div>
  )
}

export default PostsSidebar
