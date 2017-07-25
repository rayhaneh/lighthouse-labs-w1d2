// Functions in javascript are first class citizens, like variables, arrays ...
// You can pass them in a variable, save them, ...

var imHere = true;

var tweeps = ['@wired','@techmeme','@mozilla'];

function oneMore() {
  var tweeps = [];
  tweeps.push('@realDonalDuck'); // this line first looks locally if there is a tweep locally it uses that oen
}


// function declaration
function getFirst (someArray) {
  return someArray[0];
}

// Function expression
var getSecond = function (someArray) {
  return someArray[2]
}

// getSecond was a function and now get2nd is also a function and can be called later
var get2nd = getSecond;

tweeps.push(getSecond("one","two","three","four"))
tweeps.push(getSecond)



console.log ('My tweeps so far: ', tweeps)
oneMore();
console.log("First Element: " , getFirst(tweeps));
console.log("Second Element:" , getSecond(tweeps));
console.log("Second Element:" , get2nd(tweeps));
console.log("" , tweeps[4](tweeps))
console.log ('My tweeps so far: ', tweeps)