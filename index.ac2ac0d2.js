function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequire7599;function o(e,t){return function(){return e.apply(t,arguments)}}null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequire7599=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.ac2ac0d2.js","8OQ7p":"icons.4c16bf73.svg","836Hl":"amazon@1x.079940f4.png","kCfmF":"amazon@2x.9519639f.png","eGo9w":"book@1x.4bca86b0.png","1NmpU":"book@2x.f258df53.png","lf6jX":"books@1x.d21f8dfc.png","9NT6S":"books@2x.2abcb86b.png","fyIHp":"supp1@2x.08373199.webp","heSKO":"supp2@2x.0191a10c.webp","82Obt":"supp3@2x.8893ca67.webp","6LgBb":"supp4@2x.2412e2c7.webp","fhgIZ":"supp5@2x.a891ff45.webp","l19XY":"supp6@2x.9a915feb.webp","9inf0":"supp7@2x.9ef72e80.webp","8KmUg":"supp8@2x.ad3297d8.webp","gAhZd":"supp9@2x.80d6b25d.webp"}'));const{toString:a}=Object.prototype,{getPrototypeOf:l}=Object,c=(u=Object.create(null),e=>{const t=a.call(e);return u[t]||(u[t]=t.slice(8,-1).toLowerCase())});var u;const d=e=>(e=e.toLowerCase(),t=>c(t)===e),h=e=>t=>typeof t===e,{isArray:f}=Array,p=h("undefined");const m=d("ArrayBuffer");const g=h("string"),y=h("function"),v=h("number"),b=e=>null!==e&&"object"==typeof e,w=e=>{if("object"!==c(e))return!1;const t=l(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=d("Date"),S=d("File"),T=d("Blob"),I=d("FileList"),_=d("URLSearchParams");function k(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),f(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function x(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,O=e=>!p(e)&&e!==C;const A=(R="undefined"!=typeof Uint8Array&&l(Uint8Array),e=>R&&e instanceof R);var R;const L=d("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=d("RegExp"),M=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},D={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const B=d("AsyncFunction");var U={isArray:f,isArrayBuffer:m,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=c(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&m(e.buffer),t},isString:g,isNumber:v,isBoolean:e=>!0===e||!1===e,isObject:b,isPlainObject:w,isUndefined:p,isDate:E,isFile:S,isBlob:T,isRegExp:P,isFunction:y,isStream:e=>b(e)&&y(e.pipe),isURLSearchParams:_,isTypedArray:A,isFileList:I,forEach:k,merge:function e(){const{caseless:t}=O(this)&&this||{},n={},r=(r,i)=>{const s=t&&x(n,i)||i;w(n[s])&&w(r)?n[s]=e(n[s],r):w(r)?n[s]=e({},r):f(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&k(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(k(t,((t,r)=>{n&&y(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&l(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:c,kindOfTest:d,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!v(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:L,hasOwnProperty:N,hasOwnProp:N,reduceDescriptors:M,freezeMethods:e=>{M(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:x,global:C,isContextDefined:O,ALPHABET:D,generateString:(e=16,t=D.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(b(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=f(e)?[]:{};return k(e,((e,t)=>{const s=n(e,r+1);!p(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:B,isThenable:e=>e&&(b(e)||y(e))&&y(e.then)&&y(e.catch)};function j(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}U.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const F=j.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties(j,z),Object.defineProperty(F,"isAxiosError",{value:!0}),j.from=(e,t,n,r,i,s)=>{const o=Object.create(F);return U.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),j.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var H,$,V,W=j;$=function(e){var t,n,r=ee(e),i=r[0],s=r[1],o=new X(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=J[e.charCodeAt(n)]<<18|J[e.charCodeAt(n+1)]<<12|J[e.charCodeAt(n+2)]<<6|J[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=J[e.charCodeAt(n)]<<2|J[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=J[e.charCodeAt(n)]<<10|J[e.charCodeAt(n+1)]<<4|J[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},V=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(te(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(K[t>>2]+K[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(K[t>>10]+K[t>>4&63]+K[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var q,G,K=[],J=[],X="undefined"!=typeof Uint8Array?Uint8Array:Array,Y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q=0,Z=Y.length;Q<Z;++Q)K[Q]=Y[Q],J[Y.charCodeAt(Q)]=Q;function ee(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function te(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(K[(i=r)>>18&63]+K[i>>12&63]+K[i>>6&63]+K[63&i]);return s.join("")}J["-".charCodeAt(0)]=62,J["_".charCodeAt(0)]=63,q=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,h=n?-1:1,f=e[t+d];for(d+=h,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+d],d+=h,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=c}return(f?-1:1)*o*Math.pow(2,s-r)},G=function(e,t,n,r,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(a=0,o=u):o+d>=1?(a=(t*l-1)*Math.pow(2,i),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[n+f]=255&o,f+=p,o/=256,c-=8);e[n+f-p]|=128*m};const ne="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;H=ie;function re(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ie.prototype),t}function ie(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ae(e)}return se(e,t,n)}function se(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ie.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|de(e,t);let r=re(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Ve(e,Uint8Array)){const t=new Uint8Array(e);return ce(t.buffer,t.byteOffset,t.byteLength)}return le(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ve(e,ArrayBuffer)||e&&Ve(e.buffer,ArrayBuffer))return ce(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Ve(e,SharedArrayBuffer)||e&&Ve(e.buffer,SharedArrayBuffer)))return ce(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return ie.from(r,t,n);const i=function(e){if(ie.isBuffer(e)){const t=0|ue(e.length),n=re(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||We(e.length)?re(0):le(e);if("Buffer"===e.type&&Array.isArray(e.data))return le(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ie.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function oe(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ae(e){return oe(e),re(e<0?0:0|ue(e))}function le(e){const t=e.length<0?0:0|ue(e.length),n=re(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function ce(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,ie.prototype),r}function ue(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function de(e,t){if(ie.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ve(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ze(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return He(e).length;default:if(i)return r?-1:ze(e).length;t=(""+t).toLowerCase(),i=!0}}function he(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return _e(this,t,n);case"utf8":case"utf-8":return Se(this,t,n);case"ascii":return Te(this,t,n);case"latin1":case"binary":return Ie(this,t,n);case"base64":return Ee(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function fe(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function pe(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),We(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=ie.from(t,r)),ie.isBuffer(t))return 0===t.length?-1:me(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):me(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function me(e,t,n,r,i){let s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(c(e,s+r)!==c(t,r)){n=!1;break}if(n)return s}return-1}function ge(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(We(r))return o;e[n+o]=r}return o}function ye(e,t,n,r){return $e(ze(t,e.length-n),e,n,r)}function ve(e,t,n,r){return $e(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function be(e,t,n,r){return $e(He(t),e,n,r)}function we(e,t,n,r){return $e(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function Ee(e,t,n){return 0===t&&n===e.length?V(e):V(e.slice(t,n))}function Se(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}ie.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ie.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ie.prototype,"parent",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.buffer}}),Object.defineProperty(ie.prototype,"offset",{enumerable:!0,get:function(){if(ie.isBuffer(this))return this.byteOffset}}),ie.poolSize=8192,ie.from=function(e,t,n){return se(e,t,n)},Object.setPrototypeOf(ie.prototype,Uint8Array.prototype),Object.setPrototypeOf(ie,Uint8Array),ie.alloc=function(e,t,n){return function(e,t,n){return oe(e),e<=0?re(e):void 0!==t?"string"==typeof n?re(e).fill(t,n):re(e).fill(t):re(e)}(e,t,n)},ie.allocUnsafe=function(e){return ae(e)},ie.allocUnsafeSlow=function(e){return ae(e)},ie.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ie.prototype},ie.compare=function(e,t){if(Ve(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),Ve(t,Uint8Array)&&(t=ie.from(t,t.offset,t.byteLength)),!ie.isBuffer(e)||!ie.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},ie.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ie.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ie.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=ie.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(Ve(t,Uint8Array))i+t.length>r.length?(ie.isBuffer(t)||(t=ie.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!ie.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},ie.byteLength=de,ie.prototype._isBuffer=!0,ie.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)fe(this,t,t+1);return this},ie.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)fe(this,t,t+3),fe(this,t+1,t+2);return this},ie.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)fe(this,t,t+7),fe(this,t+1,t+6),fe(this,t+2,t+5),fe(this,t+3,t+4);return this},ie.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Se(this,0,e):he.apply(this,arguments)},ie.prototype.toLocaleString=ie.prototype.toString,ie.prototype.equals=function(e){if(!ie.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ie.compare(this,e)},ie.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ne&&(ie.prototype[ne]=ie.prototype.inspect),ie.prototype.compare=function(e,t,n,r,i){if(Ve(e,Uint8Array)&&(e=ie.from(e,e.offset,e.byteLength)),!ie.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},ie.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ie.prototype.indexOf=function(e,t,n){return pe(this,e,t,n,!0)},ie.prototype.lastIndexOf=function(e,t,n){return pe(this,e,t,n,!1)},ie.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return ge(this,e,t,n);case"utf8":case"utf-8":return ye(this,e,t,n);case"ascii":case"latin1":case"binary":return ve(this,e,t,n);case"base64":return be(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},ie.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Te(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Ie(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function _e(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=qe[e[r]];return i}function ke(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function xe(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Ce(e,t,n,r,i,s){if(!ie.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Oe(e,t,n,r,i){Be(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function Ae(e,t,n,r,i){Be(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function Re(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Le(e,t,n,r,i){return t=+t,n>>>=0,i||Re(e,0,n,4),G(e,t,n,r,23,4),n+4}function Ne(e,t,n,r,i){return t=+t,n>>>=0,i||Re(e,0,n,8),G(e,t,n,r,52,8),n+8}ie.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,ie.prototype),r},ie.prototype.readUintLE=ie.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||xe(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},ie.prototype.readUintBE=ie.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||xe(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},ie.prototype.readUint8=ie.prototype.readUInt8=function(e,t){return e>>>=0,t||xe(e,1,this.length),this[e]},ie.prototype.readUint16LE=ie.prototype.readUInt16LE=function(e,t){return e>>>=0,t||xe(e,2,this.length),this[e]|this[e+1]<<8},ie.prototype.readUint16BE=ie.prototype.readUInt16BE=function(e,t){return e>>>=0,t||xe(e,2,this.length),this[e]<<8|this[e+1]},ie.prototype.readUint32LE=ie.prototype.readUInt32LE=function(e,t){return e>>>=0,t||xe(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ie.prototype.readUint32BE=ie.prototype.readUInt32BE=function(e,t){return e>>>=0,t||xe(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ie.prototype.readBigUInt64LE=Ge((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),ie.prototype.readBigUInt64BE=Ge((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),ie.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||xe(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},ie.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||xe(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},ie.prototype.readInt8=function(e,t){return e>>>=0,t||xe(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ie.prototype.readInt16LE=function(e,t){e>>>=0,t||xe(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt16BE=function(e,t){e>>>=0,t||xe(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ie.prototype.readInt32LE=function(e,t){return e>>>=0,t||xe(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ie.prototype.readInt32BE=function(e,t){return e>>>=0,t||xe(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ie.prototype.readBigInt64LE=Ge((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ie.prototype.readBigInt64BE=Ge((function(e){Ue(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||je(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ie.prototype.readFloatLE=function(e,t){return e>>>=0,t||xe(e,4,this.length),q(this,e,!0,23,4)},ie.prototype.readFloatBE=function(e,t){return e>>>=0,t||xe(e,4,this.length),q(this,e,!1,23,4)},ie.prototype.readDoubleLE=function(e,t){return e>>>=0,t||xe(e,8,this.length),q(this,e,!0,52,8)},ie.prototype.readDoubleBE=function(e,t){return e>>>=0,t||xe(e,8,this.length),q(this,e,!1,52,8)},ie.prototype.writeUintLE=ie.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ce(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},ie.prototype.writeUintBE=ie.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Ce(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},ie.prototype.writeUint8=ie.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,1,255,0),this[t]=255&e,t+1},ie.prototype.writeUint16LE=ie.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeUint16BE=ie.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeUint32LE=ie.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ie.prototype.writeUint32BE=ie.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigUInt64LE=Ge((function(e,t=0){return Oe(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeBigUInt64BE=Ge((function(e,t=0){return Ae(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ie.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ce(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ie.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Ce(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},ie.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ie.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ie.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ie.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ie.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Ce(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ie.prototype.writeBigInt64LE=Ge((function(e,t=0){return Oe(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeBigInt64BE=Ge((function(e,t=0){return Ae(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ie.prototype.writeFloatLE=function(e,t,n){return Le(this,e,t,!0,n)},ie.prototype.writeFloatBE=function(e,t,n){return Le(this,e,t,!1,n)},ie.prototype.writeDoubleLE=function(e,t,n){return Ne(this,e,t,!0,n)},ie.prototype.writeDoubleBE=function(e,t,n){return Ne(this,e,t,!1,n)},ie.prototype.copy=function(e,t,n,r){if(!ie.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},ie.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!ie.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=ie.isBuffer(e)?e:ie.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const Pe={};function Me(e,t,n){Pe[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function De(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Be(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new Pe.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){Ue(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||je(t,e.length-(n+1))}(r,i,s)}function Ue(e,t){if("number"!=typeof e)throw new Pe.ERR_INVALID_ARG_TYPE(t,"number",e)}function je(e,t,n){if(Math.floor(e)!==e)throw Ue(e,n),new Pe.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Pe.ERR_BUFFER_OUT_OF_BOUNDS;throw new Pe.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Me("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Me("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Me("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=De(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=De(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const Fe=/[^+/0-9A-Za-z-_]/g;function ze(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function He(e){return $(function(e){if((e=(e=e.split("=")[0]).trim().replace(Fe,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function $e(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function Ve(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function We(e){return e!=e}const qe=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function Ge(e){return"undefined"==typeof BigInt?Ke:e}function Ke(){throw new Error("BigInt not supported")}var Je=H;function Xe(e){return U.isPlainObject(e)||U.isArray(e)}function Ye(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function Qe(e,t,n){return e?e.concat(t).map((function(e,t){return e=Ye(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ze=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));var et=function(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new W("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Je.from(e):e}function c(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(Xe)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=Ye(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===o?Qe([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!Xe(e)||(t.append(Qe(i,n,s),l(e)),!1)}const u=[],d=Object.assign(Ze,{defaultVisitor:c,convertValue:l,isVisitable:Xe});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&i.call(t,n,U.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function tt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function nt(e,t){this._pairs=[],e&&et(e,this,t)}const rt=nt.prototype;rt.append=function(e,t){this._pairs.push([e,t])},rt.toString=function(e){const t=e?function(t){return e.call(this,t,tt)}:tt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var it=nt;function st(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ot(e,t,n){if(!t)return e;const r=n&&n.encode||st,i=n&&n.serialize;let s;if(s=i?i(t,n):U.isURLSearchParams(t)?t.toString():new it(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var at=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},lt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var ct={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:it,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function ut(e,t){return et(e,new ct.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ct.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var dt=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&U.isArray(r)?r.length:s,a)return U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&U.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const ht={"Content-Type":void 0};const ft={transitional:lt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=U.isObject(e);i&&U.isHTMLForm(e)&&(e=new FormData(e));if(U.isFormData(e))return r&&r?JSON.stringify(dt(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ut(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return et(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ft.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw W.from(e,W.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ct.classes.FormData,Blob:ct.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],(function(e){ft.headers[e]={}})),U.forEach(["post","put","patch"],(function(e){ft.headers[e]=U.merge(ht)}));var pt=ft;const mt=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var gt=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&mt[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const yt=Symbol("internals");function vt(e){return e&&String(e).trim().toLowerCase()}function bt(e){return!1===e||null==e?e:U.isArray(e)?e.map(bt):String(e)}function wt(e,t,n,r,i){return U.isFunction(r)?r.call(this,t,n):(i&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}let Et=Symbol.iterator,St=Symbol.toStringTag;class Tt{set(e,t,n){const r=this;function i(e,t,n){const i=vt(t);if(!i)throw new Error("header name must be a non-empty string");const s=U.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=bt(e))}const s=(e,t)=>U.forEach(e,((e,n)=>i(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(gt(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=vt(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=vt(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!wt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=vt(e)){const i=U.findKey(n,e);!i||t&&!wt(0,n[i],i,t)||(delete n[i],r=!0)}}return U.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!wt(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,i)=>{const s=U.findKey(n,i);if(s)return t[s]=bt(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=bt(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Et](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[St](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[yt]=this[yt]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=vt(e);t[r]||(!function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.freezeMethods(Tt.prototype),U.freezeMethods(Tt);var It=Tt;function _t(e,t){const n=this||pt,r=t||n,i=It.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function kt(e){return!(!e||!e.__CANCEL__)}function xt(e,t,n){W.call(this,null==e?"canceled":e,W.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(xt,W,{__CANCEL__:!0});var Ct=xt;function Ot(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var At=ct.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),U.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),U.isString(r)&&o.push("path="+r),U.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Rt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Lt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Rt(e,t):t}var Nt=ct.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Pt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Mt=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function Dt(e,t){let n=0;const r=Mt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const Bt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=It.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}U.isFormData(r)&&(ct.isStandardBrowserEnv||ct.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const c=Lt(e.baseURL,e.url);function u(){if(!l)return;const r=It.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Ot((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ot(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new W("Request aborted",W.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||lt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new W(t,r.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,l)),l=null},ct.isStandardBrowserEnv){const t=(e.withCredentials||Nt(c))&&e.xsrfCookieName&&At.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&U.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Dt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Dt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new Ct(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=Pt(c);d&&-1===ct.protocols.indexOf(d)?n(new W("Unsupported protocol "+d+":",W.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};U.forEach(Bt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ut={getAdapter:e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=U.isString(n)?Bt[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new W(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(U.hasOwnProp(Bt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!U.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Bt};function jt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ct(null,e)}function Ft(e){jt(e),e.headers=It.from(e.headers),e.data=_t.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ut.getAdapter(e.adapter||pt.adapter)(e).then((function(t){return jt(e),t.data=_t.call(e,e.transformResponse,t),t.headers=It.from(t.headers),t}),(function(t){return kt(t)||(jt(e),t&&t.response&&(t.response.data=_t.call(e,e.transformResponse,t.response),t.response.headers=It.from(t.response.headers))),Promise.reject(t)}))}const zt=e=>e instanceof It?e.toJSON():e;function Ht(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function i(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function o(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(zt(e),zt(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=l[r]||i,o=s(e[r],t[r],r);U.isUndefined(o)&&s!==a||(n[r]=o)})),n}const $t={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{$t[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Vt={};$t.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new W(r(i," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!Vt[i]&&(Vt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Wt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new W("option "+s+" must be "+n,W.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}},validators:$t};const qt=Wt.validators;class Gt{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ht(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&Wt.assertOptions(n,{silentJSONParsing:qt.transitional(qt.boolean),forcedJSONParsing:qt.transitional(qt.boolean),clarifyTimeoutError:qt.transitional(qt.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:Wt.assertOptions(r,{encode:qt.function,serialize:qt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&U.merge(i.common,i[t.method]),s&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=It.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Ft.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=o.length;let h=t;for(d=0;d<u;){const e=o[d++],t=o[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{c=Ft.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return ot(Lt((e=Ht(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new at,response:new at}}}U.forEach(["delete","get","head","options"],(function(e){Gt.prototype[e]=function(t,n){return this.request(Ht(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Ht(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Gt.prototype[e]=t(),Gt.prototype[e+"Form"]=t(!0)}));var Kt=Gt;class Jt{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Jt((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Ct(e,r,i),t(n.reason))}))}}var Xt=Jt;const Yt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yt).forEach((([e,t])=>{Yt[t]=e}));var Qt=Yt;const Zt=function e(t){const n=new Kt(t),r=o(Kt.prototype.request,n);return U.extend(r,Kt.prototype,n,{allOwnKeys:!0}),U.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ht(t,n))},r}(pt);Zt.Axios=Kt,Zt.CanceledError=Ct,Zt.CancelToken=Xt,Zt.isCancel=kt,Zt.VERSION="1.4.0",Zt.toFormData=et,Zt.AxiosError=W,Zt.Cancel=Zt.CanceledError,Zt.all=function(e){return Promise.all(e)},Zt.spread=function(e){return function(t){return e.apply(null,t)}},Zt.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},Zt.mergeConfig=Ht,Zt.AxiosHeaders=It,Zt.formToJSON=e=>dt(U.isHTMLForm(e)?new FormData(e):e),Zt.HttpStatusCode=Qt,Zt.default=Zt;var en=Zt;const{Axios:tn,AxiosError:nn,CanceledError:rn,isCancel:sn,CancelToken:on,VERSION:an,all:ln,Cancel:cn,isAxiosError:un,spread:dn,toFormData:hn,AxiosHeaders:fn,HttpStatusCode:pn,formToJSON:mn,mergeConfig:gn}=en;async function yn(e){return(await en.get(`https://books-backend.p.goit.global/books/${e}`)).data}const vn=new class{async fetchApi(e){try{return(await en.get(`${this.baseUrl}${e}`)).data}catch(e){console.error(e)}}async fetchCategoryList(){return this.fetchApi(this.categoryList)}async fetchTopBooks(){return this.fetchApi(this.topBooks)}async fetchSelectedCategory(e){return this.fetchApi(`${this.selectedCategory}${e}`)}async fetchBookInfo(e){return this.fetchApi(`${this.bookInfo}${e}`)}constructor(){this.baseUrl="https://books-backend.p.goit.global",this.categoryList="/books/category-list",this.topBooks="/books/top-books",this.selectedCategory="/books/category?category=",this.bookInfo="/books/"}};var bn,wn,En,Sn=bn={};function Tn(){throw new Error("setTimeout has not been defined")}function In(){throw new Error("clearTimeout has not been defined")}function _n(e){if(wn===setTimeout)return setTimeout(e,0);if((wn===Tn||!wn)&&setTimeout)return wn=setTimeout,setTimeout(e,0);try{return wn(e,0)}catch(t){try{return wn.call(null,e,0)}catch(t){return wn.call(this,e,0)}}}!function(){try{wn="function"==typeof setTimeout?setTimeout:Tn}catch(e){wn=Tn}try{En="function"==typeof clearTimeout?clearTimeout:In}catch(e){En=In}}();var kn,xn=[],Cn=!1,On=-1;function An(){Cn&&kn&&(Cn=!1,kn.length?xn=kn.concat(xn):On=-1,xn.length&&Rn())}function Rn(){if(!Cn){var e=_n(An);Cn=!0;for(var t=xn.length;t;){for(kn=xn,xn=[];++On<t;)kn&&kn[On].run();On=-1,t=xn.length}kn=null,Cn=!1,function(e){if(En===clearTimeout)return clearTimeout(e);if((En===In||!En)&&clearTimeout)return En=clearTimeout,clearTimeout(e);try{En(e)}catch(t){try{return En.call(null,e)}catch(t){return En.call(this,e)}}}(e)}}function Ln(e,t){this.fun=e,this.array=t}function Nn(){}Sn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];xn.push(new Ln(e,t)),1!==xn.length||Cn||_n(Rn)},Ln.prototype.run=function(){this.fun.apply(null,this.array)},Sn.title="browser",Sn.browser=!0,Sn.env={},Sn.argv=[],Sn.version="",Sn.versions={},Sn.on=Nn,Sn.addListener=Nn,Sn.once=Nn,Sn.off=Nn,Sn.removeListener=Nn,Sn.removeAllListeners=Nn,Sn.emit=Nn,Sn.prependListener=Nn,Sn.prependOnceListener=Nn,Sn.listeners=function(e){return[]},Sn.binding=function(e){throw new Error("process.binding is not supported")},Sn.cwd=function(){return"/"},Sn.chdir=function(e){throw new Error("process.chdir is not supported")},Sn.umask=function(){return 0};
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
const Pn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Mn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Pn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Dn;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Dn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bn=function(e){return function(e){const t=Pn(e);return Mn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Un=function(e){try{return Mn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const jn=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Fn=()=>{try{return jn()||(()=>{if(void 0===bn||void 0===bn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Un(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},zn=e=>{var t,n;return null===(n=null===(t=Fn())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Hn=e=>{var t;return null===(t=Fn())||void 0===t?void 0:t[`_${e}`]};
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
class $n{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function Vn(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Wn(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function qn(){const e=Vn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Gn(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Kn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Xn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Kn(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Xn=/\{\$([^}]+)}/g;
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
 */function Yn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Qn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Zn(n)&&Zn(s)){if(!Qn(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Zn(e){return null!==e&&"object"==typeof e}
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
function er(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function tr(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function nr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function rr(e,t){const n=new ir(e,t);return n.subscribe.bind(n)}class ir{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=sr),void 0===r.error&&(r.error=sr),void 0===r.complete&&(r.complete=sr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function sr(){}
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
function or(e){return e&&e._delegate?e._delegate:e}class ar{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class lr{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new $n;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class cr{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lr(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const ur=[];var dr,hr;(hr=dr||(dr={}))[hr.DEBUG=0]="DEBUG",hr[hr.VERBOSE=1]="VERBOSE",hr[hr.INFO=2]="INFO",hr[hr.WARN=3]="WARN",hr[hr.ERROR=4]="ERROR",hr[hr.SILENT=5]="SILENT";const fr={debug:dr.DEBUG,verbose:dr.VERBOSE,info:dr.INFO,warn:dr.WARN,error:dr.ERROR,silent:dr.SILENT},pr=dr.INFO,mr={[dr.DEBUG]:"log",[dr.VERBOSE]:"log",[dr.INFO]:"info",[dr.WARN]:"warn",[dr.ERROR]:"error"},gr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=mr[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class yr{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in dr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?fr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,dr.DEBUG,...e),this._logHandler(this,dr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,dr.VERBOSE,...e),this._logHandler(this,dr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,dr.INFO,...e),this._logHandler(this,dr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,dr.WARN,...e),this._logHandler(this,dr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,dr.ERROR,...e),this._logHandler(this,dr.ERROR,...e)}constructor(e){this.name=e,this._logLevel=pr,this._logHandler=gr,this._userLogHandler=null,ur.push(this)}}let vr,br;const wr=new WeakMap,Er=new WeakMap,Sr=new WeakMap,Tr=new WeakMap,Ir=new WeakMap;let _r={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Er.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Sr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function kr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(br||(br=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Or(this),t),Cr(wr.get(this))}:function(...t){return Cr(e.apply(Or(this),t))}:function(t,...n){const r=e.call(Or(this),t,...n);return Sr.set(r,t.sort?t.sort():[t]),Cr(r)}}function xr(e){return"function"==typeof e?kr(e):(e instanceof IDBTransaction&&function(e){if(Er.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Er.set(e,t)}(e),t=e,(vr||(vr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,_r):e);var t}function Cr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Cr(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&wr.set(t,e)})).catch((()=>{})),Ir.set(t,e),t}(e);if(Tr.has(e))return Tr.get(e);const t=xr(e);return t!==e&&(Tr.set(e,t),Ir.set(t,e)),t}const Or=e=>Ir.get(e);function Ar(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Cr(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Cr(o.result),e.oldVersion,e.newVersion,Cr(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Rr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],Nr=new Map;function Pr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Nr.get(t))return Nr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Lr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Rr.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Nr.set(t,s),s}_r=(e=>({...e,get:(t,n,r)=>Pr(t,n)||e.get(t,n,r),has:(t,n)=>!!Pr(t,n)||e.has(t,n)}))(_r);
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
class Mr{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Dr=new yr("@firebase/app"),Br={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ur=new Map,jr=new Map;function Fr(e,t){try{e.container.addComponent(t)}catch(n){Dr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zr(e){const t=e.name;if(jr.has(t))return Dr.debug(`There were multiple attempts to register component ${t}.`),!1;jr.set(t,e);for(const t of Ur.values())Fr(t,e);return!0}function Hr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const $r=new Jn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Vr{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ar("app",(()=>this),"PUBLIC"))}}
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
 */function Wr(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw $r.create("bad-app-name",{appName:String(i)});var s;if(n||(n=null===(s=Fn())||void 0===s?void 0:s.config),!n)throw $r.create("no-options");const o=Ur.get(i);if(o){if(Qn(n,o.options)&&Qn(r,o.config))return o;throw $r.create("duplicate-app",{appName:i})}const a=new cr(i);for(const e of jr.values())a.addComponent(e);const l=new Vr(n,r,a);return Ur.set(i,l),l}function qr(e="[DEFAULT]"){const t=Ur.get(e);if(!t&&"[DEFAULT]"===e)return Wr();if(!t)throw $r.create("no-app",{appName:e});return t}function Gr(e,t,n){var r;let i=null!==(r=Br[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Dr.warn(e.join(" "))}zr(new ar(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let Kr=null;function Jr(){return Kr||(Kr=Ar("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw $r.create("idb-open",{originalErrorMessage:e.message})}))),Kr}async function Xr(e,t){try{const n=(await Jr()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,Yr(e)),n.done}catch(e){if(e instanceof Kn)Dr.warn(e.message);else{const t=$r.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Dr.warn(t.message)}}}function Yr(e){return`${e.name}!${e.options.appId}`}
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
 */class Qr{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Zr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Zr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ti(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ti(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Bn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ei(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Zr(){return(new Date).toISOString().substring(0,10)}class ei{async runIndexedDBEnvironmentCheck(){return!!Gn()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await Jr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Yr(e))}catch(e){if(e instanceof Kn)Dr.warn(e.message);else{const t=$r.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Dr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ti(e){return Bn(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ni;ni="",zr(new ar("platform-logger",(e=>new Mr(e)),"PRIVATE")),zr(new ar("heartbeat",(e=>new Qr(e)),"PRIVATE")),Gr("@firebase/app","0.9.9",ni),Gr("@firebase/app","0.9.9","esm2017"),Gr("fire-js","");
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
Gr("firebase","9.21.0","app");function ri(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function ii(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const si=ii,oi=new Jn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ai=new yr("@firebase/auth");function li(e,...t){ai.logLevel<=dr.ERROR&&ai.error(`Auth (9.21.0): ${e}`,...t)}
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
 */function ci(e,...t){throw fi(e,...t)}function ui(e,...t){return fi(e,...t)}function di(e,t,n){const r=Object.assign(Object.assign({},si()),{[t]:n});return new Jn("auth","Firebase",r).create(t,{appName:e.name})}function hi(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ci(e,"argument-error"),di(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fi(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return oi.create(e,...t)}function pi(e,t,...n){if(!e)throw fi(t,...n)}function mi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw li(t),new Error(t)}function gi(e,t){e||mi(t)}
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
 */function yi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vi(){return"http:"===bi()||"https:"===bi()}function bi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function wi(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vi()||Wn()||"connection"in navigator))||navigator.onLine}
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
class Ei{get(){return wi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,gi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vn())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function Si(e,t){gi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Ti{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void mi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void mi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void mi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ii={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},_i=new Ei(3e4,6e4);
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
 */function ki(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xi(e,t,n,r,i={}){return Ci(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=er(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ti.fetch()(Ai(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Ci(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ii),t);try{const t=new Ri(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Li(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Li(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Li(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Li(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw di(e,a,o);ci(e,a)}}catch(t){if(t instanceof Kn)throw t;ci(e,"network-request-failed",{message:String(t)})}}async function Oi(e,t,n,r,i={}){const s=await xi(e,t,n,r,i);return"mfaPendingCredential"in s&&ci(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ai(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Si(e.config,i):`${e.config.apiScheme}://${i}`}class Ri{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ui(this.auth,"network-request-failed"))),_i.get())}))}}function Li(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ui(e,t,r);return i.customData._tokenResponse=n,i}
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
function Ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Pi(e){return 1e3*Number(e)}function Mi(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return li("JWT malformed, contained fewer than 3 sections"),null;try{const e=Un(n);return e?JSON.parse(e):(li("Failed to decode base64 JWT payload"),null)}catch(e){return li("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function Di(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Kn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Bi{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Ui{_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function ji(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Di(e,async function(e,t){return xi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));pi(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ri(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ui(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
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
class Fi{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pi(e.idToken,"internal-error"),pi(void 0!==e.idToken,"internal-error"),pi(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Mi(e);return pi(t,"internal-error"),pi(void 0!==t.exp,"internal-error"),pi(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return pi(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Ci(e,{},(async()=>{const n=er({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Ai(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ti.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Fi;return n&&(pi("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(pi("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(pi("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return mi("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function zi(e,t){pi("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Hi{async getIdToken(e){const t=await Di(this,this.stsTokenManager.getToken(this.auth,e));return pi(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=or(e),r=await n.getIdToken(t),i=Mi(r);pi(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ni(Pi(i.auth_time)),issuedAtTime:Ni(Pi(i.iat)),expirationTime:Ni(Pi(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=or(e);await ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(pi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Hi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ji(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Di(this,async function(e,t){return xi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:S}=t;pi(v&&S,e,"internal-error");const T=Fi.fromJSON(this.name,S);pi("string"==typeof v,e,"internal-error"),zi(u,e.name),zi(d,e.name),pi("boolean"==typeof b,e,"internal-error"),pi("boolean"==typeof w,e,"internal-error"),zi(h,e.name),zi(f,e.name),zi(p,e.name),zi(m,e.name),zi(g,e.name),zi(y,e.name);const I=new Hi({uid:v,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Fi;r.updateFromServerResponse(t);const i=new Hi({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ji(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ui(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */const $i=new Map;function Vi(e){gi(e instanceof Function,"Expected a class definition");let t=$i.get(e);return t?(gi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$i.set(e,t),t)}
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
 */class Wi{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Wi.type="NONE";const qi=Wi;
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
 */function Gi(e,t,n){return`firebase:${e}:${t}:${n}`}class Ki{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ki(Vi(qi),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Vi(qi);const s=Gi(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Hi._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ki(i,e,n)):new Ki(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Gi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Gi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Ji(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xi(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ts(t))return"Blackberry";if(ns(t))return"Webos";if(Yi(t))return"Safari";if((t.includes("chrome/")||Qi(t))&&!t.includes("edge/"))return"Chrome";if(es(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Xi(e=Vn()){return/firefox\//i.test(e)}function Yi(e=Vn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qi(e=Vn()){return/crios\//i.test(e)}function Zi(e=Vn()){return/iemobile/i.test(e)}function es(e=Vn()){return/android/i.test(e)}function ts(e=Vn()){return/blackberry/i.test(e)}function ns(e=Vn()){return/webos/i.test(e)}function rs(e=Vn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function is(){return qn()&&10===document.documentMode}function ss(e=Vn()){return rs(e)||es(e)||ns(e)||ts(e)||/windows phone/i.test(e)||Zi(e)}
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
function os(e,t=[]){let n;switch(e){case"Browser":n=Ji(Vn());break;case"Worker":n=`${Ji(Vn())}-${e}`;break;default:n=e}return`${n}/JsCore/9.21.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */async function as(e,t){return xi(e,"GET","/v2/recaptchaConfig",ki(e,t))}
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
 */function ls(e){return void 0!==e&&void 0!==e.enterprise}class cs{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function us(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ui("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function ds(e){return`__${e}${Math.floor(1e6*Math.random())}`}class hs{async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;ls(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{as(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new cs(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&ls(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));us("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=gs(e)}}async function fs(e,t,n,r=!1){const i=new hs(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class ps{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class ms{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vi(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pi(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?or(e):null;return t&&pi(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pi(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Vi(e))}))}async initializeRecaptchaConfig(){const e=await as(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new cs(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new hs(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vi(e)||this._popupRedirectResolver;pi(t,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[Vi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return pi(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pi(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=os(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){ai.logLevel<=dr.WARN&&ai.warn(`Auth (9.21.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ys(this),this.idTokenSubscription=new ys(this),this.beforeStateQueue=new ps(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}}function gs(e){return or(e)}class ys{get next(){return pi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=rr((e=>this.observer=e))}}
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
 */function vs(e,t,n){const r=gs(e);pi(r._canInitEmulator,r,"emulator-config-failed"),pi(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=bs(t),{host:o,port:a}=function(e){const t=bs(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ws(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ws(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function bs(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ws(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Es{toJSON(){return mi("not implemented")}_getIdTokenResponse(e){return mi("not implemented")}_linkToIdToken(e,t){return mi("not implemented")}_getReauthenticationResolver(e){return mi("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Ss(e,t){return xi(e,"POST","/v1/accounts:update",t)}
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
async function Ts(e,t){return Oi(e,"POST","/v1/accounts:signInWithPassword",ki(e,t))}
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
class Is extends Es{static _fromEmailAndPassword(e,t){return new Is(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Is(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await fs(e,n,"signInWithPassword");return Ts(e,t)}return Ts(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await fs(e,n,"signInWithPassword");return Ts(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",ki(e,t))}(e,{email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ss(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",ki(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function _s(e,t){return Oi(e,"POST","/v1/accounts:signInWithIdp",ki(e,t))}
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
 */class ks extends Es{static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ci("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=ri(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ks(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return _s(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_s(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_s(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=er(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const xs={USER_NOT_FOUND:"user-not-found"};
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
class Cs extends Es{static _fromVerification(e,t){return new Cs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Cs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Oi(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Oi(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,t));if(n.temporaryProof)throw Li(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Oi(e,"POST","/v1/accounts:signInWithPhoneNumber",ki(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),xs)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Cs({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Os{static parseLink(e){const t=function(e){const t=tr(nr(e)).link,n=t?tr(nr(t)).deep_link_id:null,r=tr(nr(e)).deep_link_id;return(r?tr(nr(r)).link:null)||r||n||t||e}(e);try{return new Os(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=tr(nr(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);pi(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class As{static credential(e,t){return Is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Os.parseLink(t);return pi(n,"argument-error"),Is._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=As.PROVIDER_ID}}As.PROVIDER_ID="password",As.EMAIL_PASSWORD_SIGN_IN_METHOD="password",As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Rs{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Ls extends Rs{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Ns extends Ls{static credential(e){return ks._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ns.credentialFromTaggedObject(e)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ns.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ns.PROVIDER_ID="facebook.com";
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
class Ps extends Ls{static credential(e,t){return ks._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ps.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Ps.GOOGLE_SIGN_IN_METHOD="google.com",Ps.PROVIDER_ID="google.com";
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
class Ms extends Ls{static credential(e){return ks._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Ms.GITHUB_SIGN_IN_METHOD="github.com",Ms.PROVIDER_ID="github.com";
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
class Ds extends Ls{static credential(e,t){return ks._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ds.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function Bs(e,t){return Oi(e,"POST","/v1/accounts:signUp",ki(e,t))}
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
 */Ds.TWITTER_SIGN_IN_METHOD="twitter.com",Ds.PROVIDER_ID="twitter.com";class Us{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Hi._fromIdTokenResponse(e,n,r),s=js(n);return new Us({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=js(n);return new Us({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function js(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Fs extends Kn{static _fromErrorAndOperation(e,t,n,r){return new Fs(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function zs(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Fs._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Hs(e,t,n=!1){const r=await Di(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Us._forOperation(e,"link",r)}
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
async function $s(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Di(e,zs(r,i,t,e),n);pi(s.idToken,r,"internal-error");const o=Mi(s.idToken);pi(o,r,"internal-error");const{sub:a}=o;return pi(e.uid===a,r,"user-mismatch"),Us._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ci(r,"user-mismatch"),e}}
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
 */async function Vs(e,t,n=!1){const r="signIn",i=await zs(e,r,t),s=await Us._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ws(e,t){return Vs(gs(e),t)}async function qs(e,t,n){var r;const i=gs(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await fs(i,s,"signUpPassword");o=Bs(i,e)}else o=Bs(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await fs(i,s,"signUpPassword");return Bs(i,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Us._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function Gs(e,t,n){return Ws(or(e),As.credential(t,n))}
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
 */new WeakMap;
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
class Ks{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Js extends Ks{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);is()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Vn();return Yi(e)||rs(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}}Js.type="LOCAL";const Xs=Js;
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
 */class Ys extends Ks{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ys.type="SESSION";const Qs=Ys;
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
class Zs{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Zs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function eo(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Zs.receivers=[];class to{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=eo("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function no(){return window}
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
function ro(){return void 0!==no().WorkerGlobalScope&&"function"==typeof no().importScripts}class io{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function so(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function oo(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new io(e).toPromise()}(),t(await oo()))}))}))}async function ao(e,t,n){const r=so(e,!0).put({fbase_key:t,value:n});return new io(r).toPromise()}function lo(e,t){const n=so(e,!0).delete(t);return new io(n).toPromise()}class co{async _openDb(){return this.db||(this.db=await oo()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ro()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(ro()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new to(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oo();return await ao(e,"__sak","1"),await lo(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ao(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=so(e,!1).get(t),r=await new io(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>lo(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=so(e,!1).getAll();return new io(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}co.type="LOCAL";const uo=co;
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
ds("rcb"),new Ei(3e4,6e4);async function ho(e,t,n){var r;const i=await n.verify();try{let s;if(pi("string"==typeof i,e,"argument-error"),pi("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){pi("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return xi(e,"POST","/v2/accounts/mfaEnrollment:start",ki(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{pi("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;pi(n,e,"missing-multi-factor-info");const o=await function(e,t){return xi(e,"POST","/v2/accounts/mfaSignIn:start",ki(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return xi(e,"POST","/v1/accounts:sendVerificationCode",ki(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class fo{verifyPhoneNumber(e,t){return ho(this.auth,e,or(t))}static credential(e,t){return Cs._fromVerification(e,t)}static credentialFromResult(e){const t=e;return fo.credentialFromTaggedObject(t)}static credentialFromError(e){return fo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Cs._fromTokenResponse(t,n):null}constructor(e){this.providerId=fo.PROVIDER_ID,this.auth=gs(e)}}
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
function po(e,t){return t?Vi(t):(pi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */fo.PROVIDER_ID="phone",fo.PHONE_SIGN_IN_METHOD="phone";class mo extends Es{_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _s(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function go(e){return Vs(e.auth,new mo(e),e.bypassAuthState)}function yo(e){const{auth:t,user:n}=e;return pi(n,t,"internal-error"),$s(n,new mo(e),e.bypassAuthState)}async function vo(e){const{auth:t,user:n}=e;return pi(n,t,"internal-error"),Hs(n,new mo(e),e.bypassAuthState)}
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
 */class bo{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return go;case"linkViaPopup":case"linkViaRedirect":return vo;case"reauthViaPopup":case"reauthViaRedirect":return yo;default:ci(this.auth,"internal-error")}}resolve(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const wo=new Ei(2e3,1e4);async function Eo(e,t,n){const r=gs(e);hi(e,t,Rs);const i=po(r,n);return new So(r,"signInViaPopup",t,i).executeNotNull()}class So extends bo{async executeNotNull(){const e=await this.execute();return pi(e,this.auth,"internal-error"),e}async onExecution(){gi(1===this.filter.length,"Popup operations only handle one event");const e=eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ui(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ui(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,wo.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}}So.currentPopupAction=null;
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
const To=new Map;class Io extends bo{async execute(){let e=To.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=xo(t),r=ko(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}To.set(this.auth._key(),e)}return this.bypassAuthState||To.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function _o(e,t){To.set(e._key(),t)}function ko(e){return Vi(e._redirectPersistence)}function xo(e){return Gi("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Co(e,t,n=!1){const r=gs(e),i=po(r,t),s=new Io(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Oo{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ro(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ro(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ui(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ao(e))}saveEventToCache(e){this.cachedEventUids.add(Ao(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ao(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ro({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Lo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,No=/^https?/;async function Po(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return xi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Mo(e))return}catch(e){}ci(e,"unauthorized-domain")}function Mo(e){const t=yi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!No.test(n))return!1;if(Lo.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Do=new Ei(3e4,6e4);function Bo(){const e=no().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Uo=null;function jo(e){return Uo=Uo||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(ui(e,"network-request-failed"))},timeout:Do.get()})}if(null===(i=null===(r=no().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=no().gapi)||void 0===s?void 0:s.load)){const t=ds("iframefcb");return no()[t]=()=>{gapi.load?o():n(ui(e,"network-request-failed"))},us(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Uo=null,e}))}(e),Uo}
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
 */const Fo=new Ei(5e3,15e3),zo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ho=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $o(e){const t=e.config;pi(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Si(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.21.0"},i=Ho.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${er(r).slice(1)}`}
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
const Vo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Wo{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function qo(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vo),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Vn().toLowerCase();n&&(a=Qi(c)?"_blank":n),Xi(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Vn()){var t;return rs(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Wo(null);const d=window.open(t||"",a,u);pi(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Wo(d)}const Go=encodeURIComponent("fac");async function Ko(e,t,n,r,i,s){pi(e.config.authDomain,e,"auth-domain-config-required"),pi(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.21.0",eventId:i};if(t instanceof Rs){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Yn(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ls){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Go}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?Si(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${er(a).slice(1)}${c}`}const Jo=class{async _openPopup(e,t,n,r){var i;gi(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return qo(e,await Ko(e,t,n,yi(),r),eo())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){no().location.href=e}(await Ko(e,t,n,yi(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(gi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await jo(e),n=no().gapi;return pi(n,e,"internal-error"),t.open({where:document.body,url:$o(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zo,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ui(e,"network-request-failed"),s=no().setTimeout((()=>{r(i)}),Fo.get());function o(){no().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Oo(e);return t.register("authEvent",(t=>{pi(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ci(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Po(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ss()||Yi()||rs()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qs,this._completeRedirectFn=Co,this._overrideRedirectResult=_o}};
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
class Xo{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const Yo=Hn("authIdTokenMaxAge")||300;let Qo=null;var Zo;Zo="Browser",zr(new ar("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;pi(s&&!s.includes(":"),"invalid-api-key",{appName:n.name}),pi(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Zo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:os(Zo)},l=new ms(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),zr(new ar("auth-internal",(e=>{const t=gs(e.getProvider("auth").getImmediate());return new Xo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Gr("@firebase/auth","0.23.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Zo)),Gr("@firebase/auth","0.23.1","esm2017");const ea=new Ps,ta=(Wr({apiKey:"AIzaSyA0Twt9JJx7KChBOO37tFJHbHS8iJvtnU4",authDomain:"team-project-d4f13.firebaseapp.com",projectId:"team-project-d4f13",storageBucket:"team-project-d4f13.appspot.com",messagingSenderId:"378146701089",appId:"1:378146701089:web:bf98f84a8f9624c7460860"}),function(e=qr()){const t=Hr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Hr(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Qn(n.getOptions(),null!=t?t:{}))return e;ci(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Jo,persistence:[uo,Xs,Qs]}),r=Hn("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yo)return;const r=null==t?void 0:t.token;Qo!==r&&(Qo=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){or(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){or(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=zn("auth");return s&&vs(n,`http://${s}`),n}());class na{async postRequest(e,t){try{return await en.post(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async patchRequest(e,t){try{return await en.patch(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async putRequest(e,t){try{return await en.put(`${this.app}booksShop/${t}.json`,e)}catch(e){console.error("post-error",e.message)}}async getRequest(e){try{const t=e.substring(0,e.indexOf("."));return(await en.get(`${this.app}booksShop/${t}.json`)).data}catch(e){console.error("get-error",e.message)}}async deleteRequest(e=null,t,n){try{const r=n.substring(0,n.indexOf("."));return await en.delete(`${this.app}booksShop/${r}/${t}.json?auth=${e}`)}catch(e){console.error("error-deleteRequest",e.message)}}async authGoogle(){try{const e=await Eo(ta,ea),t=Ps.credentialFromResult(e).accessToken,n=e.user;localStorage.setItem("tokenResponse",t),localStorage.setItem("email",n.email),localStorage.setItem("userAvatar",n.photoURL);const r=await this.getRequest(n.email);if(r){const e=JSON.stringify(r);localStorage.setItem("shopingList",e)}}catch(e){console.error("get-error",e.message)}}async deleteBook(e){const t=JSON.parse(localStorage.getItem("shopingList"));Object.keys(t).forEach((n=>{n===e&&delete t[e]}));const n=JSON.stringify(t);localStorage.setItem("shopingList",n);const r=localStorage.getItem("email"),i=r.substring(0,r.indexOf("."));await this.putRequest(t,i)}async addBookk(e){const t=localStorage.getItem("email"),n=await vn.fetchBookInfo(e),r={buyLinks:n.buy_links,title:n.title,id:n._id,listName:n.list_name,bookImg:n.book_image,author:n.author};if(localStorage.getItem("shopingList")){const e=JSON.parse(localStorage.getItem("shopingList"));e[r.id]=r;const t=JSON.stringify(e);localStorage.setItem("shopingList",t)}else{const e={};e[r.id]=r;const t=JSON.stringify(e);localStorage.setItem("shopingList",t)}const i=JSON.parse(localStorage.getItem("shopingList")),s=t.substring(0,t.indexOf("."));await this.patchRequest(i,s)}constructor(){this.auth=ta,this.app="https://team-project-d4f13-default-rtdb.europe-west1.firebasedatabase.app/"}}new na;var ra;ra=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();document.querySelector(".button-sing-auth-js").addEventListener("click",la);const ia=new na;async function sa(){await ia.authGoogle(),aa.innerHTML="",document.body.classList.remove("scroll-off"),ma(),document.body.classList.remove("scroll-off")}const oa=ia.auth,aa=document.querySelector(".modalWindow");function la(){if(localStorage.getItem("tokenResponse"))return localStorage.removeItem("tokenResponse"),localStorage.removeItem("userAvatar"),localStorage.removeItem("email"),localStorage.removeItem("shopingList"),void ma();aa.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth"">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <button type="submit">Sign in</button>\n    <div class=\'button-sing-group\'>\n    <p class="button-sign-up">Sing up</p>\n    <p class=\'button-sing\'>Sing in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';const e=aa.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-up"),n=e.querySelector(".button-google"),r=e.querySelector(".clousModalAuth");t.addEventListener("click",ua),n.addEventListener("click",sa),e.addEventListener("submit",ca),r.addEventListener("click",da),aa.classList.add("trans-modal"),document.body.classList.add("scroll-off")}async function ca(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.password.value;try{const e=await Gs(oa,t,n);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),aa.innerHTML="",document.body.classList.remove("scroll-off");const r=await ia.getRequest(t);if(r){const e=JSON.stringify(r);localStorage.setItem("shopingList",e)}else localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error("fire.data-error",e),alert(e.message)}ma()}function ua(){aa.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <input\n      type="password"\n      name="passwordConfirmation"\n      placeholder="password"\n    />\n    <button type="submit">sign up</button>\n    <div class=\'button-sing-group\'>\n    <p class=\'button-sing\'>Sing up</p>\n    <p class="button-sign-in">Sing in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';const e=aa.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-in"),n=e.querySelector(".button-google"),r=e.querySelector(".clousModalAuth");aa.classList.add("trans-modal"),t.addEventListener("click",la),e.addEventListener("submit",ha),n.addEventListener("click",sa),r.addEventListener("click",da),document.body.classList.add("scroll-off")}function da(){aa.classList.remove("trans-modal"),aa.innerHTML="",document.body.classList.remove("scroll-off")}async function ha(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.password.value,r=e.currentTarget.elements.passwordConfirmation.value;if(n&&n===r){console.log(t,n),aa.innerHTML="",document.body.classList.remove("scroll-off");try{const e=await qs(oa,t,n);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error(e.message),alert(e.message)}}else alert("Check the password");ma()}const fa=document.querySelector(".header-button-nav"),pa=document.querySelector(".button-sing-auth-js");function ma(){let e="";if(localStorage.getItem("tokenResponse")){const t=localStorage.getItem("userAvatar")?localStorage.getItem("userAvatar"):"https://bootstraptema.ru/snippets/icons/2016/mia/1.png",r=localStorage.getItem("email");e=`<div class='user-auth-zone'>\n        <img\n          src="${t}"\n          alt="user avatar"\n          loading="lazy"\n          class="user-img-auth"\n        />\n      <span class='nik-name'>${r.substring(0,r.indexOf("@"))}</span>\n        <div class='svg-user-auth'>\n        <svg width="23" height="26" fill="#ffffff">\n          <use href="${n(ra)}#caret-down"></use>\n        </svg>\n        </div>\n    </div>`,fa.classList.remove("header-not-uyth")}else e=`<div class="button-sing-auth-js">\n      <button class="btn-log-out" type="button">\n        Log in<span class="btn-icn-wrap">\n          <svg width="20" height="20">\n            <use href="${n(ra)}#arrow-right"></use>\n          </svg>\n        </span>\n      </button>\n    </div>`,fa.classList.add("header-not-uyth");pa.innerHTML=e}ma();var ga;ga=new URL(s("kyEFX").resolve("836Hl"),import.meta.url).toString();var ya;ya=new URL(s("kyEFX").resolve("kCfmF"),import.meta.url).toString();var va;va=new URL(s("kyEFX").resolve("eGo9w"),import.meta.url).toString();var ba;ba=new URL(s("kyEFX").resolve("1NmpU"),import.meta.url).toString();var wa;wa=new URL(s("kyEFX").resolve("lf6jX"),import.meta.url).toString();var Ea;Ea=new URL(s("kyEFX").resolve("9NT6S"),import.meta.url).toString();const Sa=new na;let Ta=null;async function Ia(e){const t=null!==localStorage.getItem("email");console.log(t);const r=e,i=await yn(r);Ta=r;const s=document.querySelector(".backdrop");s.classList.remove("is-hidden");document.querySelector(".modal").addEventListener("click",(e=>{e.stopPropagation()})),t&&(console.log(t),function(){const e=document.querySelector('[data-name="order-btn"]'),t=document.querySelector(".text-input"),n=JSON.parse(localStorage.getItem("shopingList"));Object.keys(n).includes(Ta)?(e.textContent="remove from the shopping list",e.classList.add("order-btn-remove-state"),e.classList.remove("order-btn"),t.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"):(e.textContent="Add to shopping list",e.classList.add("order-btn"),e.classList.remove("order-btn-remove-state"),t.innerHTML="")}()),document.body.style.overflow="hidden",s.addEventListener("click",c),window.document.addEventListener("keydown",(e=>{"Escape"===e.key&&c()}));document.querySelector(".close-btn ").addEventListener("click",c);const o=document.querySelector('[data-name="order-btn"]');o.addEventListener("click",u);const a=document.querySelector(".book-information"),l=function({book_image:e,title:t,author:r,description:i,buy_links:s}){const o=s[0].url,a=s[1].url,l=s[0].url;return`\n      <img class='book_modal-book-img' src="${e||"./src/images/stopper335@1x.png"}" alt='Book image'>\n    <div class='book_modal-book-descr-inf'>\n    <p class='book_modal-book-title'>${t||"No title."}</p>\n    <p class='book_modal-book-author'>${r||"No author."}</p>\n    <p class='book_modal-book-description'>${i||"No description."}</p>\n    <ul class='book_modal-links-group'>\n    <li class='book_modal-links'><a href=${o} target="_blank"> <img  src='${n(ga)}' srcset="${n(ga)} 1x, ${n(ya)} 2x" alt ='Amazon Icon'></a></li>\n    <li class='book_modal-links'><a href=${a} target="_blank"> <img  src='${n(va)}' srcset="${n(va)} 1x, ${n(ba)} 2x" alt ='Apple Icon'></a></li>\n    <li class='book_modal-links'><a href=${l} target="_blank"> <img  src='${n(wa)}' srcset="${n(wa)} 1x, ${n(Ea)} 2x" alt ='Book Shop Icon'></a></li>\n    </ul>\n    </div>\n       `}(i);function c(){s.classList.add("is-hidden"),a.innerHTML="",o.removeEventListener("click",u),document.body.style.overflow=""}function u(e){console.log("oncliiiiiiiiiiiiiiiiik",t);const n=document.querySelector(".text-input");o.classList.value.includes("order-btn-remove-state")?(Sa.deleteBook(r),o.textContent="Add to shopping list",o.classList.add("order-btn"),o.classList.remove("order-btn-remove-state"),n.innerHTML=""):(o.textContent="remove from the shopping list",o.classList.add("order-btn-remove-state"),n.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>",Sa.addBookk(r))}a.innerHTML=l}var _a,ka,xa={};_a=void 0!==t?t:"undefined"!=typeof window?window:xa,ka=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,h=function(a,u,h,p){if(!l("body"))return!1;t||f.Notify.init({});var m=c(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof h?g=h:"object"==typeof p&&(g=p),t=c(!0,t,g)}var y,v,b=t[a.toLocaleLowerCase("en")];d++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(y=u,(v=e.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(w.id=o.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var E=e.document.getElementById(o.overlayID)||e.document.createElement("div");E.id=o.overlayID,E.style.width="100%",E.style.height="100%",E.style.position="fixed",E.style.zIndex=t.zindex-1,E.style.left=0,E.style.top=0,E.style.right=0,E.style.bottom=0,E.style.background=b.backOverlayColor||t.backOverlayColor,E.className=t.cssAnimation?"nx-with-animation":"",E.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(E)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(w);var S=e.document.createElement("div");S.id=t.ID+"-"+d,S.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),S.style.fontSize=t.fontSize,S.style.color=b.textColor,S.style.background=b.background,S.style.borderRadius=t.borderRadius,S.style.pointerEvents="all",t.rtl&&(S.setAttribute("dir","rtl"),S.classList.add("nx-rtl-on")),S.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(S.style.animationDuration=t.cssAnimationDuration+"ms");var T="";if(t.closeButton&&"function"!=typeof h&&(T='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)S.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?T:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),S.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?T:"")}else S.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?T:"");if("left-bottom"===t.position||"right-bottom"===t.position){var _=e.document.getElementById(o.wrapID);_.insertBefore(S,_.firstChild)}else e.document.getElementById(o.wrapID).appendChild(S);var k=e.document.getElementById(S.id);if(k){var x,C,O=function(){k.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(x)},A=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(C)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(S.id).querySelector("span.nx-close-button").addEventListener("click",(function(){O();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&k.addEventListener("click",(function(){"function"==typeof h&&h(),O();var e=setTimeout((function(){A(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var R=function(){x=setTimeout((function(){O()}),t.timeout),C=setTimeout((function(){A()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(x),clearTimeout(C)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&d>0)for(var L=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),N=0;N<L.length;N++){var P=L[N];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,m)},f={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){h(n,e,t,r)},failure:function(e,t,n){h(r,e,t,n)},warning:function(e,t,n){h(i,e,t,n)},info:function(e,t,n){h(s,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return ka(_a)})):"object"==typeof xa?xa=ka(_a):_a.Notiflix=ka(_a);var Ca={};Object.defineProperty(Ca,"__esModule",{value:!0}),Ca.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};const Oa=new class{show(){this.spinnerEl.classList.remove("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden")}getEl(){return this.spinnerEl}constructor(){n(Ca)(this,"spinnerEl",document.querySelector(".spinner-js"))}};var Aa,Ra=/^\s+|\s+$/g,La=/^[-+]0x[0-9a-f]+$/i,Na=/^0b[01]+$/i,Pa=/^0o[0-7]+$/i,Ma=parseInt,Da="object"==typeof t&&t&&t.Object===Object&&t,Ba="object"==typeof self&&self&&self.Object===Object&&self,Ua=Da||Ba||Function("return this")(),ja=Object.prototype.toString,Fa=Math.max,za=Math.min,Ha=function(){return Ua.Date.now()};function $a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Va(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==ja.call(e)}(e))return NaN;if($a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=$a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ra,"");var n=Na.test(e);return n||Pa.test(e)?Ma(e.slice(2),n?2:8):La.test(e)?NaN:+e}function Wa(e){Ia(e)}Aa=function(e,t,n){var r,i,s,o,a,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,s=i;return r=i=void 0,c=t,o=e.apply(s,n)}function p(e){return c=e,a=setTimeout(g,t),u?f(e):o}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=s}function g(){var e=Ha();if(m(e))return y(e);a=setTimeout(g,function(e){var n=t-(e-l);return d?za(n,s-(e-c)):n}(e))}function y(e){return a=void 0,h&&r?f(e):(r=i=void 0,o)}function v(){var e=Ha(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return p(l);if(d)return a=setTimeout(g,t),f(l)}return void 0===a&&(a=setTimeout(g,t)),o}return t=Va(t)||0,$a(n)&&(u=!!n.leading,s=(d="maxWait"in n)?Fa(Va(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},v.flush=function(){return void 0===a?o:y(Ha())},v};const qa={bestsellersSectionEl:document.querySelector(".bookshelf"),categoriesListEl:document.querySelector(".categories-list"),allCategoriesTitleEl:document.querySelector(".cat-list"),bestsellersButton:document.querySelector(".bestsellers-button")};function Ga(e){return e.map((({_id:e,book_image:t,author:n,title:r})=>`<li class="book-item" data-id="${e}">\n      <div class="bookshelf-bool-link">\n    <div class="book-img-container">\n    <div class="book-shoppingcart is-hidden"></div>\n     <img class="book-img" loading="lazy" src="${t}" alt="${r}"  width="180px" height="256px"/>\n     <div class="books-overlay">\n     <p class="books-overlay-text">quick view\n     </p>\n     </div>\n     </div>\n     <p class="book-title">${r}</p>\n        <p class="author-name">${n}</p>\n        </div>\n        </li>`)).join("")}async function Ka(){try{Oa.show();const e=await vn.fetchTopBooks();if(!e||0===e.length)return void xa.Notify.failure("Sorry, we didn't find anything according to your request.");await async function(e){const t=e.map((async({list_name:e,books:t})=>`\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name" name="${e}">${e}</p>\n        <ul class="bestsellers-book-list open-js">\n        ${await Ga(t)}\n        </ul>\n        <div class="bestsellers-button-container">\n        <button type="button" class="bestsellers-button" name="${e}">see more</button>\n        </div>\n        </div>`)),n=(await Promise.all(t)).join("");qa.bestsellersSectionEl.innerHTML=`\n    <h2 class="bestsellers-title">${Ja("Best Sellers Books")}</h2>\n    ${n}`,document.querySelector(".bookshelf").addEventListener("click",(e=>{e.target.closest("li")&&Wa(e.target.closest("li").dataset.id)})),Ya()}(e),Oa.hide()}catch(e){console.log(e.message)}}function Ja(e){if(!e)return"";const t=e.trim().split(" "),n=t.pop();return`${t.join(" ")} <span class="categories-title-last-word">${n}</span>`}function Xa(e,t){const n=`\n    <h2 class="bestsellers-title">${Ja(t)}</h2>\n    <div class="bestsellers-category-item" name="${t}">\n      <ul class="category-book-list open-js">${Ga(e)}</ul>\n    </div>\n  `;qa.bestsellersSectionEl.innerHTML=n;document.querySelector(".bookshelf").addEventListener("click",(e=>{e.target.closest("li")&&Wa(e.target.closest("li").dataset.id)}))}function Ya(){const e=document.querySelectorAll(".bestsellers-book-list"),t={mobile:{index:0,count:1},tablet:{index:0,count:3},desktop:{index:0,count:1/0}};let n;n=window.innerWidth<768?t.mobile:window.innerWidth<1440?t.tablet:t.desktop,e.forEach((e=>{for(let t=0;t<e.children.length;t++)e.children[t].hidden=t<n.index||t>=n.index+n.count}))}window.addEventListener("DOMContentLoaded",Ka),qa.allCategoriesTitleEl.addEventListener("click",Ka),qa.bestsellersSectionEl.addEventListener("click",(async function(e){if(!e.target.classList.contains("bestsellers-button"))return;const{name:t}=e.target;Oa.show();try{const e=await vn.fetchSelectedCategory(t);if(!e||0===e.length)return void xa.Notify.failure("Sorry, we didn't find anything according to your request.");const n=function(e){const t=document.querySelector(".upper-case");t&&t.classList.remove("upper-case");document.querySelector(`li[name="${e}"]`).classList.add("upper-case")}(t),r=Ja(n);document.querySelector(".bestsellers-title").innerHTML=r,Xa(e,t),Oa.hide()}catch(e){console.log(e.message)}})),qa.categoriesListEl.addEventListener("click",(async function(e){const{nodeName:t,textContent:n}=e.target;if("LI"!==t||"All categories"===n.trim())return;Oa.show();try{const e=await vn.fetchSelectedCategory(n);if(!e||0===e.length)return void xa.Notify.failure("Sorry, we didn't find anything according to your request.");document.querySelector(".bestsellers-title").innerHTML=n,Xa(e,n),Oa.hide()}catch(e){console.log(e.message)}})),window.addEventListener("resize",n(Aa)(Ya,300)),qa.categoriesListEl.addEventListener("click",(async function(e){const{target:t}=e;if(!t.classList.contains("cat-list"))return;const{textContent:n,closest:r}=t,i=r.call(t,".cat-list"),s=document.querySelector(".cat-list.upper-case");s&&s.classList.remove("upper-case");if(i.classList.add("upper-case"),"All categories"===n)return void await vn.fetchTopBooks();await vn.fetchSelectedCategory(n)})),async function(){const e=await vn.fetchCategoryList();e.sort(((e,t)=>e.list_name.localeCompare(t.list_name)));const t=e.map((({list_name:e})=>`<li class="cat-list cat-text" name="${e}">${e}</li>`)).join("");qa.categoriesListEl.insertAdjacentHTML("beforeend",t)}();var Qa,Za=/^\s+|\s+$/g,el=/^[-+]0x[0-9a-f]+$/i,tl=/^0b[01]+$/i,nl=/^0o[0-7]+$/i,rl=parseInt,il="object"==typeof t&&t&&t.Object===Object&&t,sl="object"==typeof self&&self&&self.Object===Object&&self,ol=il||sl||Function("return this")(),al=Object.prototype.toString,ll=Math.max,cl=Math.min,ul=function(){return ol.Date.now()};function dl(e,t,n){var r,i,s,o,a,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,s=i;return r=i=void 0,c=t,o=e.apply(s,n)}function p(e){return c=e,a=setTimeout(g,t),u?f(e):o}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=s}function g(){var e=ul();if(m(e))return y(e);a=setTimeout(g,function(e){var n=t-(e-l);return d?cl(n,s-(e-c)):n}(e))}function y(e){return a=void 0,h&&r?f(e):(r=i=void 0,o)}function v(){var e=ul(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return p(l);if(d)return a=setTimeout(g,t),f(l)}return void 0===a&&(a=setTimeout(g,t)),o}return t=fl(t)||0,hl(n)&&(u=!!n.leading,s=(d="maxWait"in n)?ll(fl(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},v.flush=function(){return void 0===a?o:y(ul())},v}function hl(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function fl(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==al.call(e)}(e))return NaN;if(hl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=hl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Za,"");var n=tl.test(e);return n||nl.test(e)?rl(e.slice(2),n?2:8):el.test(e)?NaN:+e}Qa=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return hl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),dl(e,t,{leading:r,maxWait:t,trailing:i})};const pl=document.querySelector(".scroll-up"),ml=document.querySelector(".scroll-up__svg-path"),gl=ml.getTotalLength();ml.style.strokeDasharray=`${gl} ${gl}`,ml.style.transition="stroke-dashoffset 20ms";const yl=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",n(Qa)((()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=gl-yl()*gl/e;ml.style.strokeDashoffset=t})(),yl()>100?pl.classList.add("scroll-up--active"):pl.classList.remove("scroll-up--active")}),50)),pl.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));const vl=document.querySelector(".burger-menu-header"),bl=document.querySelector(".modal-burger-menu");vl.addEventListener("click",(()=>{bl.classList.toggle("modal-burger-menu-off"),vl.classList.toggle("active")}));document.querySelector(".button-themes").addEventListener("click",(()=>{console.log(document.body.style.getPropertyValue("--wayte")),"#111111"!==document.body.style.getPropertyValue("--wayte")?(document.body.style.setProperty("--dark","#ffffff"),document.body.style.setProperty("--wayte","#111111")):(document.body.style.setProperty("--dark","#111111"),document.body.style.setProperty("--wayte","#ffffff"))}));var wl;wl=new URL(s("kyEFX").resolve("fyIHp"),import.meta.url).toString();var El;El=new URL(s("kyEFX").resolve("heSKO"),import.meta.url).toString();var Sl;Sl=new URL(s("kyEFX").resolve("82Obt"),import.meta.url).toString();var Tl;Tl=new URL(s("kyEFX").resolve("6LgBb"),import.meta.url).toString();var Il;Il=new URL(s("kyEFX").resolve("fhgIZ"),import.meta.url).toString();var _l;_l=new URL(s("kyEFX").resolve("l19XY"),import.meta.url).toString();var kl;kl=new URL(s("kyEFX").resolve("9inf0"),import.meta.url).toString();var xl;xl=new URL(s("kyEFX").resolve("8KmUg"),import.meta.url).toString();var Cl;Cl=new URL(s("kyEFX").resolve("gAhZd"),import.meta.url).toString();const Ol=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:new URL(wl)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:new URL(El)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:new URL(Sl)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:new URL(Tl)},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:new URL(Il)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:new URL(_l)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:new URL(kl)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:new URL(xl)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(Cl)}];function Al(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function Rl(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:Al(t[n])&&Al(e[n])&&Object.keys(t[n]).length>0&&Rl(e[n],t[n])}))}const Ll={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Nl(){const e="undefined"!=typeof document?document:{};return Rl(e,Ll),e}const Pl={document:Ll,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function Ml(){const e="undefined"!=typeof window?window:{};return Rl(e,Pl),e}function Dl(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function Bl(e,t=0){return setTimeout(e,t)}function Ul(){return Date.now()}function jl(e,t="x"){const n=Ml();let r,i,s;const o=function(e){const t=Ml();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new n.WebKitCSSMatrix("none"===i?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),"x"===t&&(i=n.WebKitCSSMatrix?s.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(i=n.WebKitCSSMatrix?s.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),i||0}function Fl(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function zl(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const s=e[i];if(null!=s&&(r=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?r instanceof HTMLElement:r&&(1===r.nodeType||11===r.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,r=e.length;n<r;n+=1){const r=e[n],i=Object.getOwnPropertyDescriptor(s,r);void 0!==i&&i.enumerable&&(Fl(t[r])&&Fl(s[r])?s[r].__swiper__?t[r]=s[r]:zl(t[r],s[r]):!Fl(t[r])&&Fl(s[r])?(t[r]={},s[r].__swiper__?t[r]=s[r]:zl(t[r],s[r])):t[r]=s[r])}}}var r;return t}function Hl(e,t,n){e.style.setProperty(t,n)}function $l({swiper:e,targetPosition:t,side:n}){const r=Ml(),i=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{s=(new Date).getTime(),null===o&&(o=s);const l=Math.max(Math.min((s-o)/a,1),0),d=.5-Math.cos(l*Math.PI)/2;let h=i+d*(t-i);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),c(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function Vl(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function Wl(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function ql(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Gl(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Kl(e,t){return Ml().getComputedStyle(e,null).getPropertyValue(t)}function Jl(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Xl(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Yl(e,t,n){const r=Ml();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let Ql,Zl,ec;function tc(){return Ql||(Ql=function(){const e=Ml(),t=Nl();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Ql}function nc(e={}){return Zl||(Zl=function({userAgent:e}={}){const t=tc(),n=Ml(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===r;let f="MacIntel"===r;return!c&&f&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!h&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}(e)),Zl}function rc(){return ec||(ec=function(){const e=Ml();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,r]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&r<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),ec}const ic=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},sc=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},oc=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex,s=i+r-1;if(e.params.rewind)for(let r=i-t;r<=s+t;r+=1){const t=(r%n+n)%n;t!==i&&t>s&&sc(e,t)}else for(let r=Math.max(s-t,0);r<=Math.min(s+t,n-1);r+=1)r!==i&&r>s&&sc(e,r)};function ac({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(o=i>s?"next":i<s?"prev":"reset"),e.emit(`transition${r}`),t&&i!==s){if("reset"===o)return void e.emit(`slideResetTransition${r}`);e.emit(`slideChangeTransition${r}`),"next"===o?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function lc(e){const t=this,n=Nl(),r=Ml(),i=t.touchEventsData;i.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&""!==s.noSwipingClass,d=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,f=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(f?function(e,t=this){return function t(n){if(!n||n===Nl()||n===Ml())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(h,c):c.closest(h)))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const p=o.currentX,m=o.currentY,g=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,y=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(g&&(p<=y||p>=r.innerWidth-y)){if("prevent"!==g)return;e.preventDefault()}Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=Ul(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let v=!0;c.matches(i.focusableElements)&&(v=!1,"SELECT"===c.nodeName&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const b=v&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!b||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function cc(e){const t=Nl(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l));const c=r.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(r.evCache[c]=l);const u=r.evCache.length>1?r.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper)return s.startX=d,void(s.startY=h);if(!n.allowTouchMove)return l.target.matches(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(s,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),r.touchStartTime=Ul()));if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=h;const f=s.currentX-s.startX,p=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(void 0===r.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(f))/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),void 0===r.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(r.startMoving=!0)),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let m=n.isHorizontal()?f:p,g=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),s.diff=m,m*=i.touchRatio,o&&(m=-m,g=-g);const y=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const v=n.params.loop&&!i.cssMode;if(!r.isMoved){if(v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let b;r.isMoved&&y!==n.touchesDirection&&v&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),b=!0),n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let w=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),m>0?(v&&!b&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**E))):m<0&&(v&&!b&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===i.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**E))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),i.threshold>0){if(!(Math.abs(m)>i.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function uc(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=Ul(),d=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=Ul(),Bl((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let h;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,h=i.followFinger?o?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let f=0,p=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==a[e+t]?h>=a[e]&&h<a[e+t]&&(f=e,p=a[e+t]-a[e]):h>=a[e]&&(f=e,p=a[a.length-1]-a[a.length-2])}let m=null,g=null;i.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const y=(h-a[f])/p,v=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(y>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?m:f+v):t.slideTo(f)),"prev"===t.swipeDirection&&(y>1-i.longSwipesRatio?t.slideTo(f+v):null!==g&&y<0&&Math.abs(y)>i.longSwipesRatio?t.slideTo(g):t.slideTo(f))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(f+v):t.slideTo(f):("next"===t.swipeDirection&&t.slideTo(null!==m?m:f+v),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:f))}}function dc(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function hc(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function fc(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();i=0===s?0:(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function pc(e){ic(this,e.target),this.update()}let mc=!1;function gc(){}const yc=(e,t)=>{const n=Nl(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",dc,!0):e[c]("observerUpdate",dc,!0),i[l]("load",e.onLoad,{capture:!0})};const vc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var bc={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function wc(e,t){return function(n={}){const r=Object.keys(n)[0],i=n[r];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in i?(!0===e[r]&&(e[r]={enabled:!0}),"object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),zl(t,n)):zl(t,n)):zl(t,n)}}const Ec={eventsEmitter:{on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,r,i;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...r])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,r)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const r=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(Kl(r,"padding-left")||0,10)-parseInt(Kl(r,"padding-right")||0,10),n=n-parseInt(Kl(r,"padding-top")||0,10)-parseInt(Kl(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&r.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,d=Vl(s,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:d.length;let f=[];const p=[],m=[];let g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(e));let y=r.slidesOffsetAfter;"function"==typeof y&&(y=r.slidesOffsetAfter.call(e));const v=e.snapGrid.length,b=e.slidesGrid.length;let w=r.spaceBetween,E=-g,S=0,T=0;if(void 0===o)return;"string"==typeof w&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*o:"string"==typeof w&&(w=parseFloat(w)),e.virtualSize=-w,d.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),r.centeredSlides&&r.cssMode&&(Hl(i,"--swiper-centered-offset-before",""),Hl(i,"--swiper-centered-offset-after",""));const I=r.grid&&r.grid.rows>1&&e.grid;let _;I&&e.grid.initSlides(h);const k="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>void 0!==r.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<h;i+=1){let s;if(_=0,d[i]&&(s=d[i]),I&&e.grid.updateSlide(i,s,h,t),!d[i]||"none"!==Kl(s,"display")){if("auto"===r.slidesPerView){k&&(d[i].style[t("width")]="");const o=getComputedStyle(s),a=s.style.transform,l=s.style.webkitTransform;if(a&&(s.style.transform="none"),l&&(s.style.webkitTransform="none"),r.roundLengths)_=e.isHorizontal()?Yl(s,"width",!0):Yl(s,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),r=n(o,"padding-right"),i=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)_=e+i+a;else{const{clientWidth:n,offsetWidth:o}=s;_=e+t+r+i+a+(o-n)}}a&&(s.style.transform=a),l&&(s.style.webkitTransform=l),r.roundLengths&&(_=Math.floor(_))}else _=(o-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(_=Math.floor(_)),d[i]&&(d[i].style[t("width")]=`${_}px`);d[i]&&(d[i].swiperSlideSize=_),m.push(_),r.centeredSlides?(E=E+_/2+S/2+w,0===S&&0!==i&&(E=E-o/2-w),0===i&&(E=E-o/2-w),Math.abs(E)<.001&&(E=0),r.roundLengths&&(E=Math.floor(E)),T%r.slidesPerGroup==0&&f.push(E),p.push(E)):(r.roundLengths&&(E=Math.floor(E)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&f.push(E),p.push(E),E=E+_+w),e.virtualSize+=_+w,S=_,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+y,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&(i.style.width=`${e.virtualSize+w}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+w}px`),I&&e.grid.updateWrapperSize(_,f,t),!r.centeredSlides){const t=[];for(let n=0;n<f.length;n+=1){let i=f[n];r.roundLengths&&(i=Math.floor(i)),f[n]<=e.virtualSize-o&&t.push(i)}f=t,Math.floor(e.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-o)}if(c&&r.loop){const t=m[0]+w;if(r.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),i=t*r.slidesPerGroup;for(let e=0;e<n;e+=1)f.push(f[f.length-1]+i)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===r.slidesPerGroup&&f.push(f[f.length-1]+t),p.push(p[p.length-1]+t),e.virtualSize+=t}if(0===f.length&&(f=[0]),0!==w){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(((e,t)=>!(r.cssMode&&!r.loop)||t!==d.length-1)).forEach((e=>{e.style[n]=`${w}px`}))}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(w||0)})),e-=w;const t=e-o;f=f.map((e=>e<0?-g:e>t?t+y:e))}if(r.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(w||0)})),e-=w,e<o){const t=(o-e)/2;f.forEach(((e,n)=>{f[n]=e-t})),p.forEach(((e,n)=>{p[n]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Hl(i,"--swiper-centered-offset-before",-f[0]+"px"),Hl(i,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(h!==u&&e.emit("slidesLengthChange"),f.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==b&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!(c||r.cssMode||"slide"!==r.effect&&"fade"!==r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);h<=r.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(i=0;i<n.length;i+=1)if(void 0!==n[i]){const e=n[i].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<r.length;e+=1){const l=r[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(o-c),f=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||f>1&&f<=t.size||h<=0&&f>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),r[e].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===r)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||i<=0,o=a||i>=1,n&&(i=0),a&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],s=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=i?(l-i)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e=>Vl(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),s)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(n.slideActiveClass);let e=Gl(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let r=ql(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,r&&r.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1):r>=t[e]&&(i=e);return n.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===s)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let d;d=t.virtual&&i.virtual.enabled&&i.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:c}),t.initialized&&oc(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i,s=!1;if(r)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===r){s=!0,i=e;break}if(!r||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:r,wrapperEl:i}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let s=jl(i,e);return s+=this.cssOverflowAdjustment(),n&&(s=-s),s||0},setTranslate:function(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=r?-e:e:c=e,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,s.updateProgress(u),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return $l({swiper:s,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),ac({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),ac({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,n=!0,r,i){"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:p}=s;if(s.animating&&a.preventInteractionOnTransition||!p&&!r&&!i)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const y=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*y),n=Math.floor(100*c[e]),r=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1):t>=n&&(o=e)}if(s.initialized&&o!==d){if(!s.allowSlideNext&&y<s.translate&&y<s.minTranslate())return!1;if(!s.allowSlidePrev&&y>s.translate&&y>s.maxTranslate()&&(d||0)!==o)return!1}let v;if(o!==(u||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(y),v=o>d?"next":o<d?"prev":"reset",h&&-y===s.translate||!h&&y===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(y),"reset"!==v&&(s.transitionStart(n,v),s.transitionEnd(n,v)),!1;if(a.cssMode){const e=s.isHorizontal(),n=h?y:-y;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{f[e?"scrollLeft":"scrollTop"]=n}))):f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return $l({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(y),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,v),0===t?s.transitionEnd(n,v):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,v))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,r){if("string"==typeof e){e=parseInt(e,10)}const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s+=i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,t,n,r)},slideNext:function(e=this.params.speed,t=!0,n){const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=d(a?r.translate:-r.translate),f=s.map((e=>d(e)));let p=s[f.indexOf(h)-1];if(void 0===p&&i.cssMode){let e;s.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(p=s[e>0?e-1:e])}let m=0;if(void 0!==p&&(m=o.indexOf(p),m<0&&(m=r.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return r.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const e=i.snapGrid[a];l-e>(i.snapGrid[a+1]-e)*r&&(s+=i.params.slidesPerGroup)}else{const e=i.snapGrid[a-1];l-e<=(i.snapGrid[a]-e)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-r/2||s>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),s=e.getSlideIndex(Vl(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Bl((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-r?(e.loopFix(),s=e.getSlideIndex(Vl(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),Bl((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}},loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;Vl(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const f="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let p=h.loopedSlides||f;p%h.slidesPerGroup!=0&&(p+=h.slidesPerGroup-p%h.slidesPerGroup),a.loopedSlides=p;const m=[],g=[];let y=a.activeIndex;void 0===i?i=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):y=i;const v="next"===n||!n,b="prev"===n||!n;let w=0,E=0;if(i<p){w=Math.max(p-i,h.slidesPerGroup);for(let e=0;e<p-i;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(i>a.slides.length-2*p){E=Math.max(i-(a.slides.length-2*p),h.slidesPerGroup);for(let e=0;e<E;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(b&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),v&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===h.slidesPerView&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&b)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y+w]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y+w,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else r&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&v)if(void 0===e){const e=a.slidesGrid[y],t=a.slidesGrid[y-E]-e;o?a.setTranslate(a.translate-t):(a.slideTo(y-E,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=Nl(),{params:n}=e;e.onTouchStart=lc.bind(e),e.onTouchMove=cc.bind(e),e.onTouchEnd=uc.bind(e),n.cssMode&&(e.onScroll=fc.bind(e)),e.onClick=hc.bind(e),e.onLoad=pc.bind(e),mc||(t.addEventListener("touchstart",gc),mc=!0),yc(e,"on")},detachEvents:function(){yc(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,l=vc(e,r),c=vc(e,a),u=r.enabled;l&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===r.grid.fill)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=r[t]&&r[t].enabled,i=a[t]&&a[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const d=a.direction&&a.direction!==r.direction,h=r.loop&&(a.slidesPerView!==r.slidesPerView||d);d&&n&&e.changeDirection(),zl(e.params,a);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),h&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const i=Ml(),s="window"===t?i.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:s,value:a}=o[e];"window"===t?i.matchMedia(`(min-width: ${a}px)`).matches&&(r=s):a<=n.clientWidth&&(r=s)}return r||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Sc={};class Tc{getSlideIndex(e){const{slidesEl:t,params:n}=this,r=Jl(Vl(t,`.${n.slideClass}, swiper-slide`)[0]);return Jl(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=Vl(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:r,slidesGrid:i,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=r[a].swiperSlideSize;for(let n=a+1;n<r.length;n+=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<r.length;e+=1){(t?i[e]+s[e]-i[a]<o:i[e]-i[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){i[a]-i[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&ic(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)r(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(r())}return Vl(n,r())[0]})();return!i&&t.params.createElements&&(i=Wl("div",t.params.wrapperClass),n.append(i),Vl(n,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement?n:i,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===Kl(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===Kl(n,"direction")),wrongRTL:"-webkit-box"===Kl(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?ic(t,e):e.addEventListener("load",(e=>{ic(t,e.target)}))})),oc(t),t.initialized=!0,oc(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:i,wrapperEl:s,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,Dl(n)),n.destroyed=!0),null}static extendDefaults(e){zl(Sc,e)}static get extendedDefaults(){return Sc}static get defaults(){return bc}static installModule(e){Tc.prototype.__modules__||(Tc.prototype.__modules__=[]);const t=Tc.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Tc.installModule(e))),Tc):(Tc.installModule(e),Tc)}constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=zl({},n),t&&!n.el&&(n.el=t);const r=Nl();if(n.el&&"string"==typeof n.el&&r.querySelectorAll(n.el).length>1){const e=[];return r.querySelectorAll(n.el).forEach((t=>{const r=zl({},n,{el:t});e.push(new Tc(r))})),e}const i=this;i.__swiper__=!0,i.support=tc(),i.device=nc({userAgent:n.userAgent}),i.browser=rc(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],n.modules&&Array.isArray(n.modules)&&i.modules.push(...n.modules);const s={};i.modules.forEach((e=>{e({params:n,swiper:i,extendParams:wc(n,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}));const o=zl({},bc,s);return i.params=zl({},o,Sc,n),i.originalParams=zl({},i.params),i.passedParams=zl({},n),i.params&&i.params.on&&Object.keys(i.params.on).forEach((e=>{i.on(e,i.params.on[e])})),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===i.params.direction,isVertical:()=>"vertical"===i.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}}Object.keys(Ec).forEach((e=>{Object.keys(Ec[e]).forEach((t=>{Tc.prototype[t]=Ec[e][t]}))})),Tc.use([function({swiper:e,on:t,emit:n}){const r=Ml();let i=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==r.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{s=r.requestAnimationFrame((()=>{const{width:n,height:r}=e;let i=n,s=r;t.forEach((({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),i===n&&s===r||o()}))})),i.observe(e.el)):(r.addEventListener("resize",o),r.addEventListener("orientationchange",a))})),t("destroy",(()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=Ml(),o=(t,n={})=>{const o=new(s.MutationObserver||s.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void r("observerUpdate",t[0]);const n=function(){r("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(n):s.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=Xl(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);var Ic=Tc;const _c=document.querySelector(".support-list"),kc=Ol.map((({title:e,url:t,img:n},r)=>{return`<li class="support-item swiper-slide">\n  <a class="support-link" href=${t} target="_blank" rel="nofollow noopener noreferrer">\n    <span class="support-number">${i=r+1,i.toString().padStart(2,"0")}</span>\n    <img\n      class="support-image"\n      srcset=${n}\n      src=${n}\n      alt=${e}\n    />\n  </a>\n</li>`;var i})).join("");_c.insertAdjacentHTML("beforeend",kc);new Ic(".mySwiper",{loop:!0,navigation:{nextEl:".swiper-btn-next"}});
//# sourceMappingURL=index.ac2ac0d2.js.map
