import React, { useState, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"
import { useStatePersist as useStickyState } from "use-state-persist"
import parse from "html-react-parser"
import { useMediaQuery } from "react-responsive"

import "./Cart.scss"
import TrashIcon from "./icons/TrashIcon"
import { siteRoutes } from "./../utils/siteRoutes"

import CartSteps from "./CartSteps"
import { formatCurrency } from "../utils/utils"

const CartNotes = () => {
  return (
    <React.Fragment>
      <h3 className="Cart-order-title">How it works</h3>
      <ul className="Cart-notes ">
        <li>
          After receiving your email we'll get back to you within 24h to confirm
          the tasks;
        </li>
        <li>
          Upon confirmation, we'll email you a request from our Shopify Partner
          account to access your store's theme and start working on the
          requested tasks;
        </li>
        <li>
          After everything is completed you can pay via PayPal, bank transfer or
          credit card.
        </li>
      </ul>
    </React.Fragment>
  )
}

const TasksTable = (tasks, handleDelete) => {
  return (
    <table className="Cart-tasks">
      <tr className="Cart-header">
        <th>#</th>
        <th>Tasks</th>
        <th>Price</th>
        <th></th>
      </tr>

      {tasks && tasks.length >= 1 ? (
        [...tasks].map((e, i) => {
          return (
            <tr className="Cart-task">
              <td>{parseInt(i + 1)}.</td>
              <td>{parse(e.title)}</td>
              <td>{formatCurrency(parseFloat(e.price))}</td>
              <td>
                <button
                  onClick={() => handleDelete(e.id)}
                  className="Cart-delete"
                >
                  <TrashIcon size={18}></TrashIcon>
                </button>
              </td>
            </tr>
          )
        })
      ) : (
        <tr className="Cart-empty">
          <td>1.</td>
          <td className="Cart-task">
            {" "}
            <b>No</b> tasks in cart,{" "}
            <Link className="custom-link" to={siteRoutes.services}>
              please add new tasks
            </Link>
            .
          </td>
          <td>$0.00</td>
          <td></td>
        </tr>
      )}
      <tr className="Cart-total">
        <td></td>
        <td>Total:</td>
        <td>
          {tasks && tasks.length >= 1
            ? formatCurrency(
                tasks
                  .map(e => parseFloat(e.price))
                  .reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                  )
              )
            : formatCurrency(0)}
        </td>
        <td></td>
      </tr>
    </table>
  )
}

function Cart(props) {
  const isDesktop = useMediaQuery({ query: "(min-width: 767px)" })

  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [error, setError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()

  const [tasks, setTasks] = useState(null)
  const [cartServices, setCartServices] = useStickyState("@services", [])

  function onCaptchaValidated(value) {
    console.log("Captcha value:", value)
    setIsFormValid(true)
  }

  const handleDelete = id => {
    const updated = [...cartServices].filter(e => e.id !== id)

    setCartServices(updated)
  }

  const onSubmit = data => {
    console.log(data)

    if (!isFormValid) {
      setError(
        "Please do the ReCaptcha above before sending your email. Thank you!"
      )
      return
    }

    setError("")
    setIsSendingMessage(true)

    window.document.querySelector(`#contact-form`).submit()
  }

  useEffect(() => {
    if (cartServices && cartServices.length >= 1) {
      console.log(JSON.stringify(cartServices))
    }
  }, [])

  return (
    <section id="CartSection" className={`Cart contact-area bg-gray ptb_50`}>
      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
       
            <div className="section-heading text-center">
              <h2 className="text-capitalize">Checkout</h2>
              <p className="d-block mt-4">Please review your order.</p>
            </div>
          </div>
        </div>
      </div> */}

      <CartSteps></CartSteps>
      <div className="container">
        <div className="  row justify-content-between">
          <div className="Cart-left-row col-12 col-md-6">
            {TasksTable(cartServices, handleDelete)}
            {isDesktop && <CartNotes></CartNotes>}
          </div>
          <div className="Cart-right-row   col-12 pt-4 pt-md-6 col-md-5">
            {/* Contact Box */}

            <h3 className="Cart-order-title">Order details</h3>
            <div className="contact-box text-center">
              {/* Contact Form */}
              <form
                id="contact-form"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                action="https://api.formcake.com/api/form/e60cc492-18b4-4e39-8f4f-09a2ef75ae3a/submission"
              >
                <div className="row">
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
                        required="required"
                        placeholder="Your Shopify store URL *"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="More details (optional)"
                        ref={register}
                        defaultValue={""}
                      />
                    </div>

                    <input
                      type="hidden"
                      className="form-control"
                      name="_tasks"
                      ref={register}
                      required="required"
                      value={JSON.stringify(cartServices)}
                    />
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
                      {isSendingMessage ? "Loading..." : "Submit Order"}
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

export default Cart
