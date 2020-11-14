import React, { Component } from "react";

import "./PaypalCheckout.scss";

function PaypalCheckout(props) {
  // const {selected} = props;
  return (
    <div id="smart-button-container">
      <div style={{ textAlign: "center" }}>
        <div id="paypal-button-container" />
      </div>
    </div>
  );
}

export default PaypalCheckout;
