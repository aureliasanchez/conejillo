"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[686],{3813:function(e,s,l){var i=l(5475),a=l(579);s.A=function(e){var s=e.singlePost;return(0,a.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,a.jsxs)("div",{className:"blog-img",children:[(0,a.jsx)(i.N_,{to:"/conejillo"+s.url,children:(0,a.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,a.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,a.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,a.jsx)("div",{className:"blog-content-wrap",children:(0,a.jsxs)("div",{className:"blog-content text-center",children:[(0,a.jsx)("h3",{children:(0,a.jsx)(i.N_,{to:"/conejillo"+s.url,children:s.title})}),(0,a.jsxs)("span",{children:["By"," ",(0,a.jsx)(i.N_,{to:"/conejillo"+s.authorUrl,children:s.author})]})]})})]})}},6801:function(e,s,l){var i=l(3024),a=l(5475),r=l(579);s.A=function(e){var s=e.footerLogo,l=e.spaceBottomClass,n=e.colorClass;return(0,r.jsxs)("div",{className:(0,i.A)("copyright",l,n),children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(a.N_,{to:"/conejillo/",children:(0,r.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,r.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,l){l.d(s,{A:function(){return r}});var i=l(3024),a=(l(9735),l(579)),r=function(e){var s=e.spaceBottomClass,l=e.spaceLeftClass,r=e.sideMenu,n=e.colorClass,c=e.widgetColorClass;return(0,a.jsxs)("div",{className:(0,i.A)("footer-widget",s,r?"ml-ntv5":l,c),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"CONEJILLO"})}),(0,a.jsx)("div",{className:(0,i.A)("subscribe-style",n),children:(0,a.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},3188:function(e,s,l){var i=l(3024),a=l(5475),r=l(579);s.A=function(e){var s=e.imageUrl,l=e.logoClass;return(0,r.jsx)("div",{className:(0,i.A)(l),children:(0,r.jsx)(a.N_,{to:"/conejillo/",children:(0,r.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3468:function(e,s,l){var i=l(9456),a=l(4117),r=l(1682),n=l(579);s.A=function(e){var s=e.currency,l=(0,a.Bd)().i18n,c=(0,i.wA)(),t=function(e){var s=e.target.value;l.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,r.M)(s))};return(0,n.jsxs)("div",{className:"language-currency-wrap",children:[(0,n.jsxs)("div",{className:"same-language-currency language-style",children:[(0,n.jsxs)("span",{children:["en"===l.resolvedLanguage?"Espanol":"fn"===l.resolvedLanguage?"French":"de"===l.resolvedLanguage?"Germany":""," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,n.jsxs)("div",{className:"same-language-currency use-style",children:[(0,n.jsxs)("span",{children:[s.currencyName," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,n.jsx)("div",{className:"same-language-currency",children:(0,n.jsx)("p",{children:"Call Us 3965410"})})]})}},1310:function(e,s,l){var i=l(5544),a=l(5043),r=l(3024),n=l(5475),c=l(9456),t=l(5913),o=l(2821),d=l(425),m=l(5721),u=l(4990),h=l(579);s.A=function(e){var s=e.product,l=e.currency,x=e.cartItem,j=e.wishlistItem,g=e.compareItem,p=e.spaceBottomClass,v=(0,a.useState)(!1),f=(0,i.A)(v,2),N=f[0],b=f[1],A=(0,o.do)(s.price,s.discount),C=+(s.price*l.currencyRate).toFixed(2),y=+(A*l.currencyRate).toFixed(2),w=(0,c.wA)();return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)("div",{className:(0,r.A)("product-wrap",p),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(n.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,u.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Comprar ahora"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(n.N_,{to:"".concat("/conejillo","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return w((0,m.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"A\xf1adido al carrito":"A\xf1adir al carrito",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"A\xf1adido":"A\xf1adir al carrito"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Agotado"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return b(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(n.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(t.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==A?(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("span",{children:l.currencySymbol+y})," ",(0,h.jsx)("span",{className:"old",children:l.currencySymbol+C})]}):(0,h.jsxs)("span",{children:[l.currencySymbol+C," "]})})]})]}),(0,h.jsx)(d.A,{show:N,onHide:function(){return b(!1)},product:s,currency:l,discountedPrice:A,finalProductPrice:C,finalDiscountedPrice:y,wishlistItem:j,compareItem:g})]})}},5571:function(e,s,l){var i=l(3024),a=l(579);s.A=function(e){var s=e.titleText,l=e.subtitleText,r=e.subtitleColorClass,n=e.positionClass,c=e.spaceClass,t=e.borderClass;return(0,a.jsxs)("div",{className:(0,i.A)("section-title",n,c,t),children:[(0,a.jsx)("h2",{children:s}),(0,a.jsx)("p",{className:(0,i.A)(r),children:l})]})}},8062:function(e,s,l){var i=l(5043),a=l(7766),r=l(5896),n=l(6998),c=l(579);s.A=function(e){var s=e.children,l=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)(a.A,{layout:l,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,c.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(n.A,{})]})}},686:function(e,s,l){l.r(s),l.d(s,{default:function(){return N}});var i=l(5043),a=l(2168),r=l(8062),n=l(8906),c=l(7362),t=JSON.parse('[{"id":1,"title":"Smart Products","subtitle":"Winter Offer 2024 Collection","image":"/assets/img/slider/single-slide-hm1-2.png","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"Summer Offer 2024 Collection","image":"/assets/img/slider/single-slide-1.png","url":"/shop-grid-standard"}]'),o=l(5475),d=l(579),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider slider-height-1 bg-purple",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6",children:(0,d.jsxs)("div",{className:"slider-content slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",children:s.subtitle}),(0,d.jsx)("div",{className:"slider-btn btn-hover",children:(0,d.jsx)(o.N_,{className:"animated",to:"/conejillo"+s.url,children:"SHOP NOW"})})]})}),(0,d.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6",children:(0,d.jsx)("div",{className:"slider-single-img slider-animated-1",children:(0,d.jsx)("img",{className:"animated img-fluid",src:"/conejillo"+s.image,alt:""})})})]})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[n._R],loop:!0,speed:1e3,navigation:!0},h=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:t&&(0,d.jsx)(c.A,{options:u,children:t.map((function(e,s){return(0,d.jsx)(c.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},x=l(3024),j=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"},{"id":4,"image":"/assets/img/icon-img/support-4.png","title":"Order Discount","subtitle":"Free shipping on all order"}]'),g=function(e){var s=e.singleFeature;return(0,d.jsxs)("div",{className:"support-wrap mb-30",children:[(0,d.jsx)("div",{className:"support-icon",children:(0,d.jsx)("img",{className:"animated",src:"/conejillo"+s.image,alt:""})}),(0,d.jsxs)("div",{className:"support-content",children:[(0,d.jsx)("h5",{children:s.title}),(0,d.jsx)("p",{children:s.subtitle})]})]})},p=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,x.A)("support-area",s,l),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===j||void 0===j?void 0:j.map((function(e){return(0,d.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,d.jsx)(g,{singleFeature:e})},e.id)}))})})})},v=l(1591),f=l(5489),N=function(){return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(a.A,{titleTemplate:"Fashion Home",description:"Fashion home of flone react minimalist eCommerce template."}),(0,d.jsxs)(r.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",children:[(0,d.jsx)(h,{}),(0,d.jsx)(p,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),(0,d.jsx)(v.A,{spaceBottomClass:"pb-60",category:"fashion"}),(0,d.jsx)(f.A,{spaceBottomClass:"pb-55"})]})]})}},5489:function(e,s,l){var i=l(3024),a=l(5513),r=l(3813),n=l(5571),c=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass;return(0,c.jsx)("div",{className:(0,i.A)("blog-area",s,l),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.A,{titleText:"OUR BLOG",positionClass:"text-center",spaceClass:"mb-55"}),(0,c.jsx)("div",{className:"row",children:null===a||void 0===a?void 0:a.map((function(e){return(0,c.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,c.jsx)(r.A,{singlePost:e})},e.id)}))})]})})}},5896:function(e,s,l){var i=l(3024),a=l(5475),r=l(6801),n=l(2304),c=l(579);s.A=function(e){var s=e.backgroundColorClass,l=e.spaceTopClass,t=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.containerClass,u=e.extraFooterClass,h=e.sideMenu;return(0,c.jsx)("footer",{className:(0,i.A)("footer-area",s,l,t,u,o,d),children:(0,c.jsx)("div",{className:"".concat(m||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(r.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"Sobre Nosotros"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo/about",children:"Sobre Nosotros"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo/home-flower-shop",children:"Inicio"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo/shop-grid-standard",children:"Cat\xe1logo"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo/contact",children:"Contacto"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ENLACES"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo#/",children:"Mercado Libre"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/conejillo#/",children:"Amazon"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"S\xcdGUENOS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(n.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},7766:function(e,s,l){l.d(s,{A:function(){return g}});var i=l(5544),a=l(5043),r=l(3024),n=l(3188),c=l(3189),t=l(6487),o=l(4993),d=l(5173),m=l.n(d),u=l(9456),h=(l(3468),function(e){e.borderStyle,(0,u.d4)((function(e){return e.currency}))});h.propTypes={borderStyle:m().string};var x=h,j=l(579),g=function(e){var s=e.layout,l=e.top,d=e.borderStyle,m=e.headerPaddingClass,u=e.headerPositionClass,h=e.headerBgClass,g=(0,a.useState)(0),p=(0,i.A)(g,2),v=p[0],f=p[1],N=(0,a.useState)(0),b=(0,i.A)(N,2),A=b[0],C=b[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){f(window.scrollY)};return(0,j.jsxs)("header",{className:(0,r.A)("header-area clearfix",h,u),children:[(0,j.jsx)("div",{className:(0,r.A)("header-top-area",m,"visible"===l?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,j.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,j.jsx)(x,{borderStyle:d})})}),(0,j.jsxs)("div",{className:(0,r.A)(m,"sticky-bar header-res-padding clearfix",v>A&&"stick"),children:[(0,j.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,j.jsx)(n.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo"})}),(0,j.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,j.jsx)(c.A,{})}),(0,j.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,j.jsx)(t.A,{})})]})}),(0,j.jsx)(o.A,{})]})]})}},3590:function(e,s,l){var i=l(5043),a=l(9456),r=l(2821),n=l(1310),c=l(579);s.A=function(e){var s=e.spaceBottomClass,l=e.category,t=e.type,o=e.limit,d=(0,a.d4)((function(e){return e.product})).products,m=(0,a.d4)((function(e){return e.currency})),u=(0,a.d4)((function(e){return e.cart})).cartItems,h=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,a.d4)((function(e){return e.compare})).compareItems,j=(0,r.d$)(d,l,t,o);return(0,c.jsx)(i.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(n.A,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}},1591:function(e,s,l){var i=l(3024),a=l(3702),r=l(7580),n=l(5571),c=l(3590),t=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass,o=e.bgColorClass,d=e.category;return(0,t.jsx)("div",{className:(0,i.A)("product-area",s,l,o),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(n.A,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,t.jsxs)(a.A.Container,{defaultActiveKey:"bestSeller",children:[(0,t.jsxs)(r.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,t.jsx)(r.A.Item,{children:(0,t.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,t.jsx)("h4",{children:"New Arrivals"})})}),(0,t.jsx)(r.A.Item,{children:(0,t.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,t.jsx)("h4",{children:"Best Sellers"})})}),(0,t.jsx)(r.A.Item,{children:(0,t.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,t.jsx)("h4",{children:"Sale Items"})})})]}),(0,t.jsxs)(a.A.Content,{children:[(0,t.jsx)(a.A.Pane,{eventKey:"newArrival",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,t.jsx)(a.A.Pane,{eventKey:"bestSeller",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,t.jsx)(a.A.Pane,{eventKey:"saleItems",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}},5513:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')}}]);
//# sourceMappingURL=686.09525df6.chunk.js.map