/*
 * ACTIVITY 4: Higher-Order Functions
 * 
 * Problem 1: Functions as Arguments
 * Pass functions as arguments to other functions
 */

const numbers = [1, 2, 3, 4, 5];

// Your task:
// 1. Create a function 'forEachCustom' that:
//    - Takes an array and a callback function
//    - Calls callback for each element
//    - Mimics Array.forEach behavior
//
// 2. Create a function 'mapCustom' that:
//    - Takes an array and a transformation function
//    - Returns new array with transformed values
//    - Mimics Array.map behavior
//
// 3. Create a function 'filterCustom' that:
//    - Takes an array and a predicate function
//    - Returns new array with filtered values
//    - Mimics Array.filter behavior
//
// 4. Challenge: Create a function 'reduceCustom' that:
//    - Takes array, reducer function, and initial value
//    - Returns accumulated result
//    - Mimics Array.reduce behavior

// ============================================================================
// Problem 2: Functions as Return Values
// Return functions from other functions
// ============================================================================

// Your task:
// 1. Create a function 'createGreeter' that:
//    - Takes a greeting message
//    - Returns a function that takes a name
//    - Returned function uses the greeting message
//
// 2. Create a function 'createCalculator' that:
//    - Returns an object with methods: add, subtract, multiply, divide
//    - Each method is a function that performs the operation
//
// 3. Challenge: Create a function 'createPipeline' that:
//    - Takes multiple transformation functions
//    - Returns a function that applies all transformations in sequence
//    - Example: const pipeline = createPipeline(double, addOne, square);
//              pipeline(5) // applies all three functions

// ============================================================================
// Problem 3: Callback Functions
// Use callbacks for asynchronous-style operations
// ============================================================================

// Your task:
// 1. Create a function 'processData' that:
//    - Takes data and a callback function
//    - Processes data (e.g., doubles it)
//    - Calls callback with result
//
// 2. Create a function 'fetchUser' (simulate async) that:
//    - Takes userId and callback
//    - Simulates delay using setTimeout
//    - Calls callback with user data
//
// 3. Challenge: Create a function 'retryOperation' that:
//    - Takes an operation function and max retries
//    - Calls operation, retries on failure
//    - Calls success/error callbacks

// ============================================================================
// Problem 4: Functional Programming Patterns
// Apply functional programming concepts
// ============================================================================

const students = [
    { name: "Alice", score: 85, age: 20 },
    { name: "Bob", score: 92, age: 19 },
    { name: "Charlie", score: 78, age: 21 }
];

// Your task:
// 1. Create reusable transformation functions:
//    - getName: extracts name
//    - getScore: extracts score
//    - isPassing: checks if score >= 70
//
// 2. Use these functions with map/filter:
//    - Get all names
//    - Get all passing students
//
// 3. Challenge: Create a function 'compose' that:
//    - Takes multiple functions
//    - Returns composed function
//    - Applies functions right to left
//    Example: compose(upperCase, addPrefix)("hello")

