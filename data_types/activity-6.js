/*
 * ACTIVITY 6: Data Types - Integration Challenge
 * 
 * Problem 1: Type-Safe Data Processing
 * Build a robust data processing system
 */

const mixedData = [
    42,
    "hello",
    true,
    null,
    undefined,
    [1, 2, 3],
    { name: "Alice" },
    NaN,
    Infinity
];

// Your task:
// Create a function 'categorizeData' that:
// 1. Takes an array of mixed data types
// 2. Returns object with categories:
//    {
//      numbers: [],
//      strings: [],
//      booleans: [],
//      arrays: [],
//      objects: [],
//      nulls: [],
//      undefined: [],
//      invalid: []  // NaN, Infinity
//    }
// 3. Properly identifies each type
// 4. Handles all edge cases

// Challenge: Enhance to also count occurrences and provide statistics

// ============================================================================
// Problem 2: Data Type Converter Utility
// Create a comprehensive type conversion utility
// ============================================================================

// Your task:
// Create a 'TypeConverter' object with methods:
// 1. toNumber(value) - converts to number, returns null if invalid
// 2. toString(value) - converts to string
// 3. toBoolean(value) - converts to boolean (truthy/falsy)
// 4. toArray(value) - converts to array (if possible)
// 5. toObject(value) - converts to object (if possible)

// Challenge: Add method 'smartConvert(value, targetType)' that:
// - Automatically determines best conversion
// - Handles nested structures
// - Returns detailed conversion result with success/error info

// ============================================================================
// Problem 3: Data Validation System
// Build a comprehensive validation system
// ============================================================================

const formData = {
    name: "Alice",
    age: "25",
    email: "alice@example.com",
    score: "95.5",
    isActive: "true"
};

// Your task:
// Create a function 'validateAndConvert' that:
// 1. Takes form data object (all values are strings)
// 2. Validates and converts each field:
//    - name: string, required, min 2 chars
//    - age: number, 0-150
//    - email: valid email format
//    - score: number, 0-100
//    - isActive: boolean
// 3. Returns: {valid: true/false, data: converted object, errors: []}

// Challenge: Make it extensible with validation rules object

// ============================================================================
// Problem 4: Complete Data Type System
// Build a comprehensive data management system
// ============================================================================

const studentData = [
    { name: "Alice", age: "20", grades: [85, 90, 88], active: "true" },
    { name: "Bob", age: "21", grades: [92, 88], active: "false" },
    { name: "Charlie", age: "nineteen", grades: "invalid", active: "yes" }
];

// Your task:
// Create a complete 'DataProcessor' system:

// 1. 'cleanData' function:
//    - Takes raw student data
//    - Validates and converts all fields
//    - Removes invalid entries
//    - Returns cleaned array

// 2. 'analyzeData' function:
//    - Takes cleaned student data
//    - Calculates statistics:
//      - Average age (number)
//      - Average grade per student (number)
//      - Active students count (number)
//      - Grade distribution (object)

// 3. 'generateReport' function:
//    - Takes analyzed data
//    - Formats as readable report string
//    - Includes type information
//    - Handles missing/invalid data gracefully

// Challenge: Create complete system that:
// - Handles all data types correctly
// - Provides type-safe operations
// - Generates detailed error reports
// - Works with various input formats
// - Validates and converts throughout the pipeline

