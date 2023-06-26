import React, { useState } from "react"
import "./Search.scss"
import image from "../copy/img/avatar/diego.jpg"
import { Link } from "gatsby"
import { siteRoutes } from "../utils/siteRoutes"
import { useEffect } from "react"
import useInput from "./../hooks/useInput"
import { useStatePersist as useStickyState } from "use-state-persist"
import { decode } from "html-entities"
import { getTotalVisibleProducts, resetImagesOnSearch } from "../utils/utils"
import parse from "html-react-parser"
import OutsideClickHandler from "react-outside-click-handler"

/**
 *
 * @param {array} data
 *
 * An array of objects containing all the elements. It can not be changeable (like in a state.)
 *
 * @param {string} dataKey
 *
 * Which key of the parameter "data" to search for.
 * For example, if you have [{name:"a", age: 123}] and you want to search for "name", your dataKey should be "name"
 *
 *
 *
 * @param {state} updateData
 * state that returns the updated object with all found elements. It's usually the "set" of a state.
 *
 * @param {state, bool} isSearching
 * state that returns whether searching or not.
 *
 *
 * @param {state, bool} setIsSearching
 * set state when is searching or not.
 */

function Search(props) {
  const { type, data, dataKey, updateData, isSearching, setIsSearching } = props

  const [visible, setVisible] = useState("")
  const [total, setTotal] = useState(null)
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const [results, setResults] = useState([])

  const getTotalProducts = () => {
    const _total = data.filter(e => {
      const attributes = JSON.stringify(e.attributes)

      if (!/Development/gim.test(attributes)) {
        return e
      }
    })

    return _total.length
  }

  useEffect(() => {
    setVisible(getTotalVisibleProducts())

    setTotal(getTotalProducts())
  }, [])

  function isShopPage() {
    return data[0].hasOwnProperty("attributes")
  }

  useEffect(() => {}, [])

  return (
    <section id="Search" className="SearchBox">
      <div className="SearchBox-filter">
        <div className="SearchBox-total  ">
          {`There are ${total} ${
            type === "blog" ? "blog post(s)" : "product(s)"
          }.`}
        </div>

        <div className="SearchBox-input-wrapper">
          <OutsideClickHandler
            onOutsideClick={() => {
              setIsOpen(false)
            }}
          >
            <input
              placeholder="Search..."
              type="text"
              onFocus={() => {
                setIsOpen(true)
              }}
              onChange={e => {
                const query = e.target.value
                setSearch(query)

                if (query.length <= 0) {
                  setResults([])
                  setIsOpen(false)
                  return
                }

                setIsOpen(true)

                let filtered = [...data]
                  .map(e => {
                    const current = e.title.toLowerCase()

                    if (current.includes(query)) {
                      return e
                    }
                  })
                  .filter(e => e !== undefined)

                if (isShopPage()) {
                  filtered = [...filtered].filter(e => {
                    if (!/Development/gim.test(JSON.stringify(e.attributes))) {
                      return e
                    }
                  })
                }

                console.log(filtered)
                setResults(filtered)
              }}
            />

            {results.length >= 1 && isOpen && (
              <div className="SearchBox-results">
                <span className="SearchBox-quantity">
                  Results: {results.length}
                </span>
                {results.map(e => {
                  const image = e.hasOwnProperty("thumbnail")
                    ? e.thumbnail
                    : e.featured_image_src

                  const url = e.hasOwnProperty("thumbnail")
                    ? `/shop/${e.slug}`
                    : `/blog/${e.slug}`
                  return (
                    <Link to={url} className="SearchBox-item">
                      <div className="SearchBox-item-wrapper">
                        <img className="SearchBox-image" src={image} alt="" />
                        <p className="SearchBox-title">{parse(e.title)}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>
    </section>
  )
}

export default Search
