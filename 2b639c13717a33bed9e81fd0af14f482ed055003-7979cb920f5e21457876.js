/*! For license information please see 2b639c13717a33bed9e81fd0af14f482ed055003-7979cb920f5e21457876.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"6UOJ":function(e,t,n){},"7B5j":function(e,t,n){e.exports=n.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},"8oxB":function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=s(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},C56G:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("Iykn"),n("7B5j")),i=n.n(o),s=n("+n12"),c=n("76ZC"),l=n.n(c),u=n("H7U6"),f=n("Wbzz");t.a=function(e){var t=e.post,n=e.title,r=t?Object(s.c)(t.featured_image_src):i.a,o=t?l()(t.title.rendered):"Ezfy Blog",c="url("+r+") no-repeat scroll center center / "+(t?"contain":"cover");return a.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:c}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},a.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},n||o),a.a.createElement("ol",{className:"breadcrumb"},a.a.createElement("li",{className:"breadcrumb-item"},a.a.createElement(f.Link,{to:u.a.home},"Home")),t&&a.a.createElement("li",{className:"breadcrumb-item"},a.a.createElement(f.Link,{to:u.a.blog},"Blog"))))))))}},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("MLWZ"),o=n("9rSQ"),i=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},EYWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("NU3z"),s=n.n(i),c=function(e){var t=e.title,n=e.description,r=e.url,i=e.article,c={title:t||s.a.siteTitle,description:n||s.a.siteDescription,image:s.a.siteImage,url:r||""};return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,{title:c.title},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"description",content:c.description}),a.a.createElement("meta",{name:"image",content:c.image}),c.url&&a.a.createElement("meta",{property:"og:url",content:c.url}),i?a.a.createElement("meta",{property:"og:type",content:"article"}):a.a.createElement("meta",{property:"og:type",content:"website"}),c.title&&a.a.createElement("meta",{property:"og:title",content:c.title}),c.description&&a.a.createElement("meta",{property:"og:description",content:c.description}),c.image&&a.a.createElement("meta",{property:"og:image",content:c.image}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.title&&a.a.createElement("meta",{name:"twitter:title",content:c.title}),c.description&&a.a.createElement("meta",{name:"twitter:description",content:c.description}),c.image&&a.a.createElement("meta",{name:"twitter:image",content:c.image})))}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},Iykn:function(e,t,n){},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),a=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("8oxB"))},JR6P:function(e,t,n){},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},NU3z:function(e,t){e.exports={siteTitle:"EZFY | Shopify Coding Services",siteDescription:"Globally recognised Shopify Expert, creating beautiful online experiences and results-driven coding solutions.",siteTitleShort:"EZFY | Shopify Coding",siteImage:"https://www.ezfy.club/wp-content/uploads/2020/11/ezfy-logo-original.png",googleAnalyticsID:"UA-112401482-2",siteUrl:"https://ezfycode.com"}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},a=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(e[a],t[a])}r.forEach(a,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,l),r.forEach(i,(function(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(void 0,t[a])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var u=a.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(f,l),n}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("xAGQ"),o=n("Lmem"),i=n("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},XwJu:function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),a=n("5oMp");e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},kcvH:function(e,t,n){"use strict";var r,a=n("o0o1"),o=n.n(a),i=(n("ls82"),n("HaE+")),s=n("q1tI"),c=n.n(s),l=(n("qr+B"),n("76ZC")),u=n.n(l),f=n("+n12"),p=n("C56G"),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return d(t,e),t}(Error);function h(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var g=n("TSYQ"),b=n.n(g),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},v=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))},E=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},k=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},N=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},O=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function S(e,t,n){var r=t.height,a=t.width,o=x(t,["height","width"]),i=y({height:r,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),s=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var c=window.setInterval((function(){try{(null===s||s.closed)&&(window.clearInterval(c),n(s))}catch(e){console.error(e)}}),1e3);return s}var j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,a=n.windowHeight,o=void 0===a?400:a,i=n.windowPosition,s=void 0===i?"windowCenter":i,c=n.windowWidth,l=void 0===c?550:c;S(e,y({height:o,width:l},"windowCenter"===s?N(l,o):O(l,o)),r)},t.handleClick=function(e){return v(t,void 0,void 0,(function(){var t,n,r,a,o,i,s,c,l,u;return E(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,a=t.networkLink,o=t.onClick,i=t.url,s=t.openShareDialogOnClick,c=t.opts,l=a(i,c),r?[2]:(e.preventDefault(),n?(u=n(),k(u)?[4,u]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return s&&this.openShareDialog(l),o&&o(e,l),[2]}}))}))},t}return w(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,a=e.disabledStyle,o=e.forwardedRef,i=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,x(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=y(y(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),r&&a);return c.a.createElement("button",y({},u,{"aria-label":u["aria-label"]||i,className:f,onClick:this.handleClick,ref:o,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(s.Component),T=function(){return(T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var C=function(e,t,n,r){function a(a,o){var i=n(a),s=T({},a);return Object.keys(i).forEach((function(e){delete s[e]})),c.a.createElement(j,T({},r,s,{forwardedRef:o,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-"+e,Object(s.forwardRef)(a)};var B=C("whatsapp",(function(e,t){var n=t.title,r=t.separator;return function(e,t){if(!e)throw new m(t)}(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+h({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});var A,P,R,_=C("facebookmessenger",(function(e,t){var n=t.appId;return"https://www.facebook.com/dialog/send"+h({link:e,redirect_uri:t.redirectUri||e,app_id:n,to:t.to})}),(function(e){return{appId:e.appId,redirectUri:e.redirectUri,to:e.to}}),{windowWidth:1e3,windowHeight:820}),L=n("vDqi"),U=n.n(L),z=n("Wbzz"),q="https://ezfy.club/json",D={getPosts:(R=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(o.a.mark((function e(n,r){var a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=t&&/\?/.test(t)?t.replace("?",""):t,e.next=4,U.a.get(q+"/wp/v2/posts?"+t);case 4:a=e.sent,i=a.data,n(i),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(e){return R.apply(this,arguments)}),getPostBySlug:(P=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(q+"/wp/v2/posts?slug="+t);case 3:a=e.sent,n(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(e){return P.apply(this,arguments)}),getPostsGraphql:(A=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(i.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r=Object(z.useStaticQuery)("2841790963"),t(r)}catch(a){n(a)}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),function(e){return A.apply(this,arguments)})},J=(n("JR6P"),function(e){var t=e.posts;return c.a.createElement("div",{className:"single-widget posts-sidebar"},c.a.createElement("div",{className:"accordions widget post-widget",id:"post-accordion"},c.a.createElement("div",{className:"single-accordion"},c.a.createElement("h5",null,c.a.createElement("a",{role:"button",className:"collapse show text-uppercase d-block p-3","data-toggle":"collapse",href:"#accordion2"},"Popular Posts")),c.a.createElement("div",{id:"accordion2",className:"accordion-content widget-content collapse show","data-parent":"#post-accordion"},c.a.createElement("ul",{className:"widget-items"},t&&t.sort((function(e,t){return t.post_count-e.post_count})).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{href:Object(f.b)(e.slug),className:"single-post align-items-center align-items-lg-start media p-3"},c.a.createElement("div",{className:"post-thumb avatar-md"},c.a.createElement("img",{className:"align-self-center",src:e.featured_image_small_src,alt:e.title.rendered})),c.a.createElement("div",{className:"post-content media-body pl-3"},c.a.createElement("h6",null,u()(e.title.rendered)),c.a.createElement("p",{className:"post-date posts-sidebar-date mb-2"},Object(f.a)(e.date_gmt)))))})))))))});t.a=function(e){var t=Object(s.useState)(null),n=t[0],r=t[1],a=Object(s.useState)(null),l=a[0],d=a[1],m=e.post,h=""+Object(f.a)(m.date),g=m.title.rendered,b=Object(f.c)(m.featured_image_src);return Object(s.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.getPosts("per_page=5");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),d(void 0!==window?window.location.href:"https://ezfycode.com")}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{post:m}),c.a.createElement("section",{id:"blogContent",className:"section blog-content blog-area ptb_100"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row blog-content-wrapper"},c.a.createElement("div",{className:"blog-content-block blog-content-block--sidebar col-12 col-lg-3"},c.a.createElement("aside",{className:"sidebar "},n&&c.a.createElement(J,{posts:n}))),c.a.createElement("div",{className:"blog-content-block col-12 col-lg-9"},c.a.createElement("article",{className:"single-blog-details"},c.a.createElement("div",{className:"sApp-blog blog-content-text"},c.a.createElement("div",{className:"meta-info d-flex flex-wrap align-items-center py-2"},c.a.createElement("ul",{className:"blog-content-info"},c.a.createElement("li",{className:"d-inline-block p-2"},"By ",c.a.createElement("span",null,"Diego Fortes")),c.a.createElement("li",{className:"d-inline-block p-2"},c.a.createElement("span",null,h)))),c.a.createElement("div",{className:"blog-details blog-content-details"},c.a.createElement("h3",{className:"blog-title py-2 py-sm-3"},c.a.createElement("span",null,u()(g))),c.a.createElement("figure",{className:"blog-featured-image"},c.a.createElement("img",{src:b,alt:""})),c.a.createElement("div",null,u()(m.content.rendered))),c.a.createElement("div",{className:"blog-share blog-content-share ml-auto d-none d-sm-block"},c.a.createElement("div",{className:"social-icons social-icons--blog d-flex "},c.a.createElement("a",{className:"bg-white facebook social-icon",href:"https://www.facebook.com/sharer/sharer.php?u="+l,rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",{className:"fab fa-facebook-f"}),c.a.createElement("i",{className:"fab fa-facebook-f"})),c.a.createElement("a",{className:"bg-white twitter  social-icon",href:"https://twitter.com/intent/tweet?url="+l+"&text="+g,rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",{className:"fab fa-twitter"}),c.a.createElement("i",{className:"fab fa-twitter"})),c.a.createElement("a",{className:"bg-white pinterest social-icon",href:"http://pinterest.com/pin/create/button/?url="+l+"&description="+g,rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",{className:"fab  fa-pinterest","aria-hidden":"true"}),c.a.createElement("i",{className:"fab fa-pinterest","aria-hidden":"true"})),c.a.createElement("a",{className:"bg-white linkedin social-icon",href:"http://www.linkedin.com/shareArticle?mini=true&url="+l+"&title="+g,rel:"noopener noreferrer",target:"_blank"},c.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"}),c.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"})),c.a.createElement(B,{url:l},c.a.createElement("span",{className:"bg-white social-icon whatsapp social-icon"},c.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}),c.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}))),c.a.createElement(_,{appId:"2995462243875033",url:l},c.a.createElement("span",{className:"bg-white social-icon facebook-messenger social-icon"},c.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"}),c.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"}))))))))))))}},"qr+B":function(e,t,n){},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("Rn+g"),o=n("eqyj"),i=n("MLWZ"),s=n("g7np"),c=n("w0Vi"),l=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};a(t,n,o),d=null}},d.onabort=function(){d&&(n(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||l(g))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),f||(f=null),d.send(f)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:l,isStream:function(e){return s(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zUVD:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);n("6UOJ");t.a=function(e){var t=e.title,n=e.subtitle,r=e.buttonText;return a.a.createElement("div",{className:"ezfy-parallax"},a.a.createElement("div",{className:"ezfy-parallax-container"},a.a.createElement("div",{className:"ezfy-parallax-background"},a.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;",alt:"Background with geometric patterns."}),a.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;",alt:"Background with geometric patterns."}),a.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;",alt:"Background with geometric patterns."}),a.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;",alt:"Background with geometric patterns."}),a.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."}),a.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."})),a.a.createElement("div",{className:"ezfy-parallax-text"},a.a.createElement("h2",null,t),a.a.createElement("h3",{className:"ezfy-parallax-subtitle"},n),a.a.createElement("a",{className:"btn custom-btn scroll",href:"#contact","data-scroll-offset":-60},r))))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("HSsa"),o=n("CgaS"),i=n("SntB");function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),c.isAxiosError=n("XwJu"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=2b639c13717a33bed9e81fd0af14f482ed055003-7979cb920f5e21457876.js.map