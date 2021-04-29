(this["webpackJsonpsearch-visual"]=this["webpackJsonpsearch-visual"]||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(9),r=n.n(c),s=n(3),o=n(6),i=n.n(o),l=n(7),d=n(10),u=n(4),j=function(e,t){return Object.keys(e).reduce((function(n,a){return(null===n||e[a]<e[n])&&(t.includes(a)||(n=a)),n}),null)},b={},v=[],f=[],m=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,a,c,r,s,o,d,u,f,m,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.assign({end:1/0},b[b.startNode]),n={end:null},a=[],c=Object(l.a)(v);try{for(c.s();!(r=c.n()).done;)s=r.value,t[s]&&delete b[s]}catch(i){c.e(i)}finally{c.f()}for(o in b[b.startNode])n[o]=b[b.startNode];return d=j(t,a),u=new Promise((function(e,c){var r=setInterval((function(){var c=t[d],s=b[d];for(var o in s)if(!v.includes(o)){var i=c+s[o];t[o]||(t[o]=i,n[o]=d),t[o]>i&&(t[o]=i,n[o]=d)}var l=document.getElementById(d);l&&"start-node"!==l.className&&"end-node"!==l.className&&!v.includes(d)&&(l.className="visited"),d===b.endNode&&(clearInterval(r),e()),a.push(d),(d=j(t,a))||clearInterval(r)}),10)})),e.next=10,u;case 10:for(f=[b.endNode],m=n[b.endNode];m;)f.push(m),m=n[m];return f.reverse(),h={distance:t[b.endNode],path:f},!0,e.abrupt("return",h);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=n(1),N=function(){var e=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,a,c,r,s,o,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(l.a)(f);try{for(t.s();!(n=t.n()).done;)a=n.value,"visited"!==(c=document.getElementById(a)).className&&"path"!==c.className||(c.className="unvisited")}catch(i){t.e(i)}finally{t.f()}return e.next=4,m();case 4:(r=e.sent).path.shift(),r.path.pop(),s=0,o=r.path.length,d=setInterval((function(){document.getElementById(r.path[s]).className="path",++s===o&&clearInterval(d)}),1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)("div",{className:"nav-title",children:Object(h.jsx)("h1",{children:"Path Visualizer"})}),Object(h.jsx)("div",{className:"algo-button",children:Object(h.jsx)("button",{onClick:e,children:"Run Algorithm"})}),Object(h.jsx)("div",{className:"clear-button",children:Object(h.jsx)("button",{onClick:function(){var e,t=Object(l.a)(f);try{for(t.s();!(e=t.n()).done;){var n=e.value,a=document.getElementById(n);"visited"!==a.className&&"path"!==a.className&&"wall"!==a.className||(a.className="unvisited"),v.includes(n)&&v.splice(v.indexOf(n),1)}}catch(c){t.e(c)}finally{t.f()}},children:"Clear Board"})})]})},O=n(12),p=n(2),g=n(16),w=n(11),y=Object(w.b)({name:"grid",initialState:{grid:{rows:null,cols:null}},reducers:{setGrid:function(e,t){return{grid:t.payload}}}}),x=y.actions.setGrid,M=y.reducer,k=function(e){return e.grid},I=function(e){var t=e.mouseDown,n=e.setMouseDown,a=e.node,c=e.setNode,r=e.currentRow,o=Object(s.c)(k).grid,i=function(e){e.preventDefault(),e.target.className.includes("node")&&c({previous:e.target,currentlyMoving:!0,type:e.target.className}),n(!0),m(e.target)},l=function(e){var t=e.target;"start-node"===t.className?b.startNode=t.id:"end-node"===t.className&&(b.endNode=t.id),c(Object(p.a)(Object(p.a)({},a),{},{currentlyMoving:!1})),n(!1)},d=function(e){var t=e.target;v.includes(t.id)&&a.currentlyMoving&&(t.className="wall"),"start-node"===a.type&&t.id===b.endNode&&(t.className="end-node"),"end-node"===a.type&&t.id===b.startNode&&(t.className="start-node")},j=function(e){var n=e.target;a.currentlyMoving?(n.className=a.type,"wall"!==a.previous.className&&(a.previous.className="unvisited"),c(Object(p.a)(Object(p.a)({},a),{},{previous:n}))):t&&m(n)},m=function(e){switch(e.className){case"unvisited":v.push(e.id),e.className="wall";break;case"wall":v.splice(v.indexOf(e.id),1),e.className="unvisited"}};return Object(O.a)(Array(o.cols).keys()).map((function(e){var t;return t=b.startNode==="".concat(r,"-").concat(e)?"start-node":b.endNode==="".concat(r,"-").concat(e)?"end-node":v.includes("".concat(r,"-").concat(e))?"wall":"unvisited",function(e,t){var n,a=e.indexOf("-"),c=Number(e.slice(0,a)),r=Number(e.slice(a+1,e.length)),s=r+1>b.cols-1?null:"".concat(c,"-").concat(r+1),o=r-1<0?null:"".concat(c,"-").concat(r-1),i=c+1>b.rows-1?null:"".concat(c+1,"-").concat(r),l=c-1<0?null:"".concat(c-1,"-").concat(r);"wall"!==t&&(b[e]=(n={},Object(u.a)(n,s,1),Object(u.a)(n,o,1),Object(u.a)(n,i,1),Object(u.a)(n,l,1),n)),f.push(e)}("".concat(r,"-").concat(e),t),Object(h.jsx)("td",{id:"".concat(r,"-").concat(e),className:t,onMouseEnter:j,onMouseDown:i,onMouseUp:l,onMouseLeave:d},e)}))},E=function(){var e=Object(s.c)(k).grid,t=Object(s.b)(),n=Object(a.useState)(!1),c=Object(g.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)({target:null,bool:!1}),l=Object(g.a)(i,2),d=l[0],u=l[1];Object(a.useEffect)((function(){var e=Math.floor((window.innerHeight-25)/28),n=Math.floor(window.innerWidth/25)-6;b.rows=e,b.cols=n;var a=Math.floor(e/2),c=Math.floor(n/6),r=n-Math.floor(n/6);b.startNode="".concat(a,"-").concat(c),b.endNode="".concat(a,"-").concat(r),t(x({rows:e,cols:n}))}),[t]);return Object(h.jsx)("div",{className:"grid-container",onMouseLeave:function(e){u(Object(p.a)(Object(p.a)({},d),{},{currentlyMoving:!1,bool:!1})),o(!1)},children:Object(h.jsx)("div",{className:"grid",children:Object(h.jsx)("table",{className:"grid-table",children:Object(h.jsx)("tbody",{children:Object(O.a)(Array(e.rows).keys()).map((function(e){return Object(h.jsx)("tr",{id:"row-".concat(e),children:Object(h.jsx)(I,{currentRow:e,mouseDown:r,setMouseDown:o,node:d,setNode:u},e)},e)}))})})})})},B=function(){return Object(h.jsxs)("main",{className:"App",children:[Object(h.jsx)(N,{}),Object(h.jsx)(E,{})]})},D=Object(w.a)({reducer:{grid:M}});r.a.render(Object(h.jsx)(s.a,{store:D,children:Object(h.jsx)(B,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.19d6cdee.chunk.js.map