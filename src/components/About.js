import React, { Component } from "react";
import "./About.scss";
import image from "../copy/img/avatar/diego.jpg";

function About() {
  return (
    <section
      id="about"
      className="section features-area overflow-hidden bg-gray ptb_25">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>About EZFY</h2>
              <p className=" d-sm-block mt-4">
                A little bit of the story behind EZFY.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <figure
              className="about-image wow fadeInLeft"
              data-aos-duration="2s"
              data-wow-delay="0.2s">
              {/* Work Slider */}
              <img src={image} alt="Diego Fortes - EZFY's creator" />
            </figure>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            <ul className="features-item">
              <li>
                {/* Image Box */}
                <div
                  className="image-box media icon-1 px-1 py-3 py-md-4 wow fadeInRight"
                  data-aos-duration="2s"
                  data-wow-delay="0.2s">
                  <div className="about-text icon-text media-body align-self-center align-self-md-start">
                    <p className="d-sm-block">
                      Greetings! My name is Diego Fortes. I am a Computer
                      Science graduate software engineer with 9 years of coding
                      experience and 6 years of professional experience in
                      Shopify development.
                    </p>
                    <p className="d-block mt-4">
                      The main intent of <b className="custom-emphasis">EZFY</b>{" "}
                      is to cater all of your technical Shopify needs so you can
                      focus on the business side of your e-commerce.
                    </p>
                    <p className="d-block mt-4">
                      We'll help you with small customizations, bug fixes,
                      adding extra options to your theme, creating custom
                      sections and so on and so forth.
                    </p>
                    <p className="d-block mt-4">
                      We help dozens of Shopify merchants everyday. Feel free to
                      read about their experience with our work by{" "}
                      <a href="#reviews" className="scroll custom-link">
                        clicking here
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
  );
}

export default About;
