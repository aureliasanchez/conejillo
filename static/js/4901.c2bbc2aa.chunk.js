/*! For license information please see 4901.c2bbc2aa.chunk.js.LICENSE.txt */
(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4901],{8043:function(e,t,s){"use strict";var i=s(3024),n=s(579);t.A=function(e){var t=e.data,s=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,i.A)("single-brand-logo",s),children:(0,n.jsx)("img",{src:"/conejillo"+t.image,alt:""})})}},4943:function(e,t,s){"use strict";var i=s(3024),n=s(9735),r=s(579),a=function(e){var t,s=e.status,n=e.message,a=e.onValidated,c=e.spaceTopClass,o=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,i.A)("subscribe-form-3",c),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return t=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===s&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===s&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===s&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&a({EMAIL:t.value}),t.value=""},children:"SUBSCRIBE"})})]})})};t.A=function(e){var t=e.mailchimpUrl,s=e.spaceTopClass,i=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(n.A,{url:t,render:function(e){var t=e.subscribe,n=e.status,c=e.message;return(0,r.jsx)(a,{status:n,message:c,onValidated:function(e){return t(e)},spaceTopClass:s,subscribeBtnClass:i})}})})}},425:function(e,t,s){"use strict";var i=s(9379),n=s(5544),r=s(5043),a=s(8906),c=s(4640),o=s(9456),l=s(5913),d=s(7362),u=s(2821),m=s(5721),p=s(4990),f=s(3492),h=s(579);t.A=function(e){var t=e.product,s=e.currency,x=e.discountedPrice,v=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,b=e.onHide,N=e.wishlistItem,y=e.compareItem,C=(0,r.useState)(null),w=(0,n.A)(C,2),A=w[0],k=w[1],S=(0,o.wA)(),P=(0,o.d4)((function(e){return e.cart})).cartItems,B=(0,r.useState)(t.variation?t.variation[0].color:""),I=(0,n.A)(B,2),L=I[0],T=I[1],q=(0,r.useState)(t.variation?t.variation[0].size[0].name:""),_=(0,n.A)(q,2),z=_[0],O=_[1],V=(0,r.useState)(t.variation?t.variation[0].size[0].stock:t.stock),F=(0,n.A)(V,2),E=F[0],R=F[1],H=(0,r.useState)(1),U=(0,n.A)(H,2),M=U[0],D=U[1],J=(0,u.pQ)(P,t,L,z),Q={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:A},modules:[a._R,a.WO]},$={onSwiper:k,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(c.A,{show:g,onHide:function(){k(null),b()},className:"product-quickview-modal-wrapper",children:[(0,h.jsx)(c.A.Header,{closeButton:!0}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,h.jsx)("div",{className:"product-large-image-wrapper",children:(0,h.jsx)(d.A,{options:Q,children:t.image&&t.image.map((function(e,t){return(0,h.jsx)(d.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},t)}))})}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,h.jsx)(d.A,{options:$,children:t.image&&t.image.map((function(e,t){return(0,h.jsx)(d.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},t)}))})})]}),(0,h.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,h.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,h.jsx)("h2",{children:t.name}),(0,h.jsx)("div",{className:"product-details-price",children:null!==x?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{children:s.currencySymbol+j})," ",(0,h.jsx)("span",{className:"old",children:s.currencySymbol+v})]}):(0,h.jsxs)("span",{children:[s.currencySymbol+v," "]})}),t.rating&&t.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap",children:(0,h.jsx)("div",{className:"pro-details-rating",children:(0,h.jsx)(l.A,{ratingValue:t.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:t.shortDescription})}),t.variation?(0,h.jsxs)("div",{className:"pro-details-size-color",children:[(0,h.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,h.jsx)("span",{children:"Color"}),(0,h.jsx)("div",{className:"pro-details-color-content",children:t.variation.map((function(e,t){return(0,h.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,h.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===L?"checked":"",onChange:function(){T(e.color),O(e.size[0].name),R(e.size[0].stock),D(1)}}),(0,h.jsx)("span",{className:"checkmark"})]},t)}))})]}),(0,h.jsxs)("div",{className:"pro-details-size",children:[(0,h.jsx)("span",{children:"Size"}),(0,h.jsx)("div",{className:"pro-details-size-content",children:t.variation&&t.variation.map((function(e){return e.color===L?e.size.map((function(e,t){return(0,h.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,h.jsx)("input",{type:"radio",value:e.name,checked:e.name===z?"checked":"",onChange:function(){O(e.name),R(e.stock),D(1)}}),(0,h.jsx)("span",{className:"size-name",children:e.name})]},t)})):""}))})]})]}):"",t.affiliateLink?(0,h.jsx)("div",{className:"pro-details-quality",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,h.jsx)("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,h.jsxs)("div",{className:"pro-details-quality",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return D(M>1?M-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:M,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return D(M<E-J?M+1:M)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:E&&E>0?(0,h.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,i.A)((0,i.A)({},t),{},{quantity:M,selectedProductColor:L||(t.selectedProductColor?t.selectedProductColor:null),selectedProductSize:z||(t.selectedProductSize?t.selectedProductSize:null)})))},disabled:J>=E,children:[" ","A\xf1adir al carrito"," "]}):(0,h.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,p.U4)(t))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==y?"active":"",disabled:void 0!==y,title:void 0!==y?"Added to compare":"Add to compare",onClick:function(){return S((0,f.wL)(t))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,t,s){"use strict";var i=s(5043),n=s(579);t.A=function(e){for(var t=e.ratingValue,s=[],r=0;r<5;r++)s.push((0,n.jsx)("i",{className:"fa fa-star-o"},r));if(t&&t>0)for(var a=0;a<=t-1;a++)s[a]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,n.jsx)(i.Fragment,{children:s})}},7194:function(e,t,s){"use strict";var i=s(3024),n=s(579);t.A=function(e){var t=e.titleText,s=e.subtitleText,r=e.positionClass,a=e.spaceClass,c=e.borderClass;return(0,n.jsxs)("div",{className:(0,i.A)("section-title-8",r,a,c),children:[(0,n.jsx)("h2",{children:t}),(0,n.jsx)("p",{children:s})]})}},7362:function(e,t,s){"use strict";s.d(t,{q:function(){return o.qr}});var i=s(436),n=s(9379),r=s(5043),a=s(3024),c=s(8906),o=s(4671),l=s(579),d=(0,r.forwardRef)((function(e,t){var s=e.options,r=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,p=e.navClass,f=void 0!==(null===s||void 0===s?void 0:s.modules)?s.modules:[],h="prev-".concat(p||"swiper-nav"),x="next-".concat(p||"swiper-nav"),v=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===s||void 0===s||!s.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},s),{},{modules:[c.Vx,c.dK,c.Jq,c.Ij].concat((0,i.A)(f)),navigation:!(null===s||void 0===s||!s.navigation)&&{prevEl:".".concat(h),nextEl:".".concat(x)},pagination:!(null===s||void 0===s||!s.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:t,children:[(0,l.jsx)(o.RC,(0,n.A)((0,n.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(h),children:(0,l.jsx)("i",{className:(0,a.A)(r,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(x),children:(0,l.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},t.A=d},2821:function(e,t,s){"use strict";s.d(t,{Gj:function(){return o},L:function(){return h},SC:function(){return d},VI:function(){return u},d$:function(){return n},do:function(){return r},e1:function(){return c},nL:function(){return f},pQ:function(){return a},sQ:function(){return x},ur:function(){return p},zf:function(){return m}});var i=s(436),n=function(e,t,s,i){var n=t?e.filter((function(e){return e.category.filter((function(e){return e===t}))[0]})):e;if(s&&"new"===s){var r=n.filter((function(e){return e.new}));return r.slice(0,i||r.length)}if(s&&"bestSeller"===s)return n.sort((function(e,t){return t.saleCount-e.saleCount})).slice(0,i||n.length);if(s&&"saleItems"===s){var a=n.filter((function(e){return e.discount&&e.discount>0}));return a.slice(0,i||a.length)}return n.slice(0,i||n.length)},r=function(e,t){return t&&t>0?e-e*(t/100):null},a=function(e,t,s,i){var n=e.find((function(e){return e.id===t.id&&(!e.selectedProductColor||e.selectedProductColor===s)&&(!e.selectedProductSize||e.selectedProductSize===i)}));return e.length>=1&&n?t.variation?e.find((function(e){return e.id===t.id&&e.selectedProductColor===s&&e.selectedProductSize===i})).quantity:e.find((function(e){return t.id===e.id})).quantity:0},c=function(e,t,s){return e.stock?e.stock:e.variation.filter((function(e){return e.color===t}))[0].size.filter((function(e){return e.name===s}))[0].stock},o=function(e,t,s){if(e&&t&&s){if("category"===t)return e.filter((function(e){return e.category.filter((function(e){return e===s}))[0]}));if("tag"===t)return e.filter((function(e){return e.tag.filter((function(e){return e===s}))[0]}));if("color"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.color===s}))[0]}));if("size"===t)return e.filter((function(e){return e.variation&&e.variation.filter((function(e){return e.size.filter((function(e){return e.name===s}))[0]}))[0]}));if("filterSort"===t){var n=(0,i.A)(e);if("default"===s)return n;if("priceHighToLow"===s)return n.sort((function(e,t){return t.price-e.price}));if("priceLowToHigh"===s)return n.sort((function(e,t){return e.price-t.price}))}}return e},l=function(e){return e.filter((function(e,t,s){return t===s.indexOf(e)}))},d=function(e){var t=[];return e&&e.map((function(e){return e.category&&e.category.map((function(e){return t.push(e)}))})),l(t)},u=function(e){var t=[];return e&&e.map((function(e){return e.tag&&e.tag.map((function(e){return t.push(e)}))})),l(t)},m=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return t.push(e.color)}))})),l(t)},p=function(e){var t=[];return e&&e.map((function(e){return e.variation&&e.variation.map((function(e){return e.size.map((function(e){return t.push(e.name)}))}))})),l(t)},f=function(e){document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},h=function(e){document.querySelectorAll(".shop-tab button").forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active")},x=function(e){var t=document.querySelector("#product-filter-wrapper");t.classList.toggle("active"),t.style.height?t.style.height=null:t.style.height=t.scrollHeight+"px",e.currentTarget.classList.toggle("active")}},2063:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return R}});var i=s(5043),n=s(2168),r=s(8062),a=s(3024),c=s(7362),o=s(8043),l=s(4885),d=s(7194),u=s(579),m={loop:!0,autoplay:!0,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}},p=function(e){var t=e.spaceBottomClass,s=e.spaceTopClass;return(0,u.jsx)("div",{className:(0,a.A)("brand-logo-area",t,s),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(d.A,{titleText:"Our Clients",positionClass:"text-center",spaceClass:"mb-50",borderClass:"no-border"}),(0,u.jsx)("div",{className:"brand-logo-active",children:l&&(0,u.jsx)(c.A,{options:m,children:l.map((function(e,t){return(0,u.jsx)(c.q,{children:(0,u.jsx)(o.A,{data:e,spaceBottomClass:"mb-30"})},t)}))})})]})})},f=s(4943),h=function(e){var t=e.spaceTopClass,s=e.spaceBottomClass,i=e.subscribeBtnClass,n=e.bgColorClass;return(0,u.jsx)("div",{className:(0,a.A)("subscribe-area-3",t,s,n),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,u.jsxs)("div",{className:"subscribe-style-3 subscribe-style-3--title-style2 text-center",children:[(0,u.jsx)("h2",{children:"Get in touch "}),(0,u.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,u.jsx)(f.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:i})]})})})})})},x=s(3063),v=s(5475),j=function(e){var t=e.spaceTopClass,s=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,a.A)("banner-area",t,s),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-8",children:(0,u.jsx)("div",{className:"single-banner mb-30",children:(0,u.jsx)(v.N_,{to:"/conejillo/shop-grid-standard",children:(0,u.jsx)("img",{src:"/conejillo/assets/img/banner/banner-42.jpg",alt:"",className:"img-fluid"})})})}),(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsx)("div",{className:"single-banner mb-30",children:(0,u.jsx)(v.N_,{to:"/conejillo/shop-grid-standard",children:(0,u.jsx)("img",{src:"/conejillo/assets/img/banner/banner-38.jpg",alt:"",className:"img-fluid"})})})})]})})})},g=s(9456),b=s(2821),N=s(5544),y=s(425),C=s(5721),w=s(4990),A=s(3492),k=function(e){var t=e.product,s=e.currency,n=e.cartItem,r=e.wishlistItem,c=e.compareItem,o=e.spaceBottomClass,l=e.colorClass,d=(0,i.useState)(!1),m=(0,N.A)(d,2),p=m[0],f=m[1],h=(0,b.do)(t.price,t.discount),x=+(t.price*s.currencyRate).toFixed(2),j=+(h*s.currencyRate).toFixed(2),k=(0,g.wA)();return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsxs)("div",{className:(0,a.A)("product-wrap-9",o,l),children:[(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsxs)(v.N_,{to:"/conejillo/product/"+t.id,children:[(0,u.jsx)("img",{className:"default-img",src:"/conejillo"+t.image[0],alt:""}),t.image.length>1?(0,u.jsx)("img",{className:"hover-img",src:"/conejillo"+t.image[1],alt:""}):""]}),t.discount||t.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[t.discount?(0,u.jsxs)("span",{className:"pink",children:["-",t.discount,"%"]}):"",t.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsxs)("div",{className:"product-action-2",children:[t.affiliateLink?(0,u.jsxs)("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):t.variation&&t.variation.length>=1?(0,u.jsx)(v.N_,{to:"".concat("/conejillo","/product/").concat(t.id),title:"Select options",children:(0,u.jsx)("i",{className:"fa fa-cog"})}):t.stock&&t.stock>0?(0,u.jsx)("button",{onClick:function(){return k((0,C.bE)(t))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==n?"Added to cart":"Add to cart",children:(0,u.jsx)("i",{className:"fa fa-shopping-cart"})}):(0,u.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,u.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,u.jsx)("button",{onClick:function(){return f(!0)},title:"Quick View",children:(0,u.jsx)("i",{className:"fa fa-eye"})}),(0,u.jsx)("button",{className:void 0!==c?"active":"",disabled:void 0!==c,title:void 0!==c?"Added to compare":"Add to compare",onClick:function(){return k((0,A.wL)(t))},children:(0,u.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,u.jsxs)("div",{className:"product-content-2",children:[(0,u.jsxs)("div",{className:"title-price-wrap-2",children:[(0,u.jsx)("h3",{children:(0,u.jsx)(v.N_,{to:"/conejillo/product/"+t.id,children:t.name})}),(0,u.jsx)("div",{className:"price-2",children:null!==h?(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("span",{className:"old",children:s.currencySymbol+x})," ",(0,u.jsx)("span",{children:s.currencySymbol+j})]}):(0,u.jsxs)("span",{children:[s.currencySymbol+x," "]})})]}),(0,u.jsx)("div",{className:"pro-wishlist-2",children:(0,u.jsx)("button",{className:void 0!==r?"active":"",disabled:void 0!==r,title:void 0!==r?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,w.U4)(t))},children:(0,u.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,u.jsx)(y.A,{show:p,onHide:function(){return f(!1)},product:t,currency:s,discountedPrice:h,finalProductPrice:x,finalDiscountedPrice:j,wishlistItem:r,compareItem:c})]})},S={loop:!1,slidesPerView:4,spaceBetween:30,grabCursor:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},P=function(e){var t=e.spaceBottomClass,s=e.colorClass,i=e.category,n=e.type,r=e.limit,a=(0,g.d4)((function(e){return e.product})).products,o=(0,g.d4)((function(e){return e.currency})),l=(0,g.d4)((function(e){return e.cart})).cartItems,d=(0,g.d4)((function(e){return e.wishlist})).wishlistItems,m=(0,g.d4)((function(e){return e.compare})).compareItems,p=(0,b.d$)(a,i,n,r);return null!==p&&void 0!==p&&p.length?(0,u.jsx)(c.A,{options:S,children:p.map((function(e){return(0,u.jsx)(c.q,{children:(0,u.jsx)(k,{spaceBottomClass:t,colorClass:s,product:e,currency:o,cartItem:l.find((function(t){return t.id===e.id})),wishlistItem:d.find((function(t){return t.id===e.id})),compareItem:m.find((function(t){return t.id===e.id}))})},e.id)}))}):(0,u.jsx)("p",{children:"No products found"})},B=function(e){var t=e.spaceBottomClass,s=e.category;return(0,u.jsx)("div",{className:(0,a.A)("related-product-area",t),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(d.A,{titleText:"New Products",subtitleText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",spaceClass:"mb-55",borderClass:"no-border",positionClass:"text-center"}),(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(P,{category:s,limit:6,type:"new"})})]})})},I=s(7173),L=function(e){var t=e.spaceBottomClass,s=(0,i.useState)(!1),n=(0,N.A)(s,2),r=n[0],c=n[1];return(0,u.jsx)("div",{className:(0,a.A)("video-popup",t),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row align-items-center",children:[(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsx)("div",{className:"video-popup__image",children:(0,u.jsx)("img",{src:"/conejillo/assets/img/banner/banner-41.jpg",alt:"",className:"img-fluid"})})}),(0,u.jsx)("div",{className:"col-lg-6",children:(0,u.jsxs)("div",{className:"video-popup__content",children:[(0,u.jsx)("h2",{className:"title mb-30",children:"Supro is the modern luxury shopping destination"}),(0,u.jsx)("p",{className:"text mb-30",children:"Lorem ipsum dolor sit amet, consectetb adipisicing elit sed do eiusmod tempor incididunt."}),(0,u.jsx)("div",{className:"link mb-30",children:(0,u.jsx)(v.N_,{to:"/conejillo/about",children:"More About Us"})}),(0,u.jsx)(I.A,{channel:"youtube",isOpen:r,videoId:"feOScd2HdiU",onClose:function(){return c(!1)}}),(0,u.jsx)("button",{onClick:function(){return c(!0)},children:(0,u.jsx)("i",{className:"fa fa-play-circle"})})]})})]})})})},T=JSON.parse('[{"id":1,"title":"Free Shipping","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":2,"title":"Support 24/7","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":3,"title":"Money Return","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"}]'),q=function(e){var t=e.data,s=e.spaceBottomClass,i=e.textAlignClass;return(0,u.jsx)("div",{className:(0,a.A)("support-wrap-5 support-shape",s,i),children:(0,u.jsxs)("div",{className:"support-content-5",children:[(0,u.jsx)("h5",{children:t.title}),(0,u.jsx)("p",{children:t.subtitle})]})})},_=function(e){var t=e.spaceTopClass,s=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,a.A)("support-area",t,s),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"border-bottom",children:(0,u.jsx)("div",{className:"row feature-icon-two-wrap",children:null===T||void 0===T?void 0:T.map((function(e,t){return(0,u.jsx)("div",{className:"col-md-4",children:(0,u.jsx)(q,{data:e,spaceBottomClass:"mb-30",textAlignClass:"text-center"})},t)}))})})})})},z=s(8906),O=JSON.parse('[{"id":1,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2024","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Best Products Collection","subtitle":"Final Sale For <br /> 2024","image":"/assets/img/slider/slider-30.jpg","url":"/shop-grid-standard"}]'),V=function(e){var t=e.data;return(0,u.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat("/conejillo"+t.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,u.jsxs)("div",{className:"slider-content-red slider-content-2 slider-content-2--white slider-animated-1",children:[(0,u.jsx)("h3",{className:"animated no-style",children:t.title}),(0,u.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:t.subtitle}}),(0,u.jsx)("div",{className:"slider-btn-red btn-hover",children:(0,u.jsx)(v.N_,{className:"animated",to:"/conejillo"+t.url,children:"Shop Now"})})]})})})})})},F={effect:"fade",fadeEffect:{crossFade:!0},modules:[z._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},E=function(){return(0,u.jsx)("div",{className:"slider-area",children:(0,u.jsx)("div",{className:"slider-active nav-style-1",children:O&&(0,u.jsx)(c.A,{options:F,children:O.map((function(e,t){return(0,u.jsx)(c.q,{children:(0,u.jsx)(V,{data:e})},t)}))})})})},R=function(){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(n.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,u.jsxs)(r.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",children:[(0,u.jsx)(E,{}),(0,u.jsx)(_,{spaceBottomClass:"pb-100",spaceTopClass:"pt-30"}),(0,u.jsx)(L,{spaceBottomClass:"pb-100"}),(0,u.jsx)(B,{category:"fashion"}),(0,u.jsx)(j,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,u.jsx)(x.A,{category:"fashion"}),(0,u.jsx)(p,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"}),(0,u.jsx)(h,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",subscribeBtnClass:"hover-red",bgColorClass:"bg-gray-7"})]})]})}},3063:function(e,t,s){"use strict";s.d(t,{A:function(){return b}});var i=s(3024),n=s(7194),r=s(9456),a=s(7362),c=s(2821),o=s(5544),l=s(5043),d=s(5475),u=s(5913),m=s(425),p=s(5721),f=s(4990),h=s(3492),x=s(579),v=function(e){var t=e.product,s=e.currency,n=e.cartItem,a=e.wishlistItem,v=e.compareItem,j=e.spaceBottomClass,g=e.colorClass,b=(0,l.useState)(!1),N=(0,o.A)(b,2),y=N[0],C=N[1],w=(0,c.do)(t.price,t.discount),A=+(t.price*s.currencyRate).toFixed(2),k=+(w*s.currencyRate).toFixed(2),S=(0,r.wA)();return(0,x.jsxs)(l.Fragment,{children:[(0,x.jsxs)("div",{className:(0,i.A)("product-wrap-8",j,g),children:[(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsx)(d.N_,{to:"/conejillo/product/"+t.id,children:(0,x.jsx)("img",{className:"default-img img-fluid",src:"/conejillo"+t.image[0],alt:""})}),t.discount||t.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[t.discount?(0,x.jsxs)("span",{className:"pink",children:["-",t.discount,"%"]}):"",t.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):""]}),(0,x.jsxs)("div",{className:"product-content",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(d.N_,{to:"/conejillo/product/"+t.id,children:t.name})}),(0,x.jsx)("div",{className:"product-price",children:null!==w?(0,x.jsxs)(l.Fragment,{children:[(0,x.jsx)("span",{className:"old",children:s.currencySymbol+A}),(0,x.jsx)("span",{children:s.currencySymbol+k})]}):(0,x.jsxs)("span",{children:[s.currencySymbol+A," "]})}),t.rating&&t.rating>0?(0,x.jsx)("div",{className:"product-rating",children:(0,x.jsx)(u.A,{ratingValue:t.rating})}):"",(0,x.jsxs)("div",{className:"product-action",children:[(0,x.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,x.jsx)("button",{className:void 0!==a?"active":"",disabled:void 0!==a,title:void 0!==a?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,f.U4)(t))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-same-action pro-cart",children:t.affiliateLink?(0,x.jsx)("a",{href:t.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):t.variation&&t.variation.length>=1?(0,x.jsx)(d.N_,{to:"".concat("/conejillo","/product/").concat(t.id),title:"Select option",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):t.stock&&t.stock>0?(0,x.jsx)("button",{onClick:function(){return S((0,p.bE)(t))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==n?"Added to cart":"Add to cart",children:(0,x.jsx)("i",{className:"pe-7s-cart"})}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsx)("i",{className:"pe-7s-cart"})})}),(0,x.jsx)("div",{className:"pro-same-action pro-compare",children:(0,x.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to compare":"Add to compare",onClick:function(){return S((0,h.wL)(t))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})]}),(0,x.jsx)(m.A,{show:y,onHide:function(){return C(!1)},product:t,currency:s,discountedPrice:w,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:a,compareItem:v})]})},j={loop:!1,slidesPerView:1,spaceBetween:30,grabCursor:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},1200:{slidesPerView:3}}},g=function(e){var t=e.category,s=e.type,i=e.limit,n=e.spaceBottomClass,o=e.colorClass,l=(0,r.d4)((function(e){return e.product})).products,d=(0,r.d4)((function(e){return e.currency})),u=(0,r.d4)((function(e){return e.cart})).cartItems,m=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,r.d4)((function(e){return e.compare})).compareItems,f=(0,c.d$)(l,t,s,i);return null!==f&&void 0!==f&&f.length?(0,x.jsx)(a.A,{options:j,children:f.map((function(e){return(0,x.jsx)(a.q,{children:(0,x.jsx)(v,{spaceBottomClass:n,colorClass:o,product:e,currency:d,cartItem:u.find((function(t){return t.id===e.id})),wishlistItem:m.find((function(t){return t.id===e.id})),compareItem:p.find((function(t){return t.id===e.id}))})},e.id)}))}):(0,x.jsx)("p",{children:"No products found"})},b=function(e){var t=e.spaceBottomClass,s=e.category,r=e.colorClass;return(0,x.jsx)("div",{className:(0,i.A)("related-product-area",t),children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(n.A,{titleText:"Our Products",subtitleText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,x.jsx)(g,{category:s,limit:6,colorClass:r})]})})}},2667:function(e,t,s){"use strict";s.d(t,{A:function(){return n}});var i=s(5043);function n(){return(0,i.useState)(null)}},8232:function(e,t,s){"use strict";var i=s(5043);t.A=function(e){var t=(0,i.useRef)(e);return(0,i.useEffect)((function(){t.current=e}),[e]),t}},1456:function(e,t,s){"use strict";s.d(t,{A:function(){return r}});var i=s(5043),n=s(8232);function r(e){var t=(0,n.A)(e);return(0,i.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},4723:function(e,t,s){"use strict";var i=s(5043),n="undefined"!==typeof s.g&&s.g.navigator&&"ReactNative"===s.g.navigator.product,r="undefined"!==typeof document;t.A=r||n?i.useLayoutEffect:i.useEffect},6723:function(e,t,s){"use strict";s.d(t,{A:function(){return n}});var i=s(5043);function n(){var e=(0,i.useRef)(!0),t=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}},1342:function(e,t,s){"use strict";s.d(t,{A:function(){return n}});var i=s(5043);function n(e){var t=(0,i.useRef)(null);return(0,i.useEffect)((function(){t.current=e})),t.current}},7852:function(e,t,s){"use strict";s.d(t,{Wz:function(){return c},oU:function(){return a}});var i=s(5043),n=(s(579),["xxl","xl","lg","md","sm","xs"]),r=i.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"});r.Consumer,r.Provider;function a(e,t){var s=(0,i.useContext)(r).prefixes;return e||s[t]||t}function c(){return"rtl"===(0,i.useContext)(r).dir}},8139:function(e,t){var s;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=a(e,r(s)))}return e}function r(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)i.call(e,s)&&e[s]&&(t=a(t,s));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()},8168:function(e,t,s){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)({}).hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},i.apply(null,arguments)}s.d(t,{A:function(){return i}})},45:function(e,t,s){"use strict";s.d(t,{A:function(){return n}});var i=s(8587);function n(e,t){if(null==e)return{};var s,n,r=(0,i.A)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.includes(s)||{}.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}},8587:function(e,t,s){"use strict";function i(e,t){if(null==e)return{};var s={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.includes(i))continue;s[i]=e[i]}return s}s.d(t,{A:function(){return i}})},4885:function(e){"use strict";e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')}}]);
//# sourceMappingURL=4901.c2bbc2aa.chunk.js.map