!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7599;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequire7599=r),r("iE7OH").register(JSON.parse('{"EVgbq":"index.54a7ff38.js","410VS":"icons.4c16bf73.svg","eO8bt":"amazon@1x.079940f4.png","iYw0R":"amazon@2x.9519639f.png","4IcDd":"book@1x.4bca86b0.png","7KcSF":"book@2x.f258df53.png","4VQah":"books@1x.d21f8dfc.png","gi1HH":"books@2x.2abcb86b.png","5UbS1":"index.9761b1fe.css","c2CaB":"index.b73784c8.js"}')),r("fxE4d");var s,a=r("bpxeT"),i=r("2TvXO"),c=r("kzJAm"),l=r("gQOBw");s=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("410VS"),document.querySelector(".button-sing-auth-js").addEventListener("click",k);var u=new(0,c.DataFirebase);function d(){return p.apply(this,arguments)}function p(){return(p=e(a)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.authGoogle();case 2:m.innerHTML="",document.body.classList.remove("scroll-off"),_();case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var f=u.auth,m=document.querySelector(".modalWindow"),v=document.querySelector(".burger-menu-header"),g=document.querySelector(".modal-burger-menu");v.addEventListener("click",(function(){g.classList.toggle("modal-burger-menu-off"),v.classList.toggle("active"),document.body.classList.toggle("scroll-off")}));var b=document.querySelector(".burger-button-auth"),h=document.querySelector(".burger-button-span");function y(){console.log(localStorage.getItem("tokenResponse")),localStorage.getItem("tokenResponse")?h.innerHTML="Log aut":h.innerHTML="Log in"}function k(){if(localStorage.getItem("tokenResponse"))return localStorage.removeItem("tokenResponse"),localStorage.removeItem("userAvatar"),localStorage.removeItem("email"),localStorage.removeItem("shopingList"),void _();m.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth"">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <button type="submit">Sign in</button>\n    <div class=\'button-sing-group\'>\n    <p class="button-sign-up">Sign up</p>\n    <p class=\'button-sing\'>Sign in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';var e=m.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-up"),n=e.querySelector(".button-google"),o=e.querySelector(".clousModalAuth");t.addEventListener("click",S),n.addEventListener("click",d),e.addEventListener("submit",L),o.addEventListener("click",w),m.classList.add("trans-modal"),document.body.classList.add("scroll-off"),y()}function L(e){return x.apply(this,arguments)}function x(){return(x=e(a)(e(i).mark((function t(n){var o,r,s,a,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=n.currentTarget.elements.email.value,r=n.currentTarget.elements.password.value,e.prev=3,e.next=6,(0,l.signInWithEmailAndPassword)(f,o,r);case 6:return s=e.sent,localStorage.setItem("tokenResponse",s._tokenResponse.idToken),localStorage.setItem("email",o),m.innerHTML="",document.body.classList.remove("scroll-off"),e.next=13,u.getRequest(o);case 13:(a=e.sent)?(c=JSON.stringify(a),localStorage.setItem("shopingList",c)):localStorage.setItem("shopingList",JSON.stringify({})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.error("fire.data-error",e.t0),alert(e.t0.message);case 21:_();case 22:case"end":return e.stop()}}),t,null,[[3,17]])})))).apply(this,arguments)}function S(){m.innerHTML='\n    <div class="modal-bakc">\n    <form class="modal-form-auth">\n    <div class=\'clousModalAuth\'>&times;</div>\n    <input\n      type="email"\n      name="email"\n      placeholder="email"\n    />\n    <input\n      type="password"\n      name="password"\n      placeholder="password"\n    />\n    <input\n      type="password"\n      name="passwordConfirmation"\n      placeholder="password"\n    />\n    <button type="submit">sign up</button>\n    <div class=\'button-sing-group\'>\n    <p class=\'button-sing\'>Sign up</p>\n    <p class="button-sign-in">Sign in</p>\n    <p class=\'button-google\'>google</p>\n    </div>\n  </form>\n  </div>';var e=m.querySelector(".modal-form-auth"),t=e.querySelector(".button-sign-in"),n=e.querySelector(".button-google"),o=e.querySelector(".clousModalAuth");m.classList.add("trans-modal"),t.addEventListener("click",k),e.addEventListener("submit",E),n.addEventListener("click",d),o.addEventListener("click",w),document.body.classList.add("scroll-off")}function w(){m.classList.remove("trans-modal"),m.innerHTML="",document.body.classList.remove("scroll-off")}function E(e){return T.apply(this,arguments)}function T(){return(T=e(a)(e(i).mark((function t(n){var o,r,s,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o=n.currentTarget.elements.email.value,r=n.currentTarget.elements.password.value,s=n.currentTarget.elements.passwordConfirmation.value,!r||r!==s){e.next=23;break}return console.log(o,r),m.innerHTML="",document.body.classList.remove("scroll-off"),e.prev=8,e.next=11,(0,l.createUserWithEmailAndPassword)(f,o,r);case 11:a=e.sent,localStorage.setItem("tokenResponse",a._tokenResponse.idToken),localStorage.setItem("email",o),localStorage.setItem("shopingList",JSON.stringify({})),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),console.error(e.t0.message),alert(e.t0.message);case 21:e.next=24;break;case 23:alert("Check the password");case 24:_();case 25:case"end":return e.stop()}}),t,null,[[8,17]])})))).apply(this,arguments)}b.addEventListener("click",(function(e){v.classList.toggle("active"),g.classList.toggle("modal-burger-menu-off"),document.body.classList.toggle("scroll-off"),k()})),y(),y();var H=document.querySelector(".header-button-nav"),q=document.querySelector(".button-sing-auth-js");function _(){var t="";if(localStorage.getItem("tokenResponse")){var n=localStorage.getItem("userAvatar")?localStorage.getItem("userAvatar"):"https://bootstraptema.ru/snippets/icons/2016/mia/1.png",o=localStorage.getItem("email"),r=o.substring(0,o.indexOf("@"));t="<div class='user-auth-zone'>\n        <img\n          src=\"".concat(n,'"\n          alt="user avatar"\n          loading="lazy"\n          class="user-img-auth"\n        />\n      <span class=\'nik-name\'>').concat(r,'</span>\n        <div class=\'svg-user-auth\'>\n        <svg width="23" height="26" fill="#ffffff">\n          <use href="').concat(e(s),'#caret-down"></use>\n        </svg>\n        </div>\n    </div>'),H.classList.remove("header-not-uyth")}else t='<div class="button-sing-auth-js">\n      <button class="btn-log-out" type="button">\n        Log in<span class="btn-icn-wrap">\n          <svg width="20" height="20">\n            <use href="'.concat(e(s),'#arrow-right"></use>\n          </svg>\n        </span>\n      </button>\n    </div>'),H.classList.add("header-not-uyth");q.innerHTML=t}_();a=r("bpxeT"),i=r("2TvXO");var O,A=r("fxE4d");a=r("bpxeT"),i=r("2TvXO"),A=r("fxE4d"),c=r("kzJAm");O=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("eO8bt");var j;j=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("iYw0R");var I;I=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("4IcDd");var R;R=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("7KcSF");var M;M=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("4VQah");var N;N=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("gi1HH");var B=new(0,c.DataFirebase),C=null;function F(e){return J.apply(this,arguments)}function J(){return(J=e(a)(e(i).mark((function t(n){var o,r,s,a,c,l,u,d,p;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=function(){a.classList.add("is-hidden"),document.body.style.overflow="auto",setTimeout((function(){l.innerHTML=""}),500),c.removeEventListener("click",p)},p=function(e){var t=document.querySelector(".text-input");c.classList.value.includes("btn-shop-list-modal-remove")?(B.deleteBook(r),c.textContent="Add to shopping list",c.classList.add("btn-shop-list-modal-add"),c.classList.remove("btn-shop-list-modal-remove"),t.innerHTML=""):(c.textContent="remove from the shopping list",c.classList.add("btn-shop-list-modal-remove"),t.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>",B.addBookk(r))},o=null!==localStorage.getItem("email"),r=n,e.next=6,A.axiosApiBooks.fetchBookInfo(r);case 6:s=e.sent,C=r,(a=document.querySelector(".backdrop")).classList.remove("is-hidden"),document.querySelector(".modal").addEventListener("click",(function(e){})),console.log("validBookKey"),o&&D(),document.body.style.overflow="hidden",a.addEventListener("click",d),window.document.addEventListener("keydown",(function(e){"Escape"===e.key&&d()})),document.querySelector(".close-btn ").addEventListener("click",d),(c=document.querySelector('[data-name="order-btn"]')).addEventListener("click",p),l=document.querySelector(".book-information"),u=V(s),l.innerHTML=u;case 26:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function V(t){var n=t.book_image,o=t.title,r=t.author,s=t.description,a=t.buy_links,i=a[0].url,c=a[1].url,l=a[3].url;return"\n      <img class='book_modal-book-img' src=\"".concat(n||"./src/images/stopper335@1x.png","\" alt='Book image'>\n    <div class='book_modal-book-descr-inf'>\n    <p class='book_modal-book-title'>").concat(o||"No title.","</p>\n    <p class='book_modal-book-author'>").concat(r||"No author.","</p>\n    <p class='book_modal-book-description'>").concat(s||"No description.","</p>\n    <ul class='book_modal-links-group'>\n    <li class='book_modal-links'><a href=").concat(i,' target="_blank" rel="nofollow noopener noreferrer"> <img  src=\'').concat(e(O),"' srcset=\"").concat(e(O)," 1x, ").concat(e(j)," 2x\" alt ='Amazon Icon'></a></li>\n    <li class='book_modal-links'><a href=").concat(c,' target="_blank" rel="nofollow noopener noreferrer"> <img  src=\'').concat(e(I),"' srcset=\"").concat(e(I)," 1x, ").concat(e(R)," 2x\" alt ='Apple Icon'></a></li>\n    <li class='book_modal-links'><a href=").concat(l,' target="_blank" rel="nofollow noopener noreferrer"> <img  src=\'').concat(e(M),"' srcset=\"").concat(e(M)," 1x, ").concat(e(N)," 2x\" alt ='Book Shop Icon'></a></li>\n    </ul>\n    </div>\n       ")}function D(){var e=document.querySelector('[data-name="order-btn"]'),t=document.querySelector(".text-input"),n=JSON.parse(localStorage.getItem("shopingList"))?JSON.parse(localStorage.getItem("shopingList")):{};Object.keys(n).includes(C)?(e.textContent="remove from the shopping list",e.classList.add("btn-shop-list-modal-remove"),e.classList.remove("btn-shop-list-modal-add"),t.innerHTML="<p class='text-remove-btn'> Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>"):(e.textContent="Add to shopping list",e.classList.add("btn-shop-list-modal-add"),e.classList.remove("btn-shop-list-modal-remove"),t.innerHTML="")}var W,U=r("h6c0i"),z=r("8MBJY"),$=r("a2hTj"),Y=r("hKHmD"),K=new(function(){"use strict";function t(){e(z)(this,t),e(Y)(this,"spinnerEl",document.querySelector(".spinner-js"))}return e($)(t,[{key:"show",value:function(){this.spinnerEl.classList.remove("is-hidden")}},{key:"hide",value:function(){this.spinnerEl.classList.add("is-hidden")}},{key:"getEl",value:function(){return this.spinnerEl}}]),t}()),X=r("l5bVx"),P=/^\s+|\s+$/g,Q=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt,te="object"==typeof t&&t&&t.Object===Object&&t,ne="object"==typeof self&&self&&self.Object===Object&&self,oe=te||ne||Function("return this")(),re=Object.prototype.toString,se=Math.max,ae=Math.min,ie=function(){return oe.Date.now()};function ce(t){var n=void 0===t?"undefined":e(X)(t);return!!t&&("object"==n||"function"==n)}function le(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(X)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==re.call(t)}(t))return NaN;if(ce(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=ce(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(P,"");var o=G.test(t);return o||Z.test(t)?ee(t.slice(2),o?2:8):Q.test(t)?NaN:+t}function ue(e){F(e)}W=function(e,t,n){var o,r,s,a,i,c,l=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=o,s=r;return o=r=void 0,l=t,a=e.apply(s,n)}function m(e){return l=e,i=setTimeout(g,t),u?f(e):a}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=s}function g(){var e=ie();if(v(e))return b(e);i=setTimeout(g,function(e){var n=t-(e-c);return d?ae(n,s-(e-l)):n}(e))}function b(e){return i=void 0,p&&o?f(e):(o=r=void 0,a)}function h(){var e=ie(),n=v(e);if(o=arguments,r=this,c=e,n){if(void 0===i)return m(c);if(d)return i=setTimeout(g,t),f(c)}return void 0===i&&(i=setTimeout(g,t)),a}return t=le(t)||0,ce(n)&&(u=!!n.leading,s=(d="maxWait"in n)?se(le(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==i&&clearTimeout(i),l=0,o=c=r=i=void 0},h.flush=function(){return void 0===i?a:b(ie())},h};var de={bestsellersSectionEl:document.querySelector(".bookshelf"),categoriesListEl:document.querySelector(".categories-list"),allCategoriesTitleEl:document.querySelector(".cat-list"),bestsellersButton:document.querySelector(".bestsellers-button")};function pe(e){return e.map((function(e){var t=e._id,n=e.book_image,o=e.author,r=e.title;return'<li class="book-item" data-id="'.concat(t,'">\n      <div class="bookshelf-bool-link">\n    <div class="book-img-container">\n    <div class="book-shoppingcart is-hidden"></div>\n     <img class="book-img" loading="lazy" src="').concat(n,'" alt="').concat(r,'"  width="180px" height="256px"/>\n     <div class="books-overlay">\n     <p class="books-overlay-text">quick view\n     </p>\n     </div>\n     </div>\n     <p class="book-title">').concat(r,'</p>\n        <p class="author-name">').concat(o,"</p>\n        </div>\n        </li>")})).join("")}function fe(e){return me.apply(this,arguments)}function me(){return me=e(a)(e(i).mark((function t(n){var o,r,s;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.map(function(){var t=e(a)(e(i).mark((function t(n){var o,r,s;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.list_name,r=n.books,e.next=3,pe(r);case 3:return s=e.sent,e.abrupt("return",'\n        <div class="bestsellers-category-item">\n        <p class="bestsellers-category-name" name="'.concat(o,'">').concat(o,'</p>\n        <ul class="bestsellers-book-list open-js">\n        ').concat(s,'\n        </ul>\n        <div class="bestsellers-button-container">\n        <button type="button" class="bestsellers-button" name="').concat(o,'">see more</button>\n        </div>\n        </div>'));case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=3,Promise.all(o);case 3:r=t.sent,s=r.join(""),de.bestsellersSectionEl.innerHTML='\n    <h2 class="bestsellers-title">'.concat(he("Best Sellers Books"),"</h2>\n    ").concat(s),document.querySelector(".bookshelf").addEventListener("click",(function(e){e.target.closest("li")&&ue(e.target.closest("li").dataset.id)})),xe();case 9:case"end":return t.stop()}}),t)}))),me.apply(this,arguments)}function ve(){return ge.apply(this,arguments)}function ge(){return(ge=e(a)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,K.show(),e.next=4,A.axiosApiBooks.fetchTopBooks();case 4:if((n=e.sent)&&0!==n.length){e.next=8;break}return U.Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 8:return e.next=10,fe(n);case 10:K.hide(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function be(){return(be=e(a)(e(i).mark((function t(n){var o,r,s,a,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.classList.contains("bestsellers-button")){e.next=2;break}return e.abrupt("return");case 2:return o=n.target,r=o.name,K.show(),window.innerWidth<1440&&we(de.bestsellersSectionEl),e.prev=5,e.next=8,A.axiosApiBooks.fetchSelectedCategory(r);case 8:if((s=e.sent)&&0!==s.length){e.next=12;break}return U.Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 12:a=Le(r),c=he(a),document.querySelector(".bestsellers-title").innerHTML=c,ke(s,r),K.hide(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0.message);case 23:case"end":return e.stop()}}),t,null,[[5,20]])})))).apply(this,arguments)}function he(e){if(!e)return"";var t=e.trim().split(" "),n=t.pop(),o=t.join(" ");return"".concat(o,' <span class="categories-title-last-word">').concat(n,"</span>")}function ye(){return(ye=e(a)(e(i).mark((function t(n){var o,r,s,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.target,r=o.nodeName,s=o.textContent,"LI"===r&&"All categories"!==s.trim()){e.next=3;break}return e.abrupt("return");case 3:return K.show(),e.prev=4,e.next=7,A.axiosApiBooks.fetchSelectedCategory(s);case 7:if((a=e.sent)&&0!==a.length){e.next=11;break}return U.Notify.failure("Sorry, we didn't find anything according to your request."),e.abrupt("return");case 11:document.querySelector(".bestsellers-title").innerHTML=s,ke(a,s),K.hide(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0.message);case 20:case"end":return e.stop()}}),t,null,[[4,17]])})))).apply(this,arguments)}function ke(e,t){var n=he(t),o=pe(e),r='\n    <h2 class="bestsellers-title">'.concat(n,'</h2>\n    <div class="bestsellers-category-item" name="').concat(t,'">\n      <ul class="category-book-list open-js">').concat(o,"</ul>\n    </div>\n  ");de.bestsellersSectionEl.innerHTML=r,document.querySelector(".bookshelf").addEventListener("click",(function(e){e.target.closest("li")&&ue(e.target.closest("li").dataset.id)}))}function Le(e){var t=document.querySelector(".upper-case");t&&t.classList.remove("upper-case"),document.querySelector('li[name="'.concat(e,'"]')).classList.add("upper-case")}function xe(){var e,t=document.querySelectorAll(".bestsellers-book-list"),n={mobile:{index:0,count:1},tablet:{index:0,count:3},desktop:{index:0,count:1/0}};e=window.innerWidth<768?n.mobile:window.innerWidth<1440?n.tablet:n.desktop,t.forEach((function(t){for(var n=0;n<t.children.length;n++)t.children[n].hidden=n<e.index||n>=e.index+e.count}))}if(window.addEventListener("DOMContentLoaded",ve),de.allCategoriesTitleEl.addEventListener("click",ve),de.bestsellersSectionEl.addEventListener("click",(function(e){return be.apply(this,arguments)})),de.categoriesListEl.addEventListener("click",(function(e){return ye.apply(this,arguments)})),window.addEventListener("resize",e(W)(xe,300)),window.innerWidth<768){var Se=document.querySelector('li[data-name="All categories"]');Se&&Se.classList.add("cat-list--fixed")}function we(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start";e.scrollIntoView({behavior:"smooth",position:t})}a=r("bpxeT"),i=r("2TvXO"),A=r("fxE4d");function Ee(){return(Ee=e(a)(e(i).mark((function t(n){var o,r,s,a,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((o=n.target).classList.contains("cat-list")){e.next=3;break}return e.abrupt("return");case 3:if(r=o.textContent,s=o.closest,a=s.call(o,".cat-list"),(c=document.querySelector(".cat-list.upper-case"))&&c.classList.remove("upper-case"),a.classList.add("upper-case"),"All categories"!==r){e.next=12;break}return e.next=11,A.axiosApiBooks.fetchTopBooks();case 11:return e.abrupt("return");case 12:return e.next=14,A.axiosApiBooks.fetchSelectedCategory(r);case 14:window.innerWidth<1440&&we(de.bestsellersSectionEl);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Te(){return(Te=e(a)(e(i).mark((function t(){var n,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.axiosApiBooks.fetchCategoryList();case 2:(n=e.sent).sort((function(e,t){return e.list_name.localeCompare(t.list_name)})),o=n.map((function(e){var t=e.list_name;return'<li class="cat-list cat-text" name="'.concat(t,'">').concat(t,"</li>")})).join(""),de.categoriesListEl.insertAdjacentHTML("beforeend",o);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}de.categoriesListEl.addEventListener("click",(function(e){return Ee.apply(this,arguments)})),function(){Te.apply(this,arguments)}();X=r("l5bVx");var He,qe="Expected a function",_e=/^\s+|\s+$/g,Oe=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,je=/^0o[0-7]+$/i,Ie=parseInt,Re="object"==typeof t&&t&&t.Object===Object&&t,Me="object"==typeof self&&self&&self.Object===Object&&self,Ne=Re||Me||Function("return this")(),Be=Object.prototype.toString,Ce=Math.max,Fe=Math.min,Je=function(){return Ne.Date.now()};function Ve(e,t,n){var o,r,s,a,i,c,l=0,u=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(qe);function f(t){var n=o,s=r;return o=r=void 0,l=t,a=e.apply(s,n)}function m(e){return l=e,i=setTimeout(g,t),u?f(e):a}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=s}function g(){var e=Je();if(v(e))return b(e);i=setTimeout(g,function(e){var n=t-(e-c);return d?Fe(n,s-(e-l)):n}(e))}function b(e){return i=void 0,p&&o?f(e):(o=r=void 0,a)}function h(){var e=Je(),n=v(e);if(o=arguments,r=this,c=e,n){if(void 0===i)return m(c);if(d)return i=setTimeout(g,t),f(c)}return void 0===i&&(i=setTimeout(g,t)),a}return t=We(t)||0,De(n)&&(u=!!n.leading,s=(d="maxWait"in n)?Ce(We(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==i&&clearTimeout(i),l=0,o=c=r=i=void 0},h.flush=function(){return void 0===i?a:b(Je())},h}function De(t){var n=void 0===t?"undefined":e(X)(t);return!!t&&("object"==n||"function"==n)}function We(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(X)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==Be.call(t)}(t))return NaN;if(De(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=De(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_e,"");var o=Ae.test(t);return o||je.test(t)?Ie(t.slice(2),o?2:8):Oe.test(t)?NaN:+t}He=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(qe);return De(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),Ve(e,t,{leading:o,maxWait:t,trailing:r})};var Ue=document.querySelector(".scroll-up"),ze=document.querySelector(".scroll-up__svg-path"),$e=ze.getTotalLength();ze.style.strokeDasharray="".concat($e," ").concat($e),ze.style.transition="stroke-dashoffset 20ms";var Ye=function(){return window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",e(He)((function(){var e,t;e=document.documentElement.scrollHeight-window.innerHeight,t=$e-Ye()*$e/e,ze.style.strokeDashoffset=t,Ye()>100?Ue.classList.add("scroll-up--active"):Ue.classList.remove("scroll-up--active")}),50)),Ue.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),r("5zKjL"),r("gGcLX"),r("aYBHI")}();
//# sourceMappingURL=index.54a7ff38.js.map
