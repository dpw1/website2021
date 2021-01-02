import React from "react"

import "./About.scss"
import "./WhatDoWeDo.scss"
import { Swiper } from "swiper/react"

function WhatDoWeDo(props) {
  return (
    <section
      id="about"
      className={`section about features-area overflow-hidden bg-gray ptb_50 what-we-do`}
    >
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>What do we do?</h2>
              <p className=" d-sm-block mt-4">
                We create custom sections and options for your theme.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 what-we-do-image-container">
            <figure
              className="about-image wow fadeInLeft"
              data-aos-duration="2s"
              data-wow-delay="0.2s"
            >
              <svg
                id="bc2ceed9-6279-4fc4-8d2c-808d9baa6e6c"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 920 728.8"
              >
                <defs>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".cls-1{fill:#e6e6e6;}.cls-2{fill:#fff;}.cls-3{fill:#525168;}.cls-4{fill:#adadad;}.cls-5{fill:#3f3d56;}.cls-6{fill:#a0616a;}.cls-7{fill:#6c63ff;}.cls-8{fill:#2f2e41;}.cls-9{fill:#ccc;}.cls-10{fill:url(#linear-gradient);}",
                    }}
                  />
                  <linearGradient
                    id="linear-gradient"
                    x1="380.19"
                    y1="369.66"
                    x2="443.06"
                    y2="369.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset={0} stopColor="#8731e8" />
                    <stop offset={1} stopColor="#4528dc" />
                  </linearGradient>
                </defs>
                <title>ezfy-section</title>
                <path
                  className="cls-1"
                  d="M738.7,172.9h-4V63.4A63.42,63.42,0,0,0,671.3,0H439.2a63.42,63.42,0,0,0-63.4,63.4v601a63.42,63.42,0,0,0,63.4,63.4H671.3a63.42,63.42,0,0,0,63.4-63.4V250.9h4Z"
                />
                <path
                  className="cls-2"
                  d="M721.2,63.8V663.9a47.27,47.27,0,0,1-47.3,47.3H440.6a47.27,47.27,0,0,1-47.3-47.3V63.8a47.27,47.27,0,0,1,47.3-47.3h28.3a22.61,22.61,0,0,0,20.9,31h133a22.43,22.43,0,0,0,20.8-31h30.3A47.33,47.33,0,0,1,721.2,63.8Z"
                />
                <path
                  className="cls-1"
                  d="M453.1,72.2a32,32,0,0,0,0,64h0a32,32,0,1,0,0-64Z"
                />
                <path
                  className="cls-1"
                  d="M685.4,131.2h-168a8,8,0,0,1,0-16h168a8,8,0,1,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M570.4,97.2h-53a8,8,0,0,1,0-16h53a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M453.1,206.2a32,32,0,0,0,0,64h0a32,32,0,0,0,0-64Z"
                />
                <path
                  className="cls-1"
                  d="M685.4,265.2h-168a8,8,0,0,1,0-16h168a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M570.4,231.2h-53a8,8,0,0,1,0-16h53a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M453.1,474.2a32.07,32.07,0,0,0,0,64h0a32,32,0,0,0,0-64Z"
                />
                <path
                  className="cls-1"
                  d="M685.4,533.2h-168a8,8,0,1,1,0-16h168a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M570.4,499.2h-53a8,8,0,0,1,0-16h53a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M453.1,608.2a32,32,0,0,0,0,64h0a32,32,0,1,0,0-64Z"
                />
                <path
                  className="cls-1"
                  d="M685.4,667.2h-168a8,8,0,1,1,0-16h168a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-1"
                  d="M570.4,633.2h-53a8,8,0,1,1,0-16h53a8,8,0,0,1,0,16Z"
                />
                <path
                  className="cls-2"
                  d="M750.2,449.2h-386a16.52,16.52,0,0,1-16.5-16.5v-124a16.52,16.52,0,0,1,16.5-16.5h386a16.52,16.52,0,0,1,16.5,16.5v124A16.58,16.58,0,0,1,750.2,449.2Z"
                />
                <path
                  className="cls-3"
                  d="M411.6,416.4a45.7,45.7,0,1,1,45.7-45.7h0A45.75,45.75,0,0,1,411.6,416.4Zm0-89.5a43.7,43.7,0,1,0,43.7,43.7h0A43.74,43.74,0,0,0,411.6,326.9Z"
                />
                <path
                  className="cls-4"
                  d="M736.4,408.4H501.6a11.2,11.2,0,0,1,0-22.4H736.4a11.2,11.2,0,1,1,0,22.4Z"
                />
                <path
                  className="cls-4"
                  d="M575.6,360.9H501.5a11.2,11.2,0,1,1,0-22.4h74.1a11.2,11.2,0,0,1,0,22.4Z"
                />
                <path
                  className="cls-5"
                  d="M750.2,449.2h-386a16.52,16.52,0,0,1-16.5-16.5v-124a16.52,16.52,0,0,1,16.5-16.5h386a16.52,16.52,0,0,1,16.5,16.5v124A16.58,16.58,0,0,1,750.2,449.2Zm-386-156a15.45,15.45,0,0,0-15.5,15.5v124a15.45,15.45,0,0,0,15.5,15.5h386a15.45,15.45,0,0,0,15.5-15.5v-124a15.45,15.45,0,0,0-15.5-15.5Z"
                />
                <path
                  className="cls-6"
                  d="M177.7,511.2a10.72,10.72,0,0,1,9-13.8l51.3-60L250,450l-51.1,57.5a10.77,10.77,0,0,1-10.2,11.4,11.11,11.11,0,0,1-11-7.7Z"
                />
                <path
                  className="cls-7"
                  d="M221.3,446.7a4.52,4.52,0,0,1,1.3-3.5l15.9-16.1a12.53,12.53,0,0,1,20.3,14.7l-10.5,20.1a4.59,4.59,0,0,1-6.1,1.9l-.6-.3L223.1,450A4.77,4.77,0,0,1,221.3,446.7Z"
                />
                <circle className="cls-6" cx="258.6" cy="385.4" r="24.6" />
                <path
                  className="cls-8"
                  d="M245.2,495.3a4.5,4.5,0,0,1-1.8-3.1A400.39,400.39,0,0,0,236,450a26.5,26.5,0,0,1,49.2-18.4c9.7,18.1,10.4,43,10.3,52.9a4.5,4.5,0,0,1-3.8,4.4l-43.1,7.3c-.3,0-.5.1-.8.1A6.4,6.4,0,0,1,245.2,495.3Z"
                />
                <path
                  className="cls-6"
                  d="M338.2,415.3a8.75,8.75,0,0,0-.2,1.6l-43,24.8-10.4-6-11.1,14.6L291,462.7a8,8,0,0,0,9.6-.2l44.3-34.9a10.5,10.5,0,1,0-6.2-13.5,6.12,6.12,0,0,0-.5,1.2Z"
                />
                <path
                  className="cls-7"
                  d="M293.6,442.9l-13.9,18a4.47,4.47,0,0,1-6.3.8c-.2-.1-.3-.3-.5-.4L257.2,445a12.47,12.47,0,1,1,15.3-19.7l19.7,11a4.46,4.46,0,0,1,1.7,6.1c0,.1-.2.3-.3.5Z"
                />
                <polygon
                  className="cls-6"
                  points="315.3 716.4 327.5 716.4 330.4 669.3 315.3 669.2 315.3 716.4"
                />
                <path
                  className="cls-8"
                  d="M312.1,712.4h24.1a15.41,15.41,0,0,1,15.4,15.4h0v.5H312.1Z"
                />
                <polygon
                  className="cls-6"
                  points="198.3 716.4 210.5 716.4 216.3 669.2 198.3 669.2 198.3 716.4"
                />
                <path
                  className="cls-8"
                  d="M195.1,712.4h24.1a15.41,15.41,0,0,1,15.4,15.4h0v.5H195.1Z"
                />
                <path
                  className="cls-8"
                  d="M211.6,691.9l-15.2-2a4.49,4.49,0,0,1-3.9-5c0-.2.1-.4.1-.6l22.2-109.1a266.76,266.76,0,0,0,4.6-32.1c.6-8.8,3.2-21.2,11.8-30.5a124.07,124.07,0,0,0,9.7-12l6.7-9.3,44.8-7.1v.6A260.05,260.05,0,0,0,319.5,587a115.13,115.13,0,0,1,12.1,46l2.5,49.5a4.46,4.46,0,0,1-4.7,4.7l-14.5-.7a4.57,4.57,0,0,1-4.2-3.5l-12.1-54.2a3.1,3.1,0,0,0-.6-1.3l-38.1-50.8a2.53,2.53,0,0,0-3.5-.5,2.73,2.73,0,0,0-.9,1.2L216.4,689a4.45,4.45,0,0,1-4.3,3A.75.75,0,0,0,211.6,691.9Z"
                />
                <path
                  className="cls-8"
                  d="M231.4,368.3a103.54,103.54,0,0,0,4.3-18.1c.3-3.6-.6-7.4-3.2-9.9-4.9-4.6-13.2-2.4-18.3,2-7.4,6.3-11.1,16.1-12.5,25.7s-.8,19.4-1.1,29.2-1.7,19.7-6.7,28.1-14.2,14.8-23.9,14.1a16.66,16.66,0,0,1-10.5-4.5,12.33,12.33,0,0,1-3.7-10.6c-5,8.9-2.4,20.9,5,27.9s18.8,9,28.5,6,17.7-10.5,22.5-19.4,6.5-19.4,6.3-29.5c-.2-7.8-1.5-15.7-.2-23.4s6.1-15.5,13.7-17.3Z"
                />
                <path
                  className="cls-8"
                  d="M265.5,378.4c1.3,4.3,6.3,7,10.7,6.3s8.1-4.4,9.5-8.7a18.35,18.35,0,0,0-1.4-13.2,20.3,20.3,0,0,0-11.7-10.4,17,17,0,0,0-15.3,2.4,5.59,5.59,0,0,0-3.9-4.1,10.76,10.76,0,0,0-5.9.1,24.76,24.76,0,0,0-13.5,9.8,38.31,38.31,0,0,0-6.1,15.8c-1.5,8.5-1,17.7,3.8,24.9s14.5,11.4,22.4,8c.5-2.5-.7-5.1-2-7.2s-2.9-4.3-3.5-6.8.5-5.6,2.9-6.4c2.1-.7,4.3.4,6.5.6a7.06,7.06,0,0,0,7.5-6.6,7.49,7.49,0,0,0-.7-3.6Z"
                />
                <path
                  className="cls-9"
                  d="M919,728.8H1a1,1,0,0,1,0-2H919a1,1,0,0,1,0,2Z"
                />
                <path
                  className="cls-10"
                  d="M426.13,338.45l-21.74,6.09c-14.05,3.95-21.6,6.11-21.93,6.27a4.15,4.15,0,0,0-2.26,4c0,.28.44,1.89.94,3.66l.9,3.15v-2.24h12.5v3.7H386.3v2.36h7.46v3.37H386.3v2.44h8.34v3.62h-8.82l.05.2c0,.12,1.53,5.37,3.32,11.68,2.17,7.64,3.34,11.64,3.5,11.95a4.22,4.22,0,0,0,4.51,2.16c.31-.07,10.12-2.81,21.82-6.11,14.08-4,21.44-6.06,21.77-6.23a4.66,4.66,0,0,0,1.8-1.78,4.46,4.46,0,0,0,.46-2.2c-.05-.5-5.19-18.77-5.32-18.91a12,12,0,0,0-1.13,1.68L435.53,369v5.8H431.2v-5.78l-2.95-4.82c-1.62-2.65-2.95-4.84-2.95-4.86s1.11,0,2.45,0l2.46,0,1.57,2.77c.86,1.53,1.59,2.78,1.61,2.78s2.79-4.8,2.78-4.87-1.23-4.31-2.7-9.52c-1.75-6.16-2.78-9.63-2.92-10a4.56,4.56,0,0,0-1.79-1.75A4.41,4.41,0,0,0,426.13,338.45Zm-16,22.5,0,1.56-3.88,4.34-3.88,4.35,3.88,0,3.88,0v3.62H396.37v-3.12l3.86-4.32,3.85-4.32-3.73,0-3.74,0v-1.79a13.66,13.66,0,0,1,.06-1.85s3.06-.05,6.74,0l6.69,0Zm14.64.34v1.93h-8.1v2.6h7.4l0,1.75,0,1.75-3.67,0-3.68,0v5.49h-4.32V359.37h12.42v1.92Z"
                />
              </svg>
            </figure>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <ul className="features-item">
              <li>
                {/* Image Box */}
                <div
                  className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight"
                  data-aos-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="about-text icon-text media-body align-self-center align-self-md-start">
                    <p className="d-sm-block">
                      The main intent of <b className="custom-emphasis">EZFY</b>{" "}
                      is to give you full & personalized control over your
                      Shopify theme.
                    </p>
                    <p className="d-block mt-4">
                      You don't have to hire a developer to change specific font
                      sizes, colors, text, images, turn features on/off or
                      anything else: we'll wire it all up for you so you can
                      edit whatever you wish at the <b>customize</b> panel.
                    </p>
                    {/* <p className="d-block mt-4">
                      Still unclear? No worries,{" "}
                      <a href="#features" className="scroll custom-link">
                        here
                      </a>{" "}
                      you can find more practical examples of our work.
                    </p> */}
                    <p className="d-block mt-4">
                      We help dozens of Shopify merchants every single day. Feel
                      free to read their testimonials about our work{" "}
                      <a href="#reviews" className="scroll custom-link">
                        here
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatDoWeDo
