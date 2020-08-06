/*
objwun v. 0.0.0
fedeghe <fedeghe@gmail.com>

A library to deal efficiently with Object literals
~1KB on 6/8/2020
*/
!function(n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):("undefined"!=typeof window?root=window:"undefined"!=typeof global?root=global:"undefined"!=typeof self?root=self:root=this,root.objwun=n.call(root))}(function(){function n(){var n=r.arguments2array(arguments).filter(function(n){return r.isObject(n)}),t={};return n.length?(n.forEach(function(n){t=Object.assign({},t,n)}),t):t}function t(n,t){n=n||0;var e=[],o=0;for(null;o<n;o++)e[o]=t.call(null,o);return e}function e(n,t){var e={};t=t||[];for(var o in n)n.hasOwnProperty(o)&&t.indexOf(o)<0&&(e[o]=n[o]);return e}function o(n,t){var e={};t=t||[];for(var o in n)n.hasOwnProperty(o)&&t.indexOf(o)>=0&&(e[o]=n[o]);return e}var r=function(){function n(n){return[].slice.call(n,0)}function t(n){var t=String(n)!==n,e=n===Object(n),o="function"!=typeof n,r={}.toString.call(n).match(/\[object\sObject\]/);return t&&e&&o&&!(!r||!r.length)}return{arguments2array:n,isObject:t}}();return{assign:n,times:t,omit:e,pick:o}});