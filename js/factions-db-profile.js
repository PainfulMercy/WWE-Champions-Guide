!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3201)}({0:function(e,t){var t=e.exports={};t.findBootstrapEnvironment=function(){var e=["xs","sm","md","lg"],t=window.document,n=t.createElement("div");t.body.appendChild(n);for(var o=e.length-1;o>=0;o--){var r=e[o];if(n.className="hidden-"+r,null===n.offsetParent)return t.body.removeChild(n),r}return""},t.localStorageSaveItem=function(e,t){"undefined"!=typeof localStorage?localStorage.setItem(e,t):console.error("window.localStorage, not defined")},t.localStorageRemoveItem=function(e){"undefined"!=typeof localStorage?localStorage.removeItem(e):console.error("window.localStorage, not defined")},t.localStorageGetItem=function(e){if("undefined"!=typeof localStorage)return localStorage.getItem(e);console.error("window.localStorage, not defined")},t.getUrlParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?null:decodeURIComponent(n[1].replace(/\+/g," "))}},3:function(e,t,n){function o(e,t){stitch.StitchClientFactory.create("wwe-champions-guide-pgwcj").then(function(n){var o=n.service("mongodb","mongodb-atlas").db("wwe-champions");n.login().then(function(){return o.collection("players").aggregate([{$unwind:"$feudScores"},{$match:{"feudScores.faction":e,"feudScores.ffID":t}},{$sort:{"feudScores.rank":1}}])}).then(function(t){r(),t?d(t,e):a()}).catch(function(e){console.error("Invalid request"),console.error(e),r(),a()})})}function r(){$("#loading").hide()}function a(){$("#factionName").text("Error loading profile!")}function d(e,t){console.log(e);var n=new Date(e[0].feudScores.ffStartTime),o=n.getUTCDate(),r=n.toLocaleString("en-US",{timeZone:"UTC",month:"long"}),a=n.getUTCFullYear(),d=$("<tbody/>");e.forEach(function(e,t){d.append($("<tr/>").append($("<td/>",{text:t+1})).append($("<td/>").append($("<a/>",{href:"/stats/players/profile.html?id="+e._id.toString(),text:e.name}))).append($("<td/>",{text:e.feudScores.score||0})).append($("<td/>",{text:e.feudScores.rank||0})))}),$("#factionName").text(t),$("#feudResults").empty(),$("#feudSelect ul.dropdown-menu").empty(),l.forEach(function(e){$("#feudSelect ul.dropdown-menu").append($("<li/>").append($("<a/>",{href:"/stats/factions/profile.html?name="+t+"&fID="+e.id,text:e.dateText})))}),$("#feudResults").append($("<h3/>",{text:"Feuds Scores"})).append($("<h4/>",{text:r+" "+o+" "+a})),$("#feudResults").append($("<table/>",{class:"table"}).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"No."})).append($("<th/>",{text:"Name"})).append($("<th/>",{text:"Score"})).append($("<th/>",{text:"Rank"})))).append(d))}var c=n(0),l=[{id:"FF20180928",dateText:"2018-09-28"},{id:"FF20180916",dateText:"2018-09-16"},{id:"FF20180831",dateText:"2018-08-31"},{id:"FF20180811",dateText:"2018-08-11"},{id:"FF20180803",dateText:"2018-08-03"},{id:"FF20180720",dateText:"2018-07-20"},{id:"FF20180609",dateText:"2018-06-09"},{id:"FF20180525",dateText:"2018-05-25"},{id:"FF20180511",dateText:"2018-05-11"},{id:"FF20180427",dateText:"2018-04-27"}];$(document).ready(function(){var e=c.getUrlParameter("name"),t=c.getUrlParameter("fID");e&&t&&(console.log("Getting profile for "+e+" for feud ID: "+t),o(e,t))})},3201:function(e,t,n){e.exports=n(3)}});