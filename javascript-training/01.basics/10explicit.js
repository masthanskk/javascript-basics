// String to Number '1' -> 1
// typeof '1' // String
//typeof 5 // Number
 
// Number('1') // 1
// Number('a') //NaN(Not a Number)


Number('12') // 12
Number('') // 0
Number (' a') // NaN

Number('12.565') // 12.565

// Floating point string plain integer '12.565' -> 12
parseInt('12.565') // 12
parseInt('67.3465') // 67
parseInt(''); // NaN
parseInt('true') // NaN
parseInt('false') // NaN


//Advantages uses in parseInt

// parseInt('121abcd') // 12 -> parseInt accept on starting number (Not any character)
// parseInt('abc66') // NaN -> parsInt no accept any characters.
// parseInt('24abcd33') // 24
// parseInt('45 abcd 77') // 45
 // parseInt('566.879') // 566

 // converting string to floating number '12.455 feet'
// parseFloat('33.5 lattitude'); //33.5


// Shortcut + VALUE -> '2' -> 2

// Numbers to String
String(2); // '2'
String(true); // 'true'
String(false); // 'false'

// Shortcut -> VALUE + '' -> 'VALUE'
2 + ''; // '2'
true + ''; // 'true'
false + ''; // 'false'




