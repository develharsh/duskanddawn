(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),u=n(1165),d=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var d=h[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=y},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},9974:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return c}});var r=n(5893),a=n(9008),o=n(7294),i=n(2974),s=n(2013),c=!0;t.default=function(e){var t=(0,o.useState)(e.product)[0],n=(0,o.useState)(0),c=n[0],u=n[1],d=(0,o.useContext)(i.R),l=d.state,f=d.dispatch,p=l.cart,h=function(e){return c===e?" active":""};return(0,r.jsxs)("div",{className:"row detail_page",children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Detail Product"})}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("img",{src:t.images[c].url,alt:t.images[c].url,className:"d-block img-thumbnail rounded mt-4 w-100",style:{height:"350px"}}),(0,r.jsx)("div",{className:"row mx-0",style:{cursor:"pointer"},children:t.images.map((function(e,t){return(0,r.jsx)("img",{src:e.url,alt:e.url,className:"img-thumbnail rounded ".concat(h(t)),style:{height:"80px",width:"20%"},onClick:function(){return u(t)}},t)}))})]}),(0,r.jsxs)("div",{className:"col-md-6 mt-3",children:[(0,r.jsx)("h2",{className:"text-uppercase",children:t.title}),(0,r.jsxs)("h5",{className:"text-success",children:[(0,r.jsx)("i",{class:"fas fa-rupee-sign"})," ",t.price]}),(0,r.jsxs)("div",{className:"row mx-0 d-flex justify-content-between",children:[t.inStock>0?(0,r.jsxs)("h6",{className:"text-info",children:["Left in Stock: ",t.inStock]}):(0,r.jsx)("h6",{className:"text-danger",children:"Out Stock"}),(0,r.jsxs)("h6",{className:"text-warning",children:["Bought by: ",t.sold," Happy Customers"]})]}),(0,r.jsx)("div",{className:"my-2",children:t.description}),(0,r.jsx)("div",{className:"my-2",children:t.content}),(0,r.jsx)("button",{type:"button",className:"btn btn-dark d-block my-3 px-5",onClick:function(){return f((0,s.Xq)(t,p))},children:"Add to Cart"})]})]})}},2379:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return n(9974)}])},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=2379,e(e.s=t);var t}));var t=e.O();_N_E=t}]);