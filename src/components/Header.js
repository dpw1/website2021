import React, { useEffect } from "react"
import "./Header.scss"
import logo from "../copy/img/logo/ezfy-logo-transparent-small.png"
import stickyLogo from "../copy/img/logo/ezfy-logo-small.png"

import { renderNav } from "../utils/utils"

import $ from "jquery"
import { Link } from "gatsby"

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
        </Link>
      )}
    </li>
  )
}

function Header(props) {
  // const isDesktop = useMediaQuery("only screen and (min-width: 991px)")

  const { page, darkMode } = props

  useEffect(() => {
    $(document).ready(function () {
      checkWidth(true)
      $(window).resize(function () {
        checkWidth(false)
      })
    })
    function checkWidth(init) {
      // If browser resized, check width again
      if ($(window).width() <= 991) {
        $(".dropdown-submenu a").on("click", function (e) {
          $(this).next("ul").toggle()
          e.stopPropagation()
          e.preventDefault()
        })
      }
    }
    function navMenu() {
      // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
      $('[data-toggle="navbarToggler"]').click(function () {
        $(".navbar").toggleClass("active")
        $("body").toggleClass("canvas-open")
      })
      // MAIN MENU TOGGLER ICON
      $(".navbar-toggler").click(function () {
        $(".navbar-toggler-icon").toggleClass("active")
      })
      // NAVBAR STICKY
      var $stickyNav = $(".navbar-sticky")
      $(window).on("scroll load", function () {
        var scroll = $(window).scrollTop()
        if (scroll >= 120) {
          $stickyNav.addClass("navbar-sticky-moved-up")
        } else {
          $stickyNav.removeClass("navbar-sticky-moved-up")
        }
        // apply transition
        if (scroll >= 250) {
          $stickyNav.addClass("navbar-sticky-transitioned")
        } else {
          $stickyNav.removeClass("navbar-sticky-transitioned")
        }
        // sticky on
        if (scroll >= 500) {
          $stickyNav.addClass("navbar-sticky-on")
        } else {
          $stickyNav.removeClass("navbar-sticky-on")
        }
      })
    }
    setTimeout(navMenu, 10)
  }, [])

  return (
    <React.Fragment>
      <header
        id="navbarSection"
        className={`navbar navbar-sticky navbar-expand-lg navbar-dark ${
          darkMode && "navbar--dark-mode"
        }
          `}
      >
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
            {/* {!isDesktop && (
              <a
                href="https://www.fatfreecartpro.com/ecom/gb.php?c=cart&ejc=2&cl=374804"
                target="ej_ejc"
                className="nav-link ec_ejc_thkbx cart-button cart-button--mobile"
                onclick="return EJEJC_lc(this);"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.997 511.997"
                  style={{ enableBackground: "new 0 0 511.997 511.997" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path d="M405.387,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84    S440.588,362.612,405.387,362.612z M405.387,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536    c14.083,0,25.536,11.453,25.536,25.536S419.47,451.988,405.387,451.988z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M507.927,115.875c-3.626-4.641-9.187-7.348-15.079-7.348H118.22l-17.237-72.12c-2.062-8.618-9.768-14.702-18.629-14.702    H19.152C8.574,21.704,0,30.278,0,40.856s8.574,19.152,19.152,19.152h48.085l62.244,260.443    c2.062,8.625,9.768,14.702,18.629,14.702h298.135c8.804,0,16.477-6.001,18.59-14.543l46.604-188.329    C512.849,126.562,511.553,120.516,507.927,115.875z M431.261,296.85H163.227l-35.853-150.019h341.003L431.261,296.85z" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M173.646,362.612c-35.202,0-63.84,28.639-63.84,63.84s28.639,63.84,63.84,63.84s63.84-28.639,63.84-63.84    S208.847,362.612,173.646,362.612z M173.646,451.988c-14.083,0-25.536-11.453-25.536-25.536s11.453-25.536,25.536-25.536    s25.536,11.453,25.536,25.536S187.729,451.988,173.646,451.988z" />
                    </g>
                  </g>
                </svg>
              </a>
            )} */}

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
              </ul>
            </nav>
          </div>
        </div>

        <div
          className="fb-customerchat"
          attribution={"setup_tool"}
          page_id="2076491679249035"
          greeting_dialog_delay="22"
          logged_in_greeting="Hi there, Diego here! How may I help you? 🙂"
          logged_out_greeting="Hi there, Diego here! How may I help you? 🙂"
        ></div>
      </header>
    </React.Fragment>
  )
}

export default Header
