"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1160],{6801:function(e,s,n){var l=n(3024),r=n(5475),i=n(579);s.A=function(e){var s=e.footerLogo,n=e.spaceBottomClass,c=e.colorClass;return(0,i.jsxs)("div",{className:(0,l.A)("copyright",n,c),children:[(0,i.jsx)("div",{className:"footer-logo",children:(0,i.jsx)(r.N_,{to:"/conejillo/",children:(0,i.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,i.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,i.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,n){n.d(s,{A:function(){return i}});var l=n(3024),r=(n(9735),n(579)),i=function(e){var s=e.spaceBottomClass,n=e.spaceLeftClass,i=e.sideMenu,c=e.colorClass,a=e.widgetColorClass;return(0,r.jsxs)("div",{className:(0,l.A)("footer-widget",s,i?"ml-ntv5":n,a),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"CONEJILLO"})}),(0,r.jsx)("div",{className:(0,l.A)("subscribe-style",c),children:(0,r.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},3188:function(e,s,n){var l=n(3024),r=n(5475),i=n(579);s.A=function(e){var s=e.imageUrl,n=e.logoClass;return(0,i.jsx)("div",{className:(0,l.A)(n),children:(0,i.jsx)(r.N_,{to:"/conejillo/",children:(0,i.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3189:function(e,s,n){var l=n(5475),r=n(4117),i=n(3024),c=n(579);s.A=function(e){var s=e.menuWhiteClass,n=e.sidebarMenu,a=(0,r.Bd)().t;return(0,c.jsx)("div",{className:(0,i.A)(n?"sidebar-menu":"main-menu ".concat(s||"")),children:(0,c.jsx)("div",{className:"logo-container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,c.jsx)("nav",{children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/",children:a("Inicio")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/shop-grid-standard",children:a("Cat\xe1logo")})}),(0,c.jsx)(l.N_,{to:"/conejillo/",children:(0,c.jsx)("img",{src:"/conejillo/assets/img/logo/logo.png",alt:"Logo"})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/contact",children:a("Contacto")})}),(0,c.jsx)("li",{children:(0,c.jsx)(l.N_,{to:"/conejillo/blog-details-standard",children:a("Blog")})})]})})})})}},3468:function(e,s,n){var l=n(9456),r=n(4117),i=n(1682),c=n(579);s.A=function(e){var s=e.currency,n=(0,r.Bd)().i18n,a=(0,l.wA)(),o=function(e){var s=e.target.value;n.changeLanguage(s)},t=function(e){var s=e.target.value;a((0,i.M)(s))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===n.resolvedLanguage?"Espanol":"fn"===n.resolvedLanguage?"French":"de"===n.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return o(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return o(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return o(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[s.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return t(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return t(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return t(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency",children:(0,c.jsx)("p",{children:"Call Us 3965410"})})]})}},1310:function(e,s,n){var l=n(5544),r=n(5043),i=n(3024),c=n(5475),a=n(9456),o=n(5913),t=n(2821),d=n(425),u=n(5721),h=n(4990),j=n(579);s.A=function(e){var s=e.product,n=e.currency,x=e.cartItem,m=e.wishlistItem,v=e.compareItem,p=e.spaceBottomClass,f=(0,r.useState)(!1),g=(0,l.A)(f,2),N=g[0],b=g[1],C=(0,t.do)(s.price,s.discount),A=+(s.price*n.currencyRate).toFixed(2),w=+(C*n.currencyRate).toFixed(2),y=(0,a.wA)();return(0,j.jsxs)(r.Fragment,{children:[(0,j.jsxs)("div",{className:(0,i.A)("product-wrap",p),children:[(0,j.jsxs)("div",{className:"product-img",children:[(0,j.jsxs)(c.N_,{to:"/conejillo/product/"+s.id,children:[(0,j.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,j.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,j.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,j.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,j.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,j.jsxs)("div",{className:"product-action",children:[(0,j.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,j.jsx)("button",{className:void 0!==m?"active":"",disabled:void 0!==m,title:void 0!==m?"A\xf1adido a la lista de deseos":"A\xf1adir a la lista de deseos",onClick:function(){return y((0,h.U4)(s))},children:(0,j.jsx)("i",{className:"pe-7s-like"})})}),(0,j.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,j.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Comprar ahora"," "]}):s.variation&&s.variation.length>=1?(0,j.jsx)(c.N_,{to:"".concat("/conejillo","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,j.jsxs)("button",{onClick:function(){return y((0,u.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"A\xf1adido al carrito":"A\xf1adir al carrito",children:[" ",(0,j.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"A\xf1adido":"A\xf1adir al carrito"]}):(0,j.jsx)("button",{disabled:!0,className:"active",children:"Agotado"})}),(0,j.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,j.jsx)("button",{title:"Vista r\xe1pida",onClick:function(){return b(!0)},children:(0,j.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,j.jsxs)("div",{className:"product-content text-center",children:[(0,j.jsx)("h3",{children:(0,j.jsx)(c.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,j.jsx)("div",{className:"product-rating",children:(0,j.jsx)(o.A,{ratingValue:s.rating})}):"",(0,j.jsx)("div",{className:"product-price",children:null!==C?(0,j.jsxs)(r.Fragment,{children:[(0,j.jsx)("span",{children:n.currencySymbol+w})," ",(0,j.jsx)("span",{className:"old",children:n.currencySymbol+A})]}):(0,j.jsxs)("span",{children:[n.currencySymbol+A," "]})})]})]}),(0,j.jsx)(d.A,{show:N,onHide:function(){return b(!1)},product:s,currency:n,discountedPrice:C,finalProductPrice:A,finalDiscountedPrice:w,wishlistItem:m,compareItem:v})]})}},5571:function(e,s,n){var l=n(3024),r=n(579);s.A=function(e){var s=e.titleText,n=e.subtitleText,i=e.subtitleColorClass,c=e.positionClass,a=e.spaceClass,o=e.borderClass;return(0,r.jsxs)("div",{className:(0,l.A)("section-title",c,a,o),children:[(0,r.jsx)("h2",{children:s}),(0,r.jsx)("p",{className:(0,l.A)(i),children:n})]})}},8062:function(e,s,n){var l=n(5043),r=n(7766),i=n(5896),c=n(6998),a=n(579);s.A=function(e){var s=e.children,n=e.headerContainerClass,o=e.headerTop,t=e.headerPaddingClass,d=e.headerPositionClass;return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(r.A,{layout:n,top:o,headerPaddingClass:t,headerPositionClass:d}),s,(0,a.jsx)(i.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,a.jsx)(c.A,{})]})}},970:function(e,s,n){var l=n(1778),r=n(5475),i=n(579);s.A=function(e){var s=e.pages;return(0,i.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(l.A,{children:null===s||void 0===s?void 0:s.map((function(e,n){var c=e.path,a=e.label;return n!==s.length-1?(0,i.jsx)(l.A.Item,{linkProps:{to:c},linkAs:r.N_,children:a},a):(0,i.jsx)(l.A.Item,{active:!0,children:a},a)}))})})})}},5896:function(e,s,n){var l=n(3024),r=n(5475),i=n(6801),c=n(2304),a=n(579);s.A=function(e){var s=e.backgroundColorClass,n=e.spaceTopClass,o=e.spaceBottomClass,t=e.spaceLeftClass,d=e.spaceRightClass,u=e.containerClass,h=e.extraFooterClass,j=e.sideMenu;return(0,a.jsx)("footer",{className:(0,l.A)("footer-area",s,n,o,h,t,d),children:(0,a.jsx)("div",{className:"".concat(u||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)(i.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,a.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"Sobre Nosotros"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/about",children:"Sobre Nosotros"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/home-flower-shop",children:"Inicio"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/shop-grid-standard",children:"Cat\xe1logo"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo/contact",children:"Contacto"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(j?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ENLACES"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo#/",children:"Mercado Libre"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/conejillo#/",children:"Amazon"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(j?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"S\xcdGUENOS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.facebook.com/ConejilloDeCampo.mx/",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.instagram.com/conejillodecampo.mx02/",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(j?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(c.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:j})})]})})})}},7766:function(e,s,n){n.d(s,{A:function(){return m}});var l=n(5544),r=n(5043),i=n(3024),c=(n(3188),n(3189)),a=n(6487),o=n(4993),t=n(5173),d=n.n(t),u=n(9456),h=(n(3468),function(e){e.borderStyle,(0,u.d4)((function(e){return e.currency}))});h.propTypes={borderStyle:d().string};var j=h,x=n(579),m=function(e){var s=e.layout,n=e.top,t=e.borderStyle,d=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,m=(0,r.useState)(0),v=(0,l.A)(m,2),p=v[0],f=v[1],g=(0,r.useState)(0),N=(0,l.A)(g,2),b=N[0],C=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){f(window.scrollY)};return(0,x.jsxs)("header",{className:(0,i.A)("header-area clearfix",h,u),children:[(0,x.jsx)("div",{className:(0,i.A)("header-top-area",d,"visible"===n?"d-none d-lg-block":"d-none","fluid-border"===t&&"border-none"),children:(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsx)(j,{borderStyle:t})})}),(0,x.jsxs)("div",{className:(0,i.A)(d,"sticky-bar header-res-padding clearfix",p>b&&"stick"),children:[(0,x.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,x.jsx)(c.A,{})}),(0,x.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,x.jsx)(a.A,{})})]})}),(0,x.jsx)(o.A,{})]})]})}},2731:function(e,s,n){var l=n(3024),r=n(579);s.A=function(e){var s=e.spaceBottomClass;e.productFullDesc;return(0,r.jsx)("div",{className:(0,l.A)("description-review-area",s),children:(0,r.jsx)("div",{className:"container"})})}},4226:function(e,s,n){var l=n(9456),r=n(3024),i=n(7362),c=n(5571),a=n(1310),o=n(2821),t=n(579),d={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,n=e.category,u=(0,l.d4)((function(e){return e.product})).products,h=(0,l.d4)((function(e){return e.currency})),j=(0,l.d4)((function(e){return e.cart})).cartItems,x=(0,l.d4)((function(e){return e.wishlist})).wishlistItems,m=(0,l.d4)((function(e){return e.compare})).compareItems,v=(0,o.d$)(u,n,null,6);return(0,t.jsx)("div",{className:(0,r.A)("related-product-area",s),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(c.A,{titleText:"Productos Destacados",positionClass:"text-center",spaceClass:"mb-50"}),null!==v&&void 0!==v&&v.length?(0,t.jsx)(i.A,{options:d,children:v.map((function(e){return(0,t.jsx)(i.q,{children:(0,t.jsx)(a.A,{product:e,currency:h,cartItem:j.find((function(s){return s.id===e.id})),wishlistItem:x.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})}}}]);
//# sourceMappingURL=1160.bde800c1.chunk.js.map