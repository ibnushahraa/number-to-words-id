# number-to-words-id

[![npm version](https://img.shields.io/npm/v/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![npm downloads](https://img.shields.io/npm/dm/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![license](https://img.shields.io/npm/l/number-to-words-id.svg?style=flat-square)](./LICENSE)

Convert numbers into words (**terbilang**) in **Bahasa Indonesia** 🇮🇩 and **English** 🇬🇧.  
Lightweight, no dependencies, and ready for financial or general use.

---

## 🚀 Installation

```bash
npm install number-to-words-id
```

---

## 📖 Usage

### Basic

```js
const { toWords } = require("number-to-words-id");

// Bahasa Indonesia
console.log(toWords(12500, { lang: "id" }));
// "dua belas ribu lima ratus"

// Bahasa Inggris
console.log(toWords(12500, { lang: "en" }));
// "twelve thousand five hundred"
```

### With Currency

```js
// Rupiah
console.log(toWords(50000, { lang: "id", currency: "IDR" }));
// "lima puluh ribu rupiah"

// US Dollars
console.log(toWords(12500, { lang: "en", currency: "USD" }));
// "twelve thousand five hundred US dollars"
```

---

## ⚡ Features

- Convert numbers to words (Indonesia + English)
- Support up to **trillion / triliun**
- Optional **currency** (currently `IDR` & `USD`)
- Clean, no dependencies
- Fully tested with **Jest**

---

## 🧪 Running Tests

```bash
npm test
```

Output example:

```
 PASS  test/id.test.js
 PASS  test/en.test.js

Test Suites: 2 passed, 2 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        0.774 s, estimated 1 s
```

---

---

## 📜 License

MIT
