(this["webpackJsonpsearch-visual"]=this["webpackJsonpsearch-visual"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(12),a=n.n(s),r=n(3),o=n(2),c=n(4),d=n.n(c),l=n(8),u=n(13),h=Object(u.b)({name:"board",initialState:{board:{}},reducers:{setBoard:function(e,t){return{board:t.payload}},updateGrid:function(e,t){}}}),b=h.actions,m=b.setBoard,v=(b.updateGrid,h.reducer),f=function(e){return e.board},g=n(0),p=function(e){var t=e.numberOfRows,n=e.setNumberOfRows,s=Object(r.c)(f).board,a=Object(i.useState)(100),c=Object(o.a)(a,2),d=c[0],l=c[1],u=Object(i.useState)(!0),h=Object(o.a)(u,2),b=h[0],m=h[1],v=Object(i.useState)(!1),p=Object(o.a)(v,2),y=p[0],j=p[1],O=Object(g.jsx)("div",{className:"settings-menu",style:{visibility:y?"visible":"hidden"},onMouseLeave:function(){j(!1)},children:Object(g.jsxs)("div",{className:"settings",children:[Object(g.jsx)("div",{className:"settings-title",children:Object(g.jsx)("h2",{style:{margin:0},children:"Settings"})}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"slider",id:"setting",children:[Object(g.jsx)("label",{for:"slider",children:Object(g.jsx)("span",{style:{fontSize:20},children:"Rows: "})}),Object(g.jsx)("input",{onChange:function(e){s.dom.setAnimations("off"),s.removeVisited(t),n(s.manufactureGraph(e.target.value)||t)},type:"range",value:t,id:"slider",min:"5",max:"20"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"speed",id:"setting",children:[Object(g.jsx)("label",{for:"speed",children:Object(g.jsx)("span",{style:{fontSize:20},children:"Speed: "})}),Object(g.jsx)("input",{onChange:function(e){var t=e.target;l(t.value),s.updateSpeed(t.value)},type:"range",value:d,id:"speed",name:"speed",min:"10",max:"300"})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"view-distance",id:"setting",children:[Object(g.jsx)("label",{children:Object(g.jsx)("span",{style:{fontSize:20},children:"Distances: "})}),Object(g.jsxs)("div",{className:"show-hide-distances",children:[Object(g.jsx)("p",{style:{margin:0},children:"Show"}),Object(g.jsx)("input",{type:"checkbox",value:b,onClick:function(e){e.target;s.dom.toggleDistances(b),m(!b)},id:"view-distance"})]})]})]})});return Object(g.jsxs)("div",{className:"settings-container",children:[Object(g.jsxs)("div",{className:"distance",children:[Object(g.jsx)("p",{style:{paddingRight:10,margin:0},children:"Path Distance: "}),Object(g.jsx)("p",{id:"distance",style:{fontWeight:800},children:"Infinity"})]}),Object(g.jsx)("div",{className:"options",children:Object(g.jsxs)("div",{className:"settings-detail",onMouseEnter:function(e){e.target;j(!0)},onClick:function(e){var t=e.target;console.log("ID",t.type),"range"!==t.type&&"checkbox"!==t.type&&j(!y)},children:[Object(g.jsxs)("div",{className:"detail-container",children:[Object(g.jsxs)("div",{className:"detail",children:[Object(g.jsx)("u",{children:"Rows "}),t]}),Object(g.jsxs)("div",{className:"detail",children:[Object(g.jsx)("u",{children:"Speed"}),d,"ms"]}),Object(g.jsxs)("div",{className:"detail",children:[Object(g.jsx)("u",{children:"Distances"}),b?"Hidden":"Shown"]})]}),O]})})]})},y=function(e){var t=e.numberOfRows,n=e.setNumberOfRows,i=Object(r.c)(f).board,s=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.dom.setAnimations("on"),i.dom.updatePathDistance("Searching..."),i.dom.updateAlgoButton("Running"),i.solved=!1,i.runAlgorithm();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"nav",id:"nav",onMouseEnter:function(){try{i.dom.setAnimations("on")}catch(e){}},children:[Object(g.jsx)("div",{className:"nav-title",children:Object(g.jsx)("h1",{children:"Path Visualizer"})}),Object(g.jsxs)("div",{className:"controls",children:[Object(g.jsx)("div",{className:"algo-button",children:Object(g.jsx)("button",{onClick:s,id:"algo-button",children:Object(g.jsx)("strong",{children:"Run"})})}),Object(g.jsx)("div",{className:"clear-button",children:Object(g.jsx)("button",{onClick:function(){i.solved=!1,i.clearBoard(!0)},id:"clear-button",children:Object(g.jsx)("strong",{children:"Clear"})})})]}),Object(g.jsx)(p,{numberOfRows:t,setNumberOfRows:n})]})},j=n(14),O=n(7),k=function(e){var t=e.mouseDown,n=e.setMouseDown,i=e.node,s=e.setNode,a=e.currentRow,o=e.numberOfRows,c=Object(r.c)(f).board,d=function(e){e.preventDefault(),c.dom.grabNode("grabbing"),c.isNode(e.target.id)&&s({currentlyMoving:!0,type:e.target}),c.addRemoveWall(e.target),n(!0)},l=function(){c.dom.grabNode("grab"),s(Object(O.a)(Object(O.a)({},i),{},{currentlyMoving:!1})),n(!1)},u=function(e){var n=e.target;i.currentlyMoving?(c.placeNode(i.type.className,i.type.id,n.id),s(Object(O.a)(Object(O.a)({},i),{},{type:n}))):t&&c.addRemoveWall(n)},h=c.getDimensions(o),b=h.innerWidth,m=h.offsetWidth;return Object(j.a)(Array(b).keys()).map((function(e){var t="".concat(a,"-").concat(e+m);c.graph[t]=c.grid[t];var n=c.grid[t].hasItem()?c.grid[t].items[0]:c.grid[t].state;return Object(g.jsx)("td",{id:t,className:n,onMouseEnter:u,onMouseDown:d,onMouseUp:l,children:Object(g.jsx)("div",{className:"specs",id:"specs-".concat(t),children:c.grid[t].getSpecs()})},e)}))},N=n(9),x=n(5),w=n(6),S=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(x.a)(this,e),this.id=t,this.neighbors=n,this.items=i,this.state="unvisited",this.distance=""}return Object(w.a)(e,[{key:"getSpecs",value:function(){return this.distance}},{key:"hasItem",value:function(){return this.items.length>0}},{key:"isNotWall",value:function(){return"wall"!==this.state}},{key:"getDistance",value:function(){return this.distance}},{key:"addWall",value:function(){this.state="wall",this.setDistance("")}},{key:"setDistance",value:function(e){this.distance=e}},{key:"removeWall",value:function(){this.state="unvisited"}},{key:"shiftItems",value:function(){this.items.shift()}},{key:"unShiftItems",value:function(e){this.items.unshift(e)}},{key:"clear",value:function(){this.state="unvisited",this.setDistance("")}},{key:"changeState",value:function(e){this.state=e}}]),e}(),P=function(){function e(t){Object(x.a)(this,e),this.board=t,this.disabled=!1}return Object(w.a)(e,[{key:"assignGraphOfSize",value:function(e){var t=this.board.getDimensions(e),n=t.verticalPixelCount,i=t.horizontalPixelCount,s=document.querySelector(":root");s.style.setProperty("--vert-size","".concat(n,"px")),s.style.setProperty("--horz-size","".concat(i,"px"))}},{key:"disableInteraction",value:function(e){this.disabled=e;var t=document.querySelector(":root");e?(t.style.setProperty("--grid-cursor","default"),t.style.setProperty("--grid-interact","none")):(t.style.setProperty("--grid-cursor","pointer"),t.style.setProperty("--grid-interact","auto"));["algo-button","clear-button","slider","speed"].forEach((function(t){return document.getElementById(t).disabled=e}))}},{key:"setAnimations",value:function(e){"on"===e?(document.body.style.setProperty("--toggle","1"),document.body.style.setProperty("--playState","idle")):"off"===e&&(document.body.style.setProperty("--toggle","0"),document.body.style.setProperty("--playState","finished"))}},{key:"grabNode",value:function(e){document.querySelector(":root").style.setProperty("--node-cursor",e)}},{key:"toggleDistances",value:function(e){var t=document.querySelector(":root");e?t.style.setProperty("--visibility","visible"):t.style.setProperty("--visibility","hidden")}},{key:"updateAnimationSpeed",value:function(){document.body.style.setProperty("--visit-delay","".concat(this.board.speed,"ms")),document.body.style.setProperty("--animation-speed-visited","".concat(5*this.board.speed,"ms"))}},{key:"clearStartStyle",value:function(){document.getElementById(this.board.start).style=""}},{key:"addWall",value:function(e){e.className="wall",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"removeWall",value:function(e){e.className="unvisited",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"clearTransform",value:function(e){var t=document.getElementById(e);t.style.transform&&(t.style="")}},{key:"updatePathDistance",value:function(e){document.getElementById("distance").innerHTML=e}},{key:"updateAlgoButton",value:function(e){document.getElementById("algo-button").innerHTML="<strong>".concat(e,"</strong>")}},{key:"noPathFound",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="deepred")}},{key:"pointToPath",value:function(e){var t,n,i=document.getElementById(this.board.start);if(e){var s=e.split("-"),a=Object(o.a)(s,2);t=a[0],n=a[1]}else{var r=this.board.end.split("-"),c=Object(o.a)(r,2);t=c[0],n=c[1]}var d=this.board.start.split("-"),l=Object(o.a)(d,2),u=l[0],h=l[1];Number(h)-1===Number(n)?i.style.transform="rotate(180deg)":Number(h)+1===Number(n)||(Number(u)-1===Number(t)?i.style.transform="rotate(-90deg)":Number(u)+1===Number(t)&&(i.style.transform="rotate(90deg)"))}},{key:"makePath",value:function(e,t){var n=document.getElementById(e);n&&(n.className=t)}},{key:"printPath",value:function(e){var t=this;e.forEach((function(e){var n="path-immediate",i=t.board.grid[e];t.makePath(e,n),i.changeState(n)}))}},{key:"animatePath",value:function(e){var t=this,n=0,i=setInterval((function(){if(e.length){var s=e[n],a="path",r=t.board.grid[s];t.makePath(s,a),r.changeState(a)}++n>=e.length&&clearInterval(i)}),this.board.speed)}},{key:"printVisited",value:function(e,t){var n=this,i=t?"visited-immediate":"deepred";e.forEach((function(e){document.getElementById("specs-".concat(e)).innerHTML=n.board.grid[e].getSpecs(),document.getElementById(e).className=i,n.board.grid[e].changeState(i)}))}},{key:"animateVisited",value:function(e,t){var n=this,i=0,s=setInterval((function(){e.length&&(document.getElementById(e[i]).className="visited",document.getElementById("specs-".concat(e[i])).innerHTML=n.board.grid[e[i]].getSpecs(),n.board.grid[e[i]].changeState("visited")),i++,e[i]||(clearInterval(s),t(e))}),this.board.speed)}},{key:"makeUnvisited",value:function(e){document.getElementById(e).className="unvisited"}},{key:"removeSpec",value:function(e){document.getElementById("specs-".concat(e)).innerHTML=""}},{key:"clearWalls",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="unvisited")}}]),e}(),I=n(18),B=function(){function e(t){Object(x.a)(this,e),this.board=t,this.distances={},this.parents={},this.processed=[]}return Object(w.a)(e,[{key:"init",value:function(){this.board.clearBoard(!1),this.initParameters(),this.initNeighbors()}},{key:"initParameters",value:function(){this.distances=Object.assign({end:1/0},this.board.graph[this.board.start].neighbors),this.parents={end:null},this.processed=[],this.filterWalls()}},{key:"initNeighbors",value:function(){var e=this.getNeighbors(this.board.start);for(var t in e)!this.board.graph[t]||Object.keys(e).includes(this.board.end)||this.board.walls.includes(t)||this.board.start===this.board.end||this.board.graph[t].setDistance(1),this.parents[t]=this.board.start}},{key:"getVisited",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){for(var i=[];;){var s=t.lowestCostNode(),a=t.distance(s),r=t.getNeighbors(s);for(var o in r)if(!t.board.walls.includes(o)||o===t.board.end){var c=a+r[o];(!t.distance(o)||t.distance(o)>c)&&(t.distances[o]=c,t.parents[o]=s)}if(!t.board.graph[s]||t.board.isNode(s)||t.board.walls.includes(s)||(i.push(s),t.board.graph[s].setDistance(t.distance(s))),t.processed.push(s),s===t.board.end||null===t.lowestCostNode())break}t.board.solved?(t.board.dom.printVisited(i,t.parents[t.board.end]),e(i)):t.board.dom.animateVisited(i,e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"definePath",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,i,s,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.board.dom.disableInteraction(!0),this.board.dom.updatePathDistance("Searching..."),t=0,n=[],e.next=5,this.getVisited();case 5:if(i=e.sent,s=this.parents[this.board.end],this.board.start===this.board.end);else if(s){for(;s!==this.board.start;)n.push(s),s=this.parents[s];n.reverse(),t=this.distance(this.board.end),this.board.dom.pointToPath(n[0])}else t=1/0,n=i;return e.abrupt("return",(function(){return a.board.dom.disableInteraction(!1),a.board.dom.updatePathDistance(t),a.board.dom.updateAlgoButton(t===1/0?"Run":"Auto"),{distance:t,path:n}}));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"lowestCostNode",value:function(){var e=this;return Object.keys(this.distances).reduce((function(t,n){return(null===t||e.distances[n]<e.distances[t])&&(e.processed.includes(n)||(t=n)),t}),null)}},{key:"filterWalls",value:function(){var e,t=Object(I.a)(this.board.walls);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.distances[n]&&delete this.distances[n]}}catch(i){t.e(i)}finally{t.f()}}},{key:"getNeighbors",value:function(e){return this.board.graph[e]?this.board.graph[e].neighbors:{}}},{key:"distance",value:function(e){return this.distances[e]}}]),e}(),D=function(){function e(){Object(x.a)(this,e),this.dom={},this.start="0-0",this.end="0-0",this.width=0,this.height=0,this.walls=[],this.grid={},this.graph={},this.solved=!1,this.speed=100}return Object(w.a)(e,[{key:"manufactureGrid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=this.getDimensions(e),n=t.innerHeight,i=t.innerWidth;this.height=n,this.width=i,this.assignNodes(this.width,this.height);for(var s=0;s<this.height;s++)for(var a=0;a<this.width;a++){var r="".concat(s,"-").concat(a),o=this.findNeighbors(s,a);this.grid[r]=new S(r,o,this.nodetype(r))}this.dom=new P(this)}},{key:"manufactureGraph",value:function(e){if(this.dom.clearStartStyle(),this.nodeInBoundary(this.start,e)&&this.nodeInBoundary(this.end,e))return this.graph={},this.dom.assignGraphOfSize(e),e}},{key:"addRemoveWall",value:function(e){var t=e.className,n=this.grid[e.id];"unvisited"===t||"visited"===t||"path"===t||"visited-immediate"===t||"path-immediate"===t||"deepred"===t?(this.walls.push(e.id),n.addWall(),this.dom.addWall(e)):"wall"===e.className&&(this.walls.splice(this.walls.indexOf(e.id),1),n.removeWall(),this.dom.removeWall(e)),this.autoSolve("wall",e.id)}},{key:"placeNode",value:function(e,t,n){this.dom.clearTransform(t);var i=this.grid[t],s=this.grid[n];i.shiftItems(),s.unShiftItems(e),"start-node"===e?this.start=n:"end-node"===e&&(this.end=n),this.autoSolve("node")}},{key:"autoSolve",value:function(e,t){this.dom.disabled||("wall"===e?this.solved&&!this.isNode(t)&&this.runAlgorithm():this.solved&&this.runAlgorithm())}},{key:"runAlgorithm",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,i,s,a,r,o=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new B(this)).init(),e.next=4,t.definePath();case 4:if(n=e.sent,i=n(),s=i.distance,a=i.path,s!==1/0){e.next=12;break}return(r=this.grid[this.start]).isNotWall()&&r.changeState("deepred"),a.forEach((function(e){var t=o.grid[e];o.dom.noPathFound(e),t.changeState("deepred")})),this.solved=!1,e.abrupt("return");case 12:this.solved?this.dom.printPath(a):(this.solved=!0,this.dom.animatePath(a));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){for(var t in this.dom.updatePathDistance("Infinity"),this.graph){var n=this.grid[t];"visited"!==n.state&&"path"!==n.state&&"visited-immediate"!==n.state&&"path-immediate"!==n.state&&"deepred"!==n.state||(n.hasItem()||this.dom.makeUnvisited(t),n.clear(),this.dom.removeSpec(t)),this.walls.includes(t)&&e&&(this.dom.clearWalls(t),n.removeWall(),this.walls.splice(this.walls.indexOf(t),1))}}},{key:"removeVisited",value:function(e){for(var t in this.grid){var n=this.grid[t];this.nodeInBoundary(t,e)||this.walls.includes(t)||n.clear()}}},{key:"updateSpeed",value:function(e){this.speed=e,this.dom.updateAnimationSpeed()}},{key:"assignNodes",value:function(e,t){var n=Math.floor(t/2)-1,i=Math.floor(e/2)-3,s=e-Math.floor(e/2)+2;this.start="".concat(n,"-").concat(i),this.end="".concat(n,"-").concat(s)}},{key:"nodeInBoundary",value:function(e,t){var n=this.getDimensions(t),i=n.innerHeight,s=n.offsetHeight,a=n.innerWidth,r=n.offsetWidth,o=Number(e.split("-")[0]),c=Number(e.split("-")[1]);return o<=i-1+s&&o>=s&&c<=a-1+r&&c>=r}},{key:"getDimensions",value:function(e){var t=(window.innerHeight-75)/e,n=t-4,i=t-5,s=window.innerWidth/t,a=Number(e),r=Math.floor(s)-1;return r>40&&(r=40),r<8&&(r=8),{verticalPixelCount:n,horizontalPixelCount:i,innerHeight:a,offsetHeight:Math.floor((this.height-a)/2),innerWidth:r,offsetWidth:Math.floor((this.width-r)/2)}}},{key:"findNeighbors",value:function(e,t){var n,i=t+1>this.width-1?null:"".concat(e,"-").concat(t+1),s=t-1<0?null:"".concat(e,"-").concat(t-1),a=e+1>this.height-1?null:"".concat(e+1,"-").concat(t),r=e-1<0?null:"".concat(e-1,"-").concat(t);return n={},Object(N.a)(n,i,1),Object(N.a)(n,s,1),Object(N.a)(n,a,1),Object(N.a)(n,r,1),n}},{key:"isNode",value:function(e){if(e===this.start||e===this.end)return!0}},{key:"nodetype",value:function(e){return e===this.start?["start-node"]:e===this.end?["end-node"]:[]}}]),e}(),W=function(e){var t=e.numberOfRows,n=Object(r.b)(),s=Object(r.c)(f).board,a=Object(i.useState)(!1),c=Object(o.a)(a,2),d=c[0],l=c[1],u=Object(i.useState)({}),h=Object(o.a)(u,2),b=h[0],v=h[1];Object(i.useEffect)((function(){var e=new D;return e.manufactureGrid(),e.dom.assignGraphOfSize(t),n(m(e)),function(){}}),[n]);if(!Object.keys(s).length)return Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("h3",{children:"Loading Grid"})});var p=s.getDimensions(t),y=p.innerHeight,N=p.offsetHeight;return Object(g.jsx)("div",{className:"grid-container",children:Object(g.jsx)("div",{className:"grid",children:Object(g.jsx)("table",{className:"grid-table",id:"grid-table",onMouseLeave:function(e){v(Object(O.a)(Object(O.a)({},b),{},{currentlyMoving:!1})),l(!1)},children:Object(g.jsx)("tbody",{children:Object(j.a)(Array(y).keys()).map((function(e){return Object(g.jsx)("tr",{id:"row-".concat(e),children:Object(g.jsx)(k,{currentRow:e+N,mouseDown:d,setMouseDown:l,node:b,setNode:v,numberOfRows:t},e)},e)}))})})})})},E=(n(29),function(){var e=Object(i.useState)(5),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(g.jsxs)("main",{className:"App",children:[Object(g.jsx)(y,{numberOfRows:n,setNumberOfRows:s}),Object(g.jsx)(W,{numberOfRows:n})]})}),M=Object(u.a)({reducer:{board:v}});a.a.render(Object(g.jsx)(r.a,{store:M,children:Object(g.jsx)(E,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3b328fff.chunk.js.map