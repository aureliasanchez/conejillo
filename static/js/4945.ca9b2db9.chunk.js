"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4945],{8032:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(5544),i=a(3024),n=a(5043),r=function(e){var s=new Date(e).getTime(),a=(0,n.useState)(s-(new Date).getTime()),i=(0,t.A)(a,2),r=i[0],c=i[1];return(0,n.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){c(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},c=a(579),l=function(e){var s=e.value,a=e.type;return(0,c.jsxs)("span",{className:"cdown",children:[s," ",(0,c.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,n=r(s),o=(0,t.A)(n,4),d=o[0],m=o[1],u=o[2],j=o[3];return(0,c.jsxs)("div",{className:(0,i.A)("timer timer-style",a),children:[(0,c.jsx)(l,{value:d,type:"days"}),(0,c.jsx)(l,{value:m,type:"hours"}),(0,c.jsx)(l,{value:u,type:"minutes"}),(0,c.jsx)(l,{value:j,type:"secs"})]})}},4945:function(e,s,a){a.r(s),a.d(s,{default:function(){return C}});var t=a(5043),i=a(2168),n=a(8062),r=a(900),c=a(6814),l=a(3024),o=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner29.jpg","title":"Dog Food","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner30.jpg","title":"Fish Food","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner31.jpg","title":"Cat Food","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),d=a(5475),m=a(579),u=function(e){var s=e.data,a=e.spaceBottomClass;return(0,m.jsxs)("div",{className:(0,l.A)("single-banner",a),children:[(0,m.jsx)(d.N_,{to:"/conejillo"+s.link,children:(0,m.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,m.jsxs)("div",{className:"banner-content",children:[(0,m.jsx)("h3",{children:s.title}),(0,m.jsxs)("h4",{children:[s.subtitle," ",(0,m.jsx)("span",{children:s.price})]}),(0,m.jsx)(d.N_,{to:s.link,children:(0,m.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},j=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,l.A)("banner-area",s,a),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:null===o||void 0===o?void 0:o.map((function(e,s){return(0,m.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,m.jsx)(u,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},h=a(5540),p=a(8906),x=a(7362),f=JSON.parse('[{"id":1,"title":"2020 Latest Collection","subtitle":"-30% Offer All <br /> Pet Food.","image":"/assets/img/slider/slider-23.jpg","url":"/shop-grid-standard"},{"id":2,"title":"2020 Latest Collection","subtitle":"-40% Offer All <br /> Pet Food.","image":"/assets/img/slider/slider-23.jpg","url":"/shop-grid-standard"}]'),v=function(e){var s=e.data;return(0,m.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat("/conejillo"+s.image,")")},children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,m.jsxs)("div",{className:"slider-content-2 slider-animated-1",children:[(0,m.jsx)("h3",{className:"animated no-style",children:s.title}),(0,m.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,m.jsx)("div",{className:"slider-btn slider-btn--style2 btn-hover",children:(0,m.jsx)(d.N_,{className:"animated rounden-btn",to:"/conejillo"+s.url,children:"SHOP NOW"})})]})})})})})},g={effect:"fade",fadeEffect:{crossFade:!0},modules:[p._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},N=function(){return(0,m.jsx)("div",{className:"slider-area",children:(0,m.jsx)("div",{className:"slider-active nav-style-1",children:f&&(0,m.jsx)(x.A,{options:g,children:null===f||void 0===f?void 0:f.map((function(e,s){return(0,m.jsx)(x.q,{children:(0,m.jsx)(v,{data:e})},s)}))})})})},b=a(6695),A=JSON.parse('[{"id":"1","image":"/assets/img/banner/banner32.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/banner/banner33.jpg","link":"/shop-grid-standard"}]'),y=function(e){var s=e.data,a=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,l.A)("single-banner",a),children:(0,m.jsx)(d.N_,{to:"/conejillo"+s.link,children:(0,m.jsx)("img",{src:"/conejillo"+s.image,alt:""})})})},w=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,l.A)("banner-area",s,a),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:null===A||void 0===A?void 0:A.map((function(e,s){return(0,m.jsx)("div",{className:"col-sm-6 col-12",children:(0,m.jsx)(y,{data:e})},s)}))})})})},C=function(){return(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(i.A,{titleTemplate:"Pet Food Home",description:"Pet food home of flone react minimalist eCommerce template."}),(0,m.jsxs)(n.A,{headerTop:"visible",children:[(0,m.jsx)(N,{}),(0,m.jsx)(j,{spaceTopClass:"pt-60",spaceBottomClass:"pb-60"}),(0,m.jsx)(b.A,{category:"pet food"}),(0,m.jsx)(w,{spaceTopClass:"pt-95"}),(0,m.jsx)(h.A,{spaceTopClass:"pt-95",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-8.jpg"}),(0,m.jsx)(r.A,{spaceTopClass:"pt-95",containerClass:"container",responsiveClass:"res-mrg-md-mt"}),(0,m.jsx)(c.A,{spaceTopClass:"pt-90",spaceBottomClass:"pb-70"})]})]})}},5540:function(e,s,a){var t=a(3024),i=a(5475),n=a(8032),r=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,c=e.dateTime,l=e.countDownImage;return(0,r.jsx)("div",{className:(0,t.A)("funfact-area",s,a),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,r.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,r.jsx)("h2",{children:"Deal of the day"}),(0,r.jsx)("div",{className:"timer",children:(0,r.jsx)(n.A,{date:c})}),(0,r.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,r.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,r.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,r.jsx)("div",{className:"funfact-image",children:(0,r.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:(0,r.jsx)("img",{src:"/conejillo"+l,alt:"",className:"img-fluid"})})})})]})})})}},2942:function(e,s,a){a.d(s,{A:function(){return p}});var t=a(5043),i=a(9456),n=a(2821),r=a(5544),c=a(5475),l=a(3024),o=a(425),d=a(5721),m=a(4990),u=a(3492),j=a(579),h=function(e){var s=e.product,a=e.currency,h=e.cartItem,p=e.wishlistItem,x=e.compareItem,f=e.spaceBottomClass,v=(0,t.useState)(!1),g=(0,r.A)(v,2),N=g[0],b=g[1],A=(0,n.do)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),w=+(A*a.currencyRate).toFixed(2),C=(0,i.wA)();return(0,j.jsxs)(t.Fragment,{children:[(0,j.jsxs)("div",{className:(0,l.A)("product-wrap-5",f),children:[(0,j.jsxs)("div",{className:"product-img",children:[(0,j.jsx)(c.N_,{to:"/conejillo/product/"+s.id,children:(0,j.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""})}),s.discount||s.new?(0,j.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,j.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,j.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,j.jsxs)("div",{className:"product-action-4",children:[(0,j.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,j.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return C((0,m.U4)(s))},children:(0,j.jsx)("i",{className:"fa fa-heart-o"})})}),(0,j.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,j.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,j.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,j.jsx)(c.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,j.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,j.jsxs)("button",{onClick:function(){return C((0,d.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,j.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,j.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,j.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,j.jsx)("div",{className:"pro-same-action pro-compare",children:(0,j.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return C((0,u.wL)(s))},children:(0,j.jsx)("i",{className:"fa fa-retweet"})})}),(0,j.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,j.jsx)("button",{onClick:function(){return b(!0)},title:"Quick View",children:(0,j.jsx)("i",{className:"fa fa-eye"})})})]})]}),(0,j.jsxs)("div",{className:"product-content-5 text-center",children:[(0,j.jsx)("h3",{children:(0,j.jsx)(c.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,j.jsx)("div",{className:"price-5",children:null!==A?(0,j.jsxs)(t.Fragment,{children:[(0,j.jsx)("span",{children:a.currencySymbol+w})," ",(0,j.jsx)("span",{className:"old",children:a.currencySymbol+y})]}):(0,j.jsxs)("span",{children:[a.currencySymbol+y," "]})})]})]}),(0,j.jsx)(o.A,{show:N,onHide:function(){return b(!1)},product:s,currency:a,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:w,wishlistItem:p,compareItem:x})]})},p=function(e){var s=e.spaceBottomClass,a=e.category,r=e.type,c=e.limit,l=(0,i.d4)((function(e){return e.product})).products,o=(0,i.d4)((function(e){return e.currency})),d=(0,i.d4)((function(e){return e.cart})).cartItems,m=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,i.d4)((function(e){return e.compare})).compareItems,p=(0,n.d$)(l,a,r,c);return(0,j.jsx)(t.Fragment,{children:null===p||void 0===p?void 0:p.map((function(e){return(0,j.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,j.jsx)(h,{spaceBottomClass:s,product:e,currency:o,cartItem:d.find((function(s){return s.id===e.id})),wishlistItem:m.find((function(s){return s.id===e.id})),compareItem:u.find((function(s){return s.id===e.id}))})},e.id)}))})}},6695:function(e,s,a){var t=a(3024),i=a(5475),n=a(3702),r=a(7580),c=a(2942),l=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.category,d=e.productTabClass;return(0,l.jsx)("div",{className:(0,t.A)("product-area",s,a),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(n.A.Container,{defaultActiveKey:"bestSeller",children:[(0,l.jsxs)(r.A,{variant:"pills",className:"product-tab-list-2 mb-60 ".concat(d||""),children:[(0,l.jsx)(r.A.Item,{children:(0,l.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,l.jsx)("h4",{children:"New Arrivals"})})}),(0,l.jsx)(r.A.Item,{children:(0,l.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,l.jsx)("h4",{children:"Best Sellers"})})}),(0,l.jsx)(r.A.Item,{children:(0,l.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,l.jsx)("h4",{children:"Sale Items"})})})]}),(0,l.jsxs)(n.A.Content,{children:[(0,l.jsx)(n.A.Pane,{eventKey:"newArrival",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(c.A,{category:o,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(n.A.Pane,{eventKey:"bestSeller",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(c.A,{category:o,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(n.A.Pane,{eventKey:"saleItems",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(c.A,{category:o,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,l.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,l.jsx)(i.N_,{className:"loadMore6",to:"/conejillo/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})}}}]);
//# sourceMappingURL=4945.ca9b2db9.chunk.js.map