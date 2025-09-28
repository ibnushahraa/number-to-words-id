# number-to-words-id

[![npm version](https://img.shields.io/npm/v/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![npm downloads](https://img.shields.io/npm/dm/number-to-words-id.svg?style=flat-square)](https://www.npmjs.com/package/number-to-words-id)
[![CI](https://github.com/ibnushahraa/number-to-words-id/actions/workflows/test.yml/badge.svg)](https://github.com/ibnushahraa/number-to-words-id/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/number-to-words-id.svg?style=flat-square)](./LICENSE)

Convert numbers into words (**terbilang**) in **Bahasa Indonesia** 🇮🇩, **Bahasa Malaysia** 🇲🇾, and **English** 🇬🇧.  
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

console.log(toWords(12500, { lang: "id" }));
// "dua belas ribu lima ratus"
```

### With Currency

```js
console.log(toWords(50000, { lang: "id", currency: "IDR" }));
// "lima puluh ribu rupiah"

console.log(toWords(500, { lang: "ms", currency: "MYR" }));
// "lima ratus ringgit"

console.log(toWords(12500, { lang: "en", currency: "USD" }));
// "twelve thousand five hundred US dollars"

console.log(toWords(1000, { lang: "id", currency: "JPY" }));
// "seribu jpy" (fallback)
```

### Decimals

```js
console.log(toWords("12.34", { lang: "id" }));
// "dua belas koma tiga empat"

console.log(toWords("12.34", { lang: "ms" }));
// "dua belas perpuluhan tiga empat"

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
console.log(toWords(1, { lang: "id", type: "ordinal" }));
// "pertama"

console.log(toWords(10, { lang: "ms", type: "ordinal" }));
// "kesepuluh"

console.log(toWords(21, { lang: "en", type: "ordinal" }));
// "twenty-first"
```

---

## 🌐 Integration Examples

### Express.js API (Node.js, require)

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

### Vue 3 (import)

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

### React (import)

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

## ⚡ Features

- Convert numbers to words (**Indonesia + Malaysia + English**)
- Support up to **trillion / triliun / trillion**
- Optional **currency** (`IDR`, `MYR`, `USD`) + fallback (misal `JPY` → `"jpy"`)
- Decimal support (`koma`, `perpuluhan`, `point`)
- Currency decimals (`sen`, `cents`)
- Ordinal numbers (`type: "ordinal"`)
- Clean, **no dependencies**
- Fully tested with **Jest**

---

## 🧪 Running Tests

```bash
npm test
```

---

## 📜 License

MIT
