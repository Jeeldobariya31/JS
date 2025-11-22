// 08_nums_and_maths.js

// Demonstrating number operations and mathematical functions in JavaScript
console.log("------------- Number -----------");
// Creating numbers using literals
let integerNum = 100;
let floatNum = 99.99;
console.log("Integer Number:", integerNum); // Output: 100
console.log("Float Number:", floatNum); // Output: 99.99

// Creating numbers using Number constructor
let constructorNum = new Number(123.45);
console.log("Constructor Number:", constructorNum.valueOf()); // Output: 123.45
// Number operations
let a = 10;
let b = 3;
console.log("Addition:", a + b); // Output: 13
console.log("Subtraction:", a - b); // Output: 7
console.log("Multiplication:", a * b); // Output: 30
console.log("Division:", a / b); // Output: 3.3333333333333335
console.log("Modulus:", a % b); // Output: 1
console.log("Exponentiation:", a ** b); // Output: 1000

// Increment and Decrement
let incrementNum = 5;
incrementNum++;
console.log("Incremented Number:", incrementNum); // Output: 6
let decrementNum = 5;
decrementNum--;
console.log("Decremented Number:", decrementNum); // Output: 4

// Number methods
console.log("------------- Number Methods -----------");
let sampleNum = 45.6789;
console.log("Original Number:", sampleNum); // Output: 45.6789
//1. toFixed - formats a number using fixed-point notation
console.log("toFixed(2):", sampleNum.toFixed(2)); // Output: 45.68
//2. toPrecision - formats a number to a specified length
console.log("toPrecision(4):", sampleNum.toPrecision(4)); // Output: 45.68
//3. toString - converts a number to a string
console.log("toString():", sampleNum.toString()); // Output: "45.6789"
// To string in different bases
console.log("toString(2):", sampleNum.toString(2)); // Output: Binary representation
console.log("toString(8):", sampleNum.toString(8)); // Output: Octal representation
console.log("toString(16):", sampleNum.toString(16)); // Output: Hexadecimal representation
//4. toExponential - returns a string representing the number in exponential notation
console.log("toExponential(2):", sampleNum.toExponential(2)); // Output: "4.57e+1"
//5. toLocaleString - returns a string with a language sensitive representation of the number
console.log("toLocaleString():", sampleNum.toLocaleString()); // Output: Locale specific string
// to LocaleString with options
// Examples with different locales and options
// Note: Outputs may vary based on the environment's locale settings
//(i) en-US- United States
console.log("toLocaleString('en-US'):", sampleNum.toLocaleString("en-US")); // Output: "45.68" (US English)
//(ii) de-DE- Germany
console.log("toLocaleString('de-DE'):", sampleNum.toLocaleString("de-DE")); // Output: "45,6789" (German format)
//(iii) fr-FR- France
console.log("toLocaleString('fr-FR'):", sampleNum.toLocaleString("fr-FR")); // Output: "45,6789" (French format)
//(iv) ja-JP- Japan
console.log("toLocaleString('ja-JP'):", sampleNum.toLocaleString("ja-JP")); // Output: "45.6789" (Japanese format)
//(v) en-IN- India
console.log("toLocaleString('en-IN'):", sampleNum.toLocaleString("en-IN")); // Output: "45.6789" (Indian format)

