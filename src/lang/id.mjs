import { getCurrencyLabel } from "../utils/currency.mjs";

/**
 * Indonesian language converter class
 * Converts numbers to Indonesian words (Bahasa Indonesia)
 */
export class Indonesian {
  /**
   * Initialize Indonesian converter with basic units and scales
   */
  constructor() {
    /**
     * Basic number units (0-11)
     * @type {string[]}
     */
    this.satuan = [
      "",
      "satu",
      "dua",
      "tiga",
      "empat",
      "lima",
      "enam",
      "tujuh",
      "delapan",
      "sembilan",
      "sepuluh",
      "sebelas",
    ];

    /**
     * Large number scales (thousand, million, billion, trillion)
     * @type {Array<{value: number, label: string}>}
     */
    this.scales = [
      { value: 1e12, label: "triliun" },
      { value: 1e9, label: "milyar" },
      { value: 1e6, label: "juta" },
      { value: 1e3, label: "ribu" },
    ];
  }

  /**
   * Convert a number to Indonesian words
   *
   * @param {number} num - The number to convert
   * @param {string} [type="cardinal"] - Type of number: "cardinal" or "ordinal"
   * @returns {string} The number in Indonesian words
   * @private
   */
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

    return "angka terlalu besar";
  }

  /**
   * Convert number to Indonesian words with options
   *
   * @param {number|string} num - Number to convert (string for decimal support)
   * @param {Object} [options={}] - Conversion options
   * @param {string} [options.type="cardinal"] - "cardinal" or "ordinal"
   * @param {string} [options.currency] - Currency code (e.g., "IDR")
   * @returns {string} The formatted Indonesian text
   *
   * @example
   * toWords(12500) // => "dua belas ribu lima ratus"
   * toWords(1, { type: "ordinal" }) // => "pertama"
   * toWords(50000, { currency: "IDR" }) // => "lima puluh ribu rupiah"
   */
  toWords(num, options = {}) {
    const { type = "cardinal", currency } = options;

    // --- decimal ---
    if (typeof num === "string" && num.includes(".")) {
      const [intPart, decPart] = num.split(".");

      if (currency) {
        const currencyLabel = getCurrencyLabel(currency, "id");
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
        return `${intWords} koma ${decWords}`.replace(/\s+/g, " ").trim();
      }
    }

    // --- integer ---
    let words = this.convertNumber(num, type);

    if (currency && type === "cardinal") {
      const currencyLabel = getCurrencyLabel(currency, "id");
      words += " " + currencyLabel;
    }

    return words.trim();
  }
}
