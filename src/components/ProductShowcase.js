import React, { useEffect, useState } from "react"
import "./ProductShowcase.scss"
import Skeleton from "react-loading-skeleton"

import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import { useQueryParam, NumberParam } from "use-query-params"
import { siteRoutes } from "./../utils/siteRoutes"
import globalUtils from "../../global-utils"
// import { productsQuery } from "../utils/utils"
import ProductItem from "./ProductItem"
import emitter from "./../../.cache/emitter"
import { getEcwidProducts } from "../utils/utils"

/**
 *
 * @param {array} chosenProducts = Array of strings with the titles of all products that you want to showcase at the homepage.
 *
 * Example: ['Debut pro', 'Brooklyn slider', 'Debut navbar']
 */

export default function ProductShowcase(props) {
  const { title: _title, subtitle: _subtitle, chosenProducts } = props

  const title = _title ? _title : `Shop`
  const subtitle = _subtitle ? parse(_subtitle) : ""

  const [products, setProducts] = useState([])

  const SkeletonLoader = () => {
    return (
      <div className="ProductShowcase-SkeletonLoader">
        <div className="ProductShowcase-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
        <div className="ProductShowcase-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
        <div className="ProductShowcase-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
      </div>
    )
  }

  const populateProducts = async () => {
    const sanitizedProducts = await getEcwidProducts()

    console.log("loading    ", sanitizedProducts)

    setProducts(sanitizedProducts.slice(sanitizedProducts.length - 3))
    // return

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
  }

  useEffect(() => {
    populateProducts()
  }, [])

  return (
    <section
      id="CodeSnippets"
      className={`ptb_50 section ProductShowcase ${
        props.page === "home" ? "ProductShowcase--homepage" : ""
      }

      ${products && products.length >= 1 && "ProductShowcase--loaded"}
      ${props.backgroundColor === "gray" ? "bg-gray" : ""}
      `}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">{title}</h2>
              <p className="d-sm-block mt-4">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row ProductShowcase-products">
          {products && products.length >= 1 ? (
            [...products].map(e => {
              return <ProductItem page={"home"} item={e}></ProductItem>
            })
          ) : (
            <SkeletonLoader></SkeletonLoader>
          )}
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
