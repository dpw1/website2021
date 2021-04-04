import React from "react"
import { useState, useEffect } from "react"
import { useQueryParam, StringParam, QueryParams } from "use-query-params"
import { getSearchParams } from "gatsby-query-params"
import { useStatePersist as useStickyState } from "use-state-persist"
import Swiper from "react-id-swiper"
import "./Tags.scss"
import { sleep } from "../../global-utils"

const UPDATE_DELAY = 30

function Tags(props) {
  const { data, updateData } = props

  const [tags, setTags] = useState([])
  const [isActive, setIsActive] = useState("")
  const [results, setResults] = useStickyState("@totalProducts", null)

  const swiperConfig = {
    slidesPerView: "auto",
    freeMode: true,
    grabCursor: true,
  }

  const filterTags = _data => {
    if (!_data) {
      return
    }
    const _tags = _data.map(e => e.tags)

    const _filtered = [...new Set([].concat(..._tags))].map(e =>
      e.trim().toLowerCase()
    )
    const filtered = [...new Set([].concat(..._filtered))]

    return filtered
  }

  useEffect(() => {
    const filtered = filterTags(data)
    setTags(filtered)
    console.log(`my filtered tags:   `, filtered)
    setTimeout(updateItemsOnLoad, UPDATE_DELAY)
  }, [data])

  const handleClick = (e, tag) => {
    setActiveClass(e.target)
    updateItemsWithNewTag(tag)
    // setTagChosen(tag)
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

    const products = data.filter(e => {
      const search = e.tags.filter(_e => _e.trim().toLowerCase() === tag)

      if (search.length >= 1) {
        return e
      }
    })

    if (products) {
      updateData(products)
    }

    await sleep(UPDATE_DELAY)
    const $products = window.document.querySelectorAll(`.ProductItem`)
    return setResults($products.length.toString())
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
      Tags!
      <div className="Tags-list">
        {tags && (
          <Swiper {...swiperConfig}>
            <a
              href="#"
              onClick={e => handleClick(e, "all")}
              className="Tags-tag Tags-tag--active"
              key={"all"}
            >
              All
            </a>

            {tags.map(currentTag => (
              <a
                href="#"
                onClick={e => handleClick(e, currentTag)}
                className="Tags-tag"
                data-tag={currentTag}
                key={currentTag}
              >
                {currentTag}
              </a>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default Tags
