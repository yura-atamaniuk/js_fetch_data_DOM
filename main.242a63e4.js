parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",n="https://mate-academy.github.io/phone-catalogue-static/api/phones/:phoneId.json";function e(t){return new Promise(function(n,e){fetch(t).then(function(t){return t.json()}).then(function(t){return n(t)}),setTimeout(function(){e(new Error("Error: data cannot be loaded"))},5e3)})}function o(t){var e=t.map(function(t){return fetch("".concat(n).concat(t,".json"))});return Promise.all(e)}var a=document.createElement("ul"),c=document.querySelector("body");e(t).then(function(t){t.forEach(function(t){var n=document.createElement("li");n.textContent=t.name,a.append(n),c.append(a)})}).then(function(t){return o(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.242a63e4.js.map