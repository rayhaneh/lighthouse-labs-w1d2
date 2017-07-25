function countVowels (input) {
  var count = {
    a: 0,
    e: 0,
    i: 0,
    u: 0,
    o: 0
  }
  for (var i = 0; i < input.length; i++) {
    switch (input[i]){
      case 'a':
        count.a++;
        break;
      case 'e':
        count.e++;
        break;
      case 'i':
        count.i++;
        break;
      case 'o':
        count.o++;
        break;
      case 'u':
        count.u++;
        break;
    }
  }
  return count;
}



var testRestults = countVowels ('the bird is the word')
console.log(testRestults.e === 2 ? "PASS" : "FAIL")
console.log(testRestults.o === 1 ? "PASS" : "FAIL")
console.log(testRestults.a === 0 ? "PASS" : "FAIL")