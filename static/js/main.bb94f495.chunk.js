(this["webpackJsonpsearch-visual"]=this["webpackJsonpsearch-visual"]||[]).push([[0],{29:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(10),a=s.n(n),r=s(3),c=s(2),d=s(4),o=s.n(d),l=s(8),u=s(11),h=Object(u.b)({name:"board",initialState:{board:{}},reducers:{setBoard:function(e,t){return{board:t.payload}},updateGrid:function(e,t){}}}),m=h.actions,b=m.setBoard,v=(m.updateGrid,h.reducer),f=function(e){return e.board},g=s(1),p=function(e){var t=e.slider,s=e.setSlider,n=Object(r.c)(f).board,a=Object(i.useState)(100),d=Object(c.a)(a,2),u=d[0],h=d[1],m=Object(i.useState)(!1),b=Object(c.a)(m,2),v=b[0],p=b[1];Object(i.useEffect)((function(){document.body.style.setProperty("--visit-delay","".concat(100,"ms")),document.body.style.setProperty("--animation-speed-visited","".concat(500,"ms"))}),[]);var y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setAnimations("on"),document.getElementById("distance").innerHTML="Searching...",n.solved=!1,n.runDijkstra();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"nav",id:"nav",onMouseLeave:function(){try{n.setAnimations("on")}catch(e){}},children:[Object(g.jsx)("div",{className:"nav-title",children:Object(g.jsx)("h1",{children:"Path Visualizer"})}),Object(g.jsx)("div",{className:"algo-button",children:Object(g.jsx)("button",{onClick:y,id:"algo-button",children:"Run Algorithm"})}),Object(g.jsx)("div",{className:"clear-button",children:Object(g.jsx)("button",{onClick:function(){n.solved=!1,n.clearBoard(!0)},id:"clear-button",children:"Clear Board"})}),Object(g.jsx)("div",{className:"view-distance",children:Object(g.jsx)("input",{type:"checkbox",value:v,onClick:function(e){e.target;var t=document.querySelector(":root");v?t.style.setProperty("--visibility","hidden"):t.style.setProperty("--visibility","visible"),p(!v)},id:"view-distance"})}),Object(g.jsxs)("div",{className:"settings-container",children:[Object(g.jsx)("h2",{style:{margin:0},children:"Settings:"}),Object(g.jsxs)("div",{className:"settings",children:[Object(g.jsxs)("div",{className:"slider",children:[Object(g.jsxs)("label",{for:"slider",style:{width:61},children:["Rows: ",t]}),Object(g.jsx)("input",{onChange:function(e){n.setAnimations("off"),n.removeVisited(t),s(n.manufactureGrid(e.target.value)||t)},type:"range",value:t,id:"slider",name:"volume",min:"5",max:"20"})]}),Object(g.jsxs)("div",{className:"speed",children:[Object(g.jsxs)("label",{for:"speed",style:{width:95},children:["Speed: ",u,"ms"]}),Object(g.jsx)("input",{onChange:function(e){var t=e.target;h(t.value),n.updateSpeed(t.value)},type:"range",value:u,id:"speed",name:"speed",min:"10",max:"300"})]}),Object(g.jsxs)("div",{className:"distance",children:[Object(g.jsx)("p",{style:{paddingRight:10},children:"Path Distance: "}),Object(g.jsx)("p",{id:"distance",style:{width:80,textAlign:"center"},children:"Infinity"})]})]}),Object(g.jsx)("div",{className:"explanation"})]})]})},y=s(12),j=s(5),O=function(e){var t=e.mouseDown,s=e.setMouseDown,i=e.node,n=e.setNode,a=e.currentRow,c=e.slider,d=(e.setSlider,Object(r.c)(f).board),o=function(e){e.preventDefault(),document.querySelector(":root").style.setProperty("--node-cursor","grabbing"),d.isNode(e.target.id)&&n({currentlyMoving:!0,type:e.target.className}),d.addRemoveWall(e.target),s(!0)},l=function(){document.querySelector(":root").style.setProperty("--node-cursor","grab"),n(Object(j.a)(Object(j.a)({},i),{},{currentlyMoving:!1})),s(!1)},u=function(e){var s=e.target;i.currentlyMoving?(d.placeNode(i.type,s.id),n(Object(j.a)({},i))):t&&d.addRemoveWall(s)},h=d.getDimensions(c);return Object(y.a)(Array(h.innerWidth).keys()).map((function(e){var t="".concat(a,"-").concat(e+h.offsetWidth);d.graph[t]=d.grid[t];var s=d.grid[t].items.length>0?d.grid[t].items[0]:d.grid[t].state;return Object(g.jsx)("td",{id:t,className:s,onMouseEnter:u,onMouseDown:o,onMouseUp:l,children:Object(g.jsx)("div",{className:"specs",id:"specs-".concat(t),children:d.grid[t].getSpecs()})},e)}))},N=s(6),x=s(16),w=s(17),k=s(18),B=Object(u.a)({reducer:{board:v}}),I=function(e,t){return Object.keys(e).reduce((function(s,i){return(null===s||e[i]<e[s])&&(t.includes(i)||(s=i)),s}),null)},S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,s,i,n,a,r,c,d,l,u,h,m,b,v,f,g,p,y,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B.getState().board.board,s=t.walls,i=t.graph,n=t.start,a=t.end,r=t.speed,n!==a){e.next=4;break}return e.abrupt("return",{distance:0,path:[]});case 4:c=Object.assign({end:1/0},i[n].neighbors),d={end:null},l=[],u=Object(k.a)(s);try{for(u.s();!(h=u.n()).done;)m=h.value,c[m]&&delete c[m]}catch(o){u.e(o)}finally{u.f()}for(b in i[n].neighbors)!i[b]||Object.keys(i[n].neighbors).includes(a)||s.includes(b)||(i[b].distance=1),d[b]=n;return v=I(c,l),f=new Promise((function(e,u){for(var h=[];;){var m=c[v],b=void 0;for(var f in b=i[v]?i[v].neighbors:{})if(!s.includes(f)||f===a){var g=m+b[f];c[f]||(c[f]=g,d[f]=v),c[f]>g&&(c[f]=g,d[f]=v)}var p=document.getElementById(v);if(p&&"start-node"!==p.className&&"end-node"!==p.className&&!s.includes(v)&&(h.push(v),v!==n&&v!==a&&(i[v].distance=c[v])),v===a)break;if(l.push(v),null===(v=I(c,l)))break}if(t.solved){var y,j=Object(k.a)(h);try{for(j.s();!(y=j.n()).done;){var O=y.value,N=document.getElementById(O),x=document.getElementById("specs-".concat(O)),w=d[a]?"visited-immediate":"deepred";N&&(x.innerHTML=O!==n?i[O].getSpecs():"",N.className=w,i[O].state=w)}}catch(o){j.e(o)}finally{j.f()}e(h)}else var B=0,S=setInterval((function(){var t=document.getElementById(h[B]),s=document.getElementById("specs-".concat(h[B]));t&&(t.className="visited",s.innerHTML=h[B]!==n?i[h[B]].getSpecs():"",i[h[B]].state="visited"),B++,h[B]||(clearInterval(S),e(h))}),r)})),e.next=14,f;case 14:if(g=e.sent,p=[a],y=d[a],delete d[n],y){e.next=20;break}return e.abrupt("return",{distance:1/0,path:g});case 20:for(;y;)p.push(y),y=d[y];return p.reverse(),(j={distance:c[a],path:p}).path.shift(),j.path.pop(),e.abrupt("return",j);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){function e(t,s){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(x.a)(this,e),this.id=t,this.neighbors=s,this.items=i,this.state="unvisited",this.distance=""}return Object(w.a)(e,[{key:"getSpecs",value:function(){return this.distance}},{key:"hasItem",value:function(){return this.items.length>0}}]),e}(),M=function(){function e(){Object(x.a)(this,e),this.start="0-0",this.end="0-0",this.width=0,this.height=0,this.walls=[],this.grid={},this.graph={},this.solved=!1,this.speed=100,this.algoQueue=[]}return Object(w.a)(e,[{key:"manufactureGrid",value:function(e){if(document.getElementById(this.start).style="",this.nodeInBoundary(this.start,e)&&this.nodeInBoundary(this.end,e))return this.graph={},this.assignGridOfSize(e),e}},{key:"assignGridOfSize",value:function(e){var t=this.getDimensions(e).verticalPixelCount;document.querySelector(":root").style.setProperty("--size","".concat(t,"px"))}},{key:"nodeInBoundary",value:function(e,t){var s=this.getDimensions(t),i=Number(e.split("-")[0]),n=Number(e.split("-")[1]),a=s.innerHeight-1+s.offsetHeight,r=s.innerWidth-1+s.offsetWidth,c=s.offsetWidth,d=s.offsetHeight;return i<=a&&i>=d&&n<=r&&n>=c}},{key:"getDimensions",value:function(e){var t=(window.innerHeight-75)/e,s=t-3,i=window.innerWidth/t,n=Number(e),a=Math.floor(i)-1;return a>40&&(a=40),a<8&&(a=8),{verticalPixelCount:s,innerHeight:n,offsetHeight:Math.floor((this.height-n)/2),innerWidth:a,offsetWidth:Math.floor((this.width-a)/2)}}},{key:"assignNodes",value:function(e,t){var s=Math.floor(t/2)-1,i=Math.floor(e/2)-3,n=e-Math.floor(e/2)+2;this.start="".concat(s,"-").concat(i),this.end="".concat(s,"-").concat(n)}},{key:"manufactureGraph",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=this.getDimensions(e);this.height=t.innerHeight,this.width=t.innerWidth,this.assignNodes(this.width,this.height);for(var s=0;s<this.height;s++)for(var i=0;i<this.width;i++){var n="".concat(s,"-").concat(i),a=this.findNeighbors(s,i);this.grid[n]=new E(n,a,this.nodetype(n))}}},{key:"findNeighbors",value:function(e,t){var s,i=t+1>this.width-1?null:"".concat(e,"-").concat(t+1),n=t-1<0?null:"".concat(e,"-").concat(t-1),a=e+1>this.height-1?null:"".concat(e+1,"-").concat(t),r=e-1<0?null:"".concat(e-1,"-").concat(t);return s={},Object(N.a)(s,i,1),Object(N.a)(s,n,1),Object(N.a)(s,a,1),Object(N.a)(s,r,1),s}},{key:"isNode",value:function(e){if(e===this.start||e===this.end)return!0}},{key:"nodetype",value:function(e){return e===this.start?["start-node"]:e===this.end?["end-node"]:[]}},{key:"updateSpeed",value:function(e){this.speed=e,document.body.style.setProperty("--visit-delay","".concat(this.speed,"ms")),document.body.style.setProperty("--animation-speed-visited","".concat(5*this.speed,"ms"))}},{key:"setAnimations",value:function(e){"on"===e?(document.body.style.setProperty("--toggle","1"),document.body.style.setProperty("--playState","idle")):"off"===e&&(document.body.style.setProperty("--toggle","0"),document.body.style.setProperty("--playState","finished"))}},{key:"addRemoveWall",value:function(e){var t=e.className,s=document.getElementById("specs-".concat(e.id));"unvisited"===t||"visited"===t||"path"===t||"visited-immediate"===t||"path-immediate"===t||"deepred"===t?(this.walls.push(e.id),e.className="wall",s.innerHTML="",this.grid[e.id].state="wall",this.grid[e.id].distance=""):"wall"===e.className&&(this.walls.splice(this.walls.indexOf(e.id),1),s.innerHTML="",e.className="unvisited",this.grid[e.id].state="unvisited"),this.solved&&this.runDijkstra()}},{key:"placeNode",value:function(e,t){if("start-node"===e){var s=document.getElementById(this.start);s.style.transform&&(s.style=""),this.grid[this.start].items.shift(),this.grid[t].items.unshift("start-node"),this.start=t}else if("end-node"===e){var i=document.getElementById(this.start);i.style.transform&&(i.style=""),this.grid[this.end].items.shift(),this.grid[t].items.unshift("end-node"),this.end=t}this.solved&&this.runDijkstra()}},{key:"disableGridTable",value:function(e){var t=document.querySelector(":root");e?(t.style.setProperty("--grid-cursor","wait"),t.style.setProperty("--grid-interact","none")):(t.style.setProperty("--grid-cursor","pointer"),t.style.setProperty("--grid-interact","auto"))}},{key:"disableNavBar",value:function(e){["algo-button","clear-button","slider","speed"].forEach((function(t){return document.getElementById(t).disabled=e}))}},{key:"runDijkstra",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,s,i,n,a,r,d,l,u,h,m,b,v,f,g,p=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.disableNavBar(!0),this.disableGridTable(!0),this.clearBoard(!1),e.next=6,S();case 6:if(t=e.sent,document.getElementById("distance").innerHTML=t.distance,this.disableNavBar(!1),this.disableGridTable(!1),t.distance!==1/0){e.next=15;break}return"wall"!==this.grid[this.start].state&&(this.grid[this.start].state="deepred"),t.path.forEach((function(e){var t=document.getElementById(e);p.isNode(e)||(t.className="deepred"),p.grid[e].state="deepred"})),this.solved=!1,e.abrupt("return");case 15:s=0,i=t.path.length,n=document.getElementById(this.start),t.path[0]?(u=t.path[0].split("-"),h=Object(c.a)(u,2),a=h[0],r=h[1]):(d=this.end.split("-"),l=Object(c.a)(d,2),a=l[0],r=l[1]),m=this.start.split("-"),b=Object(c.a)(m,2),v=b[0],f=b[1],Number(f)-1===Number(r)?n.style.transform="rotate(180deg)":Number(f)+1===Number(r)||(Number(v)-1===Number(a)?n.style.transform="rotate(-90deg)":Number(v)+1===Number(a)&&(n.style.transform="rotate(90deg)")),this.solved?t.path.forEach((function(e){var t=document.getElementById(e);t&&(p.grid[e].state="path-immediate",t.className="path-immediate")})):(this.solved=!0,g=setInterval((function(){var e=document.getElementById(t.path[s]);e&&(p.grid[t.path[s]].state="path",e.className="path"),++s>=i&&clearInterval(g)}),this.speed));case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeVisited",value:function(e){for(var t in this.grid)this.nodeInBoundary(t,e)||this.walls.includes(t)||(this.grid[t].state="unvisited",this.grid[t].distance="")}},{key:"clearBoard",value:function(e){for(var t in document.getElementById("distance").innerHTML="Infinity",this.graph){var s=document.getElementById(t),i=document.getElementById("specs-".concat(t));"visited"!==s.className&&"path"!==s.className&&"visited-immediate"!==s.className&&"path-immediate"!==s.className&&"start-node"!==s.className&&"end-node"!==s.className&&"deepred"!==s.className||(this.grid[t].hasItem()||"wall"===this.grid[t].state||(s.className="unvisited"),"wall"!==this.grid[t].state&&(this.grid[t].state="unvisited",this.grid[t].distance="",i.innerHTML="")),this.walls.includes(t)&&e&&(this.isNode(t)||(s.className="unvisited"),this.grid[t].state="unvisited",this.walls.splice(this.walls.indexOf(t),1))}}}]),e}(),P=function(e){var t=e.slider,s=e.setSlider,n=Object(r.c)(f).board,a=Object(r.b)(),d=Object(i.useState)(!1),o=Object(c.a)(d,2),l=o[0],u=o[1],h=Object(i.useState)({target:null,bool:!1}),m=Object(c.a)(h,2),v=m[0],p=m[1];Object(i.useEffect)((function(){var e=new M;e.manufactureGraph(),e.assignGridOfSize(5),a(b(e))}),[a]);if(!Object.keys(n).length)return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("h3",{children:"Loading Grid"})});return Object(g.jsx)("div",{className:"grid-container",children:Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("table",{className:"grid-table",id:"grid-table",onMouseLeave:function(e){p(Object(j.a)(Object(j.a)({},v),{},{currentlyMoving:!1})),u(!1)},children:Object(g.jsx)("tbody",{children:function(){var e=n.getDimensions(t);return Object(y.a)(Array(e.innerHeight).keys()).map((function(i){return Object(g.jsx)("tr",{id:"row-".concat(i),children:Object(g.jsx)(O,{currentRow:i+e.offsetHeight,mouseDown:l,setMouseDown:u,node:v,setNode:p,slider:t,setSlider:s},i)},i)}))}()})})})})},D=(s(29),function(){var e=Object(i.useState)(5),t=Object(c.a)(e,2),s=t[0],n=t[1];return Object(g.jsxs)("main",{className:"App",children:[Object(g.jsx)(p,{slider:s,setSlider:n}),Object(g.jsx)(P,{slider:s,setSlider:n})]})});a.a.render(Object(g.jsx)(r.a,{store:B,children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.bb94f495.chunk.js.map