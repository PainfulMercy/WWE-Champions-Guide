!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1417)}({1417:function(t,e,n){t.exports=n(3)},3:function(t,e){$(document).ready(function(){function t(t){if(!o||o.length<=0)return!1;t=t.toLowerCase();for(var e in o){var n=o[e];if(n.Difficulty.toLowerCase()==t)return n}}function e(e){var n=t(e);n||alert("error no data"),$('input[name="lowestTalentModifier"]').val(n.FightCardLowestTalentMod),$('input[name="modifierAdjustment"]').val(n.FightCardModifierAdjustment),$('input[name="opponentsNumber"]').val(n.Quests.length)}function n(t){var e=$("<table/>",{class:"table"}).append($("<colgroup/>").append($("<col/>",{span:"1",style:"width: 15%;"})).append($("<col/>",{span:"1",style:"width: 65%;"})).append($("<col/>",{span:"1",style:"width: 20%;"}))).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"No."})).append($("<th/>",{text:"Opponent"})).append($("<th/>",{text:"Talent"})))).append($("<tbody/>")),n=e.find("tbody");t.forEach(function(t,e){n.append($("<tr/>").append($("<td/>",{text:parseInt(e+1)})).append($("<td/>",{text:t.Name})).append($("<td/>",{text:parseInt(t.Talent)})))}),$("#talentResults").empty(),$("#talentResults").append(e)}function a(t,e,n){var a=t.totalTalent/t.filledSlots,o=0;if(n<=1)o=a*t.lowestTalentModifier;else{o=(1+(t.highestTalent-a)/t.highestTalent)*(n/t.totalOpponents)*(.5*(a+t.highestTalent))*t.modifierAdjustment+e}return o}var o=[];$.getJSON("/db/misc/gb-info.json",function(t){o=t,e("normal")}).fail(function(){alert("error")}),$("#gbCalcForm").on("submit",function(e){e.preventDefault();var o=$(this).serializeArray().reduce(function(t,e){return t[e.name]=e.value,t},{}),r=t(o.difficulty);if(!r)return void alert("error no data");for(var l={highestTalent:o.highestTalent?parseInt(o.highestTalent):0,totalTalent:o.totalTalent?parseInt(o.totalTalent):0,filledSlots:o.filledSlots?parseInt(o.filledSlots):0,totalOpponents:o.opponentsNumber?parseInt(o.opponentsNumber):0,lowestTalentModifier:o.lowestTalentModifier?parseFloat(o.lowestTalentModifier):0,modifierAdjustment:o.modifierAdjustment?parseFloat(o.modifierAdjustment):0},i=[],p=1;p<=l.totalOpponents;p++){var s=0;p>1&&(s=i[i.length-1].Talent);var d=a(l,s,p);i.push({Name:r.Quests[p-1].Name?r.Quests[p-1].Name:"N/A",Talent:d})}n(i)})})}});