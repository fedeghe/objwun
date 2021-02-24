'use strict';
/*
objwun v. 1.1.6
fedeghe <fedeghe@gmail.com>

Isomorphic ES3 library to common stuff on object literals and arrays
~7.26KB on 24/2/2021
*/
var objwun=function(){function r(){var r,n=g.ut.args2arr(arguments),t={},i=-1,e=n.length;if(e)for(;++i<e;){g.mustBe.obj(n[i]);for(r in n[i])n[i].hasOwnProperty(r)&&(t[r]=JSON.parse(JSON.stringify(n[i][r])))}return t}function n(r){return g.mustBe.objOrArr(r),JSON.parse(JSON.stringify(r))}function t(r,n){var t,i=function(){var i=[].slice.call(arguments),e=this;clearTimeout(t),t=setTimeout(function(){return r.apply(e,i)},n)};return i.cancel=function(){clearTimeout(t)},i}function i(r,n){g.mustBe.arr(r),g.mustBe.func(n);for(var t=[],i=-1,e=r.length;++i<e;)n(r[i],i)&&t.push(r[i]);return t}function e(r,n){g.mustBe.arr(r),g.mustBe.func(n);for(var t=-1,i=r.length;++t<i;)if(n(r[t],t))return r[t];return null}function u(r,n){g.mustBe.arr(r),g.mustBe.func(n);for(var t=-1,i=r.length;++t<i;)if(n(r[t],t))return t;return-1}function o(r,n){var t=g.mustBe.objOrArr(r);return n=n||function(r){return r},t.isObj?g.ut.objLoop(r,n):g.ut.arrLoop(r,n)}function f(r,n,t){if(g.mustBe.objOrArr(r),g.mustBe.defined(n),c(r)||c(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});for(var i=n.split("."),e=r,u=-1,o=i.length;++u<o;){if(!(i[u]in e))return t||null;e=e[i[u]]}return e}function s(r,n){g.mustBe.arr(r),g.mustBe.defined(n);for(var t=-1,i=r.length;++t<i;)if(r[t]===n)return!0;return!1}function c(r){return g.mustBe.defined(r),""===r||null===r||g.in.isStr(r)&&0===r.length||g.in.isArr(r)&&0===r.length||g.in.isObj(r)&&function(){for(var n in r)if(r.hasOwnProperty(n))return!1;return!0}()}function a(r,n){g.mustBe.arr(r),g.mustBe.funcOrStr(n);var t={},i=-1,e=r.length;if("function"==typeof n)for(;++i<e;)t[n(r[i])]=r[i];else for(;++i<e;)t[r[i][n]]=r[i];return t}function E(r,n){return g.mustBe.objOrArr(r),n=n||function(r){return r},g.in.isObj(r)?g.ut.objLoop(r,n):g.ut.arrLoop(r,n)}function l(){var r=g.ut.args2arr(arguments);return g.in.isArr(r[0])?(o(r,g.mustBe.arr),m(r,function(r,t){return r=r.concat(n(t))},[])):g.in.isObj(r[0])?(o(r,g.mustBe.obj),m(r,function(r,t){for(var i in t)r[i]=g.in.isPrimitive(t[i])?t[i]:n(t[i]);return r},{})):null}function m(r,n,t){g.mustBe.objOrArr(r),g.mustBe.func(n);var i=g.in.isObj(r),e=g.in.isArr(r),u=t||(i?{}:[]);if(i)for(var o in r)u=n(u,r[o],o,r);if(e)for(var f=0,s=r.length;f<s;f++)u=n(u,r[f],f,r);return u}function _(r,n){g.mustBe.arr(r);var t,i=g.mustBe.funcOrArr(n),e=[].concat(r);if(i.isFunc)for(var u=0;u<e.length;null)n(e[u],u)?e=e.slice(0,u).concat(e.slice(u+1)):u++;else{t=[].concat(n).sort(function(r,n){return r>n?-1:1});for(var u=0,o=t.length;u<o;u++)e=e.slice(0,t[u]).concat(e.slice(t[u]+1))}return e}function A(r,n){g.mustBe.arr(r),g.mustBe.func(n);for(var t=0,i=r.length;t<i;t++)if(n(r[t],t))return!0;return!1}function N(r,n,t){g.mustBe.objOrArr(r),g.mustBe.str(n),g.mustBe.defined(t),n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=function(r){return r.match(/(__proto__|constructor|prototype)/)},e=n.split("."),u=g.ut.clone(r),o=0,f=e.length,s=u;for(null;o<f-1;o++){if(i(e[o]))return s;e[o]in s&&!g.in.isPrimitive(s[e[o]])||(s[e[o]]=e[o+1].match(/\d+/)?[]:{}),s=s[e[o]]}return i(e[o])?s:(s[e[o]]=g.in.isPrimitive(t)?t:g.ut.clone(t),u)}function I(r,n,t){g.mustBe.arr(r),g.mustBe.funcOrStr(n);var i=[].concat(r);return t=t||1,"function"==typeof n?i.sort(function(r,i){return n(r)<n(i)?-t:t}):i.sort(function(r,i){return r[n]<i[n]?-t:t})}function v(r,n,t){g.mustBe.num(r),g.mustBe.func(n),t=t||null;var i=[],e=0;for(null;e<r;e++)i[e]=n.call(t,e);return i}function T(r){var n={},t=0,i=r.length,e=[];for(null;t<i;t++)n[r[t]]=r[t];for(var u in n)e.push(n[u]);return e}var g={};return g.errors={INVALID_ARGUMENT_ARRAY_EXPECTED:"Invalid argument, array expected",INVALID_ARGUMENT_OBJECT_EXPECTED:"Invalid argument, object expected",INVALID_ARGUMENT_INTEGER_EXPECTED:"Invalid argument, integer expected",INVALID_ARGUMENT_FUNCTION_EXPECTED:"Invalid argument, function expected",INVALID_ARGUMENT_STRING_EXPECTED:"Invalid argument, string expected",INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED:"Invalid argument, string or function expected",INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED:"Invalid argument, array or function expected",INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED:"Invalid argument, object or array expected",MISSING_EXPECTED_ARGUMENT:"Missing expected argument"},function(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){g.mustBe.obj(n),g.mustBe.arr(t);var i={};for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t={};for(var i in r)r.hasOwnProperty(i)&&(t[i]=n(r[i],i));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){return JSON.parse(JSON.stringify(r))}g.ut={args2arr:r,arrLoop:i,clone:e,objLoop:t,pick_omit:n}}(),function(){function r(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function n(r){var n={}.toString.call(r).match(/\[object\sArray\]/);return String(r)!==r&&!(!n||!n.length)}function t(r){return"function"==typeof r}function i(r){return"string"==typeof r}function e(r){return"boolean"==typeof r}function u(r){return"number"==typeof r}function o(r){return void 0===r}function f(r){return void 0!==r}function s(r){return"symbol"==typeof r}function c(r){return"bigint"==typeof r}function a(r){return u(r)||i(r)||e(r)||s(r)||o(r)||c(r)}g.in={isArr:n,isBool:e,isBigint:c,isDef:f,isFunc:t,isNum:u,isObj:r,isPrimitive:a,isStr:i,isSymbol:s,isUndef:o}}(),function(){function r(r){if(!g.in.isArr(r))throw new Error(g.errors.INVALID_ARGUMENT_ARRAY_EXPECTED);return!0}function n(r){if(g.in.isUndef(r))throw new Error(g.errors.MISSING_EXPECTED_ARGUMENT);return!0}function t(r){if(!g.in.isFunc(r))throw new Error(g.errors.INVALID_ARGUMENT_FUNCTION_EXPECTED);return!0}function i(r){if(!g.in.isNum(r))throw new Error(g.errors.INVALID_ARGUMENT_INTEGER_EXPECTED);return!0}function e(r){if(!g.in.isObj(r))throw new Error(g.errors.INVALID_ARGUMENT_OBJECT_EXPECTED);return!0}function u(r){if(!g.in.isStr(r))throw new Error(g.errors.INVALID_ARGUMENT_STRING_EXPECTED);return!0}function o(r){var n=g.in.isStr(r),t=g.in.isFunc(r);if(!n&&!t)throw new Error(g.errors.INVALID_ARGUMENT_STRING_OR_FUNCTION_EXPECTED);return{isFunc:t,isStr:n}}function f(r){var n=g.in.isArr(r),t=g.in.isFunc(r);if(!n&&!t)throw new Error(g.errors.INVALID_ARGUMENT_ARRAY_OR_FUNCTION_EXPECTED);return{isFunc:t,isArr:n}}function s(r){var n=g.in.isArr(r),t=g.in.isObj(r);if(!t&&!n)throw new Error(g.errors.INVALID_ARGUMENT_OBJECT_OR_ARRAY_EXPECTED);return{isObj:t,isArr:n}}g.mustBe={arr:r,defined:n,func:t,funcOrStr:o,funcOrArr:f,num:i,obj:e,objOrArr:s,str:u}}(),{assign:r,clone:n,debounce:t,filter:i,find:e,findIndex:u,forEach:o,get:f,id:new function(){var r=0,n=this;this.prefix="id_",this.toString=function(){return r+=1,n.prefix+r}},includes:s,isEmpty:c,keyBy:a,map:E,merge:l,omit:g.ut.pick_omit(function(r){return r<0}),pick:g.ut.pick_omit(function(r){return r>=0}),reduce:m,remove:_,set:N,some:A,sortBy:I,times:v,uniq:T,isArray:g.in.isArr,isBigint:g.in.isBigint,isFunction:g.in.isFunc,isObject:g.in.isObj,isString:g.in.isStr,isBoolean:g.in.isBool,isNumber:g.in.isNum,isUndefined:g.in.isUndef,isDefined:g.in.isDef,isSymbol:g.in.isSymbol,isPrimitive:g.in.isPrimitive}}();"object"==typeof exports&&(module.exports=objwun);