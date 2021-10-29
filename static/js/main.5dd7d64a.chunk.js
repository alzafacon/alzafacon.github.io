(this["webpackJsonpdigilog-clock"]=this["webpackJsonpdigilog-clock"]||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(21),o=n.n(a),r=(n(43),n(44),n(12)),s=n(10),l=n(69),d=Object(s.a)({root:{color:"#000000",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(l.a),h=n.p+"static/media/clockFace.e31f0d3d.svg",u=n.p+"static/media/hourHand.d2e72bb6.svg",j=n.p+"static/media/clockMask.8e0a614b.svg",x=100,b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Math.PI/6,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x;return(1/t-2/Math.PI)/e}(),f=n(2);var g=function(t){var e,n,c,i,a=t.size,o=void 0===a?200:a,r=t.zoom,s=void 0===r?0:r,l=t.hour,d=void 0===l?0:l,g=t.minute,m=o/2,v=function(t,e){var n=Math.PI/2;return n-=t*Math.PI/6,n-e*Math.PI/360}(d,void 0===g?0:g),O=function(t){return 1/(t*b+2/Math.PI)}((e=s,n=0,c=x,Math.min(Math.max(e,n),c))),p=function(t){return 1/Math.sin(t)}(O),y=function(t,e,n){return t*Math.cos(e)*Math.cos(n)/Math.sin(n)}(m,v,O),M=function(t,e,n){return t*Math.sin(e)*Math.cos(n)/Math.sin(n)}(m,v,O);return Object(f.jsxs)("div",{style:{position:"relative",width:"".concat(o,"px"),height:"".concat(o,"px"),overflow:"hidden",borderRadius:"50%",zIndex:1},children:[Object(f.jsx)("div",{id:"clockFaceContainer",className:"floatCenter",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),transform:"translate(".concat(-y,"px, ").concat(M,"px)"),transition:"all 0.5s linear"},children:Object(f.jsx)("img",{id:"clockFace",src:h,alt:"clock face",draggable:!1,onDragStart:"return false",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),transform:"scale(".concat(p,")"),transition:"all 0.5s linear",userSelect:"none",pointerEvents:"none"}})}),Object(f.jsx)("div",{id:"hourHandContainer",className:"floatCenter",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),transform:"translate(".concat(-y,"px, ").concat(M,"px)"),transition:"all 0.5s linear"},children:Object(f.jsx)("img",{id:"hourHand",src:u,alt:"hour hand",draggable:!1,onDragStart:"return false",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),transform:"scale(".concat(p,") rotate(").concat(90-(i=v,180*i/Math.PI).toFixed(1),"deg)"),transition:"all 0.5s linear",userSelect:"none",pointerEvents:"none"}})}),Object(f.jsx)("div",{className:"floatCenter",style:{width:"".concat(o,"px"),height:"".concat(o,"px"),zIndex:0},children:Object(f.jsx)("img",{id:"mask",src:j,alt:"mask",draggable:!1,onDragStart:"return false",style:{width:"".concat(3*o,"px"),height:"".concat(3*o,"px"),userSelect:"none",pointerEvents:"none"}})})]})},m=n(67),v=n(32),O=n.n(v),p=n(33),y=n.n(p),M=function(t){var e=t.size,n=void 0===e?200:e,i=t.hour,a=t.minute,o=Object(c.useState)(0),s=Object(r.a)(o,2),l=s[0],h=s[1];return Object(f.jsxs)("div",{style:{width:n,userSelect:"none"},children:[Object(f.jsx)(g,{size:n,zoom:l,hour:i,minute:a}),Object(f.jsxs)(m.a,{container:!0,spacing:2,children:[Object(f.jsx)(m.a,{item:!0,children:Object(f.jsx)(O.a,{onClick:function(){return h((function(t){return Math.max(0,t-10)}))}})}),Object(f.jsx)(m.a,{item:!0,xs:!0,children:Object(f.jsx)(d,{value:l,onChange:function(t,e){return h(e)},max:x,"aria-labelledby":"continuous-zoom-slider"})}),Object(f.jsx)(m.a,{item:!0,children:Object(f.jsx)(y.a,{onClick:function(){return h((function(t){return Math.min(x,t+10)}))}})})]})]})},k=n(34),w=n.n(k),C=n(18),S=function(t){var e=t.size,n=void 0===e?200:e,i=Object(c.useState)(0),a=Object(r.a)(i,2),o=a[0],s=a[1];return Object(f.jsxs)("div",{style:{width:n},children:[Object(f.jsx)(M,{size:n,hour:Math.floor(o/60),minute:o%60}),Object(f.jsxs)(m.a,{container:!0,spacing:2,children:[Object(f.jsx)(m.a,{item:!0,children:Object(f.jsx)(w.a,{onClick:function(){var t=C.DateTime.now();s((60*t.hour+t.minute)%720)}})}),Object(f.jsx)(m.a,{item:!0,xs:!0,children:Object(f.jsx)(d,{value:o,onChange:function(t,e){return s(e)},max:720,"aria-labelledby":"continuous-time-slider"})})]})]})},I=n(68),z=function(t){var e=t.size,n=void 0===e?200:e,i=t.timeZone,a=void 0===i?"local":i,o=Object(c.useState)(C.DateTime.now().setZone(a)),s=Object(r.a)(o,2),l=s[0],d=s[1];return Object(I.a)((function(){d(C.DateTime.now().setZone(a))}),1e3),Object(f.jsx)(M,{size:n,hour:l.hour,minute:l.minute})};var P=function(){return Object(f.jsxs)("div",{style:{display:"flex",userSelect:"none"},children:[Object(f.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(f.jsx)(z,{style:{flex:1}})}),Object(f.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(f.jsx)(S,{style:{flex:1}})})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),F()}},[[51,1,2]]]);
//# sourceMappingURL=main.5dd7d64a.chunk.js.map