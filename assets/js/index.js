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

/*2)Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция
принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/


function logNumbers(n) { // с использованием массивов
    const array = [];
    for(let i = 0; i < n; i++) {
        array[i] = i + 1;
    }
    console.log(array);
    for(let i = 0; i < n; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            console.log('fizzbuzz');
        } else if (array[i] % 3 === 0) {
            console.log('fizz');
        } else if (array[i] % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(array[i]);
        }
    }
}

function logNumbers2(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else
            console.log(i);
    }
};
logNumbers(20);
logNumbers2(20);

/*3) Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.*/

function average(...args) {
    const isInvalid = args.some((item) => isNaN(item));
    if (isInvalid) {
        console.error('invalid value');
        return;
    }
    return args.reduce((accumulator, item) => accumulator + item)/args.length;
};
console.log('average of arguments: ', average(5, 5, 5, 10, 18));

/*4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать
получаемый аргумент с аргументом n возвращающей функции.
замыкание.*/

function addNum(number) {
    let counter = 0;

    return function (number) {
        return counter += number;
    }
};

const result = addNum();
console.log('result = ', result(20));
console.log('result = ', result(50));
console.log('result = ', result(500));

/*5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные,
а fn — функция, которая берет два аргумента и выполняет математическую операцию над ними*/

const number1 = 34;
const number2 = 55;
function getMathOperation (arg1, arg2) {
    return arg1 + arg2;
};

function operation(num1, num2, fn) {
    return fn(num1, num2);
};
console.log('operation result: ', operation(number1, number2, getMathOperation));

/*6) Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна
возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()*/

const obj = {
    method1: function () {
        return this;
    },
    method2: function () {
        return this;
    },
    method3: function () {
        return 'method3';
    },
};

/*2) Написать функцию глубокого выравнивания для объекта. (flat для объектов).*/

function flatForObject(object) {
    let newObject = {};
    for (let key in object) {
        if (object[key].toString() === '[object Object]') {
            const buffer = flatForObject(object[key]);
            for (let keyInBuffer in buffer) {
                newObject[keyInBuffer] = buffer[keyInBuffer]; //вывоод без названия ключа, в котором был вложен объект (e4: 'e6')
                //newObject[key + '.' + keyInBuffer] = buffer[keyInBuffer]; //либо так - складывать вложенный ключ к исходному, чтобы понимать, куда был вложен объект (b.c.e4: 'e6')
            }
        } else {
            newObject[key] = object[key];
        }
    }
    return newObject;
};
let object = {
    a: 'a',
    b: {
        b1: {b2: 'b3',},
        d4: 'b5',
    },
    c: {
        c4: 'c6',
        c5: 'c7',
    },
    d: 'd',
    e: 'e',
};
console.log(flatForObject(object));

/*1) Реализовать метод flat для MyArray (сделать как точную копию метода flat у Array; Использовать рекурсию; */

function MyArray() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    };
};

function ArrayMethods() {
    this.pop = function () {
        let lastElement = this[this.length-1];
        delete this[this.length-1];
        this.length = this.length - 1;
        return lastElement;
    };

    this.push = function () {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    };

    this.forEach = function (callback, thisArg = this) {
        for(let i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    };

    this.toString = () => '[object MyArray]'

    this.isMyArray = (MyArray) => {
        return MyArray.toString() === '[object MyArray]' && Object.prototype.toString.call(MyArray) === '[object Object]';
    }

    this.flat = function flatMethod(array = this, depth = 1) {
        let newArray = new MyArray();
        if (depth < 0) {
            console.error("depth must be a positive value");
            return;
        }
        if (depth === 0) {
            newArray = array;
            return newArray;
        }
        for(let i = 0; i < array.length; i++){
            if(MyArray.prototype.isMyArray(array[i])) {
                const buffer = flatMethod(array[i], depth - 1);
                for(let j = 0; j < buffer.length; j++){
                    newArray.push(buffer[j]);
                }
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
};

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray('11', '22', '33', '44');
const myArr2 = new MyArray('55', '66', '77', myArr);
const myArr3 = new MyArray('99', myArr, '1111', myArr2);
const myArr4 = new MyArray('99', '1010', 222, myArr3);
console.log('myArr4: ', myArr4);
const newMyArr = myArr4.flat(myArr4, 2);
console.log('newMyArr: ', newMyArr);