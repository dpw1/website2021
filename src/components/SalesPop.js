import React, { useEffect, useState } from "react"
import "./SalesPop.scss"
import { date } from "faker"
import moment from "moment"
import { findFlagUrlByCountryName } from "country-flags-svg"

import parse from "html-react-parser"

import { useStaticQuery, graphql, Link } from "gatsby"
import globalUtils, { sleep } from "../../global-utils"
import { countries, productsQuery } from "../utils/utils"

function SalesPop(props) {
  const [products, setProducts] = useState(null)
  let data = productsQuery()

  useEffect(() => {
    const _products = globalUtils.sanitizeProducts(data)

    setProducts(_products)
  }, [])

  useEffect(() => {
    if (!products) {
      return
    }

    window.ezfySalesPop = window.ezfySalesPop || {}

    ezfySalesPop = (function () {
      const initialDelay = 10
      const durationOfMessage = 10
      const delayForNextMessage = 10
      const cookieName = `ezfySalesPop`

      window.salesPopUrl = null
      window.removeInitialDelay = false

      function _setCookie(name, value, days) {
        var expires = ""
        if (days) {
          var date = new Date()
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
          expires = "; expires=" + date.toUTCString()
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/"
      }

      function _getCookie(name) {
        var nameEQ = name + "="
        var ca = document.cookie.split(";")
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i]
          while (c.charAt(0) == " ") c = c.substring(1, c.length)
          if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length)
        }
        return null
      }

      function _eraseCookie(name) {
        document.cookie =
          name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      }

      function randomNoRepeats(array) {
        var copy = array.slice(0)
        return function () {
          if (copy.length < 1) {
            copy = array.slice(0)
          }
          var index = Math.floor(Math.random() * copy.length)
          var item = copy[index]
          copy.splice(index, 1)
          return item
        }
      }

      function updatePopupData($popup) {
        const $image = $popup.querySelector(`.ezfy-sales-image`)
        const $country = $popup.querySelector(`.ezfy-sales-country`)
        const $product = $popup.querySelector(`.ezfy-sales-product`)
        const $date = $popup.querySelector(`.ezfy-sales-date`)

        console.log(products)

        const _country = randomNoRepeats(countries)
        const _product = randomNoRepeats(products)

        const country = _country()
        const flag = findFlagUrlByCountryName(country)
        const product = _product()
        window.salesPopUrl = `${window.location.origin}/shop/${product.slug}`

        $image.setAttribute(
          "style",
          `background-image: url("${product.thumbnail}");`
        )
        $country.innerHTML = `<span>${country}</span><img class="ezfy-sales-flag" src="${flag}"/>`
        $date.textContent = moment(date.recent()).fromNow()
        $product.textContent = product.title
      }

      async function showPopup() {
        if (!isPopupAllowed()) {
          return
        }

        const $popup = window.document.getElementById("ezfySalesPop")

        const _delay = window.removeInitialDelay
          ? delayForNextMessage * 1000
          : initialDelay * 1000
        const _duration = durationOfMessage * 1000

        console.log(
          `START waiting       ${_delay} seconds, showing for  ${_duration} ...`
        )

        await new Promise(res => setTimeout(res, _delay))
        updatePopupData($popup)
        $popup.classList.remove("ezfy-sales--hide")
        await new Promise(res => setTimeout(res, _duration))
        $popup.classList.add("ezfy-sales--hide")
        window.removeInitialDelay = true
        showPopup()
      }

      function handleClick() {
        const $popup = window.document.getElementById("ezfySalesPop")

        $popup.addEventListener("click", async function (e) {
          const id = e.target.id

          const url = window.salesPopUrl

          console.log("youre going to url ", url)

          /* Close */
          if (id === "ezfySalesPopClose") {
            _setCookie(cookieName, "true", 1)

            $popup.classList.add("ezfy-sales--hide")
            await sleep(delayForNextMessage * 1000)
            return $popup.remove()
          }

          if (url) {
            window.location.href = url
          }
        })
      }

      function isPopupAllowed() {
        const cookie = _getCookie(cookieName)

        console.log(cookie)
        if (!cookie) {
          return true
        }

        return false
      }

      return {
        init: function () {
          if (!isPopupAllowed()) {
            return
          }

          showPopup()
          handleClick()
        },
      }
    })()

    ezfySalesPop.init()
  }, [products])

  return (
    <div className="ezfy-sales ezfy-sales--hide" id="ezfySalesPop">
      {/**/}
      <div data-v-e8e310d2 className="ezfy-sales-pop ezfy-sales-pop--hide">
        <div
          data-v-e8e310d2
          data-layout="layout2"
          data-theme="active"
          data-theme-type="halloween_premium"
          className="ezfy-sales-wrap wrapLayout__ezfy"
        >
          <div data-v-e8e310d2 className="col1__ezfy">
            <div
              data-v-e8e310d2
              className="image__ezfy ezfy-sales-image"
              style={{
                backgroundImage: `url("https://s3.amazonaws.com/static.e-junkie.com/products/images/1695842-1.png")`,
              }}
            />
          </div>
          <div
            id="ezfySalesPopClose"
            data-v-e8e310d2
            className="ezfy-sales-close close__ezfy"
          >
            <svg
              data-v-e8e310d2
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21.9 21.9"
              enableBackground="new 0 0 21.9 21.9"
            >
              <path
                data-v-e8e310d2
                d="M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z"
              />
            </svg>
          </div>
          <div data-v-e8e310d2 className="col2__ezfy">
            <div data-v-e8e310d2 className="line1__ezfy">
              <span className="ezfy-sales-details" data-v-e8e310d2>
                <span>Someone in</span>{" "}
                <span className="ezfy-sales-country">country</span>{" "}
                <span>recently purchased:</span>
              </span>
            </div>
            <div
              data-v-e8e310d2
              className="line2__ezfy ezfy-sales-product-wrapper"
            >
              <span data-v-e8e310d2>
                <span data-v-e8e310d2 className="ezfy-sales-product">
                  Product Name
                </span>
              </span>
            </div>
            <div data-v-e8e310d2 className="line3__ezfy">
              <span
                data-v-e8e310d2
                className="timer__ezfy ezfy-sales-date"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesPop
