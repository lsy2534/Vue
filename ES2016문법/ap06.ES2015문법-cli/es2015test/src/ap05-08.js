const func1 = function (a, b) {
    return a + b;
};

console.log(func1(3, 4)); // 7

const func2 = (a, b) => {
    return a + b;
};

//console.log(func2(3, 4));

const func3 = (a, b) => {
    return a + b;
};
console.log(func3(3, 4));

const func4 = (a, b) => a + b;
console.log(finc4(3, 4));

const addNumber2 = (num) => (value) => num + value;
const resilt2 = addNumber1(2)(4); //
