const express = require('express')
const path = require("path")

const app = express()

const port = process.env.PORT || 5001

// backend api
app.get('/api', (req, res) => {
  res.status(200).send('Hello from the backend!');
})


app.get('api/user/balance', (req, res) => {
  res.status(200).send("1");
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
