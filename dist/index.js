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
})(function _(){function r(r){return[].slice.call(r,0)}function n(r){return function(n,t){var i={};t=t||[];for(var e in n)n.hasOwnProperty(e)&&r(t.indexOf(e))&&(i[e]=n[e]);return i}}function t(r,n){var t=[],i=0;for(var e in r)r.hasOwnProperty(e)&&(t[i++]=n(r[e],e));return t}function i(r,n){var t=[],i=0,e=r.length;for(null;i<e;i++)t[i]=n(r[i],i);return t}function e(r){var n=String(r)!==r,t=r===Object(r),i="function"!=typeof r,e={}.toString.call(r).match(/\[object\sObject\]/);return n&&t&&i&&!(!e||!e.length)}function o(r){if(Array.isArray&&Array.isArray(r))return!0;var n=String(r)!==r,t={}.toString.call(r).match(/\[object\sArray\]/);return n&&!(!t||!t.length)}function u(r){return void 0===r}function c(){var r=y.utils.arguments2array(arguments).filter(y.introspection.isObject),n={};if(r.length){for(var t=0,i=r.length;t<i;t++)for(var e in r[t])r[t].hasOwnProperty(e)&&(n[e]=r[t][e]);return n}return n}function a(r,n){r=r||0;var t=[],i=0;for(null;i<r;i++)t[i]=n.call(null,i);return t}function f(r,n){var t=[];return n=n||function(r){return r},y.introspection.isObject(r)?y.utils.objLoop(r,n):y.introspection.isArray(r)?y.utils.arrayLoop(r,n):t}function s(r,n,t){var i=y.introspection.isObject(r),e=y.introspection.isArray(r),o=t||(i?{}:[]);if(i)for(var u in r)o=n(o,r[u],u,r);if(e)for(var c=0,a=r.length;c<a;c++)o=n(o,r[c],c,r);return o}function l(r){return""===r||null===r||y.introspection.isUndefined(r)||y.introspection.isArray(r)&&0===r.length||y.introspection.isObject(r)&&("function"==typeof Object.keys&&0===Object.keys(r).length&&r.constructor===Object||function(){for(var n in r)if(r.hasOwnProperty(n))return!1}())}function p(r,n,t){if(l(r)||l(n))return t||null;n=n.replace(/\[(\d+)\]/g,function(r,n){return"."+n});var i=n.split("."),e=r,o=0,u=i.length;for(null;o<u;o++){if(!(i[o]in e))return t||null;e=e[i[o]]}return e}var y={};return y.utils={arguments2array:r,arrayLoop:i,objLoop:t,pick_omit:n},y.introspection={isArray:o,isUndefined:u,isObject:e},{assign:c,get:p,isEmpty:l,map:f,omit:y.utils.pick_omit(function(r){return r<0}),pick:y.utils.pick_omit(function(r){return r>=0}),reduce:s,times:a}});