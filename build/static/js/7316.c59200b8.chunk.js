"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[7316],{6487:function(e,n,s){s.d(n,{A:function(){return c}});var l=s(9456),i=s(3024),a=(s(5043),s(5721),s(579)),c=function(e){var n=e.iconWhiteClass;(0,l.d4)((function(e){return e.compare})).compareItems,(0,l.d4)((function(e){return e.wishlist})).wishlistItems,(0,l.d4)((function(e){return e.cart})).cartItems;return(0,a.jsx)("div",{className:(0,i.A)("header-right-wrap",n),children:(0,a.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,a.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,a.jsx)("i",{className:"pe-7s-menu"})})})})}},3188:function(e,n,s){var l=s(3024),i=s(5475),a=s(579);n.A=function(e){var n=e.imageUrl,s=e.logoClass;return(0,a.jsx)("div",{className:(0,l.A)(s),children:(0,a.jsx)(i.N_,{to:"/conejillo/",children:(0,a.jsx)("img",{alt:"",src:"/conejillo"+n})})})}},4993:function(e,n,s){s.d(n,{A:function(){return u}});var l=s(5043),i=s(579),a=s(5475),c=s(4117),r=function(){var e=(0,c.Bd)().t;return(0,i.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:"menu-item-has-children",children:(0,i.jsx)(a.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,i.jsx)("li",{className:"menu-item-has-children",children:(0,i.jsx)(a.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,i.jsx)("li",{children:(0,i.jsx)(a.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},o=s(9456),t=(s(1682),function(){(0,c.Bd)().i18n,(0,o.wA)(),(0,o.d4)((function(e){return e.currency}))}),d=function(){return(0,i.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,i.jsx)("div",{className:"off-canvas-contact-widget"}),(0,i.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,i.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx",title:"Facebook",children:(0,i.jsx)("i",{className:"fa fa-facebook"})}),(0,i.jsx)("a",{href:"https://www.instagram.com/conejillodecampo_pachuca/",title:"Instagram",children:(0,i.jsx)("i",{className:"fa fa-instagram"})})]})]})},u=function(){(0,l.useEffect)((function(){for(var s=document.querySelector("#offcanvas-navigation"),l=s.querySelectorAll(".sub-menu"),i=s.querySelectorAll("a"),a=0;a<l.length;a++)l[a].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var c=s.querySelectorAll(".menu-expand"),r=c.length,o=0;o<r;o++)c[o].addEventListener("click",(function(n){e(n)}));for(var t=0;t<i.length;t++)i[t].addEventListener("click",(function(){n()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},n=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,i.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,i.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return n()},children:(0,i.jsx)("i",{className:"pe-7s-close"})}),(0,i.jsx)("div",{className:"offcanvas-wrapper",children:(0,i.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,i.jsx)(r,{}),(0,i.jsx)(t,{}),(0,i.jsx)(d,{})]})})]})}},3189:function(e,n,s){var l=s(5475),i=s(4117),a=s(3024),c=s(579);n.A=function(e){var n=e.menuWhiteClass,s=e.sidebarMenu,r=(0,i.Bd)().t;return(0,c.jsx)("div",{className:(0,a.A)(s?"sidebar-menu":"main-menu ".concat(n||"")),children:(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/",children:r("Inicio")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/shop-grid-standard",children:r("Cat\xe1logo")})}),(0,c.jsx)("li",{children:(0,c.jsxs)("ul",{className:"submenu",children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/blog-standard",children:r("blog_standard")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/blog-no-sidebar",children:r("blog_no_sidebar")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/blog-right-sidebar",children:r("blog_right_sidebar")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/blog-details-standard",children:r("blog_details_standard")})})]})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/contact",children:r("Contacto")})})]})})})}},3468:function(e,n,s){var l=s(9456),i=s(4117),a=s(1682),c=s(579);n.A=function(e){var n=e.currency,s=(0,i.Bd)().i18n,r=(0,l.wA)(),o=function(e){var n=e.target.value;s.changeLanguage(n)},t=function(e){var n=e.target.value;r((0,a.M)(n))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===s.resolvedLanguage?"Espanol":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return o(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return o(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return o(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[n.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},2168:function(e,n,s){var l=s(9490),i=s(579),a=function(e){var n=e.title,s=e.titleTemplate,a=e.description;return(0,i.jsx)(l.vd,{children:(0,i.jsxs)(l.mg,{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsxs)("title",{children:[n," | ",s]}),(0,i.jsx)("meta",{name:"description",content:a})]})})};a.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},n.A=a},7316:function(e,n,s){s.r(n),s.d(n,{default:function(){return u}});var l=s(9379),i=s(5043),a=s(5475),c=s(2168),r=JSON.parse('[{"id":"1","title":"2020 Fashion For Womens","subtitle":"-20% Spring <br /> Snickers","image":"/assets/img/slider/hm-11-2.png","url":"/shop-grid-standard"},{"id":"2","title":"2020 Fashion For Womens","subtitle":"-30% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-2.png","url":"/shop-grid-standard"},{"id":"3","title":"2020 Fashion For Womens","subtitle":"-40% Spring <br /> Shoes","image":"/assets/img/slider/single-slide-7.png","url":"/shop-grid-standard"}]'),o=s(9652),t=s(7766),d=s(579),u=function(){var e=[];r.forEach((function(n){e.push(n.id)}));var n={activeClass:"active",anchors:e,arrowNavigation:!1,className:"SectionsContainer",delay:1e3,navigation:!0,scrollBar:!1,sectionClassName:"Section",sectionPaddingTop:"0",sectionPaddingBottom:"0",verticalAlign:!0};return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(c.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,d.jsxs)("div",{className:"fullpage-slider-wrapper",children:[(0,d.jsx)(o.Header,{children:(0,d.jsx)(t.A,{layout:"container-fluid",headerPaddingClass:"header-padding-1",headerBgClass:"bg-white"})}),(0,d.jsx)(o.SectionsContainer,(0,l.A)((0,l.A)({},n),{},{className:"bg-purple-2",children:r&&r.map((function(e,n){return(0,d.jsx)(o.Section,{children:(0,d.jsx)("div",{className:"slider-section flone-fp-section",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row fullpage-slider-wrap-mrg",children:[(0,d.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center",children:(0,d.jsxs)("div",{className:"slider-content-11 slider-animated-1 fullpage-slider-mrg fullpage-content",children:[(0,d.jsx)("h3",{className:"animated",children:e.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:e.subtitle}}),(0,d.jsx)("div",{className:"slider-btn-11 btn-hover",children:(0,d.jsx)(a.N_,{className:"animated",to:"/conejillo"+e.url,children:"SHOP NOW"})})]})}),(0,d.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-12",children:(0,d.jsx)("div",{className:"slider12-img-1 slider-animated-1",children:(0,d.jsx)("img",{className:"animated",alt:"",src:"/conejillo"+e.image})})})]})})})},n)}))}))]})]})}},7766:function(e,n,s){s.d(n,{A:function(){return g}});var l=s(5544),i=s(5043),a=s(3024),c=s(3188),r=s(3189),o=s(6487),t=s(4993),d=s(5173),u=s.n(d),m=s(9456),h=(s(3468),function(e){e.borderStyle,(0,m.d4)((function(e){return e.currency}))});h.propTypes={borderStyle:u().string};var j=h,f=s(579),g=function(e){var n=e.layout,s=e.top,d=e.borderStyle,u=e.headerPaddingClass,m=e.headerPositionClass,h=e.headerBgClass,g=(0,i.useState)(0),x=(0,l.A)(g,2),v=x[0],p=x[1],N=(0,i.useState)(0),b=(0,l.A)(N,2),w=b[0],C=b[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){p(window.scrollY)};return(0,f.jsxs)("header",{className:(0,a.A)("header-area clearfix",h,m),children:[(0,f.jsx)("div",{className:(0,a.A)("header-top-area",u,"visible"===s?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,f.jsx)("div",{className:"container-fluid"===n?n:"container",children:(0,f.jsx)(j,{borderStyle:d})})}),(0,f.jsxs)("div",{className:(0,a.A)(u,"sticky-bar header-res-padding clearfix",v>w&&"stick"),children:[(0,f.jsx)("div",{className:"container-fluid"===n?n:"container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,f.jsx)(c.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,f.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,f.jsx)(r.A,{})}),(0,f.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,f.jsx)(o.A,{})})]})}),(0,f.jsx)(t.A,{})]})]})}}}]);
//# sourceMappingURL=7316.c59200b8.chunk.js.map