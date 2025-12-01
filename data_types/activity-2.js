/*
 * ACTIVITY 2: Type Conversion and Coercion
 * 
 * Problem 1: Explicit Type Conversion
 * Convert between data types intentionally
 */

const numStr = "123";
const strNum = 456;
const boolStr = "true";

// Your task:
// 1. Convert string to number:
//    - Number("123")
//    - parseInt("123")
//    - parseFloat("123.45")
//    - +"123"
//
// 2. Convert number to string:
//    - String(123)
//    - (123).toString()
//    - 123 + ""
//
// 3. Convert to boolean:
//    - Boolean(1), Boolean(0)
//    - Boolean(""), Boolean("text")
//
// 4. Challenge: Create a function 'smartConvert' that:
//    - Takes a value and target type ("number", "string", "boolean")
//    - Returns converted value
//    - Handles invalid conversions gracefully

// ============================================================================
// Problem 2: Type Coercion
// Understand implicit type conversion
// ============================================================================

// Your task:
// 1. Predict and test these expressions:
//    "5" + 3        // What happens?
//    5 + "3"        // What happens?
//    "5" - 3        // What happens?
//    "5" * 3        // What happens?
//    "5" / 3        // What happens?
//
// 2. Test comparisons:
//    "5" == 5       // Loose equality
//    "5" === 5      // Strict equality
//    0 == false
//    0 === false
//
// 3. Challenge: Create examples showing:
//    - When coercion is helpful
//    - When coercion causes problems
//    - How to avoid unwanted coercion

// ============================================================================
// Problem 3: Type Checking
// Check data types accurately
// ============================================================================

const value1 = 42;
const value2 = "42";
const value3 = null;
const value4 = undefined;
const value5 = [];
const value6 = {};

// Your task:
// 1. Use typeof operator on each value
// 2. Understand typeof limitations:
//    - typeof null returns "object" (why?)
//    - typeof [] returns "object"
//
// 3. Better type checking:
//    - Array.isArray([])
//    - value === null for null
//    - value === undefined for undefined
//
// 4. Challenge: Create a function 'getType' that:
//    - Returns accurate type: "number", "string", "boolean", "null", 
//      "undefined", "array", "object", "function"
//    - Handles all edge cases correctly

// ============================================================================
// Problem 4: Type Safety Practices
// Write type-safe code
// ============================================================================

function addNumbers(a, b) {
    // Your task:
    // 1. Add type checking to ensure a and b are numbers
    // 2. Return error message if types are invalid
    // 3. Handle edge cases (null, undefined, string numbers)
    
    return a + b;
}

// Challenge: Create a function 'safeAdd' that:
// - Validates both parameters are numbers
// - Converts string numbers if possible ("123" -> 123)
// - Returns {success: true, result: sum} or {success: false, error: message}
// - Never throws errors, always returns a result object

