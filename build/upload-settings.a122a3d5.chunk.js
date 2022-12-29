"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[695],{85078:(Q,R,t)=>{t.r(R),t.d(R,{SettingsPage:()=>X,default:()=>G});var e=t(67294),h=t(15482),i=t(97132),E=t(68547),b=t(85018),M=t(35961),I=t(46273),D=t(20707),W=t(72735),S=t(29728),N=t(185),z=t(7681),u=t(11276),p=t(74571),v=t(67838),C=t(49066),j=t(17034),Z=t(78648),K=t(18446),g=t.n(K),r=t(57197);const O=f=>f;var o=t(18172),s=t(36968),d=t.n(s);const c={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},L=(f,k)=>(0,o.default)(f,P=>{switch(k.type){case"CANCEL_CHANGES":{P.modifiedData=f.initialData;break}case"GET_DATA_SUCCEEDED":{P.isLoading=!1,P.initialData=k.data,P.modifiedData=k.data;break}case"ON_CHANGE":{d()(P,["modifiedData",...k.keys.split(".")],k.value);break}case"ON_SUBMIT":{P.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{P.initialData=f.modifiedData,P.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{P.isSubmiting=!1;break}default:return f}});var B=t(16838),F=t(25108),$=(f,k,P)=>new Promise((q,Y)=>{var _=n=>{try{a(P.next(n))}catch(l){Y(l)}},w=n=>{try{a(P.throw(n))}catch(l){Y(l)}},a=n=>n.done?q(n.value):Promise.resolve(n.value).then(_,w);a((P=P.apply(f,k)).next())});const X=()=>{const{formatMessage:f}=(0,i.useIntl)(),{lockApp:k,unlockApp:P}=(0,E.useOverlayBlocker)(),q=(0,E.useNotification)();(0,E.useFocusWhenNavigate)();const[{initialData:Y,isLoading:_,isSubmiting:w,modifiedData:a},n]=(0,e.useReducer)(L,c,O),l=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const T=Z.Z.CancelToken.source(),U=()=>$(void 0,null,function*(){try{const{data:{data:J}}=yield r.be.get((0,r.IF)("settings"),{cancelToken:T.token});n({type:"GET_DATA_SUCCEEDED",data:J})}catch(J){F.error(J)}});return l.current&&U(),()=>{T.cancel("Operation canceled by the user."),l.current=!1}},[]);const m=g()(Y,a),ee=A=>$(void 0,null,function*(){if(A.preventDefault(),!m){k(),n({type:"ON_SUBMIT"});try{yield r.be.put((0,r.IF)("settings"),a),n({type:"SUBMIT_SUCCEEDED"}),q({type:"success",message:{id:"notification.form.success.fields"}})}catch(T){F.error(T),n({type:"ON_SUBMIT_ERROR"})}P()}}),V=({target:{name:A,value:T}})=>{n({type:"ON_CHANGE",keys:A,value:T})};return e.createElement(N.o,{tabIndex:-1},e.createElement(h.Helmet,{title:f({id:(0,r.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:ee},e.createElement(v.T,{title:f({id:(0,r.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(S.z,{disabled:m,"data-testid":"save-button",loading:w,type:"submit",startIcon:e.createElement(b.Z,null),size:"S"},f({id:"global.save",defaultMessage:"Save"})),subtitle:f({id:(0,r.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(C.D,null,_?e.createElement(E.LoadingIndicatorPage,null):e.createElement(j.A,null,e.createElement(z.K,{spacing:12},e.createElement(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(z.K,{spacing:4},e.createElement(I.k,null,e.createElement(W.Z,{variant:"delta",as:"h2"},f({id:(0,r.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(u.r,{gap:6},e.createElement(p.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:a.responsiveDimensions,hint:f({id:(0,r.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:f({id:(0,r.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:f({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:f({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:A=>{V({target:{name:"responsiveDimensions",value:A.target.checked}})}})),e.createElement(p.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:a.sizeOptimization,hint:f({id:(0,r.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:f({id:(0,r.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:f({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:f({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:A=>{V({target:{name:"sizeOptimization",value:A.target.checked}})}})),e.createElement(p.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:a.autoOrientation,hint:f({id:(0,r.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:f({id:(0,r.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:f({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:f({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:A=>{V({target:{name:"autoOrientation",value:A.target.checked}})}}))))))))))},G=()=>e.createElement(E.CheckPagePermissions,{permissions:B.Z.settings},e.createElement(X,null))},49066:(Q,R,t)=>{t.d(R,{D:()=>E});var e=t(67294),h=t(45697),i=t(35961);const E=({children:b})=>e.createElement(i.x,{paddingLeft:10,paddingRight:10},b);E.propTypes={children:h.node.isRequired}},67838:(Q,R,t)=>{t.d(R,{T:()=>r});var e=t(67294),h=t(71893),i=t(45697),E=t(72735),b=t(35961),M=t(46273);const I=o=>{const s=(0,e.useRef)(null),[d,c]=(0,e.useState)(!0),x=([L])=>{c(L.isIntersecting)};return(0,e.useEffect)(()=>{const L=s.current,B=new IntersectionObserver(x,o);return L&&B.observe(s.current),()=>{L&&B.disconnect()}},[s,o]),[s,d]};var D=t(98402);const W=(o,s)=>{const d=(0,D.useCallbackRef)(s);(0,e.useLayoutEffect)(()=>{const c=new ResizeObserver(d);return Array.isArray(o)?o.forEach(x=>{x.current&&c.observe(x.current)}):o.current&&c.observe(o.current),()=>{c.disconnect()}},[o,d])};var S=Object.defineProperty,N=Object.defineProperties,z=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,C=(o,s,d)=>s in o?S(o,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[s]=d,j=(o,s)=>{for(var d in s||(s={}))p.call(s,d)&&C(o,d,s[d]);if(u)for(var d of u(s))v.call(s,d)&&C(o,d,s[d]);return o},Z=(o,s)=>N(o,z(s)),K=(o,s)=>{var d={};for(var c in o)p.call(o,c)&&s.indexOf(c)<0&&(d[c]=o[c]);if(o!=null&&u)for(var c of u(o))s.indexOf(c)<0&&v.call(o,c)&&(d[c]=o[c]);return d};const g=()=>{const o=(0,e.useRef)(null),[s,d]=(0,e.useState)(null),[c,x]=I({root:null,rootMargin:"0px",threshold:0});return W(c,()=>{c.current&&d(c.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{o.current&&d(o.current.getBoundingClientRect())},[o]),{containerRef:c,isVisible:x,baseHeaderLayoutRef:o,headerSize:s}},r=o=>{const{containerRef:s,isVisible:d,baseHeaderLayoutRef:c,headerSize:x}=g();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:x==null?void 0:x.height},ref:s},d&&e.createElement(O,j({ref:c},o))),!d&&e.createElement(O,Z(j({},o),{sticky:!0,width:x==null?void 0:x.width})))};r.displayName="HeaderLayout";const y=(0,h.default)(b.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${o=>o.width}px;
  z-index: 4;
  box-shadow: ${({theme:o})=>o.shadows.tableShadow};
