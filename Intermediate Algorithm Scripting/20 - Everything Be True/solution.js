function truthCheck(collection, pre) {
  // Is everyone being true?
  var allTruthy = true;
  for (var i = 0; i < collection.length; i++) {
    if (!collection[i][pre]) {
      allTruthy = false;
    }
  }
  
  return allTruthy;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
