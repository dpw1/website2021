(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7B5j":function(e,t,a){e.exports=a.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),c=(a("Iykn"),a("7B5j")),s=a.n(c),o=a("+n12"),r=a("76ZC"),i=a.n(r),m=a("H7U6"),g=a("Wbzz");t.a=e=>{const{post:t,title:a}=e,l=(t?Object(o.o)(t.featured_image_src):s.a,t?i()(t.title.rendered):"Ezfy Blog");return n.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},n.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},a||l),n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(g.Link,{to:m.a.home},"Home")),t&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(g.Link,{to:m.a.blog},"Blog"))))))))}},FsuG:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l);a("cMor");t.a=function(){return Object(l.useEffect)(()=>{const e=document.querySelector("#scrollUp");window.addEventListener("scroll",(function(){const t=window.scrollY;e&&(t>300?e.classList.add("visible"):e.classList.remove("visible"))})),e&&e.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))},[]),n.a.createElement("div",{id:"scrollUp",title:"Scroll To Top"},n.a.createElement("i",{className:"fas fa-arrow-up"}))}},Iykn:function(e,t,a){},Vfxr:function(e,t,a){},cMor:function(e,t,a){},opwX:function(e,t,a){"use strict";var l=a("KQm4"),n=a("q1tI"),c=a.n(n),s=(a("Vfxr"),a("76ZC")),o=a.n(s),r=a("Wbzz"),i=(a("TZi5"),a("H7U6")),m=a("II4a"),g=(a("pOn1"),a("+n12"));const d=a("+x2M"),b=e=>{let{slug:t,featured_image_src:a,excerpt:l,title:n,tag_names:s,content:i,isSearching:m,isTagActive:b}=e.data,u=l;n=o()(n);let f="/blog/"+t;const E=e.data.image_alt,p=s.map(e=>e.toLowerCase()).join(";"),w=d(i).text;return c.a.createElement("div",{"data-blog-tags":p,className:"col-12 col-md-6 col-lg-4 blog-item"},c.a.createElement("article",{className:"single-blog res-margin"},c.a.createElement(r.Link,{className:"linked",to:f},c.a.createElement("figure",{className:"aspect-ratio blog-thumb"},c.a.createElement("img",{className:"xx lazyload",src:m&&"blogpost"!==e.currentPage||Object(g.s)()?a:"","data-src":a,alt:E&&E.length>=1?E:n}))),c.a.createElement("div",{className:"blog-content p-4"},c.a.createElement("ul",{className:"meta-info d-flex justify-content-between blog-content-info"},c.a.createElement("li",{className:"d-inline-block p-2 blog-content-info--time"},c.a.createElement("svg",{className:"blog-content-info-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},c.a.createElement("g",null,c.a.createElement("circle",{cx:7,cy:7,r:"6.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}),c.a.createElement("polyline",{points:"7 4.5 7 7 9.54 9.96",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}))),c.a.createElement("span",{className:"blog-content-info-length"},w))),c.a.createElement("h3",{className:"blog-title my-3"},c.a.createElement(r.Link,{to:f},n)),c.a.createElement("div",null,o()(u)),c.a.createElement(r.Link,{to:f,className:"blog-btn mt-3"},"Read More"))))};t.a=e=>{let{postsPerPage:t,totalPosts:a,isHomePage:s,page:o,post:d}=e;let{nodes:u}=Object(r.useStaticQuery)("3356652627").allWordpressPost,f=u.sort((e,t)=>new Date(t.date)-new Date(e.date));const E=()=>"blog"===o,{0:p,1:w}=Object(n.useState)(!1),{0:v,1:N}=Object(n.useState)([]),{0:h,1:y}=Object(n.useState)([]);return Object(n.useEffect)(()=>{if(s)return N(f.slice(0,3));E()&&N(f)},[f]),Object(n.useEffect)(()=>{"blogpost"===o&&N(h.slice(0,6))},[h]),Object(n.useEffect)(()=>{(async()=>{"blogpost"===o&&(async()=>{const e=f,t=d.tag_names;let a,n=e.map(e=>{if(e.tag_names.filter(e=>t.includes(e)).length>0)return e}).filter(e=>void 0!==e);if(n.length<6){const t=e.map(e=>{const t=e.tag_names.filter(e=>e.includes("all themes"));if(t.length>0||t)return e}).filter(e=>void 0!==e),a=Object(g.C)(t).slice(0,6-n.length);n=[].concat(Object(l.a)(n),Object(l.a)(a))}a=Object(g.C)(n).slice(0,6),y(a)})()})()},[]),Object(n.useEffect)(()=>{v&&setTimeout(()=>{window.ezfy&&"blogpost"!==o&&window.ezfy.init()},50)},[v]),Object(n.useEffect)(()=>{"blogpost"!==o&&(p&&setTimeout(()=>{window.ezfy&&window.ezfy.init()},50),N(s?f.slice(0,3):f))},[p]),c.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50\n      "+("white"===e.backgroundColor?"":"bg-gray")+"\n      "},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},c.a.createElement("div",{className:"section-heading text-center"},c.a.createElement("h2",{className:"text-capitalize"},e.title?e.title:"Blog"),c.a.createElement("p",{className:"d-sm-block mt-4"},e.subtitle?e.subtitle:"Check our latest tips, tricks, articles and insights for the\n                Shopify realm.")))),E()&&c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{type:"blog",data:f,dataKey:"title",updateData:N,isSearching:p,setIsSearching:w})),c.a.createElement("div",{className:"row row--first"},v?Object(l.a)(v).map((e,t)=>c.a.createElement(b,{isSearching:p,key:t,data:e,currentPage:o})):"Retrieving blog posts, please wait..."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},s&&c.a.createElement(r.Link,{className:"btn",to:i.a.blog},"See all blogs"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"}))))}},vx99:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),c=a("FsuG"),s=a("rY4l"),o=a("6+GL"),r=a("JwsL"),i=a("C56G"),m=a("qhky"),g=a("opwX");var d=e=>(Object(l.useEffect)(()=>{setTimeout(window.ezfy.start,50),setTimeout(window.ezfy.removeLoader,50)},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"EZFY Blogs")),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null),n.a.createElement(s.a,{page:"blog"}),n.a.createElement(i.a,null),n.a.createElement(g.a,{page:"blog",postsPerPage:9}),n.a.createElement(o.a,null),n.a.createElement(r.a,{page:"blog"}))));t.default=e=>n.a.createElement(d,{data:e,className:"blog-page"})}}]);
//# sourceMappingURL=component---src-pages-blog-js-bb436bef59dca399ede6.js.map