"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4490],{8032:function(e,s,i){i.d(s,{A:function(){return o}});var a=i(5544),l=i(3024),t=i(5043),n=function(e){var s=new Date(e).getTime(),i=(0,t.useState)(s-(new Date).getTime()),l=(0,a.A)(i,2),n=l[0],c=l[1];return(0,t.useEffect)((function(){if(!(n<=0)){var e=setInterval((function(){c(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,n]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(n)},c=i(579),r=function(e){var s=e.value,i=e.type;return(0,c.jsxs)("span",{className:"cdown",children:[s," ",(0,c.jsx)("p",{children:i})]})},o=function(e){var s=e.date,i=e.className,t=n(s),o=(0,a.A)(t,4),d=o[0],m=o[1],u=o[2],h=o[3];return(0,c.jsxs)("div",{className:(0,l.A)("timer timer-style",i),children:[(0,c.jsx)(r,{value:d,type:"days"}),(0,c.jsx)(r,{value:m,type:"hours"}),(0,c.jsx)(r,{value:u,type:"minutes"}),(0,c.jsx)(r,{value:h,type:"secs"})]})}},6801:function(e,s,i){var a=i(3024),l=i(5475),t=i(579);s.A=function(e){var s=e.footerLogo,i=e.spaceBottomClass,n=e.colorClass;return(0,t.jsxs)("div",{className:(0,a.A)("copyright",i,n),children:[(0,t.jsx)("div",{className:"footer-logo",children:(0,t.jsx)(l.N_,{to:"/conejillo/",children:(0,t.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,t.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,t.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,t.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,i){i.d(s,{A:function(){return t}});var a=i(3024),l=(i(9735),i(579)),t=function(e){var s=e.spaceBottomClass,i=e.spaceLeftClass,t=e.sideMenu,n=e.colorClass,c=e.widgetColorClass;return(0,l.jsxs)("div",{className:(0,a.A)("footer-widget",s,t?"ml-ntv5":i,c),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"CONEJILLO"})}),(0,l.jsx)("div",{className:(0,a.A)("subscribe-style",n),children:(0,l.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},4943:function(e,s,i){var a=i(3024),l=i(9735),t=i(579),n=function(e){var s,i=e.status,l=e.message,n=e.onValidated,c=e.spaceTopClass,r=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-form-3",c),children:(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===i&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===i&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),(0,t.jsx)("div",{className:"clear-3 ".concat(r||""),children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,i=e.spaceTopClass,a=e.subscribeBtnClass;return(0,t.jsx)("div",{children:(0,t.jsx)(l.A,{url:s,render:function(e){var s=e.subscribe,l=e.status,c=e.message;return(0,t.jsx)(n,{status:l,message:c,onValidated:function(e){return s(e)},spaceTopClass:i,subscribeBtnClass:a})}})})}},9707:function(e,s,i){var a=i(3024),l=i(579);s.A=function(e){var s=e.titleText,i=e.positionClass,t=e.spaceClass,n=e.colorClass;return(0,l.jsx)("div",{className:(0,a.A)("section-title-5",i,t),children:(0,l.jsx)("h2",{className:(0,a.A)(n),children:s})})}},3100:function(e,s,i){var a=i(3024),l=i(579);s.A=function(e){var s=e.data,i=e.testimonialClass;return(0,l.jsxs)("div",{className:(0,a.A)(i||"single-testimonial","text-center"),children:[(0,l.jsx)("img",{src:"/conejillo"+s.image,alt:""}),(0,l.jsx)("p",{children:s.content}),(0,l.jsxs)("div",{className:"client-info",children:[(0,l.jsx)("i",{className:"fa fa-map-signs"}),(0,l.jsx)("h5",{children:s.customerName}),(0,l.jsx)("span",{children:s.title})]})]})}},4490:function(e,s,i){i.r(s),i.d(s,{default:function(){return F}});var a=i(5043),l=i(2168),t=i(994),n=i(3024),c=i(5475),r=i(6801),o=i(2304),d=i(579),m=function(e){var s=e.backgroundColorClass,i=e.spaceTopClass,a=e.spaceBottomClass,l=e.spaceLeftClass,t=e.spaceRightClass,m=e.containerClass,u=e.extraFooterClass,h=e.sideMenu;return(0,d.jsx)("footer",{className:(0,n.A)("footer-area",s,i,a,u,l,t),children:(0,d.jsx)("div",{className:"".concat(m||"container"),children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,d.jsx)(r.A,{footerLogo:"/assets/img/logo/logo-2.png",spaceBottomClass:"mb-30",colorClass:"copyright-white"})}),(0,d.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,d.jsxs)("div",{className:"footer-widget footer-widget-white mb-30 ml-30",children:[(0,d.jsx)("div",{className:"footer-title",children:(0,d.jsx)("h3",{children:"ABOUT US"})}),(0,d.jsx)("div",{className:"footer-list",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo/about",children:"About us"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"Store location"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo/contact",children:"Contact"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"Orders tracking"})})]})})]})}),(0,d.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,d.jsxs)("div",{className:"".concat(h?"footer-widget footer-widget-white mb-30 ml-95":"footer-widget footer-widget-white mb-30 ml-50"),children:[(0,d.jsx)("div",{className:"footer-title",children:(0,d.jsx)("h3",{children:"USEFUL LINKS"})}),(0,d.jsx)("div",{className:"footer-list",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"Returns"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"Support Policy"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"Size guide"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.N_,{to:"/conejillo#/",children:"FAQs"})})]})})]})}),(0,d.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,d.jsxs)("div",{className:"".concat(h?"footer-widget footer-widget-white mb-30 ml-145":"footer-widget footer-widget-white mb-30 ml-75"),children:[(0,d.jsx)("div",{className:"footer-title",children:(0,d.jsx)("h3",{children:"FOLLOW US"})}),(0,d.jsx)("div",{className:"footer-list",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,d.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,d.jsx)(o.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h,colorClass:"subscribe-style-white",widgetColorClass:"footer-widget-white"})})]})})})},u=i(6998),h=function(e){var s=e.children;return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(t.A,{layout:"container-fluid"}),s,(0,d.jsx)(m,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70",backgroundColorClass:"bg-black-3"}),(0,d.jsx)(u.A,{})]})},x=JSON.parse('{"DD":"Stylish","VA":"Male Clothes","Qq":"30% off Black Friday","OZ":"/shop-grid-standard","iL":"/assets/img/slider/slider-36.jpg"}'),j=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-height-5 bg-img d-flex align-items-center",style:{backgroundImage:"url(".concat("/conejillo"+x.iL,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,d.jsxs)("div",{className:"slider-content-3 slider-content-3-white slider-animated-1 text-center",children:[(0,d.jsx)("h3",{className:"animated",children:x.DD}),(0,d.jsx)("h1",{className:"animated",children:x.VA}),(0,d.jsx)("p",{className:"animated",children:x.Qq}),(0,d.jsx)("div",{className:"slider-btn btn-hover",children:(0,d.jsx)(c.N_,{className:"animated",to:"/conejillo"+x.OZ,children:"SHOP NOW"})})]})})})})})})},p=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-51.png","title":"-70% Off","subtitle":"Easy Chair","url":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-52.png","title":"-70% Off","subtitle":"Soft Sofa","url":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-53.png","title":"-70% Off","subtitle":"Office Chair","url":"/shop-grid-standard"}]'),g=function(e){var s=e.data,i=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,n.A)("single-banner",i),children:[(0,d.jsx)(c.N_,{to:"/conejillo"+s.url,children:(0,d.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-5 banner-content-5-white",children:[(0,d.jsx)("span",{children:s.title}),(0,d.jsx)("h3",{children:s.subtitle}),(0,d.jsx)(c.N_,{to:"/conejillo"+s.url,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},v=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.bgColorClass;return(0,d.jsx)("div",{className:(0,n.A)("banner-area",s,i,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===p||void 0===p?void 0:p.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,d.jsx)(g,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},f=i(3702),b=i(7580),N=i(9707),C=i(861),w=function(e){var s=e.spaceBottomClass,i=e.category,a=e.productTabClass,l=e.bgColorClass;return(0,d.jsx)("div",{className:(0,n.A)("product-area",s,l),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(N.A,{titleText:"Featured Product",positionClass:"text-center",colorClass:"text-white"}),(0,d.jsxs)(f.A.Container,{defaultActiveKey:"bestSeller",children:[(0,d.jsxs)(b.A,{variant:"pills",className:(0,n.A)("product-tab-list pt-35 pb-60 text-center",a),children:[(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"newArrival",children:(0,d.jsx)("h4",{children:"New Arrivals"})})}),(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"bestSeller",children:(0,d.jsx)("h4",{children:"Best Sellers"})})}),(0,d.jsx)(b.A.Item,{children:(0,d.jsx)(b.A.Link,{eventKey:"saleItems",children:(0,d.jsx)("h4",{children:"Sale Items"})})})]}),(0,d.jsxs)(f.A.Content,{children:[(0,d.jsx)(f.A.Pane,{eventKey:"newArrival",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(C.A,{category:i,type:"new",limit:8,spaceBottomClass:"mb-25",titlePriceClass:"title-price-wrap-2-white"})})}),(0,d.jsx)(f.A.Pane,{eventKey:"bestSeller",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(C.A,{category:i,type:"bestSeller",limit:8,spaceBottomClass:"mb-25",titlePriceClass:"title-price-wrap-2-white"})})}),(0,d.jsx)(f.A.Pane,{eventKey:"saleItems",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)(C.A,{category:i,type:"saleItems",limit:8,spaceBottomClass:"mb-25",titlePriceClass:"title-price-wrap-2-white"})})})]})]})]})})},A=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-13.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#303030"},{"id":2,"titleImage":"/assets/img/icon-img/support-14.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#303030"},{"id":3,"titleImage":"/assets/img/icon-img/support-15.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#303030"}]'),y=function(e){var s=e.data,i=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,n.A)("support-wrap-3 text-center",i),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,d.jsx)("div",{className:"support-icon-2",children:(0,d.jsx)("img",{className:"animated",src:"/conejillo"+s.iconImage,alt:""})}),(0,d.jsxs)("div",{className:"support-content-3 support-content-3-white",children:[(0,d.jsx)("img",{src:"/conejillo"+s.titleImage,alt:""}),(0,d.jsx)("p",{children:s.title})]})]})},k=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.containerClass,l=e.gutterClass,t=e.responsiveClass,c=e.bgImg,r=e.bgColorClass;return(0,d.jsx)("div",{className:(0,n.A)("support-area hm9-section-padding",r,s,i,t),style:c?{backgroundImage:"url(".concat("/conejillo"+c,")")}:{},children:(0,d.jsx)("div",{className:(0,n.A)(a,l),children:(0,d.jsx)("div",{className:"row",children:null===A||void 0===A?void 0:A.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,d.jsx)(y,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})},S=i(9340),B=i(4344),I=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-54.png","title":"Single Sofa","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-55.png","title":"Single Sofa","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"}]'),_=function(e){var s=e.data,i=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,n.A)("single-banner-2",i),children:[(0,d.jsx)(c.N_,{to:"/conejillo"+s.link,children:(0,d.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content-2 banner-content-2-black",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(c.N_,{to:"/conejillo"+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},T=function(e){var s=e.spaceBottomClass,i=e.bgColorClass;return(0,d.jsx)("div",{className:(0,n.A)("banner-area",i,s),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===I||void 0===I?void 0:I.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,d.jsx)(_,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},L=i(8032),O=function(e){var s=e.bgColorClass,i=e.spaceTopClass,a=e.dateTime;return(0,d.jsx)("div",{className:(0,n.A)("black-friday-deal-area",s,i),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"black-friday-deal-content text-center",children:[(0,d.jsx)("h2",{children:"Black Friday Offer!"}),(0,d.jsx)("div",{className:"dealy-style-2",children:(0,d.jsx)(L.A,{date:a})}),(0,d.jsx)("div",{className:"slider-btn-12 btn-hover",children:(0,d.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:"MORE OFFER"})})]})})})},F=function(){return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(l.A,{titleTemplate:"Black friday Home",description:"Black friday home of flone react minimalist eCommerce template."}),(0,d.jsxs)(h,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(O,{dateTime:"November 13, 2023 12:12:00",bgColorClass:"bg-black-2",spaceTopClass:"pt-100"}),(0,d.jsx)(v,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70",bgColorClass:"bg-black-2"}),(0,d.jsx)(w,{category:"black friday",productTabClass:"product-tab-pink product-tab-white",bgColorClass:"bg-black-2",spaceBottomClass:"pb-100"}),(0,d.jsx)(k,{containerClass:"container",gutterClass:"padding-10-row-col",bgColorClass:"bg-black-2"}),(0,d.jsx)(S.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe",bgColorClass:"bg-black-2",subscribeColorClass:"subscribe-style-3-white"}),(0,d.jsx)(T,{spaceBottomClass:"pb-70",bgColorClass:"bg-black-2"}),(0,d.jsx)(B.A,{spaceBottomClass:"pb-95",bgColorClass:"bg-black-2",testimonialClass:"single-testimonial-2"})]})]})}},994:function(e,s,i){i.d(s,{A:function(){return m}});var a=i(5544),l=i(5043),t=i(3024),n=i(5475),c=i(6487),r=i(4993),o=i(579),d=function(e){var s=e.activeState,i=e.getActiveState;return(0,o.jsxs)("div",{className:(0,t.A)("clickable-mainmenu",s?"inside":""),children:[(0,o.jsx)("div",{className:"clickable-mainmenu-icon",children:(0,o.jsx)("button",{className:"clickable-mainmenu-close",onClick:function(){return i(!1)},children:(0,o.jsx)("span",{className:"pe-7s-close"})})}),(0,o.jsx)("div",{className:"side-logo",children:(0,o.jsx)(n.N_,{to:"/conejillo/",children:(0,o.jsx)("img",{alt:"",src:"/conejillo/assets/img/logo/logo.png"})})})]})},m=function(e){var s=e.layout,i=e.headerPaddingClass,m=e.headerBgClass,u=(0,l.useState)(0),h=(0,a.A)(u,2),x=h[0],j=h[1],p=(0,l.useState)(0),g=(0,a.A)(p,2),v=g[0],f=g[1],b=(0,l.useState)(!1),N=(0,a.A)(b,2),C=N[0],w=N[1];(0,l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return f(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){j(window.scrollY)};return(0,o.jsxs)("header",{className:(0,t.A)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7",m,i,x>v&&"stick"),children:[(0,o.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,o.jsx)("div",{className:"clickable-menu clickable-mainmenu-active",children:(0,o.jsx)("button",{onClick:function(){w(!0)},children:(0,o.jsx)("i",{className:"pe-7s-menu"})})})}),(0,o.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-6",children:(0,o.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,o.jsx)(n.N_,{className:"sticky-none",to:"/conejillo/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,o.jsx)(n.N_,{className:"sticky-block",to:"/conejillo/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,o.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-6",children:(0,o.jsx)(c.A,{iconWhiteClass:"header-right-wrap-white"})})]})}),(0,o.jsx)(d,{activeState:C,getActiveState:function(e){w(e)}}),(0,o.jsx)(r.A,{})]})}},9340:function(e,s,i){var a=i(3024),l=i(4943),t=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,n=e.subscribeBtnClass,c=e.bgColorClass,r=e.subscribeColorClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-area-3",c,s,i),children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,t.jsxs)("div",{className:(0,a.A)("subscribe-style-3 text-center",r),children:[(0,t.jsx)("h2",{children:"Join With Us! "}),(0,t.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,t.jsx)(l.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:n})]})})})})})}},861:function(e,s,i){i.d(s,{A:function(){return j}});var a=i(5043),l=i(9456),t=i(2821),n=i(5544),c=i(5475),r=i(3024),o=i(425),d=i(5721),m=i(4990),u=i(3492),h=i(579),x=function(e){var s=e.product,i=e.currency,x=e.cartItem,j=e.wishlistItem,p=e.compareItem,g=e.spaceBottomClass,v=e.colorClass,f=e.titlePriceClass,b=(0,a.useState)(!1),N=(0,n.A)(b,2),C=N[0],w=N[1],A=(0,t.do)(s.price,s.discount),y=+(s.price*i.currencyRate).toFixed(2),k=+(A*i.currencyRate).toFixed(2),S=(0,l.wA)();return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)("div",{className:(0,r.A)("product-wrap-2",g,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(c.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(c.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return w(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(f||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(c.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==A?(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+y," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:C,onHide:function(){return w(!1)},product:s,currency:i,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:k,wishlistItem:j,compareItem:p})]})},j=function(e){var s=e.spaceBottomClass,i=e.colorClass,n=e.titlePriceClass,c=e.category,r=e.type,o=e.limit,d=(0,l.d4)((function(e){return e.product})).products,m=(0,l.d4)((function(e){return e.currency})),u=(0,l.d4)((function(e){return e.cart})).cartItems,j=(0,l.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,l.d4)((function(e){return e.compare})).compareItems,g=(0,t.d$)(d,c,r,o);return(0,h.jsx)(a.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(x,{spaceBottomClass:s,colorClass:i,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:j.find((function(s){return s.id===e.id})),compareItem:p.find((function(s){return s.id===e.id})),titlePriceClass:n})},e.id)}))})}},4344:function(e,s,i){var a=i(3024),l=i(7362),t=i(5672),n=i(3100),c=i(579),r={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.bgColorClass,u=e.testimonialClass;return(0,c.jsx)("div",{className:(0,a.A)("testimonial-area",s,i,o,d,m),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,c.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:t&&(0,c.jsx)(l.A,{options:r,children:t.map((function(e,s){return(0,c.jsx)(l.q,{children:(0,c.jsx)(n.A,{data:e,testimonialClass:u})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=4490.edf64bf0.chunk.js.map