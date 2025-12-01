/*
 * ACTIVITY 3: Switch Statements
 * 
 * Problem 1: Basic Switch Statement
 * Use switch for multiple value comparisons
 */

const dayOfWeek = 3; // 1 = Monday, 7 = Sunday

// Your task:
// 1. Write a switch statement to log the day name based on dayOfWeek
//    - 1: "Monday", 2: "Tuesday", etc., default: "Invalid day"
// 2. Convert this if-else chain to switch:
//    if (status === "pending") {
//        message = "Please wait";
//    } else if (status === "approved") {
//        message = "Success!";
//    } else if (status === "rejected") {
//        message = "Sorry";
//    }
//
// 3. Challenge: Create a function 'getDayType' that:
//    - Takes dayOfWeek (1-7)
//    - Returns "Weekday" (1-5) or "Weekend" (6-7) or "Invalid"
//    - Use switch with fall-through cases

// ============================================================================
// Problem 2: Switch with Multiple Cases
// Use fall-through and multiple case values
// ============================================================================

const month = 2;

// Your task:
// 1. Write a switch to determine season:
//    - Dec, Jan, Feb: "Winter"
//    - Mar, Apr, May: "Spring"
//    - Jun, Jul, Aug: "Summer"
//    - Sep, Oct, Nov: "Fall"
//    - Use fall-through cases
//
// 2. Create a function 'getDaysInMonth' that:
//    - Takes month number (1-12)
//    - Returns number of days
//    - Handle February (28 days for simplicity)
//    - Use switch statement
//
// 3. Challenge: Create a function 'getGradeRange' that:
//    - Takes letter grade (A, B, C, D, F)
//    - Returns numeric range: A (90-100), B (80-89), etc.
//    - Use switch statement
//    - Handle lowercase letters too

// ============================================================================
// Problem 3: Switch vs if-else
// Understand when to use switch vs if-else
// ============================================================================

const score = 85;
const status = "active";
const temperature = 25;

// Your task:
// 1. Rewrite this using switch:
//    if (score >= 90) {
//        grade = "A";
//    } else if (score >= 80) {
//        grade = "B";
//    } else if (score >= 70) {
//        grade = "C";
//    }
//
// 2. Explain: When should you use switch? When should you use if-else?
//
// 3. Challenge: Create a function that takes a comparison type and two values:
//    - "equals": a === b
//    - "greater": a > b
//    - "less": a < b
//    - Use switch statement
//    - Return boolean result

// ============================================================================
// Problem 4: Advanced Switch Patterns
// Use switch in complex scenarios
// ============================================================================

const userRole = "editor";
const action = "delete";

// Your task:
// 1. Create a permission checker using switch:
//    - "admin" can do: "read", "write", "delete", "manage"
//    - "editor" can do: "read", "write"
//    - "viewer" can do: "read"
//    - Use nested switch statements or switch with logical operators
//
// 2. Challenge: Create a function 'checkPermission' that:
//    - Takes userRole and action
//    - Returns true/false using switch statements
//    - Handle invalid roles/actions
//
// 3. Challenge: Create a calculator function using switch:
//    - Takes operator ("+", "-", "*", "/") and two numbers
//    - Returns result based on operator
//    - Handle division by zero
//    - Handle invalid operators

