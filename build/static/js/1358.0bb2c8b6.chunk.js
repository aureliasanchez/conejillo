"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1358],{3546:function(e,s,i){var n=i(9379),r=i(5544),a=i(5043),l=i(5475),c=i(9456),t=i(2821),o=i(5913),d=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=e.currency,x=e.finalDiscountedPrice,j=e.finalProductPrice,v=e.cartItems,f=e.wishlistItem,g=e.compareItem,N=(0,c.wA)(),b=(0,a.useState)(s.variation?s.variation[0].color:""),w=(0,r.A)(b,2),A=w[0],C=w[1],y=(0,a.useState)(s.variation?s.variation[0].size[0].name:""),k=(0,r.A)(y,2),P=k[0],S=k[1],z=(0,a.useState)(s.variation?s.variation[0].size[0].stock:s.stock),I=(0,r.A)(z,2),V=I[0],T=I[1],q=(0,a.useState)(1),D=(0,r.A)(q,2),B=D[0],F=D[1],L=(0,t.pQ)(v,s,A,P);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)("span",{children:h.currencySymbol+x})," ",(0,p.jsx)("span",{className:"old",children:h.currencySymbol+j})]}):(0,p.jsxs)("span",{children:[h.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,p.jsxs)("div",{className:"pro-details-list",children:[(0,p.jsx)("p",{children:s.shortDescription}),(0,p.jsx)("br",{}),(0,p.jsxs)("div",{className:"additional-info",children:[s.weightDimensions&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Peso y Dimensiones:"})," ",s.weightDimensions]}),s.durationConservation&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Duraci\xf3n y Conservaci\xf3n:"})," ",s.durationConservation]}),s.nutritionalValue&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Valor Nutricional:"})," ",s.nutritionalValue]}),s.microdoseLevel&&(0,p.jsxs)("div",{className:"info-item",children:[(0,p.jsx)("strong",{children:"Nivel de Microdosis:"})," ",s.microdoseLevel]})]})]}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===A?"checked":"",onChange:function(){C(e.color),S(e.size[0].name),T(e.size[0].stock),F(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===A?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===P?"checked":"",onChange:function(){S(e.name),T(e.stock),F(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return F(B>1?B-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:B,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return F(B<V-L?B+1:B)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:V&&V>0?(0,p.jsxs)("button",{onClick:function(){return N((0,d.bE)((0,n.A)((0,n.A)({},s),{},{quantity:B,selectedProductColor:A||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:P||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:L>=V,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return N((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return N((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categor\xedas :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(l.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx/",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"https://www.instagram.com/conejillodecampo.mx02/",children:(0,p.jsx)("i",{className:"fa fa-instagram"})})})]})})]})}},5571:function(e,s,i){var n=i(3024),r=i(579);s.A=function(e){var s=e.titleText,i=e.subtitleText,a=e.subtitleColorClass,l=e.positionClass,c=e.spaceClass,t=e.borderClass;return(0,r.jsxs)("div",{className:(0,n.A)("section-title",l,c,t),children:[(0,r.jsx)("h2",{children:s}),(0,r.jsx)("p",{className:(0,n.A)(a),children:i})]})}},8062:function(e,s,i){var n=i(5043),r=i(7766),a=i(5896),l=i(6998),c=i(579);s.A=function(e){var s=e.children,i=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(r.A,{layout:i,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,c.jsx)(a.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(l.A,{})]})}},970:function(e,s,i){var n=i(1778),r=i(5475),a=i(579);s.A=function(e){var s=e.pages;return(0,a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(n.A,{children:null===s||void 0===s?void 0:s.map((function(e,i){var l=e.path,c=e.label;return i!==s.length-1?(0,a.jsx)(n.A.Item,{linkProps:{to:l},linkAs:r.N_,children:c},c):(0,a.jsx)(n.A.Item,{active:!0,children:c},c)}))})})})}},7766:function(e,s,i){i.d(s,{A:function(){return h}});var n=i(5544),r=i(5043),a=i(3024),l=(i(3188),i(3189)),c=i(5911),t=i(3032),o=i(5173),d=i.n(o),u=(i(9456),i(3468),function(e){e.borderStyle});u.propTypes={borderStyle:d().string};var m=u,p=i(579),h=function(e){var s=e.layout,i=e.top,o=e.borderStyle,d=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,x=(0,r.useState)(0),j=(0,n.A)(x,2),v=j[0],f=j[1],g=(0,r.useState)(0),N=(0,n.A)(g,2),b=N[0],w=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){f(window.scrollY)};return(0,p.jsxs)("header",{className:(0,a.A)("header-area clearfix",h,u),children:[(0,p.jsx)("div",{className:(0,a.A)("header-top-area",d,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsx)(m,{borderStyle:o})})}),(0,p.jsxs)("div",{className:(0,a.A)(d,"sticky-bar header-res-padding clearfix",v>b&&"stick"),children:[(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,p.jsx)(l.A,{})}),(0,p.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,p.jsx)(c.A,{})})]})}),(0,p.jsx)(t.A,{})]})]})}},2731:function(e,s,i){var n=i(3024),r=i(579);s.A=function(e){var s=e.spaceBottomClass;e.productFullDesc;return(0,r.jsx)("div",{className:(0,n.A)("description-review-area",s),children:(0,r.jsx)("div",{className:"container"})})}},6827:function(e,s,i){i.d(s,{A:function(){return g}});var n=i(9456),r=i(3024),a=i(2821),l=i(5544),c=i(5043),t=i(8906),o=i(5568),d=i(5459),u=i(4629),m=i(31),p=i(7362),h=i(579),x=function(e){var s,i=e.product,n=(0,c.useState)(null),r=(0,l.A)(n,2),a=r[0],x=(r[1],(0,c.useState)(-1)),j=(0,l.A)(x,2),v=j[0],f=j[1],g=null===i||void 0===i?void 0:i.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),N={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:a},modules:[t._R,t.WO]};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:N,children:[i.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return f(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:v>=0,index:v,close:function(){return f(-1)},slides:g,plugins:[d.A,u.Ay,m.A]})]}):null]})})},j=i(3546),v=function(e){var s,i,n=e.product,a=e.thumbPosition,x=(0,c.useState)(null),j=(0,l.A)(x,2),v=j[0],f=j[1],g=(0,c.useState)(-1),N=(0,l.A)(g,2),b=N[0],w=N[1],A=null===n||void 0===n?void 0:n.image.map((function(e,s){return{src:"/conejillo"+e,key:s}})),C={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:v},modules:[t._R,t.WO]},y={onSwiper:f,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"row row-5 test",children:[(0,h.jsx)("div",{className:(0,r.A)(a&&"left"===a?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[n.discount||n.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[n.discount?(0,h.jsxs)("span",{className:"pink",children:["-",n.discount,"%"]}):"",n.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",null!==n&&void 0!==n&&null!==(s=n.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:C,children:[null===n||void 0===n?void 0:n.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return w(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(o.A,{open:b>=0,index:b,close:function(){return w(-1)},slides:A,plugins:[d.A,u.Ay,m.A]})]}):null]})}),(0,h.jsx)("div",{className:(0,r.A)(a&&"left"===a?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,h.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==n&&void 0!==n&&null!==(i=n.image)&&void 0!==i&&i.length?(0,h.jsx)(p.A,{options:y,children:n.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},f=function(e){var s=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsx)("div",{className:"product-fixed-image",children:s.image?(0,h.jsx)("img",{src:"/conejillo"+s.image[0],alt:"",className:"img-fluid"}):""})]})},g=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,l=e.galleryType,c=e.product,t=(0,n.d4)((function(e){return e.currency})),o=(0,n.d4)((function(e){return e.cart})).cartItems,d=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,n.d4)((function(e){return e.compare})).compareItems,m=d.find((function(e){return e.id===c.id})),p=u.find((function(e){return e.id===c.id})),g=(0,a.do)(c.price,c.discount),N=+(c.price*t.currencyRate).toFixed(2),b=+(g*t.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,r.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===l?(0,h.jsx)(v,{product:c,thumbPosition:"left"}):"rightThumb"===l?(0,h.jsx)(v,{product:c}):"fixedImage"===l?(0,h.jsx)(f,{product:c}):(0,h.jsx)(x,{product:c})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(j.A,{product:c,discountedPrice:g,currency:t,finalDiscountedPrice:b,finalProductPrice:N,cartItems:o,wishlistItem:m,compareItem:p})})]})})})}},4226:function(e,s,i){var n=i(9456),r=i(3024),a=i(7362),l=i(5571),c=i(1310),t=i(2821),o=i(579),d={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,i=e.category,u=(0,n.d4)((function(e){return e.product})).products,m=(0,n.d4)((function(e){return e.currency})),p=(0,n.d4)((function(e){return e.cart})).cartItems,h=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,n.d4)((function(e){return e.compare})).compareItems,j=(0,t.d$)(u,i,null,6);return(0,o.jsx)("div",{className:(0,r.A)("related-product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.A,{titleText:"Productos Destacados",positionClass:"text-center",spaceClass:"mb-50"}),null!==j&&void 0!==j&&j.length?(0,o.jsx)(a.A,{options:d,children:j.map((function(e){return(0,o.jsx)(a.q,{children:(0,o.jsx)(c.A,{product:e,currency:m,cartItem:p.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}}}]);
//# sourceMappingURL=1358.0bb2c8b6.chunk.js.map