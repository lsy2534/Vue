'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _console;

var cities = ['서울', '부산', '제주'];
var x = cities[0];
var y = cities[1];
var z = cities[2];

console.log(cities[0], cities[1], cities[2]);
console.log(x, y, z);
(_console = console).log.apply(_console, cities);

var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G'];

console.log(east.concat(west));

var countries = [].concat(east, west);

var car1 = {
    type: 't1',
    color: 'S1',
    model: 2017
};

var car2 = {
    type: 't2',
    color: 'S2',
    model: 2019
};

var type = car1.type;

console.log(type);

var func = function func(_ref) {
    var type = _ref.type;
    console.log(type);
};
func(_extends({}, car1, car2));