"use strict";
(() => {
var exports = {};
exports.id = "tns_modules/inspector_modules";
exports.ids = ["tns_modules/inspector_modules"];
exports.modules = {

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/inspector_modules.js")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();