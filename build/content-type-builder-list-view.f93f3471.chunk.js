"use strict";(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[5905],{76761:(ce,B,a)=>{a.r(B),a.d(B,{default:()=>ln});var n=a(67294),c=a(68547),O=a(96315),k=a(67109),z=a(85018),R=a(4585),$=a(29728),j=a(46273),p=a(7681),i=a(35961),u=a(67838),We=a(49066),Ke=a(27361),P=a.n(Ke),He=a(18721),Xe=a.n(He),Ge=a(18446),de=a.n(Ge),Je=a(11700),pe=a.n(Je),S=a(97132),Y=a(49656),Qe=a(45697),r=a.n(Qe),w=a(72735),me=a(38939),ue=a(8060),fe=a(79031),K=a(37909),Ye=a(49386),ge=a(26478),N=a(13588),T=a(71893),E=a(5002),V=a(28702),qe=a(70968);const _e=(0,T.default)(V.Flex)`
  border-radius: 50%;
  color: ${({theme:e,isActive:t})=>t?e.colors.primary600:e.colors.neutral600};
  height: ${({theme:e})=>e.spaces[8]};
  width: ${({theme:e})=>e.spaces[8]};

  svg {
    height: ${({theme:e})=>e.spaces[5]};
    width: ${({theme:e})=>e.spaces[5]};
  }
`;function q({isActive:e}){return n.createElement(_e,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",isActive:e},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},n.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}q.defaultProps={isActive:!1},q.propTypes={isActive:r().bool};const ye=(0,T.default)(V.Box)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.pxToRem)(8)};

  svg {
    width: ${(0,c.pxToRem)(10)};
    height: ${(0,c.pxToRem)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,et=(0,T.default)(V.Flex)`
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${ye} {
      display: block;
    }

    ${V.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`;function _({component:e,dzName:t,index:o,isActive:l,isInDevelopmentMode:d,onClick:s}){const{modifiedData:g,removeComponentFromDynamicZone:C}=(0,N.Z)(),{schema:{displayName:f}}=P()(g,["components",e],{schema:{}}),v=h=>{h.stopPropagation(),C(t,o)};return n.createElement(et,{as:"button",alignItems:"center",direction:"column",className:l?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:s},n.createElement(q,{isActive:l}),n.createElement(V.Box,{marginTop:1,maxWidth:"100%"},n.createElement(V.Typography,{variant:"pi",fontWeight:"bold",ellipsis:!0},f)),d&&n.createElement(ye,{as:"button",onClick:v,type:"button"},n.createElement(qe.default,null)))}_.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},_.propTypes={component:r().string,dzName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool,isInDevelopmentMode:r().bool,onClick:r().func};const tt=_,ve=T.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:t,theme:o})=>t?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function ee({customRowComponent:e,component:t,isFromDynamicZone:o,isNestedInDZComponent:l,firstLoopComponentUid:d}){const{modifiedData:s}=(0,N.Z)(),{schema:{attributes:g}}=P()(s,["components",t],{schema:{attributes:[]}});return n.createElement(ve,{isChildOfDynamicZone:o,className:"component-row"},n.createElement("td",{colSpan:12},n.createElement(Le,{customRowComponent:e,items:g,targetUid:t,firstLoopComponentUid:d||t,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:l,isSub:!0,secondLoopComponentUid:d?t:null})))}ee.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},ee.propTypes={component:r().string,customRowComponent:r().func,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool};const he=ee;var nt=Object.defineProperty,ot=Object.defineProperties,rt=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Ee=(e,t,o)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,it=(e,t)=>{for(var o in t||(t={}))at.call(t,o)&&Ee(e,o,t[o]);if(be)for(var o of be(t))lt.call(t,o)&&Ee(e,o,t[o]);return e},st=(e,t)=>ot(e,rt(t));const ct=(0,T.default)(O.default)`
  width: ${(0,c.pxToRem)(32)};
  height: ${(0,c.pxToRem)(32)};
  padding: ${(0,c.pxToRem)(9)};
  border-radius: ${(0,c.pxToRem)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,dt=(0,T.default)(i.x)`
  height: ${(0,c.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,pt=(0,T.default)(p.K)`
  width: 100%;
  overflow-x: auto;
`,mt=(0,T.default)(i.x)`
  padding-top: ${(0,c.pxToRem)(90)};
`,ut=(0,T.default)(p.K)`
  flex-shrink: 0;
  width: ${(0,c.pxToRem)(140)};
  height: ${(0,c.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`;function te({customRowComponent:e,components:t,addComponent:o,name:l,targetUid:d}){const{isInDevelopmentMode:s}=(0,N.Z)(),[g,C]=(0,n.useState)(0),{formatMessage:f}=(0,S.useIntl)(),v=m=>{g!==m&&C(m)},h=()=>{o(l)};return n.createElement(ve,{className:"dynamiczone-row",isFromDynamicZone:!0},n.createElement("td",{colSpan:12},n.createElement(dt,{paddingLeft:8},n.createElement(pt,{horizontal:!0,spacing:2},s&&n.createElement("button",{type:"button",onClick:h},n.createElement(ut,{spacing:1},n.createElement(ct,null),n.createElement(w.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},f({id:(0,E.Z)("button.component.add"),formatMessage:"Add a component"})))),t.map((m,y)=>n.createElement(tt,{key:m,dzName:l,index:y,component:m,isActive:g===y,isInDevelopmentMode:s,onClick:()=>v(y)})))),n.createElement(mt,null,t.map((m,y)=>{const b={customRowComponent:e,component:m};return n.createElement(i.x,{tabId:`${y}`,key:m,style:{display:g===y?"block":"none"}},n.createElement("table",null,n.createElement("tbody",null,n.createElement(he,st(it({},b),{isFromDynamicZone:!0,targetUid:d,key:m})))))}))))}te.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},te.propTypes={addComponent:r().func,components:r().instanceOf(Array),customRowComponent:r().func,name:r().string,targetUid:r().string.isRequired};const ft=te,gt=(0,T.default)(i.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`;var yt=Object.defineProperty,H=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,we=(e,t,o)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,vt=(e,t)=>{for(var o in t||(t={}))Ce.call(t,o)&&we(e,o,t[o]);if(H)for(var o of H(t))Te.call(t,o)&&we(e,o,t[o]);return e},ht=(e,t)=>{var o={};for(var l in e)Ce.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(e!=null&&H)for(var l of H(e))t.indexOf(l)<0&&Te.call(e,l)&&(o[l]=e[l]);return o};const bt=(0,T.default)(i.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:t})=>e.colors[`${t}600`]};
  }
`,Et=(0,T.default)(i.x)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Oe=e=>{var t=e,{children:o,icon:l,color:d}=t,s=ht(t,["children","icon","color"]);return n.createElement(Et,vt({paddingBottom:4,paddingTop:4,as:"button",type:"button"},s),n.createElement(j.k,null,n.createElement(bt,{color:d,"aria-hidden":!0,background:`${d}200`},l),n.createElement(i.x,{paddingLeft:3},n.createElement(w.Z,{variant:"pi",fontWeight:"bold",textColor:`${d}600`},o))))};Oe.propTypes={color:r().string.isRequired,children:r().string.isRequired,icon:r().node.isRequired};const Ct=Oe;var Tt=Object.defineProperty,wt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,xe=(e,t,o)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,X=(e,t)=>{for(var o in t||(t={}))Pt.call(t,o)&&xe(e,o,t[o]);if(Pe)for(var o of Pe(t))xt.call(t,o)&&xe(e,o,t[o]);return e},ne=(e,t)=>wt(e,Ot(t));function oe({addComponentToDZ:e,customRowComponent:t,editTarget:o,firstLoopComponentUid:l,isFromDynamicZone:d,isMain:s,isNestedInDZComponent:g,isSub:C,items:f,secondLoopComponentUid:v,targetUid:h}){const{formatMessage:m}=(0,S.useIntl)(),{trackUsage:y}=(0,c.useTracking)(),{isInDevelopmentMode:b,modifiedData:F,isInContentTypeView:Z}=(0,N.Z)(),{onOpenModalAddField:D}=(0,ge.Z)(),x=()=>{y("hasClickedCTBAddFieldBanner"),D({forTarget:o,targetUid:h})};return h?f.length===0&&s?n.createElement(me.i,{colCount:2,rowCount:2},n.createElement(ue.h,null,n.createElement(fe.Tr,null,n.createElement(K.Th,null,n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),n.createElement(K.Th,null,n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),n.createElement(c.EmptyBodyTable,{action:n.createElement($.z,{onClick:x,size:"L",startIcon:n.createElement(O.default,null),variant:"secondary"},m({id:(0,E.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:Z?{id:(0,E.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,E.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):n.createElement(gt,null,n.createElement(i.x,X({paddingLeft:6,paddingRight:s?6:0},s&&{style:{overflowX:"auto"}}),n.createElement("table",null,s&&n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),n.createElement("th",{colSpan:"2"},n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),n.createElement("tbody",null,f.map(M=>{const{type:A}=M,U=t;return n.createElement(n.Fragment,{key:M.name},n.createElement(U,ne(X({},M),{isNestedInDZComponent:g,targetUid:h,editTarget:o,firstLoopComponentUid:l,isFromDynamicZone:d,secondLoopComponentUid:v})),A==="component"&&n.createElement(he,ne(X({},M),{customRowComponent:t,targetUid:h,isNestedInDZComponent:d,editTarget:o,firstLoopComponentUid:l})),A==="dynamiczone"&&n.createElement(ft,ne(X({},M),{customRowComponent:t,addComponent:e,targetUid:h})))})))),s&&b&&n.createElement(Ye.c,{icon:n.createElement(O.default,null),onClick:x},m({id:(0,E.Z)(`form.button.add.field.to.${F.contentType?F.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})),C&&b&&n.createElement(Ct,{icon:n.createElement(O.default,null),onClick:x,color:d?"primary":"neutral"},m({id:(0,E.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):n.createElement(me.i,{colCount:2,rowCount:2},n.createElement(ue.h,null,n.createElement(fe.Tr,null,n.createElement(K.Th,null,n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.name",defaultMessage:"Name"}))),n.createElement(K.Th,null,n.createElement(w.Z,{variant:"sigma",textColor:"neutral600"},m({id:"global.type",defaultMessage:"Type"}))))),n.createElement(c.EmptyBodyTable,{colSpan:2,content:{id:(0,E.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}oe.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},oe.propTypes={addComponentToDZ:r().func,customRowComponent:r().func,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,isNestedInDZComponent:r().bool,isMain:r().bool,items:r().instanceOf(Array),secondLoopComponentUid:r().string,targetUid:r().string,isSub:r().bool};const Le=oe;var $e=a(12028),Lt=Object.defineProperty,Ze=Object.getOwnPropertySymbols,$t=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,Me=(e,t,o)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Mt=(e,t)=>{for(var o in t||(t={}))$t.call(t,o)&&Me(e,o,t[o]);if(Ze)for(var o of Ze(t))Zt.call(t,o)&&Me(e,o,t[o]);return e};function Rt(e){return n.createElement("svg",Mt({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0114 0v1zm-2 0V9A5 5 0 007 9v1h10zm-6 4v4h2v-4h-2z",fill:"#8E8EA9"}))}var Dt=a(20022),It=Object.defineProperty,Re=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,De=(e,t,o)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,At=(e,t)=>{for(var o in t||(t={}))jt.call(t,o)&&De(e,o,t[o]);if(Re)for(var o of Re(t))Ft.call(t,o)&&De(e,o,t[o]);return e};const Bt=(0,T.default)(i.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:t})=>e.colors[t]};
    display: block;
  }
`,St=T.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,Ie=e=>n.createElement(Bt,null,n.createElement(St,At({width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Ie.propTypes={color:r().string.isRequired};const Nt=Ie,re=({content:e})=>pe()(e);re.defaultProps={content:null},re.propTypes={content:r().string};const Vt=re,kt=(0,T.default)(i.x)`
  position: relative;
`;var zt=a(66848);const ae=({type:e,customField:t,repeatable:o})=>{const{formatMessage:l}=(0,S.useIntl)();let d=e;return["integer","biginteger","float","decimal"].includes(e)?d="number":["string"].includes(e)&&(d="text"),t?n.createElement(w.Z,null,l({id:(0,E.Z)("attribute.customField"),defaultMessage:"Custom field"})):n.createElement(w.Z,null,l({id:(0,E.Z)(`attribute.${d}`),defaultMessage:e}),"\xA0",o&&l({id:(0,E.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};ae.defaultProps={customField:null,repeatable:!1},ae.propTypes={type:r().string.isRequired,customField:r().string,repeatable:r().bool};const Ut=ae;var Wt=Object.defineProperty,je=Object.getOwnPropertySymbols,Kt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,Fe=(e,t,o)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ae=(e,t)=>{for(var o in t||(t={}))Kt.call(t,o)&&Fe(e,o,t[o]);if(je)for(var o of je(t))Ht.call(t,o)&&Fe(e,o,t[o]);return e};function le({configurable:e,customField:t,editTarget:o,firstLoopComponentUid:l,isFromDynamicZone:d,name:s,onClick:g,relation:C,repeatable:f,secondLoopComponentUid:v,target:h,targetUid:m,type:y}){const{contentTypes:b,isInDevelopmentMode:F,removeAttribute:Z}=(0,N.Z)(),{formatMessage:D}=(0,S.useIntl)(),x=y==="relation"&&C.includes("morph"),M=["integer","biginteger","float","decimal"].includes(y)?"number":y,A=P()(b,[h],{}),U=P()(A,["schema","displayName"],""),W=P()(A,"plugin"),se=h?"relation":M,G=()=>{x||e!==!1&&g(o,v||l||m,s,y,t)};let I;return v&&l?I=2:l?I=1:I=0,n.createElement(kt,Ae({as:"tr"},(0,c.onRowClick)({fn:G,condition:F&&e&&!x})),n.createElement("td",{style:{position:"relative"}},I!==0&&n.createElement(Nt,{color:d?"primary200":"neutral150"}),n.createElement(p.K,{paddingLeft:2,spacing:4,horizontal:!0},n.createElement(zt.Z,{type:se,customField:t}),n.createElement(w.Z,{fontWeight:"bold"},s))),n.createElement("td",null,h?n.createElement(w.Z,null,D({id:(0,E.Z)(`modelPage.attribute.${x?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",n.createElement("span",{style:{fontStyle:"italic"}},n.createElement(Vt,{content:U}),"\xA0",W&&`(${D({id:(0,E.Z)("from"),defaultMessage:"from"})}: ${W})`)):n.createElement(Ut,{type:y,customField:t,repeatable:f})),n.createElement("td",null,F?n.createElement(j.k,Ae({justifyContent:"flex-end"},c.stopPropagation),e?n.createElement(p.K,{horizontal:!0,spacing:1},!x&&n.createElement($e.h,{onClick:G,label:`${D({id:"app.utils.edit",defaultMessage:"Edit"})} ${s}`,noBorder:!0,icon:n.createElement(R.Z,null)}),n.createElement($e.h,{onClick:J=>{J.stopPropagation(),Z(o,s,v||l||"")},label:`${D({id:"global.delete",defaultMessage:"Delete"})} ${s}`,noBorder:!0,icon:n.createElement(Dt.default,null)})):n.createElement(Rt,null)):n.createElement(i.x,{height:(0,c.pxToRem)(32)})))}le.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},le.propTypes={configurable:r().bool,customField:r().string,editTarget:r().string.isRequired,firstLoopComponentUid:r().string,isFromDynamicZone:r().bool,name:r().string.isRequired,onClick:r().func,relation:r().string,repeatable:r().bool,secondLoopComponentUid:r().string,target:r().string,targetUid:r().string,type:r().string};const Xt=(0,n.memo)(le),Gt=e=>{let t;switch(e){case"date":case"datetime":case"time":case"timestamp":t="date";break;case"integer":case"biginteger":case"decimal":case"float":t="number";break;case"string":case"text":t="text";break;case"":t="relation";break;default:t=e}return t};var Jt=a(98432);const Qt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},ie=({disabled:e,isTemporary:t,isInContentTypeView:o,contentTypeKind:l,targetUid:d})=>{const{formatMessage:s}=(0,S.useIntl)(),{push:g}=(0,Y.useHistory)(),{collectionTypesConfigurations:C,componentsConfigurations:f,singleTypesConfigurations:v}=Qt,h=s({id:"content-type-builder.form.button.configure-view"});let m=C;const y=()=>(t||g(o?`/content-manager/collectionType/${d}/configurations/edit`:`/content-manager/components/${d}/configurations/edit`),!1);return o&&l==="singleType"&&(m=v),o||(m=f),n.createElement(c.CheckPermissions,{permissions:m},n.createElement($.z,{startIcon:n.createElement(Jt.Z,null),variant:"tertiary",onClick:y,disabled:t||e},h))};ie.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},ie.propTypes={disabled:r().bool.isRequired,contentTypeKind:r().string,isInContentTypeView:r().bool,isTemporary:r().bool,targetUid:r().string};const Yt=(0,n.memo)(ie);var qt=Object.defineProperty,_t=Object.defineProperties,en=Object.getOwnPropertyDescriptors,Be=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,Se=(e,t,o)=>t in e?qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,on=(e,t)=>{for(var o in t||(t={}))tn.call(t,o)&&Se(e,o,t[o]);if(Be)for(var o of Be(t))nn.call(t,o)&&Se(e,o,t[o]);return e},rn=(e,t)=>_t(e,en(t)),an=(e,t,o)=>new Promise((l,d)=>{var s=f=>{try{C(o.next(f))}catch(v){d(v)}},g=f=>{try{C(o.throw(f))}catch(v){d(v)}},C=f=>f.done?l(f.value):Promise.resolve(f.value).then(s,g);C((o=o.apply(e,t)).next())});const ln=()=>{const{initialData:e,modifiedData:t,isInDevelopmentMode:o,isInContentTypeView:l,submitData:d}=(0,N.Z)(),{formatMessage:s}=(0,S.useIntl)(),{trackUsage:g}=(0,c.useTracking)(),C=(0,Y.useRouteMatch)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:f,onOpenModalAddField:v,onOpenModalEditField:h,onOpenModalEditSchema:m,onOpenModalEditCustomField:y}=(0,ge.Z)(),b=l?"contentType":"component",F=[b,"schema","attributes"],Z=P()(t,[b,"uid"]),D=P()(t,[b,"isTemporary"],!1),x=P()(t,[b,"schema","kind"],null),M=P()(t,F,[]),A=Xe()(e,[b,"plugin"]),U=!de()(t,e),W=l?"contentType":"component",se=L=>{f({dynamicZoneTarget:L,targetUid:Z})},G=(L,Ne,Ve,ke,ze)=>an(void 0,null,function*(){const Ue=Gt(ke);ze?y({forTarget:L,targetUid:Ne,attributeName:Ve,attributeType:Ue,customFieldUid:ze}):h({forTarget:L,targetUid:Ne,attributeName:Ve,attributeType:Ue,step:ke==="component"?"2":null})});let I=P()(t,[b,"schema","displayName"],"");const J=P()(t,[b,"schema","kind"],""),Q=(C==null?void 0:C.params.currentUID)==="create-content-type";!I&&Q&&(I=s({id:(0,E.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const sn=()=>{const L=J||b;L==="collectionType"&&g("willEditNameOfContentType"),L==="singleType"&&g("willEditNameOfSingleType"),m({modalType:b,forTarget:b,targetUid:Z,kind:L})};return n.createElement(n.Fragment,null,n.createElement(Y.Prompt,{message:s({id:(0,E.Z)("prompt.unsaved")}),when:U}),n.createElement(u.T,{id:"title",primaryAction:o&&n.createElement(p.K,{horizontal:!0,spacing:2},!Q&&n.createElement($.z,{startIcon:n.createElement(O.default,null),variant:"secondary",onClick:()=>{v({forTarget:W,targetUid:Z})}},s({id:(0,E.Z)("button.attributes.add.another")})),n.createElement($.z,{startIcon:n.createElement(z.Z,null),onClick:()=>d(),type:"submit",disabled:de()(t,e)},s({id:"global.save",defaultMessage:"Save"}))),secondaryAction:o&&!A&&!Q&&n.createElement($.z,{startIcon:n.createElement(R.Z,null),variant:"tertiary",onClick:sn},s({id:"app.utils.edit",defaultMessage:"Edit"})),title:pe()(I),subtitle:s({id:(0,E.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:n.createElement(c.Link,{startIcon:n.createElement(k.Z,null),to:"/plugins/content-type-builder/"},s({id:"global.back",defaultMessage:"Back"}))}),n.createElement(We.D,null,n.createElement(p.K,{spacing:4},n.createElement(j.k,{justifyContent:"flex-end"},n.createElement(p.K,{horizontal:!0,spacing:2},n.createElement(Yt,{key:"link-to-cm-settings-view",targetUid:Z,isTemporary:D,isInContentTypeView:l,contentTypeKind:x,disabled:Q}))),n.createElement(i.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},n.createElement(Le,{items:M,customRowComponent:L=>n.createElement(Xt,rn(on({},L),{onClick:G})),addComponentToDZ:se,targetUid:Z,editTarget:W,isMain:!0})))))}},67109:(ce,B,a)=>{a.d(B,{Z:()=>j});var n=a(67294),c=Object.defineProperty,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,R=(p,i,u)=>i in p?c(p,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):p[i]=u,$=(p,i)=>{for(var u in i||(i={}))k.call(i,u)&&R(p,u,i[u]);if(O)for(var u of O(i))z.call(i,u)&&R(p,u,i[u]);return p};function j(p){return n.createElement("svg",$({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),n.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}},98432:(ce,B,a)=>{a.d(B,{Z:()=>j});var n=a(67294),c=Object.defineProperty,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,R=(p,i,u)=>i in p?c(p,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):p[i]=u,$=(p,i)=>{for(var u in i||(i={}))k.call(i,u)&&R(p,u,i[u]);if(O)for(var u of O(i))z.call(i,u)&&R(p,u,i[u]);return p};function j(p){return n.createElement("svg",$({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p),n.createElement("path",{d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H5a.2.2 0 01-.2-.2V.2zM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 01-.2.2H.2a.2.2 0 01-.2-.2V9.8zM5 19.2a.2.2 0 00-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 00.2-.2v-4.4a.2.2 0 00-.2-.2H5z",fill:"#212134"}))}}}]);
