const { Indonesian } = require("./lang/id");
const { English } = require("./lang/en");
const { getCurrencyLabel } = require("./utils/currency");

function toWords(num, options = {}) {
    const { lang = "id", currency } = options;
    let result = "";

    switch (lang) {
        case "id":
            result = new Indonesian().toWords(num);
            break;
        case "en":
            result = new English().toWords(num);
            break;
        default:
            throw new Error(`Unsupported language: ${lang}`);
    }

    if (currency) {
        result += " " + getCurrencyLabel(currency, lang);
    }

    return result.trim();
}

module.exports = { toWords };
