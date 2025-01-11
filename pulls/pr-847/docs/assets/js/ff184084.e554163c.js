"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{9443:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=s(4848),o=s(8453);const i={title:"Installation"},d="Integrate EmbeddedChat to your React application",a={id:"Usage/embeddedchat_setup",title:"Installation",description:"ec-demo-image",source:"@site/docs/Usage/embeddedchat_setup.md",sourceDirName:"Usage",slug:"/Usage/embeddedchat_setup",permalink:"/EmbeddedChat/pulls/pr-847/docs/docs/Usage/embeddedchat_setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Theme insights",permalink:"/EmbeddedChat/pulls/pr-847/docs/docs/Development/theming_technical"},next:{title:"Layout Editor",permalink:"/EmbeddedChat/pulls/pr-847/docs/docs/Usage/layout_editor"}},r={},l=[{value:"Installation",id:"installation",level:2},{value:"Importing the Component",id:"importing-the-component",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Props",id:"props",level:2},{value:"Understanding Prop Functionality",id:"understanding-prop-functionality",level:2},{value:"Managing the Closable State",id:"managing-the-closable-state",level:3},{value:"Obtaining Room ID",id:"obtaining-room-id",level:3},{value:"Anonymous Mode",id:"anonymous-mode",level:3},{value:"Enabling Threads",id:"enabling-threads",level:3},{value:"Theming and Customization",id:"theming-and-customization",level:3},{value:"Authentication Guide",id:"authentication-guide",level:3},{value:"Storing the <code>ec-token</code> for Auto Login",id:"storing-the-ec-token-for-auto-login",level:4},{value:"Development",id:"development",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"integrate-embeddedchat-to-your-react-application",children:"Integrate EmbeddedChat to your React application"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"ec-demo-image"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install @embeddedchat/react\n# or\nyarn add @embeddedchat/react\n"})}),"\n",(0,t.jsx)(n.h2,{id:"importing-the-component",children:"Importing the Component"}),"\n",(0,t.jsxs)(n.p,{children:["Import the ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," component into your file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { EmbeddedChat } from '@embeddedchat/react';\n"})}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsxs)(n.p,{children:["To use the ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," component, include it in your component's render method or return statement. Here's a basic example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<EmbeddedChat host="http://your-rocketchat-server.com" roomId="YOUR_ROOM_ID" />\n'})}),"\n",(0,t.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,t.jsx)(n.p,{children:"EmbeddedChat supports various props that are used to customize different aspects of this component. A brief description of all the supported props is listed as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isClosable"})," (boolean): If ",(0,t.jsx)(n.code,{children:"true"}),", the chat window can be closed. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"setClosableState"})," (function): Callback for handling the closable state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"width"})," (string): Width of the chat window. Defaults to ",(0,t.jsx)(n.code,{children:"'100%'"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"height"})," (string): Height of the chat window. Defaults to ",(0,t.jsx)(n.code,{children:"'95vh'"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"host"})," (string): URL of your RocketChat server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"roomId"})," (string): ID of the chat room. Defaults to ",(0,t.jsx)(n.code,{children:"GENERAL"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"channelName"})," (string): Fallback channel name for the chat. Defaults to ",(0,t.jsx)(n.code,{children:"general"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"anonymousMode"})," (boolean): Enables anonymous mode. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"toastBarPosition"})," (string): Position of the toast bar. Defaults to ",(0,t.jsx)(n.code,{children:"'bottom right'"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showRoles"})," (boolean): Displays user roles. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showAvatar"})," (boolean): Shows user avatars. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showUsername"})," (boolean): Displays the user's username. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"showName"})," (boolean): Displays the user's name. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enableThreads"})," (boolean): Enables chat threads. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"theme"})," (object): Theme object for styling."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"className"})," (string): Additional CSS class for styling."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"style"})," (object): Inline styles for the chat window."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hideHeader"})," (boolean): Hides the chat header. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"auth"})," (object): Authentication configuration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secure"})," (boolean): Uses HTTP-only cookies for authentication. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dark"})," (boolean): Enables dark mode in the application. Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"remoteOpt"})," (boolean): Allows props override remotely using ",(0,t.jsx)(n.code,{children:"EmbeddedChat RC App"}),". Defaults to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"understanding-prop-functionality",children:"Understanding Prop Functionality"}),"\n",(0,t.jsxs)(n.p,{children:["This section of the guide aims to provide a detailed explanation of these props. However, props such as ",(0,t.jsx)(n.code,{children:"width"}),", ",(0,t.jsx)(n.code,{children:"height"}),", ",(0,t.jsx)(n.code,{children:"host"}),", ",(0,t.jsx)(n.code,{children:"channelName"}),", ",(0,t.jsx)(n.code,{children:"showRoles"}),", ",(0,t.jsx)(n.code,{children:"showAvatar"}),", ",(0,t.jsx)(n.code,{children:"showUsername"}),", ",(0,t.jsx)(n.code,{children:"showName"}),", ",(0,t.jsx)(n.code,{children:"className"}),", ",(0,t.jsx)(n.code,{children:"style"}),", ",(0,t.jsx)(n.code,{children:"hideHeader"}),", and ",(0,t.jsx)(n.code,{children:"dark"})," are straightforward and will not receive detailed discussion here."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"managing-the-closable-state",children:"Managing the Closable State"}),"\n",(0,t.jsx)(n.p,{children:"When integrating EmbeddedChat, developers have the flexibility to control its visibility. They can utilize their internal state management to achieve this. EmbeddedChat supports a function to manage this state and provides a close icon for executing the close functionality."}),"\n",(0,t.jsxs)(n.p,{children:["To enable the closable feature, set ",(0,t.jsx)(n.code,{children:"isClosable"})," to ",(0,t.jsx)(n.code,{children:"true"})," and provide a ",(0,t.jsx)(n.code,{children:"setClosableState"})," function to handle the open and close states of the chat window."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<EmbeddedChat\n  isClosable={true}\n  setClosableState={handleClose}\n  // ...other props\n/>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This setup allows seamless integration of EmbeddedChat with custom control over its visibility."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"obtaining-room-id",children:"Obtaining Room ID"}),"\n",(0,t.jsx)(n.p,{children:"By default, EmbeddedChat uses the 'GENERAL' channel as its default channel in a Rocket.Chat server. However, EmbeddedChat can be integrated into any channel within your workspace, provided you have the roomId of the desired room. To retrieve the roomId for your specified room, execute the following curl command. This API call accepts the roomName parameter and returns detailed information about the room, including its unique ID:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --request GET \\\n  --url 'http://your-rocketchat-server.com/api/v1/rooms.info?roomName=channelName' \\\n  --header 'X-Auth-Token: auth-token' \\\n  --header 'X-User-Id: user-id' \\\n  --header 'accept: application/json'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a comprehensive guide on retrieving room information, consult the Rocket.Chat API documentation: ",(0,t.jsx)(n.a,{href:"https://developer.rocket.chat/apidocs/get-room-information",children:"Get Room Information"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Once you obtain the roomId, provide it as the value for the ",(0,t.jsx)(n.code,{children:"roomId"})," prop to connect to the corresponding room."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<EmbeddedChat\n  roomId="YOUR_ROOM_ID"\n  // ...other props\n/>\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"anonymous-mode",children:"Anonymous Mode"}),"\n",(0,t.jsxs)(n.p,{children:["Rocket.Chat allows users to view messages in read-only mode without logging in. This setting can be enabled by navigating to Workspace settings > Accounts > Allow Anonymous Read. Once this setting is activated, EmbeddedChat can also display channel messages in read-only mode without requiring a login. To enable this feature, pass ",(0,t.jsx)(n.code,{children:"anonymousMode"})," as true in the props."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<EmbeddedChat\n  anonymousMode={true}\n  // ...other props\n/>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"enabling-threads",children:"Enabling Threads"}),"\n",(0,t.jsxs)(n.p,{children:["Threads allow users to discuss a specific message separately, preventing the main channel from being cluttered with numerous messages and providing a dedicated space for focused discussions. By default, this setting is enabled, but it can be disabled by passing ",(0,t.jsx)(n.code,{children:"enableThreads"})," as false."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<EmbeddedChat\n  enableThreads={false}\n  // ...other props\n/>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"theming-and-customization",children:"Theming and Customization"}),"\n",(0,t.jsxs)(n.p,{children:["EmbeddedChat supports various design variants, style overrides, and many other customization features. To tailor it to your needs, you can pass a ",(0,t.jsx)(n.code,{children:"theme"})," object to customize the appearance according to your application's design:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<EmbeddedChat\n  // ...other props\n  theme={myCustomTheme}\n/>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["However, the ",(0,t.jsx)(n.code,{children:"theme"})," object must follow a specific format. For detailed information on theming EmbeddedChat, refer to ",(0,t.jsx)(n.a,{href:"/EmbeddedChat/pulls/pr-847/docs/docs/Usage/theming",children:"theming.md"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In Storybook, demonstrations of different themes and variants are provided in the 'Design Variants' section."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h3,{id:"authentication-guide",children:"Authentication Guide"}),"\n",(0,t.jsx)(n.p,{children:"Embedded Chat supports various methods for logging into a Rocket.Chat server. These include three primary methods:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Token-Based Authentication"}),": This can be either a personal access token or a service-specific access token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Login Credentials"}),": Using a valid username/email and password."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"OAuth Authentication"}),": Uses the OAuth configuration set up in Rocket.Chat. [This method requires installing the EmbeddedChat RC App on the Rocket.Chat server]"]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"storing-the-ec-token-for-auto-login",children:["Storing the ",(0,t.jsx)(n.code,{children:"ec-token"})," for Auto Login"]}),"\n",(0,t.jsxs)(n.p,{children:["After completing the login, a resume token, referred to as ",(0,t.jsx)(n.code,{children:"ec-token"}),", is used for auto login. There are currently two supported methods to store this token:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Local Storage"}),": Store the ",(0,t.jsx)(n.code,{children:"ec-token"})," in the browser's local storage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"HTTP-Only Cookie"}),": Store the ",(0,t.jsx)(n.code,{children:"ec-token"})," as an HTTP-only cookie. [This method requires the installation of the EmbeddedChat RC App on the Rocket.Chat server]"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For a detailed guide on using each of these authentication methods with the ",(0,t.jsx)(n.code,{children:"auth"})," and ",(0,t.jsx)(n.code,{children:"secure"})," props, refer to the ",(0,t.jsx)(n.a,{href:"/EmbeddedChat/pulls/pr-847/docs/docs/Usage/authentication",children:"authentication.md"})," file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,t.jsxs)(n.p,{children:["Follow this ",(0,t.jsx)(n.a,{href:"https://github.com/RocketChat/EmbeddedChat",children:"EmbeddedChat Readme"})," to setup EmbeddedChat for development."]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"EmbeddedChat"})," component offers a flexible and feature-rich solution for integrating RocketChat into your application. Customize it according to your needs to enhance your app's chat functionality."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(6540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);