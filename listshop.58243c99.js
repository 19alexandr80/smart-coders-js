function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},s=t.parcelRequire7599;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire7599=s),s.register("kyEFX",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("jJ57b",(function(e,t){const r=new(0,s("3bbpN").DataFirebase),n={shopListContainer:document.querySelector(".container__shopping-list"),imgEmptyPage:document.querySelector(".imgEmptyPage"),textEmptyPage:document.querySelector(".textEmptyPage"),container:document.querySelector(".shop-list__container"),cards:document.querySelector(".shop-list__cards")},i=JSON.parse(localStorage.getItem("shopingList"));let o=[];if(!i)return;{const e=Object.keys(i);o=e.map((e=>i[e]))}o.length>=1&&(n.imgEmptyPage.remove(".imgEmptyPage"),n.textEmptyPage.remove(".textEmptyPage"),function(e){const t=e.map((({id:e,bookImg:t,author:r,title:n,description:i,listName:s})=>` \n      <li class="shop-list__one-card" data-id=${e}>\n        <img class="shop-list__img" src=${t} alt="${n}" />\n        <div class="shop-list__text-container">\n        <h2 class="shop-list__title-book">${n}</h2>\n        <h3 class="shop-list__category-name">${s}</h3>\n        <p class="shop-list__descr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum blanditiis quo similique placeat aut a.</p>\n        <h3 class="shop-list__author">${r}</h3>\n        </div>\n        <ul>\n          <li><a href=""></a></li>\n          <li><a href=""></a></li>\n          <li><a href=""></a></li>\n        </ul>\n       \n      <div>\n    <button class="btn-trash-box" type="button" data-name="btn-trash" data-id=${e}>\n      <span class="btn-icn-wrap">\n        <svg width="18" height="18">\n          <use href="/icons.adfc4680.svg#trash"></use>\n        </svg>\n      </span>\n    </button>\n   \n  </div>\n  </li>\n    `)).join("");n.cards.insertAdjacentHTML("beforeend",t)}(o));document.querySelector(".shop-list__cards").addEventListener("click",(async function(e){if(e.target.closest("button").tagName){const t=e.target.closest("button").dataset.id;await r.deleteBook(t),window.location.reload()}const t=e.target.closest("li").dataset.id;await r.deleteBook(t),window.location.reload()}))})),s.register("3bbpN",(function(t,r){e(t.exports,"DataFirebase",(function(){return u})),s("2shzp");var n=s("bRlFp");s("gKkQl");var i=s("ix4Jr");s("eyjy7");var o=s("6slx9"),a=s("fPYYr");const l=new(0,o.V),c=((0,i.initializeApp)({apiKey:"AIzaSyA0Twt9JJx7KChBOO37tFJHbHS8iJvtnU4",authDomain:"team-project-d4f13.firebaseapp.com",projectId:"team-project-d4f13",storageBucket:"team-project-d4f13.appspot.com",messagingSenderId:"378146701089",appId:"1:378146701089:web:bf98f84a8f9624c7460860"}),(0,o.o)());class u{async postRequest(e,t){try{return await n.default.post(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async patchRequest(e,t){try{return await n.default.patch(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async putRequest(e,t){try{return await n.default.put(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async getRequest(e){try{const t=e.substring(0,e.indexOf("."));return(await n.default.get(`${this.app}booksShop/${t}.json`)).data}catch(e){console.error("get-error",e.message)}}async deleteRequest(e=null,t,r){try{const i=r.substring(0,r.indexOf("."));return await n.default.delete(`${this.app}booksShop/${i}/${t}.json?auth=${e}`)}catch(e){console.error("error-deleteRequest",e.message)}}async authGoogle(){try{const e=await(0,o.c)(c,l),t=o.V.credentialFromResult(e).accessToken,r=e.user;localStorage.setItem("tokenResponse",t),localStorage.setItem("email",r.email),localStorage.setItem("userAvatar",r.photoURL);const n=await this.getRequest(r.email);if(n){const e=JSON.stringify(n);localStorage.setItem("shopingList",e)}}catch(e){console.error("get-error",e.message)}}async deleteBook(e){const t=JSON.parse(localStorage.getItem("shopingList"));Object.keys(t).forEach((r=>{r===e&&delete t[e]}));const r=JSON.stringify(t);localStorage.setItem("shopingList",r);const n=localStorage.getItem("email"),i=n.substring(0,n.indexOf("."));await this.putRequest(t,i)}async addBookk(e){const t=localStorage.getItem("email"),r=await a.axiosApiBooks.fetchBookInfo(e),n={buyLinks:r.buy_links,title:r.title,id:r._id,listName:r.list_name,bookImg:r.book_image,author:r.author};if(localStorage.getItem("shopingList")){const e=JSON.parse(localStorage.getItem("shopingList"));e[n.id]=n;const t=JSON.stringify(e);localStorage.setItem("shopingList",t)}else{const e={};e[n.id]=n;const t=JSON.stringify(e);localStorage.setItem("shopingList",t)}const i=JSON.parse(localStorage.getItem("shopingList")),s=t.substring(0,t.indexOf("."));await this.patchRequest(i,s)}constructor(){this.auth=c,this.app="https://team-project-d4f13-default-rtdb.europe-west1.firebasedatabase.app/"}}new u})),s.register("2shzp",(function(t,r){e(t.exports,"default",(function(){return s("bRlFp").default}));var n=s("bRlFp");const{Axios:i,AxiosError:o,CanceledError:a,isCancel:l,CancelToken:c,VERSION:u,all:d,Cancel:h,isAxiosError:f,spread:p,toFormData:g,AxiosHeaders:m,HttpStatusCode:v,formToJSON:y,mergeConfig:w}=n.default})),s.register("bRlFp",(function(t,r){e(t.exports,"default",(function(){return E}));var n=s("2bBga"),i=s("djt5d"),o=s("6zSb1"),a=s("d0EKm"),l=s("hqlPG"),c=s("4bmvb"),u=s("83xK9"),d=s("2sjhC"),h=s("ksuZT"),f=s("50GW0"),p=s("aewVa"),g=s("121rJ"),m=s("av9gA"),v=s("gNhGc"),y=s("gbTL1"),w=s("jd7iQ");const b=function e(t){const r=new(0,o.default)(t),s=(0,i.default)(o.default.prototype.request,r);return n.default.extend(s,o.default.prototype,r,{allOwnKeys:!0}),n.default.extend(s,r,null,{allOwnKeys:!0}),s.create=function(r){return e((0,a.default)(t,r))},s}(l.default);b.Axios=o.default,b.CanceledError=u.default,b.CancelToken=d.default,b.isCancel=h.default,b.VERSION=f.VERSION,b.toFormData=p.default,b.AxiosError=g.default,b.Cancel=b.CanceledError,b.all=function(e){return Promise.all(e)},b.spread=m.default,b.isAxiosError=v.default,b.mergeConfig=a.default,b.AxiosHeaders=y.default,b.formToJSON=e=>(0,c.default)(n.default.isHTMLForm(e)?new FormData(e):e),b.HttpStatusCode=w.default,b.default=b;var E=b})),s.register("2bBga",(function(r,n){e(r.exports,"default",(function(){return F}));var i=s("djt5d");const{toString:o}=Object.prototype,{getPrototypeOf:a}=Object,l=(c=Object.create(null),e=>{const t=o.call(e);return c[t]||(c[t]=t.slice(8,-1).toLowerCase())});var c;const u=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:h}=Array,f=d("undefined");const p=u("ArrayBuffer");const g=d("string"),m=d("function"),v=d("number"),y=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==l(e))return!1;const t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=u("Date"),E=u("File"),S=u("Blob"),T=u("FileList"),_=u("URLSearchParams");function I(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,i;if("object"!=typeof e&&(e=[e]),h(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(n=0;n<s;n++)o=i[n],t.call(null,e[o],o,e)}}function k(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,i=r.length;for(;i-- >0;)if(n=r[i],t===n.toLowerCase())return n;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,C=e=>!f(e)&&e!==A;const O=(x="undefined"!=typeof Uint8Array&&a(Uint8Array),e=>x&&e instanceof x);var x;const R=u("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),L=u("RegExp"),N=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};I(r,((r,i)=>{!1!==t(r,i,e)&&(n[i]=r)})),Object.defineProperties(e,n)},M="abcdefghijklmnopqrstuvwxyz",D="0123456789",U={DIGIT:D,ALPHA:M,ALPHA_DIGIT:M+M.toUpperCase()+D};const B=u("AsyncFunction");var F={isArray:h,isArrayBuffer:p,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=l(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t},isString:g,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:w,isUndefined:f,isDate:b,isFile:E,isBlob:S,isRegExp:L,isFunction:m,isStream:e=>y(e)&&m(e.pipe),isURLSearchParams:_,isTypedArray:O,isFileList:T,forEach:I,merge:function e(){const{caseless:t}=C(this)&&this||{},r={},n=(n,i)=>{const s=t&&k(r,i)||i;w(r[s])&&w(n)?r[s]=e(r[s],n):w(n)?r[s]=e({},n):h(n)?r[s]=n.slice():r[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&I(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(I(t,((t,n)=>{r&&m(t)?e[n]=(0,i.default)(t,r):e[n]=t}),{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,s,o;const l={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],n&&!n(o,e,t)||l[o]||(t[o]=e[o],l[o]=!0);e=!1!==r&&a(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:l,kindOfTest:u,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(h(e))return e;let t=e.length;if(!v(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:R,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:N,freezeMethods:e=>{N(e,((t,r)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];m(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return h(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:k,global:A,isContextDefined:C,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const i=h(e)?[]:{};return I(e,((e,t)=>{const s=r(e,n+1);!f(s)&&(i[t]=s)})),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:B,isThenable:e=>e&&(y(e)||m(e))&&m(e.then)&&m(e.catch)}})),s.register("djt5d",(function(t,r){function n(e,t){return function(){return e.apply(t,arguments)}}e(t.exports,"default",(function(){return n}))})),s.register("6zSb1",(function(t,r){e(t.exports,"default",(function(){return p}));var n=s("2bBga"),i=s("2RNjJ"),o=s("5Dm7L"),a=s("eQ5d8"),l=s("d0EKm"),c=s("1ZTQa"),u=s("6zj0X"),d=s("gbTL1");const h=u.default.validators;class f{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=(0,l.default)(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;let o;void 0!==r&&u.default.assertOptions(r,{silentJSONParsing:h.transitional(h.boolean),forcedJSONParsing:h.transitional(h.boolean),clarifyTimeoutError:h.transitional(h.boolean)},!1),null!=i&&(n.default.isFunction(i)?t.paramsSerializer={serialize:i}:u.default.assertOptions(i,{encode:h.function,serialize:h.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=s&&n.default.merge(s.common,s[t.method]),o&&n.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete s[e]})),t.headers=d.default.concat(o,s);const c=[];let f=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(f=f&&e.synchronous,c.unshift(e.fulfilled,e.rejected))}));const p=[];let g;this.interceptors.response.forEach((function(e){p.push(e.fulfilled,e.rejected)}));let m,v=0;if(!f){const e=[a.default.bind(this),void 0];for(e.unshift.apply(e,c),e.push.apply(e,p),m=e.length,g=Promise.resolve(t);v<m;)g=g.then(e[v++],e[v++]);return g}m=c.length;let y=t;for(v=0;v<m;){const e=c[v++],t=c[v++];try{y=e(y)}catch(e){t.call(this,e);break}}try{g=a.default.call(this,y)}catch(e){return Promise.reject(e)}for(v=0,m=p.length;v<m;)g=g.then(p[v++],p[v++]);return g}getUri(e){e=(0,l.default)(this.defaults,e);const t=(0,c.default)(e.baseURL,e.url);return(0,i.default)(t,e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new(0,o.default),response:new(0,o.default)}}}n.default.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request((0,l.default)(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.default.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request((0,l.default)(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)}));var p=f})),s.register("2RNjJ",(function(t,r){e(t.exports,"default",(function(){return a}));var n=s("2bBga"),i=s("hz3Ym");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(e,t,r){if(!t)return e;const s=r&&r.encode||o,a=r&&r.serialize;let l;if(l=a?a(t,r):n.default.isURLSearchParams(t)?t.toString():new(0,i.default)(t,r).toString(s),l){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+l}return e}})),s.register("hz3Ym",(function(t,r){e(t.exports,"default",(function(){return l}));var n=s("aewVa");function i(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function o(e,t){this._pairs=[],e&&(0,n.default)(e,this,t)}const a=o.prototype;a.append=function(e,t){this._pairs.push([e,t])},a.toString=function(e){const t=e?function(t){return e.call(this,t,i)}:i;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var l=o})),s.register("aewVa",(function(t,r){e(t.exports,"default",(function(){return h}));var n=s("2bBga"),i=s("121rJ"),o=s("1gvAv"),a=s("ihoyg").Buffer;function l(e){return n.default.isPlainObject(e)||n.default.isArray(e)}function c(e){return n.default.endsWith(e,"[]")?e.slice(0,-2):e}function u(e,t,r){return e?e.concat(t).map((function(e,t){return e=c(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}const d=n.default.toFlatObject(n.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var h=function(e,t,r){if(!n.default.isObject(e))throw new TypeError("target must be an object");t=t||new(o.default||FormData);const s=(r=n.default.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!n.default.isUndefined(t[e])}))).metaTokens,h=r.visitor||v,f=r.dots,p=r.indexes,g=(r.Blob||"undefined"!=typeof Blob&&Blob)&&n.default.isSpecCompliantForm(t);if(!n.default.isFunction(h))throw new TypeError("visitor must be a function");function m(e){if(null===e)return"";if(n.default.isDate(e))return e.toISOString();if(!g&&n.default.isBlob(e))throw new(0,i.default)("Blob is not supported. Use a Buffer instead.");return n.default.isArrayBuffer(e)||n.default.isTypedArray(e)?g&&"function"==typeof Blob?new Blob([e]):a.from(e):e}function v(e,r,i){let o=e;if(e&&!i&&"object"==typeof e)if(n.default.endsWith(r,"{}"))r=s?r:r.slice(0,-2),e=JSON.stringify(e);else if(n.default.isArray(e)&&function(e){return n.default.isArray(e)&&!e.some(l)}(e)||(n.default.isFileList(e)||n.default.endsWith(r,"[]"))&&(o=n.default.toArray(e)))return r=c(r),o.forEach((function(e,i){!n.default.isUndefined(e)&&null!==e&&t.append(!0===p?u([r],i,f):null===p?r:r+"[]",m(e))})),!1;return!!l(e)||(t.append(u(i,r,f),m(e)),!1)}const y=[],w=Object.assign(d,{defaultVisitor:v,convertValue:m,isVisitable:l});if(!n.default.isObject(e))throw new TypeError("data must be an object");return function e(r,i){if(!n.default.isUndefined(r)){if(-1!==y.indexOf(r))throw Error("Circular reference detected in "+i.join("."));y.push(r),n.default.forEach(r,(function(r,s){!0===(!(n.default.isUndefined(r)||null===r)&&h.call(t,r,n.default.isString(s)?s.trim():s,i,w))&&e(r,i?i.concat(s):[s])})),y.pop()}}(e),t}})),s.register("121rJ",(function(t,r){e(t.exports,"default",(function(){return l}));var n=s("2bBga");function i(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}n.default.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const o=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(o,"isAxiosError",{value:!0}),i.from=(e,t,r,s,a,l)=>{const c=Object.create(o);return n.default.toFlatObject(e,c,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),i.call(c,e.message,t,r,s,a),c.cause=e,c.name=e.name,l&&Object.assign(c,l),c};var l=i})),s.register("1gvAv",(function(t,r){e(t.exports,"default",(function(){return n}));var n=null})),s.register("ihoyg",(function(t,r){var n,i;e(t.exports,"Buffer",(function(){return n}),(function(e){return n=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var o=s("hqZtu"),a=s("5WQj6");const l="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;n=d,i=50;const c=2147483647;function u(e){if(e>c)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,d.prototype),t}function d(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return h(e,t,r)}function h(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!d.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|y(e,t);let n=u(r);const i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Q(e,Uint8Array)){const t=new Uint8Array(e);return m(t.buffer,t.byteOffset,t.byteLength)}return g(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Q(e,ArrayBuffer)||e&&Q(e.buffer,ArrayBuffer))return m(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(Q(e,SharedArrayBuffer)||e&&Q(e.buffer,SharedArrayBuffer)))return m(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return d.from(n,t,r);const i=function(e){if(d.isBuffer(e)){const t=0|v(e.length),r=u(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):g(e);if("Buffer"===e.type&&Array.isArray(e.data))return g(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return d.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|v(e))}function g(e){const t=e.length<0?0:0|v(e.length),r=u(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function m(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,d.prototype),n}function v(e){if(e>=c)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+c.toString(16)+" bytes");return 0|e}function y(e,t){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Q(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return K(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return X(e).length;default:if(i)return n?-1:K(e).length;t=(""+t).toLowerCase(),i=!0}}function w(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return L(this,t,r);case"utf8":case"utf-8":return O(this,t,r);case"ascii":return R(this,t,r);case"latin1":case"binary":return P(this,t,r);case"base64":return C(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function b(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function E(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),Z(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=d.from(t,n)),d.isBuffer(t))return 0===t.length?-1:S(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):S(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function S(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(c(e,s)===c(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else-1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(c(e,s+n)!==c(t,n)){r=!1;break}if(r)return s}return-1}function T(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const s=t.length;let o;for(n>s/2&&(n=s/2),o=0;o<n;++o){const n=parseInt(t.substr(2*o,2),16);if(Z(n))return o;e[r+o]=n}return o}function _(e,t,r,n){return Y(K(t,e.length-r),e,r,n)}function I(e,t,r,n){return Y(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function k(e,t,r,n){return Y(X(t),e,r,n)}function A(e,t,r,n){return Y(function(e,t){let r,n,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)r=e.charCodeAt(o),n=r>>8,i=r%256,s.push(i),s.push(n);return s}(t,e.length-r),e,r,n)}function C(e,t,r){return 0===t&&r===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,r))}function O(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:r=e[i+1],128==(192&r)&&(l=(31&t)<<6|63&r,l>127&&(s=l));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(l=(15&t)<<12|(63&r)<<6|63&n,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){const t=e.length;if(t<=x)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=x));return r}(n)}d.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(e,t,r){return h(e,t,r)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(e,t,r){return function(e,t,r){return f(e),e<=0?u(e):void 0!==t?"string"==typeof r?u(e).fill(t,r):u(e).fill(t):u(e)}(e,t,r)},d.allocUnsafe=function(e){return p(e)},d.allocUnsafeSlow=function(e){return p(e)},d.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==d.prototype},d.compare=function(e,t){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Q(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=d.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(Q(t,Uint8Array))i+t.length>n.length?(d.isBuffer(t)||(t=d.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!d.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},d.byteLength=y,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},d.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},d.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},d.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?O(this,0,e):w.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},l&&(d.prototype[l]=d.prototype.inspect),d.prototype.compare=function(e,t,r,n,i){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let s=(i>>>=0)-(n>>>=0),o=(r>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},d.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},d.prototype.indexOf=function(e,t,r){return E(this,e,t,r,!0)},d.prototype.lastIndexOf=function(e,t,r){return E(this,e,t,r,!1)},d.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return T(this,e,t,r);case"utf8":case"utf-8":return _(this,e,t,r);case"ascii":case"latin1":case"binary":return I(this,e,t,r);case"base64":return k(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const x=4096;function R(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function P(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function L(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=ee[e[n]];return i}function N(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function M(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,r,n,i,s){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function U(e,t,r,n,i){G(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function B(e,t,r,n,i){G(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function F(e,t,r,n,i,s){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,n,i){return t=+t,r>>>=0,i||F(e,0,r,4),a.write(e,t,r,n,23,4),r+4}function z(e,t,r,n,i){return t=+t,r>>>=0,i||F(e,0,r,8),a.write(e,t,r,n,52,8),r+8}d.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n},d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||M(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||M(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),this[e]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e>>>=0,t||M(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readBigUInt64LE=te((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),d.prototype.readBigUInt64BE=te((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),d.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||M(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},d.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||M(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},d.prototype.readInt8=function(e,t){return e>>>=0,t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){e>>>=0,t||M(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt16BE=function(e,t){e>>>=0,t||M(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt32LE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return e>>>=0,t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readBigInt64LE=te((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),d.prototype.readBigInt64BE=te((function(e){q(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||W(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),d.prototype.readFloatLE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return e>>>=0,t||M(e,4,this.length),a.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return e>>>=0,t||M(e,8,this.length),a.read(this,e,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){D(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){D(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,1,255,0),this[t]=255&e,t+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigUInt64LE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);D(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},d.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);D(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},d.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},d.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigInt64LE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},d.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},d.prototype.writeDoubleLE=function(e,t,r){return z(this,e,t,!0,r)},d.prototype.writeDoubleBE=function(e,t,r){return z(this,e,t,!1,r)},d.prototype.copy=function(e,t,r,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},d.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const s=d.isBuffer(e)?e:d.from(e,n),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};const H={};function V(e,t,r){H[e]=class extends r{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function $(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function G(e,t,r,n,i,s){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(s+1)}${n}`:`>= -(2${n} ** ${8*(s+1)-1}${n}) and < 2 ** ${8*(s+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new H.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){q(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||W(t,e.length-(r+1))}(n,i,s)}function q(e,t){if("number"!=typeof e)throw new H.ERR_INVALID_ARG_TYPE(t,"number",e)}function W(e,t,r){if(Math.floor(e)!==e)throw q(e,r),new H.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new H.ERR_BUFFER_OUT_OF_BOUNDS;throw new H.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}V("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),V("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),V("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=$(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=$(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const J=/[^+/0-9A-Za-z-_]/g;function K(e,t){let r;t=t||1/0;const n=e.length;let i=null;const s=[];for(let o=0;o<n;++o){if(r=e.charCodeAt(o),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return s}function X(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(J,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function Q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?re:e}function re(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=d(e),i=n[0],s=n[1],l=new a(function(e,t,r){return 3*(t+r)/4-r}(0,i,s)),c=0,u=s>0?i-4:i;for(r=0;r<u;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;2===s&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[c++]=255&t);1===s&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t);return l},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,a=0,l=r-n;a<l;a+=o)i.push(h(e,a,a+o>l?l:a+o));1===n?(t=e[r-1],i.push(s[t>>2]+s[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,u=l.length;c<u;++c)s[c]=l[c],o[l.charCodeAt(c)]=c;function d(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function h(e,t,r){for(var n,i,o=[],a=t;a<r;a+=3)n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(i=n)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,c=l>>1,u=-7,d=r?i-1:0,h=r?-1:1,f=e[t+d];for(d+=h,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+d],d+=h,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=n;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,n),s-=c}return(f?-1:1)*o*Math.pow(2,s-n)},i=function(e,t,r,n,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(a=0,o=u):o+d>=1?(a=(t*l-1)*Math.pow(2,i),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[r+f]=255&o,f+=p,o/=256,c-=8);e[r+f-p]|=128*g}})),s.register("5Dm7L",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("2bBga");var i=class{use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){n.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}}})),s.register("eQ5d8",(function(t,r){e(t.exports,"default",(function(){return d}));var n=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9"),l=s("gbTL1"),c=s("enpjQ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new(0,a.default)(null,e)}function d(e){u(e),e.headers=l.default.from(e.headers),e.data=n.default.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return c.default.getAdapter(e.adapter||o.default.adapter)(e).then((function(t){return u(e),t.data=n.default.call(e,e.transformResponse,t),t.headers=l.default.from(t.headers),t}),(function(t){return(0,i.default)(t)||(u(e),t&&t.response&&(t.response.data=n.default.call(e,e.transformResponse,t.response),t.response.headers=l.default.from(t.response.headers))),Promise.reject(t)}))}})),s.register("bhEpd",(function(t,r){e(t.exports,"default",(function(){return a}));var n=s("2bBga"),i=s("hqlPG"),o=s("gbTL1");function a(e,t){const r=this||i.default,s=t||r,a=o.default.from(s.headers);let l=s.data;return n.default.forEach(e,(function(e){l=e.call(r,l,a.normalize(),t?t.status:void 0)})),a.normalize(),l}})),s.register("hqlPG",(function(t,r){e(t.exports,"default",(function(){return f}));var n=s("2bBga"),i=s("121rJ"),o=s("2wfLM"),a=s("aewVa"),l=s("5tcKT"),c=s("hdo0R"),u=s("4bmvb");const d={"Content-Type":void 0};const h={transitional:o.default,adapter:["xhr","http"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=n.default.isObject(e);s&&n.default.isHTMLForm(e)&&(e=new FormData(e));if(n.default.isFormData(e))return i&&i?JSON.stringify((0,u.default)(e)):e;if(n.default.isArrayBuffer(e)||n.default.isBuffer(e)||n.default.isStream(e)||n.default.isFile(e)||n.default.isBlob(e))return e;if(n.default.isArrayBufferView(e))return e.buffer;if(n.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return(0,l.default)(e,this.formSerializer).toString();if((o=n.default.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return(0,a.default)(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),function(e,t,r){if(n.default.isString(e))try{return(t||JSON.parse)(e),n.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||h.transitional,r=t&&t.forcedJSONParsing,s="json"===this.responseType;if(e&&n.default.isString(e)&&(r&&!this.responseType||s)){const r=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw i.default.from(e,i.default.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:c.default.classes.FormData,Blob:c.default.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.default.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),n.default.forEach(["post","put","patch"],(function(e){h.headers[e]=n.default.merge(d)}));var f=h})),s.register("2wfLM",(function(t,r){e(t.exports,"default",(function(){return n}));var n={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("5tcKT",(function(t,r){e(t.exports,"default",(function(){return a}));var n=s("2bBga"),i=s("aewVa"),o=s("hdo0R");function a(e,t){return(0,i.default)(e,new o.default.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,i){return o.default.isNode&&n.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}})),s.register("hdo0R",(function(t,r){e(t.exports,"default",(function(){return c}));var n=s("9matH"),i=s("eN04z"),o=s("2J1oD");const a=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),l="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var c={isBrowser:!0,classes:{URLSearchParams:n.default,FormData:i.default,Blob:o.default},isStandardBrowserEnv:a,isStandardBrowserWebWorkerEnv:l,protocols:["http","https","file","blob","url","data"]}})),s.register("9matH",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("hz3Ym"),i="undefined"!=typeof URLSearchParams?URLSearchParams:n.default})),s.register("eN04z",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof FormData?FormData:null})),s.register("2J1oD",(function(t,r){e(t.exports,"default",(function(){return n}));var n="undefined"!=typeof Blob?Blob:null})),s.register("4bmvb",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("2bBga");var i=function(e){function t(e,r,i,s){let o=e[s++];const a=Number.isFinite(+o),l=s>=e.length;if(o=!o&&n.default.isArray(i)?i.length:o,l)return n.default.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a;i[o]&&n.default.isObject(i[o])||(i[o]=[]);return t(e,r,i[o],s)&&n.default.isArray(i[o])&&(i[o]=function(e){const t={},r=Object.keys(e);let n;const i=r.length;let s;for(n=0;n<i;n++)s=r[n],t[s]=e[s];return t}(i[o])),!a}if(n.default.isFormData(e)&&n.default.isFunction(e.entries)){const r={};return n.default.forEachEntry(e,((e,i)=>{t(function(e){return n.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,r,0)})),r}return null}})),s.register("gbTL1",(function(t,r){e(t.exports,"default",(function(){return f}));var n=s("2bBga"),i=s("9cPEm");const o=Symbol("internals");function a(e){return e&&String(e).trim().toLowerCase()}function l(e){return!1===e||null==e?e:n.default.isArray(e)?e.map(l):String(e)}function c(e,t,r,i,s){return n.default.isFunction(i)?i.call(this,t,r):(s&&(t=r),n.default.isString(t)?n.default.isString(i)?-1!==t.indexOf(i):n.default.isRegExp(i)?i.test(t):void 0:void 0)}let u=Symbol.iterator,d=Symbol.toStringTag;class h{set(e,t,r){const s=this;function o(e,t,r){const i=a(t);if(!i)throw new Error("header name must be a non-empty string");const o=n.default.findKey(s,i);(!o||void 0===s[o]||!0===r||void 0===r&&!1!==s[o])&&(s[o||t]=l(e))}const c=(e,t)=>n.default.forEach(e,((e,r)=>o(e,r,t)));return n.default.isPlainObject(e)||e instanceof this.constructor?c(e,t):n.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?c((0,i.default)(e),t):null!=e&&o(t,e,r),this}get(e,t){if(e=a(e)){const r=n.default.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(n.default.isFunction(t))return t.call(this,e,r);if(n.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=a(e)){const r=n.default.findKey(this,e);return!(!r||void 0===this[r]||t&&!c(0,this[r],r,t))}return!1}delete(e,t){const r=this;let i=!1;function s(e){if(e=a(e)){const s=n.default.findKey(r,e);!s||t&&!c(0,r[s],s,t)||(delete r[s],i=!0)}}return n.default.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const i=t[r];e&&!c(0,this[i],i,e,!0)||(delete this[i],n=!0)}return n}normalize(e){const t=this,r={};return n.default.forEach(this,((i,s)=>{const o=n.default.findKey(r,s);if(o)return t[o]=l(i),void delete t[s];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(s):String(s).trim();a!==s&&delete t[s],t[a]=l(i),r[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return n.default.forEach(this,((r,i)=>{null!=r&&!1!==r&&(t[i]=e&&n.default.isArray(r)?r.join(", "):r)})),t}[u](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[d](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[o]=this[o]={accessors:{}}).accessors,r=this.prototype;function i(e){const i=a(e);t[i]||(!function(e,t){const r=n.default.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})}))}(r,e),t[i]=!0)}return n.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}h.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),n.default.freezeMethods(h.prototype),n.default.freezeMethods(h);var f=h})),s.register("9cPEm",(function(t,r){e(t.exports,"default",(function(){return i}));const n=s("2bBga").default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var i=e=>{const t={};let r,i,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),r=e.substring(0,s).trim().toLowerCase(),i=e.substring(s+1).trim(),!r||t[r]&&n[r]||("set-cookie"===r?t[r]?t[r].push(i):t[r]=[i]:t[r]=t[r]?t[r]+", "+i:i)})),t}})),s.register("ksuZT",(function(t,r){function n(e){return!(!e||!e.__CANCEL__)}e(t.exports,"default",(function(){return n}))})),s.register("83xK9",(function(t,r){e(t.exports,"default",(function(){return o}));var n=s("121rJ");function i(e,t,r){n.default.call(this,null==e?"canceled":e,n.default.ERR_CANCELED,t,r),this.name="CanceledError"}s("2bBga").default.inherits(i,n.default,{__CANCEL__:!0});var o=i})),s.register("enpjQ",(function(t,r){e(t.exports,"default",(function(){return c}));var n=s("2bBga"),i=s("1gvAv"),o=s("9VVcb"),a=s("121rJ");const l={http:i.default,xhr:o.default};n.default.forEach(l,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var c={getAdapter:e=>{e=n.default.isArray(e)?e:[e];const{length:t}=e;let r,i;for(let s=0;s<t&&(r=e[s],!(i=n.default.isString(r)?l[r.toLowerCase()]:r));s++);if(!i){if(!1===i)throw new(0,a.default)(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(n.default.hasOwnProp(l,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!n.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:l}})),s.register("9VVcb",(function(t,r){e(t.exports,"default",(function(){return y}));var n=s("2bBga"),i=s("1TQad"),o=s("kTwUV"),a=s("2RNjJ"),l=s("1ZTQa"),c=s("g3yOT"),u=s("2wfLM"),d=s("121rJ"),h=s("83xK9"),f=s("8wMQb"),p=s("hdo0R"),g=s("gbTL1"),m=s("5OiBb");function v(e,t){let r=0;const n=(0,m.default)(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-r,l=n(a);r=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var y="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){let s=e.data;const m=g.default.from(e.headers).normalize(),y=e.responseType;let w;function b(){e.cancelToken&&e.cancelToken.unsubscribe(w),e.signal&&e.signal.removeEventListener("abort",w)}n.default.isFormData(s)&&(p.default.isStandardBrowserEnv||p.default.isStandardBrowserWebWorkerEnv?m.setContentType(!1):m.setContentType("multipart/form-data;",!1));let E=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.set("Authorization","Basic "+btoa(t+":"+r))}const S=(0,l.default)(e.baseURL,e.url);function T(){if(!E)return;const n=g.default.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),s={data:y&&"text"!==y&&"json"!==y?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:n,config:e,request:E};(0,i.default)((function(e){t(e),b()}),(function(e){r(e),b()}),s),E=null}if(E.open(e.method.toUpperCase(),(0,a.default)(S,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=T:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(T)},E.onabort=function(){E&&(r(new(0,d.default)("Request aborted",d.default.ECONNABORTED,e,E)),E=null)},E.onerror=function(){r(new(0,d.default)("Network Error",d.default.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const n=e.transitional||u.default;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new(0,d.default)(t,n.clarifyTimeoutError?d.default.ETIMEDOUT:d.default.ECONNABORTED,e,E)),E=null},p.default.isStandardBrowserEnv){const t=(e.withCredentials||(0,c.default)(S))&&e.xsrfCookieName&&o.default.read(e.xsrfCookieName);t&&m.set(e.xsrfHeaderName,t)}void 0===s&&m.setContentType(null),"setRequestHeader"in E&&n.default.forEach(m.toJSON(),(function(e,t){E.setRequestHeader(t,e)})),n.default.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),y&&"json"!==y&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",v(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",v(e.onUploadProgress)),(e.cancelToken||e.signal)&&(w=t=>{E&&(r(!t||t.type?new(0,h.default)(null,e,E):t),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(w),e.signal&&(e.signal.aborted?w():e.signal.addEventListener("abort",w)));const _=(0,f.default)(S);_&&-1===p.default.protocols.indexOf(_)?r(new(0,d.default)("Unsupported protocol "+_+":",d.default.ERR_BAD_REQUEST,e)):E.send(s||null)}))}})),s.register("1TQad",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("121rJ");function i(e,t,r){const i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new(0,n.default)("Request failed with status code "+r.status,[n.default.ERR_BAD_REQUEST,n.default.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),s.register("kTwUV",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("2bBga"),i=s("hdo0R").default.isStandardBrowserEnv?{write:function(e,t,r,i,s,o){const a=[];a.push(e+"="+encodeURIComponent(t)),n.default.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.default.isString(i)&&a.push("path="+i),n.default.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(t,r){e(t.exports,"default",(function(){return o}));var n=s("iUwU6"),i=s("91vFE");function o(e,t){return e&&!(0,n.default)(t)?(0,i.default)(e,t):t}})),s.register("iUwU6",(function(t,r){function n(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}e(t.exports,"default",(function(){return n}))})),s.register("91vFE",(function(t,r){function n(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}e(t.exports,"default",(function(){return n}))})),s.register("g3yOT",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("2bBga"),i=s("hdo0R").default.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(e){const t=n.default.isString(e)?i(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0}})),s.register("8wMQb",(function(t,r){function n(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}e(t.exports,"default",(function(){return n}))})),s.register("5OiBb",(function(t,r){e(t.exports,"default",(function(){return n}));var n=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=n[o];i||(i=l),r[s]=a,n[s]=l;let u=o,d=0;for(;u!==s;)d+=r[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}}})),s.register("d0EKm",(function(t,r){e(t.exports,"default",(function(){return a}));var n=s("2bBga"),i=s("gbTL1");const o=e=>e instanceof i.default?e.toJSON():e;function a(e,t){t=t||{};const r={};function i(e,t,r){return n.default.isPlainObject(e)&&n.default.isPlainObject(t)?n.default.merge.call({caseless:r},e,t):n.default.isPlainObject(t)?n.default.merge({},t):n.default.isArray(t)?t.slice():t}function s(e,t,r){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e,r):i(e,t,r)}function a(e,t){if(!n.default.isUndefined(t))return i(void 0,t)}function l(e,t){return n.default.isUndefined(t)?n.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function c(r,n,s){return s in t?i(r,n):s in e?i(void 0,r):void 0}const u={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:c,headers:(e,t)=>s(o(e),o(t),!0)};return n.default.forEach(Object.keys(Object.assign({},e,t)),(function(i){const o=u[i]||s,a=o(e[i],t[i],i);n.default.isUndefined(a)&&o!==c||(r[i]=a)})),r}})),s.register("6zj0X",(function(t,r){e(t.exports,"default",(function(){return l}));var n=s("50GW0"),i=s("121rJ");const o={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const a={};o.transitional=function(e,t,r){function s(e,t){return"[Axios v"+n.VERSION+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,n,o)=>{if(!1===e)throw new(0,i.default)(s(n," has been removed"+(t?" in "+t:"")),i.default.ERR_DEPRECATED);return t&&!a[n]&&(a[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,o)}};var l={assertOptions:function(e,t,r){if("object"!=typeof e)throw new(0,i.default)("options must be an object",i.default.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],a=t[o];if(a){const t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new(0,i.default)("option "+o+" must be "+r,i.default.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new(0,i.default)("Unknown option "+o,i.default.ERR_BAD_OPTION)}},validators:o}})),s.register("50GW0",(function(t,r){e(t.exports,"VERSION",(function(){return n}));const n="1.4.0"})),s.register("2sjhC",(function(t,r){e(t.exports,"default",(function(){return o}));var n=s("83xK9");class i{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new i((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,i,s){r.reason||(r.reason=new(0,n.default)(e,i,s),t(r.reason))}))}}var o=i})),s.register("av9gA",(function(t,r){function n(e){return function(t){return e.apply(null,t)}}e(t.exports,"default",(function(){return n}))})),s.register("gNhGc",(function(t,r){e(t.exports,"default",(function(){return i}));var n=s("2bBga");function i(e){return n.default.isObject(e)&&!0===e.isAxiosError}})),s.register("jd7iQ",(function(t,r){e(t.exports,"default",(function(){return i}));const n={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(n).forEach((([e,t])=>{n[t]=e}));var i=n})),s.register("gKkQl",(function(t,r){e(t.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
(0,s("ix4Jr").registerVersion)("firebase","9.21.0","app")})),s.register("ix4Jr",(function(t,r){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return y})),e(t.exports,"SDK_VERSION",(function(){return S})),e(t.exports,"initializeApp",(function(){return T})),e(t.exports,"getApp",(function(){return _})),e(t.exports,"registerVersion",(function(){return I}));var n=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
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
 */
class l{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const c="@firebase/app",u="0.9.9",d=new(0,i.Logger)("@firebase/app"),h="[DEFAULT]",f={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(r){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function v(e){const t=e.name;if(g.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;g.set(t,e);for(const t of p.values())m(t,e);return!0}function y(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const w={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",w);
/**
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
 */
class E{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new(0,n.Component)("app",(()=>this),"PUBLIC"))}}
/**
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
 */const S="9.21.0";function T(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});if(r||(r=(0,o.getDefaultAppConfig)()),!r)throw b.create("no-options");const a=p.get(s);if(a){if((0,o.deepEqual)(r,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:s})}const l=new(0,n.ComponentContainer)(s);for(const e of g.values())l.addComponent(e);const c=new E(r,i,l);return p.set(s,c),c}function _(e="[DEFAULT]"){const t=p.get(e);if(!t&&e===h)return T();if(!t)throw b.create("no-app",{appName:e});return t}function I(e,t,r){var i;let s=null!==(i=f[e])&&void 0!==i?i:e;r&&(s+=`-${r}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void d.warn(e.join(" "))}v(new(0,n.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */
const k="firebase-heartbeat-store";let A=null;function C(){return A||(A=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(k)}}).catch((e=>{throw b.create("idb-open",{originalErrorMessage:e.message})}))),A}async function O(e,t){try{const r=(await C()).transaction(k,"readwrite"),n=r.objectStore(k);return await n.put(t,x(e)),r.done}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=b.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function x(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class R{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=P();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=P(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let n=e.slice();for(const i of e){const e=r.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),N(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),N(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function P(){return(new Date).toISOString().substring(0,10)}class L{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await C()).transaction(k).objectStore(k).get(x(e))}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{const t=b.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function N(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var M;M="",v(new(0,n.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),v(new(0,n.Component)("heartbeat",(e=>new R(e)),"PRIVATE")),I(c,u,M),I(c,u,"esm2017"),I("fire-js","")})),s.register("4a6xH",(function(t,r){e(t.exports,"Component",(function(){return i})),e(t.exports,"ComponentContainer",(function(){return l}));var n=s("ffjl9");class i{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,n.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===o?void 0:n),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class l{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),s.register("ffjl9",(function(r,n){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return c})),e(r.exports,"base64Decode",(function(){return u})),e(r.exports,"getDefaultEmulatorHost",(function(){return f})),e(r.exports,"getDefaultAppConfig",(function(){return p})),e(r.exports,"getExperimentalSetting",(function(){return g})),e(r.exports,"Deferred",(function(){return m})),e(r.exports,"getUA",(function(){return v})),e(r.exports,"isMobileCordova",(function(){return y})),e(r.exports,"isBrowserExtension",(function(){return w})),e(r.exports,"isReactNative",(function(){return b})),e(r.exports,"isIE",(function(){return E})),e(r.exports,"isIndexedDBAvailable",(function(){return S})),e(r.exports,"validateIndexedDBOpenable",(function(){return T})),e(r.exports,"FirebaseError",(function(){return _})),e(r.exports,"ErrorFactory",(function(){return I})),e(r.exports,"isEmpty",(function(){return A})),e(r.exports,"deepEqual",(function(){return C})),e(r.exports,"querystring",(function(){return x})),e(r.exports,"querystringDecode",(function(){return R})),e(r.exports,"extractQuerystring",(function(){return P})),e(r.exports,"createSubscribe",(function(){return L})),e(r.exports,"getModularInstance",(function(){return D}));var i=s("4TNnu");
/**
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
 */const o=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),n.push(r[c],r[u],r[d],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){const i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new l;const c=i<<2|s>>4;if(n.push(c),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(e){return function(e){const t=o(e);return a.encodeByteArray(t,!0)}(e).replace(/\./g,"")},u=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
const d=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,h=()=>{try{return d()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>{var t,r;return null===(r=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},p=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=h())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class m{wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */
/**
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
 */
function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function w(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function E(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function S(){try{return"object"==typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class _ extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(k,((e,r)=>{const n=t[r];return null!=n?String(n):`<${r}?>`}))}(i,r):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new _(n,o,r)}constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}}const k=/\{\$([^}]+)}/g;
/**
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
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const i of r){if(!n.includes(i))return!1;const r=e[i],s=t[i];if(O(r)&&O(s)){if(!C(r,s))return!1}else if(r!==s)return!1}for(const e of n)if(!r.includes(e))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function x(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}})),t}function P(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
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
 */function L(e,t){const r=new N(e,t);return r.subscribe.bind(r)}class N{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=M),void 0===n.error&&(n.error=M),void 0===n.complete&&(n.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function M(){}
/**
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
 */
/**
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
 */
function D(e){return e&&e._delegate?e._delegate:e}})),s.register("4TNnu",(function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&f())}function f(){if(!u){var e=a(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("7vF8m",(function(t,r){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return u})),e(t.exports,"setLogLevel",(function(){return d})),e(t.exports,"setUserLogHandler",(function(){return h}));
/**
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
 */
const n=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),i=l[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${n}]  ${e.name}:`,...r)};class u{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=c,this._userLogHandler=null,n.push(this)}}function d(e){n.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const r of n){let n=null;t&&t.level&&(n=o[t.level]),r.userLogHandler=null===e?null:(t,r,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:i[r].toLowerCase(),message:o,args:s,type:t.name})}}}})),s.register("cCiiD",(function(t,r){e(t.exports,"openDB",(function(){return i}));var n=s("ekHjI");n=s("ekHjI");function i(e,t,{blocked:r,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,n.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,n.w)(a.result),e.oldVersion,e.newVersion,(0,n.w)(a.transaction),e)})),r&&a.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),l.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function c(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,i=a.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(r))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return l.set(t,s),s}(0,n.r)((e=>({...e,get:(t,r,n)=>c(t,r)||e.get(t,r,n),has:(t,r)=>!!c(t,r)||e.has(t,r)})))})),s.register("ekHjI",(function(t,r){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return d}));let n,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,l=new WeakMap,c=new WeakMap;let u={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return p(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){u=e(u)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),p(s.get(this))}:function(...t){return p(e.apply(g(this),t))}:function(t,...r){const n=e.call(g(this),t,...r);return a.set(n,t.sort?t.sort():[t]),p(n)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));o.set(e,t)}(e),t=e,(n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,u):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(p(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),c.set(t,e)),t}const g=e=>c.get(e)})),s.register("eyjy7",(function(t,r){e(t.exports,"signInWithEmailAndPassword",(function(){return s("6slx9").a9})),e(t.exports,"createUserWithEmailAndPassword",(function(){return s("6slx9").a8})),e(t.exports,"GoogleAuthProvider",(function(){return s("6slx9").V})),e(t.exports,"getAuth",(function(){return s("6slx9").o})),e(t.exports,"signInWithPopup",(function(){return s("6slx9").c})),s("1iO0g")})),s.register("1iO0g",(function(t,r){e(t.exports,"GoogleAuthProvider",(function(){return s("6slx9").V})),e(t.exports,"createUserWithEmailAndPassword",(function(){return s("6slx9").a8})),e(t.exports,"getAuth",(function(){return s("6slx9").o})),e(t.exports,"signInWithEmailAndPassword",(function(){return s("6slx9").a9})),e(t.exports,"signInWithPopup",(function(){return s("6slx9").c})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("6slx9")})),s.register("6slx9",(function(t,r){e(t.exports,"V",(function(){return Ue})),e(t.exports,"a8",(function(){return Ke})),e(t.exports,"a9",(function(){return Xe})),e(t.exports,"c",(function(){return Ct})),e(t.exports,"o",(function(){return ur}));var n=s("ffjl9"),i=s("ix4Jr"),o=s("l73V3"),a=s("7vF8m"),l=s("4a6xH");function c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,d=new(0,n.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new(0,a.Logger)("@firebase/auth");function f(e,...t){h.logLevel<=a.LogLevel.ERROR&&h.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,r){const i=Object.assign(Object.assign({},u()),{[t]:r});return new(0,n.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function v(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!=typeof e){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return d.create(e,...t)}function w(e,t,...r){if(!e)throw y(t,...r)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function E(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function S(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function T(){return"http:"===_()||"https:"===_()}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class I{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(T()||(0,n.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,n.isMobileCordova)()||(0,n.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function k(e,t){E(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class A{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const C={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},O=new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,r,i,s={}){return P(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,n.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),A.fetch()(N(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function P(e,t,r){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},C),t);try{const t=new M(e),n=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw D(e,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const t=n.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw D(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw D(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw D(e,"user-disabled",s);const a=i[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(t){if(t instanceof n.FirebaseError)throw t;p(e,"network-request-failed",{message:String(t)})}}async function L(e,t,r,n,i={}){const s=await R(e,t,r,n,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function N(e,t,r,n){const i=`${t}${r}?${n}`;return e.config.emulator?k(e.config,i):`${e.config.apiScheme}://${i}`}class M{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),O.get())}))}}function D(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=g(e,t,n);return i.customData._tokenResponse=r,i}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function U(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function B(e){return 1e3*Number(e)}function F(e){const[t,r,i]=e.split(".");if(void 0===t||void 0===r||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,n.base64Decode)(r);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
async function j(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof n.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class z{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class H{_initializeTime(){this.lastSignInTime=U(this.lastLoginAt),this.creationTime=U(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
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
 */async function V(e){var t;const r=e.auth,n=await e.getIdToken(),i=await j(e,async function(e,t){return R(e,"POST","/v1/accounts:lookup",t)}(r,{idToken:n}));w(null==i?void 0:i.users.length,r,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,r=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})):[];const l=(c=e.providerData,u=a,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const d=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==l?void 0:l.length)),f=!!d&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new H(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class ${get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(void 0!==e.idToken,"internal-error"),w(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=F(e);return w(t,"internal-error"),w(void 0!==t.exp,"internal-error"),w(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
async function(e,t){const r=await P(e,{},(async()=>{const r=(0,n.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=N(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new $;return r&&(w("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(w("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(w("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $,this.toJSON())}_performRefresh(){return b("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function G(e,t){w("string"==typeof e||void 0===e,"internal-error",{appName:t})}class q{async getIdToken(e){const t=await j(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=(0,n.getModularInstance)(e),i=await r.getIdToken(t),s=F(i);w(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:U(B(s.auth_time)),issuedAtTime:U(B(s.iat)),expirationTime:U(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,n.getModularInstance)(e);await V(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await j(this,async function(e,t){return R(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,c;const u=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:b,isAnonymous:E,providerData:S,stsTokenManager:T}=t;w(y&&T,e,"internal-error");const _=$.fromJSON(this.name,T);w("string"==typeof y,e,"internal-error"),G(u,e.name),G(d,e.name),w("boolean"==typeof b,e,"internal-error"),w("boolean"==typeof E,e,"internal-error"),G(h,e.name),G(f,e.name),G(p,e.name),G(g,e.name),G(m,e.name),G(v,e.name);const I=new q({uid:y,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:E,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:v});return S&&Array.isArray(S)&&(I.providerData=S.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,r=!1){const n=new $;n.updateFromServerResponse(t);const i=new q({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await V(i),i}constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new H(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const W=new Map;function J(e){E(e instanceof Function,"Expected a class definition");let t=W.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,W.set(e,t),t)}
/**
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
 */class K{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const X=K;
/**
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
 */function Y(e,t,r){return`firebase:${e}:${t}:${r}`}class Q{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Q(J(X),e,r);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=n[0]||J(X);const s=Y(r,e.config.apiKey,e.name);let o=null;for(const r of t)try{const t=await r._get(s);if(t){const n=q._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}const a=n.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Q(i,e,r)):new Q(i,e,r)}constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:i}=this.auth;this.fullUserKey=Y(this.userKey,n.apiKey,i),this.fullPersistenceKey=Y("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ne(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(se(t))return"Blackberry";if(oe(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||re(t))&&!t.includes("edge/"))return"Chrome";if(ie(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function ee(e=(0,n.getUA)()){return/firefox\//i.test(e)}function te(e=(0,n.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function re(e=(0,n.getUA)()){return/crios\//i.test(e)}function ne(e=(0,n.getUA)()){return/iemobile/i.test(e)}function ie(e=(0,n.getUA)()){return/android/i.test(e)}function se(e=(0,n.getUA)()){return/blackberry/i.test(e)}function oe(e=(0,n.getUA)()){return/webos/i.test(e)}function ae(e=(0,n.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function le(e=(0,n.getUA)()){return ae(e)||ie(e)||oe(e)||se(e)||/windows phone/i.test(e)||ne(e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function ce(e,t=[]){let r;switch(e){case"Browser":r=Z((0,n.getUA)());break;case"Worker":r=`${Z((0,n.getUA)())}-${e}`;break;default:r=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function ue(e,t){return R(e,"GET","/v2/recaptchaConfig",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function de(e){return void 0!==e&&void 0!==e.enterprise}class he{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function fe(e){return new Promise(((t,r)=>{const n=document.createElement("script");var i,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=g("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(n)}))}function pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}class ge{async verify(e="verify",t=!1){function r(t,r,n){const i=window.grecaptcha;de(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{r(e)})).catch((()=>{r("NO_RECAPTCHA")}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,n)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,r)=>{ue(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const r=new he(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{r(e)}))}))})(this.auth).then((i=>{if(!t&&de(window.grecaptcha))r(i,e,n);else{if("undefined"==typeof window)return void n(new Error("RecaptchaVerifier is only supported in browser"));fe("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{r(i,e,n)})).catch((e=>{n(e)}))}})).catch((e=>{n(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=we(e)}}async function me(e,t,r,n=!1){const i=new ge(e);let s;try{s=await i.verify(r)}catch(e){s=await i.verify(r,!0)}const o=Object.assign({},t);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
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
 */class ve{pushCallback(e,t){const r=t=>new Promise(((r,n)=>{try{r(e(t))}catch(e){n(e)}}));r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ye{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=J(t)),this._initializationPromise=this.queue((async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==s||!(null==o?void 0:o.user)||(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await V(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,n.getModularInstance)(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(J(e))}))}async initializeRecaptchaConfig(){const e=await ue(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new he(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new ge(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,n.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&J(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[J(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return w(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){h.logLevel<=a.LogLevel.WARN&&h.warn(`Auth (${i.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new be(this),this.idTokenSubscription=new be(this),this.beforeStateQueue=new ve(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function we(e){return(0,n.getModularInstance)(e)}class be{get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,n.createSubscribe)((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ee(e,t,r){const n=we(e);w(n._canInitEmulator,n,"emulator-config-failed"),w(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const i=!!(null==r?void 0:r.disableWarnings),s=Se(t),{host:o,port:a}=function(e){const t=Se(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const e=i[1];return{host:e,port:Te(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Te(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */()}function Se(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Te(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class _e{toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ie(e,t){return R(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
async function ke(e,t){return L(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Ae extends _e{static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ae(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await me(e,r,"signInWithPassword");return ke(e,t)}return ke(e,r).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await me(e,r,"signInWithPassword");return ke(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ie(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return L(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ce(e,t){return L(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Oe extends _e{static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,o.__rest)(t,["providerId","signInMethod"]);if(!r||!n)return null;const s=new Oe(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ce(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ce(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ce(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,n.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const xe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Re extends _e{static _fromVerification(e,t){return new Re({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Re({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const r=await L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(r.temporaryProof)throw D(e,"account-exists-with-different-credential",r);return r}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return L(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),xe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new Re({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Pe{static parseLink(e){const t=function(e){const t=(0,n.querystringDecode)((0,n.extractQuerystring)(e)).link,r=t?(0,n.querystringDecode)((0,n.extractQuerystring)(t)).deep_link_id:null,i=(0,n.querystringDecode)((0,n.extractQuerystring)(e)).deep_link_id;return(i?(0,n.querystringDecode)((0,n.extractQuerystring)(i)).link:null)||i||r||t||e}(e);try{return new Pe(t)}catch(e){return null}}constructor(e){var t,r,i,s,o,a;const l=(0,n.querystringDecode)((0,n.extractQuerystring)(e)),c=null!==(t=l.apiKey)&&void 0!==t?t:null,u=null!==(r=l.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=l.mode)&&void 0!==i?i:null);w(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Le{static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Pe.parseLink(t);return w(r,"argument-error"),Ae._fromEmailAndCode(e,r.code,r.tenantId)}constructor(){this.providerId=Le.PROVIDER_ID}}Le.PROVIDER_ID="password",Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Ne{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
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
 */class Me extends Ne{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class De extends Me{static credential(e){return Oe._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com",De.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Ue extends Me{static credential(e,t){return Oe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ue.credential(t,r)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ue.GOOGLE_SIGN_IN_METHOD="google.com",Ue.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Be extends Me{static credential(e){return Oe._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Be.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Be.GITHUB_SIGN_IN_METHOD="github.com",Be.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Fe extends Me{static credential(e,t){return Oe._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Fe.credential(t,r)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
async function je(e,t){return L(e,"POST","/v1/accounts:signUp",x(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */Fe.TWITTER_SIGN_IN_METHOD="twitter.com",Fe.PROVIDER_ID="twitter.com";class ze{static async _fromIdTokenResponse(e,t,r,n=!1){const i=await q._fromIdTokenResponse(e,r,n),s=He(r);return new ze({user:i,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const n=He(r);return new ze({user:e,providerId:n,_tokenResponse:r,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function He(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Ve extends n.FirebaseError{static _fromErrorAndOperation(e,t,r,n){return new Ve(e,t,r,n)}constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,Ve.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}}function $e(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw Ve._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ge(e,t,r=!1){const n=await j(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return ze._forOperation(e,"link",n)}
/**
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
 */
async function qe(e,t,r=!1){const{auth:n}=e,i="reauthenticate";try{const s=await j(e,$e(n,i,t,e),r);w(s.idToken,n,"internal-error");const o=F(s.idToken);w(o,n,"internal-error");const{sub:a}=o;return w(e.uid===a,n,"user-mismatch"),ze._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(n,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function We(e,t,r=!1){const n="signIn",i=await $e(e,n,t),s=await ze._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function Je(e,t){return We(we(e),t)}async function Ke(e,t,r){var n;const i=we(e),s={returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(n=i._getRecaptchaConfig())||void 0===n?void 0:n.emailPasswordEnabled){const e=await me(i,s,"signUpPassword");o=je(i,e)}else o=je(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await me(i,s,"signUpPassword");return je(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await ze._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Xe(e,t,r){return Je((0,n.getModularInstance)(e),Le.credential(t,r))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */new WeakMap;const Ye="__sak";
/**
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
 */class Qe{_isAvailable(){try{return this.storage?(this.storage.setItem(Ye,"1"),this.storage.removeItem(Ye),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ze extends Qe{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},s=this.storage.getItem(r);(0,n.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,n.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=le(),this._shouldAllowMigration=!0}}Ze.type="LOCAL";const et=Ze;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class tt extends Qe{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}tt.type="SESSION";const rt=tt;
/**
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
 */
/**
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
 */
class nt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new nt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:n,data:i}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function it(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}
/**
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
 */nt.receivers=[];class st{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=it("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),r);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ot(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function at(){return void 0!==ot().WorkerGlobalScope&&"function"==typeof ot().importScripts}
/**
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
 */
const lt="firebaseLocalStorageDb",ct="firebaseLocalStorage",ut="fbase_key";class dt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ht(e,t){return e.transaction([ct],t?"readwrite":"readonly").objectStore(ct)}function ft(){const e=indexedDB.open(lt,1);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ct,{keyPath:ut})}catch(e){r(e)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains(ct)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(lt);return new dt(e).toPromise()}(),t(await ft()))}))}))}async function pt(e,t,r){const n=ht(e,!0).put({[ut]:t,value:r});return new dt(n).toPromise()}function gt(e,t){const r=ht(e,!0).delete(t);return new dt(r).toPromise()}class mt{async _openDb(){return this.db||(this.db=await ft()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return at()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nt._getInstance(at()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new st(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ft();return await pt(e,Ye,"1"),await gt(e,Ye),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>pt(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const r=ht(e,!1).get(t),n=await new dt(r).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>gt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ht(e,!1).getAll();return new dt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}mt.type="LOCAL";const vt=mt;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
pe("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const yt="recaptcha";async function wt(e,t,r){var n;const i=await r.verify();try{let s;if(w("string"==typeof i,e,"argument-error"),w(r.type===yt,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){w("enroll"===t.type,e,"internal-error");const r=await
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return r.phoneSessionInfo.sessionInfo}{w("signin"===t.type,e,"internal-error");const r=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;w(r,e,"missing-multi-factor-info");const o=await function(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{r._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class bt{verifyPhoneNumber(e,t){return wt(this.auth,e,(0,n.getModularInstance)(t))}static credential(e,t){return Re._fromVerification(e,t)}static credentialFromResult(e){const t=e;return bt.credentialFromTaggedObject(t)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Re._fromTokenResponse(t,r):null}constructor(e){this.providerId=bt.PROVIDER_ID,this.auth=we(e)}}
/**
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
 */
function Et(e,t){return t?J(t):(w(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */bt.PROVIDER_ID="phone",bt.PHONE_SIGN_IN_METHOD="phone";class St extends _e{_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ce(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Tt(e){return We(e.auth,new St(e),e.bypassAuthState)}function _t(e){const{auth:t,user:r}=e;return w(r,t,"internal-error"),qe(r,new St(e),e.bypassAuthState)}async function It(e){const{auth:t,user:r}=e;return w(r,t,"internal-error"),Ge(r,new St(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kt{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tt;case"linkViaPopup":case"linkViaRedirect":return It;case"reauthViaPopup":case"reauthViaRedirect":return _t;default:p(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const At=new I(2e3,1e4);async function Ct(e,t,r){const n=we(e);v(e,t,Ne);const i=Et(n,r);return new Ot(n,"signInViaPopup",t,i).executeNotNull()}class Ot extends kt{async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=it();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,At.get())};e()}constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}}Ot.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const xt=new Map;class Rt extends kt{async execute(){let e=xt.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=Nt(t),n=Lt(e);if(!await n._isAvailable())return!1;const i="true"===await n._get(r);return await n._remove(r),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xt.set(this.auth._key(),e)}return this.bypassAuthState||xt.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}}function Pt(e,t){xt.set(e._key(),t)}function Lt(e){return J(e._redirectPersistence)}function Nt(e){return Y("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Mt(e,t,r=!1){const n=we(e),i=Et(n,t),s=new Rt(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}class Dt{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bt(e)){const n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ut(e))}saveEventToCache(e){this.cachedEventUids.add(Ut(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ut(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Bt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const Ft=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jt=/^https?/;async function zt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return R(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ht(e))return}catch(e){}p(e,"unauthorized-domain")}function Ht(e){const t=S(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!jt.test(r))return!1;if(Ft.test(e))return n===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Vt=new I(3e4,6e4);function $t(){const e=ot().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Gt=null;function qt(e){return Gt=Gt||function(e){return new Promise(((t,r)=>{var n,i,s;function o(){$t(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$t(),r(g(e,"network-request-failed"))},timeout:Vt.get()})}if(null===(i=null===(n=ot().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ot().gapi)||void 0===s?void 0:s.load)){const t=pe("iframefcb");return ot()[t]=()=>{gapi.load?o():r(g(e,"network-request-failed"))},fe(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>r(e)))}o()}})).catch((e=>{throw Gt=null,e}))}(e),Gt}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Wt=new I(5e3,15e3),Jt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xt(e){const t=e.config;w(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?k(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=Kt.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${r}?${(0,n.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const Yt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Qt{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Zt(e,t,r,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Yt),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,n.getUA)().toLowerCase();r&&(l=re(u)?"_blank":r),ee(u)&&(t=t||"http://localhost",c.scrollbars="yes");const d=Object.entries(c).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(function(e=(0,n.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==l)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
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
 */(t||"",l),new Qt(null);const h=window.open(t||"",l,d);w(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Qt(h)}const er="emulator/auth/handler",tr=encodeURIComponent("fac");async function rr(e,t,r,s,o,a){w(e.config.authDomain,e,"auth-domain-config-required"),w(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Ne){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,n.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Me){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const e of Object.keys(c))void 0===c[e]&&delete c[e];const u=await e._getAppCheckToken(),d=u?`#${tr}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?k(e,er):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(e)}?${(0,n.querystring)(c).slice(1)}${d}`}const nr="webStorageSupport";const ir=class{async _openPopup(e,t,r,n){var i;E(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Zt(e,await rr(e,t,r,S(),n),it())}async _openRedirect(e,t,r,n){await this._originValidation(e);return function(e){ot().location.href=e}(await rr(e,t,r,S(),n)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(E(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await async function(e){const t=await qt(e),r=ot().gapi;return w(r,e,"internal-error"),t.open({where:document.body,url:Xt(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jt,dontclear:!0},(t=>new Promise((async(r,n)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=ot().setTimeout((()=>{n(i)}),Wt.get());function o(){ot().clearTimeout(s),r(t)}t.ping(o).then(o,(()=>{n(i)}))}))))}(e),r=new Dt(e);return t.register("authEvent",(t=>{w(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nr,{type:nr},(r=>{var n;const i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return le()||te()||ae()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rt,this._completeRedirectFn=Mt,this._overrideRedirectResult=Pt}};var sr="@firebase/auth",or="0.23.1";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class ar{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
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
 */
const lr=(0,n.getExperimentalSetting)("authIdTokenMaxAge")||300;let cr=null;function ur(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const r=function(e,t){const r=(0,i._getProvider)(e,"auth");if(r.isInitialized()){const e=r.getImmediate(),i=r.getOptions();if((0,n.deepEqual)(i,null!=t?t:{}))return e;p(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:ir,persistence:[vt,et,rt]}),s=(0,n.getExperimentalSetting)("authTokenSyncURL");if(s){const e=(o=s,async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lr)return;const n=null==t?void 0:t.token;cr!==n&&(cr=n,await fetch(o,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,r){(0,n.getModularInstance)(e).beforeAuthStateChanged(t,r)}(r,e,(()=>e(r.currentUser))),function(e,t,r,i){(0,n.getModularInstance)(e).onIdTokenChanged(t,r,i)}(r,(t=>e(t)))}var o;const a=(0,n.getDefaultEmulatorHost)("auth");return a&&Ee(r,`http://${a}`),r}var dr;dr="Browser",(0,i._registerComponent)(new(0,l.Component)("auth",((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=r.options;w(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),w(!(null==o?void 0:o.includes(":")),"argument-error",{appName:r.name});const a={apiKey:s,authDomain:o,clientPlatform:dr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ce(dr)},l=new ye(r,n,i,a);return function(e,t){const r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(J);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,l.Component)("auth-internal",(e=>{const t=we(e.getProvider("auth").getImmediate());return new ar(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(sr,or,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(dr)),(0,i.registerVersion)(sr,or,"esm2017")})),s.register("l73V3",(function(t,r){e(t.exports,"__rest",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create})),s.register("fPYYr",(function(t,r){e(t.exports,"booksId",(function(){return i})),e(t.exports,"axiosApiBooks",(function(){return o})),s("2shzp");var n=s("bRlFp");async function i(e){return(await n.default.get(`https://books-backend.p.goit.global/books/${e}`)).data}const o=new class{async fetchApi(e){try{return(await n.default.get(`${this.baseUrl}${e}`)).data}catch(e){console.error(e)}}async fetchCategoryList(){return this.fetchApi(this.categoryList)}async fetchTopBooks(){return this.fetchApi(this.topBooks)}async fetchSelectedCategory(e){return this.fetchApi(`${this.selectedCategory}${e}`)}async fetchBookInfo(e){return this.fetchApi(`${this.bookInfo}${e}`)}constructor(){this.baseUrl="https://books-backend.p.goit.global",this.categoryList="/books/category-list",this.topBooks="/books/top-books",this.selectedCategory="/books/category?category=",this.bookInfo="/books/"}}})),s("kyEFX").register(JSON.parse('{"f4hvY":"listshop.58243c99.js","lox3J":"supp1@1x.87eedf6d.webp","fyIHp":"supp1@2x.08373199.webp","enl9T":"supp2@1x.e649a5a7.webp","heSKO":"supp2@2x.0191a10c.webp","1Iyoo":"supp3@1x.a9c19ba2.webp","82Obt":"supp3@2x.8893ca67.webp","g8PAf":"supp4@1x.fed82017.webp","6LgBb":"supp4@2x.2412e2c7.webp","eakvq":"supp5@1x.483b136c.webp","fhgIZ":"supp5@2x.a891ff45.webp","kUzZG":"supp6@1x.5bdb50b2.webp","l19XY":"supp6@2x.9a915feb.webp","lex4J":"supp7@1x.6822f1cd.webp","9inf0":"supp7@2x.9ef72e80.webp","7bdTy":"supp8@1x.135cbebc.webp","8KmUg":"supp8@2x.ad3297d8.webp","WRCbz":"supp9@1x.a3d23deb.webp","gAhZd":"supp9@2x.80d6b25d.webp","8OQ7p":"icons.4c16bf73.svg","5UbS1":"index.3cb9b8a9.css"}'));var o;o=new URL(s("kyEFX").resolve("lox3J"),import.meta.url).toString();var a;a=new URL(s("kyEFX").resolve("fyIHp"),import.meta.url).toString();var l;l=new URL(s("kyEFX").resolve("enl9T"),import.meta.url).toString();var c;c=new URL(s("kyEFX").resolve("heSKO"),import.meta.url).toString();var u;u=new URL(s("kyEFX").resolve("1Iyoo"),import.meta.url).toString();var d;d=new URL(s("kyEFX").resolve("82Obt"),import.meta.url).toString();var h;h=new URL(s("kyEFX").resolve("g8PAf"),import.meta.url).toString();var f;f=new URL(s("kyEFX").resolve("6LgBb"),import.meta.url).toString();var p;p=new URL(s("kyEFX").resolve("eakvq"),import.meta.url).toString();var g;g=new URL(s("kyEFX").resolve("fhgIZ"),import.meta.url).toString();var m;m=new URL(s("kyEFX").resolve("kUzZG"),import.meta.url).toString();var v;v=new URL(s("kyEFX").resolve("l19XY"),import.meta.url).toString();var y;y=new URL(s("kyEFX").resolve("lex4J"),import.meta.url).toString();var w;w=new URL(s("kyEFX").resolve("9inf0"),import.meta.url).toString();var b;b=new URL(s("kyEFX").resolve("7bdTy"),import.meta.url).toString();var E;E=new URL(s("kyEFX").resolve("8KmUg"),import.meta.url).toString();var S;S=new URL(s("kyEFX").resolve("WRCbz"),import.meta.url).toString();var T;T=new URL(s("kyEFX").resolve("gAhZd"),import.meta.url).toString();const _=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:{normal:new URL(o),retina:new URL(a)}},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:{normal:new URL(l),retina:new URL(c)}},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:{normal:new URL(u),retina:new URL(d)}},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:{normal:new URL(h),retina:new URL(f)}},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:{normal:new URL(p),retina:new URL(g)}},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:{normal:new URL(m),retina:new URL(v)}},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:{normal:new URL(y),retina:new URL(w)}},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:{normal:new URL(b),retina:new URL(E)}},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:{normal:new URL(S),retina:new URL(T)}}];function I(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function k(e={},t={}){Object.keys(t).forEach((r=>{void 0===e[r]?e[r]=t[r]:I(t[r])&&I(e[r])&&Object.keys(t[r]).length>0&&k(e[r],t[r])}))}const A={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function C(){const e="undefined"!=typeof document?document:{};return k(e,A),e}const O={document:A,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function x(){const e="undefined"!=typeof window?window:{};return k(e,O),e}function R(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function P(e,t=0){return setTimeout(e,t)}function L(){return Date.now()}function N(e,t="x"){const r=x();let n,i,s;const o=function(e){const t=x();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}(e);return r.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new r.WebKitCSSMatrix("none"===i?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),"x"===t&&(i=r.WebKitCSSMatrix?s.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(i=r.WebKitCSSMatrix?s.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),i||0}function M(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function D(...e){const t=Object(e[0]),r=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const s=e[i];if(null!=s&&(n=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?n instanceof HTMLElement:n&&(1===n.nodeType||11===n.nodeType)))){const e=Object.keys(Object(s)).filter((e=>r.indexOf(e)<0));for(let r=0,n=e.length;r<n;r+=1){const n=e[r],i=Object.getOwnPropertyDescriptor(s,n);void 0!==i&&i.enumerable&&(M(t[n])&&M(s[n])?s[n].__swiper__?t[n]=s[n]:D(t[n],s[n]):!M(t[n])&&M(s[n])?(t[n]={},s[n].__swiper__?t[n]=s[n]:D(t[n],s[n])):t[n]=s[n])}}}var n;return t}function U(e,t,r){e.style.setProperty(t,r)}function B({swiper:e,targetPosition:t,side:r}){const n=x(),i=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{s=(new Date).getTime(),null===o&&(o=s);const l=Math.max(Math.min((s-o)/a,1),0),d=.5-Math.cos(l*Math.PI)/2;let h=i+d*(t-i);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[r]:h}),c(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:h})})),void n.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=n.requestAnimationFrame(u)};u()}function F(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function j(e,t=[]){const r=document.createElement(e);return r.classList.add(...Array.isArray(t)?t:[t]),r}function z(e,t){const r=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function H(e,t){const r=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function V(e,t){return x().getComputedStyle(e,null).getPropertyValue(t)}function $(e){let t,r=e;if(r){for(t=0;null!==(r=r.previousSibling);)1===r.nodeType&&(t+=1);return t}}function G(e,t){const r=[];let n=e.parentElement;for(;n;)t?n.matches(t)&&r.push(n):r.push(n),n=n.parentElement;return r}function q(e,t,r){const n=x();return r?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let W,J,K;function X(){return W||(W=function(){const e=x(),t=C();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),W}function Y(e={}){return J||(J=function({userAgent:e}={}){const t=X(),r=x(),n=r.navigator.platform,i=e||r.navigator.userAgent,s={ios:!1,android:!1},o=r.screen.width,a=r.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===n;let f="MacIntel"===n;return!c&&f&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!h&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}(e)),J}function Q(){return K||(K=function(){const e=x();let t=!1;function r(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(r()){const r=String(e.navigator.userAgent);if(r.includes("Version/")){const[e,n]=r.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&n<2}}return{isSafari:t||r(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),K}const Z=(e,t)=>{if(!e||e.destroyed||!e.params)return;const r=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(r){const t=r.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},ee=(e,t)=>{if(!e.slides[t])return;const r=e.slides[t].querySelector('[loading="lazy"]');r&&r.removeAttribute("loading")},te=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const r=e.slides.length;if(!r||!t||t<0)return;t=Math.min(t,r);const n="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex,s=i+n-1;if(e.params.rewind)for(let n=i-t;n<=s+t;n+=1){const t=(n%r+r)%r;t!==i&&t>s&&ee(e,t)}else for(let n=Math.max(s-t,0);n<=Math.min(s+t,r-1);n+=1)n!==i&&n>s&&ee(e,n)};function re({swiper:e,runCallbacks:t,direction:r,step:n}){const{activeIndex:i,previousIndex:s}=e;let o=r;if(o||(o=i>s?"next":i<s?"prev":"reset"),e.emit(`transition${n}`),t&&i!==s){if("reset"===o)return void e.emit(`slideResetTransition${n}`);e.emit(`slideChangeTransition${n}`),"next"===o?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}function ne(e){const t=this,r=C(),n=x(),i=t.touchEventsData;i.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&""!==s.noSwipingClass,d=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,f=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(f?function(e,t=this){return function t(r){if(!r||r===C()||r===x())return null;r.assignedSlot&&(r=r.assignedSlot);const n=r.closest(e);return n||r.getRootNode?n||t(r.getRootNode().host):null}(t)}(h,c):c.closest(h)))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const p=o.currentX,g=o.currentY,m=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(m&&(p<=v||p>=n.innerWidth-v)){if("prevent"!==m)return;e.preventDefault()}Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=g,i.touchStartTime=L(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;c.matches(i.focusableElements)&&(y=!1,"SELECT"===c.nodeName&&(i.isTouched=!1)),r.activeElement&&r.activeElement.matches(i.focusableElements)&&r.activeElement!==c&&r.activeElement.blur();const w=y&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!w||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function ie(e){const t=C(),r=this,n=r.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=r;if(!a)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched)return void(n.startMoving&&n.isScrolling&&r.emit("touchMoveOpposite",l));const c=n.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(n.evCache[c]=l);const u=n.evCache.length>1?n.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper)return s.startX=d,void(s.startY=h);if(!r.allowTouchMove)return l.target.matches(n.focusableElements)||(r.allowClick=!1),void(n.isTouched&&(Object.assign(s,{startX:d,startY:h,prevX:r.touches.currentX,prevY:r.touches.currentY,currentX:d,currentY:h}),n.touchStartTime=L()));if(i.touchReleaseOnEdges&&!i.loop)if(r.isVertical()){if(h<s.startY&&r.translate<=r.maxTranslate()||h>s.startY&&r.translate>=r.minTranslate())return n.isTouched=!1,void(n.isMoved=!1)}else if(d<s.startX&&r.translate<=r.maxTranslate()||d>s.startX&&r.translate>=r.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements))return n.isMoved=!0,void(r.allowClick=!1);if(n.allowTouchCallbacks&&r.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=h;const f=s.currentX-s.startX,p=s.currentY-s.startY;if(r.params.threshold&&Math.sqrt(f**2+p**2)<r.params.threshold)return;if(void 0===n.isScrolling){let e;r.isHorizontal()&&s.currentY===s.startY||r.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:f*f+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(f))/Math.PI,n.isScrolling=r.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(n.isScrolling&&r.emit("touchMoveOpposite",l),void 0===n.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(n.startMoving=!0)),n.isScrolling||r.zoom&&r.params.zoom&&r.params.zoom.enabled&&n.evCache.length>1)return void(n.isTouched=!1);if(!n.startMoving)return;r.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=r.isHorizontal()?f:p,m=r.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),s.diff=g,g*=i.touchRatio,o&&(g=-g,m=-m);const v=r.touchesDirection;r.swipeDirection=g>0?"prev":"next",r.touchesDirection=m>0?"prev":"next";const y=r.params.loop&&!i.cssMode;if(!n.isMoved){if(y&&r.loopFix({direction:r.swipeDirection}),n.startTranslate=r.getTranslate(),r.setTransition(0),r.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});r.wrapperEl.dispatchEvent(e)}n.allowMomentumBounce=!1,!i.grabCursor||!0!==r.allowSlideNext&&!0!==r.allowSlidePrev||r.setGrabCursor(!0),r.emit("sliderFirstMove",l)}let w;n.isMoved&&v!==r.touchesDirection&&y&&Math.abs(g)>=1&&(r.loopFix({direction:r.swipeDirection,setTranslate:!0}),w=!0),r.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=g+n.startTranslate;let b=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),g>0?(y&&!w&&n.currentTranslate>(i.centeredSlides?r.minTranslate()-r.size/2:r.minTranslate())&&r.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>r.minTranslate()&&(b=!1,i.resistance&&(n.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+n.startTranslate+g)**E))):g<0&&(y&&!w&&n.currentTranslate<(i.centeredSlides?r.maxTranslate()+r.size/2:r.maxTranslate())&&r.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:r.slides.length-("auto"===i.slidesPerView?r.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),n.currentTranslate<r.maxTranslate()&&(b=!1,i.resistance&&(n.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-n.startTranslate-g)**E))),b&&(l.preventedByNestedSwiper=!0),!r.allowSlideNext&&"next"===r.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!r.allowSlidePrev&&"prev"===r.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),r.allowSlidePrev||r.allowSlideNext||(n.currentTranslate=n.startTranslate),i.threshold>0){if(!(Math.abs(g)>i.threshold||n.allowThresholdMove))return void(n.currentTranslate=n.startTranslate);if(!n.allowThresholdMove)return n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,void(s.diff=r.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&r.freeMode||i.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),r.params.freeMode&&i.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(n.currentTranslate),r.setTranslate(n.currentTranslate))}function se(e){const t=this,r=t.touchEventsData,n=r.evCache.findIndex((t=>t.pointerId===e.pointerId));if(n>=0&&r.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),r.allowTouchCallbacks&&t.emit("touchEnd",c),r.allowTouchCallbacks=!1,!r.isTouched)return r.isMoved&&i.grabCursor&&t.setGrabCursor(!1),r.isMoved=!1,void(r.startMoving=!1);i.grabCursor&&r.isMoved&&r.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=L(),d=u-r.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),d<300&&u-r.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(r.lastClickTime=L(),P((()=>{t.destroyed||(t.allowClick=!0)})),!r.isTouched||!r.isMoved||!t.swipeDirection||0===s.diff||r.currentTranslate===r.startTranslate)return r.isTouched=!1,r.isMoved=!1,void(r.startMoving=!1);let h;if(r.isTouched=!1,r.isMoved=!1,r.startMoving=!1,h=i.followFinger?o?t.translate:-t.translate:-r.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let f=0,p=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==a[e+t]?h>=a[e]&&h<a[e+t]&&(f=e,p=a[e+t]-a[e]):h>=a[e]&&(f=e,p=a[a.length-1]-a[a.length-2])}let g=null,m=null;i.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const v=(h-a[f])/p,y=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?g:f+y):t.slideTo(f)),"prev"===t.swipeDirection&&(v>1-i.longSwipesRatio?t.slideTo(f+y):null!==m&&v<0&&Math.abs(v)>i.longSwipesRatio?t.slideTo(m):t.slideTo(f))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(f+y):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==g?g:f+y),"prev"===t.swipeDirection&&t.slideTo(null!==m?m:f))}}function oe(){const e=this,{params:t,el:r}=e;if(r&&0===r.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=n,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function ae(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function le(){const e=this,{wrapperEl:t,rtlTranslate:r,enabled:n}=e;if(!n)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();i=0===s?0:(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(r?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ce(e){Z(this,e.target),this.update()}let ue=!1;function de(){}const he=(e,t)=>{const r=C(),{params:n,el:i,wrapperEl:s,device:o}=e,a=!!n.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;i[l]("pointerdown",e.onTouchStart,{passive:!1}),r[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),r[l]("pointerup",e.onTouchEnd,{passive:!0}),r[l]("pointercancel",e.onTouchEnd,{passive:!0}),r[l]("pointerout",e.onTouchEnd,{passive:!0}),r[l]("pointerleave",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&i[l]("click",e.onClick,!0),n.cssMode&&s[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",oe,!0):e[c]("observerUpdate",oe,!0),i[l]("load",e.onLoad,{capture:!0})};const fe=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var pe={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ge(e,t){return function(r={}){const n=Object.keys(r)[0],i=r[n];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(n)>=0&&!0===e[n]&&(e[n]={auto:!0}),n in e&&"enabled"in i?(!0===e[n]&&(e[n]={enabled:!0}),"object"!=typeof e[n]||"enabled"in e[n]||(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),D(t,r)):D(t,r)):D(t,r)}}const me={eventsEmitter:{on(e,t,r){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;const i=r?"unshift":"push";return e.split(" ").forEach((e=>{n.eventsListeners[e]||(n.eventsListeners[e]=[]),n.eventsListeners[e][i](t)})),n},once(e,t,r){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;function i(...r){n.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(n,r)}return i.__emitterProxy=t,n.on(e,i,r)},onAny(e,t){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof e)return r;const n=t?"unshift":"push";return r.eventsAnyListeners.indexOf(e)<0&&r.eventsAnyListeners[n](e),r},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const r=t.eventsAnyListeners.indexOf(e);return r>=0&&t.eventsAnyListeners.splice(r,1),t},off(e,t){const r=this;return!r.eventsListeners||r.destroyed?r:r.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?r.eventsListeners[e]=[]:r.eventsListeners[e]&&r.eventsListeners[e].forEach(((n,i)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&r.eventsListeners[e].splice(i,1)}))})),r):r},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let r,n,i;"string"==typeof e[0]||Array.isArray(e[0])?(r=e[0],n=e.slice(1,e.length),i=t):(r=e[0].events,n=e[0].data,i=e[0].context||t),n.unshift(i);return(Array.isArray(r)?r:r.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...n])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,n)}))})),t}},update:{updateSize:function(){const e=this;let t,r;const n=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:n.clientWidth,r=void 0!==e.params.height&&null!==e.params.height?e.params.height:n.clientHeight,0===t&&e.isHorizontal()||0===r&&e.isVertical()||(t=t-parseInt(V(n,"padding-left")||0,10)-parseInt(V(n,"padding-right")||0,10),r=r-parseInt(V(n,"padding-top")||0,10)-parseInt(V(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Object.assign(e,{width:t,height:r,size:e.isHorizontal()?t:r}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function r(e,r){return parseFloat(e.getPropertyValue(t(r))||0)}const n=e.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&n.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,d=F(s,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:d.length;let f=[];const p=[],g=[];let m=n.slidesOffsetBefore;"function"==typeof m&&(m=n.slidesOffsetBefore.call(e));let v=n.slidesOffsetAfter;"function"==typeof v&&(v=n.slidesOffsetAfter.call(e));const y=e.snapGrid.length,w=e.slidesGrid.length;let b=n.spaceBetween,E=-m,S=0,T=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,d.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),n.centeredSlides&&n.cssMode&&(U(i,"--swiper-centered-offset-before",""),U(i,"--swiper-centered-offset-after",""));const _=n.grid&&n.grid.rows>1&&e.grid;let I;_&&e.grid.initSlides(h);const k="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter((e=>void 0!==n.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<h;i+=1){let s;if(I=0,d[i]&&(s=d[i]),_&&e.grid.updateSlide(i,s,h,t),!d[i]||"none"!==V(s,"display")){if("auto"===n.slidesPerView){k&&(d[i].style[t("width")]="");const o=getComputedStyle(s),a=s.style.transform,l=s.style.webkitTransform;if(a&&(s.style.transform="none"),l&&(s.style.webkitTransform="none"),n.roundLengths)I=e.isHorizontal()?q(s,"width",!0):q(s,"height",!0);else{const e=r(o,"width"),t=r(o,"padding-left"),n=r(o,"padding-right"),i=r(o,"margin-left"),a=r(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+i+a;else{const{clientWidth:r,offsetWidth:o}=s;I=e+t+n+i+a+(o-r)}}a&&(s.style.transform=a),l&&(s.style.webkitTransform=l),n.roundLengths&&(I=Math.floor(I))}else I=(o-(n.slidesPerView-1)*b)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),d[i]&&(d[i].style[t("width")]=`${I}px`);d[i]&&(d[i].swiperSlideSize=I),g.push(I),n.centeredSlides?(E=E+I/2+S/2+b,0===S&&0!==i&&(E=E-o/2-b),0===i&&(E=E-o/2-b),Math.abs(E)<.001&&(E=0),n.roundLengths&&(E=Math.floor(E)),T%n.slidesPerGroup==0&&f.push(E),p.push(E)):(n.roundLengths&&(E=Math.floor(E)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&f.push(E),p.push(E),E=E+I+b),e.virtualSize+=I+b,S=I,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+v,a&&l&&("slide"===n.effect||"coverflow"===n.effect)&&(i.style.width=`${e.virtualSize+b}px`),n.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+b}px`),_&&e.grid.updateWrapperSize(I,f,t),!n.centeredSlides){const t=[];for(let r=0;r<f.length;r+=1){let i=f[r];n.roundLengths&&(i=Math.floor(i)),f[r]<=e.virtualSize-o&&t.push(i)}f=t,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(c&&n.loop){const t=g[0]+b;if(n.slidesPerGroup>1){const r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)f.push(f[f.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)1===n.slidesPerGroup&&f.push(f[f.length-1]+t),p.push(p[p.length-1]+t),e.virtualSize+=t}if(0===f.length&&(f=[0]),0!==b){const r=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(((e,t)=>!(n.cssMode&&!n.loop)||t!==d.length-1)).forEach((e=>{e.style[r]=`${b}px`}))}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;g.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-o;f=f.map((e=>e<0?-m:e>t?t+v:e))}if(n.centerInsufficientSlides){let e=0;if(g.forEach((t=>{e+=t+(b||0)})),e-=b,e<o){const t=(o-e)/2;f.forEach(((e,r)=>{f[r]=e-t})),p.forEach(((e,r)=>{p[r]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:p,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){U(i,"--swiper-centered-offset-before",-f[0]+"px"),U(i,"--swiper-centered-offset-after",e.size/2-g[g.length-1]/2+"px");const t=-e.snapGrid[0],r=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+r))}if(h!==u&&e.emit("slidesLengthChange"),f.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==w&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),!(c||n.cssMode||"slide"!==n.effect&&"fade"!==n.effect)){const t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);h<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,r=[],n=t.virtual&&t.params.virtual.enabled;let i,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>n?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{r.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!n)break;r.push(o(e))}else r.push(o(t.activeIndex));for(i=0;i<r.length;i+=1)if(void 0!==r[i]){const e=r[i].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,r=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-r-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,r=t.params,{slides:n,rtlTranslate:i,snapGrid:s}=t;if(0===n.length)return;void 0===n[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),n.forEach((e=>{e.classList.remove(r.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=r.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<n.length;e+=1){const l=n[e];let c=l.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(c-=n[0].swiperSlideOffset);const u=(o+(r.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=(o-s[0]+(r.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(o-c),f=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||f>1&&f<=t.size||h<=0&&f>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),n[e].classList.add(r.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}},updateProgress:function(e){const t=this;if(void 0===e){const r=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*r||0}const r=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===n)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/n;const r=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=r||i<=0,o=a||i>=1,r&&(i=0),a&&(i=1)}if(r.loop){const r=t.getSlideIndexByData(0),n=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[r],s=t.slidesGrid[n],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=i?(l-i)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:r,slidesEl:n,activeIndex:i}=e,s=e.virtual&&r.virtual.enabled,o=e=>F(n,`.${r.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(r.slideActiveClass,r.slideNextClass,r.slidePrevClass)})),s)if(r.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(r.slideActiveClass);let e=H(a,`.${r.slideClass}, swiper-slide`)[0];r.loop&&!e&&(e=t[0]),e&&e.classList.add(r.slideNextClass);let n=z(a,`.${r.slideClass}, swiper-slide`)[0];r.loop,n&&n.classList.add(r.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,r=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let r=e-t.virtual.slidesBefore;return r<0&&(r=t.virtual.slides.length+r),r>=t.virtual.slides.length&&(r-=t.virtual.slides.length),r};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:r}=e,n=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?n>=t[e]&&n<t[e+1]-(t[e+1]-t[e])/2?i=e:n>=t[e]&&n<t[e+1]&&(i=e+1):n>=t[e]&&(i=e);return r.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),n.indexOf(r)>=0)l=n.indexOf(r);else{const e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=n.length&&(l=n.length-1),c===s)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let d;d=t.virtual&&i.virtual.enabled&&i.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:c}),t.initialized&&te(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,r=t.params,n=e.closest(`.${r.slideClass}, swiper-slide`);let i,s=!1;if(n)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===n){s=!0,i=e;break}if(!n||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,r.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:r,translate:n,wrapperEl:i}=this;if(t.virtualTranslate)return r?-n:n;if(t.cssMode)return n;let s=N(i,e);return s+=this.cssOverflowAdjustment(),r&&(s=-s),s||0},setTranslate:function(e,t){const r=this,{rtlTranslate:n,params:i,wrapperEl:s,progress:o}=r;let a,l=0,c=0;r.isHorizontal()?l=n?-e:e:c=e,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?l:c,i.cssMode?s[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-l:-c:i.virtualTranslate||(r.isHorizontal()?l-=r.cssOverflowAdjustment():c-=r.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=r.maxTranslate()-r.minTranslate();a=0===u?0:(e-r.minTranslate())/u,a!==o&&r.updateProgress(e),r.emit("setTranslate",r.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,r=!0,n=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(u=n&&e>l?l:n&&e<c?c:e,s.updateProgress(u),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return B({swiper:s,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(u),r&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(u),r&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,r&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const r=this;r.params.cssMode||(r.wrapperEl.style.transitionDuration=`${e}ms`),r.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const r=this,{params:n}=r;n.cssMode||(n.autoHeight&&r.updateAutoHeight(),re({swiper:r,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const r=this,{params:n}=r;r.animating=!1,n.cssMode||(r.setTransition(0),re({swiper:r,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,r=!0,n,i){"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:p}=s;if(s.animating&&a.preventInteractionOnTransition||!p&&!n&&!i)return!1;const g=Math.min(s.params.slidesPerGroupSkip,o);let m=g+Math.floor((o-g)/s.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const v=-l[m];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),r=Math.floor(100*c[e]),n=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=r&&t<n-(n-r)/2?o=e:t>=r&&t<n&&(o=e+1):t>=r&&(o=e)}if(s.initialized&&o!==d){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(d||0)!==o)return!1}let y;if(o!==(u||0)&&r&&s.emit("beforeSlideChangeStart"),s.updateProgress(v),y=o>d?"next":o<d?"prev":"reset",h&&-v===s.translate||!h&&v===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(v),"reset"!==y&&(s.transitionStart(r,y),s.transitionEnd(r,y)),!1;if(a.cssMode){const e=s.isHorizontal(),r=h?v:-v;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=r}))):f[e?"scrollLeft":"scrollTop"]=r,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return B({swiper:s,targetPosition:r,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:r,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,n),s.transitionStart(r,y),0===t?s.transitionEnd(r,y):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(r,y))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,r=!0,n){if("string"==typeof e){e=parseInt(e,10)}const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s+=i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,t,r,n)},slideNext:function(e=this.params.speed,t=!0,r){const n=this,{enabled:i,params:s,animating:o}=n;if(!i)return n;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:a,c=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,e,t,r):n.slideTo(n.activeIndex+l,e,t,r)},slidePrev:function(e=this.params.speed,t=!0,r){const n=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=n;if(!l)return n;const u=n.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=d(a?n.translate:-n.translate),f=s.map((e=>d(e)));let p=s[f.indexOf(h)-1];if(void 0===p&&i.cssMode){let e;s.forEach(((t,r)=>{h>=t&&(e=r)})),void 0!==e&&(p=s[e>0?e-1:e])}let g=0;if(void 0!==p&&(g=o.indexOf(p),g<0&&(g=n.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(g=g-n.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),i.rewind&&n.isBeginning){const i=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(i,e,t,r)}return n.slideTo(g,e,t,r)},slideReset:function(e=this.params.speed,t=!0,r){return this.slideTo(this.activeIndex,e,t,r)},slideToClosest:function(e=this.params.speed,t=!0,r,n=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const e=i.snapGrid[a];l-e>(i.snapGrid[a+1]-e)*n&&(s+=i.params.slidesPerGroup)}else{const e=i.snapGrid[a-1];l-e<=(i.snapGrid[a]-e)*n&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,r)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:r}=e,n="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-n/2||s>e.slides.length-e.loopedSlides+n/2?(e.loopFix(),s=e.getSlideIndex(F(r,`${o}[data-swiper-slide-index="${i}"]`)[0]),P((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-n?(e.loopFix(),s=e.getSlideIndex(F(r,`${o}[data-swiper-slide-index="${i}"]`)[0]),P((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}},loop:{loopCreate:function(e){const t=this,{params:r,slidesEl:n}=t;if(!r.loop||t.virtual&&t.params.virtual.enabled)return;F(n,`.${r.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:n,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const f="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let p=h.loopedSlides||f;p%h.slidesPerGroup!=0&&(p+=h.slidesPerGroup-p%h.slidesPerGroup),a.loopedSlides=p;const g=[],m=[];let v=a.activeIndex;void 0===i?i=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):v=i;const y="next"===r||!r,w="prev"===r||!r;let b=0,E=0;if(i<p){b=Math.max(p-i,h.slidesPerGroup);for(let e=0;e<p-i;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(l.length-t-1)}}else if(i>a.slides.length-2*p){E=Math.max(i-(a.slides.length-2*p),h.slidesPerGroup);for(let e=0;e<E;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(t)}}if(w&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),y&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===h.slidesPerView&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(g.length>0&&w)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+b,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else n&&a.slideToLoop(e,0,!1,!0);else if(m.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-E]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-E,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:r,setTranslate:n,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;n[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),n.forEach((e=>{r.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const r="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),r.style.cursor="move",r.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=C(),{params:r}=e;e.onTouchStart=ne.bind(e),e.onTouchMove=ie.bind(e),e.onTouchEnd=se.bind(e),r.cssMode&&(e.onScroll=le.bind(e)),e.onClick=ae.bind(e),e.onLoad=ce.bind(e),ue||(t.addEventListener("touchstart",de),ue=!0),he(e,"on")},detachEvents:function(){he(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:r,params:n,el:i}=e,s=n.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,l=fe(e,n),c=fe(e,a),u=n.enabled;l&&!c?(i.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(i.classList.add(`${n.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===n.grid.fill)&&i.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const r=n[t]&&n[t].enabled,i=a[t]&&a[t].enabled;r&&!i&&e[t].disable(),!r&&i&&e[t].enable()}));const d=a.direction&&a.direction!==n.direction,h=n.loop&&(a.slidesPerView!==n.slidesPerView||d);d&&r&&e.changeDirection(),D(e.params,a);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),h&&r&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",r){if(!e||"container"===t&&!r)return;let n=!1;const i=x(),s="window"===t?i.innerHeight:r.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:s,value:a}=o[e];"window"===t?i.matchMedia(`(min-width: ${a}px)`).matches&&(n=s):a<=r.clientWidth&&(n=s)}return n||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:r}=e,{slidesOffsetBefore:n}=r;if(n){const t=e.slides.length-1,r=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*n;e.isLocked=e.size>r}else e.isLocked=1===e.snapGrid.length;!0===r.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===r.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:r,rtl:n,el:i,device:s}=e,o=function(e,t){const r=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((n=>{e[n]&&r.push(t+n)})):"string"==typeof e&&r.push(t+e)})),r}(["initialized",r.direction,{"free-mode":e.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:n},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&"column"===r.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},ve={};class ye{getSlideIndex(e){const{slidesEl:t,params:r}=this,n=$(F(t,`.${r.slideClass}, swiper-slide`)[0]);return $(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=F(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const n=r.minTranslate(),i=(r.maxTranslate()-n)*e+n;r.translateTo(i,void 0===t?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((r=>{const n=e.getSlideClasses(r);t.push({slideEl:r,classNames:n}),e.emit("_slideClass",r,n)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:r,slides:n,slidesGrid:i,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(r.centeredSlides){let e,t=n[a].swiperSlideSize;for(let r=a+1;r<n.length;r+=1)n[r]&&!e&&(t+=n[r].swiperSlideSize,l+=1,t>o&&(e=!0));for(let r=a-1;r>=0;r-=1)n[r]&&!e&&(t+=n[r].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<n.length;e+=1){(t?i[e]+s[e]-i[a]<o:i[e]-i[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){i[a]-i[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;function n(){const t=e.rtlTranslate?-1*e.translate:e.translate,r=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(r),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&Z(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)n(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||n()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const r=this,n=r.params.direction;return e||(e="horizontal"===n?"vertical":"horizontal"),e===n||"horizontal"!==e&&"vertical"!==e||(r.el.classList.remove(`${r.params.containerModifierClass}${n}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if("string"==typeof r&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.shadowEl&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(r&&r.shadowRoot&&r.shadowRoot.querySelector){return r.shadowRoot.querySelector(n())}return F(r,n())[0]})();return!i&&t.params.createElements&&(i=j("div",t.params.wrapperClass),r.append(i),F(r,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:r,wrapperEl:i,slidesEl:t.isElement?r:i,mounted:!0,rtl:"rtl"===r.dir.toLowerCase()||"rtl"===V(r,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===r.dir.toLowerCase()||"rtl"===V(r,"direction")),wrongRTL:"-webkit-box"===V(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?Z(t,e):e.addEventListener("load",(e=>{Z(t,e.target)}))})),te(t),t.initialized=!0,te(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const r=this,{params:n,el:i,wrapperEl:s,slides:o}=r;return void 0===r.params||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),n.loop&&r.loopDestroy(),t&&(r.removeClasses(),i.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),r.emit("destroy"),Object.keys(r.eventsListeners).forEach((e=>{r.off(e)})),!1!==e&&(r.el.swiper=null,R(r)),r.destroyed=!0),null}static extendDefaults(e){D(ve,e)}static get extendedDefaults(){return ve}static get defaults(){return pe}static installModule(e){ye.prototype.__modules__||(ye.prototype.__modules__=[]);const t=ye.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>ye.installModule(e))),ye):(ye.installModule(e),ye)}constructor(...e){let t,r;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?r=e[0]:[t,r]=e,r||(r={}),r=D({},r),t&&!r.el&&(r.el=t);const n=C();if(r.el&&"string"==typeof r.el&&n.querySelectorAll(r.el).length>1){const e=[];return n.querySelectorAll(r.el).forEach((t=>{const n=D({},r,{el:t});e.push(new ye(n))})),e}const i=this;i.__swiper__=!0,i.support=X(),i.device=Y({userAgent:r.userAgent}),i.browser=Q(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);const s={};i.modules.forEach((e=>{e({params:r,swiper:i,extendParams:ge(r,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}));const o=D({},pe,s);return i.params=D({},o,ve,r),i.originalParams=D({},i.params),i.passedParams=D({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach((e=>{i.on(e,i.params.on[e])})),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===i.params.direction,isVertical:()=>"vertical"===i.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}}Object.keys(me).forEach((e=>{Object.keys(me[e]).forEach((t=>{ye.prototype[t]=me[e][t]}))})),ye.use([function({swiper:e,on:t,emit:r}){const n=x();let i=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(r("beforeResize"),r("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&r("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==n.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{s=n.requestAnimationFrame((()=>{const{width:r,height:n}=e;let i=r,s=n;t.forEach((({contentBoxSize:t,contentRect:r,target:n})=>{n&&n!==e.el||(i=r?r.width:(t[0]||t).inlineSize,s=r?r.height:(t[0]||t).blockSize)})),i===r&&s===n||o()}))})),i.observe(e.el)):(n.addEventListener("resize",o),n.addEventListener("orientationchange",a))})),t("destroy",(()=>{s&&n.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:r,emit:n}){const i=[],s=x(),o=(t,r={})=>{const o=new(s.MutationObserver||s.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void n("observerUpdate",t[0]);const r=function(){n("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(r):s.setTimeout(r,0)}));o.observe(t,{attributes:void 0===r.attributes||r.attributes,childList:void 0===r.childList||r.childList,characterData:void 0===r.characterData||r.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=G(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),r("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);var we=ye;function be(e,t,r,n){return e.params.createElements&&Object.keys(n).forEach((i=>{if(!r[i]&&!0===r.auto){let s=F(e.el,`.${n[i]}`)[0];s||(s=j("div",n[i]),s.className=n[i],e.el.append(s)),r[i]=s,t[i]=s}})),r}const Ee=document.querySelector(".support-list"),Se=_.map((({title:e,url:t,img:r},n)=>{return`<li class="support-item swiper-slide">\n  <a class="support-link" href=${t} target="_blank" rel="nofollow noopener noreferrer">\n    <span class="support-number">${i=n+1,i.toString().padStart(2,"0")}</span>\n    <img\n      class="support-image"\n      srcset="${r.normal} 1x, ${r.retina} 2x"\n      src=${r.normal}\n      alt=${e}\n    />\n  </a>\n</li>`;var i})).join("");Ee.insertAdjacentHTML("beforeend",Se);new we(".swiper",{direction:"vertical",loop:!0,slidesPerView:6,rewind:!0,spaceBetween:20,effect:"slide",breakpoints:{480:{slidesPerView:4}},modules:[function({swiper:e,extendParams:t,on:r,emit:n}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const i=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function s(t){let r;return t&&"string"==typeof t&&e.isElement&&(r=e.el.shadowRoot.querySelector(t),r)?r:(t&&("string"==typeof t&&(r=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&r.length>1&&1===e.el.querySelectorAll(t).length&&(r=e.el.querySelector(t))),t&&!r?t:r)}function o(t,r){const n=e.params.navigation;(t=i(t)).forEach((t=>{t&&(t.classList[r?"add":"remove"](...n.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=r),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](n.lockClass))}))}function a(){const{nextEl:t,prevEl:r}=e.navigation;if(e.params.loop)return o(r,!1),void o(t,!1);o(r,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function c(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function u(){const t=e.params.navigation;if(e.params.navigation=be(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let r=s(t.nextEl),n=s(t.prevEl);Object.assign(e.navigation,{nextEl:r,prevEl:n}),r=i(r),n=i(n);const o=(r,n)=>{r&&r.addEventListener("click","next"===n?c:l),!e.enabled&&r&&r.classList.add(...t.lockClass.split(" "))};r.forEach((e=>o(e,"next"))),n.forEach((e=>o(e,"prev")))}function d(){let{nextEl:t,prevEl:r}=e.navigation;t=i(t),r=i(r);const n=(t,r)=>{t.removeEventListener("click","next"===r?c:l),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>n(e,"next"))),r.forEach((e=>n(e,"prev")))}r("init",(()=>{!1===e.params.navigation.enabled?h():(u(),a())})),r("toEdge fromEdge lock unlock",(()=>{a()})),r("destroy",(()=>{d()})),r("enable disable",(()=>{let{nextEl:t,prevEl:r}=e.navigation;t=i(t),r=i(r),[...t,...r].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),r("click",((t,r)=>{let{nextEl:s,prevEl:o}=e.navigation;s=i(s),o=i(o);const a=r.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!s.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;s.length?t=s[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),n(!0===t?"navigationShow":"navigationHide"),[...s,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:h,update:a,init:u,destroy:d})}],navigation:{prevEl:".swiper-btn-next"}});s("jJ57b");var Te=s("3bbpN");s("eyjy7");var _e,Ie=s("6slx9");_e=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();document.querySelector(".button-sing-auth-js").addEventListener("click",xe);const ke=new(0,Te.DataFirebase);async function Ae(){await ke.authGoogle(),Oe.innerHTML="",document.body.classList.remove("scroll-off"),Ue(),window.location.reload()}const Ce=ke.auth,Oe=document.querySelector(".modalWindow");function xe(){if(localStorage.getItem("tokenResponse"))return localStorage.removeItem("tokenResponse"),localStorage.removeItem("userAvatar"),localStorage.removeItem("email"),localStorage.removeItem("shopingList"),Ue(),void window.location.reload();Oe.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth"">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <button type="submit">Sign in</button>\n    <div class=\'button-sing-group\'>\n    <p class="button-sign-up">Sing up</p>\n    <p class=\'button-sing\'>Sing in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';const e=Oe.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-up"),r=e.querySelector(".button-google"),n=e.querySelector(".clousModalAuth");t.addEventListener("click",Pe),r.addEventListener("click",Ae),e.addEventListener("submit",Re),n.addEventListener("click",Le),Oe.classList.add("trans-modal"),document.body.classList.add("scroll-off")}async function Re(e){e.preventDefault();const t=e.currentTarget.elements.email.value,r=e.currentTarget.elements.password.value;try{const e=await(0,Ie.a9)(Ce,t,r);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),Oe.innerHTML="",document.body.classList.remove("scroll-off");const n=await ke.getRequest(t);if(n){const e=JSON.stringify(n);localStorage.setItem("shopingList",e)}else localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error("fire.data-error",e),alert(e.message)}Ue(),window.location.reload()}function Pe(){Oe.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <input\n      type="password"\n      name="passwordConfirmation"\n      placeholder="password"\n    />\n    <button type="submit">sign up</button>\n    <div class=\'button-sing-group\'>\n    <p class=\'button-sing\'>Sing up</p>\n    <p class="button-sign-in">Sing in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';const e=Oe.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-in"),r=e.querySelector(".button-google"),n=e.querySelector(".clousModalAuth");Oe.classList.add("trans-modal"),t.addEventListener("click",xe),e.addEventListener("submit",Ne),r.addEventListener("click",Ae),n.addEventListener("click",Le),document.body.classList.add("scroll-off")}function Le(){Oe.classList.remove("trans-modal"),Oe.innerHTML="",document.body.classList.remove("scroll-off")}async function Ne(e){e.preventDefault();const t=e.currentTarget.elements.email.value,r=e.currentTarget.elements.password.value,n=e.currentTarget.elements.passwordConfirmation.value;if(r&&r===n){console.log(t,r),Oe.innerHTML="",document.body.classList.remove("scroll-off");try{const e=await(0,Ie.a8)(Ce,t,r);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error(e.message),alert(e.message)}}else alert("Check the password");Ue(),window.location.reload()}const Me=document.querySelector(".header-button-nav"),De=document.querySelector(".button-sing-auth-js");function Ue(){let e="";if(localStorage.getItem("tokenResponse")){const t=localStorage.getItem("userAvatar")?localStorage.getItem("userAvatar"):"https://bootstraptema.ru/snippets/icons/2016/mia/1.png",n=localStorage.getItem("email");e=`<div class='user-auth-zone'>\n        <img\n          src="${t}"\n          alt="user avatar"\n          loading="lazy"\n          class="user-img-auth"\n        />\n      <span class='nik-name'>${n.substring(0,n.indexOf("@"))}</span>\n        <div class='svg-user-auth'>\n        <svg width="23" height="26" fill="#ffffff">\n          <use href="${r(_e)}#caret-down"></use>\n        </svg>\n        </div>\n    </div>`,Me.classList.remove("header-not-uyth")}else e=`<div class="button-sing-auth-js">\n      <button class="btn-log-out" type="button">\n        Log in<span class="btn-icn-wrap">\n          <svg width="20" height="20">\n            <use href="${r(_e)}#arrow-right"></use>\n          </svg>\n        </span>\n      </button>\n    </div>`,Me.classList.add("header-not-uyth");De.innerHTML=e}Ue();
//# sourceMappingURL=listshop.58243c99.js.map
