const j=()=>{};var w={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw V(e)},V=function(t){return new Error("Firebase Database ("+x.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++s)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},F=function(t){const e=[];let r=0,s=0;for(;r<t.length;){const n=t[r++];if(n<128)e[s++]=String.fromCharCode(n);else if(n>191&&n<224){const o=t[r++];e[s++]=String.fromCharCode((n&31)<<6|o&63)}else if(n>239&&n<365){const o=t[r++],a=t[r++],u=t[r++],h=((n&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const o=t[r++],a=t[r++];e[s++]=String.fromCharCode((n&15)<<12|(o&63)<<6|a&63)}}return e.join("")},M={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let n=0;n<t.length;n+=3){const o=t[n],a=n+1<t.length,u=a?t[n+1]:0,h=n+2<t.length,l=h?t[n+2]:0,d=o>>2,c=(o&3)<<4|u>>4;let i=(u&15)<<2|l>>6,f=l&63;h||(f=64,a||(i=64)),s.push(r[d],r[c],r[i],r[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):F(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let n=0;n<t.length;){const o=r[t.charAt(n++)],u=n<t.length?r[t.charAt(n)]:0;++n;const l=n<t.length?r[t.charAt(n)]:64;++n;const c=n<t.length?r[t.charAt(n)]:64;if(++n,o==null||u==null||l==null||c==null)throw new W;const i=o<<2|u>>4;if(s.push(i),l!==64){const f=u<<4&240|l>>2;if(s.push(f),c!==64){const p=l<<6&192|c;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class W extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U=function(t){const e=k(t);return M.encodeByteArray(e,!0)},B=function(t){return U(t).replace(/\./g,"")},m=function(t){try{return M.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return N(void 0,t)}function N(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const r=e;return new Date(r.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const r in e)!e.hasOwnProperty(r)||!H(r)||(t[r]=N(t[r],e[r]));return t}function H(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=()=>z().__FIREBASE_DEFAULTS__,J=()=>{if(typeof process>"u"||typeof w>"u")return;const t=w.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Z=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m(t[1]);return e&&JSON.parse(e)},C=()=>{try{return j()||$()||J()||Z()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},K=t=>{var e,r;return(r=(e=C())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},ie=t=>{const e=K(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),s]:[e.substring(0,r),s]},ae=()=>{var t;return(t=C())===null||t===void 0?void 0:t.config},ce=t=>{var e;return(e=C())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t.endsWith(".cloudworkstations.dev")}async function le(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},s=e||"demo-project",n=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:n,exp:n+3600,auth_time:n,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[B(JSON.stringify(r)),B(JSON.stringify(a)),""].join(".")}const y={};function G(){const t={prod:[],emulator:[]};for(const e of Object.keys(y))y[e]?t.emulator.push(e):t.prod.push(e);return t}function Q(t){let e=document.getElementById(t),r=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),r=!0),{created:r,element:e}}let D=!1;function fe(t,e){if(typeof window>"u"||typeof document>"u"||!q(window.location.host)||y[t]===e||y[t]||D)return;y[t]=e;function r(i){return`__firebase__banner__${i}`}const s="__firebase__banner",o=G().prod.length>0;function a(){const i=document.getElementById(s);i&&i.remove()}function u(i){i.style.display="flex",i.style.background="#7faaf0",i.style.position="fixed",i.style.bottom="5px",i.style.left="5px",i.style.padding=".5em",i.style.borderRadius="5px",i.style.alignItems="center"}function h(i,f){i.setAttribute("width","24"),i.setAttribute("id",f),i.setAttribute("height","24"),i.setAttribute("viewBox","0 0 24 24"),i.setAttribute("fill","none"),i.style.marginLeft="-6px"}function l(){const i=document.createElement("span");return i.style.cursor="pointer",i.style.marginLeft="16px",i.style.fontSize="24px",i.innerHTML=" &times;",i.onclick=()=>{D=!0,a()},i}function d(i,f){i.setAttribute("id",f),i.innerText="Learn more",i.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",i.setAttribute("target","__blank"),i.style.paddingLeft="5px",i.style.textDecoration="underline"}function c(){const i=Q(s),f=r("text"),p=document.getElementById(f)||document.createElement("span"),v=r("learnmore"),S=document.getElementById(v)||document.createElement("a"),A=r("preprendIcon"),_=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(i.created){const b=i.element;u(b),d(S,v);const L=l();h(_,A),b.append(_,p,S,L),document.body.appendChild(b)}o?(p.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",c):c()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function de(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function pe(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ye(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _e(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function be(){const t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ge(){return x.NODE_ADMIN===!0}function me(){try{return typeof indexedDB=="object"}catch{return!1}}function Ce(){return new Promise((t,e)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(s);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(s),t(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var o;e(((o=n.error)===null||o===void 0?void 0:o.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="FirebaseError";class E extends Error{constructor(e,r,s){super(r),this.code=e,this.customData=s,this.name=X,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(e,r,s){this.service=e,this.serviceName=r,this.errors=s}create(e,...r){const s=r[0]||{},n=`${this.service}/${e}`,o=this.errors[e],a=o?ee(o,s):"Error",u=`${this.serviceName}: ${a} (${n}).`;return new E(n,u,s)}}function ee(t,e){return t.replace(te,(r,s)=>{const n=e[s];return n!=null?String(n):`<${s}?>`})}const te=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t){let e={},r={},s={},n="";try{const o=t.split(".");e=O(m(o[0])||""),r=O(m(o[1])||""),n=o[2],s=r.d||{},delete r.d}catch{}return{header:e,claims:r,data:s,signature:n}},ve=function(t){const e=P(t),r=e.claims;return!!r&&typeof r=="object"&&r.hasOwnProperty("iat")},Se=function(t){const e=P(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function we(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Be(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function De(t,e,r){const s={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=e.call(r,t[n],n,t));return s}function re(t,e){if(t===e)return!0;const r=Object.keys(t),s=Object.keys(e);for(const n of r){if(!s.includes(n))return!1;const o=t[n],a=e[n];if(T(o)&&T(a)){if(!re(o,a))return!1}else if(o!==a)return!1}for(const n of s)if(!r.includes(n))return!1;return!0}function T(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){const e=[];for(const[r,s]of Object.entries(t))Array.isArray(s)?s.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Te(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[n,o]=s.split("=");e[decodeURIComponent(n)]=decodeURIComponent(o)}}),e}function xe(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,r){r||(r=0);const s=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)s[c]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(let c=0;c<16;c++)s[c]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(let c=16;c<80;c++){const i=s[c-3]^s[c-8]^s[c-14]^s[c-16];s[c]=(i<<1|i>>>31)&4294967295}let n=this.chain_[0],o=this.chain_[1],a=this.chain_[2],u=this.chain_[3],h=this.chain_[4],l,d;for(let c=0;c<80;c++){c<40?c<20?(l=u^o&(a^u),d=1518500249):(l=o^a^u,d=1859775393):c<60?(l=o&a|u&(o|a),d=2400959708):(l=o^a^u,d=3395469782);const i=(n<<5|n>>>27)+l+h+d+s[c]&4294967295;h=u,u=a,a=(o<<30|o>>>2)&4294967295,o=n,n=i}this.chain_[0]=this.chain_[0]+n&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,r){if(e==null)return;r===void 0&&(r=e.length);const s=r-this.blockSize;let n=0;const o=this.buf_;let a=this.inbuf_;for(;n<r;){if(a===0)for(;n<=s;)this.compress_(e,n),n+=this.blockSize;if(typeof e=="string"){for(;n<r;)if(o[a]=e.charCodeAt(n),++a,++n,a===this.blockSize){this.compress_(o),a=0;break}}else for(;n<r;)if(o[a]=e[n],++a,++n,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=r}digest(){const e=[];let r=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=r&255,r/=256;this.compress_(this.buf_);let s=0;for(let n=0;n<5;n++)for(let o=24;o>=0;o-=8)e[s]=this.chain_[n]>>o&255,++s;return e}}function Me(t,e){const r=new ne(t,e);return r.subscribe.bind(r)}class ne{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,s){let n;if(e===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");se(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:s},n.next===void 0&&(n.next=g),n.error===void 0&&(n.error=g),n.complete===void 0&&(n.complete=g);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function se(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function g(){}function Ne(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=function(t){const e=[];let r=0;for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n>=55296&&n<=56319){const o=n-55296;s++,R(s<t.length,"Surrogate pair missing trail surrogate.");const a=t.charCodeAt(s)-56320;n=65536+(o<<10)+a}n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):n<65536?(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},Pe=function(t){let e=0;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,r++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}export{Ae as A,we as B,De as C,ue as D,Y as E,E as F,Ie as G,M as H,V as I,Ne as J,Se as K,ve as L,oe as M,Pe as N,U as O,ge as P,ie as Q,he as R,ke as S,ce as a,B as b,de as c,re as d,_e as e,ye as f,ae as g,Le as h,me as i,I as j,Me as k,m as l,q as m,K as n,be as o,le as p,Oe as q,Be as r,Te as s,xe as t,fe as u,Ce as v,pe as w,R as x,Ee as y,O as z};
