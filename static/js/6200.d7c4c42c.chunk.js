"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6200],{6801:function(e,s,a){var i=a(3024),n=a(5475),t=a(579);s.A=function(e){var s=e.footerLogo,a=e.spaceBottomClass,c=e.colorClass;return(0,t.jsxs)("div",{className:(0,i.A)("copyright",a,c),children:[(0,t.jsx)("div",{className:"footer-logo",children:(0,t.jsx)(n.N_,{to:"/conejillo/",children:(0,t.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,t.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,t.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,t.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,a){a.d(s,{A:function(){return t}});var i=a(3024),n=(a(9735),a(579)),t=function(e){var s=e.spaceBottomClass,a=e.spaceLeftClass,t=e.sideMenu,c=e.colorClass,r=e.widgetColorClass;return(0,n.jsxs)("div",{className:(0,i.A)("footer-widget",s,t?"ml-ntv5":a,r),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"CONEJILLO"})}),(0,n.jsx)("div",{className:(0,i.A)("subscribe-style",c),children:(0,n.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},425:function(e,s,a){var i=a(9379),n=a(5544),t=a(5043),c=a(8906),r=a(4640),o=a(9456),l=a(5913),d=a(7362),u=a(2821),m=a(5721),p=a(4990),h=a(3492),v=a(579);s.A=function(e){var s=e.product,a=e.currency,x=e.discountedPrice,j=e.finalProductPrice,f=e.finalDiscountedPrice,N=e.show,g=e.onHide,b=e.wishlistItem,w=e.compareItem,y=(0,t.useState)(null),A=(0,n.A)(y,2),k=A[0],C=A[1],S=(0,o.wA)(),I=(0,o.d4)((function(e){return e.cart})).cartItems,P=(0,t.useState)(s.variation?s.variation[0].color:""),q=(0,n.A)(P,2),z=q[0],L=q[1],E=(0,t.useState)(s.variation?s.variation[0].size[0].name:""),F=(0,n.A)(E,2),_=F[0],B=F[1],H=(0,t.useState)(s.variation?s.variation[0].size[0].stock:s.stock),O=(0,n.A)(H,2),R=O[0],V=O[1],D=(0,t.useState)(1),J=(0,n.A)(D,2),Q=J[0],T=J[1],U=(0,u.pQ)(I,s,z,_),Y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:k},modules:[c._R,c.WO]};return(0,v.jsxs)(r.A,{show:N,onHide:function(){C(null),g()},className:"product-quickview-modal-wrapper",children:[(0,v.jsx)(r.A.Header,{closeButton:!0}),(0,v.jsx)("div",{className:"modal-body",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:(0,v.jsx)("div",{className:"product-large-image-wrapper",children:(0,v.jsx)(d.A,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,v.jsx)(d.q,{children:(0,v.jsx)("div",{className:"single-image",children:(0,v.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},s)}))})})}),(0,v.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,v.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,v.jsx)("h2",{children:s.name}),(0,v.jsx)("div",{className:"product-details-price",children:null!==x?(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)("span",{children:a.currencySymbol+f})," ",(0,v.jsx)("span",{className:"old",children:a.currencySymbol+j})]}):(0,v.jsxs)("span",{children:[a.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,v.jsx)("div",{className:"pro-details-rating-wrap",children:(0,v.jsx)("div",{className:"pro-details-rating",children:(0,v.jsx)(l.A,{ratingValue:s.rating})})}):"",(0,v.jsx)("div",{className:"pro-details-list",children:(0,v.jsx)("p",{children:s.shortDescription})}),s.variation?(0,v.jsxs)("div",{className:"pro-details-size-color",children:[(0,v.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,v.jsx)("span",{children:"Color"}),(0,v.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,v.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,v.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===z?"checked":"",onChange:function(){L(e.color),B(e.size[0].name),V(e.size[0].stock),T(1)}}),(0,v.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,v.jsxs)("div",{className:"pro-details-size",children:[(0,v.jsx)("span",{children:"Size"}),(0,v.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===z?e.size.map((function(e,s){return(0,v.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,v.jsx)("input",{type:"radio",value:e.name,checked:e.name===_?"checked":"",onChange:function(){B(e.name),V(e.stock),T(1)}}),(0,v.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,v.jsx)("div",{className:"pro-details-quality",children:(0,v.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,v.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,v.jsxs)("div",{className:"pro-details-quality",children:[(0,v.jsxs)("div",{className:"cart-plus-minus",children:[(0,v.jsx)("button",{onClick:function(){return T(Q>1?Q-1:1)},className:"dec qtybutton",children:"-"}),(0,v.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:Q,readOnly:!0}),(0,v.jsx)("button",{onClick:function(){return T(Q<R-U?Q+1:Q)},className:"inc qtybutton",children:"+"})]}),(0,v.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,v.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,i.A)((0,i.A)({},s),{},{quantity:Q,selectedProductColor:z||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:_||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:U>=R,children:[" ","A\xf1adir al carrito"," "]}):(0,v.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,v.jsx)("div",{className:"pro-details-wishlist",children:(0,v.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Agregado a la lista de deseos":"Agregar a la lista de deseos",onClick:function(){return S((0,p.U4)(s))},children:(0,v.jsx)("i",{className:"pe-7s-like"})})}),(0,v.jsx)("div",{className:"pro-details-compare",children:(0,v.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Agregado para comparar":"Agregar para comparar",onClick:function(){return S((0,h.wL)(s))},children:(0,v.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,a){var i=a(5043),n=a(579);s.A=function(e){for(var s=e.ratingValue,a=[],t=0;t<5;t++)a.push((0,n.jsx)("i",{className:"fa fa-star-o"},t));if(s&&s>0)for(var c=0;c<=s-1;c++)a[c]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,n.jsx)(i.Fragment,{children:a})}},6998:function(e,s,a){a.d(s,{A:function(){return r}});var i=a(5544),n=a(5043),t=function(){var e=(0,n.useState)(!1),s=(0,i.A)(e,2),a=s[0],t=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;t(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[a]),{stick:a,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=a(579),r=function(){var e=t(),s=e.stick,a=e.onClickHandler;return s?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:a,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},7362:function(e,s,a){a.d(s,{q:function(){return o.qr}});var i=a(436),n=a(9379),t=a(5043),c=a(3024),r=a(8906),o=a(4671),l=a(579),d=(0,t.forwardRef)((function(e,s){var a=e.options,t=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,p=e.navClass,h=void 0!==(null===a||void 0===a?void 0:a.modules)?a.modules:[],v="prev-".concat(p||"swiper-nav"),x="next-".concat(p||"swiper-nav"),j=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===a||void 0===a||!a.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},a),{},{modules:[r.Vx,r.dK,r.Jq,r.Ij].concat((0,i.A)(h)),navigation:!(null===a||void 0===a||!a.navigation)&&{prevEl:".".concat(v),nextEl:".".concat(x)},pagination:!(null===a||void 0===a||!a.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,c.A)("swiper-wrap",m),ref:s,children:[(0,l.jsx)(o.RC,(0,n.A)((0,n.A)({},j),{},{children:u})),(null===j||void 0===j?void 0:j.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(v),children:(0,l.jsx)("i",{className:(0,c.A)(t,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(x),children:(0,l.jsx)("i",{className:(0,c.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},2942:function(e,s,a){a.d(s,{A:function(){return v}});var i=a(5043),n=a(9456),t=a(2821),c=a(5544),r=a(5475),o=a(3024),l=a(425),d=a(5721),u=a(4990),m=a(3492),p=a(579),h=function(e){var s=e.product,a=e.currency,h=e.cartItem,v=e.wishlistItem,x=e.compareItem,j=e.spaceBottomClass,f=(0,i.useState)(!1),N=(0,c.A)(f,2),g=N[0],b=N[1],w=(0,t.do)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),A=+(w*a.currencyRate).toFixed(2),k=(0,n.wA)();return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsxs)("div",{className:(0,o.A)("product-wrap-5",j),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:(0,p.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""})}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action-4",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"fa fa-heart-o"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(r.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,p.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return k((0,d.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,p.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,p.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-compare",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to compare":"Add to compare",onClick:function(){return k((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"fa fa-retweet"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{onClick:function(){return b(!0)},title:"Quick View",children:(0,p.jsx)("i",{className:"fa fa-eye"})})})]})]}),(0,p.jsxs)("div",{className:"product-content-5 text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,p.jsx)("div",{className:"price-5",children:null!==w?(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)("span",{children:a.currencySymbol+A})," ",(0,p.jsx)("span",{className:"old",children:a.currencySymbol+y})]}):(0,p.jsxs)("span",{children:[a.currencySymbol+y," "]})})]})]}),(0,p.jsx)(l.A,{show:g,onHide:function(){return b(!1)},product:s,currency:a,discountedPrice:w,finalProductPrice:y,finalDiscountedPrice:A,wishlistItem:v,compareItem:x})]})},v=function(e){var s=e.spaceBottomClass,a=e.category,c=e.type,r=e.limit,o=(0,n.d4)((function(e){return e.product})).products,l=(0,n.d4)((function(e){return e.currency})),d=(0,n.d4)((function(e){return e.cart})).cartItems,u=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,m=(0,n.d4)((function(e){return e.compare})).compareItems,v=(0,t.d$)(o,a,c,r);return(0,p.jsx)(i.Fragment,{children:null===v||void 0===v?void 0:v.map((function(e){return(0,p.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,p.jsx)(h,{spaceBottomClass:s,product:e,currency:l,cartItem:d.find((function(s){return s.id===e.id})),wishlistItem:u.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))})}}}]);
//# sourceMappingURL=6200.d7c4c42c.chunk.js.map