!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=2078)}({2078:function(n,e,t){n.exports=t(8)},8:function(n,e){$(document).ready(function(){function n(n){var e=new Set;n.Pools.forEach(function(n){n.Drops.forEach(function(n){e.add(n.Item)})}),$("#reversePullItems").empty();var t=!0,r=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var l=u.value,i=$("<option/>",{value:l,text:l});$("#reversePullItems").append(i)}}catch(n){r=!0,o=n}finally{try{!t&&a.return&&a.return()}finally{if(r)throw o}}}function e(n){for(var e=0,t=!1;!t;){if(++e>=5e3){console.log("Reached limit!");break}a(f).drop.Item==n&&(t=!0,console.log("Found in "+e+" pulls"))}console.log("Done!")}function t(n){for(var e=[],t=0;t<n;t++){var o=a(f);e.push(o.drop.Item)}r(e)}function r(n){var e=$("<h4/>",{text:"Loading...",style:"text-align:center;"});document.body.scrollIntoView(),$("#pullContent").empty(),$("#pullContent").append(e);var t=$("<ol/>");n.forEach(function(n,e){var r=$("<li/>",{text:n});r.delay(500*e).fadeIn(500),t.append(r)});setTimeout(function(){$("#pullContent").empty(),$("#pullContent").append(t)},500)}function o(n){var e=0;return n.forEach(function(n){e+=Number(n.Chance)}),e}function u(n){var e=0;return n.forEach(function(n){e+=Number(n.Chance)}),e}function a(n){var e=o(n.Pools),t=(Math.random()*e).toFixed(2),r=0,a=n.Pools.find(function(n){return r+=Number(n.Chance),t<=r}),l=u(a.Drops),i=(Math.random()*l).toFixed(2),c=0;return{pool:a,drop:a.Drops.find(function(n){return c+=Number(n.Chance),i<=c})}}var l=$("#oddsType").val(),i=($("#oddsSlug").val(),$("#oddsID").val()),c=$("#pullsNumber").val(),f={};$.getJSON("/api/odds/"+l+".json",function(e){f="oddsMega"==l?e.find(function(n){return n.ID==i}):e,n(f),t(c)}).fail(function(){alert("error")}),$("#reversePullForm").on("submit",function(n){n.preventDefault();var t=$(this).serializeArray().reduce(function(n,e){return n[e.name]=e.value,n},{}),r=t["reverse-pull-item"];console.log(r),e(r)}),$("#pullForm").on("submit",function(n){n.preventDefault(),t($(this).serializeArray().reduce(function(n,e){return n[e.name]=e.value,n},{}).pulls)})})}});