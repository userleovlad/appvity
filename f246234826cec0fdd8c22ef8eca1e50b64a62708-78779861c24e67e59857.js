(self.webpackChunkappvity_website=self.webpackChunkappvity_website||[]).push([[29],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3646:function(t,e,r){var n=r(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.default=t.exports,t.exports.__esModule=!0},9713:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.default=t.exports,t.exports.__esModule=!0},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,i,s=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return s}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,r){var n=r(2858),i=r(3884),s=r(379),o=r(521);t.exports=function(t,e){return n(t)||i(t,e)||s(t,e)||o()},t.exports.default=t.exports,t.exports.__esModule=!0},319:function(t,e,r){var n=r(3646),i=r(6860),s=r(379),o=r(8206);t.exports=function(t){return n(t)||i(t)||s(t)||o()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,r){var n=r(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},7091:function(t){"use strict";var e="%[a-f0-9]{2}",r=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(s){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],i(r),i(n))}function s(t){try{return decodeURIComponent(t)}catch(s){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var r={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(t);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(e){var o=s(i[0]);o!==i[0]&&(r[i[0]]=o)}i=n.exec(t)}r["%C2"]="�";for(var a=Object.keys(r),c=0;c<a.length;c++){var u=a[c];t=t.replace(new RegExp(u,"g"),r[u])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),i=Array.isArray(e),s=0;s<n.length;s++){var o=n[s],a=t[o];(i?-1!==e.indexOf(o):e(o,a,t))&&(r[o]=a)}return r}},2203:function(t,e,r){"use strict";var n=r(9713),i=r(3038),s=r(319);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw s}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c=r(4751),u=r(7091),h=r(4734),f=r(8616),l=Symbol("encodeFragmentIdentifier");function p(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(t,e){return e.encode?e.strict?c(t):encodeURIComponent(t):t}function v(t,e){return e.decode?u(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,e){return Number(t)-Number(e)})).map((function(e){return t[e]})):t}function g(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function m(t){var e=(t=g(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function b(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function x(t,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var r=function(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return function(e,r,n){var i="string"==typeof r&&r.includes(t.arrayFormatSeparator),s="string"==typeof r&&!i&&v(r,t).includes(t.arrayFormatSeparator);r=s?v(r,t):r;var o=i||s?r.split(t.arrayFormatSeparator).map((function(e){return v(e,t)})):null===r?r:v(r,t);n[e]=o};case"bracket-separator":return function(e,r,n){var i=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),i){var s=null===r?[]:r.split(t.arrayFormatSeparator).map((function(e){return v(e,t)}));void 0!==n[e]?n[e]=[].concat(n[e],s):n[e]=s}else n[e]=r?v(r,t):r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var s,a=o(t.split("&"));try{for(a.s();!(s=a.n()).done;){var c=s.value;if(""!==c){var u=h(e.decode?c.replace(/\+/g," "):c,"="),f=i(u,2),l=f[0],d=f[1];d=void 0===d?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?d:v(d,e),r(v(l,e),d,n)}}}catch(S){a.e(S)}finally{a.f()}for(var g=0,m=Object.keys(n);g<m.length;g++){var x=m[g],w=n[x];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var O=j[k];w[O]=b(w[O],e)}else n[x]=b(w,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=y(r):t[e]=r,t}),Object.create(null))}e.extract=m,e.parse=x,e.stringify=function(t,e){if(!t)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var r=function(r){return e.skipNull&&null==t[r]||e.skipEmptyString&&""===t[r]},n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(r,n){var i=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(s(r),null===n?[[d(e,t),"[",i,"]"].join("")]:[[d(e,t),"[",d(i,t),"]=",d(n,t)].join("")])}};case"bracket":return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(s(r),null===n?[[d(e,t),"[]"].join("")]:[[d(e,t),"[]=",d(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===t.arrayFormat?"[]=":"=";return function(r){return function(n,i){return void 0===i||t.skipNull&&null===i||t.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length?[[d(r,t),e,d(i,t)].join("")]:[[n,d(i,t)].join(t.arrayFormatSeparator)])}};default:return function(e){return function(r,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:[].concat(s(r),null===n?[d(e,t)]:[[d(e,t),"=",d(n,t)].join("")])}}}}(e),i={},o=0,a=Object.keys(t);o<a.length;o++){var c=a[o];r(c)||(i[c]=t[c])}var u=Object.keys(i);return!1!==e.sort&&u.sort(e.sort),u.map((function(r){var i=t[r];return void 0===i?"":null===i?d(r,e):Array.isArray(i)?0===i.length&&"bracket-separator"===e.arrayFormat?d(r,e)+"[]":i.reduce(n(r),[]).join("&"):d(r,e)+"="+d(i,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){e=Object.assign({decode:!0},e);var r=h(t,"#"),n=i(r,2),s=n[0],o=n[1];return Object.assign({url:s.split("?")[0]||"",query:x(m(t),e)},e&&e.parseFragmentIdentifier&&o?{fragmentIdentifier:v(o,e)}:{})},e.stringifyUrl=function(t,r){r=Object.assign(n({encode:!0,strict:!0},l,!0),r);var i=g(t.url).split("?")[0]||"",s=e.extract(t.url),o=e.parse(s,{sort:!1}),a=Object.assign(o,t.query),c=e.stringify(a,r);c&&(c="?".concat(c));var u=function(t){var e="",r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(t.url);return t.fragmentIdentifier&&(u="#".concat(r[l]?d(t.fragmentIdentifier,r):t.fragmentIdentifier)),"".concat(i).concat(c).concat(u)},e.pick=function(t,r,i){i=Object.assign(n({parseFragmentIdentifier:!0},l,!1),i);var s=e.parseUrl(t,i),o=s.url,a=s.query,c=s.fragmentIdentifier;return e.stringifyUrl({url:o,query:f(a,r),fragmentIdentifier:c},i)},e.exclude=function(t,r,n){var i=Array.isArray(r)?function(t){return!r.includes(t)}:function(t,e){return!r(t,e)};return e.pick(t,i,n)}},9921:function(t,e,r){"use strict";r.d(e,{a:function(){return u}});var n=r(7294),i=r(8936),s=r.n(i);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(c){i=!0,s=c}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=new Error("FlexSearch index is required. Check that your index exists and is valid."),c=new Error("FlexSearch store is required. Check that your store exists and is valid."),u=function(t,e,r,i){var u=o((0,n.useState)(null),2),h=u[0],f=u[1];return(0,n.useEffect)((function(){if(!e)throw a;if(!r)throw c}),[e,r]),(0,n.useEffect)((function(){if(e instanceof s())f(e);else{var t=s().create();t.import(e),f(t)}}),[e]),(0,n.useMemo)((function(){return t&&h&&r?h.search(t,i).map((function(t){return r[t]})):[]}),[t,h,r])}},8936:function(t){"use strict";var e,r;!function(e,r,n){var i;(i=n.define)&&i.amd?i([],(function(){return r})):(i=n.modules)?i["FlexSearch".toLowerCase()]=r:t.exports=r}(0,function t(e){function r(t,e){var r=e?e.id:t&&t.id;this.id=r||0===r?r:E++,this.init(t,e),a(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),a(this,"length",(function(){return this.index.length}))}function n(t,e,r,n){return this.u!==this.g&&(this.o=this.o.concat(r),this.u++,n&&this.o.length>=n&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(e,this.o),this.F&&this.F(this.o))),this}function i(t){var e=O();for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];b(n)?e[r]=n.slice(0):w(n)?e[r]=i(n):e[r]=n}return e}function s(t,e){for(var r=t.length,n=x(e),i=[],s=0,o=0;s<r;s++){var a=t[s];(n&&e(a)||!n&&!e[a])&&(i[o++]=a)}return i}function o(t,e,r,n,i,s,o,a,c,u){var h;if(r=g(r,o?0:i,a,s,e,c,u),a&&(a=r.page,h=r.next,r=r.result),o)e=this.where(o,null,i,r);else{for(e=r,r=this.l,i=e.length,s=Array(i),o=0;o<i;o++)s[o]=r[e[o]];e=s}return r=e,n&&(x(n)||(1<(F=n.split(":")).length?n=v:(F=F[0],n=d)),r.sort(n)),r=y(a,h,r),this.cache&&this.j.set(t,r),r}function a(t,e,r){Object.defineProperty(t,e,{get:r})}function c(t){return new RegExp(t,"g")}function u(t,e){for(var r=0;r<e.length;r+=2)t=t.replace(e[r],e[r+1]);return t}function h(t,e,r,n,i,s,o,a){return e[r]?e[r]:(i=i?(a-(o||a/1.5))*s+(o||a/1.5)*i:s,e[r]=i,i>=o&&((t=(t=t[a-(i+.5>>0)])[r]||(t[r]=[]))[t.length]=n),i)}function f(t,e){if(t)for(var r=Object.keys(t),n=0,i=r.length;n<i;n++){var s=r[n],o=t[s];if(o)for(var a=0,c=o.length;a<c;a++){if(o[a]===e){1===c?delete t[s]:o.splice(a,1);break}w(o[a])&&f(o[a],e)}}}function l(t){for(var e="",r="",n="",i=0;i<t.length;i++){var s=t[i];s!==r&&(i&&"h"===s?(n="a"===n||"e"===n||"i"===n||"o"===n||"u"===n||"y"===n,(("a"===r||"e"===r||"i"===r||"o"===r||"u"===r||"y"===r)&&n||" "===r)&&(e+=s)):e+=s),n=i===t.length-1?"":t[i+1],r=s}return e}function p(t,e){return 0>(t=t.length-e.length)?1:t?-1:0}function d(t,e){return(t=t[F])<(e=e[F])?-1:t>e?1:0}function v(t,e){for(var r=F.length,n=0;n<r;n++)t=t[F[n]],e=e[F[n]];return t<e?-1:t>e?1:0}function y(t,e,r){return t?{page:t,next:e?""+e:null,result:r}:r}function g(t,e,r,n,i,s,o){var a,c=[];if(!0===r){r="0";var u=""}else u=r&&r.split(":");var h=t.length;if(1<h){var f,l,p,d,v,g,b,x,w,j,S=O(),A=[],F=0,I=!0,C=0;if(u&&(2===u.length?(x=u,u=!1):u=w=parseInt(u[0],10)),o){for(f=O();F<h;F++)if("not"===i[F])for(d=(l=t[F]).length,p=0;p<d;p++)f["@"+l[p]]=1;else b=F+1;if(k(b))return y(r,a,c);F=0}else g=m(i)&&i;for(;F<h;F++){var _=F===(b||h)-1;if(!g||!F)if((p=g||i&&i[F])&&"and"!==p){if("or"!==p)continue;j=!1}else j=s=!0;if(d=(l=t[F]).length){if(I){if(!v){v=l;continue}var E=v.length;for(p=0;p<E;p++){var M="@"+(I=v[p]);o&&f[M]||(S[M]=1,s||(c[C++]=I))}v=null,I=!1}for(M=!1,p=0;p<d;p++){var U="@"+(E=l[p]),N=s?S[U]||0:F;if(!(!N&&!n||o&&f[U]||!s&&S[U]))if(N===F){if(_){if((!w||--w<C)&&(c[C++]=E,e&&C===e))return y(r,C+(u||0),c)}else S[U]=F+1;M=!0}else n&&((U=A[N]||(A[N]=[]))[U.length]=E)}if(j&&!M&&!n)break}else if(j&&!n)return y(r,a,l)}if(v)if(F=v.length,o)for(p=u?parseInt(u,10):0;p<F;p++)f["@"+(t=v[p])]||(c[C++]=t);else c=v;if(n)for(C=c.length,x?(F=parseInt(x[0],10)+1,p=parseInt(x[1],10)+1):(F=A.length,p=0);F--;)if(E=A[F]){for(d=E.length;p<d;p++)if(n=E[p],(!o||!f["@"+n])&&(c[C++]=n,e&&C===e))return y(r,F+":"+p,c);p=0}}else!h||i&&"not"===i[0]||(c=t[0],u&&(u=parseInt(u[0],10)));return e&&(o=c.length,u&&u>o&&(u=0),(a=(u=u||0)+e)<o?c=c.slice(u,a):(a=0,u&&(c=c.slice(u)))),y(r,a,c)}function m(t){return"string"==typeof t}function b(t){return t.constructor===Array}function x(t){return"function"==typeof t}function w(t){return"object"==typeof t}function k(t){return void 0===t}function j(t){for(var e=Array(t),r=0;r<t;r++)e[r]=O();return e}function O(){return Object.create(null)}function S(){var t,e;self.onmessage=function(r){if(r=r.data)if(r.search){var n=e.search(r.content,r.threshold?{limit:r.limit,threshold:r.threshold,where:r.where}:r.limit);self.postMessage({id:t,content:r.content,limit:r.limit,result:n})}else r.add?e.add(r.id,r.content):r.update?e.update(r.id,r.content):r.remove?e.remove(r.id):r.clear?e.clear():r.info?((r=e.info()).worker=t,console.log(r)):r.register&&(t=r.id,r.options.cache=!1,r.options.async=!1,r.options.worker=!1,e=new(e=new Function(r.register.substring(r.register.indexOf("{")+1,r.register.lastIndexOf("}")))())(r.options))}}function A(r,n,i,s){r=e("flexsearch","id"+r,S,(function(t){(t=t.data)&&t.result&&s(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),n);var o=t.toString();return i.id=n,r.postMessage({register:o,options:i,id:n}),r}var F,I={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},C={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},_=[],E=0,M={},U={};r.create=function(t,e){return new r(t,e)},r.registerMatcher=function(t){for(var e in t)t.hasOwnProperty(e)&&_.push(c(e),t[e]);return this},r.registerEncoder=function(t,e){return z[t]=e.bind(z),this},r.registerLanguage=function(t,e){return M[t]=e.filter,U[t]=e.stemmer,this},r.encode=function(t,e){return z[t](e)},r.prototype.init=function(t,e){if(this.v=[],e){var s=e.preset;t=e}else t||(t=I),s=t.preset;if(e={},m(t)?(e=C[t],t={}):s&&(e=C[s]),s=t.worker)if("undefined"==typeof Worker)t.worker=!1,this.m=null;else{var o=parseInt(s,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var a=0;a<o;a++)this.m[a]=A(this.id,a,t,n.bind(this))}if(this.f=t.tokenize||e.f||this.f||I.f,this.split=k(s=t.split)?this.split||I.split:m(s)?c(s):s,this.D=t.rtl||this.D||I.D,this.async="undefined"==typeof Promise||k(s=t.async)?this.async||I.async:s,this.g=k(s=t.worker)?this.g||I.g:s,this.threshold=k(s=t.threshold)?e.threshold||this.threshold||I.threshold:s,this.b=k(s=t.resolution)?s=e.b||this.b||I.b:s,s<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||k(s=t.depth)?e.depth||this.depth||I.depth:s,this.w=(s=k(s=t.encode)?e.encode||I.encode:s)&&z[s]&&z[s].bind(z)||(x(s)?s:this.w||!1),(s=t.matcher)&&this.addMatcher(s),s=(e=t.lang)||t.filter){if(m(s)&&(s=M[s]),b(s)){o=this.w,a=O();for(var u=0;u<s.length;u++){var h=o?o(s[u]):s[u];a[h]=1}s=a}this.filter=s}if(s=e||t.stemmer){var f;for(f in e=m(s)?U[s]:s,o=this.w,a=[],e)e.hasOwnProperty(f)&&(u=o?o(f):f,a.push(c(u+"($|\\W)"),o?o(e[f]):e[f]));this.stemmer=f=a}if(this.a=a=(s=t.doc)?i(s):this.a||I.a,this.i=j(this.b-(this.threshold||0)),this.h=O(),this.c=O(),a){if(this.l=O(),t.doc=null,f=a.index={},e=a.keys=[],o=a.field,u=a.tag,h=a.store,b(a.id)||(a.id=a.id.split(":")),h){var l=O();if(m(h))l[h]=1;else if(b(h))for(var p=0;p<h.length;p++)l[h[p]]=1;else w(h)&&(l=h);a.store=l}if(u){if(this.G=O(),h=O(),o)if(m(o))h[o]=t;else if(b(o))for(l=0;l<o.length;l++)h[o[l]]=t;else w(o)&&(h=o);for(b(u)||(a.tag=u=[u]),o=0;o<u.length;o++)this.G[u[o]]=O();this.I=u,o=h}var d;if(o)for(b(o)||(w(o)?(d=o,a.field=o=Object.keys(o)):a.field=o=[o]),a=0;a<o.length;a++)b(u=o[a])||(d&&(t=d[u]),e[a]=u,o[a]=u.split(":")),f[u]=new r(t);t.doc=s}return this.B=!0,this.j=!!(this.cache=s=k(s=t.cache)?this.cache||I.cache:s)&&new B(s),this},r.prototype.encode=function(t){return t&&(_.length&&(t=u(t,_)),this.v.length&&(t=u(t,this.v)),this.w&&(t=this.w(t)),this.stemmer&&(t=u(t,this.stemmer))),t},r.prototype.addMatcher=function(t){var e=this.v;for(var r in t)t.hasOwnProperty(r)&&e.push(c(r),t[r]);return this},r.prototype.add=function(t,e,r,n,i){if(this.a&&w(t))return this.A("add",t,e);if(e&&m(e)&&(t||0===t)){var o="@"+t;if(this.c[o]&&!n)return this.update(t,e);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:t,content:e}),this.c[o]=""+this.C,r&&r(),this;if(!i){if(this.async&&"function"!=typeof importScripts){var a=this;return o=new Promise((function(r){setTimeout((function(){a.add(t,e,null,n,!0),a=null,r()}))})),r?(o.then(r),this):o}if(r)return this.add(t,e,null,n,!0),r(),this}if(!(e=this.encode(e)).length)return this;i=x(r=this.f)?r(e):e.split(this.split),this.filter&&(i=s(i,this.filter));var c=O();c._ctx=O();for(var u=i.length,f=this.threshold,l=this.depth,p=this.b,d=this.i,v=this.D,y=0;y<u;y++){var g=i[y];if(g){var b=g.length,k=(v?y+1:u-y)/u,S="";switch(r){case"reverse":case"both":for(var A=b;--A;)h(d,c,S=g[A]+S,t,v?1:(b-A)/b,k,f,p-1);S="";case"forward":for(A=0;A<b;A++)h(d,c,S+=g[A],t,v?(A+1)/b:1,k,f,p-1);break;case"full":for(A=0;A<b;A++)for(var F=(v?A+1:b-A)/b,I=b;I>A;I--)h(d,c,S=g.substring(A,I),t,F,k,f,p-1);break;default:if(b=h(d,c,g,t,1,k,f,p-1),l&&1<u&&b>=f)for(b=c._ctx[g]||(c._ctx[g]=O()),g=this.h[g]||(this.h[g]=j(p-(f||0))),0>(k=y-l)&&(k=0),(S=y+l+1)>u&&(S=u);k<S;k++)k!==y&&h(g,b,i[k],t,0,p-(k<y?y-k:k-y),f,p-1)}}}this.c[o]=1,this.B=!1}return this},r.prototype.A=function(t,e,r){if(b(e)){var n=e.length;if(n--){for(var i=0;i<n;i++)this.A(t,e[i]);return this.A(t,e[n],r)}}else{var s,o=this.a.index,a=this.a.keys,c=this.a.tag;i=this.a.store;var u=this.a.id;n=e;for(var h=0;h<u.length;h++)n=n[u[h]];if("remove"===t&&(delete this.l[n],u=a.length,u--)){for(e=0;e<u;e++)o[a[e]].remove(n);return o[a[u]].remove(n,r)}if(c){for(s=0;s<c.length;s++){var f=c[s],l=e;for(u=f.split(":"),h=0;h<u.length;h++)l=l[u[h]];l="@"+l}s=(s=this.G[f])[l]||(s[l]=[])}for(var p=0,d=(u=this.a.field).length;p<d;p++){for(f=u[p],c=e,l=0;l<f.length;l++)c=c[f[l]];f=o[a[p]],l="add"===t?f.add:f.update,p===d-1?l.call(f,n,c,r):l.call(f,n,c)}if(i){for(r=Object.keys(i),t=O(),o=0;o<r.length;o++)if(i[a=r[o]]){a=a.split(":");var v=void 0,y=void 0;for(u=0;u<a.length;u++)v=(v||e)[c=a[u]],y=(y||t)[c]=v}e=t}s&&(s[s.length]=e),this.l[n]=e}return this},r.prototype.update=function(t,e,r){return this.a&&w(t)?this.A("update",t,e):(this.c["@"+t]&&m(e)&&(this.remove(t),this.add(t,e,r,!0)),this)},r.prototype.remove=function(t,e,r){if(this.a&&w(t))return this.A("remove",t,e);var n="@"+t;if(this.c[n]){if(this.g)return this.m[this.c[n]].postMessage({remove:!0,id:t}),delete this.c[n],e&&e(),this;if(!r){if(this.async&&"function"!=typeof importScripts){var i=this;return n=new Promise((function(e){setTimeout((function(){i.remove(t,null,!0),i=null,e()}))})),e?(n.then(e),this):n}if(e)return this.remove(t,null,!0),e(),this}for(e=0;e<this.b-(this.threshold||0);e++)f(this.i[e],t);this.depth&&f(this.h,t),delete this.c[n],this.B=!1}return this},r.prototype.search=function(t,e,r,n){if(w(e)){if(b(e))for(var i=0;i<e.length;i++)e[i].query=t;else e.query=t;t=e,e=1e3}else e&&x(e)?(r=e,e=1e3):e||0===e||(e=1e3);if(!this.g){var a=[],c=t;if(w(t)&&!b(t)){r||(r=t.callback)&&(c.callback=null);var u=t.sort,h=t.page;e=t.limit,z=t.threshold;var f=t.suggest;t=t.query}if(this.a){z=this.a.index;var l,d,v=c.where,y=c.bool||"or",k=c.field,j=y;if(k)b(k)||(k=[k]);else if(b(c)){var S=c;k=[],j=[];for(var A=0;A<c.length;A++)i=(n=c[A]).bool||y,k[A]=n.field,j[A]=i,"not"===i?l=!0:"and"===i&&(d=!0)}else k=this.a.keys;for(y=k.length,A=0;A<y;A++)S&&(c=S[A]),h&&!m(c)&&(c.page=null,c.limit=0),a[A]=z[k[A]].search(c,0);if(r)return r(o.call(this,t,j,a,u,e,f,v,h,d,l));if(this.async){var F=this;return new Promise((function(r){Promise.all(a).then((function(n){r(o.call(F,t,j,n,u,e,f,v,h,d,l))}))}))}return o.call(this,t,j,a,u,e,f,v,h,d,l)}if(z||(z=this.threshold||0),!n){if(this.async&&"function"!=typeof importScripts){var I=this;return z=new Promise((function(t){setTimeout((function(){t(I.search(c,e,null,!0)),I=null}))})),r?(z.then(r),this):z}if(r)return r(this.search(c,e,null,!0)),this}if(!t||!m(t))return a;if(c=t,this.cache)if(this.B){if(r=this.j.get(t))return r}else this.j.clear(),this.B=!0;if(!(c=this.encode(c)).length)return a;r=x(r=this.f)?r(c):c.split(this.split),this.filter&&(r=s(r,this.filter)),S=r.length,n=!0,i=[];var C=O(),_=0;if(1<S&&(this.depth&&"strict"===this.f?y=!0:r.sort(p)),!y||(A=this.h))for(var E=this.b;_<S;_++){var M=r[_];if(M){if(y){if(!k)if(A[M])k=M,C[M]=1;else if(!f)return a;if(f&&_===S-1&&!i.length)y=!1,C[M=k||M]=0;else if(!k)continue}if(!C[M]){var U=[],N=!1,R=0,L=y?A[k]:this.i;if(L)for(var P=void 0,q=0;q<E-z;q++)(P=L[q]&&L[q][M])&&(U[R++]=P,N=!0);if(N)k=M,i[i.length]=1<R?U.concat.apply([],U):U[0];else if(!f){n=!1;break}C[M]=1}}}else n=!1;return n&&(a=g(i,e,h,f)),this.cache&&this.j.set(t,a),a}this.F=r,this.u=0,this.o=[];for(var z=0;z<this.g;z++)this.m[z].postMessage({search:!0,limit:e,content:t})},r.prototype.find=function(t,e){return this.where(t,e,1)[0]||null},r.prototype.where=function(t,e,r,n){var i,s,o,a=this.l,c=[],u=0;if(w(t)){r||(r=e);var h=Object.keys(t),f=h.length;if(i=!1,1===f&&"id"===h[0])return[a[t.id]];if((s=this.I)&&!n)for(var l=0;l<s.length;l++){var p=s[l],d=t[p];if(!k(d)){if(o=this.G[p]["@"+d],0==--f)return o;h.splice(h.indexOf(p),1),delete t[p];break}}for(s=Array(f),l=0;l<f;l++)s[l]=h[l].split(":")}else{if(x(t)){for(r=(e=n||Object.keys(a)).length,h=0;h<r;h++)t(f=a[e[h]])&&(c[u++]=f);return c}if(k(e))return[a[t]];if("id"===t)return[a[e]];h=[t],f=1,s=[t.split(":")],i=!0}for(l=(n=o||n||Object.keys(a)).length,p=0;p<l;p++){d=o?n[p]:a[n[p]];for(var v=!0,y=0;y<f;y++){i||(e=t[h[y]]);var g=s[y],m=g.length,b=d;if(1<m)for(var j=0;j<m;j++)b=b[g[j]];else b=b[g[0]];if(b!==e){v=!1;break}}if(v&&(c[u++]=d,r&&u===r))break}return c},r.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:_.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(var t=0;t<this.g;t++)this.m[t].postMessage({info:!0,id:this.id})},r.prototype.clear=function(){return this.destroy().init()},r.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){for(var t=this.a.keys,e=0;e<t.length;e++)this.a.index[t[e]].destroy();this.a=this.l=null}return this},r.prototype.export=function(t){var e=!t||k(t.serialize)||t.serialize;if(this.a){var r=!t||k(t.doc)||t.doc,n=!t||k(t.index)||t.index;t=[];var i=0;if(n)for(n=this.a.keys;i<n.length;i++){var s=this.a.index[n[i]];t[i]=[s.i,s.h,Object.keys(s.c)]}r&&(t[i]=this.l)}else t=[this.i,this.h,Object.keys(this.c)];return e&&(t=JSON.stringify(t)),t},r.prototype.import=function(t,e){(!e||k(e.serialize)||e.serialize)&&(t=JSON.parse(t));var r=O();if(this.a){var n=!e||k(e.doc)||e.doc,i=0;if(!e||k(e.index)||e.index){for(var s=(e=this.a.keys).length,o=t[0][2];i<o.length;i++)r[o[i]]=1;for(i=0;i<s;i++){o=this.a.index[e[i]];var a=t[i];a&&(o.i=a[0],o.h=a[1],o.c=r)}}n&&(this.l=w(n)?n:t[i])}else{for(n=t[2],i=0;i<n.length;i++)r[n[i]]=1;this.i=t[0],this.h=t[1],this.c=r}};var N,R,L,P,q=(R=c("\\s+"),L=c("[^a-z0-9 ]"),P=[c("[-/]")," ",L,"",R," "],function(t){return l(u(t.toLowerCase(),P))}),z={icase:function(t){return t.toLowerCase()},simple:function(){var t=c("\\s+"),e=c("[^a-z0-9 ]"),r=c("[-/]"),n=[c("[àáâãäå]"),"a",c("[èéêë]"),"e",c("[ìíîï]"),"i",c("[òóôõöő]"),"o",c("[ùúûüű]"),"u",c("[ýŷÿ]"),"y",c("ñ"),"n",c("[çc]"),"k",c("ß"),"s",c(" & ")," and ",r," ",e,"",t," "];return function(t){return" "===(t=u(t.toLowerCase(),n))?"":t}}(),advanced:function(){var t=c("ae"),e=c("ai"),r=c("ay"),n=c("ey"),i=c("oe"),s=c("ue"),o=c("ie"),a=c("sz"),h=c("zs"),f=c("ck"),p=c("cc"),d=[t,"a",e,"ei",r,"ei",n,"ei",i,"o",s,"u",o,"i",a,"s",h,"s",c("sh"),"s",f,"k",p,"k",c("th"),"t",c("dt"),"t",c("ph"),"f",c("pf"),"f",c("ou"),"o",c("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=u(t,d)),e||1<t.length&&(t=l(t)),t):t}}(),extra:(N=[c("p"),"b",c("z"),"s",c("[cgq]"),"k",c("n"),"m",c("d"),"t",c("[vw]"),"f",c("[aeiouy]"),""],function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(var e=0;e<t.length;e++){var r=t[e];1<r.length&&(t[e]=r[0]+u(r.substring(1),N))}t=l(t=t.join(" "))}return t}),balance:q},B=function(){function t(t){this.clear(),this.H=!0!==t&&t}return t.prototype.clear=function(){this.cache=O(),this.count=O(),this.index=O(),this.s=[]},t.prototype.set=function(t,e){if(this.H&&k(this.cache[t])){var r=this.s.length;if(r===this.H){r--;var n=this.s[r];delete this.cache[n],delete this.count[n],delete this.index[n]}this.index[t]=r,this.s[r]=t,this.count[t]=-1,this.cache[t]=e,this.get(t)}else this.cache[t]=e},t.prototype.get=function(t){var e=this.cache[t];if(this.H&&e){var r=++this.count[t],n=this.index,i=n[t];if(0<i){for(var s=this.s,o=i;this.count[s[--i]]<=r&&-1!==i;);if(++i!==o){for(r=o;r>i;r--)o=s[r-1],s[r]=o,n[o]=r;s[i]=t,n[t]=i}}}return e},t}();return r}((e={},r="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL,function(t,n,i,s,o){return i=r?URL.createObjectURL(new Blob(["("+i.toString()+")()"],{type:"text/javascript"})):t+".min.js",e[t+="-"+n]||(e[t]=[]),e[t][o]=new Worker(i),e[t][o].onmessage=s,e[t][o]})),this)},4734:function(t){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},4751:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}}}]);
//# sourceMappingURL=f246234826cec0fdd8c22ef8eca1e50b64a62708-78779861c24e67e59857.js.map