/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens and other non-alphanumeric separators.
 *
 * Examples:
 *  toCamelCase('first name')   -> 'firstName'
 *  toCamelCase('user_id')      -> 'userId'
 *  toCamelCase('SCREEN_NAME')  -> 'screenName'
 *  toCamelCase('mobile-number')-> 'mobileNumber'
 *
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';

    // Split on any non-alphanumeric sequences
    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    // If there are no separators, preserve interior casing but ensure first char is lowercased
    const hasSeparator = /[^A-Za-z0-9]/.test(str);
    if (!hasSeparator) {
        return parts[0].charAt(0).toLowerCase() + parts[0].slice(1);
    }

    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => {
            const lower = p.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');

    return first + rest;
}

module.exports = toCamelCase;

/* Uncomment to run quick checks:
console.log(toCamelCase('first name'));    // firstName
console.log(toCamelCase('user_id'));       // userId
console.log(toCamelCase('SCREEN_NAME'));   // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber
console.log(toCamelCase('fooBar'));        // fooBar
*/