(this.webpackJsonpatanon=this.webpackJsonpatanon||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),l=(a(76),a(31)),i=a(22),s=(a(77),a(28)),m=a(132),u=a(63),p=a(131),d=a(133),f=a(43);var h=function(e){var t=Object(f.a)(),a=Object(u.a)({typography:{htmlFontSize:8}}),n=o.a.useState(null),c=Object(i.a)(n,2),r=(c[0],c[1]);return o.a.createElement("div",{className:"header",position:"fixed"},o.a.createElement(m.a,{classes:t,variant:"outlined",color:"primary",className:"logo","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},o.a.createElement(p.a,{theme:a},o.a.createElement(s.b,{exact:!0,to:"/atanon",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(d.a,null,"@ANON")))))},E=a(42),g=a(134),b=a(143),v=a(136),y=a(138),O=a(137),j=a(135),x=a(3),N=a(141),k=a(64),w=a(65),C=Object(g.a)((function(e){return{root:{maxWidth:304,margin:"auto",borderRadius:10,position:"relative"},content:{padding:24},title:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"},likes:{color:"#fff",letterSpacing:"2px",textShadow:"#260C0C 1px 0 10px"}}})),S=function(e){var t=C(),a=Object(k.a)(),n=Object(w.a)(),c=function(t){e.post.id&&e.addReaction({post_id:e.post.id,rtype:t})};return o.a.createElement(b.a,{variant:"outlined",className:Object(x.a)(t.root,n.root)},o.a.createElement(j.a,{classes:a,image:e.post.image_url}),o.a.createElement(v.a,null,o.a.createElement(O.a,{className:t.content},o.a.createElement(N.a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:360,color:"common.white",textAlign:"center"},o.a.createElement("h1",{className:t.title},e.post.comment)))),o.a.createElement(y.a,{className:"reactionBox"},o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",value:"1",size:"small",name:"1",onClick:function(){return c(1)}},o.a.createElement("span",{className:t.likes},e.post.heart)," \u2764\ufe0f"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"2",onClick:function(){return c(2)}},o.a.createElement("span",{className:t.likes},e.post.smile)," \ud83d\ude0a"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"3",onClick:function(){return c(3)}},o.a.createElement("span",{className:t.likes},e.post.sad)," \ud83d\ude14"),o.a.createElement(m.a,{variant:"outlined",color:"secondary",className:"order",size:"small",name:"4",onClick:function(){return c(4)}},o.a.createElement("span",{className:t.likes},e.post.angry)," \ud83d\ude20")))},z=a(139),P=a(61),T=a.n(P),_=a(142),R=Object(g.a)((function(e){return{root:{flexGrow:1,spacing:8},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},progressRoot:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),A=function(e){var t=R();return o.a.createElement("div",Object(E.a)({className:t.root},"className","spaced"),o.a.createElement(T.a,{pageStart:0,loadMore:e.fetchMorePosts,hasMore:!0,loader:o.a.createElement("div",{className:"loader",key:0}," ",o.a.createElement("br",null),o.a.createElement(_.a,{color:"secondary"})),useWindow:!1},o.a.createElement(z.a,{container:!0,spacing:4},e.posts.map((function(a){return o.a.createElement(z.a,{item:!0,xs:12,sm:6,md:4,lg:4},o.a.createElement(S,{className:t.paper,key:a.id,post:a,addReaction:e.addReaction}))})))))},I=a(20),B=Object(g.a)((function(e){return{root:{flexGrow:1}}})),W=function(e){var t=B(),a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],l=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),u=m[0],p=m[1],d={image_url:r,comment:u},f=function(e){"image_url"===e.target.name?l(e.target.value):"comment"===e.target.name&&p(e.target.value)},h=window.cloudinary.createUploadWidget({cloudName:"dwazq8zps",uploadPreset:"zvziodpl"},(function(e,t){g(t,e)})),g=function(e,t){"success"===e.event&&(console.log("photo url",e.info.secure_url),l("".concat(e.info.secure_url)))};return o.a.createElement("div",Object(E.a)({className:"spaced"},"className",t.root),o.a.createElement("br",null),o.a.createElement(z.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:9},o.a.createElement(z.a,{item:!0},o.a.createElement("br",null),o.a.createElement("h2",null,"Preview"),o.a.createElement(S,{post:d})),o.a.createElement(z.a,{item:!0},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u.length>1&&r.length>1&&fetch("https://atanon-api.herokuapp.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image_url:r,comment:u})}).then((function(e){return e.json()})).then((function(t){l(""),p(""),e.addPostToFrontOfArray(t),e.history.push("/atanon/")}))}},o.a.createElement("h3",null,"Image URL "),o.a.createElement("input",{type:"url",name:"image_url",value:r,onChange:f}),o.a.createElement("h3",null,"Or Upload"),o.a.createElement("button",{onClick:function(){h.open()}},"Upload Your Own Photo"),o.a.createElement("h3",null,"Comment"),o.a.createElement("textarea",{name:"comment",value:u,onChange:f}),o.a.createElement("br",null),o.a.createElement("input",{type:"submit"})))))},D=a(140),J=a(62),M=a.n(J),U=Object(g.a)((function(e){return{fabButton:{position:"absolute",zIndex:1,bottom:"10vh",right:"5vh",margin:"0 auto"}}}));var F=function(e){var t=Object(f.a)({chubby:!0}),a=U(),c=Object(n.useState)([]),r=Object(i.a)(c,2),m=r[0],u=r[1],p=function(e){fetch("https://atanon-api.herokuapp.com/reactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var t=m.findIndex((function(t){return t.id===e.id}));u([].concat(Object(l.a)(m.slice(0,t)),[e],Object(l.a)(m.slice(t+1))))}))};Object(n.useEffect)((function(){fetch("https://atanon-api.herokuapp.com/posts").then((function(e){return e.json()})).then((function(e){u(e)}))}),[]);var d=function(){m.length>0&&setTimeout((function(){fetch("https://atanon-api.herokuapp.com/posts/".concat(m[m.length-1].id)).then((function(e){return e.json()})).then((function(e){console.log(e),u([].concat(Object(l.a)(m),Object(l.a)(e)))}))}),2e3)},E=function(e){u([e].concat(Object(l.a)(m)))};return o.a.createElement(s.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(h,{display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"}}),o.a.createElement(I.a,{exact:!0,path:"/atanon/",render:function(e){return o.a.createElement(A,Object.assign({},e,{posts:m,fetchMorePosts:d,addReaction:p}))}}),o.a.createElement(I.a,{exact:!0,path:"/atanon/post",render:function(e){return o.a.createElement(W,Object.assign({},e,{addPostToFrontOfArray:E}))}}),o.a.createElement(D.a,{classes:t,display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"},color:"secondary.main","aria-label":"add",className:a.fabButton},o.a.createElement(s.c,{exact:!0,to:"/atanon/post",style:{textDecoration:"inherit",color:"inherit"}},o.a.createElement(M.a,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,a){e.exports=a(106)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.70e2ea58.chunk.js.map