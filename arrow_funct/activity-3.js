/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 * 
 * Problem 1: Implicit vs Explicit Returns
 * For each scenario, determine whether to use implicit or explicit return
 */

// Your task:
// 1. A function that returns a single expression - write with implicit return
const addFive = num => num + 5;

// 2. A function that has conditional logic before returning - write with explicit return
const checkAge = age => {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
};

// 3. A function that needs to log something before returning - write with explicit return
const logAndReturn = value => {
    console.log("Logging:", value);
    return value * 2;
};

// 4. A function that returns an object literal - write both ways and explain the difference
// Implicit return (must wrap object in parentheses)
const createUserImplicit = (name, age) => ({ name, age });

// Explicit return
const createUserExplicit = (name, age) => {
    return { name, age };
};

// Explanation:
// Implicit requires parentheses around the object.
// Without parentheses, JS thinks {} is a function block, not an object.

// ============================================================================
// Problem 2: Arrow Functions with Destructuring
// ============================================================================

// 1. distanceFromOrigin({x, y})
const distanceFromOrigin = ({ x, y }) => Math.sqrt(x * x + y * y);
console.log(distanceFromOrigin({ x: 3, y: 4 })); // 5

// 2. function taking [firstName, lastName, age]
const formatUser = ([firstName, lastName, age]) =>
    `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;
console.log(formatUser(["Tenzing", "Bhutia", 17]));

// 3. nested object {user: {name, email}}
const extractUserInfo = ({ user: { name, email } }) =>
    `Name: ${name}, Email: ${email}`;
console.log(extractUserInfo({ user: { name: "Alex", email: "alex@test.com" }}));

// 4. Challenge: universal processor
const processData = (data) => {
    if (Array.isArray(data)) return formatUser(data);
    if (data.x !== undefined && data.y !== undefined) return distanceFromOrigin(data);
    if (data.user) return extractUserInfo(data);
    return "Unknown format";
};

console.log(processData({ x: 3, y: 4 }));
console.log(processData(["John", "Doe", 20]));
console.log(processData({ user: { name: "Maya", email: "maya@mail.com" }}));


// ============================================================================
// Problem 3: Arrow Functions and Event Handlers
// ============================================================================

const button = {
    text: "Click me",
    counter: 0,
    innerText: "Click me"
};

// 1. Click → increment counter
button.onClick = () => {
    button.counter++;
    console.log("Clicked:", button.counter);
};

// 2. Double-click → reset counter
button.onDoubleClick = () => {
    button.counter = 0;
    console.log("Counter reset to 0");
};

// 3. Mouseover → change text
button.onMouseOver = () => {
    button.innerText = "Hovering!";
    console.log("Mouse over → text changed");
};

// 4. Challenge: counter with localStorage
const createPersistentCounter = () => {
    let count = Number(localStorage.getItem("count")) || 0;

    return {
        increment: () => {
            count++;
            localStorage.setItem("count", count);
            return count;
        },
        reset: () => {
            count = 0;
            localStorage.setItem("count", 0);
            return count;
        },
        get: () => count
    };
};

const persistentCounter = createPersistentCounter();
// Usage example:
// persistentCounter.increment();
// persistentCounter.reset();
// console.log(persistentCounter.get());


// ============================================================================
// Problem 4: Functional Composition with Arrow Functions
// ============================================================================

// 1. increment
const increment = x => x + 1;

// 2. double
const double = x => x * 2;

// 3. square
const square = x => x * x;

// 4. pipe (left → right)
const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

// 5. compose (right → left)
const compose = (...fns) => value =>
    fns.reduceRight((acc, fn) => fn(acc), value);

// 6. Test using number 5
const resultPipe = pipe(increment, double, square)(5);
// increment(5)=6 → double(6)=12 → square(12)=144

const resultCompose = compose(increment, double, square)(5);
// square(5)=25 → double(25)=50 → increment(50)=51

console.log("Pipe result:", resultPipe);       // 144
console.log("Compose result:", resultCompose); // 51
