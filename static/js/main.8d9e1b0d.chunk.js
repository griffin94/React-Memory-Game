(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,s,l,u,b,d=t(0),p=t.n(d),f=t(21),j=t.n(f),g=t(2),v=t(10),h=t(5),x=t(6),m=Object(x.a)(r||(r=Object(h.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n    user-select: none;\n    user-drag: none;\n  }\n"]))),O=t(12),k=t(3),w=t(1),y=function(n){return function(e){var t=Object(d.useState)((function(){var n=Math.min(window.innerWidth/1273,window.innerHeight/716);return n>1?1:n})),r=Object(v.a)(t,2),a=r[0],c=r[1];Object(d.useEffect)((function(){return window.addEventListener("resize",o),function(){window.removeEventListener("resize",o)}}),[]);var o=function(n){var e=Math.min(window.innerWidth/1273,window.innerHeight/716);c(e>1?1:e)};return Object(w.jsx)(n,Object(g.a)(Object(g.a)({},e),{},{scale:a}))}},M=t.p+"static/media/button-start.6ff5d47d.png",z=t.p+"static/media/button-start-hover.867264d5.png",S=t.p+"static/media/button-plus.38f15a9f.png",B=t.p+"static/media/button-plus-hover.bf7fe888.png",G=t.p+"static/media/title.c26b316f.png",C=y((function(n){var e=n.player,t=n.setUserData,r=n.scale,a=Object(d.useState)({value:"",error:!1}),c=Object(v.a)(a,2),o=c[0],i=c[1],s=Object(k.f)();return Object(w.jsx)(H,{children:Object(w.jsxs)(A,{scale:r,children:[Object(w.jsxs)(E,{children:[Object(w.jsx)("span",{children:"M"}),"emory\xa0",Object(w.jsx)("span",{children:"G"}),"ame"]}),e.nickname?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(R,{children:["Cze\u015b\u0107 ",e.nickname,"!"]}),Object(w.jsx)(N,{variant:"StartGameBtn",onClick:function(){s.push("/React-Memory-Game/levels")}})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(J,{type:"text",placeholder:"Wpisz sw\xf3j nick...",value:o.value,error:o.error,onChange:function(n){return i(Object(g.a)(Object(g.a)({},o),{},{value:n.target.value}))},onBlur:function(){var n=o.value.trim().charAt(0).toUpperCase()+o.value.trim().slice(1);i(n?{value:n,error:!1}:{value:n,error:!0})}}),Object(w.jsx)(N,{variant:"AddBtn",onClick:function(){o.value?(i(Object(g.a)(Object(g.a)({},o),{},{error:!1})),t(o.value)):i(Object(g.a)(Object(g.a)({},o),{},{error:!0}))}})]})]})})})),H=x.b.div(a||(a=Object(h.a)(["\n  background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=x.b.div(c||(c=Object(h.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1273px;\n  height: 716px;\n  transform: ",";\n  background-image: ",";\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  & * {\n    margin: 10px 0;\n  }\n"])),(function(n){var e=n.scale;return"translate(-50%, -50%) scale(".concat(e,")")}),"url(".concat(G,")")),E=x.b.h1(o||(o=Object(h.a)(["\n  font-size: 80px;\n  letter-spacing: 1px;\n  color: #af753b;\n  text-shadow: 0px 0px 2px black;\n  span {\n    color: #94bd00;\n  }\n"]))),R=x.b.h2(i||(i=Object(h.a)(["\n  font-size: 50px;\n  color: #af753b;\n  text-shadow: 0px 0px 2px black;\n"]))),J=x.b.input(s||(s=Object(h.a)(["\n  width: 363px;\n  height: 60px;\n  border: ",";\n  border-radius: 12px;\n  background: transparent;\n  padding: 10px 5px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #c58662;\n  :focus {\n    outline: none;\n    box-shadow: 0px 0px 10px #ffff04;\n  }\n  ::placeholder {\n    color: #c58662;\n  }\n"])),(function(n){return n.error?"6px solid red":"6px solid #af753b"})),N=x.b.button(l||(l=Object(h.a)(["\n  width: ",";\n  height: ",";\n  background-color: transparent;\n  background-image: ",";\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  transition: background-image 0.2s linear;\n  :hover,\n  :focus {\n    outline: none;\n    background-image: ",";\n  }\n"])),(function(n){var e=n.variant;switch(!0){case"AddBtn"===e:return"88px";case"StartGameBtn"===e:return"363px"}}),(function(n){var e=n.variant;switch(!0){case"AddBtn"===e:return"88px";case"StartGameBtn"===e:return"178px"}}),(function(n){var e=n.variant;switch(!0){case"AddBtn"===e:return"url(".concat(S,")");case"StartGameBtn"===e:return"url(".concat(M,")")}}),(function(n){var e=n.variant;switch(!0){case"AddBtn"===e:return"url(".concat(B,")");case"StartGameBtn"===e:return"url(".concat(z,")")}})),I={lev1:{rows:2,cols:2},lev2:{rows:2,cols:3},lev3:{rows:3,cols:4},lev4:{rows:4,cols:4},lev5:{rows:5,cols:4},lev6:{rows:6,cols:4}};var U,W,D,F,L=function(){var n=Object(k.g)().level,e=Object(d.useState)([]),t=Object(v.a)(e,2),r=t[0],a=t[1],c=Object(d.useState)(0),o=Object(v.a)(c,2),i=o[0],s=o[1],l=I[n],u=l.rows,b=l.cols,p=u*b;Object(d.useEffect)((function(){f(),setTimeout((function(){a((function(n){return n.map((function(n){return Object(g.a)(Object(g.a)({},n),{},{visible:!1,clickHandler:!0})}))}))}),1e3)}),[]);var f=function(){var n=j();h(n),a(n)},j=function(){for(var n=[],e=0;e<p;e++)n.push({id:e,visible:!0,clickHandler:!1,active:!0,background:""});return n},h=function(n){for(var e=n,t=function(t){var r=Math.floor(Math.random()*e.length),a=e[r].id;e=e.filter((function(n,e){return e!==r}));var c=Math.floor(Math.random()*e.length),o=e[c].id;e=e.filter((function(n,e){return e!==c}));var i=x();n[a].background=i,n[o].background=i},r=0;r<p/2;r++)t()},x=function(){var n=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random());return"rgb(".concat(n,", ").concat(e,", ").concat(t,")")},m=function(n){var e=i+1,t=r.map((function(e){return e.id==n.target.id?Object(g.a)(Object(g.a)({},e),{},{visible:!0,clickHandler:!1}):e}));1!==e&&2!==e||(s(e),a(t),2===e&&O(t))},O=function(n){var e=n.filter((function(n){return n.visible})),t=e[0].background===e[1].background;setTimeout((function(){a(n.map((function(n){return n.visible&&t?Object(g.a)(Object(g.a)({},n),{},{clickHandler:!1,visible:!1,active:!1}):n.visible&&!t?Object(g.a)(Object(g.a)({},n),{},{clickHandler:!0,visible:!1}):n}))),s(0)}),1e3)};return Object(w.jsx)(T,{children:r.map((function(n){return Object(w.jsx)(P,{id:n.id,size:b,bgColor:n.active?n.visible?n.background:"gray":"rgba(0, 0, 0, 0.7)",className:n.visible&&"visible",onClick:n.clickHandler?m:void 0},n.id)}))})},T=x.b.div(u||(u=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n"]))),P=x.b.div(b||(b=Object(h.a)(["\n  cursor: pointer;\n  flex-basis: ","%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  border: 4px solid white;\n  border-radius: 10px;\n  transform: rotate3d(0, 1, 0, 0deg);\n  transition: transform 0.4s linear, background-color 0s linear 0.2s;\n  background-color: ",";\n  &.visible {\n    transform: rotate3d(0, 1, 0, 180deg);\n  }\n"])),(function(n){return 100/n.size}),(function(n){return n.bgColor})),q=t.p+"static/media/levelselectscreen.a4eb90f8.png",K=t.p+"static/media/levelicon.c089b3bb.png",Q=t.p+"static/media/leveliconhover.2e9da042.png",V=y((function(n){var e=n.player,t=n.scale,r=Object(k.f)(),a=function(n){r.push("/React-Memory-Game/game/".concat(n.target.id))};return Object(w.jsx)(X,{children:Object(w.jsx)(Y,{scale:t,children:Object(w.jsx)(Z,{amount:Math.ceil(e.progress.length/2),children:e.progress.map((function(n){return Object(w.jsx)($,{id:"lev".concat(n.level),onClick:a,children:n.level},n.level)}))})})})})),X=x.b.div(U||(U=Object(h.a)(["\n  background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),Y=x.b.div(W||(W=Object(h.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 1273px;\n  height: 716px;\n  transform: ",";\n  background-image: ",";\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])),(function(n){var e=n.scale;return"translate(-50%, -50%) scale(".concat(e,")")}),"url(".concat(q,")")),Z=x.b.div(D||(D=Object(h.a)(["\n  width: ","px;\n  display: flex;\n  flex-wrap: wrap;\n"])),(function(n){return 176*n.amount})),$=x.b.button(F||(F=Object(h.a)(["\n  font-size: 60px;\n  font-weight: bold;\n  color: #af753b;\n  text-shadow: 0px 0px 2px black;\n  width: 176px;\n  height: 176px;\n  background-color: transparent;\n  background-image: ",";\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  transition: background-image 0.2s linear;\n  :hover,\n  :focus {\n    outline: none;\n    background-image: ",";\n  }\n"])),"url(".concat(K,")"),"url(".concat(Q,")")),_={nickname:"",progress:[{level:1,passed:!1,score:null},{level:2,passed:!1,score:null},{level:3,passed:!1,score:null},{level:4,passed:!1,score:null},{level:5,passed:!1,score:null},{level:6,passed:!1,score:null}]},nn=function(){var n=Object(d.useState)((function(){var n=JSON.parse(localStorage.getItem("rmg-user-data"));return n||_})),e=Object(v.a)(n,2),t=e[0],r=e[1];return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(m,{}),Object(w.jsxs)(k.c,{children:[Object(w.jsx)(k.a,{exact:!0,path:"/React-Memory-Game",children:Object(w.jsx)(C,{player:t,setUserData:function(n){var e=Object(g.a)(Object(g.a)({},t),{},{nickname:n});localStorage.setItem("rmg-user-data",JSON.stringify(e)),r(e)}})}),Object(w.jsx)(k.a,{exact:!0,path:"/React-Memory-Game/levels",children:Object(w.jsx)(V,{player:t})}),Object(w.jsx)(k.a,{exact:!0,path:"/React-Memory-Game/game/:level",children:Object(w.jsx)(L,{})})]})]})})};j.a.render(Object(w.jsx)(p.a.StrictMode,{children:Object(w.jsx)(nn,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8d9e1b0d.chunk.js.map