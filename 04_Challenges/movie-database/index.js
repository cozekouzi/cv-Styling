//*======= creating server elements
//*------- server element
const { request } = require('express')
const express = require('express')
const app = express()
//!------- use 4000 due to unknown error (pending)
const port = 4000
//*------- time elements
const date = new Date()
const hour = date.getHours()
const minuts = date.getMinutes()
//*------- movies elements
const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
//*======= opening a file to exicute "hello + 'the input of a user'" when url ="http://localhost:4000/hello/omar"
app.get('/hello/:id?', function(req, res){
  const idd = req.params.id;
  res.send({status:200, message:`hello, ${idd}`});
});
//*======= opening a test file outputing ok when url ="http://localhost:4000/test"
app.get('/test', function (req, res){
  res.send({status:200, message:"ok"})
})
//*======= openig a file outputing the current time() when url ="http://localhost:4000/time"
app.get('/time', function (req, res){
  if(minuts > 10){
    res.send({status:200, message:`${hour + ":"+minuts}`})
  }
  else{
    res.send({status:200, message:`${hour + ":0"+minuts}`})
  }
})
//*======= search file when url= "http://localhost:4000/search?s='add-your-input'"
app.get('/search',(req,res) => {
  const s=req.query.s
  if (s) {
    res.json({status:200, message:"ok", data:s})
  }
  else{
    res.json({status:500, error:true, message:"you have to provide a search"})
  }
})

const movie_title = movies.map(movies => movies.title)
const movie_year = movies.map(movies => movies.year)
const movie_rating = movies.map(movies => movies.rating)

app.get('/movies/create', function (req, res){
  res.json({status:200, message:"creat"})
})
//*======= movie read functions/files
app.get('/movies/read', function (req, res){
  res.json({status:200, message:movie_title})
})




//!research route element
//!divide the code into differant files
//!
//!
//!
//!research filter element
//!research async element
//!research use element



//*======= sorting by-date when url="http://localhost:4000/movies/read/by-date"
app.get('/movies/read/by-date', function (req, res){

  var byDate = movies.slice(0);
byDate.sort(function(a,b) {
    return a.year - b.year;
});
res.json({status:200, message:byDate})
})

//*======= sorting by-date when url="http://localhost:4000/movies/read/by-rate"
app.get('/movies/read/by-rate', function (req, res){
  var byRate = movies.slice(0);
  byRate.sort(function(a,b) {
      return a.rating - b.rating;
  });
  res.json({status:200, message:byRate})
})

//*======= sorting by-title when url="http://localhost:4000/movies/read/by-title"
app.get('/movies/read/by-title', function (req, res){
  var byTitle = movies.slice(0);
  byTitle.sort(function(a,b) {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
  });
  res.json({status:200, message:byTitle})
})








app.get('/movies/update', function (req, res){
  res.send({status:200, message:"update"})
})
app.get('/movies/delete', function (req, res){
  res.send({status:200, message:"delete"})
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})






