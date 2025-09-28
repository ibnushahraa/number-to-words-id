const { toWords } = require("../src");

describe("English", () => {
  test("Small numbers", () => {
    expect(toWords(5, { lang: "en" })).toBe("five");
    expect(toWords(11, { lang: "en" })).toBe("eleven");
  });

  test("Tens & Hundreds", () => {
    expect(toWords(25, { lang: "en" })).toBe("twenty-five");
    expect(toWords(125, { lang: "en" })).toBe("one hundred twenty-five");
  });

  test("Thousands", () => {
    expect(toWords(12500, { lang: "en" })).toBe("twelve thousand five hundred");
  });

  test("Millions", () => {
    expect(toWords(4500000, { lang: "en" })).toBe(
      "four million five hundred thousand"
    );
  });

  describe("Currency", () => {
    test("USD", () => {
      expect(toWords(12500, { lang: "en", currency: "USD" })).toBe(
        "twelve thousand five hundred US dollars"
      );
    });

    test("USD with cents", () => {
      expect(toWords("1250.75", { lang: "en", currency: "USD" })).toBe(
        "one thousand two hundred fifty US dollars and seventy-five cents"
      );
    });

    test("Fallback (EUR)", () => {
      expect(toWords(1000, { lang: "en", currency: "EUR" })).toBe(
        "one thousand eur"
      ); // fallback
    });
  });

  describe("Ordinal", () => {
    test("Special cases", () => {
      expect(toWords(1, { lang: "en", type: "ordinal" })).toBe("first");
      expect(toWords(2, { lang: "en", type: "ordinal" })).toBe("second");
      expect(toWords(3, { lang: "en", type: "ordinal" })).toBe("third");
    });

    test("Common suffix -th", () => {
      expect(toWords(4, { lang: "en", type: "ordinal" })).toBe("fourth");
      expect(toWords(10, { lang: "en", type: "ordinal" })).toBe("tenth");
      expect(toWords(21, { lang: "en", type: "ordinal" })).toBe("twenty-first");
      expect(toWords(22, { lang: "en", type: "ordinal" })).toBe(
        "twenty-second"
      );
      expect(toWords(23, { lang: "en", type: "ordinal" })).toBe("twenty-third");
      expect(toWords(24, { lang: "en", type: "ordinal" })).toBe(
        "twenty-fourth"
      );
    });
  });

  describe("Decimal (non-currency)", () => {
    test("With point", () => {
      expect(toWords("12.34", { lang: "en" })).toBe("twelve point three four");
    });
  });
});
