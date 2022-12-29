"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[9789],{75730:(W,b,t)=>{t.r(b),t.d(b,{default:()=>N});var e=t(67294),y=t(97132),a=t(68547),p=t(15482),m=t(29728),D=t(17034),R=t(67838),M=t(49066),h=t(185),f=t(12028),g=t(72735),P=t(46273),r=t(11057),d=t(63985),u=t(47144),c=t(18374),x=t(550),Z=t(20022),I=t(8934),B=t(30815),E=t(80826),A=t(93742),S=t(96486);const l=O=>{const v=(()=>(0,S.startsWith)(O,"/")?`${strapi.backendURL}${O}`:(0,S.startsWith)(O,"https")||(0,S.startsWith)(O,"http")?O:`${strapi.backendURL}/${O}`)();return window.open(v,"_blank"),window.focus()};var i=t(4733),s=Object.defineProperty,T=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,K=(O,v,o)=>v in O?s(O,v,{enumerable:!0,configurable:!0,writable:!0,value:o}):O[v]=o,Q=(O,v)=>{for(var o in v||(v={}))L.call(v,o)&&K(O,o,v[o]);if(T)for(var o of T(v))w.call(v,o)&&K(O,o,v[o]);return O},F=(O,v,o)=>new Promise((H,z)=>{var X=j=>{try{$(o.next(j))}catch(V){z(V)}},U=j=>{try{$(o.throw(j))}catch(V){z(V)}},$=j=>j.done?H(j.value):Promise.resolve(j.value).then(X,U);$((o=o.apply(O,v)).next())});const N=()=>{var O;(0,a.useFocusWhenNavigate)();const{formatMessage:v}=(0,y.useIntl)(),{data:o,isLoading:H,deleteMutation:z,regenerateDocMutation:X}=(0,i.Z)(),[U,$]=(0,e.useState)(!1),[j,V]=(0,e.useState)(!1),[k,q]=(0,e.useState)(),_=4,ee=(((O=o==null?void 0:o.docVersions)==null?void 0:O.length)||0)+1,J=()=>{const C=o!=null&&o.prefix.startsWith("/")?"":"/";l(`${C}${o==null?void 0:o.prefix}/v${o==null?void 0:o.currentVersion}`)},te=C=>{X.mutate({version:C,prefix:o==null?void 0:o.prefix})},ne=()=>{$(!U)},ae=()=>F(void 0,null,function*(){V(!0),yield z.mutateAsync({prefix:o==null?void 0:o.prefix,version:k}),$(!U),V(!1)}),re=C=>{q(C),$(!U)},Y=v({id:(0,A.O)("plugin.name"),defaultMessage:"Documentation"});return e.createElement(D.A,null,e.createElement(p.Helmet,{title:Y}),e.createElement(h.o,{"aria-busy":H},e.createElement(R.T,{title:Y,subtitle:v({id:(0,A.O)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:e.createElement(a.CheckPermissions,{permissions:E.Z.open},e.createElement(m.z,{onClick:J,startIcon:e.createElement(I.default,null)},v({id:(0,A.O)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),e.createElement(M.D,null,H&&e.createElement(a.LoadingIndicatorPage,null,"Plugin is loading"),o!=null&&o.docVersions.length?e.createElement(r.i,{colCount:_,rowCount:ee},e.createElement(d.h,null,e.createElement(u.Tr,null,e.createElement(c.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,A.O)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),e.createElement(c.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},v({id:(0,A.O)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),e.createElement(x.p,null,o.docVersions.sort((C,oe)=>C.generatedDate<oe.generatedDate?1:-1).map(C=>e.createElement(u.Tr,{key:C.version},e.createElement(c.Td,{width:"50%"},e.createElement(g.Z,null,C.version)),e.createElement(c.Td,{width:"50%"},e.createElement(g.Z,null,C.generatedDate)),e.createElement(c.Td,null,e.createElement(P.k,Q({justifyContent:"end"},a.stopPropagation),e.createElement(f.h,{onClick:J,noBorder:!0,icon:e.createElement(I.default,null),label:v({id:(0,A.O)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:`${C.version}`})}),e.createElement(a.CheckPermissions,{permissions:E.Z.regenerate},e.createElement(f.h,{onClick:()=>te(C.version),noBorder:!0,icon:e.createElement(B.Z,null),label:v({id:(0,A.O)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:`${C.version}`})})),e.createElement(a.CheckPermissions,{permissions:E.Z.update},C.version!==o.currentVersion&&e.createElement(f.h,{onClick:()=>re(C.version),noBorder:!0,icon:e.createElement(Z.default,null),label:v({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${C.version}`})})))))))):e.createElement(a.EmptyStateLayout,null)),e.createElement(a.ConfirmDialog,{isConfirmButtonLoading:j,onConfirm:ae,onToggleDialog:ne,isOpen:U})))}},4733:(W,b,t)=>{t.d(b,{Z:()=>g});var e=t(23724),y=t(68547),a=t(49950),p=(P,r,d)=>new Promise((u,c)=>{var x=B=>{try{I(d.next(B))}catch(E){c(E)}},Z=B=>{try{I(d.throw(B))}catch(E){c(E)}},I=B=>B.done?u(B.value):Promise.resolve(B.value).then(x,Z);I((d=d.apply(P,r)).next())});const m=({prefix:P,version:r})=>(0,y.request)(`${P}/deleteDoc/${r}`,{method:"DELETE"}),D=P=>p(void 0,null,function*(){try{return yield(0,y.request)(`/${a.Z}/getInfos`,{method:"GET"})}catch(r){return P({type:"warning",message:{id:"notification.error"}}),null}}),R=({prefix:P,version:r})=>(0,y.request)(`${P}/regenerateDoc`,{method:"POST",body:{version:r}}),M=({prefix:P,body:r})=>(0,y.request)(`${P}/updateSettings`,{method:"PUT",body:r});var h=t(798);const g=()=>{const P=(0,e.useQueryClient)(),r=(0,y.useNotification)(),{isLoading:d,data:u}=(0,e.useQuery)("get-documentation",()=>D(r)),c=E=>{r({type:"warning",message:E.response.payload.message})},x=(E,A)=>{P.invalidateQueries("get-documentation"),r({type:E,message:{id:(0,h.Z)(A)}})},Z=(0,e.useMutation)(m,{onSuccess:()=>x("info","notification.delete.success"),onError:E=>c(E)}),I=(0,e.useMutation)(M,{onSuccess:()=>x("success","notification.update.success"),onError:c}),B=(0,e.useMutation)(R,{onSuccess:()=>x("info","notification.generate.success"),onError:E=>c(E)});return{data:u,isLoading:d,deleteMutation:Z,submitMutation:I,regenerateDocMutation:B}}},798:(W,b,t)=>{t.d(b,{Z:()=>a});var e=t(49950);const a=p=>`${e.Z}.${p}`},93742:(W,b,t)=>{t.d(b,{O:()=>e.Z});var e=t(798)},49066:(W,b,t)=>{t.d(b,{D:()=>p});var e=t(67294),y=t(45697),a=t(35961);const p=({children:m})=>e.createElement(a.x,{paddingLeft:10,paddingRight:10},m);p.propTypes={children:y.node.isRequired}},67838:(W,b,t)=>{t.d(b,{T:()=>E});var e=t(67294),y=t(71893),a=t(45697),p=t(72735),m=t(35961),D=t(46273);const R=n=>{const l=(0,e.useRef)(null),[i,s]=(0,e.useState)(!0),T=([L])=>{s(L.isIntersecting)};return(0,e.useEffect)(()=>{const L=l.current,w=new IntersectionObserver(T,n);return L&&w.observe(l.current),()=>{L&&w.disconnect()}},[l,n]),[l,i]};var M=t(98402);const h=(n,l)=>{const i=(0,M.useCallbackRef)(l);(0,e.useLayoutEffect)(()=>{const s=new ResizeObserver(i);return Array.isArray(n)?n.forEach(T=>{T.current&&s.observe(T.current)}):n.current&&s.observe(n.current),()=>{s.disconnect()}},[n,i])};var f=Object.defineProperty,g=Object.defineProperties,P=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(n,l,i)=>l in n?f(n,l,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[l]=i,x=(n,l)=>{for(var i in l||(l={}))d.call(l,i)&&c(n,i,l[i]);if(r)for(var i of r(l))u.call(l,i)&&c(n,i,l[i]);return n},Z=(n,l)=>g(n,P(l)),I=(n,l)=>{var i={};for(var s in n)d.call(n,s)&&l.indexOf(s)<0&&(i[s]=n[s]);if(n!=null&&r)for(var s of r(n))l.indexOf(s)<0&&u.call(n,s)&&(i[s]=n[s]);return i};const B=()=>{const n=(0,e.useRef)(null),[l,i]=(0,e.useState)(null),[s,T]=R({root:null,rootMargin:"0px",threshold:0});return h(s,()=>{s.current&&i(s.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{n.current&&i(n.current.getBoundingClientRect())},[n]),{containerRef:s,isVisible:T,baseHeaderLayoutRef:n,headerSize:l}},E=n=>{const{containerRef:l,isVisible:i,baseHeaderLayoutRef:s,headerSize:T}=B();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:T==null?void 0:T.height},ref:l},i&&e.createElement(S,x({ref:s},n))),!i&&e.createElement(S,Z(x({},n),{sticky:!0,width:T==null?void 0:T.width})))};E.displayName="HeaderLayout";const A=(0,y.default)(m.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${n=>n.width}px;
  z-index: 4;
  box-shadow: ${({theme:n})=>n.shadows.tableShadow};
