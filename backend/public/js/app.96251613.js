(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f3bf7feb","chunk-46ca1692":"625585e1","chunk-0ef5a388":"ecbaaca0","chunk-b8d8de7a":"97dd7041","chunk-ce183e5c":"526d8d4e"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,"chunk-0ef5a388":1,"chunk-b8d8de7a":1,"chunk-ce183e5c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"510e536f","chunk-46ca1692":"31d6cfe0","chunk-0ef5a388":"8e4be477","chunk-b8d8de7a":"23453e9c","chunk-ce183e5c":"c9967444"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},5597:function(e,t,n){"use strict";var r=n("96db"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("034f"),n("2877")),i={},u=Object(c["a"])(i,o,a,!1,null,null,null),s=u.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f");r["a"].use(d["a"]);var f=[{path:"/",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/userprofile",name:"userProfile",component:function(){return Promise.all([n.e("chunk-46ca1692"),n.e("chunk-0ef5a388")]).then(n.bind(null,"f6b46"))},meta:{requireAuth:!0}},{path:"/budgetform",name:"form",component:function(){return Promise.all([n.e("chunk-46ca1692"),n.e("chunk-ce183e5c")]).then(n.bind(null,"4f9a"))},meta:{requireAuth:!0}},{path:"/mybudget",name:"myBudget",component:function(){return Promise.all([n.e("chunk-46ca1692"),n.e("chunk-b8d8de7a")]).then(n.bind(null,"42bf"))},meta:{requireAuth:!0}}],h=new d["a"]({mode:"history",base:"/",routes:f}),p=h,b=(n("4989"),n("ab8b"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"card-deck"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header "},[n("h5",[e._v("Write Down Your Total Income")])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[e._v(" This is your total take-home pay. Include everything such as full-time jobs, second jobs, freelance pay, Social Security checks etc. ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header "},[n("h5",[e._v("List Your Expense")])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[e._v(" Think about your bills that are due for the month. Plus other costs like groceries, entertainment, clothing, etc. ")])])]),n("div",{staticClass:"card"},[n("div",{staticClass:"card-header "},[n("h5",[e._v("Submit")])]),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[e._v(" Once your income minus your expenditures equals zero by the end of the month ")])])])])])}],v={name:"panel",data:function(){return{}}},g=v,y=(n("5597"),Object(c["a"])(g,b,m,!1,null,"4d741ffe",null)),k=y.exports;r["a"].component("panel",k),r["a"].config.productionTip=!1,new r["a"]({router:p,render:function(e){return e(s)}}).$mount("#app")},"85ec":function(e,t,n){},"96db":function(e,t,n){}});
//# sourceMappingURL=app.96251613.js.map