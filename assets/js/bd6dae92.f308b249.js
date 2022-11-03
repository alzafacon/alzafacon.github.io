"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[454],{5787:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=n(3117),r=(n(7294),n(3905));const a={},i="Toolbox of Software Developer Tricks, etc.",s={type:"mdx",permalink:"/toolbox",source:"@site/src/pages/toolbox.md",title:"Toolbox of Software Developer Tricks, etc.",description:"Useful little things are easy to lose",frontMatter:{}},l=[{value:"JavaScript thread sleep",id:"javascript-thread-sleep",level:2},{value:"Ruby Gems: execute specific version from several installed",id:"ruby-gems-execute-specific-version-from-several-installed",level:2},{value:"Node: get package.json version",id:"node-get-packagejson-version",level:2},{value:"Git: Step through commits on a branch",id:"git-step-through-commits-on-a-branch",level:2},{value:"Git SSH for multiple remote servers",id:"git-ssh-for-multiple-remote-servers",level:2},{value:"macOS: Always show hidden files",id:"macos-always-show-hidden-files",level:2},{value:"Git debug ignore and excludes",id:"git-debug-ignore-and-excludes",level:2},{value:"K8S: How to print Opaque Secrets",id:"k8s-how-to-print-opaque-secrets",level:2},{value:"GitHub: Find repos you own in an Organization",id:"github-find-repos-you-own-in-an-organization",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"toolbox-of-software-developer-tricks-etc"},"Toolbox of Software Developer Tricks, etc."),(0,r.kt)("p",null,"Useful little things are easy to lose"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"javascript-thread-sleep"},"JavaScript thread sleep"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async function sleep(ms) {\n  await new Promise(resolve =>\n    setTimeout(resolve, ms)\n  )\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ruby-gems-execute-specific-version-from-several-installed"},"Ruby Gems: execute specific version from several installed"),(0,r.kt)("p",null,"Multiple versions of a Ruby Gem can be installed for use from the command line. For example to see which versions of bundler you have "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gem list bundler\n")),(0,r.kt)("p",null,"To use the version you want put the version number between underscores right after the gem command line name (note this may be different than the gem name)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bundle _2.3.4_ install\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"node-get-packagejson-version"},"Node: get package.json version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ node -p \"require('./package.json').version\"\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"git-step-through-commits-on-a-branch"},"Git: Step through commits on a branch"),(0,r.kt)("p",null,"Walk through commits on a branch by jumping back a number of commits from the branch head."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout <branch-name>~<number>\ngit checkout spam_and_eggs~5\ngit checkout spam_and_eggs~6\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"git-ssh-for-multiple-remote-servers"},"Git SSH for multiple remote servers"),(0,r.kt)("p",null,"~/.ssh/config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Host github.com\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/personal_github\n\nHost github.company.com\n  HostName github.company.com\n  User git\n  IdentityFile ~/.ssh/work_github\n")),(0,r.kt)("p",null,"SOURCE: ",(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/"},"https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"macos-always-show-hidden-files"},"macOS: Always show hidden files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"defaults write com.apple.finder AppleShowAllFiles -bool true\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"git-debug-ignore-and-excludes"},"Git debug ignore and excludes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git check-ignore -v <FILE_NAME>\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"k8s-how-to-print-opaque-secrets"},"K8S: How to print Opaque Secrets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get secret <SECRET_NAME> -o jsonpath="{.data.<DATA>}" | base64 --decode\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"github-find-repos-you-own-in-an-organization"},"GitHub: Find repos you own in an Organization"),(0,r.kt)("p",null,"It is impossible on the GitHub website to see a list of repos in an Organization that you own."),(0,r.kt)("p",null,"Here is a GraphQL query (with query variables) that gets you pretty close. You still have to manually filter repos forked from an Organization repo. The ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," values in the response can help select the org you care about. You can run the query on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/graphql/overview/explorer"},"https://docs.github.com/en/graphql/overview/explorer"),". Don't forget to sign in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"query pagination($first: Int!, $after: String = null) {\n    viewer {\n        repositories(first: $first, after: $after, affiliations: [ORGANIZATION_MEMBER]) {\n            totalCount\n            nodes {\n                name, url\n                owner { login }\n            }\n            pageInfo {\n                startCursor, endCursor\n                hasPreviousPage, hasNextPage\n            }\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Here is the REST api version:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl \\\n  -H "Accept: application/vnd.github.v3+json" \\\n  -u "$USERNAME:$PERSONAL_ACCESS_TOKEN" \\\n  https://api.github.com/user/repos?affiliation=organization_member&per_page=100&page=1\n')),(0,r.kt)("p",null,"SOURCE: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user"},"https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user")))}p.isMDXComponent=!0}}]);