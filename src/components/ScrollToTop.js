import React, { Component, useEffect } from "react"
import "./ScrollToTop.scss"

function ScrollToTop() {
  useEffect(() => {
    var offset = 300
    const $scroll = document.querySelector(`#scrollUp`)

    window.addEventListener("scroll", function () {
      const scroll = window.scrollY

      if (!$scroll) {
        return
      }

      if (scroll > offset) {
        $scroll.classList.add(`visible`)
      } else {
        $scroll.classList.remove(`visible`)
      }
    })

    if ($scroll) {
      $scroll.addEventListener(`click`, function (e) {
        e.preventDefault()
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      })
    }
  }, [])

  return (
    <div id="scrollUp" title="Scroll To Top">
      <i className="fas fa-arrow-up" />
    </div>
  )
}

export default ScrollToTop
