(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),l=c.n(b),d=c(0),r=function(t){var e=t.tab,c=t.isActive,a=t.handleTabClick;return Object(d.jsx)("li",{className:l()({"is-active":c}),"data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(e.id),"data-cy":"TabLink",onClick:a,children:e.title})})},o=function(t){var e=t.tabs,c=t.selectedTab,a=t.handleTabClick;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)(r,{tab:t,isActive:c.id===t.id,handleTabClick:function(){return a(t)}},t.id)}))})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0]),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsxs)("h1",{className:"title",children:["Selected tab is"," ",c.title]}),Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)(o,{tabs:j,selectedTab:c,handleTabClick:function(t){a(t)}})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})]})};n.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8be416a2.chunk.js.map