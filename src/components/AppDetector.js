import React from "react"
import { useState, useEffect } from "react"

import "./AppDetector.scss"

function AppDetector(props) {
  return (
    <div className="AppDetector">
      <input value="https://www.andreaiyamah.com/" id="storeURL" type="text" />
      <button
        onClick={() => {
          const $url = document.querySelector(`#storeURL`)

          const url = $url.textContent.trim()

          ;(async () => {
            var response = await fetch(url)
            switch (response.status) {
              // status "OK"
              case 200:
                var template = await response.text()

                console.log(template)
                break
              // status "Not Found"
              case 404:
                console.log("Not Found")
                break
            }
          })()
        }}
      >
        Send
      </button>
    </div>
  )
}

export default AppDetector
