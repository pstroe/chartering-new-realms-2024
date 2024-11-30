"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4498],{4498:function(r,t){var e=this&&this.__values||function(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},n=this&&this.__read||function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,a=e.call(r),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return i},o=this&&this.__spreadArray||function(r,t,e){if(e||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.lookup=t.separateOptions=t.selectOptionsFromKeys=t.selectOptions=t.userOptions=t.defaultOptions=t.insert=t.copy=t.keys=t.makeArray=t.expandable=t.Expandable=t.OPTIONS=t.REMOVE=t.APPEND=t.isObject=void 0;var a={}.constructor;function i(r){return"object"==typeof r&&null!==r&&(r.constructor===a||r.constructor===l)}t.isObject=i,t.APPEND="[+]",t.REMOVE="[-]",t.OPTIONS={invalidOption:"warn",optionError:function(r,e){if("fatal"===t.OPTIONS.invalidOption)throw new Error(r);console.warn("MathJax: "+r)}};var l=function(){};function c(r){return Object.assign(Object.create(l.prototype),r)}function u(r){return r?Object.keys(r).concat(Object.getOwnPropertySymbols(r)):[]}function f(r){var t,n,o={};try{for(var a=e(u(r)),s=a.next();!s.done;s=a.next()){var p=s.value,v=Object.getOwnPropertyDescriptor(r,p),O=v.value;Array.isArray(O)?v.value=y([],O,!1):i(O)&&(v.value=f(O)),v.enumerable&&(o[p]=v)}}catch(r){t={error:r}}finally{try{s&&!s.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return Object.defineProperties(r.constructor===l?c({}):{},o)}function y(r,a,c){var s,p;void 0===c&&(c=!0);var v=function(e){if(c&&void 0===r[e]&&r.constructor!==l)return"symbol"==typeof e&&(e=e.toString()),t.OPTIONS.optionError('Invalid option "'.concat(e,'" (no default value).'),e),"continue";var s=a[e],p=r[e];if(!i(s)||null===p||"object"!=typeof p&&"function"!=typeof p)Array.isArray(s)?(r[e]=[],y(r[e],s,!1)):i(s)?r[e]=f(s):r[e]=s;else{var v=u(s);Array.isArray(p)&&(1===v.length&&(v[0]===t.APPEND||v[0]===t.REMOVE)&&Array.isArray(s[v[0]])||2===v.length&&v.sort().join(",")===t.APPEND+","+t.REMOVE&&Array.isArray(s[t.APPEND])&&Array.isArray(s[t.REMOVE]))?(s[t.REMOVE]&&(p=r[e]=p.filter((function(r){return s[t.REMOVE].indexOf(r)<0}))),s[t.APPEND]&&(r[e]=o(o([],n(p),!1),n(s[t.APPEND]),!1))):y(p,s,c)}};try{for(var O=e(u(a)),h=O.next();!h.done;h=O.next())v(h.value)}catch(r){s={error:r}}finally{try{h&&!h.done&&(p=O.return)&&p.call(O)}finally{if(s)throw s.error}}return r}function s(r){for(var t,n,o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];var i={};try{for(var l=e(o),c=l.next();!c.done;c=l.next()){var u=c.value;r.hasOwnProperty(u)&&(i[u]=r[u])}}catch(r){t={error:r}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return i}t.Expandable=l,t.expandable=c,t.makeArray=function(r){return Array.isArray(r)?r:[r]},t.keys=u,t.copy=f,t.insert=y,t.defaultOptions=function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.forEach((function(t){return y(r,t,!1)})),r},t.userOptions=function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t.forEach((function(t){return y(r,t,!0)})),r},t.selectOptions=s,t.selectOptionsFromKeys=function(r,t){return s.apply(void 0,o([r],n(Object.keys(t)),!1))},t.separateOptions=function(r){for(var t,n,o,a,i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];var c=[];try{for(var u=e(i),f=u.next();!f.done;f=u.next()){var y=f.value,s={},p={};try{for(var v=(o=void 0,e(Object.keys(r||{}))),O=v.next();!O.done;O=v.next()){var h=O.value;(void 0===y[h]?p:s)[h]=r[h]}}catch(r){o={error:r}}finally{try{O&&!O.done&&(a=v.return)&&a.call(v)}finally{if(o)throw o.error}}c.push(s),r=p}}catch(r){t={error:r}}finally{try{f&&!f.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return c.unshift(r),c},t.lookup=function(r,t,e){return void 0===e&&(e=null),t.hasOwnProperty(r)?t[r]:e}}}]);
//# sourceMappingURL=4498.fced3e4.js.map