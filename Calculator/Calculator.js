const symbols = document.querySelectorAll(".symbol");
const algo_symbols = document.querySelectorAll(".algo-symbol");
const clear_symbol = document.querySelectorAll(".clear-symbol");
const del_symbol = document.querySelectorAll(".del-symbol");
const content_holder = document.querySelector(".content_holder");

let firstNum = '';
let secondNum = '';
let operation = '';

function getNumber() {
    symbols.forEach(symbol => {
        symbol.addEventListener("click", () => {
            if (operation === '') {
                firstNum += symbol.textContent;
                content_holder.textContent = firstNum;
            } else {
                secondNum += symbol.textContent;
                content_holder.textContent = firstNum + operation + secondNum;
            }
        });
    });
}

function getOperand() {
    algo_symbols.forEach(symbol => {
        symbol.addEventListener("click", () => {
            if (firstNum !== '' && secondNum === '') {
                operation = symbol.textContent;
                content_holder.textContent = firstNum + operation;
            }
        });
    });
}

function performOperation(operation, firstNum, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (operation) {
        case '+': return firstNum + secondNum;
        case '-': return firstNum - secondNum;
        case '*': return firstNum * secondNum;
        case '/': return firstNum / secondNum;
        default: return "Invalid operation";
    }
}


function deleteElement() {
    del_symbol.forEach(symbol => {
        symbol.addEventListener("click", () => {
            content_holder.textContent = content_holder.textContent.slice(0, -1);
            if (secondNum !== '') {
                secondNum = secondNum.slice(0, -1);
            } else if (operation !== '') {
                operation = operation.slice(0, -1);
            } else {
                firstNum = firstNum.slice(0, -1);
            }
        });
    });
}

function clearScreen() {
    clear_symbol.forEach(symbol => {
        symbol.addEventListener("click", () => {
            content_holder.textContent = "";
            firstNum = '';
            secondNum = '';
            operation = '';
        });
    });
}


function showResult(result) {
    content_holder.textContent = '';
    content_holder.textContent = result;
}


document.querySelector(".equals-symbol").addEventListener("click", () => {
    if (firstNum !== '' && operation !== '' && secondNum !== '') {
        const result = performOperation(operation, firstNum, secondNum);
        showResult(result);
        firstNum = result.toString();
        secondNum = '';
        operation = '';
    }
});



function runCalculator() {
    getOperand();
    deleteElement();
    getNumber();  
  
    clearScreen();
}

runCalculator();
