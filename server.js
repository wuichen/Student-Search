var express = require('express');

var cors = require('cors');
var app = express();

app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(5000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});