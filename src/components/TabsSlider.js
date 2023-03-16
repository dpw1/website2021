import React, { useEffect, useState } from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import inView from "element-in-view"
// import Flickity from "react-flickity-component"

// the slider for this section can be found at custom.js, at the bottom of the file.
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import "./TabsSlider.scss"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"

const tabs = [
  {
    title: "What are code snippets?",
    text:
      "Code snippets are pieces of code that you can paste into any theme to add extra functionalities. Like sections, app-like codes, between many others.",
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/what-are-code-snippets.mp4",
  },
  {
    title: "No monthly fees",
    text: "Pay once, use forever. No hidden nor additional fees. ",
    image: "https://www.ezfy.club/wp-content/uploads/2023/03/no-fees.mp4",
  },
  {
    title: "Quick & Simple installation",
    text:
      "Simple copy/pasting, no coding experience is needed. All products ship with clear installation instructions, taking roughly 2 minutes to install. Our friendly support staff is ready to help as well.",
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/code-snippets-home-page-1.mp4",
  },
  {
    title: "Lifetime free updates",
    text: `Be notified whenever we release a new update with bug fixes and/or new features.`,
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/Untitled-design-4.mp4",
  },
  {
    title: "Fast, SEO-friendly and clean code",
    text: `Coded mindful of all best practices and latest technologies (HTML5, CSS3 and ES2022). No jQuery, heavy or redundant code is used.`,
    image: "https://www.ezfy.club/wp-content/uploads/2023/03/fast-code-3.mp4",
  },
  {
    title: "Mobile, pad & desktop friendly",
    text: `We use tools to test our code through 150+ real devices (not emulated), plus the 20+ physical devices at our office to guarantee the product's effiency in all modern environments.`,
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/mobile-friendly.mp4",
  },
  {
    title: "No dev time",
    text: `Skip all the hurdles of testing, waiting, lengthy back & forth emails and grab the A/B tested code in one click. Hundreds of hours of professional dev time for the price of a product sale.`,
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/code-snippets-home-page-2.mp4",
  },
  {
    title: "A/B tested in real stores",
    text: `Before being put on sale, our products are coded in partnership with long term clients of ours who are willing to test the code snippets in their own stores. This gives us the opportunity to quickly A/B test what works the best, while fixing all bug reports received.`,
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/a-b-tested-in-real-stores.mp4",
  },

  {
    title: "Focused on conversion",
    text: `Ultimately every business has to make sales. We bear that very close to mind when coding our products by focusing in CRO from beginning to end. We also give you enough customization tools to A/B test what works the best for your business.`,
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/Untitled-design-5.mp4",
  },

  // {
  //   title: "Loads 3 times faster than apps",
  //   text: `By default all apps must wait for the webpage to load before injecting any code. Since code snippets are pasted into the theme, they load at the same time as the website.`,
  //   image: "https://www.ezfy.club/wp-content/uploads/2023/03/fast-code.mp4",
  // },

  // {
  //   title: "Handpicked Shopify Experts",
  //   text: `To ensure maximum quality, we don't hire freelancers and work exclusively with qualified and experienced Shopify Experts. The devs coding our products have years of experience working in renowned Shopify themes and stores.`,
  //   image:
  //     "",
  // },
]

