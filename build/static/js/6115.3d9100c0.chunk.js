"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[6115],{3546:function(e,s,i){var n=i(9379),l=i(5544),a=i(5043),r=i(5475),c=i(9456),t=i(2821),o=i(5913),d=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=e.currency,x=e.finalDiscountedPrice,j=e.finalProductPrice,v=e.cartItems,f=e.wishlistItem,g=e.compareItem,N=(0,c.wA)(),b=(0,a.useState)(s.variation?s.variation[0].color:""),w=(0,l.A)(b,2),A=w[0],y=w[1],k=(0,a.useState)(s.variation?s.variation[0].size[0].name:""),C=(0,l.A)(k,2),P=C[0],z=C[1],S=(0,a.useState)(s.variation?s.variation[0].size[0].stock:s.stock),D=(0,l.A)(S,2),I=D[0],T=D[1],V=(0,a.useState)(1),F=(0,l.A)(V,2),q=F[0],B=F[1],_=(0,t.pQ)(v,s,A,P);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("span",{children:h.currencySymbol+x})," ",(0,p.jsx)("span",{className:"old",children:h.currencySymbol+j})]}):(0,p.jsxs)("span",{children:[h.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,p.jsxs)("div",{className:"pro-details-list",children:[(0,p.jsx)("p",{children:s.shortDescription}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{className:"additional-info",children:[s.weightDimensions&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Peso y Dimensiones:"})," ",s.weightDimensions]}),s.durationConservation&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Duraci\xf3n y Conservaci\xf3n:"})," ",s.durationConservation]}),s.nutritionalValue&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Valor Nutricional:"})," ",s.nutritionalValue]}),s.microdoseLevel&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Nivel de Microdosis:"})," ",s.microdoseLevel]})]})]}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===A?"checked":"",onChange:function(){y(e.color),z(e.size[0].name),T(e.size[0].stock),B(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===A?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===P?"checked":"",onChange:function(){z(e.name),T(e.stock),B(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return B(q>1?q-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:q,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return B(q<I-_?q+1:q)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:I&&I>0?(0,p.jsxs)("button",{onClick:function(){return N((0,d.bE)((0,n.A)((0,n.A)({},s),{},{quantity:q,selectedProductColor:A||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:P||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:_>=I,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return N((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return N((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categor\xedas :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx/",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"https://www.instagram.com/conejillodecampo.mx02/",children:(0,p.jsx)("i",{className:"fa fa-instagram"})})})]})})]})}},8496:function(e,s,i){i.r(s);var n=i(5043),l=i(9456),a=i(3216),r=i(2168),c=i(8062),t=i(970),o=i(4226),d=i(2731),u=i(6827),m=i(579);s.default=function(){var e=(0,a.zy)().pathname,s=(0,a.g)().id,i=(0,l.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(r.A,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,m.jsxs)(c.A,{headerTop:"visible",children:[(0,m.jsx)(t.A,{pages:[{label:"Home",path:"/conejillo/"},{label:"Shop Product",path:"/conejillo"+e}]}),(0,m.jsx)(u.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i,galleryType:"leftThumb"}),(0,m.jsx)(d.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,m.jsx)(o.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},6827:function(e,s,i){i.d(s,{A:function(){return g}});var n=i(9456),l=i(3024),a=i(2821),r=i(5544),c=i(5043),t=i(8906),o=i(5568),d=i(5459),u=i(4629),m=i(31),p=i(7362),h=i(579),x=function(e){var s,i=e.product,n=(0,c.useState)(null),l=(0,r.A)(n,2),a=l[0],x=(l[1],(0,c.useState)(-1)),j=(0,r.A)(x,2),v=j[0],f=j[1],g=null===i||void 0===i?void 0:i.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),N={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:a},modules:[t._R,t.WO]};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:N,children:[i.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return f(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:v>=0,index:v,close:function(){return f(-1)},slides:g,plugins:[d.A,u.Ay,m.A]})]}):null]})})},j=i(3546),v=function(e){var s,i,n=e.product,a=e.thumbPosition,x=(0,c.useState)(null),j=(0,r.A)(x,2),v=j[0],f=j[1],g=(0,c.useState)(-1),N=(0,r.A)(g,2),b=N[0],w=N[1],A=null===n||void 0===n?void 0:n.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:v},modules:[t._R,t.WO]},k={onSwiper:f,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"row row-5 test",children:[(0,h.jsx)("div",{className:(0,l.A)(a&&"left"===a?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[n.discount||n.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[n.discount?(0,h.jsxs)("span",{className:"pink",children:["-",n.discount,"%"]}):"",n.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",null!==n&&void 0!==n&&null!==(s=n.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:y,children:[null===n||void 0===n?void 0:n.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return w(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:b>=0,index:b,close:function(){return w(-1)},slides:A,plugins:[d.A,u.Ay,m.A]})]}):null]})}),(0,h.jsx)("div",{className:(0,l.A)(a&&"left"===a?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,h.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==n&&void 0!==n&&null!==(i=n.image)&&void 0!==i&&i.length?(0,h.jsx)(p.A,{options:k,children:n.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},f=function(e){var s=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsx)("div",{className:"product-fixed-image",children:s.image?(0,h.jsx)("img",{src:"/conejillo"+s.image[0],alt:"",className:"img-fluid"}):""})]})},g=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.galleryType,c=e.product,t=(0,n.d4)((function(e){return e.currency})),o=(0,n.d4)((function(e){return e.cart})).cartItems,d=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,n.d4)((function(e){return e.compare})).compareItems,m=d.find((function(e){return e.id===c.id})),p=u.find((function(e){return e.id===c.id})),g=(0,a.do)(c.price,c.discount),N=+(c.price*t.currencyRate).toFixed(2),b=+(g*t.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,l.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===r?(0,h.jsx)(v,{product:c,thumbPosition:"left"}):"rightThumb"===r?(0,h.jsx)(v,{product:c}):"fixedImage"===r?(0,h.jsx)(f,{product:c}):(0,h.jsx)(x,{product:c})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(j.A,{product:c,discountedPrice:g,currency:t,finalDiscountedPrice:b,finalProductPrice:N,cartItems:o,wishlistItem:m,compareItem:p})})]})})})}}}]);
//# sourceMappingURL=6115.3d9100c0.chunk.js.map