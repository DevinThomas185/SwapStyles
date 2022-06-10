import React, { useState, useEffect } from "react"
import CreateEvent from "./Components/CreateEvent"
import Listing from "./Components/Listing"
import Event from "./Components/Event"

function App() {
  const [text, setText] = useState("")
  useEffect(() => {
    queryBackend()
  }, [])

  function queryBackend() {
    fetch("/api")
      .then(response => {
        return response.text();
      })
      .then(text => {
        setText(text)
      })
  }

  return (
    <div className="App">
      <h1>Fashion Swap!!</h1>
      {/* <p>Backend says... {text}</p> */}
      <CreateEvent />
      {/* <Listing /> */}
      {/* <Event /> */}
    </div>
  );
}


export default App;
