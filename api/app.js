const express = require('express')
const cors = require("cors");
const port = 5000;
const app = express()

const db = require("./db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
