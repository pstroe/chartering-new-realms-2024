"use strict";(self.webpackChunk_anaconda_share_notebook=self.webpackChunk_anaconda_share_notebook||[]).push([[589],{6589:(e,t,n)=>{n.r(t),n.d(t,{Environment:()=>l,backend:()=>a,tokens:()=>h});var a={};n.r(a),n.d(a,{BackendError:()=>d,InvalidJSONError:()=>i,backendFetch:()=>s,handleProxyResponse:()=>c});var r=n(2818),o=n(8671);async function s(e,t={},n={},a=!0){try{const s=await async function(e,t,n){const a=r.ServerConnection.makeSettings();let s=o.URLExt.join(a.baseUrl,e);const c=o.URLExt.objectToQueryString(t);return c&&(s+=c),await r.ServerConnection.makeRequest(s,n,a)}(e,t,n);return async function(e,t){if(!e.ok)return async function(e){const t=await e.text();let n;if(t.length>0)try{n=JSON.parse(t)}catch(e){console.warn("Received an error message that isn't JSON",t)}throw new d(`Network request returned a ${e.status} status`,{code:e.status,data:n})}(e);const n=await e.text();if(!t)return n;let a;if(n.length>0)try{a=JSON.parse(n)}catch(e){throw new i("Received a response that isn't JSON",{data:{rawText:n},underlying:e})}return a}(s,a)}catch(e){throw new d("Network request failed",{underlying:e})}}function c(e){let{remote_status_code:t,remote_data:n}=e;if(t<200||t>=300)throw new d(`Proxied network request returned a ${t} status`,{code:t,data:e});return n}class d extends Error{statusCode;data;constructor(e,{code:t,data:n,underlying:a}){super(e,{cause:a}),this.statusCode=t,this.data=n}}class i extends d{}const u=new(n(7930).Token)("@anaconda/core");var l;!function(e){e.development="development",e.staging="staging",e.production="production",e.local="local"}(l||(l={}));const h={CoreToken:u}}}]);