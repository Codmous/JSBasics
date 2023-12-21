//Arrow Function
var greet = (name) => {
    console.log("Hello, " + name + "!");
};

greet("Doe"); // Outputs: "Hello, Doe!"


// Function expression
var greet = function(name) { //The function name is the variable
    console.log("Hello, " + name + "!");
};

greet("Jane"); // Outputs: "Hello, Jane!"

//Ordinary functions
function greet(name){
    console.log("Hello, " + name + "!");
}

greet("Jane");