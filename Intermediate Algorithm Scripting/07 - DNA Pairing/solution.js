function pairElement(str) {
  var charArr = str.split('');
  var pairArr = [];

  for (var i = 0; i < charArr.length; i++) {
    if (charArr[i].match('C')) {
      pairArr.push(['C', 'G']);
    }
    else if (charArr[i].match('G')) {
      pairArr.push(['G', 'C']);
    }
    else if (charArr[i].match('A')) {
      pairArr.push(['A', 'T']);
    }
    else if (charArr[i].match('T')) {
      pairArr.push(['T', 'A']);
    }
  }

  return pairArr;
}

pairElement("GCG");
