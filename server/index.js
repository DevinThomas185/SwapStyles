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
  res.status(200).send('Hello from the backend!');
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/addEvent', function(req, res) {
  pool.query(`INSERT INTO events(Name, Description, Date, StartTime, EndTime, Location)VALUES($1,$2,$3,$4,$5,$6)`,
  [req.body.name, req.body.description, req.body.date, req.body.starttime, req.body.endtime, req.body.location], (err, res) => {
    if (err) {
        console.log("Error - Failed to insert data into Events");
        console.log(err);
    } else {
      console.log("Query Processed");
      console.log(req.body.name);
    }
  });
});

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
