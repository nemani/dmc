(this["webpackJsonpgrommet-dmc"]=this["webpackJsonpgrommet-dmc"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(17),l=a.n(n),i=a(15),s=a.n(i),o=a(20),d=a(8),j=a(16),b=a(35),u=a.n(b),h=a(153),m=a(66),O=a(154),x=a(79),g=a(10),p=a(23),f=a(128),v=function(e){var t=e.children,a=Object(p.a)(e,["children"]);return Object(c.jsx)(m.a,Object(g.a)(Object(g.a)({},a),{},{children:Object(c.jsx)(f.a.Consumer,{children:function(e){return"large"===e?Object(c.jsx)(m.a,{width:"1200px",alignSelf:"center",children:t}):Object(c.jsx)(m.a,{margin:{horizontal:"xlarge"},children:t})}})}))},k=a(152),w=a(129),C=function(e,t){return Object(c.jsxs)(m.a,{background:"brand",direction:"column",align:"center",round:"xsmall",pad:"xsmall",gap:"xsmall",margin:"xxsmall",children:[Object(c.jsx)(O.a,{size:"small",children:e}),t&&Object(c.jsx)(m.a,{background:{color:"white",opacity:"strong"},round:"full",children:Object(c.jsx)(w.a,{color:"brand",style:{width:"12px",height:"12px"}})})]})},z=function(e){var t=e.children,a=e.onRemove;Object(p.a)(e,["children","onRemove"]);return a?Object(c.jsx)(k.a,{onClick:a,children:C(t,a)}):C(t,a)},y=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),S=function(e,t){return new Intl.NumberFormat("en-US",{}).format(e)+" "+t},T=function(e,t){return Object(c.jsx)(O.a,Object(g.a)(Object(g.a)({size:"small"},t),{},{children:e}))},M=[{property:"symbol",header:T("Name",{weight:"bold",color:"dark-6"}),primary:!0,render:function(e){var t=e.name,a=e.symbol;return Object(c.jsxs)(m.a,{gap:"xxsmall",children:[Object(c.jsx)(O.a,{size:"small",weight:"bold",children:t}),Object(c.jsx)(O.a,{size:"xsmall",color:"dark-6",weight:500,children:a})]})}},{property:"price",header:T("Price",{weight:"bold",color:"dark-6"}),render:function(e){return T(y.format(e.price))},align:"end"},{property:"marketCap",header:T("Market Cap",{weight:"bold",color:"dark-6"}),render:function(e){return T(y.format(e.marketCap))},align:"end"},{property:"volume",header:T("Volume (Token)",{weight:"bold",color:"dark-6"}),align:"end",render:function(e){var t=e.volume,a=(e.price,e.symbol),r=e.circulatingSupply;return Object(c.jsxs)(m.a,{gap:"xxsmall",children:[Object(c.jsx)(O.a,{size:"small",weight:"bold",children:y.format(t)}),Object(c.jsx)(O.a,{size:"xsmall",color:"dark-6",weight:500,children:S(r,a)})]})}},{property:"circulatingSupply",header:T("Circulating Supply",{weight:"bold",color:"dark-6"}),align:"end",render:function(e){return T(Math.round(100*e.circulatingSupply)/100)}},{property:"Tags",header:T("Tags",{weight:"bold",color:"dark-6"}),align:"end",render:function(e){var t=e.tags.slice(0,2).map((function(e){return Object(c.jsx)(z,{children:e},e)})),a=e.tags.length-2;return a>0&&t.push(Object(c.jsx)(z,{children:"and ".concat(a," others")},a)),t}}],E=function(){return Object(c.jsx)(m.a,{onClick:function(){return Object(j.navigate)("/dmc")},children:Object(c.jsx)(O.a,{size:"large",weight:500,children:"Data Market Cap"})})},N=function(){return Object(c.jsxs)(m.a,{direction:"row",gap:"small",align:"center",children:[Object(c.jsx)(O.a,{size:"xsmall",children:"powered by"}),Object(c.jsx)("svg",{width:"36",height:"36",viewBox:"0 0 512 512",className:"Logo-module--logo--fjl9p undefined",children:Object(c.jsx)("path",{d:"M133.619 477.44v-.264c0-16.034-12.033-28.807-27.468-28.807-15.83 0-27.218 12.908-27.218 28.557v.25c0 16.044 12.039 28.817 27.469 28.817 15.835 0 27.217-12.903 27.217-28.552m-61.619 0v-.265c0-18.636 14.523-34.8 34.402-34.8 19.767 0 34.15 15.905 34.15 34.55v.25c0 18.646-14.523 34.824-34.401 34.824C86.393 512 72 496.086 72 477.44m83.548 0v-.264c0-18.636 14.874-34.8 33.92-34.8 12.52 0 20.35 5.728 26.615 12.255l-4.567 4.679c-5.74-5.853-12.27-10.941-22.183-10.941-15.129 0-26.87 12.643-26.87 28.557v.25c0 16.044 12.13 28.817 27.395 28.817 9.388 0 16.692-4.814 22.308-11.08l4.437 3.914c-6.785 7.686-14.88 13.173-27.135 13.173-19.18 0-33.92-15.914-33.92-34.56m128.046-3.39c-.915-13.422-8.611-25.816-23.88-25.816-13.188 0-23.358 11.08-24.537 25.816h48.417zm-55.21 3.27v-.274c0-19.294 13.584-34.67 31.586-34.67 18.666 0 30.54 15.12 30.54 34.8 0 1.179 0 1.573-.13 2.612h-55.203c1.179 16.563 13.044 26.21 26.107 26.21 10.296 0 17.352-4.56 22.825-10.426l4.438 3.914c-6.787 7.3-14.739 12.514-27.528 12.514-17.487 0-32.634-13.956-32.634-34.68zm126.634 8.016v-7.632c-5.649-1.439-13.135-3.009-22.731-3.009-14.202 0-22.091 6.3-22.091 15.627v.261c0 9.72 9.198 15.37 19.463 15.37 13.669 0 25.359-8.402 25.359-20.617m-51.654 5.635v-.257c0-13.93 11.957-21.809 29.32-21.809 9.325 0 15.769 1.187 22.213 2.902v-2.902c0-13.538-8.292-20.491-22.086-20.491-8.16 0-14.857 2.238-21.034 5.393l-2.371-5.66c7.365-3.406 14.6-5.77 23.802-5.77 9.063 0 16.292 2.49 21.16 7.355 4.47 4.467 6.837 10.64 6.837 18.916v41.772h-6.308v-11.168C350.295 505.686 342.009 512 329.26 512c-12.49 0-25.897-7.094-25.897-21.029m80.335-47.025h6.377v12.475c4.403-7.887 11.81-14.044 23.893-14.044 16.75 0 26.5 11.554 26.5 27.58v40.972h-6.363v-39.79c0-13.792-7.666-22.862-21.043-22.862-12.993 0-22.987 9.99-22.987 23.904v38.748h-6.377v-66.983zM119.129 179.41c0 10.944-8.864 19.821-19.815 19.821-10.942 0-19.816-8.877-19.816-19.82 0-10.944 8.874-19.812 19.816-19.812 10.95 0 19.816 8.868 19.816 19.811m314.912 0c0 10.944-8.875 19.821-19.811 19.821-10.946 0-19.821-8.877-19.821-19.82 0-10.944 8.875-19.812 19.82-19.812 10.937 0 19.812 8.868 19.812 19.811m-157.456 78.195c0 10.942-8.874 19.819-19.814 19.819-10.945 0-19.818-8.877-19.818-19.819 0-10.942 8.873-19.813 19.818-19.813 10.94 0 19.814 8.871 19.814 19.813m-79.264-38.558c0 10.939-8.869 19.816-19.818 19.816-10.945 0-19.814-8.877-19.814-19.816 0-10.948 8.87-19.816 19.814-19.816 10.95 0 19.818 8.868 19.818 19.816m157.456 0c0 10.939-8.873 19.816-19.813 19.816-10.95 0-19.819-8.877-19.819-19.816 0-10.948 8.87-19.816 19.819-19.816 10.94 0 19.813 8.868 19.813 19.816m-242.075 20.356c0 7.382-5.99 13.385-13.382 13.385-7.402 0-13.396-6.003-13.396-13.385 0-7.4 5.994-13.394 13.396-13.394 7.393 0 13.382 5.993 13.382 13.394m314.912 0c0 7.382-5.998 13.385-13.39 13.385-7.395 0-13.388-6.003-13.388-13.385 0-7.4 5.993-13.394 13.389-13.394 7.391 0 13.39 5.993 13.39 13.394m-157.457 79.25c0 7.396-6 13.398-13.384 13.398-7.389 0-13.394-6.002-13.394-13.399 0-7.39 6.005-13.379 13.394-13.379 7.383 0 13.384 5.988 13.384 13.38m-79.264-39.618c0 7.394-5.993 13.384-13.384 13.384-7.396 0-13.394-5.99-13.394-13.384 0-7.399 5.998-13.394 13.394-13.394 7.391 0 13.384 5.995 13.384 13.394m157.456 0c0 7.394-6.001 13.384-13.381 13.384-7.4 0-13.397-5.99-13.397-13.384 0-7.399 5.997-13.394 13.397-13.394 7.38 0 13.381 5.995 13.381 13.394m-242.075 7.486a6.962 6.962 0 11-13.925 0 6.957 6.957 0 016.965-6.955 6.956 6.956 0 016.96 6.955m314.912 0a6.962 6.962 0 11-13.925 0 6.955 6.955 0 016.965-6.955c3.838 0 6.96 3.112 6.96 6.955m-157.456 79.266c0 3.846-3.122 6.967-6.96 6.967a6.967 6.967 0 01-6.964-6.967 6.958 6.958 0 016.964-6.958 6.96 6.96 0 016.96 6.958m-79.263-39.627a6.967 6.967 0 01-6.965 6.962 6.966 6.966 0 01-6.96-6.962 6.96 6.96 0 016.96-6.962 6.961 6.961 0 016.965 6.962m157.456 0c0 3.841-3.123 6.962-6.96 6.962A6.96 6.96 0 01328 326.16a6.953 6.953 0 016.965-6.962 6.961 6.961 0 016.96 6.962m-58.912-299.38c0 14.792-11.991 26.777-26.771 26.777-14.795 0-26.786-11.985-26.786-26.777C229.456 11.99 241.447 0 256.242 0c14.78 0 26.77 11.99 26.77 26.779m0 79.263c0 14.79-11.99 26.778-26.77 26.778-14.795 0-26.786-11.988-26.786-26.778 0-14.786 11.991-26.778 26.786-26.778 14.78 0 26.77 11.992 26.77 26.778m0 78.197c0 14.784-11.99 26.774-26.77 26.774-14.795 0-26.786-11.99-26.786-26.774 0-14.793 11.991-26.783 26.786-26.783 14.78 0 26.77 11.99 26.77 26.783m157.457-78.197c0 14.79-11.99 26.778-26.776 26.778-14.792 0-26.78-11.988-26.78-26.778 0-14.786 11.988-26.778 26.78-26.778 14.787 0 26.776 11.992 26.776 26.778m-314.913 0c0 14.79-11.986 26.778-26.775 26.778C83.99 132.82 72 120.832 72 106.042c0-14.786 11.991-26.778 26.78-26.778 14.79 0 26.776 11.992 26.776 26.778M204.82 66.41c0 14.788-11.987 26.778-26.778 26.778-14.791 0-26.778-11.99-26.778-26.778 0-14.798 11.987-26.778 26.778-26.778 14.79 0 26.778 11.98 26.778 26.778m0 78.19c0 14.79-11.987 26.78-26.778 26.78-14.791 0-26.778-11.99-26.778-26.78 0-14.785 11.987-26.776 26.778-26.776 14.79 0 26.778 11.991 26.778 26.776m157.456-78.19c0 14.788-11.99 26.778-26.78 26.778-14.79 0-26.776-11.99-26.776-26.778 0-14.798 11.986-26.778 26.776-26.778s26.78 11.98 26.78 26.778m0 78.19c0 14.79-11.99 26.78-26.78 26.78-14.79 0-26.776-11.99-26.776-26.78 0-14.785 11.986-26.776 26.776-26.776s26.78 11.991 26.78 26.776",fill:"#141414",fillRule:"evenodd"})})]})},P=function(e){var t=e.name,a=e.value;return Object(c.jsxs)(m.a,{direction:"row",gap:"xxsmall",children:[Object(c.jsxs)(O.a,{size:"xsmall",children:[t,":"]}),Object(c.jsx)(O.a,{size:"xsmall",color:"brand",weight:500,children:a})]})},F=function(e){e.dark,e.setDark;var t=Object(r.useContext)(ge).stats,a=[{name:"Tokens",value:t.totalTokens},{name:"OCEAN Price",value:y.format(t.oceanPrice)},{name:"OCEAN Market Cap",value:y.format(t.oceanMarketCap)},{name:"Tokens Volume (24h)",value:"".concat(y.format(t.dataTokensVolumeInOcean)," (").concat(S(t.dataTokensVolumeInOcean,"OCEAN"),")")},{name:"Tokens Market Cap",value:"".concat(y.format(t.totalMarketCap)," (").concat(S(t.totalMarketCapInOcean,"OCEAN"),")")}];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{tag:"header",pad:{vertical:"xsmall"},border:{side:"bottom",size:"xsmall",color:"light-3"},children:Object(c.jsx)(v,{children:Object(c.jsx)(m.a,{direction:"row",align:"center",children:Object(c.jsx)(m.a,{direction:"row",gap:"small",children:a.map((function(e){return Object(c.jsx)(P,{name:e.name,value:e.value},e.name)}))})})})}),Object(c.jsx)(m.a,{tag:"header",pad:{vertical:"small"},border:{side:"bottom",size:"xsmall",color:"light-3"},children:Object(c.jsx)(v,{children:Object(c.jsxs)(m.a,{direction:"row",align:"center",justify:"between",children:[Object(c.jsx)(E,{}),Object(c.jsx)(N,{})]})})})]})},L=a(141),D=a(142),A=a(132),I=a(133),V=a(134),B=a(150),R=a(155),U=a(149),J=a(80),_=function(e){var t=e.onSearch,a=Object(r.useState)(""),n=Object(d.a)(a,2),l=n[0],i=n[1];return Object(c.jsx)(B.a,{placeholder:"Search for tokens",size:"small",style:{padding:"5px",paddingLeft:"30px"},icon:Object(c.jsx)(A.a,{size:"small"}),value:l,onChange:function(e){i(e.target.value),t(e.target.value)}})},W=function(e){var t=e.pageNumber,a=e.reachedEnd,r=e.onPageChange,n=e.onSearch;return Object(c.jsxs)(m.a,{direction:"row",justify:"end",align:"center",gap:"medium",children:[Object(c.jsxs)(m.a,{direction:"row",gap:"small",align:"center",children:[Object(c.jsx)(R.a,{onClick:1!==t?function(){return r(t-1)}:null,background:1!==t?"light-6":"light-2",size:"small",children:Object(c.jsx)(I.a,{size:"small"})}),Object(c.jsxs)(O.a,{size:"xsmall",children:["Page ",t]}),Object(c.jsx)(R.a,{onClick:a?null:function(){return r(t+1)},background:a?"light-2":"light-6",size:"small",children:Object(c.jsx)(V.a,{size:"small"})})]}),Object(c.jsx)(m.a,{justify:"center",children:Object(c.jsx)(_,{onSearch:n})})]})},H=function(){var e=Object(r.useContext)(ge).allTokenList,t=Object(r.useState)([{low:0,high:10,property:"price"}]),a=Object(d.a)(t,2),n=(a[0],a[1],Object(r.useState)(e)),l=Object(d.a)(n,2),i=l[0],s=l[1],o=Object(r.useState)(i.slice(0,20)),b=Object(d.a)(o,2),h=b[0],O=b[1],x=Object(r.useState)(1),g=Object(d.a)(x,2),p=g[0],f=g[1],v=Object(r.useState)(i.length<=20),k=Object(d.a)(v,2),w=k[0],C=k[1];return Object(c.jsxs)(m.a,{gap:"small",children:[Object(c.jsx)(W,{pageNumber:p,reachedEnd:w,onPageChange:function(e){var t=20*(e-1),a=20*e,c=!1;t<i.length&&(a>i.length&&(a=i.length,c=!0),O(i.slice(t,a)),f(e),C(c))},onSearch:function(t){var a=e;if(""!==t){a=new J.a(e,{includeScore:!0,shouldSort:!0,distance:1e5,keys:["did","name","symbol","tags"]}).search(t).map((function(e){return e.item}))}s(a),f(1),O(a.slice(0,20)),C(a.length<=20)}}),Object(c.jsx)(m.a,{align:"center",children:Object(c.jsx)(U.a,{pin:!0,fill:!0,sortable:!0,columns:M,data:h,border:{color:"light-3",side:"horizontal",size:"xsmall"},onClickRow:function(e){var t=e.datum;return Object(j.navigate)("/dmc/token/".concat(t.did))},background:{header:"white",body:"light-1",footer:"light-1"},pad:{vertical:"small",horizontal:"medium"},sort:{external:!0},onSort:function(e){var t=e.property,a=e.direction,c=u()(i).orderBy(t,a).value();s(c),O(c.slice(0,20)),f(1)}})})]})},q=function(e){var t=e.value,a=e.postfix;return Object(c.jsxs)(m.a,{direction:"row",gap:"xxsmall",align:"center",round:"xsmall",background:{color:t<0?"status-critical":"status-ok",opacity:"strong"},pad:{horizontal:"xsmall"},children:[t<0?Object(c.jsx)(L.a,{color:"white",size:"small"}):Object(c.jsx)(D.a,{color:"white",size:"small"}),Object(c.jsxs)(O.a,{size:"small",weight:"bold",color:"white",children:[Math.abs(t),a]})]})};q.defaultProps={postfix:""};var G=function(){var e=Object(r.useContext)(ge).stats;return Object(c.jsxs)(v,{margin:{vertical:"large"},children:[Object(c.jsx)(O.a,{size:"large",margin:{vertical:"small"},weight:"bold",children:"Today's Token Prices by Market Cap"}),Object(c.jsxs)(m.a,{direction:"row",gap:"xxsmall",children:[Object(c.jsxs)(O.a,{size:"small",children:["The global OCEAN market cap is"," ",Object(c.jsx)("strong",{children:y.format(e.totalMarketCap)}),", a"]}),Object(c.jsx)(q,{value:9.8,postfix:"%"}),Object(c.jsx)(O.a,{size:"small",children:"change over the last day."})]}),Object(c.jsx)(m.a,{margin:{bottom:"large",top:"medium"},children:Object(c.jsx)(H,{})})]})},K=a(143),Q=a(157),X=a(158),Y=a(159),Z=a(156),$=function(e){return Object(c.jsx)(Z.a,Object(g.a)({fill:!0,align:"start",justifyContent:"around",pad:"large",gap:"small"},e))},ee=function(){return Object(c.jsxs)($,{rows:["full"],columns:["60%","40%"],areas:[{name:"left",start:[0,0],end:[0,0]},{name:"right",start:[1,0],end:[1,0]}],children:[Object(c.jsx)(Q.a,{gridArea:"left",color:"neutral-2",onSelectPlace:function(e,t){},selectColor:"accent-2",hoverColor:"accent-4"}),Object(c.jsxs)(m.a,{gridArea:"right",alignContent:"start",children:[Object(c.jsx)(X.a,{level:"1",margin:"xsmall",children:"Oops. Page Not Found."}),Object(c.jsx)(X.a,{level:"2",margin:{horizontal:"none",vertical:"large"},children:"Lost?"}),Object(c.jsx)(Y.a,{as:j.A,icon:Object(c.jsx)(K.a,{}),label:"Back to HomeOld Page",href:"/dmc"})]})]})},te=a(151),ae=a(135),ce=a(138),re=a(136),ne=a(140),le=a(137),ie=a(77),se=a.n(ie),oe=a(144),de=function(e){var t=e.symbol,a=e.darkTheme,n=Object(r.useContext)(oe.a),l={alignLabels:!0,priceScale:{position:"left",mode:0,autoScale:!0},layout:{backgroundColor:n.global.colors["light-1"],textColor:n.dark?"#FBC2FF":"#3E5C76",fontSize:12,fontFamily:"Calibri"},grid:{vertLines:{color:n.global.colors.brand,style:1,visible:!0},horzLines:{color:n.global.colors.brand,style:1,visible:!0}},localization:{},timeScale:{rightOffset:8,fixLeftEdge:!0,lockVisibleTimeRangeOnResize:!0,rightBarStaysOnScroll:!0}},i=Object(r.useState)(),j=Object(d.a)(i,2),b=j[0],u=j[1],h=function(e){return e.prices.map((function(e){return{time:new Date(e[0]).toJSON(),value:e[1]}}))};return Object(r.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={lineColor:"#EF8275",bottomColor:"#54414E",topColor:"#F68D94",lineWidth:3,title:"".concat(t,"/USD")},e.next=3,fetch("https://api.coingecko.com/api/v3/coins/".concat(t.toLowerCase(),"/market_chart?vs_currency=usd&days=360&interval=daily"));case 3:e.sent.json().then((function(e){return u([{data:h(e),options:a}])})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsx)(se.a,{options:l,areaSeries:b,autoWidth:!0,darkTheme:a})},je=a(145),be=a(146),ue=a(147),he=a(148),me=function(e){var t=e.icon,a=e.value,r=e.href;return Object(c.jsxs)(m.a,{direction:"row",gap:"small",align:"center",children:[t,r?Object(c.jsx)(Y.a,{href:r,size:"small",target:"_blank",children:a}):Object(c.jsx)(O.a,{size:"small",truncate:!0,children:a})]})},Oe=function(e){var t=e.did,a=(Object(p.a)(e,["did"]),Object(r.useState)({})),n=Object(d.a)(a,2),l=n[0],i=n[1],j=Object(r.useState)(!0),b=Object(d.a)(j,2),u=b[0],h=b[1],x=Object(r.useState)(!1),g=Object(d.a)(x,2),f=g[0],k=g[1],w=function(e){return i(e)};return console.log("tokenDetails:",l),Object(r.useEffect)((function(){Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data-marketcap-backend.herokuapp.com/datatoken/".concat(t));case 2:e.sent.json().then((function(e){return w(e)})).then((function(){return h(!1)})).catch((function(e){return k(e)}));case 4:case"end":return e.stop()}}),e)})))()}),[t]),Object(c.jsx)(v,{margin:{vertical:"large"},children:u?Object(c.jsx)(O.a,{size:"small",children:"Loading..."}):f?Object(c.jsx)(O.a,{size:"small",children:"Error"}):Object(c.jsxs)(m.a,{direction:"row",margin:{vertical:"small"},gap:"large",children:[Object(c.jsxs)(m.a,{gap:"medium",width:{max:"500px",min:"500px"},children:[Object(c.jsxs)(m.a,{direction:"row",gap:"xsmall",align:"baseline",width:{max:"500px",min:"500px"},children:[Object(c.jsx)(O.a,{size:"large",weight:"bold",children:l.name}),Object(c.jsxs)(O.a,{color:"dark-6",size:"small",weight:"bold",children:["(",l.symbol,")"]})]}),Object(c.jsxs)(m.a,{children:[Object(c.jsx)(me,{icon:Object(c.jsx)(je.a,{size:"small"}),value:l.author}),Object(c.jsx)(me,{icon:Object(c.jsx)(be.a,{size:"small"}),value:new Date(l.createdAt).toLocaleString()}),Object(c.jsx)(me,{icon:Object(c.jsx)(ue.a,{size:"small"}),value:l.datasetName}),Object(c.jsx)(me,{icon:Object(c.jsx)(he.a,{size:"small"}),href:"https://etherscan.io/address/".concat(l.address),value:l.address})]}),Object(c.jsx)(m.a,{border:{color:"light-3",size:"small",side:"bottom"}}),Object(c.jsxs)(m.a,{children:[Object(c.jsx)(O.a,{size:"large",weight:"bold",children:"Description"}),Object(c.jsx)(te.a,{components:{p:{props:{size:"small"}}},children:l.description})]})]}),Object(c.jsxs)(m.a,{gap:"medium",flex:"grow",children:[Object(c.jsxs)(m.a,{direction:"row",gap:"medium",children:[Object(c.jsxs)(m.a,{direction:"row",gap:"xsmall",align:"baseline",children:[Object(c.jsx)(O.a,{size:"large",children:y.format(l.price)}),Object(c.jsx)(O.a,{color:"dark-6",size:"small",children:"(USD)"})]}),Object(c.jsxs)(m.a,{direction:"row",gap:"xsmall",align:"baseline",children:[Object(c.jsx)(O.a,{size:"large",children:S(l.priceOcean,"")}),Object(c.jsx)(O.a,{color:"dark-6",size:"small",children:"OCEAN"})]})]}),Object(c.jsx)(m.a,{align:"start",children:Object(c.jsxs)(ae.a,{children:[Object(c.jsx)(ce.a,{children:Object(c.jsxs)(re.a,{children:[Object(c.jsx)(ne.a,{scope:"col",border:"bottom",children:Object(c.jsx)(O.a,{size:"small",color:"dark-6",weight:"bold",children:"Market Cap"})}),Object(c.jsx)(ne.a,{scope:"col",border:"bottom",children:Object(c.jsx)(O.a,{size:"small",color:"dark-6",weight:"bold",children:"Circulating Supply"})})]})}),Object(c.jsx)(le.a,{children:Object(c.jsxs)(re.a,{children:[Object(c.jsx)(ne.a,{scope:"row",children:Object(c.jsxs)(m.a,{gap:"xsmall",children:[Object(c.jsx)(O.a,{weight:"bold",children:y.format(l.marketCap)}),Object(c.jsx)(O.a,{size:"small",color:"dark-6",children:S(l.marketCap*(l.price/l.priceOcean),"OCEAN")})]})}),Object(c.jsx)(ne.a,{children:Object(c.jsx)(O.a,{children:S(l.circulatingSupply,l.symbol)})})]})})]})}),Object(c.jsx)(m.a,{children:Object(c.jsx)(de,{symbol:"bitcoin"})})]})]})})},xe={"/":function(){return Object(c.jsx)(G,{})},"/dmc":function(){return Object(c.jsx)(G,{})},"/dmc/":function(){return Object(c.jsx)(G,{})},"/dmc/token/:did/":function(e){var t=e.did;return Object(c.jsx)(Oe,{did:t})},"/dmc/token/:did":function(e){var t=e.did;return Object(c.jsx)(Oe,{did:t})},"/token/:did/":function(e){var t=e.did;return Object(c.jsx)(Oe,{did:t})},"/token/:did":function(e){var t=e.did;return Object(c.jsx)(Oe,{did:t})}},ge=Object(r.createContext)({}),pe=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)({}),i=Object(d.a)(l,2),b=i[0],g=i[1],p=Object(r.useState)(!1),f=Object(d.a)(p,2),v=f[0],k=f[1],w=Object(j.useRoutes)(xe),C=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://data-marketcap-backend.herokuapp.com/datatokens");case 2:e.sent.json().then((function(e){n(u()(e[0]).orderBy("marketCap","desc").value());var t=e[1],a=t.dataTokensMarketCap,c=t.dataTokensVolume,r=t.oceanMarketCap,l=t.oceanPrice;g({totalTokens:e[0].length,oceanPrice:l,oceanMarketCap:r,dataTokensVolume:c,dataTokensVolumeInOcean:c/l,totalMarketCap:a,totalMarketCapInOcean:a/l})})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(b),Object(r.useEffect)((function(){return C()}),[]),Object(c.jsx)(h.a,{theme:x.grommet,cssVars:!0,full:!0,themeMode:v?"dark":"light",children:a.length>0?Object(c.jsxs)(ge.Provider,{value:{allTokenList:a,stats:b},children:[Object(c.jsx)(F,{dark:v,setDark:k}),Object(c.jsx)(m.a,{background:"light-1",children:w||Object(c.jsx)(ee,{})})]}):Object(c.jsx)(m.a,{height:"100vh",align:"center",justify:"center",children:Object(c.jsx)(O.a,{size:"small",children:"Loading..."})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,160)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),r(e),n(e),l(e)}))};l.a.render(Object(c.jsx)(pe,{}),document.getElementById("root")),fe()}},[[116,1,2]]]);
//# sourceMappingURL=main.79451fc0.chunk.js.map