/*
 * ACTIVITY 4: Comparison Operators in Conditional Logic
 * 
 * Problem 1: Using Comparisons in if Statements
 */

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// Your task:
// 1. Write an if statement to check if user is adult (age >= 18)
// 2. Write an if-else to check if score is passing (>= 70)
// 3. Write nested if statements to check:
//    - If user is adult AND has membership, give discount
//    - If user is adult but no membership, show membership offer
//    - If user is not adult, show age restriction message
//
// 4. Challenge: Create a 'calculateDiscount' function that:
//    - Takes age, score, hasMembership
//    - Returns discount percentage based on multiple comparisons
//    - Uses clear comparison logic

// ============================================================================
// Problem 2: Ternary Operator with Comparisons
// Use ternary operator for simple comparisons
// ============================================================================

const price = 100;
const isMember = true;

// Your task:
// 1. Use ternary to set discount: isMember ? 0.1 : 0
// 2. Use ternary to set status: price > 50 ? "expensive" : "affordable"
// 3. Create nested ternary for:
//    - If member: 20% discount
//    - Else if price > 100: 10% discount
//    - Else: 0% discount
//
// 4. Challenge: Convert a multi-condition if-else to a readable ternary chain
// 5. Explain when to use ternary vs if-else

// ============================================================================
// Problem 3: Comparison in Loops
// Use comparisons to control loop execution
// ============================================================================

const numbers = [5, 10, 15, 20, 25, 30];

// Your task:
// 1. Use for loop to find all numbers greater than 15
// 2. Use while loop to find first number greater than 20
// 3. Use forEach with comparison to count numbers between 10 and 25
//
// 4. Challenge: Create a 'filterByRange' function that:
//    - Takes an array, min, and max
//    - Returns filtered array using comparisons
//    - Handles edge cases (min > max, empty array, etc.)

// ============================================================================
// Problem 4: Comparison-Based Sorting
// Use comparisons to sort data
// ============================================================================

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// Your task:
// 1. Sort students by grade (ascending) using comparison in sort()
// 2. Sort students by grade (descending) using comparison
// 3. Sort students by name alphabetically
//
// 4. Challenge: Create a 'multiSort' function that:
//    - Takes an array and sort criteria
//    - Can sort by multiple fields (e.g., grade then name)
//    - Uses comparison operators effectively
//    Example: multiSort(students, ["grade", "desc"], ["name", "asc"])

