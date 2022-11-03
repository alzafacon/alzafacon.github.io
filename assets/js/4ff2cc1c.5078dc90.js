"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[357],{3817:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return p}});var i=a(3117),o=(a(7294),a(3905));const n={},r="Custom Apex Domain for GitHub Pages",l={permalink:"/blog/2021/12/06/GitHub_Pages",editUrl:"https://github.com/alzafacon/alzafacon.github.io/edit/main/website/blog/blog/2021-12-06-GitHub_Pages.md",source:"@site/blog/2021-12-06-GitHub_Pages.md",title:"Custom Apex Domain for GitHub Pages",description:"I'll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from www.fidelcoria.com to fidelcoria.com.",date:"2021-12-06T00:00:00.000Z",formattedDate:"December 6, 2021",tags:[],readingTime:1.815,hasTruncateMarker:!0,authors:[],frontMatter:{},prevItem:{title:"Useless Machine with LEGO Technic",permalink:"/blog/2021/12/16/Lego_Useless_Machine"},nextItem:{title:"DigiLog: Digital Zoom for a Single Hand Analog Timepiece",permalink:"/blog/2021/12/05/DigiLog"}},s={authorsImageUrls:[]},p=[{value:"TL;DR",id:"tldr",level:2},{value:"The devil is in the details",id:"the-devil-is-in-the-details",level:2},{value:"Extra DNS setup",id:"extra-dns-setup",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'll explain how I setup the DNS records for an apex domain (fidelcoria.com) with a redirect from ",(0,o.kt)("a",{parentName:"p",href:"http://www.fidelcoria.com"},"www.fidelcoria.com")," to fidelcoria.com."),(0,o.kt)("p",null,"If you're new to GitHub Pages visit ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"pages.github.com")," to learn the basics."),(0,o.kt)("h2",{id:"tldr"},"TL;DR"),(0,o.kt)("p",null,"Here are the DNS records. The host values for the DNS records were the tricky part to figure out. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALIAS\nHost: @\nTarget: alzafacon.github.io.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CNAME\nHost: www\nTarget: alzafacon.github.io.\n")),(0,o.kt)("h2",{id:"the-devil-is-in-the-details"},"The devil is in the details"),(0,o.kt)("p",null,"I find the official documentation to be unclear or confusing in some parts, but I don't blame them. The internet is complicated and the GitHub writers are trying to make the docs helpful even for beginners."),(0,o.kt)("p",null,"The long and short of it is that the steps (for apex domain with https and www) are in the docs ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain"},"here"),". Unfortunately the DNS instructions are confusing."),(0,o.kt)("p",null,"Here are the steps I had to follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter your desired custom domain in the repo settings page (",(0,o.kt)("strong",{parentName:"p"},"before")," creating any DNS entries)"),(0,o.kt)("p",{parentName:"li"}," I used fidelcoria.com (without the leading ",(0,o.kt)("inlineCode",{parentName:"p"},"www."),")"),(0,o.kt)("p",{parentName:"li"}," Doing this will configure a CNAME file on your GitHub Pages branch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create an ALIAS record via your DNS provider"),(0,o.kt)("p",{parentName:"li"},'The docs say "',(0,o.kt)("inlineCode",{parentName:"p"},"To create an ALIAS or ANAME record, point your apex domain to the default domain for your site"),'".'),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"apex domain")," did not work. Instead I had to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),', which is used to represent the "bare domain" in DNS records.'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ALIAS\nHost: @\nTarget: alzafacon.github.io.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a CNAME record via your DNS provider"),(0,o.kt)("p",{parentName:"li"},'The docs say "',(0,o.kt)("inlineCode",{parentName:"p"},"Navigate to your DNS provider and create a CNAME record that points www.example.com to the default domain for your site"),'"'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"www.fidelcoria.com")," did not work. Instead I had to use ",(0,o.kt)("inlineCode",{parentName:"p"},"www"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"CNAME\nHost: www\nTarget: alzafacon.github.io.\n")))),(0,o.kt)("p",null,"DNS changes can take up to 24 hours to propagate. This makes it hard to tell if something is wrong or just needs more time."),(0,o.kt)("p",null,"I learned the best approach for me was to get informed, decide what I want, make a plan, try it out, observe patiently, then iterate."),(0,o.kt)("h2",{id:"extra-dns-setup"},"Extra DNS setup"),(0,o.kt)("p",null,"I also setup alzafacon.com to redirect to fidelcoria.com"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"URL Redirect\nHost: @\nDestination URL: https://fidelcoria.com\nUnmasked\n")))}u.isMDXComponent=!0}}]);