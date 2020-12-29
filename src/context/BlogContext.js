import React, { useState } from "react"

export const Store = React.createContext()

const Provider = props => {
  const [blogs, setBlogs] = useState([])
  return (
    <Store.Provider value={[blogs, setBlogs]}>{props.children}</Store.Provider>
  )
}

export default Provider
