(function() {
var exports = {};
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 9520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CategoriesSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.categories) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('categories', CategoriesSchema);
/* harmony default export */ __webpack_exports__["Z"] = (Dataset);

/***/ }),

/***/ 2092:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9520);
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1479);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "PUT":
      await updateCategory(req, res);
      break;

    case "DELETE":
      await deleteCategory(req, res);
      break;
  }
});

const updateCategory = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: "Authentication is not valid."
    });
    const {
      id
    } = req.query;
    const {
      name
    } = req.body;
    const newCategory = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findOneAndUpdate */ .Z.findOneAndUpdate({
      _id: id
    }, {
      name
    });
    res.json({
      msg: "Success! Update a new category",
      category: _objectSpread(_objectSpread({}, newCategory._doc), {}, {
        name
      })
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: "Authentication is not valid."
    });
    const {
      id
    } = req.query;
    const products = await _models_productModel__WEBPACK_IMPORTED_MODULE_2__/* .default.findOne */ .Z.findOne({
      category: id
    });
    if (products) return res.status(400).json({
      err: "Please delete all products with a relationship"
    });
    await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findByIdAndDelete */ .Z.findByIdAndDelete(id);
    res.json({
      msg: "Success! Deleted a category"
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
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
var __webpack_exports__ = __webpack_require__.X(0, [81,914], function() { return __webpack_exec__(2092); });
module.exports = __webpack_exports__;

})();