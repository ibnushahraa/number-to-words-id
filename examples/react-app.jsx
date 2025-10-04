/**
 * React example
 * This is a reference implementation for React applications
 */

import React, { useState } from "react";
import { toWords } from "number-to-words-id";

export default function NumberToWordsConverter() {
  const [num, setNum] = useState("1234");
  const [lang, setLang] = useState("id");
  const [currency, setCurrency] = useState("");
  const [type, setType] = useState("cardinal");
  const [result, setResult] = useState("");

  const handleConvert = () => {
    try {
      const options = { lang, type };
      if (currency) options.currency = currency;

      const words = toWords(num, options);
      setResult(words);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Number to Words Converter</h1>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Number:
        </label>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
          placeholder="Enter number"
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Language:
        </label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="id">Indonesian</option>
          <option value="en">English</option>
          <option value="ms">Malaysian</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Type:
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="cardinal">Cardinal</option>
          <option value="ordinal">Ordinal</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          Currency (optional):
        </label>
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
          placeholder="e.g., IDR, USD, MYR"
        />
      </div>

      <button
        onClick={handleConvert}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Convert
      </button>

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            border: "1px solid #dee2e6",
          }}
        >
          <strong>Result:</strong>
          <p style={{ margin: "10px 0 0 0", fontSize: "18px" }}>{result}</p>
        </div>
      )}
    </div>
  );
}
