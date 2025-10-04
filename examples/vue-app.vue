<!--
  Vue 3 example
  This is a reference implementation for Vue 3 applications
-->

<script setup>
import { ref } from "vue";
import { toWords } from "number-to-words-id";

const num = ref("1234");
const lang = ref("id");
const currency = ref("");
const type = ref("cardinal");
const result = ref("");

function convert() {
  try {
    const options = { lang: lang.value, type: type.value };
    if (currency.value) options.currency = currency.value;

    result.value = toWords(num.value, options);
  } catch (error) {
    result.value = `Error: ${error.message}`;
  }
}
</script>

<template>
  <div class="converter">
    <h1>Number to Words Converter</h1>

    <div class="form-group">
      <label for="number">Number:</label>
      <input
        id="number"
        v-model="num"
        type="text"
        placeholder="Enter number"
      />
    </div>

    <div class="form-group">
      <label for="language">Language:</label>
      <select id="language" v-model="lang">
        <option value="id">Indonesian</option>
        <option value="en">English</option>
        <option value="ms">Malaysian</option>
      </select>
    </div>

    <div class="form-group">
      <label for="type">Type:</label>
      <select id="type" v-model="type">
        <option value="cardinal">Cardinal</option>
        <option value="ordinal">Ordinal</option>
      </select>
    </div>

    <div class="form-group">
      <label for="currency">Currency (optional):</label>
      <input
        id="currency"
        v-model="currency"
        type="text"
        placeholder="e.g., IDR, USD, MYR"
      />
    </div>

    <button @click="convert" class="btn">Convert</button>

    <div v-if="result" class="result">
      <strong>Result:</strong>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<style scoped>
.converter {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: #3aa876;
}

.result {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #dee2e6;
}

.result p {
  margin: 10px 0 0 0;
  font-size: 18px;
}
</style>
