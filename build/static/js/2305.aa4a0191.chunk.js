"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2305],{8043:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.data,a=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,i.A)("single-brand-logo",a),children:(0,n.jsx)("img",{src:"/conejillo"+s.image,alt:""})})}},8032:function(e,s,a){a.d(s,{A:function(){return o}});var i=a(5544),n=a(3024),t=a(5043),r=function(e){var s=new Date(e).getTime(),a=(0,t.useState)(s-(new Date).getTime()),n=(0,i.A)(a,2),r=n[0],l=n[1];return(0,t.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},l=a(579),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,t=r(s),o=(0,i.A)(t,4),d=o[0],m=o[1],u=o[2],h=o[3];return(0,l.jsxs)("div",{className:(0,n.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:m,type:"hours"}),(0,l.jsx)(c,{value:u,type:"minutes"}),(0,l.jsx)(c,{value:h,type:"secs"})]})}},6801:function(e,s,a){var i=a(3024),n=a(5475),t=a(579);s.A=function(e){var s=e.footerLogo,a=e.spaceBottomClass,r=e.colorClass;return(0,t.jsxs)("div",{className:(0,i.A)("copyright",a,r),children:[(0,t.jsx)("div",{className:"footer-logo",children:(0,t.jsx)(n.N_,{to:"/conejillo/",children:(0,t.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,t.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,t.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,t.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,a){a.d(s,{A:function(){return t}});var i=a(3024),n=(a(9735),a(579)),t=function(e){var s=e.spaceBottomClass,a=e.spaceLeftClass,t=e.sideMenu,r=e.colorClass,l=e.widgetColorClass;return(0,n.jsxs)("div",{className:(0,i.A)("footer-widget",s,t?"ml-ntv5":a,l),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"CONEJILLO"})}),(0,n.jsx)("div",{className:(0,i.A)("subscribe-style",r),children:(0,n.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},8067:function(e,s,a){var i=a(5544),n=a(5043),t=a(3024),r=a(5475),l=a(9456),c=a(2821),o=a(425),d=a(5721),m=a(4990),u=a(3492),h=a(579);s.A=function(e){var s=e.product,a=e.currency,x=e.cartItem,j=e.wishlistItem,p=e.compareItem,v=e.spaceBottomClass,f=e.colorClass,g=e.titlePriceClass,N=(0,n.useState)(!1),b=(0,i.A)(N,2),C=b[0],w=b[1],A=(0,c.do)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),k=+(A*a.currencyRate).toFixed(2),S=(0,l.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,t.A)("product-wrap-2",v,f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(r.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(r.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return w(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(g||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==A?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+y," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:C,onHide:function(){return w(!1)},product:s,currency:a,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:k,wishlistItem:j,compareItem:p})]})}},425:function(e,s,a){var i=a(9379),n=a(5544),t=a(5043),r=a(8906),l=a(4640),c=a(9456),o=a(5913),d=a(7362),m=a(2821),u=a(5721),h=a(4990),x=a(3492),j=a(579);s.A=function(e){var s=e.product,a=e.currency,p=e.discountedPrice,v=e.finalProductPrice,f=e.finalDiscountedPrice,g=e.show,N=e.onHide,b=e.wishlistItem,C=e.compareItem,w=(0,t.useState)(null),A=(0,n.A)(w,2),y=A[0],k=A[1],S=(0,c.wA)(),I=(0,c.d4)((function(e){return e.cart})).cartItems,P=(0,t.useState)(s.variation?s.variation[0].color:""),B=(0,n.A)(P,2),T=B[0],_=B[1],L=(0,t.useState)(s.variation?s.variation[0].size[0].name:""),F=(0,n.A)(L,2),q=F[0],E=F[1],V=(0,t.useState)(s.variation?s.variation[0].size[0].stock:s.stock),O=(0,n.A)(V,2),z=O[0],H=O[1],D=(0,t.useState)(1),R=(0,n.A)(D,2),M=R[0],K=R[1],J=(0,m.pQ)(I,s,T,q),Y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[r._R,r.WO]};return(0,j.jsxs)(l.A,{show:g,onHide:function(){k(null),N()},className:"product-quickview-modal-wrapper",children:[(0,j.jsx)(l.A.Header,{closeButton:!0}),(0,j.jsx)("div",{className:"modal-body",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:(0,j.jsx)("div",{className:"product-large-image-wrapper",children:(0,j.jsx)(d.A,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,j.jsx)(d.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:"Product"})})},s)}))})})}),(0,j.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,j.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,j.jsx)("h2",{children:s.name}),(0,j.jsx)("div",{className:"product-details-price",children:null!==p?(0,j.jsxs)(t.Fragment,{children:[(0,j.jsx)("span",{children:a.currencySymbol+f})," ",(0,j.jsx)("span",{className:"old",children:a.currencySymbol+v})]}):(0,j.jsxs)("span",{children:[a.currencySymbol+v," "]})}),s.rating&&s.rating>0?(0,j.jsx)("div",{className:"pro-details-rating-wrap",children:(0,j.jsx)("div",{className:"pro-details-rating",children:(0,j.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,j.jsx)("div",{className:"pro-details-list",children:(0,j.jsx)("p",{children:s.shortDescription})}),s.variation?(0,j.jsxs)("div",{className:"pro-details-size-color",children:[(0,j.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,j.jsx)("span",{children:"Color"}),(0,j.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,j.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===T?"checked":"",onChange:function(){_(e.color),E(e.size[0].name),H(e.size[0].stock),K(1)}}),(0,j.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,j.jsxs)("div",{className:"pro-details-size",children:[(0,j.jsx)("span",{children:"Size"}),(0,j.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===T?e.size.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,j.jsx)("input",{type:"radio",value:e.name,checked:e.name===q?"checked":"",onChange:function(){E(e.name),H(e.stock),K(1)}}),(0,j.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,j.jsx)("div",{className:"pro-details-quality",children:(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,j.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,j.jsxs)("div",{className:"pro-details-quality",children:[(0,j.jsxs)("div",{className:"cart-plus-minus",children:[(0,j.jsx)("button",{onClick:function(){return K(M>1?M-1:1)},className:"dec qtybutton",children:"-"}),(0,j.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:M,readOnly:!0}),(0,j.jsx)("button",{onClick:function(){return K(M<z-J?M+1:M)},className:"inc qtybutton",children:"+"})]}),(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:z&&z>0?(0,j.jsxs)("button",{onClick:function(){return S((0,u.bE)((0,i.A)((0,i.A)({},s),{},{quantity:M,selectedProductColor:T||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:q||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:J>=z,children:[" ","A\xf1adir al carrito"," "]}):(0,j.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,j.jsx)("div",{className:"pro-details-wishlist",children:(0,j.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Agregado a la lista de deseos":"Agregar a la lista de deseos",onClick:function(){return S((0,h.U4)(s))},children:(0,j.jsx)("i",{className:"pe-7s-like"})})}),(0,j.jsx)("div",{className:"pro-details-compare",children:(0,j.jsx)("button",{className:void 0!==C?"active":"",disabled:void 0!==C,title:void 0!==C?"Agregado para comparar":"Agregar para comparar",onClick:function(){return S((0,x.wL)(s))},children:(0,j.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,a){var i=a(5043),n=a(579);s.A=function(e){for(var s=e.ratingValue,a=[],t=0;t<5;t++)a.push((0,n.jsx)("i",{className:"fa fa-star-o"},t));if(s&&s>0)for(var r=0;r<=s-1;r++)a[r]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},r);return(0,n.jsx)(i.Fragment,{children:a})}},6998:function(e,s,a){a.d(s,{A:function(){return l}});var i=a(5544),n=a(5043),t=function(){var e=(0,n.useState)(!1),s=(0,i.A)(e,2),a=s[0],t=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;t(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[a]),{stick:a,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},r=a(579),l=function(){var e=t(),s=e.stick,a=e.onClickHandler;return s?(0,r.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:a,children:(0,r.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},5571:function(e,s,a){var i=a(3024),n=a(579);s.A=function(e){var s=e.titleText,a=e.subtitleText,t=e.subtitleColorClass,r=e.positionClass,l=e.spaceClass,c=e.borderClass;return(0,n.jsxs)("div",{className:(0,i.A)("section-title",r,l,c),children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("p",{className:(0,i.A)(t),children:a})]})}},7362:function(e,s,a){a.d(s,{q:function(){return c.qr}});var i=a(436),n=a(9379),t=a(5043),r=a(3024),l=a(8906),c=a(4671),o=a(579),d=(0,t.forwardRef)((function(e,s){var a=e.options,t=e.prevIcon,d=e.nextIcon,m=e.children,u=e.className,h=e.navClass,x=void 0!==(null===a||void 0===a?void 0:a.modules)?a.modules:[],j="prev-".concat(h||"swiper-nav"),p="next-".concat(h||"swiper-nav"),v=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===a||void 0===a||!a.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},a),{},{modules:[l.Vx,l.dK,l.Jq,l.Ij].concat((0,i.A)(x)),navigation:!(null===a||void 0===a||!a.navigation)&&{prevEl:".".concat(j),nextEl:".".concat(p)},pagination:!(null===a||void 0===a||!a.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,r.A)("swiper-wrap",u),ref:s,children:[(0,o.jsx)(c.RC,(0,n.A)((0,n.A)({},v),{},{children:m})),(null===v||void 0===v?void 0:v.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(j),children:(0,o.jsx)("i",{className:(0,r.A)(t,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(p),children:(0,o.jsx)("i",{className:(0,r.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},8062:function(e,s,a){var i=a(5043),n=a(7766),t=a(5896),r=a(6998),l=a(579);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(n.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(t.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(r.A,{})]})}},2305:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var i=a(5043),n=a(2168),t=a(8062),r=a(3024),l=JSON.parse('[{"id":"1","image":"/assets/img/banner/banner-62.png","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/banner/banner-63.png","link":"/shop-grid-standard"}]'),c=a(5475),o=a(579),d=function(e){var s=e.data,a=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,r.A)("single-banner",a),children:(0,o.jsx)(c.N_,{to:"/conejillo"+s.link,children:(0,o.jsx)("img",{src:"/conejillo"+s.image,alt:""})})})},m=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,r.A)("banner-area",s,a),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:null===l||void 0===l?void 0:l.map((function(e,s){return(0,o.jsx)("div",{className:"col-sm-6 col-12 mb-30",children:(0,o.jsx)(d,{data:e})},s)}))})})})},u=a(3702),h=a(7580),x=a(5571),j=a(861),p=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.bgColorClass,n=e.category;return(0,o.jsx)("div",{className:(0,r.A)("product-area",s,a,i),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(x.A,{titleText:"Valentine's Collection",positionClass:"text-center",borderClass:"no-border"}),(0,o.jsxs)(u.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(h.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,o.jsx)(h.A.Item,{children:(0,o.jsx)(h.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(h.A.Item,{children:(0,o.jsx)(h.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(h.A.Item,{children:(0,o.jsx)(h.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(u.A.Content,{children:[(0,o.jsx)(u.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(j.A,{category:n,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(u.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(j.A,{category:n,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,o.jsx)(u.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(j.A,{category:n,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})},v=a(8032),f=function(e){var s=e.backgroundImage,a=e.dateTime,i=e.spaceTopClass,n=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,r.A)("funfact-area funfact-valentine bg-img",i,n),style:{backgroundImage:"url(".concat("/conejillo"+s,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-lg-6 ms-auto me-auto",children:(0,o.jsxs)("div",{className:"funfact-content text-center",children:[(0,o.jsx)("h2",{children:"Deal of the day"}),(0,o.jsx)("div",{className:"timer",children:(0,o.jsx)(v.A,{date:a})}),(0,o.jsx)("div",{className:"funfact-btn btn-only-round funfact-btn-red-2 btn-hover",children:(0,o.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})})})})})},g=a(9456),N=a(7362),b=a(2821),C=a(8067),w={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},A=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass,i=e.category,n=(0,g.d4)((function(e){return e.product})).products,t=(0,g.d4)((function(e){return e.currency})),l=(0,g.d4)((function(e){return e.cart})).cartItems,c=(0,g.d4)((function(e){return e.wishlist})).wishlistItems,d=(0,g.d4)((function(e){return e.compare})).compareItems,m=(0,b.d$)(n,i,null,6);return(0,o.jsx)("div",{className:(0,r.A)("related-product-area",s,a),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(x.A,{titleText:"Featured Products",subtitleText:"Choose Your Favorite Product",subtitleColorClass:"grey",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),null!==m&&void 0!==m&&m.length?(0,o.jsx)(N.A,{options:w,children:m.map((function(e){return(0,o.jsx)(N.q,{children:(0,o.jsx)(C.A,{product:e,currency:t,cartItem:l.find((function(s){return s.id===e.id})),wishlistItem:c.find((function(s){return s.id===e.id})),compareItem:d.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})},y=a(8043),k=a(4885),S={loop:!0,autoplay:!0,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}},I=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass;return(0,o.jsx)("div",{className:(0,r.A)("brand-logo-area",s,a),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(x.A,{titleText:"Our Brands",subtitleText:"Choose Your Favorite Brand",subtitleColorClass:"grey",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,o.jsx)("div",{className:"brand-logo-active",children:k&&(0,o.jsx)(N.A,{options:S,children:k.map((function(e,s){return(0,o.jsx)(N.q,{children:(0,o.jsx)(y.A,{data:e})},s)}))})})]})})},P=function(e){var s=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,r.A)("banner-area",s),children:(0,o.jsx)("div",{className:"container-fluid p-0",children:(0,o.jsxs)("div",{className:"row no-gutters",children:[(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"single-banner mr-15 mb-15",children:(0,o.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/banner/banner-64.png",alt:""})})})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,o.jsx)("div",{className:"single-banner ml-15 mb-15",children:(0,o.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:(0,o.jsx)("img",{src:"/conejillo/assets/img/banner/banner-65.png",alt:""})})})})]})})})},B=a(8906),T=JSON.parse('[{"id":1,"image":"/assets/img/slider/valentine-text.png","backgroundImage":"/assets/img/slider/slider-38.jpg","title":"New Collection For <br>Big Sale 40%","url":"/shop-grid-standard"},{"id":2,"image":"/assets/img/slider/valentine-text.png","backgroundImage":"/assets/img/slider/slider-38.jpg","title":"New Collection For <br>Big Sale 40%","url":"/shop-grid-standard"}]'),_=function(e){var s=e.data;return(0,o.jsx)("div",{className:"single-slider-2 slider-height-2 res-white-overly-xs d-flex valentine-slider-bg align-items-center bg-img",style:{backgroundImage:"url(".concat("/conejillo"+s.backgroundImage,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"slider-content-32 slider-animated-1",children:[(0,o.jsx)("div",{className:"content-img",children:(0,o.jsx)("img",{className:"animated",src:"/conejillo"+s.image,alt:""})}),(0,o.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.title}}),(0,o.jsx)("div",{className:"valentine-btn btn-hover",children:(0,o.jsx)(c.N_,{className:"animated",to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})})})})})},L={effect:"fade",fadeEffect:{crossFade:!0},modules:[B._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},F=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-active nav-style-1",children:T&&(0,o.jsx)(N.A,{options:L,children:T.map((function(e,s){return(0,o.jsx)(N.q,{children:(0,o.jsx)(_,{data:e})},s)}))})})})},q=function(){return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(n.A,{titleTemplate:"Valentines Day Home",description:"Valentines day home of flone react minimalist eCommerce template."}),(0,o.jsxs)(t.A,{headerTop:"visible",children:[(0,o.jsx)(F,{}),(0,o.jsx)(m,{spaceBottomClass:"pb-70",spaceTopClass:"pt-100"}),(0,o.jsx)(p,{spaceBottomClass:"pb-60",category:"fashion"}),(0,o.jsx)(f,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",dateTime:"November 13, 2023 12:12:00",backgroundImage:"/assets/img/bg/deal-bg.jpg"}),(0,o.jsx)(A,{category:"fashion",spaceBottomClass:"pb-100",spaceTopClass:"pt-100"}),(0,o.jsx)(P,{spaceBottomClass:"pb-85"}),(0,o.jsx)(I,{spaceBottomClass:"pb-100"})]})]})}},5896:function(e,s,a){var i=a(3024),n=a(5475),t=a(6801),r=a(2304),l=a(579);s.A=function(e){var s=e.backgroundColorClass,a=e.spaceTopClass,c=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.containerClass,u=e.extraFooterClass,h=e.sideMenu;return(0,l.jsx)("footer",{className:(0,i.A)("footer-area",s,a,c,u,o,d),children:(0,l.jsx)("div",{className:"".concat(m||"container"),children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsx)(t.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"Sobre Nosotros"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo/about",children:"Sobre Nosotros"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo/home-flower-shop",children:"Inicio"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo/shop-grid-standard",children:"Cat\xe1logo"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo/contact",children:"Contacto"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"ENLACES"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo#/",children:"Mercado Libre"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n.N_,{to:"/conejillo#/",children:"Amazon"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,l.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"S\xcdGUENOS"})}),(0,l.jsx)("div",{className:"footer-list",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx/",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/conejillodecampo.mx02/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})})]})})]})}),(0,l.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,l.jsx)(r.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},7766:function(e,s,a){a.d(s,{A:function(){return x}});var i=a(5544),n=a(5043),t=a(3024),r=(a(3188),a(3189)),l=a(5911),c=a(3032),o=a(5173),d=a.n(o),m=(a(9456),a(3468),function(e){e.borderStyle});m.propTypes={borderStyle:d().string};var u=m,h=a(579),x=function(e){var s=e.layout,a=e.top,o=e.borderStyle,d=e.headerPaddingClass,m=e.headerPositionClass,x=e.headerBgClass,j=(0,n.useState)(0),p=(0,i.A)(j,2),v=p[0],f=p[1],g=(0,n.useState)(0),N=(0,i.A)(g,2),b=N[0],C=N[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){f(window.scrollY)};return(0,h.jsxs)("header",{className:(0,t.A)("header-area clearfix",x,m),children:[(0,h.jsx)("div",{className:(0,t.A)("header-top-area",d,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsx)(u,{borderStyle:o})})}),(0,h.jsxs)("div",{className:(0,t.A)(d,"sticky-bar header-res-padding clearfix",v>b&&"stick"),children:[(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,h.jsx)(r.A,{})}),(0,h.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,h.jsx)(l.A,{})})]})}),(0,h.jsx)(c.A,{})]})]})}},861:function(e,s,a){a.d(s,{A:function(){return j}});var i=a(5043),n=a(9456),t=a(2821),r=a(5544),l=a(5475),c=a(3024),o=a(425),d=a(5721),m=a(4990),u=a(3492),h=a(579),x=function(e){var s=e.product,a=e.currency,x=e.cartItem,j=e.wishlistItem,p=e.compareItem,v=e.spaceBottomClass,f=e.colorClass,g=e.titlePriceClass,N=(0,i.useState)(!1),b=(0,r.A)(N,2),C=b[0],w=b[1],A=(0,t.do)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),k=+(A*a.currencyRate).toFixed(2),S=(0,n.wA)();return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsxs)("div",{className:(0,c.A)("product-wrap-2",v,f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(l.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(l.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return w(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(g||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(l.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==A?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+y})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+y," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:C,onHide:function(){return w(!1)},product:s,currency:a,discountedPrice:A,finalProductPrice:y,finalDiscountedPrice:k,wishlistItem:j,compareItem:p})]})},j=function(e){var s=e.spaceBottomClass,a=e.colorClass,r=e.titlePriceClass,l=e.category,c=e.type,o=e.limit,d=(0,n.d4)((function(e){return e.product})).products,m=(0,n.d4)((function(e){return e.currency})),u=(0,n.d4)((function(e){return e.cart})).cartItems,j=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,n.d4)((function(e){return e.compare})).compareItems,v=(0,t.d$)(d,l,c,o);return(0,h.jsx)(i.Fragment,{children:null===v||void 0===v?void 0:v.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(x,{spaceBottomClass:s,colorClass:a,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:j.find((function(s){return s.id===e.id})),compareItem:p.find((function(s){return s.id===e.id})),titlePriceClass:r})},e.id)}))})}},4885:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')}}]);
//# sourceMappingURL=2305.aa4a0191.chunk.js.map