(function() {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 9974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8828);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2974);
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8585);








const DetailProduct = props => {
  const {
    0: product
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.product);
  const {
    0: tab,
    1: setTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__/* .DataContext */ .R);
  const {
    cart
  } = state;

  const isActive = index => {
    if (tab === index) return " active";
    return "";
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "row detail_page",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Detail Product"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "col-md-6",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: product.images[tab].url,
        alt: product.images[tab].url,
        className: "d-block img-thumbnail rounded mt-4 w-100",
        style: {
          height: '350px'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row mx-0",
        style: {
          cursor: 'pointer'
        },
        children: product.images.map((img, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: img.url,
          alt: img.url,
          className: `img-thumbnail rounded ${isActive(index)}`,
          style: {
            height: '80px',
            width: '20%'
          },
          onClick: () => setTab(index)
        }, index))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "col-md-6 mt-3",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: "text-uppercase",
        children: product.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
        className: "text-success",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          class: "fas fa-rupee-sign"
        }), " ", product.price]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row mx-0 d-flex justify-content-between",
        children: [product.inStock > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
          className: "text-info",
          children: ["Left in Stock: ", product.inStock]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
          className: "text-danger",
          children: "Out Stock"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
          className: "text-warning",
          children: ["Bought by: ", product.sold, " Happy Customers"]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-2",
        children: product.description
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-2",
        children: product.content
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "btn btn-dark d-block my-3 px-5",
        onClick: () => dispatch((0,_store_Actions__WEBPACK_IMPORTED_MODULE_4__/* .addToCart */ .Xq)(product, cart)),
        children: "Add to Cart"
      })]
    })]
  });
};

async function getServerSideProps({
  params: {
    id
  }
}) {
  const res = await (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_5__/* .getData */ .Yu)(`product/${id}`); // server side rendering

  return {
    props: {
      product: res.product
    } // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (DetailProduct);

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [974], function() { return __webpack_exec__(9974); });
module.exports = __webpack_exports__;

})();