(function() {
var exports = {};
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 4851:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1479);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);



(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;

    case "PUT":
      await updateProduct(req, res);
      break;

    case "DELETE":
      await deleteProduct(req, res);
      break;
  }
});

const getProduct = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findById */ .Z.findById(id);
    if (!product) return res.status(400).json({
      err: 'This product does not exist.'
    });
    res.json({
      product
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      id
    } = req.query;
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({
      err: 'Please add all the fields.'
    });
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findOneAndUpdate */ .Z.findOneAndUpdate({
      _id: id
    }, {
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    res.json({
      msg: 'Success! Updated a product'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      id
    } = req.query;
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__/* .default.findByIdAndDelete */ .Z.findByIdAndDelete(id);
    res.json({
      msg: 'Deleted a product.'
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
var __webpack_exports__ = __webpack_require__.X(0, [81,914], function() { return __webpack_exec__(4851); });
module.exports = __webpack_exports__;

})();