import React, { useState, useCallback } from "react"
import { useBetween } from "use-between"

const useCounter = () => {
  const [count, setCount] = useState(0)
  const add = useCallback(x => setCount(c => c + x), [])
  const dec = useCallback(() => setCount(c => c - 1), [])
  return {
    count,
    add,
    dec,
  }
}

export const useSharedCounter = () => useBetween(useCounter)
