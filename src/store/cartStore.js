import { createStore, createHook } from "react-sweet-state"

const Store = createStore({
  initialState: {
    products: [],
  },
  // actions that trigger store mutation
  actions: {
    addProduct: product => ({ setState, getState }) => {
      const _products = getState().products

      if (!product || product === "") {
        throw new Error("No product")
      }

      const repeated = _products.filter(e => e.id === product.id)

      if (repeated.length >= 1) {
        return
      }

      product.selected = true

      const products = [..._products, product]

      setState({
        products,
      })
    },
    removeProduct: product => ({ setState, getState }) => {
      const _products = getState().products

      if (!product || product === "") {
        throw new Error("No product")
      }

      product.selected = false

      const filtered = _products.filter(e => e.id !== product.id)

      const products = filtered

      setState({
        products,
      })
    },
    resetProducts: _ => ({ setState, getState }) => {
      setState({
        products: [],
      })
    },
  },
  // optional, mostly used for easy debugging
  name: "cart",
})

export const useCart = createHook(Store)
