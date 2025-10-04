/**
 * Express.js API example
 * Run: node examples/express-api.js
 * Test: http://localhost:3000/terbilang/12500?lang=id&currency=IDR
 */

const express = require("express");
const { toWords } = require("../src/index");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// GET endpoint
app.get("/terbilang/:num", (req, res) => {
  try {
    const num = req.params.num;
    const lang = req.query.lang || "id";
    const currency = req.query.currency;
    const type = req.query.type || "cardinal";

    const result = toWords(num, { lang, currency, type });

    res.json({
      success: true,
      input: num,
      lang,
      currency: currency || null,
      type,
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// POST endpoint
app.post("/terbilang", (req, res) => {
  try {
    const { num, lang, currency, type } = req.body;

    if (!num) {
      return res.status(400).json({
        success: false,
        error: "Number is required",
      });
    }

    const result = toWords(num, { lang, currency, type });

    res.json({
      success: true,
      input: num,
      lang: lang || "id",
      currency: currency || null,
      type: type || "cardinal",
      result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Number to Words API",
    endpoints: {
      GET: "/terbilang/:num?lang=id&currency=IDR&type=cardinal",
      POST: "/terbilang (body: {num, lang, currency, type})",
    },
  });
});

app.listen(PORT, () => {
  console.log(`✓ API running on http://localhost:${PORT}`);
  console.log(`\nExample requests:`);
  console.log(`  GET  http://localhost:${PORT}/terbilang/12500?lang=id`);
  console.log(`  GET  http://localhost:${PORT}/terbilang/12500?lang=id&currency=IDR`);
  console.log(`  POST http://localhost:${PORT}/terbilang`);
  console.log(`       Body: {"num": 12500, "lang": "id", "currency": "IDR"}`);
});
