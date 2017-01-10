function sumFibs(num) {
  var prev = 0;
  var current = 1;
  var sum = 0;

  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }

    current += prev;
    prev = current - prev;
  }
  
  return sum;
}

console.log(sumFibs(4));
