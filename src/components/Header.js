import React, { useEffect } from "react"
import "./Header.scss"
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png"
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png"
import { useMediaQuery } from "react-responsive"

import { renderNav } from "../utils/utils"

import { Link } from "gatsby"

import CartEcwid from "./CartEcwid"
import Announcement from "./Announcement"

const createNavbarSingleItem = props => {
  return (
    <li key={JSON.stringify(props)} className="nav-item">
      {props.scroll ? (
        <a
          className={props.scroll ? "nav-link scroll" : "nav-link"}
          href={props.url}
          data-scroll-offset={props.offset}
        >
          {props.name}
        </a>
      ) : (
        <Link className="nav-link" to={props.url}>
          {props.name}
          {props.hasOwnProperty("badge") && (
            <span className="badge badge-pill badge-warning ml-2">
              {props.badge}
            </span>
          )}
        </Link>
      )}
    </li>
  )
}

function Header(props) {
  const isDesktop = useMediaQuery({ query: "(min-width: 991px)" })

  const { page, darkMode } = props

  useEffect(() => {
    function navMenu() {
      const $button = document.querySelector(`[data-toggle="navbarToggler"]`)

      if (!$button) {
        return
      }

      const $navbar = document.querySelector(`.navbar`)
      const $togglers = document.querySelectorAll(`.navbar-toggler`)
      const $icons = document.querySelectorAll(`.navbar-toggler-icon`)

      for (var $toggler of $togglers) {
        $toggler.addEventListener("click", function () {
          $toggler.classList.toggle(`active`)
          $navbar.classList.toggle(`active`)
          document.body.classList.toggle(`canvas-open`)
          for (var $icon of $icons) {
            $icon.classList.toggle(`active`)
          }
        })
      }

      // NAVBAR STICKY

      var $stickyNav = document.querySelector(`.navbar-sticky`)

      window.addEventListener("scroll", function () {
        const scroll = window.scrollY

        if (scroll >= 120) {
          $stickyNav.classList.add("navbar-sticky-moved-up")
        } else {
          $stickyNav.classList.remove("navbar-sticky-moved-up")
        }

        // apply transition
        if (scroll >= 250) {
          $stickyNav.classList.add("navbar-sticky-transitioned")
        } else {
          $stickyNav.classList.remove("navbar-sticky-transitioned")
        }

        // sticky on
        if (scroll >= 500) {
          $stickyNav.classList.add("navbar-sticky-on")
        } else {
          $stickyNav.classList.remove("navbar-sticky-on")
        }
      })
    }

    function _closeSidebarMenu() {
      const $button = document.querySelector(`.canvas-open .navbar-toggler`)

      if (!$button) {
        return
      }

      $button.click()
    }

    function handleLinkClick() {
      const $link = document.querySelectorAll(
        `a.nav-link:not(.dropdown-toggle)`
      )

      if (!$link) {
        return
      }

      for (const each of $link) {
        each.addEventListener("click", function (e) {
          _closeSidebarMenu()
        })
      }
    }

    function handleDropdown() {
      const $dropdowns = document.querySelectorAll(
        `.navbar-nav .nav-item.dropdown`
      )

      if (!$dropdowns) {
        return
      }

      for (var $dropdown of $dropdowns) {
        $dropdown.addEventListener(`click`, function (e) {
          const id = e.target.getAttribute(`id`)
          const $child = document.querySelector(
            `.dropdown-menu[aria-labelledby="${id}"]`
          )

          if (!$child) {
            return
          }

          $child.classList.toggle(`show`)
        })
      }
    }

    const closeMenu = () => {
      const menu = document.querySelector(
        `.canvas-open .navbar-inner button.navbar-toggler`
      )

      if (!menu) {
        return
      }

      menu.click()
    }

    setTimeout(handleLinkClick, 10)
    navMenu()
    handleDropdown()
  }, [])

  return (
    <React.Fragment>
      <header
        id="navbarSection"
        className={`Header navbar navbar-sticky navbar-expand-lg navbar-dark ${
          darkMode ? "navbar--dark-mode" : ``
        }`}
      >
        <Announcement></Announcement>
        <div className="container position-relative">
          <Link className="navbar-brand fade-in" to="/">
            <img className="navbar-brand-regular" src={logo} alt="brand logo" />
            <img
              className="navbar-brand-sticky lazyload"
              data-src={stickyLogo}
              alt="sticky brand logo"
            />
          </Link>

          <div className="navbar-mobile-actions">
            {/* {isDesktop || <CartButton type="mobile"></CartButton>} */}
            <CartEcwid isMobile={true}></CartEcwid>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="navbarToggler"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                {renderNav(page, createNavbarSingleItem)}

                {/* {isDesktop && (
                  <li className="nav-item">
                    <CartButton type="desktop"></CartButton>
                  </li>
                )} */}
                <li>
                  <CartEcwid></CartEcwid>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
