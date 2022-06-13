const express = require('express')
const path = require("path")

const app = express()

const port = process.env.PORT || 5000
const {Pool} = require('pg');
const pool = new Pool({
 connectionString: "postgres://gobsygpefhzdif:99c9011aacce9c1764ac8aa17f9f0d09c0b56ebf104bf79b0eb50558c94d9bbf@ec2-52-73-184-24.compute-1.amazonaws.com:5432/dej5s0l23ki1su",
 ssl: {
 rejectUnauthorized: false
 }
});


// backend api
app.get('/api', (req, res) => {
  console.log("hello");
  res.status(200).send('Hello from the backend!');
})


app.get('api/user/balance', (req, res) => {
  res.status(200).send("1");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/addProduct', function(clothing, res) {
  title = clothing.body.title;
  description = clothing.body.description;
  image = clothing.body.image;
  age = clothing.body.age;
  condition = clothing.body.condition;

  console.log("API PROCESSING")
  console.log(title);
  console.log(description);
  console.log(image);
  console.log(age);
  console.log(condition);
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
