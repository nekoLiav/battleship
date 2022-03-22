(()=>{"use strict";var e={579:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#boardcontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  background-color: #1a1a1a;\n}\n\n#playerboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.playersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computerboard {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.computersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computersquare:hover {\n  background-color: #555555;\n}\n\n#boardtitlecontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  text-align: center;\n}\n\n#playerboardtitle {\n  width: 500px;\n  background-color: #1a1a1a;\n}\n\n#computerboardtitle {\n  display: none;\n  width: 500px;\n  background-color: #1a1a1a;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #999999;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n}",""]);const i=s},559:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#buttoncontainer {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  gap: 50px;\n}\n\n#startbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#randombutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#restartbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}",""]);const i=s},771:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"body {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n}",""]);const i=s},369:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#endgamemodal {\n  width: 300px;\n  height: 200px;\n  margin-top: 341px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  box-sizing: border-box;\n}\n\n#playagainbutton {\n  width: 100px;\n  height: 50px;\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n}",""]);const i=s},429:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#computeroverlay {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#overlay {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n",""]);const i=s},16:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#gamestatuscontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n#playerstatus {\n  display: none;\n  width: 500px;\n  background-color: #1a1a1a;\n}\n\n#computerstatus {\n  display: none;\n  width: 500px;\n  background-color: #1a1a1a;\n}",""]);const i=s},391:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"#titlebar {\n  text-align: center;\n}\n\n#title {\n  font-size: 48px;\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var u=n(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var y=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:y,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var l=r(e,a),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){const r=n,a=t,o=e,s=[],i=()=>{for(let e=0;e<o;e+=1)s.push(0)};return i(),{owner:r,type:a,length:o,shipArray:s,hit:e=>{s[e]=1},isSunk:()=>s.reduce(((e,t)=>e+t))===o,clean:()=>{s.splice(0),i()}}}function t(t){const n=t,r=[],a={carrier:e(5,"carrier",n),battleship:e(4,"battleship",n),destroyer:e(3,"destroyer",n),submarine:e(3,"submarine",n),patrolboat:e(2,"patrol boat",n)},o=()=>{let e=0;return!0===a.carrier.isSunk()&&(e+=1),!0===a.battleship.isSunk()&&(e+=1),!0===a.destroyer.isSunk()&&(e+=1),!0===a.submarine.isSunk()&&(e+=1),!0===a.patrolboat.isSunk()&&(e+=1),e},s=()=>{for(let e=0,t=0,n=0;e<100;e+=1,t+=1)10===t&&(t=0,n+=1),r.push([t,n,0])};return s(),{ships:a,boardArray:r,placeShip:(e,t,n,a)=>{const o=[n,a];let s=0;for(let e=0;e<r.length;e+=1)r[e][0]===o[0]&&r[e][1]===o[1]&&(s=e);if(0===t)for(let t=0;t<e.length;t+=1)r[s+t].push(e.type,t);if(1===t)for(let t=0,n=0;t<e.length;t+=1,n+=10)r[s+n].push(e.type,t)},receiveAttack:e=>{r[e][2]=1,"carrier"===r[e][3]?a.carrier.hit(r[e][4]):"battleship"===r[e][3]?a.battleship.hit(r[e][4]):"destroyer"===r[e][3]?a.destroyer.hit(r[e][4]):"submarine"===r[e][3]?a.submarine.hit(r[e][4]):"patrol boat"===r[e][3]&&a.patrolboat.hit(r[e][4]),(()=>{const e=document.getElementById("overlay"),t=document.getElementById("endgamemodalheader");5===o()&&("computer"===n?(t.textContent="YOU WIN! (=^_^=)",e.style.display="flex"):"player"===n&&(t.textContent="YOU LOSE! <(-_-<)",e.style.display="flex"))})()},sunkShips:o,clean:()=>{r.splice(0),s(),a.carrier.clean(),a.battleship.clean(),a.destroyer.clean(),a.submarine.clean(),a.patrolboat.clean()},hitCount:()=>{let e=0;for(let t=0;t<100;t+=1)r[t].length>3&&1===r[t][2]&&(e+=1);return e},missCount:()=>{let e=0;for(let t=0;t<100;t+=1)3===r[t].length&&1===r[t][2]&&(e+=1);return e}}}const r={p1:t("player"),c:t("computer")};function a(e,t){const n=Math.floor(2*Math.random()),r=[],a=[];let o=[];if(0===n){for(let n=0;n<t.boardArray.length;n+=1)if(t.boardArray[n][0]<=10-e.length)for(let a=0,o=0;a<e.length;a+=1)3===t.boardArray[n+a].length&&(o+=1),o===e.length&&r.push([t.boardArray[n][0],t.boardArray[n][1]]);o=r[Math.floor(Math.random()*r.length)]}if(1===n){for(let n=0;n<t.boardArray.length;n+=1)if(t.boardArray[n][1]<=10-e.length)for(let r=0,o=0,s=0;r<e.length;r+=1,o+=10)3===t.boardArray[n+o].length&&(s+=1),s===e.length&&a.push([t.boardArray[n][0],t.boardArray[n][1]]);o=a[Math.floor(Math.random()*a.length)]}t.placeShip(e,n,o[0],o[1])}function o(e){const t=document.getElementsByClassName("playersquare"),n=document.getElementsByClassName("computersquare"),o=document.getElementById("playershipssunk"),s=document.getElementById("playerhit"),i=document.getElementById("playermiss"),l=document.getElementById("computershipssunk"),c=document.getElementById("computerhit"),d=document.getElementById("computermiss");(()=>{for(let e=0;e<100;e+=1)t[e].classList.remove("occupied","hit","miss"),n[e].classList.remove("hit","miss"),o.textContent="PLAYER SHIPS SUNK: 0",s.textContent="PLAYER BOARD HITS: 0",i.textContent="PLAYER BOARD MISSES: 0",l.textContent="COMPUTER SHIPS SUNK: 0",c.textContent="COMPUTER BOARD HITS: 0",d.textContent="COMPUTER BOARD MISSES: 0"})(),r.p1.clean(),r.c.clean(),!0===e&&(a(r.p1.ships.carrier,r.p1),a(r.p1.ships.battleship,r.p1),a(r.p1.ships.destroyer,r.p1),a(r.p1.ships.submarine,r.p1),a(r.p1.ships.patrolboat,r.p1),a(r.c.ships.carrier,r.c),a(r.c.ships.battleship,r.c),a(r.c.ships.destroyer,r.c),a(r.c.ships.submarine,r.c),a(r.c.ships.patrolboat,r.c),(()=>{for(let e=0;e<100;e+=1)r.p1.boardArray[e].length>3&&t[e].classList.add("occupied")})())}var s=n(379),i=n.n(s),l=n(795),c=n.n(l),d=n(569),p=n.n(d),u=n(565),m=n.n(u),y=n(216),h=n.n(y),b=n(589),f=n.n(b),g=n(771),x={};x.styleTagTransform=f(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=h(),i()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;var v=n(429),E={};E.styleTagTransform=f(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=h(),i()(v.Z,E),v.Z&&v.Z.locals&&v.Z.locals;var A=n(391),S={};S.styleTagTransform=f(),S.setAttributes=m(),S.insert=p().bind(null,"head"),S.domAPI=c(),S.insertStyleElement=h(),i()(A.Z,S),A.Z&&A.Z.locals&&A.Z.locals;var C=n(579),k={};k.styleTagTransform=f(),k.setAttributes=m(),k.insert=p().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=h(),i()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals;var I=n(559),T={};T.styleTagTransform=f(),T.setAttributes=m(),T.insert=p().bind(null,"head"),T.domAPI=c(),T.insertStyleElement=h(),i()(I.Z,T),I.Z&&I.Z.locals&&I.Z.locals;var P=n(16),R={};R.styleTagTransform=f(),R.setAttributes=m(),R.insert=p().bind(null,"head"),R.domAPI=c(),R.insertStyleElement=h(),i()(P.Z,R),P.Z&&P.Z.locals&&P.Z.locals;var Z=n(369),B={};B.styleTagTransform=f(),B.setAttributes=m(),B.insert=p().bind(null,"head"),B.domAPI=c(),B.insertStyleElement=h(),i()(Z.Z,B),Z.Z&&Z.Z.locals&&Z.Z.locals,function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("div"),s=document.createElement("h2"),i=document.createElement("h2"),l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),p=document.createElement("button"),u=document.createElement("div"),m=document.createElement("button"),y=document.createElement("button"),h=document.createElement("div"),b=document.createElement("div"),f=document.createElement("div"),g=document.createElement("p"),x=document.createElement("p"),v=document.createElement("p"),E=document.createElement("p"),A=document.createElement("p"),S=document.createElement("p"),C=document.createElement("div"),k=document.createElement("h2"),I=document.createElement("p"),T=document.createElement("button"),P=document.createElement("div");e.id="content",l.id="boardcontainer",c.id="playerboard",i.id="playerboardtitle",i.textContent="PLAYER",d.id="buttoncontainer",p.id="randombutton",p.textContent="PLACE SHIPS",u.id="computerboard",s.id="computerboardtitle",s.textContent="COMPUTER",t.id="titlebar",n.id="title",n.textContent="BATTLESHIP",a.id="boardtitlecontainer",m.id="startbutton",m.textContent="START GAME",y.id="restartbutton",y.textContent="RESTART GAME",y.style.display="none",h.id="gamestatuscontainer",b.id="playerstatus",f.id="computerstatus",x.id="playerhit",x.textContent="PLAYER BOARD HITS: 0",v.id="playermiss",v.textContent="PLAYER BOARD MISSES: 0",A.id="computerhit",A.textContent="COMPUTER BOARD HITS: 0",S.id="computermiss",S.textContent="COMPUTER BOARD MISSES: 0",C.id="endgamemodal",T.id="playagainbutton",P.id="overlay",P.style.display="none",k.id="endgamemodalheader",I.id="endgamemodaltext",I.textContent="Would you like to play again?",T.textContent="PLAY AGAIN",g.id="playershipssunk",g.textContent="PLAYER SHIPS SUNK: 0",E.id="computershipssunk",E.textContent="COMPUTER SHIPS SUNK: 0",b.append(g,x,v),f.append(E,A,S),h.append(b,f),a.append(i,s),l.append(c,u),d.append(m,y,p),t.append(n),C.append(k,I,T),P.append(C),e.append(t,a,l,d,h,P);for(let e=0,t=0,n=0;e<100;e+=1,t+=1){10===t&&(t=0,n+=1);const r=document.createElement("div"),a=document.createElement("div");r.dataset.i=e,a.dataset.i=e,r.dataset.x=t,a.dataset.x=t,r.dataset.y=n,a.dataset.y=n,r.className="playersquare",a.className="computersquare",c.append(r),u.append(a)}document.body.append(e),l.addEventListener("click",(e=>{const t=e.target.getAttribute("data-i");if("computerboard"===e.target.parentNode.id&&0===r.c.boardArray[t][2]){r.c.receiveAttack(t),function(){const e=[];for(let t=0;t<100;t+=1)0===r.p1.boardArray[t][2]&&e.push([r.p1.boardArray[t][0],r.p1.boardArray[t][1],t]);const t=e[Math.floor(Math.random()*e.length)];r.p1.receiveAttack(t[2]);const n=document.getElementsByClassName("playersquare");r.p1.boardArray[t[2]].length>3?n[t[2]].classList.add("hit"):n[t[2]].classList.add("miss");const a=document.getElementById("playershipssunk"),o=document.getElementById("playerhit"),s=document.getElementById("playermiss");a.textContent=`PLAYER SHIPS SUNK: ${r.p1.sunkShips()}`,o.textContent=`PLAYER BOARD HITS: ${r.p1.hitCount()}`,s.textContent=`PLAYER BOARD MISSES: ${r.p1.missCount()}`}();const e=document.getElementsByClassName("computersquare");r.c.boardArray[t].length>3?e[t].classList.add("hit"):e[t].classList.add("miss")}E.textContent=`COMPUTER SHIPS SUNK: ${r.c.sunkShips()}`,A.textContent=`COMPUTER BOARD HITS: ${r.c.hitCount()}`,S.textContent=`COMPUTER BOARD MISSES: ${r.c.missCount()}`}));let R=0;m.addEventListener("click",(()=>{1===R?(b.style.display="block",u.style.display="flex",s.style.display="block",f.style.display="block",m.style.display="none",p.style.display="none",y.style.display="block"):alert("You must place your ships before you start the game!")})),y.addEventListener("click",(()=>{o(),R=0,b.style.display="none",u.style.display="none",s.style.display="none",f.style.display="none",m.style.display="block",p.style.display="block",y.style.display="none"})),p.addEventListener("click",(()=>{o(!0),R=1})),T.addEventListener("click",(()=>{o(),R=1,b.style.display="none",u.style.display="none",s.style.display="none",f.style.display="none",P.style.display="none",m.style.display="block",p.style.display="block",y.style.display="none"}))}()})()})();