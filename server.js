const express = require('express')
const app = express()
const port = 3000

app.post('/submit', function (req, res) {
    console.log(req);
    res.send('Got a POST request for /submit')
  })

app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))