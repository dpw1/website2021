(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7iBi":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=(r("kvYz"),r("Wbzz"),r("URzR")),c=r("Ysz2"),i=r.n(c),u=r("+n12"),l=r("II4a"),s=r("o0o1"),f=r.n(s),p=(r("ls82"),r("HaE+")),m=r("KQm4");r("TZi5");function d(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=new RegExp("%[a-f0-9]{2}","gi"),v=new RegExp("(%[a-f0-9]{2})+","gi");function b(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],b(r),b(n))}function h(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(g),r=1;r<t.length;r++)t=(e=b(t,r).join("")).match(g);return e}}var w=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=v.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var a=h(n[0]);a!==n[0]&&(r[n[0]]=a)}n=v.exec(e)}r["%C2"]="�";for(var o=Object.keys(r),c=0;c<o.length;c++){var i=o[c];e=e.replace(new RegExp(i,"g"),r[i])}return e}(e)}},j=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]},O=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){function r(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function n(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):encodeURIComponent(e):e}function a(e,t){return t.decode?w(e):e}function o(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function c(e){var t=(e=o(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function i(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function u(e,t){r((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.split("").indexOf(e.arrayFormatSeparator)>-1?r.split(e.arrayFormatSeparator).map((function(t){return a(t,e)})):null===r?r:a(r,e);n[t]=o};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),o=Object.create(null);if("string"!=typeof e)return o;if(!(e=e.trim().replace(/^[?#&]/,"")))return o;for(var c,u=d(e.split("&"));!(c=u()).done;){var l=c.value,s=j(t.decode?l.replace(/\+/g," "):l,"="),f=s[0],p=s[1];p=void 0===p?null:"comma"===t.arrayFormat?p:a(p,t),n(a(f,t),p,o)}for(var m=0,y=Object.keys(o);m<y.length;m++){var g=y[m],v=o[g];if("object"==typeof v&&null!==v)for(var b=0,h=Object.keys(v);b<h.length;b++){var w=h[b];v[w]=i(v[w],t)}else o[g]=i(v,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(e,t){var r=o[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=c,t.parse=u,t.stringify=function(e,t){if(!e)return"";r((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);var a=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,a){var o=r.length;return void 0===a||e.skipNull&&null===a?r:[].concat(Object(m.a)(r),null===a?[[n(t,e),"[",o,"]"].join("")]:[[n(t,e),"[",n(o,e),"]=",n(a,e)].join("")])}};case"bracket":return function(t){return function(r,a){return void 0===a||e.skipNull&&null===a?r:[].concat(Object(m.a)(r),null===a?[[n(t,e),"[]"].join("")]:[[n(t,e),"[]=",n(a,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,a){return null==a||0===a.length?r:0===r.length?[[n(t,e),"=",n(a,e)].join("")]:[[r,n(a,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,a){return void 0===a||e.skipNull&&null===a?r:[].concat(Object(m.a)(r),null===a?[n(t,e)]:[[n(t,e),"=",n(a,e)].join("")])}}}}(t),o=Object.assign({},e);if(t.skipNull)for(var c=0,i=Object.keys(o);c<i.length;c++){var u=i[c];void 0!==o[u]&&null!==o[u]||delete o[u]}var l=Object.keys(o);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var o=e[r];return void 0===o?"":null===o?n(r,t):Array.isArray(o)?o.reduce(a(r),[]).join("&"):n(r,t)+"="+n(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){return{url:o(e).split("?")[0]||"",query:u(c(e),t)}},t.stringifyUrl=function(e,r){var n=o(e.url).split("?")[0]||"",a=t.extract(e.url),c=t.parse(a),i=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url),u=Object.assign(c,e.query),l=t.stringify(u,r);return l&&(l="?"+l),""+n+l+i}})),E=(O.extract,O.parse,O.stringify,O.parseUrl,O.stringifyUrl,r("vqaT"));r("sq+y");function S(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=function(e){var t=e.data,r=e.updateData,o=Object(n.useState)([]),c=o[0],i=o[1],u=Object(n.useState)(""),l=(u[0],u[1],Object(E.a)("@totalProducts",null)),s=(l[0],l[1]);Object(n.useEffect)((function(){var e=function(e){var t,r;if(e){var n=e.map((function(e){return e.tags})),a=Object(m.a)(new Set((t=[]).concat.apply(t,Object(m.a)(n)))).map((function(e){return e.trim().toLowerCase()}));return Object(m.a)(new Set((r=[]).concat.apply(r,Object(m.a)(a))))}}(t);i(e),console.log("my filtered        ",e),setTimeout(b,150)}),[t]);var d=function(e,t){g(e.target),v(t),y()},y=function(){return window.history.pushState({},document.title,window.location.pathname)},g=function(e){var t="Tags-tag--active",r=window.document.querySelectorAll("."+t);if(r)for(var n,a=S(r);!(n=a()).done;){n.value.classList.remove(t)}e.classList.add(t)},v=function(){var e=Object(p.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==n){e.next=4;break}return s(t.length.toString()),r(t),e.abrupt("return");case 4:(a=t&&t.filter((function(e){if(e.tags.filter((function(e){return e.trim().toLowerCase()===n})).length>=1)return e})))&&(console.log("my length",a.length),s(a.length.toString()),r(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=new URLSearchParams(window.location.search).get("tag"),t=document.querySelector('[data-tag="'+e+'"]');e&&""!==e&&(v(e),g(t))};return a.a.createElement("div",{className:"Tags"},a.a.createElement("h3",{className:"Tags-title"},"Browse by tags:"),a.a.createElement("div",{className:"Tags-list"},c&&a.a.createElement("div",{className:"Tags-wrapper"},a.a.createElement("a",{href:"#",onClick:function(e){return d(e,"all")},className:"Tags-tag Tags-tag--active",key:"all"},"All"),c.map((function(e){return a.a.createElement("a",{href:"#",onClick:function(t){return d(t,e)},className:"Tags-tag","data-tag":e,key:e},e)})))))};t.a=function(e){var t=Object(n.useState)(null),r=t[0],c=t[1],s=Object(n.useState)(null),f=s[0],p=s[1],m=Object(n.useState)(!1),d=m[0],y=m[1],g=Object(u.f)();Object(n.useEffect)((function(){var t=i.a.sanitizeProducts(g);c(t),p(t),console.log("all shop     props",e)}),[]),Object(n.useEffect)((function(){console.log("my products",f),f&&(console.log("we are searching",f),setTimeout((function(){window.ezfy&&window.ezfy.init()}),50))}),[f]),Object(n.useEffect)((function(){if(console.log("searching? ",d),d)return console.log("inside is searching"),void setTimeout((function(){window.ezfy&&window.ezfy.init()}),50);p(r)}),[d]);var v=e.paddingTop;return a.a.createElement("section",{id:"shop",className:"section blog-area ptb_50 shop",style:{paddingTop:v}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},a.a.createElement("div",{className:"section-heading text-center"},a.a.createElement("h2",{className:"text-capitalize"},"Shop"),a.a.createElement("p",{className:"d-sm-block mt-4"},"Simple, affordable and high quality copy-paste code snippets for your Shopify theme. ",a.a.createElement("br",null)," No coding knowledge required.")))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 col-lg-12 shop-filter"},a.a.createElement("div",{className:"sidebar"},a.a.createElement("div",null,a.a.createElement(x,{data:r,updateData:p})),r&&a.a.createElement(l.a,{data:r,dataKey:"title",updateData:p,isSearching:d,setIsSearching:y}))),a.a.createElement("div",{className:"col-12 col-lg-12"},a.a.createElement("div",{className:"portfolio-row row"},f&&f.map((function(e){return Object(o.a)(e)})))))))}},kvYz:function(e,t,r){},"sq+y":function(e,t,r){}}]);
//# sourceMappingURL=41dffb0c2a1d057d04fc1413e6724587e3666e48-4c819dde45c0397ff35d.js.map