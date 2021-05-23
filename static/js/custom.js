// Index of jQuery Active Code

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

;(function ($) {
  window.customCode = function () {
    var $window = $(window)
    var zero = 0

    // :: 1.0 PRELOADER ACTIVE CODE
    // $(window).on("load", function () {
    //   $(".preloader-wapper").addClass("loaded");
    //   if ($(".preloader-wapper").hasClass("loaded")) {
    //     $(".preloader-main")
    //       .delay(400)
    //       .queue(function () {
    //         $(this).remove();
    //       });
    //   }
    // });

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300
    var duration = 500

    $window.on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $("#scrollUp").fadeIn(duration)
      } else {
        $("#scrollUp").fadeOut(duration)
      }
    })

    $("#scrollUp").on("click", function (e) {
      e.preventDefault()
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    })

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $(".scroll")

    const closeMenu = () => {
      const menu = document.querySelector(
        `.canvas-open .navbar-inner button.navbar-toggler`
      )

      if (!menu) {
        return
      }

      menu.click()
    }

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on("click", function (e) {
      e.preventDefault()
      ;(function closeMobileMenuIfLogoIsClicked() {
        const menuIsOpen = $(".navbar-inner").css("right") === "0px"

        if (menuIsOpen) {
          document.querySelector(".navbar-toggler").click()
        }
      })()

      const offset = e.target.getAttribute("data-scroll-offset")
        ? parseInt(e.target.getAttribute("data-scroll-offset"))
        : 0

      $("body,html").animate(
        {
          scrollTop: $(this.hash).offset().top + offset,
        },
        500
      )

      closeMenu()
    })

    // :: 6.0 AOS ACTIVE CODE
    // AOS.init();

    // :: 7.0 WOW ACTIVE CODE
    // new WOW().init();

    // :: 8.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on("click", function ($) {
      $.preventDefault()
    })

    // :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".fancyVideo").fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "circular",
      maxWidth: 800,
      maxHeight: 600,
    })
  }
  // window.customCode();
})(window.jQuery)

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

  function _loadStyle(src) {
    return new Promise(function (resolve, reject) {
      let link = document.createElement("link")
      link.href = src
      link.rel = "stylesheet"

      link.onload = () => resolve(link)
      link.onerror = () => reject(new Error(`Style load error for ${src}`))

      document.head.append(link)
    })
  }

  function lazyLoadImages() {
    /* Add class="lazyload" and data-src="image.png" to image elements */

    var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"))

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove("lazy")
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage)
      })
    }
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
                videoSource.src = videoSource.dataset.src
              }
            }

            // console.log("me")
            // video.target.load();
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

  function addToCartListener() {
    const atc = document.querySelectorAll(".services-button")
    const redirectText = `Redirecting to PayPal...`

    if (!atc) {
      return
    }

    for (const each of atc) {
      each.addEventListener("click", function (e) {
        e.preventDefault()

        console.log(each.innerHTML)
        e.target.textContent = redirectText
        const button = each.querySelector(`form`)

        button.submit()
      })
    }
  }

  function redirectToPaymentGateway() {
    const atc = document.querySelectorAll(
      ".services-button:not(.services-button--contact)"
    )
    const redirectText = `Please wait...`

    if (!atc) {
      return
    }

    for (const each of atc) {
      each.addEventListener("click", function (e) {
        // e.preventDefault();

        e.target.textContent = redirectText
        const button = each.querySelector(`form`)

        button.submit()
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

  function activateEJunkieCart() {
    // console.log("CART: ejunkie cart")

    return

    const $ejunkieScript = document.querySelector(
      `script[src*='https://www.e-junkie.com/ecom/restified/checkStatusL.php?cl=']`
    )

    if ($ejunkieScript) {
      $ejunkieScript.remove()
    }

    // console.log("CART: re-injecting code!")

    var d = document
    var EJV1_cart_version = 1
    var EJV1_loadFlag = false // this defines whether or not box.js should search for ?cl
    var EJV1_box_preloaded = true
    var url =
      "https://www.e-junkie.com/ecom/restified/checkStatusL.php?cl=" +
      EJV1_cart_version
    var t = d.createElement("script")
    t.setAttribute("src", url)
    d.getElementsByTagName("head")[0].appendChild(t)
  }

  /**
   * Adds an ejunkie lightbox to every ejunkie cart link.
   */
  async function addModalToGumRoadAndEjunkieLinks() {
    if (!_isBlogPage()) {
      return
    }

    const links = document.querySelectorAll(
      `a[href*='ezfy.e-junkie'], 
      .blog-details a[href*='fatfreecartpro.com'], 
      .blog-details a[href*='gumroad.com'], 
      .blog-details a[href*='gum.co']`
    )

    if (!links) {
      return
    }

    for (const each of links) {
      each.setAttribute("data-src", each.href)
      each.setAttribute("data-type", "iframe")
      each.setAttribute("data-options", `{buttons: ["close"]}`)
      each.setAttribute(
        "data-fancybox",
        window.location.pathname.replace("/blog/", "")
      )
    }
  }

  async function addModalToFatFreeCartProLinks() {
    if (!_isBlogPage()) {
      return
    }

    const links = document.querySelectorAll(
      `.blog-details a[href*='fatfreecartpro.com']`
    )

    if (!links) {
      return
    }

    for (const each of links) {
      each.setAttribute("data-src", each.href)
      each.setAttribute("data-type", "iframe")
      each.setAttribute(
        "data-fancybox",
        window.location.pathname.replace("/blog/", "")
      )
      // each.setAttribute("class", "ec_ejc_thkbx")
      // each.setAttribute("rel", "noopener")
      // each.setAttribute("target", "ej_ejc")
    }
  }

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

  function removeLoader() {
    const $loader = window.document.querySelector(`.loader--visible`)

    if ($loader) {
      $loader.classList.remove("loader--visible")
    }
  }

  async function loadEcwidScript() {
    const url = `https://app.ecwid.com/script.js?37374877`

    if (document.querySelector(`script[src*='app.ecwid']`)) {
      return window.Ecwid.init()
    }

    await _loadScript(url)
    window.Ecwid.init()
  }

  return {
    removeLoader: removeLoader,
    closeSidebarMenu: closeSidebarMenu,
    reviewsTextSlider: reviewsTextSlider,
    activateEJunkieCart: activateEJunkieCart,
    loadEcwidScript: loadEcwidScript,
    addModalToGumRoadAndEjunkieLinks: addModalToGumRoadAndEjunkieLinks,

    initServices: () => {
      readMoreForServices()
      redirectToPaymentGateway()
    },
    lazyload: () => {
      lazyLoadImages()
      lazyLoadVideos()
    },

    start: () => {
      window.ezfy.lazyload()
      window.ezfy.activateEJunkieCart()
      addTagsToPortfolioItems()
      addTagsToPortfolioFilter()
      portfolioTagHandleOnClick()
      addTagsToServicesFilter()
      // autoplayVideo()
      setTimeout(scrollToHash, 350)
      window.ezfy.initServices()
      window.customCode()
      window.ezfy.closeSidebarMenu()
      window.ezfy.addModalToGumRoadAndEjunkieLinks()
      testBackbutton()
      showLoader()
      reviewFeedback()
      loadEcwidScript()
    },
    init: function () {
      window.ezfy.start()
      document.addEventListener("DOMContentLoaded", function () {})

      window.onresize = function (event) {
        window.ezfy.activateEJunkieCart()
      }

      window.onload = function () {
        setTimeout(emailSuccess, 100)
      }
    },
  }
})()

window.ezfy.init()
