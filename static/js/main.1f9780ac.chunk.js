(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{70:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(32),a=t.n(c),o=t(38),s=t(2),l=t(1);function i(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["\xa9 jongomezdev ",(new Date).getFullYear()]})})}var b,d,j=t(13),h=t(14),u=Object(h.a)(b||(b=Object(j.a)(["\n\n:root {\n    --blue: #190087;\n    --white: #fff;\n    --grey: #efefef;\n  }\n\nbody {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\nbutton {\n  margin-left: 1rem;\n  border: none;\n  background: transparent;\n  color: var(--white);\n}\n\nbutton:hover {\n  background-color: var(--grey);\n  color: #3e00b3;\n}\n\n /* Scrollbar Styles */\n body::-webkit-scrollbar {\n    width: 20px;\n  }\n  html {\n    scrollbar-width: thin;\n    scrollbar-color: var(--blue) var(--white);\n  }\n  body::-webkit-scrollbar-track {\n    background: var(--white);\n  }\n  body::-webkit-scrollbar-thumb {\n    background-color: var(--blue) ;\n    border-radius: 6px;\n    border: 3px solid var(--white);\n  }\n\nh1 {\n  font-size: 3rem;\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n}\n\nimg {\n  border-radius: 50%;\n  border: 4px solid #fff;\n\n}\n\n.header {\n  background-color: #3e00b3;\n  color: #fff;\n}\n\n"]))),f=(t(46),t(39)),x=t(18),p=t.n(x),m=t(36),O=t(21),g=t(37),v=t.n(g),w=h.b.div(d||(d=Object(j.a)(["\n  table {\n    font-family: Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n  }\n\n  table td,\n  table th {\n    border: 1px solid #ddd;\n    padding: 8px;\n  }\n\n  table tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n\n  table tr:hover {\n    background-color: #ddd;\n  }\n\n  table th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: center;\n    background-color: #3e00b3;\n    color: white;\n  }\n"])));function y(e){return Object(l.jsx)(w,{children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col"}),Object(l.jsxs)("th",{scope:"col",children:["First, Last"," ",Object(l.jsx)("button",{onClick:e.sortByName,children:Object(l.jsx)("i",{className:"fas fa-sort-alpha-down"})})]}),Object(l.jsx)("th",{scope:"col",children:"Location"}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"Phone"})]})}),Object(l.jsx)("tbody",{children:e.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:Object(l.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first})}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.location.state}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.cell})]},e.login.uuid)}))})]})})}var k=function(e){return Object(l.jsx)("form",{children:Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"search",children:"Search by name: "}),Object(l.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a User",id:"search"})]})})},C=function(){var e=Object(r.useState)([]),n=Object(O.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),o=Object(O.a)(a,2),s=o[0],i=o[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://randomuser.me/api/?results=50&nat=us");case 2:n=e.sent,i(n.data.results),c(n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{handleInputChange:function(e){var n=e.target.value;i(t.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>-1||e.name.last.toLowerCase().indexOf(n.toLowerCase())>-1})))}}),Object(l.jsx)(y,{data:s,sortByName:function(){var e=s.sort((function(e,n){return e.name.first<n.name.first?-1:e.name.first>n.name.first?1:0}));i(Object(f.a)(e))}})]})};function N(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("h1",{children:"Employee Directory"})})}function L(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/",component:C}),Object(l.jsx)(N,{}),Object(l.jsx)(C,{}),Object(l.jsx)(i,{})]})]})}t(69);a.a.render(Object(l.jsx)(L,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1f9780ac.chunk.js.map