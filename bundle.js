(()=>{"use strict";var e={579:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#boardcontainer {\n  display: flex;\n  gap: 25px;\n  background-color: #1a1a1a;\n}\n\n#playerboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.playersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computerboard {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.computersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computersquare:hover {\n  background-color: #555555;\n}\n\n#boardtitlecontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  text-align: center;\n  font-size: 2rem;\n  background-color: #1a1a1a;\n}\n\n#playerboardtitle {\n  width: 500px;\n  margin: 0;\n}\n\n#computerboardtitle {\n  display: none;\n  width: 500px;\n  margin: 0;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #555555;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n}\n\n.dropzone {\n  background-color: #999999;\n}",""]);const i=s},559:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#buttoncontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n#startbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#randombutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#restartbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}",""]);const i=s},771:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"body {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  width: 1050px;\n  position: relative;\n}",""]);const i=s},724:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#modal {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n#playagainbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}",""]);const i=s},429:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#computeroverlay {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#overlay {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1050px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n",""]);const i=s},98:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#shipcontainer {\n  width: 250px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.shipSquare {\n  border: 1px solid #999999;\n  background-color: #555555;\n  box-sizing: border-box;\n  width: 50px;\n  height: 50px;\n}\n\n#carrier {\n  display: flex;\n  width: 250px;\n}\n\n#battleship {\n  display: flex;\n  width: 200px;\n}\n\n#destroyer {\n  display: flex;\n  width: 150px;\n}\n\n#submarine {\n  display: flex;\n  width: 150px;\n}\n\n#patrolboat {\n  display: flex;\n  width: 100px;\n}\n\n",""]);const i=s},16:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#gamestatuscontainer {\n  display: none;\n  justify-content: center;\n  gap: 50px;\n  background-color: #1a1a1a;\n}\n\n#playerstatus {\n  width: 500px;\n}\n\n#computerstatus {\n  width: 500px;\n}",""]);const i=s},391:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),r=n.n(a),o=n(645),s=n.n(o)()(r());s.push([e.id,"#titlebar {\n  text-align: center;\n}\n\n#title {\n  font-size: 3rem;\n  margin: 0;\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&s[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],d=a.base?l[0]+a.base:l[0],c=o[d]||0,p="".concat(d," ").concat(c);o[d]=c+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var l=a(e,r),d=0;d<o.length;d++){var c=n(o[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){const a=n,r=t,o=e,s=[],i=()=>{for(let e=0;e<o;e+=1)s.push(0)};return i(),{owner:a,type:r,length:o,shipArray:s,hit:e=>{s[e]=1},isSunk:()=>s.reduce(((e,t)=>e+t))===o,clean:()=>{s.splice(0),i()}}}function t(t){const n=t,a=[],r={carrier:e(5,"carrier",n),battleship:e(4,"battleship",n),destroyer:e(3,"destroyer",n),submarine:e(3,"submarine",n),patrolboat:e(2,"patrolboat",n)},o=()=>{let e=0;return!0===r.carrier.isSunk()&&(e+=1),!0===r.battleship.isSunk()&&(e+=1),!0===r.destroyer.isSunk()&&(e+=1),!0===r.submarine.isSunk()&&(e+=1),!0===r.patrolboat.isSunk()&&(e+=1),e},s=()=>{for(let e=0,t=0,n=0;e<100;e+=1,t+=1)10===t&&(t=0,n+=1),a.push([t,n,0])};return s(),{ships:r,boardArray:a,placeShip:(e,t,n,r)=>{const o=[n,r];let s=0;for(let e=0;e<a.length;e+=1)a[e][0]===o[0]&&a[e][1]===o[1]&&(s=e);if(0===t)for(let t=0;t<e.length;t+=1)a[s+t].push(e.type,t);if(1===t)for(let t=0,n=0;t<e.length;t+=1,n+=10)a[s+n].push(e.type,t)},receiveAttack:e=>{a[e][2]=1,"carrier"===a[e][3]?r.carrier.hit(a[e][4]):"battleship"===a[e][3]?r.battleship.hit(a[e][4]):"destroyer"===a[e][3]?r.destroyer.hit(a[e][4]):"submarine"===a[e][3]?r.submarine.hit(a[e][4]):"patrol boat"===a[e][3]&&r.patrolboat.hit(a[e][4]),(()=>{const e=document.getElementById("overlay"),t=document.getElementById("modalheader");5===o()&&("computer"===n?(t.textContent="YOU WIN! (=^_^=)",e.style.display="flex"):"player"===n&&(t.textContent="YOU LOSE! <(-_-<)",e.style.display="flex"))})()},sunkShips:o,clean:()=>{a.splice(0),s(),r.carrier.clean(),r.battleship.clean(),r.destroyer.clean(),r.submarine.clean(),r.patrolboat.clean()},hitCount:()=>{let e=0;for(let t=0;t<100;t+=1)a[t].length>3&&1===a[t][2]&&(e+=1);return e},missCount:()=>{let e=0;for(let t=0;t<100;t+=1)3===a[t].length&&1===a[t][2]&&(e+=1);return e}}}const a={p1:t("player"),c:t("computer")};function r(e,t){const n=Math.floor(2*Math.random()),a=[],r=[];let o=[];if(0===n){for(let n=0;n<t.boardArray.length;n+=1)if(t.boardArray[n][0]<=10-e.length)for(let r=0,o=0;r<e.length;r+=1)3===t.boardArray[n+r].length&&(o+=1),o===e.length&&a.push([t.boardArray[n][0],t.boardArray[n][1]]);o=a[Math.floor(Math.random()*a.length)]}if(1===n){for(let n=0;n<t.boardArray.length;n+=1)if(t.boardArray[n][1]<=10-e.length)for(let a=0,o=0,s=0;a<e.length;a+=1,o+=10)3===t.boardArray[n+o].length&&(s+=1),s===e.length&&r.push([t.boardArray[n][0],t.boardArray[n][1]]);o=r[Math.floor(Math.random()*r.length)]}t.placeShip(e,n,o[0],o[1])}function o(e){const t=document.getElementsByClassName("playersquare"),n=document.getElementsByClassName("computersquare"),o=document.getElementById("playershipssunk"),s=document.getElementById("playerhit"),i=document.getElementById("playermiss"),l=document.getElementById("computershipssunk"),d=document.getElementById("computerhit"),c=document.getElementById("computermiss"),p=()=>{for(let e=0;e<100;e+=1)a.p1.boardArray[e].length>3&&t[e].classList.add("occupied")},u=()=>{(()=>{for(let e=0;e<100;e+=1)t[e].classList.remove("occupied","hit","miss"),n[e].classList.remove("hit","miss"),o.textContent="SHIPS SUNK: 0",s.textContent="BOARD HITS: 0",i.textContent="BOARD MISSES: 0",l.textContent="SHIPS SUNK: 0",d.textContent="BOARD HITS: 0",c.textContent="BOARD MISSES: 0"})(),a.p1.clean(),a.c.clean()};"full"===e?(u(),r(a.p1.ships.carrier,a.p1),r(a.p1.ships.battleship,a.p1),r(a.p1.ships.destroyer,a.p1),r(a.p1.ships.submarine,a.p1),r(a.p1.ships.patrolboat,a.p1),r(a.c.ships.carrier,a.c),r(a.c.ships.battleship,a.c),r(a.c.ships.destroyer,a.c),r(a.c.ships.submarine,a.c),r(a.c.ships.patrolboat,a.c),p()):"partial"===e?u():"refresh"===e&&p()}var s=n(379),i=n.n(s),l=n(795),d=n.n(l),c=n(569),p=n.n(c),u=n(565),m=n.n(u),h=n(216),y=n.n(h),b=n(589),f=n.n(b),g=n(771),v={};v.styleTagTransform=f(),v.setAttributes=m(),v.insert=p().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=y(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var x=n(429),E={};E.styleTagTransform=f(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=d(),E.insertStyleElement=y(),i()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;var A=n(391),S={};S.styleTagTransform=f(),S.setAttributes=m(),S.insert=p().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=y(),i()(A.Z,S),A.Z&&A.Z.locals&&A.Z.locals;var k=n(579),C={};C.styleTagTransform=f(),C.setAttributes=m(),C.insert=p().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=y(),i()(k.Z,C),k.Z&&k.Z.locals&&k.Z.locals;var w=n(559),I={};I.styleTagTransform=f(),I.setAttributes=m(),I.insert=p().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=y(),i()(w.Z,I),w.Z&&w.Z.locals&&w.Z.locals;var Z=n(16),T={};T.styleTagTransform=f(),T.setAttributes=m(),T.insert=p().bind(null,"head"),T.domAPI=d(),T.insertStyleElement=y(),i()(Z.Z,T),Z.Z&&Z.Z.locals&&Z.Z.locals;var L=n(724),B={};B.styleTagTransform=f(),B.setAttributes=m(),B.insert=p().bind(null,"head"),B.domAPI=d(),B.insertStyleElement=y(),i()(L.Z,B),L.Z&&L.Z.locals&&L.Z.locals;var N=n(98),P={};P.styleTagTransform=f(),P.setAttributes=m(),P.insert=p().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=y(),i()(N.Z,P),N.Z&&N.Z.locals&&N.Z.locals,function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("p"),s=document.createElement("div"),i=document.createElement("p"),l=document.createElement("p"),d=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("button"),m=document.createElement("div"),h=document.createElement("button"),y=document.createElement("button"),b=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),v=document.createElement("p"),x=document.createElement("p"),E=document.createElement("p"),A=document.createElement("p"),S=document.createElement("p"),k=document.createElement("p"),C=document.createElement("div"),w=document.createElement("p"),I=document.createElement("p"),Z=document.createElement("button"),T=document.createElement("div"),L=document.createElement("div"),B=document.createElement("div"),N=document.createElement("div"),P=document.createElement("div"),M=document.createElement("div"),R=document.createElement("div");e.id="content",t.id="main",d.id="boardcontainer",c.id="playerboard",l.id="playerboardtitle",l.textContent="PLAYER",p.id="buttoncontainer",u.id="randombutton",u.textContent="PLACE SHIPS",m.id="computerboard",i.id="computerboardtitle",i.textContent="COMPUTER",n.id="titlebar",r.id="title",r.textContent="BATTLESHIP",s.id="boardtitlecontainer",h.id="startbutton",h.textContent="START GAME",y.id="restartbutton",y.textContent="RESET GAME",y.style.display="none",b.id="gamestatuscontainer",f.id="playerstatus",g.id="computerstatus",v.id="playershipssunk",x.id="playerhit",E.id="playermiss",A.id="computershipssunk",S.id="computerhit",k.id="computermiss",C.id="modal",Z.id="playagainbutton",T.id="overlay",T.style.display="none",w.id="modalheader",I.id="modaltext",I.textContent="Would you like to play again?",Z.textContent="PLAY AGAIN",L.id="shipcontainer",B.id="carrier",B.className="ship",B.setAttribute("draggable",!0),N.id="battleship",N.className="ship",N.setAttribute("draggable",!0),P.id="destroyer",P.className="ship",P.setAttribute("draggable",!0),M.id="submarine",M.className="ship",M.setAttribute("draggable",!0),R.id="patrolboat",R.className="ship",R.setAttribute("draggable",!0),f.append(v,x,E),g.append(A,S,k),b.append(f,g),s.append(l,i),d.append(L,c,m,T),p.append(h,y,u),n.append(r),C.append(w,I,Z),T.append(C),L.append(B,N,P,M,R),t.append(s,d,b,p),e.append(n,t);for(let e=0;e<5;e+=1){const e=document.createElement("div");e.className="shipsquare",B.append(e)}for(let e=0;e<4;e+=1){const e=document.createElement("div");e.className="shipsquare",N.append(e)}for(let e=0;e<3;e+=1){const e=document.createElement("div");e.className="shipsquare",P.append(e)}for(let e=0;e<3;e+=1){const e=document.createElement("div");e.className="shipsquare",M.append(e)}for(let e=0;e<2;e+=1){const e=document.createElement("div");e.className="shipsquare",R.append(e)}for(let e=0,t=0,n=0;e<100;e+=1,t+=1){10===t&&(t=0,n+=1);const a=document.createElement("div"),r=document.createElement("div");a.dataset.i=e,r.dataset.i=e,a.dataset.x=t,r.dataset.x=t,a.dataset.y=n,r.dataset.y=n,a.className="playersquare",r.className="computersquare",c.append(a),m.append(r)}document.body.append(e),d.addEventListener("click",(e=>{const t=e.target.getAttribute("data-i");if("computerboard"===e.target.parentNode.id&&0===a.c.boardArray[t][2]){a.c.receiveAttack(t),function(){const e=[];for(let t=0;t<100;t+=1)0===a.p1.boardArray[t][2]&&e.push([a.p1.boardArray[t][0],a.p1.boardArray[t][1],t]);const t=e[Math.floor(Math.random()*e.length)];a.p1.receiveAttack(t[2]);const n=document.getElementsByClassName("playersquare");a.p1.boardArray[t[2]].length>3?n[t[2]].classList.add("hit"):n[t[2]].classList.add("miss");const r=document.getElementById("playershipssunk"),o=document.getElementById("playerhit"),s=document.getElementById("playermiss");r.textContent=`PLAYER SHIPS SUNK: ${a.p1.sunkShips()}`,o.textContent=`PLAYER BOARD HITS: ${a.p1.hitCount()}`,s.textContent=`PLAYER BOARD MISSES: ${a.p1.missCount()}`}();const e=document.getElementsByClassName("computersquare");a.c.boardArray[t].length>3?e[t].classList.add("hit"):e[t].classList.add("miss")}A.textContent=`COMPUTER SHIPS SUNK: ${a.c.sunkShips()}`,S.textContent=`COMPUTER BOARD HITS: ${a.c.hitCount()}`,k.textContent=`COMPUTER BOARD MISSES: ${a.c.missCount()}`}));let O=0;h.addEventListener("click",(()=>{1===O?(m.style.display="flex",i.style.display="block",b.style.display="flex",h.style.display="none",u.style.display="none",y.style.display="block"):alert("You must place your ships before you start the game!")})),y.addEventListener("click",(()=>{o("partial"),O=0,m.style.display="none",i.style.display="none",b.style.display="none",T.style.display="none",h.style.display="block",u.style.display="block",y.style.display="none"})),u.addEventListener("click",(()=>{o("full"),O=1})),Z.addEventListener("click",(()=>{o("partial"),O=1,m.style.display="none",i.style.display="none",b.style.display="none",T.style.display="none",h.style.display="block",u.style.display="block",y.style.display="none"})),L.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text",e.target.id),e.dataTransfer.effectAllowed="copy"})),window.addEventListener("keydown",(e=>{"KeyR"===e.code&&console.log(e.target)})),c.addEventListener("dragover",(e=>{e.target.classList.add("draggedover"),e.preventDefault()})),c.addEventListener("dragenter",(e=>{e.target.classList.add("dropzone"),e.preventDefault()})),c.addEventListener("dragleave",(e=>{e.target.classList.remove("dropzone"),e.preventDefault()})),c.addEventListener("drop",(e=>{const t=e.dataTransfer.getData("text"),n=parseInt(e.target.getAttribute("data-x"),10),r=parseInt(e.target.getAttribute("data-y"),10);switch(t){case a.p1.ships.carrier.type:a.p1.placeShip(a.p1.ships.carrier,0,n,r);break;case a.p1.ships.battleship.type:a.p1.placeShip(a.p1.ships.battleship,0,n,r);break;case a.p1.ships.destroyer.type:a.p1.placeShip(a.p1.ships.destroyer,0,n,r);break;case a.p1.ships.submarine.type:a.p1.placeShip(a.p1.ships.submarine,0,n,r);break;case a.p1.ships.patrolboat.type:a.p1.placeShip(a.p1.ships.patrolboat,0,n,r)}e.target.classList.remove("dropzone"),o("refresh")}))}()})()})();