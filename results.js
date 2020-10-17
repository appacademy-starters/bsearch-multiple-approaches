const { recurBSearch, iterBSearch, recurBSearchIdx, recurBSearchIdxV2, iterBSearchIdx } = require('./bsearch');
/*------------------ DONT TOUCH THE CODE ABOVE THIS LINE ------------------*/

/*******************************************************************
Use the following test cases to check your work (note: there are no Mocha Specs
for today's project)

Run these tests by `cd`ing into this directory and typing `node results.js`
into your terminal.
*******************************************************************/

const oddNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// TEST CASES FOR BINARY SEARCH VERSION 1: Recursive Binary Search that returns
// a Boolean Value indicating if targetNum is within the nums array.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 1 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearch(oddNums, 0));
console.log("Your Result: " + recurBSearch(oddNums, 2));
console.log("Your Result: " + recurBSearch(oddNums, 5));
console.log("Your Result: " + recurBSearch(oddNums, 7));
console.log("Your Result: " + recurBSearch(oddNums, 10));
// TESTS WITH EVEN NUMBER OF ELEMENTS
console.log("EN NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearch(evenNums, 0));
console.log("Your Result: " + recurBSearch(evenNums, 2));
console.log("Your Result: " + recurBSearch(evenNums, 5));
console.log("Your Result: " + recurBSearch(evenNums, 7));
console.log("Your Result: " + recurBSearch(evenNums, 10));
console.log("  ")
console.log("  ")


// TEST CASES FOR BINARY SEARCH VERSION 2: Iterative Binary Search that returns
// a Boolean Value indicating if targetNum is within the nums array.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 2 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + iterBSearch(oddNums, 0));
console.log("Your Result: " + iterBSearch(oddNums, 2));
console.log("Your Result: " + iterBSearch(oddNums, 5));
console.log("Your Result: " + iterBSearch(oddNums, 7));
console.log("Your Result: " + iterBSearch(oddNums, 10));
// TESTS WITH EVEN NUMBER OF ELEMENTS
console.log("EN NUMBER OF ELEMENTS")
console.log("Your Result: " + iterBSearch(evenNums, 0));
console.log("Your Result: " + iterBSearch(evenNums, 2));
console.log("Your Result: " + iterBSearch(evenNums, 5));
console.log("Your Result: " + iterBSearch(evenNums, 7));
console.log("Your Result: " + iterBSearch(evenNums, 10));
console.log("  ")
console.log("  ")


// TEST CASES FOR BINARY SEARCH VERSION 3: Recursive Binary Search that returns
// the Index Value of the targetNum if it is in the nums array, and -1 if it is
// not found.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 3 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearchIdx(oddNums, 0));
console.log("Your Result: " + recurBSearchIdx(oddNums, 2));
console.log("Your Result: " + recurBSearchIdx(oddNums, 5));
console.log("Your Result: " + recurBSearchIdx(oddNums, 7));
console.log("Your Result: " + recurBSearchIdx(oddNums, 10));
// TESTS WITH EVEN NUMBER OF ELEMENTS
console.log("EN NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearchIdx(evenNums, 0));
console.log("Your Result: " + recurBSearchIdx(evenNums, 2));
console.log("Your Result: " + recurBSearchIdx(evenNums, 5));
console.log("Your Result: " + recurBSearchIdx(evenNums, 7));
console.log("Your Result: " + recurBSearchIdx(evenNums, 10));
console.log("  ")
console.log("  ")

// TEST CASES FOR BINARY SEARCH VERSION 4: Second Version of Recursive Binary
// Search that returns the Index Value of the targetNum if it is in the nums
// array, and -1 if it is not found.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 4 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearchIdxV2(oddNums, 0));
console.log("Your Result: " + recurBSearchIdxV2(oddNums, 2));
console.log("Your Result: " + recurBSearchIdxV2(oddNums, 5));
console.log("Your Result: " + recurBSearchIdxV2(oddNums, 7));
console.log("Your Result: " + recurBSearchIdxV2(oddNums, 10));
// TESTS WITH EVEN NUMBER OF ELEMENTS
console.log("EVEN NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearchIdxV2(evenNums, 0));
console.log("Your Result: " + recurBSearchIdxV2(evenNums, 2));
console.log("Your Result: " + recurBSearchIdxV2(evenNums, 5));
console.log("Your Result: " + recurBSearchIdxV2(evenNums, 7));
console.log("Your Result: " + recurBSearchIdxV2(evenNums, 10));
console.log("  ")
console.log("  ")


// TEST CASES FOR BINARY SEARCH VERSION 5: Iterative Binary Search that returns
// the Index Value of the targetNum if it is in the nums array, and -1 if it is
// not found.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 5 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + iterBSearchIdx(oddNums, 0));
console.log("Your Result: " + iterBSearchIdx(oddNums, 2));
console.log("Your Result: " + iterBSearchIdx(oddNums, 5));
console.log("Your Result: " + iterBSearchIdx(oddNums, 7));
console.log("Your Result: " + iterBSearchIdx(oddNums, 10));
// TESTS WITH EVEN NUMBER OF ELEMENTS
console.log("EVEN NUMBER OF ELEMENTS")
console.log("Your Result: " + iterBSearchIdx(evenNums, 0));
console.log("Your Result: " + iterBSearchIdx(evenNums, 2));
console.log("Your Result: " + iterBSearchIdx(evenNums, 5));
console.log("Your Result: " + iterBSearchIdx(evenNums, 7));
console.log("Your Result: " + iterBSearchIdx(evenNums, 10));
