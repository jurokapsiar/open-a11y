(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{xREa:function(e,t,a){"use strict";a.r(t);a("pJf4");var n=a("q1tI"),l=a.n(n),r=a("juxs"),c=a("Bl7J");t.default=function(e){var t=e.location.state,a=t.name,n=t.component,m=t.variantName,u=t.steps,i=t.testKey,d=t.mode,E={};return Object(r.a)(n,m,d).map((function(e){return E[e.key]=e})),l.a.createElement(c.a,null,l.a.createElement("h1",null,"Test run ",a," ",n),l.a.createElement("div",{style:{padding:".5rem",margin:".5rem",background:"#eee"}},l.a.createElement("div",null,"Variant: ",m),l.a.createElement("div",null,"Test key: ",i)),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{key:"head"},l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Expected"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Narration"))),l.a.createElement("tbody",null,u.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{key:"description"},E[e.key].description),l.a.createElement("td",{key:"expected"},E[e.key].expected),l.a.createElement("td",{key:"status"},e.passed?"PASSED":"FAILED"),l.a.createElement("td",{key:"naration"},e.narration))})))))}}}]);
//# sourceMappingURL=component---src-pages-show-test-run-js-9855bfa7070037115bad.js.map