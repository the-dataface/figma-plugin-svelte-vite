/**
 * Generate a unique id
 * @returns {string} - A unique id
 * @example
 * uid(); // '1j4e9r'
 */
export default () => Math.random().toString(36).slice(2).toString();
