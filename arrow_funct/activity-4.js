/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// Your task:
// 1. total price (price * quantity)
const calcTotal = item => item.price * item.quantity;

// 2. apply discount 15% if quantity >= 5
const applyDiscount = item => {
    const total = calcTotal(item);
    return item.quantity >= 5 ? total * 0.85 : total;
};

// 3. add tax of 8.5%
const addTax = total => total * 1.085;

// 4. filter items whose final total >= $10
const filterExpensive = total => total >= 10;

// 5. CHALLENGE: Full pipeline
const processedCart = cart
    .map(item => ({ 
        ...item, 
        total: addTax(applyDiscount(item)) 
    }))
    .filter(item => filterExpensive(item.total));

const grandTotal = processedCart
    .reduce((sum, item) => sum + item.total, 0);

console.log("Processed Cart:", processedCart);
console.log("Grand Total:", grandTotal.toFixed(2));

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// ============================================================================

// Arrow function version (WILL BREAK 'this')
const ShoppingCartArrow = {
    items: [],

    addItem: (name, price) => {
        // ❌ 'this' does NOT refer to the object
        // Arrow functions DO NOT bind 'this'
        console.log("❌ Arrow version fails because 'this' is undefined");
    },

    removeItem: name => {},
    getTotal: () => {},
    applyCoupon: percent => {}
};

// Regular function version (WORKS)
const ShoppingCart = {
    items: [],

    addItem(name, price) {
        this.items.push({ name, price });
    },

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
    },

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    },

    applyCoupon(percent) {
        const discount = percent / 100;
        this.items = this.items.map(item => ({
            ...item,
            price: item.price * (1 - discount)
        }));
    }
};

// Test
ShoppingCart.addItem("Laptop", 1200);
ShoppingCart.addItem("Mouse", 25);
ShoppingCart.applyCoupon(10);
console.log("Final cart:", ShoppingCart.items);
console.log("Total:", ShoppingCart.getTotal());

// Explanation:
// Arrow functions do NOT bind their own "this"
// Therefore they SHOULD NOT be used for object methods
// Regular functions are correct for object method context

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// ============================================================================

// Mock fetch for demonstration
const mockFetch = url =>
    Promise.resolve({
        json: () => Promise.resolve([
            { id: 1, status: "active" },
            { id: 2, status: "inactive" },
            { id: 3, status: "active" }
        ])
    });

// 1. Rewrite using arrow functions
mockFetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => data.filter(item => item.status === "active"))
    .then(active => console.log("Arrow Fetch:", active))
    .catch(err => console.error(err));

// 2. Async/await version
const loadData = async () => {
    try {
        const res = await mockFetch("https://api.example.com/data");
        const data = await res.json();
        const active = data.filter(item => item.status === "active");
        console.log("Async/Await:", active);
    } catch (err) {
        console.error(err);
    }
};

loadData();

// 3. Comparison:
// - Regular .then: more verbose
// - Arrow .then: cleaner, less code
// - async/await: MOST readable, looks like synchronous code

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// ============================================================================

// 1. createValidator returning an arrow function
const createValidator = rule => value => rule(value);

// Example usage:
const validateLength = createValidator(value => value.length >= 5);
console.log(validateLength("hello")); // true

// 3. Challenge: chainable validators
const combineValidators = (...validators) => value =>
    validators.every(v => v(value));

// Validators:
const isValidEmail = value =>
    /^\S+@\S+\.\S+$/.test(value);

const isValidPassword = value =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);

const isValidPhone = value =>
    /^\d{3}-\d{3}-\d{4}$/.test(value);

// Combined validator example:
const userValidator = combineValidators(
    isValidEmail,
    value => value.length <= 30
);

console.log(userValidator("test@example.com")); // true
console.log(userValidator("bademail@com"));     // false
