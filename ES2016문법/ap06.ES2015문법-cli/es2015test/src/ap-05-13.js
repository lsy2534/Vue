const cities = ['서울', '부산', '제주'];
const x = cities[0];
const y = cities[1];
const z = cities[2];

console.log(cities[0], cities[1], cities[2]);
console.log(x, y, z);
console.log(...cities);

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];

console.log(east.concat(west));

const countries = [...east, ...west];

const car1 = {
    type: 't1',
    color: 'S1',
    model: 2017
};

const car2 = {
    type: 't2',
    color: 'S2',
    model: 2019
};

const { type } = car1;
console.log(type);

const func = function ({ type }) {
    console.log(type);
};
func({ ...car1, ...car2 });
