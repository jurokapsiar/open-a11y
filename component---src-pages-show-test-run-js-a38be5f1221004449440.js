(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{xREa:function(e,t,n){"use strict";n.r(t);n("pJf4");var a=n("q1tI"),r=n.n(a),l=n("juxs"),c=n("Bl7J"),m=function(e){var t=e.state,n=t.name,a=t.component,m=t.variantName,o=t.run,i=t.testKey,u=t.mode,s=o.scenarios,d=o.environment,E={};return Object(l.a)(a,m,u).map((function(e){return E[e.key]=e})),r.a.createElement(c.a,null,r.a.createElement("h1",null,"Test run ",n," ",a),r.a.createElement("div",{style:{padding:".5rem",margin:".5rem",background:"#eee"}},r.a.createElement("div",null,"Variant: ",m),r.a.createElement("div",null,"Test key: ",i),r.a.createElement("div",null,"Environment: ",d.browser," ",d.browserVersion," / ",d.reader," ",d.readerVersion)),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{key:"head"},r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Expected"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Narration"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,s.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{key:"description"},E[e.key].description),r.a.createElement("td",{key:"expected"},E[e.key].expected),r.a.createElement("td",{key:"status"},e.passed?"PASSED":"FAILED"),r.a.createElement("td",{key:"naration"},e.narration),r.a.createElement("td",{key:"notes"},e.notes))})))))};t.default=function(e){var t=e.location.state;return t?r.a.createElement(m,{state:t}):r.a.createElement("div",null,"Error: state not defined")}}}]);
//# sourceMappingURL=component---src-pages-show-test-run-js-a38be5f1221004449440.js.map