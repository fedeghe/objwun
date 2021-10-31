'use strict';
/*
objwun v. 1.1.9
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~7.42KB on 31/10/2021
*/
var objwun=function(){function r(){var r,n=p.ut.args2arr(arguments),t={},i=-1,e=n.length;if(e)for(;++i<e;){p.mustBe.obj(n[i]);for(r in n[i])n[i].hasOwnProperty(r)&&(t[r]=JSON.parse(JSON.stringify(n[i][r])))}return t}function n(r){return p.mustBe.objOrArr(r),JSON.parse(JSON.stringify(r))}function t(r,n){var t,i=function(){var i=[].slice.call(arguments),e=this;clearTimeout(t),t=setTimeout(function(){return r.apply(e,i)},n)};return i.cancel=function(){clearTimeout(t)},i}function i(r,n){p.mustBe.arr(r),p.mustBe.func(n);for(var t=[],i=-1,e=r.length;++i<e;)n(r[i],i)&&t.push(r[i]);return t}function e(r,n){p.mustBe.arr(r),p.mustBe.func(n);for(var t=-1,i=r.length;++t<i;)if(n(r[t],t))return r[t];return null}function u(r,n){p.mustBe.arr(r),p.mustBe.func(n);for(var t=-1,i=r.length;++t<i;)if(n(r[t],t))return t;return-1}function o(r,n){var t=p.mustBe.objOrArr(r);return n=n||function(r){return r},t.isObj?p.ut.objLoop(r,n):p.ut.arrLoop(r,n)}function f(r,n,t){if(p.mustBe.objOrArr(r),p.mustBe.defined(n),a(r)||a(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});for(var i=n.split("."),e=r,u=-1,o=i.length;++u<o;){if(!(i[u]in e))return t||null;e=e[i[u]]}return e}function s(r,n){p.mustBe.arr(r),p.mustBe.defined(n);for(var t=-1,i=r.length;++t<i;)if(r[t]===n)return!0;return!1}function c(){for(var r=p.ut.args2arr(arguments),n=[].slice.call(r[0],0),t=r.length,i=1;i<t;)n=n.filter(function(n){return r[i].includes(n)}),i++;return n}function a(r){return p.mustBe.defined(r),""===r||null===r||p.in.isStr(r)&&0===r.length||p.in.isArr(r)&&0===r.length||p.in.isObj(r)&&function(){for(var n in r)if(r.hasOwnProperty(n))return!1;return!0}()}function l(r,n){p.mustBe.arr(r),p.mustBe.funcOrStr(n);var t={},i=-1,e=r.length;if("function"==typeof n)for(;++i<e;)t[n(r[i])]=r[i];else for(;++i<e;)t[r[i][n]]=r[i];return t}function E(r,n){return p.mustBe.objOrArr(r),n=n||function(r){return r},p.in.isObj(r)?p.ut.objLoop(r,n):p.ut.arrLoop(r,n)}function m(){var r=p.ut.args2arr(arguments);return p.in.isArr(r[0])?(o(r,p.mustBe.arr),_(r,function(r,t){return r=r.concat(n(t))},[])):p.in.isObj(r[0])?(o(r,p.mustBe.obj),_(r,function(r,t){for(var i in t)r[i]=p.in.isPrimitive(t[i])?t[i]:n(t[i]);return r},{})):null}function _(r,n,t){p.mustBe.objOrArr(r),p.mustBe.func(n);var i=p.in.isObj(r),e=p.in.isArr(r),u=t||(i?{}:[]);if(i)for(var o in r)u=n(u,r[o],o,r);if(e)for(var f=0,s=r.length;f<s;f++)u=n(u,r[f],f,r);return u}function A(r,n){p.mustBe.arr(r);var t,i=p.mustBe.funcOrArr(n),e=[].concat(r);if(i.isFunc)for(var u=0;u<e.length;null)n(e[u],u)?e=e.slice(0,u).concat(e.slice(u+1)):u++;else{t=[].concat(n).sort(function(r,n){return r>n?-1:1});for(var u=0,o=t.length;u<o;u++)e=e.slice(0,t[u]).concat(e.slice(t[u]+1))}return e}function N(r,n){p.mustBe.arr(r),p.mustBe.func(n);for(var t=0,i=r.length;t<i;t++)if(n(r[t],t))return!0;return!1}function I(r,n,t){p.mustBe.objOrArr(r),p.mustBe.str(n),p.mustBe.defined(t),n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=function(r){return r.match(/(__proto__|constructor|prototype)/)},e=n.split("."),u=p.ut.clone(r),o=0,f=e.length,s=u;for(null;o<f-1;o++){if(i(e[o]))return s;e[o]in s&&!p.in.isPrimitive(s[e[o]])||(s[e[o]]=e[o+1].match(/\d+/)?[]:{}),s=s[e[o]]}return i(e[o])?s:(s[e[o]]=p.in.isPrimitive(t)?t:p.ut.clone(t),u)}function v(r,n,t){p.mustBe.arr(r),p.mustBe.funcOrStr(n);var i=[].concat(r);return t=t||1,"function"==typeof n?i.sort(function(r,i){return n(r)<n(i)?-t:t}):i.sort(function(r,i){return r[n]<i[n]?-t:t})}function g(r,n,t){p.mustBe.num(r),p.mustBe.func(n),t=t||null;var i=[],e=0;for(null;e<r;e++)i[e]=n.call(t,e);return i}function T(r){var n={},t=0,i=r.length,e=[];for(null;t<i;t++)n[r[t]]=r[t];for(var u in n)e.push(n[u]);return e}var p={};return p.errors={INVALID_ARGUMENT_ARRAY_EXPECTED:"Invalid argument, array expected",INVALID_ARGUMENT_OBJECT_EXPECTED:"Invalid argument, object expected",INVALID_ARGUMENT_INTEGER_EXPECTED:"Invalid argument, integer expected",INVALID_ARGUMENT_FUNCTION_EXPECTED:"Invalid argument, function expected",INVALID_ARGUMENT_STRING_EXPECTED:"Invalid argument, string expected",INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED:"Invalid argument, string or function expected",INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED:"Invalid argument, array or function expected",INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED:"Invalid argument, object or array expected",MISSING_EXPECTED_ARGUMENT:"Missing expected argument"},function(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){p.mustBe.obj(n),p.mustBe.arr(t);var i={};for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t={};for(var i in r)r.hasOwnProperty(i)&&(t[i]=n(r[i],i));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){return JSON.parse(JSON.stringify(r))}p.ut={args2arr:r,arrLoop:i,clone:e,objLoop:t,pick_omit:n}}(),function(){function r(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function n(r){var n={}.toString.call(r).match(/\[object\sArray\]/);return String(r)!==r&&!(!n||!n.length)}function t(r){return"function"==typeof r}function i(r){return"string"==typeof r}function e(r){return"boolean"==typeof r}function u(r){return"number"==typeof r}function o(r){return void 0===r}function f(r){return void 0!==r}function s(r){return"symbol"==typeof r}function c(r){return"bigint"==typeof r}function a(r){return u(r)||i(r)||e(r)||s(r)||o(r)||c(r)}p.in={isArr:n,isBool:e,isBigint:c,isDef:f,isFunc:t,isNum:u,isObj:r,isPrimitive:a,isStr:i,isSymbol:s,isUndef:o}}(),function(){function r(r){if(!p.in.isArr(r))throw new Error(p.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);return!0}function n(r){if(p.in.isUndef(r))throw new Error(p.errors.MISSING_EXPECTED_ARGUMENT);return!0}function t(r){if(!p.in.isFunc(r))throw new Error(p.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);return!0}function i(r){if(!p.in.isNum(r))throw new Error(p.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);return!0}function e(r){if(!p.in.isObj(r))throw new Error(p.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);return!0}function u(r){if(!p.in.isStr(r))throw new Error(p.errors.INVALID_ARGUMENT_STRING_EXPECTED);return!0}function o(r){var n=p.in.isStr(r),t=p.in.isFunc(r);if(!n&&!t)throw new Error(p.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);return{isFunc:t,isStr:n}}function f(r){var n=p.in.isArr(r),t=p.in.isFunc(r);if(!n&&!t)throw new Error(p.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);return{isFunc:t,isArr:n}}function s(r){var n=p.in.isArr(r),t=p.in.isObj(r);if(!t&&!n)throw new Error(p.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);return{isObj:t,isArr:n}}p.mustBe={arr:r,defined:n,func:t,funcOrStr:o,funcOrArr:f,num:i,obj:e,objOrArr:s,str:u}}(),{assign:r,clone:n,debounce:t,filter:i,find:e,findIndex:u,forEach:o,get:f,id:new function(){var r=0,n=this;this.prefix="id_",this.toString=function(){return r+=1,n.prefix+r}},includes:s,intersection:c,isEmpty:a,keyBy:l,map:E,merge:m,omit:p.ut.pick_omit(function(r){return r<0}),pick:p.ut.pick_omit(function(r){return r>=0}),reduce:_,remove:A,set:I,some:N,sortBy:v,times:g,uniq:T,isArray:p.in.isArr,isBigint:p.in.isBigint,isFunction:p.in.isFunc,isObject:p.in.isObj,isString:p.in.isStr,isBoolean:p.in.isBool,isNumber:p.in.isNum,isUndefined:p.in.isUndef,isDefined:p.in.isDef,isSymbol:p.in.isSymbol,isPrimitive:p.in.isPrimitive}}();"object"==typeof exports&&(module.exports=objwun);