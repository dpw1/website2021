(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+vFG":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var l=n(a("pVnL")),i=n(a("8OQS")),o=n(a("5kRi")),c=a("Wbzz"),r=n(a("KHAo")),s=function(e){var t=e.to,a=e.asModal,n=e.state,s=(0,i.default)(e,["to","asModal","state"]);return o.default.createElement(r.default.Consumer,null,(function(e){e.modal;var i=e.closeTo;return o.default.createElement(c.Link,(0,l.default)({to:t,state:(0,l.default)({},n,{modal:a,noScroll:t===i})},s))}))};t.default=s},"7iBi":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=(a("kvYz"),a("Wbzz"),a("URzR")),o=a("Ysz2"),c=a.n(o),r=a("+n12"),s=a("II4a"),m=a("pOn1");t.a=function(e){var t=Object(n.useState)(null),a=t[0],o=t[1],u=Object(n.useState)(null),d=u[0],p=u[1],E=Object(n.useState)(!1),f=E[0],g=E[1],h=Object(r.f)();Object(n.useEffect)((function(){var t=c.a.sanitizeProducts(h);o(t),p(t),console.log("all shop     props",e)}),[]),Object(n.useEffect)((function(){console.log("my products",d),d&&(console.log("we are searching",d),setTimeout((function(){window.ezfy&&window.ezfy.init()}),50))}),[d]),Object(n.useEffect)((function(){if(console.log("searching? ",f),f)return console.log("inside is searching"),void setTimeout((function(){window.ezfy&&window.ezfy.init()}),50);p(a)}),[f]);var v=e.paddingTop;return l.a.createElement("section",{id:"shop",className:"section blog-area ptb_50 shop",style:{paddingTop:v}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},l.a.createElement("div",{className:"section-heading text-center"},l.a.createElement("h2",{className:"text-capitalize"},"Shop"),l.a.createElement("p",{className:"d-sm-block mt-4"},"Simple, affordable and high quality copy-paste code snippets for your Shopify theme. ",l.a.createElement("br",null)," No coding knowledge required.")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-12 shop-filter"},l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",null,l.a.createElement(m.a,{data:a,updateData:p})),a&&l.a.createElement(s.a,{data:a,dataKey:"title",updateData:p,isSearching:f,setIsSearching:g}))),l.a.createElement("div",{className:"col-12 col-lg-12"},l.a.createElement("div",{className:"portfolio-row row"},d&&d.map((function(e){return Object(i.a)(e)})))))))}},A7nJ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("FsuG"),o=a("rY4l"),c=a("6+GL"),r=a("JwsL"),s=(a("7iBi"),a("EYWl"));a("lULc"),a("Wbzz"),a("H7U6");var m=function(e){return l.a.createElement("section",{className:"License"},l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"License-title"},"EZFY Plugins - License and Terms of Use"),l.a.createElement("div",{className:"License-text"},l.a.createElement("p",null,"EZFY plugins come with a simple unlimited use license, which means they can be used an unlimited amount of times per Shopify domain."),l.a.createElement("p",null,"You are given permission to use any EZFY plugin on both personal and commercial Shopify projects. Some common guidelines and limitations apply within this license and ",l.a.createElement("b",null,"you may not:")),l.a.createElement("ol",null,l.a.createElement("li",null," ","1. Sell or redistribute any EZFY plugins as a service or as a product;"," "),l.a.createElement("li",null,"2. Claim ownership of any EZFY plugins;"),l.a.createElement("li",null,"3. Copy and offer any EZFY plugins on a similar service;"),l.a.createElement("li",null,"4. Modify an EZFY plugin and resell it;"),l.a.createElement("li",null,"5. Use the same EZFY plugin on multiple Shopify websites.",l.a.createElement("br",null),l.a.createElement("br",null),"For example, if you have 3 different websites with different domains, you'll need to purchase 3 copies of the EZFY plugin you wish to re-utilize.")),l.a.createElement("p",null,"In addition to the above:"),l.a.createElement("ol",null,l.a.createElement("li",null,"1. Additional customizations to any EZFY plugin have a minimum fee of $35 USD. This amount is subjective to the quantity and complexity of the customizations requested.",l.a.createElement("br",null),l.a.createElement("br",null),"Upon an update, if the customizations have to be redone, the same fee ought to be charged."),l.a.createElement("li",null,"2. All of our plugins ship with the Javascript code obfuscated.")),l.a.createElement("p",null,l.a.createElement("b",null,"Copyright disclaimer:")," EZFY plugins are developed exclusively by and the copyright work of ezfycode.com. You must follow this license and its guidelines."))))},u=function(e){return Object(n.useEffect)((function(){setTimeout(window.ezfy.start,50)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:"EZFY Plugins - License"}),l.a.createElement(o.a,{page:"shop",darkMode:!0}),l.a.createElement(i.a,null),l.a.createElement(m,null),l.a.createElement(c.a,null),l.a.createElement(r.a,null))};t.default=function(e){return l.a.createElement(u,null)}},EYWl:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),l=a.n(n),i=a("qhky"),o=a("NU3z"),c=a.n(o),r=function(e){var t=e.title,a=e.image,n=e.description,o=e.url,r=e.article,s={title:t||c.a.siteTitle,description:n||c.a.siteDescription,image:a||c.a.siteImage,url:o||""};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Helmet,{title:s.title},l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{name:"description",content:s.description}),l.a.createElement("meta",{name:"image",content:s.image}),s.url&&l.a.createElement("meta",{property:"og:url",content:s.url}),r?l.a.createElement("meta",{property:"og:type",content:"article"}):l.a.createElement("meta",{property:"og:type",content:"website"}),s.title&&l.a.createElement("meta",{property:"og:title",content:s.title}),s.description&&l.a.createElement("meta",{property:"og:description",content:s.description}),s.image&&l.a.createElement("meta",{property:"og:image",content:s.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.title&&l.a.createElement("meta",{name:"twitter:title",content:s.title}),s.description&&l.a.createElement("meta",{name:"twitter:description",content:s.description}),s.image&&l.a.createElement("meta",{name:"twitter:image",content:s.image})))}},NU3z:function(e,t){e.exports={siteTitle:"EZFY | Shopify Partner Services",siteDescription:"Globally recognised Shopify Partner, creating beautiful online experiences and results-driven coding solutions.",siteTitleShort:"EZFY | Shopify Partner",siteImage:"https://www.ezfy.club/wp-content/uploads/2020/11/ezfy-logo-original.png",googleAnalyticsID:"UA-112401482-2",siteUrl:"https://ezfycode.com"}},R5LG:function(e,t,a){},URzR:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=(a("R5LG"),a("76ZC")),o=a.n(i),c=a("+n12"),r=(a("v8IA"),a("Wbzz"));t.a=function(e){var t="item"in e?e.item:e,a=t.title,n=t.price,i=(t.description,t.miniDescription),s=t.thumbnail,m=(t.url,t.slug),u="home"===e.page?"/shop/"+m:m;return l.a.createElement("article",{key:JSON.stringify(e),className:"product ProductItem col-12 col-md-6 col-lg-4      portfolio-item services-item "+("home"===e.page?"ProductItem--homepage":"")},l.a.createElement("div",{className:"single-portfolio service-single res-margin"},l.a.createElement(r.Link,{className:"ProductItem-image portfolio-thumb blog-thumb",to:u},/\.mp4/gim.test(s)?l.a.createElement("video",{controls:!0},l.a.createElement("source",{src:s})):l.a.createElement("figure",{className:"aspect-ratio custom-overlay "},l.a.createElement("img",{className:"lazyload",src:"","data-src":s,alt:a}))),l.a.createElement("div",{className:"ProductItem-content   portfolio-content services-content blog-content p-4"},l.a.createElement("div",{className:"services-price ProductItem-price"},l.a.createElement("h3",{className:"ProductItem-title blog-title services-price-title my-3"},l.a.createElement(r.Link,{to:u,"data-options":JSON.stringify({buttons:["close"],gutter:15,loop:!0})},l.a.createElement("span",null,o()(a)))),l.a.createElement("h3",{className:"services-price-small ProductItem-price-small color-primary"},/free/gim.test(n)||l.a.createElement("small",{className:"fw-7"},"$"),n)),l.a.createElement("div",{className:"ProductItem-description "},l.a.createElement(l.a.Fragment,null,o()(Object(c.h)(i,{"\n":" ","<br>":""}))))),l.a.createElement("div",{className:"ProductItem-action"},l.a.createElement(r.Link,{to:u,className:"ProductItem-action-button btn mt-4 buy-now-button"},"View Details"))))}},kvYz:function(e,t,a){},lULc:function(e,t,a){},v8IA:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0;var l=n(a("KHAo"));t.ModalRoutingContext=l.default;var i=n(a("+vFG"));t.Link=i.default}}]);
//# sourceMappingURL=component---src-pages-license-js-3f53119a4b6dcaf258b5.js.map