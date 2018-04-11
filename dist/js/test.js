!function a(i,s,u){function c(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=s[t]={exports:{}};i[t][0].call(o.exports,function(e){return c(i[t][1][e]||e)},o,o.exports,a,i,s,u)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),a=e("idb"),s=(r=a)&&r.__esModule?r:{default:r};var i=function(){function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i)}return o(i,null,[{key:"dbPromise",value:function(){return s.default.open("restaurantReview",1,function(e){e.createObjectStore("restaurants",{keyPath:"id"})})}},{key:"fetchRestaurants",value:function(t){var n=this;fetch(i.DATABASE_URL).then(function(e){return e.json()}).then(function(e){n.saveRestaurantDataLocally(e),t(null,e)}).catch(function(e){console.log("Dit is de fout"+e),n.getAllDataLocally().then(function(e){return t(null,e)})})}},{key:"getAllDataLocally",value:function(){return i.dbPromise().then(function(e){return e.transaction("restaurants").objectStore("restaurants").getAll()})}},{key:"saveRestaurantDataLocally",value:function(r){return"indexedDB"in window?i.dbPromise().then(function(e){var t=e.transaction("restaurants","readwrite"),n=t.objectStore("restaurants");return Promise.all(r.map(function(e){return n.put(e)})).catch(function(){throw t.abort(),Error("Events were not added to the store")})}):null}},{key:"fetchRestaurantById",value:function(r,o){i.fetchRestaurants(function(e,t){if(e)o(e,null);else{var n=t.find(function(e){return e.id==r});n?o(null,n):o("Restaurant does not exist",null)}})}},{key:"fetchRestaurantByCuisineAndNeighborhood",value:function(r,o,a){i.fetchRestaurants(function(e,t){if(e)a(e,null);else{var n=t;"all"!=r&&(n=n.filter(function(e){return e.cuisine_type==r})),"all"!=o&&(n=n.filter(function(e){return e.neighborhood==o})),a(null,n)}})}},{key:"fetchNeighborhoods",value:function(o){i.fetchRestaurants(function(e,n){if(e)o(e,null);else{var r=n.map(function(e,t){return n[t].neighborhood}),t=r.filter(function(e,t){return r.indexOf(e)==t});o(null,t)}})}},{key:"fetchCuisines",value:function(o){i.fetchRestaurants(function(e,n){if(e)o(e,null);else{var r=n.map(function(e,t){return n[t].cuisine_type}),t=r.filter(function(e,t){return r.indexOf(e)==t});o(null,t)}})}},{key:"urlForRestaurant",value:function(e){return"./restaurant.html?id="+e.id}},{key:"imageUrlForRestaurant",value:function(e){return"/images/"+e.id}},{key:"mapMarkerForRestaurant",value:function(e,t){return new google.maps.Marker({position:e.latlng,title:e.name,url:i.urlForRestaurant(e),map:t,animation:google.maps.Animation.DROP})}},{key:"DATABASE_URL",get:function(){return"http://localhost:1337/restaurants"}}]),i}();n.default=i},{idb:4}],2:[function(e,t,n){"use strict";var r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":a(e)};o=function(){var s=function(e,t){return e.getAttribute("data-"+t)},o=function(e){return e.filter(function(e){return!s(e,"was-processed")})},a=function(e,t){var n,r=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},u=function(e,t){var n=t.data_src,r=t.data_srcset,o=e.tagName,a=s(e,n);if("IMG"===o){!function(e,t){var n=t.data_srcset,r=e.parentNode;if("PICTURE"===r.tagName)for(var o,a=0;o=r.children[a];a+=1)if("SOURCE"===o.tagName){var i=s(o,n);i&&o.setAttribute("srcset",i)}}(e,t);var i=s(e,r);return i&&e.setAttribute("srcset",i),void(a&&e.setAttribute("src",a))}"IFRAME"!==o?a&&(e.style.backgroundImage='url("'+a+'")'):a&&e.setAttribute("src",a)},e="undefined"!=typeof window,n=e&&"IntersectionObserver"in window,i=e&&"classList"in document.createElement("p"),c=function(e,t){i?e.classList.add(t):e.className+=(e.className?" ":"")+t},l=function(e,t){e&&e(t)},f=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},d=function(e,t,n){var r,o,a=e.target;r=a,o=n.class_loading,i?r.classList.remove(o):r.className=r.className.replace(new RegExp("(^|\\s+)"+o+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,""),c(a,t?n.class_loaded:n.class_error),l(t?n.callback_load:n.callback_error,a)},p=function(e,t){var n,r,o,a,i,s;l(t.callback_enter,e),-1<["IMG","IFRAME"].indexOf(e.tagName)&&(a=t,i=function e(t){d(t,!0,a),f(o,e,s)},s=function e(t){d(t,!1,a),f(o,i,e)},(o=e).addEventListener("load",i),o.addEventListener("error",s),c(e,t.class_loading)),u(e,t),n="was-processed",r=!0,e.setAttribute("data-"+n,r),l(t.callback_set,e)},t=function(e,t){var n;this._settings=(n={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null,callback_enter:null},m({},n,e)),this._setObserver(),this.update(t)};t.prototype={_setObserver:function(){var r=this;if(n){var e=this._settings,t={root:e.container===document?null:e.container,rootMargin:e.threshold+"px"};this._observer=new IntersectionObserver(function(e){e.forEach(function(e){if((n=e).isIntersecting||0<n.intersectionRatio){var t=e.target;p(t,r._settings),r._observer.unobserve(t)}var n}),r._elements=o(r._elements)},t)}},update:function(e){var t=this,n=this._settings,r=e||n.container.querySelectorAll(n.elements_selector);this._elements=o(Array.prototype.slice.call(r)),this._observer?this._elements.forEach(function(e){t._observer.observe(e)}):(this._elements.forEach(function(e){p(e,n)}),this._elements=o(this._elements))},destroy:function(){var t=this;this._observer&&(o(this._elements).forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null}};var r=window.lazyLoadOptions;return e&&r&&function(e,t){if(t.length)for(var n,r=0;n=t[r];r+=1)a(e,n);else a(e,t)}(t,r),t},"object"===((r=void 0)===n?"undefined":i(n))&&void 0!==t?t.exports=o():"function"==typeof define&&define.amd?define(o):r.LazyLoad=o()},{}],3:[function(e,t,n){"use strict";var l=r(e("./dbhelper")),f=r(e("./lazyload.min"));function r(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){o(),i()});var o=function(){l.default.fetchNeighborhoods(function(e,t){e?console.error(e):(self.neighborhoods=t,a())})},a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.neighborhoods,n=document.getElementById("neighborhoods-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,n.append(t)})},i=function(){l.default.fetchCuisines(function(e,t){e?console.error(e):(self.cuisines=t,s())})},s=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.cuisines,n=document.getElementById("cuisines-select");e.forEach(function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,n.append(t)})};window.initMap=function(){self.map=new google.maps.Map(document.getElementById("map"),{zoom:12,center:{lat:40.722216,lng:-73.987501},scrollwheel:!1}),self.map.addListener("tilesloaded",u),c()};var u=function(){document.querySelector("#map").querySelector("iframe").setAttribute("title","Google maps with restaurant location")},c=function(){var e=document.getElementById("cuisines-select"),t=document.getElementById("neighborhoods-select"),n=e.selectedIndex,r=t.selectedIndex,o=e[n].value,a=t[r].value;l.default.fetchRestaurantByCuisineAndNeighborhood(o,a,function(e,t){e?console.error(e):(d(t),p())})},d=function(e){self.restaurants=[],document.getElementById("restaurants-list").innerHTML="",self.markers=self.markers?self.markers:[],self.markers.forEach(function(e){return e.setMap(null)}),self.restaurants=e},p=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants,t=document.getElementById("restaurants-list");e.forEach(function(e){t.append(m(e))}),h()},m=function(e){var t=document.createElement("li"),n=document.createElement("picture"),r=document.createElement("source");r.className="restaurant-img lazy",r.setAttribute("data-srcset",l.default.imageUrlForRestaurant(e)+"_small.webp"),r.setAttribute("media","(min-width: 400px)"),n.append(r);var o=document.createElement("source");o.className="restaurant-img lazy",o.setAttribute("data-srcset",l.default.imageUrlForRestaurant(e)+"_large.webp"),o.setAttribute("media","(min-width: 900px)"),n.append(o);var a=document.createElement("img");a.className="restaurant-img lazy",a.setAttribute("data-src",l.default.imageUrlForRestaurant(e)+"_small.jpg"),a.alt="An image of restaurant "+e.name+" in "+e.neighborhood,n.append(a),t.append(n);var i=document.createElement("h2");i.innerHTML=e.name,t.append(i);var s=document.createElement("p");s.innerHTML=e.neighborhood,t.append(s);var u=document.createElement("p");u.innerHTML=e.address,t.append(u);var c=document.createElement("a");return c.innerHTML="View Details",c.href=l.default.urlForRestaurant(e),t.append(c),t.onload=new f.default,t},h=function(){(0<arguments.length&&void 0!==arguments[0]?arguments[0]:self.restaurants).forEach(function(e){var t=l.default.mapMarkerForRestaurant(e,self.map);google.maps.event.addListener(t,"click",function(){window.location.href=t.url})})}},{"./dbhelper":1,"./lazyload.min":2}],4:[function(e,p,t){"use strict";!function(){function i(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function a(n,r,o){var a,e=new Promise(function(e,t){i(a=n[r].apply(n,o)).then(e,t)});return e.request=a,e}function e(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function t(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return a(this[n],e,arguments)})})}function n(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function r(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[r],(t=a(e,n,arguments)).then(function(e){if(e)return new s(e,t.request)});var e,t})})}function o(e){this._index=e}function s(e,t){this._cursor=e,this._request=t}function u(e){this._store=e}function c(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function l(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new c(n)}function f(e){this._db=e}e(o,"_index",["name","keyPath","multiEntry","unique"]),t(o,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),r(o,"_index",IDBIndex,["openCursor","openKeyCursor"]),e(s,"_cursor",["direction","key","primaryKey","value"]),t(s,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(s.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),i(t._request).then(function(e){if(e)return new s(e,t._request)})})})}),u.prototype.createIndex=function(){return new o(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new o(this._store.index.apply(this._store,arguments))},e(u,"_store",["name","keyPath","indexNames","autoIncrement"]),t(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),r(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),n(u,"_store",IDBObjectStore,["deleteIndex"]),c.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},e(c,"_tx",["objectStoreNames","mode"]),n(c,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},e(l,"_db",["name","version","objectStoreNames"]),n(l,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new c(this._db.transaction.apply(this._db,arguments))},e(f,"_db",["name","version","objectStoreNames"]),n(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(a){[u,o].forEach(function(e){e.prototype[a.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),n=t[t.length-1],r=this._store||this._index,o=r[a].apply(r,t.slice(0,-1));o.onsuccess=function(){n(o.result)}}})}),[o,u].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,o=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(o.push(e.value),void 0===n||o.length!=n?e.continue():t(o)):t(o)})})})});var d={open:function(e,t,n){var r=a(indexedDB,"open",[e,t]),o=r.request;return o.onupgradeneeded=function(e){n&&n(new l(o.result,e.oldVersion,o.transaction))},r.then(function(e){return new f(e)})},delete:function(e){return a(indexedDB,"deleteDatabase",[e])}};void 0!==p?(p.exports=d,p.exports.default=p.exports):self.idb=d}()},{}]},{},[3]);
//# sourceMappingURL=maps/test.js.map
