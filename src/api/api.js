import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"

const url = `https://ezfy.club/json`

export const blogApi = {
  /* 
  https://ezfy.club/json/wp/v2/posts
  */
  getPosts: async query => {
    return new Promise(async (resolve, reject) => {
      try {
        query = query && /\?/.test(query) ? query.replace("?", "") : query

        const { data } = await axios.get(`${url}/wp/v2/posts?${query}`)
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
  getPostBySlug: async slug => {
    return new Promise(async (resolve, reject) => {
      try {
        const post = await axios.get(`${url}/wp/v2/posts?slug=${slug}`)
        resolve(post)
      } catch (err) {
        reject(err)
      }
    })
  },

  getSidebarPostsGraphql: () => {
    try {
      const data = useStaticQuery(graphql`
        query GetSidebarPostsQuery {
          allWordpressPost(filter: { categories_names: { eq: "Blog" } }) {
            nodes {
              slug
              title
              featured_image_small_src
              date
              excerpt
              tag_names
              content
            }
          }
        }
      `)

      return data.allWordpressPost.nodes
    } catch (err) {
      console.log("error", err)
    }
  },
}
