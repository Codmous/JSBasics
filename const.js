function example() {
    const z = 30;
    // z = 40; // Error: Assignment to a constant variable
    console.log(z); // Outputs 30
}

//You can always declare an undefined value to a const and change it later.
const myConstVariable = undefined;
console.log(myConstVariable);
//UPdated value of myConstVariable initially undefined.
myConstVariable = 42;
console.log(myConstVariable);