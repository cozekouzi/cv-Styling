const { request } = require('express')
const express = require('express')
const app = express()
const port = 4000
const date = new Date()
const hour = date.getHours()
const minuts = date.getMinutes()

app.get('/hello/:id?', function(req, res){
  const idd = req.params.id;
  res.send({status:200, message:`hello, ${idd}`});
});
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
app.get('/search',(req,res) => {
  const s=req.query.s
  if (s) {
    res.send({status:200, message:"ok", data:s})
  }
  else{
    res.send({status:500, error:true, message:"you have to provide a search"})
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})






