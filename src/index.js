const { Indonesian } = require("./lang/id");
const { English } = require("./lang/en");
const { Malaysian } = require("./lang/ms");
const { getCurrencyLabel } = require("./utils/currency");

function toWords(num, options = {}) {
    const { lang = "id", currency, type = "cardinal" } = options;
    let result = "";

    switch (lang) {
        case "id":
            result = new Indonesian().toWords(num, type);
            break;
        case "en":
            result = new English().toWords(num, type);
            break;
        case "ms":
            result = new Malaysian().toWords(num, type);
            break;
        default:
            throw new Error(`Unsupported language: ${lang}`);
    }

    if (currency && type === "cardinal") {
        result += " " + getCurrencyLabel(currency, lang);
    }

    return result.trim();
}


module.exports = { toWords };
