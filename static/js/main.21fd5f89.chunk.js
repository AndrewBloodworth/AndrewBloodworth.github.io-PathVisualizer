(this["webpackJsonpsearch-visual"]=this["webpackJsonpsearch-visual"]||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i(12),a=i.n(s),r=i(4),o=i(2),c=i(3),d=i.n(c),l=i(8),u=i(13),h=Object(u.b)({name:"board",initialState:{board:{}},reducers:{setBoard:function(e,t){return{board:t.payload}},updateGrid:function(e,t){}}}),b=h.actions,m=b.setBoard,v=(b.updateGrid,h.reducer),f=function(e){return e.board},g=i(1),p=function(e){var t=e.numberOfRows,i=e.setNumberOfRows,s=Object(r.c)(f).board,a=Object(n.useState)(100),c=Object(o.a)(a,2),u=c[0],h=c[1],b=Object(n.useState)(!0),m=Object(o.a)(b,2),v=m[0],p=m[1],y=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.dom.setAnimations("on"),s.dom.updatePathDistance("Searching..."),s.solved=!1,s.runAlgorithm();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"nav",id:"nav",onMouseLeave:function(){try{s.dom.setAnimations("on")}catch(e){}},children:[Object(g.jsx)("div",{className:"nav-title",children:Object(g.jsx)("h1",{children:"Path Visualizer"})}),Object(g.jsxs)("div",{className:"controls",children:[Object(g.jsxs)("div",{className:"algo-button",children:[Object(g.jsx)("button",{onClick:y,id:"algo-button",children:Object(g.jsx)("strong",{children:"Run"})}),Object(g.jsx)("h3",{})]}),Object(g.jsx)("div",{className:"clear-button",children:Object(g.jsx)("button",{onClick:function(){s.solved=!1,s.clearBoard(!0)},id:"clear-button",children:Object(g.jsx)("strong",{children:"Clear"})})}),Object(g.jsxs)("div",{className:"view-distance",children:[Object(g.jsx)("input",{type:"checkbox",value:v,onClick:function(e){e.target;s.dom.toggleDistances(v),p(!v)},id:"view-distance"}),Object(g.jsx)("label",{children:"Show Distances"})]})]}),Object(g.jsxs)("div",{className:"settings-container",children:[Object(g.jsxs)("div",{className:"settings",children:[Object(g.jsx)("h2",{id:"settings-title",style:{margin:0},children:"Settings:"}),Object(g.jsxs)("div",{className:"slider",children:[Object(g.jsxs)("label",{for:"slider",style:{width:200},children:["Rows: ",t]}),Object(g.jsx)("input",{onChange:function(e){s.dom.setAnimations("off"),s.removeVisited(t),i(s.manufactureGraph(e.target.value)||t)},type:"range",value:t,id:"slider",min:"5",max:"20"})]}),Object(g.jsxs)("div",{className:"speed",children:[Object(g.jsxs)("label",{for:"speed",style:{width:200},children:["Speed: ",u,"ms"]}),Object(g.jsx)("input",{onChange:function(e){var t=e.target;h(t.value),s.updateSpeed(t.value)},type:"range",value:u,id:"speed",name:"speed",min:"10",max:"300"})]})]}),Object(g.jsxs)("div",{className:"distance",children:[Object(g.jsx)("p",{style:{paddingRight:10},children:"Path Distance: "}),Object(g.jsx)("p",{id:"distance",style:{width:80,textAlign:"center"},children:"Infinity"})]})]})]})},y=i(14),j=i(7),O=function(e){var t=e.mouseDown,i=e.setMouseDown,n=e.node,s=e.setNode,a=e.currentRow,o=e.numberOfRows,c=Object(r.c)(f).board,d=function(e){e.preventDefault(),c.dom.grabNode("grabbing"),c.isNode(e.target.id)&&s({currentlyMoving:!0,type:e.target}),c.addRemoveWall(e.target),i(!0)},l=function(){c.dom.grabNode("grab"),s(Object(j.a)(Object(j.a)({},n),{},{currentlyMoving:!1})),i(!1)},u=function(e){var i=e.target;n.currentlyMoving?(c.placeNode(n.type.className,n.type.id,i.id),s(Object(j.a)(Object(j.a)({},n),{},{type:i}))):t&&c.addRemoveWall(i)},h=c.getDimensions(o),b=h.innerWidth,m=h.offsetWidth;return Object(y.a)(Array(b).keys()).map((function(e){var t="".concat(a,"-").concat(e+m);c.graph[t]=c.grid[t];var i=c.grid[t].hasItem()?c.grid[t].items[0]:c.grid[t].state;return Object(g.jsx)("td",{id:t,className:i,onMouseEnter:u,onMouseDown:d,onMouseUp:l,children:Object(g.jsx)("div",{className:"specs",id:"specs-".concat(t),children:c.grid[t].getSpecs()})},e)}))},k=i(9),w=i(5),N=i(6),x=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(w.a)(this,e),this.id=t,this.neighbors=i,this.items=n,this.state="unvisited",this.distance=""}return Object(N.a)(e,[{key:"getSpecs",value:function(){return this.distance}},{key:"hasItem",value:function(){return this.items.length>0}},{key:"isNotWall",value:function(){return"wall"!==this.state}},{key:"getDistance",value:function(){return this.distance}},{key:"addWall",value:function(){this.state="wall",this.setDistance("")}},{key:"setDistance",value:function(e){this.distance=e}},{key:"removeWall",value:function(){this.state="unvisited"}},{key:"shiftItems",value:function(){this.items.shift()}},{key:"unShiftItems",value:function(e){this.items.unshift(e)}},{key:"clear",value:function(){this.state="unvisited",this.setDistance("")}},{key:"changeState",value:function(e){this.state=e}}]),e}(),S=function(){function e(t){Object(w.a)(this,e),this.board=t,this.disabled=!1}return Object(N.a)(e,[{key:"assignGraphOfSize",value:function(e){var t=this.board.getDimensions(e).verticalPixelCount;document.querySelector(":root").style.setProperty("--size","".concat(t,"px"))}},{key:"disableInteraction",value:function(e){this.disabled=e,console.log(this.disabled);var t=document.querySelector(":root");e?(t.style.setProperty("--grid-cursor","default"),t.style.setProperty("--grid-interact","none")):(t.style.setProperty("--grid-cursor","pointer"),t.style.setProperty("--grid-interact","auto"));["algo-button","clear-button","slider","speed"].forEach((function(t){return document.getElementById(t).disabled=e}))}},{key:"setAnimations",value:function(e){"on"===e?(document.body.style.setProperty("--toggle","1"),document.body.style.setProperty("--playState","idle")):"off"===e&&(document.body.style.setProperty("--toggle","0"),document.body.style.setProperty("--playState","finished"))}},{key:"grabNode",value:function(e){document.querySelector(":root").style.setProperty("--node-cursor",e)}},{key:"toggleDistances",value:function(e){var t=document.querySelector(":root");e?t.style.setProperty("--visibility","visible"):t.style.setProperty("--visibility","hidden")}},{key:"updateAnimationSpeed",value:function(){document.body.style.setProperty("--visit-delay","".concat(this.board.speed,"ms")),document.body.style.setProperty("--animation-speed-visited","".concat(5*this.board.speed,"ms"))}},{key:"clearStartStyle",value:function(){document.getElementById(this.board.start).style=""}},{key:"addWall",value:function(e){e.className="wall",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"removeWall",value:function(e){e.className="unvisited",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"clearTransform",value:function(e){var t=document.getElementById(e);t.style.transform&&(t.style="")}},{key:"updatePathDistance",value:function(e){document.getElementById("distance").innerHTML=e}},{key:"noPathFound",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="deepred")}},{key:"pointToPath",value:function(e){var t,i,n=document.getElementById(this.board.start);if(e){var s=e.split("-"),a=Object(o.a)(s,2);t=a[0],i=a[1]}else{var r=this.board.end.split("-"),c=Object(o.a)(r,2);t=c[0],i=c[1]}var d=this.board.start.split("-"),l=Object(o.a)(d,2),u=l[0],h=l[1];Number(h)-1===Number(i)?n.style.transform="rotate(180deg)":Number(h)+1===Number(i)||(Number(u)-1===Number(t)?n.style.transform="rotate(-90deg)":Number(u)+1===Number(t)&&(n.style.transform="rotate(90deg)"))}},{key:"makePath",value:function(e,t){var i=document.getElementById(e);i&&(i.className=t)}},{key:"printPath",value:function(e){var t=this;e.forEach((function(e){var i="path-immediate",n=t.board.grid[e];t.makePath(e,i),n.changeState(i)}))}},{key:"animatePath",value:function(e){var t=this,i=0,n=setInterval((function(){if(e.length){var s=e[i],a="path",r=t.board.grid[s];t.makePath(s,a),r.changeState(a)}++i>=e.length&&clearInterval(n)}),this.board.speed)}},{key:"printVisited",value:function(e,t){var i=this,n=t?"visited-immediate":"deepred";e.forEach((function(e){document.getElementById("specs-".concat(e)).innerHTML=i.board.grid[e].getSpecs(),document.getElementById(e).className=n,i.board.grid[e].changeState(n)}))}},{key:"animateVisited",value:function(e,t){var i=this,n=0,s=setInterval((function(){e.length&&(document.getElementById(e[n]).className="visited",document.getElementById("specs-".concat(e[n])).innerHTML=i.board.grid[e[n]].getSpecs(),i.board.grid[e[n]].changeState("visited")),n++,e[n]||(clearInterval(s),t(e))}),this.board.speed)}},{key:"makeUnvisited",value:function(e){document.getElementById(e).className="unvisited"}},{key:"removeSpec",value:function(e){document.getElementById("specs-".concat(e)).innerHTML=""}},{key:"clearWalls",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="unvisited")}}]),e}(),P=i(18),I=function(){function e(t){Object(w.a)(this,e),this.board=t,this.distances={},this.parents={},this.processed=[]}return Object(N.a)(e,[{key:"init",value:function(){this.board.clearBoard(!1),this.initParameters(),this.initNeighbors()}},{key:"initParameters",value:function(){this.distances=Object.assign({end:1/0},this.board.graph[this.board.start].neighbors),this.parents={end:null},this.processed=[],this.filterWalls()}},{key:"initNeighbors",value:function(){var e=this.getNeighbors(this.board.start);for(var t in e)!this.board.graph[t]||Object.keys(e).includes(this.board.end)||this.board.walls.includes(t)||this.board.start===this.board.end||this.board.graph[t].setDistance(1),this.parents[t]=this.board.start}},{key:"getVisited",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,i){for(var n=[];;){var s=t.lowestCostNode(),a=t.distance(s),r=t.getNeighbors(s);for(var o in r)if(!t.board.walls.includes(o)||o===t.board.end){var c=a+r[o];(!t.distance(o)||t.distance(o)>c)&&(t.distances[o]=c,t.parents[o]=s)}if(!t.board.graph[s]||t.board.isNode(s)||t.board.walls.includes(s)||(n.push(s),t.board.graph[s].setDistance(t.distance(s))),t.processed.push(s),s===t.board.end||null===t.lowestCostNode())break}t.board.solved?(t.board.dom.printVisited(n,t.parents[t.board.end]),e(n)):t.board.dom.animateVisited(n,e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"definePath",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,i,n,s,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.board.dom.disableInteraction(!0),this.board.dom.updatePathDistance("Searching..."),t=0,i=[],e.next=5,this.getVisited();case 5:if(n=e.sent,s=this.parents[this.board.end]){for(;s!==this.board.start;)i.push(s),s=this.parents[s];i.reverse(),t=this.distance(this.board.end),this.board.dom.pointToPath(i[0])}else t=1/0,i=n;return e.abrupt("return",(function(){return a.board.dom.disableInteraction(!1),a.board.dom.updatePathDistance(t),{distance:t,path:i}}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"lowestCostNode",value:function(){var e=this;return Object.keys(this.distances).reduce((function(t,i){return(null===t||e.distances[i]<e.distances[t])&&(e.processed.includes(i)||(t=i)),t}),null)}},{key:"filterWalls",value:function(){var e,t=Object(P.a)(this.board.walls);try{for(t.s();!(e=t.n()).done;){var i=e.value;this.distances[i]&&delete this.distances[i]}}catch(n){t.e(n)}finally{t.f()}}},{key:"getNeighbors",value:function(e){return this.board.graph[e]?this.board.graph[e].neighbors:{}}},{key:"distance",value:function(e){return this.distances[e]}}]),e}(),D=function(){function e(){Object(w.a)(this,e),this.dom={},this.start="0-0",this.end="0-0",this.width=0,this.height=0,this.walls=[],this.grid={},this.graph={},this.solved=!1,this.speed=100}return Object(N.a)(e,[{key:"manufactureGrid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=this.getDimensions(e),i=t.innerHeight,n=t.innerWidth;this.height=i,this.width=n,this.assignNodes(this.width,this.height);for(var s=0;s<this.height;s++)for(var a=0;a<this.width;a++){var r="".concat(s,"-").concat(a),o=this.findNeighbors(s,a);this.grid[r]=new x(r,o,this.nodetype(r))}this.dom=new S(this)}},{key:"manufactureGraph",value:function(e){if(this.dom.clearStartStyle(),this.nodeInBoundary(this.start,e)&&this.nodeInBoundary(this.end,e))return this.graph={},this.dom.assignGraphOfSize(e),e}},{key:"addRemoveWall",value:function(e){var t=e.className,i=this.grid[e.id];"unvisited"===t||"visited"===t||"path"===t||"visited-immediate"===t||"path-immediate"===t||"deepred"===t?(this.walls.push(e.id),i.addWall(),this.dom.addWall(e)):"wall"===e.className&&(this.walls.splice(this.walls.indexOf(e.id),1),i.removeWall(),this.dom.removeWall(e)),this.autoSolve("wall",e.id)}},{key:"placeNode",value:function(e,t,i){this.dom.clearTransform(t);var n=this.grid[t],s=this.grid[i];n.shiftItems(),s.unShiftItems(e),"start-node"===e?this.start=i:"end-node"===e&&(this.end=i),this.autoSolve("node")}},{key:"autoSolve",value:function(e,t){this.dom.disabled||("wall"===e?this.solved&&!this.isNode(t)&&this.runAlgorithm():this.solved&&this.runAlgorithm())}},{key:"runAlgorithm",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,i,n,s,a,r,o=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new I(this)).init(),e.next=4,t.definePath();case 4:if(i=e.sent,n=i(),s=n.distance,a=n.path,s!==1/0){e.next=12;break}return(r=this.grid[this.start]).isNotWall()&&r.changeState("deepred"),a.forEach((function(e){var t=o.grid[e];o.dom.noPathFound(e),t.changeState("deepred")})),this.solved=!1,e.abrupt("return");case 12:this.solved?this.dom.printPath(a):(this.solved=!0,this.dom.animatePath(a));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){for(var t in this.dom.updatePathDistance("Infinity"),this.graph){var i=this.grid[t];"visited"!==i.state&&"path"!==i.state&&"visited-immediate"!==i.state&&"path-immediate"!==i.state&&"deepred"!==i.state||(i.hasItem()||this.dom.makeUnvisited(t),i.clear(),this.dom.removeSpec(t)),this.walls.includes(t)&&e&&(this.dom.clearWalls(t),i.removeWall(),this.walls.splice(this.walls.indexOf(t),1))}}},{key:"removeVisited",value:function(e){for(var t in this.grid){var i=this.grid[t];this.nodeInBoundary(t,e)||this.walls.includes(t)||i.clear()}}},{key:"updateSpeed",value:function(e){this.speed=e,this.dom.updateAnimationSpeed()}},{key:"assignNodes",value:function(e,t){var i=Math.floor(t/2)-1,n=Math.floor(e/2)-3,s=e-Math.floor(e/2)+2;this.start="".concat(i,"-").concat(n),this.end="".concat(i,"-").concat(s)}},{key:"nodeInBoundary",value:function(e,t){var i=this.getDimensions(t),n=i.innerHeight,s=i.offsetHeight,a=i.innerWidth,r=i.offsetWidth,o=Number(e.split("-")[0]),c=Number(e.split("-")[1]);return o<=n-1+s&&o>=s&&c<=a-1+r&&c>=r}},{key:"getDimensions",value:function(e){var t=(window.innerHeight-75)/e,i=t-3,n=window.innerWidth/t,s=Number(e),a=Math.floor(n)-1;return a>40&&(a=40),a<8&&(a=8),{verticalPixelCount:i,innerHeight:s,offsetHeight:Math.floor((this.height-s)/2),innerWidth:a,offsetWidth:Math.floor((this.width-a)/2)}}},{key:"findNeighbors",value:function(e,t){var i,n=t+1>this.width-1?null:"".concat(e,"-").concat(t+1),s=t-1<0?null:"".concat(e,"-").concat(t-1),a=e+1>this.height-1?null:"".concat(e+1,"-").concat(t),r=e-1<0?null:"".concat(e-1,"-").concat(t);return i={},Object(k.a)(i,n,1),Object(k.a)(i,s,1),Object(k.a)(i,a,1),Object(k.a)(i,r,1),i}},{key:"isNode",value:function(e){if(e===this.start||e===this.end)return!0}},{key:"nodetype",value:function(e){return e===this.start?["start-node"]:e===this.end?["end-node"]:[]}}]),e}(),B=function(e){var t=e.numberOfRows,i=Object(r.b)(),s=Object(r.c)(f).board,a=Object(n.useState)(!1),c=Object(o.a)(a,2),d=c[0],l=c[1],u=Object(n.useState)({}),h=Object(o.a)(u,2),b=h[0],v=h[1];Object(n.useEffect)((function(){var e=new D;e.manufactureGrid(),e.dom.assignGraphOfSize(t),i(m(e))}),[i]);if(!Object.keys(s).length)return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("h3",{children:"Loading Grid"})});var p=s.getDimensions(t),k=p.innerHeight,w=p.offsetHeight;return Object(g.jsx)("div",{className:"grid-container",children:Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("table",{className:"grid-table",id:"grid-table",onMouseLeave:function(e){v(Object(j.a)(Object(j.a)({},b),{},{currentlyMoving:!1})),l(!1)},children:Object(g.jsx)("tbody",{children:Object(y.a)(Array(k).keys()).map((function(e){return Object(g.jsx)("tr",{id:"row-".concat(e),children:Object(g.jsx)(O,{currentRow:e+w,mouseDown:d,setMouseDown:l,node:b,setNode:v,numberOfRows:t},e)},e)}))})})})})},W=(i(29),function(){var e=Object(n.useState)(5),t=Object(o.a)(e,2),i=t[0],s=t[1];return Object(g.jsxs)("main",{className:"App",children:[Object(g.jsx)(p,{numberOfRows:i,setNumberOfRows:s}),Object(g.jsx)(B,{numberOfRows:i})]})}),E=Object(u.a)({reducer:{board:v}});a.a.render(Object(g.jsx)(r.a,{store:E,children:Object(g.jsx)(W,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.21fd5f89.chunk.js.map