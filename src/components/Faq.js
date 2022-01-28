import React, { useEffect, useLayoutEffect } from "react"
import "./Faq.scss"
import { groupItems } from "../utils/utils"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"

const faqId = `apolo-accordion`

const questions = [
  {
    question: `What is a Shopify section?`,
    answer: () => (
      <p>
        Shopify sections are customizable elements of a page which can have
        multiple functions. They're super lightweight since they're coded into
        your theme.
      </p>
    ),
  },
  {
    question: `I want a custom theme for my business. Can you build one?`,
    answer: () => (
      <p>
        We do not code themes from scratch, however we already do have some
        premium quality themes built by us at a pretty accessible price. Just
        send us an email so we can send you a live preview of them!
      </p>
    ),
  },
  {
    question: `Do you have a portfolio of previously done websites?`,
    answer: () => (
      <p>
        Yes! Please{" "}
        <a className="custom-link" href="/portfolio">
          click here
        </a>{" "}
        to take a look at it.
      </p>
    ),
  },
  {
    question: `How safe is purchasing from this website?`,
    answer: () => (
      <p>
        100% safe. We take privacy and security very seriously. When making a
        purchase in our{" "}
        <Link to={siteRoutes.shop} className="custom-link">
          shop
        </Link>{" "}
        you'll be redirected to a safe checkout payment platform where you can
        pay with PayPal or Credit/Debit card (processed via Stripe).
      </p>
    ),
  },
  {
    question: `Is there a refund policy for the EZFY plugins?`,
    answer: () => (
      <p>
        Taking into consideration that it's a digital product, we do not offer
        refunds for our copy & paste plugins. However, if you would like to test
        some plugin in your theme beforehand, please contact us!
      </p>
    ),
  },
  {
    question: `Can you customize a plugin that I have purchased from your website?`,
    answer: () => (
      <p>
        Absolutely! Additional customizations have an additional fee depending
        on what is needed. Please contact us before your purchase for more
        information.
      </p>
    ),
  },
  {
    question: `I need some custom code done. Can you do it?`,
    answer: () => (
      <p>
        Sure! Please{" "}
        <a className="custom-link scroll" href="#contact">
          send us an email
        </a>{" "}
        with further information, we'll reply within 24 hours.
      </p>
    ),
  },
  {
    question: `Can you prove that you are a certified Shopify Partner?`,
    answer: () => (
      <p>
        Yes! Please access{" "}
        <a
          href="https://community.shopify.com/c/user/viewprofilepage/user-id/577094"
          target="_blank"
          className="custom-link"
        >
          my profile
        </a>{" "}
        in the Shopify Forum and you'll see "Shopify Partner" written below my
        username, "diego_ezfy". Only developers who had undergone Shopify's
        certification process receive that title.
      </p>
    ),
  },
  {
    question: `How much do you charge?`,
    answer: () => (
      <p>
        We charge $50 USD/hour. If anything we coded breaks we fix it free of
        charge within the next 15 days as well.
      </p>
    ),
  },
]

const FaqItem = props => {
  const { question, answer, isOpen } = props
  // const newLine = false

  useEffect(() => {}, [])

  const handleCollpse = btn => {}

  const id = question.replace(/[^a-zA-Z]/g, "").toLowerCase()
  return (
    <div className="card my-2">
      {/* Card Header */}
      <div className="card-header">
        <h2 className="mb-0">
          <button
            className={`btn p-2 ${isOpen || "collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            onClick={e => {
              const $el = e.target
              const content = $el.getAttribute(`data-target`)
              const $content = document.querySelector(`${content}`)

              $el.classList.toggle(`collapsed`)
              $content.classList.toggle(`show`)
            }}
          >
            {question}
          </button>
        </h2>
      </div>
      <div
        id={id}
        className={isOpen ? "collapse show" : "collapse"}
        data-parent={`#${faqId}`}
      >
        {/* Card Body */}
        <div className="card-body">{answer()}</div>
      </div>
    </div>
  )
}

function Faq() {
  return (
    <section id="faq" className="section faq-area ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Frequently Asked Questions</h2>
              <p className="d-sm-block mt-4">
                Some of the most common questions related to our services.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            {/* FAQ Content */}
            <div className="faq-content">
              {/* Accordion */}
              <div className="accordion pt-5" id="apolo-accordion">
                <div className="row">
                  {groupItems(questions, Math.round(questions.length / 2)).map(
                    (children, index) => (
                      <div className="accordion-group col-12 col-lg-6">
                        {children.map((e, i) => (
                          <FaqItem
                            key={i}
                            question={e.question}
                            answer={e.answer}
                            isOpen={index === 0 && i === 0 && true}
                          ></FaqItem>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
              <span className="d-block text-center mt-5">
                Have any other questions? <br />
                We'd be happy to hear from you!
                <a
                  className="custom-link scroll"
                  href="#contact"
                  data-scroll-offset={-60}
                >
                  {" "}
                  Click here to contact us
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
