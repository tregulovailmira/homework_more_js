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

/*4) Создать объект user'а. У объекта есть имя, дата рождения(Использовать Date в js),
количество отработанных часов за месяц и ставка за час.
     Реализовать геттеры (get age) на получение возраста и заработной платы.*/

const user = {
    name: 'Kate',
    dateOfBirth: new Date(1995, 11, 10, 10, 30),
    workedHours: 50,
    perHourRate: 30,
    get age() {
        const currentDate = new Date();
        let age = currentDate.getFullYear() - this.dateOfBirth.getFullYear();
        return currentDate.setFullYear(2020) < this.dateOfBirth.setFullYear(2020) ? age - 1 : age;
    },
    get salary() {
        return this.workedHours * this.perHourRate;
    },
}

/*1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных,
которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
строки - итерируемые.*/

function getNumberOfVowels(string) {
    let sumOfVowels = 0;
    for(let item of string) {
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            sumOfVowels += 1;
        }
    }
    return sumOfVowels;
};
const string = 'dcdsmfwreiuof';
console.log('number of vowels: ', getNumberOfVowels(string));