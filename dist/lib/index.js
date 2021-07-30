"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFunction = void 0;
var testFunction = function () {
    var count = 0;
    setInterval(function () {
        console.log(count++);
    }, 1000);
};
exports.testFunction = testFunction;
exports.testFunction();
//# sourceMappingURL=index.js.map