"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[345],{5879:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=s(4848),i=s(8453);const t={title:"Theming Guide"},r="Theming",d={id:"Usage/theming",title:"Theming Guide",description:"ec-demo-image",source:"@site/docs/Usage/theming.md",sourceDirName:"Usage",slug:"/Usage/theming",permalink:"/EmbeddedChat/pulls/pr-676/docs/docs/Usage/theming",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Theming Guide"},sidebar:"tutorialSidebar",previous:{title:"Layout Editor",permalink:"/EmbeddedChat/pulls/pr-676/docs/docs/Usage/layout_editor"},next:{title:"Authentication Guide",permalink:"/EmbeddedChat/pulls/pr-676/docs/docs/Usage/authentication"}},a={},l=[{value:"How to Theme EmbeddedChat",id:"how-to-theme-embeddedchat",level:3},{value:"Understanding the Theme Object",id:"understanding-the-theme-object",level:3},{value:"Understanding to the <code>components</code> key",id:"understanding-to-the-components-key",level:3},{value:"Understanding the <code>variants</code> key",id:"understanding-the-variants-key",level:2},{value:"Example: Enabling Bubble Variant for Messages",id:"example-enabling-bubble-variant-for-messages",level:3},{value:"Example: Enabling Colorize Variant for MessageHeader",id:"example-enabling-colorize-variant-for-messageheader",level:3},{value:"Example: Customizing View Type for Components",id:"example-customizing-view-type-for-components",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"theming",children:"Theming"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"ec-demo-image"})}),"\n",(0,o.jsx)(n.p,{children:"EmbeddedChat supports various styling, customization options, and different variants. This guide will explore these aspects in depth."}),"\n",(0,o.jsx)(n.h3,{id:"how-to-theme-embeddedchat",children:"How to Theme EmbeddedChat"}),"\n",(0,o.jsx)(n.p,{children:"To start theming EmbeddedChat, you need to provide a theme object to the EmbeddedChat component, as shown below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"<EmbeddedChat\n  // ...other props\n  theme={myCustomTheme}\n/>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"myCustomTheme"})," must adhere to a specific format. The default theme object is shown for demonstration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const DefaultTheme = {\n  radius: '0.2rem',\n  commonColors: {\n    black: 'hsl(0, 100%, 0%)',\n    white: 'hsl(0, 100%, 100%)',\n  },\n  schemes: {\n    light: {\n      background: 'hsl(0, 0%, 100%)',\n      foreground: 'hsl(240, 10%, 3.9%)',\n      card: 'hsl(0, 0%, 100%)',\n      cardForeground: 'hsl(240, 10%, 3.9%)',\n      popover: 'hsl(0, 0%, 100%)',\n      popoverForeground: 'hsl(240, 10%, 3.9%)',\n      primary: 'hsl(240, 5.9%, 10%)',\n      primaryForeground: 'hsl(0, 0%, 98%)',\n      secondary: 'hsl(240, 4.8%, 95.9%)',\n      secondaryForeground: 'hsl(240, 5.9%, 10%)',\n      muted: 'hsl(240, 4.8%, 95.9%)',\n      mutedForeground: 'hsl(240, 3.8%, 46.1%)',\n      accent: 'hsl(240, 4.8%, 95.9%)',\n      accentForeground: 'hsl(240, 5.9%, 10%)',\n      destructive: 'hsl(0, 84.2%, 60.2%)',\n      destructiveForeground: 'hsl(0, 0%, 98%)',\n      border: 'hsl(240, 5.9%, 90%)',\n      input: 'hsl(240, 5.9%, 90%)',\n      ring: 'hsl(240, 5.9%, 10%)',\n      warning: 'hsl(38, 92%, 50%)',\n      warningForeground: 'hsl(48, 96%, 89%)',\n      success: 'hsl(91, 60.4%, 81.2%)',\n      successForeground: 'hsl(90, 61.1%, 14.1%)',\n      info: 'hsl(214, 76.4%, 50.2%)',\n      infoForeground: 'hsl(214.3, 77.8%, 92.9%)',\n    },\n    dark: {\n      background: 'hsl(240, 10%, 3.9%)',\n      foreground: 'hsl(0, 0%, 98%)',\n      card: 'hsl(240, 10%, 3.9%)',\n      cardForeground: 'hsl(0, 0%, 98%)',\n      popover: 'hsl(240, 10%, 3.9%)',\n      popoverForeground: 'hsl(0, 0%, 98%)',\n      primary: 'hsl(0, 0%, 98%)',\n      primaryForeground: 'hsl(240, 5.9%, 10%)',\n      secondary: 'hsl(240, 3.7%, 15.9%)',\n      secondaryForeground: 'hsl(0, 0%, 98%)',\n      muted: 'hsl(240, 3.7%, 15.9%)',\n      mutedForeground: 'hsl(240, 5%, 64.9%)',\n      accent: 'hsl(240, 3.7%, 15.9%)',\n      accentForeground: 'hsl(0, 0%, 98%)',\n      destructive: 'hsl(0, 62.8%, 30.6%)',\n      destructiveForeground: 'hsl(0, 0%, 98%)',\n      border: 'hsl(240, 3.7%, 15.9%)',\n      input: 'hsl(240, 3.7%, 15.9%)',\n      ring: 'hsl(240, 4.9%, 83.9%)',\n      warning: 'hsl(48, 96%, 89%)',\n      warningForeground: 'hsl(38, 92%, 50%)',\n      success: 'hsl(90, 61.1%, 14.1%)',\n      successForeground: 'hsl(90, 60%, 90.2%)',\n      info: 'hsl(214.3, 77.8%, 92.9%)',\n      infoForeground: 'hsl(214.4, 75.8%, 19.4%)',\n    },\n  },\n\n  typography: {\n    default: {\n      fontFamily: \"'Times New Roman', serif\",\n      fontSize: 16,\n      fontWeightRegular: 400,\n    },\n    h1: {\n      fontSize: '2rem',\n      fontWeight: 800,\n    },\n    h2: {\n      fontSize: '1.5rem',\n      fontWeight: 800,\n    },\n    h3: {\n      fontSize: '1.3rem',\n      fontWeight: 400,\n    },\n    h4: {\n      fontSize: '1rem',\n      fontWeight: 400,\n    },\n    h5: {\n      fontSize: '0.83rem',\n      fontWeight: 400,\n    },\n    h6: {\n      fontSize: '0.67rem',\n      fontWeight: 500,\n    },\n  },\n\n  shadows: [\n    'none',\n    'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',\n    'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',\n  ],\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"understanding-the-theme-object",children:"Understanding the Theme Object"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"radius"})," key defines the border-radius applied throughout the app."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"commonColors"})," key provides a set of commonly used colors in the app."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"schemes"})," key contains ",(0,o.jsx)(n.code,{children:"light"})," and ",(0,o.jsx)(n.code,{children:"dark"})," subkeys which controls various aspects such as foreground color, background color, border color, input color, and colors for warning and success toast messages in specific light or dark modes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"variants"})," and ",(0,o.jsx)(n.code,{children:"components"})," keys will be detailed further in the guide."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"typography"})," key contains a ",(0,o.jsx)(n.code,{children:"default"})," sub-key which includes the font family, font size, and weights for the entire app. Specific font sizes and weights for headings are then defined below that, and changing these will update the heading fonts accordingly."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"shadows"})," key currently includes two shadows used in the app. You can give different colors or styles to these shadows as needed. If more shadows are added, the source code will also need to be modified to reflect those changes."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"understanding-to-the-components-key",children:["Understanding to the ",(0,o.jsx)(n.code,{children:"components"})," key"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"components"})," key/object allows you to customize specific components by applying custom styles, adding custom classes, or modifying certain configurations."]}),"\n",(0,o.jsx)(n.p,{children:'To use this object, you need to specify the "ComponentName" as a key, which can include three sub-keys:'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"styleOverrides"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"classNames"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"configOverrides"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["However, ",(0,o.jsx)(n.code,{children:"configOverrides"})," is currently only applicable to three components: 'ChatHeader', 'ChatInputFormattingToolbar', and 'MessageToolbox'."]}),"\n",(0,o.jsxs)(n.p,{children:["Let's first understand ",(0,o.jsx)(n.code,{children:"styleOverrides"})," and ",(0,o.jsx)(n.code,{children:"classNames"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'components: {\n  ChatInput: {\n    styleOverrides: {\n      fontWeight: 400,\n      color: "gray",\n      border: "1px solid black"\n    },\n    classNames: "myCustomClassForChatInput"\n  },\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.components.ChatInput.styleOverrides"})," will apply the specified styles to the ChatInput component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme.components.ChatInput.classNames"})," will apply the specified class name to the ChatInput component."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"configOverrides"})," object contains ",(0,o.jsx)(n.code,{children:"optionConfig"}),", which includes two keys: ",(0,o.jsx)(n.code,{children:"surfaceItems"})," and ",(0,o.jsx)(n.code,{children:"menuItems"}),". ",(0,o.jsx)(n.code,{children:"surfaceItems"})," specifies which options should be displayed directly on the surface container. Options listed in ",(0,o.jsx)(n.code,{children:"menuItems"})," will be wrapped inside a menu component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"ChatHeader: {\n  configOverrides: {\n    optionConfig: {\n      surfaceItems: [\n        'minmax',\n        'close',\n        'thread',\n        'mentions',\n        'starred',\n        'pinned',\n        'files',\n      ],\n      menuItems: [\n        'members',\n        'search',\n        'rInfo',\n        'logout',\n      ],\n    },\n  },\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, for ",(0,o.jsx)(n.code,{children:"ChatHeader"}),", options from ",(0,o.jsx)(n.code,{children:"minmax"})," to ",(0,o.jsx)(n.code,{children:"files"})," will be displayed directly on the surface, while options from ",(0,o.jsx)(n.code,{children:"members"})," to ",(0,o.jsx)(n.code,{children:"logout"})," will be wrapped inside a menu, as shown:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/84b9558b-5496-4904-8788-070b519aa1f2",alt:"image"})}),"\n",(0,o.jsx)(n.p,{children:"If an option is omitted, it will simply not be rendered. This flexibility is useful for customizing the application to your needs."}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, for ",(0,o.jsx)(n.code,{children:"MessageToolbox"}),", the supported options are:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"[\n  'reaction',\n  'reply',\n  'quote',\n  'star',\n  'pin',\n  'edit',\n  'delete',\n  'report',\n],\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For the ",(0,o.jsx)(n.code,{children:"ChatInputFormattingToolbar"})," component, the supported options in ",(0,o.jsx)(n.code,{children:"surfaceItems"})," are:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'["emoji", "formatter", "audio", "video", "file"];\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, all formatters can be reordered or removed by passing a ",(0,o.jsx)(n.code,{children:"formatter"})," array in the ",(0,o.jsx)(n.code,{children:"optionConfig"}),", as demonstrated below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'formatters: ["bold", "italic", "strike", "code", "multiline"];\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Note: In ",(0,o.jsx)(n.code,{children:"ChatInputFormattingToolbar"}),", ",(0,o.jsx)(n.code,{children:"menuItems"})," is not supported as all options will be displayed directly on the surface, and none will be inside a menu."]}),"\n",(0,o.jsxs)(n.h2,{id:"understanding-the-variants-key",children:["Understanding the ",(0,o.jsx)(n.code,{children:"variants"})," key"]}),"\n",(0,o.jsxs)(n.p,{children:["EmbeddedChat supports different variants for its components. For example, the ",(0,o.jsx)(n.code,{children:"Message"})," component currently supports two variants:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flat Chat Pattern"}),": All messages are displayed on the same side in a flat layout."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Bubble Design"}),": Messages are displayed as bubbles, with your messages on one side and others on the opposite side for easy separation."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, the ",(0,o.jsx)(n.code,{children:"MessageHeader"})," component supports two configurations:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Default"}),": The font color is the foreground color."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Randomly Colorized"}),": The username or name is given a random color based on the username."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, many components support two types of views: ",(0,o.jsx)(n.code,{children:"Sidebar"})," and ",(0,o.jsx)(n.code,{children:"Popup"}),". By default, these components are displayed in sidebars, but they can be customized to appear as popups."]}),"\n",(0,o.jsx)(n.h3,{id:"example-enabling-bubble-variant-for-messages",children:"Example: Enabling Bubble Variant for Messages"}),"\n",(0,o.jsxs)(n.p,{children:["To enable the bubble variant for the ",(0,o.jsx)(n.code,{children:"Message"})," component, use the following configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"variants: {\n  Message: 'bubble',\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Flat Chat Pattern"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/2877b662-3591-463c-b9a5-deacd636b1db",alt:"Flat Design"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Bubble Design"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/c3c18d91-e51f-4abc-a3f6-1ae5a0d9773e",alt:"Bubble Design"})}),"\n",(0,o.jsx)(n.h3,{id:"example-enabling-colorize-variant-for-messageheader",children:"Example: Enabling Colorize Variant for MessageHeader"}),"\n",(0,o.jsxs)(n.p,{children:["To enable the colorize variant for the ",(0,o.jsx)(n.code,{children:"MessageHeader"})," component, use the following configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"variants: {\n  MessageHeader: 'colorize',\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default Configuration"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/190e125a-b312-4bdf-8560-5c5b04b2ebfa",alt:"Default Configuration"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Randomly Colorized"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/e7652162-dc83-4b60-9afb-045c5cecde28",alt:"Randomly Colorized"})}),"\n",(0,o.jsx)(n.h3,{id:"example-customizing-view-type-for-components",children:"Example: Customizing View Type for Components"}),"\n",(0,o.jsx)(n.p,{children:"To display components as popups instead of sidebars, use the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"variants: {\n  PinnedMessages: { viewType: 'Popup' },\n  ThreadedMessages: { viewType: 'Popup' },\n  MentionedMessages: { viewType: 'Popup' },\n  StarredMessages: { viewType: 'Popup' },\n  FileGallery: { viewType: 'Popup' },\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:'These components can now appear as popups instead of being displayed in the sidebar. Each component originally shown in the sidebar can be configured individually to appear as a popup. Apart from the aforementioned, the following components can currently be displayed either in the sidebar or as popups: "RoomInformation," "RoomMembers," and "UserInformation."'}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Sidebar View"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/7acdf6d1-075b-4027-91a9-38736fe9cc58",alt:"Sidebar View"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Popup View"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b7efade3-b041-4311-a8a7-3e642b6f0de1",alt:"Popup View"})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"Feel free to explore and customize these components according to your project's needs. If you have any questions or need further assistance, please don't hesitate to ask."}),"\n",(0,o.jsxs)(n.p,{children:["For those interested in delving into the technical implementation details, please ",(0,o.jsx)(n.a,{href:"/EmbeddedChat/pulls/pr-676/docs/docs/Development/theming_technical",children:"click here"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Happy theming!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(6540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);