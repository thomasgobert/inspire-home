var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");

var app = express();

var filename = "datas";

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/temperature', function (req, res) {
   fs.readFile(__dirname + "/" + filename, 'utf8', function (err, data) {
	if(err)
	   res.sendStatus(500);
	res.end(data) ;
   });
});
app.post('/temperature', function (req, res) {
   fs.writeFile(__dirname + "/" + filename, req.body.temperature, function (err) {
	if(err)
		res.sendStatus(500);
	res.end();
   });
});
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Listening at http://%s:%s", host, port)

})