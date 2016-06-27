function fearNotLetter(str) {
    var previousCharCode = str.charCodeAt(0);
    var currentCharCode;
  
    for (var i = 1; i < str.length; i++) {
      currentCharCode = str.charCodeAt(i);
      if (currentCharCode % previousCharCode !== 1) {
        return String.fromCharCode(currentCharCode - 1);
      }
      previousCharCode = currentCharCode;
    }
}

fearNotLetter("abce");