// toLocaleString with style options
// Currency formatting examples
console.log("------------- Currency Formatting -----------");
//(i)ja-JP - Japanese Yen
console.log(
  "toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }):",
  sampleNum.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
); // Output: "¥46" (Japanese Yen format)
//(ii)en-US - US Dollar
console.log(
  "toLocaleString('en-US', { style: 'currency', currency: 'USD' }):",
  sampleNum.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // Output: "$45.68" (US Dollar format)
//(iii)en-GB - British Pound
console.log(
  "toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }):",
  sampleNum.toLocaleString("en-GB", { style: "currency", currency: "GBP" })
); // Output: "£45.68" (British Pound format)
//(iv)es-ES - Euro
console.log(
  "toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }):",
  sampleNum.toLocaleString("es-ES", { style: "currency", currency: "EUR" })
); // Output: "45,68 €" (Euro format)
//(v)zh-CN - Chinese Yuan
console.log(
  "toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' }):",
  sampleNum.toLocaleString("zh-CN", { style: "currency", currency: "CNY" })
); // Output: "¥45.68" (Chinese Yuan format)
//(vi)hi-IN - Indian Rupee
console.log(
  "toLocaleString('hi-IN', { style: 'currency', currency: 'INR' }):",
  sampleNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" })
); // Output: "₹45.68" (Indian Rupee format)
//(vii)fr-FR - Euro
console.log(
  "toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' }):",
  sampleNum.toLocaleString("fr-FR", { style: "currency", currency: "EUR" })
); // Output: "45,68 €" (French Euro format)
//(viii)it-IT - Euro
console.log(
  "toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }):",
  sampleNum.toLocaleString("it-IT", { style: "currency", currency: "EUR" })
); // Output: "45,68 €" (Italian Euro format)
//(ix)ar-SA - Saudi Riyal
console.log(
  "toLocaleString('ar-SA', { style: 'currency', currency: 'SAR' }):",
  sampleNum.toLocaleString("ar-SA", { style: "currency", currency: "SAR" })
); // Output: "ر.س.‏ 45.68" (Saudi Riyal format)
//x)ru-RU - Russian Ruble
console.log(
  "toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }):",
  sampleNum.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })
); // Output: "45,68 ₽" (Russian Ruble format)
//(xi)pt-BR - Brazilian Real
console.log(
  "toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }):",
  sampleNum.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
); // Output: "R$ 45,68" (Brazilian Real format)
//(xii)ko-KR - Korean Won
console.log(
  "toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }):",
  sampleNum.toLocaleString("ko-KR", { style: "currency", currency: "KRW" })
); // Output: "₩46" (South Korean Won format)
//(xiii)tr-TR - Turkish Lira
console.log(
  "toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }):",
  sampleNum.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })
); // Output: "₺45,68" (Turkish Lira format)
//(xiv)nl-NL - Euro
console.log(
  "toLocaleString('nl-NL', { style: 'currency', currency: 'EUR' }):",
  sampleNum.toLocaleString("nl-NL", { style: "currency", currency: "EUR" })
); // Output: "€ 45,68" (Dutch Euro format)
//(xv)sv-SE - Swedish Krona
console.log(
  "toLocaleString('sv-SE', { style: 'currency', currency: 'SEK' }):",
  sampleNum.toLocaleString("sv-SE", { style: "currency", currency: "SEK" })
); // Output: "45,68 kr" (Swedish Krona format)
//(xvi)fi-FI - Euro
console.log(
  "toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }):",
  sampleNum.toLocaleString("fi-FI", { style: "currency", currency: "EUR" })
); // Output: "45,68 €" (Finnish Euro format)
//(xvii)pl-PL - Polish Zloty
console.log(
  "toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' }):",
  sampleNum.toLocaleString("pl-PL", { style: "currency", currency: "PLN" })
); // Output: "45,68 zł" (Polish Zloty format)
//(xviii)cs-CZ - Czech Koruna
console.log(
  "toLocaleString('cs-CZ', { style: 'currency', currency: 'CZK' }):",
        sampleNum.toLocaleString("cs-CZ", { style: "currency", currency: "CZK" })
); // Output: "45,68 Kč" (Czech Koruna format)
//(xix)hu-HU - Hungarian Forint
console.log(
  "toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' }):",
  sampleNum.toLocaleString("hu-HU", { style: "currency", currency: "HUF" })
); // Output: "45,68 Ft" (Hungarian Forint format)
//(xx)lt-LT - Lithuanian Litas
console.log(
  "toLocaleString('lt-LT', { style: 'currency', currency: 'LTL' }):",
  sampleNum.toLocaleString("lt-LT", { style: "currency", currency: "LTL" })
); // Output: "45,68 Lt" (Lithuanian Litas format)


//----------------------------------------------------------------------------------------------------------------------

