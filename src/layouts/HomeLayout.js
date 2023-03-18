import React, { useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"

import BlogShowcase from "../components/BlogShowcase"
import Parallax from "../components/Parallax"
import Faq from "../components/Faq"
import Steps from "../components/Steps"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import ReviewsText from "./../components/ReviewsText"
import { SEO } from "../components/SEO.js"
import WhatDoWeDo from "./../components/WhatDoWeDo"
import Features from "./../components/Features"
import ProductShowcase from "./../components/ProductShowcase"

import axios from "axios"
import TabsSlider from "../components/TabsSlider"
import { siteRoutes } from "../utils/siteRoutes"

const HomeLayout = props => {
  useEffect(() => {
    setTimeout(window.ezfy.removeLoader, 50)

    async function test() {}

    test()
  }, [])

  const codeSnippetsTabs = [
    {
      title: "What are code snippets?",
      text:
        "Code snippets are pieces of code that you can paste into any theme to add extra functionalities. Like sections, app-like codes, between many others.",
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/what-are-code-snippets.mp4",
    },
    {
      title: "No monthly fees",
      text: "Pay once, use forever. No hidden nor additional fees. ",
      image: "https://www.ezfy.club/wp-content/uploads/2023/03/no-fees.mp4",
    },
    {
      title: "Quick & Simple installation",
      text:
        "Simple copy/pasting, no coding experience is needed. All products ship with clear installation instructions, taking roughly 2 minutes to install. Our friendly support staff is ready to help as well.",
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/code-snippets-home-page-1.mp4",
    },
    {
      title: "Lifetime free updates",
      text: `Be notified whenever we release a new update with bug fixes and/or new features.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/Untitled-design-4.mp4",
    },
    {
      title: "Fast, SEO-friendly and clean code",
      text: `Coded mindful of all best practices and latest technologies (HTML5, CSS3 and ES2022). No jQuery, heavy or redundant code is used.`,
      image: "https://www.ezfy.club/wp-content/uploads/2023/03/fast-code-3.mp4",
    },
    {
      title: "Mobile, pad & desktop friendly",
      text: `We use tools to test our code through 150+ real devices (not emulated), plus the 20+ physical devices at our office to guarantee the product's effiency in all modern environments.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/mobile-friendly.mp4",
    },
    {
      title: "No dev time",
      text: `Skip all the hurdles of testing, waiting, lengthy back & forth emails and grab the A/B tested code in one click. Hundreds of hours of professional dev time for the price of a product sale.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/code-snippets-home-page-2.mp4",
    },
    {
      title: "A/B tested in real stores",
      text: `Before being put on sale, our products are coded in partnership with long term clients of ours who are willing to test the code snippets in their own stores. This gives us the opportunity to quickly A/B test what works the best, while fixing all bug reports received.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/a-b-tested-in-real-stores.mp4",
    },

    {
      title: "Focused on conversion",
      text: `Ultimately every business has to make sales. We bear that very close to mind when coding our products by focusing in CRO from beginning to end. We also give you enough customization tools to A/B test what works the best for your business.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/Untitled-design-5.mp4",
    },

    // {
    //   title: "Loads 3 times faster than apps",
    //   text: `By default all apps must wait for the webpage to load before injecting any code. Since code snippets are pasted into the theme, they load at the same time as the website.`,
    //   image: "https://www.ezfy.club/wp-content/uploads/2023/03/fast-code.mp4",
    // },

    // {
    //   title: "Handpicked Shopify Experts",
    //   text: `To ensure maximum quality, we don't hire freelancers and work exclusively with qualified and experienced Shopify Experts. The devs coding our products have years of experience working in renowned Shopify themes and stores.`,
    //   image:
    //     "",
    // },
  ]

  const customCodingTabs = [
    {
      title: `Add options to the "Customize" page`,
      text: `Create additional options at the Customize page to control anything in your theme: images, colors, font sizes and much more.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/options-customize-page.mp4",
    },
    {
      title: `Customize existing sections`,
      text: `Add, remove or change options and functionalities to an existing section in your theme.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/customize-existing-section-1.mp4",
    },
    {
      title: `Replicate a section or an app`,
      text: `"Nothing is created, everything is transformed". Most successful businesses begin by reutilizing what's already working and, as they progress, they tweak to make it original. Saw a great section or feature on any website? We can code something based on your reference from scratch.`,
      image:
        "https://www.ezfy.club/wp-content/uploads/2023/03/replicate-section-1-2.mp4",
    },
    {
      title: `Metafields: unique options per products`,
      text: `Create additional fields at the product page to populate with individual content. This can range from media like text and images to code.`,
      image: "https://www.ezfy.club/wp-content/uploads/2023/03/metafield.mp4",
    },
  ]

  return (
    <React.Fragment>
      <SEO />
      <ScrollToTop></ScrollToTop>
      <Header page={"home"}></Header>
      <Hero scrollTo="#about"></Hero>
      <About></About>
      <TabsSlider
        title={"High Quality Customizations one Click Away"}
        subtitle={`The easiest and most accessible way to enhance your theme with top notch quality code.`}
        link={siteRoutes.shop}
        tabs={codeSnippetsTabs}
        alignment={"left"}
      ></TabsSlider>
      <TabsSlider
        title={"Stand out From the Crowd"}
        subtitle={`Make your theme feel unique.`}
        link={"#contact"}
        tabs={customCodingTabs}
        alignment={"right"}
        customID={"custom-coding"}
        additionalClass={"bg-gray"}
        buttonText={"Request a Quote"}
      ></TabsSlider>

      {/* <Features> </Features> */}
      {/* <ProductShowcase
        subtitle={`Simple, affordable and high quality copy-paste code snippets for
        your Shopify theme. <br /> Pay once, use forever - no monthly fees.`}
        chosenProducts={[
          "Dawn Theme Slider (PRO)",
          "Slideshow Section (PRO)",
          "Anti Theft - Disable Right Click",
        ]}
        page="home"
      ></ProductShowcase> */}
      <BlogShowcase isHomePage={true} posts={props.posts}></BlogShowcase>
      <ReviewsText></ReviewsText>
      <Parallax
        title="In need of coding help for your Shopify store?"
        subtitle={`Let us know what you need, we'll get back to you within 24 hours.`}
        buttonText={"Request a free quote"}
      ></Parallax>

      <Contact></Contact>
      <Footer page={"home"}></Footer>
    </React.Fragment>
  )
}

export default HomeLayout
