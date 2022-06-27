'use strict';

var msg = 'global scope';

if (true) {
    var _msg = 'block scope';
}

var outer = function outer(params) {
    var msg = 'function scope at outer';

    if (true) {
        var _msg2 = 'block scope at outer';
    }
};

var pizza = true;
pizza = false;