(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7B5j":function(e,a,t){e.exports=t.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),c=(t("Iykn"),t("7B5j")),r=t.n(c),s=t("+n12"),o=t("76ZC"),i=t.n(o),m=t("H7U6"),u=t("Wbzz");a.a=function(e){var a=e.post,t=e.title,n=a?Object(s.d)(a.featured_image_src):r.a,c=a?i()(a.title.rendered):"Ezfy Blog",o="url("+n+") no-repeat scroll center center / "+(a?"contain":"cover");return l.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:o}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},l.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},t||c),l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.home},"Home")),a&&l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.Link,{to:m.a.blog},"Blog"))))))))}},Iykn:function(e,a,t){},Vfxr:function(e,a,t){},opwX:function(e,a,t){"use strict";var n=t("KQm4"),l=t("q1tI"),c=t.n(l),r=(t("Vfxr"),t("76ZC")),s=t.n(r),o=t("Wbzz"),i=t("TZi5"),m=t("H7U6"),u=t("II4a"),g=function(e){var a=e.data,t=a.slug,n=a.featured_image_src,l=a.excerpt,r=a.title,i=l;r=s()(r);var m="/blog/"+t,u=e.data.image_alt;return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 blog-item"},c.a.createElement("article",{className:"single-blog res-margin"},c.a.createElement(o.Link,{className:"linked",to:m},c.a.createElement("figure",{className:"aspect-ratio blog-thumb"},c.a.createElement("img",{className:"lazyload",loading:"lazy","data-src":n,alt:u&&u.length>=1?u:r}))),c.a.createElement("div",{className:"blog-content p-4"},c.a.createElement("ul",{className:"meta-info d-flex justify-content-between"},c.a.createElement("li",null,"By ",c.a.createElement(o.Link,{to:m},"Diego Fortes"))),c.a.createElement("h3",{className:"blog-title my-3"},c.a.createElement(o.Link,{to:m},r)),c.a.createElement("div",null,s()(i)),c.a.createElement(o.Link,{to:m,className:"blog-btn mt-3"},"Read More"))))};a.a=function(e){var a=e.postsPerPage,t=e.totalPosts,r=e.page,s=Object(o.useStaticQuery)("2486840539").allWordpressPost.nodes.sort((function(e,a){return new Date(a.date)-new Date(e.date)})),f=function(){return"blog"===r},E=Object(l.useState)(!1),d=E[0],b=E[1],w=Object(i.c)("page",i.a),p=w[0],N=w[1],v=Object(l.useState)(null),h=v[0],y=v[1],k=Math.ceil(s.length/a),j=function(){window.document.querySelector(".row--first").scrollIntoView()},x=function(){return y(t?s.slice(0,t):s.slice((p-1)*a,p*a))};Object(l.useEffect)((function(){t?y(s.slice(0,t)):(!p&&f()&&N(1),y(a?s.slice((p-1)*a,p*a):s))}),[]),Object(l.useEffect)((function(){x()}),[p]),Object(l.useEffect)((function(){h&&(console.log("we are searching",d),console.log("we have x posts  ",h.length),setTimeout((function(){window.ezfy&&window.ezfy.init()}),50))}),[h]),Object(l.useEffect)((function(){return console.log("searching? ",d),d?(console.log("inside is searching"),void setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)):x()}),[d]);var z=function(){return c.a.createElement("ul",{className:"pagination justify-content-center"},p>1&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-prev"},c.a.createElement("a",{href:"#",onClick:function(){p>1&&N(p-1),j()},"aria-label":"Previous"},c.a.createElement("i",{className:"fas fa-arrow-left "}),c.a.createElement("span",null," Previous Page"))),!t&&c.a.createElement("li",null,c.a.createElement("p",null,p," / ",k)),p<k&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-next"},c.a.createElement("a",{href:"#",onClick:function(){p<k&&N(p+1),j()},"aria-label":"Next"},c.a.createElement("span",null,"Next Page"),c.a.createElement("i",{className:"fas fa-arrow-right"}))))};return c.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50 bg-gray"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},c.a.createElement("div",{className:"section-heading text-center"},c.a.createElement("h2",{className:"text-capitalize"},"Blog"),c.a.createElement("p",{className:"d-sm-block mt-4"},"Check our latest tips, tricks, articles and insights for the Shopify realm.")))),f()&&c.a.createElement(u.a,{data:s,dataKey:"title",updateData:y,isSearching:d,setIsSearching:b}),c.a.createElement("div",{className:"row row--first"},h?Object(n.a)(h).map((function(e,a){return c.a.createElement(g,{key:a,data:e})})):"Retrieving blog posts, please wait..."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},t&&c.a.createElement(o.Link,{className:"btn",to:m.a.blog},"See all blogs"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},!d&&c.a.createElement(z,null)))))}},vx99:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("FsuG"),r=t("rY4l"),s=t("6+GL"),o=t("JwsL"),i=t("C56G"),m=t("qhky"),u=t("opwX"),g=function(e){return Object(n.useEffect)((function(){setTimeout(window.ezfy.start,50)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"EZFY Blogs")),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement(r.a,{page:"blog"}),l.a.createElement(i.a,null),l.a.createElement(u.a,{page:"blog",postsPerPage:9}),l.a.createElement(s.a,null),l.a.createElement(o.a,{page:"blog"})))};a.default=function(e){return l.a.createElement(g,{data:e,className:"blog-page"})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-82a679b461e30a7ec9c9.js.map