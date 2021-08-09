(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5829:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./store/GlobalState.js + 1 modules
var GlobalState = __webpack_require__(2974);
// EXTERNAL MODULE: ./utils/fetchData.js
var fetchData = __webpack_require__(8828);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./store/Actions.js
var Actions = __webpack_require__(8585);
;// CONCATENATED MODULE: ./components/product/ProductItem.js








const ProductItem = ({
  product,
  handleCheck
}) => {
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
  const {
    cart,
    auth
  } = state;

  const userLink = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `product/${product._id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "btn",
          style: {
            backgroundColor: "#8A2BE2",
            color: "#fff",
            marginRight: '5px',
            flex: 1
          },
          children: "View"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-success",
        style: {
          backgroundColor: "#008B8B",
          color: "#fff",
          marginLeft: '5px',
          flex: 1
        },
        disabled: product.inStock === 0 ? true : false,
        onClick: () => dispatch((0,Actions/* addToCart */.Xq)(product, cart)),
        children: "Add to Cart"
      })]
    });
  };

  const adminLink = () => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `create/${product._id}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "btn btn-info",
          style: {
            marginRight: '5px',
            flex: 1
          },
          children: "Edit"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-danger",
        style: {
          marginLeft: '5px',
          flex: 1
        },
        "data-toggle": "modal",
        "data-target": "#exampleModal",
        onClick: () => dispatch({
          type: 'ADD_MODAL',
          payload: [{
            data: '',
            id: product._id,
            title: product.title,
            type: 'DELETE_PRODUCT'
          }]
        }),
        children: "Delete"
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "card",
    style: {
      width: '18rem'
    },
    children: [auth.user && auth.user.role === 'admin' && /*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "checkbox",
      checked: product.checked,
      className: "position-absolute",
      style: {
        height: '20px',
        width: '20px'
      },
      onChange: () => handleCheck(product._id)
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "card-img-top",
      src: product.images[0].url,
      alt: product.images[0].url
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "card-body",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
        className: "card-title text-capitalize",
        title: product.title,
        children: product.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-between mx-0",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          className: "text-success",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            class: "fas fa-rupee-sign"
          }), " ", product.price]
        }), product.inStock > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          className: "text-danger",
          children: ["Left in Stock: ", product.inStock]
        }) : /*#__PURE__*/jsx_runtime_.jsx("h6", {
          className: "text-danger",
          children: "Out Stock"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "card-text",
        title: product.description,
        children: product.description
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-between mx-0",
        children: !auth.user || auth.user.role !== "admin" ? userLink() : adminLink()
      })]
    })]
  });
};

/* harmony default export */ var product_ProductItem = (ProductItem);
;// CONCATENATED MODULE: ./utils/filterSearch.js
const filterSearch = ({
  router,
  page,
  category,
  sort,
  search
}) => {
  const path = router.pathname;
  const query = router.query;
  if (category) query.category = category;
  if (page) query.page = page;
  if (search) query.search = search;
  if (sort) query.sort = sort;
  router.push({
    pathname: path,
    query: query
  });
};

/* harmony default export */ var utils_filterSearch = (filterSearch);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Filter.js







const Filter = ({
  state
}) => {
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)('');
  const {
    0: sort,
    1: setSort
  } = (0,external_react_.useState)('');
  const {
    0: category,
    1: setCategory
  } = (0,external_react_.useState)('');
  const {
    categories
  } = state;
  const router = (0,router_.useRouter)();

  const handleCategory = e => {
    setCategory(e.target.value);
    utils_filterSearch({
      router,
      category: e.target.value
    });
  };

  const handleSort = e => {
    setSort(e.target.value);
    utils_filterSearch({
      router,
      sort: e.target.value
    });
  };

  (0,external_react_.useEffect)(() => {
    utils_filterSearch({
      router,
      search: search ? search.toLowerCase() : 'all'
    });
  }, [search]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "input-group",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "input-group-prepend col-md-2 px-0 mt-2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
        className: "custom-select text-capitalize",
        value: category,
        onChange: handleCategory,
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "all",
          children: "All Products"
        }), categories.map(item => /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: item._id,
          children: item.name
        }, item._id))]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      autoComplete: "off",
      className: "mt-2 col-md-8 px-0",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        className: "form-control",
        list: "title_product",
        value: search.toLowerCase(),
        onChange: e => setSearch(e.target.value)
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "input-group-prepend col-md-2 px-0 mt-2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
        className: "custom-select text-capitalize",
        value: sort,
        onChange: handleSort,
        children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "-createdAt",
          children: "Newest"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "oldest",
          children: "Oldest"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "-sold",
          children: "Best sales"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "-price",
          children: "Price: Hight-Low"
        }), /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: "price",
          children: "Price: Low-Hight"
        })]
      })
    })]
  });
};

/* harmony default export */ var components_Filter = (Filter);
;// CONCATENATED MODULE: ./pages/index.js











const Home = props => {
  const {
    0: products,
    1: setProducts
  } = (0,external_react_.useState)(props.products);
  const {
    0: isCheck,
    1: setIsCheck
  } = (0,external_react_.useState)(false);
  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1);
  const router = (0,router_.useRouter)();
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(GlobalState/* DataContext */.R);
  const {
    auth
  } = state;
  (0,external_react_.useEffect)(() => {
    setProducts(props.products);
  }, [props.products]);
  (0,external_react_.useEffect)(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  const handleCheck = id => {
    products.forEach(product => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const handleCheckALL = () => {
    products.forEach(product => product.checked = !isCheck);
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach(product => {
      if (product.checked) {
        deleteArr.push({
          data: '',
          id: product._id,
          title: 'Delete all selected products?',
          type: 'DELETE_PRODUCT'
        });
      }
    });
    dispatch({
      type: 'ADD_MODAL',
      payload: deleteArr
    });
  };

  const handleLoadmore = () => {
    setPage(page + 1);
    utils_filterSearch({
      router,
      page: page + 1
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "home_page",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Home Page"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Filter, {
      state: state
    }), auth.user && auth.user.role === 'admin' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "delete_all btn btn-danger mt-2",
      style: {
        marginBottom: '-10px'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "checkbox",
        checked: isCheck,
        onChange: handleCheckALL,
        style: {
          width: '25px',
          height: '25px',
          transform: 'translateY(8px)'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-danger ml-2",
        "data-toggle": "modal",
        "data-target": "#exampleModal",
        onClick: handleDeleteAll,
        children: "DELETE ALL"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "products",
      children: products.length === 0 ? /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "No Products"
      }) : products.map(product => /*#__PURE__*/jsx_runtime_.jsx(product_ProductItem, {
        product: product,
        handleCheck: handleCheck
      }, product._id))
    }), props.result < page * 6 ? "" : /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "btn btn-outline-info d-block mx-auto mb-4",
      onClick: handleLoadmore,
      children: "Load more"
    })]
  });
};

async function getServerSideProps({
  query
}) {
  const page = query.page || 1;
  const category = query.category || 'all';
  const sort = query.sort || '';
  const search = query.search || 'all';
  const res = await (0,fetchData/* getData */.Yu)(`product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`); // server side rendering

  return {
    props: {
      products: res.products,
      result: res.result
    } // will be passed to the page component as props

  };
}
/* harmony default export */ var pages = (Home);

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,974], function() { return __webpack_exec__(5829); });
module.exports = __webpack_exports__;

})();