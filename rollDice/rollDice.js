
function rollDice(num) {
  var output = ""
  for (var i = 0; i < num; i++) {
    output += Math.ceil(Math.random() * 6) + ", ";
  }
  return output.slice(0,-2);
}

num = Number(process.argv.slice(2));
console.log("Rolled " + num + " dice: " + rollDice(num))