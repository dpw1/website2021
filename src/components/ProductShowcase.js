import React, { useEffect, useState } from "react"
import "./ProductShowcase.scss"

import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import { useQueryParam, NumberParam } from "use-query-params"
import { siteRoutes } from "./../utils/siteRoutes"
import globalUtils from "../../global-utils"
import { productsQuery } from "../utils/utils"
import ProductItem from "./ProductItem"
import emitter from "./../../.cache/emitter"

/**
 *
 * @param {array} chosenProducts = Array of strings with the titles of all products that you want to showcase at the homepage.
 *
 * Example: ['Debut pro', 'Brooklyn slider', 'Debut navbar']
 */

export default function ProductShowcase(props) {
  const { chosenProducts } = props

  const [products, setProducts] = useState([])

  let graphqlProducts = productsQuery()

  useEffect(() => {
    const sanitizedProducts = globalUtils.sanitizeProducts(graphqlProducts)

    if (!chosenProducts) {
      return setProducts(sanitizedProducts)
    }

    let _products = []

    chosenProducts.map(chosen => {
      sanitizedProducts.map(p => {
        if (chosen === p.title) {
          return _products.push(p)
        }
      })
    })

    setProducts(_products)
  }, [])

  return (
    <section
      className={`ptb_50 section ProductShowcase ${
        props.page === "home" ? "ProductShowcase--homepage" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Shop</h2>
              <p className="d-sm-block mt-4">
                Simple, affordable and high quality copy-paste code snippets for
                your Shopify theme.
              </p>
            </div>
          </div>
        </div>
        <div className="row ProductShowcase-products">
          {[...products].map(e => {
            return <ProductItem page={"home"} item={e}></ProductItem>
          })}
        </div>
        <div className="row">
          <div className="col-12 ProductShowcase-col">
            <Link className="btn" to={siteRoutes.shop}>
              See all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
