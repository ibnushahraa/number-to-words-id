# number-to-words-id

[![npm version](https://img.shields.io/npm/v/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![npm downloads](https://img.shields.io/npm/dm/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![CI](https://github.com/ibnushahraa/number-to-words-id/actions/workflows/test.yml/badge.svg)](https://github.com/ibnushahraa/number-to-words-id/actions)
[![coverage](https://img.shields.io/badge/coverage-93%25-brightgreen.svg?style=flat-square)](https://github.com/ibnushahraa/number-to-words-id)

🔢 Convert numbers into words (**terbilang**) in **Bahasa Indonesia** 🇮🇩, **Bahasa Malaysia** 🇲🇾, and **English** 🇬🇧.
Lightweight, zero dependencies, and ready for financial or general use.

---

## ✨ Features

- Convert numbers to words in **3 languages** (Indonesia, Malaysia, English)
- Support up to **trillion / triliun / trilion**
- Optional **currency** formatting (`IDR`, `MYR`, `USD`) with fallback support
- Decimal numbers support (`koma`, `perpuluhan`, `point`)
- Currency decimals (`sen`, `cents`)
- Ordinal numbers (`pertama`, `first`, etc.)
- **Dual package support** (CommonJS + ES Modules)
- **TypeScript** definitions included
- Zero dependencies

---

## 📦 Installation

```bash
npm install number-to-words-id
```

---

## 🚀 Usage

### Basic Usage

```js
const { toWords } = require("number-to-words-id");
// or
import { toWords } from "number-to-words-id";

console.log(toWords(12500, { lang: "id" }));
// "dua belas ribu lima ratus"

console.log(toWords(12500, { lang: "en" }));
// "twelve thousand five hundred"

console.log(toWords(12500, { lang: "ms" }));
// "dua belas ribu lima ratus"
```

### Currency Formatting

```js
// Indonesian Rupiah
console.log(toWords(50000, { lang: "id", currency: "IDR" }));
// "lima puluh ribu rupiah"

// Malaysian Ringgit
console.log(toWords(500, { lang: "ms", currency: "MYR" }));
// "lima ratus ringgit"

// US Dollar
console.log(toWords(12500, { lang: "en", currency: "USD" }));
// "twelve thousand five hundred US dollars"

// Fallback for unsupported currencies
console.log(toWords(1000, { lang: "id", currency: "JPY" }));
// "seribu jpy"
```

### Decimal Numbers

```js
// Indonesian (koma)
console.log(toWords("12.34", { lang: "id" }));
// "dua belas koma tiga empat"

// Malaysian (perpuluhan)
console.log(toWords("12.34", { lang: "ms" }));
// "dua belas perpuluhan tiga empat"

// English (point)
console.log(toWords("12.34", { lang: "en" }));
// "twelve point three four"
```

### Currency with Decimals

```js
console.log(toWords("1250.75", { lang: "id", currency: "IDR" }));
// "seribu dua ratus lima puluh rupiah tujuh puluh lima sen"

console.log(toWords("1250.75", { lang: "ms", currency: "MYR" }));
// "seribu dua ratus lima puluh ringgit tujuh puluh lima sen"

console.log(toWords("1250.75", { lang: "en", currency: "USD" }));
// "one thousand two hundred fifty US dollars and seventy-five cents"
```

### Ordinal Numbers

```js
// Indonesian
console.log(toWords(1, { lang: "id", type: "ordinal" }));
// "pertama"

console.log(toWords(21, { lang: "id", type: "ordinal" }));
// "kedua puluh satu"

// English
console.log(toWords(1, { lang: "en", type: "ordinal" }));
// "first"

console.log(toWords(21, { lang: "en", type: "ordinal" }));
// "twenty-first"

// Malaysian
console.log(toWords(10, { lang: "ms", type: "ordinal" }));
// "kesepuluh"
```

---

## 🧪 Testing

```bash
npm test
```

Jest is used for testing. All tests must pass before publishing.

---

## 📂 Project Structure

```
src/       → main source code
test/      → jest test suite
examples/  → usage examples
.github/   → CI workflows
```

---

## 🌐 Integration Examples

> 💡 **More examples available in the [`examples/`](./examples) folder!**

### Express.js API

```js
const express = require("express");
const { toWords } = require("number-to-words-id");

const app = express();

app.get("/terbilang/:num", (req, res) => {
  const num = req.params.num;
  const lang = req.query.lang || "id";
  const currency = req.query.currency;
  const type = req.query.type || "cardinal";

  const result = toWords(num, { lang, currency, type });
  res.json({ input: num, lang, result });
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
```

➡️ Example:

```
GET http://localhost:3000/terbilang/12500?lang=id&currency=IDR
{
  "input": "12500",
  "lang": "id",
  "result": "dua belas ribu lima ratus rupiah"
}
```

---

### Vue 3

```vue
<script setup>
import { ref } from "vue";
import { toWords } from "number-to-words-id";

const input = ref(1234);
const output = ref("");

function convert() {
  output.value = toWords(input.value, { lang: "id", currency: "IDR" });
}
</script>

<template>
  <div>
    <input v-model="input" type="number" />
    <button @click="convert">Convert</button>
    <p>{{ output }}</p>
  </div>
</template>
```

---

### React

```jsx
import React, { useState } from "react";
import { toWords } from "number-to-words-id";

export default function App() {
  const [num, setNum] = useState(1234);
  const [result, setResult] = useState("");

  const handleConvert = () => {
    setResult(toWords(num, { lang: "en", currency: "USD" }));
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>{result}</p>
    </div>
  );
}
```

---

## 📜 API

### `toWords(num, options?)`

Convert a number to words.

**Parameters:**
- `num` (number | string): Number to convert (string for decimal support)
- `options` (object, optional):
  - `lang` (string): Language code - `"id"`, `"en"`, or `"ms"` (default: `"id"`)
  - `currency` (string): Currency code - `"IDR"`, `"MYR"`, `"USD"`, or any string (default: none)
  - `type` (string): Number type - `"cardinal"` or `"ordinal"` (default: `"cardinal"`)

**Returns:** `string` - The number converted to words

**Example:**
```js
toWords(12500, { lang: "id", currency: "IDR" });
// "dua belas ribu lima ratus rupiah"

toWords("99.99", { lang: "en" });
// "ninety-nine point nine nine"

toWords(1, { lang: "id", type: "ordinal" });
// "pertama"
```

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- Report bugs and suggest features
- Submit pull requests
- Improve documentation
- Add more language support

---

## 📄 License

[MIT](LICENSE) © 2025
