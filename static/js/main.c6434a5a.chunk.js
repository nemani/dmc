(this["webpackJsonpgrommet-dmc"]=this["webpackJsonpgrommet-dmc"]||[]).push([[0],{106:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(0),c=r(12),i=r.n(c),o=r(9),l=r(10),s=r(126),d=r(66),u=r(65),j=r(128),m=r(129),b=r(125),p=r(127),f=r(119),h=r(120),O=function(e){var t=e.dark,r=e.setDark;return Object(n.jsxs)(j.a,{tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"},children:[Object(n.jsx)(m.a,{as:l.A,label:" Data Market Cap ",href:"/dmc"}),Object(n.jsx)(b.a,{type:"digital"}),Object(n.jsx)(p.a,{onClick:function(){r(!t)},icon:t?Object(n.jsx)(f.a,{}):Object(n.jsx)(h.a,{})})]})},g=r(132),x=r(22),k=r(11),y=r.n(k),v=r(16),C=r(124),S=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),w=function(e,t){return new Intl.NumberFormat("en-US",{}).format(e)+" "+t},F=[{property:"#",header:"#"},{property:"name",header:"Name",primary:!0},{property:"symbol",header:"Symbol"},{property:"price",header:"Price",render:function(e){return S.format(e.price)},align:"end"},{property:"marketCap",header:"Market Cap",render:function(e){return S.format(e.marketCap)},align:"end"},{property:"volume_tkn",header:"Volume (Token)",align:"end",render:function(e){return w(e.volume_tkn,e.symbol)}},{property:"circulatingSupply",header:"Circulating Supply",align:"end",render:function(e){return w(e.circulatingSupply,e.symbol)}}],D=function(e){var t=Object(a.useState)([]),r=Object(o.a)(t,2),c=r[0],i=r[1],s=function(){var e=Object(v.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data-marketcap-backend.herokuapp.com/datatokens");case 2:e.sent.json().then((function(e){return i(e)})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return s()}),[]),Object(n.jsx)(j.a,{align:"center",pad:{horizontal:"none",vertical:"small"},children:Object(n.jsx)(C.a,{columns:F.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{search:"name"===e.property||"symbol"===e.property})})),onClickRow:function(e){Object(l.navigate)("/dmc/token/".concat(e.datum.did))},data:c,pad:{body:"medium"},background:{header:{dark:"neutral-1",light:"neutral-3"},body:[{light:"light-2",dark:"dark-2"},{light:"light-3",dark:"dark-3"}],footer:{dark:"dark-3",light:"light-3"}},pin:!0,fill:!0,sortable:!0,resizeable:!0})})},A=r(131),z=function(e){return Object(n.jsx)(A.a,Object(x.a)({fill:!0,align:"start",justifyContent:"around",pad:"large",gap:"small"},e))},E=function(){return Object(n.jsx)(z,{rows:["full"],columns:["15%","70%","15%"],areas:[{name:"middle",start:[1,0],end:[1,0]}],children:Object(n.jsxs)(j.a,{gridArea:"middle",children:[Object(n.jsx)(g.a,{level:"3",children:"Top Data Tokens Today: "}),Object(n.jsx)(D,{})]})})},L=r(122),P=r(133),T=function(){return Object(n.jsxs)(z,{rows:["full"],columns:["60%","40%"],areas:[{name:"left",start:[0,0],end:[0,0]},{name:"right",start:[1,0],end:[1,0]}],children:[Object(n.jsx)(P.a,{gridArea:"left",color:"neutral-2",onSelectPlace:function(e,t){},selectColor:"accent-2",hoverColor:"accent-4"}),Object(n.jsxs)(j.a,{gridArea:"right",alignContent:"start",children:[Object(n.jsx)(g.a,{level:"1",margin:"xsmall",children:"Oops. Page Not Found."}),Object(n.jsx)(g.a,{level:"2",margin:{horizontal:"none",vertical:"large"},children:"Lost?"}),Object(n.jsx)(m.a,{as:l.A,icon:Object(n.jsx)(L.a,{}),label:"Back to Home Page",href:"/dmc"})]})]})},B=r(51),M=r(130),N=r(134),U=r(64),V=r.n(U),I=r(123),K=function(e){var t=e.symbol,r=e.darkTheme,c=Object(a.useContext)(I.a);console.log(c);var i={lineColor:"#F03A47",bottomColor:"#5E080D",topColor:"#F68D94",lineWidth:3,title:"".concat(t,"/USD")},l={alignLabels:!0,priceScale:{position:"left",mode:0,autoScale:!0},layout:{backgroundColor:c.dark?"#3E5C76":"#FBC2FF",textColor:c.dark?"#FBC2FF":"#3E5C76",fontSize:12,fontFamily:"Calibri"},grid:{vertLines:{color:"#F03A47",style:1,visible:!0},horzLines:{color:"#F03A47",style:1,visible:!0}},localization:{},timeScale:{rightOffset:8,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0}},s=Object(a.useState)(),d=Object(o.a)(s,2),u=d[0],j=d[1],m=function(e){return e.prices.map((function(e){return{time:new Date(e[0]).toJSON(),value:e[1]}}))},b=function(){var e=Object(v.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/coins/".concat(t.toLowerCase(),"/market_chart?vs_currency=usd&days=360&interval=daily"));case 2:e.sent.json().then((function(e){return j([{data:m(e),options:i}])})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return b()}),[]),Object(n.jsx)(V.a,{options:l,areaSeries:u,autoWidth:!0,darkTheme:r})},R=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},_=function(e){var t=e.did,r=(Object(B.a)(e,["did"]),Object(a.useState)({symbol:"LOAD",name:"loading",price:0,description:"Please wait while the description is being loaded !",priceOcean:0,otherDetails:[{color:"white",dataKey:"state",dataValue:"loading"}]})),c=Object(o.a)(r,2),i=c[0],l=c[1],s=Object(a.useState)(!1),d=Object(o.a)(s,2),u=(d[0],d[1]),m=function(e){var t=e.name,r=e.symbol,n=e.price,a=e.description,c=e.priceOcean,i=Object(B.a)(e,["name","symbol","price","description","priceOcean"]);i=Object.entries(i).map((function(e,t,r){var n=Object(o.a)(e,2),a=n[0],c=n[1];return{color:R(),dataKey:a,dataValue:c}})),l({name:t,symbol:r,price:n,description:a,priceOcean:c,otherDetails:i})},b=function(){var e=Object(v.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data-marketcap-backend.herokuapp.com/datatoken/".concat(t));case 2:e.sent.json().then((function(e){return m(e)})).catch((function(e){return u(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return b()}),[]),Object(n.jsxs)(z,{rows:["10%","90%"],columns:["70%","30%"],areas:[{name:"top",start:[0,0],end:[1,0]},{name:"left",start:[0,1],end:[0,1]},{name:"right",start:[1,1],end:[1,1]}],children:[Object(n.jsxs)(j.a,{gridArea:"top",direction:"row",children:[Object(n.jsx)(j.a,{pad:"medium",fill:!0,children:Object(n.jsxs)(M.a,{size:"large",children:[" Name: ",i.name]})}),Object(n.jsx)(j.a,{pad:"medium",fill:!0,children:Object(n.jsxs)(M.a,{size:"large",children:[" Symbol: ",i.symbol]})}),Object(n.jsx)(j.a,{pad:"medium",fill:!0,children:Object(n.jsxs)(M.a,{size:"large",children:["Price: ",i.price," USD"]})}),Object(n.jsx)(j.a,{pad:"medium",fill:!0,children:Object(n.jsxs)(M.a,{size:"large",children:[" Price: ",i.priceOcean," Ocean"]})})]}),Object(n.jsxs)(j.a,{gridArea:"left",fill:!0,children:[Object(n.jsx)(K,{symbol:"bitcoin"}),Object(n.jsxs)(j.a,{pad:"medium",fill:!0,children:[Object(n.jsx)(g.a,{pad:"small",margin:"none",level:"4",children:"Description"}),Object(n.jsx)(N.a,{fill:!0,children:i.description})]})]}),Object(n.jsx)(j.a,{gridArea:"right",children:i.otherDetails.map((function(e){return Object(n.jsxs)(j.a,{pad:"small",border:"small",fill:!0,children:[Object(n.jsx)(g.a,{margin:"none",pad:"small",level:"4",children:(t=e.dataKey,(t=t.replace(/([A-Z]+)/g," $1")).charAt(0).toUpperCase()+t.slice(1))}),Object(n.jsx)(M.a,{size:"medium",children:e.dataValue})]},e.dataKey);var t}))})]})},J={"/":function(){return Object(n.jsx)(E,{})},"/dmc":function(){return Object(n.jsx)(E,{})},"/dmc/":function(){return Object(n.jsx)(E,{})},"/dmc/token/:did":function(e){var t=e.did;return Object(n.jsx)(_,{did:t})},"/dmc/token/:did/":function(e){var t=e.did;return Object(n.jsx)(_,{did:t})},"/token/:did/":function(e){var t=e.did;return Object(n.jsx)(_,{did:t})},"/token/:did":function(e){var t=e.did;return Object(n.jsx)(_,{did:t})}},W=Object(u.deepMerge)(d.grommet,{global:{focus:{border:{color:"none"}},colors:{border:{light:"#601700",dark:"#F03A47"},focus:"none",background:{light:"#fde2ff",dark:"#0D1321"},text:{light:"#601700",dark:"#F03A47"}}}}),H=function(){var e=Object(l.useRoutes)(J),t=Object(a.useState)(!1),r=Object(o.a)(t,2),c=r[0],i=r[1];return Object(n.jsxs)(s.a,{theme:W,cssVars:!0,full:!0,themeMode:c?"dark":"light",children:[Object(n.jsx)(O,{dark:c,setDark:i}),e||Object(n.jsx)(T,{})]})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,135)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(n.jsx)(H,{}),document.getElementById("root")),Z()}},[[106,1,2]]]);
//# sourceMappingURL=main.c6434a5a.chunk.js.map