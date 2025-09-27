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

    toWords(num, type = "cardinal") {
        num = parseInt(num, 10);
        if (isNaN(num)) return "";

        if (type === "ordinal") {
            const special = {
                1: "first", 2: "second", 3: "third",
                21: "twenty-first", 22: "twenty-second", 23: "twenty-third",
                31: "thirty-first"
            };
            if (special[num]) return special[num];
            if (num % 10 === 1) return this.toWords(num) + "st";
            if (num % 10 === 2) return this.toWords(num) + "nd";
            if (num % 10 === 3) return this.toWords(num) + "rd";
            return this.toWords(num) + "th";
        }

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
