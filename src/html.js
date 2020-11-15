import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>EZFY | Shopify Coding Services</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <div
          className="fb-customerchat"
          attribution={"setup_tool"}
          page_id="2076491679249035"
          greeting_dialog_delay="20"
          logged_in_greeting="Hi, Diego here! How can I help you?"
          logged_out_greeting="Hi, Diego here! How can I help you?"
        ></div>

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="fb-root"></div>

        <script
          type="text/javascript"
          src={withPrefix("js/fb-messenger.js")}
        ></script>
        <script
          type="text/javascript"
          src={withPrefix("js/vendors.js")}
        ></script>

        <script
          type="text/javascript"
          src={withPrefix("js/custom.js")}
        ></script>

        {
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            rel="stylesheet"
          ></link>
        }
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
