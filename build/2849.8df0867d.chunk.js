(self.webpackChunkherbaid_server=self.webpackChunkherbaid_server||[]).push([[2849],{44174:P=>{function b(e,a,r,p){for(var E=-1,v=e==null?0:e.length;++E<v;){var i=e[E];a(p,i,r(i),e)}return p}P.exports=b},81119:(P,b,e)=>{var a=e(89881);function r(p,E,v,i){return a(p,function(f,u,h){E(i,f,v(f),h)}),i}P.exports=r},55189:(P,b,e)=>{var a=e(44174),r=e(81119),p=e(67206),E=e(1469);function v(i,f){return function(u,h){var c=E(u)?a:r,O=f?f():{};return c(u,i,p(h,2),O)}}P.exports=v},94654:(P,b,e)=>{var a=e(21078),r=e(35161);function p(E,v){return a(r(E,v),1)}P.exports=p},7739:(P,b,e)=>{var a=e(89465),r=e(55189),p=Object.prototype,E=p.hasOwnProperty,v=r(function(i,f,u){E.call(i,u)?i[u].push(f):a(i,u,[f])});P.exports=v},35161:(P,b,e)=>{var a=e(29932),r=e(67206),p=e(69199),E=e(1469);function v(i,f){var u=E(i)?a:p;return u(i,r(f,3))}P.exports=v},2407:(P,b,e)=>{"use strict";e.d(b,{$:()=>d,O:()=>M});var a=e(67294),r=e(45697),p=e(71893),E=e(16405),v=e(72735),i=e(35961),f=e(46273),u=e(63237),h=Object.defineProperty,c=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,_=(t,o,s)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,m=(t,o)=>{for(var s in o||(o={}))O.call(o,s)&&_(t,s,o[s]);if(c)for(var s of c(o))D.call(o,s)&&_(t,s,o[s]);return t},n=(t,o)=>{var s={};for(var g in t)O.call(t,g)&&o.indexOf(g)<0&&(s[g]=t[g]);if(t!=null&&c)for(var g of c(t))o.indexOf(g)<0&&D.call(t,g)&&(s[g]=t[g]);return s};const l=(0,p.default)(f.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }
  :last-of-type ${i.x} {
    display: none;
  }
  :last-of-type ${v.Z} {
    color: ${({theme:t})=>t.colors.neutral800};
    font-weight: ${({theme:t})=>t.fontWeights.bold};
  }
`,d=({children:t})=>a.createElement(l,{inline:!0,as:"li"},a.createElement(v.Z,{variant:"pi",textColor:"neutral600"},t),a.createElement(i.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},a.createElement(E.default,null)));d.displayName="Crumb",d.propTypes={children:r.node.isRequired};const y=r.shape({type:r.oneOf([d])}),M=t=>{var o=t,{children:s,label:g}=o,C=n(o,["children","label"]);return a.createElement(f.k,m({},C),a.createElement(u.T,null,g),a.createElement("ol",{"aria-hidden":!0},s))};M.displayName="Breadcrumbs",M.propTypes={children:r.oneOfType([r.arrayOf(y),y]).isRequired,label:r.string.isRequired}},53192:(P,b,e)=>{"use strict";e.d(b,{m:()=>m});var a=e(67294),r=e(71893),p=e(45697),E=e(11276),v=Object.defineProperty,i=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(n,l,d)=>l in n?v(n,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[l]=d,c=(n,l)=>{for(var d in l||(l={}))f.call(l,d)&&h(n,d,l[d]);if(i)for(var d of i(l))u.call(l,d)&&h(n,d,l[d]);return n},O=(n,l)=>{var d={};for(var y in n)f.call(n,y)&&l.indexOf(y)<0&&(d[y]=n[y]);if(n!=null&&i)for(var y of i(n))l.indexOf(y)<0&&u.call(n,y)&&(d[y]=n[y]);return d};const D=`${232/16}rem`,_=(0,r.default)(E.r)`
  width: ${D};
  background: ${({theme:n})=>n.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:n})=>n.colors.neutral200};
  z-index: 1;
`,m=n=>{var l=n,{ariaLabel:d}=l,y=O(l,["ariaLabel"]);return a.createElement(_,c({"aria-label":d,as:"nav"},y))};m.propTypes={ariaLabel:p.string.isRequired}},42876:(P,b,e)=>{"use strict";e.d(b,{p:()=>l});var a=e(67294),r=e(45697),p=e(71893),E=e(97184),v=e(46273),i=e(72735),f=e(12028),u=e(35961),h=e(70004),c=e(49123),O=e(8509),D=e(41762),_=e(68145),m=e(7801);const n=(0,p.default)(h.i)`
  width: ${24/16}rem;
  background-color: ${({theme:d})=>d.colors.neutral200};
`,l=({as:d,label:y,searchLabel:M,searchable:t,onChange:o,value:s,onClear:g,onSubmit:C,id:B})=>{const[x,T]=(0,a.useState)(!1),R=(0,_.D)(x),K=(0,D.M)("subnav-searchbar-clear",B),I=(0,a.useRef)(),A=(0,a.useRef)();(0,a.useEffect)(()=>{x&&I.current&&I.current.focus(),R&&!x&&A.current&&A.current.focus()},[x,R]);const U=()=>{T(L=>!L)},W=L=>{g(L),I.current.focus()},S=L=>{var j;((j=L.relatedTarget)==null?void 0:j.id)!==K&&T(!1)},$=L=>{L.key===m.y.ESCAPE&&T(!1)};return x?a.createElement(u.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},a.createElement(O.U,null,a.createElement(c.w,{name:"searchbar",value:s,onChange:o,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:$,ref:I,onBlur:S,onClear:W,onSubmit:C,clearLabel:"Clear",size:"S"},M)),a.createElement(u.x,{paddingLeft:2,paddingTop:4},a.createElement(n,null))):a.createElement(u.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},a.createElement(v.k,{justifyContent:"space-between",alignItems:"flex-start"},a.createElement(i.Z,{variant:"beta",as:d},y),t&&a.createElement(f.h,{ref:A,onClick:U,label:M,icon:a.createElement(E.default,null)})),a.createElement(u.x,{paddingTop:4},a.createElement(n,null)))};l.defaultProps={as:"h2",searchable:!1,onChange(){},onClear(){},onSubmit(){},value:"",searchLabel:"",id:void 0},l.propTypes={as:r.string,id:r.string,label:r.string.isRequired,onChange:r.func,onClear:r.func,onSubmit:r.func,searchLabel:r.string,searchable:r.bool,value:r.string}},52305:(P,b,e)=>{"use strict";e.d(b,{E:()=>M});var a=e(67294),r=e(45697),p=e(71893),E=e(71818),v=e(35961),i=e(72735),f=e(46273),u=e(63507),h=Object.defineProperty,c=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,_=(t,o,s)=>o in t?h(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,m=(t,o)=>{for(var s in o||(o={}))O.call(o,s)&&_(t,s,o[s]);if(c)for(var s of c(o))D.call(o,s)&&_(t,s,o[s]);return t},n=(t,o)=>{var s={};for(var g in t)O.call(t,g)&&o.indexOf(g)<0&&(s[g]=t[g]);if(t!=null&&c)for(var g of c(t))o.indexOf(g)<0&&D.call(t,g)&&(s[g]=t[g]);return s};const l=(0,p.default)(v.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:t})=>t.colors.neutral800};
  svg > * {
    fill: ${({theme:t})=>t.colors.neutral600};
  }

  &.active {
    ${({theme:t})=>`
      background-color: ${t.colors.primary100};
      border-right: 2px solid ${t.colors.primary600};
      svg > * {
        fill: ${t.colors.primary700};
      }
      ${i.Z} {
        color: ${t.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,d=(0,p.default)(E.default)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:t,$active:o})=>o?t.colors.primary600:t.colors.neutral600};
  }
