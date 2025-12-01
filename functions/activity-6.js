/*
 * ACTIVITY 6: Functions - Integration Challenge
 * 
 * Problem 1: Building a Function Library
 * Create a collection of utility functions
 */

// Your task:
// Create a 'MathUtils' object with methods:
// 1. add(...numbers) - sums all arguments
// 2. multiply(...numbers) - multiplies all arguments
// 3. average(...numbers) - calculates average
// 4. range(min, max) - generates array of numbers from min to max
// 5. random(min, max) - generates random number in range

// Challenge: Add methods with error handling and validation

// ============================================================================
// Problem 2: Building a Function Composition System
// Create a system for composing and chaining functions
// ============================================================================

// Your task:
// 1. Create a 'pipe' function that:
//    - Takes multiple functions
//    - Returns a function that applies them left-to-right
//    Example: pipe(addOne, double, square)(5)
//
// 2. Create a 'compose' function that:
//    - Takes multiple functions
//    - Returns a function that applies them right-to-left
//
// 3. Challenge: Create a 'chain' function that:
//    - Takes an initial value and multiple functions
//    - Applies functions sequentially
//    - Each function receives result of previous

// ============================================================================
// Problem 3: Building a Function Decorator System
// Create decorators to enhance function behavior
// ============================================================================

// Your task:
// 1. Create a 'memoize' function that:
//    - Takes a function
//    - Returns memoized version (caches results)
//    - Useful for expensive calculations
//
// 2. Create a 'debounce' function that:
//    - Takes a function and delay
//    - Returns debounced version (delays execution)
//
// 3. Create a 'throttle' function that:
//    - Takes a function and limit
//    - Returns throttled version (limits execution rate)
//
// 4. Challenge: Create a 'retry' function that:
//    - Takes a function and max retries
//    - Retries on failure
//    - Returns promise-like result

// ============================================================================
// Problem 4: Complete Function-Based Application
// Build a comprehensive system using all function concepts
// ============================================================================

const inventory = [
    { id: 1, name: "Laptop", price: 999, stock: 10, category: "Electronics" },
    { id: 2, name: "Phone", price: 699, stock: 5, category: "Electronics" },
    { id: 3, name: "Book", price: 15, stock: 50, category: "Education" }
];

// Your task:
// Create a complete 'InventoryManager' system:

// 1. Query functions (using higher-order functions):
//    - findByCategory(category)
//    - filterByPrice(min, max)
//    - filterByStock(minStock)
//    - searchByName(name)

// 2. Transformation functions:
//    - applyDiscount(percent)
//    - addTax(taxRate)
//    - formatCurrency(currency)

// 3. Aggregation functions:
//    - totalValue()
//    - averagePrice()
//    - stockByCategory()

// 4. Operation functions (using closures):
//    - createUpdateStock(itemId)
//    - createPriceAdjuster(multiplier)

// Challenge: Create a complete 'processOrder' function that:
// - Takes order object
// - Validates items (using validator functions)
// - Calculates totals (using composition)
// - Applies discounts (using decorators)
// - Updates inventory (using closure-based updaters)
// - Returns detailed order summary
// - Uses all function concepts: closures, HOFs, composition, recursion where needed

