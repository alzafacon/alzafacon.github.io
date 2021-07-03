(this["webpackJsonpdigilog-clock"]=this["webpackJsonpdigilog-clock"]||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),o=n(21),a=n.n(o),r=(n(43),n(44),n(12)),s=n(10),l=n(69),d=Object(s.a)({root:{color:"#000000",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(l.a),h=n.p+"static/media/clockFace.e31f0d3d.svg",u=n.p+"static/media/hourHand.d2e72bb6.svg",j=n.p+"static/media/clockMask.8e0a614b.svg",x=function(t,e){return Math.atan(t/e)},b=function(t,e){return Math.sin(x(t,e))*e},f=function(t,e){return e/function(t,e){return Math.cos(x(t,e))*e}(t,e)},m=n(2);var v=function(t){var e,n,c,i,o=t.size,a=void 0===o?200:o,r=t.zoom,s=void 0===r?0:r,l=t.hour,d=void 0===l?0:l,x=t.minute,v=function(t,e){var n=Math.PI/2;return n-=t*Math.PI/6,n-e*Math.PI/360}(d,void 0===x?0:x),O=a/2,g=a*f(s,O),p=(e=v,n=s,c=O,Math.cos(e)*b(n,c)*f(s,O)),y=function(t,e,n){return Math.sin(t)*b(e,n)}(v,s,O)*f(s,O);return Object(m.jsxs)("div",{style:{position:"relative",width:"".concat(a,"px"),height:"".concat(a,"px"),overflow:"hidden",borderRadius:"50%"},children:[Object(m.jsx)("div",{id:"clockFaceContainer",className:"floatCenter",style:{width:"".concat(a,"px"),height:"".concat(a,"px"),left:"".concat(-p,"px"),top:"".concat(y,"px")},children:Object(m.jsx)("img",{id:"clockFace",src:h,alt:"clock face",style:{width:"".concat(g,"px"),height:"".concat(g,"px")}})}),Object(m.jsx)("div",{id:"hourHandContainer",className:"floatCenter",style:{width:"".concat(a,"px"),height:"".concat(a,"px"),left:"".concat(-p,"px"),top:"".concat(y,"px")},children:Object(m.jsx)("img",{id:"hourHand",src:u,alt:"hour hand",style:{width:"".concat(g,"px"),height:"".concat(g,"px"),transform:"rotate(".concat(90-(i=v,180*i/Math.PI).toFixed(1),"deg)")}})}),Object(m.jsx)("div",{className:"floatCenter",style:{width:"".concat(a,"px"),height:"".concat(a,"px")},children:Object(m.jsx)("img",{id:"mask",src:j,alt:"mask",style:{width:"".concat(3*a,"px"),height:"".concat(3*a,"px")}})})]})},O=n(67),g=n(32),p=n.n(g),y=n(33),k=n.n(y),w=function(t){var e=t.size,n=void 0===e?200:e,i=t.hour,o=t.minute,a=t.maxZoom,s=void 0===a?150:a,l=Object(c.useState)(0),h=Object(r.a)(l,2),u=h[0],j=h[1];return Object(m.jsxs)("div",{style:{width:n},children:[Object(m.jsx)(v,{size:n,zoom:u,hour:i,minute:o}),Object(m.jsxs)(O.a,{container:!0,spacing:2,children:[Object(m.jsx)(O.a,{item:!0,children:Object(m.jsx)(p.a,{onClick:function(){return j((function(t){return Math.max(0,t-10)}))}})}),Object(m.jsx)(O.a,{item:!0,xs:!0,children:Object(m.jsx)(d,{value:u,onChange:function(t,e){return j(e)},max:s,"aria-labelledby":"continuous-zoom-slider"})}),Object(m.jsx)(O.a,{item:!0,children:Object(m.jsx)(k.a,{onClick:function(){return j((function(t){return Math.min(s,t+10)}))}})})]})]})},C=n(34),M=n.n(C),z=n(18),F=function(t){var e=t.size,n=void 0===e?200:e,i=t.maxZoom,o=void 0===i?150:i,a=Object(c.useState)(0),s=Object(r.a)(a,2),l=s[0],h=s[1];return Object(m.jsxs)("div",{style:{width:n},children:[Object(m.jsx)(w,{size:n,maxZoom:o,hour:Math.floor(l/60),minute:l%60}),Object(m.jsxs)(O.a,{container:!0,spacing:2,children:[Object(m.jsx)(O.a,{item:!0,children:Object(m.jsx)(M.a,{onClick:function(){var t=z.DateTime.now();h((60*t.hour+t.minute)%720)}})}),Object(m.jsx)(O.a,{item:!0,xs:!0,children:Object(m.jsx)(d,{value:l,onChange:function(t,e){return h(e)},max:720,"aria-labelledby":"continuous-time-slider"})})]})]})},I=n(68),P=function(t){var e=t.size,n=void 0===e?200:e,i=t.timeZone,o=void 0===i?"local":i,a=Object(c.useState)(z.DateTime.now().setZone(o)),s=Object(r.a)(a,2),l=s[0],d=s[1];return Object(I.a)((function(){d(z.DateTime.now().setZone(o))}),1e3),Object(m.jsx)(w,{size:n,hour:l.hour,minute:l.minute})};var S=function(){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)(P,{style:{flex:1}})}),Object(m.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)(F,{style:{flex:1}})})]})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),T()}},[[51,1,2]]]);
//# sourceMappingURL=main.74c6514a.chunk.js.map