import { Indonesian } from "./lang/id.mjs";
import { English } from "./lang/en.mjs";
import { Malaysian } from "./lang/ms.mjs";

/**
 * Convert numbers to words in Indonesian, Malaysian, or English
 *
 * @param {number|string} num - Number to convert (string for decimal support)
 * @param {Object} [options={}] - Conversion options
 * @param {string} [options.lang="id"] - Language code: "id" (Indonesian), "en" (English), or "ms" (Malaysian)
 * @param {string} [options.currency] - Currency code: "IDR", "MYR", "USD", or any string
 * @param {string} [options.type="cardinal"] - Number type: "cardinal" or "ordinal"
 * @returns {string} The number converted to words
 *
 * @example
 * // Basic usage
 * toWords(12500, { lang: "id" })
 * // => "dua belas ribu lima ratus"
 *
 * @example
 * // With currency
 * toWords(50000, { lang: "id", currency: "IDR" })
 * // => "lima puluh ribu rupiah"
 *
 * @example
 * // Decimal numbers
 * toWords("12.34", { lang: "id" })
 * // => "dua belas koma tiga empat"
 *
 * @example
 * // Ordinal numbers
 * toWords(1, { lang: "id", type: "ordinal" })
 * // => "pertama"
 *
 * @throws {Error} If unsupported language is provided
 */
export function toWords(num, options = {}) {
  const { lang = "id" } = options;
  let result = "";

  switch (lang) {
    case "id":
      result = new Indonesian().toWords(num, options);
      break;
    case "en":
      result = new English().toWords(num, options);
      break;
    case "ms":
      result = new Malaysian().toWords(num, options);
      break;
    default:
      throw new Error(`Unsupported language: ${lang}`);
  }

  return result.trim();
}
