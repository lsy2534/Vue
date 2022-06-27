"use strict";

var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];

//const [x2, y2, z2] = points;
var x2 = 20,
    y2 = 30,
    z2 = 40;

console.log(x2, y2, z2);

var x3 = 20,
    y3 = [30, 40, 50, 60, 70, 80, 90];


var func1 = function func1(_ref) {
  var type = _ref.type,
      color = _ref.color;

  console.log(type);
  console.log(color);
};

func1(car);

var func2 = function func2(car) {
  console.log(car.type);
  con;
};