"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6678],{425:function(e,i,t){var n=t(9379),r=t(5544),s=t(5043),c=t(8906),a=t(4640),o=t(9456),l=t(5913),d=t(7362),u=t(2821),m=t(5721),p=t(4990),h=t(3492),f=t(579);i.A=function(e){var i=e.product,t=e.currency,v=e.discountedPrice,x=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,N=e.onHide,b=e.wishlistItem,w=e.compareItem,y=(0,s.useState)(null),A=(0,r.A)(y,2),k=A[0],C=A[1],S=(0,o.wA)(),P=(0,o.d4)((function(e){return e.cart})).cartItems,q=(0,s.useState)(i.variation?i.variation[0].color:""),I=(0,r.A)(q,2),z=I[0],L=I[1],_=(0,s.useState)(i.variation?i.variation[0].size[0].name:""),F=(0,r.A)(_,2),V=F[0],B=F[1],E=(0,s.useState)(i.variation?i.variation[0].size[0].stock:i.stock),H=(0,r.A)(E,2),R=H[0],T=H[1],D=(0,s.useState)(1),O=(0,r.A)(D,2),Q=O[0],U=O[1],G=(0,u.pQ)(P,i,z,V),J={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:k},modules:[c._R,c.WO]},K={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,f.jsxs)(a.A,{show:g,onHide:function(){C(null),N()},className:"product-quickview-modal-wrapper",children:[(0,f.jsx)(a.A.Header,{closeButton:!0}),(0,f.jsx)("div",{className:"modal-body",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,f.jsx)("div",{className:"product-large-image-wrapper",children:(0,f.jsx)(d.A,{options:J,children:i.image&&i.image.map((function(e,i){return(0,f.jsx)(d.q,{children:(0,f.jsx)("div",{className:"single-image",children:(0,f.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},i)}))})}),(0,f.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,f.jsx)(d.A,{options:K,children:i.image&&i.image.map((function(e,i){return(0,f.jsx)(d.q,{children:(0,f.jsx)("div",{className:"single-image",children:(0,f.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},i)}))})})]}),(0,f.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,f.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,f.jsx)("h2",{children:i.name}),(0,f.jsx)("div",{className:"product-details-price",children:null!==v?(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)("span",{children:t.currencySymbol+j})," ",(0,f.jsx)("span",{className:"old",children:t.currencySymbol+x})]}):(0,f.jsxs)("span",{children:[t.currencySymbol+x," "]})}),i.rating&&i.rating>0?(0,f.jsx)("div",{className:"pro-details-rating-wrap",children:(0,f.jsx)("div",{className:"pro-details-rating",children:(0,f.jsx)(l.A,{ratingValue:i.rating})})}):"",(0,f.jsx)("div",{className:"pro-details-list",children:(0,f.jsx)("p",{children:i.shortDescription})}),i.variation?(0,f.jsxs)("div",{className:"pro-details-size-color",children:[(0,f.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,f.jsx)("span",{children:"Color"}),(0,f.jsx)("div",{className:"pro-details-color-content",children:i.variation.map((function(e,i){return(0,f.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,f.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===z?"checked":"",onChange:function(){L(e.color),B(e.size[0].name),T(e.size[0].stock),U(1)}}),(0,f.jsx)("span",{className:"checkmark"})]},i)}))})]}),(0,f.jsxs)("div",{className:"pro-details-size",children:[(0,f.jsx)("span",{children:"Size"}),(0,f.jsx)("div",{className:"pro-details-size-content",children:i.variation&&i.variation.map((function(e){return e.color===z?e.size.map((function(e,i){return(0,f.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,f.jsx)("input",{type:"radio",value:e.name,checked:e.name===V?"checked":"",onChange:function(){B(e.name),T(e.stock),U(1)}}),(0,f.jsx)("span",{className:"size-name",children:e.name})]},i)})):""}))})]})]}):"",i.affiliateLink?(0,f.jsx)("div",{className:"pro-details-quality",children:(0,f.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,f.jsx)("a",{href:i.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,f.jsxs)("div",{className:"pro-details-quality",children:[(0,f.jsxs)("div",{className:"cart-plus-minus",children:[(0,f.jsx)("button",{onClick:function(){return U(Q>1?Q-1:1)},className:"dec qtybutton",children:"-"}),(0,f.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:Q,readOnly:!0}),(0,f.jsx)("button",{onClick:function(){return U(Q<R-G?Q+1:Q)},className:"inc qtybutton",children:"+"})]}),(0,f.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,f.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,n.A)((0,n.A)({},i),{},{quantity:Q,selectedProductColor:z||(i.selectedProductColor?i.selectedProductColor:null),selectedProductSize:V||(i.selectedProductSize?i.selectedProductSize:null)})))},disabled:G>=R,children:[" ","A\xf1adir al carrito"," "]}):(0,f.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,f.jsx)("div",{className:"pro-details-wishlist",children:(0,f.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,p.U4)(i))},children:(0,f.jsx)("i",{className:"pe-7s-like"})})}),(0,f.jsx)("div",{className:"pro-details-compare",children:(0,f.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,h.wL)(i))},children:(0,f.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,i,t){var n=t(5043),r=t(579);i.A=function(e){for(var i=e.ratingValue,t=[],s=0;s<5;s++)t.push((0,r.jsx)("i",{className:"fa fa-star-o"},s));if(i&&i>0)for(var c=0;c<=i-1;c++)t[c]=(0,r.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,r.jsx)(n.Fragment,{children:t})}},7362:function(e,i,t){t.d(i,{q:function(){return o.qr}});var n=t(436),r=t(9379),s=t(5043),c=t(3024),a=t(8906),o=t(4671),l=t(579),d=(0,s.forwardRef)((function(e,i){var t=e.options,s=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,p=e.navClass,h=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],f="prev-".concat(p||"swiper-nav"),v="next-".concat(p||"swiper-nav"),x=(0,r.A)((0,r.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[a.Vx,a.dK,a.Jq,a.Ij].concat((0,n.A)(h)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(f),nextEl:".".concat(v)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,c.A)("swiper-wrap",m),ref:i,children:[(0,l.jsx)(o.RC,(0,r.A)((0,r.A)({},x),{},{children:u})),(null===x||void 0===x?void 0:x.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(f),children:(0,l.jsx)("i",{className:(0,c.A)(s,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(v),children:(0,l.jsx)("i",{className:(0,c.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},i.A=d},2821:function(e,i,t){t.d(i,{Gj:function(){return o},L:function(){return f},SC:function(){return d},VI:function(){return u},d$:function(){return r},do:function(){return s},e1:function(){return a},nL:function(){return h},pQ:function(){return c},sQ:function(){return v},ur:function(){return p},zf:function(){return m}});var n=t(436),r=function(e,i,t,n){var r=i?e.filter((function(e){return e.category.filter((function(e){return e===i}))[0]})):e;if(t&&"new"===t){var s=r.filter((function(e){return e.new}));return s.slice(0,n||s.length)}if(t&&"bestSeller"===t)return r.sort((function(e,i){return i.saleCount-e.saleCount})).slice(0,n||r.length);if(t&&"saleItems"===t){var c=r.filter((function(e){return e.discount&&e.discount>0}));return c.slice(0,n||c.length)}return r.slice(0,n||r.length)},s=function(e,i){return i&&i>0?e-e*(i/100):null},c=function(e,i,t,n){var r=e.find((function(e){return e.id===i.id&&(!e.selectedProductColor||e.selectedProductColor===t)&&(!e.selectedProductSize||e.selectedProductSize===n)}));return e.length>=1&&r?i.variation?e.find((function(e){return e.id===i.id&&e.selectedProductColor===t&&e.selectedProductSize===n})).quantity:e.find((function(e){return i.id===e.id})).quantity:0},a=function(e,i,t){return e.stock?e.stock:e.variation.filter((function(e){return e.color===i}))[0].size.filter((function(e){return e.name===t}))[0].stock},o=function(e,i,t){if(e&&i&&t){if("category"===i)return e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]}));if("tag"===i)return e.filter((function(e){return e.tag.filter((function(e){return e===t}))[0]}));if("color"===i)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===t}))[0]}));if("size"===i)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===t}))[0]}))[0]}));if("filterSort"===i){var r=(0,n.A)(e);if("default"===t)return r;if("priceHighToLow"===t)return r.sort((function(e,i){return i.price-e.price}));if("priceLowToHigh"===t)return r.sort((function(e,i){return e.price-i.price}))}}return e},l=function(e){return e.filter((function(e,i,t){return i===t.indexOf(e)}))},d=function(e){var i=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return i.push(e)}))})),l(i)},u=function(e){var i=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return i.push(e)}))})),l(i)},m=function(e){var i=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return i.push(e.color)}))})),l(i)},p=function(e){var i=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return i.push(e.name)}))}))})),l(i)},h=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},f=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},v=function(e){var i=document.querySelector("#product-filter-wrapper");i.classList.toggle("active"),i.style.height?i.style.height=null:i.style.height=i.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},970:function(e,i,t){var n=t(1778),r=t(5475),s=t(579);i.A=function(e){var i=e.pages;return(0,s.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(n.A,{children:null===i||void 0===i?void 0:i.map((function(e,t){var c=e.path,a=e.label;return t!==i.length-1?(0,s.jsx)(n.A.Item,{linkProps:{to:c},linkAs:r.N_,children:a},a):(0,s.jsx)(n.A.Item,{active:!0,children:a},a)}))})})})}},7577:function(e,i,t){t.d(i,{A:function(){return x}});var n=t(3024),r=t(5043),s=t(9456),c=t(5544),a=t(5475),o=t(2821),l=t(5913),d=t(425),u=t(5721),m=t(4990),p=t(3492),h=t(579),f=function(e){var i=e.product,t=e.currency,f=e.cartItem,v=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,g=(0,r.useState)(!1),N=(0,c.A)(g,2),b=N[0],w=N[1],y=(0,o.do)(i.price,i.discount),A=+(i.price*t.currencyRate).toFixed(2),k=+(y*t.currencyRate).toFixed(2),C=(0,s.wA)();return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)("div",{className:(0,n.A)("product-wrap",j),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(a.N_,{to:"/conejillo/product/"+i.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+i.image[0],alt:""}),i.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+i.image[1],alt:""}):""]}),i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"A\xf1adido a la lista de deseos":"A\xf1adir a la lista de deseos",onClick:function(){return C((0,m.U4)(i))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:i.affiliateLink?(0,h.jsxs)("a",{href:i.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Comprar ahora"," "]}):i.variation&&i.variation.length>=1?(0,h.jsx)(a.N_,{to:"".concat("/conejillo","/product/").concat(i.id),children:"Select Option"}):i.stock&&i.stock>0?(0,h.jsxs)("button",{onClick:function(){return C((0,u.bE)(i))},className:void 0!==f&&f.quantity>0?"active":"",disabled:void 0!==f&&f.quantity>0,title:void 0!==f?"A\xf1adido al carrito":"A\xf1adir al carrito",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==f&&f.quantity>0?"A\xf1adido":"A\xf1adir al carrito"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Agotado"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{onClick:function(){return w(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(a.N_,{to:"/conejillo/product/"+i.id,children:i.name})}),i.rating&&i.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(l.A,{ratingValue:i.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==y?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:t.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:t.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[t.currencySymbol+A," "]})})]})]}),(0,h.jsx)("div",{className:"shop-list-wrap mb-30",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-xl-4 col-md-5 col-sm-6",children:(0,h.jsx)("div",{className:"product-list-image-wrap",children:(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(a.N_,{to:"/conejillo/product/"+i.id,children:[(0,h.jsx)("img",{className:"default-img img-fluid",src:"/conejillo"+i.image[0],alt:""}),i.image.length>1?(0,h.jsx)("img",{className:"hover-img img-fluid",src:"/conejillo"+i.image[1],alt:""}):""]}),i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):""]})})}),(0,h.jsx)("div",{className:"col-xl-8 col-md-7 col-sm-6",children:(0,h.jsxs)("div",{className:"shop-list-content",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(a.N_,{to:"/conejillo/product/"+i.id,children:i.name})}),(0,h.jsx)("div",{className:"product-list-price",children:null!==y?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:t.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:t.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[t.currencySymbol+A," "]})}),i.rating&&i.rating>0?(0,h.jsx)("div",{className:"rating-review",children:(0,h.jsx)("div",{className:"product-list-rating",children:(0,h.jsx)(l.A,{ratingValue:i.rating})})}):"",i.shortDescription?(0,h.jsx)("p",{children:i.shortDescription}):"",(0,h.jsxs)("div",{className:"shop-list-actions d-flex align-items-center",children:[(0,h.jsx)("div",{className:"shop-list-btn btn-hover",children:i.affiliateLink?(0,h.jsxs)("a",{href:i.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Comprar ahora"," "]}):i.variation&&i.variation.length>=1?(0,h.jsx)(a.N_,{to:"".concat("/conejillo","/product/").concat(i.id),children:"Seleccionar opci\xf3n"}):i.stock&&i.stock>0?(0,h.jsxs)("button",{onClick:function(){return C((0,u.bE)(i))},className:void 0!==f&&f.quantity>0?"active":"",disabled:void 0!==f&&f.quantity>0,title:void 0!==f?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==f&&f.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Agotado"})}),(0,h.jsx)("div",{className:"shop-list-wishlist ml-10",children:(0,h.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return C((0,m.U4)(i))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"shop-list-compare ml-10",children:(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return C((0,p.wL)(i))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})}),(0,h.jsx)(d.A,{show:b,onHide:function(){return w(!1)},product:i,currency:t,discountedPrice:y,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:v,compareItem:x})]})},v=function(e){var i=e.products,t=e.spaceBottomClass,n=(0,s.d4)((function(e){return e.currency})),c=(0,s.d4)((function(e){return e.cart})).cartItems,a=(0,s.d4)((function(e){return e.wishlist})).wishlistItems,o=(0,s.d4)((function(e){return e.compare})).compareItems;return(0,h.jsx)(r.Fragment,{children:null===i||void 0===i?void 0:i.map((function(e){return(0,h.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,h.jsx)(f,{spaceBottomClass:t,product:e,currency:n,cartItem:c.find((function(i){return i.id===e.id})),wishlistItem:a.find((function(i){return i.id===e.id})),compareItem:o.find((function(i){return i.id===e.id}))})},e.id)}))})},x=function(e){var i=e.products,t=e.layout;return(0,h.jsx)("div",{className:"shop-bottom-area mt-35",children:(0,h.jsx)("div",{className:(0,n.A)("row",t),children:(0,h.jsx)(v,{products:i,spaceBottomClass:"mb-25"})})})}}}]);
//# sourceMappingURL=6678.3983e772.chunk.js.map