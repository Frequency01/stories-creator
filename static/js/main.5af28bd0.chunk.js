(this["webpackJsonpstories-creator"]=this["webpackJsonpstories-creator"]||[]).push([[0],{130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(0),c=n.n(a),o=n(10),i=n.n(o),s=(n(130),n(17)),l=n(285),u=(n(131),n(41)),j=n(116),d=n(291),b=n(290),O=n(252),g=(n(132),n(115)),m=n(110),h=n(111),p=n.n(h),x=function(e){return"linear-gradient(0deg,"+e.map((function(e){var t=e.opacity||.3;console.log(e);var n=e.color.replace("rgb","rgba").replace(")",","+t+")");return console.log(n),console.log(t),"".concat(n," ").concat(100*e.offset,"%")})).join(", ")+")"},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.replace("rgb(","rgba(").replace(")",", ".concat(t,")"))},v=function(e){var t=e.onSelect,n=Object(j.a)(e,["onSelect"]);return Object(r.jsx)(g.a,Object(u.a)(Object(u.a)({},n),{},{color:f(n.color,n.opacity),onChange:function(e){var n=e.rgb,r=n.r,a=n.g,c=n.b,o=n.a;t("rgb(".concat(r,", ").concat(a,", ").concat(c,")"),o)}}))},C=[{offset:"0.00",color:"rgb(238, 241, 11)"},{offset:"1.00",color:"rgb(126, 32, 207)"}];console.log(x(C));var y=function(e){var t=e.onItemText,n=e.text,c=e.onItemImage,o=e.onItemColor,i=e.onItemURL,j=e.bannerURL,g=e.image,h=e.color,f=e.handlePresetOne,y=e.handlePresetTwo,w=e.handlePresetThree,I=e.setContainedGradient,S=e.setContainedColor,N=e.containedColor,P=e.containedGradient,k=Object(a.useState)(!1),L=Object(s.a)(k,2),R=L[0],T=L[1],U=Object(a.useState)(90),G=Object(s.a)(U,2),H=G[0],J=G[1],D=Object(a.useState)(C),F=Object(s.a)(D,2),A=F[0],B=F[1],W=Object(a.useState)(!1),E=Object(s.a)(W,2),M=E[0],V=E[1],Y=Object(a.useState)(!0),q=Object(s.a)(Y,2),z=q[0],Q=q[1];return Object(r.jsxs)(l.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"editorContanier",children:[Object(r.jsxs)("div",{className:"buttonGroup",children:[Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return f()},children:"Preset 1"}),Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return y()},children:"Preset 2"}),Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return w()},children:"Preset 3"})]}),Object(r.jsx)("form",{noValidate:!0,autoComplete:"off",style:{width:"95%"},children:Object(r.jsxs)(l.a,{container:!0,justify:"center",alignItems:"stretch",direction:"column",children:[Object(r.jsx)(l.a,{item:!0,children:Object(r.jsx)(d.a,{className:"editorInput",id:"outlined-basic",label:"Image URL/Data URI",variant:"outlined",margin:"dense",value:g,onChange:function(e){return c(e.target.value)}})}),Object(r.jsx)(l.a,{item:!0,children:Object(r.jsx)(d.a,{className:"editorInput",id:"outlined-basic",margin:"dense",label:"Text",variant:"outlined",value:n,onChange:function(e){return t(e.target.value)}})}),Object(r.jsx)(l.a,{item:!0,children:Object(r.jsxs)(b.a,{color:"primary",children:[Object(r.jsx)(O.a,{variant:N,onClick:function(e){return Q(!0),V(!1),S("contained"),void I("")},children:"Color"}),Object(r.jsx)(O.a,{variant:P,onClick:function(e){return V(!0),Q(!1),S(""),void I("contained")},children:"Gradient"})]})}),Object(r.jsxs)(l.a,{item:!0,children:[z?Object(r.jsx)(d.a,{className:"editorInput",id:"outlined-basic",label:"Color",margin:"dense",variant:"outlined",value:h,type:"color",onChange:function(e){return o(p()(e.target.value,"0.5"))}}):null,M?Object(r.jsx)(m.GradientPickerPopover,Object(u.a)(Object(u.a)({},{open:R,setOpen:T,angle:H,setAngle:J,showAnglePicker:!0,width:220,maxStops:3,paletteHeight:32,palette:A,onPaletteChange:function(e){B(e);var t=x(e);o(t),console.log(e)}}),{},{children:Object(r.jsx)(v,{})})):null]}),Object(r.jsx)(l.a,{item:!0,children:Object(r.jsx)(d.a,{className:"editorInput",id:"outlined-basic",label:"Banner URL",margin:"dense",value:j,variant:"outlined",onChange:function(e){return i(e.target.value)}})})]})})]})},w=n(113),I=n(114),S=n(77),N=n(293),P=(n(250),c.a.forwardRef((function(e,t){var n=e.text,a=e.color,c=e.image,o=e.bannerURL;return Object(r.jsxs)("div",{ref:t,className:"storyWrapper",onClick:function(e){return window.open(o,"_blank")},children:[Object(r.jsx)("div",{style:{background:a},className:"colorOverlay"}),Object(r.jsx)("h1",{className:"storyHeadline",children:n}),Object(r.jsx)("img",{src:c,alt:"",className:"storyImage"})]})}))),k=function(e){var t=e.text,n=e.color,c=e.image,o=e.bannerURL,i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],j=l[1],d=function(){j(!0)},b=Object(a.useRef)(),g=Object(r.jsx)(P,{ref:b,text:t,color:n,image:c,bannerURL:o});return Object(r.jsxs)("div",{className:"previewWrapper",children:[Object(r.jsxs)("div",{children:[g,Object(r.jsxs)("div",{className:"buttonGroup",children:[Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return Object(w.exportComponentAsPNG)(b)},children:"PNG"}),Object(r.jsx)(S.CopyToClipboard,{text:Object(I.renderToString)(g),children:Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return d()},children:"HTML"})}),Object(r.jsx)(S.CopyToClipboard,{text:JSON.stringify({text:t,color:n,image:c,bannerURL:o}),children:Object(r.jsx)(O.a,{variant:"outlined",color:"primary",onClick:function(e){return d()},children:"JSON"})})]})]}),Object(r.jsx)(N.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:u,autoHideDuration:2e3,onClose:function(){return j(!1)},message:"Copied to clipboard!"})]})};var L=function(){var e=Object(a.useState)("Your Text"),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("rgba(40, 21, 21, 0.5)"),i=Object(s.a)(o,2),u=i[0],j=i[1],d=Object(a.useState)("https://i.imgur.com/tEO5HyY.png"),b=Object(s.a)(d,2),O=b[0],g=b[1],m=Object(a.useState)("https://ya.ru/"),h=Object(s.a)(m,2),p=h[0],x=h[1],f=Object(a.useState)("contained"),v=Object(s.a)(f,2),C=v[0],w=v[1],I=Object(a.useState)(""),S=Object(s.a)(I,2),N=S[0],P=S[1];return Object(r.jsxs)(l.a,{container:!0,direction:"row",justify:"center",alignItems:"stretch",className:"mainContainer",children:[Object(r.jsx)(l.a,{item:!0,xs:6,children:Object(r.jsx)(y,{text:n,onItemText:function(e){return c(e)},onItemColor:function(e){return j(e)},onItemImage:function(e){return g(e)},onItemURL:function(e){return x(e)},bannerURL:p,image:O,color:u,handlePresetOne:function(){P(""),w("contained"),g("https://i.imgur.com/tcsvWvw.jpg "),j("rgba(187, 171, 62, 0.5)"),c("\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u043e\u0431\u0430\u043a\u0443 \u0448\u0438\u0431\u0430-\u0438\u043d\u0443"),x("https://www.awwwards.com/")},handlePresetTwo:function(){P(""),w("contained"),g("https://i.imgur.com/oJHnD4p.jpg"),j("rgba(81, 67, 67, 0.5)"),c("\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u043b\u0430\u0442\u044c\u0435 \u0434\u043b\u044f \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u043e\u0433\u043e"),x("https://unsplash.com/")},handlePresetThree:function(){P("contained"),w(""),g("https://i.imgur.com/uqQVNXu.jpg"),j("linear-gradient(0deg, rgba(197, 197, 39, 0.6) 0%, rgba(161, 46, 239, 0.61) 100%)"),c("\u041f\u0440\u043e\u0434\u0430\u044e\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0438\u043a\u0438"),x("https://www.thebestdesigns.com/")},setContainedColor:w,setContainedGradient:P,containedGradient:N,containedColor:C})}),Object(r.jsx)(l.a,{item:!0,xs:6,children:Object(r.jsx)(k,{text:n,color:u,image:O,bannerURL:p})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),R()}},[[251,1,2]]]);
//# sourceMappingURL=main.5af28bd0.chunk.js.map