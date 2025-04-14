/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================
🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.
They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/
// ============================================
// 📦 Starting Dataset: Product List
// ============================================
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];
// ============================================
// 🔧 Tasks
// ============================================
/*
🔹 Task 1: Filter Products by Availability
Create a function `filterProducts` that accepts:
- an array of products
- a callback function
The callback should determine which products to include.
Example: filter by availability or price threshold.
Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/
function filterProducts(arr, callback) {
  return arr.filter(callback);
}
const productPriceFilter = ((product) => product.price >= 500);//parameters can be any name but have to be accessed by that name w/n function
//=> makes you not need return, can only return true or false
const filteredArr = filterProducts(products, productPriceFilter);
//condensed version, but is not resuable:
//const newProducts = products.filter((product) => product.price >= 500);
//console.log(newProducts);
/*
🔹 Task 2: Transform Product Names
Use `map()` to create a new array of product names in UPPERCASE.
Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/
let transformProductNames = products.map((product) => product.name.toUpperCase());
/*
🔹 Task 3: Generate Discounted Prices
Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price
Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/
function applyDiscount(discount) {
  function calculateDiscount(product) {
    return product.price - (product.price * discount);
  }
  return calculateDiscount
}
const discountFunction = applyDiscount(0.8);
const mappedDiscountPrices = products.map(discountFunction); //trying to get new discounted prices array
/*
🔹 Task 4: Calculate Total Inventory Value
Use `reduce()` to calculate the total value of products that are currently in stock.
Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/
const initialValue = 0;
const inStockProducts = ((product) => product.inStock === true);
const filteredInStock = (filterProducts(products, inStockProducts));//calls func filterProducts from above but this time filiters by inStock items
const inStockPrices = filteredInStock.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, initialValue);
// ============================================
// 🧪 Console Test Your Work
// ============================================
console.log("Filtered products:", filteredArr);
console.log("Uppercased names:", transformProductNames);
console.log("Original Prices:", products.map(p => p.price)); //see original prices
console.log("Discounted products:", mappedDiscountPrices); //make sure discount applied
console.log("In stock products:", filteredInStock, "Total value in stock:", inStockPrices);
