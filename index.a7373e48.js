function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequire7599;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7599=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.a7373e48.js","8OQ7p":"icons.4c16bf73.svg","836Hl":"amazon@1x.079940f4.png","kCfmF":"amazon@2x.9519639f.png","eGo9w":"book@1x.4bca86b0.png","1NmpU":"book@2x.f258df53.png","lf6jX":"books@1x.d21f8dfc.png","9NT6S":"books@2x.2abcb86b.png","5UbS1":"index.c01f5473.css","xwhNR":"index.1dd8cd77.js"}')),s("fPYYr");var i,r=s("3bbpN"),a=s("eyjy7");i=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();document.querySelector(".button-sing-auth-js").addEventListener("click",b);const l=new(0,r.DataFirebase);async function c(){await l.authGoogle(),d.innerHTML="",document.body.classList.remove("scroll-off"),E()}const u=l.auth,d=document.querySelector(".modalWindow"),m=document.querySelector(".burger-menu-header"),p=document.querySelector(".modal-burger-menu");m.addEventListener("click",(()=>{p.classList.toggle("modal-burger-menu-off"),m.classList.toggle("active"),window.scrollTo(0,0),document.body.classList.toggle("scroll-off"),m.classList.value.includes("active")&&window.document.addEventListener("keydown",(e=>{m.classList.value.includes("active")&&"Escape"===e.key&&(p.classList.toggle("modal-burger-menu-off"),m.classList.toggle("active"),document.body.classList.toggle("scroll-off"))}),{once:!0})}));const f=document.querySelector(".burger-button-auth"),g=document.querySelector(".burger-button-span");function v(){localStorage.getItem("tokenResponse")?g.innerHTML="Log out":g.innerHTML="Log in"}function b(){if(window.document.addEventListener("keydown",(e=>{"Escape"===e.key&&k()}),{once:!0}),window.scrollTo(0,0),localStorage.getItem("tokenResponse"))return localStorage.removeItem("tokenResponse"),localStorage.removeItem("userAvatar"),localStorage.removeItem("email"),localStorage.removeItem("shopingList"),void E();const t=`\n    <div class="modal-bakc">\n    <form class="modal-form-auth"">\n    <div class='clousModalAuth'>&times;</div>\n    <div class="input-wrapper">\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <svg class="input-icons">\n          <use href="${e(i)}#mail"></use>\n        </svg>\n        </div>\n        <div class="input-wrapper">\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <svg class="input-icons">\n          <use href="${e(i)}#lock"></use>\n        </svg>\n        </div>\n    <button type="submit">Sign in</button>\n    <div class='button-sing-group'>\n    <p class="button-sign-up">Sign up</p>\n    <p class='button-sing'>Sign in</p>\n    <p class='button-google'>google</p>\n    </div>\n  </form>\n  </div>`;d.innerHTML=t;const n=d.querySelector(".modal-form-auth"),o=n.querySelector(".button-sign-up"),s=n.querySelector(".button-google"),r=n.querySelector(".clousModalAuth");o.addEventListener("click",y),s.addEventListener("click",c),n.addEventListener("submit",h),r.addEventListener("click",k),d.classList.add("trans-modal"),document.body.classList.add("scroll-off"),v()}async function h(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.password.value;try{const e=await(0,a.signInWithEmailAndPassword)(u,t,n);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),d.innerHTML="",document.body.classList.remove("scroll-off");const o=await l.getRequest(t);if(o){const e=JSON.stringify(o);localStorage.setItem("shopingList",e)}else localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error("fire.data-error",e),alert(e.message)}E()}function y(){const t=`\n    <div class="modal-bakc">\n    <form class="modal-form-auth">\n    <div class='clousModalAuth'>&times;</div>\n    <div class="input-wrapper">\n    <input\n      type="email"\n      name="email"\n      placeholder="email"/>\n    <svg class="input-icons"><use href="${e(i)}#mail"></use></svg>\n    </div>\n    <div class="input-wrapper">\n    <input\n      type="password"\n      name="password"\n      placeholder="password"/>\n    <svg class="input-icons"><use href="${e(i)}#lock"></use></svg>\n    </div>\n    <div class="input-wrapper">\n    <input\n      type="password"\n      name="passwordConfirmation"\n      placeholder="password"/>\n    <svg class="input-icons"><use href="${e(i)}#lock"></use></svg>\n    </div>\n    <button type="submit">sign up</button>\n    <div class='button-sing-group'>\n    <p class='button-sing'>Sign up</p>\n    <p class="button-sign-in">Sign in</p>\n    <p class='button-google'>google</p>\n    </div>\n  </form>\n  </div>`;d.innerHTML=t;const n=d.querySelector(".modal-form-auth"),o=n.querySelector(".button-sign-in"),s=n.querySelector(".button-google"),r=n.querySelector(".clousModalAuth");d.classList.add("trans-modal"),o.addEventListener("click",b),n.addEventListener("submit",w),s.addEventListener("click",c),r.addEventListener("click",k),document.body.classList.add("scroll-off")}function k(){d.classList.remove("trans-modal"),d.innerHTML="",document.body.classList.remove("scroll-off")}async function w(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.password.value,o=e.currentTarget.elements.passwordConfirmation.value;if(n&&n===o){d.innerHTML="",document.body.classList.remove("scroll-off");try{const e=await(0,a.createUserWithEmailAndPassword)(u,t,n);localStorage.setItem("tokenResponse",e._tokenResponse.idToken),localStorage.setItem("email",t),localStorage.setItem("shopingList",JSON.stringify({}))}catch(e){console.error(e.message),alert(e.message)}}else alert("Check the password");E()}f.addEventListener("click",(function(e){m.classList.toggle("active"),p.classList.toggle("modal-burger-menu-off"),document.body.classList.toggle("scroll-off"),b()})),v();const L=document.querySelector(".header-button-nav"),S=document.querySelector(".button-sing-auth-js");function E(){let t="";if(localStorage.getItem("tokenResponse")){const n=localStorage.getItem("userAvatar")?localStorage.getItem("userAvatar"):"https://bootstraptema.ru/snippets/icons/2016/mia/1.png",o=localStorage.getItem("email");t=`<div class='user-auth-zone'>\n        <img\n          src="${n}"\n          alt="user avatar"\n          loading="lazy"\n          class="user-img-auth"\n          width="100%"\n          height="auto"\n        />\n      <span class='nik-name'>${o.substring(0,o.indexOf("@"))}</span>\n        <div class='svg-user-auth'>\n        <svg width="23" height="26" fill="#ffffff">\n          <use href="${e(i)}#caret-down"></use>\n        </svg>\n        </div>\n    </div>`,L.classList.remove("header-not-uyth")}else t=`<div class="button-sing-auth-js">\n      <button class="btn-log-out" type="button">\n        Log in<span class="btn-icn-wrap">\n          <svg width="20" height="20">\n            <use href="${e(i)}#arrow-right"></use>\n          </svg>\n        </span>\n      </button>\n    </div>`,L.classList.add("header-not-uyth");S.innerHTML=t}E();var x,T=s("fPYYr");T=s("fPYYr"),r=s("3bbpN");x=new URL(s("kyEFX").resolve("836Hl"),import.meta.url).toString();var $;$=new URL(s("kyEFX").resolve("kCfmF"),import.meta.url).toString();var _;_=new URL(s("kyEFX").resolve("eGo9w"),import.meta.url).toString();var q;q=new URL(s("kyEFX").resolve("1NmpU"),import.meta.url).toString();var H;H=new URL(s("kyEFX").resolve("lf6jX"),import.meta.url).toString();var j;j=new URL(s("kyEFX").resolve("9NT6S"),import.meta.url).toString();const A=new(0,r.DataFirebase);let I=null;const M=document.querySelector("#button-add-book");async function N(t){const n=null!==localStorage.getItem("email"),o=t,s=await T.axiosApiBooks.fetchBookInfo(o);I=o;const i=document.querySelector(".backdrop");i.classList.remove("is-hidden");document.querySelector(".modal").addEventListener("click",(e=>{e.stopPropagation()})),n?function(){const e=document.querySelector('[data-name="order-btn"]'),t=document.querySelector(".text-input");M.classList.remove("visually-hidden");const n=JSON.parse(localStorage.getItem("shopingList"))?JSON.parse(localStorage.getItem("shopingList")):{};Object.keys(n).includes(I)?(e.textContent="remove from the shopping list",e.classList.add("btn-shop-list-modal-remove"),e.classList.remove("btn-shop-list-modal-add"),t.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"):(e.textContent="Add to shopping list",e.classList.add("btn-shop-list-modal-add"),e.classList.remove("btn-shop-list-modal-remove"),t.innerHTML="")}():(console.log(M),M.classList.add("visually-hidden")),document.body.style.overflow="hidden",i.addEventListener("click",c),window.document.addEventListener("keydown",(e=>{"Escape"===e.key&&c()}));document.querySelector(".close-btn ").addEventListener("click",c);const r=document.querySelector('[data-name="order-btn"]');r.addEventListener("click",u);const a=document.querySelector(".book-information"),l=function({book_image:t,title:n,author:o,description:s,buy_links:i}){const r=i[0].url,a=i[1].url,l=i[3].url;return`\n      <img class='book_modal-book-img' src="${t||"./src/images/stopper335@1x.png"}" alt='Book image'>\n    <div class='book_modal-book-descr-inf'>\n    <p class='book_modal-book-title'>${n||"No title."}</p>\n    <p class='book_modal-book-author'>${o||"No author."}</p>\n    <p class='book_modal-book-description'>${s||"No description."}</p>\n    <ul class='book_modal-links-group'>\n    <li class='book_modal-links'><a href=${r} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${e(x)}' srcset="${e(x)} 1x, ${e($)} 2x" alt ='Amazon Icon'></a></li>\n    <li class='book_modal-links'><a href=${a} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${e(_)}' srcset="${e(_)} 1x, ${e(q)} 2x" alt ='Apple Icon'></a></li>\n    <li class='book_modal-links'><a href=${l} target="_blank" rel="nofollow noopener noreferrer"> <img  src='${e(H)}' srcset="${e(H)} 1x, ${e(j)} 2x" alt ='Book Shop Icon'></a></li>\n    </ul>\n    </div>\n       `}(s);function c(){i.classList.add("is-hidden"),document.body.style.overflow="auto",setTimeout((()=>{a.innerHTML=""}),500),r.removeEventListener("click",u)}function u(e){const t=document.querySelector(".text-input");r.classList.value.includes("btn-shop-list-modal-remove")?(A.deleteBook(o),r.textContent="Add to shopping list",r.classList.add("btn-shop-list-modal-add"),r.classList.remove("btn-shop-list-modal-remove"),t.innerHTML=""):(r.textContent="remove from the shopping list",r.classList.add("btn-shop-list-modal-remove"),t.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>",A.addBookk(o))}a.innerHTML=l}var O=s("iQIUW"),R={};Object.defineProperty(R,"__esModule",{value:!0}),R.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};const F=new class{show(){this.spinnerEl.classList.remove("is-hidden")}hide(){this.spinnerEl.classList.add("is-hidden")}getEl(){return this.spinnerEl}constructor(){e(R)(this,"spinnerEl",document.querySelector(".spinner-js"))}};var C,B=/^\s+|\s+$/g,U=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,D=/^0o[0-7]+$/i,P=parseInt,Y="object"==typeof t&&t&&t.Object===Object&&t,X="object"==typeof self&&self&&self.Object===Object&&self,z=Y||X||Function("return this")(),J=Object.prototype.toString,G=Math.max,Q=Math.min,V=function(){return z.Date.now()};function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function K(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==J.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(B,"");var n=W.test(e);return n||D.test(e)?P(e.slice(2),n?2:8):U.test(e)?NaN:+e}C=function(e,t,n){var o,s,i,r,a,l,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=s;return o=s=void 0,c=t,r=e.apply(i,n)}function f(e){return c=e,a=setTimeout(v,t),u?p(e):r}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function v(){var e=V();if(g(e))return b(e);a=setTimeout(v,function(e){var n=t-(e-l);return d?Q(n,i-(e-c)):n}(e))}function b(e){return a=void 0,m&&o?p(e):(o=s=void 0,r)}function h(){var e=V(),n=g(e);if(o=arguments,s=this,l=e,n){if(void 0===a)return f(l);if(d)return a=setTimeout(v,t),p(l)}return void 0===a&&(a=setTimeout(v,t)),r}return t=K(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?G(K(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=s=a=void 0},h.flush=function(){return void 0===a?r:b(V())},h};const ee=document.querySelector(".bookshelf");const te={bestsellersSectionEl:document.querySelector(".bookshelf"),categoriesListEl:document.querySelector(".categories-list"),allCategoriesTitleEl:document.querySelector(".cat-list"),bestsellersButton:document.querySelector(".bestsellers-button")};function ne(e){return e.map((({_id:e,book_image:t,author:n,title:o})=>`<li class="book-item" data-id="${e}">\n      <div class="bookshelf-bool-link">\n    <div class="book-img-container">\n    <div class="book-shoppingcart is-hidden"></div>\n     <img class="book-img" loading="lazy" src="${t}" alt="${o}"  width="180px" height="256px"/>\n     <div class="books-overlay">\n     <p class="books-overlay-text">quick view\n     </p>\n     </div>\n     </div>\n     <p class="book-title">${o}</p>\n        <p class="author-name">${n}</p>\n        </div>\n        </li>`)).join("")}function oe(e){e.target.closest("li")&&N(e.target.closest("li").dataset.id)}async function se(){try{F.show();const e=await T.axiosApiBooks.fetchTopBooks();if(!e||0===e.length)return void O.Notify.failure("Sorry, we didn't find anything according to your request.");await async function(e){const t=e.map((async({list_name:e,books:t})=>`\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name" name="${e}">${e}</p>\n        <ul class="bestsellers-book-list open-js">\n        ${await ne(t)}\n        </ul>\n        <div class="bestsellers-button-container">\n        <button type="button" class="bestsellers-button" aria-label="see more" name="${e}">see more</button>\n        </div>\n        </div>`)),n=(await Promise.all(t)).join("");te.bestsellersSectionEl.innerHTML=`\n    <h2 class="bestsellers-title">${ie("Best Sellers Books")}</h2>\n    ${n}`,ee.addEventListener("click",oe),ae()}(e),F.hide()}catch(e){console.log(e.message)}}function ie(e){if(!e)return"";const t=e.trim().split(" "),n=t.pop();return`${t.join(" ")} <span class="categories-title-last-word">${n}</span>`}function re(e,t){const n=`\n    <h2 class="bestsellers-title">${ie(t)}</h2>\n    <div class="bestsellers-category-item" name="${t}">\n      <ul class="category-book-list open-js">${ne(e)}</ul>\n    </div>\n  `;te.bestsellersSectionEl.innerHTML=n;document.querySelector(".bookshelf");ee.addEventListener("click",oe)}function ae(){const e=document.querySelectorAll(".bestsellers-book-list"),t={mobile:{index:0,count:1},tablet:{index:0,count:3},desktop:{index:0,count:1/0}};let n;n=window.innerWidth<768?t.mobile:window.innerWidth<1440?t.tablet:t.desktop,e.forEach((e=>{for(let t=0;t<e.children.length;t++)e.children[t].hidden=t<n.index||t>=n.index+n.count}))}if(window.addEventListener("DOMContentLoaded",se),te.allCategoriesTitleEl.addEventListener("click",se),te.bestsellersSectionEl.addEventListener("click",(async function(e){if(!e.target.classList.contains("bestsellers-button"))return;const{name:t}=e.target;F.show(),window.innerWidth<1440&&le(te.bestsellersSectionEl);try{const e=await T.axiosApiBooks.fetchSelectedCategory(t);if(!e||0===e.length)return void O.Notify.failure("Sorry, we didn't find anything according to your request.");const n=function(e){const t=document.querySelector(".upper-case");t&&t.classList.remove("upper-case");document.querySelector(`li[name="${e}"]`).classList.add("upper-case")}(t),o=ie(n);document.querySelector(".bestsellers-title").innerHTML=o,re(e,t),F.hide()}catch(e){console.log(e.message)}})),te.categoriesListEl.addEventListener("click",(async function(e){const{nodeName:t,textContent:n}=e.target;if("LI"!==t||"All categories"===n.trim())return;F.show();try{const e=await T.axiosApiBooks.fetchSelectedCategory(n);if(!e||0===e.length)return void O.Notify.failure("Sorry, we didn't find anything according to your request.");document.querySelector(".bestsellers-title").innerHTML=n,re(e,n),F.hide()}catch(e){console.log(e.message)}})),ee.addEventListener("click",oe),window.addEventListener("resize",e(C)(ae,300)),window.innerWidth<768){const e=document.querySelector('li[data-name="All categories"]');e&&e.classList.add("cat-list--fixed")}function le(e,t="start"){e.scrollIntoView({behavior:"smooth",position:t})}T=s("fPYYr");te.categoriesListEl.addEventListener("click",(async function(e){const{target:t}=e;if(!t.classList.contains("cat-list"))return;const{textContent:n,closest:o}=t,s=o.call(t,".cat-list"),i=document.querySelector(".cat-list.upper-case");i&&i.classList.remove("upper-case");if(s.classList.add("upper-case"),"All categories"===n)return void await T.axiosApiBooks.fetchTopBooks();await T.axiosApiBooks.fetchSelectedCategory(n),window.innerWidth<1440&&le(te.bestsellersSectionEl)})),async function(){const e=await T.axiosApiBooks.fetchCategoryList();e.sort(((e,t)=>e.list_name.localeCompare(t.list_name)));const t=e.map((({list_name:e})=>`<li class="cat-list cat-text" name="${e}">${e}</li>`)).join("");te.categoriesListEl.insertAdjacentHTML("beforeend",t)}();var ce,ue=/^\s+|\s+$/g,de=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,fe=parseInt,ge="object"==typeof t&&t&&t.Object===Object&&t,ve="object"==typeof self&&self&&self.Object===Object&&self,be=ge||ve||Function("return this")(),he=Object.prototype.toString,ye=Math.max,ke=Math.min,we=function(){return be.Date.now()};function Le(e,t,n){var o,s,i,r,a,l,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=s;return o=s=void 0,c=t,r=e.apply(i,n)}function f(e){return c=e,a=setTimeout(v,t),u?p(e):r}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function v(){var e=we();if(g(e))return b(e);a=setTimeout(v,function(e){var n=t-(e-l);return d?ke(n,i-(e-c)):n}(e))}function b(e){return a=void 0,m&&o?p(e):(o=s=void 0,r)}function h(){var e=we(),n=g(e);if(o=arguments,s=this,l=e,n){if(void 0===a)return f(l);if(d)return a=setTimeout(v,t),p(l)}return void 0===a&&(a=setTimeout(v,t)),r}return t=Ee(t)||0,Se(n)&&(u=!!n.leading,i=(d="maxWait"in n)?ye(Ee(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=l=s=a=void 0},h.flush=function(){return void 0===a?r:b(we())},h}function Se(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ee(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==he.call(e)}(e))return NaN;if(Se(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Se(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ue,"");var n=me.test(e);return n||pe.test(e)?fe(e.slice(2),n?2:8):de.test(e)?NaN:+e}ce=function(e,t,n){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Se(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),Le(e,t,{leading:o,maxWait:t,trailing:s})};const xe=document.querySelector(".scroll-up"),Te=document.querySelector(".scroll-up__svg-path"),$e=Te.getTotalLength();Te.style.strokeDasharray=`${$e} ${$e}`,Te.style.transition="stroke-dashoffset 20ms";const _e=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",e(ce)((()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=$e-_e()*$e/e;Te.style.strokeDashoffset=t})(),_e()>100?xe.classList.add("scroll-up--active"):xe.classList.remove("scroll-up--active")}),50)),xe.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),s("2wbaf"),s("f4NpA");
//# sourceMappingURL=index.a7373e48.js.map
