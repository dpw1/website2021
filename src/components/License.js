import React from "react"
import "./License.scss"

import { Link } from "gatsby"
import { siteRoutes } from "../utils/siteRoutes"

function License(props) {
  return (
    <section className="License">
      <div className="container">
        <h3 className="License-title">
          EZFY Plugins - License and Terms of Use
        </h3>
        <div className="License-text">
          <p>
            EZFY plugins come with a simple unlimited use license, which means
            they can be used an unlimited amount of times in one (1) Shopify
            store.
          </p>

          <p>
            You are given permission to use any EZFY plugin on both personal and
            commercial Shopify projects. Some common guidelines and limitations
            apply within this license and <b>you may not:</b>
          </p>

          <ol>
            <li>
              1. Sell or redistribute any EZFY plugins as a service or as a
              product; We prohibit a directly resell, or provide as free, of
              downloaded items from our service.
            </li>
            <li>2. Claim ownership of any EZFY plugins;</li>
            <li>3. Copy and offer any EZFY plugins on a similar service;</li>
            <li>4. Modify an EZFY plugin and resell it;</li>
            <li>
              5. Use the same EZFY plugin on multiple Shopify websites.
              <br />
              <br />
              For example, if you have 3 different websites with different
              domains, you'll need to purchase 3 copies of the EZFY plugin you
              wish to re-utilize.
            </li>
          </ol>
          <p>In addition to the above:</p>
          <ol>
            <li>
              1. Additional customizations to any EZFY plugin have a minimum fee
              of $35 USD. This amount is subjective to the quantity and
              complexity of the customizations requested.
              <br />
              <br />
              Upon an update, if the customizations have to be redone, the same
              fee ought to be charged.
            </li>
            <li>
              2. All of our plugins ship with the Javascript code obfuscated.
            </li>
          </ol>
          <p>
            <b>Copyright disclaimer:</b> EZFY plugins are developed exclusively
            by and the copyright work of ezfycode.com. You must follow this
            license and its guidelines.
          </p>
        </div>
      </div>
    </section>
  )
}

export default License
