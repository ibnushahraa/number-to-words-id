const { toWords } = require("../src");

describe("Bahasa Indonesia", () => {
  test("Angka kecil", () => {
    expect(toWords(5, { lang: "id" })).toBe("lima");
    expect(toWords(11, { lang: "id" })).toBe("sebelas");
  });

  test("Puluhan & Ratusan", () => {
    expect(toWords(25, { lang: "id" })).toBe("dua puluh lima");
    expect(toWords(125, { lang: "id" })).toBe("seratus dua puluh lima");
  });

  test("Ribuan", () => {
    expect(toWords(12500, { lang: "id" })).toBe("dua belas ribu lima ratus");
  });

  test("Jutaan", () => {
    expect(toWords(4500000, { lang: "id" })).toBe("empat juta lima ratus ribu");
  });

  describe("Currency", () => {
    test("IDR", () => {
      expect(toWords(50000, { lang: "id", currency: "IDR" })).toBe(
        "lima puluh ribu rupiah"
      );
    });

    test("IDR with sen", () => {
      expect(toWords("1250.75", { lang: "id", currency: "IDR" })).toBe(
        "seribu dua ratus lima puluh rupiah tujuh puluh lima sen"
      );
    });

    test("Fallback (JPY)", () => {
      expect(toWords(1000, { lang: "id", currency: "JPY" })).toBe("seribu jpy"); // fallback
    });
  });

  describe("Ordinal", () => {
    test("Dasar", () => {
      expect(toWords(1, { lang: "id", type: "ordinal" })).toBe("pertama");
      expect(toWords(2, { lang: "id", type: "ordinal" })).toBe("kedua");
      expect(toWords(10, { lang: "id", type: "ordinal" })).toBe("kesepuluh");
    });

    test("Puluhan & Ratusan", () => {
      expect(toWords(25, { lang: "id", type: "ordinal" })).toBe(
        "kedua puluh lima"
      );
      expect(toWords(100, { lang: "id", type: "ordinal" })).toBe("keseratus");
    });
  });

  describe("Decimal (non-currency)", () => {
    test("Dengan koma", () => {
      expect(toWords("12.34", { lang: "id" })).toBe(
        "dua belas koma tiga empat"
      );
    });
  });
});
