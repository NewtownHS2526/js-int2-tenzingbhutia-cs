/*
 * ACTIVITY 5: Working with Strings
 * 
 * Problem 1: String Methods and Operations
 * Master string manipulation
 */

const text = "Hello World";
const email = "user@example.com";

// Your task:
// 1. String methods:
//    - text.toUpperCase(), text.toLowerCase()
//    - text.indexOf("World"), text.includes("Hello")
//    - text.slice(0, 5), text.substring(0, 5)
//    - text.replace("World", "JavaScript")
//
// 2. Challenge: Create a function 'analyzeString' that:
//    - Takes a string
//    - Returns object with: {length, wordCount, hasNumbers, hasLetters, uppercase, lowercase}

// ============================================================================
// Problem 2: Template Literals
// Use template literals for string interpolation
// ============================================================================

const name = "Alice";
const age = 30;
const city = "New York";

// Your task:
// 1. Create strings using template literals:
//    - `My name is ${name}`
//    - Multi-line strings with template literals
//    - Expressions inside: `Next year I'll be ${age + 1}`
//
// 2. Challenge: Create a function 'formatEmail' that:
//    - Takes user object: {firstName, lastName, domain}
//    - Returns formatted email using template literals
//    - Format: firstName.lastName@domain.com

// ============================================================================
// Problem 3: String Conversion and Parsing
// Convert and parse strings
// ============================================================================

const numStr = "123.45";
const dateStr = "2024-12-15";
const csvLine = "apple,banana,orange";

// Your task:
// 1. Parse number from string:
//    - parseInt(numStr), parseFloat(numStr)
//    - Number(numStr), +numStr
//
// 2. Split string: csvLine.split(",")
//
// 3. Challenge: Create a function 'parseCSV' that:
//    - Takes a CSV string line
//    - Returns array of values
//    - Handles quotes and commas inside values
//    - Converts numbers automatically

// ============================================================================
// Problem 4: String Validation
// Validate string formats
// ============================================================================

// Your task:
// 1. Check if string is empty: str.length === 0, str === ""
// 2. Check if string contains only letters: use regex or loop
// 3. Check if string is valid email format (basic check)
//
// 4. Challenge: Create a function 'validateString' that:
//    - Takes a string and validation type ("email", "phone", "password")
//    - Returns {valid: true/false, errors: []}
//    - Validates format according to type
//    - Returns detailed error messages

