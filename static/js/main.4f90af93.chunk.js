(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{14:function(t,n,e){"use strict";e.r(n);var c=e(4),a=e.n(c),o=e(5),r=e(6),u=e(8),s=e(7),i=e(1),d=e.n(i),j=(e(3),e(0)),b=function(t){var n=t.action,e=t.text;return Object(j.jsx)("button",{type:"button",className:"Counter__button",onClick:n,children:e})},l=function(t){Object(u.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(o.a)(this,e);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=n.call.apply(n,[this].concat(a))).state={count:0},t.addOne=function(){t.state.count+=1,t.setState((function(t){return{count:t.count}}))},t.add100=function(){t.state.count+=100,t.setState((function(t){return{count:t.count}}))},t.increase=function(){t.addOne(),(t.state.count-1)%5===0&&t.add100(),t.setState((function(t){return{count:t.count}}))},t}return Object(r.a)(e,[{key:"render",value:function(){var t=this.state.count,n=this.addOne,e=this.add100,c=this.increase;return Object(j.jsxs)("div",{className:"Counter",children:[Object(j.jsx)("h1",{className:"Counter__title",children:"Count: ".concat(t)}),Object(j.jsxs)("div",{className:"Counter__buttons",children:[Object(j.jsx)(b,{action:n,text:"Add 1"}),Object(j.jsx)(b,{action:e,text:"Add 100"}),Object(j.jsx)(b,{action:c,text:"Increase"})]})]})}}]),e}(d.a.Component);a.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))},3:function(t,n,e){}},[[14,1,2]]]);
//# sourceMappingURL=main.4f90af93.chunk.js.map