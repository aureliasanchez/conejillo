"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2421],{3546:function(e,s,i){var a=i(9379),l=i(5544),n=i(5043),c=i(5475),r=i(9456),t=i(2821),o=i(5913),d=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=e.currency,x=e.finalDiscountedPrice,j=e.finalProductPrice,f=e.cartItems,v=e.wishlistItem,g=e.compareItem,N=(0,r.wA)(),b=(0,n.useState)(s.variation?s.variation[0].color:""),A=(0,l.A)(b,2),w=A[0],k=A[1],y=(0,n.useState)(s.variation?s.variation[0].size[0].name:""),P=(0,l.A)(y,2),C=P[0],z=P[1],S=(0,n.useState)(s.variation?s.variation[0].size[0].stock:s.stock),I=(0,l.A)(S,2),F=I[0],q=I[1],T=(0,n.useState)(1),B=(0,l.A)(T,2),V=B[0],_=B[1],D=(0,t.pQ)(f,s,w,C);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("span",{children:h.currencySymbol+x})," ",(0,p.jsx)("span",{className:"old",children:h.currencySymbol+j})]}):(0,p.jsxs)("span",{children:[h.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===w?"checked":"",onChange:function(){k(e.color),z(e.size[0].name),q(e.size[0].stock),_(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===w?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){z(e.name),q(e.stock),_(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return _(V>1?V-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:V,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return _(V<F-D?V+1:V)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:F&&F>0?(0,p.jsxs)("button",{onClick:function(){return N((0,d.bE)((0,a.A)((0,a.A)({},s),{},{quantity:V,selectedProductColor:w||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:C||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:D>=F,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return N((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return N((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categor\xedas :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(c.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//instagram.com",children:(0,p.jsx)("i",{className:"fa fa-instagram"})})})]})})]})}},4802:function(e,s,i){i.r(s);var a=i(5043),l=i(9456),n=i(3216),c=i(2168),r=i(8062),t=i(970),o=i(4226),d=i(2731),u=i(6827),m=i(579);s.default=function(){var e=(0,n.zy)().pathname,s=(0,n.g)().id,i=(0,l.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(c.A,{titleTemplate:"Producto",description:"Product Page of flone react minimalist eCommerce template."}),(0,m.jsxs)(r.A,{headerTop:"visible",children:[(0,m.jsx)(t.A,{pages:[{label:"Inicio",path:"/conejillo/"},{label:"Producto",path:"/conejillo"+e}]}),(0,m.jsx)(u.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i}),(0,m.jsx)(d.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,m.jsx)(o.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},6827:function(e,s,i){i.d(s,{A:function(){return g}});var a=i(9456),l=i(3024),n=i(2821),c=i(5544),r=i(5043),t=i(8906),o=i(5568),d=i(5459),u=i(4629),m=i(31),p=i(7362),h=i(579),x=function(e){var s,i=e.product,a=(0,r.useState)(null),l=(0,c.A)(a,2),n=l[0],x=(l[1],(0,r.useState)(-1)),j=(0,c.A)(x,2),f=j[0],v=j[1],g=null===i||void 0===i?void 0:i.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),N={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:n},modules:[t._R,t.WO]};return(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:N,children:[i.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return v(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:f>=0,index:f,close:function(){return v(-1)},slides:g,plugins:[d.A,u.Ay,m.A]})]}):null]})})},j=i(3546),f=function(e){var s,i,a=e.product,n=e.thumbPosition,x=(0,r.useState)(null),j=(0,c.A)(x,2),f=j[0],v=j[1],g=(0,r.useState)(-1),N=(0,c.A)(g,2),b=N[0],A=N[1],w=null===a||void 0===a?void 0:a.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),k={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:f},modules:[t._R,t.WO]},y={onSwiper:v,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)("div",{className:"row row-5 test",children:[(0,h.jsx)("div",{className:(0,l.A)(n&&"left"===n?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[a.discount||a.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[a.discount?(0,h.jsxs)("span",{className:"pink",children:["-",a.discount,"%"]}):"",a.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",null!==a&&void 0!==a&&null!==(s=a.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:k,children:[null===a||void 0===a?void 0:a.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return A(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:b>=0,index:b,close:function(){return A(-1)},slides:w,plugins:[d.A,u.Ay,m.A]})]}):null]})}),(0,h.jsx)("div",{className:(0,l.A)(n&&"left"===n?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,h.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==a&&void 0!==a&&null!==(i=a.image)&&void 0!==i&&i.length?(0,h.jsx)(p.A,{options:y,children:a.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},v=function(e){var s=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsx)("div",{className:"product-fixed-image",children:s.image?(0,h.jsx)("img",{src:"/conejillo"+s.image[0],alt:"",className:"img-fluid"}):""})]})},g=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,c=e.galleryType,r=e.product,t=(0,a.d4)((function(e){return e.currency})),o=(0,a.d4)((function(e){return e.cart})).cartItems,d=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,a.d4)((function(e){return e.compare})).compareItems,m=d.find((function(e){return e.id===r.id})),p=u.find((function(e){return e.id===r.id})),g=(0,n.do)(r.price,r.discount),N=+(r.price*t.currencyRate).toFixed(2),b=+(g*t.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,l.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===c?(0,h.jsx)(f,{product:r,thumbPosition:"left"}):"rightThumb"===c?(0,h.jsx)(f,{product:r}):"fixedImage"===c?(0,h.jsx)(v,{product:r}):(0,h.jsx)(x,{product:r})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(j.A,{product:r,discountedPrice:g,currency:t,finalDiscountedPrice:b,finalProductPrice:N,cartItems:o,wishlistItem:m,compareItem:p})})]})})})}}}]);
//# sourceMappingURL=2421.590696bc.chunk.js.map