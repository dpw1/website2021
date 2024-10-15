import React, { useState, useRef, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"

import "./Contact.scss"

function Contact(props) {
  const { backgroundColor } = props

  const [isSendingMessage, setIsSendingMessage] = useState(false)

  const [captchaError, setCaptchaError] = useState("")
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  // State for form data and errors
  const [formData, setFormData] = useState({
    email: "",
    reason: "",
    store: "",
    message: "",
  })

  useEffect(() => {
    window.emailjs = (function (e) {
      "use strict"
      class t {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "Network Error"
          ;(this.status = e), (this.text = t)
        }
      }
      const i = {
          origin: "https://api.emailjs.com",
          blockHeadless: !1,
          storageProvider: (() => {
            if ("undefined" != typeof localStorage)
              return {
                get: e => Promise.resolve(localStorage.getItem(e)),
                set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
                remove: e => Promise.resolve(localStorage.removeItem(e)),
              }
          })(),
        },
        r = e =>
          e
            ? "string" == typeof e
              ? { publicKey: e }
              : "[object Object]" === e.toString()
              ? e
              : {}
            : {},
        o = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "https://api.emailjs.com"
          if (!e) return
          const o = r(e)
          ;(i.publicKey = o.publicKey),
            (i.blockHeadless = o.blockHeadless),
            (i.storageProvider = o.storageProvider),
            (i.blockList = o.blockList),
            (i.limitRate = o.limitRate),
            (i.origin = o.origin || t)
        },
        a = async function (e, r) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          const a = await fetch(i.origin + e, {
              method: "POST",
              headers: o,
              body: r,
            }),
            s = await a.text(),
            n = new t(a.status, s)
          if (a.ok) return n
          throw n
        },
        s = (e, t, i) => {
          if (!e || "string" != typeof e)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account"
          if (!t || "string" != typeof t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin"
          if (!i || "string" != typeof i)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
        },
        n = e => e.webdriver || !e.languages || 0 === e.languages.length,
        l = () => new t(451, "Unavailable For Headless Browser"),
        c = (e, t) => {
          if ((e => !e.list?.length || !e.watchVariable)(e)) return !1
          ;((e, t) => {
            if (!Array.isArray(e)) throw "The BlockList list has to be an array"
            if ("string" != typeof t)
              throw "The BlockList watchVariable has to be a string"
          })(e.list, e.watchVariable)
          const i =
            ((r = t),
            (o = e.watchVariable),
            r instanceof FormData ? r.get(o) : r[o])
          var r, o
          return "string" == typeof i && e.list.includes(i)
        },
        d = () => new t(403, "Forbidden"),
        m = async (e, t, i) => {
          if (!t.throttle || !i) return !1
          ;((e, t) => {
            if ("number" != typeof e || e < 0)
              throw "The LimitRate throttle has to be a positive number"
            if (t && "string" != typeof t)
              throw "The LimitRate ID has to be a non-empty string"
          })(t.throttle, t.id)
          const r = t.id || e,
            o = await (async (e, t, i) => {
              const r = Number((await i.get(e)) || 0)
              return t - Date.now() + r
            })(r, t.throttle, i)
          return o > 0 || (await i.set(r, Date.now().toString()), !1)
        },
        h = () => new t(429, "Too Many Requests"),
        p = async (e, t, o, p) => {
          const u = r(p),
            b = u.publicKey || i.publicKey,
            g = u.blockHeadless || i.blockHeadless,
            f = u.storageProvider || i.storageProvider,
            w = { ...i.blockList, ...u.blockList },
            y = { ...i.limitRate, ...u.limitRate }
          if (g && n(navigator)) return Promise.reject(l())
          if (
            (s(b, e, t),
            (e => {
              if (e && "[object Object]" !== e.toString())
                throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"
            })(o),
            o && c(w, o))
          )
            return Promise.reject(d())
          if (await m(location.pathname, y, f)) return Promise.reject(h())
          const v = {
            lib_version: "4.4.1",
            user_id: b,
            service_id: e,
            template_id: t,
            template_params: o,
          }
          return a("/api/v1.0/email/send", JSON.stringify(v), {
            "Content-type": "application/json",
          })
        },
        u = async (e, t, o, p) => {
          const u = r(p),
            b = u.publicKey || i.publicKey,
            g = u.blockHeadless || i.blockHeadless,
            f = i.storageProvider || u.storageProvider,
            w = { ...i.blockList, ...u.blockList },
            y = { ...i.limitRate, ...u.limitRate }
          if (g && n(navigator)) return Promise.reject(l())
          const v = (e =>
            "string" == typeof e ? document.querySelector(e) : e)(o)
          s(b, e, t),
            (e => {
              if (!e || "FORM" !== e.nodeName)
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form"
            })(v)
          const j = new FormData(v)
          return c(w, j)
            ? Promise.reject(d())
            : (await m(location.pathname, y, f))
            ? Promise.reject(h())
            : (j.append("lib_version", "4.4.1"),
              j.append("service_id", e),
              j.append("template_id", t),
              j.append("user_id", b),
              a("/api/v1.0/email/send-form", j))
        }
      var b = { init: o, send: p, sendForm: u, EmailJSResponseStatus: t }
      return (
        (e.EmailJSResponseStatus = t),
        (e.default = b),
        (e.init = o),
        (e.send = p),
        (e.sendForm = u),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
      )
    })({})
  }, [])

  function onCaptchaValidated(value) {
    console.log("Captcha value:", value)
    setIsFormValid(true)
  }

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    const newErrors = {}

    const reason = document.querySelector(`[name="reason"]`).value.trim()

    if (reason === "") {
      setCaptchaError("Please select an inquiry type.")
      return
    }

    if (!isFormValid) {
      setCaptchaError(
        "Please do the ReCaptcha above before sending your email."
      )
      return
    } else {
      setCaptchaError("")
      setErrors({})
    }

    setIsSendingMessage(true)

    emailjs
      .sendForm("service_ptzixz6", "template_93ge117", form.current, {
        publicKey: "aa8g_QZtxNhaZJOYH",
      })
      .then(
        () => {
          setIsSendingMessage(false)
          alert("Email sent successfully!")
        },
        error => {
          console.log("FAILED...", error.text)
        }
      )
  }

  const handleChange = e => {
    const { name, value } = e.target

    // Update form data
    setFormData({
      ...formData,
      [name]: value,
    })

    console.log("validating", name)
    // Validate input
    validateField(name, value)
  }

  // Validation function
  const validateField = (name, value) => {
    let isValid = true

    if (name === "reason") {
      isValid = false
      if (!value || value === "") {
        setErrors({
          [name]: "Please select an inquiry type",
        })
      }
    }

    if (isValid) {
      setErrors({})
    }
  }

  const onSubmit = data => {
    console.log(data)

    // if (!isFormValid) {
    //   setError(
    //     "Please do the ReCaptcha above before sending your email. Thank you!"
    //   )
    //   return
    // }

    if (data._replyto.includes(".dk")) {
      return
    }

    // setError("")
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
                ref={form}
                id="contact-form"
                method="POST"
                onSubmit={sendEmail}
              >
                <div className="row ">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="reply_to"
                        placeholder="Your email *"
                        required="required"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <select
                    onChange={handleChange}
                    name="reason"
                    class="form-control"
                  >
                    <option value="" disabled selected>
                      Select an inquiry type
                    </option>
                    <option value="Quote for custom coding">
                      Quote for custom coding
                    </option>
                    <option value="I purchased a code snippet and need assistance">
                      I purchased a product and need assistance
                    </option>
                    <option value="Question about code snippet">
                      Question about product
                    </option>
                  </select>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="_store"
                        placeholder="Your Shopify store URL (optional)"
                        onChange={handleChange}
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
                        onChange={handleChange}
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

                    <p className="form-error">
                      {Object.keys(errors).length >= 1
                        ? Object.values(errors).map((error, index) => (
                            <span key={index} className="error">
                              {error}
                            </span>
                          ))
                        : ""}
                      {captchaError && (
                        <span className="error">{captchaError}</span>
                      )}
                    </p>
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
