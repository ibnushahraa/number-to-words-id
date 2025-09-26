// src/lang/en.js

class English {
    constructor() {
        this.units = [
            "", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen",
            "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
        ];

        this.tens = [
            "", "", "twenty", "thirty", "forty",
            "fifty", "sixty", "seventy", "eighty", "ninety"
        ];

        this.scales = [
            { value: 1e12, label: "trillion" },
            { value: 1e9, label: "billion" },
            { value: 1e6, label: "million" },
            { value: 1e3, label: "thousand" }
        ];
    }

    toWords(num) {
        num = parseInt(num, 10);
        if (isNaN(num)) return "";

        if (num < 20) return this.units[num];
        if (num < 100) {
            return (
                this.tens[Math.floor(num / 10)] +
                (num % 10 ? "-" + this.units[num % 10] : "")
            );
        }
        if (num < 1000) {
            return (
                this.units[Math.floor(num / 100)] +
                " hundred" +
                (num % 100 ? " " + this.toWords(num % 100) : "")
            );
        }

        for (const { value, label } of this.scales) {
            if (num >= value) {
                return (
                    this.toWords(Math.floor(num / value)) +
                    " " +
                    label +
                    (num % value ? " " + this.toWords(num % value) : "")
                );
            }
        }

        return "number too large";
    }
}

module.exports = { English };
