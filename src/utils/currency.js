// src/utils/currency.js

const currencyMap = {
    IDR: { id: "rupiah", en: "rupiah", ms: "rupiah" },
    USD: { id: "dolar Amerika", en: "US dollars", ms: "dolar Amerika" },
    MYR: { id: "ringgit", en: "Malaysian ringgit", ms: "ringgit" }
};

function getCurrencyLabel(code, lang) {
    const cur = currencyMap[code];
    if (!cur) return code.toLowerCase(); // fallback
    return cur[lang] || code.toLowerCase();
}

module.exports = { getCurrencyLabel };
