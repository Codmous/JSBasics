let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

//Function to update the display
function updateDisplay() {
    const display = documentGetElementByID('display');
    display.value = currentInput;
}

//Function to append a digit or operator to the currentInput
function updateDisplay(value)