function convertToRoman(num) {
  var romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var conversion = '';

  for (var i = decimal.length; i >= 0; i--) {
    while (decimal[i] <= num) {
      num -= decimal[i];
      conversion += romanNumerals[i];
    }
  }

  return conversion;
}

convertToRoman(36);
