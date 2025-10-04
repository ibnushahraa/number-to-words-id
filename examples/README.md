# Examples

This directory contains various examples demonstrating how to use `number-to-words-id` in different scenarios.

## Running Examples

### Basic Examples

```bash
# Basic usage
node examples/basic.js

# Currency examples
node examples/currency.js

# Decimal numbers
node examples/decimal.js

# Ordinal numbers
node examples/ordinal.js
```

### Express.js API

```bash
# Install express first (if not already installed)
npm install express

# Run the API server
node examples/express-api.js

# Test in browser or curl
curl "http://localhost:3000/terbilang/12500?lang=id&currency=IDR"
```

### TypeScript Example

```bash
# Install TypeScript and ts-node (if not already installed)
npm install -g typescript ts-node

# Run TypeScript example
ts-node examples/typescript-example.ts
```

### React Example

The `react-app.jsx` file is a reference implementation. To use it:

1. Copy the component to your React project
2. Import and use it in your app
3. Make sure `number-to-words-id` is installed

```jsx
import NumberToWordsConverter from "./components/NumberToWordsConverter";

function App() {
  return <NumberToWordsConverter />;
}
```

### Vue Example

The `vue-app.vue` file is a reference implementation. To use it:

1. Copy the component to your Vue 3 project
2. Import and use it in your app
3. Make sure `number-to-words-id` is installed

```vue
<script setup>
import NumberToWordsConverter from "./components/NumberToWordsConverter.vue";
</script>

<template>
  <NumberToWordsConverter />
</template>
```

## File Descriptions

| File | Description |
|------|-------------|
| `basic.js` | Basic usage in all three languages (ID, EN, MS) |
| `currency.js` | Converting numbers with currency labels |
| `decimal.js` | Handling decimal numbers |
| `ordinal.js` | Converting ordinal numbers (1st, 2nd, etc.) |
| `express-api.js` | REST API implementation with Express.js |
| `react-app.jsx` | React component example |
| `vue-app.vue` | Vue 3 component example |
| `typescript-example.ts` | TypeScript usage with type safety |

## Integration Patterns

### Node.js (CommonJS)

```js
const { toWords } = require("number-to-words-id");
const result = toWords(12500, { lang: "id" });
```

### ES Modules

```js
import { toWords } from "number-to-words-id";
const result = toWords(12500, { lang: "id" });
```

### TypeScript

```ts
import { toWords, type ToWordsOptions } from "number-to-words-id";

const options: ToWordsOptions = { lang: "id", currency: "IDR" };
const result = toWords(12500, options);
```

## API Endpoints (Express Example)

### GET Request

```bash
GET /terbilang/:num?lang=id&currency=IDR&type=cardinal
```

Example:
```bash
curl "http://localhost:3000/terbilang/12500?lang=id&currency=IDR"
```

Response:
```json
{
  "success": true,
  "input": "12500",
  "lang": "id",
  "currency": "IDR",
  "type": "cardinal",
  "result": "dua belas ribu lima ratus rupiah"
}
```

### POST Request

```bash
POST /terbilang
Content-Type: application/json

{
  "num": 12500,
  "lang": "id",
  "currency": "IDR",
  "type": "cardinal"
}
```

Example:
```bash
curl -X POST http://localhost:3000/terbilang \
  -H "Content-Type: application/json" \
  -d '{"num": 12500, "lang": "id", "currency": "IDR"}'
```

## Need More Help?

Check the main [README.md](../README.md) for complete API documentation.
