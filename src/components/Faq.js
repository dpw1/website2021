import React, { Component } from "react";
import "./Faq.scss";
import { groupItems } from "../utils/utils";

const faqId = `apolo-accordion`;

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
    question: `What is the difference between an app and a section?`,
    answer: () => (
      <p>
        Sections are coded directly into your theme which helps to optimize the
        wensite speed since there are no external libraries being loaded.
        Although most apps are undoubtedly helpful, they inevitably end up
        slowing down your website. It's best to avoid them whenever possible if
        you aim for an optimized store. You can read in details how the
        excessive usage of apps can negatively affect your store{" "}
        <a
          rel="noreferrer"
          className="custom-link"
          target="_blank"
          href="https://outofthesandbox.com/blogs/shopify-theme-blog/apps-speed?rfsn=4557612.d5a506">
          clicking here
        </a>
        .
      </p>
    ),
  },
  {
    question: `What exactly happens after I purchase a section?`,
    answer: () => (
      <p>
        Immediately after your purchase you'll receive the files and
        instructions to install the section onto your store. You can also
        request a free installation from us. Feel free to{" "}
        <a className="custom-link scroll" href="#contact">
          contact us
        </a>{" "}
        before purchasing if you have any questions or concerns!
      </p>
    ),
  },

  {
    question: `What payment methods are available?`,
    answer: () => (
      <p>
        For custom services we currently accept{" "}
        <span className="custom-emphasis">PayPal</span> and
        <span className="custom-emphasis"> Bank Transfer</span>. We have bank
        accounts in Australia, the United States &amp; Europe, so you don't have
        to worry about overseas fees if you reside in any of those places.
      </p>
    ),
  },
  {
    question: `What other type of services do you offer?`,
    answer: () => (
      <span>
        <p>We can help you with:</p>
        <ul>
          <li>Speed optimization;</li>
          <li>Customize any part of your website;</li>
          <li>bug fixes.</li>
        </ul>
        Please{" "}
        <a className="custom-link scroll" href="#contact">
          send us an email
        </a>{" "}
        for any questions or requests you may have, we'll return within 24
        hours.
      </span>
    ),
  },
  {
    question: `I want a custom theme for my business. Can you build one?`,
    answer: () => (
      <p>
        Yes! In such scenarios we'll recommend you a good{" "}
        <a
          rel="noreferrer"
          className="custom-link"
          href="https://outofthesandbox.com/?rfsn=4557612.d5a506"
          target="_blank">
          Turbo theme from our partner Out of The Sandbox
        </a>{" "}
        and work toogether to optimize your store both for conversion rate and
        speed. If you are on a tighter budget we can also work on top of a free
        Shopify theme if you prefer.
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
        100% safe. We take privacy and security seriously, therefore after
        clicking on "Buy Now" you'll be redirected to a safe checkout payment
        platform where you can pay with PayPal or Credit Card.
      </p>
    ),
  },
  {
    question: `I have an idea for a section. Can you create it?`,
    answer: () => (
      <p>
        Yes! Please{" "}
        <a className="custom-link scroll" href="#contact">
          send us an email
        </a>{" "}
        with further information, we'll reply within 24 hours.
      </p>
    ),
  },
];

const FaqItem = (props) => {
  const { question, answer, isOpen } = props;
  const newLine = false;

  const id = question.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return (
    <div className="card my-2">
      {/* Card Header */}
      <div className="card-header">
        <h2 className="mb-0">
          <button
            className={`btn p-2 ${isOpen || "collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}>
            {question}
          </button>
        </h2>
      </div>
      <div
        id={id}
        className={isOpen ? "collapse show" : "collapse"}
        data-parent={`#${faqId}`}>
        {/* Card Body */}
        <div className="card-body">{answer()}</div>
      </div>
    </div>
  );
};

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
                            isOpen={index === 0 && i === 0 && true}></FaqItem>
                        ))}
                      </div>
                    ),
                  )}
                </div>
              </div>
              <span className="d-block text-center mt-5">
                Have any other questions? <br />
                We'd be happy to hear from you!
                <a
                  className="custom-link scroll"
                  href="#contact"
                  data-scroll-offset={-60}>
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
  );
}

export default Faq;
