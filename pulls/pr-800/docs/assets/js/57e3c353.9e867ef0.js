"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[613],{2147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>r});var o=t(4848),s=t(8453);const d={title:"UI-Elements"},i="UI-Elements",l={id:"Development/ui-elements",title:"UI-Elements",description:"Embedded Chat Demo",source:"@site/docs/Development/ui-elements.md",sourceDirName:"Development",slug:"/Development/ui-elements",permalink:"/EmbeddedChat/pulls/pr-800/docs/docs/Development/ui-elements",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UI-Elements"},sidebar:"tutorialSidebar",previous:{title:"Dev Launch",permalink:"/EmbeddedChat/pulls/pr-800/docs/docs/Development/dev_launch"},next:{title:"Theme insights",permalink:"/EmbeddedChat/pulls/pr-800/docs/docs/Development/theming_technical"}},c={},r=[{value:"Try It Out \ud83d\ude80",id:"try-it-out-",level:3},{value:"Development",id:"development",level:3},{value:"Installation",id:"installation",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"ui-elements",children:"UI-Elements"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"Embedded Chat Demo"})}),"\n",(0,o.jsxs)(n.p,{children:["This component is part of a monorepo, specifically within the ",(0,o.jsx)(n.code,{children:"packages/ui-elements"})," project, which houses the main EmbeddedChat Component."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/user-attachments/assets/2fd76929-ce43-4bb3-8ea8-3a7318468923",alt:"image"})}),"\n",(0,o.jsx)(n.h3,{id:"try-it-out-",children:"Try It Out \ud83d\ude80"}),"\n",(0,o.jsxs)(n.p,{children:["Check out our Storybook showcasing all the components in action! Preview and test them here: ",(0,o.jsx)(n.a,{href:"https://rocketchat.github.io/EmbeddedChat/ui-elements/",children:"https://rocketchat.github.io/EmbeddedChat/ui-elements/"})]}),"\n",(0,o.jsx)(n.h3,{id:"development",children:"Development"}),"\n",(0,o.jsx)(n.p,{children:"To develop and view the components:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone the repository."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.code,{children:"packages/ui-elements"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn build       # To build the component library\nyarn storybook   # To view the components in real-time\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"To install the component library, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @embeddedchat/ui-elements\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This library offers a range of UI components, including ",(0,o.jsx)(n.code,{children:"Box"}),", ",(0,o.jsx)(n.code,{children:"Input"}),", ",(0,o.jsx)(n.code,{children:"StaticSelect"}),", ",(0,o.jsx)(n.code,{children:"MultiSelect"}),", and more. For a complete list of available components, please refer to the Storybook."]}),"\n",(0,o.jsx)(n.p,{children:"You can import components using the following syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import {\n  Box,\n  Heading,\n  Icon,\n  Menu,\n  useToastBarDispatch,\n  useComponentOverrides,\n} from \'@embeddedchat/ui-elements\';\n\n### Theming\n\nBy default, the component uses a standard theme. You can apply a custom theme and mode by importing `ThemeProvider` from `@embeddedchat/ui-elements` and using it as follows:\n\n```jsx\nimport { ThemeProvider } from "@embeddedchat/ui-elements";\n\n<ThemeProvider theme={customTheme} mode="light">\n  <YourMainComponent />\n</ThemeProvider>;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Supported modes are ",(0,o.jsx)(n.code,{children:"'light'"})," and ",(0,o.jsx)(n.code,{children:"'dark'"}),". Ensure that the ",(0,o.jsx)(n.code,{children:"theme"})," prop is provided with the correct format."]}),"\n",(0,o.jsxs)(n.p,{children:["The library also includes a ",(0,o.jsx)(n.code,{children:"useTheme"})," hook for managing the theme and mode:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { useTheme } from "@embeddedchat/ui-elements";\n\nconst { theme, mode, setTheme, setMode } = useTheme();\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"useTheme"})," hook provides:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"theme"}),": The current theme object."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mode"}),": The current mode (",(0,o.jsx)(n.code,{children:"'light'"})," or ",(0,o.jsx)(n.code,{children:"'dark'"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"setTheme"}),": A function to update the theme dynamically."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"setMode"}),": A function to toggle between ",(0,o.jsx)(n.code,{children:"'light'"})," and ",(0,o.jsx)(n.code,{children:"'dark'"})," modes."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"setTheme"})," allows you to change the theme on-the-fly, while ",(0,o.jsx)(n.code,{children:"setMode"})," lets you switch between light and dark modes. This flexibility is useful for dynamically adjusting the appearance of your application based on user preferences or other conditions."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use this hook to style your components with the provided theme. ",(0,o.jsx)(n.code,{children:"theme"})," object also dynamically provides ",(0,o.jsx)(n.code,{children:"colors"})," and ",(0,o.jsx)(n.code,{children:"invertedColors"}),", simplifying color management. ",(0,o.jsx)(n.code,{children:"theme.colors"})," will automatically adjust according to the mode, while ",(0,o.jsx)(n.code,{children:"invertedColors"})," provides colors for the alternate mode."]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, the library offers ",(0,o.jsx)(n.code,{children:"darken"})," and ",(0,o.jsx)(n.code,{children:"lighten"})," functions to dynamically adjust color brightness:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { darken, lighten } from "@embeddedchat/ui-elements";\n'})}),"\n",(0,o.jsx)(n.p,{children:"These functions can be used as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"background-color: ${mode === 'light'\n      ? darken(colors.background, 0.03)\n      : lighten(colors.background, 1)};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This hook allows you to dynamically switch modes or themes as needed. The ",(0,o.jsx)(n.code,{children:"theme"})," object must adhere to a specific format, as outlined in the EmbeddedChat ",(0,o.jsx)(n.code,{children:"react"})," project ",(0,o.jsx)(n.a,{href:"/EmbeddedChat/pulls/pr-800/docs/docs/Usage/theming",children:"Readme.md"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(6540);const s={},d=o.createContext(s);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);