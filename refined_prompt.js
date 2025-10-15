/**
 * Convert an input value to "dot.case" — a lowercase, dot-separated representation.
 *
 * Behavior and rules:
 * - Splits on camelCase and PascalCase boundaries (e.g. "helloWorld" -> "hello.world").
 * - Treats spaces, underscores (_), dashes (-), dots (.) and other punctuation as separators.
 * - Collapses multiple adjacent separators into a single dot (e.g. "a__b--c" -> "a.b.c").
 * - Trims leading/trailing separators and whitespace.
 * - Lowercases all resulting segments.
 * - Non-alphanumeric punctuation is treated as a separator; characters matched by \w (ASCII letters, digits, and underscore) and whitespace are preserved during normalization.
 * - Numeric segments are preserved and will be separated from adjacent camel/pascal case boundaries (e.g. "v2Release" -> "v2.release").
 *
 * Input handling:
 * - If input is null or undefined, the function returns an empty string ("").
 * - Any other input is coerced to a string via String(input) before processing.
 *
 * Notes and caveats:
 * - The implementation uses regular expressions based on ASCII word characters (\w). Certain Unicode letters outside the ASCII range may be treated as non-word characters and therefore act as separators in some environments.
 * - No exceptions are thrown for normal inputs; the function always returns a string (except when explicitly given null/undefined which returns "").
 *
 * @param {*} input - The value to convert. If null or undefined, the function returns an empty string. Non-string inputs will be coerced to string.
 * @returns {string} A dot-separated, lowercased string representing the input in dot.case. Returns "" for null/undefined inputs.
 *
 * @example
 * toDotCase("HelloWorld");            // "hello.world"
 * @example
 * toDotCase("some_text-toConvert");   // "some.text.to.convert"
 * @example
 * toDotCase(" already . dot.CASE ");  // "already.dot.case"
 * @example
 * toDotCase(null);                    // ""
 * @example
 * toDotCase("XMLHttpRequest");        // "xml.http.request"
 */
/**
 * Adds two values only if they can be interpreted as numbers.
 * - Converts string inputs to numbers.
 * - Returns NaN if conversion fails (non-numeric strings).
 * - Returns null if either input is null/undefined/blank (handled via exception).
 *
 * Examples:
 *   addNumbers(2, 3)        // 5
 *   addNumbers("4", "1.5")  // 5.5
 *   addNumbers("a", 1)      // NaN
 *   addNumbers("", 1)       // null
 */
function addNumbers(a, b) {
    try {
        const isBlank = (v) => v === null || v === undefined || (typeof v === 'string' && v.trim() === '');
        if (isBlank(a)) throw new Error('First input is blank');
        if (isBlank(b)) throw new Error('Second input is blank');

        const n1 = Number(a);
        const n2 = Number(b);

        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            return NaN;
        }

        return n1 + n2;
    } catch (err) {
        // Handle null/blank cases via exception handling as requested.
        // Returning null to indicate a blank input was provided.
        return null;
    }
}

/**
 * Converts a string to dot.case
 *
 * Rules:
 * - Splits on camelCase and PascalCase boundaries.
 * - Treats spaces, underscores, dashes, dots and other punctuation as separators.
 * - Collapses multiple separators.
 * - Lowercases all parts and joins with dots.
 *
 * Examples:
 *   toDotCase("HelloWorld")         // "hello.world"
 *   toDotCase("some_text-toConvert")// "some.text.to.convert"
 *   toDotCase(" already . dot.CASE ") // "already.dot.case"
 */
function toDotCase(input) {
    if (input === null || input === undefined) return '';
    const s = String(input);

    // Insert spaces at camelCase/PascalCase boundaries
    const spaced = s
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        // Normalize separators to spaces, remove other non-word chars
        .replace(/[\s_\-\.]+/g, ' ')
        .replace(/[^\w\s]/g, ' ')
        .trim();

    const parts = spaced.split(/\s+/).filter(Boolean).map(p => p.toLowerCase());
    return parts.join('.');
}

module.exports = { addNumbers, toDotCase };
