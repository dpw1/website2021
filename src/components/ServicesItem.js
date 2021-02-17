import React, { useEffect, useState } from "react"
import "./ServicesItem.scss"
import parse from "html-react-parser"
import { replaceAll } from "../utils/utils"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { Link } from "gatsby"
import { useStatePersist as useStickyState } from "use-state-persist"
import SuccessIcon from "./atom/SuccessIcon"

import { ToastProvider, useToasts } from "react-toast-notifications"
import { siteRoutes } from "./../utils/siteRoutes"

const addToCartText = "Add task to cart"
const addedToCartText = "Added! Go to cart"

function ServicesItem(props) {
  const [loading, setLoading] = useState(false)

  const [isInCart, setIsInCart] = useState(false)
  const [cartServices, setCartServices] = useStickyState("@services", [])

  const { addToast } = useToasts()

  const {
    id,
    title,
    excerpt: description,
    tag_names: tags,
    slug,
    acf,
    featured_image_src: thumbnail,
  } = "item" in props ? props.item : props

  //replace this later

  const { price, live_demo } = acf

  console.log(acf, price)
  const fancyboxOptions = { buttons: ["close"], gutter: 15, loop: true }

  const checkIfItemIsInCart = () => {
    const res =
      cartServices.filter(e => {
        console.log(e)
        if (e.id === id) {
          return true
        }
        return false
      }).length >= 1

    return res
  }

  const handleAddToCart = async () => {
    setLoading(true)

    const inCart = checkIfItemIsInCart()

    if (inCart) {
      return
    }

    try {
      const service = {
        id,
        title,
        price,
      }

      let obj = []

      if (cartServices.length >= 1) {
        obj.push(...cartServices)
      }

      obj.push(service)

      setCartServices(obj)

      setIsInCart(true)
      addToast(
        <Link className="ServicesItem-toast" to={siteRoutes.cart}>
          New task added. <br />
          Click here to view your cart.
        </Link>,
        {
          appearance: "success",
        }
      )
    } catch (error) {
      alert("Error adding to cart. Please contact us: ezfycode@gmail.com")
      console.log("error adding to cart: ", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const inCart = checkIfItemIsInCart()
    if (inCart) {
      setIsInCart(true)
    }
  }, [])

  return (
    <article
      key={JSON.stringify(props)}
      className={`product ServicesItem col-12 col-md-6 col-lg-4      portfolio-item services-item ${
        props.page === "home" ? "ServicesItem--homepage" : ""
      }`}
    >
      <div className="single-portfolio service-single res-margin">
        {/* Portfolio Thumb  */}
        <a
          target="_blank"
          href={live_demo}
          className="ServicesItem-image portfolio-thumb blog-thumb"
        >
          {/\.mp4/gim.test(thumbnail) ? (
            <video controls>
              <source src={thumbnail} />
            </video>
          ) : (
            <figure className="aspect-ratio custom-overlay ">
              <img
                className="lazyload"
                src={""}
                data-src={thumbnail}
                alt={title}
              />
            </figure>
          )}
        </a>
        {/* Portfolio Content */}
        <div className="ServicesItem-content   portfolio-content services-content blog-content p-4">
          {/* Portfolio Title */}
          <div className="services-price ServicesItem-price">
            <h3 className="blog-title services-price-title my-3">
              <a
                target="_blank"
                href={live_demo}
                data-options={JSON.stringify(fancyboxOptions)}
              >
                <span>{parse(title)}</span>
              </a>
            </h3>
            <h3 className="services-price-small ServicesItem-price-small color-primary">
              {/free/gim.test(price) || <small className="fw-7">$</small>}
              {price}
            </h3>
          </div>

          <ul className="ServicesItem-tags">
            {tags && tags.map(e => <li className="ServicesItem-tag">{e}</li>)}
          </ul>
          <div className="ServicesItem-description ">
            <React.Fragment>{parse(description)}</React.Fragment>
          </div>
        </div>

        <div className="ServicesItem-action">
          {isInCart ? (
            <Link
              to={siteRoutes.cart}
              className=" ServicesItem-action-button btn mt-4 buy-now-button ServicesItem-atc"
            >
              {" "}
              <span>Added! Go to cart</span>
            </Link>
          ) : (
            <button
              onClick={() => handleAddToCart()}
              className=" ServicesItem-action-button btn mt-4 buy-now-button ServicesItem-atc"
            >
              <span>Add task</span>
            </button>
          )}

          <a
            target="_blank"
            href={live_demo}
            className="ServicesItem-action-button ServicesItem-details mt-4"
          >
            Live demo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ServicesItem
