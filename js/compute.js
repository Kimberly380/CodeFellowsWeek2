
//function for sum of two numbers: Problem One

function sumTwo (num1, num2) {
  console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
  return num1 + num2;
  }

exports.sumTwo = sumTwo;


//function for multiplying two numbers: Problem Two

function multTwo (a, b) {
  console.log("The product of " + a + " and " + b + " is "+ (a * b));
  return a * b;
}

exports.multTwo = multTwo;



//function for summing and multiplying three numbers: Problem Three

function sumAndMult (a, b, c) {
  console.log( a + " and " + b + " and " + c + " sum to "+(a+b+c));
  console.log("The numbers " + a + " and " + b + " and " + c + " have a product of " + (a*b*c));

  sumAll = sumTwo(a,b) + c;
  multAll = multTwo(a,b) *c;

  return [sumTwo, multTwo];
}

exports.sumAndMult = sumAndMult;
