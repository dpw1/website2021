(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7B5j":function(e,a,t){e.exports=t.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),c=(t("Iykn"),t("7B5j")),r=t.n(c),s=t("+n12"),o=t("76ZC"),i=t.n(o),m=t("H7U6"),u=t("Wbzz");a.a=function(e){var a=e.post,t=e.title,n=a?Object(s.h)(a.featured_image_src):r.a,c=a?i()(a.title.rendered):"Ezfy Blog",o="url("+n+") no-repeat scroll center center / "+(a?"contain":"cover");return l.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:o}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},l.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},t||c),l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.home},"Home")),a&&l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.blog},"Blog"))))))))}},Iykn:function(e,a,t){},Vfxr:function(e,a,t){},opwX:function(e,a,t){"use strict";var n=t("KQm4"),l=t("q1tI"),c=t.n(l),r=(t("Vfxr"),t("76ZC")),s=t.n(r),o=t("Wbzz"),i=t("TZi5"),m=t("H7U6"),u=t("II4a"),f=t("pOn1"),g=function(e){var a=e.data,t=a.slug,n=a.featured_image_src,l=a.excerpt,r=a.title,i=a.tag_names,m=l;r=s()(r);var u="/blog/"+t,f=e.data.image_alt,g=i.map((function(e){return e.toLowerCase()})).join(";");return c.a.createElement("div",{"data-blog-tags":g,className:"col-12 col-md-6 col-lg-4 blog-item"},c.a.createElement("article",{className:"single-blog res-margin"},c.a.createElement(o.Link,{className:"linked",to:u},c.a.createElement("figure",{className:"aspect-ratio blog-thumb"},c.a.createElement("img",{className:"lazyload",loading:"lazy","data-src":n,alt:f&&f.length>=1?f:r}))),c.a.createElement("div",{className:"blog-content p-4"},c.a.createElement("ul",{className:"meta-info d-flex justify-content-between"},c.a.createElement("li",null,"By ",c.a.createElement(o.Link,{to:u},"Diego Fortes"))),c.a.createElement("h3",{className:"blog-title my-3"},c.a.createElement(o.Link,{to:u},r)),c.a.createElement("div",null,s()(m)),c.a.createElement(o.Link,{to:u,className:"blog-btn mt-3"},"Read More"))))};a.a=function(e){var a=e.postsPerPage,t=e.totalPosts,r=e.page,s=Object(o.useStaticQuery)("2486840539").allWordpressPost.nodes.sort((function(e,a){return new Date(a.date)-new Date(e.date)})),E=function(){return"blog"===r},d=Object(l.useState)(!1),b=d[0],p=d[1],w=Object(i.c)("page",i.a),N=w[0],v=w[1],y=Object(l.useState)(null),h=y[0],k=y[1],j=Math.ceil(s.length/a),x=function(){window.document.querySelector(".row--first").scrollIntoView()},z=function(){return k(t?s.slice(0,t):s.slice((N-1)*a,N*a))};Object(l.useEffect)((function(){t?k(s.slice(0,t)):(!N&&E()&&v(1),k(a?s.slice((N-1)*a,N*a):s))}),[]),Object(l.useEffect)((function(){z()}),[N]),Object(l.useEffect)((function(){h&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[h]),Object(l.useEffect)((function(){if(!b)return z();setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[b]);var O=function(){return c.a.createElement("ul",{className:"pagination justify-content-center"},N>1&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-prev"},c.a.createElement("a",{href:"#",onClick:function(){N>1&&v(N-1),x()},"aria-label":"Previous"},c.a.createElement("i",{className:"fas fa-arrow-left "}),c.a.createElement("span",null," Previous Page"))),!t&&c.a.createElement("li",null,c.a.createElement("p",null,N," / ",j)),N<j&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-next"},c.a.createElement("a",{href:"#",onClick:function(){N<j&&v(N+1),x()},"aria-label":"Next"},c.a.createElement("span",null,"Next Page"),c.a.createElement("i",{className:"fas fa-arrow-right"}))))};return c.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50 bg-gray"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},c.a.createElement("div",{className:"section-heading text-center"},c.a.createElement("h2",{className:"text-capitalize"},"Blog"),c.a.createElement("p",{className:"d-sm-block mt-4"},"Check our latest tips, tricks, articles and insights for the Shopify realm.")))),E()&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{data:s,updateData:k,tagKeyName:"tag_names"}),c.a.createElement(u.a,{type:"blog",data:s,dataKey:"title",updateData:k,isSearching:b,setIsSearching:p})),c.a.createElement("div",{className:"row row--first"},h?Object(n.a)(h).map((function(e,a){return c.a.createElement(g,{key:a,data:e})})):"Retrieving blog posts, please wait..."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},t&&c.a.createElement(o.Link,{className:"btn",to:m.a.blog},"See all blogs"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},!b&&h&&h.length>=9&&c.a.createElement(O,null)))))}},vx99:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("FsuG"),r=t("rY4l"),s=t("6+GL"),o=t("JwsL"),i=t("C56G"),m=t("qhky"),u=t("opwX"),f=function(e){return Object(n.useEffect)((function(){setTimeout(window.ezfy.start,50),setTimeout(window.ezfy.removeLoader,50)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"EZFY Blogs")),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(r.a,{page:"blog"}),l.a.createElement(i.a,null),l.a.createElement(u.a,{page:"blog",postsPerPage:9}),l.a.createElement(s.a,null),l.a.createElement(o.a,{page:"blog"})))};a.default=function(e){return l.a.createElement(f,{data:e,className:"blog-page"})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e996bbcf42a8f51c5860.js.map