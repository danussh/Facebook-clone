/*! For license information please see main.706ca4b1.chunk.js.LICENSE.txt */
(this.webpackJsonpfb_clone=this.webpackJsonpfb_clone||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(24),i=c.n(a),o=(c(80),c(17)),r=(c(81),c(82),c(119)),l=(c(83),c(3));var j=function(e){var t=e.img,c=e.profileSrc,n=e.title;return console.log(t,c,n),Object(l.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"story",children:[Object(l.jsx)(r.a,{className:"story__avatar",src:c}),Object(l.jsx)("h4",{children:n})]})};c(89);var d=function(){return Object(l.jsxs)("div",{className:"storyReal",children:[Object(l.jsx)(j,{img:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.34.08%20PM.png",profileSrc:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png",title:"Emily Youn"}),Object(l.jsx)(j,{img:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.32.58%20PM.png",profileSrc:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.45.43%20PM.png",title:"Mark Kumar"}),Object(l.jsx)(j,{img:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.33.48%20PM.png",profileSrc:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.45.11%20PM.png",title:"Sofia Vergara"}),Object(l.jsx)(j,{img:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.31.07%20PM.png",profileSrc:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.42.20%20PM.png",title:"Angelina Bernath"}),Object(l.jsx)(j,{img:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.30.34%20PM.png",profileSrc:"https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.45.31%20PM.png",title:"Latrell Sprewell"})]})},b=(c(90),c(48)),h=c.n(b),u=c(49),m=c.n(u),p=c(50),O=c.n(p),x=Object(n.createContext)(),g=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(l.jsx)(x.Provider,{value:Object(n.useReducer)(t,c),children:s})},f=function(){return Object(n.useContext)(x)},v=c(28),_=v.a.initializeApp({apiKey:"AIzaSyD_JuTsynhOANfyuQnVRDrOl7iEAhpyXr0",authDomain:"facebook-clone-e3191.firebaseapp.com",projectId:"facebook-clone-e3191",storageBucket:"facebook-clone-e3191.appspot.com",messagingSenderId:"259074879635",appId:"1:259074879635:web:27f31f38faf48769309d66",measurementId:"G-QF237RRMSR"}).firestore(),S=v.a.auth(),w=new v.a.auth.GoogleAuthProvider,N=_;var y=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user,s=(t[1],Object(n.useState)("")),a=Object(o.a)(s,2),i=a[0],j=a[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),u=b[0],p=b[1];return Object(l.jsxs)("div",{className:"messageSender",children:[Object(l.jsxs)("div",{className:"messageSender__top",children:[Object(l.jsx)(r.a,{src:c.photoURL}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},className:"messageSender__input",placeholder:"What's on your mind, ".concat(c.displayName,"?")}),Object(l.jsx)("input",{value:u,onChange:function(e){return p(e.target.value)},placeholder:"image URL (Optional)"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),N.collection("posts").add({message:i,timestamp:v.a.firestore.FieldValue.serverTimestamp(),profilePic:c.photoURL,username:c.displayName,image:u}),j(""),p("")},type:"submit",children:"Hidden Submit"})]})]}),Object(l.jsxs)("div",{className:"messageSender__bottom",children:[Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(h.a,{style:{color:"red"}}),Object(l.jsx)("h3",{children:"Live Video"})]}),Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(m.a,{style:{color:"green"}}),Object(l.jsx)("h3",{children:"Photo/Video"})]}),Object(l.jsxs)("div",{className:"messageSender__option",children:[Object(l.jsx)(O.a,{style:{color:"orange"}}),Object(l.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},k=(c(95),c(51)),C=c.n(k),F=c(52),R=c.n(F),I=c(53),P=c.n(I),A=c(116),E=c(54),M=c.n(E);var T=function(e){var t=e.profilePic,c=e.image,n=e.username,s=e.timestamp,a=e.message;return console.log(t),Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"post__top",children:[Object(l.jsx)(r.a,{src:t,className:"post__avatar"}),Object(l.jsxs)("div",{className:"post__topInfo",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("p",{children:new Date(null===s||void 0===s?void 0:s.toDate()).toUTCString()})]})]}),Object(l.jsx)("div",{className:"post__bottom",children:Object(l.jsx)("p",{children:a})}),Object(l.jsx)("div",{className:"post__image",children:Object(l.jsx)("img",{src:c,alt:""})}),Object(l.jsxs)("div",{className:"post__options",children:[Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(C.a,{}),Object(l.jsx)("p",{children:"Like"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(R.a,{}),Object(l.jsx)("p",{children:"Comment"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(P.a,{}),Object(l.jsx)("p",{children:"Share"})]}),Object(l.jsxs)("div",{className:"post__option",children:[Object(l.jsx)(M.a,{}),Object(l.jsx)(A.a,{})]})]})]})};var L=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){N.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(l.jsxs)("div",{className:"feed",children:[Object(l.jsx)(d,{}),Object(l.jsx)(y,{}),c.map((function(e){return Object(l.jsx)(T,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.id)}))]})},D=(c(96),c(55)),z=c.n(D),U=c(56),V=c.n(U),B=c(57),J=c.n(B),G=c(58),K=c.n(G),Q=c(59),W=c.n(Q),H=c(60),X=c.n(H),Y=c(117),q=c(61),Z=c.n(q),$=c(62),ee=c.n($),te=c(63),ce=c.n(te),ne=c(64),se=c.n(ne);var ae=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(l.jsxs)("div",{className:"header__input",children:[Object(l.jsx)(z.a,{}),Object(l.jsx)("input",{placeholder:"Search Facebook",type:"text"})]})]}),Object(l.jsxs)("div",{className:"header__center",children:[Object(l.jsx)("div",{className:"header__option header__option--active",children:Object(l.jsx)(V.a,{fontSize:"large"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(J.a,{fontSize:"large"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(K.a,{fontSize:"large"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(W.a,{fontSize:"large"})}),Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)(X.a,{fontSize:"large"})})]}),Object(l.jsxs)("div",{className:"header__right",children:[Object(l.jsxs)("div",{className:"header__info",children:[Object(l.jsx)(r.a,{src:c.photoURL}),Object(l.jsx)("h4",{children:c.displayName})]}),Object(l.jsx)(Y.a,{children:Object(l.jsx)(Z.a,{})}),Object(l.jsx)(Y.a,{children:Object(l.jsx)(ee.a,{})}),Object(l.jsx)(Y.a,{children:Object(l.jsx)(ce.a,{})}),Object(l.jsx)(Y.a,{children:Object(l.jsx)(se.a,{})})]})]})};c(97),c(98);var ie=function(e){var t=e.src,c=e.Icon,n=e.title;return Object(l.jsxs)("div",{className:"sidebarRow",children:[t&&Object(l.jsx)(r.a,{src:t}),c&&Object(l.jsx)(c,{}),Object(l.jsx)("h4",{children:n})]})},oe=c(65),re=c.n(oe),le=c(66),je=c.n(le),de=c(67),be=c.n(de),he=c(68),ue=c.n(he),me=c(69),pe=c.n(me),Oe=c(70),xe=c.n(Oe);var ge=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)(ie,{src:c.photoURL,title:c.displayName}),Object(l.jsx)(ie,{Icon:re.a,title:"COVID-19 Information Centre"}),Object(l.jsx)(ie,{Icon:je.a,title:"Pages"}),Object(l.jsx)(ie,{Icon:be.a,title:"Friends"}),Object(l.jsx)(ie,{Icon:ue.a,title:"Messenger"}),Object(l.jsx)(ie,{Icon:pe.a,title:"Marketplace"}),Object(l.jsx)(ie,{Icon:xe.a,title:"Videos"}),Object(l.jsx)(ie,{Icon:A.a,title:"Marketplace"})]})};c(99);var fe=function(){return Object(l.jsx)("div",{className:"widgets",children:Object(l.jsx)("iframe",{title:"widgets",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})},ve=c(118),_e=(c(100),c(40)),Se="SET_USER",we=function(e,t){switch(console.log(t),t.type){case Se:return Object(_e.a)(Object(_e.a)({},e),{},{user:t.user});default:return e}};var Ne=function(){var e=f(),t=Object(o.a)(e,2),c=(t[0],t[1]);return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsxs)("div",{className:"login_logo",children:[Object(l.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",alt:""}),Object(l.jsx)("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""})]}),Object(l.jsx)(ve.a,{type:"submit",onClick:function(){S.signInWithPopup(w).then((function(e){c({type:Se,user:e.user}),console.log(e.user)})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};var ye=function(){var e=f(),t=Object(o.a)(e,2),c=t[0].user;return t[1],Object(l.jsx)("div",{className:"app",children:c?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(ae,{}),Object(l.jsxs)("div",{className:"app__body",children:[Object(l.jsx)(ge,{}),Object(l.jsx)(L,{}),Object(l.jsx)(fe,{})]})]}):Object(l.jsx)(Ne,{})})},ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(g,{initialState:{user:null},reducer:we,children:Object(l.jsx)(ye,{})})}),document.getElementById("root")),ke()},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.706ca4b1.chunk.js.map