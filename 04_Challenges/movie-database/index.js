const express = require('express')
const app = express()
const port = 4000

app.get('/', function (req, res){
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






