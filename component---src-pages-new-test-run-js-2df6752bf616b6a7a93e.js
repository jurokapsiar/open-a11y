(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"53Da":function(e,t,r){"use strict";r.r(t);r("pJf4"),r("E5k/"),r("rzGZ"),r("Dq+y"),r("8npG");var n=r("q1tI"),a=r.n(n),u=(r("m210"),r("cFtU"),r("R48M"),r("n0hJ"),r("zGcK"),r("1dPr"),r("4DPX"),r("cxuS"),r("Ll4R"),r("6kNP"),r("gu/5"),r("eoYm"),r("YbXK"),r("ToIb"),r("wZFJ"),r("sc67"),r("nHqZ")),i=r.n(u);r("q8oJ"),r("C9fy"),r("n7j8"),r("ls82");function c(e,t,r,n,a,u,i){try{var c=e[u](i),o=c.value}catch(s){return void r(s)}c.done?t(o):Promise.resolve(o).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){c(u,n,a,i,o,"next",e)}function o(e){c(u,n,a,i,o,"throw",e)}i(void 0)}))}}r("klQ5"),r("v9g0"),r("TAD1");function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function f(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r("AqHK"),r("JHok"),r("Ggvi"),r("HQhv"),r("OeI1");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(o){a=!0,u=o}finally{try{n||null==c.return||c.return()}finally{if(a)throw u}}return r}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r("PZd/"),r("U6Bt"),r("sC2a"),r("MIFh");var h=function(e){return null==e},b=function(e){return Array.isArray(e)},p=function(e){return"object"==typeof e},m=function(e){return!h(e)&&!b(e)&&p(e)},y=function(e){return m(e)&&e.nodeType===Node.ELEMENT_NODE},g="onBlur",O="onChange",j="onSubmit",k="blur",w="change",x="input",E="max",S="min",R="maxLength",V="minLength",L="pattern",C="required",F="validate",N=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A=/^\w*$/,P=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,B=/\\(\\)?/g;function D(e){var t=e.field.ref,r=e.handleChange,n=e.isRadioOrCheckbox;y(t)&&r&&(t.addEventListener(n?w:x,r),t.addEventListener(k,r))}var M=function(e){return!b(e)&&(A.test(e)||!N.test(e))},_=function(e){var t=[];return e.replace(P,(function(e,r,n,a){t.push(n?a.replace(B,"$1"):r||e)})),t};function T(e,t,r){for(var n=-1,a=M(t)?[t]:_(t),u=a.length,i=u-1;++n<u;){var c=a[n],o=r;if(n!==i){var s=e[c];o=m(s)||b(s)?s:isNaN(+a[n+1])?{}:[]}e[c]=o,e=e[c]}return e}var G=function(e){return Object.entries(e).reduce((function(e,t){var r=v(t,2),n=r[0],a=r[1];return M(n)?Object.assign(Object.assign({},e),d({},n,a)):(T(e,n,a),e)}),{})},I=function(e){return void 0===e},J=function(e,t,r){var n=t.split(/[,[\].]+?/).filter(Boolean).reduce((function(e,t){return h(e)?e:e[t]}),e);return I(n)||n===e?I(e[t])?r:e[t]:n},W=function(e,t){for(var r in e)if(J(t,r)){var n=e[r];if(n){if(n.ref.focus){n.ref.focus();break}if(n.options){n.options[0].ref.focus();break}}}},q=function(e,t){y(e)&&e.removeEventListener&&(e.removeEventListener(x,t),e.removeEventListener(w,t),e.removeEventListener(k,t))},z=function(e){return"radio"===e.type},H=function(e){return"checkbox"===e.type};function U(e){return!e||e instanceof HTMLElement&&e.nodeType!==Node.DOCUMENT_NODE&&U(e.parentNode)}var Z=function(e){return m(e)&&!Object.keys(e).length};function $(e){return b(e)?e:_(e)}function K(e,t){return 1==t.length?e:function(e,t){for(var r=M(t)?[t]:$(t),n=t.length,a=0;a<n;)e=I(e)?a++:e[r[a++]];return a==n?e:void 0}(e,function(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(r=r>a?a:r)<0&&(r+=a),a=t>r?0:r-t;for(var u=Array(a);++n<a;)u[n]=e[n+t];return u}(t,0,-1))}function Y(e,t){return t.forEach((function(t){!function(e,t){for(var r=M(t)?[t]:$(t),n=K(e,r),a=r[r.length-1],u=!(null!=n)||delete n[a],i=void 0,c=0;c<r.slice(0,-1).length;c++){var o=-1,s=void 0,l=r.slice(0,-(c+1)),f=l.length-1;for(c>0&&(i=e);++o<l.length;){var d=l[o];s=s?s[d]:e[d],f===o&&(m(s)&&Z(s)||b(s)&&!s.filter((function(e){return m(e)&&!Z(e)})).length)&&(i?delete i[d]:delete e[d]),i=s}}}(e,t)})),e}var Q=function(e,t){return e&&e.ref===t};function X(e,t,r,n){var a=r.ref,u=r.ref,i=u.name,c=u.type,o=r.mutationWatcher,s=e[i];if(c)if((z(a)||H(a))&&s){var l=s.options;b(l)&&l.length?(l.filter(Boolean).forEach((function(e,r){var a=e.ref,u=e.mutationWatcher;(a&&U(a)&&Q(e,a)||n)&&(q(a,t),u&&u.disconnect(),Y(l,["[".concat(r,"]")]))})),l&&!l.filter(Boolean).length&&delete e[i]):delete e[i]}else(U(a)&&Q(s,a)||n)&&(q(a,t),o&&o.disconnect(),delete e[i]);else delete e[i]}var ee={isValid:!1,value:""},te=function(e){return b(e)?e.reduce((function(e,t){return t&&t.ref.checked?{isValid:!0,value:t.ref.value}:e}),ee):ee},re=function(e){return"file"===e.type},ne=function(e){return e.type==="".concat("select","-multiple")},ae=function(e){return""===e},ue={value:!1,isValid:!1},ie={value:!0,isValid:!0},ce=function(e){if(b(e)){if(e.length>1){var t=e.filter((function(e){return e&&e.ref.checked})).map((function(e){return e.ref.value}));return{value:t,isValid:!!t.length}}var r=e[0].ref,n=r.checked,a=r.value,u=r.attributes;return n?u&&!I(u.value)?I(a)||ae(a)?ie:{value:a,isValid:!0}:ie:ue}return ue};function oe(e,t){var r=t.name,n=t.value,a=e[r];return re(t)?t.files:z(t)?a?te(a.options).value:"":ne(t)?f(t.options).filter((function(e){return e.selected})).map((function(e){return e.value})):H(t)?!!a&&ce(a.options).value:n}var se=function(e){return"string"==typeof e},le=function(e,t){var r={},n=function(n){(I(t)||(se(t)?n.startsWith(t):b(t)?t.find((function(e){return n.startsWith(e)})):t&&t.nest))&&(r[n]=oe(e,e[n].ref))};for(var a in e)n(a);return r},fe=function(e,t){var r=t.type,n=t.types,a=t.message;return m(e)&&e.type===r&&e.message===a&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every((function(r){return t[r]&&t[r]===e[r]}))}(e.types,n)};function de(e){var t=e.errors,r=e.name,n=e.error,a=e.validFields,u=e.fieldsWithValidation,i=Z(n),c=Z(t),o=J(n,r),s=J(t,r);return!(i&&a.has(r)||s&&s.isManual)&&(!!(c!==i||!c&&!s||i&&u.has(r)&&!a.has(r))||o&&!fe(s,o))}var ve=function(e){return e instanceof RegExp},he=function(e){var t;return m(t=e)&&!ve(t)?e:{value:e,message:""}},be=function(e){return"function"==typeof e},pe=function(e){return"boolean"==typeof e},me=function(e){return se(e)||m(e)&&Object(n.isValidElement)(e)};function ye(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(me(e)||pe(e)&&!e)return{type:r,message:me(e)?e:"",ref:t}}var ge=function(e,t,r,n,a){if(t){var u=r[e];return Object.assign(Object.assign({},u),{types:Object.assign(Object.assign({},u&&u.types?u.types:{}),d({},n,a||!0))})}return{}},Oe=function(){var e=o(i.a.mark((function e(t,r,n){var a,u,c,o,s,l,f,d,b,p,y,g,O,j,k,w,x,N,A,P,B,D,M,_,T,G,I,J,W,q,U,$,K,Y,Q,X,ee,re,ne,ue,ie,le,fe,de,Oe,je,ke,we,xe,Ee,Se,Re,Ve,Le,Ce,Fe,Ne,Ae,Pe;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.ref,u=n.ref,c=u.type,o=u.value,s=u.name,l=n.options,f=n.required,d=n.maxLength,b=n.minLength,p=n.min,y=n.max,g=n.pattern,O=n.validate,k=t.current,w={},x=z(a),N=H(a),A=x||N,P=ae(o),B=ge.bind(null,s,r,w),D=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:V,c=e?t:n;if(w[s]=Object.assign({type:e?u:i,message:c,ref:a},B(e?u:i,c)),!r)return w},!f||!(!x&&!N&&(P||h(o))||pe(o)&&!o||N&&!ce(l).isValid||x&&!te(l).isValid)){e.next=15;break}if(M=me(f)?{value:!!f,message:f}:he(f),_=M.value,T=M.message,!_){e.next=15;break}if(w[s]=Object.assign({type:C,message:T,ref:A?null===(j=k[s].options)||void 0===j?void 0:j[0].ref:a},B(C,T)),r){e.next=15;break}return e.abrupt("return",w);case 15:if(h(p)&&h(y)){e.next=23;break}if(J=he(y),W=J.value,q=J.message,U=he(p),$=U.value,K=U.message,"number"===c||!c&&!isNaN(o)?(Y=a.valueAsNumber||parseFloat(o),h(W)||(G=Y>W),h($)||(I=Y<$)):(Q=a.valueAsDate||new Date(o),se(W)&&(G=Q>new Date(W)),se($)&&(I=Q<new Date($))),!G&&!I){e.next=23;break}if(D(!!G,q,K,E,S),r){e.next=23;break}return e.abrupt("return",w);case 23:if(!se(o)||P||!d&&!b){e.next=33;break}if(X=he(d),ee=X.value,re=X.message,ne=he(b),ue=ne.value,ie=ne.message,le=o.toString().length,fe=!h(ee)&&le>ee,de=!h(ue)&&le<ue,!fe&&!de){e.next=33;break}if(D(!!fe,re,ie),r){e.next=33;break}return e.abrupt("return",w);case 33:if(!g||P){e.next=39;break}if(Oe=he(g),je=Oe.value,ke=Oe.message,!ve(je)||je.test(o)){e.next=39;break}if(w[s]=Object.assign({type:L,message:ke,ref:a},B(L,ke)),r){e.next=39;break}return e.abrupt("return",w);case 39:if(!O){e.next=72;break}if(we=oe(k,a),xe=A&&l?l[0].ref:a,!be(O)){e.next=53;break}return e.next=45,O(we);case 45:if(Ee=e.sent,!(Se=ye(Ee,xe))){e.next=51;break}if(w[s]=Object.assign(Object.assign({},Se),B(F,Se.message)),r){e.next=51;break}return e.abrupt("return",w);case 51:e.next=72;break;case 53:if(!m(O)){e.next=72;break}Re={},Ve=0,Le=Object.entries(O);case 56:if(!(Ve<Le.length)){e.next=68;break}if(Ce=v(Le[Ve],2),Fe=Ce[0],Ne=Ce[1],Z(Re)||r){e.next=60;break}return e.abrupt("break",68);case 60:return e.next=62,Ne(we);case 62:Ae=e.sent,(Pe=ye(Ae,xe,Fe))&&(Re=Object.assign(Object.assign({},Pe),B(Fe,Pe.message)),r&&(w[s]=Re));case 65:Ve++,e.next=56;break;case 68:if(Z(Re)){e.next=72;break}if(w[s]=Object.assign({ref:xe},Re),r){e.next=72;break}return e.abrupt("return",w);case 72:return e.abrupt("return",w);case 73:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),je=function(e,t){return b(e.inner)?e.inner.reduce((function(e,r){var n=r.path,a=r.message,u=r.type;return Object.assign(Object.assign({},e),n?e[n]&&t?d({},n,ge(n,t,e,u,a)):d({},n,e[n]||Object.assign({message:a,type:u},t?{types:d({},u,a||!0)}:{})):{})}),{}):d({},e.path,{message:e.message,type:e.type})};function ke(e,t,r,n,a){return we.apply(this,arguments)}function we(){return(we=o(i.a.mark((function e(t,r,n,a,u){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=2;break}return e.abrupt("return",a(n,u));case 2:return e.prev=2,e.next=5,t.validate(n,{abortEarly:!1,context:u});case 5:return e.t0=e.sent,e.t1={},e.abrupt("return",{values:e.t0,errors:e.t1});case 10:return e.prev=10,e.t2=e.catch(2),e.abrupt("return",{values:{},errors:G(je(e.t2,r))});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var xe=function(e){return h(e)||!p(e)},Ee=function(e,t){return function e(t,r){var n=function(r,n,a){var u=a?"".concat(t,".").concat(n):"".concat(t,"[").concat(n,"]");return xe(r)?u:e(u,r)};return b(r)?r.map((function(e,t){return n(e,t)})):Object.entries(r).map((function(e){var t=v(e,2),r=t[0],a=t[1];return n(a,r,!0)}))}(e,t).flat(1/0)},Se=function(e,t,r,n,a){var u;return r.add(t),Z(e)?u=void 0:I(e[t])?(u=J(G(e),t),I(u)||Ee(t,u).forEach((function(e){return r.add(e)}))):(u=e[t],r.add(t)),I(u)?a?n:J(n,t):u},Re=function(e){var t=e.isOnChange,r=e.hasError,n=e.isBlurEvent,a=e.isOnSubmit,u=e.isReValidateOnSubmit,i=e.isOnBlur,c=e.isReValidateOnBlur,o=e.isSubmitted;return t&&n||a&&u||a&&!o||i&&!n&&!r||c&&!n&&r||u&&o},Ve=function(e){return e.substring(0,e.indexOf("["))},Le=function(e,t){var r=G(le(e));return t?J(r,t,r):r};function Ce(e,t){var r=!1;if(!b(e)||!b(t)||e.length!==t.length)return!0;for(var n=0;n<e.length&&!r;n++){var a=e[n],u=t[n];if(I(u)||Object.keys(a).length!==Object.keys(u).length){r=!0;break}for(var i in a)if(a[i]!==u[i]){r=!0;break}}return r}var Fe=function(e,t){return RegExp("^".concat(t,"[\\d+]").replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e)},Ne=function(e,t){return f(e).some((function(e){return Fe(t,e)}))},Ae=function(e){return e.type==="".concat("select","-one")};function Pe(e,t){var r=new MutationObserver((function(){U(e)&&(r.disconnect(),t())}));return r.observe(window.document,{childList:!0,subtree:!0}),r}var Be=function(e){return{isOnSubmit:!e||e===j,isOnBlur:e===g,isOnChange:e===O}},De=function(e){return z(e)||H(e)};Object(n.createContext)(null);var Me=r("juxs"),_e=r("+n12"),Te=r("Bl7J"),Ge=r("PQP0"),Ie=["keyboard","reader"],Je=["jaws","nvda","narrator","voiceover"],We=["chrome","edge","safari","firefox","ie","electron"],qe=Object(_e.c)(),ze=a.a.forwardRef((function(e,t){var r=e.id,n=e.defaultValue,u=e.values,i=e.label,c=e.setValue;return a.a.createElement("div",{key:"select-"+r},a.a.createElement("label",{htmlFor:r},i,": "),a.a.createElement("select",Object.assign({name:r,id:r,defaultValue:n},c&&{onChange:function(e){return c(e.target.value)}},{ref:t}),u.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))})),He=a.a.forwardRef((function(e,t){var r=e.id,n=e.defaultValue,u=e.label;return a.a.createElement("div",{key:"check-"+r},a.a.createElement("label",{htmlFor:""+r},u),a.a.createElement("input",{type:"checkbox",id:r,name:r,defaultValue:n,ref:t}))})),Ue=a.a.forwardRef((function(e,t){var r=e.id,n=e.defaultValue,u=e.label,i=e.hidden;return a.a.createElement("div",{key:"input-"+r},!i&&a.a.createElement("label",{htmlFor:""+r},u),a.a.createElement("input",Object.assign({id:r,name:r,defaultValue:n,ref:t},i&&{type:"hidden"})))})),Ze=function(e){var t=e.state,r=t.component,u=a.a.useMemo((function(){return Object(Me.b)(r)}),[r]),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.mode,r=void 0===t?j:t,a=e.reValidateMode,u=void 0===a?O:a,c=e.validationSchema,s=e.validationResolver,l=e.validationContext,p=e.defaultValues,g=void 0===p?{}:p,w=e.submitFocusError,x=void 0===w||w,E=e.validateCriteriaMode,S=Object(n.useRef)({}),R=Object(n.useRef)({}),V=Object(n.useRef)({}),L=Object(n.useRef)({}),C=Object(n.useRef)(new Set),F=Object(n.useRef)(new Set),N=Object(n.useRef)(new Set),A=Object(n.useRef)(new Set),P=Object(n.useRef)(!0),B=Object(n.useRef)(g),M=Object(n.useRef)({}),_=Object(n.useRef)(!1),q=Object(n.useRef)(!1),U=Object(n.useRef)(!1),$=Object(n.useRef)(!1),K=Object(n.useRef)(0),Q=Object(n.useRef)(!1),ee=Object(n.useRef)(),te=Object(n.useRef)({}),ae=Object(n.useRef)(l),ue=Object(n.useRef)(new Set),ie=Object(n.useState)(),ce=v(ie,2),ve=ce[1],he=Object(n.useRef)(Be(r)).current,me=he.isOnBlur,ye=he.isOnSubmit,ge=he.isOnChange,je="all"===E,we="undefined"==typeof window,Ee=!(!c&&!s),Fe="undefined"!=typeof document&&!we&&!I(window.HTMLElement),Me=Fe?"Proxy"in window:"undefined"!=typeof Proxy,_e=Object(n.useRef)({dirty:!Me,dirtyFields:!Me,isSubmitted:ye,submitCount:!Me,touched:!Me,isSubmitting:!Me,isValid:!Me}),Te=Object(n.useRef)(Be(u)).current,Ge=Te.isOnBlur,Ie=Te.isOnSubmit;ae.current=l;var Je=Object(n.useCallback)((function(){_.current||ve({})}),[]),We=Object(n.useCallback)((function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=r||de({errors:R.current,error:t,name:e,validFields:A.current,fieldsWithValidation:N.current});if(Z(t))(N.current.has(e)||Ee)&&(A.current.add(e),n=n||J(R.current,e)),R.current=Y(R.current,[e]);else{var a=J(R.current,e);A.current.delete(e),n=n||!a||!fe(a,t[e]),T(R.current,e,t[e])}if(n&&!h(r))return Je(),!0}),[Je,Ee]),qe=Object(n.useCallback)((function(e,t){var r=e.ref,n=e.options,a=Fe&&y(r)&&h(t)?"":t;z(r)&&n?n.forEach((function(e){var t=e.ref;return t.checked=t.value===a})):re(r)?se(a)?r.value=a:r.files=a:ne(r)?f(r.options).forEach((function(e){return e.selected=a.includes(e.value)})):H(r)&&n?n.length>1?n.forEach((function(e){var t=e.ref;return t.checked=a.includes(t.value)})):n[0].ref.checked=!!a:r.value=a}),[Fe]),ze=Object(n.useCallback)((function(e){if(!S.current[e]||!_e.current.dirty&&!_e.current.dirtyFields)return!1;var t=M.current[e]!==oe(S.current,S.current[e].ref),r=Ne(ue.current,e),n=F.current.size;if(r){var a=Ve(e);t=Ce(Le(S.current,a),J(B.current,a))}var u=(r?$.current:F.current.has(e))!==t;return t?F.current.add(e):F.current.delete(e),$.current=r?t:!!F.current.size,_e.current.dirty?u:n!==F.current.size}),[]),He=Object(n.useCallback)((function(e,t,r){var n=b(t);for(var a in t){var u="".concat(r||e).concat(n?"[".concat(a,"]"):".".concat(a)),i=S.current[u];m(t[a])&&He(e,t[a],u),i&&(qe(i,t[a]),ze(u))}}),[qe,ze]),Ue=Object(n.useCallback)((function(e,t){var r=S.current[e];if(r){qe(r,t);var n=ze(e);if(pe(n))return n}else xe(t)||He(e,t)}),[ze,qe,He]),Ze=Object(n.useCallback)(function(){var e=o(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=S.current[t])){e.next=7;break}return e.next=4,Oe(S,je,n);case 4:return a=e.sent,We(t,a,!!r&&null),e.abrupt("return",Z(a));case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[We,je]),$e=Object(n.useCallback)(function(){var e=o(i.a.mark((function e(t){var r,n,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke(c,je,Le(S.current),s,ae.current);case 2:return r=e.sent,n=r.errors,a=P.current,P.current=Z(n),b(t)?(t.forEach((function(e){var t=J(n,e);t?T(R.current,e,t):Y(R.current,[e])})),Je()):(u=J(n,t),We(t,u?d({},t,u):{},a!==P.current)),e.abrupt("return",Z(R.current));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[Je,We,je,s,c]),Ke=Object(n.useCallback)(function(){var e=o(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t||Object.keys(S.current),!Ee){e.next=3;break}return e.abrupt("return",$e(r));case 3:if(!b(r)){e.next=9;break}return e.next=6,Promise.all(r.map(function(){var e=o(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ze(t,!0);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return n=e.sent,Je(),e.abrupt("return",n.every(Boolean));case 9:return e.next=11,Ze(r);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[$e,Ze,Je,Ee]),Ye=function(e){return q.current||C.current.has(e)||C.current.has((e.match(/\w+/)||[])[0])};function Qe(e,t,r){var n=!1,a=b(e);(a?e:[e]).forEach((function(e){var r=se(e);n=!(!Ue(r?e:Object.keys(e)[0],r?t:Object.values(e)[0])&&!a)||Ye(e)})),(n||a)&&Je(),(r||a&&t)&&Ke(a?void 0:e)}ee.current=ee.current?ee.current:function(){var e=o(i.a.mark((function e(t){var r,n,a,u,o,l,f,v,h,b,p,m,y,g,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.type,n=t.target,a=n?n.name:"",u=S.current,o=R.current,l=u[a],f=J(o,a),l){e.next=8;break}return e.abrupt("return");case 8:if(b=Re({hasError:!!f,isOnChange:ge,isBlurEvent:h=r===k,isOnSubmit:ye,isReValidateOnSubmit:Ie,isOnBlur:me,isReValidateOnBlur:Ge,isSubmitted:U.current}),p=ze(a),m=Ye(a)||p,h&&!J(V.current,a)&&_e.current.touched&&(T(V.current,a,!0),m=!0),!b){e.next=15;break}return e.abrupt("return",m&&Je());case 15:if(!Ee){e.next=26;break}return e.next=18,ke(c,je,Le(u),s,ae.current);case 18:y=e.sent,g=y.errors,O=P.current,P.current=Z(g),v=J(g,a)?d({},a,J(g,a)):{},O!==P.current&&(m=!0),e.next=29;break;case 26:return e.next=28,Oe(S,je,l);case 28:v=e.sent;case 29:!We(a,v)&&m&&Je();case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Xe=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Z(B.current)?le(S.current):B.current;ke(c,je,G(Object.assign(Object.assign({},t),e)),s,ae.current).then((function(e){var t=e.errors,r=P.current;P.current=Z(t),r!==P.current&&Je()}))}),[Je,je,s]),et=Object(n.useCallback)((function(e,t){ee.current&&e&&X(S.current,ee.current,e,t)}),[]),tt=Object(n.useCallback)((function(e,t){if(e&&(!e||!Ne(ue.current,e.ref.name)||t)){et(e,t);var r=e.ref.name;R.current=Y(R.current,[r]),V.current=Y(V.current,[r]),M.current=Y(M.current,[r]),[F,N,A,C].forEach((function(e){return e.current.delete(r)})),(_e.current.isValid||_e.current.touched)&&(Je(),Ee&&Xe())}}),[Je,Ee,Xe,et]);function rt(e){e?Y(R.current,b(e)?e:[e]):R.current={},Je()}var nt=function(e){var t=e.name,r=e.type,n=e.types,a=e.message,u=e.shouldRender,i=S.current[t];fe(J(R.current,t),{type:r,message:a,types:n})||(T(R.current,t,{type:r,types:n,message:a,ref:i?i.ref:{},isManual:!0}),u&&Je())};function at(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;se(e)?nt(Object.assign(Object.assign({name:e},m(t)?{types:t,type:""}:{type:t,message:r}),{shouldRender:!0})):b(e)&&(e.forEach((function(e){return nt(Object.assign({},e))})),Je())}function ut(e,t){var r=C.current,n=I(t),a=n?B.current:t,u=le(S.current,e);if(se(e))return Se(u,e,r,n?J(a,e):t,!0);if(b(e))return e.reduce((function(e,t){return Object.assign(Object.assign({},e),d({},t,Se(u,t,r,a)))}),{});q.current=!0;var i=!Z(u)&&u||a;return e&&e.nest?G(i):i}function it(e){S.current&&(b(e)?e:[e]).forEach((function(e){return tt(S.current[e],!0)}))}function ct(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.name)return console.warn("Missing name @",e);var r,n,a=e.name,u=e.type,i=e.value,c=Object.assign({ref:e},t),o=S.current,s=De(e),l=o[a],d=!0;if(s?l&&b(l.options)&&l.options.filter(Boolean).find((function(t){return i===t.ref.value&&t.ref===e})):l&&e===l.ref)o[a]=Object.assign(Object.assign({},l),t);else{if(u){var v=Pe(e,(function(){return tt(l)}));l=s?Object.assign({options:[].concat(f(l&&l.options||[]),[{ref:e,mutationWatcher:v}]),ref:{type:u,name:a}},t):Object.assign(Object.assign({},c),{mutationWatcher:v})}else l=c;o[a]=l,Z(B.current)||(n=J(B.current,a),d=I(n),r=Ne(ue.current,a),d||r||qe(l,n)),Ee&&!r&&_e.current.isValid?Xe():Z(t)||(N.current.add(a),!ye&&_e.current.isValid&&Oe(S,je,l).then((function(e){var t=P.current;Z(e)?A.current.add(a):P.current=!1,t!==P.current&&Je()}))),M.current[a]||r&&d||(M.current[a]=d?oe(o,l.ref):n),u&&D({field:s&&l.options?l.options[l.options.length-1]:l,isRadioOrCheckbox:s||Ae(e),handleChange:ee.current})}}function ot(e,t){if(!we)if(se(e))ct({name:e},t);else{if(!m(e)||!("name"in e))return function(t){return t&&ct(t,e)};ct(e,t)}}var st=Object(n.useCallback)((function(e){return function(){var t=o(i.a.mark((function t(r){var n,a,u,o,l,f,d,v,h,b,p;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&(r.preventDefault(),r.persist()),n={},a=S.current,u=le(a),_e.current.isSubmitting&&(Q.current=!0,Je()),t.prev=5,!Ee){t.next=17;break}return t.next=9,ke(c,je,G(u),s,ae.current);case 9:o=t.sent,l=o.errors,f=o.values,R.current=l,n=l,u=f,t.next=29;break;case 17:d=0,v=Object.values(a);case 18:if(!(d<v.length)){t.next=29;break}if(!(h=v[d])){t.next=26;break}return b=h.ref.name,t.next=24,Oe(S,je,h);case 24:(p=t.sent)[b]?(T(n,b,p[b]),A.current.delete(b)):N.current.has(b)&&A.current.add(b);case 26:d++,t.next=18;break;case 29:if(!Z(n)){t.next=36;break}return R.current={},Je(),t.next=34,e(G(u),r);case 34:t.next=38;break;case 36:R.current=n,x&&Fe&&W(a,n);case 38:return t.prev=38,U.current=!0,Q.current=!1,K.current=K.current+1,Je(),t.finish(38);case 44:case"end":return t.stop()}}),t,null,[[5,,38,44]])})));return function(e){return t.apply(this,arguments)}}()}),[Fe,Je,Ee,x,je,s,c]),lt=function(e){var t=e.errors,r=e.dirty,n=e.isSubmitted,a=e.touched,u=e.isValid,i=e.submitCount,c=e.dirtyFields;S.current={},t||(R.current={}),a||(V.current={}),u||(A.current=new Set,N.current=new Set,P.current=!0),r||($.current=!1),c||(F.current=new Set),n||(U.current=!1),i||(K.current=0),M.current={},L.current={},C.current=new Set,q.current=!1},ft=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Fe)for(var r=0,n=Object.values(S.current);r<n.length;r++){var a=n[r];if(a){var u=a.ref,i=a.options,c=De(u)&&b(i)?i[0].ref:u;if(y(c))try{c.closest("form").reset();break}catch(o){}}}e&&(B.current=e),Object.values(te.current).forEach((function(e){return be(e)&&e()})),lt(t),Je()};function dt(e){if(se(e))return S.current[e]?oe(S.current,S.current[e].ref):J(B.current,e);var t=le(S.current),r=Z(t)?B.current:t;return e&&e.nest?G(r):r}Object(n.useEffect)((function(){return function(){_.current=!0,S.current&&Object.values(S.current).forEach((function(e){return tt(e,!0)}))}}),[tt]),Ee||(P.current=A.current.size>=N.current.size&&Z(R.current));var vt={dirty:$.current,dirtyFields:F.current,isSubmitted:U.current,submitCount:K.current,touched:V.current,isSubmitting:Q.current,isValid:ye?U.current&&Z(R.current):P.current},ht={triggerValidation:Ke,setValue:Object(n.useCallback)(Qe,[Je,Ue,Ke]),register:Object(n.useCallback)(ot,[B.current,M.current]),unregister:Object(n.useCallback)(it,[]),getValues:Object(n.useCallback)(dt,[]),formState:Me?new Proxy(vt,{get:function(e,t){if(t in e)return _e.current[t]=!0,e[t]}}):vt},bt=Object.assign(Object.assign(Object.assign({removeFieldEventListener:et,reRender:Je},Ee?{validateSchemaIsValid:Xe}:{}),{mode:{isOnBlur:me,isOnSubmit:ye,isOnChange:ge},reValidateMode:{isReValidateOnBlur:Ge,isReValidateOnSubmit:Ie},errorsRef:R,touchedFieldsRef:V,fieldsRef:S,isWatchAllRef:q,watchFieldsRef:C,resetFieldArrayFunctionRef:te,fieldArrayDefaultValues:L,validFieldsRef:A,dirtyFieldsRef:F,fieldsWithValidationRef:N,fieldArrayNamesRef:ue,isDirtyRef:$,readFormStateRef:_e,defaultValuesRef:B}),ht);return Object.assign({watch:ut,control:bt,handleSubmit:st,reset:Object(n.useCallback)(ft,[]),clearError:Object(n.useCallback)(rt,[]),setError:Object(n.useCallback)(at,[]),errors:R.current},ht)}(),s=c.register,l=c.handleSubmit,p=a.a.useState(u[0]),g=p[0],w=p[1],x=a.a.useState(Ie[0]),E=x[0],S=x[1],R=a.a.useMemo((function(){return Object(Me.a)(r,g,E)}),[r,g,E]);return a.a.createElement(Te.a,null,a.a.createElement("h1",null,"New test run - ",t.name," ",t.component),a.a.createElement("form",{onSubmit:l((function(e){return function(e){var t=e.form,r=e.state,n=r.component,a=r.version,u=r.id,i=t.variant,c=t.mode,o=t.browser,s=t.browserVersion,l=t.reader,f=t.readerVersion,d=t.steps,v={$schema:"../schemas/testrun.schema.json5",lastUpdated:(new Date).toISOString(),implementation:u,version:a,component:n,variant:i,mode:c,environment:{browser:o,browserVersion:s,reader:l,readerVersion:f},steps:d},h=(u+"."+n+"."+i+"."+c+"."+o+"."+l+".json").toLowerCase();Object(_e.a)(h,v)}({form:e,state:t})}))},a.a.createElement("div",{style:{padding:".5rem",margin:".5rem",background:"#eee"}},a.a.createElement(ze,{id:"variant",defaultValue:g,values:u,setValue:w,ref:s(),label:"Variant"}),a.a.createElement(ze,{id:"mode",defaultValue:E,values:Ie,setValue:S,label:"Mode",ref:s()}),a.a.createElement(ze,{id:"reader",values:Je,label:"Screen reader",ref:s()}),a.a.createElement(Ue,{id:"readerVersion",label:"Reader version: ",ref:s()}),a.a.createElement(ze,{id:"browser",defaultValue:qe.name,values:We,label:"Browser",ref:s()}),a.a.createElement(Ue,{id:"browserVersion",defaultValue:qe.version,label:"Browser version: ",ref:s()})),a.a.createElement(Ge.a,t),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",{key:"head"},a.a.createElement("th",null,E," step"),a.a.createElement("th",null,"Expected"),a.a.createElement("th",null,"Actual"))),a.a.createElement("tbody",null,R.map((function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",{key:"description"},e.description),a.a.createElement("td",{key:"expected"},e.expected),a.a.createElement("td",{key:"actual"},a.a.createElement(He,{id:"steps["+t+"].passed",label:"Passed ",ref:s()}),a.a.createElement(Ue,{id:"steps["+t+"].key",label:"Key: ",defaultValue:e.key,ref:s(),hidden:!0}),a.a.createElement("br",null),a.a.createElement(Ue,{id:"steps["+t+"].narration",label:"Narration: ",ref:s()})))})))),a.a.createElement("div",null,"To submit the test run, create a PR to add the file to ",a.a.createElement("code",null,"research/src/testruns")),a.a.createElement("input",{type:"submit",value:"Download test run"})))};t.default=function(e){var t=e.location.state;return t&&a.a.createElement(Ze,{state:t})}},cxuS:function(e,t,r){var n=r("P8UN"),a=r("ys0W")(!1);n(n.S,"Object",{values:function(e){return a(e)}})},ls82:function(e,t,r){r("rzGZ"),r("Dq+y"),r("q8oJ"),r("C9fy"),r("6kNP"),r("8npG"),r("LagC"),r("pJf4"),r("JHok"),r("pS08"),r("m210"),r("4DPX");var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",u=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof l?t:l,u=Object.create(a.prototype),i=new k(n||[]);return u._invoke=function(e,t,r){var n="suspendedStart";return function(a,u){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw u;return x()}for(r.method=a,r.arg=u;;){var i=r.delegate;if(i){var c=g(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=o(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),u}function o(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s={};function l(){}function f(){}function d(){}var v={};v[a]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(w([])));b&&b!==t&&r.call(b,a)&&(v=b);var p=d.prototype=l.prototype=Object.create(v);function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,u){function i(){return new t((function(n,i){!function n(a,u,i,c){var s=o(e[a],e,u);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,u,n,i)}))}return n=n?n.then(i,i):i()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=o(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function w(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,u=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return u.next=u}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=p.constructor=d,d.constructor=f,d[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(p),e},e.awrap=function(e){return{__await:e}},m(y.prototype),y.prototype[u]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,u){void 0===u&&(u=Promise);var i=new y(c(t,r,n,a),u);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(p),p[i]="Generator",p[a]=function(){return this},p.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=w,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=r.call(u,"catchLoc"),o=r.call(u,"finallyLoc");if(c&&o){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var u=a;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=t&&t<=u.finallyLoc&&(u=null);var i=u?u.completion:{};return i.type=e,i.arg=t,u?(this.method="next",this.next=u.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:w(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},nHqZ:function(e,t,r){e.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-new-test-run-js-2df6752bf616b6a7a93e.js.map