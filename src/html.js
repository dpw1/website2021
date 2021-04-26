import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import { Helmet } from "react-helmet"
import Shop from "./components/Shop"
import Loader from "./components/Loader"

export default function HTML(props) {
  useEffect(() => {
    console.log("NPROGRESS - HTML IS LOADED")
  }, [])

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href={withPrefix("favicon.ico")} type="image/x-icon" />

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

        <script
          type="text/javascript"
          src={withPrefix("js/ejunkie.js")}
        ></script>

        {/* <script
          type="text/javascript"
          src={withPrefix("js/gumroad.js")}
        ></script> */}

        {
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            rel="stylesheet"
          ></link>
        }

        <Loader></Loader>
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
