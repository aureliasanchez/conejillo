/*! For license information please see 7319.bdafa8d7.chunk.js.LICENSE.txt */
(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7319],{6487:function(e,n,t){"use strict";t.d(n,{A:function(){return c}});var i=t(9456),r=t(3024),s=(t(5043),t(5721),t(579)),c=function(e){var n=e.iconWhiteClass;(0,i.d4)((function(e){return e.compare})).compareItems,(0,i.d4)((function(e){return e.wishlist})).wishlistItems,(0,i.d4)((function(e){return e.cart})).cartItems;return(0,s.jsx)("div",{className:(0,r.A)("header-right-wrap",n),children:(0,s.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,s.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,s.jsx)("i",{className:"pe-7s-menu"})})})})}},4993:function(e,n,t){"use strict";t.d(n,{A:function(){return u}});var i=t(5043),r=t(579),s=t(5475),c=t(4117),a=function(){var e=(0,c.Bd)().t;return(0,r.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"menu-item-has-children",children:(0,r.jsx)(s.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,r.jsx)("li",{className:"menu-item-has-children",children:(0,r.jsx)(s.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.N_,{to:"/conejillo/shop-grid-standard",children:e("colleccion")})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},o=t(9456),l=(t(1682),function(){(0,c.Bd)().i18n,(0,o.wA)(),(0,o.d4)((function(e){return e.currency}))}),d=function(){return(0,r.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,r.jsx)("div",{className:"off-canvas-contact-widget"}),(0,r.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,r.jsx)("a",{href:"//facebook.com",title:"Facebook",children:(0,r.jsx)("i",{className:"fa fa-facebook"})}),(0,r.jsx)("a",{href:"//instagram.com",title:"Instagram",children:(0,r.jsx)("i",{className:"fa fa-instagram"})})]})]})},u=function(){(0,i.useEffect)((function(){for(var t=document.querySelector("#offcanvas-navigation"),i=t.querySelectorAll(".sub-menu"),r=t.querySelectorAll("a"),s=0;s<i.length;s++)i[s].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var c=t.querySelectorAll(".menu-expand"),a=c.length,o=0;o<a;o++)c[o].addEventListener("click",(function(n){e(n)}));for(var l=0;l<r.length;l++)r[l].addEventListener("click",(function(){n()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},n=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,r.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,r.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return n()},children:(0,r.jsx)("i",{className:"pe-7s-close"})}),(0,r.jsx)("div",{className:"offcanvas-wrapper",children:(0,r.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,r.jsx)(a,{}),(0,r.jsx)(l,{}),(0,r.jsx)(d,{})]})})]})}},3189:function(e,n,t){"use strict";var i=t(5475),r=t(4117),s=t(3024),c=t(579);n.A=function(e){var n=e.menuWhiteClass,t=e.sidebarMenu,a=(0,r.Bd)().t;return(0,c.jsx)("div",{className:(0,s.A)(t?"sidebar-menu":"main-menu ".concat(n||"")),children:(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/",children:a("Inicio")})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:a("Cat\xe1logo")})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:a("Coleccion")})}),(0,c.jsx)("li",{children:(0,c.jsxs)("ul",{className:"submenu",children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/blog-standard",children:a("blog_standard")})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/blog-no-sidebar",children:a("blog_no_sidebar")})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/blog-right-sidebar",children:a("blog_right_sidebar")})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/blog-details-standard",children:a("blog_details_standard")})})]})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/contact",children:a("Contacto")})})]})})})}},4943:function(e,n,t){"use strict";var i=t(3024),r=t(9735),s=t(579),c=function(e){var n,t=e.status,r=e.message,c=e.onValidated,a=e.spaceTopClass,o=e.subscribeBtnClass;return(0,s.jsx)("div",{className:(0,i.A)("subscribe-form-3",a),children:(0,s.jsxs)("div",{className:"mc-form",children:[(0,s.jsx)("div",{children:(0,s.jsx)("input",{className:"email",ref:function(e){return n=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===t&&(0,s.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,s.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===t&&(0,s.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,s.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,s.jsx)("button",{className:"button",onClick:function(){n&&n.value.indexOf("@")>-1&&c({EMAIL:n.value}),n.value=""},children:"SUBSCRIBE"})})]})})};n.A=function(e){var n=e.mailchimpUrl,t=e.spaceTopClass,i=e.subscribeBtnClass;return(0,s.jsx)("div",{children:(0,s.jsx)(r.A,{url:n,render:function(e){var n=e.subscribe,r=e.status,a=e.message;return(0,s.jsx)(c,{status:r,message:a,onValidated:function(e){return n(e)},spaceTopClass:t,subscribeBtnClass:i})}})})}},425:function(e,n,t){"use strict";var i=t(9379),r=t(5544),s=t(5043),c=t(8906),a=t(4640),o=t(9456),l=t(5913),d=t(7362),u=t(2821),f=t(5721),m=t(4990),h=t(3492),p=t(579);n.A=function(e){var n=e.product,t=e.currency,x=e.discountedPrice,v=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,b=e.onHide,N=e.wishlistItem,w=e.compareItem,y=(0,s.useState)(null),A=(0,r.A)(y,2),C=A[0],k=A[1],S=(0,o.wA)(),_=(0,o.d4)((function(e){return e.cart})).cartItems,I=(0,s.useState)(n.variation?n.variation[0].color:""),L=(0,r.A)(I,2),P=L[0],q=L[1],T=(0,s.useState)(n.variation?n.variation[0].size[0].name:""),B=(0,r.A)(T,2),z=B[0],E=B[1],F=(0,s.useState)(n.variation?n.variation[0].size[0].stock:n.stock),O=(0,r.A)(F,2),R=O[0],H=O[1],V=(0,s.useState)(1),U=(0,r.A)(V,2),W=U[0],M=U[1],D=(0,u.pQ)(_,n,P,z),Q={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[c._R,c.WO]},Y={onSwiper:k,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,p.jsxs)(a.A,{show:g,onHide:function(){k(null),b()},className:"product-quickview-modal-wrapper",children:[(0,p.jsx)(a.A.Header,{closeButton:!0}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,p.jsx)("div",{className:"product-large-image-wrapper",children:(0,p.jsx)(d.A,{options:Q,children:n.image&&n.image.map((function(e,n){return(0,p.jsx)(d.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},n)}))})}),(0,p.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,p.jsx)(d.A,{options:Y,children:n.image&&n.image.map((function(e,n){return(0,p.jsx)(d.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},n)}))})})]}),(0,p.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,p.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,p.jsx)("h2",{children:n.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==x?(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("span",{children:t.currencySymbol+j})," ",(0,p.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,p.jsxs)("span",{children:[t.currencySymbol+v," "]})}),n.rating&&n.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(l.A,{ratingValue:n.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:n.shortDescription})}),n.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:n.variation.map((function(e,n){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===P?"checked":"",onChange:function(){q(e.color),E(e.size[0].name),H(e.size[0].stock),M(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},n)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:n.variation&&n.variation.map((function(e){return e.color===P?e.size.map((function(e,n){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===z?"checked":"",onChange:function(){E(e.name),H(e.stock),M(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},n)})):""}))})]})]}):"",n.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,p.jsx)("a",{href:n.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return M(W>1?W-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:W,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return M(W<R-D?W+1:W)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,p.jsxs)("button",{onClick:function(){return S((0,f.bE)((0,i.A)((0,i.A)({},n),{},{quantity:W,selectedProductColor:P||(n.selectedProductColor?n.selectedProductColor:null),selectedProductSize:z||(n.selectedProductSize?n.selectedProductSize:null)})))},disabled:D>=R,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(n))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,h.wL)(n))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,n,t){"use strict";var i=t(5043),r=t(579);n.A=function(e){for(var n=e.ratingValue,t=[],s=0;s<5;s++)t.push((0,r.jsx)("i",{className:"fa fa-star-o"},s));if(n&&n>0)for(var c=0;c<=n-1;c++)t[c]=(0,r.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,r.jsx)(i.Fragment,{children:t})}},6998:function(e,n,t){"use strict";t.d(n,{A:function(){return a}});var i=t(5544),r=t(5043),s=function(){var e=(0,r.useState)(!1),n=(0,i.A)(e,2),t=n[0],s=n[1];return(0,r.useEffect)((function(){var e=function(){var e=window.pageYOffset;s(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),{stick:t,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=t(579),a=function(){var e=s(),n=e.stick,t=e.onClickHandler;return n?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:t,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},2168:function(e,n,t){"use strict";var i=t(9490),r=t(579),s=function(e){var n=e.title,t=e.titleTemplate,s=e.description;return(0,r.jsx)(i.vd,{children:(0,r.jsxs)(i.mg,{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsxs)("title",{children:[n," | ",t]}),(0,r.jsx)("meta",{name:"description",content:s})]})})};s.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},n.A=s},7362:function(e,n,t){"use strict";t.d(n,{q:function(){return o.qr}});var i=t(436),r=t(9379),s=t(5043),c=t(3024),a=t(8906),o=t(4671),l=t(579),d=(0,s.forwardRef)((function(e,n){var t=e.options,s=e.prevIcon,d=e.nextIcon,u=e.children,f=e.className,m=e.navClass,h=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],p="prev-".concat(m||"swiper-nav"),x="next-".concat(m||"swiper-nav"),v=(0,r.A)((0,r.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[a.Vx,a.dK,a.Jq,a.Ij].concat((0,i.A)(h)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(p),nextEl:".".concat(x)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,c.A)("swiper-wrap",f),ref:n,children:[(0,l.jsx)(o.RC,(0,r.A)((0,r.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(p),children:(0,l.jsx)("i",{className:(0,c.A)(s,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(x),children:(0,l.jsx)("i",{className:(0,c.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},n.A=d},2821:function(e,n,t){"use strict";t.d(n,{Gj:function(){return o},L:function(){return p},SC:function(){return d},VI:function(){return u},d$:function(){return r},do:function(){return s},e1:function(){return a},nL:function(){return h},pQ:function(){return c},sQ:function(){return x},ur:function(){return m},zf:function(){return f}});var i=t(436),r=function(e,n,t,i){var r=n?e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]})):e;if(t&&"new"===t){var s=r.filter((function(e){return e.new}));return s.slice(0,i||s.length)}if(t&&"bestSeller"===t)return r.sort((function(e,n){return n.saleCount-e.saleCount})).slice(0,i||r.length);if(t&&"saleItems"===t){var c=r.filter((function(e){return e.discount&&e.discount>0}));return c.slice(0,i||c.length)}return r.slice(0,i||r.length)},s=function(e,n){return n&&n>0?e-e*(n/100):null},c=function(e,n,t,i){var r=e.find((function(e){return e.id===n.id&&(!e.selectedProductColor||e.selectedProductColor===t)&&(!e.selectedProductSize||e.selectedProductSize===i)}));return e.length>=1&&r?n.variation?e.find((function(e){return e.id===n.id&&e.selectedProductColor===t&&e.selectedProductSize===i})).quantity:e.find((function(e){return n.id===e.id})).quantity:0},a=function(e,n,t){return e.stock?e.stock:e.variation.filter((function(e){return e.color===n}))[0].size.filter((function(e){return e.name===t}))[0].stock},o=function(e,n,t){if(e&&n&&t){if("category"===n)return e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]}));if("tag"===n)return e.filter((function(e){return e.tag.filter((function(e){return e===t}))[0]}));if("color"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===t}))[0]}));if("size"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===t}))[0]}))[0]}));if("filterSort"===n){var r=(0,i.A)(e);if("default"===t)return r;if("priceHighToLow"===t)return r.sort((function(e,n){return n.price-e.price}));if("priceLowToHigh"===t)return r.sort((function(e,n){return e.price-n.price}))}}return e},l=function(e){return e.filter((function(e,n,t){return n===t.indexOf(e)}))},d=function(e){var n=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return n.push(e)}))})),l(n)},u=function(e){var n=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return n.push(e)}))})),l(n)},f=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return n.push(e.color)}))})),l(n)},m=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return n.push(e.name)}))}))})),l(n)},h=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){var n=document.querySelector("#product-filter-wrapper");n.classList.toggle("active"),n.style.height?n.style.height=null:n.style.height=n.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},4980:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var i=t(5043),r=t(2168),s=t(5544),c=t(5475),a=t(3024),o=t(3189),l=t(6487),d=t(4993),u=t(579),f=function(){var e=(0,i.useState)(0),n=(0,s.A)(e,2),t=n[0],r=n[1],f=(0,i.useState)(0),m=(0,s.A)(f,2),h=m[0],p=m[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return p(e.offsetTop),window.addEventListener("scroll",x),function(){window.removeEventListener("scroll",x)}}),[]);var x=function(){r(window.scrollY)};return(0,u.jsx)("header",{className:(0,a.A)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar",t>h&"stick"),children:(0,u.jsxs)("div",{className:"container-fluid",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,u.jsx)(o.A,{menuWhiteClass:"menu-white"})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,u.jsx)(c.N_,{className:"sticky-none",to:"/conejillo/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,u.jsx)(c.N_,{className:"sticky-block",to:"/conejillo/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,u.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-8",children:(0,u.jsx)(l.A,{iconWhiteClass:"header-right-wrap-white"})})]}),(0,u.jsx)(d.A,{})]})})},m=t(3854),h=t(6998),p=function(e){var n=e.children;return(0,u.jsxs)("div",{className:"wrapper",children:[(0,u.jsx)(f,{}),n,(0,u.jsx)(m.A,{backgroundColorClass:"bg-black",footerTopBackgroundColorClass:"bg-black",footerTopSpaceTopClass:"pt-80",spaceBottomClass:"pb-25",footerLogo:"/assets/img/logo/logo-2.png"}),(0,u.jsx)(h.A,{})]})},x=t(8906),v=t(7362),j=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"Final Sale","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-3.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-4.jpg","url":"/shop-grid-standard"}]'),g=function(e){var n=e.data;return(0,u.jsx)("div",{className:(0,a.A)("slider-height-4 d-flex align-items-center bg-img"),style:{backgroundImage:"url(".concat("/conejillo"+n.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,u.jsxs)("div",{className:"slider-content-5 slider-animated-1 text-center",children:[(0,u.jsx)("h3",{className:"animated",children:n.title}),(0,u.jsx)("h1",{className:"animated",children:n.subtitle}),(0,u.jsx)("p",{className:"animated",children:n.text}),(0,u.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,u.jsx)(c.N_,{className:"animated",to:"/conejillo"+n.url,children:"SHOP NOW"})})]})})})})})},b={effect:"fade",fadeEffect:{crossFade:!0},modules:[x._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},N=function(){return(0,u.jsx)("div",{className:"slider-area",children:(0,u.jsx)("div",{className:"slider-active-2 nav-style-2",children:(0,u.jsx)(v.A,{options:b,children:null===j||void 0===j?void 0:j.map((function(e,n){return(0,u.jsx)(v.q,{children:(0,u.jsx)(g,{data:e})},n)}))})})})},w=t(8902),y=t(9456),A=t(2821),C=t(425),k=t(5721),S=t(4990),_=t(3492),I=function(e){var n=e.product,t=e.currency,r=e.cartItem,o=e.wishlistItem,l=e.compareItem,d=e.spaceBottomClass,f=(0,i.useState)(!1),m=(0,s.A)(f,2),h=m[0],p=m[1],x=(0,A.do)(n.price,n.discount),v=+(n.price*t.currencyRate).toFixed(2),j=+(x*t.currencyRate).toFixed(2),g=(0,y.wA)();return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("div",{className:(0,a.A)("product-wrap-3 scroll-zoom",d),children:(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsx)(c.N_,{to:"/conejillo/product/"+n.id,children:(0,u.jsx)("img",{className:"default-img",src:"/conejillo"+n.image[0],alt:""})}),n.discount||n.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[n.discount?(0,u.jsxs)("span",{className:"pink",children:["-",n.discount,"%"]}):"",n.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsx)("div",{className:"product-content-3-wrap",children:(0,u.jsxs)("div",{className:"product-content-3",children:[(0,u.jsx)("div",{className:"product-title",children:(0,u.jsx)("h3",{children:(0,u.jsx)(c.N_,{to:"/conejillo/product/"+n.id,children:n.name})})}),(0,u.jsx)("div",{className:"price-3",children:null!==x?(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("span",{children:t.currencySymbol+j})," ",(0,u.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,u.jsxs)("span",{children:[t.currencySymbol+v," "]})}),(0,u.jsxs)("div",{className:"product-action-3",children:[(0,u.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,u.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to wishlist":"Add to wishlist",onClick:function(){return g((0,S.U4)(n))},children:(0,u.jsx)("i",{className:"fa fa-heart-o"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-cart",children:n.affiliateLink?(0,u.jsxs)("a",{href:n.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):n.variation&&n.variation.length>=1?(0,u.jsx)(c.N_,{to:"".concat("/conejillo","/product/").concat(n.id),title:"Select options",children:(0,u.jsx)("i",{class:"fa fa-cog"})}):n.stock&&n.stock>0?(0,u.jsxs)("button",{onClick:function(){return g((0,k.bE)(n))},className:void 0!==r&&r.quantity>0?"active":"",disabled:void 0!==r&&r.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,u.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,u.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-compare",children:(0,u.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to compare":"Add to compare",onClick:function(){return g((0,_.wL)(n))},children:(0,u.jsx)("i",{className:"fa fa-retweet"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,u.jsx)("button",{onClick:function(){return p(!0)},title:"Quick View",children:(0,u.jsx)("i",{className:"fa fa-eye"})})})]})]})})]})}),(0,u.jsx)(C.A,{show:h,onHide:function(){return p(!1)},product:n,currency:t,discountedPrice:x,finalProductPrice:v,finalDiscountedPrice:j,wishlistItem:o,compareItem:l})]})},L=function(e){var n=e.sliderClassName,t=e.spaceBottomClass,r=e.category,s=e.type,c=e.limit,a=(0,y.d4)((function(e){return e.product})).products,o=(0,y.d4)((function(e){return e.currency})),l=(0,y.d4)((function(e){return e.cart})).cartItems,d=(0,y.d4)((function(e){return e.wishlist})).wishlistItems,f=(0,y.d4)((function(e){return e.compare})).compareItems,m=(0,A.d$)(a,r,s,c);return(0,u.jsx)(i.Fragment,{children:null===m||void 0===m?void 0:m.map((function(e){return(0,u.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12",children:(0,u.jsx)(I,{sliderClassName:n,spaceBottomClass:t,product:e,currency:o,cartItem:l.find((function(n){return n.id===e.id})),wishlistItem:d.find((function(n){return n.id===e.id})),compareItem:f.find((function(n){return n.id===e.id}))})},e.id)}))})},P=function(e){var n=e.spaceTopClass,t=e.spaceBottomClass,i=e.category;return(0,u.jsx)("div",{className:(0,a.A)("product-area hm5-section-padding",n,t),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(L,{category:i,limit:12,spaceBottomClass:"mb-20"})})})})},q=function(){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(r.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,u.jsxs)(p,{children:[(0,u.jsx)(N,{}),(0,u.jsx)(P,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",category:"accessories"}),(0,u.jsx)(w.A,{spaceBottomClass:"pb-100"})]})]})}},3854:function(e,n,t){"use strict";var i=t(3024),r=t(5475),s=t(579);n.A=function(e){var n=e.backgroundColorClass,t=e.copyrightColorClass,c=e.spaceLeftClass,a=e.spaceRightClass,o=e.footerTopBackgroundColorClass,l=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,u=e.footerLogo,f=e.backgroundImage;return(0,s.jsxs)("footer",{className:(0,i.A)("footer-area",n,c,a,f&&"bg-img"),style:{backgroundImage:" ".concat(f?"url(".concat("/conejillo"+f,")"):"url()")},children:[(0,s.jsx)("div",{className:(0,i.A)("footer-top text-center",o,l,d),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"footer-logo",children:(0,s.jsx)(r.N_,{to:"/conejillo",children:(0,s.jsx)("img",{alt:"",src:"/conejillo"+"".concat(u||"/assets/img/logo/logo.png")})})}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,s.jsx)("div",{className:"footer-social",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"//www.facebook.com",children:(0,s.jsx)("i",{className:"fa fa-facebook"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"//www.dribbble.com",children:(0,s.jsx)("i",{className:"fa fa-dribbble"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"//www.pinterest.com",children:(0,s.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"//www.twitter.com",children:(0,s.jsx)("i",{className:"fa fa-twitter"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"//www.linkedin.com",children:(0,s.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,s.jsx)("div",{className:"footer-bottom text-center",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:(0,i.A)("copyright-2",t),children:(0,s.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,s.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},8902:function(e,n,t){"use strict";var i=t(3024),r=t(4943),s=t(579);n.A=function(e){var n=e.spaceTopClass,t=e.spaceBottomClass,c=e.subscribeBtnClass;return(0,s.jsx)("div",{className:(0,i.A)("subscribe-area-3",n,t),children:(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,s.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,s.jsx)("h2",{children:"Subscribe "}),(0,s.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,s.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:c})]})})})})})}},2667:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});var i=t(5043);function r(){return(0,i.useState)(null)}},8232:function(e,n,t){"use strict";var i=t(5043);n.A=function(e){var n=(0,i.useRef)(e);return(0,i.useEffect)((function(){n.current=e}),[e]),n}},1456:function(e,n,t){"use strict";t.d(n,{A:function(){return s}});var i=t(5043),r=t(8232);function s(e){var n=(0,r.A)(e);return(0,i.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},4723:function(e,n,t){"use strict";var i=t(5043),r="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,s="undefined"!==typeof document;n.A=s||r?i.useLayoutEffect:i.useEffect},6723:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});var i=t(5043);function r(){var e=(0,i.useRef)(!0),n=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}},1342:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});var i=t(5043);function r(e){var n=(0,i.useRef)(null);return(0,i.useEffect)((function(){n.current=e})),n.current}},7852:function(e,n,t){"use strict";t.d(n,{Wz:function(){return a},oU:function(){return c}});var i=t(5043),r=(t(579),["xxl","xl","lg","md","sm","xs"]),s=i.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"});s.Consumer,s.Provider;function c(e,n){var t=(0,i.useContext)(s).prefixes;return e||t[n]||n}function a(){return"rtl"===(0,i.useContext)(s).dir}},8139:function(e,n){var t;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",n=0;n<arguments.length;n++){var t=arguments[n];t&&(e=c(e,s(t)))}return e}function s(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var n="";for(var t in e)i.call(e,t)&&e[t]&&(n=c(n,t));return n}function c(e,n){return n?e?e+" "+n:e+n:e}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},45:function(e,n,t){"use strict";t.d(n,{A:function(){return r}});var i=t(8587);function r(e,n){if(null==e)return{};var t,r,s=(0,i.A)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}},8587:function(e,n,t){"use strict";function i(e,n){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;t[i]=e[i]}return t}t.d(n,{A:function(){return i}})}}]);
//# sourceMappingURL=7319.bdafa8d7.chunk.js.map