(this["webpackJsonpsearch-visual"]=this["webpackJsonpsearch-visual"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(12),s=n.n(a),r=n(3),o=n(2),c=n(4),d=n.n(c),l=n(8),u=n(13),h=Object(u.b)({name:"board",initialState:{board:{}},reducers:{setBoard:function(e,t){return{board:t.payload}},updateGrid:function(e,t){}}}),v=h.actions,m=v.setBoard,b=(v.updateGrid,h.reducer),f=function(e){return e.board},p=n(1),g=function(e){var t=e.slider,n=e.setSlider,a=Object(r.c)(f).board,s=Object(i.useState)(100),c=Object(o.a)(s,2),u=c[0],h=c[1],v=Object(i.useState)(!0),m=Object(o.a)(v,2),b=m[0],g=m[1],y=function(){var e=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.domController.setAnimations("on"),a.domController.updatePathDistance("Searching..."),a.solved=!1,a.runDijkstra();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"nav",id:"nav",onMouseLeave:function(){try{a.domController.setAnimations("on")}catch(e){}},children:[Object(p.jsx)("div",{className:"nav-title",children:Object(p.jsx)("h1",{children:"Path Visualizer"})}),Object(p.jsxs)("div",{className:"controls",children:[Object(p.jsxs)("div",{className:"algo-button",children:[Object(p.jsx)("button",{onClick:y,id:"algo-button",children:Object(p.jsx)("strong",{children:"Run"})}),Object(p.jsx)("h3",{})]}),Object(p.jsx)("div",{className:"clear-button",children:Object(p.jsx)("button",{onClick:function(){a.solved=!1,a.clearBoard(!0)},id:"clear-button",children:Object(p.jsx)("strong",{children:"Clear"})})}),Object(p.jsxs)("div",{className:"view-distance",children:[Object(p.jsx)("input",{type:"checkbox",value:b,onClick:function(e){e.target;a.domController.toggleDistances(b),g(!b)},id:"view-distance"}),Object(p.jsx)("label",{children:"Show Distances"})]})]}),Object(p.jsxs)("div",{className:"settings-container",children:[Object(p.jsxs)("div",{className:"settings",children:[Object(p.jsx)("h2",{id:"settings-title",style:{margin:0},children:"Settings:"}),Object(p.jsxs)("div",{className:"slider",children:[Object(p.jsxs)("label",{for:"slider",style:{width:200},children:["Rows: ",t]}),Object(p.jsx)("input",{onChange:function(e){a.domController.setAnimations("off"),a.removeVisited(t),n(a.manufactureGraph(e.target.value)||t)},type:"range",value:t,id:"slider",min:"5",max:"20"})]}),Object(p.jsxs)("div",{className:"speed",children:[Object(p.jsxs)("label",{for:"speed",style:{width:200},children:["Speed: ",u,"ms"]}),Object(p.jsx)("input",{onChange:function(e){var t=e.target;h(t.value),a.updateSpeed(t.value)},type:"range",value:u,id:"speed",name:"speed",min:"10",max:"300"})]})]}),Object(p.jsxs)("div",{className:"distance",children:[Object(p.jsx)("p",{style:{paddingRight:10},children:"Path Distance: "}),Object(p.jsx)("p",{id:"distance",style:{width:80,textAlign:"center"},children:"Infinity"})]})]})]})},y=n(14),j=n(5),O=function(e){var t=e.mouseDown,n=e.setMouseDown,i=e.node,a=e.setNode,s=e.currentRow,o=e.slider,c=(e.setSlider,Object(r.c)(f).board),d=function(e){e.preventDefault(),c.domController.grabNode("grabbing"),c.isNode(e.target.id)&&a({currentlyMoving:!0,type:e.target}),c.addRemoveWall(e.target),n(!0)},l=function(){c.domController.grabNode("grab"),a(Object(j.a)(Object(j.a)({},i),{},{currentlyMoving:!1})),n(!1)},u=function(e){var n=e.target;i.currentlyMoving?(c.placeNode(i.type.className,i.type.id,n.id),a(Object(j.a)(Object(j.a)({},i),{},{type:n}))):t&&c.addRemoveWall(n)},h=c.getDimensions(o),v=h.innerWidth,m=h.offsetWidth;return Object(y.a)(Array(v).keys()).map((function(e){var t="".concat(s,"-").concat(e+m);c.graph[t]=c.grid[t];var n=c.grid[t].hasItem()?c.grid[t].items[0]:c.grid[t].state;return Object(p.jsx)("td",{id:t,className:n,onMouseEnter:u,onMouseDown:d,onMouseUp:l,children:Object(p.jsx)("div",{className:"specs",id:"specs-".concat(t),children:c.grid[t].getSpecs()})},e)}))},k=n(6),N=n(9),x=n(10),w=n(18),S=Object(u.a)({reducer:{board:b}}),I=function(e,t){return Object.keys(e).reduce((function(n,i){return(null===n||e[i]<e[n])&&(t.includes(i)||(n=i)),n}),null)},P=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,i,a,s,r,o,c,l,u,h,v,m,b,f,p,g,y;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=S.getState().board.board,n=t.walls,i=t.graph,a=t.start,s=t.end,t.speed,a!==s){e.next=4;break}return e.abrupt("return",{distance:0,path:[]});case 4:r=Object.assign({end:1/0},i[a].neighbors),o={end:null},c=[],l=Object(w.a)(n);try{for(l.s();!(u=l.n()).done;)h=u.value,r[h]&&delete r[h]}catch(d){l.e(d)}finally{l.f()}for(v in i[a].neighbors)!i[v]||Object.keys(i[a].neighbors).includes(s)||n.includes(v)||(i[v].distance=1),o[v]=a;return m=I(r,c),b=new Promise((function(e,a){for(var d=[];;){var l=r[m],u=void 0;for(var h in u=i[m]?i[m].neighbors:{})if(!n.includes(h)||h===s){var v=l+u[h];r[h]||(r[h]=v,o[h]=m),r[h]>v&&(r[h]=v,o[h]=m)}if(!i[m]||t.isNode(m)||t.isNode(m)||n.includes(m)||(d.push(m),i[m].distance=r[m]),m===s)break;if(c.push(m),null===(m=I(r,c)))break}t.solved?(t.domController.printVisited(d,o[s]),e(d)):t.domController.animateVisited(d,e)})),e.next=14,b;case 14:if(f=e.sent,p=[s],g=o[s],delete o[a],g){e.next=20;break}return e.abrupt("return",{distance:1/0,path:f});case 20:for(;g;)p.push(g),g=o[g];return p.reverse(),(y={distance:r[s],path:p}).path.shift(),y.path.pop(),e.abrupt("return",y);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){function e(t){Object(N.a)(this,e),this.board=t,this.disabled=!1}return Object(x.a)(e,[{key:"assignGraphOfSize",value:function(e){var t=this.board.getDimensions(e).verticalPixelCount;document.querySelector(":root").style.setProperty("--size","".concat(t,"px"))}},{key:"disableInteraction",value:function(e){this.disabled=e,console.log(this.disabled);var t=document.querySelector(":root");e?(t.style.setProperty("--grid-cursor","default"),t.style.setProperty("--grid-interact","none")):(t.style.setProperty("--grid-cursor","pointer"),t.style.setProperty("--grid-interact","auto"));["algo-button","clear-button","slider","speed"].forEach((function(t){return document.getElementById(t).disabled=e}))}},{key:"setAnimations",value:function(e){"on"===e?(document.body.style.setProperty("--toggle","1"),document.body.style.setProperty("--playState","idle")):"off"===e&&(document.body.style.setProperty("--toggle","0"),document.body.style.setProperty("--playState","finished"))}},{key:"grabNode",value:function(e){document.querySelector(":root").style.setProperty("--node-cursor",e)}},{key:"toggleDistances",value:function(e){var t=document.querySelector(":root");e?t.style.setProperty("--visibility","visible"):t.style.setProperty("--visibility","hidden")}},{key:"updateAnimationSpeed",value:function(){document.body.style.setProperty("--visit-delay","".concat(this.board.speed,"ms")),document.body.style.setProperty("--animation-speed-visited","".concat(5*this.board.speed,"ms"))}},{key:"clearStartStyle",value:function(){document.getElementById(this.board.start).style=""}},{key:"addWall",value:function(e){e.className="wall",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"removeWall",value:function(e){e.className="unvisited",document.getElementById("specs-".concat(e.id)).innerHTML=""}},{key:"clearTransform",value:function(e){var t=document.getElementById(e);t.style.transform&&(t.style="")}},{key:"updatePathDistance",value:function(e){document.getElementById("distance").innerHTML=e}},{key:"noPathFound",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="deepred")}},{key:"pointToPath",value:function(e){var t,n,i=document.getElementById(this.board.start);if(e){var a=e.split("-"),s=Object(o.a)(a,2);t=s[0],n=s[1]}else{var r=this.board.end.split("-"),c=Object(o.a)(r,2);t=c[0],n=c[1]}var d=this.board.start.split("-"),l=Object(o.a)(d,2),u=l[0],h=l[1];Number(h)-1===Number(n)?i.style.transform="rotate(180deg)":Number(h)+1===Number(n)||(Number(u)-1===Number(t)?i.style.transform="rotate(-90deg)":Number(u)+1===Number(t)&&(i.style.transform="rotate(90deg)"))}},{key:"makePath",value:function(e,t){var n=document.getElementById(e);n&&(n.className=t)}},{key:"printPath",value:function(e){var t=this;e.forEach((function(e){var n="path-immediate",i=t.board.grid[e];t.makePath(e,n),i.changeState(n)}))}},{key:"animatePath",value:function(e){var t=this,n=0,i=setInterval((function(){if(e.length){var a=e[n],s="path",r=t.board.grid[a];t.makePath(a,s),r.changeState(s)}++n>=e.length&&clearInterval(i)}),this.board.speed)}},{key:"printVisited",value:function(e,t){var n=this,i=t?"visited-immediate":"deepred";e.forEach((function(e){document.getElementById("specs-".concat(e)).innerHTML=n.board.grid[e].getSpecs(),document.getElementById(e).className=i,n.board.grid[e].changeState(i)}))}},{key:"animateVisited",value:function(e,t){var n=this,i=0,a=setInterval((function(){e.length&&(document.getElementById(e[i]).className="visited",document.getElementById("specs-".concat(e[i])).innerHTML=n.board.grid[e[i]].getSpecs(),n.board.grid[e[i]].changeState("visited")),i++,e[i]||(clearInterval(a),t(e))}),this.board.speed)}},{key:"makeUnvisited",value:function(e){document.getElementById(e).className="unvisited"}},{key:"removeSpec",value:function(e){document.getElementById("specs-".concat(e)).innerHTML=""}},{key:"clearWalls",value:function(e){this.board.isNode(e)||(document.getElementById(e).className="unvisited")}}]),e}(),B=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(N.a)(this,e),this.id=t,this.neighbors=n,this.items=i,this.state="unvisited",this.distance=""}return Object(x.a)(e,[{key:"getSpecs",value:function(){return this.distance}},{key:"hasItem",value:function(){return this.items.length>0}},{key:"isNotWall",value:function(){return"wall"!==this.state}},{key:"addWall",value:function(){this.state="wall",this.distance=""}},{key:"removeWall",value:function(){this.state="unvisited"}},{key:"shiftItems",value:function(){this.items.shift()}},{key:"unShiftItems",value:function(e){this.items.unshift(e)}},{key:"clear",value:function(){this.state="unvisited",this.distance=""}},{key:"changeState",value:function(e){this.state=e}}]),e}(),D=function(){function e(){Object(N.a)(this,e),this.domController={},this.start="0-0",this.end="0-0",this.width=0,this.height=0,this.walls=[],this.grid={},this.graph={},this.solved=!1,this.speed=100}return Object(x.a)(e,[{key:"manufactureGrid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,t=this.getDimensions(e),n=t.innerHeight,i=t.innerWidth;this.height=n,this.width=i,this.assignNodes(this.width,this.height);for(var a=0;a<this.height;a++)for(var s=0;s<this.width;s++){var r="".concat(a,"-").concat(s),o=this.findNeighbors(a,s);this.grid[r]=new B(r,o,this.nodetype(r))}this.domController=new C(this)}},{key:"manufactureGraph",value:function(e){var t=this.domController;if(t.clearStartStyle(),this.nodeInBoundary(this.start,e)&&this.nodeInBoundary(this.end,e))return this.graph={},t.assignGraphOfSize(e),e}},{key:"addRemoveWall",value:function(e){var t=e.className,n=this.grid[e.id],i=this.domController;"unvisited"===t||"visited"===t||"path"===t||"visited-immediate"===t||"path-immediate"===t||"deepred"===t?(this.walls.push(e.id),n.addWall(),i.addWall(e)):"wall"===e.className&&(this.walls.splice(this.walls.indexOf(e.id),1),n.removeWall(),i.removeWall(e)),this.autoSolve("wall",e.id)}},{key:"placeNode",value:function(e,t,n){this.domController.clearTransform(t);var i=this.grid[t],a=this.grid[n];i.shiftItems(),a.unShiftItems(e),"start-node"===e?this.start=n:"end-node"===e&&(this.end=n),this.autoSolve("node")}},{key:"autoSolve",value:function(e,t){this.domController.disabled||("wall"===e?this.solved&&!this.isNode(t)&&this.runDijkstra():this.solved&&this.runDijkstra())}},{key:"runDijkstra",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,n,i,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.domController).disableInteraction(!0),this.clearBoard(!1),e.next=5,P();case 5:if(n=e.sent,t.updatePathDistance(n.distance),t.disableInteraction(!1),n.distance!==1/0){e.next=14;break}return(i=this.grid[this.start]).isNotWall()&&i.changeState("deepred"),n.path.forEach((function(e){var n=a.grid[e];t.noPathFound(e),n.changeState("deepred")})),this.solved=!1,e.abrupt("return");case 14:t.pointToPath(n.path[0]),this.solved?t.printPath(n.path):(this.solved=!0,t.animatePath(n.path));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clearBoard",value:function(e){var t=this.domController;for(var n in t.updatePathDistance("Infinity"),this.graph){var i=this.grid[n];"visited"!==i.state&&"path"!==i.state&&"visited-immediate"!==i.state&&"path-immediate"!==i.state&&"deepred"!==i.state||(i.hasItem()||t.makeUnvisited(n),i.clear(),t.removeSpec(n)),this.walls.includes(n)&&e&&(t.clearWalls(n),i.removeWall(),this.walls.splice(this.walls.indexOf(n),1))}}},{key:"removeVisited",value:function(e){for(var t in this.grid){var n=this.grid[t];this.nodeInBoundary(t,e)||this.walls.includes(t)||n.clear()}}},{key:"updateSpeed",value:function(e){this.speed=e,this.domController.updateAnimationSpeed()}},{key:"assignNodes",value:function(e,t){var n=Math.floor(t/2)-1,i=Math.floor(e/2)-3,a=e-Math.floor(e/2)+2;this.start="".concat(n,"-").concat(i),this.end="".concat(n,"-").concat(a)}},{key:"nodeInBoundary",value:function(e,t){var n=this.getDimensions(t),i=n.innerHeight,a=n.offsetHeight,s=n.innerWidth,r=n.offsetWidth,o=Number(e.split("-")[0]),c=Number(e.split("-")[1]);return o<=i-1+a&&o>=a&&c<=s-1+r&&c>=r}},{key:"getDimensions",value:function(e){var t=(window.innerHeight-75)/e,n=t-3,i=window.innerWidth/t,a=Number(e),s=Math.floor(i)-1;return s>40&&(s=40),s<8&&(s=8),{verticalPixelCount:n,innerHeight:a,offsetHeight:Math.floor((this.height-a)/2),innerWidth:s,offsetWidth:Math.floor((this.width-s)/2)}}},{key:"findNeighbors",value:function(e,t){var n,i=t+1>this.width-1?null:"".concat(e,"-").concat(t+1),a=t-1<0?null:"".concat(e,"-").concat(t-1),s=e+1>this.height-1?null:"".concat(e+1,"-").concat(t),r=e-1<0?null:"".concat(e-1,"-").concat(t);return n={},Object(k.a)(n,i,1),Object(k.a)(n,a,1),Object(k.a)(n,s,1),Object(k.a)(n,r,1),n}},{key:"isNode",value:function(e){if(e===this.start||e===this.end)return!0}},{key:"nodetype",value:function(e){return e===this.start?["start-node"]:e===this.end?["end-node"]:[]}}]),e}(),W=function(e){var t=e.slider,n=e.setSlider,a=Object(r.c)(f).board,s=Object(r.b)(),c=Object(i.useState)(!1),d=Object(o.a)(c,2),l=d[0],u=d[1],h=Object(i.useState)({target:null,bool:!1}),v=Object(o.a)(h,2),b=v[0],g=v[1];Object(i.useEffect)((function(){var e=new D;e.manufactureGrid(),e.domController.assignGraphOfSize(t),s(m(e))}),[s]);if(!Object.keys(a).length)return Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("h3",{children:"Loading Grid"})});return Object(p.jsx)("div",{className:"grid-container",children:Object(p.jsx)("div",{className:"grid",children:Object(p.jsx)("table",{className:"grid-table",id:"grid-table",onMouseLeave:function(e){g(Object(j.a)(Object(j.a)({},b),{},{currentlyMoving:!1})),u(!1)},children:Object(p.jsx)("tbody",{children:function(){var e=a.getDimensions(t),i=e.innerHeight,s=e.offsetHeight;return Object(y.a)(Array(i).keys()).map((function(e){return Object(p.jsx)("tr",{id:"row-".concat(e),children:Object(p.jsx)(O,{currentRow:e+s,mouseDown:l,setMouseDown:u,node:b,setNode:g,slider:t,setSlider:n},e)},e)}))}()})})})})},E=(n(29),function(){var e=Object(i.useState)(5),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("main",{className:"App",children:[Object(p.jsx)(g,{slider:n,setSlider:a}),Object(p.jsx)(W,{slider:n,setSlider:a})]})});s.a.render(Object(p.jsx)(r.a,{store:S,children:Object(p.jsx)(E,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.23bd5dab.chunk.js.map