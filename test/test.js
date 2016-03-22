var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  // it('should check first question', function() {
  //   assert.deepEqual(compute.getQuestion(0), 'first');
  // });



//Problem One
  it('should be 11, the sum of 7 and 4.', function() { assert(11 == compute.sumTwo(7,4)); });



//Problem Two.  Multiply.
it('should be 28, the product of 7 and 4.', function() { assert(28 == compute.multTwo(7,4)); });



//Problem Three. Sum and Multiply.
it('should be 16, 140, the sum and products of 4, 7, and 5.', function() { assert(15,140 == compute.sumAndMult(4,7,5)); });




 });
