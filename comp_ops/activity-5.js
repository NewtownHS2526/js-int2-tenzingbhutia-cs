/*
 * ACTIVITY 5: Edge Cases and Special Comparisons
 * 
 * Problem 1: NaN Comparisons
 * Handle NaN in comparisons (Not a Number)
 */

const result1 = 0 / 0; // NaN
const result2 = Math.sqrt(-1); // NaN
const result3 = parseInt("not a number"); // NaN

// Your task:
// 1. Test: result1 === NaN (what happens?)
// 2. Test: result1 == NaN (what happens?)
// 3. Find the correct way to check if a value is NaN
// 4. Create a function 'isValidNumber' that:
//    - Returns true if value is a valid number
//    - Returns false for NaN, Infinity, or non-numbers
//
// 5. Challenge: Write a 'safeCalculation' function that:
//    - Takes two numbers and an operation (+, -, *, /)
//    - Performs calculation with comparison checks
//    - Returns null if result is NaN or Infinity

// ============================================================================
// Problem 2: Infinity Comparisons
// Handle Infinity in comparisons
// ============================================================================

const positiveInf = Infinity;
const negativeInf = -Infinity;
const largeNum = 1e308 * 2;

// Your task:
// 1. Compare: positiveInf > 1000
// 2. Compare: negativeInf < -1000
// 3. Compare: positiveInf === Infinity
// 4. Compare: largeNum (what is it? Is it Infinity?)
//
// 5. Challenge: Create a function 'isFiniteNumber' that:
//    - Checks if a number is finite (not Infinity, not NaN)
//    - Use comparisons and logical operators
//
// 6. Challenge: Create a 'clamp' function that:
//    - Takes a value, min, and max
//    - Returns value if in range
//    - Returns min if value < min
//    - Returns max if value > max
//    - Handles Infinity cases

// ============================================================================
// Problem 3: Date Comparisons
// Compare dates and times
// ============================================================================

const date1 = new Date("2024-01-15");
const date2 = new Date("2024-02-15");
const date3 = new Date("2024-01-15");

// Your task:
// 1. Compare: date1 < date2 (earlier date is "less")
// 2. Compare: date1 === date3 (what happens? why?)
// 3. How do you properly compare if two dates are the same?
// 4. Create checks for:
//    - If date is in the past
//    - If date is in the future
//    - If date is today
//
// 5. Challenge: Create a 'compareDates' function that:
//    - Takes two dates
//    - Returns -1 if first is earlier, 0 if equal, 1 if later
//    - Uses proper date comparisons

// ============================================================================
// Problem 4: Complex Real-World Comparison Problem
// Build a comprehensive comparison system
// ============================================================================

const event = {
    name: "Conference",
    date: new Date("2024-12-15"),
    price: 150,
    capacity: 100,
    registered: 85,
    isCancelled: false
};

// Your task:
// Create a function 'checkEventStatus' that evaluates:
// 1. If event is in the past (date < today)
// 2. If event is full (registered >= capacity)
// 3. If event is almost full (registered >= capacity * 0.9)
// 4. If event is expensive (price > 100)
// 5. If event is cancelled
//
// Challenge: Return an object with status and recommendations:
// {
//   status: "available" | "full" | "past" | "cancelled",
//   canRegister: boolean,
//   urgency: "low" | "medium" | "high",
//   recommendation: string
// }
// Use multiple comparison operators and logical combinations

