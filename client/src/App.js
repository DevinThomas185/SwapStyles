import React, { useState, useEffect } from "react"
import CreateEvent from "./Components/CreateEvent"
import Listing from "./Components/ProductListing"
import Event from "./Components/Event"
import NavigationBar from "./Components/NavigationBar"
import { BrowserRoyer as Router, Switch, Route, Link } from "react-router-dom"

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
      <NavigationBar />
      {/* <p>Backend says... {text}</p>*/}
    </div>
  );
}


export default App;
