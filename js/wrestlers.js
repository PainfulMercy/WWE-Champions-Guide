!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1153)}({1153:function(e,n,t){e.exports=t(3)},3:function(e,n){function t(){var e=["xs","sm","md","lg"],n=window.document,t=n.createElement("div");n.body.appendChild(t);for(var r=e.length-1;r>=0;r--){var o=e[r];if(t.className="hidden-"+o,null===t.offsetParent)return n.body.removeChild(t),o}return""}$(document).ready(function(){var e=t(),n={valueNames:["wrestler-name"],page:10,pagination:[{paginationClass:"paginationTop"},{paginationClass:"paginationBottom"}]},r=new List("wrestlers",n);$("#search").on("submit",function(e){return e.preventDefault(),!1}),$("#search").on("keyup keypress",function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1}),$("#search").on("awesomplete-selectcomplete",function(){r.search(this.value)});var o=new LazyLoad;r.on("updated",function(e){o.update()}),"xs"==e&&$("#search").on("focus",function(){document.body.scrollTop+=this.getBoundingClientRect().top-10}),$("#search").on("input propertychange",function(){var e=$(this),n=Boolean(e.val());$(".form-control-clear").toggleClass("hidden",!n)}).trigger("propertychange"),$(".form-control-clear").click(function(){r.search(""),$("#search").val("").trigger("propertychange").focus()})})}});