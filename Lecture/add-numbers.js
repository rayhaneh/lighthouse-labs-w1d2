function run(arr) {
  // Background:
  // Set the starting running total
  var sum = 0
  // Execution Phase
  arr.forEach(function(num) {
    sum += (!isNaN(num) ? Number(num) : 0)
  })
  // Output Phase
  return sum;
}

console.log("Sum = " + run(process.argv.slice(2)));

// Run the code with the following command to test it
// NODE_ENV=test node run.js
// Generally you can use ENV command to see all the enviromental parameters
if (process.env.NODE_ENV === "test") {
  console.log("Test 1");
  console.log(run ([10, 20, 5.5]) === 35.5 ? 'Pass' : 'Fail')
  console.log(run ([10, -10, 0]) === 0 ? 'Pass' : 'Fail')
  console.log("Test 2 - None number input");
  console.log(run ([10, "f", "foo", 0]) === 10 ? 'Pass' : 'Fail')
  console.log(run (["foo", "bar"]) === 0 ? 'Pass' : 'Fail')
  console.log(run (["10", "20"]) === 30 ? 'Pass' : 'Fail')
}