/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * Understand the difference between loose and strict equality
 */

// Your task:
// 1. Predict the output of each comparison, then test:
console.log(5 == "5");        // What does this return?
console.log(5 === "5");       // What does this return?
console.log(0 == false);      // What does this return?
console.log(0 === false);     // What does this return?
console.log(null == undefined); // What does this return?
console.log(null === undefined); // What does this return?

// 2. Create 5 examples where == returns true but === returns false
// 3. Explain when you would use == vs === in real code

// ============================================================================
// Problem 2: Relational Operators
// Work with <, >, <=, >= operators
// ============================================================================

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// Your task:
// 1. Compare ages: Is age1 less than age2? Is age1 at least 18?
// 2. Compare scores: Is score1 greater than 80? Is score2 at least 90?
// 3. Create expressions that check if a student can:
//    - Vote (age >= 18)
//    - Drive (age >= 16)
//    - Drink (age >= 21)
//    - Get senior discount (age >= 65)
// 4. Challenge: Write a function 'checkEligibility' that takes age and returns 
//    an object with all eligibility checks

// ============================================================================
// Problem 3: String Comparisons
// Understand how strings are compared
// ============================================================================

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// Your task:
// 1. Compare: name1 < name2 (what does this mean for strings?)
// 2. Compare: name1 === name3 (case-sensitive comparison)
// 3. How would you do a case-insensitive comparison?
// 4. Challenge: Create a function 'sortNames' that sorts an array of names 
//    alphabetically, case-insensitively

// ============================================================================
// Problem 4: Comparison with Different Data Types
// Understand type coercion in comparisons
// ============================================================================

// Your task:
// 1. Predict and test these comparisons:
//    "10" > 9
//    "10" < 20
//    "apple" > "banana"
//    true > false
//    null < 1
//    undefined == null

// 2. Create 3 examples where type coercion leads to unexpected results
// 3. Explain how to avoid these issues
// 4. Challenge: Write a 'safeCompare' function that compares two values 
//    strictly without type coercion, but handles edge cases gracefully

