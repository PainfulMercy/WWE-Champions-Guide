!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2080)}({0:function(t,e){var e=t.exports={};e.findBootstrapEnvironment=function(){var t=["xs","sm","md","lg"],e=window.document,n=e.createElement("div");e.body.appendChild(n);for(var o=t.length-1;o>=0;o--){var r=t[o];if(n.className="hidden-"+r,null===n.offsetParent)return e.body.removeChild(n),r}return""},e.localStorageSaveItem=function(t,e){"undefined"!=typeof localStorage?localStorage.setItem(t,e):console.error("window.localStorage, not defined")},e.localStorageRemoveItem=function(t){"undefined"!=typeof localStorage?localStorage.removeItem(t):console.error("window.localStorage, not defined")},e.localStorageGetItem=function(t){if("undefined"!=typeof localStorage)return localStorage.getItem(t);console.error("window.localStorage, not defined")}},10:function(t,e,n){function o(t){var e=[];t.years&&e.push(t.years+"y"),t.months&&e.push(t.months+"m"),t.days&&e.push(t.days+"d"),t.hours&&e.push(t.hours+"h"),t.minutes&&e.push(t.minutes+"m");var n=e.join(" ");return t.firstDateWasLater?n="in "+n:n+=" ago",n}n(0);$(document).ready(function(){function t(t){var e=moment.utc(t.Start),n=moment.utc(t.End),o=moment.utc();return e<=o&&n>=o?"Current":e>o?"Later":"Expired"}function e(e,n,o){var r=[];return n=moment(n).milliseconds(0).seconds(0).minutes(0).hours(0),o=moment(o).milliseconds(0).seconds(59).minutes(59).hours(23),e&&e.length>0&&e.forEach(function(e){var a=moment.utc(e.Start);moment.utc(e.End)>=n&&a<=o&&(e.Availability=t(e),r.push(e))}),!!(r&&r.length>0)&&r}function n(t){return $("<li/>",{style:"margin-bottom:35px;"}).append($("<h4/>",{text:t.Name})).append($("<p/>",{text:t.Description})).append($("<p/>").append($("<span/>",{html:"<strong>Cost:</strong> "+t.Cost.Amount+" "+t.Cost.Type+"<br>"})).append($("<time/>",{html:'<strong>Starts:</strong> <time class="relative" datetime="'+moment.utc(t.Start).format()+'">'+moment(t.Start).format("dddd, YYYY-MM-DD, h:mm a Z")+"</time><br>"})).append($("<span/>",{html:'<strong>Expires:</strong> <time class="relative" datetime="'+moment.utc(t.End).format()+'">'+moment(t.End).format("dddd, YYYY-MM-DD, h:mm a Z")+"</time><br>"})).append($("<span/>",{html:"<strong>Limit:</strong> "+t.Limit})))}function r(t,e){if(e=e.format("YYYY-MM-DD"),$('input[name="current-date"]').val(e),$(".current-items ul").empty(),$(".upcoming-items ul").empty(),$(".expired-items ul").empty(),t&&t.length>0)t.forEach(function(t){var e=n(t);switch(t.Availability){case"Current":$(".current-items ul").append(e);break;case"Later":$(".upcoming-items ul").append(e);break;case"Expired":$(".expired-items ul").append(e)}});else{var r=$("<li/>",{text:"No items found"});$(".store-items").append(r)}$("time.relative").each(function(){var t=moment($(this).attr("datetime")),e=moment(),n=moment(t).preciseDiff(e,!0),r=o(n);$(this).text(r)})}var a,m;!function(){$(".timezone").text(moment().format("Z"))}(),$.getJSON("/db/misc/store.json",function(t){a=t,m=moment(),r(e(a,m.format("YYYY-MM-DD"),m.format("YYYY-MM-DD")),m)}).fail(function(){alert("error")}),$("#incrementDate").on("click",function(){if(moment(m).add(1,"day")>moment().add(1,"week"))return!1;m.add(1,"day"),r(e(a,m.format("YYYY-MM-DD"),m.format("YYYY-MM-DD")),m)}),$("#decrementDate").on("click",function(){if(moment(m).subtract(1,"day")<=moment().subtract(1,"day"))return!1;m.subtract(1,"day"),r(e(a,m.format("YYYY-MM-DD"),m.format("YYYY-MM-DD")),m)})})},2080:function(t,e,n){t.exports=n(10)}});