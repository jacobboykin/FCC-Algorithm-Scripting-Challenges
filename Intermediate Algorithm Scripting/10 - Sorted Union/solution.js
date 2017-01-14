function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var flattened = args.reduce(function(a, b) {
      return a.concat(b);
  });

  var unique = flattened.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) === index;
  });

  return unique;

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
