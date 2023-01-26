class Calculator {
    static add(x, y) {
        return x + y
    }

    static subtract(x, y) {
        return x - y
    }

    static multiply(x, y) {
        return x * y
    }

    static divide(x, y) {
        return x / y
    }

    static operate(num1, num2, operator) {
        switch(operator) {
            case '+':
                return this.add(num1, num2)
            case '-':
                return this.subtract(num1, num2)
            case 'x':
                return this.multiply(num1, num2)
            case '÷':
                return this.divide(num1, num2)
        }
    }

    static roundResult(num) {
        return Math.round(num * 1000) / 1000
    }
}

const UI = (() => {
    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');

    previousOperand.textContent = '';
    currentOperand.textContent = 0;

    let storedNumber = '';
    let clickedOperator = '';
    let firstNumber = '';
    let result = '';

    const initButtons = () => {
        const equalsBtn = document.querySelector('.equals')
        
        getFirstNumber()
        getOperator()
        equalsBtn.addEventListener('click', getResult)
        deleteLastNumber()
        clearAll()
    }

    const getFirstNumber = () => {
        const digits = document.querySelectorAll('.digit')

        digits.forEach((digit) => {
            digit.addEventListener('click', (e) => {
                storedNumber += e.target.textContent
                currentOperand.textContent = storedNumber
            })
        })
    }

    const getOperator = () => {
        const operators = document.querySelectorAll('.operator')

        operators.forEach((operator) => {
            operator.addEventListener('click', () => {
                firstNumber = storedNumber
                clickedOperator = operator.textContent
                previousOperand.textContent = `${storedNumber} ${clickedOperator}`
                storedNumber = ''
            })
        })
    }

    const getResult = () => {
        result = Calculator.operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator)
        currentOperand.textContent = Calculator.roundResult(result)
        if ((clickedOperator === '÷' && parseFloat(storedNumber) === 0) || (clickedOperator === 'x' && parseFloat(storedNumber) === 0)) {
            currentOperand.textContent = 'ERROR'
        }
        previousOperand.textContent = `${firstNumber} ${clickedOperator} ${storedNumber}`
        storedNumber = result
    }

    const deleteLastNumber = () => {
        const deleteBtn = document.querySelector('.delete')

        deleteBtn.addEventListener('click', () => {
            let numberLength = storedNumber.length
            let newNumber = storedNumber.slice(0, numberLength - 1)
            storedNumber = newNumber
            currentOperand.textContent = storedNumber
            if (currentOperand.textContent === '') {
                currentOperand.textContent = 0
            }
        })
    }

    const clearAll = () => {
        const clearBtn = document.querySelector('.clear')

        clearBtn.addEventListener('click', reset)
    }

    const reset = () => {
        storedNumber = ''
        firstNumber = ''
        result = ''
        clickedOperator = ''
        currentOperand.textContent = 0
        previousOperand.textContent = ''
    }

    return { initButtons }
})()

document.addEventListener('DOMContentLoaded', UI.initButtons)

