!function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2053)}({2053:function(t,e,n){t.exports=n(3)},3:function(t,e){$(document).ready(function(){function t(t){if(!o||o.length<=0)return!1;t=t.toLowerCase();for(var e in o){var n=o[e];if(n.Difficulty.toLowerCase()==t)return n}}function e(e){r=t(e),r||alert("error no data"),$('input[name="lowestTalentModifier"]').val(r.FightCardLowestTalentMod),$('input[name="modifierAdjustment"]').val(r.FightCardModifierAdjustment),$('input[name="opponentsNumber"]').val(r.Quests.length)}function n(t){var e=$("<table/>",{class:"table"}).append($("<colgroup/>").append($("<col/>",{span:"1",style:"width: 15%;"})).append($("<col/>",{span:"1",style:"width: 65%;"})).append($("<col/>",{span:"1",style:"width: 20%;"}))).append($("<thead/>").append($("<tr/>").append($("<th/>",{text:"No."})).append($("<th/>",{text:"Opponent"})).append($("<th/>",{text:"Talent"})))).append($("<tbody/>")),n=e.find("tbody");t.forEach(function(t,e){n.append($("<tr/>").append($("<td/>",{text:parseInt(e+1)})).append($("<td/>",{text:t.Name})).append($("<td/>",{text:parseInt(t.Talent)})))}),$("#talentResults").empty(),$("#talentResults").append(e)}function a(t,e,n){var a=t.totalTalent/t.filledSlots,o=0;if(n<=1)o=a*t.lowestTalentModifier;else{o=(1+(t.highestTalent-a)/t.highestTalent)*(n/t.totalOpponents)*(.5*(a+t.highestTalent))*t.modifierAdjustment+e}return o}var o=[],r={};!function(){$('input[name="difficulty"]').first().attr("checked","checked"),$('input[name="difficulty"]').on("change",function(){e($(this).val())}),$.getJSON("/db/misc/gb-info.json",function(t){o=t,e(o[0].Difficulty)}).fail(function(){alert("error")})}(),$("#gbCalcForm").on("submit",function(t){t.preventDefault();for(var e=$(this).serializeArray().reduce(function(t,e){return t[e.name]=e.value,t},{}),o={highestTalent:e.highestTalent?parseInt(e.highestTalent):0,totalTalent:e.totalTalent?parseInt(e.totalTalent):0,filledSlots:e.filledSlots?parseInt(e.filledSlots):0,totalOpponents:e.opponentsNumber?parseInt(e.opponentsNumber):0,lowestTalentModifier:e.lowestTalentModifier?parseFloat(e.lowestTalentModifier):0,modifierAdjustment:e.modifierAdjustment?parseFloat(e.modifierAdjustment):0},i=[],l=1;l<=o.totalOpponents;l++){var p=0;l>1&&(p=i[i.length-1].Talent);var s=a(o,p,l);i.push({Name:r.Quests[l-1].Name?r.Quests[l-1].Name:"N/A",Talent:s})}n(i)})})}});