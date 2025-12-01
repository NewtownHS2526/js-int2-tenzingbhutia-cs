/*
 * ACTIVITY 2: Logical Operators in Comparisons
 * 
 * Problem 1: Combining Comparisons with &&, ||, !
 */

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// Your task:
// 1. Check if a person can drive: age >= 18 && hasLicense
// 2. Check if a person needs insurance: hasLicense && !hasInsurance
// 3. Check if a person can rent a car: age >= 21 && hasLicense && hasInsurance
// 4. Challenge: Create a 'canDrive' function that checks all conditions and 
//    returns a detailed message explaining which conditions are met/not met

// ============================================================================
// Problem 2: Complex Logical Expressions
// Build complex comparison logic
// ============================================================================

const temperature = 75;
const isSunny = true;
const isWeekend = false;

// Your task:
// 1. Determine if it's a good day for picnic:
//    temperature between 70-85 AND isSunny AND isWeekend
//
// 2. Determine if it's good for indoor activities:
//    temperature < 60 OR temperature > 90 OR !isSunny
//
// 3. Challenge: Create a function 'recommendActivity' that:
//    - Takes temperature, isSunny, isWeekend
//    - Returns an activity recommendation based on conditions
//    - Use multiple comparison operators and logical operators

// ============================================================================
// Problem 3: Comparison Operator Precedence
// Understand operator precedence in complex expressions
// ============================================================================

const x = 5;
const y = 10;
const z = 15;

// Your task:
// 1. Predict the result of: x < y && y < z
// 2. Predict the result of: x < y || y > z
// 3. Predict the result of: !(x > y) && z > x
// 4. Predict the result of: x === 5 && y !== 10 || z > 20
//    (Hint: && has higher precedence than ||)
//
// 5. Challenge: Add parentheses to make the logic explicit for question 4
// 6. Explain why operator precedence matters

// ============================================================================
// Problem 4: Real-World Comparison Scenarios
// Apply comparisons to practical problems
// ============================================================================

const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

// Your task:
// 1. Check if product is affordable: price < 100
// 2. Check if product is in stock: stock > 0
// 3. Check if product is highly rated: rating >= 4.0
// 4. Check if product is a good deal: (onSale === true || price < 75) && rating >= 4.0
//
// 5. Challenge: Create a 'evaluateProduct' function that:
//    - Takes a product object
//    - Returns a recommendation: "Buy", "Consider", or "Skip"
//    - Consider price, stock, rating, and sale status
//    - Use multiple comparison and logical operators

