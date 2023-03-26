import React from "react"

import "./Footer.scss"

import { renderNav } from "../utils/utils"
import { Link } from "gatsby"

import Popup from "./Popup"

const footerItem = props => (
  <li className="py-2">
    {props.scroll ? (
      <a
        className={props.scroll ? "scroll" : undefined}
        href={props.url}
        data-scroll-offset={props.offset}
      >
        {props.name}
      </a>
    ) : (
      <Link className="" to={props.url}>
        {props.name}
      </Link>
    )}
  </li>
)
function Footer(props) {
  // const { page } = props

  return (
    <React.Fragment>
      <div className="height-emulator d-none d-lg-block"></div>
      <footer id="footerSection" className="footer-area footer-fixed">
        {/* Footer Top */}
        <div className="footer-top ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-3 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Logo */}
                  <Link className="navbar-brand fade-in" to="/">
                    <img
                      className="lazyload logo"
                      data-src={require("../copy/img/logo/ezfy-logo-small.png")}
                      alt="EZFY's logo."
                    />
                  </Link>
                  <p className="mt-2 mb-3">
                    Coded with <span style={{ color: "#DC143C" }}>❤</span> in
                    Porto, Portugal.
                  </p>
                  {/* Social Icons */}
                  <div className="social-icons d-flex">
                    <a
                      rel="noopener noreferrer"
                      className="facebook"
                      target="_blank"
                      href="https://fb.com/ezfyforshopify"
                    >
                      <i className="fab fa-facebook-f" />
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="facebook-messenger"
                      target="_blank"
                      href="https://m.me/ezfyforshopify"
                    >
                      <i className="fab fa-facebook-messenger" />
                      <i className="fab fa-facebook-messenger" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      className="google-plus"
                      target="_blank"
                      href="mailto:ezfycode@gmail.com"
                    >
                      <i className="fas fa-envelope-square" />
                      <i className="fas fa-envelope-square" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                  {/* Footer Title */}
                  <h3 className="footer-title mb-2">Useful Links</h3>
                  <ul>{renderNav("footer", footerItem)}</ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-6">
                <img
                  className="footer-image lazyload"
                  data-src={require("../copy/img/bg/porto-picture.jpg")}
                  alt="City of Porto located in Portugal"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                  {/* Copyright Left */}
                  <div className="copyright-center">
                    © Copyrights <span id="currentYear" /> EZFY All rights
                    reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
