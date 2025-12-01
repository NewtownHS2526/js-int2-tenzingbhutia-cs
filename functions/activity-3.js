/*
 * ACTIVITY 3: Function Scope and Closures
 * 
 * Problem 1: Variable Scope
 * Understand function scope and lexical scope
 */

let globalVar = "I'm global";

// Your task:
// 1. Create a function 'testScope' that:
//    - Has a local variable with same name as globalVar
//    - Logs both global and local variables
//    - Demonstrates scope difference
//
// 2. Create nested functions to demonstrate:
//    - Outer function variable accessible in inner function
//    - Inner function variable NOT accessible in outer function
//
// 3. Challenge: Create a scope demonstration:
//    - Global variable
//    - Function-level variable
//    - Block-level variable (inside if/for)
//    - Show which variables are accessible where

// ============================================================================
// Problem 2: Closures
// Understand and create closures
// ============================================================================

// Your task:
// 1. Create a function 'createCounter' that:
//    - Returns a function
//    - Returned function increments and returns a counter
//    - Counter persists between calls (closure)
//    Example: const counter = createCounter(); counter(); // 1, counter(); // 2
//
// 2. Create a function 'createMultiplier' that:
//    - Takes a number
//    - Returns a function that multiplies its argument by that number
//    Example: const double = createMultiplier(2); double(5); // 10
//
// 3. Challenge: Create a function 'createBankAccount' that:
//    - Has private balance variable (closure)
//    - Returns object with methods: deposit, withdraw, getBalance
//    - Balance is only accessible through methods

// ============================================================================
// Problem 3: IIFE (Immediately Invoked Function Expression)
// Use IIFE for scope isolation
// ============================================================================

// Your task:
// 1. Create an IIFE that:
//    - Logs a message immediately
//    - Has its own scope
//
// 2. Create an IIFE that:
//    - Takes parameters
//    - Performs calculation
//    - Returns result
//
// 3. Challenge: Create a module pattern using IIFE:
//    - Private variables and functions
//    - Public API returned as object
//    - Example: calculator module with private operations

// ============================================================================
// Problem 4: Closure in Practice
// Apply closures to real-world scenarios
// ============================================================================

// Your task:
// 1. Create a function 'createLogger' that:
//    - Takes a prefix string
//    - Returns a function that logs messages with prefix
//    - Uses closure to remember prefix
//
// 2. Create a function 'createValidator' that:
//    - Takes validation rules
//    - Returns a function that validates values using those rules
//    - Rules stored in closure
//
// 3. Challenge: Create a function 'createCache' that:
//    - Returns an object with methods: get, set, clear
//    - Uses closure to store cache data privately
//    - Cache persists between method calls
//    - Example: const cache = createCache(); cache.set("key", "value"); cache.get("key");

