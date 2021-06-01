const express = require('express')
const port = 5000;
const app = express()

app.get('/', (req, res) => {
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
