/**
 * Language options for number-to-words conversion
 */
export type Language = 'id' | 'en' | 'ms';

/**
 * Number type options
 */
export type NumberType = 'cardinal' | 'ordinal';

/**
 * Supported currency codes
 */
export type Currency = 'IDR' | 'MYR' | 'USD' | string;

/**
 * Options for the toWords function
 */
export interface ToWordsOptions {
  /**
   * Language for conversion
   * - 'id': Bahasa Indonesia
   * - 'en': English
   * - 'ms': Bahasa Malaysia
   * @default 'id'
   */
  lang?: Language;

  /**
   * Currency code (e.g., 'IDR', 'MYR', 'USD')
   * When specified, adds currency label to the result
   */
  currency?: Currency;

  /**
   * Type of number representation
   * - 'cardinal': Standard number (e.g., "one", "satu")
   * - 'ordinal': Ordinal number (e.g., "first", "pertama")
   * @default 'cardinal'
   */
  type?: NumberType;
}

/**
 * Convert numbers to words in Indonesian, Malaysian, or English
 *
 * @param num - Number to convert (can be string for decimal support)
 * @param options - Conversion options
 * @returns The number converted to words
 *
 * @example
 * ```ts
 * // CommonJS
 * const { toWords } = require('number-to-words-id');
 *
 * // ES Modules
 * import { toWords } from 'number-to-words-id';
 *
 * toWords(12500, { lang: 'id' })
 * // "dua belas ribu lima ratus"
 *
 * toWords(50000, { lang: 'id', currency: 'IDR' })
 * // "lima puluh ribu rupiah"
 *
 * toWords('12.34', { lang: 'id' })
 * // "dua belas koma tiga empat"
 *
 * toWords(1, { lang: 'id', type: 'ordinal' })
 * // "pertama"
 * ```
 */
export function toWords(num: number | string, options?: ToWordsOptions): string;

// CommonJS compatibility
export = { toWords };
