import React from "react"

import "./Features.scss"
import Swiper from "react-id-swiper"
// import { Navigation } from "swiper"

function Features(props) {
  const title = `The power of custom code and sections`

  const swiperConfig = {
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: "#features .swiper-button-next",
      prevEl: "#features .swiper-button-prev",
    },
    autoplay: {
      delay: 1000,
    },
  }

  return (
    <section
      id="features"
      className="section service-area bg-inherit overflow-hidden ptb_100 features"
    >
      <div className="container">
        <h2 className=" mb-4 features-title features-title--mobile">{title}</h2>
        <div className="row justify-content-between">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            {/* Service Text */}
            <div className="service-text pt-4 pt-lg-0 px-0 px-lg-4">
              <h2 className=" mb-4 features-title features-title--desktop">
                {title}
              </h2>
              {/* Service List */}
              <ul className="service-list style-two">
                {/* Single Service */}
                <li className="single-service py-2">
                  <div className="service-text">
                    <p>Add custom options to your already existing sections</p>
                  </div>
                </li>
                {/* Single Service */}
                <li className="single-service py-2">
                  <div className="service-text">
                    <p>
                      Customizable design dolor sit amet, consectetur
                      adipisicing elit. Facere, nobis, id expedita dolores
                      officiis laboriosam.
                    </p>
                  </div>
                </li>
                {/* Single Service */}
                <li className="single-service py-2">
                  <div className="service-text">
                    <p>
                      Drop ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere, nobis, id expedita dolores officiis laboriosam.
                    </p>
                  </div>
                </li>
                {/* Single Service */}
                <li className="single-service py-2">
                  <div className="service-text">
                    <p>
                      Marketing chart dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </p>
                  </div>
                </li>
              </ul>
              <a href="#" className="btn btn-bordered mt-4">
                View More
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-md-block">
            {/* Service Thumb */}
            <div className="service-thumb mx-auto">
              <Swiper {...swiperConfig}>
                <div>
                  <img
                    className="lazyload"
                    data-src="https://s3.amazonaws.com/static.e-junkie.com/products/images/1689291-1.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    className="lazyload"
                    data-src="https://s3.amazonaws.com/static.e-junkie.com/products/images/1689291-1.jpg"
                    alt
                  />
                </div>
                <div>
                  <img
                    className="lazyload"
                    data-src="https://s3.amazonaws.com/static.e-junkie.com/products/images/1689291-1.jpg"
                    alt
                  />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
