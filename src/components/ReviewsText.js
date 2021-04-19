import React, { Component, useEffect } from "react"
import "./ReviewsText.scss"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "../css/swiper.scss"

// the slider for this section can be found at custom.js, at the bottom of the file.
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const reviews = [
  {
    image: require("../copy/img/reviews_updated/danail.jpg"),
    name: "Danail Ilev",
    country: "Sofia, Bulgaria",
    testimonial: `10/10!!! Customization and bug repairs that were impossible for a few previous devs of mine were an easy task for Diego! Honestly cannot recommend him enough. If you like testing different tweaks on your site or have an annoying bug - he's the man. Also his response time is of the charts + same day delivery (Amazon of devs 😁)`,
    source: "https://www.facebook.com/wesdwa/posts/2581923468495155",
  },
  {
    image: require("../copy/img/reviews_updated/brogan.jpg"),
    name: "Brogan Domaschenz",
    country: "Australia",
    testimonial: `VERY VERY IMPRESSED! - understood exactly what i was trying to get across and produced something even better then i could of imagined in a shorter time frame then expected and in a very professional manner.
    Even though its the festive season, and i needed the coding done urgently, you were quick to respond and get in and get the job done, sacrificing your own holiday time, you absolutely went above and beyond all expectations. 
    I cant recommend you enough!!! 🔥🔥🔥
    Top Bloke!`,
    source: "https://www.facebook.com/brogan.domaschenz/posts/2094168197296835",
  },
  {
    image: require("../copy/img/reviews_updated/mack.jpg"),
    name: "Mackenzie Dodge",
    country: "Colorado, USA",
    testimonial: `Diego was so easy to work with, I literally had the code to fix the announcement banner on our shopify store in less than 15 minutes! From the time I messaged him on FB to the time I had the code with instructions in my email I barely had time to get coffee! Plus payment was affordable and easy! I wish I had the week back I tried to fix it myself. Will definitely message them FIRST in the future!`,
    source:
      "https://www.facebook.com/themackenziedodge/posts/10217898828166682",
  },
  {
    image: require("../copy/img/reviews_updated/ibr.jpg"),
    name: "Ibraheem Nadeem",
    country: "Michigan, USA",
    testimonial: `Diego is amazing at what he does. I've been using his web development services for over a year (I have 20+ projects completed with the EZFY team) and he is always super helpful. His CRO tips are incredible and have definitely helped my conversion rates!
    Super fast turn around time and always willing to help with support after the project is done. HIGHLY Recommend Diego and the EZFY team for all your Shopify web development needs!`,
    source: "https://www.facebook.com/ibraheem.nadeem/posts/10161783472635352",
  },
  {
    image: require("../copy/img/reviews_updated/anna-dineva.jpg"),
    name: "Anna Dineva",
    country: "Paris, France",
    testimonial: `Diego is great ! Very responsive and customizes everything to your wish. Very friendly and comprehensive, + the delivery is immediate. I enjoy a lot working with him ! Recommend 100% !`,
    source: "https://www.facebook.com/annadinevaz/posts/10161291180020618",
  },
  {
    image: require("../copy/img/reviews_updated/matt-reseigh.jpg"),
    name: "Matt Reseigh",
    country: "Adelaide, Australia",
    testimonial: `Diego was extremely accommodating and easy to work with. He has an extensive amount of knowledge and is willing to go above and beyond. I will certainly be using his services again in the future. Highly recommend!`,
    source: "https://www.facebook.com/matt.reseigh/posts/3922590694423086",
  },
  {
    image: require("../copy/img/reviews_updated/ronny.jpg"),
    name: "Ronny Berco",
    country: "Toronto, Ontario",
    testimonial: `Incredible work - I got them to help fix some things on my Shopify store and for such a great price! They were extremely fast and went above and beyond in filling my request. On top of that they made even more great suggestions on fixes I can do for the site. Thanks! Will definitely work with you again.`,
    source: "https://www.facebook.com/ron.bercovitch/posts/10161454417070285",
  },
  {
    image: require("../copy/img/reviews_updated/mev-omie.jpg"),
    name: "Mev Omie",
    country: "Melbourne, Australia",
    testimonial: `One of the best website developers out there! Always on time and exceeds expectations!`,
    source: "https://www.facebook.com/mevlan.omer.1/posts/1688787327966005",
  },
  {
    image: require("../copy/img/reviews_updated/daniel-walker.jpg"),
    name: "Daniel Walker",
    country: "Melton, Australia",
    testimonial: `Super happy with Diego’s work! He was quick to help out, easy to communicate with, and finished the work I needed at a very high standard! Thank you Diego!`,
    source:
      "https://www.facebook.com/daniel.walker.9843/posts/3406178189405829",
  },

  {
    image: require("../copy/img/reviews_updated/wei-tan.jpg"),
    name: "Wei Tan",
    country: "Australia",
    testimonial: `Diego is a great resource. He's prompt and highly accommodating, which all leads to a great end result. Highly recommended!`,
    source:
      "https://www.facebook.com/permalink.php?story_fbid=465128090696487&id=100015978994970",
  },

  {
    image: require("../copy/img/reviews_updated/shawn.jpg"),
    name: "Shawn Pansiri",
    country: "",
    testimonial: `Working with Diego was one of the best experiences I have ever had he is a professional and knows his stuff, anything you ask he will get it done he will also go out of his way and help you out if your knowledge is limited in some areas. One of the best hires I have come across and will hire in a heartbeat. Keep up the good work Diego!`,
    source: "https://www.facebook.com/shawn.pansiri/posts/2443221389022677",
  },
  {
    image: require("../copy/img/reviews_updated/jeff.jpg"),
    name: "Jeffrey Richardson",
    country: "Toronto, Ontario",
    testimonial: `This team went FAR beyond my expectations! It felt as if i had another employee, instead of a service. Their recommendations and exceptional work made my project come out perfectly. Their ability to show me examples, modify at no cost and finish everything extremely fast was amazing. will work with these guys for now on.`,
    source:
      "https://www.facebook.com/jeffreyprichardson/posts/10212580477741031",
  },
  {
    image: require("../copy/img/reviews_updated/conny.jpg"),
    name: "Conny Segervall",
    country: "Nykarleby, Finland",
    testimonial: `Hands down the best agency I have ever worked with. Always happy with the awesome results :)`,
    source: "https://www.facebook.com/csegervall/posts/10155865648326714",
  },
  {
    image: require("../copy/img/reviews_updated/richard.jpg"),
    name: "Richard Agyemang",
    country: "Philadelphia, USA",
    testimonial: `He is the best at what he does. I have worked with a couple of developers but he is by far the best. Thanks for such an amazing job on my site. I 100% recommend him`,
    source:
      "https://www.facebook.com/richard.agyemang.9655/posts/2440297606028451",
  },
]

