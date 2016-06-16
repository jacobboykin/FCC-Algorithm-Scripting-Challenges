function isPrime(num) {
  if ((num === 0) || (num === 1)) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    console.log("i = " + i);
    if(isPrime(i)) {
      sum += i;
      console.log(i + " is prime");
      console.log("sum = " + sum);
    }
  }
  return sum;
}

sumPrimes(10);
