/**
 * Basic usage examples
 */

const { toWords } = require("../src/index");

console.log("=== BASIC EXAMPLES ===\n");

// Indonesian
console.log("Indonesian:");
console.log(toWords(12500, { lang: "id" }));
console.log(toWords(1000000, { lang: "id" }));
console.log(toWords(999, { lang: "id" }));
console.log();

// English
console.log("English:");
console.log(toWords(12500, { lang: "en" }));
console.log(toWords(1000000, { lang: "en" }));
console.log(toWords(999, { lang: "en" }));
console.log();

// Malaysian
console.log("Malaysian:");
console.log(toWords(12500, { lang: "ms" }));
console.log(toWords(1000000, { lang: "ms" }));
console.log(toWords(999, { lang: "ms" }));
