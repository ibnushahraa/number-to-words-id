// src/utils/currency.js

const currencyMap = {
    IDR: { id: "rupiah", en: "rupiah" },
    USD: { id: "dolar Amerika", en: "US dollars" }

};

function getCurrencyLabel(code, lang) {
    const cur = currencyMap[code];
    if (!cur) return code.toLowerCase(); // fallback
    return cur[lang] || code.toLowerCase();
}

module.exports = { getCurrencyLabel };
