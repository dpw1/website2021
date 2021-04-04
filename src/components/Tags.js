import React from "react"
import { useState, useEffect } from "react"
import { useQueryParam, StringParam, QueryParams } from "use-query-params"
import { getSearchParams } from "gatsby-query-params"
import { useStatePersist as useStickyState } from "use-state-persist"

import "./Tags.scss"
import { sleep } from "../../global-utils"

const UPDATE_DELAY = 150

function Tags(props) {
  const { data, updateData, tagKeyName } = props

  const keyName = tagKeyName ? tagKeyName : "tags"

  const [tags, setTags] = useState([])
  const [isActive, setIsActive] = useState("")
  const [results, setResults] = useStickyState("@totalProducts", null)

  const swiperConfig = {
    slidesPerView: "auto",
    freeMode: true,
    grabCursor: true,
    slidesOffsetAfter: 100,
  }

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
    const filtered = filterTags(data)
    setTags(filtered)
    console.log(`my filtered       `, filtered)
    setTimeout(updateItemsOnLoad, UPDATE_DELAY)
  }, [data])

  const handleClickOnTag = (e, tag) => {
    setActiveClass(e.target)
    updateItemsWithNewTag(tag)
    removeQueryParameters()
    // setTagChosen(tag)
  }

  const removeQueryParameters = () => {
    return window.history.pushState(
      {},
      document.title,
      window.location.pathname
    )
  }
  const setActiveClass = el => {
    const _class = `Tags-tag--active`

    const $active = window.document.querySelectorAll(`.${_class}`)

    if ($active) {
      for (const each of $active) {
        each.classList.remove(_class)
      }
    }
    el.classList.add(_class)
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

  return (
    <div className="Tags">
      <h3 className="Tags-title">Browse by tags:</h3>
      <div className="Tags-list">
        {tags && (
          <div className="Tags-wrapper">
            <a
              href="#"
              onClick={e => handleClickOnTag(e, "all")}
              className="Tags-tag Tags-tag--active"
              key={"all"}
            >
              All
            </a>

            {tags.map(currentTag => (
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
        )}
      </div>
    </div>
  )
}

export default Tags
