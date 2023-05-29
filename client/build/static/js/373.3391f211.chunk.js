"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[373],{9373:function(o,n,e){e.r(n),e.d(n,{default:function(){return S}});var i,t=e(168),r=e(7630),l=e(4554),a=e(890),c=e(7689),s=e(6148),d=e(9201),u=e(184),f=(0,d.Z)((0,u.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),h=(0,d.Z)((0,u.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),m=(0,r.ZP)(l.Z)({padding:15}),p=(0,r.ZP)(a.Z)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),v=(0,r.ZP)(l.Z)(i||(i=(0,t.Z)(["\n    font-size: 12px !important;\n    background: #ddd;\n    color: #222;\n    border-radius: 4px;\n    margin-left: 6px;\n    padding: 2px 4px;\n    align-self: center;\n"]))),x=(0,r.ZP)("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),Z=(0,r.ZP)(l.Z)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),g=(0,r.ZP)(a.Z)({margin:"0 50px 0 auto",fontSize:12,color:"#5E5E5E"}),S=function(){var o=(0,c.bx)().openDrawer,n=(0,c.TH)().state.email;return(0,u.jsxs)(l.Z,{style:o?{marginLeft:250,width:"100%"}:{width:"100%"},children:[(0,u.jsxs)(m,{children:[(0,u.jsx)(f,{fontSize:"small",color:"action",onClick:function(){return window.history.back()}}),(0,u.jsx)(h,{fontSize:"small",color:"action",style:{marginLeft:40}})]}),(0,u.jsxs)(p,{children:[n.subject," ",(0,u.jsx)(v,{component:"span",children:"Inbox"})]}),(0,u.jsxs)(l.Z,{style:{display:"flex"},children:[(0,u.jsx)(x,{src:s.RJ,alt:"profile"}),(0,u.jsxs)(Z,{children:[(0,u.jsxs)(l.Z,{children:[(0,u.jsxs)(a.Z,{children:[n.to.split("@")[0],(0,u.jsxs)(l.Z,{component:"span",children:["\xa0<",n.to,">"]})]}),(0,u.jsxs)(g,{children:[new window.Date(n.date).getDate(),"\xa0",new window.Date(n.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(n.date).getFullYear()]})]}),(0,u.jsx)(a.Z,{style:{marginTop:20},children:n.body})]})]})]})}},9201:function(o,n,e){e.d(n,{Z:function(){return g}});var i=e(1413),t=e(2791),r=e(5987),l=e(8182),a=e(4419),c=e(4036),s=e(1046),d=e(7630),u=e(5878),f=e(1217);function h(o){return(0,f.Z)("MuiSvgIcon",o)}(0,u.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=e(184),p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,d.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(o,n){var e=o.ownerState;return[n.root,"inherit"!==e.color&&n["color".concat((0,c.Z)(e.color))],n["fontSize".concat((0,c.Z)(e.fontSize))]]}})((function(o){var n,e,i,t,r,l,a,c,s,d,u,f,h,m,p,v,x,Z=o.theme,g=o.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=Z.transitions)||null==(e=n.create)?void 0:e.call(n,"fill",{duration:null==(i=Z.transitions)||null==(t=i.duration)?void 0:t.shorter}),fontSize:{inherit:"inherit",small:(null==(r=Z.typography)||null==(l=r.pxToRem)?void 0:l.call(r,20))||"1.25rem",medium:(null==(a=Z.typography)||null==(c=a.pxToRem)?void 0:c.call(a,24))||"1.5rem",large:(null==(s=Z.typography)||null==(d=s.pxToRem)?void 0:d.call(s,35))||"2.1875rem"}[g.fontSize],color:null!=(u=null==(f=(Z.vars||Z).palette)||null==(h=f[g.color])?void 0:h.main)?u:{action:null==(m=(Z.vars||Z).palette)||null==(p=m.action)?void 0:p.active,disabled:null==(v=(Z.vars||Z).palette)||null==(x=v.action)?void 0:x.disabled,inherit:void 0}[g.color]}})),x=t.forwardRef((function(o,n){var e=(0,s.Z)({props:o,name:"MuiSvgIcon"}),t=e.children,d=e.className,u=e.color,f=void 0===u?"inherit":u,x=e.component,Z=void 0===x?"svg":x,g=e.fontSize,S=void 0===g?"medium":g,w=e.htmlColor,z=e.inheritViewBox,j=void 0!==z&&z,y=e.titleAccess,b=e.viewBox,k=void 0===b?"0 0 24 24":b,R=(0,r.Z)(e,p),B=(0,i.Z)((0,i.Z)({},e),{},{color:f,component:Z,fontSize:S,instanceFontSize:o.fontSize,inheritViewBox:j,viewBox:k}),I={};j||(I.viewBox=k);var M=function(o){var n=o.color,e=o.fontSize,i=o.classes,t={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(e))]};return(0,a.Z)(t,h,i)}(B);return(0,m.jsxs)(v,(0,i.Z)((0,i.Z)((0,i.Z)({as:Z,className:(0,l.Z)(M.root,d),focusable:"false",color:w,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:n},I),R),{},{ownerState:B,children:[t,y?(0,m.jsx)("title",{children:y}):null]}))}));x.muiName="SvgIcon";var Z=x;function g(o,n){function e(e,t){return(0,m.jsx)(Z,(0,i.Z)((0,i.Z)({"data-testid":"".concat(n,"Icon"),ref:t},e),{},{children:o}))}return e.muiName=Z.muiName,t.memo(t.forwardRef(e))}}}]);
//# sourceMappingURL=373.3391f211.chunk.js.map