// Number properties
console.log("------------- Number Properties -----------");
//1. MAX_VALUE - largest representable number
console.log("Number.MAX_VALUE:", Number.MAX_VALUE); // Output: 1.7976931348623157e+308
//2. MIN_VALUE - smallest representable positive number
console.log("Number.MIN_VALUE:", Number.MIN_VALUE); // Output: 5e-324
//3. NaN - special "Not-a-Number" value
console.log("Number.NaN:", Number.NaN); // Output: NaN
//4. POSITIVE_INFINITY - represents positive infinity
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Output: Infinity
//5. NEGATIVE_INFINITY - represents negative infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // Output: -Infinity
//6. EPSILON - smallest difference between two representable numbers
console.log("Number.EPSILON:", Number.EPSILON); // Output: 2.220446049250313e-16
//7. MAX_SAFE_INTEGER - largest safe integer in JavaScript
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
//8. MIN_SAFE_INTEGER - smallest safe integer in JavaScript
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// Number global methods
console.log("------------- Number Global Methods -----------");
//4. valueOf - returns the primitive value of a Number object
console.log("parseInt('123abc'):", parseInt("123abc")); // Output: 123
//5. parseFloat - parses a string and returns a floating point number
console.log("parseFloat('123.45abc'):", parseFloat("123.45abc")); // Output: 123.45
console.log("parseFloat('123.45xyz'):", parseFloat("123.45xyz")); // Output: 123.45
//6. isNaN - checks if a value is NaN (Not-a-Number)
console.log("isNaN('hello'):", isNaN("hello")); // Output: true
console.log("isNaN(123):", isNaN(123)); // Output: false
//7. isFinite - checks if a value is a finite number
console.log("isFinite(1000):", isFinite(1000)); // Output: true
console.log("isFinite(NaN):", isFinite(NaN)); // Output: false
console.log("isFinite(-Infinity):", isFinite(-Infinity)); // Output: false
console.log("isFinite(Infinity):", isFinite(Infinity)); // Output: false
//8. Number.isInteger - checks if a value is an integer
console.log("isInteger(42):", Number.isInteger(42)); // Output: true
console.log("isInteger(42.5):", Number.isInteger(42.5)); // Output: false
console.log("isInteger(NaN):", Number.isInteger(NaN)); // Output: false
console.log("isInteger(Infinity):", Number.isInteger(Infinity)); // Output: false
console.log("isInteger(-Infinity):", Number.isInteger(-Infinity)); // Output: false
//9. Number.isSafeInteger - checks if a value is a safe integer
console.log(
  "isSafeInteger(9007199254740991):",
  Number.isSafeInteger(9007199254740991)
); // Output: true
console.log(
  "isSafeInteger(9007199254740992):",
  Number.isSafeInteger(9007199254740992)
); // Output: false
//-----------------------------------------------------------------------------------------------------------
console.log("-------------Math Object -----------");
// Math object properties
console.log("------------- Math Object Properties -----------");
// Common mathematical constants
//1. PI - ratio of the circumference of a circle to its diameter
console.log("Math.PI:", Math.PI); // Output: 3.141592653589793
//2. E - Euler's number, the base of natural logarithms
console.log("Math.E:", Math.E); // Output: 2.718281828459045
//3. LN2 - natural logarithm of 2
console.log("Math.LN2:", Math.LN2); // Output: 0.6931471805599453
//4. LN10 - natural logarithm of 10
console.log("Math.LN10:", Math.LN10); // Output: 2.302585092994046
//5. LOG2E - base 2 logarithm of E
console.log("Math.LOG2E:", Math.LOG2E); // Output: 1.4426950408889634
//6. LOG10E - base 10 logarithm of E
console.log("Math.LOG10E:", Math.LOG10E); // Output: 0.4342944819032518
//7. SQRT2 - square root of 2
console.log("Math.SQRT2:", Math.SQRT2); // Output: 1.4142135623730951
//8. SQRT1_2 - square root of 1/2
console.log("Math.SQRT1_2:", Math.SQRT1_2); // Output: 0.7071067811865476

