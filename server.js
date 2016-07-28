var express = require('express');
var app = express();
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.get('/user', function (req, res) {
  res.json([{
      user : 'blah',
      age  : 20
  },{
      user : 'charlie',
      age  : 50
  }]);
});

app.listen(3000, function () {
  console.log('Server is working');
});