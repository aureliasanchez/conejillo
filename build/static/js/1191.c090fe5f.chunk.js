"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[1191],{1191:function(e,t,s){s.r(t);var r=s(5544),a=s(5043),o=s(7804),n=s(9456),i=s(3216),c=s(2821),l=s(2168),u=s(8062),d=s(970),g=s(9383),h=s(7446),m=s(7577),p=s(579);t.default=function(){var e=(0,a.useState)("list"),t=(0,r.A)(e,2),s=t[0],f=t[1],j=(0,a.useState)(""),x=(0,r.A)(j,2),v=x[0],S=x[1],P=(0,a.useState)(""),C=(0,r.A)(P,2),N=C[0],b=C[1],A=(0,a.useState)(""),y=(0,r.A)(A,2),k=y[0],L=y[1],w=(0,a.useState)(""),T=(0,r.A)(w,2),F=T[0],z=T[1],M=(0,a.useState)(0),H=(0,r.A)(M,2),D=H[0],G=H[1],_=(0,a.useState)(1),E=(0,r.A)(_,2),I=E[0],O=E[1],R=(0,a.useState)([]),V=(0,r.A)(R,2),q=V[0],B=V[1],J=(0,a.useState)([]),K=(0,r.A)(J,2),Q=K[0],U=K[1],W=(0,n.d4)((function(e){return e.product})).products,X=(0,i.zy)().pathname;return(0,a.useEffect)((function(){var e=(0,c.Gj)(W,v,N),t=(0,c.Gj)(e,k,F);U(e=t),B(e.slice(D,D+15))}),[D,W,v,N,k,F]),(0,p.jsxs)(a.Fragment,{children:[(0,p.jsx)(l.A,{titleTemplate:"Shop Page",description:"Shop page of flone react minimalist eCommerce template."}),(0,p.jsxs)(u.A,{headerTop:"visible",children:[(0,p.jsx)(d.A,{pages:[{label:"Home",path:"/conejillo/"},{label:"Shop",path:"/conejillo"+X}]}),(0,p.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-3 order-2 order-lg-1",children:(0,p.jsx)(g.A,{products:W,getSortParams:function(e,t){S(e),b(t)},sideSpaceClass:"mr-30"})}),(0,p.jsxs)("div",{className:"col-lg-9 order-1 order-lg-2",children:[(0,p.jsx)(h.A,{getLayout:function(e){f(e)},getFilterSortParams:function(e,t){L(e),z(t)},productCount:W.length,sortedProductCount:q.length}),(0,p.jsx)(m.A,{layout:s,products:q}),(0,p.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,p.jsx)(o.A,{totalRecords:Q.length,pageLimit:15,pageNeighbours:2,setOffset:G,currentPage:I,setCurrentPage:O,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})]})})})]})]})}},9383:function(e,t,s){s.d(t,{A:function(){return f}});var r=s(3024),a=s(2821),o=function(){},n=s(579),i=function(e){var t=e.categories,s=e.getSortParams;return(0,n.jsxs)("div",{className:"sidebar-widget",children:[(0,n.jsx)("h4",{className:"pro-sidebar-title",children:"Categor\xedas "}),(0,n.jsx)("div",{className:"sidebar-widget-list mt-30",children:t?(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{className:"sidebar-widget-list-left",children:(0,n.jsxs)("button",{onClick:function(e){s("category",""),(0,a.nL)(e)},children:[(0,n.jsx)("span",{className:"checkmark"})," Todas las categor\xedas"]})})}),t.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("div",{className:"sidebar-widget-list-left",children:(0,n.jsxs)("button",{onClick:function(t){s("category",e),(0,a.nL)(t)},children:[" ",(0,n.jsx)("span",{className:"checkmark"})," ",e," "]})})},t)}))]}):"No categories found"})]})},c=s(5173),l=s.n(c),u=function(e){e.colors,e.getSortParams};u.propTypes={colors:l().array,getSortParams:l().func};var d=u,g=function(e){e.sizes,e.getSortParams};g.propTypes={getSortParams:l().func,sizes:l().array};var h=g,m=function(e){e.tags,e.getSortParams};m.propTypes={getSortParams:l().func,tags:l().array};var p=m,f=function(e){var t=e.products,s=e.getSortParams,c=e.sideSpaceClass,l=(0,a.SC)(t),u=(0,a.zf)(t),g=(0,a.ur)(t),m=(0,a.VI)(t);return(0,n.jsxs)("div",{className:(0,r.A)("sidebar-style",c),children:[(0,n.jsx)(o,{}),(0,n.jsx)(i,{categories:l,getSortParams:s}),(0,n.jsx)(d,{colors:u,getSortParams:s}),(0,n.jsx)(h,{sizes:g,getSortParams:s}),(0,n.jsx)(p,{tags:m,getSortParams:s})]})}},7446:function(e,t,s){s.d(t,{A:function(){return i}});var r=s(5043),a=s(2821),o=s(579),n=function(e){var t=e.getLayout,s=e.getFilterSortParams,r=e.productCount,n=e.sortedProductCount;return(0,o.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,o.jsxs)("div",{className:"select-shoing-wrap",children:[(0,o.jsx)("div",{className:"shop-select",children:(0,o.jsxs)("select",{onChange:function(e){return s("filterSort",e.target.value)},children:[(0,o.jsx)("option",{value:"default",children:"Por defecto"}),(0,o.jsx)("option",{value:"priceHighToLow",children:"Precio: De Mayor a Menor"}),(0,o.jsx)("option",{value:"priceLowToHigh",children:"Precio: De Menor a Mayor"})]})}),(0,o.jsxs)("p",{children:["Mostrando ",n," de ",r," resultados"]})]}),(0,o.jsxs)("div",{className:"shop-tab",children:[(0,o.jsx)("button",{onClick:function(e){t("grid two-column"),(0,a.L)(e)},children:(0,o.jsx)("i",{className:"fa fa-th-large"})}),(0,o.jsx)("button",{onClick:function(e){t("grid three-column"),(0,a.L)(e)},children:(0,o.jsx)("i",{className:"fa fa-th"})}),(0,o.jsx)("button",{onClick:function(e){t("list"),(0,a.L)(e)},children:(0,o.jsx)("i",{className:"fa fa-list-ul"})})]})]})},i=function(e){var t=e.getLayout,s=e.getFilterSortParams,a=e.productCount,i=e.sortedProductCount;return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(n,{getLayout:t,getFilterSortParams:s,productCount:a,sortedProductCount:i})})}}}]);
//# sourceMappingURL=1191.c090fe5f.chunk.js.map