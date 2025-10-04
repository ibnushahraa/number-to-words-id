// src/utils/currency.mjs

/**
 * Currency code to localized name mapping
 * @type {Object.<string, Object.<string, string>>}
 */
const currencyMap = {
  IDR: { id: "rupiah", en: "Indonesian rupiah", ms: "rupiah" },
  USD: {
    id: "dolar Amerika Serikat",
    en: "US dollars",
    ms: "dolar Amerika Syarikat",
  },
  MYR: { id: "ringgit", en: "Malaysian ringgit", ms: "ringgit" },
};

/**
 * Get localized currency label
 *
 * @param {string} code - Currency code (e.g., "IDR", "USD", "MYR")
 * @param {string} lang - Language code ("id", "en", or "ms")
 * @returns {string} Localized currency name or lowercase code if not found
 *
 * @example
 * getCurrencyLabel("IDR", "id") // => "rupiah"
 * getCurrencyLabel("USD", "en") // => "US dollars"
 * getCurrencyLabel("JPY", "id") // => "jpy" (fallback)
 */
export function getCurrencyLabel(code, lang) {
  const cur = currencyMap[code];
  if (!cur) return code.toLowerCase(); // fallback
  return cur[lang] || code.toLowerCase();
}
