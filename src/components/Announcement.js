import React from "react"
import { Link } from "gatsby"
import "./Announcement.scss"
import { siteRoutes } from "./../utils/siteRoutes"

export default function Announcement() {
  return (
    <div className="Announcement">
      <Link
        className="Announcement-link"
        to={`${siteRoutes.shop}?source=announcement`}
      >
        Announcement
      </Link>
    </div>
  )
}
