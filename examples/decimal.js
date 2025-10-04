/**
 * Decimal number examples
 */

const { toWords } = require("../src/index");

console.log("=== DECIMAL EXAMPLES ===\n");

// Indonesian
console.log("Indonesian (koma):");
console.log(toWords("12.34", { lang: "id" }));
console.log(toWords("99.99", { lang: "id" }));
console.log(toWords("0.5", { lang: "id" }));
console.log();

// English
console.log("English (point):");
console.log(toWords("12.34", { lang: "en" }));
console.log(toWords("99.99", { lang: "en" }));
console.log(toWords("0.5", { lang: "en" }));
console.log();

// Malaysian
console.log("Malaysian (perpuluhan):");
console.log(toWords("12.34", { lang: "ms" }));
console.log(toWords("99.99", { lang: "ms" }));
console.log(toWords("0.5", { lang: "ms" }));
