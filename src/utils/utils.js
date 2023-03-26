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

export const isBrowser = typeof window !== "undefined"

export function groupItems(items, n) {
  return items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n)
    acc[idx] = [...(acc[idx] || []), x]
    return acc
  }, [])
}

export function setCookie(name, value, days) {
  if (!isBrowser) {
    return
  }
  var expires = ""
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = "; expires=" + date.toUTCString()
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/"
}

export function getCookie(name) {
  if (!isBrowser) {
    return
  }
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
  if (!isBrowser) {
    return
  }
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
        name: "Code Snippets",
        url: "/#CodeSnippets",
        offset: -40,
        scroll: false,
      },
      {
        name: "Reviews",
        url: "/#reviews",
        offset: -40,
        scroll: false,
      },
    ],
  },
  {
    name: "Shop",

    url: [
      {
        name: "Popular",
        url: `${siteRoutes.shop}?tag=popular`,
        offset: -60,
        scroll: false,
      },
      {
        name: "Dawn Theme",
        url: `${siteRoutes.shop}?tag=dawn%20theme`,
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

export const handleEmptCartButtonClick = async () => {
  if (!isBrowser) {
    return
  }

  const $button = await _waitForElement(`.ec-cart--empty button`, 25, 10)

  if (!$button) {
    return
  }

  $button.addEventListener("click", function () {
    const $close = document.querySelector(`.ecwid-popup-closeButton`)

    if (!/shop/.test(window.location.href)) {
      window.location.href = `${window.location.origin}/shop`
    }

    return $close.click()
  })
}

export function _waitForElement(selector, delay = 50, tries = 250) {
  try {
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
  } catch (err) {
    console.error(`_waitForElement - error occurred with selector: ${selector}`)
  }
}

export function getEcwidProducts() {
  return new Promise(async (resolve, reject) => {
    if (
      window.hasOwnProperty("ecwidProducts") &&
      window.ecwidProducts &&
      window.ecwidProducts.length >= 1
    ) {
      resolve(window.ecwidProducts)
    }
    const { data: ecwidProducts } = await axios.get(
      `https://app.ecwid.com/api/v3/61271341/products?token=public_iNxZWDXrKMZrzGkdBWk3fvcfaJhBVgcm`
    )

    const _products = await globalUtils.sanitizeEcwidProducts(
      ecwidProducts.items
    )

    window.ecwidProducts = _products

    resolve(_products)
  })
}

export function ruleOfThree(a, b, c) {
  return parseFloat((b * c) / a)
}

/*
Shows a specific promotion depending on the blog post being viewed.

Example: 

- user is watching a Dawn theme's blog
- show "dawn zoom slider" on the sidebar

*/
export const productPromos = [
  {
    tags: ["dawn"],
    title: `Make your Dawn theme feel premium`,
    subtitle: `Enhance your theme with <b>copy & paste</b> snippets.`,
    image: `https://media0.giphy.com/media/WvvzxI0VWF8kVo4olS/giphy.gif`,
    link: `https://ezfycode.com/shop/dawn-theme-zoom-slider-pro`,
    list: [
      "Same day response support",
      "No coding",
      "Hundreds of coding hours for cheap",
      "Loads faster than apps",
    ],
  },
  {
    tags: ["all"],
    title: `Make your Dawn theme feel premium`,
    subtitle: `Enhance your theme with <b>copy & paste</b> snippets.`,
    image: `https://media0.giphy.com/media/WvvzxI0VWF8kVo4olS/giphy.gif`,
    link: `https://ezfycode.com/shop/dawn-theme-zoom-slider-pro`,
    list: [
      "Same day response support",
      "No coding",
      "Hundreds of coding hours for cheap",
      "Loads faster than apps",
    ],
  },
]

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

export function flatten(input, reference, output) {
  output = output || {}
  for (var key in input) {
    var value = input[key]
    key = reference ? reference + "." + key : key
    if (typeof value === "object" && value !== null) {
      flatten(value, key, output)
    } else {
      output[key] = value
    }
  }
  return output
}

export function getBrowserFingerprint({
  hardwareOnly = false,
  enableWebgl = false,
  debug = false,
} = {}) {
  if (!isBrowser) {
    return
  }

  const devicePixelRatio = +parseInt(window.devicePixelRatio)

  const {
    appName,
    appCodeName,
    appVersion,
    cookieEnabled,
    deviceMemory,
    doNotTrack,
    hardwareConcurrency,
    language,
    languages,
    maxTouchPoints,
    platform,
    product,
    productSub,
    userAgent,
    vendor,
    vendorSub,
  } = window.navigator

  const getCanvasID = debug => {
    try {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const text =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?"
      ctx.textBaseline = "top"
      ctx.font = "14px 'Arial'"
      ctx.textBaseline = "alphabetic"
      ctx.fillStyle = "#f60"
      ctx.fillRect(125, 1, 62, 20)
      ctx.fillStyle = "#069"
      ctx.fillText(text, 2, 15)
      ctx.fillStyle = "rgba(102, 204, 0, 0.7)"
      ctx.fillText(text, 4, 17)

      const result = canvas.toDataURL()

      if (debug) {
        document.body.appendChild(canvas)
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }

      return murmurhash3_32_gc(result)
    } catch {
      return null
    }
  }

  const getWebglID = debug => {
    try {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("webgl")
      canvas.width = 256
      canvas.height = 128

      const f =
        "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
      const g =
        "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
      const h = ctx.createBuffer()

      ctx.bindBuffer(ctx.ARRAY_BUFFER, h)

      const i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0])

      ctx.bufferData(ctx.ARRAY_BUFFER, i, ctx.STATIC_DRAW),
        (h.itemSize = 3),
        (h.numItems = 3)

      const j = ctx.createProgram()
      const k = ctx.createShader(ctx.VERTEX_SHADER)

      ctx.shaderSource(k, f)
      ctx.compileShader(k)

      const l = ctx.createShader(ctx.FRAGMENT_SHADER)

      ctx.shaderSource(l, g)
      ctx.compileShader(l)
      ctx.attachShader(j, k)
      ctx.attachShader(j, l)
      ctx.linkProgram(j)
      ctx.useProgram(j)

      j.vertexPosAttrib = ctx.getAttribLocation(j, "attrVertex")
      j.offsetUniform = ctx.getUniformLocation(j, "uniformOffset")

      ctx.enableVertexAttribArray(j.vertexPosArray)
      ctx.vertexAttribPointer(
        j.vertexPosAttrib,
        h.itemSize,
        ctx.FLOAT,
        !1,
        0,
        0
      )
      ctx.uniform2f(j.offsetUniform, 1, 1)
      ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, h.numItems)

      const n = new Uint8Array(canvas.width * canvas.height * 4)
      ctx.readPixels(
        0,
        0,
        canvas.width,
        canvas.height,
        ctx.RGBA,
        ctx.UNSIGNED_BYTE,
        n
      )

      const result = JSON.stringify(n).replace(/,?"[0-9]+":/g, "")

      if (debug) {
        document.body.appendChild(canvas)
      } else {
        ctx.clear(
          ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT
        )
      }

      return murmurhash3_32_gc(result)
    } catch {
      return null
    }
  }

  const getWebglInfo = () => {
    try {
      const ctx = document.createElement("canvas").getContext("webgl")

      const result = {
        VERSION: ctx.getParameter(ctx.VERSION),
        SHADING_LANGUAGE_VERSION: ctx.getParameter(
          ctx.SHADING_LANGUAGE_VERSION
        ),
        VENDOR: ctx.getParameter(ctx.VENDOR),
        SUPORTED_EXTENSIONS: ctx.getSupportedExtensions(),
      }

      return result
    } catch {
      return null
    }
  }

  const murmurhash3_32_gc = key => {
    const remainder = key.length & 3 // key.length % 4
    const bytes = key.length - remainder
    const c1 = 0xcc9e2d51
    const c2 = 0x1b873593

    let h1, h1b, k1

    for (let i = 0; i < bytes; i++) {
      k1 =
        (key.charCodeAt(i) & 0xff) |
        ((key.charCodeAt(++i) & 0xff) << 8) |
        ((key.charCodeAt(++i) & 0xff) << 16) |
        ((key.charCodeAt(++i) & 0xff) << 24)
      ++i

      k1 =
        ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) &
        0xffffffff
      k1 = (k1 << 15) | (k1 >>> 17)
      k1 =
        ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) &
        0xffffffff

      h1 ^= k1
      h1 = (h1 << 13) | (h1 >>> 19)
      h1b =
        ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff
      h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16)
    }

    const i = bytes - 1

    k1 = 0

    switch (remainder) {
      case 3: {
        k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16
        break
      }
      case 2: {
        k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8
        break
      }
      case 1: {
        k1 ^= key.charCodeAt(i) & 0xff
        break
      }
    }

    k1 =
      ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff
    k1 = (k1 << 15) | (k1 >>> 17)
    k1 =
      ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff
    h1 ^= k1

    h1 ^= key.length

    h1 ^= h1 >>> 16
    h1 =
      ((h1 & 0xffff) * 0x85ebca6b +
        ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) &
      0xffffffff
    h1 ^= h1 >>> 13
    h1 =
      ((h1 & 0xffff) * 0xc2b2ae35 +
        ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) &
      0xffffffff
    h1 ^= h1 >>> 16

    return h1 >>> 0
  }

  const { width, height, colorDepth, pixelDepth } = window.screen
  const timezoneOffset = new Date().getTimezoneOffset()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const touchSupport = "ontouchstart" in window

  const canvas = getCanvasID(debug)
  const webgl = enableWebgl ? getWebglID(debug) : undefined // undefined will remove this from the stringify down here
  const webglInfo = enableWebgl ? getWebglInfo(debug) : undefined // undefined will remove this from the stringify down here

  const data = hardwareOnly
    ? JSON.stringify({
        canvas,
        colorDepth,
        deviceMemory,
        devicePixelRatio,
        hardwareConcurrency,
        height,
        maxTouchPoints,
        pixelDepth,
        platform,
        touchSupport,
        webgl,
        webglInfo,
        width,
      })
    : JSON.stringify({
        appCodeName,
        appName,
        appVersion,
        canvas,
        colorDepth,
        cookieEnabled,
        deviceMemory,
        devicePixelRatio,
        doNotTrack,
        hardwareConcurrency,
        height,
        language,
        languages,
        maxTouchPoints,
        pixelDepth,
        platform,
        product,
        productSub,
        timezone,
        timezoneOffset,
        touchSupport,
        userAgent,
        vendor,
        vendorSub,
        webgl,
        webglInfo,
        width,
      })

  const datastring = JSON.stringify(data, null, 4)

  if (debug) console.log("fingerprint data", datastring)

  const result = murmurhash3_32_gc(datastring)
  window.getBrowserFingerprint = getBrowserFingerprint
  return result
}

