"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[8435],{6801:function(e,s,l){var a=l(3024),n=l(5475),i=l(579);s.A=function(e){var s=e.footerLogo,l=e.spaceBottomClass,r=e.colorClass;return(0,i.jsxs)("div",{className:(0,a.A)("copyright",l,r),children:[(0,i.jsx)("div",{className:"footer-logo",children:(0,i.jsx)(n.N_,{to:"/conejillo/",children:(0,i.jsx)("img",{alt:"",src:"/conejillo"+s})})}),(0,i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,i.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Conejillo"}),".",(0,i.jsx)("br",{}),"Todos los derechos Reservados."]})]})}},2304:function(e,s,l){l.d(s,{A:function(){return i}});var a=l(3024),n=(l(9735),l(579)),i=function(e){var s=e.spaceBottomClass,l=e.spaceLeftClass,i=e.sideMenu,r=e.colorClass,c=e.widgetColorClass;return(0,n.jsxs)("div",{className:(0,a.A)("footer-widget",s,i?"ml-ntv5":l,c),children:[(0,n.jsx)("div",{className:"footer-title",children:(0,n.jsx)("h3",{children:"CONEJILLO"})}),(0,n.jsx)("div",{className:(0,a.A)("subscribe-style",r),children:(0,n.jsx)("p",{children:"Productos de cannabis de calidad y variedad. Explora nuestro cat\xe1logo interactivo y compra de manera segura."})})]})}},3188:function(e,s,l){var a=l(3024),n=l(5475),i=l(579);s.A=function(e){var s=e.imageUrl,l=e.logoClass;return(0,i.jsx)("div",{className:(0,a.A)(l),children:(0,i.jsx)(n.N_,{to:"/conejillo/",children:(0,i.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3468:function(e,s,l){var a=l(9456),n=l(4117),i=l(1682),r=l(579);s.A=function(e){var s=e.currency,l=(0,n.Bd)().i18n,c=(0,a.wA)(),t=function(e){var s=e.target.value;l.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,i.M)(s))};return(0,r.jsxs)("div",{className:"language-currency-wrap",children:[(0,r.jsxs)("div",{className:"same-language-currency language-style",children:[(0,r.jsxs)("span",{children:["en"===l.resolvedLanguage?"Espanol":"fn"===l.resolvedLanguage?"French":"de"===l.resolvedLanguage?"Germany":""," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,r.jsxs)("div",{className:"same-language-currency use-style",children:[(0,r.jsxs)("span",{children:[s.currencyName," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us 3965410"})})]})}},1310:function(e,s,l){var a=l(5544),n=l(5043),i=l(3024),r=l(5475),c=l(9456),t=l(5913),o=l(2821),d=l(425),m=l(5721),u=l(4990),h=l(579);s.A=function(e){var s=e.product,l=e.currency,x=e.cartItem,j=e.wishlistItem,g=e.compareItem,p=e.spaceBottomClass,v=(0,n.useState)(!1),f=(0,a.A)(v,2),N=f[0],b=f[1],C=(0,o.do)(s.price,s.discount),A=+(s.price*l.currencyRate).toFixed(2),y=+(C*l.currencyRate).toFixed(2),w=(0,c.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,i.A)("product-wrap",p),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(r.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"Nuevo"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,u.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Comprar ahora"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(r.N_,{to:"".concat("/conejillo","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return w((0,m.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"A\xf1adido al carrito":"A\xf1adir al carrito",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"A\xf1adido":"A\xf1adir al carrito"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Agotado"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return b(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(t.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==C?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:l.currencySymbol+y})," ",(0,h.jsx)("span",{className:"old",children:l.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[l.currencySymbol+A," "]})})]})]}),(0,h.jsx)(d.A,{show:N,onHide:function(){return b(!1)},product:s,currency:l,discountedPrice:C,finalProductPrice:A,finalDiscountedPrice:y,wishlistItem:j,compareItem:g})]})}},5571:function(e,s,l){var a=l(3024),n=l(579);s.A=function(e){var s=e.titleText,l=e.subtitleText,i=e.subtitleColorClass,r=e.positionClass,c=e.spaceClass,t=e.borderClass;return(0,n.jsxs)("div",{className:(0,a.A)("section-title",r,c,t),children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("p",{className:(0,a.A)(i),children:l})]})}},2764:function(e,s,l){l.d(s,{A:function(){return x}});var a=l(5043),n=l(5544),i=l(9456),r=l(3188),c=l(6487),t=l(3189),o=l(4993),d=(l(3468),l(579)),m=function(){var e=(0,a.useState)(0),s=(0,n.A)(e,2),l=s[0],m=s[1],u=(0,a.useState)(0),h=(0,n.A)(u,2),x=h[0],j=h[1];(0,i.d4)((function(e){return e.currency}));(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return j(e.offsetTop),window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}}),[]);var g=function(){m(window.scrollY)};return(0,d.jsxs)("header",{className:"header-area clearfix header-hm9 transparent-bar",children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"header-top-area d-none d-lg-block",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-lg-2 d-none d-lg-block text-center",children:(0,d.jsx)(r.A,{imageUrl:"/assets/img/logo/logo.png",logoClass:"logo-hm-9"})})})})}),(0,d.jsx)("div",{className:"header-bottom sticky-bar header-res-padding header-padding-2 ".concat(l>x?"stick":""),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,d.jsx)(r.A,{imageUrl:"/assets/img/logo/logo.png"})}),(0,d.jsx)("div",{className:"col-6 d-block d-lg-none",children:(0,d.jsx)(c.A,{})}),(0,d.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,d.jsx)(t.A,{})})]}),(0,d.jsx)(o.A,{})]})})]})},u=l(5896),h=l(6998),x=function(e){var s=e.children,l=e.footerBgClass;return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(m,{}),s,(0,d.jsx)(u.A,{backgroundColorClass:l||"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,d.jsx)(h.A,{})]})}},8435:function(e,s,l){l.r(s),l.d(s,{default:function(){return b}});var a=l(5043),n=l(2168),i=l(2764),r=l(8906),c=l(7362),t=JSON.parse('[{"id":1,"title":"-20% Off All Items","subtitle":"Green Up <br/> Your Room","image":"/assets/img/slider/single-slide-11-1.png","url":"/shop-grid-standard"},{"id":2,"title":"-40% Off All Items","subtitle":"Summer Offer <br/> 2024 Collection","image":"/assets/img/slider/single-slide-11-2.png","url":"/shop-grid-standard"}]'),o=l(5475),d=l(579),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"slider-height-9 bg-gray-2 d-flex align-items-center",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row align-items-center slider-h11-mrg",children:[(0,d.jsx)("div",{className:"col-12 col-sm-6",children:(0,d.jsxs)("div",{className:"slider-content-11 slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn-11 btn-hover",children:(0,d.jsx)(o.N_,{className:"animated",to:"/conejillo"+s.url,children:"SHOP NOW"})})]})}),(0,d.jsx)("div",{className:"col-lg-6 col-md-6 col-12 col-sm-6",children:(0,d.jsx)("div",{className:"slider-singleimg-hm11 slider-animated-1",children:(0,d.jsx)("img",{className:"animated",src:"/conejillo"+s.image,alt:""})})})]})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[r._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:t&&(0,d.jsx)(c.A,{options:u,children:t.map((function(e,s){return(0,d.jsx)(c.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},x=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-13.png","title":"Peepal","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-14.png","title":"Banyan","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-15.png","title":"Aloe Vera","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),j=l(3024),g=function(e){var s=e.data,l=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,j.A)("single-banner banner-shape banner-green-color",l),children:[(0,d.jsx)(o.N_,{to:"/conejillo"+s.link,children:(0,d.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:"/conejillo"+s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},p=function(){return(0,d.jsx)("div",{className:"banner-area bg-gray-2",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===x||void 0===x?void 0:x.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,d.jsx)(g,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},v=l(1591),f=l(2192),N=l(6977),b=function(){return(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(n.A,{titleTemplate:"Plants Home",description:"Plants home of flone react minimalist eCommerce template."}),(0,d.jsxs)(i.A,{footerBgClass:"bg-gray-4",children:[(0,d.jsx)(h,{}),(0,d.jsx)(p,{}),(0,d.jsx)(v.A,{spaceTopClass:"pt-60",spaceBottomClass:"pb-70",bgColorClass:"bg-gray-2",category:"plant"}),(0,d.jsx)(f.A,{bgColorClass:"bg-gray-2",spaceBottomClass:"pb-70",featureShapeClass:"support-shape-2"}),(0,d.jsx)(N.A,{bgColorClass:"bg-gray-2",spaceBottomClass:"pb-100",spaceLeftClass:"pl-30",spaceRightClass:"pr-30"})]})]})}},2192:function(e,s,l){l.d(s,{A:function(){return c}});var a=l(3024),n=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"}]'),i=l(579),r=function(e){var s=e.data,l=e.spaceBottomClass,n=e.featureShapeClass;return(0,i.jsx)("div",{className:(0,a.A)("support-wrap-2 support-padding-2 text-center",n,l),children:(0,i.jsxs)("div",{className:"support-content-2",children:[(0,i.jsx)("img",{className:"animated",src:"/conejillo"+s.image,alt:""}),(0,i.jsx)("h5",{children:s.title}),(0,i.jsx)("p",{children:s.subtitle})]})})},c=function(e){var s=e.bgColorClass,l=e.spaceBottomClass,c=e.featureShapeClass;return(0,i.jsx)("div",{className:(0,a.A)("support-area",s,l),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e,s){return(0,i.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,i.jsx)(r,{data:e,spaceBottomClass:"mb-30",featureShapeClass:c})},s)}))})})})}},5896:function(e,s,l){var a=l(3024),n=l(5475),i=l(6801),r=l(2304),c=l(579);s.A=function(e){var s=e.backgroundColorClass,l=e.spaceTopClass,t=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.containerClass,u=e.extraFooterClass,h=e.sideMenu;return(0,c.jsx)("footer",{className:(0,a.A)("footer-area",s,l,t,u,o,d),children:(0,c.jsx)("div",{className:"".concat(m||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)(i.A,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"Sobre Nosotros"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo/about",children:"Sobre Nosotros"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo/home-flower-shop",children:"Inicio"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo/shop-grid-standard",children:"Cat\xe1logo"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo/contact",children:"Contacto"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ENLACES"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo#/",children:"Mercado Libre"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/conejillo#/",children:"Amazon"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"S\xcdGUENOS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(r.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},6977:function(e,s,l){l.d(s,{A:function(){return t}});var a=l(3024),n=l(9735),i=l(579),r=function(e){var s,l=e.status,a=e.message,n=e.onValidated;return(0,i.jsxs)("div",{className:"subscribe-form-2",children:[(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),(0,i.jsx)("div",{className:"clear-2",children:(0,i.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),s.value=""},children:(0,i.jsx)("i",{className:"fa fa-long-arrow-right"})})})]}),"sending"===l&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===l&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}}),"success"===l&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:a}})]})},c=function(e){var s=e.mailchimpUrl;return(0,i.jsx)("div",{children:(0,i.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,l=e.status,a=e.message;return(0,i.jsx)(r,{status:l,message:a,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.bgColorClass,l=e.spaceBottomClass,n=e.spaceLeftClass,r=e.spaceRightClass;return(0,i.jsx)("div",{className:(0,a.A)("subscribe-area",s,l,n,r),children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-8 col-lg-8 ms-auto me-auto",children:(0,i.jsxs)("div",{className:"subscribe-style-2 text-center",children:[(0,i.jsx)("h2",{children:"Subscribe "}),(0,i.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,i.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})})})})})}},3590:function(e,s,l){var a=l(5043),n=l(9456),i=l(2821),r=l(1310),c=l(579);s.A=function(e){var s=e.spaceBottomClass,l=e.category,t=e.type,o=e.limit,d=(0,n.d4)((function(e){return e.product})).products,m=(0,n.d4)((function(e){return e.currency})),u=(0,n.d4)((function(e){return e.cart})).cartItems,h=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,n.d4)((function(e){return e.compare})).compareItems,j=(0,i.d$)(d,l,t,o);return(0,c.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(r.A,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}},1591:function(e,s,l){var a=l(3024),n=l(3702),i=l(7580),r=l(5571),c=l(3590),t=l(579);s.A=function(e){var s=e.spaceTopClass,l=e.spaceBottomClass,o=e.bgColorClass,d=e.category;return(0,t.jsx)("div",{className:(0,a.A)("product-area",s,l,o),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(r.A,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,t.jsxs)(n.A.Container,{defaultActiveKey:"bestSeller",children:[(0,t.jsxs)(i.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,t.jsx)(i.A.Item,{children:(0,t.jsx)(i.A.Link,{eventKey:"newArrival",children:(0,t.jsx)("h4",{children:"New Arrivals"})})}),(0,t.jsx)(i.A.Item,{children:(0,t.jsx)(i.A.Link,{eventKey:"bestSeller",children:(0,t.jsx)("h4",{children:"Best Sellers"})})}),(0,t.jsx)(i.A.Item,{children:(0,t.jsx)(i.A.Link,{eventKey:"saleItems",children:(0,t.jsx)("h4",{children:"Sale Items"})})})]}),(0,t.jsxs)(n.A.Content,{children:[(0,t.jsx)(n.A.Pane,{eventKey:"newArrival",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,t.jsx)(n.A.Pane,{eventKey:"bestSeller",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,t.jsx)(n.A.Pane,{eventKey:"saleItems",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)(c.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}}}]);
//# sourceMappingURL=8435.61ab8913.chunk.js.map