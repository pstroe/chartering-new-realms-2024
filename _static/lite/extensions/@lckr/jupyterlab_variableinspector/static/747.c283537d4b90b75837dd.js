"use strict";(self.webpackChunk_lckr_jupyterlab_variableinspector=self.webpackChunk_lckr_jupyterlab_variableinspector||[]).push([[747],{150:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,".jp-VarInspector {\n  flex-direction: column;\n  overflow: auto;\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-VarInspector-table {\n  font-family: monospace;\n  border-collapse: collapse;\n  margin: auto;\n  width: 100%;\n  color: var(--jp-content-font-color1);\n}\n\n.jp-VarInspector-table td,\n.jp-VarInspector-table thead {\n  border: 1px solid;\n  border-color: var(--jp-layout-color2);\n  padding: 8px;\n}\n\n.jp-VarInspector-table tr:nth-child(even) {\n  background-color: var(--jp-layout-color1);\n}\n\n.jp-VarInspector-content tr:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-VarInspector-table thead {\n  font-size: var(--jp-ui-font-size0);\n  text-align: center;\n  background-color: var(--jp-layout-color2);\n  color: var(--jp-ui-font-color1);\n  font-family: sans-serif;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n.jp-VarInspector-title {\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-content-font-color1);\n  text-align: left;\n  padding-left: 10px;\n}\n\n.jp-VarInspector-deleteButton {\n  text-align: center;\n  width: 1em;\n}\n\n.jp-VarInspector-inspectButton {\n  text-align: center;\n  width: 1em;\n}\n\n.jp-VarInspector-varName {\n  font-weight: 600;\n}\n",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],p=r.base?s[0]+r.base:s[0],l=a[p]||0,u="".concat(p," ").concat(l);a[p]=l+1;var f=t(u),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var v=o(d,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),p=0;p<a.length;p++){var l=t(a[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},747:(n,e,t)=>{t.r(e);var r=t(379),o=t.n(r),a=t(795),c=t.n(a),i=t(569),s=t.n(i),p=t(565),l=t.n(p),u=t(216),f=t.n(u),d=t(589),v=t.n(d),h=t(150),m={};m.styleTagTransform=v(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=f(),o()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals}}]);