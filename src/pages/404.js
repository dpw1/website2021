import React, { useEffect } from "react"
import "./404.css"

const FourZeroFour = props => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = `https://ezfycode.com`
    }, 2000)
  }, [])

  return (
    <p className="FourZeroFour">
      Oops! This page does not exist. Redirecting...
    </p>
  )
}

export default FourZeroFour