// Math object methods
console.log("------------- Math Object Methods -----------");
//1. Math.sqrt - returns the square root of a number
console.log("Math.sqrt(16):", Math.sqrt(16)); // Output: 4
//2. Math.pow - returns the base to the exponent power
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Output: 8
//3. Math.abs - returns the absolute value of a number
console.log("Math.abs(-10):", Math.abs(-10)); // Output: 10
//4. Math.ceil - rounds a number upward to its nearest integer
console.log("Math.ceil(4.3):", Math.ceil(4.3)); // Output: 5
//5. Math.floor - rounds a number downward to its nearest integer
console.log("Math.floor(4.7):", Math.floor(4.7)); // Output: 4
//6. Math.round - rounds a number to the nearest integer
console.log("Math.round(4.5):", Math.round(4.5)); // Output: 5
//7. Math.max - returns the largest of zero or more numbers
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // Output: 5
//8. Math.min - returns the smallest of zero or more numbers
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // Output: 1
//9. Math.random - returns a pseudo-random number between 0 and 1
console.log("Math.random():", Math.random()); // Output: Random number between 0 and 1
//10.Math.log - returns the natural logarithm (base e) of a number
console.log("Math.log(10):", Math.log(10)); // Output: 2.302585092994046
//11. Math.log2 - returns the base 2 logarithm of a number
console.log("Math.log2(8):", Math.log2(8)); // Output: 3
//12. Math.log10 - returns the base 10 logarithm of a number
console.log("Math.log10(100):", Math.log10(100)); // Output: 2
//13. Math.sin - returns the sine of a number (angle in radians)
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2)); // Output: 1
//14. Math.cos - returns the cosine of a number (angle in radians)
console.log("Math.cos(0):", Math.cos(0)); // Output: 1
//15. Math.tan - returns the tangent of a number (angle in radians)
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4)); // Output: 1
//16. Math.asin - returns the arcsine of a number (angle in radians)
console.log("Math.asin(1):", Math.asin(1)); // Output: 1.5707963267948966
//17. Math.acos - returns the arccosine of a number (angle in radians)
console.log("Math.acos(1):", Math.acos(1)); // Output: 0
//18. Math.atan - returns the arctangent of a number (angle in radians)
console.log("Math.atan(1):", Math.atan(1)); // Output: 0.7853981633974483
//19. Math.atan2 - returns the arctangent of the quotient of its arguments
console.log("Math.atan2(1, 1):", Math.atan2(1, 1)); // Output: 0.7853981633974483
//20. Math.hypot - returns the square root of the sum of squares of its arguments
console.log("Math.hypot(3, 4):", Math.hypot(3, 4)); // Output: 5
//21. Math.cbrt - returns the cube root of a number
console.log("Math.cbrt(8):", Math.cbrt(8)); // Output: 2
//22. Math.sign - returns the sign of a number
console.log("Math.sign(-5):", Math.sign(-5)); // Output: -1
//23. Math.trunc - returns the integer part of a number by removing any fractional digits
console.log("Math.trunc(4.7):", Math.trunc(4.7)); // Output: 4
//24. Math.clz32 - returns the number of leading zero bits in the 32-bit binary representation of a number
console.log("Math.clz32(10):", Math.clz32(10)); // Output: 2
//25. Math.imul - returns the result of a 32-bit integer multiplication
console.log("Math.imul(2, 3):", Math.imul(2, 3)); // Output: 6
//26. Math.fround - returns the nearest 32-bit single precision float representation of a number
console.log("Math.fround(4.5):", Math.fround(4.5)); // Output: 4.5
//27(i). Math.expm1 - returns e^x - 1, where x is the argument, and e is Euler's number
console.log("Math.expm1(2):", Math.expm1(2)); // Output: 6.38905609893065
//27(ii). Math.exp - returns e raised to the power of a number
console.log("Math.exp(2):", Math.exp(2)); // Output: 7.38905609893065
//28. Math.log1p - returns the natural logarithm of 1 + x
console.log("Math.log1p(1):", Math.log1p(1)); // Output: 0.6931471805599453
//29. Math.sinh - returns the hyperbolic sine of a number
console.log("Math.sinh(1):", Math.sinh(1)); // Output: 1.1752011936438014
//30. Math.cosh - returns the hyperbolic cosine of a number
console.log("Math.cosh(1):", Math.cosh(1)); // Output: 1.5430806348152437
//31. Math.tanh - returns the hyperbolic tangent of a number
console.log("Math.tanh(1):", Math.tanh(1)); // Output: 0.7615941559557649
//32. Math.asinh - returns the hyperbolic arcsine of a number
console.log("Math.asinh(1):", Math.asinh(1)); // Output: 0.8813735870195436
//33. Math.acosh - returns the hyperbolic arccosine of a number
console.log("Math.acosh(2):", Math.acosh(2)); // Output: 1.3169578969248166
//34. Math.atanh - returns the hyperbolic arctangent of a number
console.log("Math.atanh(0.5):", Math.atanh(0.5)); // Output: 0.5493061443340549

// Extra Math methods user defined
//35. Math.roundTo - rounds a number to a specified number of decimal places
Math.roundTo = function (num, places) {
  let factor = Math.pow(10, places);
  return Math.round(num * factor) / factor;
};
console.log("Math.roundTo(4.56789, 2):", Math.roundTo(4.56789, 2)); // Output: 4.57
//36. Math.randomInt - returns a random integer between min (inclusive) and max (exclusive)
Math.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log("Math.randomInt(1, 10):", Math.randomInt(1, 10)); // Output: Random integer between 1 and 9

// Note: JavaScript uses double-precision 64-bit binary format IEEE 754 for all its numeric values.
