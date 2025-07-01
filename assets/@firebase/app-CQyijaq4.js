import{C as d,a as B}from"./component-DV3wujnd.js";import{L as O}from"./logger-CNz1B4Yj.js";import{E as P,g as S,d as w,b as y,i as N,v as F,F as A}from"./util-CWmrPvaB.js";import{o as R}from"../idb-BXWtuYvb.js";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class M{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(T(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function T(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const m="@firebase/app",D="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const o=new O("@firebase/app"),k="@firebase/app-compat",U="@firebase/analytics-compat",j="@firebase/analytics",L="@firebase/app-check-compat",V="@firebase/app-check",G="@firebase/auth",z="@firebase/auth-compat",J="@firebase/database",Y="@firebase/data-connect",q="@firebase/database-compat",X="@firebase/functions",K="@firebase/functions-compat",W="@firebase/installations",Q="@firebase/installations-compat",Z="@firebase/messaging",ee="@firebase/messaging-compat",te="@firebase/performance",ae="@firebase/performance-compat",re="@firebase/remote-config",ne="@firebase/remote-config-compat",se="@firebase/storage",ie="@firebase/storage-compat",oe="@firebase/firestore",ce="@firebase/ai",pe="@firebase/firestore-compat",he="firebase",de="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const g="[DEFAULT]",le={[m]:"fire-core",[k]:"fire-core-compat",[j]:"fire-analytics",[U]:"fire-analytics-compat",[V]:"fire-app-check",[L]:"fire-app-check-compat",[G]:"fire-auth",[z]:"fire-auth-compat",[J]:"fire-rtdb",[Y]:"fire-data-connect",[q]:"fire-rtdb-compat",[X]:"fire-fn",[K]:"fire-fn-compat",[W]:"fire-iid",[Q]:"fire-iid-compat",[Z]:"fire-fcm",[ee]:"fire-fcm-compat",[te]:"fire-perf",[ae]:"fire-perf-compat",[re]:"fire-rc",[ne]:"fire-rc-compat",[se]:"fire-gcs",[ie]:"fire-gcs-compat",[oe]:"fire-fst",[pe]:"fire-fst-compat",[ce]:"fire-vertex","fire-js":"fire-js",[he]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const l=new Map,fe=new Map,u=new Map;function E(a,e){try{a.container.addComponent(e)}catch(t){o.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function _(a){const e=a.name;if(u.has(e))return o.debug(`There were multiple attempts to register component ${e}.`),!1;u.set(e,a);for(const t of l.values())E(t,a);for(const t of fe.values())E(t,a);return!0}function Be(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function Oe(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const be={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},c=new P("app","Firebase",be);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class me{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new d("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw c.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Pe=de;function ge(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const r=Object.assign({name:g,automaticDataCollectionEnabled:!0},e),n=r.name;if(typeof n!="string"||!n)throw c.create("bad-app-name",{appName:String(n)});if(t||(t=S()),!t)throw c.create("no-options");const s=l.get(n);if(s){if(w(t,s.options)&&w(r,s.config))return s;throw c.create("duplicate-app",{appName:n})}const i=new B(n);for(const v of u.values())i.addComponent(v);const p=new me(t,r,i);return l.set(n,p),p}function Ne(a=g){const e=l.get(a);if(!e&&a===g&&S())return ge();if(!e)throw c.create("no-app",{appName:a});return e}function f(a,e,t){var r;let n=(r=le[a])!==null&&r!==void 0?r:a;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const p=[`Unable to register library "${n}" with version "${e}":`];s&&p.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&p.push("and"),i&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),o.warn(p.join(" "));return}_(new d(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const ue="firebase-heartbeat-database",_e=1,h="firebase-heartbeat-store";let b=null;function x(){return b||(b=R(ue,_e,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(h)}catch(t){console.warn(t)}}}}).catch(a=>{throw c.create("idb-open",{originalErrorMessage:a.message})})),b}async function ve(a){try{const t=(await x()).transaction(h),r=await t.objectStore(h).get(H(a));return await t.done,r}catch(e){if(e instanceof A)o.warn(e.message);else{const t=c.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});o.warn(t.message)}}}async function $(a,e){try{const r=(await x()).transaction(h,"readwrite");await r.objectStore(h).put(e,H(a)),await r.done}catch(t){if(t instanceof A)o.warn(t.message);else{const r=c.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});o.warn(r.message)}}}function H(a){return`${a.name}!${a.options.appId}`}/**
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
 */const we=1024,De=30;class Ee{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ce(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=C();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>De){const i=Ie(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){o.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=C(),{heartbeatsToSend:r,unsentEntries:n}=$e(this._heartbeatsCache.heartbeats),s=y(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return o.warn(t),""}}}function C(){return new Date().toISOString().substring(0,10)}function $e(a,e=we){const t=[];let r=a.slice();for(const n of a){const s=t.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),I(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),I(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ce{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N()?F().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ve(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return $(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return $(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function I(a){return y(JSON.stringify({version:2,heartbeats:a})).length}function Ie(a){if(a.length===0)return-1;let e=0,t=a[0].date;for(let r=1;r<a.length;r++)a[r].date<t&&(t=a[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Se(a){_(new d("platform-logger",e=>new M(e),"PRIVATE")),_(new d("heartbeat",e=>new Ee(e),"PRIVATE")),f(m,D,a),f(m,D,"esm2017"),f("fire-js","")}Se("");export{Pe as S,_,Oe as a,Be as b,Ne as g,ge as i,f as r};
