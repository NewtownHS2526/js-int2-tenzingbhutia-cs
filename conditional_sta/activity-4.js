/*
 * ACTIVITY 4: Conditional Statements in Loops
 * 
 * Problem 1: Conditionals Inside Loops
 * Use conditionals to control loop behavior
 */

const numbers = [5, 12, 8, 20, 3, 15, 7];

// Your task:
// 1. Loop through numbers and log only even numbers
// 2. Loop through numbers and log only numbers greater than 10
// 3. Loop through numbers and calculate sum of positive numbers only
//
// 4. Challenge: Create a function 'filterAndTransform' that:
//    - Takes an array of numbers
//    - Returns new array with only numbers > 10, each multiplied by 2
//    - Use loop with conditionals

// ============================================================================
// Problem 2: Break and Continue
// Control loop flow with conditionals
// ============================================================================

const scores = [85, 92, 78, 95, 88, 65, 90];

// Your task:
// 1. Loop through scores and stop when you find a score < 70 (use break)
// 2. Loop through scores and skip scores < 80 (use continue)
// 3. Find the first score >= 90 and log its index
//
// 4. Challenge: Create a function 'findFirstPassingScore' that:
//    - Takes an array of scores and passing threshold
//    - Returns index of first passing score
//    - Returns -1 if no passing score found
//    - Use break appropriately

// ============================================================================
// Problem 3: Nested Loops with Conditionals
// Use conditionals in nested loop structures
// ============================================================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Your task:
// 1. Loop through matrix and log all even numbers
// 2. Loop through matrix and calculate sum of all numbers
// 3. Loop through matrix and find the maximum value
//
// 4. Challenge: Create a function 'findInMatrix' that:
//    - Takes a 2D array and a target value
//    - Returns {row, col} if found, null if not found
//    - Use nested loops with conditional checks

// ============================================================================
// Problem 4: Conditional Loop Control
// Complex loop scenarios with conditionals
// ============================================================================

const students = [
    { name: "Alice", grade: 85, attendance: 95 },
    { name: "Bob", grade: 92, attendance: 88 },
    { name: "Charlie", grade: 65, attendance: 75 },
    { name: "Diana", grade: 78, attendance: 90 }
];

// Your task:
// 1. Loop through students and log names of those who passed (grade >= 70)
// 2. Loop through students and count how many have perfect attendance (100)
// 3. Loop through students and find first student with grade < 70
//
// 4. Challenge: Create a function 'analyzeStudents' that:
//    - Takes array of student objects
//    - Returns object with:
//      - passed: array of passing students (grade >= 70)
//      - failed: array of failing students
//      - excellent: array of students with grade >= 90 AND attendance >= 95
//    - Use loops with multiple conditionals

