(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7B5j":function(e,a,t){e.exports=t.p+"static/ezfy-office-15b81b8d8e654a997f9b0ed4df0e91af.jpg"},C56G:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=(t("Iykn"),t("7B5j")),r=t.n(c),s=t("+n12"),o=t("76ZC"),i=t.n(o),m=t("H7U6"),u=t("Wbzz");a.a=function(e){var a=e.post,t=e.title,l=a?Object(s.c)(a.featured_image_src):r.a,c=a?i()(a.title.rendered):"Ezfy Blog",o="url("+l+") no-repeat scroll center center / "+(a?"contain":"cover");return n.a.createElement("section",{className:"section blog-breadcrumb breadcrumb-area bg-overlay d-flex align-items-center",style:{background:o}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"breadcrumb-content d-flex flex-column align-items-center text-center"},n.a.createElement("h3",{className:"text-white blog-breadcrumb-title"},t||c),n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(u.Link,{to:m.a.home},"Home")),a&&n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(u.Link,{to:m.a.blog},"Blog"))))))))}},FsuG:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l);t("cMor");a.a=function(){return n.a.createElement("div",{id:"scrollUp",title:"Scroll To Top",style:{display:"none"}},n.a.createElement("i",{className:"fas fa-arrow-up"}))}},Iykn:function(e,a,t){},Vfxr:function(e,a,t){},cMor:function(e,a,t){},opwX:function(e,a,t){"use strict";var l=t("KQm4"),n=t("q1tI"),c=t.n(n),r=(t("Vfxr"),t("76ZC")),s=t.n(r),o=t("Wbzz"),i=t("TZi5"),m=t("H7U6"),u=function(e){var a=e.data,t=a.slug,l=a.featured_image_src,n=a.excerpt,r=a.title,i=n;r=s()(r);var m="/blog/"+t,u=e.data.image_alt;return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 blog-item"},c.a.createElement("article",{className:"single-blog res-margin"},c.a.createElement("figure",{className:"blog-thumb"},c.a.createElement(o.Link,{className:"linked",to:m},c.a.createElement("img",{className:"lazyload",loading:"lazy","data-src":l,alt:u&&u.length>=1?u:r}))),c.a.createElement("div",{className:"blog-content p-4"},c.a.createElement("ul",{className:"meta-info d-flex justify-content-between"},c.a.createElement("li",null,"By ",c.a.createElement(o.Link,{to:m},"Diego Fortes"))),c.a.createElement("h3",{className:"blog-title my-3"},c.a.createElement(o.Link,{to:m},r)),c.a.createElement("div",null,s()(i)),c.a.createElement(o.Link,{to:m,className:"blog-btn mt-3"},"Read More"))))};a.a=function(e){var a=e.postsPerPage,t=e.totalPosts,r=Object(o.useStaticQuery)("3278524802").allWordpressPost.nodes.sort((function(e,a){return new Date(a.date)-new Date(e.date)})),s=Object(i.c)("page",i.a),f=s[0],E=s[1],d=Object(n.useState)(null),g=d[0],b=d[1],p=Math.ceil(r.length/a),N=function(){return b(r.slice((f-1)*a,f*a))};Object(n.useEffect)((function(){return t?b(r.slice(0,t)):(!f&&/blog/.test(window.location.href)&&E(1),a?N():b(r))}),[]),Object(n.useEffect)((function(){return t?b(r.slice(0,t)):N()}),[f]),Object(n.useEffect)((function(){g&&setTimeout((function(){window.ezfy&&window.ezfy.init()}),50)}),[g]);return c.a.createElement("section",{id:"blogShowcase",className:"section blog-area blog-showcase ptb_50"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-7"},c.a.createElement("div",{className:"section-heading text-center"},c.a.createElement("h2",{className:"text-capitalize"},"Blog"),c.a.createElement("p",{className:"d-sm-block mt-4"},"Check our latest tips, tricks, articles and insights for the Shopify realm.")))),c.a.createElement("div",{className:"row"},g?Object(l.a)(g).map((function(e,a){return c.a.createElement(u,{key:a,data:e})})):"Retrieving blog posts, please wait..."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},t&&c.a.createElement(o.Link,{className:"btn",to:m.a.blog},"See all blogs"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"pagination justify-content-center"},f>1&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-prev"},c.a.createElement("a",{href:"#",onClick:function(){f>1&&E(f-1)},"aria-label":"Previous"},c.a.createElement("i",{className:"fas fa-arrow-left"}),c.a.createElement("span",null," Previous Page"))),!t&&c.a.createElement("li",null,c.a.createElement("p",null,f," / ",p)),f<p&&c.a.createElement("li",{className:"pagination-arrow pagination-arrow-next"},c.a.createElement("a",{href:"#",onClick:function(){f<p&&E(f+1)},"aria-label":"Next"},c.a.createElement("span",null,"Next Page"),c.a.createElement("i",{className:"fas fa-arrow-right"}))))))))}},vx99:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("FsuG"),r=t("rY4l"),s=t("6+GL"),o=t("JwsL"),i=t("C56G"),m=t("qhky"),u=t("opwX"),f=function(e){return Object(l.useEffect)((function(){setTimeout(window.ezfy.start,50)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"EZFY Blogs")),n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null),n.a.createElement(r.a,{page:"blog"}),n.a.createElement(i.a,null),n.a.createElement(u.a,{postsPerPage:9}),n.a.createElement(s.a,null),n.a.createElement(o.a,{page:"blog"})))};a.default=function(e){return n.a.createElement(f,{className:"blog-page"})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0b5d1c644c4452035c5a.js.map