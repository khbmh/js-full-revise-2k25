/*
--
--
007. JS Reserved Words
--
https://youtu.be/jni00pR4WHw?feature=shared
--
*/

// JavaScript Reserved Words (ES6)

// Keywords
const reservedKeywords = [
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'import',
  'in',
  'instanceof',
  'let',
  'new',
  'return',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
];

// Future Reserved Words
const futureReservedWords = [
  'enum',
  'implements',
  'interface',
  'package',
  'private',
  'protected',
  'public',
  'static',
  'yield',
];

// Strict Mode Reserved Words
const strictModeReservedWords = ['eval', 'arguments'];

// Combine all reserved words into one array
const allReservedWords = [
  ...reservedKeywords,
  ...futureReservedWords,
  ...strictModeReservedWords,
];

// Print out the reserved words (optional)
console.log('All JavaScript Reserved Words:', allReservedWords);
