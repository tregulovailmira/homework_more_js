'use strict';
/*3) Написать функцию logParenthis используя массивы, а не шаблонные строки.
     logParenthis (3) // ((()))*/

function logParenthis (number) {
    let array = [];
    if (number === 1) {
        array.unshift('(');
        array.push(')');
        return array.join().replace(/,/g, '');
    }
    array.unshift('(');
    array.push(logParenthis(number - 1));
    array.push(')');
    return array.join().replace(/,/g, '');
}

console.log(logParenthis(5));