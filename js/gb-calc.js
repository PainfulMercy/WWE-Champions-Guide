!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1317)}({1317:function(t,e,n){t.exports=n(3)},3:function(t,e){$(document).ready(function(){function t(t){var e=$("<table/>",{class:"table"}).append($("<colgroup/>").append($("<col/>",{span:"1",style:"width: 25%;"})).append($("<col/>",{span:"1",style:"width: 75%;"}))).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"Opponent"})).append($("<th/>",{text:"Talent"})))).append($("<tbody/>")),n=e.find("tbody");t.forEach(function(t,e){n.append($("<tr/>").append($("<td/>",{text:parseInt(e+1)})).append($("<td/>",{text:parseInt(t)})))}),$("#talentResults").empty(),$("#talentResults").append(e)}function e(t,e,n){var a=t.totalTalent/t.filledSlots,o=0;if(n<=1)o=a*t.lowestTalentModifier;else{o=(1+(t.highestTalent-a)/t.highestTalent)*(n/t.totalOpponents)*(.5*(a+t.highestTalent))*t.modifierAdjustment+e}return o}$("#gbCalcForm").on("submit",function(n){n.preventDefault();for(var a=$(this).serializeArray().reduce(function(t,e){return t[e.name]=e.value,t},{}),o={highestTalent:a.highestTalent?parseInt(a.highestTalent):0,totalTalent:a.totalTalent?parseInt(a.totalTalent):0,filledSlots:a.filledSlots?parseInt(a.filledSlots):0,totalOpponents:a.opponentsNumber?parseInt(a.opponentsNumber):0,lowestTalentModifier:a.lowestTalentModifier?parseFloat(a.lowestTalentModifier):0,modifierAdjustment:a.modifierAdjustment?parseFloat(a.modifierAdjustment):0},r=[],l=1;l<=o.totalOpponents;l++){var p=0;l>1&&(p=r[r.length-1]);var i=e(o,p,l);r.push(i)}t(r)})})}});