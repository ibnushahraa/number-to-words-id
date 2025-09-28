# Contributing Guide

Thank you for your interest in contributing to **number-to-words-id** 🎉  
This project is open source and welcomes contributions from anyone.

---

## 🛠 Project Setup

1. Fork this repository and clone it locally:

   ```bash
   git clone https://github.com/ibnushahraa/number-to-words-id.git
   cd number-to-words-id
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests to make sure everything works:
   ```bash
   npm test
   ```

---

## 📖 Contribution Guidelines

### 1. Adding a New Feature

- Make sure the feature is relevant to the project’s scope (converting numbers to words in multiple languages).
- Add corresponding tests in the `test/` folder.
- Ensure all tests pass before creating a PR.

### 2. Fixing Bugs

- Clearly describe the bug being fixed.
- Provide an example input → output before and after the fix.
- Add a unit test to prevent regression.

### 3. Writing Tests

- Use **Jest** as the test runner.
- Place tests in the `test/` folder with the format `*.test.js`.
- Run `npm test` before committing changes.

### 4. Code Style

- Follow the existing code style (CommonJS with `require`/`module.exports`).
- Use **2 spaces** for indentation.

---

## 🚀 Submitting a Pull Request

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Commit your changes with a clear message:

   ```bash
   git commit -m "Add support for decimal numbers in Bahasa Malaysia"
   ```

3. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request to the `main` branch of this repository.

---

## 💡 Tips

- If unsure, open an issue first to discuss your idea before coding.
- PRs without tests may not be accepted.
- Documentation updates (README, CHANGELOG) are highly appreciated 🙌.

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the **MIT License**.
