"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[8503],{31346:(Z,A,t)=>{t.r(A),t.d(A,{default:()=>R});var e=t(67294),v=t(97132),a=t(80831),y=t(68547),E=t(67838),M=t(49066),S=t(185),j=t(29728),w=t(35961),D=t(7681),B=t(72735),b=t(20707),o=t(16364),p=t(11276),f=t(74571),m=t(8934),C=t(94123),W=t(85018),L=t(80826),i=t(93742),d=t(4733),h=t(71893),x=t(25752);const u=(0,h.default)(x.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:T})=>T.colors.neutral600};
    }
  }
`;var c=t(53209);const P=c.Ry().shape({restrictedAccess:c.O7(),password:c.Z_().when("restrictedAccess",(T,z)=>T?z.required(y.translatedErrors.required):z)}),R=()=>{(0,y.useFocusWhenNavigate)();const{formatMessage:T}=(0,v.useIntl)(),{submitMutation:z,data:H,isLoading:U}=(0,d.Z)(),[K,G]=(0,e.useState)(!1),J=Q=>{z.mutate({prefix:H==null?void 0:H.prefix,body:Q})};return e.createElement(S.o,null,U?e.createElement(y.LoadingIndicatorPage,null,"Plugin settings are loading"):e.createElement(a.Formik,{initialValues:{restrictedAccess:(H==null?void 0:H.documentationAccess.restrictedAccess)||!1,password:""},onSubmit:J,validationSchema:P},({handleSubmit:Q,values:k,handleChange:te,errors:X,setFieldTouched:N,setFieldValue:n})=>e.createElement(y.Form,{noValidate:!0,onSubmit:Q},e.createElement(E.T,{title:T({id:(0,i.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:T({id:(0,i.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:e.createElement(y.CheckPermissions,{permissions:L.Z.update},e.createElement(j.z,{type:"submit",startIcon:e.createElement(W.Z,null)},T({id:(0,i.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),e.createElement(M.D,null,e.createElement(w.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(D.K,{spacing:4},e.createElement(B.Z,{variant:"delta",as:"h2"},T({id:"global.settings",defaultMessage:"Settings"})),e.createElement(p.r,{gap:4},e.createElement(f.P,{col:6,s:12},e.createElement(b.s,{name:"restrictedAccess",label:T({id:(0,i.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:T({id:(0,i.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:k.restrictedAccess,onChange:()=>{k.restrictedAccess===!0&&(n("password","",!1),N("password",!1,!1)),n("restrictedAccess",!k.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),k.restrictedAccess&&e.createElement(f.P,{col:6,s:12},e.createElement(o.o,{label:T({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:K?"text":"password",value:k.password,onChange:te,error:X.password?T({id:X.password,defaultMessage:"Invalid value"}):null,endAction:e.createElement(u,{onClick:l=>{l.stopPropagation(),G(s=>!s)},label:T(K?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},K?e.createElement(m.default,null):e.createElement(C.default,null))})))))))))}},4733:(Z,A,t)=>{t.d(A,{Z:()=>B});var e=t(23724),v=t(68547),a=t(49950),y=(b,o,p)=>new Promise((f,m)=>{var C=i=>{try{L(p.next(i))}catch(d){m(d)}},W=i=>{try{L(p.throw(i))}catch(d){m(d)}},L=i=>i.done?f(i.value):Promise.resolve(i.value).then(C,W);L((p=p.apply(b,o)).next())});const E=({prefix:b,version:o})=>(0,v.request)(`${b}/deleteDoc/${o}`,{method:"DELETE"}),M=b=>y(void 0,null,function*(){try{return yield(0,v.request)(`/${a.Z}/getInfos`,{method:"GET"})}catch(o){return b({type:"warning",message:{id:"notification.error"}}),null}}),S=({prefix:b,version:o})=>(0,v.request)(`${b}/regenerateDoc`,{method:"POST",body:{version:o}}),j=({prefix:b,body:o})=>(0,v.request)(`${b}/updateSettings`,{method:"PUT",body:o});var w=t(798);const B=()=>{const b=(0,e.useQueryClient)(),o=(0,v.useNotification)(),{isLoading:p,data:f}=(0,e.useQuery)("get-documentation",()=>M(o)),m=d=>{o({type:"warning",message:d.response.payload.message})},C=(d,h)=>{b.invalidateQueries("get-documentation"),o({type:d,message:{id:(0,w.Z)(h)}})},W=(0,e.useMutation)(E,{onSuccess:()=>C("info","notification.delete.success"),onError:d=>m(d)}),L=(0,e.useMutation)(j,{onSuccess:()=>C("success","notification.update.success"),onError:m}),i=(0,e.useMutation)(S,{onSuccess:()=>C("info","notification.generate.success"),onError:d=>m(d)});return{data:f,isLoading:p,deleteMutation:W,submitMutation:L,regenerateDocMutation:i}}},798:(Z,A,t)=>{t.d(A,{Z:()=>a});var e=t(49950);const a=y=>`${e.Z}.${y}`},93742:(Z,A,t)=>{t.d(A,{O:()=>e.Z});var e=t(798)},49066:(Z,A,t)=>{t.d(A,{D:()=>y});var e=t(67294),v=t(45697),a=t(35961);const y=({children:E})=>e.createElement(a.x,{paddingLeft:10,paddingRight:10},E);y.propTypes={children:v.node.isRequired}},67838:(Z,A,t)=>{t.d(A,{T:()=>d});var e=t(67294),v=t(71893),a=t(45697),y=t(72735),E=t(35961),M=t(46273);const S=r=>{const u=(0,e.useRef)(null),[c,g]=(0,e.useState)(!0),P=([I])=>{g(I.isIntersecting)};return(0,e.useEffect)(()=>{const I=u.current,R=new IntersectionObserver(P,r);return I&&R.observe(u.current),()=>{I&&R.disconnect()}},[u,r]),[u,c]};var j=t(98402);const w=(r,u)=>{const c=(0,j.useCallbackRef)(u);(0,e.useLayoutEffect)(()=>{const g=new ResizeObserver(c);return Array.isArray(r)?r.forEach(P=>{P.current&&g.observe(P.current)}):r.current&&g.observe(r.current),()=>{g.disconnect()}},[r,c])};var D=Object.defineProperty,B=Object.defineProperties,b=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,m=(r,u,c)=>u in r?D(r,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[u]=c,C=(r,u)=>{for(var c in u||(u={}))p.call(u,c)&&m(r,c,u[c]);if(o)for(var c of o(u))f.call(u,c)&&m(r,c,u[c]);return r},W=(r,u)=>B(r,b(u)),L=(r,u)=>{var c={};for(var g in r)p.call(r,g)&&u.indexOf(g)<0&&(c[g]=r[g]);if(r!=null&&o)for(var g of o(r))u.indexOf(g)<0&&f.call(r,g)&&(c[g]=r[g]);return c};const i=()=>{const r=(0,e.useRef)(null),[u,c]=(0,e.useState)(null),[g,P]=S({root:null,rootMargin:"0px",threshold:0});return w(g,()=>{g.current&&c(g.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{r.current&&c(r.current.getBoundingClientRect())},[r]),{containerRef:g,isVisible:P,baseHeaderLayoutRef:r,headerSize:u}},d=r=>{const{containerRef:u,isVisible:c,baseHeaderLayoutRef:g,headerSize:P}=i();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:P==null?void 0:P.height},ref:u},c&&e.createElement(x,C({ref:g},r))),!c&&e.createElement(x,W(C({},r),{sticky:!0,width:P==null?void 0:P.width})))};d.displayName="HeaderLayout";const h=(0,v.default)(E.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${r=>r.width}px;
  z-index: 4;
  box-shadow: ${({theme:r})=>r.shadows.tableShadow};
`,x=e.forwardRef((r,u)=>{var c=r,{navigationAction:g,primaryAction:P,secondaryAction:I,subtitle:R,title:T,sticky:z,width:H}=c,U=L(c,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const K=typeof R=="string";return z?e.createElement(h,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:H,"data-strapi-header-sticky":!0},e.createElement(M.k,{justifyContent:"space-between"},e.createElement(M.k,null,g&&e.createElement(E.x,{paddingRight:3},g),e.createElement(E.x,null,e.createElement(y.Z,C({variant:"beta",as:"h1"},U),T),K?e.createElement(y.Z,{variant:"pi",textColor:"neutral600"},R):R),I?e.createElement(E.x,{paddingLeft:4},I):null),e.createElement(M.k,null,P?e.createElement(E.x,{paddingLeft:2},P):void 0))):e.createElement(E.x,{ref:u,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0},g?e.createElement(E.x,{paddingBottom:2},g):null,e.createElement(M.k,{justifyContent:"space-between"},e.createElement(M.k,null,e.createElement(y.Z,C({as:"h1",variant:"alpha"},U),T),I?e.createElement(E.x,{paddingLeft:4},I):null),P),K?e.createElement(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},R):R)});x.displayName="BaseHeaderLayout",x.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},x.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},d.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},d.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},185:(Z,A,t)=>{t.d(A,{o:()=>b});var e=t(67294),v=t(45697),a=t(71893),y=Object.defineProperty,E=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,j=(o,p,f)=>p in o?y(o,p,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[p]=f,w=(o,p)=>{for(var f in p||(p={}))M.call(p,f)&&j(o,f,p[f]);if(E)for(var f of E(p))S.call(p,f)&&j(o,f,p[f]);return o},D=(o,p)=>{var f={};for(var m in o)M.call(o,m)&&p.indexOf(m)<0&&(f[m]=o[m]);if(o!=null&&E)for(var m of E(o))p.indexOf(m)<0&&S.call(o,m)&&(f[m]=o[m]);return f};const B=a.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,b=o=>{var p=o,{labelledBy:f}=p,m=D(p,["labelledBy"]);const C=f||"main-content-title";return e.createElement(B,w({"aria-labelledby":C,id:"main-content",tabIndex:-1},m))};b.defaultProps={labelledBy:void 0},b.propTypes={labelledBy:v.string}},39785:(Z,A,t)=>{t.d(A,{A:()=>L});var e=t(67294),v=t(45697),a=t(71893),y=t(86647),E=t(35961),M=t(72735),S=t(46273),j=t(15585),w=Object.defineProperty,D=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,o=(i,d,h)=>d in i?w(i,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[d]=h,p=(i,d)=>{for(var h in d||(d={}))B.call(d,h)&&o(i,h,d[h]);if(D)for(var h of D(d))b.call(d,h)&&o(i,h,d[h]);return i},f=(i,d)=>{var h={};for(var x in i)B.call(i,x)&&d.indexOf(x)<0&&(h[x]=i[x]);if(i!=null&&D)for(var x of D(i))d.indexOf(x)<0&&b.call(i,x)&&(h[x]=i[x]);return h};const m=a.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=a.default.div`
  animation: ${m} 2s infinite linear;
  will-change: transform;
`,W=(0,a.default)(S.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:i})=>i.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:i})=>i.colors.primary600};
  }

  ${j.BF}
