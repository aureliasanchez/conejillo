"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[9010],{5911:function(e,s,n){var c=n(9456),r=n(3024),l=(n(3844),n(579));s.A=function(e){var s=e.iconWhiteClass;(0,c.d4)((function(e){return e.compare})).compareItems,(0,c.d4)((function(e){return e.wishlist})).wishlistItems,(0,c.d4)((function(e){return e.cart})).cartItems;return(0,l.jsx)("div",{className:(0,r.A)("header-right-wrap",s),children:(0,l.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,l.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,l.jsx)("i",{className:"pe-7s-menu"})})})})}},3188:function(e,s,n){var c=n(3024),r=n(5475),l=n(579);s.A=function(e){var s=e.imageUrl,n=e.logoClass;return(0,l.jsx)("div",{className:(0,c.A)(n),children:(0,l.jsx)(r.N_,{to:"/conejillo/",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3032:function(e,s,n){n.d(s,{A:function(){return h}});var c=n(5043),r=(n(3844),n(5475)),l=n(4117),a=n(579),i=function(){var e=(0,l.Bd)().t;return(0,a.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(r.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},o=n(9456),t=(n(1682),function(){(0,l.Bd)().i18n,(0,o.wA)(),(0,o.d4)((function(e){return e.currency}))}),d=function(){return(0,a.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,a.jsx)("div",{className:"off-canvas-contact-widget"}),(0,a.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,a.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx",title:"Facebook",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/conejillodecampo_pachuca/",title:"Instagram",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})]})]})},h=function(){(0,c.useEffect)((function(){for(var n=document.querySelector("#offcanvas-navigation"),c=n.querySelectorAll(".sub-menu"),r=n.querySelectorAll("a"),l=0;l<c.length;l++)c[l].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var a=n.querySelectorAll(".menu-expand"),i=a.length,o=0;o<i;o++)a[o].addEventListener("click",(function(s){e(s)}));for(var t=0;t<r.length;t++)r[t].addEventListener("click",(function(){s()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},s=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,a.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,a.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return s()},children:(0,a.jsx)("i",{className:"pe-7s-close"})}),(0,a.jsx)("div",{className:"offcanvas-wrapper",children:(0,a.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,a.jsx)(i,{}),(0,a.jsx)(t,{}),(0,a.jsx)(d,{})]})})]})}},3189:function(e,s,n){var c=n(5475),r=n(4117),l=n(3024),a=n(579);s.A=function(e){var s=e.menuWhiteClass,n=e.sidebarMenu,i=(0,r.Bd)().t;return(0,a.jsx)("div",{className:(0,l.A)(n?"sidebar-menu":"main-menu ".concat(s||"")),children:(0,a.jsx)("div",{className:"logo-container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(c.N_,{to:"/conejillo/",children:i("Inicio")})}),(0,a.jsx)("li",{children:(0,a.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:i("Cat\xe1logo")})}),(0,a.jsx)(c.N_,{to:"/conejillo/",children:(0,a.jsx)("img",{src:"/conejillo/assets/img/logo/logo.png",alt:"Logo"})}),(0,a.jsx)("li",{children:(0,a.jsx)(c.N_,{to:"/conejillo/contact",children:i("Contacto")})}),(0,a.jsx)("li",{children:(0,a.jsx)(c.N_,{to:"/conejillo/blog-details-standard",children:i("Blog")})}),(0,a.jsx)("li",{children:(0,a.jsx)(c.N_,{to:"/conejillo/cart",children:i("Carritoxd")})})]})})})})}},3468:function(e,s,n){var c=n(9456),r=n(4117),l=n(1682),a=n(579);s.A=function(e){var s=e.currency,n=(0,r.Bd)().i18n,i=(0,c.wA)(),o=function(e){var s=e.target.value;n.changeLanguage(s)},t=function(e){var s=e.target.value;i((0,l.M)(s))};return(0,a.jsxs)("div",{className:"language-currency-wrap",children:[(0,a.jsxs)("div",{className:"same-language-currency language-style",children:[(0,a.jsxs)("span",{children:["en"===n.resolvedLanguage?"Espanol":"fn"===n.resolvedLanguage?"French":"de"===n.resolvedLanguage?"Germany":""," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"en",onClick:function(e){return o(e)},children:"English"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"fn",onClick:function(e){return o(e)},children:"French"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"de",onClick:function(e){return o(e)},children:"Germany"})})]})})]}),(0,a.jsxs)("div",{className:"same-language-currency use-style",children:[(0,a.jsxs)("span",{children:[s.currencyName," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,a.jsx)("div",{className:"same-language-currency",children:(0,a.jsx)("p",{children:"Call Us 3965410"})})]})}},3844:function(e,s,n){n(5043),n(9456),n(5721),n(579)},4943:function(e,s,n){var c=n(3024),r=n(9735),l=n(579),a=function(e){var s,n=e.status,r=e.message,a=e.onValidated,i=e.spaceTopClass,o=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,c.A)("subscribe-form-3",i),children:(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===n&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===n&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===n&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,l.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,l.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,n=e.spaceTopClass,c=e.subscribeBtnClass;return(0,l.jsx)("div",{children:(0,l.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,i=e.message;return(0,l.jsx)(a,{status:r,message:i,onValidated:function(e){return s(e)},spaceTopClass:n,subscribeBtnClass:c})}})})}},6998:function(e,s,n){n.d(s,{A:function(){return i}});var c=n(5544),r=n(5043),l=function(){var e=(0,r.useState)(!1),s=(0,c.A)(e,2),n=s[0],l=s[1];return(0,r.useEffect)((function(){var e=function(){var e=window.pageYOffset;l(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]),{stick:n,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=n(579),i=function(){var e=l(),s=e.stick,n=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:n,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},2168:function(e,s,n){var c=n(9490),r=n(579),l=function(e){var s=e.title,n=e.titleTemplate,l=e.description;return(0,r.jsx)(c.vd,{children:(0,r.jsxs)(c.mg,{children:[(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsxs)("title",{children:[s," | ",n]}),(0,r.jsx)("meta",{name:"description",content:l})]})})};l.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},s.A=l},8606:function(e,s,n){var c=n(5043),r=n(7766),l=n(3854),a=n(6998),i=n(579);s.A=function(e){var s=e.children,n=e.headerContainerClass,o=e.headerTop,t=e.headerBorderStyle,d=e.headerPaddingClass;return(0,i.jsxs)(c.Fragment,{children:[(0,i.jsx)(r.A,{layout:n,top:o,borderStyle:t,headerPaddingClass:d}),s,(0,i.jsx)(l.A,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-gray",footerLogo:"/assets/img/logo/logo.png"}),(0,i.jsx)(a.A,{})]})}},9010:function(e,s,n){n.r(s);var c=n(5043),r=n(5475),l=n(2168),a=n(8606),i=n(8902),o=n(579);s.default=function(){return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)(l.A,{titleTemplate:"Grid Banner Home",description:"Grid banner home of flone react minimalist eCommerce template."}),(0,o.jsxs)(a.A,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,o.jsx)("div",{className:"product-area hm6-section-padding pb-80",children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-1.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 text-center position-1",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4 price-4-center",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-3.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 text-center position-1",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-4.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 text-center position-3",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-2.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 product-content-center position-2",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-5.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 product-content-center position-2",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-6.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 product-content-center position-2",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-7.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 product-content-center position-2",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})}),(0,o.jsx)("div",{className:"col-lg-3",children:(0,o.jsxs)("div",{className:"product-wrap-4 mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/product/hm6-pro-8.jpg",alt:""})}),(0,o.jsxs)("div",{className:"product-content-4 product-content-center position-2",children:[(0,o.jsx)("h4",{children:(0,o.jsxs)(r.N_,{to:"/conejillo/shop-grid-standard",children:["T- Shirt And ",(0,o.jsx)("br",{}),"Jeans"]})}),(0,o.jsxs)("div",{className:"price-4",children:[(0,o.jsx)("span",{children:"$ 60.00"}),(0,o.jsx)("span",{className:"old",children:"$ 80.00"})]})]})]})})]})})}),(0,o.jsx)(i.A,{spaceBottomClass:"pb-100"})]})]})}},3854:function(e,s,n){var c=n(3024),r=n(5475),l=n(579);s.A=function(e){var s=e.backgroundColorClass,n=e.copyrightColorClass,a=e.spaceLeftClass,i=e.spaceRightClass,o=e.footerTopBackgroundColorClass,t=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,h=e.footerLogo,j=e.backgroundImage;return(0,l.jsxs)("footer",{className:(0,c.A)("footer-area",s,a,i,j&&"bg-img"),style:{backgroundImage:" ".concat(j?"url(".concat("/conejillo"+j,")"):"url()")},children:[(0,l.jsx)("div",{className:(0,c.A)("footer-top text-center",o,t,d),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(r.N_,{to:"/conejillo",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+"".concat(h||"/assets/img/logo/logo.png")})})}),(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,l.jsx)("div",{className:"footer-social",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",children:(0,l.jsx)("i",{className:"fa fa-facebook"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.dribbble.com",children:(0,l.jsx)("i",{className:"fa fa-dribbble"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.pinterest.com",children:(0,l.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",children:(0,l.jsx)("i",{className:"fa fa-twitter"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.linkedin.com",children:(0,l.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,l.jsx)("div",{className:"footer-bottom text-center",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:(0,c.A)("copyright-2",n),children:(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},7766:function(e,s,n){n.d(s,{A:function(){return x}});var c=n(5544),r=n(5043),l=n(3024),a=(n(3188),n(3189)),i=n(5911),o=n(3032),t=n(5173),d=n.n(t),h=n(9456),j=(n(3468),function(e){e.borderStyle,(0,h.d4)((function(e){return e.currency}))});j.propTypes={borderStyle:d().string};var u=j,m=n(579),x=function(e){var s=e.layout,n=e.top,t=e.borderStyle,d=e.headerPaddingClass,h=e.headerPositionClass,j=e.headerBgClass,x=(0,r.useState)(0),p=(0,c.A)(x,2),f=p[0],g=p[1],v=(0,r.useState)(0),N=(0,c.A)(v,2),b=N[0],w=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){g(window.scrollY)};return(0,m.jsxs)("header",{className:(0,l.A)("header-area clearfix",j,h),children:[(0,m.jsx)("div",{className:(0,l.A)("header-top-area",d,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===t&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(u,{borderStyle:t})})}),(0,m.jsxs)("div",{className:(0,l.A)(d,"sticky-bar header-res-padding clearfix",f>b&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,m.jsx)(a.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(i.A,{})})]})}),(0,m.jsx)(o.A,{})]})]})}},8902:function(e,s,n){var c=n(3024),r=n(4943),l=n(579);s.A=function(e){var s=e.spaceTopClass,n=e.spaceBottomClass,a=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,c.A)("subscribe-area-3",s,n),children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,l.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,l.jsx)("h2",{children:"Subscribe "}),(0,l.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,l.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})}}}]);
//# sourceMappingURL=9010.243d3ac3.chunk.js.map