export default function TabsSlider() {
  const [active, setActive] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const [swiper, setSwiper] = useState()
  const [loadedFlickty, setLoadedFlickity] = useState(false)
  const [loaded, setLoaded] = useState()

  async function initFlickty() {
    const $slider = document.querySelector(`.TabsSlider-content`)

    var slider = new Flickity($slider, {
      cellAlign: "left",
      contain: true,
      adaptiveHeight: true,
      imagesLoaded: false,
    })

    window.tabsSliderFlickity = slider

    handleChange(slider)
  }

  function makeSubtitleVisibleByIndex(index = 0) {
    /* Close all other subtitles */
    const $active = document.querySelector(`.TabsSlider-tab--active`)

    if ($active) {
      const $subtitle = $active.querySelector(`.TabsSlider-subtitle`)
      $subtitle.style.height = "0px"
    }

    /* Make current subtitle visible */
    const $parent = document.querySelector(
      `.TabsSlider-tab:nth-child(${index + 1})`
    )

    const $subtitle = $parent.querySelector(`.TabsSlider-subtitle`)

    const height = $subtitle.querySelector(`*`).offsetHeight

    $subtitle.style.height = `${height}px`
  }

  function playVideoByIndex(index = 0) {
    const $video = document.querySelector(
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

    console.log("load")

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
    const $el = document.querySelector(`#CodeSnippets`)

    if (!$el) {
      return
    }

    if (inView($el) && window.hasOwnProperty("tabsSliderFlickity")) {
      playVideoByIndex()
    }

    setIsVisible(inView($el))
  }

  function pauseAndResetAllVideos() {
    const $videos = document.querySelectorAll(`.TabsSlider-video`)

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

      const $tab = document.querySelector(
        `.TabsSlider-tab[data-index="${index}"]`
      )
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
        window.tabsSliderFlickity.destroy()
        initFlickty()
      })

      window.addEventListener("scroll", () => {
        setTimeout(checkVisibility, 100)
      })
    })()
  }, [])

  return (
    <div
      id="CodeSnippets"
      className={`TabsSlider ptb_50 ${isVisible ? "TabsSlider--visible" : ""} ${
        loadedFlickty ? "TabsSlider--loaded" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div className="section-heading text-center">
              <h2>High Quality Customizations one Click Away</h2>
              <p className="TabsSlider-main-subtitle d-sm-block mt-4">
                The easiest and most accessible way to enhance your theme with
                top notch quality code.
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

                    if (!window.hasOwnProperty("tabsSliderFlickity")) {
                      return
                    }

                    makeSubtitleVisibleByIndex(i)

                    window.tabsSliderFlickity.select(i, false, false)
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

            {/* <Swiper
              spaceBetween={0}
              slidesPerView={}
              speed={750}
              freeMode={false}
              resistance={true}
              slidesOffsetAfter={0}
              loopFillGroupBlank={false}
              resistanceRatio={0.6}
              grabCursor={true}
              centeredSlides={false}
              direction={"vertical"}
              navigation={{
                nextEl: ".TabsSlider-arrows.swiper-button-next",
                prevEl: ".TabsSlider-arrows.swiper-button-prev",
              }}
              scrollbar={{
                el: ".swiper-scrollbar",
                draggable: false,
                dragSize: 30,
              }}
            >
              {tabs.map((data, i) => (
                <SwiperSlide>
                  <a
                    href="#"
                    onClick={() => {
                      alert()
                    }}
                    className="TabsSlider-tab"
                  >
                    <div className="TabsSlider-tab-content">
                      <b>{data.title}</b>
                      <p>{data.text}</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper> */}

            {/* <div className="TabsSlider-arrows TabsSlider-arrows--next swiper-button-next"></div>
            <div className="TabsSlider-arrows  TabsSlider-arrows--prev swiper-button-prev"></div> */}
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

            {/* <Flickity
              className={"TabsSlider-content-carousel"} // default ''
              elementType={"div"} // default 'div'
              disableImagesLoaded={false} // default false
              reloadOnUpdate={true} // default false
              static // default false
              options={{
                adaptiveHeight: true,
                prevNextButtons: false,
                pageDots: false,
              }}
            >
              {tabs.map((data, i) => (
                <div>
                  <video
                    // poster={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCgKbX7HIXYrg16RO8twdPqWif4YZTv-oTcR3Y0roaw&s"
                    // }
                    loop
                    webkit-playsinline=""
                    playsinline="true"
                    muted
                    className="lazy"
                    data-src="https://filmora.wondershare.com/assets/video/filmora12/product/ai-audio-sketrch.mp4"
                    src={data.image}
                  ></video>
                </div>
              ))}
            </Flickity> */}
            {/* <Swiper
              speed={750}
              resistance={true}
              resistanceRatio={0}
              grabCursor={false}
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              draggable={false}
              direction={"horizontal"}
              allowTouchMove={false}
              onSwiper={swiper => setSwiper(swiper)}
            >
              {tabs.map((data, i) => (
                <SwiperSlide>
                  <video
                    poster={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCgKbX7HIXYrg16RO8twdPqWif4YZTv-oTcR3Y0roaw&s"
                    }
                    loop
                    webkit-playsinline=""
                    playsinline="true"
                    muted
                    className="lazy"
                    data-src={data.image}
                  ></video>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
        <Link className="TabsSlider-btn btn" to={siteRoutes.shop}>
          View Products
        </Link>
      </div>
    </div>
  )
}
