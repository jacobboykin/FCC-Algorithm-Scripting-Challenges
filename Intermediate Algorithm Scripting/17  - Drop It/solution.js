function dropElements(arr, func) {
  
  var trueAtIndex = -1;
  
  // Loop until func is true
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      trueAtIndex = i;
      break;
    }
  }
  
  // if func was never true
  if (trueAtIndex === -1) {
    return [];
  }
  
  return arr.slice(trueAtIndex, arr.length);
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});