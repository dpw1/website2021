import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"

import "./Contact.scss"

function Contact(props) {
  const { backgroundColor } = props

  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [error, setError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()

  function onCaptchaValidated(value) {
    console.log("Captcha value:", value)
    setIsFormValid(true)
  }

  const onSubmit = data => {
    console.log(data)

    if (!isFormValid) {
      setError(
        "Please do the ReCaptcha above before sending your email. Thank you!"
      )
      return
    }

    if (data._replyto.includes(".dk")) {
      return
    }

    setError("")
    setIsSendingMessage(true)

    window.document.querySelector(`#contact-form`).submit()
  }

  return (
    <section
      id="contact"
      style={backgroundColor ? { backgroundColor } : {}}
      className={`contact-area bg-gray ptb_50`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Contact Us</h2>
              <p className="d-block mt-4">
                Let us know what type of customizations you're looking for.
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
                Before you click on "send message" please make sure to do the{" "}
                <b>ReCaptcha</b> so your e-mail can be sent safely.
              </p>
              <ul className="contact-social-icons">
                <li className="py-2">
                  <a
                    rel="noreferrer"
                    className="media"
                    href="https://fb.com/ezfyforshopify"
                  >
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
                    href="https://m.me/ezfyforshopify"
                  >
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
                    href="mailto:ezfycode@gmail.com"
                  >
                    <div className="social-icon mr-3">
                      <i className="fas fa-envelope-square" />
                    </div>
                    <span className="media-body align-self-center">
                      ezfycode@gmail.com
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
                onSubmit={handleSubmit(onSubmit)}
                action={
                  isFormValid
                    ? "https://api.formcake.com/api/form/e60cc492-18b4-4e39-8f4f-09a2ef75ae3a/submission"
                    : ""
                }
              >
                <div className="row ">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="_replyto"
                        placeholder="Your email *"
                        required="required"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="_store"
                        ref={register}
                        placeholder="Your Shopify store URL (optional)"
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
                        ref={register}
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group form-group--recaptcha">
                      <ReCAPTCHA
                        sitekey={"6LfJbTgaAAAAAP0Q7ppx4JbrIIICEo0Z2YyFCAbK"}
                        onChange={onCaptchaValidated}
                      ></ReCAPTCHA>
                    </div>

                    <p className="form-error">{error ? error : ""}</p>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-lg btn-block mt-3">
                      <span className="text-white pr-3">
                        <i className="fas fa-paper-plane" />
                      </span>
                      {isSendingMessage ? "Loading..." : "Send Message"}
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
  )
}

export default Contact
