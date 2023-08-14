import React, { Component, useState, useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"

import Contact from "../components/Contact"
import Footer from "../components/Footer"

import Shop from "../components/Shop"
import { SEO } from "../components/SEO"

const EcwidLicense = props => {
  useEffect(() => {
    setTimeout(window.ezfy.start, 50)
    setTimeout(window.ezfy.removeLoader, 50)
  }, [])

  return (
    <React.Fragment>
      <SEO title="EZFY Plugins - Ecwid Privacy Policy"></SEO>

      <Header page="shop" darkMode={true}></Header>
      <ScrollToTop></ScrollToTop>
      <section className="License">
        <div className="container">
          <h3 className="License-title">
            Ecwid Upsell Checkout App by EZFY - Privacy Policy
          </h3>
          <div className="License-text">
            <>
              <p>
                We understand and respect your privacy. This Privacy Policy
                outlines how the Upsell Checkout app interacts with your website
                and data when used in conjunction with the Ecwid e-commerce
                platform. By using the App, you agree to the terms described in
                this Privacy Policy.
              </p>
              <h3>1. Code Injection and Data Handling</h3>
              <p>
                <strong>1.1 Purpose of the App:</strong> The Upsell Checkout app
                is designed to inject code onto your website for enhancing the
                checkout experience through the Ecwid e-commerce platform. We do
                not collect, store, or process any user data, personal
                information, order details, or sensitive data. All data handled
                is exclusively used on your own website.
              </p>
              <h3>2. Data Storage and Access</h3>
              <p>
                <strong>2.1 Ecwid's Database:</strong> The Upsell Checkout app
                does not store any data. All relevant data, including user data,
                order information, and other relevant data, is managed and
                stored exclusively within Ecwid's own database.
              </p>
              <p>
                <strong>2.2 No User Data Access:</strong> The app developer does
                not have access to any user data, order data, or other sensitive
                information.
              </p>
              <h3>3. Code Injection and Functionality</h3>
              <p>
                <strong>3.1 Website Interaction:</strong> The Upsell Checkout
                app interacts with your website only through the code injection
                process to enhance the checkout experience. It does not retrieve
                or manipulate data from your website.
              </p>
              <h3>4. Third-Party Services</h3>
              <p>
                <strong>4.1 Ecwid Integration:</strong> The Upsell Checkout app
                integrates seamlessly with the Ecwid e-commerce platform. Any
                data interactions and storage are governed by Ecwid's privacy
                and security policies.
              </p>
              <h3>5. Changes to This Privacy Policy</h3>
              <p>
                <strong>5.1 Policy Updates:</strong> We reserve the right to
                update and modify this Privacy Policy as needed. Any significant
                changes will be communicated through the app or other
                appropriate means.
              </p>
              <h3>6. Contact Us</h3>
              <p>
                <strong>6.1 Inquiries:</strong> If you have any questions
                regarding this Privacy Policy or the data interaction practices
                of the Upsell Checkout app, please contact us using the contact
                box below.
              </p>
            </>
          </div>
        </div>
      </section>
      <Contact></Contact>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default EcwidLicense
