"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[328],{3961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var s=n(4848),i=n(8453);const r={},l="GSoC-2022",h={permalink:"/EmbeddedChat/pulls/pr-710/docs/blog/EmbeddedChat-2022",source:"@site/blog/EmbeddedChat-2022.md",title:"GSoC-2022",description:"Create a ready-to-go easy to embed mini-chat React component.",date:"2024-12-22T08:56:55.000Z",tags:[],readingTime:3.965,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"Google Summer of Code 2023, RocketChat",permalink:"/EmbeddedChat/pulls/pr-710/docs/blog/EmbeddedChat-2023"}},c={authorsImageUrls:[]},d=[{value:"\u2b50 Project Abstract",id:"-project-abstract",level:2},{value:"\ud83d\udea2 Deliverables",id:"-deliverables",level:2},{value:"\ud83d\udcfa Demo",id:"-demo",level:2},{value:"Sneak Peak",id:"sneak-peak",level:3},{value:"Providing real-time chat functionality using RocketChat node.js SDK",id:"providing-real-time-chat-functionality-using-rocketchat-nodejs-sdk",level:3},{value:"Authentication using RocketChat\u2019s Google SSO",id:"authentication-using-rocketchats-google-sso",level:3},{value:"Adding EmojiOne Emoji Picker to the component to ensure cross-platform functioning of emojis.",id:"adding-emojione-emoji-picker-to-the-component-to-ensure-cross-platform-functioning-of-emojis",level:3},{value:"Using Rocket.Chat\u2019s REST API",id:"using-rocketchats-rest-api",level:3},{value:"Providing the functionality to pin/star/react to any message and mention users.",id:"providing-the-functionality-to-pinstarreact-to-any-message-and-mention-users",level:3},{value:"\ud83d\ude80 Contributions",id:"-contributions",level:2},{value:"PRs",id:"prs",level:3},{value:"My overall contributions at Rocket.Chat",id:"my-overall-contributions-at-rocketchat",level:3},{value:"\ud83d\ude0e Blog",id:"-blog",level:2},{value:"\ud83c\udf93 Mentor",id:"-mentor",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\u2764\ufe0f Support",id:"\ufe0f-support",level:2},{value:"\ud83d\udcac Connect With Me",id:"-connect-with-me",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{align:"center",children:[(0,s.jsx)("a",{href:"https://summerofcode.withgoogle.com/projects/#6521788818784256",children:(0,s.jsx)("img",{src:"https://i.imgur.com/pgkUceb.png",width:"650",alt:"google-summer-of-code"})}),(0,s.jsx)("br",{}),(0,s.jsx)("b",{children:(0,s.jsx)("p",{children:(0,s.jsx)(t.p,{children:"Create a ready-to-go easy to embed mini-chat React component."})})})]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("code",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)("a",{href:"#-project-abstract",children:"Project Abstract"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-deliverables",children:"Deliverables"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-demo",children:"Demo"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-contributions",children:"Contributions"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-blog",children:"Blog"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-mentor",children:"Mentor"}),"\xa0\xa0\xa0\n",(0,s.jsx)("a",{href:"#-links",children:"Links"})]})})}),"\n",(0,s.jsxs)(t.p,{children:["I got a chance to work on a project called ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat",children:"EmbeddedChat"})," which is an in-app chat solution to web applications needing a chat component to increase user engagement."]}),"\n",(0,s.jsx)(t.p,{children:"From just an idea (proposal) to a complete product - 3 months of Google Summer of Code passed."}),"\n",(0,s.jsx)(t.p,{children:"I intend to maintain this repository as a final report summary of my GSoC work and a quick guide for all future GSoC aspirants."}),"\n",(0,s.jsx)(t.h2,{id:"-project-abstract",children:"\u2b50 Project Abstract"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"EmbeddedChat allows users to integrate RocketChat into their React web-based applications easily also providing an amazing developer experience while introducing in-app chat solutions."})}),"\n",(0,s.jsx)(t.h2,{id:"-deliverables",children:"\ud83d\udea2 Deliverables"}),"\n",(0,s.jsx)(t.p,{children:"The following are the deliverables of this project:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Creation of UI using RocketChat Fuselage design system. [NEW]"}),"\n",(0,s.jsx)(t.li,{children:"Providing real-time chat functionality using RocketChat node.js SDK. [NEW]"}),"\n",(0,s.jsxs)(t.li,{children:["Authentication using RocketChat\u2019s Google SSO with an additional choice for ",(0,s.jsx)(t.code,{children:"<username, password>"})," login (if the user already has an account). [NEW]"]}),"\n",(0,s.jsx)(t.li,{children:"Adding EmojiOne Emoji Picker to the component to ensure cross-platform functioning of emojis.[NEW]"}),"\n",(0,s.jsx)(t.li,{children:"Using Rocket.Chat\u2019s REST API to: [NEW]"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get channel details"}),"\n",(0,s.jsx)(t.li,{children:"Get the channel\u2019s pinned messages"}),"\n",(0,s.jsx)(t.li,{children:"Get the channel\u2019s starred messages"}),"\n",(0,s.jsx)(t.li,{children:"Get the channel attachments"}),"\n",(0,s.jsx)(t.li,{children:"Send a message to the channel"}),"\n",(0,s.jsx)(t.li,{children:"Get messages of the channel"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsx)(t.li,{children:"Providing the functionality to pin/star/react to any message and mention users. [NEW]"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"All of the above deliverables were completed within the GSoC period. Yay! \ud83c\udf89"})}),"\n",(0,s.jsx)(t.h2,{id:"-demo",children:"\ud83d\udcfa Demo"}),"\n",(0,s.jsx)(t.h3,{id:"sneak-peak",children:"Sneak Peak"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/73601258/189498365-90bcc80a-4fb1-461b-a89e-99f1f8d31d95.gif",alt:"randomgifec"})}),"\n",(0,s.jsx)(t.h3,{id:"providing-real-time-chat-functionality-using-rocketchat-nodejs-sdk",children:"Providing real-time chat functionality using RocketChat node.js SDK"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://user-images.githubusercontent.com/73601258/189498385-1346c5af-ec75-42a9-b864-f6f3b1e49d88.mp4",children:"https://user-images.githubusercontent.com/73601258/189498385-1346c5af-ec75-42a9-b864-f6f3b1e49d88.mp4"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://user-images.githubusercontent.com/73601258/189498400-942f337a-0ee8-48e5-b539-70dc49d1e3e7.mp4",children:"https://user-images.githubusercontent.com/73601258/189498400-942f337a-0ee8-48e5-b539-70dc49d1e3e7.mp4"})}),"\n",(0,s.jsx)(t.h3,{id:"authentication-using-rocketchats-google-sso",children:"Authentication using RocketChat\u2019s Google SSO"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://user-images.githubusercontent.com/73601258/180390437-b28ceacb-7f3f-4b80-84c1-4e1709b6cd35.mp4",children:"https://user-images.githubusercontent.com/73601258/180390437-b28ceacb-7f3f-4b80-84c1-4e1709b6cd35.mp4"})}),"\n",(0,s.jsx)(t.h3,{id:"adding-emojione-emoji-picker-to-the-component-to-ensure-cross-platform-functioning-of-emojis",children:"Adding EmojiOne Emoji Picker to the component to ensure cross-platform functioning of emojis."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/73601258/189498628-119c0417-a8cd-4775-acdf-41fdd3b7bc62.png",alt:"image"})}),"\n",(0,s.jsx)(t.h3,{id:"using-rocketchats-rest-api",children:"Using Rocket.Chat\u2019s REST API"}),"\n",(0,s.jsxs)(t.p,{children:["Took an object-oriented programming approach to build this. Created an API wrapper that is super simple to set up.\n",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/main/src/lib/api.js",children:"Here"})," is the code."]}),"\n",(0,s.jsx)(t.h3,{id:"providing-the-functionality-to-pinstarreact-to-any-message-and-mention-users",children:"Providing the functionality to pin/star/react to any message and mention users."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://user-images.githubusercontent.com/73601258/189498498-602ddade-2883-43ac-91b7-9f63dc41cf84.mp4",children:"https://user-images.githubusercontent.com/73601258/189498498-602ddade-2883-43ac-91b7-9f63dc41cf84.mp4"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://user-images.githubusercontent.com/73601258/189498502-1310fb1c-293e-4bb4-a208-7b523dfdd23f.mp4",children:"https://user-images.githubusercontent.com/73601258/189498502-1310fb1c-293e-4bb4-a208-7b523dfdd23f.mp4"})}),"\n",(0,s.jsx)(t.h2,{id:"-contributions",children:"\ud83d\ude80 Contributions"}),"\n",(0,s.jsx)(t.h3,{id:"prs",children:"PRs"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"PR Link"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/1",children:"PR #1"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[NEW] initialize project and base setup"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/4",children:"PR #4"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: issue and pr template"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/5",children:"PR #5"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"IMPROVE: Responsiveness"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/7",children:"PR #7"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: sending and receiving msgs (the oop way)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/11",children:"PR #11"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Parsing emojis in message box"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/12",children:"PR #12"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: AUTH (google SSO)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/15",children:"PR #15"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: Development documentation"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/26",children:"PR #26"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[IMPROVE] UI/UX improvements"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/40",children:"PR #40"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"FIX: when host is https set useSSL as true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/41",children:"PR #41"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[IMPROVE] more options to be present whether or not its fullscreen"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/46",children:"PR #46"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"FIX: when cookies are there assume user present"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/47",children:"PR #47"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"CHORE: remove tech.co.html"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/48",children:"PR #48"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Handling attachments"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/44",children:"PR #44"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: react to message"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/42",children:"PR #42"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: Pin and star messages"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/39",children:"PR #39"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Add format to all files"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/29",children:"PR #29"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"NEW: CI/CD Pipeline to deploy the package"})]})]})]})}),"\n",(0,s.jsx)(t.h3,{id:"my-overall-contributions-at-rocketchat",children:"My overall contributions at Rocket.Chat"}),"\n",(0,s.jsxs)(t.p,{children:["Besides my GSoC project I have been contributing prolifically to other Rocket.Chat projects - ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat.js.SDK",children:"RocketChat.js.SDK"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/RC4Community",children:"RC4Community"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/fuselage",children:"fuselage"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat",children:"Rocket.Chat"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"-blog",children:"\ud83d\ude0e Blog"}),"\n",(0,s.jsx)(t.p,{children:"I have been writing blogs regarding my progress in GSoC."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.to/sidmohanty11/my-journey-with-open-source-and-lessons-learned-30e7",children:"My journey with open source and lessons learned"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.to/sidmohanty11/part-i-gsoc-2022-rocketchat-embeddedchat-3njh",children:"[PART-I] GSoC 2022 | Rocket.Chat | EmbeddedChat"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.to/sidmohanty11/part-ii-gsoc-2022-rocketchat-embeddedchat-15g3",children:"[PART-II] GSoC 2022 | Rocket.Chat | EmbeddedChat"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.to/sidmohanty11/final-part-gsoc-2022-rocketchat-embeddedchat-37g8",children:"Final Part: GSoC 2022 | Rocket.Chat | EmbeddedChat"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"-mentor",children:"\ud83c\udf93 Mentor"}),"\n",(0,s.jsx)(t.p,{children:"A big big thank you to my mentor for the guidance before and throughout GSoC. \ud83d\ude4f"}),"\n",(0,s.jsx)(t.p,{children:"I learned beyond GSoC from him and am forever grateful to be mentored by him."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Rohan Lekhwani"})," - ",(0,s.jsx)(t.a,{href:"https://github.com/RonLek",children:"GitHub"}),". ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/rohanlekhwani",children:"LinkedIn"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"-links",children:"\ud83d\udd17 Links"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Read my EmbeddedChat project proposal that got me accepted to GSoC ",(0,s.jsx)(t.a,{href:"https://docs.google.com/document/d/1YeAz-hzv-7NY5HApraz0lOCNj2_Vc-ys_w2qp3qd-nQ/edit?usp=sharing",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["I also complemented it with Figma designs. Check them out ",(0,s.jsx)(t.a,{href:"https://www.figma.com/file/hj0BqzAvB15zBv7A8fMYc9/RocketChat-ReactJS-Component?node-id=0%3A1",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["My GSoC Presentation can be found ",(0,s.jsx)(t.a,{href:"https://docs.google.com/presentation/d/1hNO-iGlA0nnyHS5o6XlgwGaYP7IgOtcHdg--HCFNABY/edit?usp=sharing",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Watch the above presentation in video - ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=gcB5c6cvg9w&t=6s",children:"here"})," !"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\ufe0f-support",children:"\u2764\ufe0f Support"}),"\n",(0,s.jsx)(t.p,{children:"Learned something new today? Reciprocate the love. \u2b50 this repo for good karma."}),"\n",(0,s.jsx)(t.h2,{id:"-connect-with-me",children:"\ud83d\udcac Connect With Me"}),"\n",(0,s.jsx)(t.p,{children:"Want to discuss about GSoC / Rocket.Chat / Open-source ? Let's connect!"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Student"})}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Sidharth Mohanty"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Organization"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://rocket.chat/",children:"Rocket.Chat"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Project"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://docs.rocket.chat/contributors/annual-contribution-programs/google-summer-of-code/google-summer-of-code-2022#rocket.chat-reactjs-fullstack-component",children:"EmbeddedChat"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"GitHub"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://github.com/sidmohanty11",children:"@sidmohanty11"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"LinkedIn"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/sidmohanty11",children:"sidmohanty11"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Twitter"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.twitter.com/sidmohanty11",children:"sidmohanty11"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Blogs"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://dev.to/sidmohanty11",children:"sidmohanty11"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Website"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://sidmohanty11.github.io",children:"sidmohanty11.github.io"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Email"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)("a",{href:"mailto:sidmohanty11@gmail.com",children:(0,s.jsx)(t.a,{href:"mailto:sidmohanty11@gmail.com",children:"sidmohanty11@gmail.com"})})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Rocket.Chat"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://open.rocket.chat/direct/sidharth.mohanty",children:"sidharth.mohanty"})})]})]})]})})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>h});var s=n(6540);const i={},r=s.createContext(i);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);