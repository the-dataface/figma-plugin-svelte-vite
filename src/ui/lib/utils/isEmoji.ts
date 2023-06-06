/**
 * Check if a string is an emoji
 * @param emoji The string to check
 * @returns {boolean} Whether the string is an emoji
 * @example isEmoji('👍'); // true
 */
export default (emoji: string) => /\p{Emoji}/u.test(emoji);
