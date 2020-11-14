import React, { useState, useRef } from "react";
import "./FacebookButton.scss";

function FacebookButton(props) {
  return (
    <div className="fb-livechat">
      <a
        href="https://m.me/ezfyforshopify/"
        title="Send us a message on Facebook"
        className="ctrlq fb-button"></a>
    </div>
  );
}

export default FacebookButton;
