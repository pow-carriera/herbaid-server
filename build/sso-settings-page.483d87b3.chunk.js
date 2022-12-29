"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[302],{29808:(se,R,a)=>{a.r(R),a.d(R,{SingleSignOn:()=>x,default:()=>D});var n=a(67294),u=a(68547),s=a(85018),C=a(17034),k=a(67838),H=a(49066),Z=a(29728),w=a(185),N=a(7681),G=a(72735),L=a(20707),J=a(91216),K=a(82562),T=a(11276),I=a(74571),V=a(97132),U=a(18446),Q=a.n(U),X=a(38683),z=a(61931),m=a(87751),v=a(53209);const j=v.Ry().shape({autoRegister:v.Xg().required(u.translatedErrors.required),defaultRole:v.nK().when("autoRegister",(r,i)=>r?i.required(u.translatedErrors.required):i.nullable())});var q=Object.defineProperty,_=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,A=(r,i,d)=>i in r?q(r,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[i]=d,b=(r,i)=>{for(var d in i||(i={}))te.call(i,d)&&A(r,d,i[d]);if(M)for(var d of M(i))F.call(i,d)&&A(r,d,i[d]);return r},ae=(r,i)=>_(r,ee(i));const p=ae(b({},m.Z.settings.sso),{readRoles:m.Z.settings.roles.read}),x=()=>{const{formatMessage:r}=(0,V.useIntl)(),{isLoading:i,allowedActions:{canUpdate:d,canReadRoles:ne}}=(0,u.useRBAC)(p),[{formErrors:h,initialData:e,isLoading:l,modifiedData:t,showHeaderButtonLoader:o},$,{handleChange:y,handleSubmit:O}]=(0,z.G4)((0,X.IF)("providers/options"),j,()=>{},["autoRegister","defaultRole"]),{roles:g}=(0,z.bF)(ne);(0,u.useFocusWhenNavigate)();const f=i||l;(0,n.useEffect)(()=>{if(h.defaultRole){const c='[name="defaultRole"]';document.querySelector(c).focus()}},[h]);const E=Q()(e,t);return n.createElement(C.A,null,n.createElement(u.SettingsPageTitle,{name:"SSO"}),n.createElement(w.o,{tabIndex:-1},n.createElement("form",{onSubmit:c=>{if(E){c.preventDefault();return}O(c)}},n.createElement(k.T,{primaryAction:n.createElement(Z.z,{"data-testid":"save-button",disabled:E,loading:o,startIcon:n.createElement(s.Z,null),type:"submit",size:"L"},r({id:"global.save",defaultMessage:"Save"})),title:r({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:r({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),n.createElement(H.D,null,f?n.createElement(u.LoadingIndicatorPage,null):n.createElement(N.K,{spacing:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},n.createElement(G.Z,{variant:"delta",as:"h2"},r({id:"global.settings",defaultMessage:"Settings"})),n.createElement(T.r,{gap:4},n.createElement(I.P,{col:6,m:6,s:12},n.createElement(L.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!d,checked:t.autoRegister,hint:r({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:r({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:r({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:r({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:c=>{y({target:{name:"autoRegister",value:c.target.checked}})}})),n.createElement(I.P,{col:6,m:6,s:12},n.createElement(J.P,{disabled:!d,hint:r({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:h.defaultRole?r({id:h.defaultRole.id,defaultMessage:h.defaultRole.id}):"",label:r({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:c=>{y({target:{name:"defaultRole",value:c}})},placeholder:r({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:t.defaultRole},g.map(({id:c,name:S})=>n.createElement(K.W,{key:c,value:c.toString()},S))))))))))},D=()=>n.createElement(u.CheckPagePermissions,{permissions:p.main},n.createElement(x,null))},20707:(se,R,a)=>{a.d(R,{s:()=>h});var n=a(67294),u=a(71893),s=a(45697),C=a(75228),k=a(41762),H=a(54574),Z=a(64777),w=a(63428),N=a(96404),G=a(7681),L=a(46273),J=a(39785),K=a(15585),T=a(72735),I=a(63237),V=a(35961),U=a(88262),Q=Object.defineProperty,X=Object.defineProperties,z=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,j=(e,l,t)=>l in e?Q(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,q=(e,l)=>{for(var t in l||(l={}))v.call(l,t)&&j(e,t,l[t]);if(m)for(var t of m(l))Y.call(l,t)&&j(e,t,l[t]);return e},_=(e,l)=>X(e,z(l)),ee=(e,l)=>{var t={};for(var o in e)v.call(e,o)&&l.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&m)for(var o of m(e))l.indexOf(o)<0&&Y.call(e,o)&&(t[o]=e[o]);return t};const M=u.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,te=(0,u.default)(V.x)`
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,K.k3)()}
`,F=(0,u.default)(L.k).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:l,disabled:t})=>l?t?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:l,disabled:t})=>l&&l!==null?t?e.colors.neutral300:e.colors.neutral200:t?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
`,A=u.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,b=n.forwardRef((e,l)=>{var t=e,{size:o,onLabel:$,offLabel:y,children:O,checked:g,disabled:f,onChange:E}=t,c=ee(t,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:S,required:B}=(0,U.U)(),P="neutral600";let re=!g&&g!==null?"danger700":P,W=g?"primary600":P;const ie=oe=>{f||E(oe)};return n.createElement(M,null,n.createElement(I.T,null,O),n.createElement(te,{hasRadius:!0,disabled:f,padding:1,display:"flex",background:f?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},n.createElement(F,{size:o,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:g===null?!1:!g,disabled:f},n.createElement(T.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:f?"neutral700":re},y)),n.createElement(F,{size:o,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:g===null?!1:g,disabled:f},n.createElement(T.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:f?"neutral700":W},$)),n.createElement(A,_(q({type:"checkbox","aria-disabled":f,onChange:oe=>ie(oe),name:S,ref:l,"aria-required":B},c),{checked:!(g===null||!g)}))))});b.displayName="ToggleCheckbox",b.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},b.propTypes={checked:s.bool,children:s.string.isRequired,disabled:s.bool,offLabel:s.string.isRequired,onChange:s.func,onLabel:s.string.isRequired,size:s.oneOf(Object.keys(C.J.input))};var ae=Object.defineProperty,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,D=(e,l,t)=>l in e?ae(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,r=(e,l)=>{for(var t in l||(l={}))x.call(l,t)&&D(e,t,l[t]);if(p)for(var t of p(l))le.call(l,t)&&D(e,t,l[t]);return e},i=(e,l)=>{var t={};for(var o in e)x.call(e,o)&&l.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&p)for(var o of p(e))l.indexOf(o)<0&&le.call(e,o)&&(t[o]=e[o]);return t};const d=(0,u.default)(H.g)`
  max-width: 320px;
`,ne=(0,u.default)(J.A)`
  align-self: flex-end;
  margin-left: auto;
`,h=e=>{var l=e,{disabled:t,size:o,error:$,hint:y,label:O,name:g,labelAction:f,required:E,id:c,onClear:S,clearLabel:B,checked:P}=l,re=i(l,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const W=(0,k.M)("toggleinput",c);return n.createElement(d,{name:g,hint:y,error:$,id:W,required:E},n.createElement(G.K,{spacing:1},n.createElement(L.k,null,n.createElement(Z.Q,{action:f},O),B&&S&&P!==null&&!t&&n.createElement(ne,{onClick:S},B)),n.createElement(b,r({id:W,size:o,checked:P,disabled:t},re),O),n.createElement(w.J,null),n.createElement(N.c,null)))};h.displayName="ToggleInput",h.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},h.propTypes={checked:s.bool,clearLabel:s.string,disabled:s.bool,error:s.string,hint:s.oneOfType([s.string,s.node,s.arrayOf(s.node)]),id:s.string,label:s.string,labelAction:s.node,name:s.string,onClear:s.func,required:s.bool,size:s.oneOf(Object.keys(C.J.input))}}}]);