(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7B5j":function(e,t,a){e.exports=a.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),l=(a("Iykn"),a("7B5j")),r=a.n(l),o=a("+n12"),s=a("76ZC"),i=a.n(s),m=a("H7U6"),u=a("Wbzz");t.a=function(e){var t=e.post,a=e.title,n=t?Object(o.q)(t.featured_image_src):r.a,l=t?i()(t.title.rendered):"Ezfy Blog",s="url("+n+") no-repeat scroll center center / "+(t?"contain":"cover");return c.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:s}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},c.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},a||l),c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(u.Link,{to:m.a.home},"Home")),t&&c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(u.Link,{to:m.a.blog},"Blog"))))))))}},FsuG:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n);a("cMor");t.a=function(){return Object(n.useEffect)((function(){var e=document.querySelector("#scrollUp");window.addEventListener("scroll",(function(){var t=window.scrollY;e&&(t>300?e.classList.add("visible"):e.classList.remove("visible"))})),e&&e.addEventListener("click",(function(e){e.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})}))}),[]),c.a.createElement("div",{id:"scrollUp",title:"Scroll To Top"},c.a.createElement("i",{className:"fas fa-arrow-up"}))}},Iykn:function(e,t,a){},Vfxr:function(e,t,a){},cMor:function(e,t,a){},opwX:function(e,t,a){"use strict";var n=a("o0o1"),c=a.n(n),l=a("KQm4"),r=(a("ls82"),a("HaE+")),o=a("q1tI"),s=a.n(o),i=(a("Vfxr"),a("76ZC")),m=a.n(i),u=a("Wbzz"),f=(a("TZi5"),a("H7U6")),d=a("II4a"),b=(a("pOn1"),a("+n12")),g=a("+x2M"),E=function(e){var t=e.data,a=t.slug,n=t.featured_image_src,c=t.excerpt,l=t.title,r=t.tag_names,o=t.content,i=t.isSearching,f=(t.isTagActive,c);l=m()(l);var d="/blog/"+a,E=e.data.image_alt,p=r.map((function(e){return e.toLowerCase()})).join(";"),v=g(o).text;return s.a.createElement("div",{"data-blog-tags":p,className:"col-12 col-md-6 col-lg-4 blog-item"},s.a.createElement("article",{className:"single-blog res-margin"},s.a.createElement(u.Link,{className:"linked",to:d},s.a.createElement("figure",{className:"aspect-ratio blog-thumb"},s.a.createElement("img",{className:"lazyload",src:i||Object(b.u)()?n:"","data-src":n,alt:E&&E.length>=1?E:l}))),s.a.createElement("div",{className:"blog-content p-4"},s.a.createElement("ul",{className:"meta-info d-flex justify-content-between blog-content-info"},s.a.createElement("li",{className:"d-inline-block p-2 blog-content-info--time"},s.a.createElement("svg",{className:"blog-content-info-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},s.a.createElement("g",null,s.a.createElement("circle",{cx:7,cy:7,r:"6.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}),s.a.createElement("polyline",{points:"7 4.5 7 7 9.54 9.96",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}))),s.a.createElement("span",{className:"blog-content-info-length"},v))),s.a.createElement("h3",{className:"blog-title my-3"},s.a.createElement(u.Link,{to:d},l)),s.a.createElement("div",null,m()(f)),s.a.createElement(u.Link,{to:d,className:"blog-btn mt-3"},"Read More"))))};t.a=function(e){e.postsPerPage,e.totalPosts;var t=e.isHomePage,a=e.page,n=e.post,i=Object(u.useStaticQuery)("3356652627").allWordpressPost.nodes.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),m=function(){return"blog"===a},g=Object(o.useState)(!1),p=g[0],v=g[1],w=Object(o.useState)([]),N=w[0],h=w[1],y=Object(o.useState)([]),j=y[0],k=y[1];return Object(o.useEffect)((function(){if(t)return h(i.slice(0,3));m()&&h(i)}),[i]),Object(o.useEffect)((function(){"blogpost"===a&&h(j.slice(0,6))}),[j]),Object(o.useEffect)((function(){Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=Object(r.a)(c.a.mark((function e(){var t,a,r,o,s,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=i,a=n.tag_names,(o=t.map((function(e){if(e.tag_names.filter((function(e){return a.includes(e)})).length>0)return e})).filter((function(e){return void 0!==e}))).length<6&&(s=t.map((function(e){var t=e.tag_names.filter((function(e){return e.includes("all themes")}));if(t.length>0||t)return e})).filter((function(e){return void 0!==e})),m=Object(b.G)(s).slice(0,6-o.length),o=[].concat(Object(l.a)(o),Object(l.a)(m))),r=Object(b.G)(o).slice(0,6),k(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),"blogpost"===a&&t();case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(o.useEffect)((function(){N&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[N]),Object(o.useEffect)((function(){p&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50),h(t?i.slice(0,3):i)}),[p]),s.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50\n      "+("white"===e.backgroundColor?"":"bg-gray")+"\n      "},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},s.a.createElement("div",{className:"section-heading text-center"},s.a.createElement("h2",{className:"text-capitalize"},e.title?e.title:"Blog"),s.a.createElement("p",{className:"d-sm-block mt-4"},e.subtitle?e.subtitle:"Check our latest tips, tricks, articles and insights for the\n                Shopify realm.")))),m()&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{type:"blog",data:i,dataKey:"title",updateData:h,isSearching:p,setIsSearching:v})),s.a.createElement("div",{className:"row row--first"},N?Object(l.a)(N).map((function(e,t){return s.a.createElement(E,{isSearching:p,key:t,data:e})})):"Retrieving blog posts, please wait..."),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},t&&s.a.createElement(u.Link,{className:"btn",to:f.a.blog},"See all blogs"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"}))))}},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),l=a("FsuG"),r=a("rY4l"),o=a("6+GL"),s=a("JwsL"),i=a("C56G"),m=a("qhky"),u=a("opwX"),f=function(e){return Object(n.useEffect)((function(){setTimeout(window.ezfy.start,50),setTimeout(window.ezfy.removeLoader,50)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("title",null,"EZFY Blogs")),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(r.a,{page:"blog"}),c.a.createElement(i.a,null),c.a.createElement(u.a,{page:"blog",postsPerPage:9}),c.a.createElement(o.a,null),c.a.createElement(s.a,{page:"blog"})))};t.default=function(e){return c.a.createElement(f,{data:e,className:"blog-page"})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-86b37f3be325e05cfcab.js.map