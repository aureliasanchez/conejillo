"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4117],{6498:function(e,s,i){i.r(s),i.d(s,{default:function(){return x}});var t=i(5043),r=i(2168),a=i(8062),c=JSON.parse('{"DD":"Made For You","VA":"On Every Wooden Furniture","OZ":"/shop-grid-standard","iL":"/assets/img/slider/slider-32.jpg"}'),n=i(5475),o=i(579),l=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"single-slide bg-img",style:{backgroundImage:"url(".concat("/conejillo"+c.iL,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-lg-10 ms-auto me-auto",children:(0,o.jsxs)("div",{className:"single-slide__content",children:[(0,o.jsx)("h2",{className:"title",children:c.DD}),(0,o.jsx)("h4",{className:"subtitle",children:c.VA}),(0,o.jsx)(n.N_,{className:"button",to:"/conejillo"+c.OZ,children:"Shop Now"})]})})})})})})},d=i(1730),u=i(7638),p=i(4068),m=i(7657),j=i(3063),h=i(4668),x=function(){return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)(r.A,{titleTemplate:"Furniture Home",description:"Furniture home of flone react minimalist eCommerce template."}),(0,o.jsxs)(a.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[(0,o.jsx)(l,{}),(0,o.jsx)(d.A,{spaceTopClass:"pt-115",spaceBottomClass:"pb-115",image:"/assets/img/banner/deal-9.png",dateTime:"November 13, 2023 12:12:00"}),(0,o.jsx)(u.A,{spaceBottomClass:"pb-50",spaceTopClass:"pt-50"}),(0,o.jsx)(p.A,{spaceTopClass:"pt-95",spaceBottomClass:"pb-100",category:"furniture",productGridStyleClass:"product-wrap-10--style2"}),(0,o.jsx)(m.A,{spaceBottomClass:"pb-100"}),(0,o.jsx)(j.A,{category:"furniture",spaceBottomClass:"pb-100",colorClass:"product-wrap-8--brown"}),(0,o.jsx)(h.A,{})]})]})}},7638:function(e,s,i){var t=i(3024),r=i(7362),a=i(8043),c=i(4885),n=i(579),o={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}};s.A=function(e){var s=e.spaceBottomClass,i=e.spaceTopClass,l=e.noBorder;return(0,n.jsx)("div",{className:(0,t.A)("brand-logo-area",l?"":"border-top border-bottom",s,i),children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"brand-logo-active",children:c&&(0,n.jsx)(r.A,{options:o,children:c.map((function(e,s){return(0,n.jsx)(r.q,{children:(0,n.jsx)(a.A,{data:e})},s)}))})})})})}},3063:function(e,s,i){i.d(s,{A:function(){return b}});var t=i(3024),r=i(7194),a=i(9456),c=i(7362),n=i(2821),o=i(5544),l=i(5043),d=i(5475),u=i(5913),p=i(425),m=i(5721),j=i(4990),h=i(3492),x=i(579),f=function(e){var s=e.product,i=e.currency,r=e.cartItem,c=e.wishlistItem,f=e.compareItem,v=e.spaceBottomClass,N=e.colorClass,b=(0,l.useState)(!1),g=(0,o.A)(b,2),C=g[0],w=g[1],A=(0,n.do)(s.price,s.discount),y=+(s.price*i.currencyRate).toFixed(2),k=+(A*i.currencyRate).toFixed(2),P=(0,a.wA)();return(0,x.jsxs)(l.Fragment,{children:[(0,x.jsxs)("div",{className:(0,t.A)("product-wrap-8",v,N),children:[(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsx)(d.N_,{to:"/conejillo/product/"+s.id,children:(0,x.jsx)("img",{className:"default-img img-fluid",src:"/conejillo"+s.image[0],alt:""})}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):""]}),(0,x.jsxs)("div",{className:"product-content",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(d.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,x.jsx)("div",{className:"product-price",children:null!==A?(0,x.jsxs)(l.Fragment,{children:[(0,x.jsx)("span",{className:"old",children:i.currencySymbol+y}),(0,x.jsx)("span",{children:i.currencySymbol+k})]}):(0,x.jsxs)("span",{children:[i.currencySymbol+y," "]})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"product-rating",children:(0,x.jsx)(u.A,{ratingValue:s.rating})}):"",(0,x.jsxs)("div",{className:"product-action",children:[(0,x.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,x.jsx)("button",{className:void 0!==c?"active":"",disabled:void 0!==c,title:void 0!==c?"Added to wishlist":"Add to wishlist",onClick:function(){return P((0,j.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,x.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):s.variation&&s.variation.length>=1?(0,x.jsx)(d.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select option",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):s.stock&&s.stock>0?(0,x.jsx)("button",{onClick:function(){return P((0,m.bE)(s))},className:void 0!==r&&r.quantity>0?"active":"",disabled:void 0!==r&&r.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsx)("i",{className:"pe-7s-cart"})})}),(0,x.jsx)("div",{className:"pro-same-action pro-compare",children:(0,x.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to compare":"Add to compare",onClick:function(){return P((0,h.wL)(s))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})]}),(0,x.jsx)(p.A,{show:C,onHide:function(){return w(!1)},product:s,currency:i,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:k,wishlistItem:c,compareItem:f})]})},v={loop:!1,slidesPerView:1,spaceBetween:30,grabCursor:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},1200:{slidesPerView:3}}},N=function(e){var s=e.category,i=e.type,t=e.limit,r=e.spaceBottomClass,o=e.colorClass,l=(0,a.d4)((function(e){return e.product})).products,d=(0,a.d4)((function(e){return e.currency})),u=(0,a.d4)((function(e){return e.cart})).cartItems,p=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,m=(0,a.d4)((function(e){return e.compare})).compareItems,j=(0,n.d$)(l,s,i,t);return null!==j&&void 0!==j&&j.length?(0,x.jsx)(c.A,{options:v,children:j.map((function(e){return(0,x.jsx)(c.q,{children:(0,x.jsx)(f,{spaceBottomClass:r,colorClass:o,product:e,currency:d,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))}):(0,x.jsx)("p",{children:"No products found"})},b=function(e){var s=e.spaceBottomClass,i=e.category,a=e.colorClass;return(0,x.jsx)("div",{className:(0,t.A)("related-product-area",s),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(r.A,{titleText:"Our Products",subtitleText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,x.jsx)(N,{category:i,limit:6,colorClass:a})]})})}}}]);
//# sourceMappingURL=4117.81c2f499.chunk.js.map