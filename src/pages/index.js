import React from "react"
import { graphql } from "gatsby"

import "./index.scss"
import "../css/custom.scss"

import HomeLayout from "./../layouts/HomeLayout"

const Index = props => {
  return <HomeLayout posts={props.data.allWordpressPost.nodes}></HomeLayout>
}

export const query = graphql`
  query WebsiteQuery {
    allWordpressPost {
      nodes {
        slug
        title
      }
    }
  }
`

export default Index
