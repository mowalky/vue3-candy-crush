(function(n){function e(e){for(var a,c,u=e[0],i=e[1],d=e[2],f=0,l=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(t,c)&&t[c]&&l.push(t[c][0]),t[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a]);A&&A(e);while(l.length)l.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var n,e=0;e<o.length;e++){for(var r=o[e],a=!0,u=1;u<r.length;u++){var i=r[u];0!==t[i]&&(a=!1)}a&&(o.splice(e--,1),n=c(c.s=r[0]))}return n}var a={},t={app:0},o=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=n,c.c=a,c.d=function(n,e,r){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},c.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)c.d(r,a,function(e){return n[e]}.bind(null,a));return r},c.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="/vue3-candy-crush/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var A=i;o.push([0,"chunk-vendors"]),r()})({0:function(n,e,r){n.exports=r("56d7")},"0de3":function(n,e){n.exports="data:image/png;base64,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"},"13c8":function(n,e,r){n.exports=r.p+"img/yellow-candy.8c856b89.png"},"29b1":function(n,e,r){n.exports=r.p+"img/purple-special.fdc58fa6.png"},"31f2":function(n,e,r){n.exports=r.p+"img/blue-candy.cd3d65b4.png"},"56d7":function(n,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),t={id:"app"},o={class:"game"},c=["data-id","onDragstart","onDrop","src"];function u(n,e,u,i,d,A){return Object(a["e"])(),Object(a["c"])("div",t,[Object(a["d"])("div",o,[(Object(a["e"])(!0),Object(a["c"])(a["a"],null,Object(a["g"])(i.randomColorArrangement,(function(n,t){return Object(a["e"])(),Object(a["c"])("img",{key:t,"data-id":t,onDragstart:function(e){return i.dragStart({index:t,candy:n})},onDrop:function(e){return i.dragDrop({index:t,candy:n})},onDragover:e[0]||(e[0]=function(n){return n.preventDefault()}),onDragenter:e[1]||(e[1]=function(n){return n.preventDefault()}),onDragleave:e[2]||(e[2]=function(n){return n.preventDefault()}),onDragend:e[3]||(e[3]=function(){return i.dragEnd&&i.dragEnd.apply(i,arguments)}),draggable:"",src:r("9e01")("./".concat(n,".png"))},null,40,c)})),128))])])}var i=r("53ca"),d=(r("99af"),r("caad"),r("2532"),r("159b"),{setup:function(){var n=8,e=["blue-candy","blue-special","green-candy","green-special"],r=Object(a["f"])({}),t=Object(a["f"])({}),o=Object(a["f"])([]),c=function(){for(var r=0;r<n*n;r++){var a=e[Math.floor(e.length*Math.random())];o.value.push(a)}},u=function(n){var e=n.index,a=n.candy;console.log("drag ".concat(a," start ").concat(e)),r.value={index:e,candy:a}},d=function(n){var e=n.index,r=n.candy;console.log("drag ".concat(r," dropped on ").concat(e)),t.value={index:e,candy:r}},A=function(){console.log("drag end");var e=parseInt(t.value.index),a=parseInt(r.value.index);o.value[e]=r.value.candy,o.value[a]=t.value.candy,console.log("squareBeingReplacedId ".concat(e)),console.log("squareBeingDraggedId ".concat(a));var c=[a-1,a-n,a+1,a+n],u=c.includes(e),i=f(),d=l(),A=g(),v=p();e&&u&&(i||d||A||v)?(r.value={},t.value={}):(o.value[e]=t.value.candy,o.value[a]=r.value.candy)},f=function(){for(var e=function(e){var r=[e,e+n,e+2*n],a=o.value[e];if(r.every((function(n){return o.value[n]===a})))return r.forEach((function(n){return o.value[n]="blank"})),{v:!0}},r=0;r<47;r++){var a=e(r);if("object"===Object(i["a"])(a))return a.v}},l=function(){for(var e=function(n){var e=[n,n+1,n+2],r=o.value[n],a=[6,7,14,15,22,23,30,31,38,39,46,54,55,63,64];return a.includes(n)?"continue":e.every((function(n){return o.value[n]===r}))?(e.forEach((function(n){return o.value[n]="blank"})),{v:!0}):void 0},r=0;r<n*n;r++){var a=e(r);if("continue"!==a&&"object"===Object(i["a"])(a))return a.v}},g=function(){for(var e=function(e){var r=[e,e+n,e+2*n],a=o.value[e];if(r.every((function(n){return o.value[n]===a})))return r.forEach((function(n){return o.value[n]="blank"})),{v:!0}},r=0;r<47;r++){var a=e(r);if("object"===Object(i["a"])(a))return a.v}},p=function(){for(var e=function(n){var e=[n,n+1,n+2,n+3],r=o.value[n],a=[5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,47,53,54,55,63,64];return a.includes(n)?"continue":e.every((function(n){return o.value[n]===r}))?(e.forEach((function(n){return o.value[n]="blank"})),{v:!0}):void 0},r=0;r<n*n;r++){var a=e(r);if("continue"!==a&&"object"===Object(i["a"])(a))return a.v}},v=function(){for(var r=0;r<n*n-n;r++){var a=[0,1,2,3,4,5,6,7],t=a.includes(r);if(t&&"blank"===o.value[r]){var c=e[Math.floor(e.length*Math.random())];o.value[r]=c}"blank"===o.value[r+n]&&(o.value[r+n]=o.value[r],o.value[r]="blank")}};c(),setInterval((function(){f(),l(),g(),p(),v()}),100);var s=function(){o.value[Math.floor(o.value.length*Math.random())]=""};return{randomColorArrangement:o,update:s,dragStart:u,dragEnd:A,dragDrop:d}}}),A=(r("d5a9"),r("6b0d")),f=r.n(A);const l=f()(d,[["render",u]]);var g=l;Object(a["b"])(g).mount("#app")},"64a9":function(n,e,r){n.exports=r.p+"img/color-bomb.3c145ff7.png"},"73a1":function(n,e,r){n.exports=r.p+"img/blue-special.29446b39.png"},"78e4":function(n,e,r){n.exports=r.p+"img/green-special.7b7ac0d1.png"},"9e01":function(n,e,r){var a={"./blank.png":"a163","./blue-candy.png":"31f2","./blue-special.png":"73a1","./color-bomb.png":"64a9","./green-candy.png":"de03","./green-special.png":"78e4","./orange-candy.png":"b136","./orange-special.png":"f117","./purple-candy.png":"f0bc","./purple-special.png":"29b1","./red-candy.png":"0de3","./red-special.png":"e59e","./yellow-candy.png":"13c8"};function t(n){var e=o(n);return r(e)}function o(n){if(!r.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}t.keys=function(){return Object.keys(a)},t.resolve=o,n.exports=t,t.id="9e01"},a163:function(n,e){n.exports="data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},ac27:function(n,e,r){},b136:function(n,e,r){n.exports=r.p+"img/orange-candy.b5b4904e.png"},d5a9:function(n,e,r){"use strict";r("ac27")},de03:function(n,e,r){n.exports=r.p+"img/green-candy.f9cad007.png"},e59e:function(n,e,r){n.exports=r.p+"img/red-special.dd0b39f8.png"},f0bc:function(n,e,r){n.exports=r.p+"img/purple-candy.23710d68.png"},f117:function(n,e,r){n.exports=r.p+"img/orange-special.4e16e8d0.png"}});
//# sourceMappingURL=app.9b61f66b.js.map