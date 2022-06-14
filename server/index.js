const express = require('express')
const path = require("path")

const app = express()

const port = process.env.PORT || 5000
const { Pool } = require('pg');
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

app.get('/api/allProducts', async (req, res) => {
  console.log("getting all products");
  const products = await pool.query(`SELECT * FROM products`);
  res.json(products.rows);
})

app.get('/api/getProducts', async (req, res) => {
  console.log(`Getting products for: ${req.query.q}`);
  const query = req.query.q;
  const products = await pool.query(`SELECT * FROM products WHERE LOWER(Title) LIKE '%${query}%'`);
  res.json(products.rows);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/addProduct', function (clothing, res) {
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

  pool.query(`INSERT INTO products(Title, Description, Url, Age, Condition)VALUES($1,$2,$3,$4,$5)`,
    [title, description, image, age, condition,], (err, res) => {
      if (err) {
        console.log("Error - Failed to insert data into Products");
        console.log(err);
      } else {
        console.log("Query Processed");
      }
    });
})


app.post('/api/addEvent', function (event, res) {
  title = event.body.name;
  description = event.body.description;
  date = event.body.date;
  starttime = event.body.starttime;
  endtime = event.body.endtime;
  location = event.body.address;
  postcode = event.body.postcode;
  longitude = event.body.longitude;
  latitude = event.body.latitude;

  console.log("API PROCESSING")
  console.log(title);
  console.log(description);
  console.log(date);
  console.log(starttime);
  console.log(endtime);
  console.log(location);
  console.log(postcode);
  console.log(longitude);
  console.log(latitude);

  pool.query(`INSERT INTO events(Name, Description, Date, Starttime, Endtime, Location, Postcode, Longitude, Latitude)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
    [title, description, date, starttime, endtime, location, postcode, longitude, latitude], (err, res) => {
      if (err) {
        console.log("Error - Failed to insert data into Products");
        console.log(err);
      } else {
        console.log("Query Processed");
      }
    });
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
