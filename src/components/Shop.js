import React, { useEffect, useState } from "react"
import "./Shop.scss"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"
import Product from "./Product"

function Shop(props) {
  const [products, setProducts] = useState(null)

  let data = useStaticQuery(graphql`
    query ProductsQuery {
      allWordpressProducts {
        edges {
          node {
            wordpress_id
            ejunkie {
              products {
                images
                price
                name
                details
                number
              }
            }
            gumroad {
              products {
                name
                formatted_price
                preview_url
                short_url
                description
                published
              }
            }
          }
        }
      }
    }
  `).allWordpressProducts.edges[0].node

  const getProducts = () => {
    const ejunkie = data.ejunkie.products
    const gumroad = data.gumroad.products
    let products = []

    ejunkie.map(e => {
      return products.push({
        title: e.name,
        price: e.price.replace("$", ""),
        description: e.details,
        thumbnail: e.images[0],
        url: `https://ezfy.e-junkie.com/product/${e.number}`,
        addToCart: `https://www.fatfreecartpro.com/ecom/gb.php?&c=cart&ejc=2&cl=374804&i=${e.number}`,
      })
    })

    gumroad.map(e => {
      if (!e.published) {
        return
      }

      return products.push({
        title: e.name,
        price: /0\+/.test(e.formatted_price)
          ? "Free"
          : e.formatted_price.replace("$", ""),
        description: e.description,
        thumbnail: e.preview_url,
        url: e.short_url,
      })
    })

    return products
  }

  useEffect(() => {
    setProducts(getProducts())
    console.log("rrr shop data", products)
  }, [])

  const { paddingTop } = props

  return (
    <section
      id="shop"
      className="section blog-area ptb_50"
      style={{ paddingTop }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Shop</h2>
              <p className="d-sm-block mt-4">
                Easy to install, custom sections & code snippets for your
                Shopify store.
                <br />
                In need of something unique?{" "}
                <a className="scroll custom-link" href="#contact">
                  Contact us
                </a>{" "}
                for a free quote, same day response guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
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
                        className="collapse show text-uppercase d-block p-3"
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
          <div className="col-12 col-lg-9">
            <div className="portfolio-row row">
              {products && products.map(e => Product(e))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
