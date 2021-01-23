import React from "react"

import "./ProductBreadcrumb.scss"
import { siteRoutes } from "./../utils/siteRoutes"

export default function ProductBreadcrumb() {
  return (
    <div className="ProductBreadcrumb">
      <div className="container ProductBreadcrumb-container">
        <div className="ProductBreadcrumb-row">
          <a
            href={siteRoutes.shop}
            title="EZFY's Previous product"
            className="ProductBreadcrumb-link"
          >
            Previous
          </a>
        </div>

        <div className="ProductBreadcrumb-row">
          <a
            href={siteRoutes.shop}
            title="EZFY's Shop"
            className="ProductBreadcrumb-link"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  )
}
