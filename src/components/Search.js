import React, { useState } from "react"
import "./Search.scss"
import image from "../copy/img/avatar/diego.jpg"
import { Link } from "gatsby"
import { siteRoutes } from "../utils/siteRoutes"
import { useEffect } from "react"
import useInput from "./../hooks/useInput"
import { decode } from "html-entities"

function Search(props) {
  const { data, dataKey, updateData, isSearching, setIsSearching } = props

  const [search, searchInput] = useInput({
    type: "text",
    placeholder: "Search...",
    className: "form-control",
  })

  const [results, setResults] = useState(null)

  /**
   * performs search based on a query.
   * @param {*} _query
   * @returns
   */
  const handleSearch = _query => {
    const query = _query.toLowerCase().trim()

    setIsSearching(true)
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
    return filtered
  }

  const updateUI = () => {
    if (results.length !== data.length) {
      alert("different")
    }
  }

  useEffect(() => {
    const res = handleSearch(search)

    if (!res) {
      return
    }

    updateData(res)
    setResults(res.length)
  }, [search])

  return (
    <section id="Search" className="SearchBox">
      <div className="SearchBox-filter">
        <div className="SearchBox-total  ">
          {`Showing ${results} ${results === 1 ? "result" : "results"} out of ${
            data.length
          }.`}
        </div>
        {searchInput}
      </div>
    </section>
  )
}

export default Search
