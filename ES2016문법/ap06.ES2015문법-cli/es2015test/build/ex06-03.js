'use strict';

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
var greeting = string1 + '\n\n\n\n\n    ' + string2;
console.log(greeting);

var product = { name: '도서', price: '4200원' };
var message = '\uC81C\uD488 ' + product.name + '\uC758 \uAC00\uACA9\uC740 ' + product.price + '\uC785\uB2C8\uB2E4.';
console.log(message);