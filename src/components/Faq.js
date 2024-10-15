import React, { useEffect, useLayoutEffect } from "react"
import "./Faq.scss"
import { groupItems } from "../utils/utils"
import { Link } from "gatsby"
import { siteRoutes } from "./../utils/siteRoutes"

const faqId = `apolo-accordion`

const questions = [
  {
    question: `I need some custom code done. What is your hourly price? How long does it take?`,
    answer: () => (
      <p>
        Sure! We charge $40 USD/hour, some type of work may take even less than
        an hour. Please{" "}
        <a className="custom-link scroll" href="#contact">
          send us an email
        </a>{" "}
        with further information, we'll reply within 24 hours.
      </p>
    ),
  },
  {
    question: `Can you build a specific code snippet that I can re-use in the future?`,
    answer: () => (
      <p>
        Absolutely, let us know what you're looking for. We can build something
        and include installation instructions so you can keep reusing it in the
        future.
      </p>
    ),
  },
  {
    question: `Can you make my website faster?`,
    answer: () => (
      <p>
        We can surely help you with optimization! Every website requires a
        different a tailored approach. Our optimization process typically
        involves a thorough analysis of your site's performance metrics (via
        PageSpeed Insights), including page load times, server response times,
        and overall site speed. Based on this analysis, we'll come up with the
        most appropriate solution for your case.
      </p>
    ),
  },

  {
    question: `What does being a 'top #4' Shopify Partner mean?`,
    answer: () => (
      <p>
        At the official Shopify Forum, whenever your answer is helpful you
        receive a like. In my case, these answers are technical, Shopify
        code-related questions. I am currently the top #4 all time most liked
        Shopify Partner. <br />
        <br />
        <a
          target="_blank"
          className="custom-link"
          href="https://community.shopify.com/c/kudos/leaderboardpage/board-id/technical-qa/timerange/all/tab/authors"
        >
          Here you can see the rank
        </a>
        , and here you can see{" "}
        <a
          target="_blank"
          className="custom-link"
          href="https://community.shopify.com/c/user/viewprofilepage/user-id/577094"
        >
          my profile.
        </a>
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
            <span className="FAQ-question">{question}</span>
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
                  <div className="accordion-group col-12 col-lg-12">
                    {" "}
                    {questions.map((e, i) => (
                      <FaqItem
                        key={i}
                        question={e.question}
                        answer={e.answer}
                        isOpen={i === 0 && true}
                      ></FaqItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
