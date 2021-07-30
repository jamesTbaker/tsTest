"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testFunction = function () {
    var count = 0;
    setInterval(function () {
        console.log(count++);
    }, 1000);
};
var FunctionLib = { testFunction: testFunction };
exports.default = FunctionLib;
//# sourceMappingURL=function.js.map