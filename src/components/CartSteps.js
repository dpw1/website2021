import React from "react"

import "./CartSteps.scss"
import ChooseServicesIcon from "./icons/ChooseServicesIcon"
import EmailUsIcon from "./icons/EmailUsIcon"
import SelectServiceIcon from "./icons/SelectServiceIcon"
import WomanWorking from "./icons/WomanWorking"

export default function CartSteps() {
  return (
    <div className="CartSteps ptb_50">
      <div className="container">
        <div className=" CartSteps-container">
          <div className="CartSteps-info CartSteps-row">
            <h1 className="CartSteps-title">Checkout</h1>
            <h2 className="CartSteps-subtitle">
              Custom features in your theme fastly and easily. No delays, no
              headaches. Pay only upon completion.
            </h2>
          </div>

          <div className="CartSteps-items CartSteps-row ">
            <div className="CartSteps-item">
              <figure className="CartSteps-figure">
                <SelectServiceIcon></SelectServiceIcon>
              </figure>
              <h3 className="CartSteps-text">Choose your services</h3>
            </div>
            <div className="CartSteps-item">
              <figure className="CartSteps-figure">
                <EmailUsIcon></EmailUsIcon>
              </figure>
              <h3 className="CartSteps-text">Submit the order</h3>
            </div>
            <div className="CartSteps-item">
              <figure className="CartSteps-figure">
                <WomanWorking></WomanWorking>
              </figure>
              <h3 className="CartSteps-text">Pay only after it's done.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
