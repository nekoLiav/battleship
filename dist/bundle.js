(()=>{"use strict";var n={579:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#boardcontainer {\n  display: flex;\n  background-color: #1a1a1a;\n}\n\n#playerboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.playersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computerboard {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n  margin-left: auto;\n}\n\n.computersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computersquare:hover {\n  background-color: #555555;\n}\n\n#boardtitlecontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  text-align: center;\n  font-size: 2rem;\n  background-color: #1a1a1a;\n}\n\n#playerboardtitle {\n  width: 500px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n#computerboardtitle {\n  display: none;\n  width: 500px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #555555;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n}\n\n.valid {\n  background-color: green;\n}\n\n.invalid {\n  background-color: red !important;\n  cursor: not-allowed;\n}","",{version:3,sources:["webpack://./src/styles/boards.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;AACrB",sourcesContent:["#boardcontainer {\n  display: flex;\n  background-color: #1a1a1a;\n}\n\n#playerboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.playersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computerboard {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n  margin-left: auto;\n}\n\n.computersquare {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computersquare:hover {\n  background-color: #555555;\n}\n\n#boardtitlecontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  text-align: center;\n  font-size: 2rem;\n  background-color: #1a1a1a;\n}\n\n#playerboardtitle {\n  width: 500px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n#computerboardtitle {\n  display: none;\n  width: 500px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #555555;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n}\n\n.valid {\n  background-color: green;\n}\n\n.invalid {\n  background-color: red !important;\n  cursor: not-allowed;\n}"],sourceRoot:""}]);const s=i},559:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#buttoncontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n#startbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  display: none;\n}\n\n#resetbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  display: none;\n}\n\n#orientationbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  text-align: center;\n}\n\n#shipbuttons {\n  display: flex;\n  justify-content: space-between;\n}","",{version:3,sources:["webpack://./src/styles/buttons.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC",sourcesContent:["#buttoncontainer {\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n}\n\n#startbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  display: none;\n}\n\n#resetbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  display: none;\n}\n\n#orientationbutton {\n  width: 150px;\n  height: 50px;\n  font-size: 1rem;\n  text-align: center;\n}\n\n#shipbuttons {\n  display: flex;\n  justify-content: space-between;\n}"],sourceRoot:""}]);const s=i},771:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"* {\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n}\n\nbody {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  width: 1050px;\n  position: relative;\n}","",{version:3,sources:["webpack://./src/styles/index.css"],names:[],mappings:"AAAA;EACE,mDAAmD;EACnD,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB",sourcesContent:["* {\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n}\n\nbody {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  width: 1050px;\n  position: relative;\n}"],sourceRoot:""}]);const s=i},547:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"@media only screen and (max-width: 1050px) {\n  #title {\n    font-size: 1.8rem;\n  }\n  #main {\n    width: 630px;\n  }\n  #boardcontainer {\n    height: 300px;\n  }\n  #playerboardtitle {\n    width: 300px;\n    font-size: 1.2rem;\n  }\n  #computerboardtitle {\n    width: 300px;\n    font-size: 1.2rem;\n  }\n  #playerboard {\n    width: 300px;\n    height: 300px;\n  }\n  #computerboard {\n    width: 300px;\n    height: 300px;\n  }\n  #shipcontainerinfo {\n    width: 165px;\n  }\n  #shipcontainer {\n    width: 150px;\n  }\n  .shipSquare {\n    width: 30px;\n    height: 30px;\n  }\n  #startbutton {\n    width: 105px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #orientationbutton {\n    width: 90px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #playerstatus {\n    width: 300px;\n  }\n  \n  #computerstatus {\n    width: 300px;\n  }\n\n  #overlay {\n    width: 630px;\n    height: 300px;\n  }\n}","",{version:3,sources:["webpack://./src/styles/media.css"],names:[],mappings:"AAAA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF",sourcesContent:["@media only screen and (max-width: 1050px) {\n  #title {\n    font-size: 1.8rem;\n  }\n  #main {\n    width: 630px;\n  }\n  #boardcontainer {\n    height: 300px;\n  }\n  #playerboardtitle {\n    width: 300px;\n    font-size: 1.2rem;\n  }\n  #computerboardtitle {\n    width: 300px;\n    font-size: 1.2rem;\n  }\n  #playerboard {\n    width: 300px;\n    height: 300px;\n  }\n  #computerboard {\n    width: 300px;\n    height: 300px;\n  }\n  #shipcontainerinfo {\n    width: 165px;\n  }\n  #shipcontainer {\n    width: 150px;\n  }\n  .shipSquare {\n    width: 30px;\n    height: 30px;\n  }\n  #startbutton {\n    width: 105px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #orientationbutton {\n    width: 90px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #playerstatus {\n    width: 300px;\n  }\n  \n  #computerstatus {\n    width: 300px;\n  }\n\n  #overlay {\n    width: 630px;\n    height: 300px;\n  }\n}"],sourceRoot:""}]);const s=i},724:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#modal {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n#playagainbutton {\n  width: 100px;\n  height: 50px;\n}","",{version:3,sources:["webpack://./src/styles/modal.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd",sourcesContent:["#modal {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n#playagainbutton {\n  width: 100px;\n  height: 50px;\n}"],sourceRoot:""}]);const s=i},429:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#computeroverlay {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#overlay {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1050px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n","",{version:3,sources:["webpack://./src/styles/overlays.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,0CAA0C;AAC5C",sourcesContent:["#computeroverlay {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n#overlay {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1050px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n"],sourceRoot:""}]);const s=i},98:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#shipcontainerinfo {\n  width: 275px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n#shipcontainer {\n  width: 250px;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#shipbuttons {\n  gap: 25px;\n}\n\n.shipSquare {\n  width: 50px;\n  height: 50px;\n}\n\n#carrier {\n  display: flex;\n  background-color: #E27D60;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#battleship {\n  display: flex;\n  background-color: #85DCB0;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#destroyer {\n  display: flex;\n  background-color: #E8A87C;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#submarine {\n  display: flex;\n  background-color: #C38D9E;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#patrolboat {\n  display: flex;\n  background-color: #41B3A3;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n.shipselected {\n  border-color: white !important;\n}\n\n.ship:hover {\n  border-color: white !important;\n}\n\n.carrier {\n  background-color: #E27D60;\n}\n\n.battleship {\n  background-color: #85DCB0;\n}\n\n.destroyer {\n  background-color: #E8A87C;\n}\n\n.submarine {\n  background-color: #C38D9E;\n}\n\n.patrolboat {\n  background-color: #41B3A3;\n}","",{version:3,sources:["webpack://./src/styles/ships.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:["#shipcontainerinfo {\n  width: 275px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n#shipcontainer {\n  width: 250px;\n  height: 450px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#shipbuttons {\n  gap: 25px;\n}\n\n.shipSquare {\n  width: 50px;\n  height: 50px;\n}\n\n#carrier {\n  display: flex;\n  background-color: #E27D60;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#battleship {\n  display: flex;\n  background-color: #85DCB0;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#destroyer {\n  display: flex;\n  background-color: #E8A87C;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#submarine {\n  display: flex;\n  background-color: #C38D9E;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n#patrolboat {\n  display: flex;\n  background-color: #41B3A3;\n  border: 2px solid black;\n  box-sizing: border-box;\n}\n\n.shipselected {\n  border-color: white !important;\n}\n\n.ship:hover {\n  border-color: white !important;\n}\n\n.carrier {\n  background-color: #E27D60;\n}\n\n.battleship {\n  background-color: #85DCB0;\n}\n\n.destroyer {\n  background-color: #E8A87C;\n}\n\n.submarine {\n  background-color: #C38D9E;\n}\n\n.patrolboat {\n  background-color: #41B3A3;\n}"],sourceRoot:""}]);const s=i},16:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#gamestatuscontainer {\n  display: none;\n  justify-content: center;\n  gap: 50px;\n  background-color: #1a1a1a;\n}\n\n#playerstatus {\n  width: 500px;\n}\n\n#computerstatus {\n  width: 500px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/styles/status.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB",sourcesContent:["#gamestatuscontainer {\n  display: none;\n  justify-content: center;\n  gap: 50px;\n  background-color: #1a1a1a;\n}\n\n#playerstatus {\n  width: 500px;\n}\n\n#computerstatus {\n  width: 500px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const s=i},391:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(537),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,"#titlebar {\n  text-align: center;\n}\n\n#title {\n  font-size: 3rem;\n  margin: 0;\n}","",{version:3,sources:["webpack://./src/styles/titlebar.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,SAAS;AACX",sourcesContent:["#titlebar {\n  text-align: center;\n}\n\n#title {\n  font-size: 3rem;\n  margin: 0;\n}"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);a&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],s=0;s<n.length;s++){var A=n[s],l=a.base?A[0]+a.base:A[0],c=o[l]||0,d="".concat(l," ").concat(c);o[l]=c+1;var p=t(d),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=r(u,a);a.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var A=a(n,r),l=0;l<o.length;l++){var c=t(o[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=A}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n,e,t){const a=t,r=e,o=n,i=[],s=()=>{for(let n=0;n<o;n+=1)i.push(0)};return s(),{owner:a,type:r,length:o,shipArray:i,hit:n=>{i[n]=1},isSunk:()=>i.reduce(((n,e)=>n+e))===o,clean:()=>{i.splice(0),s()}}}function e(e){const t=e,a=[],r={carrier:n(5,"carrier",t),battleship:n(4,"battleship",t),destroyer:n(3,"destroyer",t),submarine:n(3,"submarine",t),patrolboat:n(2,"patrolboat",t)},o=()=>{let n=0;return!0===r.carrier.isSunk()&&(n+=1),!0===r.battleship.isSunk()&&(n+=1),!0===r.destroyer.isSunk()&&(n+=1),!0===r.submarine.isSunk()&&(n+=1),!0===r.patrolboat.isSunk()&&(n+=1),n},i=()=>{for(let n=0,e=0,t=0;n<100;n+=1,e+=1)10===e&&(e=0,t+=1),a.push([e,t,0])};return i(),{ships:r,boardArray:a,placeShip:(n,e,t,r)=>{const o=[t,r];let i=0;for(let n=0;n<a.length;n+=1)a[n][0]===o[0]&&a[n][1]===o[1]&&(i=n);if(0===e)for(let e=0;e<n.length;e+=1)a[i+e].push(n.type,e);if(1===e)for(let e=0,t=0;e<n.length;e+=1,t+=10)a[i+t].push(n.type,e)},receiveAttack:n=>{a[n][2]=1,"carrier"===a[n][3]?r.carrier.hit(a[n][4]):"battleship"===a[n][3]?r.battleship.hit(a[n][4]):"destroyer"===a[n][3]?r.destroyer.hit(a[n][4]):"submarine"===a[n][3]?r.submarine.hit(a[n][4]):"patrolboat"===a[n][3]&&r.patrolboat.hit(a[n][4]),(()=>{const n=document.getElementById("overlay"),e=document.getElementById("modalheader");5===o()&&("computer"===t?(e.textContent="YOU WIN! (=^_^=)",n.style.display="flex"):"player"===t&&(e.textContent="YOU LOSE! <(-_-<)",n.style.display="flex"))})()},sunkShips:o,clean:()=>{a.splice(0),i(),r.carrier.clean(),r.battleship.clean(),r.destroyer.clean(),r.submarine.clean(),r.patrolboat.clean()},hitCount:()=>{let n=0;for(let e=0;e<100;e+=1)a[e].length>3&&1===a[e][2]&&(n+=1);return n},missCount:()=>{let n=0;for(let e=0;e<100;e+=1)3===a[e].length&&1===a[e][2]&&(n+=1);return n}}}const a={p1:e("player"),c:e("computer")};function r(n,e,t,r,o){const i=(n,e)=>{const t=Math.floor(2*Math.random()),a=[],r=[];let o=[];if(0===t){for(let t=0;t<e.boardArray.length;t+=1)if(e.boardArray[t][0]<=10-n.length)for(let r=0,o=0;r<n.length;r+=1)3===e.boardArray[t+r].length&&(o+=1),o===n.length&&a.push([e.boardArray[t][0],e.boardArray[t][1]]);o=a[Math.floor(Math.random()*a.length)]}if(1===t){for(let t=0;t<e.boardArray.length;t+=1)if(e.boardArray[t][1]<=10-n.length)for(let a=0,o=0,i=0;a<n.length;a+=1,o+=10)3===e.boardArray[t+o].length&&(i+=1),i===n.length&&r.push([e.boardArray[t][0],e.boardArray[t][1]]);o=r[Math.floor(Math.random()*r.length)]}e.placeShip(n,t,o[0],o[1])};"automatic"===n?(i(a.c.ships.carrier,a.c),i(a.c.ships.battleship,a.c),i(a.c.ships.destroyer,a.c),i(a.c.ships.submarine,a.c),i(a.c.ships.patrolboat,a.c)):"manual"===n&&a.p1.placeShip(o,e,t,r)}var o=t(379),i=t.n(o),s=t(795),A=t.n(s),l=t(569),c=t.n(l),d=t(565),p=t.n(d),u=t(216),m=t.n(u),E=t(589),h=t.n(E),b=t(771),C={};C.styleTagTransform=h(),C.setAttributes=p(),C.insert=c().bind(null,"head"),C.domAPI=A(),C.insertStyleElement=m(),i()(b.Z,C),b.Z&&b.Z.locals&&b.Z.locals;var y=t(429),x={};x.styleTagTransform=h(),x.setAttributes=p(),x.insert=c().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=m(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var f=t(391),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=c().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=m(),i()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var B=t(579),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=A(),v.insertStyleElement=m(),i()(B.Z,v),B.Z&&B.Z.locals&&B.Z.locals;var k=t(559),w={};w.styleTagTransform=h(),w.setAttributes=p(),w.insert=c().bind(null,"head"),w.domAPI=A(),w.insertStyleElement=m(),i()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals;var S=t(16),Y={};Y.styleTagTransform=h(),Y.setAttributes=p(),Y.insert=c().bind(null,"head"),Y.domAPI=A(),Y.insertStyleElement=m(),i()(S.Z,Y),S.Z&&S.Z.locals&&S.Z.locals;var z=t(724),Z={};Z.styleTagTransform=h(),Z.setAttributes=p(),Z.insert=c().bind(null,"head"),Z.domAPI=A(),Z.insertStyleElement=m(),i()(z.Z,Z),z.Z&&z.Z.locals&&z.Z.locals;var I=t(98),L={};L.styleTagTransform=h(),L.setAttributes=p(),L.insert=c().bind(null,"head"),L.domAPI=A(),L.insertStyleElement=m(),i()(I.Z,L),I.Z&&I.Z.locals&&I.Z.locals;var T=t(547),q={};q.styleTagTransform=h(),q.setAttributes=p(),q.insert=c().bind(null,"head"),q.domAPI=A(),q.insertStyleElement=m(),i()(T.Z,q),T.Z&&T.Z.locals&&T.Z.locals,function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),A=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),E=document.createElement("div"),h=document.createElement("div"),b=document.createElement("div"),C=document.createElement("div"),y=document.createElement("div"),x=document.createElement("div"),f=document.createElement("div"),g=document.createElement("button"),B=document.createElement("button"),v=document.createElement("button"),k=document.createElement("button"),w=document.createElement("p"),S=document.createElement("p"),Y=document.createElement("p"),z=document.createElement("p"),Z=document.createElement("p"),I=document.createElement("p"),L=document.createElement("p");n.id="content",t.id="main",i.id="boardcontainer",s.id="playerboard",S.id="playerboardtitle",S.textContent="PLACE YOUR SHIPS",A.id="computerboard",Y.id="computerboardtitle",Y.textContent="COMPUTER",e.id="titlebar",w.id="title",w.textContent="BATTLESHIP",o.id="boardtitlecontainer",g.id="startbutton",g.textContent="START GAME",B.id="resetbutton",B.textContent="RESET GAME",B.style.display="none",l.id="gamestatuscontainer",c.id="playerstatus",d.id="computerstatus",z.id="playershipssunk",Z.id="computershipssunk",p.id="modal",v.id="playagainbutton",u.id="overlay",u.style.display="none",I.id="modalheader",L.id="modaltext",L.textContent="Would you like to play again?",v.textContent="PLAY AGAIN",m.id="shipcontainer",E.id="carrier",E.classList.add("ship","horizontal"),h.id="battleship",h.classList.add("ship","horizontal"),b.id="destroyer",b.classList.add("ship","horizontal"),C.id="submarine",C.classList.add("ship","horizontal"),y.id="patrolboat",y.classList.add("ship","horizontal"),x.id="shipcontainerinfo",k.id="orientationbutton",k.textContent="CHANGE DIRECTION",f.id="shipbuttons",z.textContent="PLAYER SHIPS SUNK: 0",c.append(z),d.append(Z),l.append(c,d),o.append(S,Y),f.append(k,g,B),x.append(m,f),i.append(x,s,A,u),e.append(w),p.append(I,L,v),u.append(p),m.append(E,h,b,C,y),t.append(o,i,l),n.append(e,t);const T=n=>{const e=document.querySelector(".shipselected"),t=document.querySelectorAll(".playersquare"),o=parseInt(n.target.getAttribute("data-x"),10),i=parseInt(n.target.getAttribute("data-y"),10),s=parseInt(n.target.getAttribute("data-i"),10);let A,l,c=0;if(null!=e&&("carrier"===e.id?l=a.p1.ships.carrier:"battleship"===e.id?l=a.p1.ships.battleship:"destroyer"===e.id?l=a.p1.ships.destroyer:"submarine"===e.id?l=a.p1.ships.submarine:"patrolboat"===e.id&&(l=a.p1.ships.patrolboat),e.classList.contains("horizontal")?A=0:e.classList.contains("vertical")&&(A=1)),"mouseenter"===n.type&&null!=e){if(e.classList.contains("horizontal")){if(o<=10-l.length)for(let n=0;n<l.length;n+=1)t[s+n].classList.contains("placed")&&(c+=1),t[s+n].classList.add(`${e.id}`);else if(o>10-l.length){for(let n=0;n<10-o;n+=1)t[s+n].classList.add("invalid");c+=1}}else if(e.classList.contains("vertical"))if(i<=10-l.length)for(let n=0,a=0;n<l.length;n+=1,a+=9)t[s+(n+a)].classList.contains("placed")&&(c+=1),t[s+(n+a)].classList.add(`${e.id}`);else if(i>10-l.length)for(let n=0,e=0;n<10-i;n+=1,e+=9)t[s+(n+e)].classList.add("invalid"),c+=1;c>0&&Array.from(document.getElementsByClassName(e.id)).forEach((n=>{n.classList.add("invalid")}))}else if("mouseleave"===n.type&&null!=e){if(e.classList.contains("horizontal")){if(o<=10-l.length)for(let n=0;n<l.length;n+=1)t[s+n].classList.remove(`${e.id}`,"invalid");else if(o>10-l.length)for(let n=0;n<10-o;n+=1)t[s+n].classList.remove(`${e.id}`,"invalid")}else if(e.classList.contains("vertical"))if(i<=10-l.length)for(let n=0,a=0;n<l.length;n+=1,a+=9)t[s+(n+a)].classList.remove(`${e.id}`,"invalid");else if(i>10-l.length)for(let n=0,a=0;n<10-i;n+=1,a+=9)t[s+(n+a)].classList.remove(`${e.id}`,"invalid")}else"click"===n.type&&null!=e&&0===c&&(n.target.classList.contains("invalid")||Array.from(document.getElementsByClassName(e.id)).forEach((n=>{n.classList.add("placed")})),n.target.classList.contains("placed")&&!n.target.classList.contains("invalid")&&(r("manual",A,o,i,l),e.remove(),null!==document.querySelector(".carrier")&&null!==document.querySelector(".battleship")&&null!==document.querySelector(".destroyer")&&null!==document.querySelector(".submarine")&&null!==document.querySelector(".patrolboat")&&(k.style.display="none",g.style.display="block")))};for(let n=0;n<5;n+=1){const n=document.createElement("div");n.className="shipsquare",E.append(n)}for(let n=0;n<4;n+=1){const n=document.createElement("div");n.className="shipsquare",h.append(n)}for(let n=0;n<3;n+=1){const n=document.createElement("div");n.className="shipsquare",b.append(n)}for(let n=0;n<3;n+=1){const n=document.createElement("div");n.className="shipsquare",C.append(n)}for(let n=0;n<2;n+=1){const n=document.createElement("div");n.className="shipsquare",y.append(n)}for(let n=0,e=0,t=0;n<100;n+=1,e+=1){10===e&&(e=0,t+=1);const a=document.createElement("div"),r=document.createElement("div");a.dataset.i=n,r.dataset.i=n,a.dataset.x=e,r.dataset.x=e,a.dataset.y=t,r.dataset.y=t,a.className="playersquare",r.className="computersquare",a.addEventListener("mouseenter",T),a.addEventListener("mouseleave",T),a.addEventListener("click",T),s.append(a),A.append(r)}document.body.append(n),i.addEventListener("click",(n=>{if("computerboard"===n.target.parentNode.id){const e=n.target.getAttribute("data-i");if(0===a.c.boardArray[e][2]){a.c.receiveAttack(e),function(){const n=[];for(let e=0;e<100;e+=1)0===a.p1.boardArray[e][2]&&n.push([a.p1.boardArray[e][0],a.p1.boardArray[e][1],e]);const e=n[Math.floor(Math.random()*n.length)];a.p1.receiveAttack(e[2]);const t=document.getElementsByClassName("playersquare");a.p1.boardArray[e[2]].length>3?t[e[2]].classList.add("hit"):t[e[2]].classList.add("miss"),document.getElementById("playershipssunk").textContent=`PLAYER SHIPS SUNK: ${a.p1.sunkShips()}`}();const n=document.getElementsByClassName("computersquare");a.c.boardArray[e].length>3?n[e].classList.add("hit"):n[e].classList.add("miss")}}Z.textContent=`COMPUTER SHIPS SUNK: ${a.c.sunkShips()}`,"startbutton"===n.target.id?(x.style.display="none",A.style.display="flex",Y.style.display="block",l.style.display="flex",g.style.display="none"):"resetbutton"!==n.target.id&&"playagainbutton"!==n.target.id||(function(n){const e=document.getElementsByClassName("playersquare"),t=document.getElementsByClassName("computersquare"),o=document.getElementById("playershipssunk"),i=document.getElementById("computershipssunk"),s=()=>{for(let n=0;n<100;n+=1)a.p1.boardArray[n].length>3&&e[n].classList.add("occupied")},A=()=>{(()=>{for(let n=0;n<100;n+=1)e[n].classList.remove("placed","occupied","carrier","battleship","destroyer","submarine","patrolboat","hit","miss"),t[n].classList.remove("hit","miss"),o.textContent="SHIPS SUNK: 0",i.textContent="SHIPS SUNK: 0"})(),a.p1.clean(),a.c.clean()};"full"===n?(A(),r("auto"),s()):"partial"===n?A():"refresh"===n&&s()}("partial"),k.textContent="CHANGE DIRECTION",g.style.display="none",k.style.display="block",x.style.display="flex",A.style.display="none",Y.style.display="none",l.style.display="none",B.style.display="none",u.style.display="none",m.append(E,h,b,C,y),m.style.flexDirection="column",document.querySelectorAll(".ship").forEach((n=>{n.classList.remove("shipselected","vertical"),n.classList.add("horizontal"),n.style.flexDirection="row"})))})),m.addEventListener("click",(n=>{"shipsquare"===n.target.className&&(document.querySelectorAll(".ship").forEach((n=>{n.classList.remove("shipselected")})),n.target.parentNode.classList.add("shipselected"))})),f.addEventListener("click",(n=>{"startbutton"===n.target.id?(r("automatic"),S.textContent="PLAYER",x.style.display="none",A.style.display="flex",Y.style.display="block",l.style.display="flex",g.style.display="none",B.style.display="block"):"orientationbutton"===n.target.id&&(n=>{const e=document.querySelectorAll(".ship");"orientationbutton"===n.target.id&&e.forEach((n=>{const e=n;n.classList.contains("horizontal")?(m.style.flexDirection="row-reverse",e.style.flexDirection="column",e.classList.remove("horizontal"),e.classList.add("vertical"),k.textContent="SWITCH TO HORIZONTAL"):n.classList.contains("vertical")&&(m.style.flexDirection="column",e.style.flexDirection="row",e.classList.remove("vertical"),e.classList.add("horizontal"),k.textContent="SWITCH TO VERTICAL")}))})(n)}))}()})()})();
//# sourceMappingURL=bundle.js.map