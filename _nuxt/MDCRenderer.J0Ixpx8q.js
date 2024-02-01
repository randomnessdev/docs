import{d as $,m as Z,B as G,G as J,O as A,a7 as Q,bd as B,be as x,aQ as nn,v as ln,bf as en}from"./entry.1Y4ot2TN.js";class C{constructor(e,o,t){this.property=e,this.normal=o,t&&(this.space=t)}}C.prototype.property={};C.prototype.normal={};C.prototype.space=null;function z(n,e){const o={},t={};let r=-1;for(;++r<n.length;)Object.assign(o,n[r].property),Object.assign(t,n[r].normal);return new C(o,t,e)}function O(n){return n.toLowerCase()}class f{constructor(e,o){this.property=e,this.attribute=o}}f.prototype.space=null;f.prototype.boolean=!1;f.prototype.booleanish=!1;f.prototype.overloadedBoolean=!1;f.prototype.number=!1;f.prototype.commaSeparated=!1;f.prototype.spaceSeparated=!1;f.prototype.commaOrSpaceSeparated=!1;f.prototype.mustUseProperty=!1;f.prototype.defined=!1;let on=0;const u=v(),g=v(),I=v(),l=v(),p=v(),k=v(),m=v();function v(){return 2**++on}const D=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:g,commaOrSpaceSeparated:m,commaSeparated:k,number:l,overloadedBoolean:I,spaceSeparated:p},Symbol.toStringTag,{value:"Module"})),P=Object.keys(D);class M extends f{constructor(e,o,t,r){let a=-1;if(super(e,o),E(this,"space",r),typeof t=="number")for(;++a<P.length;){const i=P[a];E(this,P[a],(t&D[i])===D[i])}}}M.prototype.defined=!0;function E(n,e,o){o&&(n[e]=o)}const tn={}.hasOwnProperty;function S(n){const e={},o={};let t;for(t in n.properties)if(tn.call(n.properties,t)){const r=n.properties[t],a=new M(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(a.mustUseProperty=!0),e[t]=a,o[O(t)]=t,o[O(a.attribute)]=t}return new C(e,o,n.space)}const j=S({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),F=S({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function H(n,e){return e in n?n[e]:e}function _(n,e){return H(n,e.toLowerCase())}const V=S({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_,properties:{xmlns:null,xmlnsXLink:null}}),N=S({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:g,ariaAutoComplete:null,ariaBusy:g,ariaChecked:g,ariaColCount:l,ariaColIndex:l,ariaColSpan:l,ariaControls:p,ariaCurrent:null,ariaDescribedBy:p,ariaDetails:null,ariaDisabled:g,ariaDropEffect:p,ariaErrorMessage:null,ariaExpanded:g,ariaFlowTo:p,ariaGrabbed:g,ariaHasPopup:null,ariaHidden:g,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:p,ariaLevel:l,ariaLive:null,ariaModal:g,ariaMultiLine:g,ariaMultiSelectable:g,ariaOrientation:null,ariaOwns:p,ariaPlaceholder:null,ariaPosInSet:l,ariaPressed:g,ariaReadOnly:g,ariaRelevant:null,ariaRequired:g,ariaRoleDescription:p,ariaRowCount:l,ariaRowIndex:l,ariaRowSpan:l,ariaSelected:g,ariaSetSize:l,ariaSort:null,ariaValueMax:l,ariaValueMin:l,ariaValueNow:l,ariaValueText:null,role:null}}),rn=S({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:_,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:k,acceptCharset:p,accessKey:p,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:p,autoFocus:u,autoPlay:u,blocking:p,capture:u,charSet:null,checked:u,cite:null,className:p,cols:l,colSpan:null,content:null,contentEditable:g,controls:u,controlsList:p,coords:l|k,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:I,draggable:g,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:p,height:l,hidden:u,high:l,href:null,hrefLang:null,htmlFor:p,httpEquiv:p,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:p,itemRef:p,itemScope:u,itemType:p,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:l,manifest:null,max:null,maxLength:l,media:null,method:null,min:null,minLength:l,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:l,pattern:null,ping:p,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:p,required:u,reversed:u,rows:l,rowSpan:l,sandbox:p,scope:null,scoped:u,seamless:u,selected:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:l,sizes:null,slot:null,span:l,spellCheck:g,src:null,srcDoc:null,srcLang:null,srcSet:null,start:l,step:null,style:null,tabIndex:l,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:g,width:l,wrap:null,align:null,aLink:null,archive:p,axis:null,background:null,bgColor:null,border:l,borderColor:null,bottomMargin:l,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:l,leftMargin:l,link:null,longDesc:null,lowSrc:null,marginHeight:l,marginWidth:l,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:l,rules:null,scheme:null,scrolling:g,standby:null,summary:null,text:null,topMargin:l,valueType:null,version:null,vAlign:null,vLink:null,vSpace:l,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:l,security:null,unselectable:null}}),an=S({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:H,properties:{about:m,accentHeight:l,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:l,amplitude:l,arabicForm:null,ascent:l,attributeName:null,attributeType:null,azimuth:l,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:l,by:null,calcMode:null,capHeight:l,className:p,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:l,diffuseConstant:l,direction:null,display:null,dur:null,divisor:l,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:l,enableBackground:null,end:null,event:null,exponent:l,externalResourcesRequired:null,fill:null,fillOpacity:l,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:k,g2:k,glyphName:k,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:l,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:l,horizOriginX:l,horizOriginY:l,id:null,ideographic:l,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:l,k:l,k1:l,k2:l,k3:l,k4:l,kernelMatrix:m,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:l,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:l,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:l,overlineThickness:l,paintOrder:null,panose1:null,path:null,pathLength:l,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:p,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:l,pointsAtY:l,pointsAtZ:l,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:m,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:m,rev:m,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:m,requiredFeatures:m,requiredFonts:m,requiredFormats:m,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:l,specularExponent:l,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:l,strikethroughThickness:l,string:null,stroke:null,strokeDashArray:m,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:l,strokeOpacity:l,strokeWidth:null,style:null,surfaceScale:l,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:m,tabIndex:l,tableValues:null,target:null,targetX:l,targetY:l,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:m,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:l,underlineThickness:l,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:l,values:null,vAlphabetic:l,vMathematical:l,vectorEffect:null,vHanging:l,vIdeographic:l,version:null,vertAdvY:l,vertOriginX:l,vertOriginY:l,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:l,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),un=/^data[-\w.:]+$/i,U=/-[a-z]/g,sn=/[A-Z]/g;function cn(n,e){const o=O(e);let t=e,r=f;if(o in n.normal)return n.property[n.normal[o]];if(o.length>4&&o.slice(0,4)==="data"&&un.test(e)){if(e.charAt(4)==="-"){const a=e.slice(5).replace(U,dn);t="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=e.slice(4);if(!U.test(a)){let i=a.replace(sn,pn);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}r=M}return new r(t,e)}function pn(n){return"-"+n.toLowerCase()}function dn(n){return n.charAt(1).toUpperCase()}const gn=z([F,j,V,N,rn],"html"),Ln=z([F,j,V,N,an],"svg"),R=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],L="default",q=/^@|^v-on:/,W=/^:|^v-bind:/,K=/^v-model/,hn=["select","textarea","input"],mn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),Mn=$({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})}},async setup(n){var r,a;const{mdc:e}=Z().public,o={...e.components.prose&&n.prose!==!1?mn:{},...e.components.map,...G(((a=(r=n.data)==null?void 0:r.mdc)==null?void 0:a.components)||{}),...n.components},t=J(()=>{var s;const i=(((s=n.body)==null?void 0:s.children)||[]).map(c=>c.tag||c.type).filter(c=>!R.includes(c));return Array.from(new Set(i)).sort().join(".")});return await On(n.body,{tags:o}),{tags:o,contentKey:t}},render(n){var h,y,d;const{tags:e,tag:o,body:t,data:r,contentKey:a}=n;if(!t)return null;const i={...r,tags:e},s=o!==!1?T(o||((h=i.component)==null?void 0:h.name)||i.component||"div"):void 0,c=X(t,A,i,i);return s?A(s,{...(y=i.component)==null?void 0:y.props,...this.$attrs,key:a},c):(d=c.default)==null?void 0:d.call(c)}});function fn(n,e,o,t={}){if(n.type==="text")return e(x,n.value);const r=n.tag,a=Y(n,o.tags);if(n.tag==="binding")return yn(n,e,o,t);const i=T(a);typeof i=="object"&&(i.tag=r);const s=vn(n,o);return e(i,s,X(n,e,o,{...t,...s}))}function yn(n,e,o,t={}){var h,y;const r={...t,$route:()=>ln(),$document:o,$doc:o},a=/\.|\[(\d+)\]/,s=((h=n.props)==null?void 0:h.value.trim().split(a).filter(Boolean)).reduce((d,b)=>b in d?typeof d[b]=="function"?d[b]():d[b]:{},r),c=(y=n.props)==null?void 0:y.defaultValue;return e(x,s??c??"")}function X(n,e,o,t){const a=(n.children||[]).reduce((s,c)=>{if(!wn(c))return s[L].push(c),s;const h=xn(c);return s[h]=s[h]||[],c.type==="element"&&s[h].push(...c.children||[]),s},{[L]:[]});return Object.entries(a).reduce((s,[c,h])=>(h.length&&(s[c]=()=>{const y=h.map(d=>fn(d,e,o,t));return Pn(y)}),s),{})}function vn(n,e){const{tag:o="",props:t={}}=n;return Object.keys(t).reduce(function(r,a){if(a==="__ignoreMap")return r;const i=t[a];if(K.test(a)&&!hn.includes(o))return bn(a,i,r,e);if(a==="v-bind")return kn(a,i,r,e);if(q.test(a))return Sn(a,i,r,e);if(W.test(a))return Cn(a,i,r,e);const{attribute:s}=cn(gn,a);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function bn(n,e,o,t){const r=d=>+d,a=d=>d.trim(),i=d=>d,s=n.replace(K,"").split(".").filter(d=>d).reduce((d,b)=>(d[b]=!0,d),{}),c="value",h=s.lazy?"change":"input",y=s.number?r:s.trim?a:i;return o[c]=w(e,t),o.on=o.on||{},o.on[h]=d=>t[e]=y(d),o}function kn(n,e,o,t){const r=w(e,t);return o=Object.assign(o,r),o}function Sn(n,e,o,t){return n=n.replace(q,""),o.on=o.on||{},o.on[n]=()=>w(e,t),o}function Cn(n,e,o,t){return n=n.replace(W,""),o[n]=w(e,t),o}const T=n=>{if(!R.includes(n)&&!(n!=null&&n.render)){const e=Q(B(n),!1);if(typeof e=="object")return e}return n};function w(n,e){const o=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,e);return typeof o>"u"?en(n):o}function xn(n){let e="";for(const o of Object.keys(n.props||{}))if(!(!o.startsWith("#")&&!o.startsWith("v-slot:"))){e=o.split(/[:#]/,2)[1];break}return e||L}function wn(n){return n.tag==="template"}function Pn(n){const e=[];for(const o of n){const t=e[e.length-1];o.type===x&&(t==null?void 0:t.type)===x?t.children=t.children+o.children:e.push(o)}return e}async function On(n,e){if(!n)return;const o=Array.from(new Set(t(n,e)));await Promise.all(o.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const a=T(r);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function t(r,a){const i=r.tag;if(r.type==="text"||i==="binding")return[];const s=Y(r,a.tags),c=[];r.type!=="root"&&!R.includes(s)&&c.push(s);for(const h of r.children||[])c.push(...t(h,a));return c}}function Y(n,e){var t;const o=n.tag;return!o||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?o:e[o]||e[B(o)]||e[nn(n.tag)]||o}export{Mn as _,gn as a,cn as f,R as h,O as n,Ln as s};
