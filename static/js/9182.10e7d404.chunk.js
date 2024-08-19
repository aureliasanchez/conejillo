"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[9182],{3546:function(e,s,i){var r=i(9379),a=i(5544),c=i(5043),t=i(5475),n=i(9456),l=i(2821),o=i(5913),d=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=e.currency,x=e.finalDiscountedPrice,j=e.finalProductPrice,v=e.cartItems,f=e.wishlistItem,N=e.compareItem,b=(0,n.wA)(),g=(0,c.useState)(s.variation?s.variation[0].color:""),A=(0,a.A)(g,2),k=A[0],y=A[1],P=(0,c.useState)(s.variation?s.variation[0].size[0].name:""),C=(0,a.A)(P,2),w=C[0],I=C[1],z=(0,c.useState)(s.variation?s.variation[0].size[0].stock:s.stock),S=(0,a.A)(z,2),B=S[0],T=S[1],_=(0,c.useState)(1),q=(0,a.A)(_,2),D=q[0],F=q[1],V=(0,l.pQ)(v,s,k,w);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(c.Fragment,{children:[(0,p.jsx)("span",{children:h.currencySymbol+x})," ",(0,p.jsx)("span",{className:"old",children:h.currencySymbol+j})]}):(0,p.jsxs)("span",{children:[h.currencySymbol+j," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===k?"checked":"",onChange:function(){y(e.color),I(e.size[0].name),T(e.size[0].stock),F(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===k?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===w?"checked":"",onChange:function(){I(e.name),T(e.stock),F(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Comprar ahora"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return F(D>1?D-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:D,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return F(D<B-V?D+1:D)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:B&&B>0?(0,p.jsxs)("button",{onClick:function(){return b((0,d.bE)((0,r.A)((0,r.A)({},s),{},{quantity:D,selectedProductColor:k||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:w||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:V>=B,children:[" ","A\xf1adir al carrito"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Agotado"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return b((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to compare":"Add to compare",onClick:function(){return b((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categor\xedas :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(t.N_,{to:"/conejillo/shop-grid-standard",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//instagram.com",children:(0,p.jsx)("i",{className:"fa fa-instagram"})})})]})})]})}},5571:function(e,s,i){var r=i(3024),a=i(579);s.A=function(e){var s=e.titleText,i=e.subtitleText,c=e.subtitleColorClass,t=e.positionClass,n=e.spaceClass,l=e.borderClass;return(0,a.jsxs)("div",{className:(0,r.A)("section-title",t,n,l),children:[(0,a.jsx)("h2",{children:s}),(0,a.jsx)("p",{className:(0,r.A)(c),children:i})]})}},9182:function(e,s,i){i.r(s),i.d(s,{default:function(){return v}});var r=i(5043),a=i(9456),c=i(3216),t=i(2168),n=i(8062),l=i(970),o=i(4226),d=i(2731),u=i(3024),m=i(2821),p=i(3546),h=i(579),x=function(e){var s,i=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper product-large-image-wrapper--sticky",children:[i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsx)("div",{className:"product-sticky-image mb--10",children:null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.map((function(e,s){return(0,h.jsx)("div",{className:"product-sticky-image__single mb-10",children:(0,h.jsx)("img",{src:"/conejillo"+e,alt:"",className:"img-fluid"})},s)}))})]})},j=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.product,c=(0,a.d4)((function(e){return e.currency})),t=(0,a.d4)((function(e){return e.cart})).cartItems,n=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,a.d4)((function(e){return e.compare})).compareItems,o=n.find((function(e){return e.id===r.id})),d=l.find((function(e){return e.id===r.id})),j=(0,m.do)(r.price,r.discount),v=+(r.price*c.currencyRate).toFixed(2),f=+(j*c.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,u.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(x,{product:r})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)("div",{style:{position:"sticky",top:"75px"},children:(0,h.jsx)(p.A,{product:r,discountedPrice:j,currency:c,finalDiscountedPrice:f,finalProductPrice:v,cartItems:t,wishlistItem:o,compareItem:d})})})]})})})},v=function(){var e=(0,c.zy)().pathname,s=(0,c.g)().id,i=(0,a.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(t.A,{titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."}),(0,h.jsxs)(n.A,{headerTop:"visible",children:[(0,h.jsx)(l.A,{pages:[{label:"Home",path:"/conejillo/"},{label:"Shop Product",path:"/conejillo"+e}]}),(0,h.jsx)(j,{spaceTopClass:"mt-100",spaceBottomClass:"mb-100",product:i}),(0,h.jsx)(d.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,h.jsx)(o.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},970:function(e,s,i){var r=i(1778),a=i(5475),c=i(579);s.A=function(e){var s=e.pages;return(0,c.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(r.A,{children:null===s||void 0===s?void 0:s.map((function(e,i){var t=e.path,n=e.label;return i!==s.length-1?(0,c.jsx)(r.A.Item,{linkProps:{to:t},linkAs:a.N_,children:n},n):(0,c.jsx)(r.A.Item,{active:!0,children:n},n)}))})})})}},2731:function(e,s,i){var r=i(3024),a=i(579);s.A=function(e){var s=e.spaceBottomClass;e.productFullDesc;return(0,a.jsx)("div",{className:(0,r.A)("description-review-area",s),children:(0,a.jsx)("div",{className:"container"})})}},4226:function(e,s,i){var r=i(9456),a=i(3024),c=i(7362),t=i(5571),n=i(1310),l=i(2821),o=i(579),d={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,i=e.category,u=(0,r.d4)((function(e){return e.product})).products,m=(0,r.d4)((function(e){return e.currency})),p=(0,r.d4)((function(e){return e.cart})).cartItems,h=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,r.d4)((function(e){return e.compare})).compareItems,j=(0,l.d$)(u,i,null,6);return(0,o.jsx)("div",{className:(0,a.A)("related-product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(t.A,{titleText:"Productos Relacionados",positionClass:"text-center",spaceClass:"mb-50"}),null!==j&&void 0!==j&&j.length?(0,o.jsx)(c.A,{options:d,children:j.map((function(e){return(0,o.jsx)(c.q,{children:(0,o.jsx)(n.A,{product:e,currency:m,cartItem:p.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}},1778:function(e,s,i){i.d(s,{A:function(){return j}});var r=i(9379),a=i(45),c=i(8139),t=i.n(c),n=i(5043),l=i(7852),o=i(2673),d=i(579),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=n.forwardRef((function(e,s){var i=e.bsPrefix,c=e.active,n=void 0!==c&&c,m=e.children,p=e.className,h=e.as,x=void 0===h?"li":h,j=e.linkAs,v=void 0===j?o.A:j,f=e.linkProps,N=void 0===f?{}:f,b=e.href,g=e.title,A=e.target,k=(0,a.A)(e,u),y=(0,l.oU)(i,"breadcrumb-item");return(0,d.jsx)(x,(0,r.A)((0,r.A)({ref:s},k),{},{className:t()(y,p,{active:n}),"aria-current":n?"page":void 0,children:n?m:(0,d.jsx)(v,(0,r.A)((0,r.A)({},N),{},{href:b,title:g,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var p=m,h=["bsPrefix","className","listProps","children","label","as"],x=n.forwardRef((function(e,s){var i=e.bsPrefix,c=e.className,n=e.listProps,o=void 0===n?{}:n,u=e.children,m=e.label,p=void 0===m?"breadcrumb":m,x=e.as,j=void 0===x?"nav":x,v=(0,a.A)(e,h),f=(0,l.oU)(i,"breadcrumb");return(0,d.jsx)(j,(0,r.A)((0,r.A)({"aria-label":p,className:c,ref:s},v),{},{children:(0,d.jsx)("ol",(0,r.A)((0,r.A)({},o),{},{className:t()(f,null==o?void 0:o.className),children:u}))}))}));x.displayName="Breadcrumb";var j=Object.assign(x,{Item:p})}}]);
//# sourceMappingURL=9182.10e7d404.chunk.js.map