const React = require("react")
const { useStatePersist } = require("use-state-persist")
const { globalUtils } = require("./global-utils")

// Logs when the client route changes

exports.onRouteUpdate = ({ location, prevLocation }) => {
  setTimeout(() => {
    const $loader = window.document.querySelector(`.loader--visible`)

    if ($loader) {
      // $loader.classList.remove("loader--visible")
    }

    console.log("NProgress URL loaded")
  }, 2000)
  // $loader.classList.remove("loader--visible")
}

exports.onRouteUpdateDelayed = ({ location, prevLocation }) => {
  console.log("nprogress updated delayed...        ")
}

// exports.onPostPrefetchPathname = ({ location, prevLocation }) => {
//   // console.log("nprogress prefetch pathname ")
// }
