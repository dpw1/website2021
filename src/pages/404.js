import React, { useEffect } from "react"
import "./404.css"

const themes = [
  "sense",
  "publisher",
  "studio",
  "ride",
  "origin",
  "spotlight",
  "crave",
  "taste",
  "colorblock",
  "craft",
  "refresh",
]

const shopRedirects = [
  {
    old: "craft-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "sense-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "publisher-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "studio-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "ride-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "origin-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "spotlight-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "crave-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "taste-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "colorblock-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
  {
    old: "refresh-theme-slider-pro",
    new: "dawn-theme-slider-pro",
  },
]

const FourZeroFour = props => {
  function mustRedirect() {
    for (var each of shopRedirects) {
      const old = `shop/${each.old}`

      if (window.location.pathname.includes(old)) {
        return `${window.location.origin}/shop/${each.new}`
      }
    }

    return null
  }

  useEffect(() => {
    const redirect = mustRedirect() ? mustRedirect() : `https://ezfycode.com`

    setTimeout(() => {
      window.location.href = redirect
    }, 2000)
  }, [])

  return (
    <p className="FourZeroFour">
      Oops! This page does not exist or has changed. Redirecting in 2 seconds...
    </p>
  )
}

export default FourZeroFour
