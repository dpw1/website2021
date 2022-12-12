import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "./Announcement.scss"
import { siteRoutes } from "./../utils/siteRoutes"
import {
  getCookie,
  isBrowser,
  setCookie,
  _waitForElement,
} from "../utils/utils"

export default function Announcement() {
  const COOKIE_NAME = `announcement-bar-ezfy`

  const [isHidden, setIsHidden] = useState(() => {
    if (!isBrowser) {
      return true
    }

    if (getCookie(COOKIE_NAME)) {
      return true
    }

    return false
  })

  function closeAnnouncementBar() {
    if (!isBrowser) {
      return
    }

    const $body = document.querySelector(`body`)
    $body.classList.remove(`AnnouncementBarIsVisible`)

    setIsHidden(true)

    setCookie(COOKIE_NAME, "true", 1)
  }

  async function isAnnouncementBarHidden() {
    if (!isBrowser) {
      return
    }

    const isCurrentlyHidden = getCookie(COOKIE_NAME)
    const $body = document.querySelector(`body`)

    if (isCurrentlyHidden) {
      setIsHidden(true)
      $body.classList.remove(`AnnouncementBarIsVisible`)
      return true
    }

    $body.classList.add(`AnnouncementBarIsVisible`)
    setIsHidden(false)

    return false
  }

  useEffect(() => {
    isAnnouncementBarHidden()
  }, [])

  return (
    <div className={`Announcement ${isHidden ? "Announcement--hidden" : ""}`}>
      <div className="Announcement-wrapper">
        <Link
          className="Announcement-link"
          to={`${siteRoutes.shop}?source=announcement`}
        >
          <span>Replace apps with copy/paste code snippets.</span>
          <svg
            className="Announcement-arrow"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 120.64 122.88"
            style={{ enableBackground: "new 0 0 120.64 122.88" }}
            xmlSpace="preserve"
          >
            <g>
              <path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z" />
            </g>
          </svg>
        </Link>
        <button
          onClick={() => {
            if (!isBrowser) {
              return
            }
            closeAnnouncementBar()
          }}
          className="Announcement-close"
        >
          <svg
            className="Announcement-close-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
