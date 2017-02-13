var express = require('express');
var app = express();

var addOne = require('./modules/addOne');

app.get('/add/:me', function(req, res) {
  console.log('in route', req.params);
  var number = parseInt(req.params.me);

  var result = {
    answer: addOne(number)
  };

  console.log('in route', result);
  res.status(200).send(result);
});

app.listen(3000, function() {
  console.log('listening on 3000');
});
