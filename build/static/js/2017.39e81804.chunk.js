"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[2017],{8032:function(e,s,a){a.d(s,{A:function(){return o}});var i=a(5544),n=a(3024),l=a(5043),r=function(e){var s=new Date(e).getTime(),a=(0,l.useState)(s-(new Date).getTime()),n=(0,i.A)(a,2),r=n[0],c=n[1];return(0,l.useEffect)((function(){if(!(r<=0)){var e=setInterval((function(){c(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,r]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(r)},c=a(579),t=function(e){var s=e.value,a=e.type;return(0,c.jsxs)("span",{className:"cdown",children:[s," ",(0,c.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,l=r(s),o=(0,i.A)(l,4),d=o[0],m=o[1],u=o[2],h=o[3];return(0,c.jsxs)("div",{className:(0,n.A)("timer timer-style",a),children:[(0,c.jsx)(t,{value:d,type:"days"}),(0,c.jsx)(t,{value:m,type:"hours"}),(0,c.jsx)(t,{value:u,type:"minutes"}),(0,c.jsx)(t,{value:h,type:"secs"})]})}},3188:function(e,s,a){var i=a(3024),n=a(5475),l=a(579);s.A=function(e){var s=e.imageUrl,a=e.logoClass;return(0,l.jsx)("div",{className:(0,i.A)(a),children:(0,l.jsx)(n.N_,{to:"/conejillo/",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+s})})})}},3189:function(e,s,a){var i=a(5475),n=a(4117),l=a(3024),r=a(579);s.A=function(e){var s=e.menuWhiteClass,a=e.sidebarMenu,c=(0,n.Bd)().t;return(0,r.jsx)("div",{className:(0,l.A)(a?"sidebar-menu":"main-menu ".concat(s||"")),children:(0,r.jsx)("div",{className:"logo-container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/conejillo/",children:c("Inicio")})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/conejillo/shop-grid-standard",children:c("Cat\xe1logo")})}),(0,r.jsx)(i.N_,{to:"/conejillo/",children:(0,r.jsx)("img",{src:"/conejillo/assets/img/logo/logo.png",alt:"Logo"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/conejillo/contact",children:c("Contacto")})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/conejillo/blog-details-standard",children:c("Blog")})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.N_,{to:"/conejillo/cart",children:c("Carritoxd")})})]})})})})}},3468:function(e,s,a){var i=a(9456),n=a(4117),l=a(1682),r=a(579);s.A=function(e){var s=e.currency,a=(0,n.Bd)().i18n,c=(0,i.wA)(),t=function(e){var s=e.target.value;a.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,l.M)(s))};return(0,r.jsxs)("div",{className:"language-currency-wrap",children:[(0,r.jsxs)("div",{className:"same-language-currency language-style",children:[(0,r.jsxs)("span",{children:["en"===a.resolvedLanguage?"Espanol":"fn"===a.resolvedLanguage?"French":"de"===a.resolvedLanguage?"Germany":""," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,r.jsxs)("div",{className:"same-language-currency use-style",children:[(0,r.jsxs)("span",{children:[s.currencyName," ",(0,r.jsx)("i",{className:"fa fa-angle-down"})]}),(0,r.jsx)("div",{className:"lang-car-dropdown",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,r.jsx)("div",{className:"same-language-currency",children:(0,r.jsx)("p",{children:"Call Us 3965410"})})]})}},4943:function(e,s,a){var i=a(3024),n=a(9735),l=a(579),r=function(e){var s,a=e.status,n=e.message,r=e.onValidated,c=e.spaceTopClass,t=e.subscribeBtnClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-form-3",c),children:(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),(0,l.jsx)("div",{className:"clear-3 ".concat(t||""),children:(0,l.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,i=e.subscribeBtnClass;return(0,l.jsx)("div",{children:(0,l.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,n=e.status,c=e.message;return(0,l.jsx)(r,{status:n,message:c,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:i})}})})}},8067:function(e,s,a){var i=a(5544),n=a(5043),l=a(3024),r=a(5475),c=a(9456),t=a(2821),o=a(425),d=a(5721),m=a(4990),u=a(3492),h=a(579);s.A=function(e){var s=e.product,a=e.currency,j=e.cartItem,x=e.wishlistItem,p=e.compareItem,g=e.spaceBottomClass,f=e.colorClass,v=e.titlePriceClass,b=(0,n.useState)(!1),N=(0,i.A)(b,2),C=N[0],y=N[1],w=(0,t.do)(s.price,s.discount),A=+(s.price*a.currencyRate).toFixed(2),k=+(w*a.currencyRate).toFixed(2),S=(0,c.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,l.A)("product-wrap-2",g,f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(r.N_,{to:"/conejillo/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:"/conejillo"+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:"/conejillo"+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(r.N_,{to:"".concat("/conejillo","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,d.bE)(s))},className:void 0!==j&&j.quantity>0?"active":"",disabled:void 0!==j&&j.quantity>0,title:void 0!==j?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(v||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(r.N_,{to:"/conejillo/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==w?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:a.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:a.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[a.currencySymbol+A," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(o.A,{show:C,onHide:function(){return y(!1)},product:s,currency:a,discountedPrice:w,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:x,compareItem:p})]})}},6387:function(e,s,a){var i=a(579);s.A=function(e){var s=e.titleText;return(0,i.jsx)("div",{className:"section-title-4",children:(0,i.jsx)("h3",{className:"bg-gray-5",children:s})})}},2017:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var i=a(5043),n=a(2168),l=a(7766),r=a(3854),c=a(6998),t=a(579),o=function(e){var s=e.children,a=e.headerContainerClass,n=e.headerTop,o=e.headerBorderStyle,d=e.headerPaddingClass;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(l.A,{layout:a,top:n,borderStyle:o,headerPaddingClass:d}),s,(0,t.jsx)(r.A,{footerTopSpaceTopClass:"pt-80",spaceBottomClass:"pb-25",footerLogo:"/assets/img/logo/logo-2.png",backgroundImage:"/assets/img/bg/footer-bg.jpg"}),(0,t.jsx)(c.A,{})]})},d=a(5475),m=JSON.parse('{"DD":"Christmas Sale","VA":"New Year Offer <br /> Collection","OZ":"/shop-grid-standard","iL":"/assets/img/slider/slider-35.jpg","Sl":"/assets/img/slider/single-slider-12.png"}'),u=function(){return(0,t.jsxs)("div",{className:"slider-area position-relative",children:[(0,t.jsx)("span",{className:"body-effect effect-snow",style:{backgroundImage:"url(".concat("/conejillo/assets/img/icon-img/snow1.png",")")}}),(0,t.jsx)("div",{className:"single-slider slider-height-14 bg-img",style:{backgroundImage:"url(".concat("/conejillo"+m.iL,")")},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 align-self-center",children:(0,t.jsxs)("div",{className:"slider-content-14",children:[(0,t.jsx)("h3",{children:m.DD}),(0,t.jsx)("h1",{dangerouslySetInnerHTML:{__html:m.VA}}),(0,t.jsx)("div",{className:"slider-btn btn-hover",children:(0,t.jsx)(d.N_,{to:"/conejillo"+m.OZ,children:"SHOP NOW"})})]})}),(0,t.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6",children:(0,t.jsx)("div",{className:"slider-single-img-14",children:(0,t.jsx)("img",{src:"/conejillo"+m.Sl,alt:""})})})]})})})]})},h=a(3024),j=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-48.png","title":"Male Kids","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-49.png","title":"Female kids","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-50.png","title":"Featured","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),x=function(e){var s=e.data,a=e.spaceBottomClass;return(0,t.jsxs)("div",{className:(0,h.A)("single-banner banner-red-color",a),children:[(0,t.jsx)(d.N_,{to:"/conejillo"+s.link,children:(0,t.jsx)("img",{src:"/conejillo"+s.image,alt:""})}),(0,t.jsxs)("div",{className:"banner-content",children:[(0,t.jsx)("h3",{children:s.title}),(0,t.jsxs)("h4",{children:[s.subtitle," ",(0,t.jsx)("span",{children:s.price})]}),(0,t.jsx)(d.N_,{to:s.link,children:(0,t.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},p=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,t.jsx)("div",{className:(0,h.A)("banner-area",s,a),children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:null===j||void 0===j?void 0:j.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,t.jsx)(x,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},g=a(3038),f=a(8032),v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.dateTime,n=e.countDownImage;return(0,t.jsxs)("div",{className:(0,h.A)("funfact-area",s,a),children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,t.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,t.jsx)("h2",{children:"Deal of the day"}),(0,t.jsx)("div",{className:"timer",children:(0,t.jsx)(f.A,{date:i})}),(0,t.jsx)("div",{className:"funfact-btn funfact-btn-red btn-hover",children:(0,t.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,t.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,t.jsx)("div",{className:"funfact-image",children:(0,t.jsx)(d.N_,{to:"/conejillo/shop-grid-standard",children:(0,t.jsx)("img",{src:"/conejillo"+n,alt:"",className:"img-fluid"})})})})]})}),(0,t.jsx)("div",{className:"bg-png-2",children:(0,t.jsx)("img",{src:"/conejillo/assets/img/bg/shape-2.png",alt:""})})]})},b=a(7362),N=JSON.parse('[{"id":"1","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.","customerName":"John Doe","title":"customer"}]'),C=function(e){var s=e.data;return(0,t.jsxs)("div",{className:"single-testimonial-2 text-center",children:[(0,t.jsx)("p",{children:s.content}),(0,t.jsxs)("div",{className:"client-info",children:[(0,t.jsx)("i",{className:"fa fa-map-signs"}),(0,t.jsx)("h5",{children:s.customerName}),(0,t.jsx)("span",{children:s.title})]})]})},y=function(){return(0,t.jsx)("div",{className:"testimonial-area bg-img mt-195",style:{backgroundImage:"url(".concat("/conejillo/assets/img/bg/testimonial-bg-2.jpg",")")},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-6 col-md-7",children:(0,t.jsx)("div",{className:"testimonial-active-2",children:N&&(0,t.jsx)(b.A,{options:{slidesPerView:1,loop:!0,autoplay:!0},children:N.map((function(e,s){return(0,t.jsx)(b.q,{children:(0,t.jsx)(C,{data:e})},s)}))})})}),(0,t.jsx)("div",{className:"col-lg-6 col-md-5",children:(0,t.jsx)("div",{className:"testimonial-img-2",children:(0,t.jsx)("img",{className:"wow fadeInUp",src:"/conejillo/assets/img/testimonial/testi-2.png",alt:""})})})]})})})},w=a(9340),A=function(){return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(n.A,{titleTemplate:"Christmas Home",description:"Christmas home of flone react minimalist eCommerce template."}),(0,t.jsxs)(o,{headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,t.jsx)(u,{}),(0,t.jsx)(p,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70"}),(0,t.jsx)(g.A,{category:"christmas",spaceTopClass:"pt-100",spaceBottomClass:"pb-100",sectionTitle:"Featured Products",bgColorClass:"bg-gray-3",bgShape:!0,colorClass:"pro-puce-color"}),(0,t.jsx)(v,{spaceTopClass:"pt-95",spaceBottomClass:"pb-95",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-11.png"}),(0,t.jsx)(y,{}),(0,t.jsx)(g.A,{category:"christmas",spaceTopClass:"pt-100",spaceBottomClass:"pb-100",sectionTitle:"Best Products",bgColorClass:"bg-gray-3",bgShape:!0,colorClass:"pro-puce-color"}),(0,t.jsx)(w.A,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe"})]})]})}},3854:function(e,s,a){var i=a(3024),n=a(5475),l=a(579);s.A=function(e){var s=e.backgroundColorClass,a=e.copyrightColorClass,r=e.spaceLeftClass,c=e.spaceRightClass,t=e.footerTopBackgroundColorClass,o=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,m=e.footerLogo,u=e.backgroundImage;return(0,l.jsxs)("footer",{className:(0,i.A)("footer-area",s,r,c,u&&"bg-img"),style:{backgroundImage:" ".concat(u?"url(".concat("/conejillo"+u,")"):"url()")},children:[(0,l.jsx)("div",{className:(0,i.A)("footer-top text-center",t,o,d),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(n.N_,{to:"/conejillo",children:(0,l.jsx)("img",{alt:"",src:"/conejillo"+"".concat(m||"/assets/img/logo/logo.png")})})}),(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,l.jsx)("div",{className:"footer-social",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.facebook.com",children:(0,l.jsx)("i",{className:"fa fa-facebook"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.dribbble.com",children:(0,l.jsx)("i",{className:"fa fa-dribbble"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.pinterest.com",children:(0,l.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.twitter.com",children:(0,l.jsx)("i",{className:"fa fa-twitter"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"//www.linkedin.com",children:(0,l.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,l.jsx)("div",{className:"footer-bottom text-center",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:(0,i.A)("copyright-2",a),children:(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Flone"}),". All Rights Reserved."]})})})})]})}},7766:function(e,s,a){a.d(s,{A:function(){return x}});var i=a(5544),n=a(5043),l=a(3024),r=(a(3188),a(3189)),c=a(5911),t=a(3032),o=a(5173),d=a.n(o),m=a(9456),u=(a(3468),function(e){e.borderStyle,(0,m.d4)((function(e){return e.currency}))});u.propTypes={borderStyle:d().string};var h=u,j=a(579),x=function(e){var s=e.layout,a=e.top,o=e.borderStyle,d=e.headerPaddingClass,m=e.headerPositionClass,u=e.headerBgClass,x=(0,n.useState)(0),p=(0,i.A)(x,2),g=p[0],f=p[1],v=(0,n.useState)(0),b=(0,i.A)(v,2),N=b[0],C=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){f(window.scrollY)};return(0,j.jsxs)("header",{className:(0,l.A)("header-area clearfix",u,m),children:[(0,j.jsx)("div",{className:(0,l.A)("header-top-area",d,"visible"===a?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,j.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,j.jsx)(h,{borderStyle:o})})}),(0,j.jsxs)("div",{className:(0,l.A)(d,"sticky-bar header-res-padding clearfix",g>N&&"stick"),children:[(0,j.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-xl-12 col-lg-12 d-none d-lg-block",children:(0,j.jsx)(r.A,{})}),(0,j.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,j.jsx)(c.A,{})})]})}),(0,j.jsx)(t.A,{})]})]})}},9340:function(e,s,a){var i=a(3024),n=a(4943),l=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,r=e.subscribeBtnClass,c=e.bgColorClass,t=e.subscribeColorClass;return(0,l.jsx)("div",{className:(0,i.A)("subscribe-area-3",c,s,a),children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,l.jsxs)("div",{className:(0,i.A)("subscribe-style-3 text-center",t),children:[(0,l.jsx)("h2",{children:"Join With Us! "}),(0,l.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,l.jsx)(n.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},4315:function(e,s,a){var i=a(9456),n=a(7362),l=a(2821),r=a(8067),c=a(579),t={loop:!1,grabCursor:!0,observer:!0,observeParents:!0,spaceBetween:30,navigation:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}};s.A=function(e){var s=e.spaceBottomClass,a=e.colorClass,o=e.titlePriceClass,d=e.category,m=e.type,u=e.limit,h=(0,i.d4)((function(e){return e.product})).products,j=(0,i.d4)((function(e){return e.currency})),x=(0,i.d4)((function(e){return e.cart})).cartItems,p=(0,i.d4)((function(e){return e.wishlist})).wishlistItems,g=(0,i.d4)((function(e){return e.compare})).compareItems,f=(0,l.d$)(h,d,m,u);return null!==f&&void 0!==f&&f.length?(0,c.jsx)(n.A,{className:"position-static",options:t,children:f.map((function(e){return(0,c.jsx)(n.q,{children:(0,c.jsx)(r.A,{spaceBottomClass:s,colorClass:a,product:e,currency:j,cartItem:x.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:g.find((function(s){return s.id===e.id})),titlePriceClass:o})},e.id)}))}):(0,c.jsx)("p",{children:"No products found"})}},3038:function(e,s,a){var i=a(3024),n=a(3702),l=a(7580),r=a(6387),c=a(4315),t=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category,m=e.sectionTitle,u=e.bgShape,h=e.colorClass;return(0,t.jsxs)("div",{className:(0,i.A)("product-area product-area--style2",s,a,o),children:[(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"product-tab-slider-wrapper position-relative",children:(0,t.jsxs)(n.A.Container,{defaultActiveKey:"saleItems",children:[(0,t.jsxs)("div",{className:"product-top-bar section-border mb-60",children:[(0,t.jsx)(r.A,{titleText:m}),(0,t.jsxs)(l.A,{variant:"pills",className:"product-tab-list-3 bg-gray-5 text-center",children:[(0,t.jsx)(l.A.Item,{children:(0,t.jsx)(l.A.Link,{eventKey:"newArrival",children:(0,t.jsx)("h4",{children:"New Arrivals"})})}),(0,t.jsx)(l.A.Item,{children:(0,t.jsx)(l.A.Link,{eventKey:"bestSeller",children:(0,t.jsx)("h4",{children:"Best Sellers"})})}),(0,t.jsx)(l.A.Item,{children:(0,t.jsx)(l.A.Link,{eventKey:"saleItems",children:(0,t.jsx)("h4",{children:"Sale Items"})})})]})]}),(0,t.jsxs)(n.A.Content,{children:[(0,t.jsx)(n.A.Pane,{eventKey:"newArrival",children:(0,t.jsx)(c.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25",colorClass:h})}),(0,t.jsx)(n.A.Pane,{eventKey:"bestSeller",children:(0,t.jsx)(c.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25",colorClass:h})}),(0,t.jsx)(n.A.Pane,{eventKey:"saleItems",children:(0,t.jsx)(c.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25",colorClass:h})})]})]})})}),u?(0,t.jsx)("div",{className:"bg-png-1",children:(0,t.jsx)("img",{src:"/conejillo/assets/img/bg/shape-2.png",alt:""})}):""]})}}}]);
//# sourceMappingURL=2017.39e81804.chunk.js.map