(this["webpackJsonplearn-breeds"]=this["webpackJsonplearn-breeds"]||[]).push([[0],{38:function(e,r,t){},42:function(e,r,t){"use strict";t.r(r);var n=t(11),a=t.n(n),i=t(32),s=t.n(i),c=(t(38),t(0)),o=t.n(c),l=t(21),d=t(2),h=t(10),u=t(9),b=function(e){return Object(u.jsxs)("div",{className:"gameover_screen",children:[Object(u.jsxs)("div",{id:"gameover_heading",children:[" ",e.isTimeUp?"Time's Up!":"Game Over!"," "]}),Object(u.jsx)("div",{id:"gameover_score_description",children:"Your Score Was:"}),Object(u.jsxs)("div",{id:"gameover_score_number",children:[" ",e.finalScore," "]}),Object(u.jsx)("button",{className:"button",onClick:e.onRestartGame,children:"Try Again"}),Object(u.jsx)("button",{className:"button",onClick:e.onGoBackToHome,children:"Go Back to Home"})]})},j=t(6),m={Chihuahua:"chihuahua","Labrador Retriever":"labrador","Border Collie":"collie/border","German Shepherd":"germanshepherd","Siberian Husky":"husky","Doberman Pinscher":"doberman","Saint Bernard":"stbernard",Rottweiler:"rottweiler",Dachshund:"dachshund","Golden Retriever":"retriever/golden","English Bulldog":"bulldog/english","Shih Tzu":"shihtzu","West Highland White Terrier":"terrier/westhighland","French Bulldog":"bulldog/french","Cardigan Welsh Corgi":"corgi/cardigan","English Springer Spaniel":"springer/english","Great Dane":"dane/great",Beagle:"beagle","Cocker Spaniel":"spaniel/cocker"},O={Affenpinscher:"affenpinscher","African Wild Dog":"african","Airedale Terrier":"airedale",Akita:"akita",Appenzeller:"appenzeller","Australian Shepherd":"australian/shepherd",Basenji:"basenji","Bluetick Coonhound":"bluetick",Borzoi:"borzoi","Bouvier des Flandres":"bouvier",Boxer:"boxer","Brabancon Griffon":"brabancon",Briard:"briard","Norwegian Buhund":"buhund/norwegian","Boston Bulldog":"bulldog/boston","Staffordshire Bull Terrier":"bullterrier/staffordshire","Australian Cattle Dog":"cattledog/australian",Chow:"chow","Clumber Spaniel":"clumber",Cockapoo:"cockapoo",Coonhound:"coonhound","Coton de Tulear":"cotondetulear","Scottish Deerhound":"deerhound/scottish",Dhole:"dhole",Dingo:"dingo","Norwegian Elkhound":"elkhound/norwegian",Entlebucher:"entlebucher","Eskimo Dog":"eskimo","Finnish Lapphund":"finnish/lapphund","Bichon Frise":"frise/bichon","Italian Greyhound":"greyhound/italian",Groenendael:"groenendael",Havanese:"havanese","Afghan Hound":"hound/afghan","Basset Hound":"hound/basset","Blood Hound":"hound/blood","English Hound":"hound/english","Ibizan Hound":"hound/ibizan","Plott Hound":"hound/plott","Walker Hound":"hound/walker",Keeshond:"keeshond",Kelpie:"kelpie",Komondor:"komondor",Kuvasz:"kuvasz",Labradoodle:"labradoodle",Leonberg:"leonberg","Lhasa Apso":"lhasa",Malamute:"malamute",Malinois:"malinois",Maltese:"maltese",Bullmastiff:"mastiff/bull","English Mastiff":"mastiff/english","Tibetaan Mastiff":"mastiff/tibetan","Mexican Hairless":"mexicanhairless","Bernese Mountain Dog":"mountain/bernese","Swiss Mountain Dog":"mountain/swiss",Newfoundland:"newfoundland",Otterhound:"otterhound","Caucasian Ovcharka":"ovcharka/caucasian",Papillon:"papillon",Pekinese:"pekinese",Pembroke:"pembroke","Miniature Pinscher":"pinscher/miniature","German Longhaired Pointer":"pointer/germanlonghair","German Pointer":"pointer/german",Pomeranian:"pomeranian","Miniature Poodle":"poodle/miniature","Standard Poodle":"poodle/standard","Toy Poodle":"poodle/toy",Pug:"pug",Puggle:"puggle","Great Pyrenees":"pyrenees","Redbone Coonhound":"redbone","Chesapeake Bay Retriever":"retriever/chesapeake","Curly Retriever":"retriever/curly","Flatcoated Retriever":"retriever/flatcoated","Rhodesian Ridgeback":"ridgeback/rhodesian",Saluki:"saluki",Samoyed:"samoyed",Schipperke:"schipperke","Giant Schnauzer":"schnauzer/giant","Miniature Schnauzer":"schnauzer/miniature","English Setter":"setter/english","Gordon Setter":"setter/gordon","Irish Setter":"setter/irish","English Sheepdog":"sheepdog/english","Shetland Sheepdog":"sheepdog/shetland","Shiba Inu":"shiba","Blenheim Spaniel":"spaniel/blenheim","Brittany Spaniel":"spaniel/brittany","Irish Water Spaniel":"spaniel/irish","Japanese Spaniel":"spaniel/japanese","Sussex Spaniel":"spaniel/sussex","Welsh Springer Spaniel":"spaniel/welshspringer","American Staffordshire Terrier":"terrier/american","Australian Terrier":"terrier/australian","Bedlington Terrier":"terrier/bedlington","Border Terrier":"terrier/border","Cairn Terrier":"terrier/cairn","Dandie Dinmont Terrier":"terrier/dandie","Fox Terrier":"terrier/fox","Irish Terrier":"terrier/irish","Kerry Blue Terrier":"terrier/kerryblue","Lakeland Terrier":"terrier/lakeland","Norfolk Terrier":"terrier/norfolk","Norwich Terrier":"terrier/norwich","Patterdale Terrier":"terrier/patterdale","Russell Terrier":"terrier/russell","Scottish Terrier":"terrier/scottish","Sealyham Terrier":"terrier/sealyham","Silky Terrier":"terrier/silky","Tibetan Terrier":"terrier/tibetan","Toy Fox Terrier":"terrier/toy","Welsh Terrier":"terrier/welsh","Wheaten Terrier":"terrier/wheaten","Yorkshire Terrier":"terrier/yorkshire",Tervuren:"tervuren",Vizsla:"vizsla","Spanish Water Dog":"waterdog/spanish",Weimaraner:"weimaraner",Whippet:"whippet","Irish Wolfhound":"wolfhound/irish"},g=function(){var e=Object(d.a)(o.a.mark((function e(r){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dog.ceo/api/breed/".concat(r,"/images/random"));case 2:return t=e.sent,n=t.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(e){var r,t=e.onGameOver,a=Object(n.useState)(0),i=Object(h.a)(a,2),s=i[0],c=i[1],o=Object(n.useState)(e.initialRoundTimeInSeconds),l=Object(h.a)(o,2),d=l[0],b=l[1],p=Object(n.useRef)(null),f=Object(n.useState)(1),v=Object(h.a)(f,2),S=v[0],k=v[1],x=Object(n.useState)(!1),y=Object(h.a)(x,2),T=y[0],w=y[1],B=Object(n.useCallback)((function(){var r=Object.keys(m).length*("easy"===e.currentLevel?S:.2)+Object.keys(O).length*("easy"===e.currentLevel?1-S:.8);return Math.random()*r<Object.keys(m).length*S?m:O}),[S,e.currentLevel]),_=Object(n.useState)([{imgLink:"",isAnswer:!1,breed:"dfsdf"}]),C=Object(h.a)(_,2),N=C[0],G=C[1],H=Object(n.useState)(!1),L=Object(h.a)(H,2),I=L[0],A=L[1];Object(n.useEffect)((function(){if(!T){for(var e=B(),r=Object.keys(e).slice(),t=[],n=[],a=function(e){var a=Math.random()*r.length,i=Math.floor(a);n.push(a);var s=r[i];r=r.filter((function(e){return e!==s})),t.push(s)},i=0;i<3;i++)a();var s=t[Math.floor(127*Math.random())%3],c=[];setTimeout((function(){var r,n=Object(j.a)(t);try{var a=function(){var t=r.value;g(e[t]).then((function(e){var r={imgLink:e.message,breed:t,isAnswer:t===s};A(!0),w(!0),c.push(r),G([].concat(c))})).catch((function(e){return console.log("API issues: ".concat(e))}))};for(n.s();!(r=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}}),1e3)}}),[s,B]),Object(n.useEffect)((function(){if(T){var r=setTimeout((function(){b(d-1),d<=0&&(e.setIsTimeUp(!0),w(!1),b(e.initialRoundTimeInSeconds),clearTimeout(r),t(s))}),1e3);p.current=r}}),[t,s,e.initialRoundTimeInSeconds,d,T]);var P=N.map((function(r){return Object(u.jsx)("div",{className:"card",onClick:function(){w(!1),b(d+2),s>0&&s%85==0&&k(Math.max(0,S-.2)),p.current&&clearTimeout(p.current),r.isAnswer?c(s+25):e.onGameOver(s)},children:Object(u.jsx)("div",{className:"wrapper ".concat(r.isAnswer&&!T?"answer":r.isAnswer||T?"":"other"),children:Object(u.jsx)("div",{className:"card_img",style:{backgroundImage:"url(".concat(r.imgLink,")"),backgroundSize:"auto 100%"}})})},r.imgLink)})),E=(null===(r=N.find((function(e){return e.isAnswer})))||void 0===r?void 0:r.breed)||"";return I?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"header_bar",children:[Object(u.jsx)("div",{className:"header_item",id:"header_bar_home_btn",onClick:function(){w(!1),t(0),e.onGoBackToHome()},children:"Back to Home"}),Object(u.jsx)("div",{className:"header_item",id:"header_bar_timer",children:"Time: ".concat(d)}),Object(u.jsxs)("div",{className:"header_item",id:"header_bar_score",children:["Score:",Object(u.jsxs)("strong",{children:[" "," ".concat(s)," "]})]})]}),Object(u.jsxs)("div",{className:"main_screen",children:[Object(u.jsx)("div",{className:"prompt",children:Object(u.jsxs)("h2",{children:[" Which picture is a ",E]})}),Object(u.jsx)("div",{className:"card_choices",children:P})]})]}):Object(u.jsx)("div",{children:"Loading ... "})},f=function(e){return Object(u.jsxs)("div",{className:"high_scores_screen",children:[Object(u.jsx)("div",{id:"high_scores_screen_heading",children:" High Scores"}),Object(u.jsx)("div",{className:"high_scores_list",children:Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Rank"}),Object(u.jsx)("th",{children:"Username"}),Object(u.jsxs)("th",{children:["Score"," ",Object(u.jsx)("div",{className:"level easy ".concat("easy"===e.highScoreLevel?"chosen-level":""),onClick:function(){return e.setHighScoreLevel("easy")},children:"Easy"}),Object(u.jsx)("div",{className:"level hard ".concat("hard"===e.highScoreLevel?"chosen-level":""),onClick:function(){return e.setHighScoreLevel("hard")},children:"Hard"})]}),Object(u.jsx)("th",{children:"Last Updated"})]})}),Object(u.jsx)("tbody",{children:e.userList.map((function(r,t){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[t+1,"."]}),Object(u.jsx)("td",{children:r.username.length>0?r.username:"unnamed"}),Object(u.jsx)("td",{children:r["highscore-".concat(e.highScoreLevel)]}),Object(u.jsx)("td",{children:new Date(r.lastUpdated).toLocaleDateString()})]},r.uuid)}))})]})}),Object(u.jsx)("button",{className:"button high_scores_screen_btn",onClick:e.onGoBackToHome,children:"Go Back to Home"})]})},v=t.p+"static/media/learn-breeds-icon.64e8b116.png",S=t(33),k=t(28),x=t(19),y=(Object(S.a)({apiKey:"AIzaSyBZ74hwi5Vu1qkL9zRhWetcDour4Wq7a44",authDomain:"learn-breeds.firebaseapp.com",projectId:"learn-breeds",storageBucket:"learn-breeds.appspot.com",messagingSenderId:"64861816726",appId:"1:64861816726:web:1ef13668f9beb9ca833fb7",measurementId:"G-JCG8K2W694"}),Object(x.e)()),T=Object(k.a)(),w=function(){var e=Object(n.useState)(!1),r=Object(h.a)(e,2),t=r[0],a=r[1],i=Object(n.useState)(!1),s=Object(h.a)(i,2),c=s[0],j=s[1],m=Object(n.useState)(""),O=Object(h.a)(m,2),g=O[0],S=O[1],w=Object(n.useState)([]),B=Object(h.a)(w,2),_=B[0],C=B[1],N=Object(n.useState)(!1),G=Object(h.a)(N,2),H=G[0],L=G[1],I=Object(n.useState)(0),A=Object(h.a)(I,2),P=A[0],E=A[1],M=Object(n.useState)(!1),R=Object(h.a)(M,2),z=R[0],D=R[1],W=Object(n.useState)("easy"),U=Object(h.a)(W,2),F=U[0],K=U[1],J=Object(n.useState)("easy"),V=Object(h.a)(J,2),Y=V[0],q=V[1],Z=Object(n.useRef)(null),Q=Object(n.useState)(!1),X=Object(h.a)(Q,2),$=(X[0],X[1]),ee=Object(n.useState)(!1),re=Object(h.a)(ee,2),te=re[0],ne=re[1],ae=Object(n.useState)({easy:0,hard:0}),ie=Object(h.a)(ae,2),se=ie[0],ce=ie[1],oe=Object(n.useState)(""),le=Object(h.a)(oe,2),de=le[0],he=le[1];Object(n.useEffect)((function(){Object(k.c)(T).then((function(){$(!0),Object(k.b)(T,(function(e){e?($(!0),he(e.uid),Object(x.c)(Object(x.b)(y,"users",e.uid)).then((function(e){if(e.exists()){var r=e.data();ce({easy:r["highscore-easy"],hard:r["highscore-hard"]}),S(r.username)}ne(!0)}))):he("")}))})).catch((function(e){e.code,e.message}))}),[]);var ue=function(){Z.current&&clearTimeout(Z.current),D(!1),E(0),a(!0),j(!1),L(!1)},be=function(){Z.current&&clearTimeout(Z.current),E(0),D(!1),a(!1),j(!1),L(!1)};Object(n.useEffect)((function(){H&&Object(x.d)(Object(x.g)(Object(x.a)(y,"users"),Object(x.f)("highscore-".concat(Y),"desc"))).then((function(e){var r=[];e.forEach((function(e){r.push(e.data())})),C(r)})).catch((function(e){console.log(e)}))}),[H,Y]),Object(n.useEffect)((function(){if(te){var e={"highscore-easy":se.easy,"highscore-hard":se.hard},r=function(){var r=Object(d.a)(o.a.mark((function r(){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!de){r.next=3;break}return r.next=3,Object(x.h)(Object(x.b)(y,"users",de),Object(l.a)(Object(l.a)({},e),{},{username:g,uuid:de,lastUpdated:(new Date).toISOString()}));case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}}),[g,se,de]);return t?Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(p,{onGoBackToHome:be,onGameOver:function(e){E(e),ce("easy"===F?Object(l.a)(Object(l.a)({},se),{},{easy:Math.max(e,se.easy)}):Object(l.a)(Object(l.a)({},se),{},{hard:Math.max(e,se.hard)}));var r=setTimeout((function(){a(!1),j(!0),L(!1)}),1e3);Z.current=r},initialRoundTimeInSeconds:15,setIsTimeUp:D,currentLevel:F})})}):c?Object(u.jsx)(b,{isTimeUp:z,finalScore:P,onRestartGame:ue,onGoBackToHome:be}):H?Object(u.jsx)(f,{highScoreLevel:Y,setHighScoreLevel:q,userList:_,onGoBackToHome:be}):Object(u.jsxs)("div",{className:"home_screen",children:[Object(u.jsx)("img",{src:v,alt:"main logo",height:80,width:80}),Object(u.jsx)("h1",{id:"home_screen_heading",children:" Pick a Paw"}),Object(u.jsx)("div",{className:"username",children:Object(u.jsx)("input",{type:"text",placeholder:"Enter your username",value:g,onChange:function(e){S(e.currentTarget.value)}})}),Object(u.jsx)("button",{className:"button",onClick:ue,children:"Start Game"}),Object(u.jsx)("button",{className:"button",onClick:function(){Z.current&&clearTimeout(Z.current),E(0),D(!1),a(!1),j(!1),L(!0)},children:"Show High Scores"}),Object(u.jsxs)("div",{className:"level-selector",children:["Breed Variety:",Object(u.jsx)("div",{className:"level easy ".concat("easy"===F?"chosen-level":""),onClick:function(){return K("easy")},children:"Easy"}),Object(u.jsx)("div",{className:"level hard ".concat("hard"===F?"chosen-level":""),onClick:function(){return K("hard")},children:"Hard"})]}),Object(u.jsxs)("div",{style:{textAlign:"center",marginTop:"30px"},className:"user-stats",children:[Object(u.jsx)("h3",{children:" Your Stats"}),"Personal Best (Easy): ",se.easy," ",Object(u.jsx)("br",{})," Personal Best (Hard): ",se.hard]})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.89fa50c7.chunk.js.map