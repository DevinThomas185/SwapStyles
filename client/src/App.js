import React, { useState, useEffect } from "react"

const backend = 'http://localhost:5000/api'

function App() {
  const [text, setText] = useState("")
  useEffect(() => {
    queryBackend()
  }, [])

  function queryBackend() {
    fetch(backend)
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
