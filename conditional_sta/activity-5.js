/*
 * ACTIVITY 5: Error Handling and Edge Cases
 * 
 * Problem 1: Guard Clauses
 * Use early returns to handle edge cases
 */

function processUser(user) {
    // Your task:
    // 1. Add guard clause: if user is null/undefined, return early
    // 2. Add guard clause: if user.name is missing, return early
    // 3. Add guard clause: if user.age < 0, return early
    // 4. Then process valid user data
    
    return "Processed: " + user.name;
}

// Challenge: Rewrite processUser with guard clauses at the beginning
// Return appropriate error messages for each invalid case

// ============================================================================
// Problem 2: Null/Undefined Checks
// Handle null and undefined values in conditionals
// ============================================================================

const data = {
    user: {
        name: "Alice",
        address: {
            city: "New York"
        }
    }
};

// Your task:
// 1. Safely access data.user.name (handle if user is null)
// 2. Safely access data.user.address.city (handle nested nulls)
// 3. Create a function 'safeGet' that safely gets nested properties
//
// 4. Challenge: Create a function 'getUserCity' that:
//    - Takes a data object
//    - Returns city name if available
//    - Returns "Unknown" if any part of the path is null/undefined
//    - Use multiple conditional checks

// ============================================================================
// Problem 3: Input Validation
// Validate inputs before processing
// ============================================================================

function calculateDiscount(price, discountPercent) {
    // Your task:
    // 1. Add validation: price must be a number and > 0
    // 2. Add validation: discountPercent must be between 0 and 100
    // 3. Return early with error message if invalid
    // 4. Calculate and return discounted price
    
    return price * (1 - discountPercent / 100);
}

// Challenge: Enhance calculateDiscount with:
// - Type checking (both must be numbers)
// - Range validation
// - Clear error messages for each invalid case
// - Return object: {success: true/false, result: price or error: message}

// ============================================================================
// Problem 4: Complex Error Handling
// Handle multiple error scenarios
// ============================================================================

function processOrder(order) {
    // Your task: Add comprehensive validation
    // 1. Check if order exists
    // 2. Check if order.items exists and is array with length > 0
    // 3. Check if order.total is valid number >= 0
    // 4. Check if order.customer exists with required fields
    // 5. Return early with specific error for each case
    // 6. Process valid order
    
    return "Order processed successfully";
}

// Challenge: Create a complete validation function that:
// - Takes an order object
// - Validates all required fields
// - Returns {valid: true/false, errors: []} with detailed error messages
// - Uses guard clauses and conditional checks throughout

