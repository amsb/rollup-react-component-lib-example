import React from "react"
import ReactDOM from "react-dom"
import { useWorld } from "mylib"

function App() {
  const world = useWorld("World")
  return (
    <div className="App">
      <h1>Hello {world}</h1>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
