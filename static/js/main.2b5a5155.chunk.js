(this.webpackJsonpmastermind=this.webpackJsonpmastermind||[]).push([[0],[,,function(e,t,n){e.exports={holders:"AnswerHolders_holders__2UEX2",checkBtn:"AnswerHolders_checkBtn__1d0Lq",box:"AnswerHolders_box__xVVT2"}},,,,function(e,t,n){e.exports={holder:"holder_holder__2UjTi",active:"holder_active__Jz6z1",activeHolder:"holder_activeHolder__6plbV"}},function(e,t,n){e.exports={holder:"holder_holder__2dYwF",activeHolder:"holder_activeHolder__CQ5-R",disable:"holder_disable__l70tO"}},,,function(e,t,n){e.exports={holders:"holders_holders__1iXN4"}},function(e,t,n){e.exports={btn:"Button_btn__3B3VU"}},function(e,t,n){e.exports={title:"Layout_title__3_VPK"}},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(9),i=n.n(r),s=(n(17),n(18),n(8)),d=n(3),a=n(4),l=n.n(a),h=n(6),u=n.n(h),b=n(0),j=function(e){return Object(b.jsx)("div",{onClick:e.selectNumber.bind(undefined,e.text),className:"".concat(u.a.holder," ").concat(e.sNumber===e.text&&u.a.active),style:{backgroundColor:"var(--color".concat(e.text,")")},children:e.text})},w=n(10),m=n.n(w),x=function(e){var t=e.numbers.map((function(t,n){return Object(b.jsx)(j,{sNumber:e.selectedNumber,text:t,id:n,selectNumber:e.onClickInputNumber},n)}));return Object(b.jsx)("div",{children:Object(b.jsx)("section",{className:m.a.holders,children:t})})},f=(n(22),function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"model",children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsxs)("p",{children:["More info on"," ",Object(b.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"Wikipedia"})]}),Object(b.jsx)("button",{className:"btn",onClick:e.clicked,children:e.buttonText})]})})}),S=n(7),O=n.n(S),p=function(e){var t=[O.a.holder],n=function(){return e.selectNumber(e.id,e.rowId)};return e.show||(t.push(O.a.disable),n=function(){}),Object(b.jsx)("div",{onClick:n,className:t.join(" "),style:{backgroundColor:"var(--color".concat(e.num,")")},children:e.num})},k=n(2),_=n.n(k),v=(n(23),function(e){var t=["holder",e.type,"postion".concat(e.id)];return Object(b.jsx)("div",{className:t.join(" ")})}),N=(n(24),function(e){return Object(b.jsx)("div",{className:"hintHolder",children:e.checkNumber.map((function(e,t){return Object(b.jsx)(v,{id:t,type:e},t)}))})}),g=c.a.memo(N,(function(e,t){return e.checkNumber===t.checkNumber})),C=function(e){var t=e.numbers.map((function(t,n){return Object(b.jsx)(p,{show:e.show,num:t,id:n,rowId:e.id,selectNumber:e.onClickAnswerNumber},n)})),n=Object(b.jsx)(g,{checkNumber:e.checkNumber});e.show?n=Object(b.jsx)("button",{className:_.a.checkBtn,onClick:e.onCheckAnswer,children:"CHECK"}):l.a.isEqual(e.checkNumber,["dontShow","dontShow","dontShow","dontShow"])&&(n=Object(b.jsx)("div",{className:_.a.box}));var o=[_.a.checkBtn];return e.show||o.push(_.a.dontShow),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("section",{className:_.a.holders,children:[Object(b.jsx)("div",{style:{display:"flex",gridColumn:"2 / span 1"},children:t}),n]})})},A=c.a.memo(C,(function(e,t){return!t.show&&t.checkNumber===e.checkNumber})),y=(n(11),n(12)),T=n.n(y),B=function(e){var t=Object(o.useState)(0),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(o.useState)({1:["","","",""],2:["","","",""],3:["","","",""],4:["","","",""],5:["","","",""],6:["","","",""],7:["","","",""],8:["","","",""],9:["","","",""],10:["","","",""]}),a=Object(d.a)(i,2),h=a[0],u=a[1],j=Object(o.useState)({1:["dontShow","dontShow","dontShow","dontShow"],2:["dontShow","dontShow","dontShow","dontShow"],3:["dontShow","dontShow","dontShow","dontShow"],4:["dontShow","dontShow","dontShow","dontShow"],5:["dontShow","dontShow","dontShow","dontShow"],6:["dontShow","dontShow","dontShow","dontShow"],7:["dontShow","dontShow","dontShow","dontShow"],8:["dontShow","dontShow","dontShow","dontShow"],9:["dontShow","dontShow","dontShow","dontShow"],10:["dontShow","dontShow","dontShow","dontShow"]}),w=Object(d.a)(j,2),m=w[0],S=w[1],O=Object(o.useState)(""),p=Object(d.a)(O,2),k=p[0],_=p[1],v=Object(o.useState)(1),N=Object(d.a)(v,2),g=N[0],C=N[1],y=function(e,t){if(0!==c){var n=Object(s.a)({},h),o=n[t].slice();o.splice(e,1,c),n[t]=o,u(n)}else _("error")},B=function(){if(h[g].includes(""))_("fillAll");else{var t=[];e.correctAnswer.forEach((function(e,n){e===h[g][n]&&t.push("exact")})),4===t.length?_("won"):10===g&&_("lose");var n=0,o=l.a.countBy(h[g]),c=l.a.countBy(e.correctAnswer);for(var r in c)n+=Math.min(o[r],c[r])?Math.min(o[r],c[r]):0;for(var i=t.length,d=0;d<n-i;d++)t.push("contain");for(var a=t.length,u=0;u<4-a;u++)t.push("not-contain");var b=Object(s.a)({},m);b[g]=[].concat(t),S(b),C(g+1)}},H=function(){_(!1),window.location.reload(!1)},M=[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(b.jsx)(A,{id:e,numbers:h[e],onClickAnswerNumber:y,onCheckAnswer:B,checkNumber:m[e],show:g===e},e)}));return Object(b.jsxs)("div",{style:{position:"relative"},children:[Object(b.jsx)("h1",{className:T.a.title,children:"Master Mind"}),Object(b.jsx)(x,{numbers:[1,2,3,4,5,6],onClickInputNumber:function(e){r(e)},answer:!1,selectedNumber:c}),M,""!==k?"won"===k?Object(b.jsx)(f,{text:"You won",buttonText:"Play again!",clicked:H}):"lose"===k?Object(b.jsx)(f,{text:"You lose",buttonText:"Play again!",clicked:H}):"error"===k?Object(b.jsx)(f,{text:"Please select a number ",buttonText:"OK!",clicked:function(){return _("")}}):"fillAll"===k?Object(b.jsx)(f,{text:"Please fill all numbers ",buttonText:"OK!",clicked:function(){return _("")}}):"showRules"===k?Object(b.jsx)(f,{text:"Try to guess the pattern, in both order and numbers, within ten turns. After submitting a row, a small black peg is placed for each code peg from the guess which is correct in both number and position. A white peg indicates the existence of a correct number peg placed in the wrong position. A red peg indicates a incorrect number is placed in the pegs",link:"https://en.wikipedia.org/wiki/Mastermind_(board_game)",buttonText:"OK!",clicked:function(){return _("")}}):null:null]})};var H=function(){var e=Array.from({length:4},(function(){return Math.floor(6*Math.random())+1}));return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(B,{correctAnswer:e})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),M()}],[[25,1,2]]]);
//# sourceMappingURL=main.2b5a5155.chunk.js.map