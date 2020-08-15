/*
objwun v. 0.0.0
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~2KB on 15/8/2020
*/
(function(fn) {
    /* istanbul ignore next */
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = fn();
	} else if (typeof define === "function" && define.amd) {
		define([], fn);
	} else {
		if (typeof window !== "undefined") {
			root = window;
		} else if (typeof global !== "undefined") {
			root = global;
		} else if (typeof self !== "undefined") {
			root = self;
		} else {
			root = this;
		}
		root.objwun = fn.call(root);
	}
})(function _(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){var i={};t=t||[];for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t=[],i=0;for(var e in r)r.hasOwnProperty(e)&&(t[i++]=n(r[e],e));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function u(r){if(Array.isArray&&Array.isArray(r))return!0;var n=String(r)!==r,t={}.toString.call(r).match(/\[object\sArray\]/);return n&&!(!t||!t.length)}function o(r){return void 0===r}function a(){var r=v.utils.arguments2array(arguments).filter(v.in.isObject),n={};if(r.length){for(var t=0,i=r.length;t<i;t++)for(var e in r[t])r[t].hasOwnProperty(e)&&(n[e]=r[t][e]);return n}return n}function c(r,n,t){r=r||0,t=t||null;var i=[],e=0;for(null;e<r;e++)i[e]=n.call(t,e);return i}function f(r,n){var t=[];return n=n||function(r){return r},v.in.isObject(r)?v.utils.objLoop(r,n):v.in.isArray(r)?v.utils.arrayLoop(r,n):t}function l(r,n,t){var i=v.in.isObject(r),e=v.in.isArray(r),u=t||(i?{}:[]);if(i)for(var o in r)u=n(u,r[o],o,r);if(e)for(var a=0,c=r.length;a<c;a++)u=n(u,r[a],a,r);return u}function s(r){return""===r||null===r||v.in.isUndefined(r)||v.in.isArray(r)&&0===r.length||v.in.isObject(r)&&("function"==typeof Object.keys&&0===Object.keys(r).length&&r.constructor===Object||function(){for(var n in r)if(r.hasOwnProperty(n))return!1}())}function y(r,n,t){if(s(r)||s(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=n.split("."),e=r,u=0,o=i.length;for(null;u<o;u++){if(!(i[u]in e))return t||null;e=e[i[u]]}return e}var v={};return v.utils={arguments2array:r,arrayLoop:i,objLoop:t,pick_omit:n},v.in={isArray:u,isUndefined:o,isObject:e},{assign:a,get:y,isEmpty:s,map:f,omit:v.utils.pick_omit(function(r){return r<0}),pick:v.utils.pick_omit(function(r){return r>=0}),reduce:l,times:c}});