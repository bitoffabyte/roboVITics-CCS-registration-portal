(this["webpackJsonpccs-react-2.0"]=this["webpackJsonpccs-react-2.0"]||[]).push([[0],{38:function(e,t,c){},41:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c(3),n=c.n(a),r=c(31),i=c.n(r),l=(c(38),c(22)),j=c(7),b=c(11),u=c.n(b),o=c(15),d=c(18),m=(c(40),function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new d.a.auth.GoogleAuthProvider).setCustomParameters({prompt:"select_account"}),e.prev=2,e.next=5,d.a.auth().signInWithPopup(t);case 5:e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}()),O=c(9),h=(c(41),c.p+"static/media/robovitics.9d028bdc.png"),p=c.p+"static/media/signin.34e2d217.svg",x=c.p+"static/media/landingPhoto.52d42d9f.svg",f=c.p+"static/media/landingPhoto2.4cdacc2f.svg",v=c.p+"static/media/Help.3ccee77c.svg",g=c(20),N=function(){var e=Object(j.f)(),t=Object(a.useState)(window.innerWidth),c=Object(O.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(!1),l=Object(O.a)(i,2),b=(l[0],l[1]),u=Object(a.useState)(!1),o=Object(O.a)(u,2),d=o[0],N=o[1],w=Object(a.useRef)(x);return w.current=n<801?f:x,Object(a.useEffect)((function(){g.a.auth().signOut();var t=g.a.auth().onAuthStateChanged((function(t){var c;b(!!t),t&&"/"==e.location.pathname&&((c=t.email).includes("2019")&&c.includes("vitstudent.ac.in")||c.includes("2018")&&c.includes("vitstudent.ac.in")||c.includes("2017")&&c.includes("vitstudent.ac.in")?e.push("/register"):e.push("/error"))})),c=function(){return r(window.innerWidth)};return window.addEventListener("resize",c),function(){t(),window.removeEventListener("resize",c)}}),[]),Object(s.jsxs)("div",{className:"landing",style:{overflow:"auto"},children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsxs)("div",{className:"lab",children:[Object(s.jsx)("img",{src:h,className:"roboLogo"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:p,className:"signinbtn",onClick:m}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"vitE",children:"Please sign in with VIT e-mail ID"})]})}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("div",{className:"rab",children:Object(s.jsx)("img",{src:w.current,className:"foto fotoo"})}),Object(s.jsx)("span",{className:"lccs",children:"Core Committee Selection 2020"})]}),Object(s.jsxs)("div",{className:"helpStuff",children:[Object(s.jsx)("span",{className:"help",onClick:function(){return N((function(e){return!e}))},children:"Help?"}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:v,className:"".concat(d?"helpimg hell":"helpimg")}),Object(s.jsx)("div",{className:"".concat(d?"backdrop":""),onClick:function(){return N(!1)}})]})]})},w=c.p+"static/media/submit.2aec8657.svg",k=c(23),S=c.n(k),y=c.p+"static/media/tick.1db0d938.svg",C=(c(49),function(){var e=Object(a.useState)(window.innerWidth),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(a.useRef)(x);r.current=c<801?f:x;var i=Object(a.useState)(!1),l=Object(O.a)(i,2),j=l[0],b=l[1];return Object(a.useEffect)((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(s.jsxs)("div",{className:"landing",style:{overflow:"none"},children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("div",{className:"lav lleft",children:Object(s.jsxs)("div",{className:"qwerty2",children:[Object(s.jsx)("img",{src:y,className:"eiiimg"}),Object(s.jsxs)("div",{className:"qwerty4",children:[Object(s.jsx)("span",{className:"rc",children:"Registration Complete!"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"ffd",children:"For further details, please check your VIT e-mail ID"})]})]})})}),Object(s.jsxs)("div",{className:"right tar",children:[Object(s.jsx)("div",{className:"rab barr",children:Object(s.jsx)("img",{src:r.current,className:"foto ds"})}),Object(s.jsx)("span",{className:"lccs",children:"Core Committee Selection 2020"}),Object(s.jsxs)("div",{className:"helpStuff eewq",children:[Object(s.jsx)("span",{className:"help",children:"Help?"}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:v,className:"".concat(j?"helpimg hell":"helpimg")}),Object(s.jsx)("div",{className:"".concat(j?"backdrop":""),onClick:function(){return b(!1)}})]})]})]})}),E=(c(50),function(){var e=Object(o.a)(u.a.mark((function e(t,c){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={email:t},!1,S.a.ajax({type:"POST",url:"https://ccs-robovitics.herokuapp.com/exists",data:s,success:function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}if(!t.includes("true")){e.next=5;break}return e.abrupt("return",c(!0));case 5:if(!t.includes("false")){e.next=7;break}return e.abrupt("return",c(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),R=function(){var e=Object(a.useState)(window.innerWidth),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(a.useRef)(x),i=Object(a.useRef)(),l=Object(a.useRef)(),b=Object(a.useRef)(),d=Object(a.useRef)(),m=Object(j.f)(),h=Object(a.useState)(!0),p=Object(O.a)(h,2),N=p[0],k=p[1],y=Object(a.useState)(!0),R=Object(O.a)(y,2),A=R[0],L=R[1],I=Object(a.useState)(!0),P=Object(O.a)(I,2),W=P[0],z=P[1],F=Object(a.useState)(!0),H=Object(O.a)(F,2),V=H[0],Z=H[1],q=Object(a.useState)(!1),T=Object(O.a)(q,2),B=T[0],D=T[1],U=Object(a.useState)(!1),G=Object(O.a)(U,2),J=G[0],K=G[1],$="";Object(a.useEffect)((function(){var e=function(){return n(window.innerWidth)};window.addEventListener("resize",e);var t=g.a.auth().onAuthStateChanged(function(){var e=Object(o.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t,"user"),t){e.next=5;break}m.push("/"),e.next=14;break;case 5:return $=t.email,e.prev=6,e.next=9,E(t.email,D);case 9:e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}());return function(){t(),window.removeEventListener("resize",e)}}),[]);var M=function(){var e=Object(o.a)(u.a.mark((function e(t){var c,s,a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),d.current.value.split(" ")>=1||""==d.current.value?L(!1):L(!0),10===i.current.value.length&&/^\d+$/.test(i.current.value)?k(!0):k(!1),/20[A-Z][A-Z][A-Z]\d\d\d\d/.test(l.current.value.toUpperCase())&&9===l.current.value.length?z(!0):z(!1),b.current.value.split(" ").length<50||b.current.value.split(" ").length>200?Z(!1):Z(!0),10===i.current.value.length&&/^\d+$/.test(i.current.value)&&9===l.current.value.length&&/20[A-Z][A-Z][A-Z]\d\d\d\d/.test(l.current.value.toUpperCase())&&!(b.current.value.split(" ").length<50||b.current.value.split(" ").length>200)&&(c=i.current.value,s=l.current.value.toUpperCase(),a=b.current.value,n=d.current.value,r={name:n,email:$,phone:c,regno:s,reason:a},console.log(r),S.a.post("https://ccs-robovitics.herokuapp.com/register",r,(function(e,t){console.log(e),D(!0)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.current=c<801?f:x,B?Object(s.jsx)(C,{}):Object(s.jsxs)("div",{className:"landing",children:[Object(s.jsxs)("div",{className:"Rleft",children:[Object(s.jsx)("h1",{children:"Register"}),Object(s.jsxs)("div",{className:"labb",children:["const [helpp, updateHelp] = useState(false);",Object(s.jsx)("h1",{className:"labbh1",children:"Register"}),Object(s.jsx)("h2",{children:"Fill the details carefully"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("form",{onSubmit:M,children:[Object(s.jsx)("label",{className:"formLabel",children:"Name"}),Object(s.jsx)("span",{className:"ermsg",children:A?"":Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),"Enter Your Full Name"]})}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{autoComplete:"off",type:"text",className:"".concat(A?"input1":"input1 er"),placeholder:"Name",ref:d,name:"Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"formLabel",children:"Phone Number"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"ermsg",children:N?"":Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),"Enter a valid Phone Number"]})}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{autoComplete:"off",type:"tel",className:"".concat(N?"input1":"input1 er"),placeholder:"Valid 10 digit number",ref:i,name:"phone"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"formLabel",children:"Registration Number"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"ermsg",children:W?"":Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),"Enter a valid Registration Number"]})}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{autoComplete:"off",type:"text",className:"".concat(W?"input1":"input1 er"),placeholder:"Ex:-20BCE0000",ref:l,name:"regno"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{className:"formLabel",children:"Why do you want to join RoboVITics?"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"ermsg",children:V?"":Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("br",{}),"Please keep it 50 - 200 words"]})}),Object(s.jsx)("br",{}),Object(s.jsx)("textarea",{type:"text",className:"".concat(V?"input3":"input3 er"),placeholder:"Answer in 50-200 words",ref:b,name:"reason"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"bbb",children:Object(s.jsx)("img",{src:w,className:"submitBtn",alt:"submit button"})})]})]})]}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("div",{className:"rab",children:Object(s.jsx)("img",{src:r.current,className:"foto",alt:"cool-img"})}),Object(s.jsx)("h1",{className:"ccs",children:"Fill the details carefully"}),Object(s.jsxs)("div",{className:"helpStuff",children:[Object(s.jsx)("span",{className:"help",children:"Help?"}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:v,className:"".concat(J?"helpimg hell":"helpimg")}),Object(s.jsx)("div",{className:"".concat(J?"backdrop":""),onClick:function(){return K(!1)}})]})]})]})},A=c.p+"static/media/exclamation.1d78da44.svg",L=(c(51),function(e){var t=e.a,c=e.b,n=Object(a.useState)(window.innerWidth),r=Object(O.a)(n,2),i=r[0],l=r[1],j=Object(a.useRef)(x);j.current=i<801?f:x;var b=Object(a.useState)(!1),u=Object(O.a)(b,2),o=u[0],d=u[1];return Object(a.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(s.jsxs)("div",{className:"landing",children:[Object(s.jsx)("div",{className:"left rat",children:Object(s.jsx)("div",{className:"lab",children:Object(s.jsxs)("div",{className:"qwerty2",children:[Object(s.jsx)("img",{src:A,className:"eiiimg"}),Object(s.jsxs)("div",{className:"qwerty3",children:[Object(s.jsx)("span",{className:"rcc",children:t}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"ffd",children:c})]})]})})}),Object(s.jsxs)("div",{className:"right tarr",children:[Object(s.jsx)("div",{className:"rab",children:Object(s.jsx)("img",{src:j.current,className:"foto"})}),Object(s.jsx)("span",{className:"lccs",children:"Core Committee Selection 2020"}),Object(s.jsxs)("div",{className:"helpStuff",children:[Object(s.jsx)("span",{className:"help",children:"Help?"}),Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:v,className:"".concat(o?"helpimg hell":"helpimg")}),Object(s.jsx)("div",{className:"".concat(o?"backdrop":""),onClick:function(){return d(!1)}})]})]})]})});d.a.apps.length?d.a.app():d.a.initializeApp({apiKey:"AIzaSyALvNNpA2AlvxHyNEIpPdQWuVeZeHvqRVo",authDomain:"ccs-robo.firebaseapp.com",databaseURL:"https://ccs-robo.firebaseio.com",projectId:"ccs-robo",storageBucket:"ccs-robo.appspot.com",messagingSenderId:"1003390848111",appId:"1:1003390848111:web:3510e907a39215e946d19a",measurementId:"G-P7T76KVSWW"});var I=function(){return Object(s.jsx)(l.a,{basename:"/",className:"App",children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/",exact:!0,children:Object(s.jsx)(N,{})}),Object(s.jsx)(j.a,{path:"/register",children:Object(s.jsx)(R,{})}),Object(s.jsx)(j.a,{path:"/error",children:Object(s.jsx)(L,{a:"Oops :(",b:"Please check if you have used your VIT email,ending with 2020@vitstudent.ac.in to sign in."})}),Object(s.jsx)(j.a,{children:Object(s.jsx)(L,{a:"Oops :(",b:" Page Not Found"})})]})})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.cc3142cf.chunk.js.map