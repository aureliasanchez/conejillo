"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[3456],{8032:function(e,s,a){a.d(s,{A:function(){return o}});var i=a(5544),n=a(3024),l=a(5043),r=function(e){var s=new Date(e).getTime(),a=(0,l.useState)(s-(new Date).getTime()),n=(0,i.A)(a,2),r=n[0],t=n[1];return(0,l.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){t(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},t=a(579),c=function(e){var s=e.value,a=e.type;return(0,t.jsxs)("span",{className:"cdown",children:[s," ",(0,t.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,l=r(s),o=(0,i.A)(l,4),d=o[0],m=o[1],u=o[2],h=o[3];return(0,t.jsxs)("div",{className:(0,n.A)("timer timer-style",a),children:[(0,t.jsx)(c,{value:d,type:"days"}),(0,t.jsx)(c,{value:m,type:"hours"}),(0,t.jsx)(c,{value:u,type:"minutes"}),(0,t.jsx)(c,{value:h,type:"secs"})]})}},3188:function(e,s,a){var i=a(3024),n=a(5475),l=a(579);s.A=function(e){var s=e.imageUrl,a=e.logoClass;return(0,l.jsx)("div",{className:(0,i.A)(a),children:(0,l.jsx)(n.N_,{to:"/conejillo/",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3468:function(e,s,a){var i=a(9456),n=a(4117),l=a(1682),r=a(579);s.A=function(e){var s=e.currency,a=(0,n.Bd)().i18n,t=(0,i.wA)(),c=function(e){var s=e.target.value;a.changeLanguage(s)},o=function(e){var s=e.target.value;t((0,l.M)(s))};return(0,r.jsxs)("div",{className:"language-currency-wrap",children:[(0,r.jsxs)("div",{className:"same-language-currency language-style",children:[(0,r.jsxs)("span",{children:["en"===a.resolvedLanguage?"Espanol":"fn"===a.resolvedLanguage?"French":"de"===a.resolvedLanguage?"Germany":""," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"en",onClick:function(e){return c(e)},children:"English"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"fn",onClick:function(e){return c(e)},children:"French"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"de",onClick:function(e){return c(e)},children:"Germany"})})]})})]}),(0,r.jsxs)("div",{className:"same-language-currency use-style",children:[(0,r.jsxs)("span",{children:[s.currencyName," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us 3965410"})})]})}},4943:function(e,s,a){var i=a(3024),n=a(9735),l=a(579),r=function(e){var s,a=e.status,n=e.message,r=e.onValidated,t=e.spaceTopClass,c=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-form-3",t),children:(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,l.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,l.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,i=e.subscribeBtnClass;return(0,l.jsx)("div",{children:(0,l.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,n=e.status,t=e.message;return(0,l.jsx)(r,{status:n,message:t,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:i})}})})}},9707:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.titleText,a=e.positionClass,l=e.spaceClass,r=e.colorClass;return(0,n.jsx)("div",{className:(0,i.A)("section-title-5",a,l),children:(0,n.jsx)("h2",{className:(0,i.A)(r),children:s})})}},3100:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.data,a=e.testimonialClass;return(0,n.jsxs)("div",{className:(0,i.A)(a||"single-testimonial","text-center"),children:[(0,n.jsx)("img",{src:"/conejillo"+s.image,alt:""}),(0,n.jsx)("p",{children:s.content}),(0,n.jsxs)("div",{className:"client-info",children:[(0,n.jsx)("i",{className:"fa fa-map-signs"}),(0,n.jsx)("h5",{children:s.customerName}),(0,n.jsx)("span",{children:s.title})]})]})}},8606:function(e,s,a){var i=a(5043),n=a(7766),l=a(3854),r=a(6998),t=a(579);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerBorderStyle,d=e.headerPaddingClass;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(n.A,{layout:a,top:c,borderStyle:o,headerPaddingClass:d}),s,(0,t.jsx)(l.A,{backgroundColorClass:"footer-white",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",footerTopBackgroundColorClass:"bg-gray-2",footerTopSpaceTopClass:"pt-80",footerTopSpaceBottomClass:"pb-60",copyrightColorClass:"copyright-gray",footerLogo:"/assets/img/logo/logo.png"}),(0,t.jsx)(r.A,{})]})}},3456:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});var i=a(5043),n=a(2168),l=a(8606),r=a(3024),t=a(8906),c=a(7362),o=JSON.parse('[{"id":1,"title":"Natural & Healthy","subtitle":"100% Organic Fruits Collection","image":"/assets/img/slider/slider-8.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Natural & Healthy","subtitle":"100% Organic Veg Collection","image":"/assets/img/slider/slider-8-2.jpg","url":"/shop-grid-standard"}]'),d=a(5475),m=a(579),u=function(e){var s=e.data;return(0,m.jsx)("div",{className:"single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat("/conejillo"+s.image,")")},children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7 ms-auto",children:(0,m.jsxs)("div",{className:"slider-content-2 slider-content-fruits slider-animated-1",children:[(0,m.jsx)("h3",{className:"animated",children:s.title}),(0,m.jsx)("h1",{className:"animated",children:s.subtitle}),(0,m.jsx)("div",{className:"slider-btn btn-hover",children:(0,m.jsx)(d.N_,{className:"animated",to:"/conejillo"+s.url,children:"SHOP NOW"})})]})})})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[t._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},j=function(e){var s=e.spaceLeftClass,a=e.spaceRightClass;return(0,m.jsx)("div",{className:(0,r.A)("slider-area",s,a),children:(0,m.jsx)("div",{className:"slider-active nav-style-1",children:o&&(0,m.jsx)(c.A,{options:h,children:o.map((function(e,s){return(0,m.jsx)(c.q,{children:(0,m.jsx)(u,{data:e})},s)}))})})})},x=a(900),p=a(3987),g=function(){return(0,m.jsx)("div",{className:"banner-area hm9-section-padding",children:(0,m.jsx)("div",{className:"container-fluid",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"single-banner mb-20",children:[(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/banner-21.png",alt:""})}),(0,m.jsxs)("div",{className:"banner-content-3 banner-position-hm15-1",children:[(0,m.jsx)("h3",{children:"Green Apple "}),(0,m.jsxs)("p",{children:["Starting At ",(0,m.jsx)("span",{children:"$99.00"})]}),(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})}),(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"single-banner mb-20",children:[(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/banner-22.png",alt:""})}),(0,m.jsxs)("div",{className:"banner-content-3 banner-position-hm15-1",children:[(0,m.jsx)("h3",{children:"Ripe orange"}),(0,m.jsxs)("p",{children:["Starting At ",(0,m.jsx)("span",{children:"$99.00"})]}),(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"single-banner mb-20",children:[(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/banner-23.png",alt:""})}),(0,m.jsxs)("div",{className:"banner-content-4 banner-position-hm15-2",children:[(0,m.jsx)("span",{children:"-20% Off"}),(0,m.jsx)("h2",{children:"New Fruits"}),(0,m.jsx)("h5",{children:"Best for your health"}),(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,m.jsxs)("div",{className:"single-banner mb-20",children:[(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/banner-24.png",alt:""})}),(0,m.jsxs)("div",{className:"banner-content-3 banner-position-hm15-2",children:[(0,m.jsx)("h3",{children:"Ripe Corn "}),(0,m.jsxs)("p",{children:["Starting At ",(0,m.jsx)("span",{children:"$99.00"})]}),(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})}),(0,m.jsx)("div",{className:"col-lg-12 col-md-6",children:(0,m.jsxs)("div",{className:"single-banner mb-20",children:[(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/banner-25.png",alt:""})}),(0,m.jsxs)("div",{className:"banner-content-3 banner-position-hm15-2",children:[(0,m.jsx)("h3",{children:"Green guava "}),(0,m.jsxs)("p",{children:["Starting At ",(0,m.jsx)("span",{children:"$99.00"})]}),(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})})]})})]})})})},f=a(8032),v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.dateTime;return(0,m.jsx)("div",{className:(0,r.A)("funfact-area",s,a),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"row align-items-center",children:[(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,m.jsx)("h2",{children:"Deal of the day"}),(0,m.jsx)("div",{className:"timer",children:(0,m.jsx)(f.A,{date:i})}),(0,m.jsx)("div",{className:"funfact-btn funfact-btn-green btn-hover",children:(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,m.jsx)("div",{className:"col-md-6",children:(0,m.jsx)("div",{className:"fruits-deal-img",children:(0,m.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,m.jsx)("img",{src:"/conejillo/assets/img/banner/deal.png",alt:""})})})})]})})})},N=a(4344),b=a(8902),C=function(){return(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(n.A,{titleTemplate:"Organic Food Home",description:"Organic food home of flone react minimalist eCommerce template."}),(0,m.jsxs)(l.A,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,m.jsx)(j,{spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,m.jsx)(x.A,{spaceTopClass:"pt-10",spaceBottomClass:"pb-90",containerClass:"container-fluid",gutterClass:"padding-10-row-col"}),(0,m.jsx)(p.A,{spaceBottomClass:"pb-100",category:"organic food",productTabClass:"product-tab-fruits"}),(0,m.jsx)(g,{}),(0,m.jsx)(v,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",dateTime:"November 13, 2023 12:12:00"}),(0,m.jsx)(N.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,m.jsx)(b.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"green-subscribe"})]})]})}},900:function(e,s,a){a.d(s,{A:function(){return t}});var i=a(3024),n=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),l=a(579),r=function(e){var s=e.data,a=e.spaceBottomClass;return(0,l.jsxs)("div",{className:(0,i.A)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,l.jsx)("div",{className:"support-icon-2",children:(0,l.jsx)("img",{className:"animated",src:"/conejillo"+s.iconImage,alt:""})}),(0,l.jsxs)("div",{className:"support-content-3",children:[(0,l.jsx)("img",{src:"/conejillo"+s.titleImage,alt:""}),(0,l.jsx)("p",{children:s.title})]})]})},t=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,l.jsx)("div",{className:(0,i.A)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat("/conejillo"+d,")")}:{},children:(0,l.jsx)("div",{className:(0,i.A)(t,c),children:(0,l.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e,s){return(0,l.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,l.jsx)(r,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},3854:function(e,s,a){var i=a(3024),n=a(5475),l=a(579);s.A=function(e){var s=e.backgroundColorClass,a=e.copyrightColorClass,r=e.spaceLeftClass,t=e.spaceRightClass,c=e.footerTopBackgroundColorClass,o=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,m=e.footerLogo,u=e.backgroundImage;return(0,l.jsxs)("footer",{className:(0,i.A)("footer-area",s,r,t,u&&"bg-img"),style:{backgroundImage:" ".concat(u?"url(".concat("/conejillo"+u,")"):"url()")},children:[(0,l.jsx)("div",{className:(0,i.A)("footer-top text-center",c,o,d),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(n.N_,{to:"/conejillo",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+"".concat(m||"/assets/img/logo/logo.png")})})}),(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,l.jsx)("div",{className:"footer-social",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",children:(0,l.jsx)("i",{className:"fa fa-facebook"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.dribbble.com",children:(0,l.jsx)("i",{className:"fa fa-dribbble"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.pinterest.com",children:(0,l.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",children:(0,l.jsx)("i",{className:"fa fa-twitter"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.linkedin.com",children:(0,l.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,l.jsx)("div",{className:"footer-bottom text-center",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:(0,i.A)("copyright-2",a),children:(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},7766:function(e,s,a){a.d(s,{A:function(){return p}});var i=a(5544),n=a(5043),l=a(3024),r=a(3188),t=a(3189),c=a(6487),o=a(4993),d=a(5173),m=a.n(d),u=a(9456),h=(a(3468),function(e){e.borderStyle,(0,u.d4)((function(e){return e.currency}))});h.propTypes={borderStyle:m().string};var j=h,x=a(579),p=function(e){var s=e.layout,a=e.top,d=e.borderStyle,m=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,p=(0,n.useState)(0),g=(0,i.A)(p,2),f=g[0],v=g[1],N=(0,n.useState)(0),b=(0,i.A)(N,2),C=b[0],A=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){v(window.scrollY)};return(0,x.jsxs)("header",{className:(0,l.A)("header-area clearfix",h,u),children:[(0,x.jsx)("div",{className:(0,l.A)("header-top-area",m,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsx)(j,{borderStyle:d})})}),(0,x.jsxs)("div",{className:(0,l.A)(m,"sticky-bar header-res-padding clearfix",f>C&&"stick"),children:[(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,x.jsx)(r.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,x.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,x.jsx)(t.A,{})}),(0,x.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,x.jsx)(c.A,{})})]})}),(0,x.jsx)(o.A,{})]})]})}},8902:function(e,s,a){var i=a(3024),n=a(4943),l=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,r=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-area-3",s,a),children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,l.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,l.jsx)("h2",{children:"Subscribe "}),(0,l.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,l.jsx)(n.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},861:function(e,s,a){a.d(s,{A:function(){return x}});var i=a(5043),n=a(9456),l=a(2821),r=a(5544),t=a(5475),c=a(3024),o=a(425),d=a(5721),m=a(4990),u=a(3492),h=a(579),j=function(e){var s=e.product,a=e.currency,j=e.cartItem,x=e.wishlistItem,p=e.compareItem,g=e.spaceBottomClass,f=e.colorClass,v=e.titlePriceClass,N=(0,i.useState)(!1),b=(0,r.A)(N,2),C=b[0],A=b[1],y=(0,l.do)(s.price,s.discount),w=+(s.price*a.currencyRate).toFixed(2),k=+(y*a.currencyRate).toFixed(2),S=(0,n.wA)();return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsxs)("div",{className:(0,c.A)("product-wrap-2",g,f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==j&&j.quantity>0?"active":"",disabled:void 0!==j&&j.quantity>0,title:void 0!==j?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return A(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(v||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==y?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+w})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+w," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:C,onHide:function(){return A(!1)},product:s,currency:a,discountedPrice:y,finalProductPrice:w,finalDiscountedPrice:k,wishlistItem:x,compareItem:p})]})},x=function(e){var s=e.spaceBottomClass,a=e.colorClass,r=e.titlePriceClass,t=e.category,c=e.type,o=e.limit,d=(0,n.d4)((function(e){return e.product})).products,m=(0,n.d4)((function(e){return e.currency})),u=(0,n.d4)((function(e){return e.cart})).cartItems,x=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,n.d4)((function(e){return e.compare})).compareItems,g=(0,l.d$)(d,t,c,o);return(0,h.jsx)(i.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(j,{spaceBottomClass:s,colorClass:a,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:x.find((function(s){return s.id===e.id})),compareItem:p.find((function(s){return s.id===e.id})),titlePriceClass:r})},e.id)}))})}},3987:function(e,s,a){var i=a(3024),n=a(5475),l=a(3702),r=a(7580),t=a(9707),c=a(861),o=a(579);s.A=function(e){var s=e.spaceBottomClass,a=e.category,d=e.productTabClass;return(0,o.jsx)("div",{className:(0,i.A)("product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(t.A,{titleText:"Featured Product",positionClass:"text-center"}),(0,o.jsxs)(l.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(r.A,{variant:"pills",className:(0,i.A)("product-tab-list pt-35 pb-60 text-center",d),children:[(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(l.A.Content,{children:[(0,o.jsx)(l.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(l.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(l.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,o.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,o.jsx)(n.N_,{className:"loadMore6",to:"/conejillo/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},4344:function(e,s,a){var i=a(3024),n=a(7362),l=a(5672),r=a(3100),t=a(579),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.bgColorClass,u=e.testimonialClass;return(0,t.jsx)("div",{className:(0,i.A)("testimonial-area",s,a,o,d,m),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,t.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:l&&(0,t.jsx)(n.A,{options:c,children:l.map((function(e,s){return(0,t.jsx)(n.q,{children:(0,t.jsx)(r.A,{data:e,testimonialClass:u})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=3456.174914cf.chunk.js.map