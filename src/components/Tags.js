import React from "react"
import { useState, useEffect } from "react"
import { useQueryParam, StringParam, QueryParams } from "use-query-params"
import { getSearchParams } from "gatsby-query-params"
import { useStatePersist as useStickyState } from "use-state-persist"
import Skeleton from "react-loading-skeleton"

import "./Tags.scss"
import { sleep } from "../../global-utils"

const UPDATE_DELAY = 150

function Tags(props) {
  const { data, updateData, tagKeyName } = props

  const keyName = tagKeyName ? tagKeyName : "tags"

  const [tags, setTags] = useState(null)
  const [isActive, setIsActive] = useState("")
  const [results, setResults] = useStickyState("@totalProducts", null)

  const filterTags = _data => {
    if (!_data) {
      return
    }

    const _tags = _data.map(e => e[keyName])

    const _filtered = [...new Set([].concat(..._tags))].map(e =>
      e.trim().toLowerCase()
    )
    const filtered = [...new Set([].concat(..._filtered))]

    return filtered
  }

  useEffect(() => {
    function activateSwipingDesktop() {
      const $slider = document.querySelector(".Tags-list")
      let mouseDown = false
      let startX, scrollLeft

      let startDragging = function (e) {
        mouseDown = true
        startX = e.pageX - $slider.offsetLeft
        scrollLeft = $slider.scrollLeft
      }
      let stopDragging = function (event) {
        mouseDown = false
        $slider.classList.remove("Tags-list--scrolling")
      }

      $slider.addEventListener("mousemove", e => {
        e.preventDefault()

        if (!mouseDown) {
          return
        }

        const x = e.pageX - $slider.offsetLeft
        const scroll = x - startX
        $slider.scrollLeft = scrollLeft - scroll
        window.lastScroll = scrollLeft - scroll

        $slider.classList.add("Tags-list--scrolling")
      })

      // Add the event listeners
      $slider.addEventListener("mousedown", startDragging, false)
      $slider.addEventListener("mouseup", stopDragging, false)
      $slider.addEventListener("mouseleave", stopDragging, false)
    }
    activateSwipingDesktop()
  }, [])

  useEffect(() => {
    const filtered = filterTags(data)
    setTags(filtered)

    console.log(`my filtere      `, filtered)
    setTimeout(updateItemsOnLoad, UPDATE_DELAY)
  }, [data])

  const handleClickOnTag = (e, tag) => {
    setActiveClass(e.target)
    updateItemsWithNewTag(tag)
    removeQueryParameters()
    window.ezfy.forceLazyload()
    // setTagChosen(tag)
  }

  const removeQueryParameters = () => {
    return window.history.pushState(
      {},
      document.title,
      window.location.pathname
    )
  }
  const setActiveClass = $pill => {
    const _class = `Tags-tag--active`

    const $active = window.document.querySelectorAll(`.${_class}`)

    if ($active) {
      for (const each of $active) {
        each.classList.remove(_class)
      }
    }

    if (!$pill) {
      return
    }

    $pill.classList.add(_class)
  }

  const updateItemsWithNewTag = async tag => {
    if (tag === "all") {
      setResults(data.length.toString())
      updateData(data)
      return
    }

    const products =
      data &&
      data.filter(e => {
        const search = e[keyName].filter(_e => _e.trim().toLowerCase() === tag)

        if (search.length >= 1) {
          return e
        }
      })

    if (products) {
      console.log("my length", products.length)
      setResults(products.length.toString())
      updateData(products)
    }
  }

  const updateItemsOnLoad = () => {
    const params = new URLSearchParams(window.location.search)
    const tag = params.get("tag")
    const $tag = document.querySelector(`[data-tag="${tag}"]`)

    if (!tag || tag === "") {
      return
    }

    updateItemsWithNewTag(tag)
    setActiveClass($tag)
  }

  const SkeletonLoader = () => {
    return (
      <div className="Tags-SkeletonLoader">
        <div className="Tags-SkeletonLoader-item">
          <Skeleton count={1} />
          <Skeleton count={1} height={40} />
        </div>
      </div>
    )
  }

  return (
    <div className="Tags">
      <h3 className="Tags-title">Browse by tags:</h3>
      {/* <SkeletonLoader></SkeletonLoader> */}
      <div className="Tags-list">
        {tags ? (
          <div className="Tags-wrapper">
            <a
              href="#"
              onClick={e => handleClickOnTag(e, "all")}
              className="Tags-tag Tags-tag--active"
              key={"all"}
            >
              All
            </a>

            {tags
              .sort((a, b) => {
                console.log("0rc", a, b)
                return a.localeCompare(b)
              })
              .map(currentTag => (
                <a
                  href="#"
                  onClick={e => handleClickOnTag(e, currentTag)}
                  className="Tags-tag"
                  data-tag={currentTag}
                  key={currentTag}
                >
                  {currentTag}
                </a>
              ))}
          </div>
        ) : (
          <SkeletonLoader></SkeletonLoader>
        )}
      </div>
    </div>
  )
}

export default Tags
