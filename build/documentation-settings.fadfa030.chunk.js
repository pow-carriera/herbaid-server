"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[8503],{31346:(S,i,e)=>{e.r(i),e.d(i,{default:()=>w});var t=e(67294),l=e(97132),f=e(80831),d=e(68547),P=e(67838),A=e(49066),M=e(185),T=e(29728),O=e(35961),Z=e(7681),C=e(72735),n=e(20707),s=e(16364),c=e(11276),h=e(74571),u=e(8934),g=e(94123),v=e(85018),m=e(80826),a=e(93742),o=e(4733),D=e(71893),F=e(25752);const Q=(0,D.default)(F.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:r})=>r.colors.neutral600};
    }
  }
`;var I=e(53209);const W=I.Ry().shape({restrictedAccess:I.O7(),password:I.Z_().when("restrictedAccess",(r,E)=>r?E.required(d.translatedErrors.required):E)}),w=()=>{(0,d.useFocusWhenNavigate)();const{formatMessage:r}=(0,l.useIntl)(),{submitMutation:E,data:y,isLoading:x}=(0,o.Z)(),[L,U]=(0,t.useState)(!1),K=R=>{E.mutate({prefix:y==null?void 0:y.prefix,body:R})};return t.createElement(M.o,null,x?t.createElement(d.LoadingIndicatorPage,null,"Plugin settings are loading"):t.createElement(f.Formik,{initialValues:{restrictedAccess:(y==null?void 0:y.documentationAccess.restrictedAccess)||!1,password:""},onSubmit:K,validationSchema:W},({handleSubmit:R,values:p,handleChange:G,errors:$,setFieldTouched:N,setFieldValue:B})=>t.createElement(d.Form,{noValidate:!0,onSubmit:R},t.createElement(P.T,{title:r({id:(0,a.O)("plugin.name"),defaultMessage:"Documentation"}),subtitle:r({id:(0,a.O)("pages.SettingsPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:t.createElement(d.CheckPermissions,{permissions:m.Z.update},t.createElement(T.z,{type:"submit",startIcon:t.createElement(v.Z,null)},r({id:(0,a.O)("pages.SettingsPage.Button.save"),defaultMessage:"Save"})))}),t.createElement(A.D,null,t.createElement(O.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(Z.K,{spacing:4},t.createElement(C.Z,{variant:"delta",as:"h2"},r({id:"global.settings",defaultMessage:"Settings"})),t.createElement(c.r,{gap:4},t.createElement(h.P,{col:6,s:12},t.createElement(n.s,{name:"restrictedAccess",label:r({id:(0,a.O)("pages.SettingsPage.toggle.label"),defaultMessage:"Restricted Access"}),hint:r({id:(0,a.O)("pages.SettingsPage.toggle.hint"),defaultMessage:"Make the documentation endpoint private"}),checked:p.restrictedAccess,onChange:()=>{p.restrictedAccess===!0&&(B("password","",!1),N("password",!1,!1)),B("restrictedAccess",!p.restrictedAccess,!1)},onLabel:"On",offLabel:"Off"})),p.restrictedAccess&&t.createElement(h.P,{col:6,s:12},t.createElement(s.o,{label:r({id:"global.password",defaultMessage:"Password"}),name:"password",placeholder:"**********",type:L?"text":"password",value:p.password,onChange:G,error:$.password?r({id:$.password,defaultMessage:"Invalid value"}):null,endAction:t.createElement(Q,{onClick:H=>{H.stopPropagation(),U(V=>!V)},label:r(L?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},L?t.createElement(u.default,null):t.createElement(g.default,null))})))))))))}},4733:(S,i,e)=>{e.d(i,{Z:()=>C});var t=e(68960),l=e(68547),f=e(49950),d=(n,s,c)=>new Promise((h,u)=>{var g=a=>{try{m(c.next(a))}catch(o){u(o)}},v=a=>{try{m(c.throw(a))}catch(o){u(o)}},m=a=>a.done?h(a.value):Promise.resolve(a.value).then(g,v);m((c=c.apply(n,s)).next())});const P=({prefix:n,version:s})=>(0,l.request)(`${n}/deleteDoc/${s}`,{method:"DELETE"}),A=n=>d(void 0,null,function*(){try{return yield(0,l.request)(`/${f.Z}/getInfos`,{method:"GET"})}catch(s){return n({type:"warning",message:{id:"notification.error"}}),null}}),M=({prefix:n,version:s})=>(0,l.request)(`${n}/regenerateDoc`,{method:"POST",body:{version:s}}),T=({prefix:n,body:s})=>(0,l.request)(`${n}/updateSettings`,{method:"PUT",body:s});var O=e(798);const C=()=>{const n=(0,t.useQueryClient)(),s=(0,l.useNotification)(),{isLoading:c,data:h}=(0,t.useQuery)("get-documentation",()=>A(s)),u=o=>{s({type:"warning",message:o.response.payload.message})},g=(o,D)=>{n.invalidateQueries("get-documentation"),s({type:o,message:{id:(0,O.Z)(D)}})},v=(0,t.useMutation)(P,{onSuccess:()=>g("info","notification.delete.success"),onError:o=>u(o)}),m=(0,t.useMutation)(T,{onSuccess:()=>g("success","notification.update.success"),onError:u}),a=(0,t.useMutation)(M,{onSuccess:()=>g("info","notification.generate.success"),onError:o=>u(o)});return{data:h,isLoading:c,deleteMutation:v,submitMutation:m,regenerateDocMutation:a}}},798:(S,i,e)=>{e.d(i,{Z:()=>f});var t=e(49950);const f=d=>`${t.Z}.${d}`},93742:(S,i,e)=>{e.d(i,{O:()=>t.Z});var t=e(798)}}]);