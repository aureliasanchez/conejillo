"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[3916],{4943:function(e,s,l){var i=l(3024),r=l(9735),t=l(579),a=function(e){var s,l=e.status,r=e.message,a=e.onValidated,c=e.spaceTopClass,n=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,i.A)("subscribe-form-3",c),children:(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===l&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===l&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===l&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,t.jsx)("div",{className:"clear-3 ".concat(n||""),children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,l=e.spaceTopClass,i=e.subscribeBtnClass;return(0,t.jsx)("div",{children:(0,t.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,c=e.message;return(0,t.jsx)(a,{status:r,message:c,onValidated:function(e){return s(e)},spaceTopClass:l,subscribeBtnClass:i})}})})}},3916:function(e,s,l){l.r(s),l.d(s,{default:function(){return F}});var i=l(2168),r=l(5043),t=l(5544),a=l(9456),c=l(3188),n=l(5911),o=l(3189),d=l(3032),m=l(3468),h=l(579),j=function(){var e=(0,r.useState)(0),s=(0,t.A)(e,2),l=s[0],i=s[1],j=(0,r.useState)(0),x=(0,t.A)(j,2),u=x[0],p=x[1],g=(0,a.d4)((function(e){return e.currency}));(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return p(e.offsetTop),window.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[]);var v=function(){i(window.scrollY)};return(0,h.jsxs)("header",{className:"header-area clearfix header-hm8",children:[(0,h.jsx)("div",{className:"header-top-area header-padding-2 d-lg-block d-none",children:(0,h.jsx)("div",{className:"container-fluid",children:(0,h.jsxs)("div",{className:"header-top-wap",children:[(0,h.jsx)(m.A,{currency:g}),(0,h.jsx)(n.A,{})]})})}),(0,h.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(l>u?"stick":""),children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-xl-12 col-lg-12 col-6",children:(0,h.jsx)("div",{className:"center-menu-logo text-start text-lg-center",children:(0,h.jsx)(c.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})})}),(0,h.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,h.jsx)(n.A,{})}),(0,h.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,h.jsx)(o.A,{})})]}),(0,h.jsx)(d.A,{})]})})]})},x=l(3024),u=l(5475),p=l(6801),g=l(2304),v=function(e){var s=e.backgroundColorClass,l=e.spaceTopClass,i=e.spaceBottomClass;return(0,h.jsx)("footer",{className:(0,x.A)("footer-area",s,l,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"footer-border pt-100",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-2 col-sm-4",children:(0,h.jsx)(p.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,h.jsx)("div",{className:"col-lg-2 col-md-4 col-sm-4",children:(0,h.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,h.jsx)("div",{className:"footer-title",children:(0,h.jsx)("h3",{children:"ABOUT US"})}),(0,h.jsx)("div",{className:"footer-list",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo/about",children:"About us"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"Store location"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo/contact",children:"Contact"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"Orders tracking"})})]})})]})}),(0,h.jsx)("div",{className:"col-lg-2 col-md-4 col-sm-4",children:(0,h.jsxs)("div",{className:"footer-widget mb-30 ml-50",children:[(0,h.jsx)("div",{className:"footer-title",children:(0,h.jsx)("h3",{children:"USEFUL LINKS"})}),(0,h.jsx)("div",{className:"footer-list",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"Returns"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"Support Policy"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"Size guide"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.N_,{to:"/conejillo#/",children:"FAQs"})})]})})]})}),(0,h.jsx)("div",{className:"col-lg-2 col-md-6 col-sm-6",children:(0,h.jsxs)("div",{className:"footer-widget mb-30 ml-75",children:[(0,h.jsx)("div",{className:"footer-title",children:(0,h.jsx)("h3",{children:"FOLLOW US"})}),(0,h.jsx)("div",{className:"footer-list",children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,h.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,h.jsx)(g.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70"})})]})})})})},f=l(6998),b=function(e){var s=e.children;return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(j,{}),s,(0,h.jsx)(v,{spaceBottomClass:"pb-70"}),(0,h.jsx)(f.A,{})]})},N=l(8902),A=l(8906),w=l(7362),C=function(e){var s=e.data;return(0,h.jsx)("div",{className:"slider-height-6 d-flex align-items-center justify-content-center bg-img",style:{backgroundImage:"url(".concat("/conejillo"+s.image,")")},children:(0,h.jsxs)("div",{className:"slider-content-5 slider-animated-1 text-center",children:[(0,h.jsx)("h3",{className:"animated",children:s.title}),(0,h.jsx)("h1",{className:"animated",children:s.subtitle}),(0,h.jsx)("p",{className:"animated",children:s.text})]})})},S=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"Final Sale","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-6.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-6-1.jpg","url":"/shop-grid-standard"},{"id":3,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-6-2.jpg","url":"/shop-grid-standard"}]'),y={effect:"fade",fadeEffect:{crossFade:!0},modules:[A._R],loop:!0,speed:1e3,pagination:!0,autoHeight:!1},k=function(){return(0,h.jsx)("div",{className:"slider-area",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"slider-active-3 slider-hm8",children:S&&(0,h.jsx)(w.A,{options:y,children:S.map((function(e,s){return(0,h.jsx)(w.q,{children:(0,h.jsx)(C,{data:e})},s)}))})})})})},B=l(576),_=function(e){var s=e.data;return(0,h.jsxs)("div",{className:"collection-product",children:[(0,h.jsx)("div",{className:"collection-img",children:(0,h.jsx)(u.N_,{to:"/conejillo"+s.link,children:(0,h.jsx)("img",{src:"/conejillo"+s.image,alt:""})})}),(0,h.jsxs)("div",{className:"collection-content text-center",children:[(0,h.jsx)("span",{children:s.subtitle}),(0,h.jsx)("h4",{children:(0,h.jsx)(u.N_,{to:"/conejillo"+s.link,children:s.title})})]})]})},T=function(e){var s=e.titleText,l=e.spaceBottomClass;return(0,h.jsx)("div",{className:(0,x.A)("section-title-3",l),children:(0,h.jsx)("h4",{children:s})})},I={loop:!1,spaceBetween:30,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:3},992:{slidesPerView:4}}},L=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass;return(0,h.jsx)("div",{className:(0,x.A)("collections-area",s,l),children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(T,{titleText:"Collections",spaceBottomClass:"mb-40"}),(0,h.jsx)("div",{className:"collection-wrap",children:(0,h.jsx)("div",{className:"collection-active",children:B&&(0,h.jsx)(w.A,{options:I,children:B.map((function(e,s){return(0,h.jsx)(w.q,{children:(0,h.jsx)(_,{data:e})},s)}))})})})]})})},P=l(6695),F=function(){return(0,h.jsxs)(b,{children:[(0,h.jsx)(i.A,{titleTemplate:"Furniture Home",description:"Furniture home of flone react minimalist eCommerce template."}),(0,h.jsx)(k,{}),(0,h.jsx)(L,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95"}),(0,h.jsx)(P.A,{spaceBottomClass:"pb-70",category:"furniture"}),(0,h.jsx)(N.A,{spaceBottomClass:"pb-100"})]})}},8902:function(e,s,l){var i=l(3024),r=l(4943),t=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass,a=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,i.A)("subscribe-area-3",s,l),children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,t.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,t.jsx)("h2",{children:"Subscribe "}),(0,t.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,t.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})}},6695:function(e,s,l){var i=l(3024),r=l(5475),t=l(3702),a=l(7580),c=l(2942),n=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass,o=e.category,d=e.productTabClass;return(0,n.jsx)("div",{className:(0,i.A)("product-area",s,l),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)(t.A.Container,{defaultActiveKey:"bestSeller",children:[(0,n.jsxs)(a.A,{variant:"pills",className:"product-tab-list-2 mb-60 ".concat(d||""),children:[(0,n.jsx)(a.A.Item,{children:(0,n.jsx)(a.A.Link,{eventKey:"newArrival",children:(0,n.jsx)("h4",{children:"New Arrivals"})})}),(0,n.jsx)(a.A.Item,{children:(0,n.jsx)(a.A.Link,{eventKey:"bestSeller",children:(0,n.jsx)("h4",{children:"Best Sellers"})})}),(0,n.jsx)(a.A.Item,{children:(0,n.jsx)(a.A.Link,{eventKey:"saleItems",children:(0,n.jsx)("h4",{children:"Sale Items"})})})]}),(0,n.jsxs)(t.A.Content,{children:[(0,n.jsx)(t.A.Pane,{eventKey:"newArrival",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(c.A,{category:o,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,n.jsx)(t.A.Pane,{eventKey:"bestSeller",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(c.A,{category:o,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,n.jsx)(t.A.Pane,{eventKey:"saleItems",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(c.A,{category:o,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,n.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,n.jsx)(r.N_,{className:"loadMore6",to:"/conejillo/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}},576:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/product/hm8-pro-1.jpg","subtitle":"2 Products","title":"Living Room","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/product/hm8-pro-2.jpg","subtitle":"3 Products","title":"Drawing Room","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/product/hm8-pro-3.jpg","subtitle":"6 Products","title":"Dining Room","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/product/hm8-pro-4.jpg","subtitle":"5 Products","title":"Drawing Room","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/product/hm8-pro-2.jpg","subtitle":"3 Products","title":"Living Room","link":"/shop-grid-standard"}]')}}]);
//# sourceMappingURL=3916.cc85b408.chunk.js.map