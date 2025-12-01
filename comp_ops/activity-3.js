/*
 * ACTIVITY 3: Advanced Comparison Techniques
 * 
 * Problem 1: Comparing Arrays and Objects
 * Understand how objects and arrays are compared
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// Your task:
// 1. Test: arr1 === arr2 (what does this return and why?)
// 2. Test: arr1 === arr3 (what does this return and why?)
// 3. Test: obj1 === obj2 (what does this return and why?)
// 4. Test: obj1 === obj3 (what does this return and why?)
//
// 5. Challenge: Write a function 'deepEqual' that compares two objects/arrays 
//    by their values, not references
// 6. Challenge: Write a function 'compareArrays' that checks if two arrays 
//    have the same elements in the same order

// ============================================================================
// Problem 2: Chaining Comparison Operators
// Use comparison operator chaining effectively
// ============================================================================

const score = 85;
const age = 25;

// Your task:
// 1. Check if score is between 80 and 90: 80 <= score && score <= 90
// 2. Check if age is between 18 and 65: Use chaining
// 3. Check if score is NOT between 0 and 100 (invalid score)
//
// 4. Challenge: Create a function 'isInRange' that:
//    - Takes a value, min, and max
//    - Returns true if value is between min and max (inclusive)
//    - Handles edge cases (what if min > max?)
//
// 5. Challenge: Create a function 'validateInput' that checks:
//    - If a number is in valid range (0-100)
//    - If a string length is in valid range (1-50)
//    - Returns detailed validation result

// ============================================================================
// Problem 3: Comparison with Null and Undefined
// Handle edge cases in comparisons
// ============================================================================

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// Your task:
// 1. Compare each value with: null, undefined, 0, ""
// 2. Predict: value1 == null, value1 === null, value2 == undefined
// 3. Create checks for:
//    - If a variable is defined (not undefined)
//    - If a variable has a value (not null or undefined)
//    - If a variable is "falsy" (0, "", null, undefined, false)
//
// 4. Challenge: Write a 'safeCompare' function that handles null/undefined gracefully:
//    safeCompare(a, b) should return:
//    - true if both are null/undefined
//    - false if one is null/undefined and other isn't
//    - actual comparison otherwise

// ============================================================================
// Problem 4: Performance Considerations
// Optimize comparison operations
// ============================================================================

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your task:
// 1. Compare: largeArray.length > 0 vs largeArray.length !== 0
//    Which is more readable? Which is slightly faster?
//
// 2. Compare: value == null vs value === null || value === undefined
//    Which is preferred and why?
//
// 3. Challenge: Create a 'findMax' function that:
//    - Takes an array of numbers
//    - Returns the maximum value
//    - Handles empty arrays, null/undefined
//    - Uses efficient comparisons
//
// 4. Challenge: Create a 'binarySearch' function that:
//    - Takes a sorted array and target value
//    - Uses comparisons efficiently (<, >, ===)
//    - Returns index if found, -1 otherwise

