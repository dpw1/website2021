import React, { Component } from "react";
import "./ScrollToTop.scss";

function ScrollToTop() {
  return (
    <div id="scrollUp" title="Scroll To Top" style={{ display: "none" }}>
      <i className="fas fa-arrow-up" />
    </div>
  );
}

export default ScrollToTop;
