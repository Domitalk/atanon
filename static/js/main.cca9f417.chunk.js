(this.webpackJsonpatanon=this.webpackJsonpatanon||[]).push([[0],{109:function(e,t,a){e.exports=a(142)},114:function(e,t,a){},115:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=(a(114),a(34)),i=a(24),s=(a(115),a(47)),m=a(177),u=a(94),d=a(176),p=a(178),f=a(41);var h=function(e){var t=Object(f.a)(),a=Object(u.a)({typography:{htmlFontSize:8}});return o.a.createElement("div",{className:"header",position:"fixed"},o.a.createElement(m.a,{classes:t,variant:"outlined",color:"primary",className:"logo","aria-controls":"simple-menu","aria-haspopup":"true"},o.a.createElement(d.a,{theme:a},o.a.createElement(s.b,{exact:!0,to:"/atanon",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(p.a,null,"@ANON")))))},g=a(57),E=a(179),b=a(180),y=a(182),j=a(184),O=a(183),v=a(181),N=a(3),x=a(192),k=a(95),w=a(96),C=a(87),T=a.n(C),S=a(194),P=a(191),z=a(91),I=a.n(z),_=Object(E.a)((function(e){return{margin:{margin:e.spacing(1)}}})),A=Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:"none",width:200}}}})),D=Object(E.a)((function(e){return{root:{maxWidth:304,margin:"auto",borderRadius:10,position:"relative"},content:{padding:24},title:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"},likes:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"}}})),B=function(e){var t=D(),a=Object(k.a)(),r=Object(w.a)(),c=Object(n.useState)(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],d=A(),p=Object(n.useState)(""),f=Object(i.a)(p,2),h=f[0],g=f[1],E=_(),C=function(t){e.post.id&&e.addReaction({post_id:e.post.id,rtype:t})},z=function(){u(!s)},B=function(t){e.post.id?(e.addTagToPost(h,e.post.id),g("")):alert("You cannot add tags until you finish creating the post!")};return o.a.createElement(T.a,{isFlipped:s,flipDirection:"horizontal",infinite:"true"},o.a.createElement(b.a,{key:"front",variant:"outlined",className:Object(N.a)(t.root,r.root)},o.a.createElement(v.a,{classes:a,image:e.post.image_url}),o.a.createElement(y.a,null,o.a.createElement(O.a,{onDoubleClick:z,className:t.content},o.a.createElement(x.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:360,color:"common.white",textAlign:"center"},o.a.createElement("h1",{className:t.title},e.post.comment)))),o.a.createElement(j.a,{className:"reactionBox"},o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",value:"1",size:"small",name:"1",onClick:function(){return C(1)}},o.a.createElement("span",{className:t.likes},e.post.heart)," \u2764\ufe0f"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"2",onClick:function(){return C(2)}},o.a.createElement("span",{className:t.likes},e.post.smile)," \ud83d\ude0a"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"3",onClick:function(){return C(3)}},o.a.createElement("span",{className:t.likes},e.post.sad)," \ud83d\ude14"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"4",onClick:function(){return C(4)}},o.a.createElement("span",{className:t.likes},e.post.angry)," \ud83d\ude20"))),o.a.createElement(b.a,{key:"back",className:Object(N.a)(t.root,r.root)},o.a.createElement(v.a,{classes:a,image:e.post.image_url}),o.a.createElement(y.a,null,o.a.createElement(O.a,{onDoubleClick:z,className:t.content},o.a.createElement(x.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:360,color:"common.white",textAlign:"center",className:E.root},o.a.createElement("h3",{className:t.title},e.post.id?function(){if(e.post.id){var a=Object.keys(e.post.stags);return a.reverse(),a.slice(0,5).map((function(e){return o.a.createElement(m.a,{className:E.margin,color:"secondary",size:"large",variant:"outlined"},o.a.createElement("span",{className:t.likes},e))}))}}:null)))),o.a.createElement(j.a,{direction:"",className:"reactionBox"},o.a.createElement("form",{className:d.root,autoComplete:"on"},o.a.createElement(P.a,{label:"new tag",defaultValue:"",name:"New Tag Field",variant:"standard",color:"secondary",size:"small",onChange:function(e){g(e.target.value)},value:h,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),B())}})),o.a.createElement(S.a,{title:"Create New Tag"},o.a.createElement(m.a,{size:"small",variant:"outlined",color:"secondary",onClick:B},o.a.createElement(I.a,{color:"secondary"}))))))},W=a(187),F=a(92),R=a.n(F),M=a(188),J=Object(E.a)((function(e){return{root:{flexGrow:1,spacing:8},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},progressRoot:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),U=function(e){var t=J();return o.a.createElement("div",Object(g.a)({className:t.root},"className","spaced"),o.a.createElement(R.a,{pageStart:0,loadMore:e.fetchMorePosts,hasMore:!0,loader:o.a.createElement("div",{className:"loader",key:0}," ",o.a.createElement("br",null),o.a.createElement(M.a,{color:"secondary"}),o.a.createElement("br",null)),useWindow:!1},o.a.createElement(W.a,{container:!0,spacing:4},e.posts.map((function(a){return o.a.createElement(W.a,{item:!0,xs:12,sm:6,md:4,lg:4},o.a.createElement(B,{className:t.paper,key:a.id,post:a,addReaction:e.addReaction,addTagToPost:e.addTagToPost}))})))))},Y=a(32),G=Object(E.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),H=Object(E.a)({root:{maxWidth:"70vw"}}),V=Object(E.a)((function(e){return{root:{flexGrow:1}}})),q=Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"67vw"}}}})),K=function(e){var t=V(),a=q(),r=H(),c=G(),l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),E=h[0],y=h[1],j=Object(f.a)(),O={image_url:u,comment:E},v=function(e){"image_url"===e.target.name?d(e.target.value):"comment"===e.target.name&&y(e.target.value)},N=function(t){t.preventDefault(),E.length>1&&u.length>1&&fetch("https://atanon-api.herokuapp.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:u,comment:E})}).then((function(e){return e.json()})).then((function(t){d(""),y(""),e.addPostToFrontOfArray(t),e.history.push("/atanon/")}))},k=window.cloudinary.createUploadWidget({cloudName:"dwazq8zps",uploadPreset:"zvziodpl"},(function(e,t){w(t,e)})),w=function(e,t){"success"===e.event&&(console.log("photo url",e.info.secure_url),d("".concat(e.info.secure_url)))};return o.a.createElement("div",Object(g.a)({className:"spaced"},"className",t.root),o.a.createElement("br",null),o.a.createElement(W.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:9},o.a.createElement(W.a,{item:!0},o.a.createElement("br",null),o.a.createElement("h1",null),o.a.createElement("br",null),o.a.createElement(B,{post:O})),o.a.createElement(W.a,{item:!0},o.a.createElement(b.a,{className:r.root},o.a.createElement("form",{className:a.root,onSubmit:N,noValidate:!0,autoComplete:"off"},o.a.createElement(P.a,{label:"Image URL",type:"url",name:"image_url",value:u,onChange:v,variant:"filled"}),o.a.createElement(P.a,{label:"Comment",multiline:!0,type:"text",name:"comment",rows:"5",value:E,onChange:v,variant:"filled"}),o.a.createElement(x.a,{align:"center",className:c.root},o.a.createElement(m.a,{onClick:function(){k.open()},classes:j},"Upload Your Own Photo"),o.a.createElement(m.a,{onClick:N,classes:j},"Submit Your Post")))))))},L=a(193),$=a(189),Q=a(148),X=a(190),Z=a(93),ee=a.n(Z),te=(a(143),Object(E.a)((function(e){return{fabButton:{position:"fixed",zIndex:1,top:"85vh",right:"5vw",margin:"0 auto"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #ff8a65",boxShadow:e.shadows[0],padding:e.spacing(2,4,3),outline:0}}})));var ae=function(e){var t=Object(f.a)({chubby:!0}),a=Object(n.useState)(!0),r=Object(i.a)(a,2),c=r[0],m=r[1],u=te(),d=Object(n.useState)([]),p=Object(i.a)(d,2),g=p[0],E=p[1],b=function(e){fetch("https://atanon-api.herokuapp.com/reactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var t=g.findIndex((function(t){return t.id===e.id}));E([].concat(Object(l.a)(g.slice(0,t)),[e],Object(l.a)(g.slice(t+1))))}))};Object(n.useEffect)((function(){fetch("https://atanon-api.herokuapp.com/posts").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]);var y=function(){g.length>0&&setTimeout((function(){fetch("https://atanon-api.herokuapp.com/posts/".concat(g[g.length-1].id)).then((function(e){return e.json()})).then((function(e){console.log(e),E([].concat(Object(l.a)(g),Object(l.a)(e)))}))}),2e3)},j=function(e){E([e].concat(Object(l.a)(g)))},O=function(){m(!1)},v=function(e,t){fetch("https://atanon-api.herokuapp.com/stags",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post_id:t,stagname:e})}).then((function(e){return e.json()})).then((function(e){var t=g.findIndex((function(t){return t.id===e.id}));E([].concat(Object(l.a)(g.slice(0,t)),[e],Object(l.a)(g.slice(t+1))))}))};return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:u.modal,open:c,onClose:O,closeAfterTransition:!0,BackdropComponent:$.a,BackdropProps:{timeout:500}},o.a.createElement(Q.a,{in:c},o.a.createElement("div",{className:u.paper,onClick:O},o.a.createElement("h2",{id:"transition-modal-title"},"Welcome to @ANON"),o.a.createElement("p",{id:"transition-modal-description"},"Where you can post and react anonymously"),o.a.createElement("p",{id:"transition-modal-description"},"If you double click/tap on a post you can add tags")))),o.a.createElement(Y.a,{exact:!0,path:"/(|atanon)",render:function(e){return o.a.createElement(U,Object.assign({},e,{posts:g,fetchMorePosts:y,addReaction:b,addTagToPost:v}))}}),o.a.createElement(Y.a,{exact:!0,path:"/atanon/post",render:function(e){return o.a.createElement(K,Object.assign({},e,{addPostToFrontOfArray:j}))}}),o.a.createElement(X.a,{classes:t,"aria-label":"add",className:u.fabButton},o.a.createElement(s.c,{exact:!0,to:"/atanon/post",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(ee.a,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.cca9f417.chunk.js.map