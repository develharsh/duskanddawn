(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7840:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./store/GlobalState.js + 1 modules
var GlobalState = __webpack_require__(2974);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./components/NavBar.js









function NavBar() {
  const router = (0,router_.useRouter)();
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
  const {
    auth,
    cart
  } = state;

  const isActive = r => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    external_js_cookie_default().remove('refreshtoken', {
      path: 'api/auth/accessToken'
    });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: 'AUTH',
      payload: {}
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        success: 'Logged out!'
      }
    });
    return router.push('/');
  };

  const adminRouter = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/users",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "dropdown-item",
          children: "Users"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/create",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "dropdown-item",
          children: "Products"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/categories",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "dropdown-item",
          children: "Categories"
        })
      })]
    });
  };

  const loggedRouter = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "nav-item dropdown",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdownMenuLink",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: auth.user.avatar,
          alt: auth.user.avatar,
          style: {
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            transform: 'translateY(-3px)',
            marginRight: '3px'
          }
        }), " ", auth.user.name]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdownMenuLink",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/profile",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "dropdown-item",
            children: "Profile"
          })
        }), auth.user.role === 'admin' && adminRouter(), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "dropdown-divider"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "dropdown-item",
          onClick: handleLogout,
          children: "Logout"
        })]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar navbar-expand-lg navbar-dark",
    style: {
      backgroundColor: "#000"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "navbar-brand",
        children: "Dusk and Dawn"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavDropdown",
      "aria-controls": "navbarNavDropdown",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "navbar-toggler-icon"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "collapse navbar-collapse justify-content-end",
      id: "navbarNavDropdown",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navbar-nav p-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/cart",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link" + isActive('/cart'),
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-shopping-cart position-relative",
                "aria-hidden": "true",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "position-absolute",
                  style: {
                    padding: '3px 6px',
                    background: '#ed143dc2',
                    borderRadius: '50%',
                    top: '-10px',
                    right: '-10px',
                    color: 'white',
                    fontSize: '14px'
                  },
                  children: cart.length
                })
              })
            })
          })
        }), Object.keys(auth).length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/signin",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "nav-link" + isActive('/signin'),
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-user",
                "aria-hidden": "true"
              }), " Sign In"]
            })
          })
        }) : loggedRouter()]
      })
    })]
  });
}

/* harmony default export */ var components_NavBar = (NavBar);
;// CONCATENATED MODULE: ./components/Loading.js



const Loading = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "position-fixed w-100 h-100 text-center loading",
    style: {
      background: '#0008',
      color: 'white',
      top: 0,
      left: 0,
      zIndex: 9
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      width: "205",
      height: "250",
      viewBox: "0 0 40 50",
      children: [/*#__PURE__*/jsx_runtime_.jsx("polygon", {
        strokeWidth: "1",
        stroke: "#fff",
        fill: "none",
        points: "20,1 40,40 1,40"
      }), /*#__PURE__*/jsx_runtime_.jsx("text", {
        fill: "#fff",
        x: "5",
        y: "47",
        children: "Loading"
      })]
    })
  });
};

/* harmony default export */ var components_Loading = (Loading);
;// CONCATENATED MODULE: ./components/Toast.js



const Toast = ({
  msg,
  handleShow,
  bgColor
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `toast show position-fixed text-light ${bgColor}`,
    style: {
      top: '5px',
      right: '5px',
      zIndex: 9,
      minWidth: '280px'
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `toast-header ${bgColor} text-light`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        className: "mr-auto text-light",
        children: msg.title
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "ml-2 mb-1 close text-light",
        "data-dismiss": "toast",
        style: {
          outline: 'none'
        },
        onClick: handleShow,
        children: "x"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "toast-body",
      children: msg.msg
    })]
  });
};

/* harmony default export */ var components_Toast = (Toast);
;// CONCATENATED MODULE: ./components/Notify.js








const Notify = () => {
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
  const {
    notify
  } = state;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [notify.loading && /*#__PURE__*/jsx_runtime_.jsx(components_Loading, {}), notify.error && /*#__PURE__*/jsx_runtime_.jsx(components_Toast, {
      msg: {
        msg: notify.error,
        title: "Error"
      },
      handleShow: () => dispatch({
        type: 'NOTIFY',
        payload: {}
      }),
      bgColor: "bg-danger"
    }), notify.success && /*#__PURE__*/jsx_runtime_.jsx(components_Toast, {
      msg: {
        msg: notify.success,
        title: "Success"
      },
      handleShow: () => dispatch({
        type: 'NOTIFY',
        payload: {}
      }),
      bgColor: "bg-success"
    })]
  });
};

/* harmony default export */ var components_Notify = (Notify);
// EXTERNAL MODULE: ./store/Actions.js
var Actions = __webpack_require__(8585);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(8828);
;// CONCATENATED MODULE: ./components/Modal.js








const Modal = () => {
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
  const {
    modal,
    auth
  } = state;
  const router = (0,router_.useRouter)();

  const deleteUser = item => {
    dispatch((0,Actions/* deleteItem */.wz)(item.data, item.id, item.type));
    (0,fetchData/* deleteData */.SR)(`user/${item.id}`, auth.token).then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      return dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
    });
  };

  const deleteCategories = item => {
    (0,fetchData/* deleteData */.SR)(`categories/${item.id}`, auth.token).then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch((0,Actions/* deleteItem */.wz)(item.data, item.id, item.type));
      return dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
    });
  };

  const deleteProduct = item => {
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    (0,fetchData/* deleteData */.SR)(`product/${item.id}`, auth.token).then(res => {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
      return router.push('/');
    });
  };

  const handleSubmit = () => {
    if (modal.length !== 0) {
      for (const item of modal) {
        if (item.type === 'ADD_CART') {
          dispatch((0,Actions/* deleteItem */.wz)(item.data, item.id, item.type));
        }

        if (item.type === 'ADD_USERS') deleteUser(item);
        if (item.type === 'ADD_CATEGORIES') deleteCategories(item);
        if (item.type === 'DELETE_PRODUCT') deleteProduct(item);
        dispatch({
          type: 'ADD_MODAL',
          payload: []
        });
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "modal fade",
    id: "exampleModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "modal-dialog",
      role: "document",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-header",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
            className: "modal-title text-capitalize",
            id: "exampleModalLabel",
            children: modal.length !== 0 && modal[0].title
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "close",
            "data-dismiss": "modal",
            "aria-label": "Close",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              "aria-hidden": "true",
              children: "\xD7"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "modal-body",
          children: "Do you want to delete this item?"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-footer",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal",
            onClick: handleSubmit,
            children: "Yes"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-primary",
            "data-dismiss": "modal",
            children: "Cancel"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var components_Modal = (Modal);
;// CONCATENATED MODULE: ./components/Layout.js







function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "con",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_NavBar, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Notify, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Modal, {}), children]
  });
}

/* harmony default export */ var components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(GlobalState/* DataProvider */.F, {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,974], function() { return __webpack_exec__(7840); });
module.exports = __webpack_exports__;

})();