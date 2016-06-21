function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  if (vowels.indexOf(str[0]) !== -1) {
    return str + "way";
  }
  
  var consonants = str[0];
  for (var i = 1; i < str.length; i++) {
    if ((vowels.indexOf(str[i])) === -1) {
      consonants += str[i];
    } else break;
  }
  
  str = str.substr(consonants.length);
  return str + consonants + "ay";
}

translatePigLatin("consonant");
