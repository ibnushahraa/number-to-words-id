// src/lang/ms.js

class Malaysian {
    constructor() {
        this.satuan = [
            "", "satu", "dua", "tiga", "empat",
            "lima", "enam", "tujuh", "lapan", "sembilan",
            "sepuluh", "sebelas"
        ];

        this.scales = [
            { value: 1e12, label: "trilion" },
            { value: 1e9, label: "bilion" },
            { value: 1e6, label: "juta" },
            { value: 1e3, label: "ribu" }
        ];
    }

    toWords(num, type = "cardinal") {
        num = parseInt(num, 10);
        if (isNaN(num)) return "";

        if (type === "ordinal") {
            if (num === 1) return "pertama";
            return `ke${this.toWords(num)}`;
        }

        if (num < 12) return this.satuan[num];
        if (num < 20) return this.satuan[num - 10] + " belas";
        if (num < 100) {
            return (
                this.satuan[Math.floor(num / 10)] +
                " puluh " +
                this.toWords(num % 10)
            ).trim();
        }
        if (num < 200) return ("seratus " + this.toWords(num - 100)).trim();
        if (num < 1000) {
            return (
                this.satuan[Math.floor(num / 100)] +
                " ratus " +
                this.toWords(num % 100)
            ).trim();
        }
        if (num < 2000) return ("seribu " + this.toWords(num - 1000)).trim();

        for (const { value, label } of this.scales) {
            if (num >= value) {
                return (
                    this.toWords(Math.floor(num / value)) +
                    " " +
                    label +
                    " " +
                    this.toWords(num % value)
                ).trim();
            }
        }

        return "nombor terlalu besar";
    }
}

module.exports = { Malaysian };
