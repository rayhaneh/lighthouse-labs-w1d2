function reverseSentence (input) {
  return input.split(" ").reverse().join(" ")
}

console.log(reverseSentence("the bird is the word") === "word the is bird the" ? "PASS" : "FAIL")