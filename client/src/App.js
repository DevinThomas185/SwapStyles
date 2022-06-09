import React, { useState, useEffect } from "react"

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
      <h1>Hello World!</h1>
      <p>Backend says... {text}</p>
    </div>
  );
}


export default App;
