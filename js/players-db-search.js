!function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var t={};o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=2227)}({0:function(e,o){var o=e.exports={};o.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],o=window.document,t=o.createElement("div");o.body.appendChild(t);for(var n=e.length-1;n>=0;n--){var r=e[n];if(t.className="hidden-"+r,null===t.offsetParent)return o.body.removeChild(t),r}return""},o.localStorageSaveItem=function(e,o){"undefined"!=typeof localStorage?localStorage.setItem(e,o):console.error("window.localStorage, not defined")},o.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},o.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},o.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)"),t=o.exec(location.search);return null===t?null:decodeURIComponent(t[1].replace(/\+/g," "))}},2227:function(e,o,t){e.exports=t(9)},9:function(e,o,t){function n(e){e=".*"+e+".*",stitch.StitchClientFactory.create("wwe-champions-guide-pgwcj").then(function(o){var t=o.service("mongodb","mongodb-atlas").db("wwe-champions");o.login().then(function(){return t.collection("players").find({name:{$regularExpression:{pattern:e,options:"i"}}}).execute()}).then(function(e){e&&e.length>0?l(e):r(),console.log("[MongoDB Stitch] Connected to Stitch")}).catch(function(e){console.error(e)})})}function r(){console.log("No results have been found!"),$("#results").empty(),$("#results").append($("<h4/>",{text:"No results."}))}function l(e){console.log("Found the following: "),$("#results").empty();var o=$("<div/>",{class:"list-group",style:"margin-top: 30px;"});e.forEach(function(e){o.append($("<a/>",{class:"list-group-item",href:"/stats/players/profile.html?id="+e._id,text:e.name})),console.log(e)}),$("#results").append(o)}var a=t(0);$(document).ready(function(){var e=a.getUrlParameter("q");e&&(console.log("Searching for "+e),$("input.search-box").val(e),n(e))})}});