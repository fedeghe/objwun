/*
objwun v. 0.0.0
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~1KB on 8/8/2020
*/
!function(n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):("undefined"!=typeof window?root=window:"undefined"!=typeof global?root=global:"undefined"!=typeof self?root=self:root=this,root.objwun=n.call(root))}(function(){function n(){var n=e.arguments2array(arguments).filter(function(n){return e.isObject(n)}),t={};return n.length?(n.forEach(function(n){t=Object.assign({},t,n)}),t):t}function t(n,t){n=n||0;var e=[],o=0;for(null;o<n;o++)e[o]=t.call(null,o);return e}var e=function(){function n(n){return[].slice.call(n,0)}function t(n){var t=String(n)!==n,e=n===Object(n),o="function"!=typeof n,r={}.toString.call(n).match(/\[object\sObject\]/);return t&&e&&o&&!(!r||!r.length)}function e(n){return function(t,e){var o={};e=e||[];for(var r in t)t.hasOwnProperty(r)&&n(e.indexOf(r))&&(o[r]=t[r]);return o}}return{arguments2array:n,isObject:t,pick_omit:e}}();return{assign:n,times:t,omit:e.pick_omit(function(n){return n<0}),pick:e.pick_omit(function(n){return n>=0})}});