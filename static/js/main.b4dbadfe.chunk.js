(this.webpackJsonpatanon=this.webpackJsonpatanon||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(101),a(40)),i=a(28),s=(a(102),a(38)),m=a(168),u=a(83),p=a(167),d=a(169),f=a(57);var h=function(e){var t=Object(f.a)(),a=Object(u.a)({typography:{htmlFontSize:8}}),n=o.a.useState(null),r=Object(i.a)(n,2),c=(r[0],r[1]);return o.a.createElement("div",{className:"header",position:"fixed"},o.a.createElement(m.a,{classes:t,variant:"outlined",color:"primary",className:"logo","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},o.a.createElement(p.a,{theme:a},o.a.createElement(s.b,{exact:!0,to:"/atanon",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(d.a,null,"@ANON")))))},E=a(54),b=a(170),g=a(171),y=a(173),v=a(175),j=a(174),O=a(172),x=a(3),N=a(181),w=a(84),k=a(85),C=Object(b.a)((function(e){return{root:{maxWidth:304,margin:"auto",borderRadius:10,position:"relative"},content:{padding:24},title:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"},likes:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"}}})),S=function(e){var t=C(),a=Object(w.a)(),n=Object(k.a)(),r=function(t){e.post.id&&e.addReaction({post_id:e.post.id,rtype:t})};return o.a.createElement(g.a,{variant:"outlined",className:Object(x.a)(t.root,n.root)},o.a.createElement(O.a,{classes:a,image:e.post.image_url}),o.a.createElement(y.a,null,o.a.createElement(j.a,{className:t.content},o.a.createElement(N.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:360,color:"common.white",textAlign:"center"},o.a.createElement("h1",{className:t.title},e.post.comment)))),o.a.createElement(v.a,{className:"reactionBox"},o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",value:"1",size:"small",name:"1",onClick:function(){return r(1)}},o.a.createElement("span",{className:t.likes},e.post.heart)," \u2764\ufe0f"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"2",onClick:function(){return r(2)}},o.a.createElement("span",{className:t.likes},e.post.smile)," \ud83d\ude0a"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"3",onClick:function(){return r(3)}},o.a.createElement("span",{className:t.likes},e.post.sad)," \ud83d\ude14"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"4",onClick:function(){return r(4)}},o.a.createElement("span",{className:t.likes},e.post.angry)," \ud83d\ude20")))},T=a(176),z=a(81),P=a.n(z),A=a(177),W=Object(b.a)((function(e){return{root:{flexGrow:1,spacing:8},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},progressRoot:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),_=function(e){var t=W();return o.a.createElement("div",Object(E.a)({className:t.root},"className","spaced"),o.a.createElement(P.a,{pageStart:0,loadMore:e.fetchMorePosts,hasMore:!0,loader:o.a.createElement("div",{className:"loader",key:0}," ",o.a.createElement("br",null),o.a.createElement(A.a,{color:"secondary"}),o.a.createElement("br",null)),useWindow:!1},o.a.createElement(T.a,{container:!0,spacing:4},e.posts.map((function(a){return o.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4,lg:4},o.a.createElement(S,{className:t.paper,key:a.id,post:a,addReaction:e.addReaction}))})))))},B=a(29),I=a(180),R=Object(b.a)({root:{maxWidth:"70vw"}}),M=Object(b.a)((function(e){return{root:{flexGrow:1}}})),D=Object(b.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"67vw"}}}})),F=function(e){var t=M(),a=D(),r=R(),c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],m=l[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),d=p[0],f=p[1],h={image_url:s,comment:d},b=function(e){"image_url"===e.target.name?m(e.target.value):"comment"===e.target.name&&f(e.target.value)},y=window.cloudinary.createUploadWidget({cloudName:"dwazq8zps",uploadPreset:"zvziodpl"},(function(e,t){v(t,e)})),v=function(e,t){"success"===e.event&&(console.log("photo url",e.info.secure_url),m("".concat(e.info.secure_url)))};return o.a.createElement("div",Object(E.a)({className:"spaced"},"className",t.root),o.a.createElement("br",null),o.a.createElement(T.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:9},o.a.createElement(T.a,{item:!0},o.a.createElement("br",null),o.a.createElement("h1",null),o.a.createElement("br",null),o.a.createElement(S,{post:h})),o.a.createElement(T.a,{item:!0},o.a.createElement(g.a,{className:r.root},o.a.createElement("form",{className:a.root,onSubmit:function(t){t.preventDefault(),d.length>1&&s.length>1&&fetch("https://atanon-api.herokuapp.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:s,comment:d})}).then((function(e){return e.json()})).then((function(t){m(""),f(""),e.addPostToFrontOfArray(t),e.history.push("/atanon/")}))},noValidate:!0,autoComplete:"off"},o.a.createElement(I.a,{label:"Image URL",type:"url",name:"image_url",value:s,onChange:b,variant:"filled"}),o.a.createElement(I.a,{label:"Comment",multiline:!0,type:"text",name:"comment",rows:"5",value:d,onChange:b,variant:"filled"}),o.a.createElement("button",{onClick:function(){y.open()}},"Upload Your Own Photo"),o.a.createElement("input",{type:"submit"}))))))},J=a(182),U=a(178),G=a(136),q=a(179),H=a(82),L=a.n(H),V=Object(b.a)((function(e){return{fabButton:{position:"fixed",zIndex:1,top:"85vh",right:"5vw",margin:"0 auto"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #ff8a65",boxShadow:e.shadows[0],padding:e.spacing(2,4,3),outline:0}}}));var Y=function(e){var t=Object(f.a)({chubby:!0}),a=o.a.useState(!0),r=Object(i.a)(a,2),c=r[0],m=r[1],u=V(),p=Object(n.useState)([]),d=Object(i.a)(p,2),E=d[0],b=d[1],g=function(e){fetch("https://atanon-api.herokuapp.com/reactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var t=E.findIndex((function(t){return t.id===e.id}));b([].concat(Object(l.a)(E.slice(0,t)),[e],Object(l.a)(E.slice(t+1))))}))};Object(n.useEffect)((function(){fetch("https://atanon-api.herokuapp.com/posts").then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(n.useEffect)((function(){window.performance&&(window.location="https://domitalk.github.io/atanon/")}),[]);var y=function(){E.length>0&&setTimeout((function(){fetch("https://atanon-api.herokuapp.com/posts/".concat(E[E.length-1].id)).then((function(e){return e.json()})).then((function(e){console.log(e),b([].concat(Object(l.a)(E),Object(l.a)(e)))}))}),2e3)},v=function(e){b([e].concat(Object(l.a)(E)))},j=function(){m(!1)};return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(J.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:u.modal,open:c,onClose:j,closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500}},o.a.createElement(G.a,{in:c},o.a.createElement("div",{className:u.paper,onClick:j},o.a.createElement("h2",{id:"transition-modal-title"},"Welcome to @ANON"),o.a.createElement("p",{id:"transition-modal-description"},"Where you can post and react anonymously")))),o.a.createElement(B.a,{exact:!0,path:"/atanon/",render:function(e){return o.a.createElement(_,Object.assign({},e,{posts:E,fetchMorePosts:y,addReaction:g}))}}),o.a.createElement(B.a,{exact:!0,path:"/atanon/post",render:function(e){return o.a.createElement(F,Object.assign({},e,{addPostToFrontOfArray:v}))}}),o.a.createElement(q.a,{classes:t,color:"secondary.main","aria-label":"add",className:u.fabButton},o.a.createElement(s.c,{exact:!0,to:"/atanon/post",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(L.a,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){e.exports=a(131)}},[[96,1,2]]]);
//# sourceMappingURL=main.b4dbadfe.chunk.js.map