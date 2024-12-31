"use strict";(self.webpackChunk_anaconda_panels=self.webpackChunk_anaconda_panels||[]).push([[406],{5406:(e,t,n)=>{n.r(t),n.d(t,{Bounce:()=>w,Flip:()=>B,Slide:()=>x,ToastContainer:()=>S,Zoom:()=>D,collapseToast:()=>h,cssTransition:()=>b,toast:()=>W,useToast:()=>N,useToastContainer:()=>I});var o=n(6029),r=n.n(o);function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}const s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o};var i=n(7704);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function u(e){return"number"==typeof e&&!isNaN(e)}function l(e){return"boolean"==typeof e}function d(e){return"string"==typeof e}function f(e){return"function"==typeof e}function p(e){return d(e)||f(e)?e:null}function g(e){return 0===e||e}var m=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(e){return(0,o.isValidElement)(e)||d(e)||f(e)||u(e)}var y={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default",DARK:"dark"};function h(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}function b(e){var t=e.enter,n=e.exit,a=e.appendPosition,s=void 0!==a&&a,i=e.collapse,c=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var a=e.children,i=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,g=s?t+"--"+i:t,m=s?n+"--"+i:n,v=(0,o.useRef)(),y=(0,o.useRef)(0);function T(){var e=f.current;e.removeEventListener("animationend",T),0===y.current&&(e.className=v.current)}function b(){var e=f.current;e.removeEventListener("animationend",b),c?h(e,d,l):d()}return(0,o.useLayoutEffect)((function(){var e;e=f.current,v.current=e.className,e.className+=" "+g,e.addEventListener("animationend",T)}),[]),(0,o.useEffect)((function(){p||(u?b():function(){y.current=1;var e=f.current;e.className+=" "+m,e.addEventListener("animationend",b)}())}),[p]),r().createElement(r().Fragment,null,a)}}var E={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){for(var t=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(e)&&this.list.get(e).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);t.emitQueue.has(e)||t.emitQueue.set(e,[]),t.emitQueue.get(e).push(r)}))}};function O(e,t){void 0===t&&(t=!1);var n=(0,o.useRef)(e);return(0,o.useEffect)((function(){t&&(n.current=e)})),n.current}function C(e,t){switch(t.type){case 0:return[].concat(e,[t.toastId]).filter((function(e){return e!==t.staleId}));case 1:return g(t.toastId)?e.filter((function(e){return e!==t.toastId})):[]}}function I(e){var t=(0,o.useReducer)((function(e){return e+1}),0)[1],n=(0,o.useReducer)(C,[]),r=n[0],a=n[1],s=(0,o.useRef)(null),i=O(0),c=O([]),m=O({}),y=O({toastKey:1,displayedToast:0,props:e,containerId:null,isToastActive:T,getToast:function(e){return m[e]||null}});function T(e){return-1!==r.indexOf(e)}function h(e){var t=e.containerId;!y.props.limit||t&&y.containerId!==t||(i-=c.length,c=[])}function b(e){a({type:1,toastId:e})}function I(){var e=c.shift();R(e.toastContent,e.toastProps,e.staleId)}function _(e,n){var r=n.delay,a=n.staleId,T=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["delay","staleId"]);if(v(e)&&!function(e){var t=e.containerId,n=e.toastId,o=e.updateId;return!!(!s.current||y.props.enableMultiContainer&&t!==y.props.containerId||m[n]&&null==o)}(T)){var h=T.toastId,E=T.updateId,O=y.props,C=function(){return b(h)},_=null==T.updateId;_&&i++;var N,L,P={toastId:h,updateId:E,isIn:!1,key:T.key||y.toastKey++,type:T.type,closeToast:C,closeButton:T.closeButton,rtl:O.rtl,position:T.position||O.position,transition:T.transition||O.transition,className:p(T.className||O.toastClassName),bodyClassName:p(T.bodyClassName||O.bodyClassName),style:T.style||O.toastStyle,bodyStyle:T.bodyStyle||O.bodyStyle,onClick:T.onClick||O.onClick,pauseOnHover:l(T.pauseOnHover)?T.pauseOnHover:O.pauseOnHover,pauseOnFocusLoss:l(T.pauseOnFocusLoss)?T.pauseOnFocusLoss:O.pauseOnFocusLoss,draggable:l(T.draggable)?T.draggable:O.draggable,draggablePercent:u(T.draggablePercent)?T.draggablePercent:O.draggablePercent,draggableDirection:T.draggableDirection||O.draggableDirection,closeOnClick:l(T.closeOnClick)?T.closeOnClick:O.closeOnClick,progressClassName:p(T.progressClassName||O.progressClassName),progressStyle:T.progressStyle||O.progressStyle,autoClose:(N=T.autoClose,L=O.autoClose,!1===N||u(N)&&N>0?N:L),hideProgressBar:l(T.hideProgressBar)?T.hideProgressBar:O.hideProgressBar,progress:T.progress,role:d(T.role)?T.role:O.role,deleteToast:function(){!function(e){delete m[e];var n=c.length;if((i=g(e)?i-1:i-y.displayedToast)<0&&(i=0),n>0){var o=g(e)?1:y.props.limit;if(1===n||1===o)y.displayedToast++,I();else{var r=o>n?n:o;y.displayedToast=r;for(var a=0;a<r;a++)I()}}else t()}(h)}};f(T.onOpen)&&(P.onOpen=T.onOpen),f(T.onClose)&&(P.onClose=T.onClose),"y"===P.draggableDirection&&80===P.draggablePercent&&(P.draggablePercent*=1.5);var k=O.closeButton;!1===T.closeButton||v(T.closeButton)?k=T.closeButton:!0===T.closeButton&&(k=!v(O.closeButton)||O.closeButton),P.closeButton=k;var w=e;(0,o.isValidElement)(e)&&!d(e.type)?w=(0,o.cloneElement)(e,{closeToast:C,toastProps:P}):f(e)&&(w=e({closeToast:C,toastProps:P})),O.limit&&O.limit>0&&i>O.limit&&_?c.push({toastContent:w,toastProps:P,staleId:a}):u(r)&&r>0?setTimeout((function(){R(w,P,a)}),r):R(w,P,a)}}function R(e,t,n){var o=t.toastId;n&&delete m[n],m[o]={content:e,props:t},a({type:0,toastId:o,staleId:n})}return(0,o.useEffect)((function(){return y.containerId=e.containerId,E.cancelEmit(3).on(0,_).on(1,(function(e){return s.current&&b(e)})).on(5,h).emit(2,y),function(){return E.emit(3,y)}}),[]),(0,o.useEffect)((function(){y.isToastActive=T,y.displayedToast=r.length,E.emit(4,r.length,e.containerId)}),[r]),(0,o.useEffect)((function(){y.props=e})),{getToastToRender:function(t){for(var n={},o=e.newestOnTop?Object.keys(m).reverse():Object.keys(m),r=0;r<o.length;r++){var a=m[o[r]],s=a.props.position;n[s]||(n[s]=[]),n[s].push(a)}return Object.keys(n).map((function(e){return t(e,n[e])}))},collection:m,containerRef:s,isToastActive:T}}function _(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,o.useState)(!0),n=t[0],r=t[1],a=(0,o.useState)(!1),s=a[0],i=a[1],c=(0,o.useRef)(null),u=O({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null}),l=O(e,!0),d=e.autoClose,p=e.pauseOnHover,g=e.closeToast,m=e.onClick,v=e.closeOnClick;function y(t){if(e.draggable){var n=c.current;u.canCloseOnClick=!0,u.canDrag=!0,u.boundingRect=n.getBoundingClientRect(),n.style.transition="",u.x=_(t.nativeEvent),u.y=R(t.nativeEvent),"x"===e.draggableDirection?(u.start=u.x,u.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(u.start=u.y,u.removalDistance=n.offsetHeight*(e.draggablePercent/100))}}function T(){if(u.boundingRect){var t=u.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&u.x>=r&&u.x<=a&&u.y>=n&&u.y<=o?b():h()}}function h(){r(!0)}function b(){r(!1)}function E(t){if(u.canDrag){t.preventDefault();var o=c.current;n&&b(),u.x=_(t),u.y=R(t),"x"===e.draggableDirection?u.delta=u.x-u.start:u.delta=u.y-u.start,u.start!==u.x&&(u.canCloseOnClick=!1),o.style.transform="translate"+e.draggableDirection+"("+u.delta+"px)",o.style.opacity=""+(1-Math.abs(u.delta/u.removalDistance))}}function C(){var t=c.current;if(u.canDrag){if(u.canDrag=!1,Math.abs(u.delta)>u.removalDistance)return i(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,o.useEffect)((function(){return f(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){f(l.onClose)&&l.onClose((0,o.isValidElement)(l.children)&&l.children.props)}}),[]),(0,o.useEffect)((function(){return e.draggable&&(document.addEventListener("mousemove",E),document.addEventListener("mouseup",C),document.addEventListener("touchmove",E),document.addEventListener("touchend",C)),function(){e.draggable&&(document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",C))}}),[e.draggable]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",h),window.addEventListener("blur",b)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",b))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:y,onTouchStart:y,onMouseUp:T,onTouchEnd:T};return d&&p&&(I.onMouseEnter=b,I.onMouseLeave=h),v&&(I.onClick=function(e){m&&m(e),u.canCloseOnClick&&g()}),{playToast:h,pauseToast:b,isRunning:n,preventExitTransition:s,toastRef:c,eventHandlers:I}}function L(e){var t=e.closeToast,n=e.type,r=e.ariaLabel,a=void 0===r?"close":r;return(0,o.createElement)("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},(0,o.createElement)("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},(0,o.createElement)("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t,n,r=e.delay,a=e.isRunning,i=e.closeToast,u=e.type,l=e.hide,d=e.className,p=e.style,g=e.controlledProgress,m=e.progress,v=e.rtl,y=e.isIn,T=c({},p,{animationDuration:r+"ms",animationPlayState:a?"running":"paused",opacity:l?0:1});g&&(T.transform="scaleX("+m+")");var h=s("Toastify__progress-bar",g?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((t={})["Toastify__progress-bar--rtl"]=v,t)),b=f(d)?d({rtl:v,type:u,defaultClassName:h}):s(h,d),E=((n={})[g&&m>=1?"onTransitionEnd":"onAnimationEnd"]=g&&m<1?null:function(){y&&i()},n);return(0,o.createElement)("div",Object.assign({role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:b,style:T},E))}P.defaultProps={type:T.DEFAULT,hide:!1};var k=function(e){var t,n=N(e),r=n.isRunning,a=n.preventExitTransition,i=n.toastRef,c=n.eventHandlers,u=e.closeButton,l=e.children,d=e.autoClose,p=e.onClick,g=e.type,m=e.hideProgressBar,v=e.closeToast,y=e.transition,T=e.position,h=e.className,b=e.style,E=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,I=e.progressStyle,_=e.updateId,R=e.role,L=e.progress,k=e.rtl,w=e.toastId,x=e.deleteToast,D=e.isIn,B=s("Toastify__toast","Toastify__toast--"+g,((t={})["Toastify__toast--rtl"]=k,t)),S=f(h)?h({rtl:k,position:T,type:g,defaultClassName:B}):s(B,h),A=!!L;return(0,o.createElement)(y,{isIn:D,done:x,position:T,preventExitTransition:a,nodeRef:i},(0,o.createElement)("div",Object.assign({id:w,onClick:p,className:S},c,{style:b,ref:i}),(0,o.createElement)("div",Object.assign({},D&&{role:R},{className:f(E)?E({type:g}):s("Toastify__toast-body",E),style:O}),l),function(e){if(e){var t={closeToast:v,type:g};return f(e)?e(t):(0,o.isValidElement)(e)?(0,o.cloneElement)(e,t):void 0}}(u),(d||A)&&(0,o.createElement)(P,Object.assign({},_&&!A?{key:"pb-"+_}:{},{rtl:k,delay:d,isRunning:r,isIn:D,closeToast:v,hide:m,type:g,style:I,className:C,controlledProgress:A,progress:L}))))},w=b({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),x=b({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),D=b({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),B=b({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),S=function(e){var t=I(e),n=t.getToastToRender,r=t.containerRef,a=t.isToastActive,i=e.className,u=e.style,l=e.rtl,d=e.containerId;function g(e){var t,n=s("Toastify__toast-container","Toastify__toast-container--"+e,((t={})["Toastify__toast-container--rtl"]=l,t));return f(i)?i({position:e,rtl:l,defaultClassName:n}):s(n,p(i))}return(0,o.createElement)("div",{ref:r,className:"Toastify",id:d},n((function(e,t){var n=0===t.length?c({},u,{pointerEvents:"none"}):c({},u);return(0,o.createElement)("div",{className:g(e),style:n,key:"container-"+e},t.map((function(e){var t=e.content,n=e.props;return(0,o.createElement)(k,Object.assign({},n,{isIn:a(n.toastId),key:"toast-"+n.key,closeButton:!0===n.closeButton?L:n.closeButton}),t)})))})))};S.defaultProps={position:y.TOP_RIGHT,transition:w,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert"};var A,F,H,M=new Map,j=[],Q=!1;function U(){return Math.random().toString(36).substr(2,9)}function z(e){return e&&(d(e.toastId)||u(e.toastId))?e.toastId:U()}function G(e,t){return M.size>0?E.emit(0,e,t):(j.push({content:e,options:t}),Q&&m&&(Q=!1,F=document.createElement("div"),document.body.appendChild(F),(0,i.render)((0,o.createElement)(S,Object.assign({},H)),F))),t.toastId}function V(e,t){return c({},t,{type:t&&t.type||e,toastId:z(t)})}var K=function(e){return function(t,n){return G(t,V(e,n))}},W=function(e,t){return G(e,V(T.DEFAULT,t))};W.success=K(T.SUCCESS),W.info=K(T.INFO),W.error=K(T.ERROR),W.warning=K(T.WARNING),W.dark=K(T.DARK),W.warn=W.warning,W.dismiss=function(e){return E.emit(1,e)},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),E.emit(5,e)},W.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=M.get(n||A);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=c({},o,t,{toastId:t.toastId||e,updateId:U()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,G(s,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return f(e)&&E.on(4,e),function(){f(e)&&E.off(4,e)}},W.configure=function(e){void 0===e&&(e={}),Q=!0,H=e},W.POSITION=y,W.TYPE=T,E.on(2,(function(e){A=e.containerId||e,M.set(A,e),j.forEach((function(e){E.emit(0,e.content,e.options)})),j=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&E.off(0).off(1).off(5),m&&F&&document.body.removeChild(F)}))}}]);