const express = require('express');
const hbs = require('hbs');

var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine','hbs')

app.get('/', function(req, res){
  res.send({
    name:'sam',
    age:20
  })
});

app.get('/about',(req,res)=>{
  res.render('about.hbs');
})

// app.get('/bad',(req,res)=>{
//   res.send({
//     bad:"error message"
//   })
// })
app.listen(3000,()=>{console.log('server is up on 3000 port');});
