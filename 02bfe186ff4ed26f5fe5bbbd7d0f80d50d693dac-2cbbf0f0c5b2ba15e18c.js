/*! For license information please see 02bfe186ff4ed26f5fe5bbbd7d0f80d50d693dac-2cbbf0f0c5b2ba15e18c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+vFG":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n=r(a("pVnL")),c=r(a("8OQS")),o=r(a("5kRi")),l=a("Wbzz"),i=r(a("KHAo")),s=function(e){var t=e.to,a=e.asModal,r=e.state,s=(0,c.default)(e,["to","asModal","state"]);return o.default.createElement(i.default.Consumer,null,(function(e){e.modal;var c=e.closeTo;return o.default.createElement(l.Link,(0,n.default)({to:t,state:(0,n.default)({},r,{modal:a,noScroll:t===c})},s))}))};t.default=s},"3ukv":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a("KQm4"),n=a("o0o1"),c=a.n(n),o=(a("ls82"),a("HaE+")),l=a("q1tI"),i=a.n(l),s=(a("6xQY"),a("sZxp")),u=a.n(s),m=a("76ZC"),f=a.n(m),p=a("Wbzz"),d=(a("TZi5"),a("H7U6")),g=(a("Ysz2"),a("URzR")),y=(a("5yr3"),a("+n12"));function h(e){var t=e.title,a=e.subtitle,n=e.chosenProducts,s=t||"Shop",m=a?f()(a):"",h=Object(l.useState)([]),v=h[0],E=h[1],b=function(){return i.a.createElement("div",{className:"ProductShowcase-SkeletonLoader"},i.a.createElement("div",{className:"ProductShowcase-SkeletonLoader-item"},i.a.createElement(u.a,{count:1,height:190}),i.a.createElement(u.a,{count:1}),i.a.createElement(u.a,{count:3})),i.a.createElement("div",{className:"ProductShowcase-SkeletonLoader-item"},i.a.createElement(u.a,{count:1,height:190}),i.a.createElement(u.a,{count:1}),i.a.createElement(u.a,{count:3})),i.a.createElement("div",{className:"ProductShowcase-SkeletonLoader-item"},i.a.createElement(u.a,{count:1,height:190}),i.a.createElement(u.a,{count:1}),i.a.createElement(u.a,{count:3})))},w=function(){var e=Object(o.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.f)();case 2:if(t=e.sent,E(t.slice(t.length-3)),n){e.next=6;break}return e.abrupt("return",E(t));case 6:a=[],n.map((function(e){t.map((function(t){if(e===t.title)return a.push(t)}))})),E(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){w()}),[]),i.a.createElement("section",{className:"ptb_50 section ProductShowcase "+("home"===e.page?"ProductShowcase--homepage":"")+"\n\n      "+(v&&v.length>=1&&"ProductShowcase--loaded")+"\n      "+("gray"===e.backgroundColor?"bg-gray":"")+"\n      "},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},i.a.createElement("div",{className:"section-heading text-center"},i.a.createElement("h2",{className:"text-capitalize"},s),i.a.createElement("p",{className:"d-sm-block mt-4"},m)))),i.a.createElement("div",{className:"row ProductShowcase-products"},v&&v.length>=1?Object(r.a)(v).map((function(e){return i.a.createElement(g.a,{page:"home",item:e})})):i.a.createElement(b,null)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 ProductShowcase-col"},i.a.createElement(p.Link,{className:"btn",to:d.a.shop},"See all products")))))}},"5kRi":function(e,t,a){"use strict";e.exports=a("D9la")},"6UOJ":function(e,t,a){},"6xQY":function(e,t,a){},"9RkO":function(e,t,a){},D9la:function(e,t,a){"use strict";var r=a("YVoz"),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function b(e,t,a){this.props=e,this.context=t,this.refs=E,this.updater=a||v}function w(){}function k(e,t,a){this.props=e,this.context=t,this.refs=E,this.updater=a||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var S=k.prototype=new w;S.constructor=k,r(S,b.prototype),S.isPureReactComponent=!0;var N={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,a){var r,n={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)x.call(t,r)&&!P.hasOwnProperty(r)&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];n.children=s}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:c,type:e,key:o,ref:l,props:n,_owner:N.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var C=/\/+/g,R=[];function I(e,t,a,r){if(R.length){var n=R.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function F(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function O(e,t,a){return null==e?0:function e(t,a,r,n){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var i=!1;if(null===t)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case c:case o:i=!0}}if(i)return r(n,t,""===a?"."+$(t,0):a),1;if(i=0,a=""===a?".":a+":",Array.isArray(t))for(var s=0;s<t.length;s++){var u=a+$(l=t[s],s);i+=e(l,u,r,n)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),s=0;!(l=t.next()).done;)i+=e(l=l.value,u=a+$(l,s++),r,n);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return i}(e,"",t,a)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?j(e,r,a,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+a)),r.push(e))}function j(e,t,a,r,n){var c="";null!=a&&(c=(""+a).replace(C,"$&/")+"/"),O(e,M,t=I(t,c,r,n)),F(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(h(321));return e}var D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return j(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;O(e,L,t=I(null,null,t,a)),F(t)},count:function(e){return O(e,(function(){return null}),null)},toArray:function(e){var t=[];return j(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=b,t.Fragment=l,t.Profiler=s,t.PureComponent=k,t.StrictMode=i,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,a){if(null==e)throw Error(h(267,e));var n=r({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,i=N.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)x.call(t,u)&&!P.hasOwnProperty(u)&&(n[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)n.children=a;else if(1<u){s=Array(u);for(var m=0;m<u;m++)s[m]=arguments[m+2];n.children=s}return{$$typeof:c,type:e.type,key:o,ref:l,props:n,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:m,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=z,t.createFactory=function(e){var t=z.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return U().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,a){return U().useReducer(e,t,a)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},EYWl:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("q1tI"),n=a.n(r),c=a("qhky"),o=a("NU3z"),l=a.n(o),i=function(e){var t=e.title,a=e.image,r=e.description,o=e.url,i=e.article,s={title:t||l.a.siteTitle,description:r||l.a.siteDescription,image:a||l.a.siteImage,url:o||""};return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.Helmet,{title:s.title},n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("meta",{name:"description",content:s.description}),n.a.createElement("meta",{name:"image",content:s.image}),s.url&&n.a.createElement("meta",{property:"og:url",content:s.url}),i?n.a.createElement("meta",{property:"og:type",content:"article"}):n.a.createElement("meta",{property:"og:type",content:"website"}),s.title&&n.a.createElement("meta",{property:"og:title",content:s.title}),s.description&&n.a.createElement("meta",{property:"og:description",content:s.description}),s.image&&n.a.createElement("meta",{property:"og:image",content:s.image}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.title&&n.a.createElement("meta",{name:"twitter:title",content:s.title}),s.description&&n.a.createElement("meta",{name:"twitter:description",content:s.description}),s.image&&n.a.createElement("meta",{name:"twitter:image",content:s.image})))}},KHAo:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=t.defaultValue=void 0;var n=r(a("5kRi")),c={isModal:!1,closeTo:null};t.defaultValue=c;var o=n.default.createContext(c);t.default=o},NU3z:function(e,t){e.exports={siteTitle:"EZFY | Shopify Partner Services",siteDescription:"Globally recognised Shopify Partner, creating beautiful online experiences and results-driven coding solutions.",siteTitleShort:"EZFY | Shopify Partner",siteImage:"https://www.ezfy.club/wp-content/uploads/2020/11/ezfy-logo-original.png",googleAnalyticsID:"UA-112401482-2",siteUrl:"https://ezfycode.com"}},R5LG:function(e,t,a){},URzR:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=(a("R5LG"),a("76ZC")),o=a.n(c),l=(a("v8IA"),a("Wbzz")),i=a("+n12");a("9RkO");function s(e){var t;return n.a.createElement("div",{className:"discount Label--sale"},n.a.createElement("div",{className:"Label-svg mo-fire"},n.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"125px",height:"189.864px",viewBox:"0 0 125 189.864",enableBackground:"new 0 0 125 189.864",xmlSpace:"preserve"},n.a.createElement("path",{className:"flame-main",fill:"#F36E21",d:"M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465\r c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54\r c6.806,41.899,16.831,45.301,6.088,53.985"}),n.a.createElement("path",{className:"flame-main one",fill:"#F6891F",d:"M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123\r c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"}),n.a.createElement("path",{className:"flame-main two",fill:"#FFD04A",d:"M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998\r C84.858,184.21,125.705,150.905,81.657,79.192z"}),n.a.createElement("path",{className:"flame-main three",fill:"#FDBA16",d:"M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79\r C95.354,106.319,99.92,114.108,99.92,101.754z"}),n.a.createElement("path",{className:"flame-main four",fill:"#F36E21",d:"M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041\r S134.387,164.603,103.143,105.917z"}),n.a.createElement("path",{className:"flame-main five",fill:"#FDBA16",d:"M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"}),n.a.createElement("path",{className:"flame",fill:"#F36E21",d:"M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"}),n.a.createElement("path",{className:"flame one",fill:"#F36E21",d:"M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"}),n.a.createElement("path",{className:"flame two",fill:"#F36E21",d:"M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"}))),n.a.createElement("span",{className:"CustomLabel-text"},(t=e.rawComparePrice-e.rawPrice,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t))," OFF"))}t.a=function(e){var t="item"in e?e.item:e,a=t.title,r=t.price,c=t.comparePrice,u=t.rawPrice,m=t.rawComparePrice,f=t.attributes,p=(t.description,t.miniDescription),d=t.thumbnail,g=(t.url,t.slug),y="home"===e.page?"/shop/"+g:g;return!(!!f&&f.find((function(e){return"development"===e.name.toLowerCase()})))&&n.a.createElement("article",{key:JSON.stringify(e),className:"product ProductItem col-12 col-md-6 col-lg-4      portfolio-item services-item "+("home"===e.page?"ProductItem--homepage":"")},c&&n.a.createElement(s,{rawPrice:u,rawComparePrice:m}),n.a.createElement("div",{className:"single-portfolio service-single res-margin"},n.a.createElement(l.Link,{className:"ProductItem-image portfolio-thumb blog-thumb",to:y},/\.mp4/gim.test(d)?n.a.createElement("video",{controls:!0},n.a.createElement("source",{src:d})):n.a.createElement("figure",{className:"aspect-ratio custom-overlay "},n.a.createElement("img",{className:"lazyload",src:"","data-src":d,alt:a}))),n.a.createElement("div",{className:"ProductItem-content   portfolio-content services-content blog-content p-4"},n.a.createElement("div",{className:"services-price ProductItem-price"},n.a.createElement("h3",{className:"ProductItem-title blog-title services-price-title my-3"},n.a.createElement(l.Link,{to:y,"data-options":JSON.stringify({buttons:["close"],gutter:15,loop:!0})},n.a.createElement("span",null,o()(a)))),n.a.createElement("div",{className:"ProductItem-sale   "},n.a.createElement("p",{className:"services-price-small ProductItem-price-small color-primary"},/free/gim.test(r)?r:r.toString().replace(".00","").replace("$0","Free")),c&&n.a.createElement("p",{className:"ProductItem-price-big color-primary"},c))),n.a.createElement("div",{className:"ProductItem-description "},n.a.createElement(n.a.Fragment,null,p&&o()(Object(i.m)(p,{"\n":" ","<br>":""}))))),n.a.createElement("div",{className:"ProductItem-action"},n.a.createElement(l.Link,{to:y,className:"ProductItem-action-button btn mt-4 buy-now-button"},"View Details"))))}},v8IA:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var n=r(a("KHAo"));t.ModalRoutingContext=n.default;var c=r(a("+vFG"));t.Link=c.default},zUVD:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);a("6UOJ");t.a=function(e){var t=e.title,a=e.subtitle,r=e.buttonText;return n.a.createElement("div",{className:"ezfy-parallax"},n.a.createElement("div",{className:"ezfy-parallax-container"},n.a.createElement("div",{className:"ezfy-parallax-background"},n.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xl-arcade.svg;",alt:"Background with geometric patterns."}),n.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-lg-arcade.svg;",alt:"Background with geometric patterns."}),n.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-md-arcade.svg;",alt:"Background with geometric patterns."}),n.a.createElement("img",{loading:"lazy",className:"lazyload","data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-sm-arcade.svg;",alt:"Background with geometric patterns."}),n.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."}),n.a.createElement("img",{"data-src":"https://returnpath.com/assets/images/backgrounds/background-confetti-xs-arcade.svg",loading:"lazy",className:"lazyload",alt:"Background with geometric patterns."})),n.a.createElement("div",{className:"ezfy-parallax-text"},n.a.createElement("h2",null,t),n.a.createElement("h3",{className:"ezfy-parallax-subtitle"},a),n.a.createElement("a",{className:"btn custom-btn scroll",href:"#contact","data-scroll-offset":-60},r))))}}}]);
//# sourceMappingURL=02bfe186ff4ed26f5fe5bbbd7d0f80d50d693dac-2cbbf0f0c5b2ba15e18c.js.map