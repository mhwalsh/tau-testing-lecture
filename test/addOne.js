var expect = require('chai').expect;
var addOne = require('../src/modules/addOne');

describe('test addOne module', function() {

  it('should add one to the number pass in', function() {
    var number = 78;
    var result = addOne(number);
    expect(result).to.equal(79);
    expect(result).to.be.a('number');
  });
});
