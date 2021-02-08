import React, { useEffect, useState } from "react"
import "./Services.scss"
import { graphql, useStaticQuery } from "gatsby"

import ServicesItem from "./ServicesItem"
// import { sanitizeProducts } from "../utils/utils"

import globalUtils from "../../global-utils"
import { productsQuery } from "../utils/utils"
import { blogApi } from "../api/api"

const Services = props => {
  const _services = useStaticQuery(graphql`
    {
      allWordpressPost(filter: { categories_names: { eq: "Service" } }) {
        nodes {
          id
          slug
          title
          featured_image_src
          excerpt
          tag_names
          acf {
            price
            estimated_time
            estimated_time_max
            live_demo
            custom_options
          }
        }
      }
    }
  `)

  const [servicesData, setServicesData] = useState(
    _services.allWordpressPost.nodes
  )

  useEffect(() => {
    const getPosts = () => {
      console.log("OK", _services)
    }

    getPosts()
  }, [])

  const { paddingTop } = props

  return (
    <section
      id="services"
      className="section blog-area ptb_50 services"
      style={{ paddingTop }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Services</h2>
              <p className="d-sm-block mt-4">
                Custom coding for your Shopify themes.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 services-filter">
            <aside className="sidebar">
              {/* Single Widget */}
              <div className="single-widget">
                {/* Tags Widget */}
                <div
                  className="accordions widget tags-widget"
                  id="tags-accordion"
                >
                  <div className="single-accordion blog-accordion">
                    <h5>
                      <a
                        role="button"
                        className="collapse show text-uppercase d-block p-3 "
                        data-toggle="collapse"
                        href="#accordion3"
                      >
                        Filter
                      </a>
                    </h5>
                    {/* Tags Widget Content */}
                    <div
                      id="accordion3"
                      className="accordion-content widget-content collapse show"
                      data-parent="#tags-accordion"
                    >
                      {/* Tags Widget Items */}
                      <div
                        id="tagsWidget"
                        className="widget-content tags-widget-items pt-2"
                      >
                        <a
                          href="#"
                          data-tag-name="all"
                          className="d-inline-block mt-2 mr-1 px-2 py-1 tags-widget-item tags-widget-item--active "
                        >
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
            <div className="portfolio-row row">
              {servicesData &&
                servicesData.length >= 1 &&
                servicesData.map(e => ServicesItem(e))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