`,O=e.forwardRef((o,s)=>{var d=o,{navigationAction:c,primaryAction:x,secondaryAction:L,subtitle:B,title:F,sticky:$,width:X}=d,H=K(d,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const G=typeof B=="string";return $?e.createElement(y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:X,"data-strapi-header-sticky":!0},e.createElement(M.k,{justifyContent:"space-between"},e.createElement(M.k,null,c&&e.createElement(b.x,{paddingRight:3},c),e.createElement(b.x,null,e.createElement(E.Z,j({variant:"beta",as:"h1"},H),F),G?e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},B):B),L?e.createElement(b.x,{paddingLeft:4},L):null),e.createElement(M.k,null,x?e.createElement(b.x,{paddingLeft:2},x):void 0))):e.createElement(b.x,{ref:s,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(b.x,{paddingBottom:2},c):null,e.createElement(M.k,{justifyContent:"space-between"},e.createElement(M.k,null,e.createElement(E.Z,j({as:"h1",variant:"alpha"},H),F),L?e.createElement(b.x,{paddingLeft:4},L):null),x),G?e.createElement(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},B):B)});O.displayName="BaseHeaderLayout",O.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},O.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,sticky:i.bool,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired,width:i.number},r.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},r.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired}},17034:(Q,R,t)=>{t.d(R,{A:()=>I});var e=t(67294),h=t(45697),i=t(71893),E=t(35961);const b=(0,i.default)(E.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:D})=>D?"auto 1fr":"1fr"};
`,M=(0,i.default)(E.x)`
  overflow-x: hidden;
`,I=({sideNav:D,children:W})=>e.createElement(b,{hasSideNav:Boolean(D)},D,e.createElement(M,{paddingBottom:10},W));I.defaultProps={sideNav:void 0},I.propTypes={children:h.node.isRequired,sideNav:h.node}},185:(Q,R,t)=>{t.d(R,{o:()=>z});var e=t(67294),h=t(45697),i=t(71893),E=Object.defineProperty,b=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,D=(u,p,v)=>p in u?E(u,p,{enumerable:!0,configurable:!0,writable:!0,value:v}):u[p]=v,W=(u,p)=>{for(var v in p||(p={}))M.call(p,v)&&D(u,v,p[v]);if(b)for(var v of b(p))I.call(p,v)&&D(u,v,p[v]);return u},S=(u,p)=>{var v={};for(var C in u)M.call(u,C)&&p.indexOf(C)<0&&(v[C]=u[C]);if(u!=null&&b)for(var C of b(u))p.indexOf(C)<0&&I.call(u,C)&&(v[C]=u[C]);return v};const N=i.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,z=u=>{var p=u,{labelledBy:v}=p,C=S(p,["labelledBy"]);const j=v||"main-content-title";return e.createElement(N,W({"aria-labelledby":j,id:"main-content",tabIndex:-1},C))};z.defaultProps={labelledBy:void 0},z.propTypes={labelledBy:h.string}},39785:(Q,R,t)=>{t.d(R,{A:()=>K});var e=t(67294),h=t(45697),i=t(71893),E=t(86647),b=t(35961),M=t(72735),I=t(46273),D=t(15585),W=Object.defineProperty,S=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,u=(g,r,y)=>r in g?W(g,r,{enumerable:!0,configurable:!0,writable:!0,value:y}):g[r]=y,p=(g,r)=>{for(var y in r||(r={}))N.call(r,y)&&u(g,y,r[y]);if(S)for(var y of S(r))z.call(r,y)&&u(g,y,r[y]);return g},v=(g,r)=>{var y={};for(var O in g)N.call(g,O)&&r.indexOf(O)<0&&(y[O]=g[O]);if(g!=null&&S)for(var O of S(g))r.indexOf(O)<0&&z.call(g,O)&&(y[O]=g[O]);return y};const C=i.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,j=i.default.div`
  animation: ${C} 2s infinite linear;
  will-change: transform;
`,Z=(0,i.default)(I.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:g})=>g.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:g})=>g.colors.primary600};
  }

  ${D.BF}
