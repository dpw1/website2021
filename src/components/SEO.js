import React from "react"
import { Helmet } from "react-helmet"
import config from "../../data/config"

export const SEO = ({ title, image, description, url, article }) => {
  let seo = {
    title: title ? title : config.siteTitle,
    description: description || config.siteDescription,
    image: image ? image : config.siteImage,
    url: url ? url : "",
  }

  if (seo.title.hasOwnProperty("props")) {
    seo.title = seo.title.props.children
  }

  return (
    <React.Fragment>
      <Helmet title={seo.title}>
        <meta charSet="utf-8" />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {article ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </React.Fragment>
  )
}
