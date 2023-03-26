import React, { useEffect, useState } from "react"
import {
  setCookie,
  getCookie,
  scrollToImmediate,
  sleep,
  isBrowser,
  getCountry,
  getBrowserFingerprint,
} from "../utils/utils"

import Skeleton from "react-loading-skeleton"
import confetti from "canvas-confetti"

import "./Feedback.scss"
import { flatten } from "./../utils/utils"

export default function Feedback(props) {
  const fingerprint = getBrowserFingerprint()

  const COOKIE_NAME = "feedback_cookie"

  const [text, setText] = useState("Was this article helpful?")
  const [clicked, setClicked] = useState(false)
  const [repeatedUser, setRepeatedUser] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [submitText, setSubmitText] = useState("Submit")
  const [feedbackID, setFeedbackID] = useState(0) //feedback ID once the user has clicked on "yes" or "no"
  const [feedbackText, setFeedbackText] = useState("")

  useEffect(async () => {
    const cookie = getCookie(COOKIE_NAME)

    if (!cookie) {
      setTimeout(() => {
        setIsVisible(true)
      }, 7500)
      return
    }

    await sleep(50)
    await checkIfRepeatedUser()
  }, [])

  const onChange = event => {
    setFeedbackText(event.target.value)
  }

  async function checkIfRepeatedUser() {
    return new Promise(async (resolve, reject) => {
      console.log("xx checking if repeated BEFRE...")
      const response = await fetch(
        "https://www.ezfy.club/json/ezfy/v1/feedback"
      )

      console.log("xx checking if repeated...")

      const _feedbacks = await response.json()

      const feedbacks = flatten(_feedbacks.data)

      const fingerprints = Object.keys(feedbacks)
        .map((e, i) => {
          if (e.includes("fingerprint")) {
            return feedbacks[e]
          }
        })
        .filter(e => e)

      const repeated =
        fingerprints.filter(e => e === fingerprint).length >= 1 ? true : false

      console.log("xx repeated user? ", repeated)
      setRepeatedUser(repeated)
    })
  }

  async function postFeedback(answer = null, content = null) {
    return new Promise(async (resolve, reject) => {
      const $title = document.querySelector(`.blog-breadcrumb-title`)
      const title = $title.textContent.trim()

      const response = await fetch(
        "https://www.ezfy.club/json/ezfy/v1/feedback/create",
        {
          method: "POST",
          body: JSON.stringify({
            title,
            content,
            fingerprint,
            answer,
            country: getCountry(),
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )

      const data = await response.json()

      setFeedbackID(data.data.id)
      resolve()
    })
  }

  async function postFeedbackText(content = null) {
    return new Promise(async (resolve, reject) => {
      if (!content) {
        resolve()
        return
      }

      const response = await fetch(
        `https://www.ezfy.club/json/ezfy/v1/feedback/update/${feedbackID}`,
        {
          method: "PUT",
          body: JSON.stringify({
            content,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )

      resolve()
    })
  }

  return (
    <div
      className={`Feedback
      Feedback--${props.type}
      ${completed ? "Feedback--completed" : ""}
      ${loading ? "Feedback--loading" : ""}
      ${clicked ? "Feedback--clicked" : ""}
      ${isVisible ? "" : "Feedback--invisible"}
      `}
    >
      <span
        onClick={() => {
          setIsVisible(false)
          setCookie(COOKIE_NAME, "closed", 1)
        }}
        className="Feedback-close"
      >
        X
      </span>
      <p className="Feedback-title">{text}</p>

      <div className="Feedback-buttons">
        {loading ? (
          <Skeleton style={{ marginRight: 10 }} height={35} width={82} />
        ) : (
          <button
            onClick={async () => {
              setLoading(true)
              if (!repeatedUser) {
                await postFeedback("yes")
              } else {
                await sleep(1000)
              }

              setText(
                "Thank you! Any other tutorials or products you'd like to see?"
              )
              setClicked(true)
              setLoading(false)
            }}
            className="Feedback-button"
          >
            <svg
              className="Feedback--icon-yes"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
            </svg>
            <span>Yes</span>
          </button>
        )}
        {loading ? (
          <Skeleton height={35} width={82} />
        ) : (
          <button
            onClick={async () => {
              setLoading(true)

              if (!repeatedUser) {
                await postFeedback("no")
              } else {
                await sleep(1000)
              }

              setText("We're sorry to hear. How can we improve?")
              setClicked(true)
              setLoading(false)
            }}
            className="Feedback-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
            <span>No</span>
          </button>
        )}
      </div>
      <div className="Feedback-feedback">
        <textarea
          value={feedbackText}
          onChange={onChange}
          placeholder="Please type here"
          resizable
          className="Feedback-textarea"
        ></textarea>
        <button
          disabled={feedbackText.length <= 1}
          onClick={async () => {
            setLoading(true)
            setSubmitText("Submitting...")

            await postFeedbackText(feedbackText)

            setLoading(false)
            setText("Thanks for your feedback!")
            setSubmitText("All done :)")
            setCookie(COOKIE_NAME, "voted", 7)
            setCompleted(true)
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            })
          }}
          className="Feedback-submit btn"
        >
          {submitText}
        </button>
      </div>
    </div>
  )
}
