"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2038],{6487:function(e,n,s){s.d(n,{A:function(){return i}});var l=s(9456),a=s(3024),r=(s(5043),s(5721),s(579)),i=function(e){var n=e.iconWhiteClass;(0,l.d4)((function(e){return e.compare})).compareItems,(0,l.d4)((function(e){return e.wishlist})).wishlistItems,(0,l.d4)((function(e){return e.cart})).cartItems;return(0,r.jsx)("div",{className:(0,a.A)("header-right-wrap",n),children:(0,r.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:(0,r.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:(0,r.jsx)("i",{className:"pe-7s-menu"})})})})}},3188:function(e,n,s){var l=s(3024),a=s(5475),r=s(579);n.A=function(e){var n=e.imageUrl,s=e.logoClass;return(0,r.jsx)("div",{className:(0,l.A)(s),children:(0,r.jsx)(a.N_,{to:"/conejillo/",children:(0,r.jsx)("img",{alt:"",src:"/conejillo"+n})})})}},4993:function(e,n,s){s.d(n,{A:function(){return u}});var l=s(5043),a=s(579),r=s(5475),i=s(4117),c=function(){var e=(0,i.Bd)().t;return(0,a.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(r.N_,{to:"/conejillo/home-flower-shop",children:e("Inicio")})}),(0,a.jsx)("li",{className:"menu-item-has-children",children:(0,a.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:e("Cat\xe1logo")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:e("colleccion")})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/contact",children:e("contacto")})})]})})},o=s(9456),t=(s(1682),function(){(0,i.Bd)().i18n,(0,o.wA)(),(0,o.d4)((function(e){return e.currency}))}),d=function(){return(0,a.jsxs)("div",{className:"offcanvas-widget-area",children:[(0,a.jsx)("div",{className:"off-canvas-contact-widget"}),(0,a.jsxs)("div",{className:"off-canvas-widget-social",children:[(0,a.jsx)("a",{href:"//facebook.com",title:"Facebook",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsx)("a",{href:"//instagram.com",title:"Instagram",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})]})]})},u=function(){(0,l.useEffect)((function(){for(var s=document.querySelector("#offcanvas-navigation"),l=s.querySelectorAll(".sub-menu"),a=s.querySelectorAll("a"),r=0;r<l.length;r++)l[r].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var i=s.querySelectorAll(".menu-expand"),c=i.length,o=0;o<c;o++)i[o].addEventListener("click",(function(n){e(n)}));for(var t=0;t<a.length;t++)a[t].addEventListener("click",(function(){n()}))}));var e=function(e){e.currentTarget.parentElement.classList.toggle("active")},n=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return(0,a.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[(0,a.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return n()},children:(0,a.jsx)("i",{className:"pe-7s-close"})}),(0,a.jsx)("div",{className:"offcanvas-wrapper",children:(0,a.jsxs)("div",{className:"offcanvas-inner-content",children:[(0,a.jsx)(c,{}),(0,a.jsx)(t,{}),(0,a.jsx)(d,{})]})})]})}},3189:function(e,n,s){var l=s(5475),a=s(4117),r=s(3024),i=s(579);n.A=function(e){var n=e.menuWhiteClass,s=e.sidebarMenu,c=(0,a.Bd)().t;return(0,i.jsx)("div",{className:(0,r.A)(s?"sidebar-menu":"main-menu ".concat(n||"")),children:(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/",children:c("Inicio")})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/shop-grid-standard",children:c("Cat\xe1logo")})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/shop-grid-standard",children:c("Coleccion")})}),(0,i.jsx)("li",{children:(0,i.jsxs)("ul",{className:"submenu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/blog-standard",children:c("blog_standard")})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/blog-no-sidebar",children:c("blog_no_sidebar")})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/blog-right-sidebar",children:c("blog_right_sidebar")})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/blog-details-standard",children:c("blog_details_standard")})})]})}),(0,i.jsx)("li",{children:(0,i.jsx)(l.N_,{to:"/conejillo/contact",children:c("Contacto")})})]})})})}},3468:function(e,n,s){var l=s(9456),a=s(4117),r=s(1682),i=s(579);n.A=function(e){var n=e.currency,s=(0,a.Bd)().i18n,c=(0,l.wA)(),o=function(e){var n=e.target.value;s.changeLanguage(n)},t=function(e){var n=e.target.value;c((0,r.M)(n))};return(0,i.jsxs)("div",{className:"language-currency-wrap",children:[(0,i.jsxs)("div",{className:"same-language-currency language-style",children:[(0,i.jsxs)("span",{children:["en"===s.resolvedLanguage?"Espanol":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"en",onClick:function(e){return o(e)},children:"English"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"fn",onClick:function(e){return o(e)},children:"French"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"de",onClick:function(e){return o(e)},children:"Germany"})})]})})]}),(0,i.jsxs)("div",{className:"same-language-currency use-style",children:[(0,i.jsxs)("span",{children:[n.currencyName," ",(0,i.jsx)("i",{className:"fa fa-angle-down"})]}),(0,i.jsx)("div",{className:"lang-car-dropdown",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,i.jsx)("div",{className:"same-language-currency",children:(0,i.jsx)("p",{children:"Call Us 3965410"})})]})}},4943:function(e,n,s){var l=s(3024),a=s(9735),r=s(579),i=function(e){var n,s=e.status,a=e.message,i=e.onValidated,c=e.spaceTopClass,o=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,l.A)("subscribe-form-3",c),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return n=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===s&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===s&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),"success"===s&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),(0,r.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){n&&n.value.indexOf("@")>-1&&i({EMAIL:n.value}),n.value=""},children:"SUBSCRIBE"})})]})})};n.A=function(e){var n=e.mailchimpUrl,s=e.spaceTopClass,l=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(a.A,{url:n,render:function(e){var n=e.subscribe,a=e.status,c=e.message;return(0,r.jsx)(i,{status:a,message:c,onValidated:function(e){return n(e)},spaceTopClass:s,subscribeBtnClass:l})}})})}},6998:function(e,n,s){s.d(n,{A:function(){return c}});var l=s(5544),a=s(5043),r=function(){var e=(0,a.useState)(!1),n=(0,l.A)(e,2),s=n[0],r=n[1];return(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[s]),{stick:s,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},i=s(579),c=function(){var e=r(),n=e.stick,s=e.onClickHandler;return n?(0,i.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:s,children:(0,i.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},2168:function(e,n,s){var l=s(9490),a=s(579),r=function(e){var n=e.title,s=e.titleTemplate,r=e.description;return(0,a.jsx)(l.vd,{children:(0,a.jsxs)(l.mg,{children:[(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsxs)("title",{children:[n," | ",s]}),(0,a.jsx)("meta",{name:"description",content:r})]})})};r.defaultProps={title:"Conejillo",titleTemplate:"Cat\xe1logo",description:"P\xe1gina del producto de la plantilla de comercio electr\xf3nico minimalista Flone React."},n.A=r},8606:function(e,n,s){var l=s(5043),a=s(7766),r=s(3854),i=s(6998),c=s(579);n.A=function(e){var n=e.children,s=e.headerContainerClass,o=e.headerTop,t=e.headerBorderStyle,d=e.headerPaddingClass;return(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)(a.A,{layout:s,top:o,borderStyle:t,headerPaddingClass:d}),n,(0,c.jsx)(r.A,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-gray",footerLogo:"/assets/img/logo/logo.png"}),(0,c.jsx)(i.A,{})]})}},3854:function(e,n,s){var l=s(3024),a=s(5475),r=s(579);n.A=function(e){var n=e.backgroundColorClass,s=e.copyrightColorClass,i=e.spaceLeftClass,c=e.spaceRightClass,o=e.footerTopBackgroundColorClass,t=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,u=e.footerLogo,h=e.backgroundImage;return(0,r.jsxs)("footer",{className:(0,l.A)("footer-area",n,i,c,h&&"bg-img"),style:{backgroundImage:" ".concat(h?"url(".concat("/conejillo"+h,")"):"url()")},children:[(0,r.jsx)("div",{className:(0,l.A)("footer-top text-center",o,t,d),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(a.N_,{to:"/conejillo",children:(0,r.jsx)("img",{alt:"",src:"/conejillo"+"".concat(u||"/assets/img/logo/logo.png")})})}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,r.jsx)("div",{className:"footer-social",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.facebook.com",children:(0,r.jsx)("i",{className:"fa fa-facebook"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.dribbble.com",children:(0,r.jsx)("i",{className:"fa fa-dribbble"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.pinterest.com",children:(0,r.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.twitter.com",children:(0,r.jsx)("i",{className:"fa fa-twitter"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.linkedin.com",children:(0,r.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,r.jsx)("div",{className:"footer-bottom text-center",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:(0,l.A)("copyright-2",s),children:(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},7766:function(e,n,s){s.d(n,{A:function(){return x}});var l=s(5544),a=s(5043),r=s(3024),i=s(3188),c=s(3189),o=s(6487),t=s(4993),d=s(5173),u=s.n(d),h=s(9456),f=(s(3468),function(e){e.borderStyle,(0,h.d4)((function(e){return e.currency}))});f.propTypes={borderStyle:u().string};var m=f,j=s(579),x=function(e){var n=e.layout,s=e.top,d=e.borderStyle,u=e.headerPaddingClass,h=e.headerPositionClass,f=e.headerBgClass,x=(0,a.useState)(0),g=(0,l.A)(x,2),v=g[0],b=g[1],p=(0,a.useState)(0),N=(0,l.A)(p,2),C=N[0],w=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){b(window.scrollY)};return(0,j.jsxs)("header",{className:(0,r.A)("header-area clearfix",f,h),children:[(0,j.jsx)("div",{className:(0,r.A)("header-top-area",u,"visible"===s?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,j.jsx)("div",{className:"container-fluid"===n?n:"container",children:(0,j.jsx)(m,{borderStyle:d})})}),(0,j.jsxs)("div",{className:(0,r.A)(u,"sticky-bar header-res-padding clearfix",v>C&&"stick"),children:[(0,j.jsx)("div",{className:"container-fluid"===n?n:"container",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,j.jsx)(i.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,j.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,j.jsx)(c.A,{})}),(0,j.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,j.jsx)(o.A,{})})]})}),(0,j.jsx)(t.A,{})]})]})}},8902:function(e,n,s){var l=s(3024),a=s(4943),r=s(579);n.A=function(e){var n=e.spaceTopClass,s=e.spaceBottomClass,i=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,l.A)("subscribe-area-3",n,s),children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,r.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,r.jsx)("h2",{children:"Subscribe "}),(0,r.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,r.jsx)(a.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:i})]})})})})})}}}]);
//# sourceMappingURL=2038.153727a9.chunk.js.map