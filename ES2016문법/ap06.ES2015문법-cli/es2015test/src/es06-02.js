let msg = 'global scope';

if (true) {
    let msg = 'block scope';
}

const outer = function (params) {
    let msg = 'function scope at outer';

    if (true) {
        let msg = 'block scope at outer';
    }
};

let pizza = true;
pizza = false;
