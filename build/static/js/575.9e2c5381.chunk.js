"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[575],{8032:function(e,s,l){l.d(s,{A:function(){return t}});var n=l(5544),i=l(3024),a=l(5043),r=function(e){var s=new Date(e).getTime(),l=(0,a.useState)(s-(new Date).getTime()),i=(0,n.A)(l,2),r=i[0],c=i[1];return(0,a.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){c(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},c=l(579),o=function(e){var s=e.value,l=e.type;return(0,c.jsxs)("span",{className:"cdown",children:[s," ",(0,c.jsx)("p",{children:l})]})},t=function(e){var s=e.date,l=e.className,a=r(s),t=(0,n.A)(a,4),d=t[0],h=t[1],m=t[2],j=t[3];return(0,c.jsxs)("div",{className:(0,i.A)("timer timer-style",l),children:[(0,c.jsx)(o,{value:d,type:"days"}),(0,c.jsx)(o,{value:h,type:"hours"}),(0,c.jsx)(o,{value:m,type:"minutes"}),(0,c.jsx)(o,{value:j,type:"secs"})]})}},6801:function(e,s,l){var n=l(3024),i=l(5475),a=l(579);s.A=function(e){var s=e.footerLogo,l=e.spaceBottomClass,r=e.colorClass;return(0,a.jsxs)("div",{className:(0,n.A)("copyright",l,r),children:[(0,a.jsx)("div",{className:"footer-logo",children:(0,a.jsx)(i.N_,{to:"/conejillo/",children:(0,a.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,a.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,a.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,a.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,l){l.d(s,{A:function(){return a}});var n=l(3024),i=(l(9735),l(579)),a=function(e){var s=e.spaceBottomClass,l=e.spaceLeftClass,a=e.sideMenu,r=e.colorClass,c=e.widgetColorClass;return(0,i.jsxs)("div",{className:(0,n.A)("footer-widget",s,a?"ml-ntv5":l,c),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"CONEJILLO"})}),(0,i.jsx)("div",{className:(0,n.A)("subscribe-style",r),children:(0,i.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},3188:function(e,s,l){var n=l(3024),i=l(5475),a=l(579);s.A=function(e){var s=e.imageUrl,l=e.logoClass;return(0,a.jsx)("div",{className:(0,n.A)(l),children:(0,a.jsx)(i.N_,{to:"/conejillo/",children:(0,a.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3189:function(e,s,l){var n=l(5475),i=l(4117),a=l(3024),r=l(579);s.A=function(e){var s=e.menuWhiteClass,l=e.sidebarMenu,c=(0,i.Bd)().t;return(0,r.jsx)("div",{className:(0,a.A)(l?"sidebar-menu":"main-menu ".concat(s||"")),children:(0,r.jsx)("div",{className:"logo-container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/conejillo/",children:c("Inicio")})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/conejillo/shop-grid-standard",children:c("Cat\xe1logo")})}),(0,r.jsx)(n.N_,{to:"/conejillo/",children:(0,r.jsx)("img",{src:"/conejillo/assets/img/logo/logo.png",alt:"Logo"})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/conejillo/contact",children:c("Contacto")})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/conejillo/blog-details-standard",children:c("Blog")})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.N_,{to:"/conejillo/cart",children:c("Carritoxd")})})]})})})})}},3468:function(e,s,l){var n=l(9456),i=l(4117),a=l(1682),r=l(579);s.A=function(e){var s=e.currency,l=(0,i.Bd)().i18n,c=(0,n.wA)(),o=function(e){var s=e.target.value;l.changeLanguage(s)},t=function(e){var s=e.target.value;c((0,a.M)(s))};return(0,r.jsxs)("div",{className:"language-currency-wrap",children:[(0,r.jsxs)("div",{className:"same-language-currency language-style",children:[(0,r.jsxs)("span",{children:["en"===l.resolvedLanguage?"Espanol":"fn"===l.resolvedLanguage?"French":"de"===l.resolvedLanguage?"Germany":""," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"en",onClick:function(e){return o(e)},children:"English"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"fn",onClick:function(e){return o(e)},children:"French"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"de",onClick:function(e){return o(e)},children:"Germany"})})]})})]}),(0,r.jsxs)("div",{className:"same-language-currency use-style",children:[(0,r.jsxs)("span",{children:[s.currencyName," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us 3965410"})})]})}},5371:function(e,s,l){var n=l(5475),i=l(579);s.A=function(e){var s=e.data;return(0,i.jsx)("div",{className:"single-image",children:(0,i.jsx)(n.N_,{to:"/conejillo"+s.link,children:(0,i.jsx)("img",{src:"/conejillo"+s.image,alt:""})})})}},7194:function(e,s,l){var n=l(3024),i=l(579);s.A=function(e){var s=e.titleText,l=e.subtitleText,a=e.positionClass,r=e.spaceClass,c=e.borderClass;return(0,i.jsxs)("div",{className:(0,n.A)("section-title-8",a,r,c),children:[(0,i.jsx)("h2",{children:s}),(0,i.jsx)("p",{children:l})]})}},8062:function(e,s,l){var n=l(5043),i=l(7766),a=l(5896),r=l(6998),c=l(579);s.A=function(e){var s=e.children,l=e.headerContainerClass,o=e.headerTop,t=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(i.A,{layout:l,top:o,headerPaddingClass:t,headerPositionClass:d}),s,(0,c.jsx)(a.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(r.A,{})]})}},1730:function(e,s,l){var n=l(3024),i=l(5475),a=l(8032),r=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass,c=e.bgImg,o=e.image,t=e.dateTime;return(0,r.jsx)("div",{className:(0,n.A)("funfact-area",s,l),style:{backgroundImage:"url(".concat("/conejillo"+c,")")},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-lg-6 mb-md-5",children:(0,r.jsxs)("div",{className:"funfact-content funfact-content--style2 text-center",children:[(0,r.jsx)("h2",{children:"Deal of the day"}),(0,r.jsx)("div",{className:"timer",children:(0,r.jsx)(a.A,{date:t})}),(0,r.jsx)("div",{className:"funfact-btn funfact-btn-brown btn-hover",children:(0,r.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"funfact-image text-center text-lg-end",children:(0,r.jsx)("img",{src:"/conejillo"+o,alt:"",className:"img-fluid"})})})]})})})}},5896:function(e,s,l){var n=l(3024),i=l(5475),a=l(6801),r=l(2304),c=l(579);s.A=function(e){var s=e.backgroundColorClass,l=e.spaceTopClass,o=e.spaceBottomClass,t=e.spaceLeftClass,d=e.spaceRightClass,h=e.containerClass,m=e.extraFooterClass,j=e.sideMenu;return(0,c.jsx)("footer",{className:(0,n.A)("footer-area",s,l,o,m,t,d),children:(0,c.jsx)("div",{className:"".concat(h||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(a.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"Sobre Nosotros"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/about",children:"Sobre Nosotros"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/home-flower-shop",children:"Inicio"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:"Cat\xe1logo"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo/contact",children:"Contacto"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ENLACES"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo#/",children:"Mercado Libre"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.N_,{to:"/conejillo#/",children:"Amazon"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"S\xcdGUENOS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx/",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://www.instagram.com/conejillodecampo.mx02/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(r.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:j})})]})})})}},7766:function(e,s,l){l.d(s,{A:function(){return x}});var n=l(5544),i=l(5043),a=l(3024),r=(l(3188),l(3189)),c=l(5911),o=l(3032),t=l(5173),d=l.n(t),h=l(9456),m=(l(3468),function(e){e.borderStyle,(0,h.d4)((function(e){return e.currency}))});m.propTypes={borderStyle:d().string};var j=m,u=l(579),x=function(e){var s=e.layout,l=e.top,t=e.borderStyle,d=e.headerPaddingClass,h=e.headerPositionClass,m=e.headerBgClass,x=(0,i.useState)(0),g=(0,n.A)(x,2),f=g[0],v=g[1],p=(0,i.useState)(0),N=(0,n.A)(p,2),C=N[0],b=N[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return b(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){v(window.scrollY)};return(0,u.jsxs)("header",{className:(0,a.A)("header-area clearfix",m,h),children:[(0,u.jsx)("div",{className:(0,a.A)("header-top-area",d,"visible"===l?"d-none d-lg-block":"d-none","fluid-border"===t&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(j,{borderStyle:t})})}),(0,u.jsxs)("div",{className:(0,a.A)(d,"sticky-bar header-res-padding clearfix",f>C&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,u.jsx)(r.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(c.A,{})})]})}),(0,u.jsx)(o.A,{})]})]})}},4668:function(e,s,l){l.d(s,{A:function(){return o}});var n=l(7362),i=l(5371),a=JSON.parse('[{"id":"1","image":"/assets/img/image-slider/image-slider-6.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/image-slider/image-slider-7.jpg","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/image-slider/image-slider-8.jpg","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/image-slider/image-slider-9.jpg","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/image-slider/image-slider-10.jpg","link":"/shop-grid-standard"},{"id":"6","image":"/assets/img/image-slider/image-slider-11.jpg","link":"/shop-grid-standard"},{"id":"7","image":"/assets/img/image-slider/image-slider-12.jpg","link":"/shop-grid-standard"},{"id":"8","image":"/assets/img/image-slider/image-slider-13.jpg","link":"/shop-grid-standard"}]'),r=l(579),c={loop:!1,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:8}}},o=function(){return(0,r.jsx)("div",{className:"image-slider-area",children:(0,r.jsx)("div",{className:"image-slider-active",children:a&&(0,r.jsx)(n.A,{options:c,children:a.map((function(e,s){return(0,r.jsx)(n.q,{children:(0,r.jsx)(i.A,{data:e})},s)}))})})})}}}]);
//# sourceMappingURL=575.9e2c5381.chunk.js.map