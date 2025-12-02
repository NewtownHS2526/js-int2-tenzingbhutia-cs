/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// Your task:
// 1. Create arrow functions to:
//    - Filter employees by department
//    - Calculate average salary for a department
//    - Give a 10% raise to employees above a certain age
//    - Get employee names in "Last, First" format (assume single word names for simplicity)

// SOLUTIONS:
const filterByDept = (dept) => employees.filter(emp => emp.department === dept);

const avgSalaryByDept = (dept) => {
    const list = filterByDept(dept);
    return list.reduce((sum, emp) => sum + emp.salary, 0) / list.length;
};

const giveRaiseByAge = (ageLimit) =>
    employees.map(emp =>
        emp.age > ageLimit ? { ...emp, salary: emp.salary * 1.1 } : emp
    );

const formatName = (fullName) => {
    const [first, last] = fullName.split(" ");
    return `${last}, ${first}`;
};

// 2. Challenge: Create a function 'analyzeDepartment' that:
//    - Takes a department name
//    - Returns an object with: {dept, employeeCount, avgSalary, totalBudget, employees}
//    Use arrow functions throughout

// SOLUTION:
const analyzeDepartment = (dept) => {
    const emps = filterByDept(dept);
    return {
        dept,
        employeeCount: emps.length,
        avgSalary: avgSalaryByDept(dept),
        totalBudget: emps.reduce((sum, emp) => sum + emp.salary, 0),
        employees: emps
    };
};

// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions
// ============================================================================

// Your task:
// 1. Create validation arrow functions:
//    - isRequired(value) - checks if value exists
//    - minLength(str, len) - checks string length
//    - isEmail(str) - checks email format
//    - isNumber(val) - checks if number
//    - isPositive(num) - checks if positive number

// SOLUTIONS:
const isRequired = (value) => value !== "" && value !== undefined && value !== null;
const minLength = (str, len) => str.length >= len;
const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
const isNumber = (val) => !isNaN(val);
const isPositive = (num) => num > 0;

// 2. Create a 'validateForm' function that takes an object and validation rules:
//    Example:
//    const rules = {
//        email: [isRequired, isEmail],
//        password: [isRequired, (p) => minLength(p, 8)]
//    };

// SOLUTION:
const validateForm = (form, rules) => {
    const errors = {};
    let valid = true;

    for (const field in rules) {
        errors[field] = [];
        const value = form[field];

        rules[field].forEach(check => {
            if (!check(value)) {
                valid = false;
                errors[field].push("Validation failed");
            }
        });
    }
    return { valid, errors };
};

// 3. Challenge: Create a validator that returns error messages for each field
//    Return format: {valid: true/false, errors: {field: ["error1", "error2"]}}

// SOLUTION:
const validateFormWithMessages = (form, rules) => {
    const errors = {};
    let valid = true;

    for (const field in rules) {
        errors[field] = [];
        const value = form[field];
        
        rules[field].forEach(rule => {
            const { check, message } = rule;
            if (!check(value)) {
                valid = false;
                errors[field].push(message);
            }
        });
    }

    return { valid, errors };
};

// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions
// ============================================================================

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// Your task:
// 1. Create arrow functions to:
//    - Sort products by price (ascending and descending)
//    - Sort products by multiple criteria (category, then price)
//    - Filter products by category
//    - Filter products with low stock (< 10 items)

// SOLUTIONS:
const sortPriceAsc = (arr) => [...arr].sort((a, b) => a.price - b.price);
const sortPriceDesc = (arr) => [...arr].sort((a, b) => b.price - a.price);

const sortByCategoryThenPrice = (arr) =>
    [...arr].sort((a, b) => 
        a.category.localeCompare(b.category) || a.price - b.price
    );

const filterByCategoryProducts = (arr, category) =>
    arr.filter(p => p.category === category);

const filterLowStock = (arr) => arr.filter(p => p.stock < 10);

// 2. Challenge: Create a 'smartFilter' function that:
//    - Takes an array and multiple filter criteria
//    - Returns filtered and sorted results
//    Example: smartFilter(products, {category: "Electronics", maxPrice: 800, minStock: 10})

// SOLUTION:
const smartFilter = (arr, criteria) => {
    let result = [...arr];

    if (criteria.category)
        result = result.filter(p => p.category === criteria.category);

    if (criteria.maxPrice)
        result = result.filter(p => p.price <= criteria.maxPrice);

    if (criteria.minStock)
        result = result.filter(p => p.stock >= criteria.minStock);

    return result.sort((a, b) => a.price - b.price);
};

// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities
// ============================================================================

// Your task:
// Create a utilities object with arrow function methods:
// 1. debounce(func, delay) - delays function execution until after delay milliseconds
// 2. throttle(func, limit) - limits function execution to once per limit milliseconds
// 3. memoize(func) - caches function results for same inputs
// 4. pipe(...functions) - composes functions left to right
// 5. compose(...functions) - composes functions right to left
//
// Challenge: Test each utility with real scenarios:
// - Use debounce for a search input
// - Use throttle for scroll events
// - Use memoize for expensive calculations (like fibonacci)
// - Use pipe/compose for data transformations

// SOLUTIONS:
const utils = {
    debounce: (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    },

    throttle: (func, limit) => {
        let last = 0;
        return (...args) => {
            const now = Date.now();
            if (now - last >= limit) {
                last = now;
                func(...args);
            }
        };
    },

    memoize: (func) => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache[key]) return cache[key];
            return cache[key] = func(...args);
        };
    },

    pipe: (...fns) => (value) =>
        fns.reduce((v, fn) => fn(v), value),

    compose: (...fns) => (value) =>
        fns.reduceRight((v, fn) => fn(v), value)
};

// Challenge tests
const fib = utils.memoize(n => n <= 1 ? n : fib(n - 1) + fib(n - 2));

const add2 = x => x + 2;
const square = x => x * x;

const piped = utils.pipe(add2, square)(5);
const composed = utils.compose(square, add2)(5);
