import React, { Component } from "react";

import "./Contact.scss";

function Contact() {
  return (
    <section id="contact" className="contact-area bg-gray ptb_50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Contact Us</h2>
              <p className="d-block mt-4">
                Contact us to learn more about how we can help grow your
                business. No strings attached.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-5">
            {/* Contact Us */}
            <div className="contact-us">
              <p className="mb-3">
                Send us an e-mail and we'll get back to you within 24 hours!
                After you hit "send message"{" "}
                <b>you'll be redirected to FormSpree page</b> so your e-mail can
                be sent. 🙂
              </p>
              <ul className="contact-social-icons">
                <li className="py-2">
                  <a
                    rel="noreferrer"
                    className="media"
                    href="https://fb.com/ezfyforshopify">
                    <div className="social-icon mr-3">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <span className="media-body align-self-center">
                      Follow us on Facebook
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="media"
                    rel="noreferrer"
                    href="https://m.me/ezfyforshopify">
                    <div className="social-icon mr-3">
                      <i className="fab fa-facebook-messenger" />
                    </div>
                    <span className="media-body align-self-center">
                      Contact via Facebook Messenger
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a
                    rel="noreferrer"
                    className="media"
                    target="_blank"
                    href="mailto:diego.boarutto.fortes@gmail.com">
                    <div className="social-icon mr-3">
                      <i className="fas fa-envelope-square" />
                    </div>
                    <span className="media-body align-self-center">
                      diego.boarutto.fortes@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-4 pt-md-0">
            {/* Contact Box */}
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form
                id="contact-form"
                method="POST"
                action="https://formspree.io/diego.boarutto.fortes@gmail.com">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="_replyto"
                        placeholder="Your email *"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Message *"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-lg btn-block mt-3">
                      <span className="text-white pr-3">
                        <i className="fas fa-paper-plane" />
                      </span>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
