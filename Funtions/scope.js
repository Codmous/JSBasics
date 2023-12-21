var globalVar = "I'm global";

function example() {
    var localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

example();
console.log(globalVar); // Accessible
console.log(localVar); // Error: localVar is not defined (outside the function)
