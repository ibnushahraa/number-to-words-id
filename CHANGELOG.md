# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2025-09-28
### Added
- Support for **decimal numbers** (`12.34 → "dua belas koma tiga empat"`, `"twelve point three four"`, etc.).
- Currency decimal support (`sen`, `cents`).
- Integration examples for **Express.js API**, **Vue 3**, and **React**.
- Added GitHub Actions CI workflow (Jest tests).

### Changed
- Refactored language classes (`id.js`, `ms.js`, `en.js`) to handle currency and decimals consistently.
- Updated test suite (`id.test.js`, `ms.test.js`, `en.test.js`) with more coverage.

---

## [1.1.0] - 2025-09-20
### Added
- Added **ordinal numbers** support (`pertama`, `kedua`, `first`, `second`, etc.).

### Changed
- Improved Indonesian, Malaysian, and English number word conversions up to **trillion**.

---

## [1.0.0] - 2025-09-15
### Added
- Initial release to npm.
- Basic support for **Bahasa Indonesia**, **Bahasa Malaysia**, and **English**.
- Currency support: `IDR`, `MYR`, `USD`.
- Unit tests with Jest.

