function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var allProps;

  for (var i = 0; i < collection.length; i++) {

    // Reset property and value check
    allProps = true;

    Object.keys(source).forEach(function(key) {

      // Check if current source property is in collection[i]
      if (collection[i].hasOwnProperty(key)) {

        // Check if values of the matched property are NOT equal
        if (collection[i][key] !== source[key]) {
          allProps = false;
        }
      }

      // Could not find property in collection[i]
      else {
        allProps = false;
      }
    });

    // if all tests passed append collection[i]
    if (allProps) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
