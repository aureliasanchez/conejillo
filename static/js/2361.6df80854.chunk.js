"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2361],{8032:function(e,s,a){a.d(s,{A:function(){return o}});var i=a(5544),n=a(3024),l=a(5043),r=function(e){var s=new Date(e).getTime(),a=(0,l.useState)(s-(new Date).getTime()),n=(0,i.A)(a,2),r=n[0],t=n[1];return(0,l.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){t(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},t=a(579),c=function(e){var s=e.value,a=e.type;return(0,t.jsxs)("span",{className:"cdown",children:[s," ",(0,t.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,l=r(s),o=(0,i.A)(l,4),d=o[0],m=o[1],u=o[2],g=o[3];return(0,t.jsxs)("div",{className:(0,n.A)("timer timer-style",a),children:[(0,t.jsx)(c,{value:d,type:"days"}),(0,t.jsx)(c,{value:m,type:"hours"}),(0,t.jsx)(c,{value:u,type:"minutes"}),(0,t.jsx)(c,{value:g,type:"secs"})]})}},5371:function(e,s,a){var i=a(5475),n=a(579);s.A=function(e){var s=e.data;return(0,n.jsx)("div",{className:"single-image",children:(0,n.jsx)(i.N_,{to:"/conejillo"+s.link,children:(0,n.jsx)("img",{src:"/conejillo"+s.image,alt:""})})})}},4943:function(e,s,a){var i=a(3024),n=a(9735),l=a(579),r=function(e){var s,a=e.status,n=e.message,r=e.onValidated,t=e.spaceTopClass,c=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-form-3",t),children:(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,l.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,l.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,i=e.subscribeBtnClass;return(0,l.jsx)("div",{children:(0,l.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,n=e.status,t=e.message;return(0,l.jsx)(r,{status:n,message:t,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:i})}})})}},9707:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.titleText,a=e.positionClass,l=e.spaceClass,r=e.colorClass;return(0,n.jsx)("div",{className:(0,i.A)("section-title-5",a,l),children:(0,n.jsx)("h2",{className:(0,i.A)(r),children:s})})}},3100:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.data,a=e.testimonialClass;return(0,n.jsxs)("div",{className:(0,i.A)(a||"single-testimonial","text-center"),children:[(0,n.jsx)("img",{src:"/conejillo"+s.image,alt:""}),(0,n.jsx)("p",{children:s.content}),(0,n.jsxs)("div",{className:"client-info",children:[(0,n.jsx)("i",{className:"fa fa-map-signs"}),(0,n.jsx)("h5",{children:s.customerName}),(0,n.jsx)("span",{children:s.title})]})]})}},2361:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var i=a(5043),n=a(2168),l=a(8062),r=a(5475),t=JSON.parse('{"DD":"Black Friday <br />Hot Deal!","KQ":"November 13, 2024 12:12:00","OZ":"/shop-grid-standard","iL":"/assets/img/slider/slider-37.jpg"}'),c=a(8032),o=a(579),d=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-height-2 bg-img slider-content-center",style:{backgroundImage:"url(".concat("/conejillo"+t.iL,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12 align-self-center",children:(0,o.jsxs)("div",{className:"slider-content-15 slider15-mrg-nrg text-center",children:[(0,o.jsx)("h1",{dangerouslySetInnerHTML:{__html:t.DD}}),(0,o.jsx)("div",{className:"timer dealy-style-2 wow zoomIn",children:(0,o.jsx)(c.A,{date:t.KQ})}),(0,o.jsx)("div",{className:"slider-btn-12 btn-hover",children:(0,o.jsx)(r.N_,{className:"animated",to:"/conejillo"+t.OZ,children:"MORE OFFER"})})]})})})})})})},m=a(3024),u=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-59.png","title":"-70% Off","subtitle":"Easy Chair","url":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-60.png","title":"-70% Off","subtitle":"Soft Sofa","url":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-61.png","title":"-70% Off","subtitle":"Office Chair","url":"/shop-grid-standard"}]'),g=function(e){var s=e.data,a=e.spaceBottomClass;return(0,o.jsxs)("div",{className:(0,m.A)("single-banner",a),children:[(0,o.jsx)(r.N_,{to:"/conejillo"+s.url,children:(0,o.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,o.jsxs)("div",{className:"banner-content-5",children:[(0,o.jsx)("span",{children:s.title}),(0,o.jsx)("h3",{children:s.subtitle}),(0,o.jsx)(r.N_,{to:"/conejillo"+s.url,children:(0,o.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},p=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.bgColorClass;return(0,o.jsx)("div",{className:(0,m.A)("banner-area",s,a,i),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:null===u||void 0===u?void 0:u.map((function(e,s){return(0,o.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,o.jsx)(g,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},j=a(3987),x=a(900),h=a(7362),v=a(5672),b=a(3100),f={slidesPerView:1,loop:!0,autoplay:!0},N=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.testimonialClass;return(0,o.jsx)("div",{className:"testimonial-area",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:(0,m.A)("bg-img",s,a),style:{backgroundImage:"url(".concat("/conejillo/assets/img/bg/testimonial-bg-3.jpg",")")},children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-lg-10 ms-auto me-auto",children:(0,o.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:v&&(0,o.jsx)(h.A,{options:f,children:v.map((function(e,s){return(0,o.jsx)(h.q,{children:(0,o.jsx)(b.A,{data:e,testimonialClass:i})},s)}))})})})})})})})},C=a(9340),A=a(6974),y=function(e){var s=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,m.A)("banner-area",s),children:(0,o.jsx)("div",{className:"container padding-20-row-col",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsxs)("div",{className:"single-banner mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/banner/banner-56.png",alt:""})}),(0,o.jsx)("div",{className:"banner-content-6",children:(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,o.jsxs)("div",{className:"col-lg-6 col-md-6",children:[(0,o.jsxs)("div",{className:"single-banner mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/banner/banner-57.png",alt:""})}),(0,o.jsxs)("div",{className:"banner-content-7",children:[(0,o.jsx)("span",{children:"Black Friday"}),(0,o.jsx)("h2",{children:"Big Sale"}),(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]}),(0,o.jsxs)("div",{className:"single-banner mb-20",children:[(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/banner/banner-58.png",alt:""})}),(0,o.jsxs)("div",{className:"banner-content-8",children:[(0,o.jsx)("span",{children:"Black"}),(0,o.jsx)("h2",{children:"Friday"}),(0,o.jsx)("p",{children:"sale up to 50%"}),(0,o.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})]})]})})})},w=function(){return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(n.A,{titleTemplate:"Black friday Home",description:"Black friday home of flone react minimalist eCommerce template."}),(0,o.jsxs)(l.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[(0,o.jsx)(d,{}),(0,o.jsx)(p,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,o.jsx)(j.A,{category:"furniture",productTabClass:"product-tab-pink",spaceBottomClass:"pb-100"}),(0,o.jsx)(y,{spaceBottomClass:"pb-80"}),(0,o.jsx)(x.A,{containerClass:"container",gutterClass:"padding-10-row-col",spaceBottomClass:"pb-100"}),(0,o.jsx)(N,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",backgroundImage:"/assets/img/bg/testimonial-bg-3.jpg",testimonialClass:"single-testimonial-2"}),(0,o.jsx)(C.A,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe"}),(0,o.jsx)(A.A,{})]})]})}},900:function(e,s,a){a.d(s,{A:function(){return t}});var i=a(3024),n=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),l=a(579),r=function(e){var s=e.data,a=e.spaceBottomClass;return(0,l.jsxs)("div",{className:(0,i.A)("support-wrap-3 text-center",a),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,l.jsx)("div",{className:"support-icon-2",children:(0,l.jsx)("img",{className:"animated",src:"/conejillo"+s.iconImage,alt:""})}),(0,l.jsxs)("div",{className:"support-content-3",children:[(0,l.jsx)("img",{src:"/conejillo"+s.titleImage,alt:""}),(0,l.jsx)("p",{children:s.title})]})]})},t=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.containerClass,c=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,l.jsx)("div",{className:(0,i.A)("support-area hm9-section-padding",s,a,o),style:d?{backgroundImage:"url(".concat("/conejillo"+d,")")}:{},children:(0,l.jsx)("div",{className:(0,i.A)(t,c),children:(0,l.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e,s){return(0,l.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,l.jsx)(r,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},6974:function(e,s,a){a.d(s,{A:function(){return c}});var i=a(7362),n=a(5371),l=JSON.parse('[{"id":"1","image":"/assets/img/image-slider/image-slider-1.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/image-slider/image-slider-2.jpg","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/image-slider/image-slider-3.jpg","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/image-slider/image-slider-4.jpg","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/image-slider/image-slider-5.jpg","link":"/shop-grid-standard"},{"id":"6","image":"/assets/img/image-slider/image-slider-2.jpg","link":"/shop-grid-standard"}]'),r=a(579),t={loop:!1,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}},c=function(){return(0,r.jsx)("div",{className:"image-slider-area",children:(0,r.jsx)("div",{className:"image-slider-active",children:l&&(0,r.jsx)(i.A,{options:t,children:l.map((function(e,s){return(0,r.jsx)(i.q,{children:(0,r.jsx)(n.A,{data:e})},s)}))})})})}},9340:function(e,s,a){var i=a(3024),n=a(4943),l=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,r=e.subscribeBtnClass,t=e.bgColorClass,c=e.subscribeColorClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-area-3",t,s,a),children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,l.jsxs)("div",{className:(0,i.A)("subscribe-style-3 text-center",c),children:[(0,l.jsx)("h2",{children:"Join With Us! "}),(0,l.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,l.jsx)(n.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},3987:function(e,s,a){var i=a(3024),n=a(5475),l=a(3702),r=a(7580),t=a(9707),c=a(861),o=a(579);s.A=function(e){var s=e.spaceBottomClass,a=e.category,d=e.productTabClass;return(0,o.jsx)("div",{className:(0,i.A)("product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(t.A,{titleText:"Featured Product",positionClass:"text-center"}),(0,o.jsxs)(l.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(r.A,{variant:"pills",className:(0,i.A)("product-tab-list pt-35 pb-60 text-center",d),children:[(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(r.A.Item,{children:(0,o.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(l.A.Content,{children:[(0,o.jsx)(l.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(l.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(l.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(c.A,{category:a,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,o.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,o.jsx)(n.N_,{className:"loadMore6",to:"/conejillo/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=2361.6df80854.chunk.js.map