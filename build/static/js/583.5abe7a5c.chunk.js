"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[583],{6487:function(e,n,t){t.d(n,{A:function(){return c}});var r=t(9456),i=t(3024),a=(t(5043),t(5721),t(579)),c=function(e){var n=e.iconWhiteClass;(0,r.d4)((function(e){return e.compare})).compareItems,(0,r.d4)((function(e){return e.wishlist})).wishlistItems,(0,r.d4)((function(e){return e.cart})).cartItems;return(0,a.jsx)("div",{className:(0,i.A)("header-right-wrap",n),children:(0,a.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,a.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,a.jsx)("i",{className:"pe-7s-menu"})})})})}},4993:function(e,n,t){t.d(n,{A:function(){return d}});var r=t(5043),i=t(579),a=t(5475),c=t(4117),o=function(){var e=(0,c.Bd)().t;return(0,i.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"menu-item-has-children",children:(0,i.jsx)(a.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,i.jsx)("li",{className:"menu-item-has-children",children:(0,i.jsx)(a.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},s=t(9456),l=(t(1682),function(){(0,c.Bd)().i18n,(0,s.wA)(),(0,s.d4)((function(e){return e.currency}))}),u=function(){return(0,i.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,i.jsx)("div",{className:"off-canvas-contact-widget"}),(0,i.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,i.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx",title:"Facebook",children:(0,i.jsx)("i",{className:"fa fa-facebook"})}),(0,i.jsx)("a",{href:"https://www.instagram.com/conejillodecampo_pachuca/",title:"Instagram",children:(0,i.jsx)("i",{className:"fa fa-instagram"})})]})]})},d=function(){(0,r.useEffect)((function(){for(var t=document.querySelector("#offcanvas-navigation"),r=t.querySelectorAll(".sub-menu"),i=t.querySelectorAll("a"),a=0;a<r.length;a++)r[a].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var c=t.querySelectorAll(".menu-expand"),o=c.length,s=0;s<o;s++)c[s].addEventListener("click",(function(n){e(n)}));for(var l=0;l<i.length;l++)i[l].addEventListener("click",(function(){n()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},n=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,i.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,i.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return n()},children:(0,i.jsx)("i",{className:"pe-7s-close"})}),(0,i.jsx)("div",{className:"offcanvas-wrapper",children:(0,i.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,i.jsx)(o,{}),(0,i.jsx)(l,{}),(0,i.jsx)(u,{})]})})]})}},425:function(e,n,t){var r=t(9379),i=t(5544),a=t(5043),c=t(8906),o=t(4640),s=t(9456),l=t(5913),u=t(7362),d=t(2821),f=t(5721),m=t(4990),v=t(3492),p=t(579);n.A=function(e){var n=e.product,t=e.currency,h=e.discountedPrice,x=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,b=e.onHide,N=e.wishlistItem,w=e.compareItem,y=(0,a.useState)(null),k=(0,i.A)(y,2),A=k[0],C=k[1],S=(0,s.wA)(),q=(0,s.d4)((function(e){return e.cart})).cartItems,z=(0,a.useState)(n.variation?n.variation[0].color:""),P=(0,i.A)(z,2),L=P[0],I=P[1],E=(0,a.useState)(n.variation?n.variation[0].size[0].name:""),H=(0,i.A)(E,2),T=H[0],_=H[1],F=(0,a.useState)(n.variation?n.variation[0].size[0].stock:n.stock),B=(0,i.A)(F,2),O=B[0],V=B[1],R=(0,a.useState)(1),D=(0,i.A)(R,2),Q=D[0],W=D[1],G=(0,d.pQ)(q,n,L,T),J={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:A},modules:[c._R,c.WO]};return(0,p.jsxs)(o.A,{show:g,onHide:function(){C(null),b()},className:"product-quickview-modal-wrapper",children:[(0,p.jsx)(o.A.Header,{closeButton:!0}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:(0,p.jsx)("div",{className:"product-large-image-wrapper",children:(0,p.jsx)(u.A,{options:J,children:n.image&&n.image.map((function(e,n){return(0,p.jsx)(u.q,{children:(0,p.jsx)("div",{className:"single-image",children:(0,p.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},n)}))})})}),(0,p.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,p.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,p.jsx)("h2",{children:n.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==h?(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("span",{children:t.currencySymbol+j})," ",(0,p.jsx)("span",{className:"old",children:t.currencySymbol+x})]}):(0,p.jsxs)("span",{children:[t.currencySymbol+x," "]})}),n.rating&&n.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(l.A,{ratingValue:n.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:n.shortDescription})}),n.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:n.variation.map((function(e,n){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===L?"checked":"",onChange:function(){I(e.color),_(e.size[0].name),V(e.size[0].stock),W(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},n)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:n.variation&&n.variation.map((function(e){return e.color===L?e.size.map((function(e,n){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===T?"checked":"",onChange:function(){_(e.name),V(e.stock),W(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},n)})):""}))})]})]}):"",n.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,p.jsx)("a",{href:n.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return W(Q>1?Q-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:Q,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return W(Q<O-G?Q+1:Q)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:O&&O>0?(0,p.jsxs)("button",{onClick:function(){return S((0,f.bE)((0,r.A)((0,r.A)({},n),{},{quantity:Q,selectedProductColor:L||(n.selectedProductColor?n.selectedProductColor:null),selectedProductSize:T||(n.selectedProductSize?n.selectedProductSize:null)})))},disabled:G>=O,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Agregado a la lista de deseos":"Agregar a la lista de deseos",onClick:function(){return S((0,m.U4)(n))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Agregado para comparar":"Agregar para comparar",onClick:function(){return S((0,v.wL)(n))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,n,t){var r=t(5043),i=t(579);n.A=function(e){for(var n=e.ratingValue,t=[],a=0;a<5;a++)t.push((0,i.jsx)("i",{className:"fa fa-star-o"},a));if(n&&n>0)for(var c=0;c<=n-1;c++)t[c]=(0,i.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,i.jsx)(r.Fragment,{children:t})}},6998:function(e,n,t){t.d(n,{A:function(){return o}});var r=t(5544),i=t(5043),a=function(){var e=(0,i.useState)(!1),n=(0,r.A)(e,2),t=n[0],a=n[1];return(0,i.useEffect)((function(){var e=function(){var e=window.pageYOffset;a(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),{stick:t,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=t(579),o=function(){var e=a(),n=e.stick,t=e.onClickHandler;return n?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:t,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},2168:function(e,n,t){var r=t(9490),i=t(579),a=function(e){var n=e.title,t=e.titleTemplate,a=e.description;return(0,i.jsx)(r.vd,{children:(0,i.jsxs)(r.mg,{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsxs)("title",{children:[n," | ",t]}),(0,i.jsx)("meta",{name:"description",content:a})]})})};a.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},n.A=a},7362:function(e,n,t){t.d(n,{q:function(){return s.qr}});var r=t(436),i=t(9379),a=t(5043),c=t(3024),o=t(8906),s=t(4671),l=t(579),u=(0,a.forwardRef)((function(e,n){var t=e.options,a=e.prevIcon,u=e.nextIcon,d=e.children,f=e.className,m=e.navClass,v=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],p="prev-".concat(m||"swiper-nav"),h="next-".concat(m||"swiper-nav"),x=(0,i.A)((0,i.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[o.Vx,o.dK,o.Jq,o.Ij].concat((0,r.A)(v)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(p),nextEl:".".concat(h)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,c.A)("swiper-wrap",f),ref:n,children:[(0,l.jsx)(s.RC,(0,i.A)((0,i.A)({},x),{},{children:d})),(null===x||void 0===x?void 0:x.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(p),children:(0,l.jsx)("i",{className:(0,c.A)(a,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(h),children:(0,l.jsx)("i",{className:(0,c.A)(u,"icon")})})]})]})}));u.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},n.A=u},2821:function(e,n,t){t.d(n,{Gj:function(){return s},L:function(){return p},SC:function(){return u},VI:function(){return d},d$:function(){return i},do:function(){return a},e1:function(){return o},nL:function(){return v},pQ:function(){return c},sQ:function(){return h},ur:function(){return m},zf:function(){return f}});var r=t(436),i=function(e,n,t,r){var i=n?e.filter((function(e){return e.category.filter((function(e){return e===n}))[0]})):e;if(t&&"new"===t){var a=i.filter((function(e){return e.new}));return a.slice(0,r||a.length)}if(t&&"bestSeller"===t)return i.sort((function(e,n){return n.saleCount-e.saleCount})).slice(0,r||i.length);if(t&&"saleItems"===t){var c=i.filter((function(e){return e.discount&&e.discount>0}));return c.slice(0,r||c.length)}return i.slice(0,r||i.length)},a=function(e,n){return n&&n>0?e-e*(n/100):null},c=function(e,n,t,r){var i=e.find((function(e){return e.id===n.id&&(!e.selectedProductColor||e.selectedProductColor===t)&&(!e.selectedProductSize||e.selectedProductSize===r)}));return e.length>=1&&i?n.variation?e.find((function(e){return e.id===n.id&&e.selectedProductColor===t&&e.selectedProductSize===r})).quantity:e.find((function(e){return n.id===e.id})).quantity:0},o=function(e,n,t){return e.stock?e.stock:e.variation.filter((function(e){return e.color===n}))[0].size.filter((function(e){return e.name===t}))[0].stock},s=function(e,n,t){if(e&&n&&t){if("category"===n)return e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]}));if("tag"===n)return e.filter((function(e){return e.tag.filter((function(e){return e===t}))[0]}));if("color"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===t}))[0]}));if("size"===n)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===t}))[0]}))[0]}));if("filterSort"===n){var i=(0,r.A)(e);if("default"===t)return i;if("priceHighToLow"===t)return i.sort((function(e,n){return n.price-e.price}));if("priceLowToHigh"===t)return i.sort((function(e,n){return e.price-n.price}))}}return e},l=function(e){return e.filter((function(e,n,t){return n===t.indexOf(e)}))},u=function(e){var n=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return n.push(e)}))})),l(n)},d=function(e){var n=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return n.push(e)}))})),l(n)},f=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return n.push(e.color)}))})),l(n)},m=function(e){var n=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return n.push(e.name)}))}))})),l(n)},v=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},p=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},h=function(e){var n=document.querySelector("#product-filter-wrapper");n.classList.toggle("active"),n.style.height?n.style.height=null:n.style.height=n.scrollHeight+"px",e.currentTarget.classList.toggle("active")}}}]);
//# sourceMappingURL=583.5abe7a5c.chunk.js.map