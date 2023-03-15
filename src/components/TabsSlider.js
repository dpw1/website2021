import React, { useEffect, useState } from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
// import Flickity from "react-flickity-component"

// the slider for this section can be found at custom.js, at the bottom of the file.
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

import "./TabsSlider.scss"

const tabs = [
  {
    title: "What are code snippets?",
    text:
      "Code snippets are pieces of code that you can paste into any theme to add extra functionalities. Like sections, app-like codes, between many others.",
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/code-snippets-home-page-1.mp4",
  },
  {
    title: "No monthly fees",
    text: "Pay once, use forever. No hidden nor additional fees. ",
    image:
      "https://www.ezfy.club/wp-content/uploads/2023/03/no_monthly_fees-1.mp4",
  },
  {
    title: "Quick & Simple installation",
    text:
      "Simple copy/pasting, no coding experience is needed. All products ship with clear installation instructions, taking roughly 2 minutes to install. Our friendly support staff is ready to help as well.",
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "Lifetime free updates",
    text: `Code snippets coded for specific products, like Dawn's "click to zoom" slider, are guaranteed to work with any version.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "Mobile, pad & desktop friendly",
    text: `We test our code thoroughly via BrowerStack and over 20+ real devices to guarantee its efficiency in all modern browsers and devices.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "No dev time",
    text: `Skip all the hurdles of testing, waiting, lengthy back & forth emails and grab the A/B tested code in one click. Hundreds of hours of professional dev time for the price of a product sale.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "A/B tested in real stores",
    text: `Our products are coded in partnership with long term clients of ours who are willing to test the code snippets in their own stores. These shops vary from 5 - 20k daily visits, giving us the opportunity to quickly A/B test what works the best, while fixing all bugs reported by customers.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "Focused on conversion",
    text: `Complementing the point above, ultimately every merchant is interested in making sales. Our products' goal is the same: improve stores CRO.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },

  {
    title: "Loads 3 times faster than apps",
    text: `By default all apps must wait for the webpage to load before injecting any code. Since code snippets are pasted into the theme, they load at the same time as the website.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "SEO-friendly, clean code",
    text: `Coded mindful of all best practices and latest technologies (HTML5, CSS3 and ES2022). No jQuery and heavy, redundant code is used.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
  {
    title: "Handpicked Shopify Experts",
    text: `To ensure maximum quality, we work exclusively with qualified and experienced Shopify Experts. The devs coding our products have years of experience working in renowned Shopify themes and stores.`,
    image:
      "https://filmora.wondershare.com/assets/video/filmora12/product/auto-reframe.mp4",
  },
]

export default function TabsSlider() {
  const [active, setActive] = useState(0)
  const [swiper, setSwiper] = useState()
  const [loadedFlickty, setLoadedFlickity] = useState(false)
  const [loaded, setLoaded] = useState()

  async function initFlickty() {
    if (!loadedFlickty) {
      const res = await window.ezfy.loadFlickity()
      setLoadedFlickity(res)
    }

    const $slider = document.querySelector(`.TabsSlider-content`)

    var slider = new Flickity($slider, {
      cellAlign: "left",
      contain: true,
      adaptiveHeight: true,
      imagesLoaded: true,
    })

    window.tabsSliderFlickity = slider
    window.ezfy.lazyLoadVideos()
  }

  function makeSubtitleVisible($el) {
    /* Close all other subtitles */
    const $active = document.querySelector(`.TabsSlider-tab--active`)

    if ($active) {
      const $subtitle = $active.querySelector(`.TabsSlider-subtitle`)
      $subtitle.style.height = "0px"
    }

    /* Make current subtitle visible */
    const $parent = $el.closest(`.TabsSlider-tab`)
    const $subtitle = $parent.querySelector(`.TabsSlider-subtitle`)

    const height = $subtitle.querySelector(`*`).offsetHeight

    $subtitle.style.height = `${height}px`
  }

  useEffect(() => {
    ;(async () => {
      function setTextHeight() {
        const $texts = document.querySelectorAll(`.TabsSlider-mobile`)

        if (!$texts) {
          return
        }

        for (var each of $texts) {
          const height = each.offsetHeight
          each.setAttribute("style", `height:${height}px;`)
        }
      }

      window.addEventListener("load", function () {
        window.tabsSliderFlickity.destroy()
        initFlickty()
      })

      initFlickty()
    })()
  }, [])

  return (
    <div className="TabsSlider ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 ">
            <div className="section-heading text-center">
              <h2>High Quality Customizations one Click Away</h2>
              <p className="d-sm-block mt-4">
                Conversion optimization, SEO-friendly and performative: these
                are the main pillars sustaining our products.
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

                    makeSubtitleVisible(e.target)

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
                  <video
                    // poster={
                    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCgKbX7HIXYrg16RO8twdPqWif4YZTv-oTcR3Y0roaw&s"
                    // }
                    loop
                    webkit-playsinline=""
                    playsinline="true"
                    muted
                    className="lazy"
                    data-src={`${data.image}#t=0.1`}
                  ></video>
                ) : (
                  <img data-src={data.image} alt="" />
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
      </div>
    </div>
  )
}
