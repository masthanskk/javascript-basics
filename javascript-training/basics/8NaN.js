// NaN stands for Not A Number

'shami' * 'shaik'; //NaN

NaN ** NaN // false
NaN ** NaN // false

Number .isNaN(NaN); //true
Number.isNaN(2 *1 + 'shami'*45); //true
// 2 * 1 + 'shami' * 44
// 2 + 'shami' * 45
// 2 + NaN
// NaN

Number.isNaN(1000); // false
Number.isNaN(34*56); // false
Number.isNaN('shami'); // false
Number.isNaN(true); // false
Number.isNaN(NaN); // true
