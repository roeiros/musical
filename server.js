var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var cors = require('cors');
var upload = multer();
var mv = require('mv');
var path = require('path');
var OS = require('os');
/* Connection config to mongodb with mongoose */
var mongoose = require('mongoose');
mongoose.connect('mongodb://roeiros:123456@ds029575.mlab.com:29575/musical');
var db = mongoose.connection;
/* check for errors or established connection */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection established via mongodb');
});

var User      = require('./app/models/user');
var Product   = require('./app/models/product');


/* middlewares */
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var tmpPath = path.join(OS.tmpdir(), 'alhamdu'+Date.now());
console.log(tmpPath);

app.get('/products',function(req,res){
   Product.find({}).exec(function(err,products){
      res.json(products);
   });
    
});

app.post('/upload', upload.single('file') , function (req, res) {
//    console.log(req.body);
//    console.log(req.file);
    var p = new Product(req.body.product);
    p.save(function(err,p){ 
        fs.writeFile(tmpPath, req.file.buffer, function(err) {
            if (err) {
              return res.error(err);
            }
            //moving file somewhere else
            mv(tmpPath, path.normalize(__dirname+'/public/uploads/'+ p._id +'.jpg'), {mkdirp: true} ,function(err){
                if(err) console.log(err);
                res.json({});
            });
        });
    });
})

/* routes */
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