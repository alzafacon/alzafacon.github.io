"use strict";(self.webpackChunkfidelcoria=self.webpackChunkfidelcoria||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},901:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(3117),o=(n(7294),n(3905));const a={},i="Toolbox of Software Developer Tricks, etc.",l={type:"mdx",permalink:"/toolbox",source:"@site/src/pages/toolbox.md",title:"Toolbox of Software Developer Tricks, etc.",description:"Useful little things are easy to lose",frontMatter:{}},s=[{value:"GitLab: Clone all repos from a group",id:"gitlab-clone-all-repos-from-a-group",level:2},{value:"Docker: &quot;bash&quot; into a docker container",id:"docker-bash-into-a-docker-container",level:2},{value:"GitLab CI: Split long commands... there&#39;s a bug",id:"gitlab-ci-split-long-commands-theres-a-bug",level:2},{value:"JavaScript thread sleep",id:"javascript-thread-sleep",level:2},{value:"Ruby Gems: execute specific version from several installed",id:"ruby-gems-execute-specific-version-from-several-installed",level:2},{value:"Node: get package.json version",id:"node-get-packagejson-version",level:2},{value:"Git: Step through commits on a branch",id:"git-step-through-commits-on-a-branch",level:2},{value:"Git SSH for multiple remote servers",id:"git-ssh-for-multiple-remote-servers",level:2},{value:"macOS: Always show hidden files",id:"macos-always-show-hidden-files",level:2},{value:"Git debug ignore and excludes",id:"git-debug-ignore-and-excludes",level:2},{value:"K8S: How to print Opaque Secrets",id:"k8s-how-to-print-opaque-secrets",level:2},{value:"GitHub: Find repos you own in an Organization",id:"github-find-repos-you-own-in-an-organization",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toolbox-of-software-developer-tricks-etc"},"Toolbox of Software Developer Tricks, etc."),(0,o.kt)("p",null,"Useful little things are easy to lose"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"gitlab-clone-all-repos-from-a-group"},"GitLab: Clone all repos from a group"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"glab")," cli tool first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GITLAB_HOST=gitlab.example.com glab repo clone --group MyGroup --archived=false --preserve-namespace --paginate\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"docker-bash-into-a-docker-container"},'Docker: "bash" into a docker container'),(0,o.kt)("p",null,"I often need to inspect docker images.  The following is the command to do this and a break down of the options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm IMAGE_NAME /bin/bash\n")),(0,o.kt)("p",null,"-i, --interactive Keep STDIN open even if not attached\n-t, --tty Allocate a pseudo-TTY\n--rm Automatically remove the container when it exits "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"gitlab-ci-split-long-commands-theres-a-bug"},"GitLab CI: Split long commands... there's a bug"),(0,o.kt)("p",null,"At time of writing (29 Nov 2022) GitLab CI has an embarrassing bug. Certain script failures are not reported. Failures in script files are also not reported unless it's the last command in the script."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If multiple commands are combined into one command string, only the last command\u2019s failure or success is reported. Failures from earlier commands are ignored due to a bug. To work around this, run each command as a separate script item, or add an exit 1 command to each command string."),(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"source: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/yaml/script.html#split-long-commands"},"https://docs.gitlab.com/ee/ci/yaml/script.html#split-long-commands")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"javascript-thread-sleep"},"JavaScript thread sleep"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"async function sleep(ms) {\n  await new Promise(resolve =>\n    setTimeout(resolve, ms)\n  )\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"ruby-gems-execute-specific-version-from-several-installed"},"Ruby Gems: execute specific version from several installed"),(0,o.kt)("p",null,"Multiple versions of a Ruby Gem can be installed for use from the command line. For example to see which versions of bundler you have "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"gem list bundler\n")),(0,o.kt)("p",null,"To use the version you want put the version number between underscores right after the gem command line name (note this may be different than the gem name)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bundle _2.3.4_ install\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"node-get-packagejson-version"},"Node: get package.json version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ node -p \"require('./package.json').version\"\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"git-step-through-commits-on-a-branch"},"Git: Step through commits on a branch"),(0,o.kt)("p",null,"Walk through commits on a branch by jumping back a number of commits from the branch head."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout <branch-name>~<number>\ngit checkout spam_and_eggs~5\ngit checkout spam_and_eggs~6\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"git-ssh-for-multiple-remote-servers"},"Git SSH for multiple remote servers"),(0,o.kt)("p",null,"~/.ssh/config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Host github.com\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/personal_github\n\nHost github.company.com\n  HostName github.company.com\n  User git\n  IdentityFile ~/.ssh/work_github\n")),(0,o.kt)("p",null,"SOURCE: ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/"},"https://www.freecodecamp.org/news/manage-multiple-github-accounts-the-ssh-way-2dadc30ccaca/")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"macos-always-show-hidden-files"},"macOS: Always show hidden files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"defaults write com.apple.finder AppleShowAllFiles -bool true\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"git-debug-ignore-and-excludes"},"Git debug ignore and excludes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git check-ignore -v <FILE_NAME>\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"k8s-how-to-print-opaque-secrets"},"K8S: How to print Opaque Secrets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl get secret <SECRET_NAME> -o jsonpath="{.data.<DATA>}" | base64 --decode\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"github-find-repos-you-own-in-an-organization"},"GitHub: Find repos you own in an Organization"),(0,o.kt)("p",null,"It is impossible on the GitHub website to see a list of repos in an Organization that you own."),(0,o.kt)("p",null,"Here is a GraphQL query (with query variables) that gets you pretty close. You still have to manually filter repos forked from an Organization repo. The ",(0,o.kt)("inlineCode",{parentName:"p"},"login")," values in the response can help select the org you care about. You can run the query on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/graphql/overview/explorer"},"https://docs.github.com/en/graphql/overview/explorer"),". Don't forget to sign in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"query pagination($first: Int!, $after: String = null) {\n    viewer {\n        repositories(first: $first, after: $after, affiliations: [ORGANIZATION_MEMBER]) {\n            totalCount\n            nodes {\n                name, url\n                owner { login }\n            }\n            pageInfo {\n                startCursor, endCursor\n                hasPreviousPage, hasNextPage\n            }\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Here is the REST api version:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl \\\n  -H "Accept: application/vnd.github.v3+json" \\\n  -u "$USERNAME:$PERSONAL_ACCESS_TOKEN" \\\n  https://api.github.com/user/repos?affiliation=organization_member&per_page=100&page=1\n')),(0,o.kt)("p",null,"SOURCE: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user"},"https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user")))}p.isMDXComponent=!0}}]);