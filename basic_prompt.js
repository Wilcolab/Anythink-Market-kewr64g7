// basic_prompt.js
// Prompt describing a function that converts strings to camelCase.
// Use this prompt when generating or evaluating implementations.

module.exports = `Write a function named "toCamelCase" that takes a single string and returns a new string converted to lower camelCase (first word lowercase, subsequent words capitalized, with all separators removed).

Rules:
- Treat any sequence of non-alphanumeric characters (spaces, underscores, hyphens, punctuation) as word boundaries.
- Trim leading and trailing separators/whitespace.
- Convert all letters to lowercase except the first letter of each word after the first, which should be uppercase.
- Preserve digits in place.
- If the input is empty or contains no alphanumeric characters, return an empty string.

Examples:
- "hello world" -> "helloWorld"
- "  user_id  " -> "userId"
- "FOO_BAR-baz" -> "fooBarBaz"
- "json 2 xml" -> "json2Xml"
`; 