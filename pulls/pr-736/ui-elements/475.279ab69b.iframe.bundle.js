(self.webpackChunk_embeddedchat_ui_elements=self.webpackChunk_embeddedchat_ui_elements||[]).push([[475],{"./src/components/ActionButton/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>ActionButton_ActionButton});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Button=__webpack_require__("./src/components/Button/index.js"),Icon=__webpack_require__("./src/components/Icon/index.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const getSize=({small,large,size})=>small?"1.25rem":large?"1.75rem":size||"1.5rem",ActionButton=(0,react.forwardRef)((({icon,size="medium",color="default",children,iconSize={},...props},ref)=>(0,emotion_react_browser_esm.tZ)(Button.z,_extends({ref,square:!0,size,type:color},props),children,(0,emotion_react_browser_esm.tZ)(Icon.J,{name:icon,size:getSize(iconSize)}))));ActionButton.displayName="ActionButton",ActionButton.propTypes={icon:prop_types_default().string,children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),size:prop_types_default().oneOf(["small","medium","large"])},ActionButton.__docgenInfo={description:"",methods:[],displayName:"ActionButton",props:{size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},color:{defaultValue:{value:"'default'",computed:!1},required:!1},iconSize:{defaultValue:{value:"{}",computed:!1},required:!1},icon:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1}}};const ActionButton_ActionButton=ActionButton},"./src/components/Avatar/Avatar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var react=__webpack_require__("../../node_modules/react/index.js"),useComponentOverrides=__webpack_require__("./src/hooks/useComponentOverrides.js"),hooks=__webpack_require__("./src/hooks/index.js"),appendClassNames=__webpack_require__("./src/lib/appendClassNames.js"),Box=__webpack_require__("./src/components/Box/index.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const avatarContainerStyles={avatarContainer:{name:"6ii2ik",styles:"display:inline-flex;vertical-align:middle;cursor:pointer"}};function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const AvatarContainer=({title,children,className="",style={},...props})=>{const{classNames,styleOverrides}=(0,useComponentOverrides.Z)("AvatarContainer",className,style);return props.className=(0,appendClassNames.k)("ec-avatar-container",[classNames]),props.style=styleOverrides,(0,emotion_react_browser_esm.tZ)(Box.x,_extends({is:"figure",css:avatarContainerStyles.avatarContainer,"aria-label":title},props),children)};AvatarContainer.displayName="AvatarContainer",AvatarContainer.__docgenInfo={description:"",methods:[],displayName:"AvatarContainer",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};var Icon=__webpack_require__("./src/components/Icon/index.js");function Avatar_extends(){return Avatar_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Avatar_extends.apply(this,arguments)}const Avatar=({size="2.25rem",className="",style={},url,fallbackIcon="avatar",onClick=()=>{},...props})=>{const[imgError,setImgError]=(0,react.useState)(!1),{theme}=(0,hooks.Fg)(),styles=(theme=>({imageAvatar:size=>(0,emotion_react_browser_esm.iv)("border-radius:",theme.radius,";height:",size,";width:",size,";",""),fallbackContainer:size=>(0,emotion_react_browser_esm.iv)("display:flex;justify-content:center;align-items:center;background-color:",theme.colors.primary,";color:",theme.colors.primaryForeground,";border-radius:",theme.radius,";height:",size,";width:",size,";","")}))(theme),{classNames,styleOverrides}=(0,useComponentOverrides.Z)("Avatar",className,style);return(0,emotion_react_browser_esm.tZ)(AvatarContainer,Avatar_extends({size},props),imgError?(0,emotion_react_browser_esm.tZ)(Box.x,{css:styles.fallbackContainer(size)},(0,emotion_react_browser_esm.tZ)(Icon.J,{name:fallbackIcon,size:"1.25rem"})):(0,emotion_react_browser_esm.tZ)("img",{role:"presentation",src:`${url}`,css:styles.imageAvatar(size),className:classNames,style:styleOverrides,onError:()=>setImgError(!0),onClick}))};Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{defaultValue:{value:"'2.25rem'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1},fallbackIcon:{defaultValue:{value:"'avatar'",computed:!1},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},required:!1}}}},"./src/components/Avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>_Avatar__WEBPACK_IMPORTED_MODULE_0__.q});var _Avatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/Avatar.js")},"./src/components/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Box_Box});var react=__webpack_require__("../../node_modules/react/index.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useComponentOverrides=__webpack_require__("./src/hooks/useComponentOverrides.js");const Box_style={box:{name:"w4tggu",styles:"margin:0;padding:0;border-width:0;box-sizing:border-box;border-style:solid;border-color:currentColor;outline:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;flex:0 1 auto"}};var emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Box=(0,react.forwardRef)((({children=null,className="",style={},is="div",...props},ref)=>{const{classNames,styleOverrides}=(0,useComponentOverrides.Z)("Box"),Element=`${is}`;return(0,emotion_react_browser_esm.tZ)(Element,_extends({ref,css:Box_style.box,className:`ec-box ${className} ${classNames}`,style:{...styleOverrides,...style}},props),children)}));Box.propTypes={children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),className:prop_types_default().string,style:prop_types_default().object,is:prop_types_default().string},Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},is:{defaultValue:{value:"'div'",computed:!1},description:"",type:{name:"string"},required:!1}}};const Box_Box=Box},"./src/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.Z});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.js")},"./src/components/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button_Button});__webpack_require__("../../node_modules/react/index.js");var prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useComponentOverrides=__webpack_require__("./src/hooks/useComponentOverrides.js"),emotion_react_browser_esm=__webpack_require__("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const getSquareSize=size=>"small"===size?"1.25rem":"large"===size?"2.75rem":"2rem",Button_styles=theme=>({main:(type,size)=>(0,emotion_react_browser_esm.iv)("cursor:pointer;display:inline-block;background-color:",theme.colors[type]||"currentColor",";color:",theme.colors[`${type}Foreground`]||"currentColor",";border:none;font-size:0.875rem;font-weight:500;letter-spacing:0;line-height:1.25rem;min-width:80px;outline:none;overflow:hidden;padding-block:calc(18px - 0.625rem);padding:calc(18px - 0.625rem) 14px;padding-inline:14px;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;align-self:flex-start;border-radius:",theme.radius,";&.ec-button--small{font-size:0.75rem;font-weight:700;letter-spacing:0;line-height:1rem;min-width:56px;padding-block:calc(12px - 0.5rem);padding:calc(12px - 0.5rem) 6px;padding-inline:6px;}&.ec-button--large{font-size:1rem;font-weight:400;letter-spacing:0;line-height:1.5rem;min-width:96px;padding-block:calc(22px - 0.75rem);padding:calc(22px - 0.75rem) 22px;padding-inline:22px;}&.ec-button-square{display:inline-flex;align-items:center;justify-content:center;width:",getSquareSize(size),";min-width:",getSquareSize(size),";height:",getSquareSize(size),";padding:0;display:flex;justify-content:center;align-items:center;flex-shrink:0;}&:hover{filter:brightness(90%);}&.disabled:not(.ghost):hover{filter:none;}&.disabled:not(.ghost){background-color:",theme.colors.muted,";color:",theme.colors.mutedForeground,";border:none;cursor:not-allowed;}&.ghost{background:none;color:",theme.colors[`${type}`]||theme.colors.accentForeground,";border:none;}&.disabled.ghost{color:",theme.colors.mutedForeground,";border:none;background:none;cursor:not-allowed;}&.ghost:not(.disabled):hover{background:",theme.colors.accent,";}","")});var hooks=__webpack_require__("./src/hooks/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Button=({children,type="primary",className="",style={},size="medium",square=!1,ghost=!1,disabled=!1,...props})=>{const{classNames,styleOverrides}=(0,useComponentOverrides.Z)("Button"),{theme}=(0,hooks.Fg)(),styles=Button_styles(theme);return(0,emotion_react_browser_esm.tZ)("button",_extends({type:"button",css:styles.main(type,size),className:`ec-button ec-button--${size} ${square?"ec-button-square":""} ${ghost?"ghost":""} ${disabled?"disabled":""} ${className} ${classNames}`,style:{...styleOverrides,...style}},props),children)};Button.displayName="Button",Button.propTypes={children:prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().node),prop_types_default().node]),size:prop_types_default().oneOf(["small","medium","large"]),className:prop_types_default().string,style:prop_types_default().object,square:prop_types_default().bool,ghost:prop_types_default().bool,disabled:prop_types_default().bool},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'primary'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},square:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},ghost:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1}}};const Button_Button=Button},"./src/context/ToastContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("../../node_modules/react/index.js").createContext)()},"./src/hooks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Fg:()=>_useTheme__WEBPACK_IMPORTED_MODULE_1__.Z,uY:()=>_useComponentOverrides__WEBPACK_IMPORTED_MODULE_0__.Z});var _useComponentOverrides__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/useComponentOverrides.js"),_useTheme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useTheme.js");__webpack_require__("./src/hooks/useToastBarDispatch.js")},"./src/hooks/useToastBarDispatch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_context_ToastContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/context/ToastContext.js");const __WEBPACK_DEFAULT_EXPORT__=()=>{const{dispatchToast}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_ToastContext__WEBPACK_IMPORTED_MODULE_1__.Z);return dispatchToast}},"./src/lib/appendClassNames.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>appendClassNames});const appendClassNames=(className,currentClassNames)=>{return value=currentClassNames,Array.isArray(value)?[className,...currentClassNames]:currentClassNames?`${className} ${currentClassNames}`:className;var value}},"./src/lib/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$n:()=>lighten,Fq:()=>alpha,_j:()=>darken});var color__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);function darken(color,amount=0){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).darken(amount).hexa()}function lighten(color,amount=0){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).lighten(amount).hexa()}function alpha(color,amount){return(color=color__WEBPACK_IMPORTED_MODULE_0___default()(color)).alpha(amount).hexa()}},"../../node_modules/color-string/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var colorNames=__webpack_require__("../../node_modules/color-name/index.js"),swizzle=__webpack_require__("../../node_modules/simple-swizzle/index.js"),hasOwnProperty=Object.hasOwnProperty,reverseNames=Object.create(null);for(var name in colorNames)hasOwnProperty.call(colorNames,name)&&(reverseNames[colorNames[name]]=name);var cs=module.exports={to:{},get:{}};function clamp(num,min,max){return Math.min(Math.max(min,num),max)}function hexDouble(num){var str=Math.round(num).toString(16).toUpperCase();return str.length<2?"0"+str:str}cs.get=function(string){var val,model;switch(string.substring(0,3).toLowerCase()){case"hsl":val=cs.get.hsl(string),model="hsl";break;case"hwb":val=cs.get.hwb(string),model="hwb";break;default:val=cs.get.rgb(string),model="rgb"}return val?{model,value:val}:null},cs.get.rgb=function(string){if(!string)return null;var match,i,hexAlpha,rgb=[0,0,0,1];if(match=string.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(hexAlpha=match[2],match=match[1],i=0;i<3;i++){var i2=2*i;rgb[i]=parseInt(match.slice(i2,i2+2),16)}hexAlpha&&(rgb[3]=parseInt(hexAlpha,16)/255)}else if(match=string.match(/^#([a-f0-9]{3,4})$/i)){for(hexAlpha=(match=match[1])[3],i=0;i<3;i++)rgb[i]=parseInt(match[i]+match[i],16);hexAlpha&&(rgb[3]=parseInt(hexAlpha+hexAlpha,16)/255)}else if(match=string.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(i=0;i<3;i++)rgb[i]=parseInt(match[i+1],0);match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}else{if(!(match=string.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(match=string.match(/^(\w+)$/))?"transparent"===match[1]?[0,0,0,0]:hasOwnProperty.call(colorNames,match[1])?((rgb=colorNames[match[1]])[3]=1,rgb):null:null;for(i=0;i<3;i++)rgb[i]=Math.round(2.55*parseFloat(match[i+1]));match[4]&&(match[5]?rgb[3]=.01*parseFloat(match[4]):rgb[3]=parseFloat(match[4]))}for(i=0;i<3;i++)rgb[i]=clamp(rgb[i],0,255);return rgb[3]=clamp(rgb[3],0,1),rgb},cs.get.hsl=function(string){if(!string)return null;var match=string.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.get.hwb=function(string){if(!string)return null;var match=string.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(match){var alpha=parseFloat(match[4]);return[(parseFloat(match[1])%360+360)%360,clamp(parseFloat(match[2]),0,100),clamp(parseFloat(match[3]),0,100),clamp(isNaN(alpha)?1:alpha,0,1)]}return null},cs.to.hex=function(){var rgba=swizzle(arguments);return"#"+hexDouble(rgba[0])+hexDouble(rgba[1])+hexDouble(rgba[2])+(rgba[3]<1?hexDouble(Math.round(255*rgba[3])):"")},cs.to.rgb=function(){var rgba=swizzle(arguments);return rgba.length<4||1===rgba[3]?"rgb("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+")":"rgba("+Math.round(rgba[0])+", "+Math.round(rgba[1])+", "+Math.round(rgba[2])+", "+rgba[3]+")"},cs.to.rgb.percent=function(){var rgba=swizzle(arguments),r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return rgba.length<4||1===rgba[3]?"rgb("+r+"%, "+g+"%, "+b+"%)":"rgba("+r+"%, "+g+"%, "+b+"%, "+rgba[3]+")"},cs.to.hsl=function(){var hsla=swizzle(arguments);return hsla.length<4||1===hsla[3]?"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)":"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+hsla[3]+")"},cs.to.hwb=function(){var hwba=swizzle(arguments),a="";return hwba.length>=4&&1!==hwba[3]&&(a=", "+hwba[3]),"hwb("+hwba[0]+", "+hwba[1]+"%, "+hwba[2]+"%"+a+")"},cs.to.keyword=function(rgb){return reverseNames[rgb.slice(0,3)]}},"../../node_modules/color/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const colorString=__webpack_require__("../../node_modules/color-string/index.js"),convert=__webpack_require__("../../node_modules/color-convert/index.js"),skippedModels=["keyword","gray","hex"],hashedModelKeys={};for(const model of Object.keys(convert))hashedModelKeys[[...convert[model].labels].sort().join("")]=model;const limiters={};function Color(object,model){if(!(this instanceof Color))return new Color(object,model);if(model&&model in skippedModels&&(model=null),model&&!(model in convert))throw new Error("Unknown model: "+model);let i,channels;if(null==object)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(object instanceof Color)this.model=object.model,this.color=[...object.color],this.valpha=object.valpha;else if("string"==typeof object){const result=colorString.get(object);if(null===result)throw new Error("Unable to parse color from string: "+object);this.model=result.model,channels=convert[this.model].channels,this.color=result.value.slice(0,channels),this.valpha="number"==typeof result.value[channels]?result.value[channels]:1}else if(object.length>0){this.model=model||"rgb",channels=convert[this.model].channels;const newArray=Array.prototype.slice.call(object,0,channels);this.color=zeroArray(newArray,channels),this.valpha="number"==typeof object[channels]?object[channels]:1}else if("number"==typeof object)this.model="rgb",this.color=[object>>16&255,object>>8&255,255&object],this.valpha=1;else{this.valpha=1;const keys=Object.keys(object);"alpha"in object&&(keys.splice(keys.indexOf("alpha"),1),this.valpha="number"==typeof object.alpha?object.alpha:0);const hashedKeys=keys.sort().join("");if(!(hashedKeys in hashedModelKeys))throw new Error("Unable to parse color from object: "+JSON.stringify(object));this.model=hashedModelKeys[hashedKeys];const{labels}=convert[this.model],color=[];for(i=0;i<labels.length;i++)color.push(object[labels[i]]);this.color=zeroArray(color)}if(limiters[this.model])for(channels=convert[this.model].channels,i=0;i<channels;i++){const limit=limiters[this.model][i];limit&&(this.color[i]=limit(this.color[i]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}Color.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(places){let self=this.model in colorString.to?this:this.rgb();self=self.round("number"==typeof places?places:1);const args=1===self.valpha?self.color:[...self.color,this.valpha];return colorString.to[self.model](args)},percentString(places){const self=this.rgb().round("number"==typeof places?places:1),args=1===self.valpha?self.color:[...self.color,this.valpha];return colorString.to.rgb.percent(args)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const result={},{channels}=convert[this.model],{labels}=convert[this.model];for(let i=0;i<channels;i++)result[labels[i]]=this.color[i];return 1!==this.valpha&&(result.alpha=this.valpha),result},unitArray(){const rgb=this.rgb().color;return rgb[0]/=255,rgb[1]/=255,rgb[2]/=255,1!==this.valpha&&rgb.push(this.valpha),rgb},unitObject(){const rgb=this.rgb().object();return rgb.r/=255,rgb.g/=255,rgb.b/=255,1!==this.valpha&&(rgb.alpha=this.valpha),rgb},round(places){return places=Math.max(places||0,0),new Color([...this.color.map(roundToPlace(places)),this.valpha],this.model)},alpha(value){return void 0!==value?new Color([...this.color,Math.max(0,Math.min(1,value))],this.model):this.valpha},red:getset("rgb",0,maxfn(255)),green:getset("rgb",1,maxfn(255)),blue:getset("rgb",2,maxfn(255)),hue:getset(["hsl","hsv","hsl","hwb","hcg"],0,(value=>(value%360+360)%360)),saturationl:getset("hsl",1,maxfn(100)),lightness:getset("hsl",2,maxfn(100)),saturationv:getset("hsv",1,maxfn(100)),value:getset("hsv",2,maxfn(100)),chroma:getset("hcg",1,maxfn(100)),gray:getset("hcg",2,maxfn(100)),white:getset("hwb",1,maxfn(100)),wblack:getset("hwb",2,maxfn(100)),cyan:getset("cmyk",0,maxfn(100)),magenta:getset("cmyk",1,maxfn(100)),yellow:getset("cmyk",2,maxfn(100)),black:getset("cmyk",3,maxfn(100)),x:getset("xyz",0,maxfn(95.047)),y:getset("xyz",1,maxfn(100)),z:getset("xyz",2,maxfn(108.833)),l:getset("lab",0,maxfn(100)),a:getset("lab",1),b:getset("lab",2),keyword(value){return void 0!==value?new Color(value):convert[this.model].keyword(this.color)},hex(value){return void 0!==value?new Color(value):colorString.to.hex(this.rgb().round().color)},hexa(value){if(void 0!==value)return new Color(value);const rgbArray=this.rgb().round().color;let alphaHex=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===alphaHex.length&&(alphaHex="0"+alphaHex),colorString.to.hex(rgbArray)+alphaHex},rgbNumber(){const rgb=this.rgb().color;return(255&rgb[0])<<16|(255&rgb[1])<<8|255&rgb[2]},luminosity(){const rgb=this.rgb().color,lum=[];for(const[i,element]of rgb.entries()){const chan=element/255;lum[i]=chan<=.04045?chan/12.92:((chan+.055)/1.055)**2.4}return.2126*lum[0]+.7152*lum[1]+.0722*lum[2]},contrast(color2){const lum1=this.luminosity(),lum2=color2.luminosity();return lum1>lum2?(lum1+.05)/(lum2+.05):(lum2+.05)/(lum1+.05)},level(color2){const contrastRatio=this.contrast(color2);return contrastRatio>=7?"AAA":contrastRatio>=4.5?"AA":""},isDark(){const rgb=this.rgb().color;return(2126*rgb[0]+7152*rgb[1]+722*rgb[2])/1e4<128},isLight(){return!this.isDark()},negate(){const rgb=this.rgb();for(let i=0;i<3;i++)rgb.color[i]=255-rgb.color[i];return rgb},lighten(ratio){const hsl=this.hsl();return hsl.color[2]+=hsl.color[2]*ratio,hsl},darken(ratio){const hsl=this.hsl();return hsl.color[2]-=hsl.color[2]*ratio,hsl},saturate(ratio){const hsl=this.hsl();return hsl.color[1]+=hsl.color[1]*ratio,hsl},desaturate(ratio){const hsl=this.hsl();return hsl.color[1]-=hsl.color[1]*ratio,hsl},whiten(ratio){const hwb=this.hwb();return hwb.color[1]+=hwb.color[1]*ratio,hwb},blacken(ratio){const hwb=this.hwb();return hwb.color[2]+=hwb.color[2]*ratio,hwb},grayscale(){const rgb=this.rgb().color,value=.3*rgb[0]+.59*rgb[1]+.11*rgb[2];return Color.rgb(value,value,value)},fade(ratio){return this.alpha(this.valpha-this.valpha*ratio)},opaquer(ratio){return this.alpha(this.valpha+this.valpha*ratio)},rotate(degrees){const hsl=this.hsl();let hue=hsl.color[0];return hue=(hue+degrees)%360,hue=hue<0?360+hue:hue,hsl.color[0]=hue,hsl},mix(mixinColor,weight){if(!mixinColor||!mixinColor.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof mixinColor);const color1=mixinColor.rgb(),color2=this.rgb(),p=void 0===weight?.5:weight,w=2*p-1,a=color1.alpha()-color2.alpha(),w1=((w*a==-1?w:(w+a)/(1+w*a))+1)/2,w2=1-w1;return Color.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue(),color1.alpha()*p+color2.alpha()*(1-p))}};for(const model of Object.keys(convert)){if(skippedModels.includes(model))continue;const{channels}=convert[model];Color.prototype[model]=function(...args){return this.model===model?new Color(this):args.length>0?new Color(args,model):new Color([...(value=convert[this.model][model].raw(this.color),Array.isArray(value)?value:[value]),this.valpha],model);var value},Color[model]=function(...args){let color=args[0];return"number"==typeof color&&(color=zeroArray(args,channels)),new Color(color,model)}}function roundToPlace(places){return function(number){return function roundTo(number,places){return Number(number.toFixed(places))}(number,places)}}function getset(model,channel,modifier){model=Array.isArray(model)?model:[model];for(const m of model)(limiters[m]||(limiters[m]=[]))[channel]=modifier;return model=model[0],function(value){let result;return void 0!==value?(modifier&&(value=modifier(value)),result=this[model](),result.color[channel]=value,result):(result=this[model]().color[channel],modifier&&(result=modifier(result)),result)}}function maxfn(max){return function(v){return Math.max(0,Math.min(max,v))}}function zeroArray(array,length){for(let i=0;i<length;i++)"number"!=typeof array[i]&&(array[i]=0);return array}module.exports=Color},"../../node_modules/simple-swizzle/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var isArrayish=__webpack_require__("../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js"),concat=Array.prototype.concat,slice=Array.prototype.slice,swizzle=module.exports=function swizzle(args){for(var results=[],i=0,len=args.length;i<len;i++){var arg=args[i];isArrayish(arg)?results=concat.call(results,slice.call(arg)):results.push(arg)}return results};swizzle.wrap=function(fn){return function(){return fn(swizzle(arguments))}}},"../../node_modules/simple-swizzle/node_modules/is-arrayish/index.js":module=>{module.exports=function isArrayish(obj){return!(!obj||"string"==typeof obj)&&(obj instanceof Array||Array.isArray(obj)||obj.length>=0&&(obj.splice instanceof Function||Object.getOwnPropertyDescriptor(obj,obj.length-1)&&"String"!==obj.constructor.name))}}}]);