`,K=e.forwardRef((g,r)=>{var y=g,{children:O,startIcon:o,endIcon:s,onClick:d,disabled:c,loading:x}=y,L=v(y,["children","startIcon","endIcon","onClick","disabled","loading"]);const B=d&&!c?d:void 0,F=c||x;return e.createElement(Z,p({ref:r,"aria-disabled":F,onClick:B,as:"button",type:"button"},L),(o||x)&&e.createElement(b.x,{as:"span",paddingRight:2,"aria-hidden":!0},x?e.createElement(j,null,e.createElement(E.default,null)):o),e.createElement(M.Z,{variant:"pi",textColor:F?"neutral600":"primary600"},O),s&&e.createElement(b.x,{as:"span",paddingLeft:2,"aria-hidden":!0},s))});K.displayName="TextButton",K.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,loading:!1,onClick:void 0},K.propTypes={children:h.node.isRequired,disabled:h.bool,endIcon:h.element,loading:h.bool,onClick:h.func,startIcon:h.element}},20707:(Q,R,t)=>{t.d(R,{s:()=>w});var e=t(67294),h=t(71893),i=t(45697),E=t(75228),b=t(41762),M=t(54574),I=t(64777),D=t(63428),W=t(96404),S=t(7681),N=t(46273),z=t(39785),u=t(15585),p=t(72735),v=t(63237),C=t(35961),j=t(88262),Z=Object.defineProperty,K=Object.defineProperties,g=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,o=(a,n,l)=>n in a?Z(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,s=(a,n)=>{for(var l in n||(n={}))y.call(n,l)&&o(a,l,n[l]);if(r)for(var l of r(n))O.call(n,l)&&o(a,l,n[l]);return a},d=(a,n)=>K(a,g(n)),c=(a,n)=>{var l={};for(var m in a)y.call(a,m)&&n.indexOf(m)<0&&(l[m]=a[m]);if(a!=null&&r)for(var m of r(a))n.indexOf(m)<0&&O.call(a,m)&&(l[m]=a[m]);return l};const x=h.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,L=(0,h.default)(C.x)`
  cursor: ${({disabled:a})=>a?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,u.k3)()}
