let firstNumber = "";
let operator = "";
let secondNumber = "";
let check = 0;

function add(num1,num2){
    return parseFloat((num1 + num2).toFixed(3));
}

function subtract(num1, num2){
    return parseFloat((num1 - num2).toFixed(3));
}

function multiply(num1, num2){
    return parseFloat((num1 * num2).toFixed(3));
}

function divide(num1, num2){
    return parseFloat((num1 / num2).toFixed(3));
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
const currentOperation = document.querySelector(".currentOperation");
const previousOperation = document.querySelector(".previousOperation");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");

numberButtons.forEach(button => {
    button.addEventListener("click",() => {
        if (check === 0) {
            currentOperation.innerText = "";
            check = 1;
        }
        if (currentOperation.innerText.length <= 8) currentOperation.innerText += button.value
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click",() => {
        if (operator != "") {
            secondNumber = currentOperation.innerText.split(operator).pop();
            currentOperation.innerText = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
            previousOperation.innerText = firstNumber + operator + secondNumber;
        }
        firstNumber = currentOperation.innerText;
        operator = button.value;
        check = 0;
    })
});

clearButton.addEventListener("click", () => {
    currentOperation.innerText = "";
    previousOperation.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
});

decimalButton.addEventListener("click", () => {
    if (!currentOperation.innerText.includes(".")) {
        currentOperation.innerText += ".";        
    }
});

deleteButton.addEventListener("click", () => currentOperation.innerText = currentOperation.innerText.substring(0, currentOperation.innerText.length-1) );

equalButton.addEventListener("click", () => {
    
    secondNumber = currentOperation.innerText.split(operator).pop(); 
    currentOperation.innerText = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
    previousOperation.innerText = firstNumber + operator + secondNumber;
});
