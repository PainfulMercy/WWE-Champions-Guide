!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3182)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,n=t.createElement("div");t.body.appendChild(n);for(var o=e.length-1;o>=0;o--){var r=e[o];if(n.className="hidden-"+r,null===n.offsetParent)return t.body.removeChild(n),r}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}},3182:function(e,t,n){e.exports=n(9)},9:function(e,t,n){function o(e){stitch.StitchClientFactory.create("wwe-champions-guide-pgwcj").then(function(t){var n=t.service("mongodb","mongodb-atlas").db("wwe-champions");t.login().then(function(){return n.collection("players").findOne({_id:{$oid:e}})}).then(function(e){r(),e?c(e):a()}).catch(function(e){console.error("Invalid request"),console.error(e),r(),a()})})}function r(){$("#loading").hide()}function a(){$("#playerName").text("Error loading profile!")}function c(e){var t=$("<tbody/>");console.log(e),e.feudScores.sort(function(e,t){return new Date(t.ffStartTime)-new Date(e.ffStartTime)}),console.log(e),e.feudScores.forEach(function(e){var n=(e.ffEndTime-e.ffStartTime)/36e5,o=e.ffStartTime.getUTCDate()+"/"+(e.ffStartTime.getUTCMonth()+1)+"/"+e.ffStartTime.getUTCFullYear()+" ("+n+")";t.append($("<tr/>").append($("<td/>",{text:o})).append($("<td/>",{text:e.score||0})).append($("<td/>",{text:e.faction})).append($("<td/>",{text:e.rank||0})))}),$("#playerName").text(e.name),$("#feudResults").empty(),$("#feudResults").append($("<h3/>",{text:"Last Feuds Scores"})),$("#feudResults").append($("<table/>",{class:"table"}).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"Feud"})).append($("<th/>",{text:"Score"})).append($("<th/>",{text:"Faction"})).append($("<th/>",{text:"Rank"})))).append(t))}var l=n(0);$(document).ready(function(){var e=l.getUrlParameter("id");e&&(console.log("Getting profile for "+e),o(e))})}});