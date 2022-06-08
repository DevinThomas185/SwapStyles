const express = require('express')
const app = express()
const port = 5000

// backend api
app.get('/api', (req, res) => {
  res.status(200).send('Hello from the backend!');
})


// serve react app from root
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
  });
}

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
