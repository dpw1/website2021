import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"

import ReactPaginate from "react-paginate"
import { BlogItem } from "./BlogShowcase"
import "./BlogPaginated.scss"
import { updateQueryString } from "../utils/utils"

export default function BlogPaginated(props) {
  const [initialPage, setinitialPage] = useState(null)

  const { posts: items } = props

  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 6

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage

  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length

    if (event.selected !== 0) {
      updateQueryString("page", event.selected + 1)
    } else if (event.selected === 0 && initialPage !== 0) {
      updateQueryString("page", 1)
    }

    setItemOffset(newOffset)
  }

  useEffect(() => {
    try {
      const value = new URLSearchParams(window.location.search).get("page")
        ? parseInt(new URLSearchParams(window.location.search).get("page")) - 1
        : 0

      console.log("value", value)
      // debugger
      setinitialPage(value)
    } catch (err) {
      updateQueryString("page", 1)
      setinitialPage(1)
    }
  }, [])

  return (
    <div className="BlogPaginated">
      <div className="BlogPaginated-posts">
        {currentItems
          ? [...currentItems].map((data, i) => (
              <BlogItem
                resetImage={true}
                isSearching={false}
                key={i}
                data={data}
              ></BlogItem>
            ))
          : "Retrieving blog posts, please wait..."}
      </div>

      <div>
        {initialPage !== null ? (
          <ReactPaginate
            className="BlogPaginated-pagination"
            breakLabel="..."
            nextLabel="next >"
            initialPage={initialPage}
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        ) : (
          "err"
        )}
      </div>
    </div>
  )
}
