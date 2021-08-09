(function() {
var exports = {};
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 2802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7141);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_generateToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9080);




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({
      err: 'Please login now!'
    });
    const result = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(rf_token, "Harshrefresh");
    if (!result) return res.status(400).json({
      err: 'Your token is incorrect or has expired.'
    });
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findById */ .Z.findById(result.id);
    if (!user) return res.status(400).json({
      err: 'User does not exist.'
    });
    const access_token = (0,_utils_generateToken__WEBPACK_IMPORTED_MODULE_3__/* .createAccessToken */ ._)({
      id: user._id
    });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root
      }
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
});

/***/ }),

/***/ 9080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ createAccessToken; },
/* harmony export */   "n": function() { return /* binding */ createRefreshToken; }
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const createAccessToken = payload => {
  console.log("HarshApp");
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, "HarshApp", {
    expiresIn: '15m'
  });
};
const createRefreshToken = payload => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, "Harshrefresh", {
    expiresIn: '7d'
  });
};

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [81], function() { return __webpack_exec__(2802); });
module.exports = __webpack_exports__;

})();