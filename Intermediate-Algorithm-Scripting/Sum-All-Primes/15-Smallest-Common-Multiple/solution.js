function fillRange(start, stop) {
  var arr = [start];
  var current = start;

  while (current < stop) {
    current += 1;
    arr.push(current);
  }

  return arr;
}

function smallestCommons(arr) {

  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var multiplier = 1;
  var totalCommons = 0;
  var lcm = 0;
  var range = fillRange(min, max);

  while (!lcm) {
    for (var i = 0; i < range.length; i++) {
      if (range[i] !== max) {
        if (max * multiplier % range[i] === 0) {
          totalCommons++;
        }
      }
    }

    if (totalCommons === range.length - 1) {
      lcm = max * multiplier;
    }
    else {
      multiplier++;
      totalCommons = 0;
    }
  }

  return lcm;
}

console.log(smallestCommons([1, 5]));
