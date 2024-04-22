import React, { useEffect, useState } from "react"
import "./ExitIntent.scss"
import { getCookie, removeCookie, setCookie } from "../utils/utils"

const ExitIntent = () => {
  const [visible, setVisible] = useState(false)

  const COOKIE_EXIT_INTENT = "EXIT_POPUP_MUST_SHOW"
  const options = {
    element_id: "",
    background_element_id: "",
    top_only: false,
    click_outside_to_close: true,
    delay: 500,
    path_regex: "",
    will_show: null,

    // internal
    delay_expired: false,
  }

  const hideExitIntent = () => {
    setVisible(false)
    setCookie(COOKIE_EXIT_INTENT, "false", 1)
  }
  useEffect(() => {
    const getExitIntent = (id, callback) => {
      var domEl = document.getElementById(id)
      if (domEl != null) {
        callback(domEl)
      }
    }

    const showExitIntent = () => {
      if (!options.delay_expired || getCookie(COOKIE_EXIT_INTENT) === "false") {
        // return
      }

      if (options.will_show != null) {
        const result = options.will_show()
        if (result === false) {
          //   return
        }
      }

      setVisible(true)

      setCookie(COOKIE_EXIT_INTENT, "false", 1)
    }

    // internal
    {
      setTimeout(function () {
        const pre = options.path_regex
        if (pre != null && pre != "") {
          const loc = window.location.pathname
          const re = new RegExp(pre)
          if (!re.test(loc)) {
            console.log(
              "Path does not match filter, exit popup will not be initialized"
            )
            return
          }
        }

        function handleMouseOut(event) {
          if (event.clientY <= 1 || !options.top_only) {
            showExitIntent()
          }
        }

        function handleMouseClick(event) {
          getExitIntent(options.element_id, function (e) {
            if (e.style.display == "block") {
              const rect = e.getBoundingClientRect()
              if (
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom
              ) {
                // in popup, ignore
              } else if (options.click_outside_to_close) {
                hideExitIntent()
              }
            }
          })
        }

        document.documentElement.addEventListener("mouseleave", handleMouseOut)
        document.documentElement.addEventListener("click", handleMouseClick)

        if (options.delay > 0) {
          setTimeout(function () {
            options.delay_expired = true
          }, options.delay)
        } else {
          options.delay_expired = true
        }
      }, 100)
    }
  }, [])

  return (
    <div className={`ExitIntent ${visible ? "ExitIntent--visible" : ""}`}>
      <div className="ExitIntent-content">
        This is the exit popup.
        <br />
        <input
          type="button"
          value="Close"
          onClick={() => {
            setVisible(false)
          }}
          onclick="hideExitIntent();"
        />
      </div>

      <div
        onClick={() => {
          hideExitIntent()
        }}
        className="ExitIntent-background"
      ></div>
    </div>
  )
}

export default ExitIntent
