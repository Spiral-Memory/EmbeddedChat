"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[608],{4591:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var t=s(4848),c=s(8453);const a={title:"Dev Launch"},r=void 0,i={id:"Development/dev_launch",title:"Dev Launch",description:"Embedded Chat: A staple in excellent customer service --\x3e",source:"@site/docs/Development/dev_launch.md",sourceDirName:"Development",slug:"/Development/dev_launch",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/Development/dev_launch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dev Launch"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/introduction"},next:{title:"UI-Elements",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/Development/ui-elements"}},l={},o=[{value:"Development",id:"development",level:2},{value:"Local Setup",id:"local-setup",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Install Dependencies",id:"install-dependencies",level:4},{value:"Build Packages",id:"build-packages",level:4},{value:"Starting Storybook for React",id:"starting-storybook-for-react",level:4},{value:"Custom Rocket Chat Server Configuration",id:"custom-rocket-chat-server-configuration",level:3},{value:"Package Development Overview",id:"package-development-overview",level:3},{value:"React Package Development",id:"react-package-development",level:4},{value:"Auth Package Development",id:"auth-package-development",level:4},{value:"API Package Development",id:"api-package-development",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"Contributors",id:"contributors",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"ec-demo-image"})}),"\n",(0,t.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,t.jsx)(n.h3,{id:"local-setup",children:"Local Setup"}),"\n",(0,t.jsxs)(n.p,{children:["To develop and test ",(0,t.jsx)(n.code,{children:"EmbeddedChat"}),", you need a local instance of the Rocket.Chat server. Follow the guide in the ",(0,t.jsx)(n.a,{href:"https://developer.rocket.chat/v1/docs/server-environment-setup",children:"Rocket.Chat Developer Docs"})," for setting up a Rocket.Chat development environment."]}),"\n",(0,t.jsx)(n.p,{children:'Ensure that the "Enable CORS" option is turned on in your Rocket.Chat server. You can find it under Administration > Settings > General > REST API > Enable CORS. This setting must be enabled to access the app\'s functionality.'}),"\n",(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Node.js"}),": Version 16.19.0 is required. Use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"Node Version Manager (NVM)"})," for easy switching between Node.js versions."]}),"\n",(0,t.jsx)(n.p,{children:"To install and use the correct Node.js version, execute the following commands with the specific version number:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nvm install <version>\nnvm use <version>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"<version>"})," with the required Node.js version"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Yarn Workspaces"}),": Ensure Yarn workspaces are enabled. If not, run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"corepack enable\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Install all necessary dependencies by navigating to the root directory of ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," and running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn\n"})}),"\n",(0,t.jsx)(n.h4,{id:"build-packages",children:"Build Packages"}),"\n",(0,t.jsxs)(n.p,{children:["After installing dependencies, build the packages (",(0,t.jsx)(n.code,{children:"auth"}),", ",(0,t.jsx)(n.code,{children:"api"}),", and ",(0,t.jsx)(n.code,{children:"react"}),") by running the following command in the root directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,t.jsx)(n.h4,{id:"starting-storybook-for-react",children:"Starting Storybook for React"}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"react"})," package directory and start Storybook with the following commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/react\nyarn storybook\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Storybook should now be operational. Experiment with ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," and its components, observing real-time changes in Storybook."]}),"\n",(0,t.jsx)(n.h3,{id:"custom-rocket-chat-server-configuration",children:"Custom Rocket Chat Server Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Storybook connects to ",(0,t.jsx)(n.code,{children:"http://localhost:3000"}),". To use a different Rocket Chat server:"]}),"\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file in the ",(0,t.jsx)(n.code,{children:"packages/react"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["Set the ",(0,t.jsx)(n.code,{children:"STORYBOOK_RC_HOST"})," variable:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"STORYBOOK_RC_HOST=<your-custom-url>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, run this command in the ",(0,t.jsx)(n.code,{children:"packages/react"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"STORYBOOK_RC_HOST=<your-custom-url> yarn storybook\n"})}),"\n",(0,t.jsx)(n.h3,{id:"package-development-overview",children:"Package Development Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The project uses a monorepo structure with three key packages: ",(0,t.jsx)(n.code,{children:"react"}),", ",(0,t.jsx)(n.code,{children:"auth"}),", and ",(0,t.jsx)(n.code,{children:"api"}),". Each package fulfills a vital role in the application:"]}),"\n",(0,t.jsx)(n.h4,{id:"react-package-development",children:"React Package Development"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"react"})," package serves as the main frontend component, having all UI elements and views. It interfaces with the ",(0,t.jsx)(n.code,{children:"auth"})," and ",(0,t.jsx)(n.code,{children:"api"})," packages to manage interactions with the Rocket.Chat server, including API calls and authentication."]}),"\n",(0,t.jsxs)(n.p,{children:["To develop and test changes in the ",(0,t.jsx)(n.code,{children:"react"})," package:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the directory of the ",(0,t.jsx)(n.code,{children:"react"})," package:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/react\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Start Storybook to view live changes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn storybook\n"})}),"\n",(0,t.jsx)(n.h4,{id:"auth-package-development",children:"Auth Package Development"}),"\n",(0,t.jsxs)(n.p,{children:["To develop and test changes in the ",(0,t.jsx)(n.code,{children:"auth"})," package:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"auth"})," package directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/auth\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the development server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn dev\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"api-package-development",children:"API Package Development"}),"\n",(0,t.jsxs)(n.p,{children:["For development in the ",(0,t.jsx)(n.code,{children:"api"})," package:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"api"})," package directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/api\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start the development server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn dev\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Development Workflow Notes:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"react"})," package relies on the ",(0,t.jsx)(n.code,{children:"api"})," package. After making changes to the ",(0,t.jsx)(n.code,{children:"api"}),", rebuild it using ",(0,t.jsx)(n.code,{children:"yarn build"})," in ",(0,t.jsx)(n.code,{children:"packages/api"}),", and then restart the React project."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Similarly, the ",(0,t.jsx)(n.code,{children:"api"})," package depends on the ",(0,t.jsx)(n.code,{children:"auth"})," package. After making changes to ",(0,t.jsx)(n.code,{children:"auth"}),", rebuild it using ",(0,t.jsx)(n.code,{children:"yarn build"})," in ",(0,t.jsx)(n.code,{children:"packages/auth"}),", and then restart the ",(0,t.jsx)(n.code,{children:"api"})," development environment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This structured approach facilitates cohesive development and integration across all components of the application."}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["This environment offers a complete setup for developing and testing the ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," component, alongside its ",(0,t.jsx)(n.code,{children:"api"})," and ",(0,t.jsx)(n.code,{children:"auth"})," packages. Feel free to explore and enhance the capabilities of ",(0,t.jsx)(n.code,{children:"EmbeddedChat"}),"!"]}),"\n",(0,t.jsx)(n.h3,{id:"contributors",children:"Contributors"}),"\n",(0,t.jsx)("a",{href:"https://github.com/RocketChat/EmbeddedChat/graphs/contributors",children:(0,t.jsx)("img",{src:"https://contrib.rocks/image?repo=RocketChat/EmbeddedChat"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var t=s(6540);const c={},a=t.createContext(c);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);