import { createBrowserHistory } from "history"
import React from "react"

import * as timeago from "timeago.js"
import TrustBadge from "../components/TrustBadge"
import { siteRoutes } from "./siteRoutes"

export function groupItems(items, n) {
  return items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n)
    acc[idx] = [...(acc[idx] || []), x]
    return acc
  }, [])
}

export function reloadOnURLChange() {
  let history = createBrowserHistory()

  history.listen((location, action) => {
    const url = window.location.hash
    const localStorageName = "prev-url"

    if (
      localStorage.getItem(localStorageName) === "" ||
      !localStorage.getItem(localStorageName)
    ) {
      localStorage.setItem(localStorageName, url)
    }

    console.log(localStorage.getItem(localStorageName), url)

    if (localStorage.getItem(localStorageName) !== url) {
      localStorage.setItem(localStorageName, url)
      // window.ezfy.init();
      window.location.reload()
    }
  })
}

export const getWordpressImageBiggestSize = imageSrc => {
  let img = imageSrc ? imageSrc : ""
  return img.replace(/(-\d{3,4}x\d{3,4})(\.\w{3,4})/gim, "$2")
}

export const homepageNavbarLinks = [
  {
    name: "About Us",
    url: "#about",
    offset: -60,
    scroll: true,
  },
  {
    name: "Reviews",
    url: "#reviews",
    offset: -40,
    scroll: true,
  },
  {
    name: "Services",
    url: "#services",
    offset: -40,
    scroll: true,
  },
  {
    name: "Blog",
    url: siteRoutes.blog,
    offset: -40,
    scroll: false,
  },
  {
    name: "Portfolio",
    url: siteRoutes.portfolio,
    offset: -40,
    scroll: false,
  },
  {
    name: "FAQ",
    url: "#faq",
    offset: -60,
    scroll: true,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
]

export const portfolioNavbarLinks = [
  {
    name: "Home",
    url: "/",
    offset: 0,
    scroll: false,
  },
  {
    name: "Services",
    url: "/#services",
    offset: 0,
    scroll: false,
  },
  {
    name: "Blog",
    url: "/blog",
    offset: 0,
    scroll: false,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
]

export const blogNavbarLinks = [
  {
    name: "Home",
    url: "/",
    offset: 0,
    scroll: false,
  },
  {
    name: "Services",
    url: "/#services",
    offset: 0,
    scroll: false,
  },
  {
    name: "Portfolio",
    url: siteRoutes.portfolio,
    offset: 0,
    scroll: false,
  },
  {
    name: "Blog",
    url: siteRoutes.blog,
    offset: 0,
    scroll: false,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
]

export function renderNav(page, navItem) {
  switch (page) {
    case "home":
      return [...homepageNavbarLinks].map(e => navItem(e))
    case "portfolio":
      return [...portfolioNavbarLinks].map(e => navItem(e))
    case "privacy":
      return [...portfolioNavbarLinks].map(e => navItem(e))
    case "blog":
      return [...blogNavbarLinks].map(e => navItem(e))
    default:
      return [...homepageNavbarLinks].map(e => navItem(e))
  }
}

export function generateBlogUrl(slug, addUrlBefore = true) {
  const url = `${addUrlBefore ? window.location.origin : ""}/blog/${slug}`
  return url
}

export function timeSince(date) {
  return timeago.format(new Date(date)).replace(/$in^(.*)/gim, "$1 ago")
}

export function formatDate(date) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Date(date).toLocaleDateString("en-US", options)
}

export const links = {
  homepage: "/",
  blog: "/blog",
}
