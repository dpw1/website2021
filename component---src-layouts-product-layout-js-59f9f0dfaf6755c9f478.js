(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2s9c":function(e,t,n){},"9BSq":function(e,t,n){"use strict";e.exports=function(e,t){void 0===t&&(t={});var n=t.offset;void 0===n&&(n=0);var a=t.threshold;void 0===a&&(a=0);var r=e.getBoundingClientRect(),i=r.top,c=r.right,o=r.bottom,l=r.left,s=r.width,u=r.height,m=o,d=window.innerWidth-l,f=window.innerHeight-i,p=c,g=a*s,w=a*u;return m>=(n.top||n+w)&&d>=(n.right||n+g)&&f>=(n.bottom||n+w)&&p>=(n.left||n+g)}},AtIw:function(e,t,n){},B9KB:function(e,t,n){"use strict";var a;!function(r){if("function"!=typeof i){var i=function(e){return e};i.nonNative=!0}var c=i("plaintext"),o=i("html"),l=i("comment"),s=/<(\w*)>/g,u=/<\/?([^\s\/>]+)/;function m(e,t,n){return f(e=e||"",d(t=t||[],n=n||""))}function d(e,t){return{allowable_tags:e=function(e){var t,n=new Set;if("string"==typeof e)for(;t=s.exec(e);)n.add(t[1]);else i.nonNative||"function"!=typeof e[i.iterator]?"function"==typeof e.forEach&&e.forEach(n.add,n):n=new Set(e);return n}(e),tag_replacement:t,state:c,tag_buffer:"",depth:0,in_quote_char:""}}function f(e,t){for(var n=t.allowable_tags,a=t.tag_replacement,r=t.state,i=t.tag_buffer,s=t.depth,u=t.in_quote_char,m="",d=0,f=e.length;d<f;d++){var g=e[d];if(r===c)switch(g){case"<":r=o,i+=g;break;default:m+=g}else if(r===o)switch(g){case"<":if(u)break;s++;break;case">":if(u)break;if(s){s--;break}u="",r=c,i+=">",n.has(p(i))?m+=i:m+=a,i="";break;case'"':case"'":u=g===u?"":u||g,i+=g;break;case"-":"<!-"===i&&(r=l),i+=g;break;case" ":case"\n":if("<"===i){r=c,m+="< ",i="";break}i+=g;break;default:i+=g}else if(r===l)switch(g){case">":"--"==i.slice(-2)&&(r=c),i="";break;default:i+=g}}return t.state=r,t.tag_buffer=i,t.depth=s,t.in_quote_char=u,m}function p(e){var t=u.exec(e);return t?t[1].toLowerCase():null}m.init_streaming_mode=function(e,t){var n=d(e=e||[],t=t||"");return function(e){return f(e||"",n)}},void 0===(a=function(){return m}.call(t,n,t,e))||(e.exports=a)}()},BddD:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("rY4l"),c=n("6+GL"),o=n("JwsL"),l=(n("kcvH"),n("zUVD"),n("76ZC")),s=n.n(l),u=n("EYWl");n("AtIw"),n("JH3/"),n("2s9c");var m=n("9BSq"),d=n.n(m);n("TjUD");function f(e){var t=Object(a.useState)(!0),n=t[0],i=t[1],c=Object(a.useState)(!0),o=c[0],l=c[1],s=e.url,u=e.name,m=e.price;return Object(a.useEffect)((function(){var e=function(){var e=document.querySelector(".Product-atc");e&&i(d()(e))};window.onload=function(){e(),l(!1)},window.addEventListener("scroll",(function(){setTimeout(e,100),o&&l(!1)}))}),[]),Object(a.useEffect)((function(){console.log(n)}),[n]),r.a.createElement("div",{className:"FloatingButton "+(n?"FloatingButton--invisible":"FloatingButton--visible")+" \n            \n      "+(o||"FloatingButton--loaded")+" \n      "},r.a.createElement("a",{className:"FloatingButton-button",href:s,target:"_blank"},u||"Download now",m&&r.a.createElement("div",{className:"FloatingButton-price "},m)))}function p(e){var t=e.product,n="free"===t.price.toLowerCase()?t.price:"$"+t.price,i=t.addToCart?t.addToCart:t.url;return Object(a.useEffect)((function(){window.productPage={init:function(){var e;e=window.document.querySelector(".Product-figure"),new IntersectionObserver((function(e){var t=e[0];return t.target.classList.toggle("Product-figure--is-pinned",t.intersectionRatio<1)}),{threshold:[1]}).observe(e)}},window.productPage.init()}),[]),r.a.createElement("section",{className:"Product"},r.a.createElement("div",{className:"Product-container container"},r.a.createElement("div",{className:"Product-picture"},r.a.createElement("figure",{className:"Product-figure"},r.a.createElement("img",{className:"Product-img",src:t.thumbnail,alt:""}))),r.a.createElement("div",{className:"Product-description"},r.a.createElement("h1",{className:"Product-title"},t.title),r.a.createElement("h2",{className:"Product-price"},n),r.a.createElement("a",{href:i,target:"_blank",className:"Product-atc btn--custom"},"Download now"),r.a.createElement("div",{className:"Product-text"},s()(t.description||" ")))),r.a.createElement(f,{url:i,price:n}))}var g=n("B9KB"),w=n.n(g);n("C56G"),n("JNCj"),n("H7U6");t.default=function(e){var t=Object(a.useState)(""),n=(t[0],t[1]);console.log(e);var l=e.pageContext,s=l.miniDescription?l.miniDescription:w()(l.description).split(" ").splice(0,15).join(" ")+" (...)";return Object(a.useEffect)((function(){n(window.location.href),setTimeout((function(){window.scrollTo(0,0),window.ezfy.start()}),100)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:l.title,description:s,image:l.thumbnail}),r.a.createElement(i.a,{page:"shop",darkMode:!0}," "),r.a.createElement(p,{product:l}),r.a.createElement(c.a,null),r.a.createElement(o.a,{page:"blog"}))}},EYWl:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),i=n("qhky"),c=n("NU3z"),o=n.n(c),l=function(e){var t=e.title,n=e.description,a=e.url,c=e.article,l={title:t||o.a.siteTitle,description:n||o.a.siteDescription,image:o.a.siteImage,url:a||""};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,{title:l.title},r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:l.description}),r.a.createElement("meta",{name:"image",content:l.image}),l.url&&r.a.createElement("meta",{property:"og:url",content:l.url}),c?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),l.title&&r.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&r.a.createElement("meta",{property:"og:description",content:l.description}),l.image&&r.a.createElement("meta",{property:"og:image",content:l.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.title&&r.a.createElement("meta",{name:"twitter:title",content:l.title}),l.description&&r.a.createElement("meta",{name:"twitter:description",content:l.description}),l.image&&r.a.createElement("meta",{name:"twitter:image",content:l.image})))}},"JH3/":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=(n("eSVZ"),function(){return r.a.createElement("svg",{className:"star",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512.002 512.002",style:{enableBackground:"new 0 0 512.002 512.002"},xmlSpace:"preserve"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157    c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065    c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671    c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638    l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955    C511.56,208.649,513.033,202.688,511.267,197.258z"}))))});t.a=function(e){return e.title,e.subtitle,e.buttonText,r.a.createElement("figure",{className:"stars"},r.a.createElement(i,null),r.a.createElement(i,null),r.a.createElement(i,null),r.a.createElement(i,null),r.a.createElement(i,null))}},JNCj:function(e,t,n){},NU3z:function(e,t){e.exports={siteTitle:"EZFY | Shopify Coding Services",siteDescription:"Globally recognised Shopify Expert, creating beautiful online experiences and results-driven coding solutions.",siteTitleShort:"EZFY | Shopify Coding",siteImage:"https://www.ezfy.club/wp-content/uploads/2020/11/ezfy-logo-original.png",googleAnalyticsID:"UA-112401482-2",siteUrl:"https://ezfycode.com"}},TjUD:function(e,t,n){},eSVZ:function(e,t,n){}}]);
//# sourceMappingURL=component---src-layouts-product-layout-js-59f9f0dfaf6755c9f478.js.map