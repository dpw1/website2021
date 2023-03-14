// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 6.0 AOS ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 PREVENT DEFAULT ACTIVE CODE
// :: 9.0 COUNTERUP ACTIVE CODE
// :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 11.0 FEATURES SLIDER ACTIVE CODE
// :: 12.0 TESTIMONIALS ACTIVE CODE
// :: 13.0 REVIEWS SLIDER
// :: 14.0 CONTACT FORM ACTIVE CODE

/* Custom Code 
  ===================================== */

window.ezfy = window.ezfy || {}

ezfy = (function () {
  const selectors = {
    allTags: [],
  }

  function _moveDOMElement(parent, child) {
    document.querySelector(parent).appendChild(document.querySelector(child))
  }

  function _waitUntilElementExists(selector, callback) {
    const el = document.querySelector(selector)

    if (el) {
      return callback(el)
    }

    setTimeout(() => _waitUntilElementExists(selector, callback), 500)
  }

  function _addStyle(styleString) {
    const style = document.createElement("style")
    style.textContent = styleString
    document.head.append(style)
  }

  function _loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s
      s = document.createElement("script")
      s.src = src
      s.onload = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
  }

  function loadLazyloadLibrary() {
    if (window.lazyload) {
      return
    }
    !(function (t, e) {
      "object" == typeof exports
        ? (module.exports = e(t))
        : "function" == typeof define && define.amd
        ? define([], e)
        : (t.LazyLoad = e(t))
    })(
      "undefined" != typeof global ? global : this.window || this.global,
      function (t) {
        "use strict"
        "function" == typeof define && define.amd && (t = window)
        const e = {
            src: "data-src",
            srcset: "data-srcset",
            selector: ".lazyload",
            root: null,
            rootMargin: "0px",
            threshold: 0,
          },
          r = function () {
            let t = {},
              e = !1,
              s = 0,
              o = arguments.length
            "[object Boolean]" ===
              Object.prototype.toString.call(arguments[0]) &&
              ((e = arguments[0]), s++)
            let i = function (s) {
              for (let o in s)
                Object.prototype.hasOwnProperty.call(s, o) &&
                  (e &&
                  "[object Object]" === Object.prototype.toString.call(s[o])
                    ? (t[o] = r(!0, t[o], s[o]))
                    : (t[o] = s[o]))
            }
            for (; s < o; s++) {
              i(arguments[s])
            }
            return t
          }
        function s(t, s) {
          ;(this.settings = r(e, s || {})),
            (this.images =
              t || document.querySelectorAll(this.settings.selector)),
            (this.observer = null),
            this.init()
        }
        if (
          ((s.prototype = {
            init: function () {
              if (!t.IntersectionObserver) return void this.loadImages()
              let e = this,
                r = {
                  root: this.settings.root,
                  rootMargin: this.settings.rootMargin,
                  threshold: [this.settings.threshold],
                }
              ;(this.observer = new IntersectionObserver(function (t) {
                Array.prototype.forEach.call(t, function (t) {
                  if (t.isIntersecting) {
                    e.observer.unobserve(t.target)
                    let r = t.target.getAttribute(e.settings.src),
                      s = t.target.getAttribute(e.settings.srcset)
                    "img" === t.target.tagName.toLowerCase()
                      ? (r && (t.target.src = r), s && (t.target.srcset = s))
                      : (t.target.style.backgroundImage = "url(" + r + ")")
                  }
                })
              }, r)),
                Array.prototype.forEach.call(this.images, function (t) {
                  e.observer.observe(t)
                })
            },
            loadAndDestroy: function () {
              this.settings && (this.loadImages(), this.destroy())
            },
            loadImages: function () {
              if (!this.settings) return
              let t = this
              Array.prototype.forEach.call(this.images, function (e) {
                let r = e.getAttribute(t.settings.src),
                  s = e.getAttribute(t.settings.srcset)
                "img" === e.tagName.toLowerCase()
                  ? (r && (e.src = r), s && (e.srcset = s))
                  : (e.style.backgroundImage = "url('" + r + "')")
              })
            },
            destroy: function () {
              this.settings &&
                (this.observer.disconnect(), (this.settings = null))
            },
          }),
          (t.lazyload = function (t, e) {
            return new s(t, e)
          }),
          t.jQuery)
        ) {
          const e = t.jQuery
          e.fn.lazyload = function (t) {
            return (
              ((t = t || {}).attribute = t.attribute || "data-src"),
              new s(e.makeArray(this), t),
              this
            )
          }
        }
        return s
      }
    )
  }

  function lazyLoadImages() {
    let images = document.querySelectorAll("img.lazyload")
    lazyload(images)
  }

  /* Forcefully loads/reloads all lazyloaded images */
  function forceLazyload() {
    console.timeLog("changing - force lazy")
    var _lazy = new LazyLoad()

    _lazy.loadImages()

    return
    let $images = document.querySelectorAll("img.lazyloaded")

    if (!$images) {
      return
    }

    for (let each of $images) {
      each.setAttribute("src", "")
    }
    lazyload($images)
  }

  function loadFlickity() {
    if (window.hasOwnProperty("loadedFlickity")) {
      return true
    }

    return new Promise(async (resolve, reject) => {
      try {
        await _loadScript(
          `https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.2/flickity.pkgd.min.js`
        )
      } catch (err) {
        // await loadLocalFlickity()
      }

      window["loadedFlickity"] = true

      resolve(true)
    })
  }

  function lazyLoadVideos() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video"))

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source]
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                videoSource.src = video.target.getAttribute("data-src")
              }
            }

            const src = video.target.getAttribute("data-src")

            if (!src) {
              return
            }

            // console.log("me")
            // debugger
            video.target.setAttribute("src", src)
            video.target.load()
            video.target.play()
            video.target.classList.remove("lazy")
            lazyVideoObserver.unobserve(video.target)

            // console.log(video.target)
          }
        })
      })

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo)
      })
    }
  }

  function addTagsToPortfolioItems() {
    const portfolioItems = document.querySelectorAll(
      "[data-portfolio-item-tags]"
    )

    if (!portfolioItems) {
      return
    }

    for (let each of portfolioItems) {
      const tags = [...each.getAttribute("data-portfolio-item-tags").split(",")]

      selectors.allTags.push(...tags)

      const filteredTags = tags
        .map(e => `<li>${e.trim().replace(",", "")}</li>`)
        .sort()
        .join("")

      const tag = each.querySelector("#portfolio .portfolio-tags")

      if (tag) {
        tag.insertAdjacentHTML("afterbegin", filteredTags)
      }
    }
  }

  function addTagsToPortfolioFilter() {
    const tags = [
      ...new Set(
        [...selectors.allTags].map(e => e.trim().replace(",", "")).sort()
      ),
    ]

    const filteredTags = tags
      .map(
        tag =>
          `<a href="#" data-tag-name="${tag}" class="tags-widget-item d-inline-block mt-2 mr-1 px-2 py-1">${tag}</a>`
      )
      .join("")

    const widget = document.querySelector("#portfolio #tagsWidget")

    if (widget) {
      widget.insertAdjacentHTML("beforeend", filteredTags)
    }
  }

  function addTagsToServicesFilter() {
    const $services = document.getElementById("services")

    if (!$services) {
      return
    }

    let $tags = $services.querySelectorAll(`[data-portfolio-item-tags]`)

    if (!$tags) {
      return
    }

    $tags = [...$tags].map(e => e.getAttribute(`data-portfolio-item-tags`))

    const tags = [
      ...new Set([...$tags].map(e => e.trim().replace(",", "")).sort()),
    ]

    const filteredTags = tags
      .map(
        tag =>
          `<a href="#" data-tag-name="${tag}" class="tags-widget-item d-inline-block mt-2 mr-1 px-2 py-1">${tag}</a>`
      )
      .join("")

    const widget = document.querySelector("#services #tagsWidget")

    if (widget) {
      widget.insertAdjacentHTML("beforeend", filteredTags)
    }
  }

  function portfolioTagHandleOnClick() {
    const tagsWidget = document.getElementById("tagsWidget")

    if (!tagsWidget) {
      return
    }

    const allTags = tagsWidget.querySelectorAll("[data-tag-name]")
    // console.log("allTags", allTags)
    const highlightChosenFilter = () => {
      const activeTag = tagsWidget.querySelector(".tags-widget-item--active")
      if (activeTag) {
        activeTag.classList.remove("tags-widget-item--active")
      }
    }

    const showAllPortfolioItems = () => {
      const hiddenItems = document.querySelectorAll(".portfolio-item--hide")

      if (!hiddenItems) {
        return
      }

      for (let each of hiddenItems) {
        each.classList.remove("portfolio-item--hide")
      }
    }

    const hideNotChosenPortfolioItems = tag => {
      const items = document.querySelectorAll("[data-portfolio-item-tags]")

      if (tag === "all") {
        return showAllPortfolioItems()
      }

      for (let each of items) {
        const tags = each
          .getAttribute("data-portfolio-item-tags")
          .split(",")
          .map(e => e.trim())
        const result = tags.includes(tag)

        if (!result) {
          each.classList.add("portfolio-item--hide")
        }
      }
    }

    const listenForClicks = (() => {
      for (let each of allTags) {
        each.addEventListener("click", function (e) {
          e.preventDefault()
          const el = e.target

          highlightChosenFilter()

          const tag = el.getAttribute("data-tag-name")
          el.classList.add("tags-widget-item--active")

          showAllPortfolioItems()
          hideNotChosenPortfolioItems(tag)
        })
      }
    })()
  }

  function autoplayVideo() {
    var videos = [].slice.call(document.querySelectorAll("video"))

    if ("IntersectionObserver" in window) {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "23%",
        threshold: 1.0,
      }

      let observer = new IntersectionObserver(function (entry) {
        const video = entry[0]
        console.log(video)
        if (video.isIntersecting) {
          console.log("play    ", video.target)
          video.target.play()
        } else if (!video.isIntersecting) {
          console.log("pause", video.target)
          video.target.pause()
        }
      }, options)

      videos.forEach(each => {
        observer.observe(each)
      })
    }
  }

  function readMoreForServices() {
    const readmore = document.querySelectorAll(`.services-read-more`)

    for (let each of readmore) {
      each.addEventListener("click", function (e) {
        e.preventDefault()

        each
          .closest(`.services-subtitle`)
          .classList.add(`services-subtitle--visible`)
      })
    }
  }

  function reviewsTextSlider() {
    const reviews = document.getElementById(`reviewsTextSlider`)

    if (!reviews) {
      return
    }

    var swiper = new Swiper(".swiper-container", {
      speed: 750,
      freeMode: false,
      resistance: true,
      resistanceRatio: 0.6,
      grabCursor: true,
      slidesPerView: "auto",
      centeredSlides: true,

      navigation: {
        nextEl: ".review-text-button-prev",
        prevEl: ".review-text-button-next",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: false,
        dragSize: 30,
      },
    })
  }

  function _isBlogPage() {
    return /blog/gim.test(window.location.href)
  }

  /* If there is a has on the URL, automatically scrolls to it.*/
  function scrollToHash() {
    const hash = window.location.hash.trim().replace("#", "")

    if (hash === "" || !hash) {
      return
    }

    const $hash = document.getElementById(hash)

    if (!$hash) {
      return
    }

    $hash.scrollIntoView({
      behavior: "smooth", // smooth scroll
      block: "start", // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
    })
  }

  function closeSidebarMenu() {
    const menu = document.querySelector(`.canvas-open`)

    if (!menu) {
      return
    }

    menu.classList.remove(`canvas-open`)
  }

  // in progress, not ready yet
  function popupMessenger() {
    const limit = 30 //show after x seconds
    const storageKey = "ezfy-fb-popup"

    window.fb_clock = 0

    function countClock() {
      window.fb_clock += 1
      if (window.fb_clock >= limit) {
        localStorage.setItem(storageKey, "true")
        return false
      }

      return true
    }

    let clock = window.setInterval(function () {
      const isFirstTime = localStorage.getItem(storageKey)
      let isCounting = countClock()

      if (!isCounting || !isFirstTime) {
        window.clearInterval(clock)
      }
    }, 1000)
  }

  /**
   * Adds an ejunkie lightbox to every ejunkie cart link.
   */

  function emailSuccess() {
    const isSuccess = /contact_form=success/.test(window.location.href)

    if (!isSuccess) {
      return
    }

    alert("Your email was successfully sent. Thank you!")
  }

  function testBackbutton() {
    window.addEventListener("popstate", e => {
      // alert("back button pressed")
    })
  }

  function reviewFeedback() {
    const isBad = /email_feedback=bad/.test(window.location.href)

    if (!isBad) {
      return
    }

    alert("Your feedback was successfully sent. Thank you!")
  }

  /**
   * Removes loading icon once the page is fully loaded.
   */
  function showLoader() {
    const $links = window.document.querySelectorAll(`a[href^='/blog']`)

    if (!$links) {
      return
    }

    for (const each of $links) {
      each.addEventListener("click", function () {
        const $loader = window.document.querySelector(`.loader`)

        console.log("nprogress - moving to new url             ", $loader)
        if ($loader) {
          $loader.classList.add("loader--visible")
        }
      })
    }
  }

  function forceHrefLinkOnFirefox() {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1

    if (!isFirefox) {
      return
    }

    const $links = window.document.querySelectorAll(`a[href]`)

    if (!$links) {
      return
    }

    for (const each of $links) {
      each.addEventListener("click", function () {
        const href = each.getAttribute("href")
        const target = each.getAttribute("target")

        if (/#/.test(href) || /_blank/.test(target)) {
          return
        }

        window.location.href = href
      })
    }
  }

  function removeLoader() {
    const $loader = window.document.querySelector(`.loader--visible`)

    if ($loader) {
      $loader.classList.remove("loader--visible")
    }
  }

  async function loadEcwidScript() {
    try {
      const url = `https://app.ecwid.com/script.js?61271341`
      const $script = document.querySelector(`script[src*='app.ecwid']`)

      if ($script) {
        window.Ecwid.init()

        return
      }

      await _loadScript(url)

      window.Ecwid.init()
    } catch (err) {}
  }

  function preventDefaultActiveCode() {
    const $links = document.querySelectorAll(`a[href='#']`)

    if (!$links) {
      return
    }

    for (var each of $links) {
      each.addEventListener("click", function (e) {
        e.preventDefault()
      })
    }
  }

  function _scrollTo(selector, yOffset = 0) {
    const el = document.querySelector(selector)
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  function handleScrollLinks() {
    var $links = document.querySelectorAll(`.scroll`)

    if (!$links) {
      return
    }

    // Close mobile menu if logo is clicked
    const $menu = document.querySelector(`#navbarSection.active`)

    if ($menu) {
      const $button = document.querySelector(
        ".navbar-inner button.navbar-toggler"
      )

      if ($button) {
        $button.click()
      }
    }

    for (const $link of $links) {
      $link.addEventListener(`click`, function (e) {
        e.preventDefault()

        const offset = e.target.getAttribute("data-scroll-offset")
          ? parseInt(e.target.getAttribute("data-scroll-offset"))
          : 0

        const id = e.target.getAttribute(`href`)

        _scrollTo(id, offset)
      })
    }
  }

  return {
    preventDefaultActiveCode: preventDefaultActiveCode,
    removeLoader: removeLoader,
    closeSidebarMenu: closeSidebarMenu,
    reviewsTextSlider: reviewsTextSlider,
    loadEcwidScript: loadEcwidScript,
    forceHrefLinkOnFirefox: forceHrefLinkOnFirefox,
    forceLazyload: forceLazyload,
    loadFlickity: loadFlickity,
    lazyLoadVideos: lazyLoadVideos,

    initServices: () => {
      readMoreForServices()
    },
    lazyload: () => {
      loadLazyloadLibrary()
      lazyLoadImages()
      lazyLoadVideos()
    },

    start: () => {
      loadLazyloadLibrary()
      window.ezfy.lazyload()
      window.ezfy.preventDefaultActiveCode()
      loadEcwidScript()
      addTagsToPortfolioItems()
      addTagsToPortfolioFilter()
      portfolioTagHandleOnClick()
      addTagsToServicesFilter()
      // autoplayVideo()
      setTimeout(scrollToHash, 350)
      window.ezfy.initServices()

      window.ezfy.closeSidebarMenu()
      testBackbutton()
      showLoader()
      reviewFeedback()
      window.ezfy.forceHrefLinkOnFirefox()
      handleScrollLinks()
    },
    init: function () {
      window.ezfy.start()
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
          window.ezfy.forceHrefLinkOnFirefox()
        }, 3000)
      })

      window.onload = function () {
        setTimeout(emailSuccess, 100)
      }
    },
  }
})()

window.ezfy.init()
