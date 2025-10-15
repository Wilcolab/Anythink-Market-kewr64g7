const kebabCase = require('./chain_prompt');

/**
 * Convert a string to kebab-case:
 * - normalize and remove diacritics
 * - convert to lowercase
 * - replace whitespace/underscores with hyphens
 * - remove all characters except a-z, 0-9 and hyphens
 * - collapse multiple hyphens and trim edges
 *
 * @param {any} input
 * @returns {string}
 */
function kebabCase(input) {
    const s = String(input || '')
        .normalize('NFKD')                      // decompose accented letters
        .replace(/[\u0300-\u036f]/g, '')        // remove diacritic marks
        .toLowerCase()
        .replace(/[_\s]+/g, '-')                // underscores and spaces -> hyphen
        .replace(/[^a-z0-9-]/g, '')             // drop unwanted chars (punctuation, symbols)
        .replace(/-+/g, '-')                    // collapse multiple hyphens
        .replace(/^-|-$/g, '');                 // trim leading/trailing hyphens

    return s;
}

module.exports = kebabCase;

/*
Example:
console.log(kebabCase("Hello, World! This is — kebab_case.")); // "hello-world-this-is-kebab-case"
*/