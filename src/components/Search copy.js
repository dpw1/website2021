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

  const [search, searchInput] = useInput({
    type: "text",
    placeholder: "Search...",
    className: "form-control",
  })

  const [visible, setVisible] = useState("")
  const [total, setTotal] = useState(null)
  const [results, setResults] = useStickyState("@totalProducts", null)

  /**
   * performs search based on a query.
   * @param {*} _query
   * @returns
   */
  const handleSearch = _query => {
    const query = _query.toLowerCase().trim()

    setIsSearching(true)

    window.ezfy.forceLazyload()

    if (!query) {
      setIsSearching(false)
    }
    const filtered = [...data]
      .map(e => {
        const current = decode(e[dataKey]).toLowerCase()
        if (current.includes(query)) {
          return e
        }
      })
      .filter(e => e !== undefined)

    setTimeout(() => {
      resetImagesOnSearch()
    }, 200)

    return filtered
  }

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

  useEffect(() => {
    const items = handleSearch(search)

    if (!items) {
      return
    }

    updateData(items)
    setResults(items.length)
  }, [search])

  useEffect(() => {
    setTimeout(() => {
      return setVisible(getTotalVisibleProducts())
    }, 100)
  }, [results])

  return (
    <section id="Search" className="SearchBox">
      <div className="SearchBox-filter">
        <div className="SearchBox-total  ">
          {`${total} ${
            type === "blog" ? "blog post(s)" : "product(s)"
          } available.`}
          {/* {`Showing ${results} ${results === 1 ? "result" : "results"} out of ${
            data.length
          }.`} */}
        </div>
        {searchInput}
      </div>
    </section>
  )
}

export default Search
