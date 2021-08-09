(function() {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 1985:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7141);
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5001);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6552);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
});

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      cf_password
    } = req.body;
    const errMsg = (0,_utils_valid__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({
      err: errMsg
    });
    const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findOne */ .Z.findOne({
      email
    });
    if (user) return res.status(400).json({
      err: 'This email already exists.'
    });
    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 12);
    const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z({
      name,
      email,
      password: passwordHash,
      cf_password
    });
    await newUser.save();
    res.json({
      msg: "Register Success!"
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ 5001:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) return 'Please add all fields.';
  if (!validateEmail(email)) return 'Invalid emails.';
  if (password.length < 6) return 'Password must be at least 6 characters.';
  if (password !== cf_password) return 'Confirm password did not match.';
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/* harmony default export */ __webpack_exports__["Z"] = (valid);

/***/ }),

/***/ 6552:
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

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
var __webpack_exports__ = __webpack_require__.X(0, [81], function() { return __webpack_exec__(1985); });
module.exports = __webpack_exports__;

})();