/*! For license information please see 2b639c13717a33bed9e81fd0af14f482ed055003-9e64607ff15da46d74b3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6Uy2":function(e,t,a){},"7B5j":function(e,t,a){e.exports=a.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=(a("Iykn"),a("7B5j")),i=a.n(o),c=a("+n12"),l=a("76ZC"),s=a.n(l),u=a("H7U6"),d=a("Wbzz");t.a=function(e){var t=e.post,a=e.title,n=(t?Object(c.o)(t.featured_image_src):i.a,t?s()(t.title.rendered):"Ezfy Blog");return r.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},r.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},a||n),r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(d.Link,{to:u.a.home},"Home")),t&&r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(d.Link,{to:u.a.blog},"Blog"))))))))}},Iykn:function(e,t,a){},JR6P:function(e,t,a){},QES5:function(e,t,a){},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},Z8Uq:function(e,t,a){},cSmn:function(e,t,a){"use strict";e={};!function e(t,a,n,r){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function c(e){var n=a.exports.Promise,r=void 0!==n?n:t.Promise;return"function"==typeof r?new r(e):(e(i,i),null)}var l,s,u,d,f,p,m,b,h,w=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function a(n){f===n||f+u-1<n?(f=n,delete d[t],e()):d[t]=requestAnimationFrame(a)})),t},s=function(e){d[e]&&cancelAnimationFrame(d[e])}):(l=function(e){return setTimeout(e,u)},s=function(e){return clearTimeout(e)}),{frame:l,cancel:s}),v=(b={},function(){if(p)return p;if(!n&&o){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{p=new Worker(URL.createObjectURL(new Blob([t])))}catch(a){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",a),null}!function(e){function t(t,a){e.postMessage({options:t||{},callback:a})}e.init=function(t){var a=t.transferControlToOffscreen();e.postMessage({canvas:a},[a])},e.fire=function(a,n,r){if(m)return t(a,null),m;var o=Math.random().toString(36).slice(2);return m=c((function(n){function i(t){t.data.callback===o&&(delete b[o],e.removeEventListener("message",i),m=null,r(),n())}e.addEventListener("message",i),t(a,o),b[o]=i.bind(null,{data:{callback:o}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),b)b[t](),delete b[t]}}(p)}return p}),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,a){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:g[t],a)}function k(e){return e<0?0:Math.floor(e)}function E(e){return parseInt(e,16)}function x(e){return e.map(N)}function N(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function O(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function j(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function _(e,t,a,o,i){var l,s,u=t.slice(),d=e.getContext("2d"),f=c((function(t){function c(){l=s=null,d.clearRect(0,0,o.width,o.height),i(),t()}l=w.frame((function t(){!n||o.width===r.width&&o.height===r.height||(o.width=e.width=r.width,o.height=e.height=r.height),o.width||o.height||(a(e),o.width=e.width,o.height=e.height),d.clearRect(0,0,o.width,o.height),(u=u.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var a=t.tick++/t.totalTicks,n=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-a)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-n)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,a,n,r,o,i,c,l){e.save(),e.translate(t,a),e.rotate(o),e.scale(n,r),e.arc(0,0,1,i,c,l),e.restore()}(e,t.x,t.y,Math.abs(o-n)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(o),Math.floor(i)),e.lineTo(Math.floor(n),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)}))).length?l=w.frame(t):c()})),s=c}));return{addFettis:function(e){return u=u.concat(e),f},canvas:e,promise:f,reset:function(){l&&w.cancel(l),s&&s()}}}function S(e,a){var n,r=!e,i=!!y(a||{},"resize"),l=y(a,"disableForReducedMotion",Boolean),s=o&&!!y(a||{},"useWorker")?v():null,u=r?O:j,d=!(!e||!s)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function p(t,a,r){for(var o,i,c,l,s,d=y(t,"particleCount",k),f=y(t,"angle",Number),p=y(t,"spread",Number),m=y(t,"startVelocity",Number),b=y(t,"decay",Number),h=y(t,"gravity",Number),w=y(t,"drift",Number),v=y(t,"colors",x),g=y(t,"ticks",Number),E=y(t,"shapes"),N=y(t,"scalar"),O=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),j=d,S=[],C=e.width*O.x,M=e.height*O.y;j--;)S.push((o={x:C,y:M,angle:f,spread:p,startVelocity:m,color:v[j%v.length],shape:E[(l=0,s=E.length,Math.floor(Math.random()*(s-l))+l)],ticks:g,decay:b,gravity:h,drift:w,scalar:N},i=void 0,c=void 0,i=o.angle*(Math.PI/180),c=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-i+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return n?n.addFettis(S):(n=_(e,S,u,a,r)).promise}function m(a){var o=l||y(a,"disableForReducedMotion",Boolean),m=y(a,"zIndex",Number);if(o&&f)return c((function(e){e()}));r&&n?e=n.canvas:r&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(m),document.body.appendChild(e)),i&&!d&&u(e);var b={width:e.width,height:e.height};function h(){if(s){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};return u(t),void s.postMessage({resize:{width:t.width,height:t.height}})}b.width=b.height=null}function w(){n=null,i&&t.removeEventListener("resize",h),r&&e&&(document.body.removeChild(e),e=null,d=!1)}return s&&!d&&s.init(e),d=!0,s&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",h,!1),s?s.fire(a,b,w):p(a,b,w)}return m.reset=function(){s&&s.reset(),n&&n.reset()},m}function C(){return h||(h=S(null,{useWorker:!0,resize:!0})),h}a.exports=function(){return C().apply(this,arguments)},a.exports.reset=function(){C().reset()},a.exports.create=S}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),e,!1),t.a=e.exports;e.exports.create},kcvH:function(e,t,a){"use strict";var n,r=a("KQm4"),o=a("o0o1"),i=a.n(o),c=(a("ls82"),a("HaE+")),l=a("q1tI"),s=a.n(l),u=(a("qr+B"),a("76ZC")),d=a.n(u),f=a("+n12"),p=a("C56G"),m=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),b=function(e){function t(t){var a=e.call(this,t)||this;return a.name="AssertionError",a}return m(t,e),t}(Error);function h(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(a))}));return t.length>0?"?"+t.join("&"):""}var w=a("TSYQ"),v=a.n(w),g=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),y=function(){return(y=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},k=function(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{l(n.next(e))}catch(t){o(t)}}function c(e){try{l(n.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,c)}l((n=n.apply(e,t||[])).next())}))},E=function(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},N=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},O=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},j=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function _(e,t,a){var n=t.height,r=t.width,o=x(t,["height","width"]),i=y({height:n,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(a)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),a(c))}catch(e){console.error(e)}}),1e3);return c}var S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var a=t.props,n=a.onShareWindowClose,r=a.windowHeight,o=void 0===r?400:r,i=a.windowPosition,c=void 0===i?"windowCenter":i,l=a.windowWidth,s=void 0===l?550:l;_(e,y({height:o,width:s},"windowCenter"===c?O(s,o):j(s,o)),n)},t.handleClick=function(e){return k(t,void 0,void 0,(function(){var t,a,n,r,o,i,c,l,s,u;return E(this,(function(d){switch(d.label){case 0:return t=this.props,a=t.beforeOnClick,n=t.disabled,r=t.networkLink,o=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=r(i,l),n?[2]:(e.preventDefault(),a?(u=a(),N(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return g(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),a=e.className,n=e.disabled,r=e.disabledStyle,o=e.forwardedRef,i=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,x(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=v()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},a),f=y(y(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),n&&r);return s.a.createElement("button",y({},u,{"aria-label":u["aria-label"]||i,className:d,onClick:this.handleClick,ref:o,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(l.Component),C=function(){return(C=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var M=function(e,t,a,n){function r(r,o){var i=a(r),c=C({},r);return Object.keys(i).forEach((function(e){delete c[e]})),s.a.createElement(S,C({},n,c,{forwardedRef:o,networkName:e,networkLink:t,opts:a(r)}))}return r.displayName="ShareButton-"+e,Object(l.forwardRef)(r)};var z=M("whatsapp",(function(e,t){var a=t.title,n=t.separator;return function(e,t){if(!e)throw new b(t)}(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+h({text:a?a+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});var P,I,F=M("facebookmessenger",(function(e,t){var a=t.appId;return"https://www.facebook.com/dialog/send"+h({link:e,redirect_uri:t.redirectUri||e,app_id:a,to:t.to})}),(function(e){return{appId:e.appId,redirectUri:e.redirectUri,to:e.to}}),{windowWidth:1e3,windowHeight:820}),T=(a("JR6P"),a("vDqi")),L=a.n(T),B=(a("Wbzz"),"https://ezfy.club/json"),R=(I=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(i.a.mark((function e(a,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=t&&/\?/.test(t)?t.replace("?",""):t,e.next=4,L.a.get(B+"/wp/v2/posts?"+t);case 4:r=e.sent,o=r.data,a(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),P=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(i.a.mark((function e(a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get(B+"/wp/v2/posts?slug="+t);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)}))),a("H7U6"));a("QES5");function W(e){var t=e.advertisement,a=t.title,n=(t.image,t.link),r=t.list;return s.a.createElement("div",{"data-v-cad483e2":!0,"data-v-66b79341":!0,"data-v-4929b0a9":!0,className:"advertise"},s.a.createElement("div",{"data-v-cad483e2":!0,role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription",className:"modal modal--with-shadow modal--rounded"},s.a.createElement("div",{"data-v-66b79341":!0,"data-v-cad483e2":!0,className:"trial-popup__content-wrapper"},s.a.createElement("img",{"data-v-c1b39a62":!0,"data-v-66b79341":!0,"data-src":"https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-x.png",className:"lazyload zyro-image trial-popup__bg-figure trial-popup__bg-figure--top ls-is-cached lazyload"}),s.a.createElement("img",{"data-v-c1b39a62":!0,"data-v-66b79341":!0,"data-src":"https://www.ezfy.club/wp-content/uploads/2022/01/cute-flower-1.png",className:"lazyload zyro-image trial-popup__bg-figure trial-popup__bg-figure--bottom lazyload"}),s.a.createElement("div",{"data-v-66b79341":!0,"data-v-cad483e2":!0,className:"trial-popup__content trial-popup__content--with-price-disclaimer"},s.a.createElement("a",{"data-v-570454cb":!0,"data-v-66b79341":!0,className:"trial-popup__title advertise-title body body--desktop  strong advertise-custom-link","data-v-cad483e2":!0,target:"_blank",href:R.a.shopBlogSidebar}),s.a.createElement("p",{"data-v-570454cb":!0,"data-v-66b79341":!0,className:"trial-popup__title advertise-title body body--desktop  strong","data-v-cad483e2":!0},a),s.a.createElement("p",{"data-v-570454cb":!0,"data-v-66b79341":!0,className:"trial-popup__subtitle body body--desktop  standard","data-v-cad483e2":!0},"Enhance your theme with ",s.a.createElement("b",null,"copy & paste")," code snippets."),s.a.createElement("div",null),s.a.createElement("div",{"data-v-66b79341":!0,"data-v-cad483e2":!0,className:"trial-popup__checklist"},r&&r.length>=1&&r.map((function(e){return s.a.createElement("div",{"data-v-66b79341":!0,"data-v-cad483e2":!0,className:"trial-popup__checklist-item"},s.a.createElement("div",{"data-v-66b79341":!0,"data-v-cad483e2":!0,className:"trial-popup__checklist-item-icon-wrapper"},s.a.createElement("svg",{className:"checkmark-icon",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"}},s.a.createElement("g",null,s.a.createElement("g",null,s.a.createElement("path",{d:"M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"}))))),s.a.createElement("p",{"data-v-570454cb":!0,"data-v-66b79341":!0,className:"trial-popup__checklist-item-text body body--desktop  standard","data-v-cad483e2":!0},e))})))," ",s.a.createElement("a",{"data-v-119b77a1":!0,"data-v-66b79341":!0,className:"button button--medium button--medium-mobile btn","data-qa":"trialpopup-button-startfreetrial","data-v-cad483e2":!0,href:n},"VIEW PLUGINS"),s.a.createElement("p",{"data-v-570454cb":!0,"data-v-66b79341":!0,className:"trial-popup__disclaimer body body--desktop  standard","data-v-cad483e2":!0},s.a.createElement("span",{"data-v-66b79341":!0,"data-v-570454cb":!0},"No coding knowledge required.")))),s.a.createElement("div",{"data-v-cad483e2":!0,className:"loading-backdrop",style:{display:"none"}})))}var U=a("Ysz2");a("6Uy2");var A=a("sZxp"),H=a.n(A),q=a("cSmn");a("Z8Uq");function D(e){var t=Object(f.j)(),a=Object(l.useState)("Was this article helpful?"),n=a[0],r=a[1],o=Object(l.useState)(!1),u=o[0],d=o[1],p=Object(l.useState)(!1),m=p[0],b=p[1],h=Object(l.useState)(!1),w=h[0],v=h[1],g=Object(l.useState)(!1),y=g[0],k=g[1],E=Object(l.useState)(!1),x=E[0],N=E[1],O=Object(l.useState)("Submit"),j=O[0],_=O[1],S=Object(l.useState)(0),C=S[0],M=S[1],z=Object(l.useState)(""),P=z[0],I=z[1];Object(l.useEffect)(Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(f.k)("feedback_cookie")){e.next=4;break}return setTimeout((function(){v(!0)}),7500),e.abrupt("return");case 4:return e.next=6,Object(f.E)(50);case 6:return e.next=8,F();case 8:case"end":return e.stop()}}),e)}))),[]);function F(){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(c.a)(i.a.mark((function e(a,n){var r,o,c,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.ezfy.club/json/ezfy/v1/feedback");case 2:return r=e.sent,e.next=5,r.json();case 5:o=e.sent,c=Object(f.g)(o.data),l=Object.keys(c).map((function(e,t){if(e.includes("fingerprint"))return c[e]})).filter((function(e){return e})),s=l.filter((function(e){return e===t})).length>=1,b(s),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return B.apply(this,arguments)}function B(){return(B=Object(c.a)(i.a.mark((function e(a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===a&&(a=null),void 0===n&&(n=null),e.abrupt("return",new Promise(function(){var e=Object(c.a)(i.a.mark((function e(r,o){var c,l,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=document.querySelector(".blog-breadcrumb-title"),l=c.textContent.trim(),e.next=4,fetch("https://www.ezfy.club/json/ezfy/v1/feedback/create",{method:"POST",body:JSON.stringify({title:l,content:n,fingerprint:t,answer:a,country:Object(f.l)()}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 4:return s=e.sent,e.next=7,s.json();case 7:u=e.sent,M(u.data.id),r();case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return W.apply(this,arguments)}function W(){return(W=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=null),e.abrupt("return",new Promise(function(){var e=Object(c.a)(i.a.mark((function e(a,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return a(),e.abrupt("return");case 3:return e.next=5,fetch("https://www.ezfy.club/json/ezfy/v1/feedback/update/"+C,{method:"PUT",body:JSON.stringify({content:t}),headers:{"Content-type":"application/json; charset=UTF-8"}});case 5:e.sent,a();case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.a.createElement("div",{className:"Feedback\n      Feedback--"+e.type+"\n      "+(x?"Feedback--completed":"")+"\n      "+(y?"Feedback--loading":"")+"\n      "+(u?"Feedback--clicked":"")+"\n      "+(w?"":"Feedback--invisible")+"\n      "},s.a.createElement("span",{onClick:function(){v(!1),Object(f.C)("feedback_cookie","closed",1)},className:"Feedback-close"},"X"),s.a.createElement("p",{className:"Feedback-title"},n),s.a.createElement("div",{className:"Feedback-buttons"},y?s.a.createElement(H.a,{style:{marginRight:10},height:35,width:82}):s.a.createElement("button",{onClick:Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),m){e.next=6;break}return e.next=4,L("yes");case 4:e.next=8;break;case 6:return e.next=8,Object(f.E)(1e3);case 8:r("Thank you! Any other tutorials or products you'd like to see?"),d(!0),k(!1);case 11:case"end":return e.stop()}}),e)}))),className:"Feedback-button"},s.a.createElement("svg",{className:"Feedback--icon-yes",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24},s.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.a.createElement("path",{d:"M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"})),s.a.createElement("span",null,"Yes")),y?s.a.createElement(H.a,{height:35,width:82}):s.a.createElement("button",{onClick:Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),m){e.next=6;break}return e.next=4,L("no");case 4:e.next=8;break;case 6:return e.next=8,Object(f.E)(1e3);case 8:r("We're sorry to hear. How can we improve?"),d(!0),k(!1);case 11:case"end":return e.stop()}}),e)}))),className:"Feedback-button"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24},s.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),s.a.createElement("path",{d:"M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"})),s.a.createElement("span",null,"No"))),s.a.createElement("div",{className:"Feedback-feedback"},s.a.createElement("textarea",{value:P,onChange:function(e){I(e.target.value)},placeholder:"Please type here",resizable:!0,className:"Feedback-textarea"}),s.a.createElement("button",{disabled:P.length<=1,onClick:Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),_("Submitting..."),e.next=4,R(P);case 4:k(!1),r("Thanks for your feedback!"),_("All done :)"),Object(f.C)("feedback_cookie","voted",7),N(!0),Object(q.a)({particleCount:100,spread:70,origin:{y:.6}});case 10:case"end":return e.stop()}}),e)}))),className:"Feedback-submit btn"},j)))}var Z=a("+x2M");t.a=function(e){var t=Object(l.useState)(null),a=(t[0],t[1],Object(l.useState)(null)),n=a[0],o=a[1],u=Object(l.useState)([]),m=(u[0],u[1],e.post),b=(Object(f.h)(m.date),m.title.rendered),h=Object(f.o)(m.featured_image_src),w=m.featured_image_url_alt,v=Z(m.content.rendered).text;function g(e){return y.apply(this,arguments)}function y(){return(y=Object(c.a)(i.a.mark((function e(t){var a,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=t.tag_names.map((function(e){return e.toLowerCase().replace("theme","").trim()})),f.t.map((function(e){var t=e.tags.map((function(e){return e.toLowerCase().replace(/\s?theme(s)?/,"").trim()})),o=n.filter((function(e){return t.includes(e)||t.includes("app functionality")||t.includes("all")}));o&&o.length>=1&&a.push(Object(r.a)(t))})),o=a.map((function(e){return e.filter((function(e){return e.match(/sense|craft|refresh|colorblock|taste|ride|studio|crave|origina|publisher/)})).length>=1?null:e.join("|")})).filter((function(e){return null!==e})).join("|").split("|"),Object(r.a)(new Set(o)),e.next=7,Object(f.m)();case 7:e.sent;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){var e;o(void 0!==window?window.location.href:"https://ezfycode.com"),(e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.sleep)(1e3);case 2:Object(f.v)(),g(m);case 4:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})()}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{post:m}),s.a.createElement("section",{id:"blogContent ",className:"section blog-content blog-area ptb_100"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row blog-content-wrapper"},s.a.createElement("div",{className:"blog-content-block blog-content-block--sidebar col-12 col-lg-3"},s.a.createElement("aside",{className:"sidebar"},s.a.createElement(W,{advertisement:{title:"Replace apps with code snippets.",image:"https://media0.giphy.com/media/WvvzxI0VWF8kVo4olS/giphy.gif",link:"https://ezfycode.com/shop?source=blog-sidebar",list:["No monthly fees","Plugins tested in real stores w/ thousands of daily visits","Same day response support","Pay once use forever"]}}))),s.a.createElement("div",{className:"blog-content-block col-12 col-lg-9"},s.a.createElement("article",{className:"single-blog-details"},s.a.createElement("div",{className:"sApp-blog blog-content-text"},s.a.createElement("div",{className:"meta-info d-flex flex-wrap align-items-center py-2"},s.a.createElement("ul",{className:"blog-content-info"},s.a.createElement("li",{className:"d-inline-block p-2"},s.a.createElement("span",null,"By Diego Moretti")),s.a.createElement("li",{className:"d-inline-block p-2 blog-content-info--time"},s.a.createElement("svg",{className:"blog-content-info-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},s.a.createElement("g",null,s.a.createElement("circle",{cx:7,cy:7,r:"6.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}),s.a.createElement("polyline",{points:"7 4.5 7 7 9.54 9.96",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}))),s.a.createElement("span",{className:"blog-content-info-length"},v)))),s.a.createElement("div",{className:"blog-details blog-content-details"},s.a.createElement("h3",{className:"blog-title py-2 py-sm-3"},s.a.createElement("span",null,d()(b))),s.a.createElement("figure",{className:"blog-featured-image"},s.a.createElement("img",{src:h,alt:w})),s.a.createElement("div",{className:"blog-text"},Object(f.e)(m.content.rendered),s.a.createElement(D,{type:"mobile"}))),s.a.createElement("div",{className:"blog-share blog-content-share ml-auto d-none d-sm-block"},s.a.createElement("div",{className:"social-icons social-icons--blog d-flex "},s.a.createElement("a",{className:"bg-white facebook social-icon",href:"https://www.facebook.com/sharer/sharer.php?u="+n,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:"fab fa-facebook-f"}),s.a.createElement("i",{className:"fab fa-facebook-f"})),s.a.createElement("a",{className:"bg-white twitter  social-icon",href:"https://twitter.com/intent/tweet?url="+n+"&text="+b,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:"fab fa-twitter"}),s.a.createElement("i",{className:"fab fa-twitter"})),s.a.createElement("a",{className:"bg-white pinterest social-icon",href:"http://pinterest.com/pin/create/button/?url="+n+"&description="+b,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:"fab  fa-pinterest","aria-hidden":"true"}),s.a.createElement("i",{className:"fab fa-pinterest","aria-hidden":"true"})),s.a.createElement("a",{className:"bg-white linkedin social-icon",href:"http://www.linkedin.com/shareArticle?mini=true&url="+n+"&title="+b,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"}),s.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"})),s.a.createElement(z,{url:n},s.a.createElement("span",{className:"bg-white social-icon whatsapp social-icon"},s.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}),s.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}))),s.a.createElement(F,{appId:"2995462243875033",url:n},s.a.createElement("span",{className:"bg-white social-icon facebook-messenger social-icon"},s.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"}),s.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"}))))))))))),s.a.createElement(D,{type:"desktop"}))}},"qr+B":function(e,t,a){}}]);
//# sourceMappingURL=2b639c13717a33bed9e81fd0af14f482ed055003-9e64607ff15da46d74b3.js.map