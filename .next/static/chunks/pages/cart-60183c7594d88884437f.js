(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},3398:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},2775:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(3244))&&o.__esModule?o:{default:o},c=r(3398),u=r(1165),l=r(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var d=a.props[l],p=n[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),n[l]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var y=function(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)};t.default=y},3244:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),i=(r(1506),r(2205)),s=r(8585),c=r(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var l=r(7294),d=function(e){i(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=d},1633:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(5893),a=r(18),o=r(6156),i=r(7757),s=r.n(i),c=r(2137),u=r(9008),l=r(7294),d=r(2974),p=r(1664),f=r(2013),h=function(e){var t=e.item,r=e.dispatch,a=e.cart;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{style:{width:"100px",overflow:"hidden"},children:(0,n.jsx)("img",{src:t.images[0].url,alt:t.images[0].url,className:"img-thumbnail w-100",style:{minWidth:"80px",height:"80px"}})}),(0,n.jsxs)("td",{style:{minWidth:"200px"},className:"w-50 align-middle",children:[(0,n.jsx)("h5",{className:"text-capitalize text-secondary",children:(0,n.jsx)(p.default,{href:"/product/".concat(t._id),children:(0,n.jsx)("a",{children:t.title})})}),(0,n.jsxs)("h6",{className:"text-success",children:[(0,n.jsx)("i",{class:"fas fa-rupee-sign"})," ",t.quantity*t.price]}),t.inStock>0?(0,n.jsxs)("p",{className:"mb-1 text-danger",children:["Left in Stock: ",t.inStock]}):(0,n.jsx)("p",{className:"mb-1 text-danger",children:"Out Stock"})]}),(0,n.jsxs)("td",{className:"align-middle",style:{minWidth:"150px"},children:[(0,n.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r((0,f.QZ)(a,t._id))},disabled:1===t.quantity,children:" - "}),(0,n.jsx)("span",{className:"px-3",children:t.quantity}),(0,n.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r((0,f.QJ)(a,t._id))},disabled:t.quantity===t.inStock,children:" + "})]}),(0,n.jsx)("td",{className:"align-middle",style:{minWidth:"50px",cursor:"pointer"},children:(0,n.jsx)("i",{className:"far fa-trash-alt text-danger","aria-hidden":"true",style:{fontSize:"18px"},"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return r({type:"ADD_MODAL",payload:[{data:a,id:t._id,title:t.title,type:"ADD_CART"}]})}})})]})},m=r(8828),y=r(1163);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var j=function(){var e=(0,l.useContext)(d.R),t=e.state,r=e.dispatch,o=t.cart,i=t.auth,f=t.orders,v=(0,l.useState)(0),g=v[0],j=v[1],O=(0,l.useState)(""),_=O[0],w=O[1],k=(0,l.useState)(""),S=k[0],C=k[1],M=(0,l.useState)(!1),N=M[0],A=M[1],P=(0,y.useRouter)();(0,l.useEffect)((function(){!function(){var e=o.reduce((function(e,t){return e+t.price*t.quantity}),0);j(e)}()}),[o]),(0,l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("__next__cart01__devat"));if(e&&e.length>0){var t=[];(function(){var n=(0,c.Z)(s().mark((function n(){var a,o,i,c,u,l,d,p,f,h,y;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=x(e),n.prev=1,a.s();case 3:if((o=a.n()).done){n.next=12;break}return i=o.value,n.next=7,(0,m.Yu)("product/".concat(i._id));case 7:c=n.sent,u=c.product,l=u._id,d=u.title,p=u.images,f=u.price,h=u.inStock,y=u.sold,h>0&&t.push({_id:l,title:d,images:p,price:f,inStock:h,sold:y,quantity:i.quantity>h?1:i.quantity});case 10:n.next=3;break;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),a.e(n.t0);case 17:return n.prev=17,a.f(),n.finish(17);case 20:r({type:"ADD_CART",payload:t});case 21:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})));return function(){return n.apply(this,arguments)}})()()}}),[N]);var D=function(){var e=(0,c.Z)(s().mark((function e(){var t,n,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_&&S){e.next=2;break}return e.abrupt("return",r({type:"NOTIFY",payload:{error:"Please add your address and mobile."}}));case 2:t=[],n=x(o),e.prev=4,n.s();case 6:if((c=n.n()).done){e.next=14;break}return u=c.value,e.next=10,(0,m.Yu)("product/".concat(u._id));case 10:e.sent.product.inStock-u.quantity>=0&&t.push(u);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),n.e(e.t0);case 19:return e.prev=19,n.f(),e.finish(19);case 22:if(!(t.length<o.length)){e.next=25;break}return A(!N),e.abrupt("return",r({type:"NOTIFY",payload:{error:"The product is out of stock or the quantity is insufficient."}}));case 25:r({type:"NOTIFY",payload:{loading:!0}}),(0,m.qC)("order",{address:_,mobile:S,cart:o,total:g},i.token).then((function(e){if(e.err)return r({type:"NOTIFY",payload:{error:e.err}});r({type:"ADD_CART",payload:[]});var t=b(b({},e.newOrder),{},{user:i.user});return r({type:"ADD_ORDERS",payload:[].concat((0,a.Z)(f),[t])}),r({type:"NOTIFY",payload:{success:e.msg}}),P.push("/order/".concat(e.newOrder._id))}));case 27:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})));return function(){return e.apply(this,arguments)}}();return 0===o.length?(0,n.jsx)("img",{className:"img-responsive w-100",src:"/empty_cart.jpg",alt:"not empty"}):(0,n.jsxs)("div",{className:"row mx-auto",children:[(0,n.jsx)(u.default,{children:(0,n.jsx)("title",{children:"Cart Page"})}),(0,n.jsxs)("div",{className:"col-md-8 text-secondary table-responsive my-3",children:[(0,n.jsx)("h2",{className:"text-uppercase",children:"Shopping Cart"}),(0,n.jsx)("table",{className:"table my-3",children:(0,n.jsx)("tbody",{children:o.map((function(e){return(0,n.jsx)(h,{item:e,dispatch:r,cart:o},e._id)}))})})]}),(0,n.jsxs)("div",{className:"col-md-4 my-3 text-right text-uppercase text-secondary",children:[(0,n.jsxs)("form",{children:[(0,n.jsx)("h2",{children:"Shipping"}),(0,n.jsx)("label",{htmlFor:"address",children:"Address"}),(0,n.jsx)("input",{type:"text",name:"address",id:"address",className:"form-control mb-2",value:_,onChange:function(e){return w(e.target.value)}}),(0,n.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),(0,n.jsx)("input",{type:"text",name:"mobile",id:"mobile",className:"form-control mb-2",value:S,onChange:function(e){return C(e.target.value)}})]}),(0,n.jsxs)("h3",{children:["Total: ",(0,n.jsxs)("span",{className:"text-success",children:[(0,n.jsx)("i",{class:"fas fa-rupee-sign"})," ",g]})]}),(0,n.jsx)(p.default,{href:i.user?"#!":"/signin",children:(0,n.jsx)("a",{className:"btn btn-dark my-2",onClick:D,children:"Proceed with payment"})})]})]})}},4701:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r(1633)}])},9008:function(e,t,r){e.exports=r(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=4701,e(e.s=t);var t}));var t=e.O();_N_E=t}]);