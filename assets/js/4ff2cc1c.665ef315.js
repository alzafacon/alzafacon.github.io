"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const o={authors:"alzafacon"},i="Custom Apex Domain for GitHub Pages",l={permalink:"/blog/2021/12/06/GitHub_Pages",editUrl:"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-06-GitHub_Pages.md",source:"@site/blog/2021-12-06-GitHub_Pages.md",title:"Custom Apex Domain for GitHub Pages",description:"I'll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.",date:"2021-12-06T00:00:00.000Z",formattedDate:"December 6, 2021",tags:[],readingTime:1.815,hasTruncateMarker:!0,authors:[{name:"Fidel Coria",title:"Software Engineer",url:"https://fidelcoria.com",imageURL:"https://github.com/alzafacon.png",key:"alzafacon"}],frontMatter:{authors:"alzafacon"},prevItem:{title:"Useless Machine with LEGO Technic",permalink:"/blog/2021/12/16/Lego_Useless_Machine"},nextItem:{title:"DigiLog: Digital Zoom for a Single Hand Analog Timepiece",permalink:"/blog/2021/12/05/DigiLog"}},p={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"The devil is in the details",id:"the-devil-is-in-the-details",level:2},{value:"Extra DNS setup",id:"extra-dns-setup",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I'll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from ",(0,n.kt)("a",{parentName:"p",href:"http://www.fidelcoria.com"},"www.fidelcoria.com")," to fidelcoria.com."),(0,n.kt)("p",null,"If you're new to GitHub Pages visit ",(0,n.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"pages.github.com")," to learn the basics."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Here are the DNS records. The host values for the DNS records were the tricky part to figure out. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ALIAS\nHost: @\nTarget: alzafacon.github.io.\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"CNAME\nHost: www\nTarget: alzafacon.github.io.\n")),(0,n.kt)("h2",{id:"the-devil-is-in-the-details"},"The devil is in the details"),(0,n.kt)("p",null,"I find the official documentation to be unclear or confusing in some parts, but I don't blame them. The internet is complicated and the GitHub writers are trying to make the docs helpful even for beginners."),(0,n.kt)("p",null,"The long and short of it is that the steps (for apex domain with https and www) are in the docs ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain"},"here"),". Unfortunately the DNS instructions are confusing."),(0,n.kt)("p",null,"Here are the steps I had to follow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Enter your desired custom domain in the repo settings page (",(0,n.kt)("strong",{parentName:"p"},"before")," creating any DNS entries)"),(0,n.kt)("p",{parentName:"li"}," I used fidelcoria.com (without the leading ",(0,n.kt)("inlineCode",{parentName:"p"},"www."),")"),(0,n.kt)("p",{parentName:"li"}," Doing this will configure a CNAME file on your GitHub Pages branch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create an ALIAS record via your DNS provider"),(0,n.kt)("p",{parentName:"li"},'The docs say "',(0,n.kt)("inlineCode",{parentName:"p"},"To create an ALIAS or ANAME record, point your apex domain to the default domain for your site"),'".'),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"apex domain")," did not work. Instead I had to use ",(0,n.kt)("inlineCode",{parentName:"p"},"@"),', which is used to represent the "bare domain" in DNS records.'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"ALIAS\nHost: @\nTarget: alzafacon.github.io.\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a CNAME record via your DNS provider"),(0,n.kt)("p",{parentName:"li"},'The docs say "',(0,n.kt)("inlineCode",{parentName:"p"},"Navigate to your DNS provider and create a CNAME record that points www.example.com to the default domain for your site"),'"'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"www.fidelcoria.com")," did not work. Instead I had to use ",(0,n.kt)("inlineCode",{parentName:"p"},"www"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"CNAME\nHost: www\nTarget: alzafacon.github.io.\n")))),(0,n.kt)("p",null,"DNS changes can take up to 24 hours to propagate. This makes it hard to tell if something is wrong or just needs more time."),(0,n.kt)("p",null,"I learned the best approach for me was to get informed, decide what I want, make a plan, try it out, observe patiently, then iterate."),(0,n.kt)("h2",{id:"extra-dns-setup"},"Extra DNS setup"),(0,n.kt)("p",null,"I also setup alzafacon.com to redirect to fidelcoria.com"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"URL Redirect\nHost: @\nDestination URL: https://fidelcoria.com\nUnmasked\n")))}u.isMDXComponent=!0}}]);