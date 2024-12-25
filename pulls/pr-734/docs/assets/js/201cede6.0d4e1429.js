"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[875],{1545:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=s(4848),t=s(8453);const i={title:"Theme insights"},r="Technical Details on Theming",a={id:"Development/theming_technical",title:"Theme insights",description:"ec-demo-image",source:"@site/docs/Development/theming_technical.md",sourceDirName:"Development",slug:"/Development/theming_technical",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/Development/theming_technical",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Theme insights"},sidebar:"tutorialSidebar",previous:{title:"UI-Elements",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/Development/ui-elements"},next:{title:"Installation",permalink:"/EmbeddedChat/pulls/pr-734/docs/docs/Usage/embeddedchat_setup"}},l={},c=[{value:"Understanding the Theming Approach",id:"understanding-the-theming-approach",level:2},{value:"Technical Overview of <code>useComponentOverrides</code>",id:"technical-overview-of-usecomponentoverrides",level:2},{value:"Example: styleOverrides and classNames",id:"example-styleoverrides-and-classnames",level:3},{value:"Example: Config Overrides",id:"example-config-overrides",level:3},{value:"Example: Variant Overrides",id:"example-variant-overrides",level:3},{value:"Applying Class Names for Easy Styling",id:"applying-class-names-for-easy-styling",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"technical-details-on-theming",children:"Technical Details on Theming"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://github.com/RocketChat/EmbeddedChat/assets/78961432/b85c7b8a-65e2-4a90-a843-f4072c942ac0",alt:"ec-demo-image"})}),"\n",(0,o.jsx)(n.p,{children:"This guide dives into the technical aspects of how themes, styles, and configurations are implemented within the application."}),"\n",(0,o.jsx)(n.h2,{id:"understanding-the-theming-approach",children:"Understanding the Theming Approach"}),"\n",(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.a,{href:"https://emotion.sh/",children:"Emotion"})," for styling. Each component has a ",(0,o.jsx)(n.code,{children:"component.style.js"})," file for CSS definitions."]}),"\n",(0,o.jsxs)(n.p,{children:["We use theming with our ",(0,o.jsx)(n.code,{children:"useTheme"})," hook, exported from ",(0,o.jsx)(n.code,{children:"@embeddedchat/ui-elements"}),", according to our specific requirements. The implementation looks something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { useContext } from "react";\nimport { ThemeContext } from "../context/ThemeContextProvider";\nimport DefaultTheme from "../theme/DefaultTheme";\n\nconst invertMode = (mode) => (mode === "light" ? "dark" : "light");\n\nconst useTheme = () => {\n  const context = useContext(ThemeContext);\n\n  if (!context) {\n    const defaultMode = "light";\n    const theme = DefaultTheme;\n    const colors = theme.schemes?.[defaultMode];\n    const invertedColors = theme.schemes?.[invertMode(defaultMode)];\n\n    const modifiedTheme = {\n      ...theme,\n      colors,\n      invertedColors,\n    };\n\n    return {\n      theme: modifiedTheme,\n      mode: defaultMode,\n      setMode: () => {},\n      setTheme: () => {},\n    };\n  }\n\n  return context;\n};\n\nexport default useTheme;\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This hook provides access to the ",(0,o.jsx)(n.code,{children:"theme"})," and ",(0,o.jsx)(n.code,{children:"mode"}),", simplifying their use across the application. The theme object dynamically provides ",(0,o.jsx)(n.code,{children:"colors"})," and ",(0,o.jsx)(n.code,{children:"invertedColors"})," in ",(0,o.jsx)(n.code,{children:"theme"})," object based on the mode (light or dark), reducing the need for repetitive code."]}),"\n",(0,o.jsx)(n.p,{children:"For example, in the CSS:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"const { theme } = useTheme();\nconst main = css`\n  margin: 0.2rem 2rem;\n  display: block;\n  max-height: 10rem;\n  overflow: scroll;\n  overflow-x: hidden;\n  border: 1px solid ${theme.colors.border};\n  border-radius: 0.2rem;\n  color: ${theme.colors.secondaryForeground};\n`;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"theme.colors"})," from ",(0,o.jsx)(n.code,{children:"useTheme"})," is used to set the values for ",(0,o.jsx)(n.code,{children:"theme.colors.border"})," and ",(0,o.jsx)(n.code,{children:"theme.colors.secondaryForeground"}),"."]}),"\n",(0,o.jsxs)(n.h2,{id:"technical-overview-of-usecomponentoverrides",children:["Technical Overview of ",(0,o.jsx)(n.code,{children:"useComponentOverrides"})]}),"\n",(0,o.jsxs)(n.p,{children:["Components utilize the ",(0,o.jsx)(n.code,{children:"useComponentOverrides"})," hook to facilitate various types of customizations:"]}),"\n",(0,o.jsx)(n.h3,{id:"example-styleoverrides-and-classnames",children:"Example: styleOverrides and classNames"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import { useComponentOverrides } from "../../hooks/useComponentOverrides";\n\nexport const MessageBody = ({\n  children,\n  className = "",\n  style = {},\n  ...props\n}) => {\n  const { styleOverrides, classNames } = useComponentOverrides(\n    "MessageBody",\n    className,\n    style\n  );\n\n  return (\n    <Box\n      css={MessageBodyCss}\n      className={appendClassNames("ec-message-body", classNames)}\n      style={styleOverrides}\n      {...props}\n    >\n      <p>{children}</p>\n    </Box>\n  );\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example, it's evident that the className and style properties are dynamically applied based on the values received from styleOverrides for styles and classNames for classes."}),"\n",(0,o.jsx)(n.h3,{id:"example-config-overrides",children:"Example: Config Overrides"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const { styleOverrides, classNames, configOverrides } = useComponentOverrides(\n  "MessageToolbox",\n  className,\n  style\n);\n\n// Extract surfaceItems and menuItems from configOverrides\nconst surfaceItems =\n  configOverrides.optionConfig?.surfaceItems || optionConfig.surfaceItems;\nconst menuItems =\n  configOverrides.optionConfig?.menuItems || optionConfig.menuItems;\n\n// Process surfaceItems and menuItems based on the configuration\nconst menuOptions = menuItems\n  ?.map((item) =>\n    options[item]?.visible\n      ? {\n          id: options[item].id,\n          action: options[item].onClick,\n          label: options[item].label,\n          icon: options[item].iconName,\n        }\n      : null\n  )\n  .filter((option) => option !== null);\n\nconst surfaceOptions = surfaceItems\n  ?.map((item) =>\n    options[item]?.visible\n      ? {\n          id: options[item].id,\n          onClick: options[item].onClick,\n          label: options[item].label,\n          iconName: options[item].iconName,\n          type: options[item].type,\n        }\n      : null\n  )\n  .filter((option) => option !== null);\n\n// Render the options\n{\n  surfaceOptions?.length > 0 && (\n    <SurfaceMenu options={surfaceOptions} size="small" />\n  );\n}\n{\n  menuOptions?.length > 0 && (\n    <Menu\n      size="small"\n      options={menuOptions}\n      tooltip={{ isToolTip: true, position: "top", text: "More" }}\n      useWrapper={false}\n      style={{ top: "auto", bottom: "calc(100% + 2px)" }}\n    />\n  );\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this snippet, ",(0,o.jsx)(n.code,{children:"surfaceItems"})," and ",(0,o.jsx)(n.code,{children:"menuItems"})," are retrieved from ",(0,o.jsx)(n.code,{children:"configOverrides.optionConfig"})," or fall back to default values (",(0,o.jsx)(n.code,{children:"optionConfig.surfaceItems"})," and ",(0,o.jsx)(n.code,{children:"optionConfig.menuItems"}),") when not provided in ",(0,o.jsx)(n.code,{children:"configOverrides"}),". These items are then processed and rendered accordingly."]}),"\n",(0,o.jsx)(n.h3,{id:"example-variant-overrides",children:"Example: Variant Overrides"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const { styleOverrides, classNames, variantOverrides } =\n  useComponentOverrides("MessageHeader");\n\n// Determine the display name variant or default to \'Normal\'\nconst displayNameVariant = variantOverrides || "Normal";\n\n// Render a span element for the message header username\n<Box\n  is="span"\n  css={styles.userName}\n  className={appendClassNames("ec-message-header-username", classNames)}\n  style={\n    displayNameVariant === "colorize"\n      ? { color: getDisplayNameColor(message.u.username) }\n      : null\n  }\n/>;\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this code snippet, variantOverrides provides customization options for the 'MessageHeader' component, influencing how the username is displayed based on the displayNameVariant."}),"\n",(0,o.jsx)(n.h2,{id:"applying-class-names-for-easy-styling",children:"Applying Class Names for Easy Styling"}),"\n",(0,o.jsxs)(n.p,{children:["Components like ",(0,o.jsx)(n.code,{children:"MessageBody"})," are assigned specific class names (",(0,o.jsx)(n.code,{children:"ec-message-body"}),") for simplified CSS application."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"These insights enable straightforward customization of Embedded Chat's source code, ensuring adaptability to diverse project requirements."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);