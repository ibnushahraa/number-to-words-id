const { Indonesian } = require("./lang/id");
const { English } = require("./lang/en");
const { Malaysian } = require("./lang/ms");

function toWords(num, options = {}) {
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

module.exports = { toWords };
