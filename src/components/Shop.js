import React, { useEffect, useState } from "react"
import "./Shop.scss"
import { graphql, useStaticQuery } from "gatsby"

import ProductItem from "./ProductItem"
// import { sanitizeProducts } from "../utils/utils"

import globalUtils from "../../global-utils"
import { productsQuery } from "../utils/utils"

function Shop(props) {
  const [products, setProducts] = useState(null)

  let data = productsQuery()

  useEffect(() => {
    setProducts(globalUtils.sanitizeProducts(data))
  }, [])

  useEffect(() => {
    console.log("fuck", products)
  }, [products])

  const { paddingTop } = props

  return (
    <section
      id="shop"
      className="section blog-area ptb_50 shop"
      style={{ paddingTop }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Shop</h2>
              <p className="d-sm-block mt-4">
                Simple, affordable and high quality copy-paste code snippets for
                your Shopify theme. <br /> No coding knowledge required.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 shop-filter">
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
              {products && products.map(e => ProductItem(e))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
