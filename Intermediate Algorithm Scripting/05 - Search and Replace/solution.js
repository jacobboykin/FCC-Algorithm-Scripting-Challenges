function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  var re = new RegExp(before,"i");
  var newStr = str.replace(re, after);
  return newStr;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