`,B=(0,h.default)(N.k).attrs({hasRadius:!0})`
  background-color: ${({theme:a,checked:n,disabled:l})=>n?l?a.colors.neutral200:a.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:a,checked:n,disabled:l})=>n&&n!==null?l?a.colors.neutral300:a.colors.neutral200:l?a.colors.neutral150:a.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:a})=>`${a==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:a})=>`${a==="S"?"2px":"6px"}`};
`,F=h.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,$=e.forwardRef((a,n)=>{var l=a,{size:m,onLabel:ee,offLabel:V,children:A,checked:T,disabled:U,onChange:J}=l,oe=c(l,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:ae,required:ne}=(0,j.U)(),te="neutral600";let le=!T&&T!==null?"danger700":te,ie=T?"primary600":te;const se=re=>{U||J(re)};return e.createElement(x,null,e.createElement(v.T,null,A),e.createElement(L,{hasRadius:!0,disabled:U,padding:1,display:"flex",background:U?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(B,{size:m,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:T===null?!1:!T,disabled:U},e.createElement(p.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:U?"neutral700":le},V)),e.createElement(B,{size:m,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:T===null?!1:T,disabled:U},e.createElement(p.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:U?"neutral700":ie},ee)),e.createElement(F,d(s({type:"checkbox","aria-disabled":U,onChange:re=>se(re),name:ae,ref:n,"aria-required":ne},oe),{checked:!(T===null||!T)}))))});$.displayName="ToggleCheckbox",$.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},$.propTypes={checked:i.bool,children:i.string.isRequired,disabled:i.bool,offLabel:i.string.isRequired,onChange:i.func,onLabel:i.string.isRequired,size:i.oneOf(Object.keys(E.J.input))};var X=Object.defineProperty,H=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(a,n,l)=>n in a?X(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l,P=(a,n)=>{for(var l in n||(n={}))G.call(n,l)&&k(a,l,n[l]);if(H)for(var l of H(n))f.call(n,l)&&k(a,l,n[l]);return a},q=(a,n)=>{var l={};for(var m in a)G.call(a,m)&&n.indexOf(m)<0&&(l[m]=a[m]);if(a!=null&&H)for(var m of H(a))n.indexOf(m)<0&&f.call(a,m)&&(l[m]=a[m]);return l};const Y=(0,h.default)(M.g)`
  max-width: 320px;
`,_=(0,h.default)(z.A)`
  align-self: flex-end;
  margin-left: auto;
`,w=a=>{var n=a,{disabled:l,size:m,error:ee,hint:V,label:A,name:T,labelAction:U,required:J,id:oe,onClear:ae,clearLabel:ne,checked:te}=n,le=q(n,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const ie=(0,b.M)("toggleinput",oe);return e.createElement(Y,{name:T,hint:V,error:ee,id:ie,required:J},e.createElement(S.K,{spacing:1},e.createElement(N.k,null,e.createElement(I.Q,{action:U},A),ne&&ae&&te!==null&&!l&&e.createElement(_,{onClick:ae},ne)),e.createElement($,P({id:ie,size:m,checked:te,disabled:l},le),A),e.createElement(D.J,null),e.createElement(W.c,null)))};w.displayName="ToggleInput",w.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},w.propTypes={checked:i.bool,clearLabel:i.string,disabled:i.bool,error:i.string,hint:i.oneOfType([i.string,i.node,i.arrayOf(i.node)]),id:i.string,label:i.string,labelAction:i.node,name:i.string,onClear:i.func,required:i.bool,size:i.oneOf(Object.keys(E.J.input))}}}]);
