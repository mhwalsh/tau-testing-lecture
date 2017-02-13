var expect = require('chai').expect;
var request = require('request');

describe('test main server file', function() {
  var url = 'http://localhost:3000/add/5';

  it('test server route "add" adds one', function(done) {
    request(url, function(err, res, body) {
      console.log('in test', body);
      expect(JSON.parse(body).answer).to.equal(6);
      done();
    });
  });

  it('add route has status 200', function(done) {
    request(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
