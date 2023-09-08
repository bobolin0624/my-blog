"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Project - Expense Tracker",date:new Date("2021-08-08T10:18:33.000Z"),categories:"Project",tags:["Node.js","Express.js","MongoDB"],thumbnailImagePosition:"left",thumbnailImage:"https://imgur.com/uvV0FF0.png",sidebar_position:1},s="Project - simple expense tracker",i={unversionedId:"NodeJS/project-expense-tracker",id:"NodeJS/project-expense-tracker",title:"Project - Expense Tracker",description:"Why this project",source:"@site/docs/NodeJS/project-expense-tracker.md",sourceDirName:"NodeJS",slug:"/NodeJS/project-expense-tracker",permalink:"/my-blog/docs/NodeJS/project-expense-tracker",draft:!1,tags:[{label:"Node.js",permalink:"/my-blog/docs/tags/node-js"},{label:"Express.js",permalink:"/my-blog/docs/tags/express-js"},{label:"MongoDB",permalink:"/my-blog/docs/tags/mongo-db"}],version:"current",sidebarPosition:1,frontMatter:{title:"Project - Expense Tracker",date:"2021-08-08T10:18:33.000Z",categories:"Project",tags:["Node.js","Express.js","MongoDB"],thumbnailImagePosition:"left",thumbnailImage:"https://imgur.com/uvV0FF0.png",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Note - \u6dfa\u8ac7 Event Loop",permalink:"/my-blog/docs/NodeJS/note-js-event-loop"}},p={},l=[{value:"Why this project",id:"why-this-project",level:4},{value:"Using",id:"using",level:4},{value:"Challenges and sharing",id:"challenges-and-sharing",level:4}],c={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project---simple-expense-tracker"},"Project - simple expense tracker"),(0,o.kt)("h4",{id:"why-this-project"},"Why this project"),(0,o.kt)("p",null,"\u5728\u5b78\u7fd2\u5f8c\u7aef\u958b\u767c\u7684\u8def\u9014\u4e2d\uff0cCRUD (Create, Read, Update, Delete) \u4ee5\u53ca\u8cc7\u6599\u7684\u8655\u7406\u662f\u5b78\u7fd2\u7684\u5fc5\u7d93\u8def\u7a0b","\uff0c\u70ba\u4e86\u591a\u6b21\u7684\u7522\u51fa\u7df4\u7fd2\uff0c\u9664\u4e86\u4e00\u958b\u59cb\u6700\u5e38\u5165\u9580\u7684 Todo-List \u5916\uff0c\u4e5f\u601d\u8003\u751f\u6d3b\u4e0a\u6700\u5e38\u4f7f\u7528\u589e\u522a\u6539\u67e5\u7684\u61c9\u7528\uff0c\u56e0\u70ba\u81ea\u5df1\u6bcf\u5929\u90fd\u6709\u4f7f\u7528\u8a18\u5e33 app\uff0c\u6240\u4ee5\u4e5f\u56e0\u6b64\u5be6\u4f5c\u4e86\u7c21\u55ae\u7684 Web \u7248\u672c\u3002"),(0,o.kt)("h4",{id:"using"},"Using"),(0,o.kt)("p",null,"\u5f8c\u7aef\uff1aNode.js + Express.js\n\u767b\u5165\u6a5f\u5236\uff1a passport.js\n\u8cc7\u6599\u5eab\uff1aMongoDB + mongoose\n\u524d\u7aef\uff1a express-handlebars / Bootstrap\n\u7248\u672c\uff1aGithub\n\u90e8\u7f72\uff1aheroku"),(0,o.kt)("h4",{id:"challenges-and-sharing"},"Challenges and sharing"),(0,o.kt)("p",null,"Bootstrap \u7684\u6392\u7248\u8207 CRUD \u7684\u57fa\u672c\u529f\u80fd\u64b0\u5beb\u4e0a\uff0c\u56e0\u70ba\u7df4\u7fd2\u8f03\u591a\u6b21\u7684\u95dc\u4fc2\uff0c\u76f8\u5c0d\u662f\u80fd\u638c\u63e1\u7684\u90e8\u5206\uff01"),(0,o.kt)("p",null,"\u4f46\u5728 filter \u5206\u985e\u7684\u8cc7\u6599\u8655\u7406\u4e0a\uff0c\u5fc3\u4e2d\u60f3\u8457\u8981\u8003\u91cf\u82e5\u8cc7\u6599\u91cf\u904e\u591a\u9020\u6210\u7684\u6548\u80fd\u554f\u984c\uff0c\u6240\u4ee5\u5c31\u9078\u64c7 mongoose \u63d0\u4f9b\u7684 aggregate \u7684\u65b9\u6cd5\uff0c\u4f46\u4e00\u958b\u59cb\u4f7f\u7528\u6642\u4e26\u6c92\u6709\u770b\u592a\u591a\u7d30\u7bc0\uff0c\u5f8c\u9762\u8981\u52a0\u4e0a\u5e74/\u6708\u7684\u7be9\u9078\u689d\u4ef6\u512a\u5316\u6642\uff0c\u5c31\u9047\u5230\u4e86\u7121\u6cd5\u540c\u6642\u517c\u9867\u5169\u908a\u689d\u4ef6\u7684\u8a2d\u5b9a\uff0c\u5728\u89c0\u6469\u4e86\u7db2\u8def\u8a31\u591a\u7684\u5be6\u4f5c\u7d93\u9a57\u4ee5\u53ca\u67e5\u627e aggregate \u773e\u591a\u8a9e\u6cd5\u5f8c\uff0c\u624d\u627e\u4e86 $ne \u4f86\u8868\u793a\u82e5\u67d0\u689d\u4ef6\u6c92\u6709\u88ab\u8a2d\u5b9a\u6642\uff0c\u5c31\u627e\u51fa\u5168\u90e8\u8cc7\u6599\u7684\u65b9\u5f0f\uff0c\u6709\u770b\u5230\u8a31\u591a\u5206\u4eab\u7d93\u9a57\u7684\u4eba\u8aaa\uff1a\u7a0b\u5f0f\u6709\u8da3\u7684\u5730\u65b9\u5728\u65bc\u6709\u5f88\u591a\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u9054\u5230\u4e00\u6a23\u7684\u6548\u679c\u6216\u529f\u80fd\u3002\u800c\u7d66\u81ea\u5df1\u7684\u5fc3\u614b\u662f\uff0c\u4e0d\u6c42\u4e00\u4e0b\u5b50\u5c31\u5beb\u51fa\u6700\u4e7e\u6de8\u3001\u4fd0\u843d\u7684\u7a0b\u5f0f\u78bc\uff0c\u4f46\u6c42\u80fd\u4e00\u76f4\u4fdd\u6301\u5b78\u7fd2\u7cbe\u9032\u7684\u71b1\u5ff1\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u500b\u662f seeder \u7684\u5efa\u7acb\uff0c\u56e0\u70ba\u6709\u95dc\u806f\u7684\u8cc7\u6599\u8868\uff0c\u6240\u4ee5\u5fc5\u9808\u5148\u57f7\u884c user \u7684\u5efa\u7acb\uff0c\u63a5\u8457\u518d\u5efa\u7acb\u8cc7\u6599\u5c0d\u61c9\u7d66 user\uff0c\u4f7f\u7528 forEach\u53bb\u8fed\u4ee3 json \u6a94\u6848\uff0c\u5c31\u6703\u767c\u751f\u7a2e\u5b50\u8cc7\u6599\u6c92\u6709\u5efa\u7acb\u5b8c\u5168\u7684\u72c0\u6cc1\uff0c\u56e0\u6b64\u624d\u77e5\u9053\u662f\u975e\u540c\u6b65\u8655\u7406\u7684\u8b70\u984c\uff0c\u7a0b\u5f0f\u5beb\u5230\u8d8a\u5f8c\u9762\u57f7\u884c\u7684 task \u8d8a\u591a\uff0c\u5c31\u958b\u59cb\u9762\u5c0d\u4e86\u9019\u500b\u5927\u9b54\u738b\uff0c\u76ee\u524d\u5c0d\u65bc\u975e\u540c\u6b65\u672c\u8eab\u7684\u6982\u5ff5\u4e0a\u662f\u7406\u89e3\u7684\uff0c\u4f46\u5c0d\u65bc\u5be6\u4f5c\u4e0a\u7684\u7528\u6cd5\u9084\u662f\u9700\u8981\u67e5\u627e\u8a31\u591a\u7db2\u8def\u8cc7\u6599\u4f86\u8ddf\u8457\u7528\uff0c\u9019\u6b21\u9078\u7528\u7684\u662f Promise.all\uff0c\u5728 Promise.all \u4e2d\u5efa\u7acb\u597d\u4e00\u7d44\u9663\u5217\u8cc7\u6599\uff0c\u4f86\u4fdd\u8b49\u9663\u5217\u88e1\u7684\u5167\u5bb9\u5168\u90e8\u57f7\u884c\u5b8c\u7562\u518d\u7d50\u675f seeder\u3002"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 passport.js \u63d0\u4f9b\u8eab\u4efd\u9a57\u8b49\u6a5f\u5236\u7684 middleware \u6642\uff0c\u9ad4\u6703\u5230\u7df4\u7fd2\u4f7f\u7528\u7b2c\u4e09\u65b9\u5957\u4ef6\u4e5f\u662f\u5f88\u91cd\u8981\u7684\u4e8b\uff0c\u53ef\u4ee5\u65b9\u4fbf\u9032\u884c\u6574\u500b\u5168\u5c40\u958b\u767c\u3002\u5f9e\u9700\u6c42\u4f86\u898f\u5283\u9700\u8981\u7684\u529f\u80fd\uff0c\u63a5\u8457\u641c\u5c0b\u5957\u4ef6\uff0c\u95b1\u8b80\u5927\u91cf\u6587\u4ef6\uff0c\u5be6\u4f5c\u51fa\u60f3\u8981\u7684\u529f\u80fd\uff0c\u4e00\u958b\u59cb\u5c0d\u65bc\u5bc6\u9ebb\u7684\u6587\u4ef6\u6703\u5b8c\u5168\u4e0d\u77e5\u9053\u600e\u9ebc\u4e0b\u624b\uff0c\u9047\u5230\u5f88\u591a\u7684\u632b\u6298\uff0c\u6240\u5e78\u73fe\u5728\u7db2\u8def\u8cc7\u6e90\u5f88\u591a\uff0c\u4e0d\u65b7\u89c0\u6469\u3001\u5617\u8a66\uff0c\u6700\u5f8c\u5be6\u4f5c\u51fa\u4f86\u7684\u6210\u679c\u4e5f\u662f\u6703\u5145\u6eff\u4e0d\u5c11\u6210\u5c31\u611f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"expense-tracker \u5c08\u6848\u7684 ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/bobolin0624/expense-tracker"},"GitHub")," \u8207 ",(0,o.kt)("a",{parentName:"strong",href:"https://intense-spire-30373.herokuapp.com/users/login"},"Heroku"))," (heroku \u514d\u8cbb\u7248\u5df2\u7d50\u675f\uff0c\u7db2\u5740\u53ef\u80fd\u7121\u4f5c\u7528)"))}g.isMDXComponent=!0}}]);