import React, { useEffect, useState } from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { v4 as uuidv4 } from "uuid"

import inView from "element-in-view"
// import Flickity from "react-flickity-component"

// the slider for this section can be found at custom.js, at the bottom of the file.
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import "./TabsSlider.scss"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"

/**
 *
 * @param {string} alignment
 * 'left', 'right', 'center'
 *
 */
export default function TabsSlider(props) {
  const {
    tabs,
    title,
    subtitle,
    link,
    alignment = "left",
    customID = "CodeSnippets",
    additionalClass,
    buttonText = "View Products",
  } = props
  const [active, setActive] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const [swiper, setSwiper] = useState()
  const [loadedFlickty, setLoadedFlickity] = useState(false)
  const [loaded, setLoaded] = useState()
  const [id, setId] = useState(uuidv4())

  async function initFlickty() {
    const $this = document.querySelector(`[class*='${id}']`)

    const $slider = $this.querySelector(`.TabsSlider-content`)

    var slider = new Flickity($slider, {
      cellAlign: "left",
      contain: true,
      adaptiveHeight: true,
      imagesLoaded: false,
    })

    window[`tabsSliderFlickity--${id}`] = slider

    handleChange(slider)
  }

  function makeSubtitleVisibleByIndex(index = 0) {
    const $this = document.querySelector(`[class*='${id}']`)
    /* Close all other subtitles */
    const $active = $this.querySelector(`.TabsSlider-tab--active`)

    if ($active) {
      const $subtitle = $active.querySelector(`.TabsSlider-subtitle`)
      $subtitle.style.height = "0px"
    }

    /* Make current subtitle visible */
    const $parent = $this.querySelector(
      `.TabsSlider-tab:nth-child(${index + 1})`
    )

    const $subtitle = $parent.querySelector(`.TabsSlider-subtitle`)

    const height = $subtitle.querySelector(`*`).offsetHeight

    $subtitle.style.height = `${height}px`
  }

  function playVideoByIndex(index = 0) {
    const $this = document.querySelector(`[class*='${id}']`)

    const $video = $this.querySelector(
      `.TabsSlider-each:nth-child(${index + 1}) video`
    )

    if (!$video) {
      return
    }

    const $parent = $video.closest(`.TabsSlider-video-wrapper`)

    if ($video.getAttribute("src")) {
      $video.play()
      return
    }

    const src = $video.getAttribute("data-src")

    if (!src) {
      return
    }

    $video.setAttribute("src", src)
    $video.load()
    $video.play()
    $video.addEventListener("playing", function () {
      $parent.classList.add(`TabsSlider-video--loaded`)
    })
  }

  const checkVisibility = () => {
    const $this = document.querySelector(`[class*='${id}']`)

    if (!$this) {
      return
    }

    if (inView($this) && window.hasOwnProperty(`tabsSliderFlickity--${id}`)) {
      playVideoByIndex()
    }

    setIsVisible(inView($this))
  }

  function pauseAndResetAllVideos() {
    const $this = document.querySelector(`[class*='${id}']`)

    const $videos = $this.querySelectorAll(`.TabsSlider-video`)

    if (!$videos) {
      return
    }

    for (var each of $videos) {
      const $parent = each.closest(`.TabsSlider-video-wrapper`)
      $parent.classList.remove("TabsSlider-video--playing")
      each.pause()
      each.currentTime = 0
    }
  }

  function handleChange($slider) {
    $slider.on("change", function (index) {
      pauseAndResetAllVideos()
      playVideoByIndex(index)

      const $this = document.querySelector(`[class*='${id}']`)

      const $tab = $this.querySelector(`.TabsSlider-tab[data-index="${index}"]`)
      if ($tab) {
        $tab.click()
      }
    })
  }

  useEffect(() => {
    ;(async () => {
      await window.ezfy.loadFlickity()
      setLoadedFlickity(true)

      //** init

      initFlickty()
      checkVisibility()

      //** page load
      window.addEventListener("load", function () {
        checkVisibility()
        window[`tabsSliderFlickity--${id}`].destroy()
        initFlickty()
      })

      window.addEventListener("scroll", () => {
        setTimeout(checkVisibility, 100)
      })
    })()
  }, [])

  return (
    <div
      id={customID}
      className={`TabsSlider TabsSlider--${alignment} TabsSlider--${id} ptb_50 ${
        isVisible ? "TabsSlider--visible" : ""
      } ${loadedFlickty ? "TabsSlider--loaded" : ""}
      ${additionalClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div className="section-heading text-center">
              <h2>{title}</h2>
              <p className="TabsSlider-main-subtitle d-sm-block mt-4">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="TabsSlider-container">
          <div className="TabsSlider-tabs">
            <div className="TabsSlider-tabs-wrapper">
              {tabs.map((data, i) => (
                <div
                  onClick={e => {
                    setActive(i)

                    if (!window.hasOwnProperty(`tabsSliderFlickity--${id}`)) {
                      return
                    }

                    makeSubtitleVisibleByIndex(i)

                    window[`tabsSliderFlickity--${id}`].select(i, false, false)
                  }}
                  data-index={i}
                  className={`TabsSlider-tab ${
                    i === active ? "TabsSlider-tab--active" : ""
                  }`}
                >
                  <p className="TabsSlider-title">{data.title}</p>
                  <div
                    style={{ height: i === 0 && "100%" }}
                    className="TabsSlider-subtitle"
                  >
                    <p>{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="TabsSlider-content">
            {tabs.map((data, i) => (
              <div key={data.image + i} className="TabsSlider-each">
                {data.image && data.image.includes("mp4") ? (
                  <div className="TabsSlider-video-wrapper">
                    <div class="TabsSlider-video-loader"></div>

                    <video
                      loop
                      webkit-playsinline=""
                      playsinline="true"
                      muted
                      className="TabsSlider-video"
                      data-src={`${data.image}`}
                    >
                      <source type="video/mp4"></source>
                    </video>
                  </div>
                ) : (
                  <img className="lazyload" data-src={data.image} alt="" />
                )}

                <div className="TabsSlider-mobile">
                  <p className="TabsSlider-title">{data.title}</p>
                  <div className="TabsSlider-subtitle">
                    <p>{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="TabsSlider-btn-wrapper">
          <Link className="TabsSlider-btn btn" to={link}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  )
}
