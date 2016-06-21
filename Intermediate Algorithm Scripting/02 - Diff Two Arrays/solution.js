function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr2.length; i++) {
      if ((arr1.indexOf(arr2[i])) === -1) {
          console.log("Didn't find " + arr2[i] + " inside of arr1");
          newArr.push(arr2[i]);
      }
      else {
          console.log("Found " + arr2[i]);

      }
  }

  for (var i = 0; i < arr1.length; i++) {
      if ((arr2.indexOf(arr1[i])) === -1) {
          console.log("Didn't find " + arr1[i] + " inside of arr2");
          newArr.push(arr1[i]);
      }
      else {
          console.log("Found " + arr1[i]);

      }
  }

  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
