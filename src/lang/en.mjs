import { getCurrencyLabel } from "../utils/currency.mjs";

/**
 * English language converter class
 * Converts numbers to English words
 */
export class English {
  /**
   * Initialize English converter with basic units, tens, and scales
   */
  constructor() {
    /**
     * Basic number units (0-19)
     * @type {string[]}
     */
    this.units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    /**
     * Tens place words (20-90)
     * @type {string[]}
     */
    this.tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    /**
     * Large number scales (thousand, million, billion, trillion)
     * @type {Array<{value: number, label: string}>}
     */
    this.scales = [
      { value: 1e12, label: "trillion" },
      { value: 1e9, label: "billion" },
      { value: 1e6, label: "million" },
      { value: 1e3, label: "thousand" },
    ];
  }

  /**
   * Convert a number to English words
   *
   * @param {number} num - The number to convert
   * @param {string} [type="cardinal"] - Type of number: "cardinal" or "ordinal"
   * @returns {string} The number in English words
   * @private
   */
  convertNumber(num, type = "cardinal") {
    num = parseInt(num, 10);
    if (isNaN(num)) return "";

    // --- ordinal ---
    if (type === "ordinal") {
      const special = {
        1: "first",
        2: "second",
        3: "third",
        21: "twenty-first",
        22: "twenty-second",
        23: "twenty-third",
        31: "thirty-first",
      };
      if (special[num]) return special[num];
      if (num % 10 === 1 && num !== 11) return this.convertNumber(num) + "st";
      if (num % 10 === 2 && num !== 12) return this.convertNumber(num) + "nd";
      if (num % 10 === 3 && num !== 13) return this.convertNumber(num) + "rd";
      return this.convertNumber(num) + "th";
    }

    // --- cardinal ---
    if (num < 20) return this.units[num];
    if (num < 100) {
      return (
        this.tens[Math.floor(num / 10)] +
        (num % 10 ? "-" + this.units[num % 10] : "")
      );
    }
    if (num < 1000) {
      return (
        this.units[Math.floor(num / 100)] +
        " hundred" +
        (num % 100 ? " " + this.convertNumber(num % 100) : "")
      );
    }

    for (const { value, label } of this.scales) {
      if (num >= value) {
        return (
          this.convertNumber(Math.floor(num / value)) +
          " " +
          label +
          (num % value ? " " + this.convertNumber(num % value) : "")
        );
      }
    }

    return "number too large";
  }

  /**
   * Convert number to English words with options
   *
   * @param {number|string} num - Number to convert (string for decimal support)
   * @param {Object} [options={}] - Conversion options
   * @param {string} [options.type="cardinal"] - "cardinal" or "ordinal"
   * @param {string} [options.currency] - Currency code (e.g., "USD")
   * @returns {string} The formatted English text
   *
   * @example
   * toWords(12500) // => "twelve thousand five hundred"
   * toWords(1, { type: "ordinal" }) // => "first"
   * toWords(50000, { currency: "USD" }) // => "fifty thousand US dollars"
   */
  toWords(num, options = {}) {
    const { type = "cardinal", currency } = options;

    // --- handle decimals ---
    if (typeof num === "string" && num.includes(".")) {
      const [intPart, decPart] = num.split(".");

      if (currency) {
        const currencyLabel = getCurrencyLabel(currency, "en");
        const intWords = this.convertNumber(parseInt(intPart, 10));
        const decWords = this.convertNumber(parseInt(decPart, 10));
        return `${intWords} ${currencyLabel} and ${decWords} cents`
          .replace(/\s+/g, " ")
          .trim();
      } else {
        const intWords = this.convertNumber(parseInt(intPart, 10), type);
        const decWords = decPart
          .split("")
          .map((d) => this.units[parseInt(d, 10)] || "")
          .join(" ")
          .trim();
        return `${intWords} point ${decWords}`.replace(/\s+/g, " ").trim();
      }
    }

    // --- integer ---
    let words = this.convertNumber(num, type);

    if (currency && type === "cardinal") {
      const currencyLabel = getCurrencyLabel(currency, "en");
      words += " " + currencyLabel;
    }

    return words.trim();
  }
}
