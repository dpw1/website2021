/*! For license information please see component---src-pages-shop-js-e5fe446dc21c4028a617.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+vFG":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var a=r(n("pVnL")),o=r(n("8OQS")),c=r(n("5kRi")),l=n("Wbzz"),i=r(n("KHAo")),u=function(e){var t=e.to,n=e.asModal,r=e.state,u=(0,o.default)(e,["to","asModal","state"]);return c.default.createElement(i.default.Consumer,null,(function(e){e.modal;var o=e.closeTo;return c.default.createElement(l.Link,(0,a.default)({to:t,state:(0,a.default)({},r,{modal:n,noScroll:t===o})},u))}))};t.default=u},"5kRi":function(e,t,n){"use strict";e.exports=n("D9la")},"7iBi":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("kvYz"),n("Wbzz"),n("URzR")),c=n("Ysz2"),l=n.n(c),i=n("+n12"),u=n("II4a"),s=n("pOn1");t.a=function(e){var t=Object(r.useState)(null),n=t[0],c=t[1],f=Object(r.useState)(null),m=f[0],p=f[1],d=Object(r.useState)(!1),y=d[0],v=d[1],g=Object(i.g)();Object(r.useEffect)((function(){var e=l.a.sanitizeProducts(g);c(e),p(e)}),[]),Object(r.useEffect)((function(){m&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[m]),Object(r.useEffect)((function(){y?setTimeout((function(){window.ezfy&&window.ezfy.init()}),50):p(n)}),[y]);var E=e.paddingTop;return a.a.createElement("section",{id:"shop",className:"section blog-area ptb_50 shop",style:{paddingTop:E}},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},a.a.createElement("div",{className:"section-heading text-center"},a.a.createElement("h2",{className:"text-capitalize"},"Shop"),a.a.createElement("p",{className:"d-sm-block mt-4"},"Simple, affordable and high quality copy-paste code snippets for your Shopify theme. ",a.a.createElement("br",null)," No coding knowledge required.")))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12 col-lg-12 shop-filter"},a.a.createElement("div",{className:"sidebar"},a.a.createElement("div",null,a.a.createElement(s.a,{data:n,updateData:p})),n&&a.a.createElement(u.a,{data:n,dataKey:"title",updateData:p,isSearching:y,setIsSearching:v}))),a.a.createElement("div",{className:"col-12 col-lg-12"},a.a.createElement("div",{className:"portfolio-row row"},m&&m.map((function(e){return Object(o.a)(e)})))))))}},D9la:function(e,t,n){"use strict";var r=n("YVoz"),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,i=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,m=a?Symbol.for("react.forward_ref"):60112,p=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,y=a?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||E}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||E}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var k=S.prototype=new w;k.constructor=S,r(k,b.prototype),k.isPureReactComponent=!0;var _={current:null},N=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,a={},c=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)N.call(t,r)&&!R.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===a[r]&&(a[r]=i[r]);return{$$typeof:o,type:e,key:c,ref:l,props:a,_owner:_.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var z=/\/+/g,O=[];function j(e,t,n,r){if(O.length){var a=O.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function x(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case o:case c:i=!0}}if(i)return r(a,t,""===n?"."+$(t,0):n),1;if(i=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+$(l=t[u],u);i+=e(l,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=v&&t[v]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)i+=e(l=l.value,s=n+$(l,u++),r,a);else if("object"===l)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(I(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(z,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(z,"$&/")+"/"),x(e,q,t=j(t,o,r,a)),C(t)}var L={current:null};function F(){var e=L.current;if(null===e)throw Error(g(321));return e}var D={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;x(e,T,t=j(null,null,t,n)),C(t)},count:function(e){return x(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!I(e))throw Error(g(143));return e}},t.Component=b,t.Fragment=l,t.Profiler=u,t.PureComponent=S,t.StrictMode=i,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=_.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)N.call(t,s)&&!R.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:l,props:a,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:m,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},EYWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("qhky"),c=n("NU3z"),l=n.n(c),i=function(e){var t=e.title,n=e.image,r=e.description,c=e.url,i=e.article,u={title:t||l.a.siteTitle,description:r||l.a.siteDescription,image:n||l.a.siteImage,url:c||""};return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Helmet,{title:u.title},a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"description",content:u.description}),a.a.createElement("meta",{name:"image",content:u.image}),u.url&&a.a.createElement("meta",{property:"og:url",content:u.url}),i?a.a.createElement("meta",{property:"og:type",content:"article"}):a.a.createElement("meta",{property:"og:type",content:"website"}),u.title&&a.a.createElement("meta",{property:"og:title",content:u.title}),u.description&&a.a.createElement("meta",{property:"og:description",content:u.description}),u.image&&a.a.createElement("meta",{property:"og:image",content:u.image}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),u.title&&a.a.createElement("meta",{name:"twitter:title",content:u.title}),u.description&&a.a.createElement("meta",{name:"twitter:description",content:u.description}),u.image&&a.a.createElement("meta",{name:"twitter:image",content:u.image})))}},KHAo:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=t.defaultValue=void 0;var a=r(n("5kRi")),o={isModal:!1,closeTo:null};t.defaultValue=o;var c=a.default.createContext(o);t.default=c},NU3z:function(e,t){e.exports={siteTitle:"EZFY | Shopify Partner Services",siteDescription:"Globally recognised Shopify Partner, creating beautiful online experiences and results-driven coding solutions.",siteTitleShort:"EZFY | Shopify Partner",siteImage:"https://www.ezfy.club/wp-content/uploads/2020/11/ezfy-logo-original.png",googleAnalyticsID:"UA-112401482-2",siteUrl:"https://ezfycode.com"}},R5LG:function(e,t,n){},URzR:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("R5LG"),n("76ZC")),c=n.n(o),l=n("+n12"),i=(n("v8IA"),n("Wbzz"));t.a=function(e){var t="item"in e?e.item:e,n=t.title,r=t.price,o=(t.description,t.miniDescription),u=t.thumbnail,s=(t.url,t.slug),f="home"===e.page?"/shop/"+s:s;return a.a.createElement("article",{key:JSON.stringify(e),className:"product ProductItem col-12 col-md-6 col-lg-4      portfolio-item services-item "+("home"===e.page?"ProductItem--homepage":"")},a.a.createElement("div",{className:"single-portfolio service-single res-margin"},a.a.createElement(i.Link,{className:"ProductItem-image portfolio-thumb blog-thumb",to:f},/\.mp4/gim.test(u)?a.a.createElement("video",{controls:!0},a.a.createElement("source",{src:u})):a.a.createElement("figure",{className:"aspect-ratio custom-overlay "},a.a.createElement("img",{className:"lazyload",src:"","data-src":u,alt:n}))),a.a.createElement("div",{className:"ProductItem-content   portfolio-content services-content blog-content p-4"},a.a.createElement("div",{className:"services-price ProductItem-price"},a.a.createElement("h3",{className:"ProductItem-title blog-title services-price-title my-3"},a.a.createElement(i.Link,{to:f,"data-options":JSON.stringify({buttons:["close"],gutter:15,loop:!0})},a.a.createElement("span",null,c()(n)))),a.a.createElement("h3",{className:"services-price-small ProductItem-price-small color-primary"},/free/gim.test(r)||a.a.createElement("small",{className:"fw-7"},"$"),r)),a.a.createElement("div",{className:"ProductItem-description "},a.a.createElement(a.a.Fragment,null,c()(Object(l.i)(o,{"\n":" ","<br>":""}))))),a.a.createElement("div",{className:"ProductItem-action"},a.a.createElement(i.Link,{to:f,className:"ProductItem-action-button btn mt-4 buy-now-button"},"View Details"))))}},kvYz:function(e,t,n){},v8IA:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0;var a=r(n("KHAo"));t.ModalRoutingContext=a.default;var o=r(n("+vFG"));t.Link=o.default},vg2q:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("FsuG"),c=n("rY4l"),l=n("6+GL"),i=n("JwsL"),u=n("7iBi"),s=n("EYWl"),f=function(e){return Object(r.useEffect)((function(){setTimeout(window.ezfy.start,50)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{title:"EZFY Shop: code snippets and sections for Shopify",description:"Custom, easy to install Shopify code snippets coded by a certified Shopify partner."}),a.a.createElement(c.a,{page:"shop",darkMode:!0}),a.a.createElement(o.a,null),a.a.createElement(u.a,{page:"shop",paddingTop:100}),a.a.createElement(l.a,null),a.a.createElement(i.a,null))};t.default=function(e){return a.a.createElement(f,Object.assign({},e,{className:"shop-page   "}))}}}]);
//# sourceMappingURL=component---src-pages-shop-js-e5fe446dc21c4028a617.js.map