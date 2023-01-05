"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[9789],{75730:(B,f,t)=>{t.r(f),t.d(f,{default:()=>X});var e=t(67294),h=t(97132),i=t(68547),C=t(15482),S=t(29728),T=t(17034),Z=t(67838),R=t(49066),d=t(185),s=t(12028),r=t(72735),m=t(46273),u=t(38939),y=t(8060),M=t(79031),g=t(37909),D=t(15234),I=t(20022),P=t(8934),v=t(30815),c=t(80826),E=t(93742),b=t(96486);const Q=o=>{const a=(()=>(0,b.startsWith)(o,"/")?`${strapi.backendURL}${o}`:(0,b.startsWith)(o,"https")||(0,b.startsWith)(o,"http")?o:`${strapi.backendURL}/${o}`)();return window.open(a,"_blank"),window.focus()};var U=t(4733),z=Object.defineProperty,w=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,A=(o,a,n)=>a in o?z(o,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[a]=n,F=(o,a)=>{for(var n in a||(a={}))H.call(a,n)&&A(o,n,a[n]);if(w)for(var n of w(a))K.call(a,n)&&A(o,n,a[n]);return o},G=(o,a,n)=>new Promise((V,W)=>{var x=p=>{try{O(n.next(p))}catch($){W($)}},L=p=>{try{O(n.throw(p))}catch($){W($)}},O=p=>p.done?V(p.value):Promise.resolve(p.value).then(x,L);O((n=n.apply(o,a)).next())});const X=()=>{var o;(0,i.useFocusWhenNavigate)();const{formatMessage:a}=(0,h.useIntl)(),{data:n,isLoading:V,deleteMutation:W,regenerateDocMutation:x}=(0,U.Z)(),[L,O]=(0,e.useState)(!1),[p,$]=(0,e.useState)(!1),[J,Y]=(0,e.useState)(),k=4,q=(((o=n==null?void 0:n.docVersions)==null?void 0:o.length)||0)+1,j=()=>{const l=n!=null&&n.prefix.startsWith("/")?"":"/";Q(`${l}${n==null?void 0:n.prefix}/v${n==null?void 0:n.currentVersion}`)},_=l=>{x.mutate({version:l,prefix:n==null?void 0:n.prefix})},ee=()=>{O(!L)},te=()=>G(void 0,null,function*(){$(!0),yield W.mutateAsync({prefix:n==null?void 0:n.prefix,version:J}),O(!L),$(!1)}),ne=l=>{Y(l),O(!L)},N=a({id:(0,E.O)("plugin.name"),defaultMessage:"Documentation"});return e.createElement(T.A,null,e.createElement(C.Helmet,{title:N}),e.createElement(d.o,{"aria-busy":V},e.createElement(Z.T,{title:N,subtitle:a({id:(0,E.O)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:e.createElement(i.CheckPermissions,{permissions:c.Z.open},e.createElement(S.z,{onClick:j,startIcon:e.createElement(P.default,null)},a({id:(0,E.O)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),e.createElement(R.D,null,V&&e.createElement(i.LoadingIndicatorPage,null,"Plugin is loading"),n!=null&&n.docVersions.length?e.createElement(u.i,{colCount:k,rowCount:q},e.createElement(y.h,null,e.createElement(M.Tr,null,e.createElement(g.Th,null,e.createElement(r.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,E.O)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),e.createElement(g.Th,null,e.createElement(r.Z,{variant:"sigma",textColor:"neutral600"},a({id:(0,E.O)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),e.createElement(D.p,null,n.docVersions.sort((l,ae)=>l.generatedDate<ae.generatedDate?1:-1).map(l=>e.createElement(M.Tr,{key:l.version},e.createElement(g.Td,{width:"50%"},e.createElement(r.Z,null,l.version)),e.createElement(g.Td,{width:"50%"},e.createElement(r.Z,null,l.generatedDate)),e.createElement(g.Td,null,e.createElement(m.k,F({justifyContent:"end"},i.stopPropagation),e.createElement(s.h,{onClick:j,noBorder:!0,icon:e.createElement(P.default,null),label:a({id:(0,E.O)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:`${l.version}`})}),e.createElement(i.CheckPermissions,{permissions:c.Z.regenerate},e.createElement(s.h,{onClick:()=>_(l.version),noBorder:!0,icon:e.createElement(v.Z,null),label:a({id:(0,E.O)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:`${l.version}`})})),e.createElement(i.CheckPermissions,{permissions:c.Z.update},l.version!==n.currentVersion&&e.createElement(s.h,{onClick:()=>ne(l.version),noBorder:!0,icon:e.createElement(I.default,null),label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${l.version}`})})))))))):e.createElement(i.EmptyStateLayout,null)),e.createElement(i.ConfirmDialog,{isConfirmButtonLoading:p,onConfirm:te,onToggleDialog:ee,isOpen:L})))}},4733:(B,f,t)=>{t.d(f,{Z:()=>r});var e=t(68960),h=t(68547),i=t(49950),C=(m,u,y)=>new Promise((M,g)=>{var D=v=>{try{P(y.next(v))}catch(c){g(c)}},I=v=>{try{P(y.throw(v))}catch(c){g(c)}},P=v=>v.done?M(v.value):Promise.resolve(v.value).then(D,I);P((y=y.apply(m,u)).next())});const S=({prefix:m,version:u})=>(0,h.request)(`${m}/deleteDoc/${u}`,{method:"DELETE"}),T=m=>C(void 0,null,function*(){try{return yield(0,h.request)(`/${i.Z}/getInfos`,{method:"GET"})}catch(u){return m({type:"warning",message:{id:"notification.error"}}),null}}),Z=({prefix:m,version:u})=>(0,h.request)(`${m}/regenerateDoc`,{method:"POST",body:{version:u}}),R=({prefix:m,body:u})=>(0,h.request)(`${m}/updateSettings`,{method:"PUT",body:u});var d=t(798);const r=()=>{const m=(0,e.useQueryClient)(),u=(0,h.useNotification)(),{isLoading:y,data:M}=(0,e.useQuery)("get-documentation",()=>T(u)),g=c=>{u({type:"warning",message:c.response.payload.message})},D=(c,E)=>{m.invalidateQueries("get-documentation"),u({type:c,message:{id:(0,d.Z)(E)}})},I=(0,e.useMutation)(S,{onSuccess:()=>D("info","notification.delete.success"),onError:c=>g(c)}),P=(0,e.useMutation)(R,{onSuccess:()=>D("success","notification.update.success"),onError:g}),v=(0,e.useMutation)(Z,{onSuccess:()=>D("info","notification.generate.success"),onError:c=>g(c)});return{data:M,isLoading:y,deleteMutation:I,submitMutation:P,regenerateDocMutation:v}}},798:(B,f,t)=>{t.d(f,{Z:()=>i});var e=t(49950);const i=C=>`${e.Z}.${C}`},93742:(B,f,t)=>{t.d(f,{O:()=>e.Z});var e=t(798)},30815:(B,f,t)=>{t.d(f,{Z:()=>R});var e=t(67294),h=Object.defineProperty,i=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,T=(d,s,r)=>s in d?h(d,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[s]=r,Z=(d,s)=>{for(var r in s||(s={}))C.call(s,r)&&T(d,r,s[r]);if(i)for(var r of i(s))S.call(s,r)&&T(d,r,s[r]);return d};function R(d){return e.createElement("svg",Z({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d),e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}}]);