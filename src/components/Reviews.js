/*


  _____  ______ _____  _____  ______ _____       _______ ______ _____  
 |  __ \|  ____|  __ \|  __ \|  ____/ ____|   /\|__   __|  ____|  __ \ 
 | |  | | |__  | |__) | |__) | |__ | |       /  \  | |  | |__  | |  | |
 | |  | |  __| |  ___/|  _  /|  __|| |      / /\ \ | |  |  __| | |  | |
 | |__| | |____| |    | | \ \| |___| |____ / ____ \| |  | |____| |__| |
 |_____/|______|_|    |_|  \_\______\_____/_/    \_\_|  |______|_____/ 
                                                                       
                                                                       

*/

import React, { Component } from "react";
import "./Reviews.scss";

import img from "../copy/img/reviews/r1.jpg";

const images = () => {};

const links = [
  "https://www.facebook.com/annadnv/posts/10161291180020618",
  "https://www.facebook.com/permalink.php?story_fbid=465128090696487&id=100015978994970",
  "https://www.facebook.com/ron.bercovitch/posts/10161454417070285",
  "https://www.facebook.com/shawn.pansiri/posts/2443221389022677",
  "https://www.facebook.com/csegervall/posts/10155865648326714",
  "https://www.facebook.com/nathanngo21/posts/10155898793046436",
  "https://www.facebook.com/ibraheem.nadeem/posts/10161783472635352",
  "https://www.facebook.com/wesdwa/posts/2581923468495155",
  "https://www.facebook.com/jeffreyprichardson/posts/10212580477741031",
  "https://www.facebook.com/brogan.domaschenz/posts/2094168197296835",
  "https://www.facebook.com/daniel.walker.9843/posts/3406178189405829",
  "https://www.facebook.com/Jay.ripper1990/posts/10156444786948231",
];

const reviews = () => {
  for (const [i, each] of links.entries()) {
    // import image from `../copy/img/reviews/r${i+1}.jpg`;
  }
};

function Reviews() {
  return (
    <section id="reviews" className="section screenshots-area  ptb_50">
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
                  style={{ width: 15 }}>
                  <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path>
                </svg>
                <span className="text-primary"> Customers'</span>{" "}
                Recommendations
              </span>
              <h2 className="text-capitalize">Reviews</h2>
              <p className="d-sm-block mt-4">
                For your convenience here's a compilation of a few of our
                customers testimonials. <br />
                Yet you can find much more in our{" "}
                <a
                  rel="noreferrer"
                  className="custom-link"
                  target="_blank"
                  href="https://fb.com/ezfyforshopify/reviews">
                  official Facebook page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* App Screenshot Slider Area */}
            <div className="app-screenshots">
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/annadnv/posts/10161291180020618"
                  target="_blank">
                  <img
                    className="lazyload"
                    data-src={require("../copy/img/reviews/r1.jpg")}
                    alt="Diego is great! Very responsive and customizes everything to your wish. Very friendly and comprehensive."
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/permalink.php?story_fbid=465128090696487&id=100015978994970"
                  target="_blank">
                  <img
                    className="lazyload"
                    data-src={require("../copy/img/reviews/r2.jpg")}
                    alt="Diego is a great resource. He's prompt and highly accommodating, which all leads to a great end result. Highly recommended!"
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/ron.bercovitch/posts/10161454417070285">
                  <img
                    data-lazy={require("../copy/img/reviews/r3.jpg")}
                    alt="Incredible work - I got them to help fix some things on my Shopify store and for such a great price! "
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/shawn.pansiri/posts/2443221389022677">
                  <img
                    data-lazy={require("../copy/img/reviews/r4.jpg")}
                    alt="Working with Diego was one of the best experiences I have ever had he is a professional and knows his stuff."
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/csegervall/posts/10155865648326714">
                  <img
                    data-lazy={require("../copy/img/reviews/r5.jpg")}
                    alt="Hands down the best agency I have ever worked with. Always happy with the awesome results."
                  />
                </a>
              </div>
              {/* Single Screenshot Item xxx */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/nathanngo21/posts/10155898793046436">
                  <img
                    data-lazy={require("../copy/img/reviews/r6.jpg")}
                    alt="He knows his stuff and is very quick with making changes! An absolute wizard at shopify! Really recommend him!"
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/ibraheem.nadeem/posts/10161783472635352"
                  target="_blank">
                  <img
                    data-lazy={require("../copy/img/reviews/r7.jpg")}
                    alt={`Diego is amazing at what he does. I've been using his web development services for over a year (I have 20+ projects completed with the EZFY team) and he is always super helpful. His CRO tips are incredible and have definitely helped my conversion rates!`}
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/wesdwa/posts/2581923468495155">
                  <img
                    data-lazy={require("../copy/img/reviews/r8.jpg")}
                    alt={`10/10!!! Customization and bug repairs that were impossible for a few previous devs of mine were an easy task for Diego! Honestly cannot recommend him enough. If you like testing different tweaks on your site or have an annoying bug - he's the man. Also his response time is of the charts + same day delivery (Amazon of devs 😁)`}
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/jeffreyprichardson/posts/10212580477741031">
                  <img
                    data-lazy={require("../copy/img/reviews/r9.jpg")}
                    alt=" This team went FAR beyond my expectations! It felt as if i had another employee, instead of a service. Their recommendations and exceptional work made my project come out perfectly. Their ability to show me examples, modify at no cost and finish everything extremely fast was amazing. will work with these guys for now on."
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/brogan.domaschenz/posts/2094168197296835">
                  <img
                    data-lazy={require("../copy/img/reviews/r10.jpg")}
                    alt="VERY VERY IMPRESSED! - understood exactly what i was trying to get across and produced something even better then i could of imagined in a shorter time frame then expected and in a very professional manner."
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/daniel.walker.9843/posts/34Super happy with Diego’s work! He was quick to help out, easy to communicate with, and finished the work I needed at a very high standard! Thank you Diego!">
                  <img
                    data-lazy={require("../copy/img/reviews/r11.jpg")}
                    alt=""
                  />
                </a>
              </div>
              {/* Single Screenshot Item */}
              <div className="single-screenshot">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/Jay.ripper1990/posts/10156444786948231">
                  <img
                    data-lazy={require("../copy/img/reviews/r12.jpg")}
                    alt="I'm extremely happy with the work carried out by Diego! Will definitely be utilising his skills again!"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
