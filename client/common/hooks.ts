import React, { useState, useEffect } from "react"

interface WindowSize {
  width: number
  height: number
}

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  useEffect(() => {
    setValue(() => {
      if (typeof window === "undefined") {
        return initialValue
      }
      try {
        const unparsedValue = window.localStorage[key]
        if (typeof unparsedValue === "undefined") {
          return initialValue
        }
        return JSON.parse(unparsedValue)
      } catch (error) {
        return initialValue
      }
    })
  }, [key, initialValue])

  const setItem = (newValue: string | ((newValue: string) => string)) => {
    const valueToStore = newValue instanceof Function ? newValue(value) : value
    setValue(valueToStore)
    window.localStorage[key] = JSON.stringify(valueToStore)
  }

  return [value, setItem] as const
}

export { useWindowSize, useLocalStorage }
