import React from "react"

export function useWorld(value) {
  const [currentValue] = React.useState("world")
  return currentValue
}
