var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
/* Connection config to mongodb with mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://roeiros:123456@ds029575.mlab.com:29575/musical');
var db = mongoose.connection;
/* check for errors or established connection */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection established via mongodb');
});

var User   = require('./app/models/user');
//u1.save(function (err, user) {
//  if (err) return console.error(err);
//  console.log('all good');
//});


app.use(express.static('public'));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/example',function(req,res){
    res.json({
        success: true,
        name   : 'benny'
    });
});

app.post('/user/signup',function(req,res){
    var user = new User({
        name  : req.body.name,
        email : req.body.email
    });
    user.save(function (err) {
      if (err) {
          return res.sendStatus(500);
      }
      res.sendStatus(200);
    });
});

app.listen(3000, function () {
  console.log('Server is working');
});