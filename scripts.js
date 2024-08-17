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
const nPButton = document.querySelector(".nP");
const percentangeButton = document.querySelector(".percentage");

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
        console.log( firstNumber);
        console.log( secondNumber);
        
        
        if (operator != "" && check === 1) {
            secondNumber = currentOperation.innerText.split(operator).pop();            
            currentOperation.innerText = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
            if (currentOperation.innerText.length >= 9) currentOperation.innerText = parseFloat(currentOperation.innerText).toExponential(1);
            previousOperation.innerText = firstNumber + operator + secondNumber;
            firstNumber = secondNumber;
          
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

nPButton.addEventListener("click", () => {
    if (currentOperation.innerText != ""){
        if(Array.from(currentOperation.innerText)[0] === "-") {
            currentOperation.innerText = currentOperation.innerText.substring(1);
        }
        else currentOperation.innerText = "-" + currentOperation.innerText;
    }
})

percentangeButton.addEventListener("click", () => {
    if (currentOperation.innerText != "")
        currentOperation.innerText = parseFloat(currentOperation.innerText)/100;
})

deleteButton.addEventListener("click", () => currentOperation.innerText = currentOperation.innerText.substring(0, currentOperation.innerText.length-1) );

equalButton.addEventListener("click", () => {
    if (operator === ""){
        currentOperation.innerText = currentOperation.innerText;
    }
    else {    
        secondNumber = currentOperation.innerText.split(operator).pop(); 
        currentOperation.innerText = operate(parseFloat(firstNumber),operator,parseFloat(secondNumber));
        if (currentOperation.innerText.length >= 9) currentOperation.innerText = parseFloat(currentOperation.innerText).toExponential(1);
        previousOperation.innerText = firstNumber + operator + secondNumber;
        operator = "";
    }
});
