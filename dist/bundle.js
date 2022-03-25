(()=>{"use strict";var n={579:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#board-container {\n  display: flex;\n  background-color: #1a1a1a;\n}\n\n#player-board {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.player-square {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computer-board {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n  margin-left: auto;\n}\n\n.computer-square {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computer-square:hover {\n  background-color: #555555;\n}\n\n#player-info-container {\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  background-color: #1a1a1a;\n}\n\n#player-title {\n  width: 200px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n#computer-title {\n  width: 200px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #555555;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n  border: 1px solid #1A1A1A;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n  border: 1px solid #1A1A1A;\n}\n\n.valid {\n  background-color: green;\n  border: 1px solid #1A1A1A;\n}\n\n.invalid {\n  background-color: red !important;\n  cursor: not-allowed;\n  border: 1px solid #1A1A1A;\n}\n\n.placed {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n#player-info {\n  display: flex;\n  align-items: center;\n  width: 500px;\n}\n\n#computer-info {\n  display: none;\n  align-items: center;\n  width: 500px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/styles/boards.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB",sourcesContent:["#board-container {\n  display: flex;\n  background-color: #1a1a1a;\n}\n\n#player-board {\n  display: flex;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n}\n\n.player-square {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  width: 10%;\n  height: 10%;\n}\n\n#computer-board {\n  display: none;\n  flex-wrap: wrap;\n  width: 500px;\n  height: 500px;\n  margin-left: auto;\n}\n\n.computer-square {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n}\n\n.computer-square:hover {\n  background-color: #555555;\n}\n\n#player-info-container {\n  display: flex;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  background-color: #1a1a1a;\n}\n\n#player-title {\n  width: 200px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n#computer-title {\n  width: 200px;\n  font-size: 2rem;\n  margin: 0;\n}\n\n.occupied {\n  border: 1px solid #999999;\n  box-sizing: border-box;\n  height: 10%;\n  width: 10%;\n  background-color: #555555;\n}\n\n.hit {\n  background-color: #FF5733 !important;\n  border: 1px solid #1A1A1A;\n}\n\n.miss {\n  background-color: #FFBD33 !important;\n  border: 1px solid #1A1A1A;\n}\n\n.valid {\n  background-color: green;\n  border: 1px solid #1A1A1A;\n}\n\n.invalid {\n  background-color: red !important;\n  cursor: not-allowed;\n  border: 1px solid #1A1A1A;\n}\n\n.placed {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n#player-info {\n  display: flex;\n  align-items: center;\n  width: 500px;\n}\n\n#computer-info {\n  display: none;\n  align-items: center;\n  width: 500px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const s=i},559:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n#start-button {\n  width: 150px;\n  height: 50px;\n  display: none;\n}\n\n#reset-button {\n  width: 150px;\n  height: 50px;\n  display: none;\n}\n\n#direction-button {\n  width: 150px;\n  height: 50px;\n  text-align: center;\n}\n\n#play-again-button {\n  width: 150px;\n  height: 50px;\n}","",{version:3,sources:["webpack://./src/styles/buttons.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd",sourcesContent:["#buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n#start-button {\n  width: 150px;\n  height: 50px;\n  display: none;\n}\n\n#reset-button {\n  width: 150px;\n  height: 50px;\n  display: none;\n}\n\n#direction-button {\n  width: 150px;\n  height: 50px;\n  text-align: center;\n}\n\n#play-again-button {\n  width: 150px;\n  height: 50px;\n}"],sourceRoot:""}]);const s=i},771:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n}\n\nbody {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  width: 1050px;\n  position: relative;\n}","",{version:3,sources:["webpack://./src/styles/index.css"],names:[],mappings:"AAAA;EACE,mDAAmD;EACnD,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB",sourcesContent:["* {\n  font-family: 'Bungee', Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n}\n\nbody {\n  margin: 0 auto;\n  background-color: #121212;\n  color: white;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n#main {\n  width: 1050px;\n  position: relative;\n}"],sourceRoot:""}]);const s=i},20:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@media only screen and (max-width: 1050px) {\n  #title {\n    font-size: 1.8rem;\n  }\n  #main {\n    width: 630px;\n  }\n  #board-container {\n    height: 300px;\n  }\n  #player-info-container {\n    height: 30px;\n  }\n  #player-title {\n    width: 200px;\n    font-size: 1.2rem;\n  }\n  #computer-title {\n    width: 200px;\n    font-size: 1.2rem;\n  }\n  #player-status-text {\n    font-size: 0.65rem;\n  }\n  #computer-status-text {\n    font-size: 0.65rem;\n  }\n  #player-info {\n    width: 300px;\n  }\n  #computer-info {\n    width: 300px;\n  }\n  #player-board {\n    width: 300px;\n    height: 300px;\n  }\n  #computer-board {\n    width: 300px;\n    height: 300px;\n  }\n  #ship-container {\n    width: 165px;\n  }\n  #ships {\n    width: 150px;\n  }\n  .ship-square {\n    width: 30px;\n    height: 30px;\n  }\n  #start-button {\n    width: 105px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #direction-button {\n    width: 90px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #player-status {\n    width: 300px;\n  }\n  \n  #computer-status {\n    width: 300px;\n  }\n\n  #overlay {\n    width: 630px;\n    height: 300px;\n  }\n}","",{version:3,sources:["webpack://./src/styles/media-queries/media-1050w.css"],names:[],mappings:"AAAA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,aAAa;EACf;AACF",sourcesContent:["@media only screen and (max-width: 1050px) {\n  #title {\n    font-size: 1.8rem;\n  }\n  #main {\n    width: 630px;\n  }\n  #board-container {\n    height: 300px;\n  }\n  #player-info-container {\n    height: 30px;\n  }\n  #player-title {\n    width: 200px;\n    font-size: 1.2rem;\n  }\n  #computer-title {\n    width: 200px;\n    font-size: 1.2rem;\n  }\n  #player-status-text {\n    font-size: 0.65rem;\n  }\n  #computer-status-text {\n    font-size: 0.65rem;\n  }\n  #player-info {\n    width: 300px;\n  }\n  #computer-info {\n    width: 300px;\n  }\n  #player-board {\n    width: 300px;\n    height: 300px;\n  }\n  #computer-board {\n    width: 300px;\n    height: 300px;\n  }\n  #ship-container {\n    width: 165px;\n  }\n  #ships {\n    width: 150px;\n  }\n  .ship-square {\n    width: 30px;\n    height: 30px;\n  }\n  #start-button {\n    width: 105px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #direction-button {\n    width: 90px;\n    height: 30px;\n    font-size: 0.65rem;\n  }\n  #player-status {\n    width: 300px;\n  }\n  \n  #computer-status {\n    width: 300px;\n  }\n\n  #overlay {\n    width: 630px;\n    height: 300px;\n  }\n}"],sourceRoot:""}]);const s=i},724:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#modal {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n#play-again-button {\n  width: 150px;\n  height: 50px;\n}","",{version:3,sources:["webpack://./src/styles/modal.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd",sourcesContent:["#modal {\n  width: 300px;\n  height: 200px;\n  z-index: 1;\n  background-color: #1e1e1e;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n#play-again-button {\n  width: 150px;\n  height: 50px;\n}"],sourceRoot:""}]);const s=i},429:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#overlay {\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  width: 1050px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n","",{version:3,sources:["webpack://./src/styles/overlays.css"],names:[],mappings:"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,0CAA0C;AAC5C",sourcesContent:["#overlay {\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  width: 1050px;\n  height: 500px;\n  background-color: rgba(100, 100, 100, 0.5);\n}\n\n"],sourceRoot:""}]);const s=i},98:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#ship-container {\n  width: 275px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n#ships {\n  width: 250px;\n  height: 450px;\n  display: flex;\n  gap: 1px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#buttons {\n  gap: 25px;\n}\n\n.ship-square {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #1A1A1A;\n  box-sizing: border-box;\n}\n\n#carrier {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#battleship {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#destroyer {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#submarine {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#patrol-boat {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n.ship-selected {\n  border: 2px solid white !important;\n}\n\n.ship:hover {\n  border-color: white !important;\n}\n\n.carrier {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.battleship {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.destroyer {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.submarine {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.patrol-boat {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}","",{version:3,sources:["webpack://./src/styles/ships.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;AAC3B",sourcesContent:["#ship-container {\n  width: 275px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n\n#ships {\n  width: 250px;\n  height: 450px;\n  display: flex;\n  gap: 1px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#buttons {\n  gap: 25px;\n}\n\n.ship-square {\n  width: 50px;\n  height: 50px;\n  border: 1px solid #1A1A1A;\n  box-sizing: border-box;\n}\n\n#carrier {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#battleship {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#destroyer {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#submarine {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n#patrol-boat {\n  display: flex;\n  background-color: #999999;\n  box-sizing: border-box;\n}\n\n.ship-selected {\n  border: 2px solid white !important;\n}\n\n.ship:hover {\n  border-color: white !important;\n}\n\n.carrier {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.battleship {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.destroyer {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.submarine {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}\n\n.patrol-boat {\n  background-color: #999999;\n  border: 1px solid #1A1A1A;\n}"],sourceRoot:""}]);const s=i},16:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#player-status {\n  display: flex;\n  align-items: center;\n  width: 300px;\n  height: 50px;\n}\n\n#player-status-text {\n  margin-left: auto;\n}\n\n#computer-status {\n  display: flex;\n  align-items: center;\n  width: 300px;\n  height: 50px;\n}\n\n#computer-status-text {\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/styles/status.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB",sourcesContent:["#player-status {\n  display: flex;\n  align-items: center;\n  width: 300px;\n  height: 50px;\n}\n\n#player-status-text {\n  margin-left: auto;\n}\n\n#computer-status {\n  display: flex;\n  align-items: center;\n  width: 300px;\n  height: 50px;\n}\n\n#computer-status-text {\n  margin-left: auto;\n}"],sourceRoot:""}]);const s=i},391:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"#title-bar {\n  text-align: center;\n}\n\n#title {\n  font-size: 3rem;\n  margin: 0;\n}","",{version:3,sources:["webpack://./src/styles/titlebar.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,SAAS;AACX",sourcesContent:["#title-bar {\n  text-align: center;\n}\n\n#title {\n  font-size: 3rem;\n  margin: 0;\n}"],sourceRoot:""}]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(i[A]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var A=n[s],l=r.base?A[0]+r.base:A[0],d=a[l]||0,c="".concat(l," ").concat(d);a[l]=d+1;var p=t(c),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:c,updater:m,references:1})}i.push(c)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var A=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=A}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n,e,t){const r=t,o=e,a=n,i=[],s=()=>{for(let n=0;n<a;n+=1)i.push(0)};return s(),{owner:r,type:o,length:a,shipArray:i,isPlaced:void 0,hit:n=>{i[n]=1},isSunk:()=>i.reduce(((n,e)=>n+e))===a,clean:()=>{i.splice(0),s()}}}function e(e){const t=e,r=[],o={carrier:n(5,"carrier",t),battleship:n(4,"battleship",t),destroyer:n(3,"destroyer",t),submarine:n(3,"submarine",t),patrolboat:n(2,"patrolboat",t)},a=()=>{for(let n=0,e=0,t=0;n<100;n+=1,e+=1)10===e&&(e=0,t+=1),r.push([e,t,0])};return a(),{ships:o,boardArray:r,placeShip:(n,e,t,o)=>{const a=[t,o];let i=0;for(let n=0;n<r.length;n+=1)r[n][0]===a[0]&&r[n][1]===a[1]&&(i=n);if(0===e)for(let e=0;e<n.length;e+=1)r[i+e].push(n.type,e);if(1===e)for(let e=0,t=0;e<n.length;e+=1,t+=10)r[i+t].push(n.type,e)},receiveAttack:n=>{r[n][2]=1,"carrier"===r[n][3]?o.carrier.hit(r[n][4]):"battleship"===r[n][3]?o.battleship.hit(r[n][4]):"destroyer"===r[n][3]?o.destroyer.hit(r[n][4]):"submarine"===r[n][3]?o.submarine.hit(r[n][4]):"patrolboat"===r[n][3]&&o.patrolboat.hit(r[n][4])},sunkShips:()=>{let n=0;return!0===o.carrier.isSunk()&&(n+=1),!0===o.battleship.isSunk()&&(n+=1),!0===o.destroyer.isSunk()&&(n+=1),!0===o.submarine.isSunk()&&(n+=1),!0===o.patrolboat.isSunk()&&(n+=1),n},clean:()=>{r.splice(0),a(),o.carrier.clean(),o.battleship.clean(),o.destroyer.clean(),o.submarine.clean(),o.patrolboat.clean()},hitCount:()=>{let n=0;for(let e=0;e<100;e+=1)r[e].length>3&&1===r[e][2]&&(n+=1);return n},missCount:()=>{let n=0;for(let e=0;e<100;e+=1)3===r[e].length&&1===r[e][2]&&(n+=1);return n}}}const r=e(),o=e();function a(){const n=document.getElementById("overlay"),e=document.getElementById("modal-header");5===o.sunkShips()?(e.textContent="YOU WIN!  (=^_^=)",n.style.display="flex"):5===r.sunkShips()&&(e.textContent="YOU LOSE!  <(-_-<)",n.style.display="flex")}function i(){const n=document.getElementById("player-status-text"),e=document.getElementById("computer-status-text");n.textContent="Ships Remaining: "+(5-r.sunkShips()),e.textContent="Ships Remaining: "+(5-o.sunkShips())}function s(n){const e=document.getElementById("direction-button"),t=document.getElementById("start-button"),s=document.querySelector(".ship-selected"),A=document.querySelectorAll(".player-square"),l=document.getElementsByClassName("computer-square"),d=document.querySelectorAll(".ship"),c=parseInt(n.target.getAttribute("data-x"),10),p=parseInt(n.target.getAttribute("data-y"),10),u=parseInt(n.target.getAttribute("data-i"),10);let m,h,E=0;if(null!=s&&("carrier"===s.id?h=r.ships.carrier:"battleship"===s.id?h=r.ships.battleship:"destroyer"===s.id?h=r.ships.destroyer:"submarine"===s.id?h=r.ships.submarine:"patrol-boat"===s.id&&(h=r.ships.patrolboat),s.classList.contains("horizontal")?m=0:s.classList.contains("vertical")&&(m=1)),"ship-square"===n.target.className&&(d.forEach((n=>{n.classList.remove("ship-selected")})),n.target.parentNode.classList.add("ship-selected")),"mouseenter"===n.type&&null!=s){if(s.classList.contains("horizontal")){if(c<=10-h.length)for(let n=0;n<h.length;n+=1)A[u+n].classList.contains("placed")&&(E+=1),A[u+n].classList.add(`${s.id}`);else if(c>10-h.length){for(let n=0;n<10-c;n+=1)A[u+n].classList.add("invalid");E+=1}}else if(s.classList.contains("vertical"))if(p<=10-h.length)for(let n=0,e=0;n<h.length;n+=1,e+=9)A[u+(n+e)].classList.contains("placed")&&(E+=1),A[u+(n+e)].classList.add(`${s.id}`);else if(p>10-h.length)for(let n=0,e=0;n<10-p;n+=1,e+=9)A[u+(n+e)].classList.add("invalid"),E+=1;E>0&&Array.from(document.getElementsByClassName(s.id)).forEach((n=>{n.classList.add("invalid")}))}if("mouseleave"===n.type&&null!=s)if(s.classList.contains("horizontal")){if(c<=10-h.length)for(let n=0;n<h.length;n+=1)A[u+n].classList.remove(`${s.id}`,"invalid");else if(c>10-h.length)for(let n=0;n<10-c;n+=1)A[u+n].classList.remove(`${s.id}`,"invalid")}else if(s.classList.contains("vertical"))if(p<=10-h.length)for(let n=0,e=0;n<h.length;n+=1,e+=9)A[u+(n+e)].classList.remove(`${s.id}`,"invalid");else if(p>10-h.length)for(let n=0,e=0;n<10-p;n+=1,e+=9)A[u+(n+e)].classList.remove(`${s.id}`,"invalid");if("click"===n.type&&n.target.classList.contains("player-square")&&null!=s&&0===E&&!n.target.classList.contains("invalid")&&(Array.from(document.getElementsByClassName(s.id)).forEach((n=>{n.classList.add("placed")})),s.classList.remove("ship-selected"),h.isPlaced=!0,s.style.display="none",r.placeShip(h,m,c,p),null!==document.querySelector(".carrier")&&null!==document.querySelector(".battleship")&&null!==document.querySelector(".destroyer")&&null!==document.querySelector(".submarine")&&null!==document.querySelector(".patrol-boat")&&(e.style.display="none",t.style.display="block")),"computer-board"===n.target.parentNode.id){const e=n.target.getAttribute("data-i");0===o.boardArray[e][2]&&(o.receiveAttack(e),function(){const n=document.getElementsByClassName("player-square"),e=[];for(let n=0;n<100;n+=1)0===r.boardArray[n][2]&&e.push([r.boardArray[n][0],r.boardArray[n][1],n]);const t=e[Math.floor(Math.random()*e.length)];r.receiveAttack(t[2]),a(),r.boardArray[t[2]].length>3?n[t[2]].classList.add("hit"):n[t[2]].classList.add("miss")}(),o.boardArray[e].length>3?l[e].classList.add("hit"):l[e].classList.add("miss")),i(),a()}}function A(n){const e=Math.floor(2*Math.random()),t=[],r=[];let a=[];if(0===e){for(let e=0;e<o.boardArray.length;e+=1)if(o.boardArray[e][0]<=10-n.length)for(let r=0,a=0;r<n.length;r+=1)3===o.boardArray[e+r].length&&(a+=1),a===n.length&&t.push([o.boardArray[e][0],o.boardArray[e][1]]);a=t[Math.floor(Math.random()*t.length)]}if(1===e){for(let e=0;e<o.boardArray.length;e+=1)if(o.boardArray[e][1]<=10-n.length)for(let t=0,a=0,i=0;t<n.length;t+=1,a+=10)3===o.boardArray[e+a].length&&(i+=1),i===n.length&&r.push([o.boardArray[e][0],o.boardArray[e][1]]);a=r[Math.floor(Math.random()*r.length)]}o.placeShip(n,e,a[0],a[1])}function l(n){const e=document.querySelectorAll(".ship"),t=document.getElementById("overlay"),a=document.getElementById("carrier"),s=document.getElementById("battleship"),l=document.getElementById("destroyer"),d=document.getElementById("submarine"),c=document.getElementById("patrol-boat"),p=document.getElementById("ships"),u=document.getElementById("direction-button"),m=document.getElementById("ship-container"),h=document.getElementById("computer-info"),E=document.getElementById("computer-board"),y=document.getElementById("start-button"),b=document.getElementById("player-status-text");"direction-button"===n.target.id&&e.forEach((n=>{const e=n;n.classList.contains("horizontal")?(p.style.flexDirection="row-reverse",e.style.flexDirection="column",e.classList.remove("horizontal"),e.classList.add("vertical"),u.textContent="SWITCH TO HORIZONTAL"):n.classList.contains("vertical")&&(p.style.flexDirection="column",e.style.flexDirection="row",e.classList.remove("vertical"),e.classList.add("horizontal"),u.textContent="SWITCH TO VERTICAL")})),"start-button"===n.target.id&&(m.style.display="none",h.style.display="flex",E.style.display="flex",y.style.display="none",A(o.ships.carrier),A(o.ships.battleship),A(o.ships.destroyer),A(o.ships.submarine),A(o.ships.patrolboat),i()),"play-again-button"===n.target.id&&(function(){const n=document.getElementsByClassName("player-square"),e=document.getElementsByClassName("computer-square");for(let t=0;t<100;t+=1)n[t].classList.remove("placed","carrier","battleship","destroyer","submarine","patrol-boat","hit","miss"),e[t].classList.remove("hit","miss");r.clean(),o.clean()}(),b.textContent="Awaiting ship placement...",u.textContent="SWITCH DIRECTION",y.style.display="none",h.style.display="none",t.style.display="none",E.style.display="none",u.style.display="block",m.style.display="flex",a.style.display="flex",s.style.display="flex",l.style.display="flex",d.style.display="flex",c.style.display="flex",p.style.flexDirection="column",document.querySelectorAll(".ship").forEach((n=>{n.classList.remove("shipselected","vertical"),n.classList.add("horizontal"),n.style.flexDirection="row"})))}var d=t(379),c=t.n(d),p=t(795),u=t.n(p),m=t(569),h=t.n(m),E=t(565),y=t.n(E),b=t(216),C=t.n(b),x=t(589),g=t.n(x),f=t(771),B={};B.styleTagTransform=g(),B.setAttributes=y(),B.insert=h().bind(null,"head"),B.domAPI=u(),B.insertStyleElement=C(),c()(f.Z,B),f.Z&&f.Z.locals&&f.Z.locals;var v=t(429),w={};w.styleTagTransform=g(),w.setAttributes=y(),w.insert=h().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=C(),c()(v.Z,w),v.Z&&v.Z.locals&&v.Z.locals;var k=t(391),Y={};Y.styleTagTransform=g(),Y.setAttributes=y(),Y.insert=h().bind(null,"head"),Y.domAPI=u(),Y.insertStyleElement=C(),c()(k.Z,Y),k.Z&&k.Z.locals&&k.Z.locals;var z=t(579),Z={};Z.styleTagTransform=g(),Z.setAttributes=y(),Z.insert=h().bind(null,"head"),Z.domAPI=u(),Z.insertStyleElement=C(),c()(z.Z,Z),z.Z&&z.Z.locals&&z.Z.locals;var I=t(559),S={};S.styleTagTransform=g(),S.setAttributes=y(),S.insert=h().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=C(),c()(I.Z,S),I.Z&&I.Z.locals&&I.Z.locals;var L=t(16),q={};q.styleTagTransform=g(),q.setAttributes=y(),q.insert=h().bind(null,"head"),q.domAPI=u(),q.insertStyleElement=C(),c()(L.Z,q),L.Z&&L.Z.locals&&L.Z.locals;var T=t(724),N={};N.styleTagTransform=g(),N.setAttributes=y(),N.insert=h().bind(null,"head"),N.domAPI=u(),N.insertStyleElement=C(),c()(T.Z,N),T.Z&&T.Z.locals&&T.Z.locals;var R=t(98),j={};j.styleTagTransform=g(),j.setAttributes=y(),j.insert=h().bind(null,"head"),j.domAPI=u(),j.insertStyleElement=C(),c()(R.Z,j),R.Z&&R.Z.locals&&R.Z.locals;var W=t(20),M={};M.styleTagTransform=g(),M.setAttributes=y(),M.insert=h().bind(null,"head"),M.domAPI=u(),M.insertStyleElement=C(),c()(W.Z,M),W.Z&&W.Z.locals&&W.Z.locals,function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),A=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),E=document.createElement("div"),y=document.createElement("div"),b=document.createElement("div"),C=document.createElement("div"),x=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div"),B=document.createElement("button"),v=document.createElement("button"),w=document.createElement("button"),k=document.createElement("p"),Y=document.createElement("p"),z=document.createElement("p"),Z=document.createElement("p"),I=document.createElement("p"),S=document.createElement("p"),L=document.createElement("p");for(let n=0;n<5;n+=1){const n=document.createElement("div");n.className="ship-square",h.append(n)}for(let n=0;n<4;n+=1){const n=document.createElement("div");n.className="ship-square",E.append(n)}for(let n=0;n<3;n+=1){const n=document.createElement("div");n.className="ship-square",y.append(n)}for(let n=0;n<3;n+=1){const n=document.createElement("div");n.className="ship-square",b.append(n)}for(let n=0;n<2;n+=1){const n=document.createElement("div");n.className="ship-square",C.append(n)}for(let n=0,e=0,t=0;n<100;n+=1,e+=1){10===e&&(e=0,t+=1);const r=document.createElement("div");r.className="player-square",r.addEventListener("mouseenter",s),r.addEventListener("mouseleave",s),r.addEventListener("click",s),r.dataset.i=n,r.dataset.x=e,r.dataset.y=t,A.append(r);const o=document.createElement("div");o.className="computer-square",o.dataset.i=n,o.dataset.x=e,o.dataset.y=t,d.append(o)}i.addEventListener("click",s),i.addEventListener("click",l),e.id="title-bar",k.id="title",k.textContent="Battleship",n.id="content",t.id="main",r.id="player-info-container",o.id="player-info",a.id="computer-info",Y.id="player-title",Y.textContent="Player",c.id="player-status",z.id="player-status-text",z.textContent="Awaiting ship placement...",Z.id="computer-title",Z.textContent="Computer",p.id="computer-status",I.id="computer-status-text",i.id="board-container",x.id="ship-container",A.id="player-board",d.id="computer-board",m.id="overlay",u.id="modal",S.id="modal-header",L.id="modal-text",L.textContent="Would you like to play again?",w.id="play-again-button",w.textContent="Play again",f.id="buttons",v.id="direction-button",v.textContent="Switch Direction",B.id="start-button",B.textContent="Start Game",g.id="ships",h.id="carrier",h.classList.add("ship","horizontal"),E.id="battleship",E.classList.add("ship","horizontal"),y.id="destroyer",y.classList.add("ship","horizontal"),b.id="submarine",b.classList.add("ship","horizontal"),C.id="patrol-boat",C.classList.add("ship","horizontal"),g.append(h,E,y,b,C),f.append(v,B),x.append(g,f),u.append(S,L,w),m.append(u),i.append(x,A,d,m),c.append(z),p.append(I),o.append(Y,c),a.append(Z,p),r.append(o,a),t.append(r,i),n.append(e,t),e.append(k),document.body.append(n)}()})()})();
//# sourceMappingURL=bundle.js.map