(this["webpackJsonpescape-room-eethuis-vers"]=this["webpackJsonpescape-room-eethuis-vers"]||[]).push([[0],{23:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a,n,s,r,i=c(2),o=c(4),d=c.n(o),l=c(17),j=c.n(l),b=(c(23),c(7)),u=c(1),m=c(3),h=c(40),k=c(11),y=new k.a("".concat("/escape-room-eethuis-vers","/sounds/sounds.mp3"),(function(){var e=y.get();a=new k.b(e).toDestination(),n=new k.b(e).toDestination(),s=new k.b(e).toDestination(),r=new k.b(e).toDestination()})),O=function e(){e.prototype.play=function(e){switch(e){case"blop":a.start("0","0","1");break;case"click":n.start("0","1","1");break;case"correct":s.start("0","2","1");break;case"wrong":r.start("0","3","1")}}};var x=function(e){var t=e.setShowGame,c=e.headerText,a=new O;return Object(i.jsxs)("header",{children:[Object(i.jsxs)("button",{className:"backBtn",onClick:function(){t(0),a.play("click")},children:[Object(i.jsx)(h.a,{size:40}),"Terug"]}),Object(i.jsx)("h2",{children:c})]})};c(35);var p=function(e){var t=e.keyName,c=e.keyPressed,a=new O;return Object(i.jsx)("li",{children:Object(i.jsx)("button",{value:t,className:"key ".concat(t),onClick:function(e){c(e.currentTarget.value),a.play("click")},children:Object(i.jsx)("span",{children:"spacebar"===t||t})})},t)};var f=function(e){var t=e.keyPressed;return Object(i.jsx)("div",{children:Object(i.jsx)("div",{id:"keyboard",children:Object(i.jsxs)("div",{className:"inner-board",children:[Object(i.jsxs)("ul",{className:"cf",id:"qwerty",children:[Object(i.jsx)(p,{keyName:"q",keyPressed:t}),Object(i.jsx)(p,{keyName:"w",keyPressed:t}),Object(i.jsx)(p,{keyName:"e",keyPressed:t}),Object(i.jsx)(p,{keyName:"r",keyPressed:t}),Object(i.jsx)(p,{keyName:"t",keyPressed:t}),Object(i.jsx)(p,{keyName:"y",keyPressed:t}),Object(i.jsx)(p,{keyName:"u",keyPressed:t}),Object(i.jsx)(p,{keyName:"i",keyPressed:t}),Object(i.jsx)(p,{keyName:"o",keyPressed:t}),Object(i.jsx)(p,{keyName:"p",keyPressed:t}),Object(i.jsx)(p,{keyName:"delete",keyPressed:t})]}),Object(i.jsxs)("ul",{className:"cf",id:"asdfg",children:[Object(i.jsx)(p,{keyName:"a",keyPressed:t}),Object(i.jsx)(p,{keyName:"s",keyPressed:t}),Object(i.jsx)(p,{keyName:"d",keyPressed:t}),Object(i.jsx)(p,{keyName:"f",keyPressed:t}),Object(i.jsx)(p,{keyName:"g",keyPressed:t}),Object(i.jsx)(p,{keyName:"h",keyPressed:t}),Object(i.jsx)(p,{keyName:"j",keyPressed:t}),Object(i.jsx)(p,{keyName:"k",keyPressed:t}),Object(i.jsx)(p,{keyName:"l",keyPressed:t}),Object(i.jsx)(p,{keyName:"Enter",keyPressed:t})]}),Object(i.jsxs)("ul",{className:"cf",id:"zxcvb",children:[Object(i.jsx)(p,{keyName:"z",keyPressed:t}),Object(i.jsx)(p,{keyName:"x",keyPressed:t}),Object(i.jsx)(p,{keyName:"c",keyPressed:t}),Object(i.jsx)(p,{keyName:"v",keyPressed:t}),Object(i.jsx)(p,{keyName:"b",keyPressed:t}),Object(i.jsx)(p,{keyName:"n",keyPressed:t}),Object(i.jsx)(p,{keyName:"m",keyPressed:t})]}),Object(i.jsx)("ul",{className:"cf",id:"bottomrow",children:Object(i.jsx)(p,{id:"spacebar",keyName:"spacebar",keyPressed:t})})]})})})},v=c(41),g=c(42);var N=function(e){var t=e.buttenText,c=e.status;return Object(i.jsxs)("button",{id:"check",type:"button",className:"btn btn-lg btn-primary ".concat(c),children:[Object(i.jsx)("span",{children:t}),"correct"===c&&Object(i.jsx)(v.a,{size:60}),"wrong"===c&&Object(i.jsx)(g.a,{size:60})]})};c(36);var w=function(e){var t=e.setShowGame,c=e.setFinished,a=Object(o.useState)(""),n=Object(m.a)(a,2),s=n[0],r=n[1],d=new O,l=Object(o.useState)("Controleer Antwoord"),j=Object(m.a)(l,2),b=j[0],u=j[1],h=Object(o.useState)("hidden"),k=Object(m.a)(h,2),y=k[0],p=k[1];function v(e,t){console.log(e.replace(" ","")),"kopiluwak"===e.replace(" ","")?(p("correct"),u("Goed"),d.play("correct"),c("typeGame")):t&&(p("wrong"),u("Antwoord onjuist"),d.play("wrong"))}return Object(i.jsxs)("div",{id:"type-game",children:[Object(i.jsx)(x,{setShowGame:t,headerText:"Hoe heet de duurste koffie ter wereld?"}),Object(i.jsxs)("div",{id:"text-field",children:[s,Object(i.jsx)("div",{className:"center",children:Object(i.jsx)(N,{buttenText:b,status:y})})]}),Object(i.jsx)(f,{keyPressed:function(e){switch(e){case"delete":p("hidden"),r(s.slice(0,-1)),v(s.slice(0,-1));break;case"Enter":v(s,!0);break;case"spacebar":r(s+" ");break;default:r(s+e),v(s+e)}}})]})},P=c(9),S=c.n(P),G=c(43),C=c(15),T=c(16);c(37);C.a.registerPlugin(T.a);var E=new O;var F=function(e){var t=e.tileData,c=e.setFinished,a=Object(o.useState)("Controleer Antwoord"),n=Object(m.a)(a,2),s=n[0],r=n[1],d=Object(o.useState)(!1),l=Object(m.a)(d,2),j=(l[0],l[1],Object(o.useState)("hidden")),b=Object(m.a)(j,2),u=b[0],h=b[1];return Object(o.useEffect)((function(){var e=S()(".target"),t=S()(".draggable"),a=document.querySelectorAll(".draggable"),n=document.querySelectorAll(".target"),s=(Array.prototype.map.call(a,(function(t,c){var a={element:t,parent:null,value:t.dataset.value};T.a.create(t,{bounds:"#content",type:"x,y",throwProps:!0,onPress:function(){E.play("click")},onDrag:function(t){var c=a.parent;if(c){if(this.hitTest(c.element,"10%"))return;c=a.parent=c.child=null}for(var n=0;n<s.length;n++){var r=s[n];if(!r.child&&this.hitTest(r.element,"10%"))return a.parent=r,r.child=a,void a.parent.element.classList.add("hitting")}e.removeClass("hitting")},onDragEnd:function(){var e=0,c=0;if(a.parent){E.play("blop");var n=t.getBoundingClientRect(),o=a.parent.element.getBoundingClientRect();e="+="+(o.left-n.left),c="+="+(o.top-n.top)}C.a.to(t,{duration:.2,x:e,y:c});for(var d=!0,l=0;l<s.length;l++){s[l].child||(d=!1)}return d?(h(""),i()):(h("hidden"),r("Controleer Antwoord")),a}})})),Array.prototype.map.call(n,(function(e,t){return{element:e,child:null,value:e.dataset.value}})));function i(){for(var e=!0,t=0;t<s.length;t++){var a=s[t];a.child?a.element.id!==a.child.element.id&&(e=!1):e=!1}e?(E.play("correct"),r("Goed"),h("correct"),c("dragGame")):(E.play("wrong"),r("Antwoord onjuist"),h("wrong"))}document.getElementById("check").addEventListener("click",i);for(var o=30,d=S()("#drag-list"),l=S()("#drop-list"),j=S()("#shared-lists").height()/4,b=0;b<t.length;b++)S()(t[b]).css({position:"absolute",top:"".concat(o,"px"),left:"".concat(d.left,"px")}),S()(e[b]).css({position:"absolute",top:"".concat(o,"px"),left:"".concat(l.left,"px")}),o+=j}),[]),Object(i.jsx)("div",{id:"content",children:Object(i.jsxs)("div",{id:"shared-lists",children:[Object(i.jsxs)("div",{className:"list-box",id:"drag-list",children:[t.map((function(e,t){return Object(i.jsxs)("div",{id:e.order,className:"box draggable",children:[e.name,Object(i.jsx)(G.a,{className:"arrow"})]},t)})),Object(i.jsx)(N,{buttenText:s,status:u})]}),Object(i.jsx)("div",{className:"list-box",id:"drop-list",children:t.map((function(e,t){return Object(i.jsx)("div",{id:t,className:"box target"},t)}))})]})})};var A=function(e){var t=e.setShowGame,c=e.setFinished;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{setShowGame:t,headerText:"Zet de volgende koffiesoorten in de volgorde van hoeveelheid melk"}),Object(i.jsx)(F,{tileData:[{order:2,name:"Latte (3)"},{order:0,name:"Espresso macchiato (1)"},{order:3,name:"Cortado (4)"},{order:1,name:"Cappucino (2)"}],setFinished:c})]})},D=c(5),B=c(44),I=c(45);c(38);var z=function(e){var t=e.setShowGame,c=e.setFinished,a=Object(o.useState)([{name:"Brazil",checked:!1},{name:"Vietnam",checked:!1},{name:"Ethiopia",checked:!1},{name:"Indonesia",checked:!1},{name:"Jordan",checked:!1},{name:"Canada",checked:!1},{name:"Italy",checked:!1},{name:"Spain",checked:!1}]),n=Object(m.a)(a,2),s=n[0],r=n[1],d=["Brazil","Vietnam","Ethiopia","Indonesia"],l=new O,j=Object(o.useState)("Controleer Antwoord"),b=Object(m.a)(j,2),u=b[0],h=b[1],k=Object(o.useState)("hidden"),y=Object(m.a)(k,2),p=y[0],f=y[1],v=Object(o.useState)(),g=Object(m.a)(v,2),w=g[0];function P(){var e=0;return s.forEach((function(t){t.checked&&e++})),4===e}function S(){var e=!0;return s.forEach((function(t){t.checked&&(d.includes(t.name)||(e=!1))})),e}return g[1],Object(i.jsxs)("div",{id:"select-game",children:[Object(i.jsx)(x,{setShowGame:t,headerText:"Welke van de volgende landen produceren koffie?"}),Object(i.jsxs)("div",{id:"game-content",children:[w,Object(i.jsx)("div",{className:"center",children:Object(i.jsx)(N,{buttenText:u,status:p})}),Object(i.jsx)("div",{id:"countries",children:s.map((function(e,t){return Object(i.jsxs)("div",{className:"box draggable",onClick:function(){var e=Object(D.a)(s);s[t].checked?(l.play("click"),e[t].checked=!1,r(e)):P()||(l.play("click"),e[t].checked=!s[t].checked,r(e)),P()?(console.log("WINNIG"+S()),S()?(l.play("correct"),f("correct"),h("Goed"),c("selectGame")):(l.play("wrong"),f("wrong"),h("Antwoord onjuist"))):f("hidden")},children:[e.name,e.checked?Object(i.jsx)(B.a,{}):Object(i.jsx)(I.a,{})]},t)}))})]})]})};var L=function(){var e=new O;document.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1});var t=Object(o.useState)(0),c=Object(m.a)(t,2),a=c[0],n=c[1],s=Object(o.useState)({dragGame:!1,typeGame:!1,selectGame:!1}),r=Object(m.a)(s,2),d=r[0],l=r[1];function j(e){l(Object(u.a)(Object(u.a)({},d),{},Object(b.a)({},"".concat(e),!0))),setTimeout((function(){return n(0)}),2e3)}return Object(i.jsxs)("div",{id:"home",class:"app",children:[0!==a||Object(i.jsx)("button",{onClick:function(){n(1),e.play("click")},type:"button",className:"btn btn-lg btn-primary app "+(d.dragGame?"finished":""),children:"play drag game"}),0!==a||Object(i.jsx)("button",{onClick:function(){n(2),e.play("click")},type:"button",className:"btn btn-lg btn-primary app "+(d.typeGame?"finished":""),children:"play type game"}),0!==a||Object(i.jsx)("button",{onClick:function(){n(3),e.play("click")},type:"button",className:"btn btn-lg btn-primary app "+(d.selectGame?"finished":""),children:"play select game"}),1===a&&Object(i.jsx)(A,{setFinished:j,setShowGame:n}),2===a&&Object(i.jsx)(w,{setFinished:j,setShowGame:n}),3===a&&Object(i.jsx)(z,{setFinished:j,setShowGame:n})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};j.a.render(Object(i.jsx)(d.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),q()}},[[39,1,2]]]);
//# sourceMappingURL=main.e447d639.chunk.js.map