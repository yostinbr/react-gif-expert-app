(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),o=n(0),u=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,c,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.giphy.com/v1/gifs/","N5SS9KbLBisQvDvbuqm8Dtrz2fllSRxn",n="".concat(encodeURI(e)),t.next=5,fetch("".concat("https://api.giphy.com/v1/gifs/","search?q=").concat(n,"&api_key=").concat("N5SS9KbLBisQvDvbuqm8Dtrz2fllSRxn"));case 5:return c=t.sent,t.next=8,c.json();case 8:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__jackInTheBox",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),1500)}))}),[t]),r}(e),r=n.data,a=n.loading;return console.log(a),Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)("h3",{children:e}),a&&Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"spinner-border",role:"status",children:Object(o.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(f,Object(j.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["Naruto"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Gif Expert App"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(h,{category:t},t)}))})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e521735e.chunk.js.map