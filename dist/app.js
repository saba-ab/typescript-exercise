"use strict";
function calculateRectangleArea(rectangle) {
    return rectangle.width * rectangle.height;
}
function calculateRectanglePerimeter(rectangle) {
    return 2 * (rectangle.width + rectangle.height);
}
function calculateCircleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2);
}
function calculateCirclePerimeter(circle) {
    return 2 * Math.PI * circle.radius;
}
// Independent Functions
function addNumbers(a, b) {
    return a + b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
function findMax(numbers) {
    return Math.max(...numbers);
}
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
}
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}
// Test Cases
// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateCircleArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculateCirclePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateRectangleArea() {
        return this.height * this.width;
    }
    calculateRectanglePerimeter() {
        return 2 * (this.height + this.width);
    }
}
const rectangle = { width: 5, height: 8 };
const circle = { radius: 3 };
const rectangleArea = calculateRectangleArea(rectangle);
const rectanglePerimeter = calculateRectanglePerimeter(rectangle);
const circleArea = calculateCircleArea(circle);
const circlePerimeter = calculateCirclePerimeter(circle);
console.log(`Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`);
console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);
const sumResult = addNumbers(5, 3);
const multiplicationResult = multiplyNumbers(4, 7);
const capitalizedString = capitalizeString("javascript is fun");
const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(`Sum: ${sumResult}`);
console.log(`Multiplication: ${multiplicationResult}`);
console.log(`Capitalized String: ${capitalizedString}`);
console.log(`Even Numbers: ${evenNumbers}`);
const maxNumber = findMax([23, 56, 12, 89, 43]);
const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
const factorialResult = calculateFactorial(5);
console.log(`Max Number: ${maxNumber}`);
console.log(`Is Palindrome: ${isPalindromeResult}`);
console.log(`Factorial: ${factorialResult}`);
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
        this.balance = initialBalance;
        this.transactionHistory = [];
    }
    get getAccountInfo() {
        return {
            acc: this.accountNumber,
            balance: this.balance,
        };
    }
    deposit(amount) {
        this.recordTransaction("deposit", amount);
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.recordTransaction("withdraw", amount);
            this.balance -= amount;
            return this.balance;
        }
        else {
            console.log("not enough money on balance");
        }
    }
    transferFunds(amount) {
        if (amount <= this.balance) {
            this.recordTransaction("transfer", amount);
            this.balance -= amount;
            return this.balance;
        }
        else {
            console.log("not enough money on balance");
        }
    }
    getTransactionHistory() {
        return this.transactionHistory;
    }
    recordTransaction(type, amount) {
        const transactions = this.getTransactionHistory();
        const lastTransaction = transactions[transactions.length - 1];
        const lastId = lastTransaction === null || lastTransaction === void 0 ? void 0 : lastTransaction.id;
        if (!lastId) {
            this.transactionHistory.push({
                id: 1,
                transactionType: type,
                amount: amount,
            });
        }
        else {
            this.transactionHistory.push({
                id: lastId + 1,
                transactionType: type,
                amount: amount,
            });
        }
    }
}
const saba = new BankAccount(212, 100);
saba.deposit(200);
saba.transferFunds(50);
const Thistory = saba.getTransactionHistory();
const info = saba.getAccountInfo;
console.log("History", Thistory);
console.log("Info", info);
