import React from "react"
import { createBrowserHistory } from "history"

import * as timeago from "timeago.js"
import { siteRoutes } from "./siteRoutes"
import { Link } from "gatsby"

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
    name: "About",
    url: [
      {
        name: "Who we are",
        url: "/#about",
        offset: -60,
        scroll: true,
      },
      {
        name: "Reviews",
        url: "/#reviews",
        offset: -40,
        scroll: true,
      },

      {
        name: "Portfolio",
        url: siteRoutes.portfolio,
        offset: -40,
        scroll: false,
      },

      {
        name: "FAQ",
        url: "/#faq",
        offset: -60,
        scroll: true,
      },
    ],
  },

  {
    name: "Services",
    url: [
      {
        name: "Shop",
        url: "/shop",
        scroll: false,
        badge: "New",
      },
    ],
  },
  {
    name: "Blog",
    url: siteRoutes.blog,
    offset: -40,
    scroll: false,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
]

export const defaultNavbarLinks = [
  {
    name: "About",
    url: [
      {
        name: "Who we are",
        url: "/#about",
        offset: -60,
        scroll: false,
      },
      {
        name: "Reviews",
        url: "/#reviews",
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
        url: "/#faq",
        offset: -60,
        scroll: false,
      },
    ],
  },
  {
    name: "Services",
    url: [
      {
        name: "Shop",
        url: siteRoutes.shop,
        scroll: false,
        badge: "New",
      },
    ],
  },
  {
    name: "Blog",
    url: siteRoutes.blog,
    offset: -40,
    scroll: false,
  },
  {
    name: "Contact",
    url: "#contact",
    offset: -60,
    scroll: true,
  },
]

export const footerNavbarLinks = [
  {
    name: "Home",
    url: "/",
    offset: 0,
    scroll: false,
  },
  {
    name: "About Us",
    url: siteRoutes.about,
    offset: -60,
    scroll: false,
  },
  {
    name: "Services",
    url: siteRoutes.services,
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

/**
 *
 * @param {array} items - Array of all navbar items.
 * @param {function} createNavItem - Creates a single navbar item, returns JSX.
 * @param {function} createDropdownItem - Creates a group of navbar items within an <ul>. Returns JSX.
 */

function createNavbarDropdownItem(items) {
  return (
    <li key={items.name} className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id={`navbarDropdownMenuLink-${items.name}`}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {items.name}
      </a>
      <ul
        className="dropdown-menu"
        aria-labelledby={`navbarDropdownMenuLink-${items.name}`}
      >
        {[...items.url].map(e => {
          return (
            <li key={JSON.stringify(e)} className="nav-item">
              {e.scroll ? (
                <a
                  className={
                    e.scroll
                      ? "dropdown-item nav-link scroll"
                      : "dropdown-item nav-link"
                  }
                  href={e.url}
                  data-scroll-offset={e.offset}
                >
                  {e.name}
                </a>
              ) : (
                <Link className="nav-link dropdown-item" to={e.url}>
                  {e.name}

                  {e.hasOwnProperty("badge") && (
                    <span className="badge badge-pill badge-warning ml-2">
                      {e.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </li>
  )
}

function createNavItems(items, createNavItem) {
  return items.map(e => {
    if (Array.isArray(e.url)) {
      return createNavbarDropdownItem(e)
    }
    return createNavItem(e)
  })
}

export function renderNav(page, createNavItem) {
  switch (page) {
    case "home":
      return createNavItems(defaultNavbarLinks, createNavItem)
    case "portfolio":
      return createNavItems(defaultNavbarLinks, createNavItem)
    case "shop":
      return createNavItems(defaultNavbarLinks, createNavItem)
    case "privacy":
      return createNavItems(defaultNavbarLinks, createNavItem)
    case "blog":
      return createNavItems(defaultNavbarLinks, createNavItem)
    case "footer":
      return [...footerNavbarLinks].map(e => createNavItem(e))
    default:
      return createNavItems(defaultNavbarLinks, createNavItem)
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

export function replaceAll(word, obj) {
  let finalString = ""
  for (let each of word) {
    for (const o in obj) {
      const value = obj[o]
      if (each == o) {
        each = value
      }
    }
    finalString += each
  }

  return finalString
}

/**
 * Sanitizes all the e-junkie and gumroad products coming from Graphql Wordpress' API.
 * Parameters:
 *
 * @param {object} data = All the ejunkie and gumroad products.
 * @param {bool} graphql = Graphql (true) or REST API (false)
 */

// export function sanitizeProducts(data, graphql = true) {
//   const _data = graphql ? data.allWordpressProducts.edges[0].node : data
//   const ejunkie = _data.ejunkie.products
//   const gumroad = _data.gumroad.products
//   let products = []

//   ejunkie.map(e => {
//     const price = e.sub_items
//       .map(el => el.price)[0]
//       .replace("$", "")
//       .replace(".00", "")

//     const slug = e.name
//       .replace(/[^\w\s]/gi, "")
//       .toLowerCase()
//       .split(" ")
//       .join("-")

//     return products.push({
//       title: e.name,
//       price,
//       description: e.details,
//       thumbnail: e.images[0],
//       slug,
//       url: `https://ezfy.e-junkie.com/product/${e.number}`,
//       addToCart: `https://www.fatfreecartpro.com/ecom/gb.php?&c=cart&ejc=2&cl=374804&i=${e.number}`,
//     })
//   })

//   gumroad.map(e => {
//     if (!e.published) {
//       return
//     }

//     var _word = e.short_url.split("/")
//     var slug = _word[_word.length - 1]

//     return products.push({
//       title: e.name,
//       price: /0\+/.test(e.formatted_price)
//         ? "Free"
//         : e.formatted_price.replace("$", ""),
//       slug,
//       description: e.description,
//       thumbnail: e.preview_url,
//       url: e.short_url,
//     })
//   })

//   return products
// }
