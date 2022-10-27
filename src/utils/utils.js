import React from "react"
import { createBrowserHistory } from "history"

import * as timeago from "timeago.js"
import { siteRoutes } from "./siteRoutes"
import { Link } from "gatsby"
import axios from "axios"
import globalUtils from "../../global-utils"
import parse from "html-react-parser"

export function isShopPage() {
  return /shop\/?\??/gim.test(window.location.href)
}

export function extractTextBetween(text, start, end) {
  if (!start || !end) {
    throw new Error(`Please add a "start" and "end" parameter`)
  }

  if (text.split(start).length % 2 === 0) {
    throw new Error(`There is an uneven number of "starts" and "ends".`)
  }

  return text.split(start).filter(function (v, i) {
    return i % 2 !== 0
  })
}

export function groupItems(items, n) {
  return items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n)
    acc[idx] = [...(acc[idx] || []), x]
    return acc
  }, [])
}

export function setCookie(name, value, days) {
  var expires = ""
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

export function getCookie(name) {
  var nameEQ = name + "="
  var ca = document.cookie.split(";")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export function removeCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
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
    name: "Shop",

    url: [
      {
        name: "Dawn Theme",
        url: `${siteRoutes.shop}?tag=dawn%20theme`,
        offset: -60,
        scroll: false,
      },
      {
        name: "Debut Theme",
        url: `${siteRoutes.shop}?tag=debut%20theme`,
        offset: -40,
        scroll: false,
      },
      {
        name: "Minimal Theme",
        url: `${siteRoutes.shop}?tag=minimal%20theme`,
        offset: -40,
        scroll: false,
      },
      {
        name: "Popular",
        url: `${siteRoutes.shop}?tag=popular`,
        offset: -60,
        scroll: false,
      },
      {
        name: "All themes",
        url: `${siteRoutes.shop}`,
        offset: -40,
        scroll: false,
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
    url: siteRoutes.contactSection,
    offset: -60,
    scroll: false,
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
    url: siteRoutes.shop,
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
    url: siteRoutes.contactSection,
    offset: -60,
    scroll: false,
  },
  {
    name: "Terms of Service",
    url: siteRoutes.license,
    offset: -60,
    scroll: false,
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
      <Link
        to={items.name === "Shop" && siteRoutes.shop}
        className="nav-link dropdown-toggle"
        id={`navbarDropdownMenuLink-${items.name}`}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {items.name}
      </Link>
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
                <Link
                  onClick={() => {
                    if (isShopPage()) {
                      console.log("reload")
                      setTimeout(() => {
                        window.location.href = window.location.href
                      }, 50)
                    }
                  }}
                  className="nav-link dropdown-item"
                  to={e.url}
                >
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

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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

export function getTotalVisibleProducts() {
  const $products = window.document.querySelectorAll(
    `.portfolio-row > article, article.single-blog`
  )

  if (!$products) {
    return
  }

  return parseInt($products.length)
}

export function _waitForElement(selector, delay = 50, tries = 250) {
  const element = window.document.querySelector(selector)

  if (!window[`__${selector}`]) {
    window[`__${selector}`] = 0
  }

  function _search() {
    return new Promise(resolve => {
      window[`__${selector}`]++
      setTimeout(resolve, delay)
    })
  }

  if (element === null) {
    if (window[`__${selector}`] >= tries) {
      window[`__${selector}`] = 0
      return Promise.reject(null)
    }

    return _search().then(() => _waitForElement(selector))
  } else {
    return Promise.resolve(element)
  }
}

export function getEcwidProducts() {
  return new Promise(async (resolve, reject) => {
    const { data: ecwidProducts } = await axios.get(
      `https://app.ecwid.com/api/v3/61271341/products?token=public_iNxZWDXrKMZrzGkdBWk3fvcfaJhBVgcm`
    )

    const _products = await globalUtils.sanitizeEcwidProducts(
      ecwidProducts.items
    )

    resolve(_products)
  })
}

export function ruleOfThree(a, b, c) {
  return parseFloat((b * c) / a)
}

export const productsQuery = () => {
  // const data = useStaticQuery(graphql`
  //   query ProductsShowcaseQuery {
  //     allWordpressProducts {
  //       edges {
  //         node {
  //           wordpress_id
  //           ejunkie {
  //             products {
  //               number
  //               images
  //               name
  //               details
  //               number
  //               tags
  //               description
  //               sub_items {
  //                 price
  //               }
  //             }
  //           }
  //           gumroad {
  //             products {
  //               wordpress_id
  //               name
  //               formatted_price
  //               preview_url
  //               short_url
  //               description
  //               published
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return {}
}

export function shuffle(array) {
  var i = array.length,
    temp,
    random

  while (0 !== i) {
    random = Math.floor(Math.random() * i)
    i -= 1

    temp = array[i]
    array[i] = array[random]
    array[random] = temp
  }

  return array
}

export function formatCurrency(amount) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return formatter.format(amount)
}

export const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "China",
  "Croatia",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Lithuania",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Russian",
  "Singapore",
  "Slovakia",
  "South Africa",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Tunisia",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
]

export function randomNoRepeats(array) {
  var copy = array.slice(0)
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0)
    }
    var index = Math.floor(Math.random() * copy.length)
    var item = copy[index]
    copy.splice(index, 1)
    return item
  }
}

