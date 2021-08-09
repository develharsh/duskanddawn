(function() {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 1967:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
    ref: 'user'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  paymentId: String,
  method: String,
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  dateOfPayment: Date
}, {
  timestamps: true
});
let Dataset = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('order', orderSchema);
/* harmony default export */ __webpack_exports__["Z"] = (Dataset);

/***/ }),

/***/ 5941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1265);
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1967);
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1479);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);




(0,_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;

    case "GET":
      await getOrders(req, res);
      break;
  }
});

const getOrders = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(req, res);
    let orders;

    if (result.role !== 'admin') {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find({
        user: result.id
      }).populate("user", "-password");
    } else {
      orders = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find().populate("user", "-password");
    }

    res.json({
      orders
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const result = await (0,_middleware_auth__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(req, res);
    const {
      address,
      mobile,
      cart,
      total
    } = req.body;
    const newOrder = new _models_orderModel__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z({
      user: result.id,
      address,
      mobile,
      cart,
      total
    });
    cart.filter(item => {
      return sold(item._id, item.quantity, item.inStock, item.sold);
    });
    await newOrder.save();
    res.json({
      msg: 'Order success! We will contact you to confirm the order.',
      newOrder
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const sold = async (id, quantity, oldInStock, oldSold) => {
  await _models_productModel__WEBPACK_IMPORTED_MODULE_2__/* .default.findOneAndUpdate */ .Z.findOneAndUpdate({
    _id: id
  }, {
    inStock: oldInStock - quantity,
    sold: quantity + oldSold
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [81,914], function() { return __webpack_exec__(5941); });
module.exports = __webpack_exports__;

})();