`,L=e.forwardRef((i,d)=>{var h=i,{children:x,startIcon:r,endIcon:u,onClick:c,disabled:g,loading:P}=h,I=f(h,["children","startIcon","endIcon","onClick","disabled","loading"]);const R=c&&!g?c:void 0,T=g||P;return e.createElement(W,p({ref:d,"aria-disabled":T,onClick:R,as:"button",type:"button"},I),(r||P)&&e.createElement(E.x,{as:"span",paddingRight:2,"aria-hidden":!0},P?e.createElement(C,null,e.createElement(y.default,null)):r),e.createElement(M.Z,{variant:"pi",textColor:T?"neutral600":"primary600"},x),u&&e.createElement(E.x,{as:"span",paddingLeft:2,"aria-hidden":!0},u))});L.displayName="TextButton",L.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,loading:!1,onClick:void 0},L.propTypes={children:v.node.isRequired,disabled:v.bool,endIcon:v.element,loading:v.bool,onClick:v.func,startIcon:v.element}},20707:(Z,A,t)=>{t.d(A,{s:()=>N});var e=t(67294),v=t(71893),a=t(45697),y=t(75228),E=t(41762),M=t(54574),S=t(64777),j=t(63428),w=t(96404),D=t(7681),B=t(46273),b=t(39785),o=t(15585),p=t(72735),f=t(63237),m=t(35961),C=t(88262),W=Object.defineProperty,L=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,r=(n,l,s)=>l in n?W(n,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[l]=s,u=(n,l)=>{for(var s in l||(l={}))h.call(l,s)&&r(n,s,l[s]);if(d)for(var s of d(l))x.call(l,s)&&r(n,s,l[s]);return n},c=(n,l)=>L(n,i(l)),g=(n,l)=>{var s={};for(var O in n)h.call(n,O)&&l.indexOf(O)<0&&(s[O]=n[O]);if(n!=null&&d)for(var O of d(n))l.indexOf(O)<0&&x.call(n,O)&&(s[O]=n[O]);return s};const P=v.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,I=(0,v.default)(m.x)`
  cursor: ${({disabled:n})=>n?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,o.k3)()}
