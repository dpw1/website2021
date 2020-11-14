import React, { useState, useRef } from "react";
import "./Services.scss";
import TrustBadge from "./TrustBadge";
import { servicesItems } from "./../utils/utils";
import ServicesItem from "./ServicesItem";

const defaultServiceItemsList = () => {
  return (
    <React.Fragment>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Free installation included</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Works with any theme, no apps required</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>
          It's a Shopify section: move it around, hide it, have full control and
          freedom
        </span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Super lightweight: does not slow down your website</span>
      </li>
      <li>
        <i className="fa fa-check" aria-hidden="true"></i>
        <span>Fully responsive: works on all devices and modern browsers</span>
      </li>
      <li>
        <div style={{ marginTop: 10 }}>
          <TrustBadge></TrustBadge>
        </div>
      </li>
    </React.Fragment>
  );
};

const items = [
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-countdown.mp4"),
    price: "19",
    image: require("../copy/img/thumbnail/section-countdown.gif"),
    preview: "https://acid-tests.myshopify.com/#shopify-section-1599883670936",
    title: `Animated Countdown Section`,
    paymentLink: `https://gumroad.com/l/zoDQl`,
    descriptionList: () => (
      <React.Fragment>
        <ul className="services-list">
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Quickly and easily add a real-time countdown clock to create
              urgency and increase sales
            </span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Customize colors, text, expiration date and more</span>
          </li>

          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Perfect to boost conversions for festive dates & sale seasons
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-freetobekids.mp4"),
    price: "29",
    image: require("../copy/img/thumbnail/section-freetobekids-gif.gif"),
    preview: "http://blankrefer.com/?https://free-to-be-kids.myshopify.com/",
    title: `Image Slider Section`,
    paymentLink: "https://gum.co/ZgRVo",
    descriptionList: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Draw your customers’ attention to your bestsellers and promotions
              with a modern image slider
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
  {
    tags: ["Theme Customization"],
    video: require("../copy/img/services/yousave.jpg"),
    price: "49",
    image: require("../copy/img/services/yousave.jpg"),
    preview:
      "http://blankrefer.com/?https://www.bubswarehouse.com/products/lulla-doll",
    title: `Percentual<br/>Savings`,
    paymentLink: "contact",
    subtitle: () => (
      <p>
        Show to your customers how much in amount and percentage they're saving.
        It works with multiple variants updating the price in real time.
      </p>
    ),
  },
  {
    tags: ["Custom Shopify Section"],
    video: require("../copy/videos/section-banner.mp4"),
    price: "29",
    image: require("../copy/img/thumbnail/section-banner.gif"),
    preview: "https://acid-tests.myshopify.com/",
    title: `Self-Typing Banner Section`,
    paymentLink: "https://gum.co/CxPFC",
    readmore: false,
    subtitle: () => (
      <p>
        Quickly and easily add a real-time countdown bar to create actual
        urgency and increase your sales.
      </p>
    ),
    descriptionList: () => (
      <React.Fragment>
        <ul>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Engage your customer with a self-typing banner to make your
              product feel personal
            </span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>Control text, sizing, words to animate, colors and more</span>
          </li>
          <li>
            <i className="fa fa-check" aria-hidden="true"></i>
            <span>
              Freedom to add an image to mobile and a different one to desktop
            </span>
          </li>
          {defaultServiceItemsList()}
        </ul>
      </React.Fragment>
    ),
  },
];

function Services() {
  const loadItemsAmount = 4;
  const [itemsToShow, setItemsToShow] = useState(loadItemsAmount);
  const [loadedItems, setLoadedItems] = useState(items);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const loadMoreItems = () => {
    if (itemsToShow > loadedItems.length) {
      return;
    }

    return Array(itemsToShow)
      .fill(null)
      .map((_, i) => i)
      .map((e) => {
        let item = items[e];

        item.loadImage = true;
        item.isButtonLoading = isButtonLoading;
        item.setIsButtonLoading = setIsButtonLoading;

        if (itemsToShow <= loadItemsAmount) {
          item.loadImage = false;
        }

        return ServicesItem(item);
      });
  };

  return (
    <section id="services" className="section services blog-area ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Services</h2>
              <p className="d-sm-block mt-4">
                Besides bug fixes, speed optimization and customizations we also
                develop custom, premium quality{" "}
                <span className="custom-emphasis">Shopify sections.</span>
                <br />
                Click on the image to watch a short video showcasing the
                respective section.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <aside className="sidebar">
              {/* Single Widget */}
              <div className="single-widget">
                {/* Tags Widget */}
                <div
                  className="accordions widget tags-widget"
                  id="tags-accordion">
                  <div className="single-accordion blog-accordion">
                    <h5>
                      <a
                        role="button"
                        className="collapse show text-uppercase d-block p-3"
                        data-toggle="collapse"
                        href="#accordion3">
                        Filter
                      </a>
                    </h5>
                    {/* Tags Widget Content */}
                    <div
                      id="accordion3"
                      className="accordion-content widget-content collapse show"
                      data-parent="#tags-accordion">
                      {/* Tags Widget Items */}
                      <div
                        id="tagsWidget"
                        className="widget-content tags-widget-items pt-2">
                        <a
                          href="#"
                          data-tag-name="all"
                          className="d-inline-block mt-2 mr-1 px-2 py-1 tags-widget-item tags-widget-item--active ">
                          All
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-12 col-lg-12">
            <div className="portfolio-row row">{loadMoreItems()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
