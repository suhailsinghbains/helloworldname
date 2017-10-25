var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 80
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.listen(port);
console.log('Listening at ' + port);

app.get('/', function (req, res) {
  var name = req.query.name === undefined ? '' : req.query.name;
  res.send("Hello World " + name);
});
