"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[4640],{5425:function(n,e,t){t.d(e,{sE:function(){return a},y:function(){return i}});var r="data-rr-ui-",o="rrUi";function a(n){return"".concat(r).concat(n)}function i(n){return"".concat(o).concat(n)}},8187:function(n,e,t){var r=t(1456),o=t(8293),a=t(5043);e.A=function(n){var e=n.children,t=n.in,i=n.onExited,s=n.mountOnEnter,c=n.unmountOnExit,l=(0,a.useRef)(null),u=(0,a.useRef)(t),d=(0,r.A)(i);(0,a.useEffect)((function(){t?u.current=!0:d(l.current)}),[t,d]);var f=(0,o.A)(l,e.ref),v=(0,a.cloneElement)(e,{ref:f});return t?v:c||!u.current&&s?null:v}},346:function(n,e,t){function r(n,e){n.classList?n.classList.add(e):function(n,e){return n.classList?!!e&&n.classList.contains(e):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")}(n,e)||("string"===typeof n.className?n.className=n.className+" "+e:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+e))}t.d(e,{A:function(){return r}})},3818:function(n,e,t){t.d(e,{A:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(n,e){return r(n.querySelectorAll(e))}},7068:function(n,e,t){function r(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function o(n,e){n.classList?n.classList.remove(e):"string"===typeof n.className?n.className=r(n.className,e):n.setAttribute("class",r(n.className&&n.className.baseVal||"",e))}t.d(e,{A:function(){return o}})},8072:function(n,e,t){var r=t(9379),o=t(45),a=t(4467),i=t(8139),s=t.n(i),c=t(5043),l=t(4573),u=t(1111),d=t(2643),f=t(865),v=t(579),m=["className","children","transitionClasses","onEnter"],h=(0,a.A)((0,a.A)({},l.ns,"show"),l._K,"show"),A=c.forwardRef((function(n,e){var t=n.className,a=n.children,i=n.transitionClasses,l=void 0===i?{}:i,A=n.onEnter,p=(0,o.A)(n,m),g=(0,r.A)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p),b=(0,c.useCallback)((function(n,e){(0,d.A)(n),null==A||A(n,e)}),[A]);return(0,v.jsx)(f.A,(0,r.A)((0,r.A)({ref:e,addEndListener:u.A},g),{},{onEnter:b,childRef:a.ref,children:function(n,e){return c.cloneElement(a,(0,r.A)((0,r.A)({},e),{},{className:s()("fade",t,a.props.className,h[n],l[n])}))}}))}));A.displayName="Fade",e.A=A},4640:function(n,e,t){t.d(e,{A:function(){return Kn}});var r,o=t(5544),a=t(45),i=t(9379),s=t(8139),c=t.n(s),l=t(3043),u=t(8279),d=t(182),f=t(8260);function v(n){if((!r&&0!==r||n)&&u.A){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),r=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return r}var m=t(2667),h=t(1456),A=t(8293),p=t(5043);function g(n){var e=function(n){var e=(0,p.useRef)(n);return e.current=n,e}(n);(0,p.useEffect)((function(){return function(){return e.current()}}),[])}var b=t(4232);function E(n){void 0===n&&(n=(0,d.A)());try{var e=n.activeElement;return e&&e.nodeName?e:null}catch(t){return n.body}}function y(n,e){return n.contains?n.contains(e):n.compareDocumentPosition?n===e||!!(16&n.compareDocumentPosition(e)):void 0}var x=t(753),k=t(7950),N=t(6723),w=t(1342),C=t(436),R=t(4467),j=t(3029),O=t(2901),T=t(8747);var S=(0,t(5425).sE)("modal-open"),L=function(){return(0,O.A)((function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ownerDocument,r=e.handleContainerOverflow,o=void 0===r||r,a=e.isRTL,i=void 0!==a&&a;(0,j.A)(this,n),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}),[{key:"getScrollbarWidth",value:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=n.defaultView;return Math.abs(e.innerWidth-n.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(n){}},{key:"removeModalAttributes",value:function(n){}},{key:"setContainerStyle",value:function(n){var e={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();n.style=(0,R.A)({overflow:r.style.overflow},t,r.style[t]),n.scrollBarWidth&&(e[t]="".concat(parseInt((0,T.A)(r,t)||"0",10)+n.scrollBarWidth,"px")),r.setAttribute(S,""),(0,T.A)(r,e)}},{key:"reset",value:function(){var n=this;(0,C.A)(this.modals).forEach((function(e){return n.remove(e)}))}},{key:"removeContainerStyle",value:function(n){var e=this.getElement();e.removeAttribute(S),Object.assign(e.style,n.style)}},{key:"add",value:function(n){var e=this.modals.indexOf(n);return-1!==e?e:(e=this.modals.length,this.modals.push(n),this.setModalAttributes(n),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e)}},{key:"remove",value:function(n){var e=this.modals.indexOf(n);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}},{key:"isTopModal",value:function(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}])}(),F=L,B=(0,p.createContext)(u.A?window:void 0);B.Provider;function D(){return(0,p.useContext)(B)}var P=function(n,e){return u.A?null==n?(e||(0,d.A)()).body:("function"===typeof n&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null};var M=t(4723),H=t(8187);var W=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function U(n){var e=n.onEnter,t=n.onEntering,r=n.onEntered,o=n.onExit,a=n.onExiting,i=n.onExited,s=n.addEndListener,c=n.children,l=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,W),u=function(){var n=p.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}().major>=19?c.props.ref:c.ref,d=(0,p.useRef)(null),f=(0,A.A)(d,"function"===typeof c?null:u),v=function(n){return function(e){n&&d.current&&n(d.current,e)}},m=(0,p.useCallback)(v(e),[e]),h=(0,p.useCallback)(v(t),[t]),g=(0,p.useCallback)(v(r),[r]),b=(0,p.useCallback)(v(o),[o]),E=(0,p.useCallback)(v(a),[a]),y=(0,p.useCallback)(v(i),[i]),x=(0,p.useCallback)(v(s),[s]);return Object.assign({},l,{nodeRef:d},e&&{onEnter:m},t&&{onEntering:h},r&&{onEntered:g},o&&{onExit:b},a&&{onExiting:E},i&&{onExited:y},s&&{addEndListener:x},{children:"function"===typeof c?function(n,e){return c(n,Object.assign({},e,{ref:f}))}:(0,p.cloneElement)(c,{ref:f})})}var I=t(579),K=["component"];var z=p.forwardRef((function(n,e){var t=n.component,r=U(function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,K));return(0,I.jsx)(t,Object.assign({ref:e},r))}));function V(n){var e=n.children,t=n.in,r=n.onExited,a=n.onEntered,i=n.transition,s=(0,p.useState)(!t),c=(0,o.A)(s,2),l=c[0],u=c[1];t&&l&&u(!1);var d=function(n){var e=n.in,t=n.onTransition,r=(0,p.useRef)(null),o=(0,p.useRef)(!0),a=(0,h.A)(t);return(0,M.A)((function(){if(r.current){var n=!1;return a({in:e,element:r.current,initial:o.current,isStale:function(){return n}}),function(){n=!0}}}),[e,a]),(0,M.A)((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(n){Promise.resolve(i(n)).then((function(){n.isStale()||(n.in?null==a||a(n.element,n.initial):(u(!0),null==r||r(n.element)))}),(function(e){throw n.in||u(!0),e}))}}),f=(0,A.A)(d,e.ref);return l&&!t?null:(0,p.cloneElement)(e,{ref:f})}function _(n,e,t){return n?(0,I.jsx)(z,Object.assign({},t,{component:n})):e?(0,I.jsx)(V,Object.assign({},t,{transition:e})):(0,I.jsx)(H.A,Object.assign({},t))}var $,q=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function G(n){var e=D(),t=n||function(n){return $||($=new F({ownerDocument:null==n?void 0:n.document})),$}(e),r=(0,p.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,p.useCallback)((function(n){r.current.dialog=n}),[]),setBackdropRef:(0,p.useCallback)((function(n){r.current.backdrop=n}),[])})}var J=(0,p.forwardRef)((function(n,e){var t=n.show,r=void 0!==t&&t,a=n.role,i=void 0===a?"dialog":a,s=n.className,c=n.style,l=n.children,d=n.backdrop,f=void 0===d||d,v=n.keyboard,m=void 0===v||v,A=n.onBackdropClick,b=n.onEscapeKeyDown,C=n.transition,R=n.runTransition,j=n.backdropTransition,O=n.runBackdropTransition,T=n.autoFocus,S=void 0===T||T,L=n.enforceFocus,F=void 0===L||L,B=n.restoreFocus,M=void 0===B||B,H=n.restoreFocusOptions,W=n.renderDialog,U=n.renderBackdrop,K=void 0===U?function(n){return(0,I.jsx)("div",Object.assign({},n))}:U,z=n.manager,V=n.container,$=n.onShow,J=n.onHide,Q=void 0===J?function(){}:J,X=n.onExit,Y=n.onExited,Z=n.onExiting,nn=n.onEnter,en=n.onEntering,tn=n.onEntered,rn=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,q),on=D(),an=function(n,e){var t=D(),r=(0,p.useState)((function(){return P(n,null==t?void 0:t.document)})),a=(0,o.A)(r,2),i=a[0],s=a[1];if(!i){var c=P(n);c&&s(c)}return(0,p.useEffect)((function(){e&&i&&e(i)}),[e,i]),(0,p.useEffect)((function(){var e=P(n);e!==i&&s(e)}),[n,i]),i}(V),sn=G(z),cn=(0,N.A)(),ln=(0,w.A)(r),un=(0,p.useState)(!r),dn=(0,o.A)(un,2),fn=dn[0],vn=dn[1],mn=(0,p.useRef)(null);(0,p.useImperativeHandle)(e,(function(){return sn}),[sn]),u.A&&!ln&&r&&(mn.current=E(null==on?void 0:on.document)),r&&fn&&vn(!1);var hn=(0,h.A)((function(){if(sn.add(),yn.current=(0,x.A)(document,"keydown",bn),En.current=(0,x.A)(document,"focus",(function(){return setTimeout(pn)}),!0),$&&$(),S){var n,e,t=E(null!=(n=null==(e=sn.dialog)?void 0:e.ownerDocument)?n:null==on?void 0:on.document);sn.dialog&&t&&!y(sn.dialog,t)&&(mn.current=t,sn.dialog.focus())}})),An=(0,h.A)((function(){var n;(sn.remove(),null==yn.current||yn.current(),null==En.current||En.current(),M)&&(null==(n=mn.current)||null==n.focus||n.focus(H),mn.current=null)}));(0,p.useEffect)((function(){r&&an&&hn()}),[r,an,hn]),(0,p.useEffect)((function(){fn&&An()}),[fn,An]),g((function(){An()}));var pn=(0,h.A)((function(){if(F&&cn()&&sn.isTopModal()){var n=E(null==on?void 0:on.document);sn.dialog&&n&&!y(sn.dialog,n)&&sn.dialog.focus()}})),gn=(0,h.A)((function(n){n.target===n.currentTarget&&(null==A||A(n),!0===f&&Q())})),bn=(0,h.A)((function(n){m&&function(n){return"Escape"===n.code||27===n.keyCode}(n)&&sn.isTopModal()&&(null==b||b(n),n.defaultPrevented||Q())})),En=(0,p.useRef)(),yn=(0,p.useRef)();if(!an)return null;var xn=Object.assign({role:i,ref:sn.setDialogRef,"aria-modal":"dialog"===i||void 0},rn,{style:c,className:s,tabIndex:-1}),kn=W?W(xn):(0,I.jsx)("div",Object.assign({},xn,{children:p.cloneElement(l,{role:"document"})}));kn=_(C,R,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:X,onExiting:Z,onExited:function(){vn(!0),null==Y||Y.apply(void 0,arguments)},onEnter:nn,onEntering:en,onEntered:tn,children:kn});var Nn=null;return f&&(Nn=K({ref:sn.setBackdropRef,onClick:gn}),Nn=_(j,O,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:Nn})),(0,I.jsx)(I.Fragment,{children:k.createPortal((0,I.jsxs)(I.Fragment,{children:[Nn,kn]}),an)})}));J.displayName="Modal";var Q=Object.assign(J,{Manager:F}),X=t(9874),Y=t(3954);function Z(){return Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,e,t){var r=function(n,e){for(;!{}.hasOwnProperty.call(n,e)&&null!==(n=(0,Y.A)(n)););return n}(n,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?n:t):o.value}},Z.apply(null,arguments)}var nn,en=t(5501),tn=t(346),rn=t(3818),on=t(7068),an=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",sn=".sticky-top",cn=".navbar-toggler",ln=function(n){function e(){return(0,j.A)(this,e),(0,X.A)(this,e,arguments)}return(0,en.A)(e,n),(0,O.A)(e,[{key:"adjustAndStore",value:function(n,e,t){var r=e.style[n];e.dataset[n]=r,(0,T.A)(e,(0,R.A)({},n,"".concat(parseFloat((0,T.A)(e,n))+t,"px")))}},{key:"restore",value:function(n,e){var t=e.dataset[n];void 0!==t&&(delete e.dataset[n],(0,T.A)(e,(0,R.A)({},n,t)))}},{key:"setContainerStyle",value:function(n){var t=this;Z((0,Y.A)(e.prototype),"setContainerStyle",this).call(this,n);var r=this.getElement();if((0,tn.A)(r,"modal-open"),n.scrollBarWidth){var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,rn.A)(r,an).forEach((function(e){return t.adjustAndStore(o,e,n.scrollBarWidth)})),(0,rn.A)(r,sn).forEach((function(e){return t.adjustAndStore(a,e,-n.scrollBarWidth)})),(0,rn.A)(r,cn).forEach((function(e){return t.adjustAndStore(a,e,n.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(n){var t=this;Z((0,Y.A)(e.prototype),"removeContainerStyle",this).call(this,n);var r=this.getElement();(0,on.A)(r,"modal-open");var o=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,rn.A)(r,an).forEach((function(n){return t.restore(o,n)})),(0,rn.A)(r,sn).forEach((function(n){return t.restore(a,n)})),(0,rn.A)(r,cn).forEach((function(n){return t.restore(a,n)}))}}])}(F);var un=t(8072),dn=t(7852),fn=["className","bsPrefix","as"],vn=p.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?"div":o,l=(0,a.A)(n,fn);return r=(0,dn.oU)(r,"modal-body"),(0,I.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));vn.displayName="ModalBody";var mn=vn,hn=p.createContext({onHide:function(){}}),An=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],pn=p.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,o=n.contentClassName,s=n.centered,l=n.size,u=n.fullscreen,d=n.children,f=n.scrollable,v=(0,a.A)(n,An);t=(0,dn.oU)(t,"modal");var m="".concat(t,"-dialog"),h="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,I.jsx)("div",(0,i.A)((0,i.A)({},v),{},{ref:e,className:c()(m,r,l&&"".concat(t,"-").concat(l),s&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&h),children:(0,I.jsx)("div",{className:c()("".concat(t,"-content"),o),children:d})}))}));pn.displayName="ModalDialog";var gn=pn,bn=["className","bsPrefix","as"],En=p.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?"div":o,l=(0,a.A)(n,bn);return r=(0,dn.oU)(r,"modal-footer"),(0,I.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));En.displayName="ModalFooter";var yn=En,xn=t(5173),kn=t.n(xn),Nn=["className","variant","aria-label"],wn={"aria-label":kn().string,onClick:kn().func,variant:kn().oneOf(["white"])},Cn=p.forwardRef((function(n,e){var t=n.className,r=n.variant,o=n["aria-label"],s=void 0===o?"Close":o,l=(0,a.A)(n,Nn);return(0,I.jsx)("button",(0,i.A)({ref:e,type:"button",className:c()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":s},l))}));Cn.displayName="CloseButton",Cn.propTypes=wn;var Rn=Cn,jn=["closeLabel","closeVariant","closeButton","onHide","children"],On=p.forwardRef((function(n,e){var t=n.closeLabel,r=void 0===t?"Close":t,o=n.closeVariant,s=n.closeButton,c=void 0!==s&&s,l=n.onHide,u=n.children,d=(0,a.A)(n,jn),f=(0,p.useContext)(hn),v=(0,h.A)((function(){null==f||f.onHide(),null==l||l()}));return(0,I.jsxs)("div",(0,i.A)((0,i.A)({ref:e},d),{},{children:[u,c&&(0,I.jsx)(Rn,{"aria-label":r,variant:o,onClick:v})]}))})),Tn=["bsPrefix","className","closeLabel","closeButton"],Sn=p.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,o=n.closeLabel,s=void 0===o?"Close":o,l=n.closeButton,u=void 0!==l&&l,d=(0,a.A)(n,Tn);return t=(0,dn.oU)(t,"modal-header"),(0,I.jsx)(On,(0,i.A)((0,i.A)({ref:e},d),{},{className:c()(r,t),closeLabel:s,closeButton:u}))}));Sn.displayName="ModalHeader";var Ln,Fn=Sn,Bn=["className","bsPrefix","as"],Dn=(Ln="h4",p.forwardRef((function(n,e){return(0,I.jsx)("div",(0,i.A)((0,i.A)({},n),{},{ref:e,className:c()(n.className,Ln)}))}))),Pn=p.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?Dn:o,l=(0,a.A)(n,Bn);return r=(0,dn.oU)(r,"modal-title"),(0,I.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));Pn.displayName="ModalTitle";var Mn=Pn,Hn=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","data-bs-theme","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function Wn(n){return(0,I.jsx)(un.A,(0,i.A)((0,i.A)({},n),{},{timeout:null}))}function Un(n){return(0,I.jsx)(un.A,(0,i.A)((0,i.A)({},n),{},{timeout:null}))}var In=p.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,s=n.style,E=n.dialogClassName,y=n.contentClassName,x=n.children,k=n.dialogAs,N=void 0===k?gn:k,w=n["data-bs-theme"],C=n["aria-labelledby"],R=n["aria-describedby"],j=n["aria-label"],O=n.show,T=void 0!==O&&O,S=n.animation,L=void 0===S||S,F=n.backdrop,B=void 0===F||F,D=n.keyboard,P=void 0===D||D,M=n.onEscapeKeyDown,H=n.onShow,W=n.onHide,U=n.container,K=n.autoFocus,z=void 0===K||K,V=n.enforceFocus,_=void 0===V||V,$=n.restoreFocus,q=void 0===$||$,G=n.restoreFocusOptions,J=n.onEntered,X=n.onExit,Y=n.onExiting,Z=n.onEnter,en=n.onEntering,tn=n.onExited,rn=n.backdropClassName,on=n.manager,an=(0,a.A)(n,Hn),sn=(0,p.useState)({}),cn=(0,o.A)(sn,2),un=cn[0],fn=cn[1],vn=(0,p.useState)(!1),mn=(0,o.A)(vn,2),An=mn[0],pn=mn[1],bn=(0,p.useRef)(!1),En=(0,p.useRef)(!1),yn=(0,p.useRef)(null),xn=(0,m.A)(),kn=(0,o.A)(xn,2),Nn=kn[0],wn=kn[1],Cn=(0,A.A)(e,wn),Rn=(0,h.A)(W),jn=(0,dn.Wz)();t=(0,dn.oU)(t,"modal");var On=(0,p.useMemo)((function(){return{onHide:Rn}}),[Rn]);function Tn(){return on||(n={isRTL:jn},nn||(nn=new ln(n)),nn);var n}function Sn(n){if(u.A){var e=Tn().getScrollbarWidth()>0,t=n.scrollHeight>(0,d.A)(n).documentElement.clientHeight;fn({paddingRight:e&&!t?v():void 0,paddingLeft:!e&&t?v():void 0})}}var Ln=(0,h.A)((function(){Nn&&Sn(Nn.dialog)}));g((function(){(0,f.A)(window,"resize",Ln),null==yn.current||yn.current()}));var Fn=function(){bn.current=!0},Bn=function(n){bn.current&&Nn&&n.target===Nn.dialog&&(En.current=!0),bn.current=!1},Dn=function(){pn(!0),yn.current=(0,b.A)(Nn.dialog,(function(){pn(!1)}))},Pn=function(n){"static"!==B?En.current||n.target!==n.currentTarget?En.current=!1:null==W||W():function(n){n.target===n.currentTarget&&Dn()}(n)},Mn=(0,p.useCallback)((function(n){return(0,I.jsx)("div",(0,i.A)((0,i.A)({},n),{},{className:c()("".concat(t,"-backdrop"),rn,!L&&"show")}))}),[L,rn,t]),In=(0,i.A)((0,i.A)({},s),un);In.display="block";return(0,I.jsx)(hn.Provider,{value:On,children:(0,I.jsx)(Q,{show:T,ref:Cn,backdrop:B,container:U,keyboard:!0,autoFocus:z,enforceFocus:_,restoreFocus:q,restoreFocusOptions:G,onEscapeKeyDown:function(n){P?null==M||M(n):(n.preventDefault(),"static"===B&&Dn())},onShow:H,onHide:W,onEnter:function(n,e){n&&Sn(n),null==Z||Z(n,e)},onEntering:function(n,e){null==en||en(n,e),(0,l.Ay)(window,"resize",Ln)},onEntered:J,onExit:function(n){null==yn.current||yn.current(),null==X||X(n)},onExiting:Y,onExited:function(n){n&&(n.style.display=""),null==tn||tn(n),(0,f.A)(window,"resize",Ln)},manager:Tn(),transition:L?Wn:void 0,backdropTransition:L?Un:void 0,renderBackdrop:Mn,renderDialog:function(n){return(0,I.jsx)("div",(0,i.A)((0,i.A)({role:"dialog"},n),{},{style:In,className:c()(r,t,An&&"".concat(t,"-static"),!L&&"show"),onClick:B?Pn:void 0,onMouseUp:Bn,"data-bs-theme":w,"aria-label":j,"aria-labelledby":C,"aria-describedby":R,children:(0,I.jsx)(N,(0,i.A)((0,i.A)({},an),{},{onMouseDown:Fn,className:E,contentClassName:y,children:x}))}))}})})}));In.displayName="Modal";var Kn=Object.assign(In,{Body:mn,Header:Fn,Title:Mn,Footer:yn,Dialog:gn,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=4640.4e3413b5.chunk.js.map