const { getCurrencyLabel } = require("../utils/currency");

class Malaysian {
  constructor() {
    this.satuan = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "lapan",
      "sembilan",
      "sepuluh",
      "sebelas",
    ];

    this.scales = [
      { value: 1e12, label: "trilion" },
      { value: 1e9, label: "bilion" },
      { value: 1e6, label: "juta" },
      { value: 1e3, label: "ribu" },
    ];
  }

  convertNumber(num, type = "cardinal") {
    num = parseInt(num, 10);
    if (isNaN(num)) return "";

    if (type === "ordinal") {
      if (num === 1) return "pertama";
      return `ke${this.convertNumber(num, "cardinal")}`;
    }

    if (num < 12) return this.satuan[num];
    if (num < 20) return this.satuan[num - 10] + " belas";
    if (num < 100) {
      return (
        this.satuan[Math.floor(num / 10)] +
        " puluh " +
        this.convertNumber(num % 10, type)
      ).trim();
    }
    if (num < 200)
      return ("seratus " + this.convertNumber(num - 100, type)).trim();
    if (num < 1000) {
      return (
        this.satuan[Math.floor(num / 100)] +
        " ratus " +
        this.convertNumber(num % 100, type)
      ).trim();
    }
    if (num < 2000)
      return ("seribu " + this.convertNumber(num - 1000, type)).trim();

    for (const { value, label } of this.scales) {
      if (num >= value) {
        return (
          this.convertNumber(Math.floor(num / value), type) +
          " " +
          label +
          " " +
          this.convertNumber(num % value, type)
        ).trim();
      }
    }

    return "nombor terlalu besar";
  }

  toWords(num, options = {}) {
    const { type = "cardinal", currency } = options;

    // --- decimal ---
    if (typeof num === "string" && num.includes(".")) {
      const [intPart, decPart] = num.split(".");

      if (currency) {
        const currencyLabel = getCurrencyLabel(currency, "ms");
        const intWords = this.convertNumber(parseInt(intPart, 10));
        const decWords = this.convertNumber(parseInt(decPart, 10));
        return `${intWords} ${currencyLabel} ${decWords} sen`
          .replace(/\s+/g, " ")
          .trim();
      } else {
        const intWords = this.convertNumber(parseInt(intPart, 10), type);
        const decWords = decPart
          .split("")
          .map((d) => this.satuan[parseInt(d, 10)] || "")
          .join(" ")
          .trim();
        return `${intWords} perpuluhan ${decWords}`.replace(/\s+/g, " ").trim();
      }
    }

    // --- integer ---
    let words = this.convertNumber(num, type);

    if (currency && type === "cardinal") {
      const currencyLabel = getCurrencyLabel(currency, "ms");
      words += " " + currencyLabel;
    }

    return words.trim();
  }
}

module.exports = { Malaysian };
