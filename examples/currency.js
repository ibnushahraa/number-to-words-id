/**
 * Currency examples
 */

const { toWords } = require("../src/index");

console.log("=== CURRENCY EXAMPLES ===\n");

// Indonesian Rupiah
console.log("Indonesian Rupiah (IDR):");
console.log(toWords(50000, { lang: "id", currency: "IDR" }));
console.log(toWords(1250000, { lang: "id", currency: "IDR" }));
console.log(toWords("1250.75", { lang: "id", currency: "IDR" }));
console.log();

// Malaysian Ringgit
console.log("Malaysian Ringgit (MYR):");
console.log(toWords(500, { lang: "ms", currency: "MYR" }));
console.log(toWords(25000, { lang: "ms", currency: "MYR" }));
console.log(toWords("1250.75", { lang: "ms", currency: "MYR" }));
console.log();

// US Dollar
console.log("US Dollar (USD):");
console.log(toWords(12500, { lang: "en", currency: "USD" }));
console.log(toWords(999999, { lang: "en", currency: "USD" }));
console.log(toWords("1250.75", { lang: "en", currency: "USD" }));
console.log();

// Fallback currency
console.log("Fallback (JPY):");
console.log(toWords(1000, { lang: "id", currency: "JPY" }));
console.log(toWords(5000, { lang: "en", currency: "EUR" }));
