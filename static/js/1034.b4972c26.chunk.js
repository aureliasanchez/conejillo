"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1034],{5571:function(e,s,r){var i=r(3024),a=r(579);s.A=function(e){var s=e.titleText,r=e.subtitleText,n=e.subtitleColorClass,t=e.positionClass,c=e.spaceClass,l=e.borderClass;return(0,a.jsxs)("div",{className:(0,i.A)("section-title",t,c,l),children:[(0,a.jsx)("h2",{children:s}),(0,a.jsx)("p",{className:(0,i.A)(n),children:r})]})}},8062:function(e,s,r){var i=r(5043),a=r(7766),n=r(5896),t=r(6998),c=r(579);s.A=function(e){var s=e.children,r=e.headerContainerClass,l=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)(a.A,{layout:r,top:l,headerPaddingClass:o,headerPositionClass:d}),s,(0,c.jsx)(n.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(t.A,{})]})}},1034:function(e,s,r){r.r(s),r.d(s,{default:function(){return P}});var i=r(5043),a=r(9456),n=r(3216),t=r(2168),c=r(8062),l=r(970),o=r(4226),d=r(2731),u=r(3024),m=r(2821),p=r(7362),h=r(579),x=function(e){var s,r=e.product;return(0,h.jsx)("div",{className:"product-large-image-wrapper product-large-image-wrapper--slider",children:null!==r&&void 0!==r&&null!==(s=r.image)&&void 0!==s&&s.length?(0,h.jsx)(p.A,{options:{spaceBetween:15,slidesPerView:3,loop:!0,navigation:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}},children:r.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:"/conejillo"+e,className:"img-fluid",alt:""})})},s)}))}):null})},j=r(9379),f=r(5544),v=r(5475),b=r(5913),N=r(5721),g=r(4990),A=r(3492),y=function(e){var s=e.product,r=e.discountedPrice,n=e.currency,t=e.finalDiscountedPrice,c=e.finalProductPrice,l=e.cartItems,o=e.wishlistItem,d=e.compareItem,u=(0,a.wA)(),p=(0,i.useState)(s.variation?s.variation[0].color:""),x=(0,f.A)(p,2),y=x[0],C=x[1],P=(0,i.useState)(s.variation?s.variation[0].size[0].name:""),w=(0,f.A)(P,2),k=w[0],I=w[1],S=(0,i.useState)(s.variation?s.variation[0].size[0].stock:s.stock),z=(0,f.A)(S,2),B=z[0],T=z[1],V=(0,i.useState)(1),q=(0,f.A)(V,2),D=q[0],F=q[1],_=(0,m.pQ)(l,s,y,k);return(0,h.jsxs)("div",{className:"product-details-content pro-details-slider-content",children:[(0,h.jsx)("h2",{children:s.name}),(0,h.jsx)("div",{className:"product-details-price justify-content-center",children:null!==r?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("span",{children:n.currencySymbol+t})," ",(0,h.jsx)("span",{className:"old",children:n.currencySymbol+c})]}):(0,h.jsxs)("span",{children:[n.currencySymbol+c," "]})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap justify-content-center",children:(0,h.jsx)("div",{className:"pro-details-rating mr-0",children:(0,h.jsx)(b.A,{ratingValue:s.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:s.shortDescription})}),s.variation?(0,h.jsxs)("div",{className:"pro-details-size-color justify-content-center",children:[(0,h.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,h.jsx)("span",{children:"Color"}),(0,h.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,h.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===y?"checked":"",onChange:function(){C(e.color),I(e.size[0].name),T(e.size[0].stock),F(1)}}),(0,h.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,h.jsxs)("div",{className:"pro-details-size",children:[(0,h.jsx)("span",{children:"Size"}),(0,h.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===y?e.size.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,h.jsx)("input",{type:"radio",value:e.name,checked:e.name===k?"checked":"",onChange:function(){I(e.name),T(e.stock),F(1)}}),(0,h.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,h.jsx)("div",{className:"pro-details-quality justify-content-center",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,h.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,h.jsxs)("div",{className:"pro-details-quality justify-content-center",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return F(D>1?D-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:D,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return F(D<B-_?D+1:D)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:B&&B>0?(0,h.jsxs)("button",{onClick:function(){return u((0,N.bE)((0,j.A)((0,j.A)({},s),{},{quantity:D,selectedProductColor:y||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:k||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:_>=B,children:[" ","A\xf1adir al carrito"," "]}):(0,h.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to wishlist":"Add to wishlist",onClick:function(){return u((0,g.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==d?"active":"",disabled:void 0!==d,title:void 0!==d?"Added to compare":"Add to compare",onClick:function(){return u((0,A.wL)(s))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,h.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,h.jsx)("span",{children:"Categor\xedas :"}),(0,h.jsx)("ul",{children:s.category.map((function(e,s){return(0,h.jsx)("li",{children:(0,h.jsx)(v.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",s.tag?(0,h.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,h.jsx)("span",{children:"Tags :"}),(0,h.jsx)("ul",{children:s.tag.map((function(e,s){return(0,h.jsx)("li",{children:(0,h.jsx)(v.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",(0,h.jsx)("div",{className:"pro-details-social",children:(0,h.jsxs)("ul",{className:"justify-content-center",children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//facebook.com",children:(0,h.jsx)("i",{className:"fa fa-facebook"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//dribbble.com",children:(0,h.jsx)("i",{className:"fa fa-dribbble"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//pinterest.com",children:(0,h.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//twitter.com",children:(0,h.jsx)("i",{className:"fa fa-twitter"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//linkedin.com",children:(0,h.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})},C=function(e){var s=e.spaceTopClass,r=e.spaceBottomClass,i=e.product,n=(0,a.d4)((function(e){return e.currency})),t=(0,a.d4)((function(e){return e.cart})).cartItems,c=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,a.d4)((function(e){return e.compare})).compareItems,o=c.find((function(e){return e.id===i.id})),d=l.find((function(e){return e.id===i.id})),p=(0,m.do)(i.price,i.discount),j=+(i.price*n.currencyRate).toFixed(2),f=+(p*n.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,u.A)("shop-area",s,r),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-12 mb-50",children:(0,h.jsx)(x,{product:i})}),(0,h.jsx)("div",{className:"col-lg-12 text-center",children:(0,h.jsx)(y,{product:i,discountedPrice:p,currency:n,finalDiscountedPrice:f,finalProductPrice:j,cartItems:t,wishlistItem:o,compareItem:d})})]})})})},P=function(){var e=(0,n.zy)().pathname,s=(0,n.g)().id,r=(0,a.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(t.A,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,h.jsxs)(c.A,{headerTop:"visible",children:[(0,h.jsx)(l.A,{pages:[{label:"Home",path:"/conejillo/"},{label:"Shop Product",path:"/conejillo"+e}]}),(0,h.jsx)(C,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:r}),(0,h.jsx)(d.A,{spaceBottomClass:"pb-90",productFullDesc:r.fullDescription}),(0,h.jsx)(o.A,{spaceBottomClass:"pb-95",category:r.category[0]})]})]})}},970:function(e,s,r){var i=r(1778),a=r(5475),n=r(579);s.A=function(e){var s=e.pages;return(0,n.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(i.A,{children:null===s||void 0===s?void 0:s.map((function(e,r){var t=e.path,c=e.label;return r!==s.length-1?(0,n.jsx)(i.A.Item,{linkProps:{to:t},linkAs:a.N_,children:c},c):(0,n.jsx)(i.A.Item,{active:!0,children:c},c)}))})})})}},7766:function(e,s,r){r.d(s,{A:function(){return h}});var i=r(5544),a=r(5043),n=r(3024),t=(r(3188),r(3189)),c=r(5911),l=r(3032),o=r(5173),d=r.n(o),u=(r(9456),r(3468),function(e){e.borderStyle});u.propTypes={borderStyle:d().string};var m=u,p=r(579),h=function(e){var s=e.layout,r=e.top,o=e.borderStyle,d=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,x=(0,a.useState)(0),j=(0,i.A)(x,2),f=j[0],v=j[1],b=(0,a.useState)(0),N=(0,i.A)(b,2),g=N[0],A=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return A(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){v(window.scrollY)};return(0,p.jsxs)("header",{className:(0,n.A)("header-area clearfix",h,u),children:[(0,p.jsx)("div",{className:(0,n.A)("header-top-area",d,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsx)(m,{borderStyle:o})})}),(0,p.jsxs)("div",{className:(0,n.A)(d,"sticky-bar header-res-padding clearfix",f>g&&"stick"),children:[(0,p.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,p.jsx)(t.A,{})}),(0,p.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,p.jsx)(c.A,{})})]})}),(0,p.jsx)(l.A,{})]})]})}},2731:function(e,s,r){var i=r(3024),a=r(579);s.A=function(e){var s=e.spaceBottomClass;e.productFullDesc;return(0,a.jsx)("div",{className:(0,i.A)("description-review-area",s),children:(0,a.jsx)("div",{className:"container"})})}},4226:function(e,s,r){var i=r(9456),a=r(3024),n=r(7362),t=r(5571),c=r(1310),l=r(2821),o=r(579),d={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,r=e.category,u=(0,i.d4)((function(e){return e.product})).products,m=(0,i.d4)((function(e){return e.currency})),p=(0,i.d4)((function(e){return e.cart})).cartItems,h=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,i.d4)((function(e){return e.compare})).compareItems,j=(0,l.d$)(u,r,null,6);return(0,o.jsx)("div",{className:(0,a.A)("related-product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(t.A,{titleText:"Productos Destacados",positionClass:"text-center",spaceClass:"mb-50"}),null!==j&&void 0!==j&&j.length?(0,o.jsx)(n.A,{options:d,children:j.map((function(e){return(0,o.jsx)(n.q,{children:(0,o.jsx)(c.A,{product:e,currency:m,cartItem:p.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}},1778:function(e,s,r){r.d(s,{A:function(){return j}});var i=r(9379),a=r(45),n=r(8139),t=r.n(n),c=r(5043),l=r(7852),o=r(2673),d=r(579),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=c.forwardRef((function(e,s){var r=e.bsPrefix,n=e.active,c=void 0!==n&&n,m=e.children,p=e.className,h=e.as,x=void 0===h?"li":h,j=e.linkAs,f=void 0===j?o.A:j,v=e.linkProps,b=void 0===v?{}:v,N=e.href,g=e.title,A=e.target,y=(0,a.A)(e,u),C=(0,l.oU)(r,"breadcrumb-item");return(0,d.jsx)(x,(0,i.A)((0,i.A)({ref:s},y),{},{className:t()(C,p,{active:c}),"aria-current":c?"page":void 0,children:c?m:(0,d.jsx)(f,(0,i.A)((0,i.A)({},b),{},{href:N,title:g,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var p=m,h=["bsPrefix","className","listProps","children","label","as"],x=c.forwardRef((function(e,s){var r=e.bsPrefix,n=e.className,c=e.listProps,o=void 0===c?{}:c,u=e.children,m=e.label,p=void 0===m?"breadcrumb":m,x=e.as,j=void 0===x?"nav":x,f=(0,a.A)(e,h),v=(0,l.oU)(r,"breadcrumb");return(0,d.jsx)(j,(0,i.A)((0,i.A)({"aria-label":p,className:n,ref:s},f),{},{children:(0,d.jsx)("ol",(0,i.A)((0,i.A)({},o),{},{className:t()(v,null==o?void 0:o.className),children:u}))}))}));x.displayName="Breadcrumb";var j=Object.assign(x,{Item:p})}}]);
//# sourceMappingURL=1034.b4972c26.chunk.js.map