export const cleanDescription = desc => {
  let description = desc

  var regex = /\[gist\](.*?)\[gist\]/g
  let m

  while ((m = regex.exec(description)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }

    m.forEach(async (match, groupIndex) => {
      var id = m[1].toString()

      description = description.replace(
        m[0],
        `<span data-gist-id="${id}"></span>`
      )
    })
  }

  return parse(description)
}

export async function resetImagesOnSearch() {
  var $images = document.querySelectorAll(`.single-blog img`)

  for (var each of $images) {
    var src = each.getAttribute(`data-src`)
    each.setAttribute(
      `src`,
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
    )
    each.classList.remove(`lazyload`)
    await sleep(50)
    each.setAttribute(`src`, src)
  }
}

export function isThereCurrentActiveTag() {
  const $active = document.querySelector(
    `.Tags-wrapper > .Tags-tag--active:not(:nth-child(1))`
  )

  if ($active) {
    return true
  }

  return false
}

/* Searches for all elements containing a [data-gist-ids], renders the gist within them */
export function renderGistsDynamically() {
  var $gists = window.document.querySelectorAll(`[data-gist-id]`)

  for (var [i, each] of $gists.entries()) {
    const gistId = each.getAttribute("data-gist-id")

    // Create an iframe, append it to this document where specified
    var gistFrame = window.document.createElement("iframe")
    gistFrame.setAttribute("width", "100%")
    gistFrame.classList = `gistFrame gistFrame--${i}`
    gistFrame.setAttribute("scrolling", "yes")
    gistFrame.setAttribute("width", "100%")

    var $zone = each
    $zone.innerHTML = ""
    $zone.appendChild(gistFrame)

    // Create the iframe's document
    var gistFrameHTML =
      "<html><body><scr" +
      `ipt type="text/javascript" src="https://gist.github.com/dpw1/` +
      gistId +
      '.js"></sc' +
      "ript></body></html>"

    // Set iframe's document with a trigger for this document to adjust the height
    var gistFrameDoc = gistFrame.document

    if (gistFrame.contentDocument) {
      gistFrameDoc = gistFrame.contentDocument
    } else if (gistFrame.contentWindow) {
      gistFrameDoc = gistFrame.contentWindow.document
    }

    gistFrameDoc.open()
    gistFrameDoc.writeln(gistFrameHTML)
    gistFrameDoc.close()

    /* Add height to iframe */
    const $iframe = document.querySelector(`.gistFrame--${i}`)

    $iframe.addEventListener("load", async function (e) {
      try {
        console.log("loadd", $iframe)

        var height = $iframe.contentWindow.document.body.scrollHeight
        $iframe.style.height = `${height}px`

        /* ======== */
        var $html = gistFrameDoc

        if (!$html) {
          console.log("lll no $html")
        }

        await sleep(1000)

        console.log("lll html", $html)

        var $meta = $html.querySelector(`.gist-meta a`)

        if (!$meta) {
          console.log("lll no $eta")
        }

        var code = $meta.getAttribute("href")

        console.log("lll", code, $zone)

        $zone.insertAdjacentHTML(
          `afterbegin`,
          `<a target="_blank" class="GistRawCode btn" href="${code}">Open code in new tab</a>`
        )
      } catch (err) {
        console.log("lll iframe error: ", err)
      }
    })
  }
}

function extractCodeFromGist() {}
