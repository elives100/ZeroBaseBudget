(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f09d4330"],{"1f13":function(t,e,s){},"3cf1":function(t,e,s){},"586a":function(t,e,s){"use strict";var n=s("1f13"),a=s.n(n);a.a},"5a4c":function(t,e,s){t.exports=s.p+"img/budget1.83c1f3a4.jpg"},"7a11":function(t,e,s){"use strict";var n=s("3cf1"),a=s.n(n);a.a},a977:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontPage"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row title"},[n("h3",[t._v(t._s(t.userInfo.name))])]),n("div",{staticClass:"row pageBody"},[n("div",{staticClass:"col-6 left"},[n("img",{staticClass:"mb-4",attrs:{src:s("5a4c"),width:"200"}}),n("instructions")],1),n("div",{staticClass:"col-6 right"},[n("budget-form")],1)])])])},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app"},[s("h1",[t._v("Budget Form")]),s("div",{staticClass:"container mt-5 pt-2"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"monthlypay"}},[t._v("Monthly pay")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.earnings,expression:"earnings"},{name:"int",rawName:"v-int"}],staticClass:"w-10",attrs:{type:"number",name:"monthlypay",id:"monthlypay"},domProps:{value:t.earnings},on:{input:function(e){e.target.composing||(t.earnings=e.target.value)}}})]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"form-group col-md-12 col-sm-12 addDelete"},[s("button",{staticClass:"btn addExpense",attrs:{type:"button"},on:{click:t.addInputs}},[t._v(" Add ")]),t.expenses.length>1?s("button",{staticClass:"btn deleteInput ml-1",attrs:{type:"button"},on:{click:t.deleteInputs}},[t._v(" Delete ")]):t._e()]),t._l(t.expenses,(function(e,n){return s("div",{key:n,staticClass:"row inputRow"},[s("div",{staticClass:"col-md-6 col-sm-6 mb-1"},[s("input",{staticClass:"form-control",attrs:{placeholder:"Expense",type:"text"},domProps:{value:e.expensesKey},on:{input:function(e){return t.updateKey(e,n)}}})]),s("div",{staticClass:"col-md-6 col-sm-6"},[s("input",{directives:[{name:"int",rawName:"v-int"}],staticClass:"form-control",attrs:{placeholder:"Amount",type:"number"},domProps:{value:e.expensesValue},on:{input:function(e){return t.updateValue(e,n)}}})])])})),s("div",{staticClass:"submit py-3"},[s("div",{staticClass:"row"},[s("button",{staticClass:"btn submitButton",attrs:{type:"submit"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submitBudget(e)}}},[t._v(" Submit ")])])])],2)])])])},o=[],r={name:"form",data:function(){return{}},methods:{addInputs:function(){this.$store.commit("ADD_EXPENSEINPUT")},deleteInputs:function(){this.$store.commit("DELETE_EXPENSEINPUT")},submitBudget:function(){this.$store.dispatch("addBudget"),console.log("triggers")},updateKey:function(t,e){var s={expenseKeyValue:t.target.value,index:e};this.$store.commit("UPDATE_KEYS",s)},updateValue:function(t,e){var s={expenseValueValue:t.target.value,index:e};this.$store.commit("UPDATE_VALUE",s)}},computed:{expenses:function(){return this.$store.state.expenses},earnings:{get:function(){return this.$store.state.earnings},set:function(t){this.$store.commit("UPDATE_EARNINGS",t)}}}},u=r,c=(s("586a"),s("2877")),l=Object(c["a"])(u,i,o,!1,null,"4bea3c48",null),d=l.exports,p=s("ded0"),m={components:{"budget-form":d,instructions:p["a"]},data:function(){return{}},mounted:function(){this.$store.dispatch("loadExpenses")},computed:{userInfo:function(){return this.$store.state.expenseProfile}}},f=m,v=(s("7a11"),Object(c["a"])(f,n,a,!1,null,"e496bb56",null));e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-f09d4330.aea40fe4.js.map