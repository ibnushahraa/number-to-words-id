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
        expect(toWords(4500000, { lang: "en" })).toBe("four million five hundred thousand");
    });

    describe("Currency", () => {
        test("USD", () => {
            expect(toWords(12500, { lang: "en", currency: "USD" }))
                .toBe("twelve thousand five hundred US dollars");
        });

        test("Fallback (EUR)", () => {
            expect(toWords(1000, { lang: "en", currency: "EUR" }))
                .toBe("one thousand eur"); // fallback
        });
    });
});
