function sumAll(arr) {
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  allNums = [];
  
  for (i = min; i <= max; i++) {
    allNums.push(i);
    console.log(allNums);
  }
  
  return allNums.reduce(function(a, b) {
    return a + b;
  });
}

sumAll([1, 4]);
