function spinalCase(str) {

  // Change 'lowerUpper' with 'lower Upper'
  str = str.replace(/([a-z])([A-Z])/g, function(match, p1, p2) {
    return p1 + ' ' + p2;
  });

  // Change '_' or ' ' to '-'
  str = str.replace(/\s|_/g, function(match) {
    return '-';
  });

  return str.toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
