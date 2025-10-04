/**
 * TypeScript usage example
 * This demonstrates type-safe usage with TypeScript
 */

import { toWords, type ToWordsOptions, type Language, type Currency } from "number-to-words-id";

// Example 1: Basic usage with type inference
const result1: string = toWords(12500, { lang: "id" });
console.log("Basic:", result1);

// Example 2: Using typed options
const options: ToWordsOptions = {
  lang: "id",
  currency: "IDR",
  type: "cardinal",
};
const result2: string = toWords(50000, options);
console.log("With options:", result2);

// Example 3: Type-safe language selection
const languages: Language[] = ["id", "en", "ms"];
languages.forEach((lang) => {
  const result = toWords(1000, { lang });
  console.log(`${lang}:`, result);
});

// Example 4: Currency conversion function
function formatCurrency(
  amount: number | string,
  currency: Currency,
  lang: Language = "id"
): string {
  return toWords(amount, { lang, currency });
}

console.log("\nCurrency examples:");
console.log(formatCurrency(50000, "IDR", "id"));
console.log(formatCurrency(500, "MYR", "ms"));
console.log(formatCurrency("1250.75", "USD", "en"));

// Example 5: Ordinal numbers
function getOrdinal(num: number, lang: Language = "id"): string {
  return toWords(num, { lang, type: "ordinal" });
}

console.log("\nOrdinal examples:");
console.log(`1st in Indonesian: ${getOrdinal(1, "id")}`);
console.log(`10th in English: ${getOrdinal(10, "en")}`);
console.log(`21st in Malaysian: ${getOrdinal(21, "ms")}`);

// Example 6: Decimal handling
const decimalNumbers = ["12.34", "99.99", "0.5"];
console.log("\nDecimal examples:");
decimalNumbers.forEach((num) => {
  console.log(`${num}:`, toWords(num, { lang: "id" }));
});

// Example 7: Error handling
try {
  // @ts-expect-error - Testing invalid language
  toWords(100, { lang: "invalid" });
} catch (error) {
  if (error instanceof Error) {
    console.log("\nError caught:", error.message);
  }
}
