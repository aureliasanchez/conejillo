/*! For license information please see 7316.047200c2.chunk.js.LICENSE.txt */
(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7316],{5911:function(e,t,n){"use strict";var r=n(9456),o=n(3024),i=(n(3844),n(579));t.A=function(e){var t=e.iconWhiteClass;(0,r.d4)((function(e){return e.compare})).compareItems,(0,r.d4)((function(e){return e.wishlist})).wishlistItems,(0,r.d4)((function(e){return e.cart})).cartItems;return(0,i.jsx)("div",{className:(0,o.A)("header-right-wrap",t),children:(0,i.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,i.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,i.jsx)("i",{className:"pe-7s-menu"})})})})}},3188:function(e,t,n){"use strict";var r=n(3024),o=n(5475),i=n(579);t.A=function(e){var t=e.imageUrl,n=e.logoClass;return(0,i.jsx)("div",{className:(0,r.A)(n),children:(0,i.jsx)(o.N_,{to:"/conejillo/",children:(0,i.jsx)("img",{alt:"",src:"/conejillo"+t})})})}},3032:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(5043),o=(n(3844),n(5475)),i=n(4117),a=n(579),l=function(){var e=(0,i.Bd)().t;return(0,a.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(o.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(o.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,a.jsx)("li",{children:(0,a.jsx)(o.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},s=n(9456),c=(n(1682),function(){(0,i.Bd)().i18n,(0,s.wA)(),(0,s.d4)((function(e){return e.currency}))}),u=function(){return(0,a.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,a.jsx)("div",{className:"off-canvas-contact-widget"}),(0,a.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,a.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx",title:"Facebook",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/conejillodecampo_pachuca/",title:"Instagram",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})]})]})},d=function(){(0,r.useEffect)((function(){for(var n=document.querySelector("#offcanvas-navigation"),r=n.querySelectorAll(".sub-menu"),o=n.querySelectorAll("a"),i=0;i<r.length;i++)r[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var a=n.querySelectorAll(".menu-expand"),l=a.length,s=0;s<l;s++)a[s].addEventListener("click",(function(t){e(t)}));for(var c=0;c<o.length;c++)o[c].addEventListener("click",(function(){t()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},t=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,a.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,a.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return t()},children:(0,a.jsx)("i",{className:"pe-7s-close"})}),(0,a.jsx)("div",{className:"offcanvas-wrapper",children:(0,a.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,a.jsx)(l,{}),(0,a.jsx)(c,{}),(0,a.jsx)(u,{})]})})]})}},3189:function(e,t,n){"use strict";var r=n(5475),o=n(4117),i=n(3024),a=n(579);t.A=function(e){var t=e.menuWhiteClass,n=e.sidebarMenu,l=(0,o.Bd)().t;return(0,a.jsx)("div",{className:(0,i.A)(n?"sidebar-menu":"main-menu ".concat(t||"")),children:(0,a.jsx)("div",{className:"logo-container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/",children:l("Inicio")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:l("Cat\xe1logo")})}),(0,a.jsx)(r.N_,{to:"/conejillo/",children:(0,a.jsx)("img",{src:"/conejillo/assets/img/logo/logo.png",alt:"Logo"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/contact",children:l("Contacto")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/blog-details-standard",children:l("Blog")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/cart",children:l("Carritoxd")})})]})})})})}},3468:function(e,t,n){"use strict";var r=n(9456),o=n(4117),i=n(1682),a=n(579);t.A=function(e){var t=e.currency,n=(0,o.Bd)().i18n,l=(0,r.wA)(),s=function(e){var t=e.target.value;n.changeLanguage(t)},c=function(e){var t=e.target.value;l((0,i.M)(t))};return(0,a.jsxs)("div",{className:"language-currency-wrap",children:[(0,a.jsxs)("div",{className:"same-language-currency language-style",children:[(0,a.jsxs)("span",{children:["en"===n.resolvedLanguage?"Espanol":"fn"===n.resolvedLanguage?"French":"de"===n.resolvedLanguage?"Germany":""," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"en",onClick:function(e){return s(e)},children:"English"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"fn",onClick:function(e){return s(e)},children:"French"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"de",onClick:function(e){return s(e)},children:"Germany"})})]})})]}),(0,a.jsxs)("div",{className:"same-language-currency use-style",children:[(0,a.jsxs)("span",{children:[t.currencyName," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"USD",onClick:function(e){return c(e)},children:"USD"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"EUR",onClick:function(e){return c(e)},children:"EUR"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"GBP",onClick:function(e){return c(e)},children:"GBP"})})]})})]}),(0,a.jsx)("div",{className:"same-language-currency",children:(0,a.jsx)("p",{children:"Call Us 3965410"})})]})}},3844:function(e,t,n){"use strict";n(5043),n(9456),n(5721),n(579)},2168:function(e,t,n){"use strict";var r=n(9490),o=n(579),i=function(e){var t=e.title,n=e.titleTemplate,i=e.description;return(0,o.jsx)(r.vd,{children:(0,o.jsxs)(r.mg,{children:[(0,o.jsx)("meta",{charSet:"utf-8"}),(0,o.jsxs)("title",{children:[t," | ",n]}),(0,o.jsx)("meta",{name:"description",content:i})]})})};i.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},t.A=i},7316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(9379),o=n(5043),i=n(5475),a=n(2168),l=JSON.parse('[{"id":"1","title":"2020 Fashion For Womens","subtitle":"-20% Spring <br /> Snickers","image":"/assets/img/slider/hm-11-2.png","url":"/shop-grid-standard"},{"id":"2","title":"2020 Fashion For Womens","subtitle":"-30% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-2.png","url":"/shop-grid-standard"},{"id":"3","title":"2020 Fashion For Womens","subtitle":"-40% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-7.png","url":"/shop-grid-standard"}]'),s=n(9652),c=n(7766),u=n(579),d=function(){var e=[];l.forEach((function(t){e.push(t.id)}));var t={activeClass:"active",anchors:e,arrowNavigation:!1,className:"SectionsContainer",delay:1e3,navigation:!0,scrollBar:!1,sectionClassName:"Section",sectionPaddingTop:"0",sectionPaddingBottom:"0",verticalAlign:!0};return(0,u.jsxs)(o.Fragment,{children:[(0,u.jsx)(a.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,u.jsxs)("div",{className:"fullpage-slider-wrapper",children:[(0,u.jsx)(s.Header,{children:(0,u.jsx)(c.A,{layout:"container-fluid",headerPaddingClass:"header-padding-1",headerBgClass:"bg-white"})}),(0,u.jsx)(s.SectionsContainer,(0,r.A)((0,r.A)({},t),{},{className:"bg-purple-2",children:l&&l.map((function(e,t){return(0,u.jsx)(s.Section,{children:(0,u.jsx)("div",{className:"slider-section flone-fp-section",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row fullpage-slider-wrap-mrg",children:[(0,u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center",children:(0,u.jsxs)("div",{className:"slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content",children:[(0,u.jsx)("h3",{className:"animated",children:e.title}),(0,u.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:e.subtitle}}),(0,u.jsx)("div",{className:"slider-btn-11 btn-hover",children:(0,u.jsx)(i.N_,{className:"animated",to:"/conejillo"+e.url,children:"SHOP NOW"})})]})}),(0,u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12",children:(0,u.jsx)("div",{className:"slider12-img-1 slider-animated-1",children:(0,u.jsx)("img",{className:"animated",alt:"",src:"/conejillo"+e.image})})})]})})})},t)}))}))]})]})}},7766:function(e,t,n){"use strict";n.d(t,{A:function(){return v}});var r=n(5544),o=n(5043),i=n(3024),a=(n(3188),n(3189)),l=n(5911),s=n(3032),c=n(5173),u=n.n(c),d=n(9456),f=(n(3468),function(e){e.borderStyle,(0,d.d4)((function(e){return e.currency}))});f.propTypes={borderStyle:u().string};var h=f,p=n(579),v=function(e){var t=e.layout,n=e.top,c=e.borderStyle,u=e.headerPaddingClass,d=e.headerPositionClass,f=e.headerBgClass,v=(0,o.useState)(0),m=(0,r.A)(v,2),g=m[0],y=m[1],b=(0,o.useState)(0),w=(0,r.A)(b,2),j=w[0],x=w[1];(0,o.useEffect)((function(){var e=document.querySelector(".sticky-bar");return x(e.offsetTop),window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}}),[]);var S=function(){y(window.scrollY)};return(0,p.jsxs)("header",{className:(0,i.A)("header-area clearfix",f,d),children:[(0,p.jsx)("div",{className:(0,i.A)("header-top-area",u,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===c&&"border-none"),children:(0,p.jsx)("div",{className:"container-fluid"===t?t:"container",children:(0,p.jsx)(h,{borderStyle:c})})}),(0,p.jsxs)("div",{className:(0,i.A)(u,"sticky-bar header-res-padding clearfix",g>j&&"stick"),children:[(0,p.jsx)("div",{className:"container-fluid"===t?t:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,p.jsx)(a.A,{})}),(0,p.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,p.jsx)(l.A,{})})]})}),(0,p.jsx)(s.A,{})]})]})}},9534:function(e){"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},8313:function(e){"use strict";e.exports={}},6415:function(e){"use strict";e.exports=function(e,t,n,r,o,i,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},2123:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(l[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(l[a[u]]=i[a[u]])}}return l}},1898:function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8395),a=(r=i)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return a.default.createElement("footer",{style:{position:"fixed",width:"100%",zIndex:"1",bottom:"0"}},this.props.children)}}]),t}(i.Component);t.A=l},2260:function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8395),a=(r=i)&&r.__esModule?r:{default:r};var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return a.default.createElement("header",{style:{position:"fixed",width:"100%",zIndex:"1",top:"0"}},this.props.children)}}]),t}(i.Component);t.A=l},8102:function(e,t,n){"use strict";var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8395);(r=i)&&r.__esModule;var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(i.Component);t.A=a},5634:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8395),i=l(o),a=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.state={windowHeight:0},r.renderVerticalAlign=function(){return i.default.createElement("div",{style:{display:"table-cell",verticalAlign:"middle",width:"100%"}},r.props.children)},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"handleResize",value:function(){this.setState({windowHeight:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=this;this.handleResize(),window.addEventListener("resize",(function(){return e.handleResize()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){return e.handleResize()}))}},{key:"render",value:function(){var e=this.props.verticalAlign||this.context.verticalAlign,t={width:"100%",display:e?"table":"block",height:this.state.windowHeight,maxHeight:this.state.windowHeight,overflow:"auto",backgroundColor:this.props.color,paddingTop:this.context.sectionPaddingTop,paddingBottom:this.context.sectionPaddingBottom};return i.default.createElement("div",{className:this.context.sectionClassName+(this.props.className?" "+this.props.className:""),id:this.props.id,style:t},e?this.renderVerticalAlign():this.props.children)}}]),t}(o.Component);c.propTypes={color:a.default.string},c.contextTypes={verticalAlign:a.default.bool,sectionClassName:a.default.string,sectionPaddingTop:a.default.string,sectionPaddingBottom:a.default.string},t.A=c},2918:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(8395),i=l(o),a=l(n(5173));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var c=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={activeSection:r.props.activeSection,scrollingStarted:!1,sectionScrolledPosition:0,windowHeight:0},r.removeDefaultEventListeners=function(){window.removeEventListener("resize",r.handleResize),window.removeEventListener("hashchange",r.handleAnchor),r.props.arrowNavigation&&window.removeEventListener("keydown",r.handleArrowKeys)},r.addCSS3Scroll=function(){r.addOverflowToBody(),r.addMouseWheelEventHandlers()},r.addActiveClass=function(){r.removeActiveClass();for(var e=window.location.hash.substring(1),t=document.querySelectorAll('a[href="#'+e+'"]'),n=0;n<t.length;n++)t[n].className=t[n].className+(t[n].className.length>0?" ":"")+r.props.activeClass},r.removeActiveClass=function(){for(var e=document.querySelectorAll('a:not([href="#'+r.props.anchors[r.state.activeSection]+'"])'),t=0;t<e.length;t++)e[t].className=e[t].className.replace(/\b ?active/g,"")},r.addChildrenWithAnchorId=function(){var e=0;return o.Children.map(r.props.children,(function(t){var n=r.props.anchors[e];return e++,n?(0,o.cloneElement)(t,{id:n}):t}))},r.addOverflowToBody=function(){document.querySelector("body").style.overflow="hidden"},r.removeOverflowFromBody=function(){document.querySelector("body").style.overflow="initial"},r.addMouseWheelEventHandlers=function(){window.addEventListener("mousewheel",r.handleMouseWheel,!1),window.addEventListener("DOMMouseScroll",r.handleMouseWheel,!1)},r.removeMouseWheelEventHandlers=function(){window.removeEventListener("mousewheel",r.handleMouseWheel),window.removeEventListener("DOMMouseScroll",r.handleMouseWheel)},r.handleMouseWheel=function(e){var t=window.event||e,n=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail)),o=r.state.activeSection-n;if(r.state.scrollingStarted||o<0||r.childrenLength===o)return!1;r.setAnchor(o),r.handleSectionTransition(o),r.addActiveClass()},r.handleResize=function(){var e=0-r.state.activeSection*window.innerHeight;r.setState({scrollingStarted:!0,windowHeight:window.innerHeight,sectionScrolledPosition:e}),r.resetScroll()},r.handleSectionTransition=function(e){var t=0-e*r.state.windowHeight;if(!r.props.anchors.length||-1===e||e>=r.props.anchors.length)return!1;r.setState({scrollingStarted:!0,activeSection:e,sectionScrolledPosition:t}),r.resetScroll(),r.handleScrollCallback()},r.handleArrowKeys=function(e){var t=window.event?window.event:e,n=38===t.keyCode||37===t.keyCode?r.state.activeSection-1:40===t.keyCode||39===t.keyCode?r.state.activeSection+1:-1;if(r.state.scrollingStarted||n<0||r.childrenLength===n)return!1;r.setAnchor(n),r.handleSectionTransition(n),r.addActiveClass()},r.handleTouchNav=function(){var e=r,t=document.querySelector("."+r.props.className),n=void 0,o=void 0,i=void 0,a=void 0,l=void 0,s=void 0;t.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];n="none",o=t.pageX,i=t.pageY,s=(new Date).getTime()}),!1),t.addEventListener("touchmove",(function(e){e.preventDefault()}),!1),t.addEventListener("touchend",(function(t){var r=t.changedTouches[0];if(a=r.pageX-o,l=r.pageY-i,(new Date).getTime()-s<=1e3&&Math.abs(l)>=50&&Math.abs(a)<=100){var c="down"===(n=l<0?"up":"down")?e.state.activeSection-1:"up"===n?e.state.activeSection+1:-1,u=e.props.anchors[c];e.props.anchors.length&&!u||(window.location.hash="#"+u),e.handleSectionTransition(c)}!function(e){console.log(e)}(n)}),!1)},r.handleAnchor=function(){var e=window.location.hash.substring(1),t=r.props.anchors.indexOf(e);r.state.activeSection!==t&&(r.handleSectionTransition(t),r.addActiveClass())},r.setAnchor=function(e){var t=r.props.anchors[e];r.props.anchors.length&&!t||(window.location.hash="#"+t)},r.handleScrollCallback=function(){r.props.scrollCallback&&setTimeout((function(){return r.props.scrollCallback(r.state)}),0)},r.resetScroll=function(){r.clearResetScrollTimer(),r.resetScrollTimer=setTimeout((function(){r.setState({scrollingStarted:!1})}),r.props.delay+300)},r.clearResetScrollTimer=function(){r.resetScrollTimer&&clearTimeout(r.resetScrollTimer)},r.renderNavigation=function(){var e=r.props.anchors.map((function(e,t){var n={display:"block",margin:"10px",borderRadius:"100%",backgroundColor:"#556270",padding:"5px",transition:"all 0.2s",transform:r.state.activeSection===t?"scale(1.3)":"none"};return i.default.createElement("a",{href:"#"+e,key:t,className:r.props.navigationAnchorClass||"Navigation-Anchor",style:r.props.navigationAnchorClass?null:n})}));return i.default.createElement("div",{className:r.props.navigationClass||"Navigation",style:r.props.navigationClass?null:{position:"fixed",zIndex:"10",right:"20px",top:"50%",transform:"translate(-50%, -50%)"}},e)},s(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getChildContext",value:function(){return{verticalAlign:this.props.verticalAlign,sectionClassName:this.props.sectionClassName,sectionPaddingTop:this.props.sectionPaddingTop,sectionPaddingBottom:this.props.sectionPaddingBottom}}},{key:"componentWillUnmount",value:function(){this.clearResetScrollTimer(),this.removeDefaultEventListeners(),this.removeMouseWheelEventHandlers(),this.removeOverflowFromBody()}},{key:"componentDidMount",value:function(){this.childrenLength=this.props.children.length,this.handleResize(),window.addEventListener("resize",this.handleResize),this.props.scrollBar||(this.addCSS3Scroll(),this.handleAnchor(),window.addEventListener("hashchange",this.handleAnchor,!1),this.props.arrowNavigation&&window.addEventListener("keydown",this.handleArrowKeys),this.props.touchNavigation&&this.handleTouchNav())}},{key:"componentWillReceiveProps",value:function(e){this.props.activeSection!==e.activeSection&&(this.setState({activeSection:e.activeSection}),this.setAnchor(e.activeSection),this.handleSectionTransition(e.activeSection),this.addActiveClass())}},{key:"render",value:function(){var e={height:"100%",width:"100%",position:"relative",transform:"translate3d(0px, "+this.state.sectionScrolledPosition+"px, 0px)",transition:"all "+this.props.delay+"ms ease"};return i.default.createElement("div",null,i.default.createElement("div",{className:this.props.className,style:e},this.props.scrollBar?this.addChildrenWithAnchorId():this.props.children),this.props.navigation&&!this.props.scrollBar?this.renderNavigation():null)}}]),t}(o.Component);c.defaultProps={scrollCallback:null,delay:1e3,verticalAlign:!1,scrollBar:!1,navigation:!0,className:"SectionContainer",sectionClassName:"Section",anchors:[],activeClass:"active",sectionPaddingTop:"0",sectionPaddingBottom:"0",arrowNavigation:!0,activeSection:0,touchNavigation:!0},c.propTypes={scrollCallback:a.default.func,delay:a.default.number,verticalAlign:a.default.bool,scrollBar:a.default.bool,navigation:a.default.bool,className:a.default.string,sectionClassName:a.default.string,navigationClass:a.default.string,navigationAnchorClass:a.default.string,activeClass:a.default.string,sectionPaddingTop:a.default.string,sectionPaddingBottom:a.default.string,arrowNavigation:a.default.bool,activeSection:a.default.number,touchNavigation:a.default.bool},c.childContextTypes={verticalAlign:a.default.bool,sectionClassName:a.default.string,sectionPaddingTop:a.default.string,sectionPaddingBottom:a.default.string},t.A=c},9652:function(e,t,n){e.exports={SectionsContainer:n(2918).A,Section:n(5634).A,ScrollToTopOnMount:n(8102).A,Header:n(2260).A,Footer:n(1898).A}},1986:function(e,t,n){"use strict";var r=n(2123),o=n(6415),i=n(8313),a=n(9534),l="function"===typeof Symbol&&Symbol.for,s=l?Symbol.for("react.element"):60103,c=l?Symbol.for("react.portal"):60106,u=l?Symbol.for("react.fragment"):60107,d=l?Symbol.for("react.strict_mode"):60108,f=l?Symbol.for("react.profiler"):60114,h=l?Symbol.for("react.provider"):60109,p=l?Symbol.for("react.context"):60110,v=l?Symbol.for("react.async_mode"):60111,m=l?Symbol.for("react.forward_ref"):60112;l&&Symbol.for("react.timeout");var g="function"===typeof Symbol&&Symbol.iterator;function y(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function w(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&y("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=w.prototype;var S=x.prototype=new j;S.constructor=x,r(S,w.prototype),S.isPureReactComponent=!0;var N={current:null},C=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r=void 0,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:s,type:e,key:i,ref:a,props:o,_owner:N.current}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g,E=[];function P(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case s:case c:i=!0}}if(i)return n(r,e,""===t?"."+L(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=t+L(o=e[a],a);i+=R(o,l,n,r)}else if(null===e||"undefined"===typeof e?l=null:l="function"===typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"===typeof l)for(e=l.call(e),a=0;!(o=e.next()).done;)i+=R(o=o.value,l=t+L(o,a++),n,r);else"object"===o&&y("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return i}function L(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function B(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,a.thatReturnsArgument):null!=e&&(k(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n,e={$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function F(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(O,"$&/")+"/"),t=P(t,i,r,o),null==e||R(e,"",B,t),T(t)}var H={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=P(null,null,t,n),null==e||R(e,"",M,t),T(t)},count:function(e){return null==e?0:R(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return F(e,t,null,a.thatReturnsArgument),t},only:function(e){return k(e)||y("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:x,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:m,render:e}},Fragment:u,StrictMode:d,unstable_AsyncMode:v,unstable_Profiler:f,createElement:A,cloneElement:function(e,t,n){(null===e||void 0===e)&&y("267",e);var o=void 0,i=r({},e.props),a=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=N.current),void 0!==t.key&&(a=""+t.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)C.call(t,o)&&!_.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==u?u[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];i.children=u}return{$$typeof:s,type:e.type,key:a,ref:l,props:i,_owner:c}},createFactory:function(e){var t=A.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:N,assign:r}},W={default:H},q=W&&H||W;e.exports=q.default?q.default:q},8395:function(e,t,n){"use strict";e.exports=n(1986)}}]);
//# sourceMappingURL=7316.047200c2.chunk.js.map