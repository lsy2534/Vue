const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];

//const [x2, y2, z2] = points;
const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2);

const [x3, ...y3] = [20, 30, 40, 50, 60, 70, 80, 90];

const func1 = ( {type, color}) =>{
    console.log(type);
    console.log(color);
}

func1( car );

const func2 = function (car){
  console.log(car.type);
  con
}