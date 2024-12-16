"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{9563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=n(4848),r=n(8453);const o={},s="Google Summer of Code 2024, RocketChat",d={permalink:"/EmbeddedChat/pulls/pr-634/docs/blog/EmbeddedChat-2024",source:"@site/blog/EmbeddedChat-2024.md",title:"Google Summer of Code 2024, RocketChat",description:"\ud83d\udcd8 Introduction",date:"2024-12-15T18:03:00.000Z",tags:[],readingTime:7.87,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Google Summer of Code 2023, RocketChat",permalink:"/EmbeddedChat/pulls/pr-634/docs/blog/EmbeddedChat-2023"}},a={authorsImageUrls:[]},h=[{value:"\ud83d\udcd8 Introduction",id:"-introduction",level:2},{value:"\u2b50 Project Abstract",id:"-project-abstract",level:2},{value:"\ud83d\udea2 Deliverables",id:"-deliverables",level:2},{value:"\ud83d\udcf9 Showcase",id:"-showcase",level:2},{value:"Sneak Peek",id:"sneak-peek",level:3},{value:"Code Refactor: Separation of Concerns",id:"code-refactor-separation-of-concerns",level:3},{value:"UI Theming Upgrade: Prebuilt Themes and Style Variants",id:"ui-theming-upgrade-prebuilt-themes-and-style-variants",level:3},{value:"Enhanced Authentication with HTTP-Only Cookies",id:"enhanced-authentication-with-http-only-cookies",level:3},{value:"UI-Kit Improvement",id:"ui-kit-improvement",level:3},{value:"EmbeddedChat Remote Configurability",id:"embeddedchat-remote-configurability",level:3},{value:"Layout Editor",id:"layout-editor",level:3},{value:"\ud83d\ude80 Contributions",id:"-contributions",level:2},{value:"GSoC Contributions to EmbeddedChat",id:"gsoc-contributions-to-embeddedchat",level:3},{value:"\ud83c\udf93 A Special Thanks to My Mentor",id:"-a-special-thanks-to-my-mentor",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\u2764\ufe0f Support",id:"\ufe0f-support",level:2},{value:"\ud83d\udcac Let&#39;s Connect",id:"-lets-connect",level:2},{value:"\ud83d\udccc Closing Notes",id:"-closing-notes",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{align:"center",children:(0,i.jsx)("a",{href:"https://summerofcode.withgoogle.com/programs/2024/projects/eVxOuKT2",children:(0,i.jsx)("img",{src:"https://github.com/user-attachments/assets/9705b330-c4f9-4061-8c71-114cfb5153bb",width:"100%",alt:"google-summer-of-code"})})}),"\n",(0,i.jsx)(t.h2,{id:"-introduction",children:"\ud83d\udcd8 Introduction"}),"\n",(0,i.jsx)(t.p,{children:"During my GSoC period, I worked on EmbeddedChat, a lightweight chat widget that uses the RocketChat engine's REST and real-time APIs to deliver comprehensive chat features, customizable options, and attractive theming capabilities."}),"\n",(0,i.jsx)(t.h2,{id:"-project-abstract",children:"\u2b50 Project Abstract"}),"\n",(0,i.jsx)(t.p,{children:"The goal of this project was to develop a ready-to-use chat solution that could be integrated into any website, web app, or mobile app. In EmbeddedChat 2024, my focus was on enhancing the UI by making components modular and providing pre-built themes. The project also sought to ensure security through HTTP-Only cookie-based authentication, using RC-app as a bridge. I also worked on improving configuration capabilities, enabling the instance to be configurable through RC-app, and developed a real-time layout editor with drag-and-drop features, among other enhancements."}),"\n",(0,i.jsx)(t.h2,{id:"-deliverables",children:"\ud83d\udea2 Deliverables"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Redesign Embedded Chat for consistent CSS, logic separation, and monorepo component management."}),"\n",(0,i.jsx)(t.li,{children:"Upgrade theming system with prebuilt themes and enhanced customization."}),"\n",(0,i.jsx)(t.li,{children:"Boost security with HTTP-Only cookie authentication in Embedded Chat via RC-app."}),"\n",(0,i.jsx)(t.li,{children:"Enable admins to easily adjust all Embedded Chat settings in Rocket.Chat Workspace."}),"\n",(0,i.jsx)(t.li,{children:"Offer a drag-and-drop editor for admin UI configuration without coding."}),"\n",(0,i.jsx)(t.li,{children:"Enhance UI-Kit integration."}),"\n",(0,i.jsx)(t.li,{children:"Fix bugs and improve documentation."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"-showcase",children:"\ud83d\udcf9 Showcase"}),"\n",(0,i.jsx)(t.p,{children:"Explore a demonstration of the latest features and improvements. See firsthand how the updates enhance functionality and user experience."}),"\n",(0,i.jsx)(t.h3,{id:"sneak-peek",children:"Sneak Peek"}),"\n",(0,i.jsx)(t.p,{children:"Here's a brief preview of EmbeddedChat integrated into a website, designed to demonstrate the functionality of RC apps without the need for local setup."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"https://github.com/user-attachments/assets/1f5da63d-b82e-497d-bade-cf88716297e8",width:"100%",alt:"EC Integration"})}),"\n",(0,i.jsx)(t.h3,{id:"code-refactor-separation-of-concerns",children:"Code Refactor: Separation of Concerns"}),"\n",(0,i.jsx)(t.p,{children:"Key updates to the EmbeddedChat repository include:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Separation of Components from Views"}),": Standalone components have been moved to a ",(0,i.jsx)(t.code,{children:"ui-element"})," monorepo with its own Storybook."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"CSS Styles Separation"}),": CSS styles are now in a ",(0,i.jsx)(t.code,{children:"component.styles.js"})," file, providing a clear separation from core logic."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Markup and UI-Kit Separation"}),": Markups and the UI Kit are organized into a separate library (monorepo)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{src:"https://github.com/user-attachments/assets/b983d6c9-8190-4d5e-8a40-52588b07e7c3",width:"100%",alt:"CSS styles in component.styles.js"}),(0,i.jsx)("br",{}),(0,i.jsxs)(t.p,{children:["CSS styles are now in ",(0,i.jsx)(t.code,{children:"component.styles.js"})]})]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{src:"https://github.com/user-attachments/assets/77663956-2c74-4e54-a337-181abff094eb",width:"100%",alt:"Separation into monorepo"}),(0,i.jsx)("br",{}),(0,i.jsxs)(t.p,{children:["Separation into monorepo for ",(0,i.jsx)(t.code,{children:"ui-elements"}),", ",(0,i.jsx)(t.code,{children:"markups"}),", and ",(0,i.jsx)(t.code,{children:"ui-kit"})]})]}),"\n",(0,i.jsx)(t.p,{children:"The video below illustrates the development, usage, and setup of the ui-elements monorepo, and it also shows that EmbeddedChat functions as expected following this separation:"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/BEpQYl9Y_z0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)(t.h3,{id:"ui-theming-upgrade-prebuilt-themes-and-style-variants",children:"UI Theming Upgrade: Prebuilt Themes and Style Variants"}),"\n",(0,i.jsx)(t.p,{children:"The theming system has been enhanced with several prebuilt themes, ensuring a consistent use of theme colors across the repository. This replaces the previously inconsistent and varied color schemes."}),"\n",(0,i.jsxs)(t.p,{children:["Once the Storybook is running, you can explore and experiment with various designs within the ",(0,i.jsx)(t.code,{children:"Design Variants"})," folder, including ",(0,i.jsx)(t.code,{children:"RCVariant"}),", ",(0,i.jsx)(t.code,{children:"Bubble Variant"}),", and ",(0,i.jsx)(t.code,{children:"Modern Variant"}),". These options enable you to either use the prebuilt themes or draw inspiration to create your own. Below are images and videos demonstrating the different variants; note that the videos also highlight fixes introduced with these PRs:"]}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/XtOgYnM-F58",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/D_rskRbEatk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/826cf806-1d9c-4626-a3c2-4f00d8557389",width:"100%",alt:"Automatically generated colors in usernames in dark mode + popup instead of sidebar"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.p,{children:"Automatically generated colors in usernames in dark mode + popup instead of sidebar"})]}),"\n",(0,i.jsxs)("p",{align:"center",children:[(0,i.jsx)("img",{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b7efade3-b041-4311-a8a7-3e642b6f0de1",width:"100%",alt:"Automatically generated colors in usernames in light mode + popup instead of sidebar"}),(0,i.jsx)("br",{}),(0,i.jsx)(t.p,{children:"Automatically generated colors in usernames in light mode + popup instead of sidebar"})]}),"\n",(0,i.jsxs)(t.p,{children:["The theming system follows a convention similar to the ShadCN theming system. Users can generate themes from the ShadCN website or other sites that follow the same convention, then use the ",(0,i.jsx)(t.code,{children:"packages/react/tools/theme-generator.js"})," to convert the theme into a supported format and apply it via the theme prop."]}),"\n",(0,i.jsx)(t.p,{children:"A demonstration video is available here:"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/bB2zzlHhIdY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.p,{children:["For further details on theming, you can visit the ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/theming.md",children:"documentation"})," or check out the ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/theming_technical.md",children:"technical guide"})," for insights on how theming is implemented in the repository."]}),"\n",(0,i.jsx)(t.h3,{id:"enhanced-authentication-with-http-only-cookies",children:"Enhanced Authentication with HTTP-Only Cookies"}),"\n",(0,i.jsxs)(t.p,{children:["EmbeddedChat authentication security has been enhanced through the use of HTTP-Only cookies for re-authentication. This approach adds an extra layer of protection by preventing access via inline JavaScript, thereby reducing the risk of potential attacks. To use this storage method, the EmbeddedChat RC app must be installed on the RC server, which acts as a bridge for saving and retrieving tokens. Once installed, you can test the feature using the Storybook ",(0,i.jsx)(t.code,{children:"SecureAuth"})," option or by setting the ",(0,i.jsx)(t.code,{children:"secure: true"})," prop during EmbeddedChat setup."]}),"\n",(0,i.jsx)(t.p,{children:"A video demonstration is available here:"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/k1-X-9l67H4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.p,{children:["For more information on authentication, refer to the ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/authentication.md",children:"authentication guide"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"ui-kit-improvement",children:"UI-Kit Improvement"}),"\n",(0,i.jsx)(t.p,{children:"I enhanced the UI-Kit integration within EmbeddedChat by migrating it to a monorepo as a separate library. Key improvements include:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Modularized Structure"}),": Reorganized the UI-Kit folder structure for improved modularity."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Action Processing"}),": Added state and view update logic, along with parsing methods."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contextual Bar Support"}),": Implemented support for the contextual bar."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Component Enhancements"}),": Added support for static select and multi-select elements with custom components and new component stories."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Testing was conducted across three distinct RC apps, with video demonstrations provided:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Reminder RC App"}),":"]}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/OAertgChvCA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Notion RC App"}),":"]}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/nYxgsXtod50",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"News Aggregation App"})," (tested multi-select functionality):"]}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/LtZESjEnEqA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)(t.h3,{id:"embeddedchat-remote-configurability",children:"EmbeddedChat Remote Configurability"}),"\n",(0,i.jsxs)(t.p,{children:["I have added support for remote configuration of EmbeddedChat props, including themes, via the EmbeddedChat RC App. The app can also validate CSS dimensions provided in the settings. To try this feature, set up the RC app in your Rocket.Chat workspace and use the Storybook option ",(0,i.jsx)(t.code,{children:"WithRemoteOpt"})," or pass the ",(0,i.jsx)(t.code,{children:"remoteOpt: true"})," prop during EmbeddedChat setup."]}),"\n",(0,i.jsx)(t.p,{children:"The following videos demonstrate its usage:"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/72OBBWMAMOk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/rkuSF9qOG2U",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.p,{children:["To set up the EmbeddedChat RC App, follow this guide: ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/ec_rc_setup.md",children:"EmbeddedChat RC App Setup"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"layout-editor",children:"Layout Editor"}),"\n",(0,i.jsxs)(t.p,{children:["I also worked on a new sub-project called ",(0,i.jsx)(t.code,{children:"layout-editor"})," during GSoC to enhance EmbeddedChat customizability. This tool enables users to customize the EmbeddedChat layout in real-time with drag-and-drop features, color configuration, and more. Once satisfied with their design, users can click the ",(0,i.jsx)(t.code,{children:"Generate Theme"})," button to create a theme object, which can be applied by passing it into the theme prop during EmbeddedChat setup or by configuring it remotely if EmbeddedChat RC App is properly set up."]}),"\n",(0,i.jsx)(t.p,{children:"A video demonstration showcases the features:"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"392",src:"https://www.youtube.com/embed/vhxsGopMGA8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the layout editor, visit the guide: ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/layout_editor.md",children:"Layout Editor Guide"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"-contributions",children:"\ud83d\ude80 Contributions"}),"\n",(0,i.jsx)(t.h3,{id:"gsoc-contributions-to-embeddedchat",children:"GSoC Contributions to EmbeddedChat"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"PR ID"}),(0,i.jsx)(t.th,{children:"Title"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"576"}),(0,i.jsxs)(t.td,{children:["Refactor, Restructure, and Fix Bugs (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/576",children:"#576"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"579"}),(0,i.jsxs)(t.td,{children:["UI Theming Upgrade and RC-like Redesign (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/579",children:"#579"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"581"}),(0,i.jsxs)(t.td,{children:["Add Curved Bubble Variant Styles (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/581",children:"#581"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"584"}),(0,i.jsxs)(t.td,{children:["More Customization: Popup/Sidebar and Username Color Options (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/584",children:"#584"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"589"}),(0,i.jsxs)(t.td,{children:["Fix ChatInput Bugs, Improve Experience (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/589",children:"#589"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"590"}),(0,i.jsxs)(t.td,{children:["Enhance Security with HTTP-Only Cookies (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/590",children:"#590"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"591"}),(0,i.jsxs)(t.td,{children:["Remove Unused Files (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/591",children:"#591"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"593"}),(0,i.jsxs)(t.td,{children:["UI-Kit Integration and Action Processing (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/593",children:"#593"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"594"}),(0,i.jsxs)(t.td,{children:["Auto Login Improvements and Loading Screens (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/594",children:"#594"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"599"}),(0,i.jsxs)(t.td,{children:["Remote EmbeddedChat Settings Configuration (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/599",children:"#599"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"601"}),(0,i.jsxs)(t.td,{children:["Add CSS Dimension Validation (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/601",children:"#601"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"602"}),(0,i.jsxs)(t.td,{children:["Documentation Improvements (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/602",children:"#602"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"604"}),(0,i.jsxs)(t.td,{children:["Separate Component Monorepo (UI-Elements) (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/604",children:"#604"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"606"}),(0,i.jsxs)(t.td,{children:["Reduce Package Size of Component Monorepo (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/606",children:"#606"}),")"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"607"}),(0,i.jsxs)(t.td,{children:["Add Real-Time Layout Editor with Drag-and-Drop (",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pull/607",children:"#607"}),")"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/EmbeddedChat/pulls?q=is%3Apr+author%3ASpiral-Memory",children:"See all PRs for EmbeddedChat"})}),"\n",(0,i.jsxs)(t.p,{children:["In addition to working on EmbeddedChat, I've made contributions to several other RocketChat projects. Check out my pull requests for ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/Apps.Notion/pulls?q=+is%3Apr+author%3ASpiral-Memory",children:"Apps.Notion"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/Rocket.Chat/pulls?q=+is%3Apr+author%3ASpiral-Memory",children:"Rocket.Chat"}),", and ",(0,i.jsx)(t.a,{href:"https://github.com/RocketChat/fuselage/pulls?q=+is%3Apr+author%3ASpiral-Memory",children:"Fuselage"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"-a-special-thanks-to-my-mentor",children:"\ud83c\udf93 A Special Thanks to My Mentor"}),"\n",(0,i.jsx)(t.p,{children:"Thank you so much to Sidharth Mohanty for being an amazing mentor during GSoC. He\u2019s been incredibly receptive to ideas, always available to help, and provides great guidance during our meetups. His encouragement to explore new areas has made this experience really rewarding. I\u2019ve learned a lot from him and truly appreciate all his support."}),"\n",(0,i.jsxs)(t.p,{children:["You can connect with him on ",(0,i.jsx)(t.a,{href:"https://github.com/sidmohanty11",children:"GitHub"}),", ",(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/sidmohanty11/",children:"LinkedIn"}),", and ",(0,i.jsx)(t.a,{href:"https://twitter.com/sidmohanty11",children:"Twitter"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"-links",children:"\ud83d\udd17 Links"}),"\n",(0,i.jsxs)(t.p,{children:["Download and read my EmbeddedChat project proposal, which led to my GSoC acceptance, ",(0,i.jsx)(t.a,{href:"https://github.com/Spiral-Memory/GSoC-Proposal/blob/main/Embedded%20Chat%202024%20GSoC%20Proposal%20%5BWinning%5D.pdf",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"\ufe0f-support",children:"\u2764\ufe0f Support"}),"\n",(0,i.jsx)(t.p,{children:"Enjoyed what you learned today? Show your appreciation by starring this repo. \u2b50"}),"\n",(0,i.jsx)(t.h2,{id:"-lets-connect",children:"\ud83d\udcac Let's Connect"}),"\n",(0,i.jsx)(t.p,{children:"Interested in chatting about GSoC, Rocket.Chat, or open-source adventures? I'm all ears!"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Role"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Zishan Ahmad \u2013 GSoC Participant"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Affiliation"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://rocket.chat/",children:"Rocket.Chat"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Project"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://summerofcode.withgoogle.com/programs/2024/projects/eVxOuKT2",children:"EmbeddedChat 2024"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"GitHub"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://github.com/Spiral-Memory",children:"@Spiral-Memory"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"LinkedIn"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/zishanahmad72/",children:"@zishanahmad72"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Creative Space"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://spiral-memory.netlify.app/",children:"spiral-memory.netlify.app"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Email"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"mailto:zishan.barun@gmail.com",children:"zishan.barun@gmail.com"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Rocket.Chat"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"https://open.rocket.chat/direct/zishan.ahmad",children:"zishan.ahmad"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"-closing-notes",children:"\ud83d\udccc Closing Notes"}),"\n",(0,i.jsx)(t.p,{children:"This repository contains the final report and serves as a guide for future contributors to the EmbeddedChat project, which was developed and improved during Google Summer of Code (GSoC) 2024. The final report details the solutions implemented during the project, while the guide provides insights and instructions for new contributors to effectively engage with and build upon the project's foundation."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);