`,y=p.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,M=a.forwardRef((t,o)=>{var s=t,{children:g,icon:C,withBullet:B,as:x,isSubSectionChild:T}=s,R=n(s,["children","icon","withBullet","as","isSubSectionChild"]);return a.createElement(l,m({as:x,icon:C,background:"neutral100",paddingLeft:T?9:7,paddingBottom:2,paddingTop:2,ref:o},R),a.createElement(f.k,null,C?a.createElement(y,null,C):a.createElement(d,null),a.createElement(v.x,{paddingLeft:2},a.createElement(i.Z,{as:"span"},g))),B&&a.createElement(v.x,{as:f.k,paddingRight:4},a.createElement(d,{$active:!0})))});M.displayName="SubNavLink",M.defaultProps={as:u.f,icon:null,isSubSectionChild:!1,withBullet:!1},M.propTypes={as:r.elementType,children:r.node.isRequired,icon:r.element,isSubSectionChild:r.bool,withBullet:r.bool}},29489:(P,b,e)=>{"use strict";e.d(b,{D:()=>n});var a=e(67294),r=e(45697),p=e(71893),E=e(35961),v=e(30190),i=e(7681),f=e(12645),u=e(72735),h=e(46273);const c=(0,p.default)(h.k)`
  border: none;
  padding: 0;
  background: transparent;
