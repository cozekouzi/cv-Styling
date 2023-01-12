const express = require('express')
const app = express()
const port = 4000
const date = new Date()
const hour = date.getHours()
const minuts = date.getMinutes()


app.get('/', function (req, res){
  res.send('hello world!!')
})
app.get('/test', function (req, res){
  res.send({status:200, message:"ok"})
})
app.get('/time', function (req, res){
  if(minuts > 10){
    res.send({status:200, message:`${hour + ":"+minuts}`})
  }
  else{
    res.send({status:200, message:`${hour + ":0"+minuts}`})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  
})






