"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6383],{8032:function(e,s,i){i.d(s,{A:function(){return o}});var a=i(5544),n=i(3024),t=i(5043),r=function(e){var s=new Date(e).getTime(),i=(0,t.useState)(s-(new Date).getTime()),n=(0,a.A)(i,2),r=n[0],c=n[1];return(0,t.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){c(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},c=i(579),l=function(e){var s=e.value,i=e.type;return(0,c.jsxs)("span",{className:"cdown",children:[s," ",(0,c.jsx)("p",{children:i})]})},o=function(e){var s=e.date,i=e.className,t=r(s),o=(0,a.A)(t,4),d=o[0],u=o[1],m=o[2],p=o[3];return(0,c.jsxs)("div",{className:(0,n.A)("timer timer-style",i),children:[(0,c.jsx)(l,{value:d,type:"days"}),(0,c.jsx)(l,{value:u,type:"hours"}),(0,c.jsx)(l,{value:m,type:"minutes"}),(0,c.jsx)(l,{value:p,type:"secs"})]})}},4943:function(e,s,i){var a=i(3024),n=i(9735),t=i(579),r=function(e){var s,i=e.status,n=e.message,r=e.onValidated,c=e.spaceTopClass,l=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-form-3",c),children:(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===i&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===i&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,t.jsx)("div",{className:"clear-3 ".concat(l||""),children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,i=e.spaceTopClass,a=e.subscribeBtnClass;return(0,t.jsx)("div",{children:(0,t.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,n=e.status,c=e.message;return(0,t.jsx)(r,{status:n,message:c,onValidated:function(e){return s(e)},spaceTopClass:i,subscribeBtnClass:a})}})})}},8067:function(e,s,i){var a=i(5544),n=i(5043),t=i(3024),r=i(5475),c=i(9456),l=i(2821),o=i(425),d=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.currency,h=e.cartItem,v=e.wishlistItem,x=e.compareItem,f=e.spaceBottomClass,j=e.colorClass,b=e.titlePriceClass,N=(0,n.useState)(!1),g=(0,a.A)(N,2),w=g[0],y=g[1],A=(0,l.do)(s.price,s.discount),C=+(s.price*i.currencyRate).toFixed(2),k=+(A*i.currencyRate).toFixed(2),S=(0,c.wA)();return(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)("div",{className:(0,t.A)("product-wrap-2",f,j),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsxs)(r.N_,{to:"/conejillo/product/"+s.id,children:[(0,p.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,p.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(r.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,p.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,p.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,p.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,p.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,p.jsx)("i",{className:"fa fa-eye"})}),(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return S((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,p.jsxs)("div",{className:"product-content-2",children:[(0,p.jsxs)("div",{className:"title-price-wrap-2 ".concat(b||""),children:[(0,p.jsx)("h3",{children:(0,p.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,p.jsx)("div",{className:"price-2",children:null!==A?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("span",{children:i.currencySymbol+k})," ",(0,p.jsx)("span",{className:"old",children:i.currencySymbol+C})]}):(0,p.jsxs)("span",{children:[i.currencySymbol+C," "]})})]}),(0,p.jsx)("div",{className:"pro-wishlist-2",children:(0,p.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,p.jsx)(o.A,{show:w,onHide:function(){return y(!1)},product:s,currency:i,discountedPrice:A,finalProductPrice:C,finalDiscountedPrice:k,wishlistItem:v,compareItem:x})]})}},425:function(e,s,i){var a=i(9379),n=i(5544),t=i(5043),r=i(8906),c=i(4640),l=i(9456),o=i(5913),d=i(7362),u=i(2821),m=i(5721),p=i(4990),h=i(3492),v=i(579);s.A=function(e){var s=e.product,i=e.currency,x=e.discountedPrice,f=e.finalProductPrice,j=e.finalDiscountedPrice,b=e.show,N=e.onHide,g=e.wishlistItem,w=e.compareItem,y=(0,t.useState)(null),A=(0,n.A)(y,2),C=A[0],k=A[1],S=(0,l.wA)(),P=(0,l.d4)((function(e){return e.cart})).cartItems,I=(0,t.useState)(s.variation?s.variation[0].color:""),z=(0,n.A)(I,2),B=z[0],q=z[1],E=(0,t.useState)(s.variation?s.variation[0].size[0].name:""),T=(0,n.A)(E,2),L=T[0],_=T[1],V=(0,t.useState)(s.variation?s.variation[0].size[0].stock:s.stock),H=(0,n.A)(V,2),F=H[0],M=H[1],D=(0,t.useState)(1),O=(0,n.A)(D,2),R=O[0],U=O[1],Y=(0,u.pQ)(P,s,B,L),J={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[r._R,r.WO]};return(0,v.jsxs)(c.A,{show:b,onHide:function(){k(null),N()},className:"product-quickview-modal-wrapper",children:[(0,v.jsx)(c.A.Header,{closeButton:!0}),(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:(0,v.jsx)("div",{className:"product-large-image-wrapper",children:(0,v.jsx)(d.A,{options:J,children:s.image&&s.image.map((function(e,s){return(0,v.jsx)(d.q,{children:(0,v.jsx)("div",{className:"single-image",children:(0,v.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},s)}))})})}),(0,v.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,v.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,v.jsx)("h2",{children:s.name}),(0,v.jsx)("div",{className:"product-details-price",children:null!==x?(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)("span",{children:i.currencySymbol+j})," ",(0,v.jsx)("span",{className:"old",children:i.currencySymbol+f})]}):(0,v.jsxs)("span",{children:[i.currencySymbol+f," "]})}),s.rating&&s.rating>0?(0,v.jsx)("div",{className:"pro-details-rating-wrap",children:(0,v.jsx)("div",{className:"pro-details-rating",children:(0,v.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,v.jsx)("div",{className:"pro-details-list",children:(0,v.jsx)("p",{children:s.shortDescription})}),s.variation?(0,v.jsxs)("div",{className:"pro-details-size-color",children:[(0,v.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,v.jsx)("span",{children:"Color"}),(0,v.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,v.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,v.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===B?"checked":"",onChange:function(){q(e.color),_(e.size[0].name),M(e.size[0].stock),U(1)}}),(0,v.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,v.jsxs)("div",{className:"pro-details-size",children:[(0,v.jsx)("span",{children:"Size"}),(0,v.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===B?e.size.map((function(e,s){return(0,v.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,v.jsx)("input",{type:"radio",value:e.name,checked:e.name===L?"checked":"",onChange:function(){_(e.name),M(e.stock),U(1)}}),(0,v.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,v.jsx)("div",{className:"pro-details-quality",children:(0,v.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,v.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,v.jsxs)("div",{className:"pro-details-quality",children:[(0,v.jsxs)("div",{className:"cart-plus-minus",children:[(0,v.jsx)("button",{onClick:function(){return U(R>1?R-1:1)},className:"dec qtybutton",children:"-"}),(0,v.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:R,readOnly:!0}),(0,v.jsx)("button",{onClick:function(){return U(R<F-Y?R+1:R)},className:"inc qtybutton",children:"+"})]}),(0,v.jsx)("div",{className:"pro-details-cart btn-hover",children:F&&F>0?(0,v.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,a.A)((0,a.A)({},s),{},{quantity:R,selectedProductColor:B||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:L||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:Y>=F,children:[" ","A\xf1adir al carrito"," "]}):(0,v.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,v.jsx)("div",{className:"pro-details-wishlist",children:(0,v.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Agregado a la lista de deseos":"Agregar a la lista de deseos",onClick:function(){return S((0,p.U4)(s))},children:(0,v.jsx)("i",{className:"pe-7s-like"})})}),(0,v.jsx)("div",{className:"pro-details-compare",children:(0,v.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Agregado para comparar":"Agregar para comparar",onClick:function(){return S((0,h.wL)(s))},children:(0,v.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,i){var a=i(5043),n=i(579);s.A=function(e){for(var s=e.ratingValue,i=[],t=0;t<5;t++)i.push((0,n.jsx)("i",{className:"fa fa-star-o"},t));if(s&&s>0)for(var r=0;r<=s-1;r++)i[r]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},r);return(0,n.jsx)(a.Fragment,{children:i})}},6998:function(e,s,i){i.d(s,{A:function(){return c}});var a=i(5544),n=i(5043),t=function(){var e=(0,n.useState)(!1),s=(0,a.A)(e,2),i=s[0],t=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;t(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[i]),{stick:i,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},r=i(579),c=function(){var e=t(),s=e.stick,i=e.onClickHandler;return s?(0,r.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:i,children:(0,r.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},6387:function(e,s,i){var a=i(579);s.A=function(e){var s=e.titleText;return(0,a.jsx)("div",{className:"section-title-4",children:(0,a.jsx)("h3",{className:"bg-gray-5",children:s})})}},7362:function(e,s,i){i.d(s,{q:function(){return l.qr}});var a=i(436),n=i(9379),t=i(5043),r=i(3024),c=i(8906),l=i(4671),o=i(579),d=(0,t.forwardRef)((function(e,s){var i=e.options,t=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,p=e.navClass,h=void 0!==(null===i||void 0===i?void 0:i.modules)?i.modules:[],v="prev-".concat(p||"swiper-nav"),x="next-".concat(p||"swiper-nav"),f=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===i||void 0===i||!i.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},i),{},{modules:[c.Vx,c.dK,c.Jq,c.Ij].concat((0,a.A)(h)),navigation:!(null===i||void 0===i||!i.navigation)&&{prevEl:".".concat(v),nextEl:".".concat(x)},pagination:!(null===i||void 0===i||!i.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,r.A)("swiper-wrap",m),ref:s,children:[(0,o.jsx)(l.RC,(0,n.A)((0,n.A)({},f),{},{children:u})),(null===f||void 0===f?void 0:f.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(v),children:(0,o.jsx)("i",{className:(0,r.A)(t,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(x),children:(0,o.jsx)("i",{className:(0,r.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},7766:function(e,s,i){i.d(s,{A:function(){return h}});var a=i(5544),n=i(5043),t=i(3024),r=(i(3188),i(3189)),c=i(5911),l=i(3032),o=i(5173),d=i.n(o),u=(i(9456),i(3468),function(e){e.borderStyle});u.propTypes={borderStyle:d().string};var m=u,p=i(579),h=function(e){var s=e.layout,i=e.top,o=e.borderStyle,d=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,v=(0,n.useState)(0),x=(0,a.A)(v,2),f=x[0],j=x[1],b=(0,n.useState)(0),N=(0,a.A)(b,2),g=N[0],w=N[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){j(window.scrollY)};return(0,p.jsxs)("header",{className:(0,t.A)("header-area clearfix",h,u),children:[(0,p.jsx)("div",{className:(0,t.A)("header-top-area",d,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsx)(m,{borderStyle:o})})}),(0,p.jsxs)("div",{className:(0,t.A)(d,"sticky-bar header-res-padding clearfix",f>g&&"stick"),children:[(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,p.jsx)(r.A,{})}),(0,p.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,p.jsx)(c.A,{})})]})}),(0,p.jsx)(l.A,{})]})]})}},9340:function(e,s,i){var a=i(3024),n=i(4943),t=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.subscribeBtnClass,c=e.bgColorClass,l=e.subscribeColorClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-area-3",c,s,i),children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,t.jsxs)("div",{className:(0,a.A)("subscribe-style-3 text-center",l),children:[(0,t.jsx)("h2",{children:"Join With Us! "}),(0,t.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,t.jsx)(n.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},4315:function(e,s,i){var a=i(9456),n=i(7362),t=i(2821),r=i(8067),c=i(579),l={loop:!1,grabCursor:!0,observer:!0,observeParents:!0,spaceBetween:30,navigation:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,i=e.colorClass,o=e.titlePriceClass,d=e.category,u=e.type,m=e.limit,p=(0,a.d4)((function(e){return e.product})).products,h=(0,a.d4)((function(e){return e.currency})),v=(0,a.d4)((function(e){return e.cart})).cartItems,x=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,f=(0,a.d4)((function(e){return e.compare})).compareItems,j=(0,t.d$)(p,d,u,m);return null!==j&&void 0!==j&&j.length?(0,c.jsx)(n.A,{className:"position-static",options:l,children:j.map((function(e){return(0,c.jsx)(n.q,{children:(0,c.jsx)(r.A,{spaceBottomClass:s,colorClass:i,product:e,currency:h,cartItem:v.find((function(s){return s.id===e.id})),wishlistItem:x.find((function(s){return s.id===e.id})),compareItem:f.find((function(s){return s.id===e.id})),titlePriceClass:o})},e.id)}))}):(0,c.jsx)("p",{children:"No products found"})}}}]);
//# sourceMappingURL=6383.6a181fc5.chunk.js.map