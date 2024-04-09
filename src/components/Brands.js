import React from "react"
import "./Brands.scss"
import brand1 from "../copy/img/brands/brand-1.avif"
import brand2 from "../copy/img/brands/brand-2.avif"

import brand3 from "../copy/img/brands/brand-3.avif"
import brand4 from "../copy/img/brands/brand-4.avif"
import brand5 from "../copy/img/brands/brand-5.png"
import brand6 from "../copy/img/brands/brand-6.png"
import brand7 from "../copy/img/brands/brand-7.avif"
import brand8 from "../copy/img/brands/brand-8.png"
import brand9 from "../copy/img/brands/brand-9.svg"
import brand10 from "../copy/img/brands/brand-10.png"
import brand11 from "../copy/img/brands/brand-11.png"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "../css/swiper.scss"

// the slider for this section can be found at custom.js, at the bottom of the file.
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const brands = [
  {
    image: brand1,
    url: `https://shusshh.in/`,
  },
  {
    image: brand2,
    url: `https://thegreatfirecompany.com/`,
  },
  {
    image: brand3,
    url: `https://rosajewels.nl/`,
  },
  {
    image: brand4,
    url: `https://heyclipart.com/`,
  },
  {
    image: brand5,
    url: `https://myretroposter.com/`,
  },
  {
    image: brand6,
    url: `https://minimalwall.co.uk/`,
  },
  {
    image: brand7,
    url: `https://belgiumbaitshop.be/`,
  },

  {
    image: brand8,
    url: `https://willjbaileyshop.com/`,
  },
  {
    image: brand9,
    url: `https://solodamanduca.com/`,
  },
  {
    image: brand10,
    url: `https://weratedogs.com/`,
  },
  {
    image: brand11,
    url: `https://egefinegifts.com/`,
  },
]

export default function Brands() {
  return (
    <div
      className="Brands whiteList___1-H1l item___jF3um bg-gray  ptb_100"
      data-testid
    >
      <div className="container wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>Trusted by hundreds of Shopify merchants</h2>
              <p className=" d-sm-block mt-4">
                Shopify stores all around the world of all sizes customize their
                stores with our snippets.
              </p>
            </div>
          </div>
        </div>

        <div className="Brands-logos">
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            speed={750}
            freeMode={false}
            resistance={true}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
            resistanceRatio={0.6}
            grabCursor={true}
            centeredSlides={false}
          >
            {brands.map((e, i) => {
              return (
                <SwiperSlide>
                  <a
                    key={e.url}
                    href={e.url}
                    target="_blank"
                    className={`Brands-logo Brands-logo--${i}`}
                  >
                    <img className="lazyload" src={e.image} alt="" />
                  </a>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
