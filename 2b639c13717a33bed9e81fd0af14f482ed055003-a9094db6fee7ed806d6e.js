/*! For license information please see 2b639c13717a33bed9e81fd0af14f482ed055003-a9094db6fee7ed806d6e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3ukv":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("KQm4"),r=a("q1tI"),o=a.n(r),c=(a("6xQY"),a("76ZC")),l=a.n(c),i=a("Wbzz"),s=(a("TZi5"),a("H7U6")),u=a("Ysz2"),d=a.n(u),m=a("+n12"),p=a("URzR");a("5yr3");function f(e){var t=e.title,a=e.subtitle,c=e.chosenProducts,u=t||"Shop",f=a?l()(a):"",b=Object(r.useState)([]),h=b[0],g=b[1],w=Object(m.g)();return Object(r.useEffect)((function(){var e=d.a.sanitizeProducts(w);if(!c)return g(e);var t=[];c.map((function(a){e.map((function(e){if(a===e.title)return t.push(e)}))})),g(t)}),[]),o.a.createElement("section",{className:"ptb_50 section ProductShowcase "+("home"===e.page?"ProductShowcase--homepage":"")+"\n      "+("gray"===e.backgroundColor?"bg-gray":"")+"\n      "},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},o.a.createElement("div",{className:"section-heading text-center"},o.a.createElement("h2",{className:"text-capitalize"},u),o.a.createElement("p",{className:"d-sm-block mt-4"},f)))),o.a.createElement("div",{className:"row ProductShowcase-products two-per-row-mobile"},Object(n.a)(h).map((function(e){return o.a.createElement(p.a,{page:"home",item:e})}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 ProductShowcase-col"},o.a.createElement(i.Link,{className:"btn",to:s.a.shop},"See all products")))))}},"6UOJ":function(e,t,a){},"6xQY":function(e,t,a){},"7B5j":function(e,t,a){e.exports=a.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=(a("Iykn"),a("7B5j")),c=a.n(o),l=a("+n12"),i=a("76ZC"),s=a.n(i),u=a("H7U6"),d=a("Wbzz");t.a=function(e){var t=e.post,a=e.title,n=t?Object(l.e)(t.featured_image_src):c.a,o=t?s()(t.title.rendered):"Ezfy Blog",i="url("+n+") no-repeat scroll center center / "+(t?"contain":"cover");return r.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:i}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},r.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},a||o),r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(d.Link,{to:u.a.home},"Home")),t&&r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(d.Link,{to:u.a.blog},"Blog"))))))))}},Iykn:function(e,t,a){},JR6P:function(e,t,a){},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},kcvH:function(e,t,a){"use strict";var n,r=a("q1tI"),o=a.n(r),c=(a("qr+B"),a("76ZC")),l=a.n(c),i=a("+n12"),s=a("C56G"),u=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),d=function(e){function t(t){var a=e.call(this,t)||this;return a.name="AssertionError",a}return u(t,e),t}(Error);function m(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],a=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(a))}));return t.length>0?"?"+t.join("&"):""}var p=a("TSYQ"),f=a.n(p),b=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),h=function(){return(h=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},g=function(e,t,a,n){return new(a||(a=Promise))((function(r,o){function c(e){try{i(n.next(e))}catch(t){o(t)}}function l(e){try{i(n.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(c,l)}i((n=n.apply(e,t||[])).next())}))},w=function(e,t){var a,n,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(r=c.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(l){o=[6,l],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},E=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},y=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},k=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function N(e,t,a){var n=t.height,r=t.width,o=v(t,["height","width"]),c=h({height:n,width:r,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),l=window.open(e,"",Object.keys(c).map((function(e){return e+"="+c[e]})).join(", "));if(a)var i=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(i),a(l))}catch(e){console.error(e)}}),1e3);return l}var O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var a=t.props,n=a.onShareWindowClose,r=a.windowHeight,o=void 0===r?400:r,c=a.windowPosition,l=void 0===c?"windowCenter":c,i=a.windowWidth,s=void 0===i?550:i;N(e,h({height:o,width:s},"windowCenter"===l?y(s,o):k(s,o)),n)},t.handleClick=function(e){return g(t,void 0,void 0,(function(){var t,a,n,r,o,c,l,i,s,u;return w(this,(function(d){switch(d.label){case 0:return t=this.props,a=t.beforeOnClick,n=t.disabled,r=t.networkLink,o=t.onClick,c=t.url,l=t.openShareDialogOnClick,i=t.opts,s=r(c,i),n?[2]:(e.preventDefault(),a?(u=a(),E(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(s),o&&o(e,s),[2]}}))}))},t}return b(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),a=e.className,n=e.disabled,r=e.disabledStyle,c=e.forwardedRef,l=(e.networkLink,e.networkName),i=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,v(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=f()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},a),m=h(h(i?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&r);return o.a.createElement("button",h({},u,{"aria-label":u["aria-label"]||l,className:d,onClick:this.handleClick,ref:c,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),j=function(){return(j=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var x=function(e,t,a,n){function c(r,c){var l=a(r),i=j({},r);return Object.keys(l).forEach((function(e){delete i[e]})),o.a.createElement(O,j({},n,i,{forwardedRef:c,networkName:e,networkLink:t,opts:a(r)}))}return c.displayName="ShareButton-"+e,Object(r.forwardRef)(c)};var S=x("whatsapp",(function(e,t){var a=t.title,n=t.separator;return function(e,t){if(!e)throw new d(t)}(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+m({text:a?a+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});var _=x("facebookmessenger",(function(e,t){var a=t.appId;return"https://www.facebook.com/dialog/send"+m({link:e,redirect_uri:t.redirectUri||e,app_id:a,to:t.to})}),(function(e){return{appId:e.appId,redirectUri:e.redirectUri,to:e.to}}),{windowWidth:1e3,windowHeight:820}),z=a("TsPW"),C=a("HaE+"),P=a("o0o1"),B=a.n(P),I=(a("JR6P"),a("Wbzz")),W=a("H7U6"),H=function(e){var t=Object(r.useState)([]),a=t[0],n=t[1],c=z.a.getSidebarPostsGraphql();return Object(r.useEffect)((function(){(function(){var e=Object(C.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(i.j)(c).slice(0,5),n(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement("div",{className:"single-widget posts-sidebar"},o.a.createElement("div",{className:"accordions widget post-widget",id:"post-accordion"},o.a.createElement("div",{className:"single-accordion"},o.a.createElement("h5",null,o.a.createElement(I.Link,{to:W.a.blog,className:"collapse show text-uppercase d-block p-3 posts-sidebar-button posts-sidebar-button--desktop"},"More Posts"),o.a.createElement("a",{role:"button",className:"collapse show text-uppercase d-block p-3 posts-sidebar-button posts-sidebar-button--mobile","data-toggle":"collapse",href:"#accordion2"},"More Posts")),o.a.createElement("div",{id:"accordion2",className:"accordion-content widget-content collapse show","data-parent":"#post-accordion"},o.a.createElement("ul",{className:"widget-items"},a&&a.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("a",{href:Object(i.d)(e.slug),className:"single-post align-items-center align-items-lg-start media p-3"},o.a.createElement("div",{className:"post-thumb avatar-md"},o.a.createElement("img",{className:"align-self-center",src:e.featured_image_small_src,alt:e.title})),o.a.createElement("div",{className:"post-content media-body pl-3"},o.a.createElement("h6",null,l()(e.title)),o.a.createElement("p",{className:"post-date posts-sidebar-date mb-2"},Object(i.c)(e.date)))))})))))))};t.a=function(e){var t=Object(r.useState)(null),a=(t[0],t[1],Object(r.useState)(null)),n=a[0],c=a[1],u=e.post,d=""+Object(i.c)(u.date),m=u.title.rendered,p=Object(i.e)(u.featured_image_src);return Object(r.useEffect)((function(){c(void 0!==window?window.location.href:"https://ezfycode.com")}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{post:u}),o.a.createElement("section",{id:"blogContent ",className:"section blog-content blog-area ptb_100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row blog-content-wrapper"},o.a.createElement("div",{className:"blog-content-block blog-content-block--sidebar col-12 col-lg-3"},o.a.createElement("aside",{className:"sidebar"},o.a.createElement(H,null))),o.a.createElement("div",{className:"blog-content-block col-12 col-lg-9"},o.a.createElement("article",{className:"single-blog-details"},o.a.createElement("div",{className:"sApp-blog blog-content-text"},o.a.createElement("div",{className:"meta-info d-flex flex-wrap align-items-center py-2"},o.a.createElement("ul",{className:"blog-content-info"},o.a.createElement("li",{className:"d-inline-block p-2"},"By ",o.a.createElement("span",null,"Diego Fortes")),o.a.createElement("li",{className:"d-inline-block p-2"},o.a.createElement("span",null,d)))),o.a.createElement("div",{className:"blog-details blog-content-details"},o.a.createElement("h3",{className:"blog-title py-2 py-sm-3"},o.a.createElement("span",null,l()(m))),o.a.createElement("figure",{className:"blog-featured-image"},o.a.createElement("img",{src:p,alt:""})),o.a.createElement("div",null,l()(u.content.rendered))),o.a.createElement("div",{className:"blog-share blog-content-share ml-auto d-none d-sm-block"},o.a.createElement("div",{className:"social-icons social-icons--blog d-flex "},o.a.createElement("a",{className:"bg-white facebook social-icon",href:"https://www.facebook.com/sharer/sharer.php?u="+n,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-facebook-f"}),o.a.createElement("i",{className:"fab fa-facebook-f"})),o.a.createElement("a",{className:"bg-white twitter  social-icon",href:"https://twitter.com/intent/tweet?url="+n+"&text="+m,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter"}),o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("a",{className:"bg-white pinterest social-icon",href:"http://pinterest.com/pin/create/button/?url="+n+"&description="+m,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab  fa-pinterest","aria-hidden":"true"}),o.a.createElement("i",{className:"fab fa-pinterest","aria-hidden":"true"})),o.a.createElement("a",{className:"bg-white linkedin social-icon",href:"http://www.linkedin.com/shareArticle?mini=true&url="+n+"&title="+m,rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"}),o.a.createElement("i",{className:"fab  fa-linkedin","aria-hidden":"true"})),o.a.createElement(S,{url:n},o.a.createElement("span",{className:"bg-white social-icon whatsapp social-icon"},o.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}),o.a.createElement("i",{className:"fab fa-whatsapp","aria-hidden":"true"}))),o.a.createElement(_,{appId:"2995462243875033",url:n},o.a.createElement("span",{className:"bg-white social-icon facebook-messenger social-icon"},o.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"}),o.a.createElement("i",{className:"fab fa-facebook-messenger","aria-hidden":"true"})))))))))),o.a.createElement(I.Link,{className:"btn blog-content-more",to:W.a.shop},"View all blogs")))}},"qr+B":function(e,t,a){},zUVD:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("6UOJ");t.a=function(e){var t=e.title,a=e.subtitle,n=e.buttonText;return r.a.createElement("div",{className:"ezfy-parallax"},r.a.createElement("div",{className:"ezfy-parallax-container"},r.a.createElement("div",{className:"ezfy-parallax-background"},r.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;",alt:"Background with geometric patterns."}),r.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;",alt:"Background with geometric patterns."}),r.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;",alt:"Background with geometric patterns."}),r.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;",alt:"Background with geometric patterns."}),r.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."}),r.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."})),r.a.createElement("div",{className:"ezfy-parallax-text"},r.a.createElement("h2",null,t),r.a.createElement("h3",{className:"ezfy-parallax-subtitle"},a),r.a.createElement("a",{className:"btn custom-btn scroll",href:"#contact","data-scroll-offset":-60},n))))}}}]);
//# sourceMappingURL=2b639c13717a33bed9e81fd0af14f482ed055003-a9094db6fee7ed806d6e.js.map