const Review = props => {
  const { image, name, country, testimonial, source } = props.data

  useEffect(() => {
    // setTimeout(window.ezfy.reviewsTextSlider, 50)
  }, [])

  return (
    <article key={source} className="swiper-slide reviews-text-item">
      <div className="reviews-text-slider-wrapper">
        <div>
          <div className="reviews-text-box">
            <figure className="reviews-text-figure">
              <img
                data-src={image}
                alt={`${name}'s on Facebook.`}
                className="lazyload"
              />
            </figure>
            <div className="reviews-text-about">
              <h2>
                {name
                  .trim()
                  .split(" ")
                  .map((e, i) => (
                    <span key={i}>{e}</span>
                  ))}
              </h2>
              <p>
                {country ? (
                  country
                ) : (
                  <span
                    style={{
                      height: 20,
                      width: 1,
                      display: "block",
                      background: "transparent",
                    }}
                  >
                    {" "}
                  </span>
                )}
              </p>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
          <div className="reviews-text-testimonial">{testimonial}</div>
          <a
            target="_blank"
            rel="noreferrer"
            href={source}
            className="reviews-text-btn custom-link"
          >
            Review source <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  )
}

function ReviewsText() {
  return (
    <div id="reviews" className="reviews-text ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                <svg
                  className="heart-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -28 512.001 512"
                  style={{ width: 15 }}
                >
                  <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path>
                </svg>
                <span className="text-primary"> Customers'</span>{" "}
                Recommendations
              </span>
              <h2 className="text-capitalize">Testimonials</h2>
              <p className="d-sm-block mt-4">
                Our clients' satisfaction is our main priority. <br />
                Here are some reviews, yet you can find much more in our{" "}
                <a
                  rel="noreferrer"
                  className="custom-link"
                  target="_blank"
                  href="https://fb.com/ezfyforshopify/reviews"
                >
                  official Facebook page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-container reviews-text-container">
        <div
          id="reviewsTextSlider"
          className="reviews-text-slider swiper-wrapper"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={"auto"}
            speed={750}
            freeMode={false}
            resistance={true}
            resistanceRatio={0.6}
            grabCursor={true}
            centeredSlides={true}
            navigation={{
              nextEl: ".reviews-text-container .swiper-button-next",
              prevEl: ".reviews-text-container .swiper-button-prev",
            }}
            scrollbar={{
              el: ".swiper-scrollbar",
              draggable: false,
              dragSize: 30,
            }}
          >
            {reviews.map((data, i) => (
              <SwiperSlide>
                <Review key={i} data={data}></Review>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="review-text-button-prev swiper-button-next"></div>
        <div className="review-text-button-next swiper-button-prev"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  )
}

export default ReviewsText
