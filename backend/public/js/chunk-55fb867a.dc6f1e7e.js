(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55fb867a"],{"1dde":function(e,t,n){var s=n("d039"),i=n("b622"),o=i("species");e.exports=function(e){return!s((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"42bf":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e.errored?n("div",[n("p",[e._v(" We're sorry, we're not able to process your request, please try back later ")])]):n("div",[n("div",{staticClass:"container"}),n("h1",{staticClass:"pt-4"},[e._v("My Budget")]),n("hr"),n("div",{staticClass:"container monthly"},[n("p",{staticClass:"mt-2 myincome"},[e._v("Montly Income")]),n("p",[e._v("$"+e._s(e.earnings))])]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"addContainer mb-2"},[e.editButton?n("button",{staticClass:"btn editBtn",attrs:{type:"button"},on:{click:function(t){e.editButton=!e.editButton}}},[e._v(" Edit ")]):e._e(),e.editButton?e._e():n("button",{staticClass:"addButton mr-5 btn",on:{click:function(t){return e.addExpense()}}},[e._v(" + ")]),e.editButton?e._e():n("button",{staticClass:"deleteButton btn ",on:{click:function(t){return e.deleteExpense(e.idx)}}},[e._v(" - ")])]),n("div",{staticClass:"row"},e._l(e.myExpenses,(function(t,s){return n("div",{key:s,staticClass:"column col-lg-4 col-md-4 mb-3"},[n("expense-panel",{attrs:{expense:t,myExpenses:e.myExpenses,showInput:e.showInput,showDelete:e.showDelete},on:{deleteOne:function(t){return e.deleteFinalized(s)}},model:{value:t.expensesValue,callback:function(n){e.$set(t,"expensesValue",e._n(n))},expression:"expense.expensesValue"}},[e.showInput&&s===e.myExpenses.length-1?n("input",{directives:[{name:"model",rawName:"v-model",value:t.expensesKey,expression:"expense.expensesKey"}],staticClass:"inputKey",attrs:{slot:"inputKey",placeholder:"Expense Name",type:"text",name:"newInput"},domProps:{value:t.expensesKey},on:{input:function(n){n.target.composing||e.$set(t,"expensesKey",n.target.value)}},slot:"inputKey"}):e._e(),e.showInput&&s===e.myExpenses.length-1?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.expensesValue,expression:"expense.expensesValue",modifiers:{number:!0}}],staticClass:"inputValue",attrs:{slot:"inputValue",placeholder:"Expense Amount",type:"number",name:"newInput"},domProps:{value:t.expensesValue},on:{input:function(n){n.target.composing||e.$set(t,"expensesValue",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}},slot:"inputValue"}):e._e()]),e.showInput&&s===e.myExpenses.length-1?n("button",{staticClass:"confirmBtn btn ",attrs:{slot:"confirmButton"},on:{click:function(t){return e.confirmExpense(s)}},slot:"confirmButton"},[e._v(" Confirm ")]):e._e()],1)})),0)]),n("div",{staticClass:"mt-5"},[n("button",{staticClass:"btn deleteAll",on:{click:function(t){return e.deleteBudget()}}},[e._v(" Delete All ")])]),n("br"),n("button",{staticClass:"btn submitButton",attrs:{disabled:e.myExpenses.length<1,type:"submit"},on:{click:function(t){return e.submitBudget()}}},[e._v(" Submit ")])])])},i=[],o=(n("13d5"),n("a434"),n("a9e3"),n("bc3a")),r=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",class:{deleteMe:e.showDelete,highlightIt:e.hover},on:{mouseover:function(t){e.hover=e.showDelete},mouseleave:function(t){e.hover=!1},click:function(t){!e.deleteExpense(e.expense)||e.showDelete}}},[n("div",{staticClass:"card-header"},[e._v(" "+e._s(e.expense.expensesKey)+" "),n("br"),e._t("inputKey")],2),n("hr"),n("div",{staticClass:"card-body"},[e._v(e._s(e.expense.expensesValue))]),n("div",{staticClass:"blue"},[e._t("inputValue")],2),n("br"),e._t("confirmButton")],2)},u=[],c={props:{expense:Object,myExpenses:Array,showDelete:Boolean},data:function(){return{hover:!1}},methods:{deleteExpense:function(e){this.$emit("deleteOne",e)},addExpense:function(e){this.$emit("addOne",e)}}},l=c,p=(n("f1d5"),n("2877")),d=Object(p["a"])(l,a,u,!1,null,"1a70da2c",null),f=d.exports,h={components:{"expense-panel":f},name:"myBudget",data:function(){return{myExpenses:[],earnings:null,identifier:"",errored:"",showInput:!1,showDelete:!1,showSubmit:!1,editButton:!0}},methods:{deleteExpense:function(){this.showDelete=!this.showDelete},deleteFinalized:function(e){!0===this.showDelete&&confirm("Are you sure you want to delete expense. You can not undo changes")&&(this.myExpenses.splice(e,1),this.showDelete=!1,this.earnings=this.addAllExpenses)},addExpense:function(){this.myExpenses.push({expensesKey:"",expensesValue:null,subExpense:null}),this.showInput=!0,this.showDelete=!1},confirmExpense:function(){this.showInput=!1,this.earnings=this.addAllExpenses},deleteBudget:function(){var e=this;r.a.post("/api/budget/delete",{id:this.identifier}).then((function(){e.$router.push("/userprofile")}))},submitBudget:function(){var e=this;r.a.put("/api/budget",{id:this.identifier,earning:this.earnings,expense:this.myExpenses}).then((function(){e.$router.push("/userprofile")})).catch((function(t){e.errored2=!0,e.errored=t}))}},computed:{addAllExpenses:function(){return this.myExpenses.reduce((function(e,t){return e+=Number(t.expensesValue),e}),0)}},beforeRouteEnter:function(e,t,n){r.a.get("/api/budget",{headers:{"Content-Type":"application/json"},withCredentials:!0}).then((function(e){n((function(t){t.identifier=e.data._id,t.myExpenses=e.data.budget[0].expenses,t.earnings=e.data.budget[0].earnings}))})).catch((function(e){n((function(t){console.log(e.response),t.errored=!0}))}))}},m=h,x=(n("fa74"),Object(p["a"])(m,s,i,!1,null,"6d4b92de",null));t["default"]=x.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var s=n("1d80"),i=n("5899"),o="["+i+"]",r=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(e){return function(t){var n=String(s(t));return 1&e&&(n=n.replace(r,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(e,t,n){var s=n("861d"),i=n("e8b5"),o=n("b622"),r=o("species");e.exports=function(e,t){var n;return i(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?s(n)&&(n=n[r],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},7156:function(e,t,n){var s=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,r;return i&&"function"==typeof(o=t.constructor)&&o!==n&&s(r=o.prototype)&&r!==n.prototype&&i(e,r),e}},8418:function(e,t,n){"use strict";var s=n("c04e"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var r=s(t);r in e?i.f(e,r,o(0,n)):e[r]=n}},"867a":function(e,t,n){},a434:function(e,t,n){"use strict";var s=n("23e7"),i=n("23cb"),o=n("a691"),r=n("50c4"),a=n("7b0b"),u=n("65f0"),c=n("8418"),l=n("1dde"),p=Math.max,d=Math.min,f=9007199254740991,h="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!l("splice")},{splice:function(e,t){var n,s,l,m,x,v,b=a(this),y=r(b.length),g=i(e,y),E=arguments.length;if(0===E?n=s=0:1===E?(n=0,s=y-g):(n=E-2,s=d(p(o(t),0),y-g)),y+n-s>f)throw TypeError(h);for(l=u(b,s),m=0;m<s;m++)x=g+m,x in b&&c(l,m,b[x]);if(l.length=s,n<s){for(m=g;m<y-s;m++)x=m+s,v=m+n,x in b?b[v]=b[x]:delete b[v];for(m=y;m>y-s+n;m--)delete b[m-1]}else if(n>s)for(m=y-s;m>g;m--)x=m+s-1,v=m+n-1,x in b?b[v]=b[x]:delete b[v];for(m=0;m<n;m++)b[m+g]=arguments[m+2];return b.length=y-s+n,l}})},a9e3:function(e,t,n){"use strict";var s=n("83ab"),i=n("da84"),o=n("94ca"),r=n("6eeb"),a=n("5135"),u=n("c6b6"),c=n("7156"),l=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,h=n("06cf").f,m=n("9bf2").f,x=n("58a8").trim,v="Number",b=i[v],y=b.prototype,g=u(d(y))==v,E=function(e){var t,n,s,i,o,r,a,u,c=l(e,!1);if("string"==typeof c&&c.length>2)if(c=x(c),t=c.charCodeAt(0),43===t||45===t){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+c}for(o=c.slice(2),r=o.length,a=0;a<r;a++)if(u=o.charCodeAt(a),u<48||u>i)return NaN;return parseInt(o,s)}return+c};if(o(v,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(g?p((function(){y.valueOf.call(n)})):u(n)!=v)?c(new b(E(t)),n,_):E(t)},I=s?f(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)a(b,w=I[C])&&!a(_,w)&&m(_,w,h(b,w));_.prototype=y,y.constructor=_,r(i,v,_)}},e8b5:function(e,t,n){var s=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==s(e)}},f1d5:function(e,t,n){"use strict";var s=n("f70a"),i=n.n(s);i.a},f70a:function(e,t,n){},fa74:function(e,t,n){"use strict";var s=n("867a"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-55fb867a.dc6f1e7e.js.map