export function getCountry() {
  var countries = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos Islands",
    CD: "Democratic Republic of the Congo",
    CF: "Central African Republic",
    CG: "Republic of the Congo",
    CH: "Switzerland",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "Virgin Islands (UK)",
    VI: "Virgin Islands (US)",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  }
  var timezones = {
    "Africa/Abidjan": {
      u: 0,
      c: ["CI", "BF", "GH", "GM", "GN", "ML", "MR", "SH", "SL", "SN", "TG"],
    },
    "Africa/Accra": {
      a: "Africa/Abidjan",
      c: ["GH"],
      r: 1,
    },
    "Africa/Addis_Ababa": {
      a: "Africa/Nairobi",
      c: ["ET"],
      r: 1,
    },
    "Africa/Algiers": {
      u: 60,
      c: ["DZ"],
    },
    "Africa/Asmara": {
      a: "Africa/Nairobi",
      c: ["ER"],
      r: 1,
    },
    "Africa/Asmera": {
      a: "Africa/Nairobi",
      c: ["ER"],
      r: 1,
    },
    "Africa/Bamako": {
      a: "Africa/Abidjan",
      c: ["ML"],
      r: 1,
    },
    "Africa/Bangui": {
      a: "Africa/Lagos",
      c: ["CF"],
      r: 1,
    },
    "Africa/Banjul": {
      a: "Africa/Abidjan",
      c: ["GM"],
      r: 1,
    },
    "Africa/Bissau": {
      u: 0,
      c: ["GW"],
    },
    "Africa/Blantyre": {
      a: "Africa/Maputo",
      c: ["MW"],
      r: 1,
    },
    "Africa/Brazzaville": {
      a: "Africa/Lagos",
      c: ["CG"],
      r: 1,
    },
    "Africa/Bujumbura": {
      a: "Africa/Maputo",
      c: ["BI"],
      r: 1,
    },
    "Africa/Cairo": {
      u: 120,
      c: ["EG"],
    },
    "Africa/Casablanca": {
      u: 60,
      d: 0,
      c: ["MA"],
    },
    "Africa/Ceuta": {
      u: 60,
      d: 120,
      c: ["ES"],
    },
    "Africa/Conakry": {
      a: "Africa/Abidjan",
      c: ["GN"],
      r: 1,
    },
    "Africa/Dakar": {
      a: "Africa/Abidjan",
      c: ["SN"],
      r: 1,
    },
    "Africa/Dar_es_Salaam": {
      a: "Africa/Nairobi",
      c: ["TZ"],
      r: 1,
    },
    "Africa/Djibouti": {
      a: "Africa/Nairobi",
      c: ["DJ"],
      r: 1,
    },
    "Africa/Douala": {
      a: "Africa/Lagos",
      c: ["CM"],
      r: 1,
    },
    "Africa/El_Aaiun": {
      u: 60,
      d: 0,
      c: ["EH"],
    },
    "Africa/Freetown": {
      a: "Africa/Abidjan",
      c: ["SL"],
      r: 1,
    },
    "Africa/Gaborone": {
      a: "Africa/Maputo",
      c: ["BW"],
      r: 1,
    },
    "Africa/Harare": {
      a: "Africa/Maputo",
      c: ["ZW"],
      r: 1,
    },
    "Africa/Johannesburg": {
      u: 120,
      c: ["ZA", "LS", "SZ"],
    },
    "Africa/Juba": {
      u: 120,
      c: ["SS"],
    },
    "Africa/Kampala": {
      a: "Africa/Nairobi",
      c: ["UG"],
      r: 1,
    },
    "Africa/Khartoum": {
      u: 120,
      c: ["SD"],
    },
    "Africa/Kigali": {
      a: "Africa/Maputo",
      c: ["RW"],
      r: 1,
    },
    "Africa/Kinshasa": {
      a: "Africa/Lagos",
      c: ["CD"],
      r: 1,
    },
    "Africa/Lagos": {
      u: 60,
      c: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"],
    },
    "Africa/Libreville": {
      a: "Africa/Lagos",
      c: ["GA"],
      r: 1,
    },
    "Africa/Lome": {
      a: "Africa/Abidjan",
      c: ["TG"],
      r: 1,
    },
    "Africa/Luanda": {
      a: "Africa/Lagos",
      c: ["AO"],
      r: 1,
    },
    "Africa/Lubumbashi": {
      a: "Africa/Maputo",
      c: ["CD"],
      r: 1,
    },
    "Africa/Lusaka": {
      a: "Africa/Maputo",
      c: ["ZM"],
      r: 1,
    },
    "Africa/Malabo": {
      a: "Africa/Lagos",
      c: ["GQ"],
      r: 1,
    },
    "Africa/Maputo": {
      u: 120,
      c: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"],
    },
    "Africa/Maseru": {
      a: "Africa/Johannesburg",
      c: ["LS"],
      r: 1,
    },
    "Africa/Mbabane": {
      a: "Africa/Johannesburg",
      c: ["SZ"],
      r: 1,
    },
    "Africa/Mogadishu": {
      a: "Africa/Nairobi",
      c: ["SO"],
      r: 1,
    },
    "Africa/Monrovia": {
      u: 0,
      c: ["LR"],
    },
    "Africa/Nairobi": {
      u: 180,
      c: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"],
    },
    "Africa/Ndjamena": {
      u: 60,
      c: ["TD"],
    },
    "Africa/Niamey": {
      a: "Africa/Lagos",
      c: ["NE"],
      r: 1,
    },
    "Africa/Nouakchott": {
      a: "Africa/Abidjan",
      c: ["MR"],
      r: 1,
    },
    "Africa/Ouagadougou": {
      a: "Africa/Abidjan",
      c: ["BF"],
      r: 1,
    },
    "Africa/Porto-Novo": {
      a: "Africa/Lagos",
      c: ["BJ"],
      r: 1,
    },
    "Africa/Sao_Tome": {
      u: 0,
      c: ["ST"],
    },
    "Africa/Timbuktu": {
      a: "Africa/Abidjan",
      c: ["ML"],
      r: 1,
    },
    "Africa/Tripoli": {
      u: 120,
      c: ["LY"],
    },
    "Africa/Tunis": {
      u: 60,
      c: ["TN"],
    },
    "Africa/Windhoek": {
      u: 120,
      c: ["NA"],
    },
    "America/Adak": {
      u: -600,
      d: -540,
      c: ["US"],
    },
    "America/Anchorage": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/Anguilla": {
      a: "America/Puerto_Rico",
      c: ["AI"],
      r: 1,
    },
    "America/Antigua": {
      a: "America/Puerto_Rico",
      c: ["AG"],
      r: 1,
    },
    "America/Araguaina": {
      u: -180,
      c: ["BR"],
    },
    "America/Argentina/Buenos_Aires": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Catamarca": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/ComodRivadavia": {
      a: "America/Argentina/Catamarca",
      r: 1,
    },
    "America/Argentina/Cordoba": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Jujuy": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/La_Rioja": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Mendoza": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Rio_Gallegos": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Salta": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/San_Juan": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/San_Luis": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Tucuman": {
      u: -180,
      c: ["AR"],
    },
    "America/Argentina/Ushuaia": {
      u: -180,
      c: ["AR"],
    },
    "America/Aruba": {
      a: "America/Puerto_Rico",
      c: ["AW"],
      r: 1,
    },
    "America/Asuncion": {
      u: -240,
      d: -180,
      c: ["PY"],
    },
    "America/Atikokan": {
      a: "America/Panama",
      c: ["CA"],
      r: 1,
    },
    "America/Atka": {
      a: "America/Adak",
      r: 1,
    },
    "America/Bahia": {
      u: -180,
      c: ["BR"],
    },
    "America/Bahia_Banderas": {
      u: -360,
      d: -300,
      c: ["MX"],
    },
    "America/Barbados": {
      u: -240,
      c: ["BB"],
    },
    "America/Belem": {
      u: -180,
      c: ["BR"],
    },
    "America/Belize": {
      u: -360,
      c: ["BZ"],
    },
    "America/Blanc-Sablon": {
      a: "America/Puerto_Rico",
      c: ["CA"],
      r: 1,
    },
    "America/Boa_Vista": {
      u: -240,
      c: ["BR"],
    },
    "America/Bogota": {
      u: -300,
      c: ["CO"],
    },
    "America/Boise": {
      u: -420,
      d: -360,
      c: ["US"],
    },
    "America/Buenos_Aires": {
      a: "America/Argentina/Buenos_Aires",
      r: 1,
    },
    "America/Cambridge_Bay": {
      u: -420,
      d: -360,
      c: ["CA"],
    },
    "America/Campo_Grande": {
      u: -240,
      c: ["BR"],
    },
    "America/Cancun": {
      u: -300,
      c: ["MX"],
    },
    "America/Caracas": {
      u: -240,
      c: ["VE"],
    },
    "America/Catamarca": {
      a: "America/Argentina/Catamarca",
      r: 1,
    },
    "America/Cayenne": {
      u: -180,
      c: ["GF"],
    },
    "America/Cayman": {
      a: "America/Panama",
      c: ["KY"],
      r: 1,
    },
    "America/Chicago": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/Chihuahua": {
      u: -420,
      d: -360,
      c: ["MX"],
    },
    "America/Coral_Harbour": {
      a: "America/Panama",
      c: ["CA"],
      r: 1,
    },
    "America/Cordoba": {
      a: "America/Argentina/Cordoba",
      r: 1,
    },
    "America/Costa_Rica": {
      u: -360,
      c: ["CR"],
    },
    "America/Creston": {
      a: "America/Phoenix",
      c: ["CA"],
      r: 1,
    },
    "America/Cuiaba": {
      u: -240,
      c: ["BR"],
    },
    "America/Curacao": {
      a: "America/Puerto_Rico",
      c: ["CW"],
      r: 1,
    },
    "America/Danmarkshavn": {
      u: 0,
      c: ["GL"],
    },
    "America/Dawson": {
      u: -420,
      c: ["CA"],
    },
    "America/Dawson_Creek": {
      u: -420,
      c: ["CA"],
    },
    "America/Denver": {
      u: -420,
      d: -360,
      c: ["US"],
    },
    "America/Detroit": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Dominica": {
      a: "America/Puerto_Rico",
      c: ["DM"],
      r: 1,
    },
    "America/Edmonton": {
      u: -420,
      d: -360,
      c: ["CA"],
    },
    "America/Eirunepe": {
      u: -300,
      c: ["BR"],
    },
    "America/El_Salvador": {
      u: -360,
      c: ["SV"],
    },
    "America/Ensenada": {
      a: "America/Tijuana",
      r: 1,
    },
    "America/Fort_Nelson": {
      u: -420,
      c: ["CA"],
    },
    "America/Fort_Wayne": {
      a: "America/Indiana/Indianapolis",
      r: 1,
    },
    "America/Fortaleza": {
      u: -180,
      c: ["BR"],
    },
    "America/Glace_Bay": {
      u: -240,
      d: -180,
      c: ["CA"],
    },
    "America/Godthab": {
      a: "America/Nuuk",
      r: 1,
    },
    "America/Goose_Bay": {
      u: -240,
      d: -180,
      c: ["CA"],
    },
    "America/Grand_Turk": {
      u: -300,
      d: -240,
      c: ["TC"],
    },
    "America/Grenada": {
      a: "America/Puerto_Rico",
      c: ["GD"],
      r: 1,
    },
    "America/Guadeloupe": {
      a: "America/Puerto_Rico",
      c: ["GP"],
      r: 1,
    },
    "America/Guatemala": {
      u: -360,
      c: ["GT"],
    },
    "America/Guayaquil": {
      u: -300,
      c: ["EC"],
    },
    "America/Guyana": {
      u: -240,
      c: ["GY"],
    },
    "America/Halifax": {
      u: -240,
      d: -180,
      c: ["CA"],
    },
    "America/Havana": {
      u: -300,
      d: -240,
      c: ["CU"],
    },
    "America/Hermosillo": {
      u: -420,
      c: ["MX"],
    },
    "America/Indiana/Indianapolis": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indiana/Knox": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/Indiana/Marengo": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indiana/Petersburg": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indiana/Tell_City": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/Indiana/Vevay": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indiana/Vincennes": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indiana/Winamac": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Indianapolis": {
      a: "America/Indiana/Indianapolis",
      r: 1,
    },
    "America/Inuvik": {
      u: -420,
      d: -360,
      c: ["CA"],
    },
    "America/Iqaluit": {
      u: -300,
      d: -240,
      c: ["CA"],
    },
    "America/Jamaica": {
      u: -300,
      c: ["JM"],
    },
    "America/Jujuy": {
      a: "America/Argentina/Jujuy",
      r: 1,
    },
    "America/Juneau": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/Kentucky/Louisville": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Kentucky/Monticello": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Knox_IN": {
      a: "America/Indiana/Knox",
      r: 1,
    },
    "America/Kralendijk": {
      a: "America/Puerto_Rico",
      c: ["BQ"],
      r: 1,
    },
    "America/La_Paz": {
      u: -240,
      c: ["BO"],
    },
    "America/Lima": {
      u: -300,
      c: ["PE"],
    },
    "America/Los_Angeles": {
      u: -480,
      d: -420,
      c: ["US"],
    },
    "America/Louisville": {
      a: "America/Kentucky/Louisville",
      r: 1,
    },
    "America/Lower_Princes": {
      a: "America/Puerto_Rico",
      c: ["SX"],
      r: 1,
    },
    "America/Maceio": {
      u: -180,
      c: ["BR"],
    },
    "America/Managua": {
      u: -360,
      c: ["NI"],
    },
    "America/Manaus": {
      u: -240,
      c: ["BR"],
    },
    "America/Marigot": {
      a: "America/Puerto_Rico",
      c: ["MF"],
      r: 1,
    },
    "America/Martinique": {
      u: -240,
      c: ["MQ"],
    },
    "America/Matamoros": {
      u: -360,
      d: -300,
      c: ["MX"],
    },
    "America/Mazatlan": {
      u: -420,
      d: -360,
      c: ["MX"],
    },
    "America/Mendoza": {
      a: "America/Argentina/Mendoza",
      r: 1,
    },
    "America/Menominee": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/Merida": {
      u: -360,
      d: -300,
      c: ["MX"],
    },
    "America/Metlakatla": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/Mexico_City": {
      u: -360,
      d: -300,
      c: ["MX"],
    },
    "America/Miquelon": {
      u: -180,
      d: -120,
      c: ["PM"],
    },
    "America/Moncton": {
      u: -240,
      d: -180,
      c: ["CA"],
    },
    "America/Monterrey": {
      u: -360,
      d: -300,
      c: ["MX"],
    },
    "America/Montevideo": {
      u: -180,
      c: ["UY"],
    },
    "America/Montreal": {
      a: "America/Toronto",
      c: ["CA"],
      r: 1,
    },
    "America/Montserrat": {
      a: "America/Puerto_Rico",
      c: ["MS"],
      r: 1,
    },
    "America/Nassau": {
      a: "America/Toronto",
      c: ["BS"],
      r: 1,
    },
    "America/New_York": {
      u: -300,
      d: -240,
      c: ["US"],
    },
    "America/Nipigon": {
      u: -300,
      d: -240,
      c: ["CA"],
    },
    "America/Nome": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/Noronha": {
      u: -120,
      c: ["BR"],
    },
    "America/North_Dakota/Beulah": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/North_Dakota/Center": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/North_Dakota/New_Salem": {
      u: -360,
      d: -300,
      c: ["US"],
    },
    "America/Nuuk": {
      u: -180,
      d: -120,
      c: ["GL"],
    },
    "America/Ojinaga": {
      u: -420,
      d: -360,
      c: ["MX"],
    },
    "America/Panama": {
      u: -300,
      c: ["PA", "CA", "KY"],
    },
    "America/Pangnirtung": {
      u: -300,
      d: -240,
      c: ["CA"],
    },
    "America/Paramaribo": {
      u: -180,
      c: ["SR"],
    },
    "America/Phoenix": {
      u: -420,
      c: ["US", "CA"],
    },
    "America/Port-au-Prince": {
      u: -300,
      d: -240,
      c: ["HT"],
    },
    "America/Port_of_Spain": {
      a: "America/Puerto_Rico",
      c: ["TT"],
      r: 1,
    },
    "America/Porto_Acre": {
      a: "America/Rio_Branco",
      r: 1,
    },
    "America/Porto_Velho": {
      u: -240,
      c: ["BR"],
    },
    "America/Puerto_Rico": {
      u: -240,
      c: [
        "PR",
        "AG",
        "CA",
        "AI",
        "AW",
        "BL",
        "BQ",
        "CW",
        "DM",
        "GD",
        "GP",
        "KN",
        "LC",
        "MF",
        "MS",
        "SX",
        "TT",
        "VC",
        "VG",
        "VI",
      ],
    },
    "America/Punta_Arenas": {
      u: -180,
      c: ["CL"],
    },
    "America/Rainy_River": {
      u: -360,
      d: -300,
      c: ["CA"],
    },
    "America/Rankin_Inlet": {
      u: -360,
      d: -300,
      c: ["CA"],
    },
    "America/Recife": {
      u: -180,
      c: ["BR"],
    },
    "America/Regina": {
      u: -360,
      c: ["CA"],
    },
    "America/Resolute": {
      u: -360,
      d: -300,
      c: ["CA"],
    },
    "America/Rio_Branco": {
      u: -300,
      c: ["BR"],
    },
    "America/Rosario": {
      a: "America/Argentina/Cordoba",
      r: 1,
    },
    "America/Santa_Isabel": {
      a: "America/Tijuana",
      r: 1,
    },
    "America/Santarem": {
      u: -180,
      c: ["BR"],
    },
    "America/Santiago": {
      u: -240,
      d: -180,
      c: ["CL"],
    },
    "America/Santo_Domingo": {
      u: -240,
      c: ["DO"],
    },
    "America/Sao_Paulo": {
      u: -180,
      c: ["BR"],
    },
    "America/Scoresbysund": {
      u: -60,
      d: 0,
      c: ["GL"],
    },
    "America/Shiprock": {
      a: "America/Denver",
      r: 1,
    },
    "America/Sitka": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/St_Barthelemy": {
      a: "America/Puerto_Rico",
      c: ["BL"],
      r: 1,
    },
    "America/St_Johns": {
      u: -150,
      d: -90,
      c: ["CA"],
    },
    "America/St_Kitts": {
      a: "America/Puerto_Rico",
      c: ["KN"],
      r: 1,
    },
    "America/St_Lucia": {
      a: "America/Puerto_Rico",
      c: ["LC"],
      r: 1,
    },
    "America/St_Thomas": {
      a: "America/Puerto_Rico",
      c: ["VI"],
      r: 1,
    },
    "America/St_Vincent": {
      a: "America/Puerto_Rico",
      c: ["VC"],
      r: 1,
    },
    "America/Swift_Current": {
      u: -360,
      c: ["CA"],
    },
    "America/Tegucigalpa": {
      u: -360,
      c: ["HN"],
    },
    "America/Thule": {
      u: -240,
      d: -180,
      c: ["GL"],
    },
    "America/Thunder_Bay": {
      u: -300,
      d: -240,
      c: ["CA"],
    },
    "America/Tijuana": {
      u: -480,
      d: -420,
      c: ["MX"],
    },
    "America/Toronto": {
      u: -300,
      d: -240,
      c: ["CA", "BS"],
    },
    "America/Tortola": {
      a: "America/Puerto_Rico",
      c: ["VG"],
      r: 1,
    },
    "America/Vancouver": {
      u: -480,
      d: -420,
      c: ["CA"],
    },
    "America/Virgin": {
      a: "America/Puerto_Rico",
      c: ["VI"],
      r: 1,
    },
    "America/Whitehorse": {
      u: -420,
      c: ["CA"],
    },
    "America/Winnipeg": {
      u: -360,
      d: -300,
      c: ["CA"],
    },
    "America/Yakutat": {
      u: -540,
      d: -480,
      c: ["US"],
    },
    "America/Yellowknife": {
      u: -420,
      d: -360,
      c: ["CA"],
    },
    "Antarctica/Casey": {
      u: 660,
      c: ["AQ"],
    },
    "Antarctica/Davis": {
      u: 420,
      c: ["AQ"],
    },
    "Antarctica/DumontDUrville": {
      a: "Pacific/Port_Moresby",
      c: ["AQ"],
      r: 1,
    },
    "Antarctica/Macquarie": {
      u: 600,
      d: 660,
      c: ["AU"],
    },
    "Antarctica/Mawson": {
      u: 300,
      c: ["AQ"],
    },
    "Antarctica/McMurdo": {
      a: "Pacific/Auckland",
      c: ["AQ"],
      r: 1,
    },
    "Antarctica/Palmer": {
      u: -180,
      c: ["AQ"],
    },
    "Antarctica/Rothera": {
      u: -180,
      c: ["AQ"],
    },
    "Antarctica/South_Pole": {
      a: "Pacific/Auckland",
      c: ["AQ"],
      r: 1,
    },
    "Antarctica/Syowa": {
      a: "Asia/Riyadh",
      c: ["AQ"],
      r: 1,
    },
    "Antarctica/Troll": {
      u: 0,
      d: 120,
      c: ["AQ"],
    },
    "Antarctica/Vostok": {
      u: 360,
      c: ["AQ"],
    },
    "Arctic/Longyearbyen": {
      a: "Europe/Oslo",
      c: ["SJ"],
      r: 1,
    },
    "Asia/Aden": {
      a: "Asia/Riyadh",
      c: ["YE"],
      r: 1,
    },
    "Asia/Almaty": {
      u: 360,
      c: ["KZ"],
    },
    "Asia/Amman": {
      u: 120,
      d: 180,
      c: ["JO"],
    },
    "Asia/Anadyr": {
      u: 720,
      c: ["RU"],
    },
    "Asia/Aqtau": {
      u: 300,
      c: ["KZ"],
    },
    "Asia/Aqtobe": {
      u: 300,
      c: ["KZ"],
    },
    "Asia/Ashgabat": {
      u: 300,
      c: ["TM"],
    },
    "Asia/Ashkhabad": {
      a: "Asia/Ashgabat",
      r: 1,
    },
    "Asia/Atyrau": {
      u: 300,
      c: ["KZ"],
    },
    "Asia/Baghdad": {
      u: 180,
      c: ["IQ"],
    },
    "Asia/Bahrain": {
      a: "Asia/Qatar",
      c: ["BH"],
      r: 1,
    },
    "Asia/Baku": {
      u: 240,
      c: ["AZ"],
    },
    "Asia/Bangkok": {
      u: 420,
      c: ["TH", "KH", "LA", "VN"],
    },
    "Asia/Barnaul": {
      u: 420,
      c: ["RU"],
    },
    "Asia/Beirut": {
      u: 120,
      d: 180,
      c: ["LB"],
    },
    "Asia/Bishkek": {
      u: 360,
      c: ["KG"],
    },
    "Asia/Brunei": {
      u: 480,
      c: ["BN"],
    },
    "Asia/Calcutta": {
      a: "Asia/Kolkata",
      r: 1,
    },
    "Asia/Chita": {
      u: 540,
      c: ["RU"],
    },
    "Asia/Choibalsan": {
      u: 480,
      c: ["MN"],
    },
    "Asia/Chongqing": {
      a: "Asia/Shanghai",
      r: 1,
    },
    "Asia/Chungking": {
      a: "Asia/Shanghai",
      r: 1,
    },
    "Asia/Colombo": {
      u: 330,
      c: ["LK"],
    },
    "Asia/Dacca": {
      a: "Asia/Dhaka",
      r: 1,
    },
    "Asia/Damascus": {
      u: 120,
      d: 180,
      c: ["SY"],
    },
    "Asia/Dhaka": {
      u: 360,
      c: ["BD"],
    },
    "Asia/Dili": {
      u: 540,
      c: ["TL"],
    },
    "Asia/Dubai": {
      u: 240,
      c: ["AE", "OM"],
    },
    "Asia/Dushanbe": {
      u: 300,
      c: ["TJ"],
    },
    "Asia/Famagusta": {
      u: 120,
      d: 180,
      c: ["CY"],
    },
    "Asia/Gaza": {
      u: 120,
      d: 180,
      c: ["PS"],
    },
    "Asia/Harbin": {
      a: "Asia/Shanghai",
      r: 1,
    },
    "Asia/Hebron": {
      u: 120,
      d: 180,
      c: ["PS"],
    },
    "Asia/Ho_Chi_Minh": {
      u: 420,
      c: ["VN"],
    },
    "Asia/Hong_Kong": {
      u: 480,
      c: ["HK"],
    },
    "Asia/Hovd": {
      u: 420,
      c: ["MN"],
    },
    "Asia/Irkutsk": {
      u: 480,
      c: ["RU"],
    },
    "Asia/Istanbul": {
      a: "Europe/Istanbul",
      r: 1,
    },
    "Asia/Jakarta": {
      u: 420,
      c: ["ID"],
    },
    "Asia/Jayapura": {
      u: 540,
      c: ["ID"],
    },
    "Asia/Jerusalem": {
      u: 120,
      d: 180,
      c: ["IL"],
    },
    "Asia/Kabul": {
      u: 270,
      c: ["AF"],
    },
    "Asia/Kamchatka": {
      u: 720,
      c: ["RU"],
    },
    "Asia/Karachi": {
      u: 300,
      c: ["PK"],
    },
    "Asia/Kashgar": {
      a: "Asia/Urumqi",
      r: 1,
    },
    "Asia/Kathmandu": {
      u: 345,
      c: ["NP"],
    },
    "Asia/Katmandu": {
      a: "Asia/Kathmandu",
      r: 1,
    },
    "Asia/Khandyga": {
      u: 540,
      c: ["RU"],
    },
    "Asia/Kolkata": {
      u: 330,
      c: ["IN"],
    },
    "Asia/Krasnoyarsk": {
      u: 420,
      c: ["RU"],
    },
    "Asia/Kuala_Lumpur": {
      u: 480,
      c: ["MY"],
    },
    "Asia/Kuching": {
      u: 480,
      c: ["MY"],
    },
    "Asia/Kuwait": {
      a: "Asia/Riyadh",
      c: ["KW"],
      r: 1,
    },
    "Asia/Macao": {
      a: "Asia/Macau",
      r: 1,
    },
    "Asia/Macau": {
      u: 480,
      c: ["MO"],
    },
    "Asia/Magadan": {
      u: 660,
      c: ["RU"],
    },
    "Asia/Makassar": {
      u: 480,
      c: ["ID"],
    },
    "Asia/Manila": {
      u: 480,
      c: ["PH"],
    },
    "Asia/Muscat": {
      a: "Asia/Dubai",
      c: ["OM"],
      r: 1,
    },
    "Asia/Nicosia": {
      u: 120,
      d: 180,
      c: ["CY"],
    },
    "Asia/Novokuznetsk": {
      u: 420,
      c: ["RU"],
    },
    "Asia/Novosibirsk": {
      u: 420,
      c: ["RU"],
    },
    "Asia/Omsk": {
      u: 360,
      c: ["RU"],
    },
    "Asia/Oral": {
      u: 300,
      c: ["KZ"],
    },
    "Asia/Phnom_Penh": {
      a: "Asia/Bangkok",
      c: ["KH"],
      r: 1,
    },
    "Asia/Pontianak": {
      u: 420,
      c: ["ID"],
    },
    "Asia/Pyongyang": {
      u: 540,
      c: ["KP"],
    },
    "Asia/Qatar": {
      u: 180,
      c: ["QA", "BH"],
    },
    "Asia/Qostanay": {
      u: 360,
      c: ["KZ"],
    },
    "Asia/Qyzylorda": {
      u: 300,
      c: ["KZ"],
    },
    "Asia/Rangoon": {
      a: "Asia/Yangon",
      r: 1,
    },
    "Asia/Riyadh": {
      u: 180,
      c: ["SA", "AQ", "KW", "YE"],
    },
    "Asia/Saigon": {
      a: "Asia/Ho_Chi_Minh",
      r: 1,
    },
    "Asia/Sakhalin": {
      u: 660,
      c: ["RU"],
    },
    "Asia/Samarkand": {
      u: 300,
      c: ["UZ"],
    },
    "Asia/Seoul": {
      u: 540,
      c: ["KR"],
    },
    "Asia/Shanghai": {
      u: 480,
      c: ["CN"],
    },
    "Asia/Singapore": {
      u: 480,
      c: ["SG", "MY"],
    },
    "Asia/Srednekolymsk": {
      u: 660,
      c: ["RU"],
    },
    "Asia/Taipei": {
      u: 480,
      c: ["TW"],
    },
    "Asia/Tashkent": {
      u: 300,
      c: ["UZ"],
    },
    "Asia/Tbilisi": {
      u: 240,
      c: ["GE"],
    },
    "Asia/Tehran": {
      u: 210,
      d: 270,
      c: ["IR"],
    },
    "Asia/Tel_Aviv": {
      a: "Asia/Jerusalem",
      r: 1,
    },
    "Asia/Thimbu": {
      a: "Asia/Thimphu",
      r: 1,
    },
    "Asia/Thimphu": {
      u: 360,
      c: ["BT"],
    },
    "Asia/Tokyo": {
      u: 540,
      c: ["JP"],
    },
    "Asia/Tomsk": {
      u: 420,
      c: ["RU"],
    },
    "Asia/Ujung_Pandang": {
      a: "Asia/Makassar",
      r: 1,
    },
    "Asia/Ulaanbaatar": {
      u: 480,
      c: ["MN"],
    },
    "Asia/Ulan_Bator": {
      a: "Asia/Ulaanbaatar",
      r: 1,
    },
    "Asia/Urumqi": {
      u: 360,
      c: ["CN"],
    },
    "Asia/Ust-Nera": {
      u: 600,
      c: ["RU"],
    },
    "Asia/Vientiane": {
      a: "Asia/Bangkok",
      c: ["LA"],
      r: 1,
    },
    "Asia/Vladivostok": {
      u: 600,
      c: ["RU"],
    },
    "Asia/Yakutsk": {
      u: 540,
      c: ["RU"],
    },
    "Asia/Yangon": {
      u: 390,
      c: ["MM"],
    },
    "Asia/Yekaterinburg": {
      u: 300,
      c: ["RU"],
    },
    "Asia/Yerevan": {
      u: 240,
      c: ["AM"],
    },
    "Atlantic/Azores": {
      u: -60,
      d: 0,
      c: ["PT"],
    },
    "Atlantic/Bermuda": {
      u: -240,
      d: -180,
      c: ["BM"],
    },
    "Atlantic/Canary": {
      u: 0,
      d: 60,
      c: ["ES"],
    },
    "Atlantic/Cape_Verde": {
      u: -60,
      c: ["CV"],
    },
    "Atlantic/Faeroe": {
      a: "Atlantic/Faroe",
      r: 1,
    },
    "Atlantic/Faroe": {
      u: 0,
      d: 60,
      c: ["FO"],
    },
    "Atlantic/Jan_Mayen": {
      a: "Europe/Oslo",
      c: ["SJ"],
      r: 1,
    },
    "Atlantic/Madeira": {
      u: 0,
      d: 60,
      c: ["PT"],
    },
    "Atlantic/Reykjavik": {
      u: 0,
      c: ["IS"],
    },
    "Atlantic/South_Georgia": {
      u: -120,
      c: ["GS"],
    },
    "Atlantic/St_Helena": {
      a: "Africa/Abidjan",
      c: ["SH"],
      r: 1,
    },
    "Atlantic/Stanley": {
      u: -180,
      c: ["FK"],
    },
    "Australia/ACT": {
      a: "Australia/Sydney",
      r: 1,
    },
    "Australia/Adelaide": {
      u: 570,
      d: 630,
      c: ["AU"],
    },
    "Australia/Brisbane": {
      u: 600,
      c: ["AU"],
    },
    "Australia/Broken_Hill": {
      u: 570,
      d: 630,
      c: ["AU"],
    },
    "Australia/Canberra": {
      a: "Australia/Sydney",
      r: 1,
    },
    "Australia/Currie": {
      a: "Australia/Hobart",
      r: 1,
    },
    "Australia/Darwin": {
      u: 570,
      c: ["AU"],
    },
    "Australia/Eucla": {
      u: 525,
      c: ["AU"],
    },
    "Australia/Hobart": {
      u: 600,
      d: 660,
      c: ["AU"],
    },
    "Australia/LHI": {
      a: "Australia/Lord_Howe",
      r: 1,
    },
    "Australia/Lindeman": {
      u: 600,
      c: ["AU"],
    },
    "Australia/Lord_Howe": {
      u: 630,
      d: 660,
      c: ["AU"],
    },
    "Australia/Melbourne": {
      u: 600,
      d: 660,
      c: ["AU"],
    },
    "Australia/NSW": {
      a: "Australia/Sydney",
      r: 1,
    },
    "Australia/North": {
      a: "Australia/Darwin",
      r: 1,
    },
    "Australia/Perth": {
      u: 480,
      c: ["AU"],
    },
    "Australia/Queensland": {
      a: "Australia/Brisbane",
      r: 1,
    },
    "Australia/South": {
      a: "Australia/Adelaide",
      r: 1,
    },
    "Australia/Sydney": {
      u: 600,
      d: 660,
      c: ["AU"],
    },
    "Australia/Tasmania": {
      a: "Australia/Hobart",
      r: 1,
    },
    "Australia/Victoria": {
      a: "Australia/Melbourne",
      r: 1,
    },
    "Australia/West": {
      a: "Australia/Perth",
      r: 1,
    },
    "Australia/Yancowinna": {
      a: "Australia/Broken_Hill",
      r: 1,
    },
    "Brazil/Acre": {
      a: "America/Rio_Branco",
      r: 1,
    },
    "Brazil/DeNoronha": {
      a: "America/Noronha",
      r: 1,
    },
    "Brazil/East": {
      a: "America/Sao_Paulo",
      r: 1,
    },
    "Brazil/West": {
      a: "America/Manaus",
      r: 1,
    },
    CET: {
      u: 60,
      d: 120,
    },
    CST6CDT: {
      u: -360,
      d: -300,
    },
    "Canada/Atlantic": {
      a: "America/Halifax",
      r: 1,
    },
    "Canada/Central": {
      a: "America/Winnipeg",
      r: 1,
    },
    "Canada/Eastern": {
      a: "America/Toronto",
      c: ["CA"],
      r: 1,
    },
    "Canada/Mountain": {
      a: "America/Edmonton",
      r: 1,
    },
    "Canada/Newfoundland": {
      a: "America/St_Johns",
      r: 1,
    },
    "Canada/Pacific": {
      a: "America/Vancouver",
      r: 1,
    },
    "Canada/Saskatchewan": {
      a: "America/Regina",
      r: 1,
    },
    "Canada/Yukon": {
      a: "America/Whitehorse",
      r: 1,
    },
    "Chile/Continental": {
      a: "America/Santiago",
      r: 1,
    },
    "Chile/EasterIsland": {
      a: "Pacific/Easter",
      r: 1,
    },
    Cuba: {
      a: "America/Havana",
      r: 1,
    },
    EET: {
      u: 120,
      d: 180,
    },
    EST: {
      u: -300,
    },
    EST5EDT: {
      u: -300,
      d: -240,
    },
    Egypt: {
      a: "Africa/Cairo",
      r: 1,
    },
    Eire: {
      a: "Europe/Dublin",
      r: 1,
    },
    "Etc/GMT": {
      u: 0,
    },
    "Etc/GMT+0": {
      a: "Etc/GMT",
      r: 1,
    },
    "Etc/GMT+1": {
      u: -60,
    },
    "Etc/GMT+10": {
      u: -600,
    },
    "Etc/GMT+11": {
      u: -660,
    },
    "Etc/GMT+12": {
      u: -720,
    },
    "Etc/GMT+2": {
      u: -120,
    },
    "Etc/GMT+3": {
      u: -180,
    },
    "Etc/GMT+4": {
      u: -240,
    },
    "Etc/GMT+5": {
      u: -300,
    },
    "Etc/GMT+6": {
      u: -360,
    },
    "Etc/GMT+7": {
      u: -420,
    },
    "Etc/GMT+8": {
      u: -480,
    },
    "Etc/GMT+9": {
      u: -540,
    },
    "Etc/GMT-0": {
      a: "Etc/GMT",
      r: 1,
    },
    "Etc/GMT-1": {
      u: 60,
    },
    "Etc/GMT-10": {
      u: 600,
    },
    "Etc/GMT-11": {
      u: 660,
    },
    "Etc/GMT-12": {
      u: 720,
    },
    "Etc/GMT-13": {
      u: 780,
    },
    "Etc/GMT-14": {
      u: 840,
    },
    "Etc/GMT-2": {
      u: 120,
    },
    "Etc/GMT-3": {
      u: 180,
    },
    "Etc/GMT-4": {
      u: 240,
    },
    "Etc/GMT-5": {
      u: 300,
    },
    "Etc/GMT-6": {
      u: 360,
    },
    "Etc/GMT-7": {
      u: 420,
    },
    "Etc/GMT-8": {
      u: 480,
    },
    "Etc/GMT-9": {
      u: 540,
    },
    "Etc/GMT0": {
      a: "Etc/GMT",
      r: 1,
    },
    "Etc/Greenwich": {
      a: "Etc/GMT",
      r: 1,
    },
    "Etc/UCT": {
      a: "Etc/UTC",
      r: 1,
    },
    "Etc/UTC": {
      u: 0,
    },
    "Etc/Universal": {
      a: "Etc/UTC",
      r: 1,
    },
    "Etc/Zulu": {
      a: "Etc/UTC",
      r: 1,
    },
    "Europe/Amsterdam": {
      u: 60,
      d: 120,
      c: ["NL"],
    },
    "Europe/Andorra": {
      u: 60,
      d: 120,
      c: ["AD"],
    },
    "Europe/Astrakhan": {
      u: 240,
      c: ["RU"],
    },
    "Europe/Athens": {
      u: 120,
      d: 180,
      c: ["GR"],
    },
    "Europe/Belfast": {
      a: "Europe/London",
      c: ["GB"],
      r: 1,
    },
    "Europe/Belgrade": {
      u: 60,
      d: 120,
      c: ["RS", "BA", "HR", "ME", "MK", "SI"],
    },
    "Europe/Berlin": {
      u: 60,
      d: 120,
      c: ["DE"],
    },
    "Europe/Bratislava": {
      a: "Europe/Prague",
      c: ["SK"],
      r: 1,
    },
    "Europe/Brussels": {
      u: 60,
      d: 120,
      c: ["BE"],
    },
    "Europe/Bucharest": {
      u: 120,
      d: 180,
      c: ["RO"],
    },
    "Europe/Budapest": {
      u: 60,
      d: 120,
      c: ["HU"],
    },
    "Europe/Busingen": {
      a: "Europe/Zurich",
      c: ["DE"],
      r: 1,
    },
    "Europe/Chisinau": {
      u: 120,
      d: 180,
      c: ["MD"],
    },
    "Europe/Copenhagen": {
      u: 60,
      d: 120,
      c: ["DK"],
    },
    "Europe/Dublin": {
      u: 60,
      d: 0,
      c: ["IE"],
    },
    "Europe/Gibraltar": {
      u: 60,
      d: 120,
      c: ["GI"],
    },
    "Europe/Guernsey": {
      a: "Europe/London",
      c: ["GG"],
      r: 1,
    },
    "Europe/Helsinki": {
      u: 120,
      d: 180,
      c: ["FI", "AX"],
    },
    "Europe/Isle_of_Man": {
      a: "Europe/London",
      c: ["IM"],
      r: 1,
    },
    "Europe/Istanbul": {
      u: 180,
      c: ["TR"],
    },
    "Europe/Jersey": {
      a: "Europe/London",
      c: ["JE"],
      r: 1,
    },
    "Europe/Kaliningrad": {
      u: 120,
      c: ["RU"],
    },
    "Europe/Kiev": {
      u: 120,
      d: 180,
      c: ["UA"],
    },
    "Europe/Kirov": {
      u: 180,
      c: ["RU"],
    },
    "Europe/Lisbon": {
      u: 0,
      d: 60,
      c: ["PT"],
    },
    "Europe/Ljubljana": {
      a: "Europe/Belgrade",
      c: ["SI"],
      r: 1,
    },
    "Europe/London": {
      u: 0,
      d: 60,
      c: ["GB", "GG", "IM", "JE"],
    },
    "Europe/Luxembourg": {
      u: 60,
      d: 120,
      c: ["LU"],
    },
    "Europe/Madrid": {
      u: 60,
      d: 120,
      c: ["ES"],
    },
    "Europe/Malta": {
      u: 60,
      d: 120,
      c: ["MT"],
    },
    "Europe/Mariehamn": {
      a: "Europe/Helsinki",
      c: ["AX"],
      r: 1,
    },
    "Europe/Minsk": {
      u: 180,
      c: ["BY"],
    },
    "Europe/Monaco": {
      u: 60,
      d: 120,
      c: ["MC"],
    },
    "Europe/Moscow": {
      u: 180,
      c: ["RU"],
    },
    "Europe/Nicosia": {
      a: "Asia/Nicosia",
      r: 1,
    },
    "Europe/Oslo": {
      u: 60,
      d: 120,
      c: ["NO", "SJ", "BV"],
    },
    "Europe/Paris": {
      u: 60,
      d: 120,
      c: ["FR"],
    },
    "Europe/Podgorica": {
      a: "Europe/Belgrade",
      c: ["ME"],
      r: 1,
    },
    "Europe/Prague": {
      u: 60,
      d: 120,
      c: ["CZ", "SK"],
    },
    "Europe/Riga": {
      u: 120,
      d: 180,
      c: ["LV"],
    },
    "Europe/Rome": {
      u: 60,
      d: 120,
      c: ["IT", "SM", "VA"],
    },
    "Europe/Samara": {
      u: 240,
      c: ["RU"],
    },
    "Europe/San_Marino": {
      a: "Europe/Rome",
      c: ["SM"],
      r: 1,
    },
    "Europe/Sarajevo": {
      a: "Europe/Belgrade",
      c: ["BA"],
      r: 1,
    },
    "Europe/Saratov": {
      u: 240,
      c: ["RU"],
    },
    "Europe/Simferopol": {
      u: 180,
      c: ["RU", "UA"],
    },
    "Europe/Skopje": {
      a: "Europe/Belgrade",
      c: ["MK"],
      r: 1,
    },
    "Europe/Sofia": {
      u: 120,
      d: 180,
      c: ["BG"],
    },
    "Europe/Stockholm": {
      u: 60,
      d: 120,
      c: ["SE"],
    },
    "Europe/Tallinn": {
      u: 120,
      d: 180,
      c: ["EE"],
    },
    "Europe/Tirane": {
      u: 60,
      d: 120,
      c: ["AL"],
    },
    "Europe/Tiraspol": {
      a: "Europe/Chisinau",
      r: 1,
    },
    "Europe/Ulyanovsk": {
      u: 240,
      c: ["RU"],
    },
    "Europe/Uzhgorod": {
      u: 120,
      d: 180,
      c: ["UA"],
    },
    "Europe/Vaduz": {
      a: "Europe/Zurich",
      c: ["LI"],
      r: 1,
    },
    "Europe/Vatican": {
      a: "Europe/Rome",
      c: ["VA"],
      r: 1,
    },
    "Europe/Vienna": {
      u: 60,
      d: 120,
      c: ["AT"],
    },
    "Europe/Vilnius": {
      u: 120,
      d: 180,
      c: ["LT"],
    },
    "Europe/Volgograd": {
      u: 180,
      c: ["RU"],
    },
    "Europe/Warsaw": {
      u: 60,
      d: 120,
      c: ["PL"],
    },
    "Europe/Zagreb": {
      a: "Europe/Belgrade",
      c: ["HR"],
      r: 1,
    },
    "Europe/Zaporozhye": {
      u: 120,
      d: 180,
      c: ["UA"],
    },
    "Europe/Zurich": {
      u: 60,
      d: 120,
      c: ["CH", "DE", "LI"],
    },
    Factory: {
      u: 0,
    },
    GB: {
      a: "Europe/London",
      c: ["GB"],
      r: 1,
    },
    "GB-Eire": {
      a: "Europe/London",
      c: ["GB"],
      r: 1,
    },
    GMT: {
      a: "Etc/GMT",
      r: 1,
    },
    "GMT+0": {
      a: "Etc/GMT",
      r: 1,
    },
    "GMT-0": {
      a: "Etc/GMT",
      r: 1,
    },
    GMT0: {
      a: "Etc/GMT",
      r: 1,
    },
    Greenwich: {
      a: "Etc/GMT",
      r: 1,
    },
    HST: {
      u: -600,
    },
    Hongkong: {
      a: "Asia/Hong_Kong",
      r: 1,
    },
    Iceland: {
      a: "Atlantic/Reykjavik",
      r: 1,
    },
    "Indian/Antananarivo": {
      a: "Africa/Nairobi",
      c: ["MG"],
      r: 1,
    },
    "Indian/Chagos": {
      u: 360,
      c: ["IO"],
    },
    "Indian/Christmas": {
      u: 420,
      c: ["CX"],
    },
    "Indian/Cocos": {
      u: 390,
      c: ["CC"],
    },
    "Indian/Comoro": {
      a: "Africa/Nairobi",
      c: ["KM"],
      r: 1,
    },
    "Indian/Kerguelen": {
      u: 300,
      c: ["TF", "HM"],
    },
    "Indian/Mahe": {
      u: 240,
      c: ["SC"],
    },
    "Indian/Maldives": {
      u: 300,
      c: ["MV"],
    },
    "Indian/Mauritius": {
      u: 240,
      c: ["MU"],
    },
    "Indian/Mayotte": {
      a: "Africa/Nairobi",
      c: ["YT"],
      r: 1,
    },
    "Indian/Reunion": {
      u: 240,
      c: ["RE", "TF"],
    },
    Iran: {
      a: "Asia/Tehran",
      r: 1,
    },
    Israel: {
      a: "Asia/Jerusalem",
      r: 1,
    },
    Jamaica: {
      a: "America/Jamaica",
      r: 1,
    },
    Japan: {
      a: "Asia/Tokyo",
      r: 1,
    },
    Kwajalein: {
      a: "Pacific/Kwajalein",
      r: 1,
    },
    Libya: {
      a: "Africa/Tripoli",
      r: 1,
    },
    MET: {
      u: 60,
      d: 120,
    },
    MST: {
      u: -420,
    },
    MST7MDT: {
      u: -420,
      d: -360,
    },
    "Mexico/BajaNorte": {
      a: "America/Tijuana",
      r: 1,
    },
    "Mexico/BajaSur": {
      a: "America/Mazatlan",
      r: 1,
    },
    "Mexico/General": {
      a: "America/Mexico_City",
      r: 1,
    },
    NZ: {
      a: "Pacific/Auckland",
      c: ["NZ"],
      r: 1,
    },
    "NZ-CHAT": {
      a: "Pacific/Chatham",
      r: 1,
    },
    Navajo: {
      a: "America/Denver",
      r: 1,
    },
    PRC: {
      a: "Asia/Shanghai",
      r: 1,
    },
    PST8PDT: {
      u: -480,
      d: -420,
    },
    "Pacific/Apia": {
      u: 780,
      c: ["WS"],
    },
    "Pacific/Auckland": {
      u: 720,
      d: 780,
      c: ["NZ", "AQ"],
    },
    "Pacific/Bougainville": {
      u: 660,
      c: ["PG"],
    },
    "Pacific/Chatham": {
      u: 765,
      d: 825,
      c: ["NZ"],
    },
    "Pacific/Chuuk": {
      u: 600,
      c: ["FM"],
    },
    "Pacific/Easter": {
      u: -360,
      d: -300,
      c: ["CL"],
    },
    "Pacific/Efate": {
      u: 660,
      c: ["VU"],
    },
    "Pacific/Enderbury": {
      a: "Pacific/Kanton",
      r: 1,
    },
    "Pacific/Fakaofo": {
      u: 780,
      c: ["TK"],
    },
    "Pacific/Fiji": {
      u: 720,
      d: 780,
      c: ["FJ"],
    },
    "Pacific/Funafuti": {
      u: 720,
      c: ["TV"],
    },
    "Pacific/Galapagos": {
      u: -360,
      c: ["EC"],
    },
    "Pacific/Gambier": {
      u: -540,
      c: ["PF"],
    },
    "Pacific/Guadalcanal": {
      u: 660,
      c: ["SB"],
    },
    "Pacific/Guam": {
      u: 600,
      c: ["GU", "MP"],
    },
    "Pacific/Honolulu": {
      u: -600,
      c: ["US", "UM"],
    },
    "Pacific/Johnston": {
      a: "Pacific/Honolulu",
      c: ["UM"],
      r: 1,
    },
    "Pacific/Kanton": {
      u: 780,
      c: ["KI"],
    },
    "Pacific/Kiritimati": {
      u: 840,
      c: ["KI"],
    },
    "Pacific/Kosrae": {
      u: 660,
      c: ["FM"],
    },
    "Pacific/Kwajalein": {
      u: 720,
      c: ["MH"],
    },
    "Pacific/Majuro": {
      u: 720,
      c: ["MH"],
    },
    "Pacific/Marquesas": {
      u: -510,
      c: ["PF"],
    },
    "Pacific/Midway": {
      a: "Pacific/Pago_Pago",
      c: ["UM"],
      r: 1,
    },
    "Pacific/Nauru": {
      u: 720,
      c: ["NR"],
    },
    "Pacific/Niue": {
      u: -660,
      c: ["NU"],
    },
    "Pacific/Norfolk": {
      u: 660,
      d: 720,
      c: ["NF"],
    },
    "Pacific/Noumea": {
      u: 660,
      c: ["NC"],
    },
    "Pacific/Pago_Pago": {
      u: -660,
      c: ["AS", "UM"],
    },
    "Pacific/Palau": {
      u: 540,
      c: ["PW"],
    },
    "Pacific/Pitcairn": {
      u: -480,
      c: ["PN"],
    },
    "Pacific/Pohnpei": {
      u: 660,
      c: ["FM"],
    },
    "Pacific/Ponape": {
      a: "Pacific/Pohnpei",
      r: 1,
    },
    "Pacific/Port_Moresby": {
      u: 600,
      c: ["PG", "AQ"],
    },
    "Pacific/Rarotonga": {
      u: -600,
      c: ["CK"],
    },
    "Pacific/Saipan": {
      a: "Pacific/Guam",
      c: ["MP"],
      r: 1,
    },
    "Pacific/Samoa": {
      a: "Pacific/Pago_Pago",
      c: ["WS"],
      r: 1,
    },
    "Pacific/Tahiti": {
      u: -600,
      c: ["PF"],
    },
    "Pacific/Tarawa": {
      u: 720,
      c: ["KI"],
    },
    "Pacific/Tongatapu": {
      u: 780,
      c: ["TO"],
    },
    "Pacific/Truk": {
      a: "Pacific/Chuuk",
      r: 1,
    },
    "Pacific/Wake": {
      u: 720,
      c: ["UM"],
    },
    "Pacific/Wallis": {
      u: 720,
      c: ["WF"],
    },
    "Pacific/Yap": {
      a: "Pacific/Chuuk",
      r: 1,
    },
    Poland: {
      a: "Europe/Warsaw",
      r: 1,
    },
    Portugal: {
      a: "Europe/Lisbon",
      r: 1,
    },
    ROC: {
      a: "Asia/Taipei",
      r: 1,
    },
    ROK: {
      a: "Asia/Seoul",
      r: 1,
    },
    Singapore: {
      a: "Asia/Singapore",
      c: ["SG"],
      r: 1,
    },
    Turkey: {
      a: "Europe/Istanbul",
      r: 1,
    },
    UCT: {
      a: "Etc/UTC",
      r: 1,
    },
    "US/Alaska": {
      a: "America/Anchorage",
      r: 1,
    },
    "US/Aleutian": {
      a: "America/Adak",
      r: 1,
    },
    "US/Arizona": {
      a: "America/Phoenix",
      c: ["US"],
      r: 1,
    },
    "US/Central": {
      a: "America/Chicago",
      r: 1,
    },
    "US/East-Indiana": {
      a: "America/Indiana/Indianapolis",
      r: 1,
    },
    "US/Eastern": {
      a: "America/New_York",
      r: 1,
    },
    "US/Hawaii": {
      a: "Pacific/Honolulu",
      c: ["US"],
      r: 1,
    },
    "US/Indiana-Starke": {
      a: "America/Indiana/Knox",
      r: 1,
    },
    "US/Michigan": {
      a: "America/Detroit",
      r: 1,
    },
    "US/Mountain": {
      a: "America/Denver",
      r: 1,
    },
    "US/Pacific": {
      a: "America/Los_Angeles",
      r: 1,
    },
    "US/Samoa": {
      a: "Pacific/Pago_Pago",
      c: ["WS"],
      r: 1,
    },
    UTC: {
      a: "Etc/UTC",
      r: 1,
    },
    Universal: {
      a: "Etc/UTC",
      r: 1,
    },
    "W-SU": {
      a: "Europe/Moscow",
      r: 1,
    },
    WET: {
      u: 0,
      d: 60,
    },
    Zulu: {
      a: "Etc/UTC",
      r: 1,
    },
  }

  let country = ""

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

    if (timezone === "" || !timezone) {
      return null
    }

    const _country = timezones[timezone].c[0]
    country = countries[_country].length >= 1 ? countries[_country] : "Unknown"
    return country
  } catch (err) {
    return "Unknown"
  }
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

  /* Add gist */
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

  if (description && description === "string") {
    description = description.replaceAll("src=", "data-src=")
    description = description.replaceAll("srcset=", "data-srcset=")
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

/* Those variables are wired up to Ecwid's discount coupons. 

  You can navigate to "Discount Coupons" from the ecwid admin to configure them. 
  
  https://my.ecwid.com/store/61271341#discount-coupons
  */
export const discounts = [
  {
    quantity: 2,
    percentage: 20,
    amount: `20%`,
    coupon: "DVJTI5KV1I85",
  },

  {
    quantity: 3,
    percentage: 30,
    amount: `30%`,
    coupon: "8OMNVUPW20ZH",
  },
]

export function addDiscountCouponBasedOnQuantity() {
  return new Promise(async (resolve, reject) => {
    async function calculate() {
      var quantity = await getProductsInCart()
      let _discount = null

      if (quantity.length === 2) {
        _discount = discounts[0]
      } else if (quantity.length >= 3) {
        _discount = discounts[1]
      }

      if (_discount) {
        const discount = _discount.coupon
        addDiscountCoupon(discount)
      }
    }

    calculate()

    /* Try again X seconds later*/
    setTimeout(async () => {
      const $coupon = document.querySelector(
        `.ec-cart-summary__row--discount-coupon .ec-cart-summary__title`
      )

      if (!$coupon) {
        calculate()
      }
    }, 2000)

    resolve()
  })
}

export async function awaitEcwid() {
  return new Promise(async (resolve, reject) => {
    while (!window.hasOwnProperty("Ecwid")) {
      console.log("waiting for Ecwid          ")
      await new Promise(resolve => setTimeout(resolve, 10))
    }

    while (!Ecwid.hasOwnProperty("Cart")) {
      console.log("waiting for Ecwid Cart")
      await new Promise(resolve => setTimeout(resolve, 10))
    }

    while (!Ecwid.Cart.hasOwnProperty("addProduct")) {
      console.log("waiting for 'addProduct'                      ")
      await new Promise(resolve => setTimeout(resolve, 10))
    }

    resolve()
  })
}

export function getProductsInCart() {
  return new Promise((resolve, reject) => {
    let products = []

    window.Ecwid.Cart.get(function (cart) {
      cart.items.map(e => e.product).map(_product => products.push(_product.id))
    })

    resolve(products)
  })
}

export async function removeDiscountCoupon() {
  return new Promise(async (resolve, reject) => {
    try {
      // if (
      //   window.hasOwnProperty("removedDiscountCoupon") &&
      //   window.removedDiscountCoupon
      // ) {
      //   resolve()
      //   return
      // }

      const selector = `.ec-cart-coupon--applied .ec-cart-coupon__button--cancel > button`
      const $button = await _waitForElement(selector, 50, 10)

      if (!$button) {
        resolve()
        return
      }

      const $buttons = document.querySelectorAll(selector)

      for (var each of $buttons) {
        each.click()
        //window.removedDiscountCoupon = true
        //window.discountCodeApplied = false
      }

      resolve()
    } catch (err) {
      resolve()
    }
  })
}

export async function addDiscountCoupon(discount) {
  if (!discount) {
    return
  }

  if (
    window.hasOwnProperty("discountCodeApplied") &&
    window.discountCodeApplied
  ) {
    //return
  }

  const $discount = await _waitForElement(`[class*='cart-coupon'] > a`, 100, 25)

  if (!$discount) {
    return
  }

  const $cancel = document.querySelector(`.ec-cart-coupon__button--cancel`)

  console.log("cancel", $cancel)

  if ($cancel) {
    $cancel.click()
  }

  const $forms = document.querySelectorAll(`[class*='ec-cart__discount']`)

  console.log("Forms", $forms)

  for (var each of $forms) {
    const $redeem = each.querySelector(`[class*='cart-coupon'] > a`)

    if (!$redeem) {
      return
    }

    $redeem.click()

    await sleep(50)

    const $input = each.querySelector(`input.form-control__text`)

    if (!$input) {
      return
    }

    await sleep(25)

    var event = new Event("input", {
      bubbles: true,
      cancelable: true,
    })

    $input.value = discount
    $input.dispatchEvent(event)

    await sleep(50)

    const $button = each.querySelector(`.ec-cart-coupon__button--apply`)

    if (!$button) {
      return
    }

    $button.click()
  }

  if (document.querySelector(`[class*='--discount-coupon']`)) {
    window.discountCodeApplied = true
  }
}

export function addEcwidProductsToCart(products) {
  return new Promise(async (resolve, reject) => {
    await awaitEcwid()

    const productsInCart = await getProductsInCart()

    for (var [index, each] of products.entries()) {
      const isInCart = productsInCart.filter(e => e === each.id).length >= 1

      if (!isInCart) {
        Ecwid.Cart.addProduct({
          id: each.id,
          quantity: 1,
          callback: function (success, product, cart) {},
        })
      }

      if (index >= products.length - 1) {
        Ecwid.Cart.gotoCheckout()
        resolve()
      }
    }
  })
}

export function scrollTo($el, yOffset = 0) {
  const y = $el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y, behavior: "smooth" })
}
export function scrollToImmediate($el, yOffset = 0) {
  const y = $el.getBoundingClientRect().top + window.pageYOffset + yOffset

  window.scrollTo({ top: y })
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
