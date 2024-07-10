let firstNumber = "";
let operator = "";
let secondNumber = "";

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operator, num2){
    if (operator === "+") return add(num1,num2);
    if (operator === "-") return subtract(num1,num2);
    if (operator === "×") return multiply(num1,num2);
    if (operator === "÷") return divide(num1,num2);
}


// Access all buttons with the class "number"
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

numberButtons.forEach(button => {
    button.addEventListener("click",() => display.innerText += button.value);
});

operatorButtons.forEach(button => {
    button.addEventListener("click",() => {
        firstNumber = display.innerText;
        display.innerText += button.value;
        operator = button.value;
    })
});

clearButton.addEventListener("click", () => display.innerText = "");

deleteButton.addEventListener("click", () => display.innerText = display.innerText.substring(0, display.innerText.length-1) );

equalButton.addEventListener("click", () => {
    secondNumber = display.innerText.split(operator).pop()
    console.log(secondNumber); 
    display.innerText = operate(parseInt(firstNumber),operator,parseInt(secondNumber));
})
