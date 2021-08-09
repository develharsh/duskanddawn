(function() {
var exports = {};
exports.id = 957;
exports.ids = [957];
exports.modules = {

/***/ 7831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7141);



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "HarshApp");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findOne */ .Z.findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ __webpack_exports__["Z"] = (auth);

/***/ }),

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

/***/ 3826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9520);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createCategory(req, res);
      break;

    case "GET":
      await getCategories(req, res);
      break;
  }
});

const createCategory = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: "Authentication is not valid."
    });
    const {
      name
    } = req.body;
    if (!name) return res.status(400).json({
      err: "Name can not be left blank."
    });
    const newCategory = new _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z({
      name
    });
    await newCategory.save();
    res.json({
      msg: 'Success! Created a new category.',
      newCategory
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await _models_categoriesModel__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find();
    res.json({
      categories
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [81], function() { return __webpack_exec__(3826); });
module.exports = __webpack_exports__;

})();