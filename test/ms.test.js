const { toWords } = require("../src");

describe("Bahasa Malaysia", () => {
    test("Angka kecil", () => {
        expect(toWords(5, { lang: "ms" })).toBe("lima");
        expect(toWords(8, { lang: "ms" })).toBe("lapan");
        expect(toWords(11, { lang: "ms" })).toBe("sebelas");
    });

    test("Puluhan & Ratusan", () => {
        expect(toWords(25, { lang: "ms" })).toBe("dua puluh lima");
        expect(toWords(125, { lang: "ms" })).toBe("seratus dua puluh lima");
    });

    test("Ribuan", () => {
        expect(toWords(12500, { lang: "ms" })).toBe("dua belas ribu lima ratus");
    });

    test("Jutaan", () => {
        expect(toWords(4500000, { lang: "ms" }))
            .toBe("empat juta lima ratus ribu");
    });

    describe("Currency", () => {
        test("MYR", () => {
            expect(toWords(500, { lang: "ms", currency: "MYR" }))
                .toBe("lima ratus ringgit");
        });

        test("Fallback (EUR)", () => {
            expect(toWords(1000, { lang: "ms", currency: "EUR" }))
                .toBe("seribu eur"); // fallback
        });
    });

    describe("Ordinal", () => {
        test("Dasar", () => {
            expect(toWords(1, { lang: "ms", type: "ordinal" }))
                .toBe("pertama");
            expect(toWords(2, { lang: "ms", type: "ordinal" }))
                .toBe("kedua");
            expect(toWords(10, { lang: "ms", type: "ordinal" }))
                .toBe("kesepuluh");
        });

        test("Puluhan & Ratusan", () => {
            expect(toWords(25, { lang: "ms", type: "ordinal" }))
                .toBe("kedua puluh lima");
            expect(toWords(100, { lang: "ms", type: "ordinal" }))
                .toBe("keseratus");
        });
    });
});
