(this.webpackJsonpreact_task=this.webpackJsonpreact_task||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=a(20),o=a(161),l=a(160),j=a(56),d=a(67),u="user/SET_LOGIN_SUCCESS",b="user/SET_LOGOUT_SUCCESS",h={isAuthenticated:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object.assign({},e,{isAuthenticated:!0});case b:return Object.assign({},e,{isAuthenticated:!1});default:return e}},O=a(94),g="dashboard/GET_USER_VALUES",p={users:[]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object.assign({},e,{users:t.users});default:return e}},f=Object(j.b)({user:m,dashboard:x});a(95);var v=a(163),y=a(44),N=a(13),S=(a(96),a(144)),A=a(146),w=a(148),C=a(106),E=a(149),T=a(150),_=a(73),I=a.n(_),k=a(5),F=Object(S.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),L=function(e){var t=e.isAuthenticated,a=F(),n=Object(s.c)(),r=Object(N.f)();return Object(k.jsxs)(c.a.Fragment,{children:[Object(k.jsx)(A.a,{color:"primary",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(E.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",children:Object(k.jsx)(I.a,{})}),Object(k.jsx)(C.a,{variant:"h6",className:a.title,children:"React App"}),t&&Object(k.jsx)(T.a,{color:"secondary",variant:"contained",onClick:function(){n((function(e){e({type:b})})),r.push("/login")},children:"Log Out"})]})}),Object(k.jsx)(w.a,{})]})},D=a(55),P=a(164),U=a(162),G=a(151),W=a(74),B=a.n(W),R=a(152),J=a(153);function q(){return Object(k.jsxs)(C.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(G.a,{color:"inherit",href:"#",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var M=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),V=function(){var e=M(),t=Object(N.f)(),a=Object(s.c)(),c=Object(n.useState)(""),r=Object(D.a)(c,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(D.a)(l,2),d=j[0],b=j[1],h=Object(n.useState)(""),m=Object(D.a)(h,2),O=m[0],g=m[1];return Object(k.jsxs)(R.a,{component:"main",maxWidth:"xs",children:[Object(k.jsxs)("div",{className:e.paper,children:[Object(k.jsx)(P.a,{className:e.avatar,children:Object(k.jsx)(B.a,{})}),Object(k.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),i&&i.trim()&&"hruday@gmail.com"===i?d&&d.trim()&&"hruday123"===d?(a((function(e){e({type:u})})),t.push("/")):g("Plese enter valid password"):g("Plese enter valid email address")},noValidate:!0,children:[Object(k.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){o(e.target.value),g("")},value:i,autoFocus:!0,error:!!O}),Object(k.jsx)(U.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",onChange:function(e){b(e.target.value),g("")},value:d,error:!!O,autoComplete:"current-password"}),Object(k.jsx)(J.a,{error:!0,children:O}),Object(k.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"})]})]}),Object(k.jsx)(v.a,{mt:8,children:Object(k.jsx)(q,{})})]})},Y=a(105),H=a(154),X=a(155),z=a(159),K=a(158),Q=a(156),Z=a(157),$=Object(S.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),ee=Object(s.b)((function(e){return{users:e.dashboard.users}}))(Object(N.g)((function(e){var t=e.users,a=$(),r=Object(s.c)();return Object(n.useEffect)((function(){r((function(e){e({type:g,users:O})}))}),[]),Object(k.jsx)(c.a.Fragment,{children:Object(k.jsx)(Y.a,{className:a.root,children:Object(k.jsx)(H.a,{className:a.container,children:Object(k.jsxs)(X.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(k.jsx)(Q.a,{children:Object(k.jsxs)(Z.a,{children:[Object(k.jsx)(K.a,{children:"Name"}),Object(k.jsx)(K.a,{children:"Email"}),Object(k.jsx)(K.a,{children:"Gender"}),Object(k.jsx)(K.a,{align:"right",children:"Age"}),Object(k.jsx)(K.a,{align:"right",children:"Phone No"})]})}),Object(k.jsx)(z.a,{children:t.map((function(e){return Object(k.jsxs)(Z.a,{hover:!0,tabIndex:-1,children:[Object(k.jsx)(K.a,{children:e.name}),Object(k.jsx)(K.a,{children:e.email}),Object(k.jsx)(K.a,{children:e.gender}),Object(k.jsx)(K.a,{align:"right",children:e.age}),Object(k.jsx)(K.a,{align:"right",children:e.phoneNo})]},e.id)}))})]})})})})}))),te=Object(s.b)((function(e){return{state:e,isAuthenticated:e.user.isAuthenticated}}))((function(e){var t=e.state,a=e.isAuthenticated;return console.log(t),Object(k.jsxs)(y.a,{children:[Object(k.jsx)(L,{isAuthenticated:a}),Object(k.jsxs)(v.a,{p:4,component:"main",className:"App",children:[Object(k.jsx)(N.b,{path:"/login",exact:!0,strict:!0,component:V}),Object(k.jsx)(N.b,{path:"/",exact:!0,strict:!0,render:function(){return a?Object(k.jsx)(ee,{}):Object(k.jsx)(N.a,{to:"/login"})}}),Object(k.jsx)(N.a,{to:"/login",component:V})]})]})})),ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},ne=a(75),ce=Object(ne.a)({palette:{type:"light",error:{main:"#ca0909"},status:{danger:"#b71c1c"},contrastThreshold:3,tonalOffset:.2}}),re=function(e){var t=[d.a];return Object(j.c)(f,e,j.a.apply(void 0,t))}(window.REDUX_INITIAL_DATA);i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(s.a,{store:re,children:Object(k.jsxs)(l.a,{theme:ce,children:[Object(k.jsx)(o.a,{}),Object(k.jsx)(te,{})]})})}),document.getElementById("root")),ae()},94:function(e){e.exports=JSON.parse('[{"id":1,"name":"test1","age":"11","gender":"male","email":"test1@gmail.com","phoneNo":"9415346313"},{"id":2,"name":"test2","age":"12","gender":"male","email":"test2@gmail.com","phoneNo":"9415346314"},{"id":3,"name":"test3","age":"13","gender":"male","email":"test3@gmail.com","phoneNo":"9415346315"},{"id":4,"name":"test4","age":"14","gender":"male","email":"test4@gmail.com","phoneNo":"9415346316"},{"id":5,"name":"test5","age":"15","gender":"male","email":"test5@gmail.com","phoneNo":"9415346317"},{"id":6,"name":"test6","age":"16","gender":"male","email":"test6@gmail.com","phoneNo":"9415346318"}]')},95:function(e,t,a){},96:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.bdf2faa5.chunk.js.map