`,S=e.forwardRef((n,l)=>{var i=n,{navigationAction:s,primaryAction:T,secondaryAction:L,subtitle:w,title:K,sticky:Q,width:F}=i,G=I(i,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const N=typeof w=="string";return Q?e.createElement(A,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:F,"data-strapi-header-sticky":!0},e.createElement(D.k,{justifyContent:"space-between"},e.createElement(D.k,null,s&&e.createElement(m.x,{paddingRight:3},s),e.createElement(m.x,null,e.createElement(p.Z,x({variant:"beta",as:"h1"},G),K),N?e.createElement(p.Z,{variant:"pi",textColor:"neutral600"},w):w),L?e.createElement(m.x,{paddingLeft:4},L):null),e.createElement(D.k,null,T?e.createElement(m.x,{paddingLeft:2},T):void 0))):e.createElement(m.x,{ref:l,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0},s?e.createElement(m.x,{paddingBottom:2},s):null,e.createElement(D.k,{justifyContent:"space-between"},e.createElement(D.k,null,e.createElement(p.Z,x({as:"h1",variant:"alpha"},G),K),L?e.createElement(m.x,{paddingLeft:4},L):null),T),N?e.createElement(p.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},w):w)});S.displayName="BaseHeaderLayout",S.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},S.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,sticky:a.bool,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired,width:a.number},E.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},E.propTypes={navigationAction:a.node,primaryAction:a.node,secondaryAction:a.node,subtitle:a.oneOfType([a.string,a.node]),title:a.string.isRequired}},17034:(W,b,t)=>{t.d(b,{A:()=>R});var e=t(67294),y=t(45697),a=t(71893),p=t(35961);const m=(0,a.default)(p.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:M})=>M?"auto 1fr":"1fr"};
`,D=(0,a.default)(p.x)`
  overflow-x: hidden;
`,R=({sideNav:M,children:h})=>e.createElement(m,{hasSideNav:Boolean(M)},M,e.createElement(D,{paddingBottom:10},h));R.defaultProps={sideNav:void 0},R.propTypes={children:y.node.isRequired,sideNav:y.node}},185:(W,b,t)=>{t.d(b,{o:()=>P});var e=t(67294),y=t(45697),a=t(71893),p=Object.defineProperty,m=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,M=(r,d,u)=>d in r?p(r,d,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[d]=u,h=(r,d)=>{for(var u in d||(d={}))D.call(d,u)&&M(r,u,d[u]);if(m)for(var u of m(d))R.call(d,u)&&M(r,u,d[u]);return r},f=(r,d)=>{var u={};for(var c in r)D.call(r,c)&&d.indexOf(c)<0&&(u[c]=r[c]);if(r!=null&&m)for(var c of m(r))d.indexOf(c)<0&&R.call(r,c)&&(u[c]=r[c]);return u};const g=a.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,P=r=>{var d=r,{labelledBy:u}=d,c=f(d,["labelledBy"]);const x=u||"main-content-title";return e.createElement(g,h({"aria-labelledby":x,id:"main-content",tabIndex:-1},c))};P.defaultProps={labelledBy:void 0},P.propTypes={labelledBy:y.string}},30815:(W,b,t)=>{t.d(b,{Z:()=>M});var e=t(67294),y=Object.defineProperty,a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,D=(h,f,g)=>f in h?y(h,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):h[f]=g,R=(h,f)=>{for(var g in f||(f={}))p.call(f,g)&&D(h,g,f[g]);if(a)for(var g of a(f))m.call(f,g)&&D(h,g,f[g]);return h};function M(h){return e.createElement("svg",R({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}}]);
