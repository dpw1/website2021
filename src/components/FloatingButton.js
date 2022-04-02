import React, { useEffect, useState } from "react"

import inView from "element-in-view"

import "./FloatingButton.scss"

export default function FloatingButton(props) {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const { name: _name, price: _price, addToCart, loading } = props

  const price = _price.toString().replace(".00", "")

  useEffect(() => {
    const checkVisibility = () => {
      const $el = document.querySelector(`.Product-atc`)

      if (!$el) {
        return
      }

      setIsVisible(inView($el))
    }

    window.onload = function () {
      checkVisibility()
      setIsLoading(false)
    }

    window.addEventListener("scroll", () => {
      setTimeout(checkVisibility, 100)

      if (!isLoading) {
        return
      }

      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    console.log(isVisible)
  }, [isVisible])

  return (
    <div
      className={`FloatingButton ${
        isVisible ? "FloatingButton--invisible" : "FloatingButton--visible"
      } 
            
      ${isLoading || "FloatingButton--loaded"} 
      `}
    >
      <a
        onClick={e => addToCart(e)}
        className="FloatingButton-button"
        href={"#"}
        target="_blank"
      >
        {loading ? "Loading..." : "Download now"}
        {price && <div className="FloatingButton-price ">{price}</div>}
      </a>
    </div>
  )
}
