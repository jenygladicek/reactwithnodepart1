const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user.route');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = 5000;
//MongoDb Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reactwithnode',{useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDb Connection is now open");
}); 


//BodyParser Middleware
//app.use(bodyParser.urlencoded({extented : false}));
app.use(bodyParser.json());
app.use('/user', user);
// Api Calls
app.get('/',function(req,res){
	res.json({"label" : "First Page"});
});

app.get('/landing',function(req,res){
	res.json({"label" : "Landing Page"});
});

//Initialzing App
app.listen(port, function(){
   console.log('Server is running on Port',port);
});

