"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[8909],{8032:function(e,s,a){a.d(s,{A:function(){return d}});var t=a(5544),l=a(3024),n=a(5043),i=function(e){var s=new Date(e).getTime(),a=(0,n.useState)(s-(new Date).getTime()),l=(0,t.A)(a,2),i=l[0],r=l[1];return(0,n.useEffect)((function(){if(!(i<=0)){var e=setInterval((function(){r(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,i]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(i)},r=a(579),c=function(e){var s=e.value,a=e.type;return(0,r.jsxs)("span",{className:"cdown",children:[s," ",(0,r.jsx)("p",{children:a})]})},d=function(e){var s=e.date,a=e.className,n=i(s),d=(0,t.A)(n,4),o=d[0],m=d[1],h=d[2],j=d[3];return(0,r.jsxs)("div",{className:(0,l.A)("timer timer-style",a),children:[(0,r.jsx)(c,{value:o,type:"days"}),(0,r.jsx)(c,{value:m,type:"hours"}),(0,r.jsx)(c,{value:h,type:"minutes"}),(0,r.jsx)(c,{value:j,type:"secs"})]})}},8909:function(e,s,a){a.r(s),a.d(s,{default:function(){return I}});var t=a(5043),l=a(2168),n=a(8062),i=a(8906),r=a(7362),c=JSON.parse('[{"id":1,"title":"Smart Products","subtitle":"Winter Offer 2024 Collection","image":"/assets/img/slider/single-slide-4.png","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"Summer Offer 2024 Collection","image":"/assets/img/slider/single-slide-5.png","url":"/shop-grid-standard"}]'),d=a(5475),o=a(579),m=function(e){var s=e.data;return(0,o.jsx)("div",{className:"single-slider single-slider-10 slider-height-8 bg-aqua",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-12 col-sm-6 d-flex align-items-center",children:(0,o.jsxs)("div",{className:"slider-content slider-content-10 slider-animated-2",children:[(0,o.jsx)("h3",{className:"animated",children:s.title}),(0,o.jsx)("h1",{className:"animated",children:s.subtitle}),(0,o.jsx)("div",{className:"slider-btn btn-hover",children:(0,o.jsx)(d.N_,{className:"animated",to:"/conejillo"+s.url,children:"COMPRAR AHORA"})})]})}),(0,o.jsx)("div",{className:"col-12 col-sm-6",children:(0,o.jsx)("div",{className:"slider-singleimg-hm10 slider-animated-2 ml-40 mr-40",children:(0,o.jsx)("img",{className:"animated img-fluid",src:"/conejillo"+s.image,alt:""})})})]})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[i._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},j=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,o.jsx)(r.A,{options:h,children:c.map((function(e,s){return(0,o.jsx)(r.q,{children:(0,o.jsx)(m,{data:e})},s)}))})})})},u=a(3024),x=JSON.parse('[{"id":"1","image":"/assets/img/banner/banner-10.png","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/banner/banner-11.png","link":"/shop-grid-standard"}]'),p=function(e){var s=e.data,a=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,u.A)("single-banner",a),children:(0,o.jsx)(d.N_,{to:"/conejillo"+s.link,children:(0,o.jsx)("img",{src:"/conejillo"+s.image,alt:""})})})},v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,u.A)("banner-area",s,a),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,o.jsx)("div",{className:"col-sm-6 col-12",children:(0,o.jsx)(p,{data:e})},s)}))})})})},g=a(3702),f=a(7580),N=a(5571),A=a(861),b=function(e){var s=e.spaceBottomClass,a=e.category;return(0,o.jsx)("div",{className:(0,u.A)("product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(N.A,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,o.jsxs)(g.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(f.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,o.jsx)(f.A.Item,{children:(0,o.jsx)(f.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(f.A.Item,{children:(0,o.jsx)(f.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(f.A.Item,{children:(0,o.jsx)(f.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(g.A.Content,{children:[(0,o.jsx)(g.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row three-column",children:(0,o.jsx)(A.A,{category:a,type:"new",limit:6,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(g.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row three-column",children:(0,o.jsx)(A.A,{category:a,type:"bestSeller",limit:6,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(g.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row three-column",children:(0,o.jsx)(A.A,{category:a,type:"saleItems",limit:6,spaceBottomClass:"mb-25"})})})]})]}),(0,o.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,o.jsx)(d.N_,{className:"loadMore6",to:"/conejillo/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})},C=a(8032),y=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.bgImg,l=e.dateTime;return(0,o.jsx)("div",{className:(0,u.A)("funfact-area",s,a),style:{backgroundImage:"url(".concat("/conejillo"+t,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-lg-6 ms-auto",children:(0,o.jsxs)("div",{className:"funfact-content text-center",children:[(0,o.jsx)("h2",{children:"Deal of the day"}),(0,o.jsx)("div",{className:"timer",children:(0,o.jsx)(C.A,{date:l})}),(0,o.jsx)("div",{className:"funfact-btn btn-hover",children:(0,o.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})})})})})},w=a(5273),S=a(5489),I=function(){return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)(l.A,{titleTemplate:"Furniture Home",description:"Furniture home of flone react minimalist eCommerce template."}),(0,o.jsxs)(n.A,{headerTop:"visible",children:[(0,o.jsx)(j,{}),(0,o.jsx)(v,{spaceTopClass:"pt-80",spaceBottomClass:"pb-60"}),(0,o.jsx)(b,{spaceBottomClass:"pb-100",category:"furniture"}),(0,o.jsx)(y,{spaceTopClass:"pt-115",spaceBottomClass:"pb-115",bgImg:"/assets/img/bg/bg-1.jpg",dateTime:"November 13, 2023 12:12:00"}),(0,o.jsx)(w.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),(0,o.jsx)(S.A,{spaceBottomClass:"pb-55"})]})]})}}}]);
//# sourceMappingURL=8909.f6b52907.chunk.js.map