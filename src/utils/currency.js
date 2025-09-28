// src/utils/currency.js

const currencyMap = {
  IDR: { id: "rupiah", en: "Indonesian rupiah", ms: "rupiah" },
  USD: {
    id: "dolar Amerika Serikat",
    en: "US dollars",
    ms: "dolar Amerika Syarikat",
  },
  MYR: { id: "ringgit", en: "Malaysian ringgit", ms: "ringgit" },
};

function getCurrencyLabel(code, lang) {
  const cur = currencyMap[code];
  if (!cur) return code.toLowerCase(); // fallback
  return cur[lang] || code.toLowerCase();
}

module.exports = { getCurrencyLabel };
