(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7B5j":function(e,t,a){e.exports=a.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=(a("Iykn"),a("7B5j")),r=a.n(c),o=a("+n12"),s=a("76ZC"),i=a.n(s),m=a("H7U6"),u=a("Wbzz");t.a=function(e){var t=e.post,a=e.title,n=t?Object(o.h)(t.featured_image_src):r.a,c=t?i()(t.title.rendered):"Ezfy Blog",s="url("+n+") no-repeat scroll center center / "+(t?"contain":"cover");return l.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:s}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},l.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},a||c),l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.home},"Home")),t&&l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.blog},"Blog"))))))))}},Iykn:function(e,t,a){},Vfxr:function(e,t,a){},opwX:function(e,t,a){"use strict";var n=a("KQm4"),l=a("q1tI"),c=a.n(l),r=(a("Vfxr"),a("76ZC")),o=a.n(r),s=a("Wbzz"),i=a("TZi5"),m=a("H7U6"),u=a("II4a"),g=a("pOn1"),d=(a("+n12"),a("+x2M")),f=function(e){var t=e.data,a=t.slug,n=t.featured_image_src,l=t.excerpt,r=t.title,i=t.tag_names,m=t.content,u=l;r=o()(r);var g="/blog/"+a,f=e.data.image_alt,b=i.map((function(e){return e.toLowerCase()})).join(";"),E=d(m).text;return c.a.createElement("div",{"data-blog-tags":b,className:"col-12 col-md-6 col-lg-4 blog-item"},c.a.createElement("article",{className:"single-blog res-margin"},c.a.createElement(s.Link,{className:"linked",to:g},c.a.createElement("figure",{className:"aspect-ratio blog-thumb"},c.a.createElement("img",{className:"lazyload","data-src":n,alt:f&&f.length>=1?f:r}))),c.a.createElement("div",{className:"blog-content p-4"},c.a.createElement("ul",{className:"meta-info d-flex justify-content-between blog-content-info"},c.a.createElement("li",{className:"d-inline-block p-2 blog-content-info--time"},c.a.createElement("svg",{className:"blog-content-info-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},c.a.createElement("g",null,c.a.createElement("circle",{cx:7,cy:7,r:"6.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}),c.a.createElement("polyline",{points:"7 4.5 7 7 9.54 9.96",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round"}}))),c.a.createElement("span",{className:"blog-content-info-length"},E))),c.a.createElement("h3",{className:"blog-title my-3"},c.a.createElement(s.Link,{to:g},r)),c.a.createElement("div",null,o()(u)),c.a.createElement(s.Link,{to:g,className:"blog-btn mt-3"},"Read More"))))};t.a=function(e){var t=e.postsPerPage,a=(e.totalPosts,e.isHomePage),r=e.page,o=Object(s.useStaticQuery)("3356652627").allWordpressPost.nodes.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),d=function(){return"blog"===r},b=Object(l.useState)(!1),E=b[0],p=b[1],w=Object(i.c)("page",i.a),N=w[0],v=(w[1],Object(l.useState)(null)),y=v[0],h=v[1];Math.ceil(o.length/t);return Object(l.useEffect)((function(){if(a)return h(o.slice(0,3));h(o)}),[o]),Object(l.useEffect)((function(){}),[N]),Object(l.useEffect)((function(){y&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[y]),Object(l.useEffect)((function(){if(!E)return h(a?o.slice(0,3):o);setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[E]),c.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50 bg-gray"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},c.a.createElement("div",{className:"section-heading text-center"},c.a.createElement("h2",{className:"text-capitalize"},"Blog"),c.a.createElement("p",{className:"d-sm-block mt-4"},"Check our latest tips, tricks, articles and insights for the Shopify realm.")))),d()&&c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{data:o,updateData:h,tagKeyName:"tag_names"}),c.a.createElement(u.a,{type:"blog",data:o,dataKey:"title",updateData:h,isSearching:E,setIsSearching:p})),c.a.createElement("div",{className:"row row--first"},y?Object(n.a)(y).map((function(e,t){return c.a.createElement(f,{isSearching:E,key:t,data:e})})):"Retrieving blog posts, please wait..."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},a&&c.a.createElement(s.Link,{className:"btn",to:m.a.blog},"See all blogs"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"}))))}},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("FsuG"),r=a("rY4l"),o=a("6+GL"),s=a("JwsL"),i=a("C56G"),m=a("qhky"),u=a("opwX"),g=function(e){return Object(n.useEffect)((function(){setTimeout(window.ezfy.start,50),setTimeout(window.ezfy.removeLoader,50)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"EZFY Blogs")),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(r.a,{page:"blog"}),l.a.createElement(i.a,null),l.a.createElement(u.a,{page:"blog",postsPerPage:9}),l.a.createElement(o.a,null),l.a.createElement(s.a,{page:"blog"})))};t.default=function(e){return l.a.createElement(g,{data:e,className:"blog-page"})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-abc339da1e34dc46a38a.js.map