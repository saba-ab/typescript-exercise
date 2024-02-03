// გადავწეროთ მოცემული ფაილი typescript_ზე.
interface Irectangle {
  height: number;
  width: number;
}
interface Icircle {
  radius: number;
}
function calculateRectangleArea(rectangle: Irectangle) {
  return rectangle.width * rectangle.height;
}

function calculateRectanglePerimeter(rectangle: Irectangle) {
  return 2 * (rectangle.width + rectangle.height);
}

function calculateCircleArea(circle: Icircle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

function calculateCirclePerimeter(circle: Icircle) {
  return 2 * Math.PI * circle.radius;
}

// Independent Functions

function addNumbers(a: number, b: number): number {
  return a + b;
}

function multiplyNumbers(a: number, b: number): number {
  return a * b;
}

function capitalizeString(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function filterEvenNumbers(numbers: number[]) {
  return numbers.filter((num) => num % 2 === 0);
}

function findMax(numbers: number[]) {
  return Math.max(...numbers);
}

function isPalindrome(str: string) {
  const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

function calculateFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Test Cases

// სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
class Circle {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calculateCircleArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  calculateCirclePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}
class Rectangle {
  public width: number;
  public height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateRectangleArea(): number {
    return this.height * this.width;
  }
  calculateRectanglePerimeter(): number {
    return 2 * (this.height + this.width);
  }
}
const rectangle = { width: 5, height: 8 };
const circle = { radius: 3 };

const rectangleArea = calculateRectangleArea(rectangle);
const rectanglePerimeter = calculateRectanglePerimeter(rectangle);

const circleArea = calculateCircleArea(circle);
const circlePerimeter = calculateCirclePerimeter(circle);

console.log(
  `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
);
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

interface Transaction {
  id: number;
  amount: number;
  transactionType: string;
}

class BankAccount {
  private initialBalance: number;
  private accountNumber: number;
  private balance: number;
  private transactionHistory: Transaction[];
  constructor(accountNumber: number, initialBalance: number) {
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
  deposit(amount: number) {
    this.recordTransaction("deposit", amount);
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.recordTransaction("withdraw", amount);
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("not enough money on balance");
    }
  }
  transferFunds(amount: number) {
    if (amount <= this.balance) {
      this.recordTransaction("transfer", amount);
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("not enough money on balance");
    }
  }
  getTransactionHistory() {
    return this.transactionHistory;
  }
  recordTransaction(type: string, amount: number) {
    const transactions = this.getTransactionHistory();
    const lastTransaction = transactions[transactions.length - 1];
    const lastId = lastTransaction?.id;
    if (!lastId) {
      this.transactionHistory.push({
        id: 1,
        transactionType: type,
        amount: amount,
      });
    } else {
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