`,O=p.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:l})=>l?"0deg":"180deg"});
`,D=({collapsable:l,label:d,onClick:y,ariaExpanded:M,ariaControls:t})=>l?a.createElement(c,{as:"button",onClick:y,"aria-expanded":M,"aria-controls":t,textAlign:"left"},a.createElement(E.x,{paddingRight:1},a.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},d)),l&&a.createElement(O,{rotated:M},a.createElement(f.default,{"aria-hidden":!0}))):a.createElement(c,null,a.createElement(E.x,{paddingRight:1},a.createElement(u.Z,{variant:"sigma",textColor:"neutral600"},d)));D.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick(){}},D.propTypes={ariaControls:r.string,ariaExpanded:r.bool,collapsable:r.bool,label:r.string.isRequired,onClick:r.func};var _=e(41762);const m=(0,p.default)(E.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }
`,n=({collapsable:l,label:d,badgeLabel:y,children:M,id:t})=>{const[o,s]=(0,a.useState)(!0),g=(0,_.M)("subnav-list",t),C=()=>{s(B=>!B)};return a.createElement(i.K,{spacing:1},a.createElement(m,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},a.createElement(E.x,{position:"relative",paddingRight:y?6:0},a.createElement(D,{onClick:C,ariaExpanded:o,ariaControls:g,collapsable:l,label:d}),y&&a.createElement(v.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},y))),(!l||o)&&a.createElement("ol",{id:g},a.Children.map(M,(B,x)=>a.createElement("li",{key:x},B))))};n.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},n.propTypes={badgeLabel:r.string,children:r.node.isRequired,collapsable:r.bool,id:r.string,label:r.string.isRequired}},34446:(P,b,e)=>{"use strict";e.d(b,{Z:()=>D});var a=e(67294),r=e(45697),p=e(7681),E=e(35961),v=Object.defineProperty,i=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(_,m,n)=>m in _?v(_,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):_[m]=n,c=(_,m)=>{for(var n in m||(m={}))f.call(m,n)&&h(_,n,m[n]);if(i)for(var n of i(m))u.call(m,n)&&h(_,n,m[n]);return _},O=(_,m)=>{var n={};for(var l in _)f.call(_,l)&&m.indexOf(l)<0&&(n[l]=_[l]);if(_!=null&&i)for(var l of i(_))m.indexOf(l)<0&&u.call(_,l)&&(n[l]=_[l]);return n};const D=_=>{var m=_,{children:n}=m,l=O(m,["children"]);return a.createElement(E.x,{paddingTop:2,paddingBottom:4},a.createElement(p.K,c({as:"ol",spacing:2},l),a.Children.map(n,(d,y)=>a.createElement("li",{key:y},d))))};D.propTypes={children:r.node.isRequired}},67109:(P,b,e)=>{"use strict";e.d(b,{Z:()=>u});var a=e(67294),r=Object.defineProperty,p=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,i=(h,c,O)=>c in h?r(h,c,{enumerable:!0,configurable:!0,writable:!0,value:O}):h[c]=O,f=(h,c)=>{for(var O in c||(c={}))E.call(c,O)&&i(h,O,c[O]);if(p)for(var O of p(c))v.call(c,O)&&i(h,O,c[O]);return h};function u(h){return a.createElement("svg",f({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),a.createElement("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"}))}}}]);
