/*
 * ACTIVITY 2: Ternary Operator and Logical Operators
 * 
 * Problem 1: Ternary Operator
 * Use ternary operator for simple conditionals
 */

const age = 18;
const price = 100;

// Your task:
// 1. Use ternary to assign status: age >= 18 ? "Adult" : "Minor"
// 2. Use ternary to calculate discount: price > 50 ? price * 0.9 : price
// 3. Use ternary to set message: age >= 21 ? "Can drink" : "Cannot drink"
//
// 4. Challenge: Convert these if-else statements to ternary:
//    if (score >= 70) {
//        result = "Pass";
//    } else {
//        result = "Fail";
//    }

// ============================================================================
// Problem 2: Logical Operators in Conditionals
// Use &&, ||, ! in conditional statements
// ============================================================================

const isLoggedIn = true;
const hasPermission = false;
const isAdmin = true;

// Your task:
// 1. Check if user can access: isLoggedIn && hasPermission
// 2. Check if user can delete: isLoggedIn && (hasPermission || isAdmin)
// 3. Check if user is blocked: !isLoggedIn
//
// 4. Challenge: Create a function 'checkAccess' that:
//    - Takes isLoggedIn, hasPermission, isAdmin, isBlocked
//    - Returns access level using logical operators:
//      - "Full access" if logged in AND (hasPermission OR isAdmin) AND not blocked
//      - "Limited access" if logged in AND not blocked
//      - "No access" otherwise

// ============================================================================
// Problem 3: Short-Circuit Evaluation
// Understand how && and || work in conditionals
// ============================================================================

const user = {
    name: "Alice",
    email: "alice@example.com"
};

// Your task:
// 1. Use && to safely access: user && user.name
// 2. Use || to provide default: user.name || "Guest"
// 3. Combine both: user && user.email || "No email"
//
// 4. Challenge: Create a function 'getUserDisplayName' that:
//    - Takes a user object (may be null/undefined)
//    - Returns user.name if exists, or user.email if name doesn't exist, or "Anonymous"
//    - Use short-circuit evaluation

// ============================================================================
// Problem 4: Complex Conditional Logic
// Combine multiple conditional techniques
// ============================================================================

const score = 85;
const attendance = 92;
const hasSubmittedAll = true;

// Your task:
// 1. Determine if student passes:
//    - Score >= 70 AND attendance >= 80 AND hasSubmittedAll
//    - Use logical operators
//
// 2. Determine grade with extra credit:
//    - If score >= 90 AND attendance >= 95, add 5 points
//    - If score >= 80 AND attendance >= 90, add 3 points
//    - Use nested conditionals with logical operators
//
// 3. Challenge: Create a function 'calculateFinalGrade' that:
//    - Takes score, attendance, hasSubmittedAll, hasExtraCredit
//    - Base grade: score
//    - Penalty: -10 if attendance < 80 OR !hasSubmittedAll
//    - Bonus: +5 if hasExtraCredit AND attendance >= 95
//    - Returns final grade (0-100)
//    - Use complex conditional logic