`,R=(0,v.default)(B.k).attrs({hasRadius:!0})`
  background-color: ${({theme:n,checked:l,disabled:s})=>l?s?n.colors.neutral200:n.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:n,checked:l,disabled:s})=>l&&l!==null?s?n.colors.neutral300:n.colors.neutral200:s?n.colors.neutral150:n.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:n})=>`${n==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:n})=>`${n==="S"?"2px":"6px"}`};
`,T=v.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,z=e.forwardRef((n,l)=>{var s=n,{size:O,onLabel:ae,offLabel:ne,children:Y,checked:$,disabled:F,onChange:re}=s,oe=g(s,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:q,required:_}=(0,C.U)(),V="neutral600";let le=!$&&$!==null?"danger700":V,ee=$?"primary600":V;const ie=se=>{F||re(se)};return e.createElement(P,null,e.createElement(f.T,null,Y),e.createElement(I,{hasRadius:!0,disabled:F,padding:1,display:"flex",background:F?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(R,{size:O,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:$===null?!1:!$,disabled:F},e.createElement(p.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:F?"neutral700":le},ne)),e.createElement(R,{size:O,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:$===null?!1:$,disabled:F},e.createElement(p.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:F?"neutral700":ee},ae)),e.createElement(T,c(u({type:"checkbox","aria-disabled":F,onChange:se=>ie(se),name:q,ref:l,"aria-required":_},oe),{checked:!($===null||!$)}))))});z.displayName="ToggleCheckbox",z.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},z.propTypes={checked:a.bool,children:a.string.isRequired,disabled:a.bool,offLabel:a.string.isRequired,onChange:a.func,onLabel:a.string.isRequired,size:a.oneOf(Object.keys(y.J.input))};var H=Object.defineProperty,U=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,J=(n,l,s)=>l in n?H(n,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[l]=s,Q=(n,l)=>{for(var s in l||(l={}))K.call(l,s)&&J(n,s,l[s]);if(U)for(var s of U(l))G.call(l,s)&&J(n,s,l[s]);return n},k=(n,l)=>{var s={};for(var O in n)K.call(n,O)&&l.indexOf(O)<0&&(s[O]=n[O]);if(n!=null&&U)for(var O of U(n))l.indexOf(O)<0&&G.call(n,O)&&(s[O]=n[O]);return s};const te=(0,v.default)(M.g)`
  max-width: 320px;
`,X=(0,v.default)(b.A)`
  align-self: flex-end;
  margin-left: auto;
`,N=n=>{var l=n,{disabled:s,size:O,error:ae,hint:ne,label:Y,name:$,labelAction:F,required:re,id:oe,onClear:q,clearLabel:_,checked:V}=l,le=k(l,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const ee=(0,E.M)("toggleinput",oe);return e.createElement(te,{name:$,hint:ne,error:ae,id:ee,required:re},e.createElement(D.K,{spacing:1},e.createElement(B.k,null,e.createElement(S.Q,{action:F},Y),_&&q&&V!==null&&!s&&e.createElement(X,{onClick:q},_)),e.createElement(z,Q({id:ee,size:O,checked:V,disabled:s},le),Y),e.createElement(j.J,null),e.createElement(w.c,null)))};N.displayName="ToggleInput",N.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},N.propTypes={checked:a.bool,clearLabel:a.string,disabled:a.bool,error:a.string,hint:a.oneOfType([a.string,a.node,a.arrayOf(a.node)]),id:a.string,label:a.string,labelAction:a.node,name:a.string,onClear:a.func,required:a.bool,size:a.oneOf(Object.keys(y.J.input))}}}]);
