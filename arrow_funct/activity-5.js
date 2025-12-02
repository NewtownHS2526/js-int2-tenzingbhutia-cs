/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// Your task:
// 1. Create an arrow function 'greet' with default name parameter ("Guest")
// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0) parameters
// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
// 4. Test each function with and without parameters

// ============================================================================

const greet10 = (name = "Guest") => `Hello, ${name}!`;

const calculatePrice = (price, tax = 0.1, discount = 0) =>
    price + price * tax - discount;

const formatDate = (date = new Date(), format = "YYYY-MM-DD") => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    if (format === "YYYY-MM-DD") return `${y}-${m}-${d}`;
    if (format === "MM/DD/YYYY") return `${m}/${d}/${y}`;
    if (format === "DD-MM-YYYY") return `${d}-${m}-${y}`;

    return `${y}-${m}-${d}`;
};

// TESTS
console.log(greet());
console.log(greet("Tenzin"));

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2, 10));

console.log(formatDate());
console.log(formatDate(new Date(), "MM/DD/YYYY"));


// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments
// ============================================================================

// Your task:
// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
// 2. Create an arrow function 'findMax' that finds the maximum value
// 3. Create an arrow function 'combineStrings' that combines strings with a separator
// 4. Challenge: Create 'createLogger' that logs arguments with a timestamp

// ============================================================================

const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);

const findMax = (...nums) => Math.max(...nums);

const combineStrings = (separator, ...strings) => strings.join(separator);

const createLogger = () => {
    return (...msgs) => {
        const time = new Date().toLocaleTimeString();
        console.log(`[${time}]`, ...msgs);
    };
};

// TESTS
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMax(5, 12, 3, 99, 4));
console.log(combineStrings("-", "a", "b", "c"));

const logger = createLogger();
logger("System online", { status: "OK" });


// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions
// ============================================================================

// Your task:
// 1. Create a curried arrow function 'add' where add(5)(10) returns 15
// 2. Create a curried arrow function 'multiply' where multiply(2)(3)(4) returns 24
// 3. Challenge: Create a generic 'curry' function that takes any function and curries it

// ============================================================================

const add = a => b => a + b;

const multiply = a => b => c => a * b * c;

const curry = fn => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...next) => curried(...args, ...next);
    };
};

// TESTS
console.log(add(5)(10));
console.log(multiply(2)(3)(4));

const curriedAdd = curry((a, b, c) => a + b + c);
console.log(curriedAdd(1)(2)(3));


// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state
// ============================================================================

// Your task:
// 1. createCounter(): increment, decrement, getValue, reset
// 2. createBankAccount(): deposit, withdraw, getBalance (balance private)
// 3. Challenge: createGameScore(): addScore, getScore, getLeader

// ============================================================================

const createCounter = () => {
    let count = 0;

    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count,
        reset: () => (count = 0)
    };
};

// TEST
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
counter.reset();
console.log(counter.getValue());


const createBankAccount = (initial = 0) => {
    let balance = initial;

    return {
        deposit: amt => balance += amt,
        withdraw: amt => balance = Math.max(0, balance - amt),
        getBalance: () => balance
    };
};

// TEST
const account = createBankAccount(50);
account.deposit(20);
console.log(account.getBalance());
account.withdraw(100);
console.log(account.getBalance());


const createGameScore = () => {
    const scores = {};

    return {
        addScore: (player, points) =>
            scores[player] = (scores[player] || 0) + points,

        getScore: player => scores[player] || 0,

        getLeader: () => {
            const entries = Object.entries(scores);
            if (entries.length === 0) return null;
            return entries.reduce((top, curr) =>
                curr[1] > top[1] ? curr : top
            )[0];
        }
    };
};

// TEST
const game = createGameScore();
game.addScore("Tenzin", 40);
game.addScore("Alex", 70);
game.addScore("Tenzin", 25);

console.log(game.getScore("Tenzin"));
console.log(game.getLeader());
