(this["webpackJsonpReact-Expense"]=this["webpackJsonpReact-Expense"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),s=n.n(c),l=(n(14),n(5)),i=n(2),r=(n(15),n(16),n(0)),j=function(e){var t=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:t})]})};n(18);var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},o=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},d=(n(19),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:Object(r.jsx)("p",{children:"No expenses found"})}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(o,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),b=(n(20),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by Year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=n(9),O=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label"})]})}),v=(n(22),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},p=(n(23),function(e){var t=Object(a.useState)("2021"),n=Object(i.a)(t,2),c=n[0],s=n[1],l=e.expenses.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(b,{selected:c,onChangeFilter:function(e){s(e)}}),Object(r.jsx)(h,{expenses:l}),Object(r.jsx)(d,{items:l})]})})}),m=n(7),f=(n(24),n(25),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),u=j[0],o=j[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+u,date:new Date(x)};e.onSaveExpenseData(n),o(""),O(""),s("")},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new_expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new_expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new_expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2018-01-01",max:"2030-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),_=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),c&&Object(r.jsx)(f,{onSaveExpenseData:function(t){var n=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),s(!1)},onCancel:function(){s(!1)}})]})},N=(n(26),[{id:"e1",title:"Toilet Paper",amount:20,date:new Date(2021,2,22)},{id:"e2",title:"Car Insurance",amount:200,date:new Date(2021,1,4)},{id:"e3",title:"Food",amount:100,date:new Date(2020,4,5)},{id:"e4",title:"Soap",amount:10,date:new Date(2020,5,4)}]),g=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(p,{expenses:n})]})};s.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.dc18cdf5.chunk.js.map