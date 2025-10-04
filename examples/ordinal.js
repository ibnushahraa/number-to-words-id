/**
 * Ordinal number examples
 */

const { toWords } = require("../src/index");

console.log("=== ORDINAL EXAMPLES ===\n");

// Indonesian
console.log("Indonesian:");
console.log(`1st: ${toWords(1, { lang: "id", type: "ordinal" })}`);
console.log(`2nd: ${toWords(2, { lang: "id", type: "ordinal" })}`);
console.log(`10th: ${toWords(10, { lang: "id", type: "ordinal" })}`);
console.log(`21st: ${toWords(21, { lang: "id", type: "ordinal" })}`);
console.log(`100th: ${toWords(100, { lang: "id", type: "ordinal" })}`);
console.log();

// English
console.log("English:");
console.log(`1st: ${toWords(1, { lang: "en", type: "ordinal" })}`);
console.log(`2nd: ${toWords(2, { lang: "en", type: "ordinal" })}`);
console.log(`10th: ${toWords(10, { lang: "en", type: "ordinal" })}`);
console.log(`21st: ${toWords(21, { lang: "en", type: "ordinal" })}`);
console.log(`100th: ${toWords(100, { lang: "en", type: "ordinal" })}`);
console.log();

// Malaysian
console.log("Malaysian:");
console.log(`1st: ${toWords(1, { lang: "ms", type: "ordinal" })}`);
console.log(`2nd: ${toWords(2, { lang: "ms", type: "ordinal" })}`);
console.log(`10th: ${toWords(10, { lang: "ms", type: "ordinal" })}`);
console.log(`21st: ${toWords(21, { lang: "ms", type: "ordinal" })}`);
console.log(`100th: ${toWords(100, { lang: "ms", type: "ordinal" })}`);
