"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[7375],{67375:(yn,Be,l)=>{l.d(Be,{Z:()=>on});var a=l(67294),T=l(97132),g=l(68547),ne=l(185),je=l(80831),ae=l(49656),se=l(23724),Ve=l(38683),j=l(23998),re=l(47292),Ze=l(73825);const Ue=(e,t,n="en")=>{if(t&&typeof t=="number"){const r=t/24/60/60/1e3;return(0,re.format)((0,re.addDays)(new Date(e),r),"PPP",{locale:Ze[n]})}return"Unlimited"};var L=l(53209);const Ke=L.Ry().shape({name:L.Z_(g.translatedErrors.string).required(g.translatedErrors.required),type:L.Z_(g.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(g.translatedErrors.required),description:L.Z_().nullable(),lifespan:L.Rx().integer().min(0).nullable().defined(g.translatedErrors.required)});var w=l(96486);const oe=e=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.keys(e).map(n=>({apiId:n,label:n.split("::")[1],controllers:(0,w.flatten)(Object.keys(e[n].controllers).map(r=>({controller:r,actions:(0,w.flatten)(e[n].controllers[r].map(o=>{const d=`${n}.${r}.${o}`;return n.includes("api::")&&t.allActionsIds.push(d),{action:o,actionId:d}}))})))})),t};var ie=l(67838),le=l(49066),$=l(29728),de=l(85018),We=l(45697),s=l.n(We);const F=({apiTokenName:e})=>{const{formatMessage:t}=(0,T.useIntl)();return(0,g.useFocusWhenNavigate)(),a.createElement(ne.o,{"aria-busy":"true"},a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(ie.T,{primaryAction:a.createElement($.z,{disabled:!0,startIcon:a.createElement(de.Z,null),type:"button",size:"L"},t({id:"global.save",defaultMessage:"Save"})),title:e||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),a.createElement(le.D,null,a.createElement(g.LoadingIndicatorPage,null)))};F.defaultProps={apiTokenName:null},F.propTypes={apiTokenName:s().string};const $e=F;var Fe=l(67109),O=l(7681),ce=l(30815),He=l(61931),Ge=(e,t,n)=>new Promise((r,o)=>{var d=m=>{try{u(n.next(m))}catch(y){o(y)}},i=m=>{try{u(n.throw(m))}catch(y){o(y)}},u=m=>m.done?r(m.value):Promise.resolve(m.value).then(d,i);u((n=n.apply(e,t)).next())});const H=({onRegenerate:e,idToRegenerate:t})=>{const{formatMessage:n}=(0,T.useIntl)(),[r,o]=(0,a.useState)(!1),{regenerateData:d,isLoadingConfirmation:i}=(0,He.rW)(t,e),u=()=>Ge(void 0,null,function*(){d(),o(!1)});return a.createElement(a.Fragment,null,a.createElement($.z,{startIcon:a.createElement(ce.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>o(!0),name:"regenerate"},n({id:"Settings.apiTokens.regenerate",defaultMessage:"Regenerate"})),a.createElement(g.ConfirmDialog,{bodyText:{id:"Settings.apiTokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:a.createElement(ce.Z,null),isConfirmButtonLoading:i,isOpen:r,onToggleDialog:()=>o(!1),onConfirm:u,leftButtonText:{id:"Settings.apiTokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.apiTokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.apiTokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};H.defaultProps={onRegenerate(){}},H.propTypes={onRegenerate:s().func,idToRegenerate:s().oneOfType([s().number,s().string]).isRequired};const pe=H;var ze=Object.defineProperty,Ye=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,me=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&me(e,n,t[n]);if(ue)for(var n of ue(t))Je.call(t,n)&&me(e,n,t[n]);return e},_e=(e,t)=>Ye(e,Qe(t));const G=({apiToken:e,setApiToken:t,canEditInputs:n,canRegenerate:r,isSubmitting:o})=>{const{formatMessage:d}=(0,T.useIntl)(),i=u=>{t(_e(qe({},e),{accessKey:u}))};return a.createElement(ie.T,{title:(e==null?void 0:e.name)||d({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"}),primaryAction:n?a.createElement(O.K,{horizontal:!0,spacing:2},r&&(e==null?void 0:e.id)&&a.createElement(pe,{onRegenerate:i,idToRegenerate:e==null?void 0:e.id}),a.createElement($.z,{disabled:o,loading:o,startIcon:a.createElement(de.Z,null),type:"submit",size:"S"},d({id:"global.save",defaultMessage:"Save"}))):r&&(e==null?void 0:e.id)&&a.createElement(pe,{onRegenerate:i,idToRegenerate:e==null?void 0:e.id}),navigationAction:a.createElement(g.Link,{startIcon:a.createElement(Fe.Z,null),to:"/settings/api-tokens"},d({id:"global.back",defaultMessage:"Back"}))})};G.propTypes={apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),canEditInputs:s().bool.isRequired,canRegenerate:s().bool.isRequired,setApiToken:s().func.isRequired,isSubmitting:s().bool.isRequired},G.defaultProps={apiToken:void 0};const et=G;var tt=l(12028),nt=l(65186),at=l(74855),st=l(69427);const z=({apiToken:e})=>{const{formatMessage:t}=(0,T.useIntl)(),n=(0,g.useNotification)(),{trackUsage:r}=(0,g.useTracking)(),o=(0,a.useRef)(r);return a.createElement(g.ContentBox,{endAction:e&&a.createElement("span",{style:{alignSelf:"start"}},a.createElement(at.CopyToClipboard,{onCopy:()=>{o.current("didCopyTokenKey"),n({type:"success",message:{id:"Settings.apiTokens.notification.copied"}})},text:e},a.createElement(tt.h,{label:t({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:a.createElement(nt.Z,null),style:{padding:0,height:"1rem"}}))),title:e||t({id:"Settings.apiTokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:t(e?{id:"Settings.apiTokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.apiTokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:a.createElement(st.Z,null),iconBackground:"neutral100"})};z.defaultProps={apiToken:null},z.propTypes={apiToken:s().string};const rt=z;var C=l(35961),Y=l(11276),b=l(74571),ge=l(91216),R=l(82562),ot=l(64256),it=l(16364),h=l(72735);const Q=({errors:e,onChange:t,canEditInputs:n,isCreating:r,values:o,apiToken:d,onDispatch:i,setHasChangedPermissions:u})=>{var m,y,M,S;const{formatMessage:f}=(0,T.useIntl)(),[B]=(0,g.usePersistentState)("strapi-admin-language","en"),I=({target:{value:c}})=>{u(!1),c==="full-access"&&i({type:"SELECT_ALL_ACTIONS"}),c==="read-only"&&i({type:"ON_CHANGE_READ_ONLY"})};return a.createElement(C.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(O.K,{spacing:4},a.createElement(h.Z,{variant:"delta",as:"h2"},f({id:"global.details",defaultMessage:"Details"})),a.createElement(Y.r,{gap:5},a.createElement(b.P,{key:"name",col:6,xs:12},a.createElement(it.o,{name:"name",error:e.name?f((m=e.name)!=null&&m.id?e.name:{id:e.name,defaultMessage:e.name}):null,label:f({id:"Settings.apiTokens.form.name",defaultMessage:"Name"}),onChange:t,value:o.name,disabled:!n,required:!0})),a.createElement(b.P,{key:"description",col:6,xs:12},a.createElement(ot.g,{label:f({id:"Settings.apiTokens.form.description",defaultMessage:"Description"}),name:"description",error:e.description?f((y=e.description)!=null&&y.id?e.description:{id:e.description,defaultMessage:e.description}):null,onChange:t,disabled:!n},o.description)),a.createElement(b.P,{key:"lifespan",col:6,xs:12},a.createElement(ge.P,{name:"lifespan",label:f({id:"Settings.apiTokens.form.duration",defaultMessage:"Token duration"}),value:o.lifespan!==null?o.lifespan:"0",error:e.lifespan?f((M=e.lifespan)!=null&&M.id?e.lifespan:{id:e.lifespan,defaultMessage:e.lifespan}):null,onChange:c=>{t({target:{name:"lifespan",value:c}})},required:!0,disabled:!r,placeholder:"Select"},a.createElement(R.W,{value:"604800000"},f({id:"Settings.apiTokens.duration.7-days",defaultMessage:"7 days"})),a.createElement(R.W,{value:"2592000000"},f({id:"Settings.apiTokens.duration.30-days",defaultMessage:"30 days"})),a.createElement(R.W,{value:"7776000000"},f({id:"Settings.apiTokens.duration.90-days",defaultMessage:"90 days"})),a.createElement(R.W,{value:"0"},f({id:"Settings.apiTokens.duration.unlimited",defaultMessage:"Unlimited"}))),a.createElement(h.Z,{variant:"pi",textColor:"neutral600"},!r&&`${f({id:"Settings.apiTokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${Ue(d==null?void 0:d.createdAt,parseInt(o.lifespan,10),B)}`)),a.createElement(b.P,{key:"type",col:6,xs:12},a.createElement(ge.P,{name:"type",label:f({id:"Settings.apiTokens.form.type",defaultMessage:"Token type"}),value:o==null?void 0:o.type,error:e.type?f((S=e.type)!=null&&S.id?e.type:{id:e.type,defaultMessage:e.type}):null,onChange:c=>{I({target:{value:c}}),t({target:{name:"type",value:c}})},placeholder:"Select",required:!0,disabled:!n},a.createElement(R.W,{value:"read-only"},f({id:"Settings.apiTokens.types.read-only",defaultMessage:"Read-only"})),a.createElement(R.W,{value:"full-access"},f({id:"Settings.apiTokens.types.full-access",defaultMessage:"Full access"})),a.createElement(R.W,{value:"custom"},f({id:"Settings.apiTokens.types.custom",defaultMessage:"Custom"})))))))};Q.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},Q.defaultProps={errors:{},apiToken:{}};const lt=Q;var dt=l(48734),ct=l(74756),pt=l(63081),fe=l(36213),ut=l(46273),mt=l(78114),V=l(71893),ye=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,yt=(e,t)=>{var n={};for(var r in e)gt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ye)for(var r of ye(e))t.indexOf(r)<0&&ft.call(e,r)&&(n[r]=e[r]);return n};const ve=(0,a.createContext)({}),Ee=e=>{var t=e,{children:n}=t,r=yt(t,["children"]);return a.createElement(ve.Provider,{value:r},n)},X=()=>(0,a.useContext)(ve);Ee.propTypes={children:s().node.isRequired};const he=V.css`
  background: ${e=>e.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,vt=(0,V.default)(C.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${e=>e.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${e=>e.isActive&&he}
  &:hover {
    ${he}
  }
`,Et=V.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,J=({controllers:e,label:t,orderNumber:n,disabled:r,onExpanded:o,indexExpandendCollapsedContent:d})=>{const{value:{onChangeSelectAll:i,onChange:u,selectedActions:m,setSelectedAction:y,selectedAction:M}}=X(),[S,f]=(0,a.useState)(!1),B=()=>{f(c=>!c),o(n)};(0,a.useEffect)(()=>{d!==null&&d!==n&&S&&f(!1)},[d,n,S]);const I=c=>c===M;return a.createElement(dt.U,{expanded:S,onToggle:B,variant:n%2?"primary":"secondary"},a.createElement(ct.B,{title:(0,w.capitalize)(t)}),a.createElement(pt.v,null,e==null?void 0:e.map(c=>{const k=c.actions.every(E=>m.includes(E.actionId)),v=c.actions.some(E=>m.includes(E.actionId));return a.createElement(C.x,{key:`${t}.${c==null?void 0:c.controller}`},a.createElement(ut.k,{justifyContent:"space-between",alignItems:"center",padding:4},a.createElement(C.x,{paddingRight:4},a.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},c==null?void 0:c.controller)),a.createElement(Et,null),a.createElement(C.x,{paddingLeft:4},a.createElement(fe.X,{value:k,indeterminate:!k&&v,onValueChange:()=>{i({target:{value:[...c.actions]}})},disabled:r},"Select all"))),a.createElement(Y.r,{gap:4,padding:4},(c==null?void 0:c.actions)&&(c==null?void 0:c.actions.map(E=>a.createElement(b.P,{col:6,key:E.actionId},a.createElement(vt,{isActive:I(E.actionId),padding:2,hasRadius:!0},a.createElement(fe.X,{value:m.includes(E.actionId),name:E.actionId,onValueChange:()=>{u({target:{value:E.actionId}})},disabled:r},E.action),a.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>y({target:{value:E.actionId}}),style:{display:"inline-flex",alignItems:"center"}},a.createElement(mt.Z,null))))))))})))};J.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},J.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const ht=J;var Pt=Object.defineProperty,Z=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Tt=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Oe(e,n,t[n]);if(Z)for(var n of Z(t))Te.call(t,n)&&Oe(e,n,t[n]);return e},Ot=(e,t)=>{var n={};for(var r in e)Pe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))t.indexOf(r)<0&&Te.call(e,r)&&(n[r]=e[r]);return n};const q=e=>{var t=e,{section:n}=t,r=Ot(t,["section"]);const[o,d]=(0,a.useState)(null),i=u=>d(u);return a.createElement(C.x,{padding:4,background:"neutral0"},n&&n.map((u,m)=>a.createElement(ht,Tt({key:u.apiId,label:u.label,controllers:u.controllers,orderNumber:m,indexExpandendCollapsedContent:o,onExpanded:i,name:u.apiId},r))))};q.defaultProps={section:null},q.propTypes={section:s().arrayOf(s().object)};const Ct=q;var St=l(35161),At=l.n(St),bt=l(13217),Rt=l.n(bt);const It=e=>{switch(e){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},kt=(0,V.default)(C.x)`
  margin: -1px;
  border-radius: ${({theme:e})=>e.spaces[1]} 0 0 ${({theme:e})=>e.spaces[1]};
`;function _({route:e}){const{formatMessage:t}=(0,T.useIntl)(),{method:n,handler:r,path:o}=e,d=o?Rt()(o.split("/")):[],[i="",u=""]=r?r.split("."):[],m=It(e.method);return a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h3"},t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",a.createElement("span",null,i),a.createElement(h.Z,{variant:"delta",textColor:"primary600"},".",u)),a.createElement(O.K,{horizontal:!0,hasRadius:!0,background:"neutral0",borderColor:"neutral200",spacing:0},a.createElement(kt,{background:m.background,borderColor:m.border,padding:2},a.createElement(h.Z,{fontWeight:"bold",textColor:m.text},n)),a.createElement(C.x,{paddingLeft:2,paddingRight:2},At()(d,y=>a.createElement(h.Z,{key:y,textColor:y.includes(":")?"neutral600":"neutral900"},"/",y)))))}_.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},_.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const xt=_,Mt=()=>{var e;const{value:{selectedAction:t,routes:n}}=X(),{formatMessage:r}=(0,T.useIntl)(),o=t==null?void 0:t.split(".")[0];return a.createElement(b.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},t?a.createElement(O.K,{spacing:2},(e=n[o])==null?void 0:e.map(d=>{var i,u;return((u=(i=d.config.auth)==null?void 0:i.scope)==null?void 0:u.includes(t))||d.handler===t?a.createElement(xt,{key:d.handler,route:d}):null})):a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h3"},r({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),a.createElement(h.Z,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var Nt=Object.defineProperty,U=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Ae=(e,t,n)=>t in e?Nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lt=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&Ae(e,n,t[n]);if(U)for(var n of U(t))Se.call(t,n)&&Ae(e,n,t[n]);return e},wt=(e,t)=>{var n={};for(var r in e)Ce.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&U)for(var r of U(e))t.indexOf(r)<0&&Se.call(e,r)&&(n[r]=e[r]);return n};const Dt=e=>{var t=wt(e,[]);const{value:{data:n}}=X(),{formatMessage:r}=(0,T.useIntl)();return a.createElement(Y.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},a.createElement(b.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},a.createElement(O.K,{spacing:2},a.createElement(h.Z,{variant:"delta",as:"h2"},r({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),a.createElement(h.Z,{as:"p",textColor:"neutral600"},r({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),(n==null?void 0:n.permissions)&&a.createElement(Ct,Lt({section:n==null?void 0:n.permissions},t))),a.createElement(Mt,null))},Bt=(0,a.memo)(Dt),ee=({apiToken:e,errors:t,onChange:n,canEditInputs:r,isCreating:o,values:d,onDispatch:i,setHasChangedPermissions:u})=>a.createElement(le.D,null,a.createElement(O.K,{spacing:6},Boolean(e==null?void 0:e.name)&&a.createElement(rt,{apiToken:e==null?void 0:e.accessKey}),a.createElement(lt,{errors:t,onChange:n,canEditInputs:r,isCreating:o,values:d,apiToken:e,onDispatch:i,setHasChangedPermissions:u}),a.createElement(Bt,{disabled:!r||(d==null?void 0:d.type)==="read-only"||(d==null?void 0:d.type)==="full-access"})));ee.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().oneOfType([s().number,s().string]),name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,isCreating:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}).isRequired,onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},ee.defaultProps={errors:{},apiToken:{}};const jt=ee;var Vt=l(87751),Zt=Object.defineProperty,Ut=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,Wt=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,Re=(e,t,n)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ft=(e,t)=>{for(var n in t||(t={}))Wt.call(t,n)&&Re(e,n,t[n]);if(be)for(var n of be(t))$t.call(t,n)&&Re(e,n,t[n]);return e},Ht=(e,t)=>Ut(e,Kt(t));const Gt=(e,t=[])=>Ht(Ft({},e),{selectedAction:null,routes:[],selectedActions:[],data:oe(t)});var zt=l(18172),Yt=Object.defineProperty,Ie=Object.getOwnPropertySymbols,Qt=Object.prototype.hasOwnProperty,Xt=Object.prototype.propertyIsEnumerable,ke=(e,t,n)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Jt=(e,t)=>{for(var n in t||(t={}))Qt.call(t,n)&&ke(e,n,t[n]);if(Ie)for(var n of Ie(t))Xt.call(t,n)&&ke(e,n,t[n]);return e};const qt={data:{},selectedActions:[]},_t=(e,t)=>(0,zt.default)(e,n=>{switch(t.type){case"ON_CHANGE":{n.selectedActions.includes(t.value)?(0,w.pull)(n.selectedActions,t.value):n.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>n.selectedActions.includes(o.actionId))?t.value.forEach(o=>{(0,w.pull)(n.selectedActions,o.actionId)}):t.value.forEach(o=>{n.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{n.selectedActions=[...n.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const r=n.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));n.selectedActions=[...r];break}case"UPDATE_PERMISSIONS_LAYOUT":{n.data=oe(t.value);break}case"UPDATE_ROUTES":{n.routes=Jt({},t.value);break}case"UPDATE_PERMISSIONS":{n.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{n.selectedAction=t.value;break}default:return n}});var en=Object.defineProperty,tn=Object.defineProperties,nn=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,an=Object.prototype.hasOwnProperty,sn=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))an.call(t,n)&&Me(e,n,t[n]);if(xe)for(var n of xe(t))sn.call(t,n)&&Me(e,n,t[n]);return e},Ne=(e,t)=>tn(e,nn(t)),K=(e,t,n)=>new Promise((r,o)=>{var d=m=>{try{u(n.next(m))}catch(y){o(y)}},i=m=>{try{u(n.throw(m))}catch(y){o(y)}},u=m=>m.done?r(m.value):Promise.resolve(m.value).then(d,i);u((n=n.apply(e,t)).next())});const rn="Name already taken",on=()=>{var e;(0,g.useFocusWhenNavigate)();const{formatMessage:t}=(0,T.useIntl)(),{lockApp:n,unlockApp:r}=(0,g.useOverlayBlocker)(),o=(0,g.useNotification)(),d=(0,ae.useHistory)(),[i,u]=(0,a.useState)((e=d.location.state)!=null&&e.apiToken.accessKey?D({},d.location.state.apiToken):null),{trackUsage:m}=(0,g.useTracking)(),y=(0,a.useRef)(m),{setCurrentStep:M}=(0,g.useGuidedTour)(),{allowedActions:{canCreate:S,canUpdate:f,canRegenerate:B}}=(0,g.useRBAC)(Vt.Z.settings["api-tokens"]),[I,c]=(0,a.useReducer)(_t,qt,p=>Gt(p,{})),{params:{id:k}}=(0,ae.useRouteMatch)("/settings/api-tokens/:id"),v=k==="create";(0,se.useQuery)("content-api-permissions",()=>K(void 0,null,function*(){const[p,x]=yield Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(N=>K(void 0,null,function*(){const{data:A}=yield j.be.get(N);return A.data})));c({type:"UPDATE_PERMISSIONS_LAYOUT",value:p}),c({type:"UPDATE_ROUTES",value:x}),i&&((i==null?void 0:i.type)==="read-only"&&c({type:"ON_CHANGE_READ_ONLY"}),(i==null?void 0:i.type)==="full-access"&&c({type:"SELECT_ALL_ACTIONS"}),(i==null?void 0:i.type)==="custom"&&c({type:"UPDATE_PERMISSIONS",value:i==null?void 0:i.permissions}))}),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,a.useEffect)(()=>{y.current(v?"didAddTokenFromList":"didEditTokenFromList")},[v]);const{status:E}=(0,se.useQuery)(["api-token",k],()=>K(void 0,null,function*(){const{data:{data:p}}=yield j.be.get(`/admin/api-tokens/${k}`);return u(D({},p)),(p==null?void 0:p.type)==="read-only"&&c({type:"ON_CHANGE_READ_ONLY"}),(p==null?void 0:p.type)==="full-access"&&c({type:"SELECT_ALL_ACTIONS"}),(p==null?void 0:p.type)==="custom"&&c({type:"UPDATE_PERMISSIONS",value:p==null?void 0:p.permissions}),p}),{enabled:!v&&!i,onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ln=(p,x)=>K(void 0,null,function*(){var N,A,W,we,De;y.current(v?"willCreateToken":"willEditToken"),n();const gn=p.lifespan&&parseInt(p.lifespan,10)&&p.lifespan!=="0"?parseInt(p.lifespan,10):null;try{const{data:{data:P}}=v?yield j.be.post("/admin/api-tokens",Ne(D({},p),{lifespan:gn,permissions:p.type==="custom"?I.selectedActions:null})):yield j.be.put(`/admin/api-tokens/${k}`,{name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?I.selectedActions:null});v&&(d.replace(`/settings/api-tokens/${P.id}`,{apiToken:P}),M("apiTokens.success")),r(),u(D({},P)),o({type:"success",message:t(v?{id:"notification.success.tokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.tokenedited",defaultMessage:"API Token successfully edited"})}),y.current(v?"didCreateToken":"didEditToken",{type:i.type})}catch(P){const fn=(0,Ve.Iz)(P.response.data);x.setErrors(fn),((W=(A=(N=P==null?void 0:P.response)==null?void 0:N.data)==null?void 0:A.error)==null?void 0:W.message)===rn?o({type:"warning",message:P.response.data.message||"notification.error.tokennamenotunique"}):o({type:"warning",message:((De=(we=P==null?void 0:P.response)==null?void 0:we.data)==null?void 0:De.message)||"notification.error"}),r()}}),[dn,te]=(0,a.useState)(!1),cn=({target:{value:p}})=>{te(!0),c({type:"ON_CHANGE",value:p})},pn=({target:{value:p}})=>{te(!0),c({type:"SELECT_ALL_IN_PERMISSION",value:p})},un=({target:{value:p}})=>{c({type:"SET_SELECTED_ACTION",value:p})},mn=Ne(D({},I),{onChange:cn,onChangeSelectAll:pn,setSelectedAction:un}),Le=f&&!v||S&&v;return!v&&!i&&E!=="success"?a.createElement($e,{apiTokenName:i==null?void 0:i.name}):a.createElement(Ee,{value:mn},a.createElement(ne.o,null,a.createElement(g.SettingsPageTitle,{name:"API Tokens"}),a.createElement(je.Formik,{validationSchema:Ke,validateOnChange:!1,initialValues:{name:(i==null?void 0:i.name)||"",description:(i==null?void 0:i.description)||"",type:i==null?void 0:i.type,lifespan:i!=null&&i.lifespan?i.lifespan.toString():i==null?void 0:i.lifespan},enableReinitialize:!0,onSubmit:(p,x)=>ln(p,x)},({errors:p,handleChange:x,isSubmitting:N,values:A,setFieldValue:W})=>(dn&&(A==null?void 0:A.type)!=="custom"&&W("type","custom"),a.createElement(g.Form,null,a.createElement(et,{apiToken:i,setApiToken:u,canEditInputs:Le,canRegenerate:B,isSubmitting:N}),a.createElement(jt,{apiToken:i,errors:p,onChange:x,canEditInputs:Le,isCreating:v,values:A,onDispatch:c,setHasChangedPermissions:te}))))))}}}]);
