import React, { useEffect, useState } from "react"
import "./Shop.scss"
import { graphql, useStaticQuery } from "gatsby"
import axios from "axios"

import { useStatePersist as useStickyState } from "use-state-persist"
import ProductItem from "./ProductItem"
import Skeleton from "react-loading-skeleton"

// import { sanitizeProducts } from "../utils/utils"

import globalUtils from "../../global-utils"
import { getEcwidProducts } from "../utils/utils"
import Search from "./Search"
import Tags from "./Tags"

function Shop(props) {
  const [rawProducts, setRawProducts] = useState(null)
  const [products, setProducts] = useStickyState("@products", [])
  const [isSearching, setIsSearching] = useState(false)

  // let data = productsQuery()

  const populateWithProducts = () => {
    setProducts(rawProducts)
  }

  const getProducts = async () => {
    const _products = await getEcwidProducts()

    setProducts(_products)
    setRawProducts(_products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (!products) {
      return
    }

    console.log("proddd", products)

    setTimeout(() => {
      if (window.ezfy) {
        window.ezfy.init()
      }
    }, 50)
  }, [products])

  useEffect(() => {
    console.log("searching? ", isSearching)

    if (isSearching) {
      setTimeout(() => {
        if (window.ezfy) {
          window.ezfy.init()
        }
      }, 50)

      return
    }

    return populateWithProducts()
  }, [isSearching])

  const { paddingTop } = props

  const SkeletonLoader = () => {
    return (
      <div className="shop-SkeletonLoader">
        <div className="shop-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
        <div className="shop-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
        <div className="shop-SkeletonLoader-item">
          <Skeleton count={1} height={190} />
          <Skeleton count={1} />
          <Skeleton count={3} />
        </div>
      </div>
    )
  }

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
                your Shopify theme. <br /> Pay once, use forever - no monthly
                fees.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12 shop-filter">
            <div className="sidebar">
              <div>
                <Tags data={rawProducts} updateData={setProducts}></Tags>
              </div>
              {products && rawProducts && (
                <Search
                  data={products}
                  dataKey="title"
                  updateData={setProducts}
                  isSearching={isSearching}
                  setIsSearching={setIsSearching}
                ></Search>
              )}
            </div>
          </div>

          <div className="col-12 col-lg-12">
            {products && products.length >= 1 ? (
              <div className="portfolio-row row two-per-row-mobile">
                {products
                  .sort(function (a, b) {
                    /* sort by popularity */
                    if (
                      a.tags.some(e => e.toLowerCase() === "popular") &&
                      !b.tags.some(e => e.toLowerCase() === "popular")
                    ) {
                      return -1
                    } else if (
                      b.tags.some(e => e.toLowerCase() === "popular") &&
                      !a.tags.some(e => e.toLowerCase() === "popular")
                    ) {
                      return 1
                    }

                    /* sort by "all themes" */
                    if (
                      a.tags.some(e => e.toLowerCase() === "all themes") &&
                      !b.tags.some(e => e.toLowerCase() === "all themes")
                    ) {
                      return -1
                    } else if (
                      b.tags.some(e => e.toLowerCase() === "all themes") &&
                      !a.tags.some(e => e.toLowerCase() === "all themes")
                    ) {
                      return 1
                    }

                    /* sort by title */
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1
                    }
                    return 0
                  })
                  .map(e => ProductItem(e))}
              </div>
            ) : (
              <div className="portfolio-row row">
                <div className="container">
                  {isSearching ? <p>No products found.</p> : <SkeletonLoader />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
