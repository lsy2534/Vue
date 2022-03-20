"use strict";

var func1 = function func1(a, b) {
    return a + b;
};

console.log(func1(3, 4)); // 7

var func2 = function func2(a, b) {
    return a + b;
};

//console.log(func2(3, 4));

var func3 = function func3(a, b) {
    return a + b;
};
console.log(func3(3, 4));

var func4 = function func4(a, b) {
    return a + b;
};
console.log(finc4(3, 4));

var addNumber2 = function addNumber2(num) {
    return function (value) {
        return num + value;
    };
};
var resilt2 = addNumber1(2)(4); //