!function(){var t="undefined"!=typeof module&&module.exports,r=["١","٢","٣","٤","٥","٦","٧","٨","٩","٠"],n=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],e=["1","2","3","4","5","6","7","8","9","0"];function i(t){this._str=t}function s(t){if(t){for(var r=["ي","ك","‍","دِ","بِ","زِ","ذِ","ِشِ","ِسِ","ى","ة"],n=["ی","ک","","د","ب","ز","ذ","ش","س","ی","ه"],e=0,i=r.length;e<i;e++)t=t.replace(new RegExp(r[e],"g"),n[e]);return this._str=t,this}}function u(t){if(t){for(var r=0,i=e.length;r<i;r++)t=t.replace(new RegExp(n[r],"g"),e[r]);return this._str=t,this}}function o(t){if(t){t=t.toString();for(var e=0,i=r.length;e<i;e++)t=t.replace(new RegExp(r[e],"g"),n[e]);return this._str=t,this}}function c(t){if(t){t=t.toString();for(var r=["1","2","3","4","5","6","7","8","9","0"],n=["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"],e=0,i=r.length;e<i;e++)t=t.replace(new RegExp(r[e],"g"),n[e]);return this._str=t,this}}function f(t){if(t){for(var i=0,s=e.length;i<s;i++)t=t.replace(new RegExp(n[i],"g"),e[i]).replace(new RegExp(r[i],"g"),e[i]);return this._str=t,this}}function h(t){if(t){for(var r="";r!=t;)r=t,t=t.replace(/(http\S+?)\%20/g,"$1‌‌‌_‌‌‌");return t=(t=t.replace(/(http\S+)/g,function(t,r){return decodeURI(r)})).replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g,"%20"),this._str=t,this}}function l(t){if(t){for(var r=["ض","ص","ث","ق","ف","غ","ع","ه","خ","ح","ج","چ","ش","س","ی","ب","ل","ا","ت","ن","م","ک","گ","ظ","ط","ز","ر","ذ","د","پ","و","؟","ئ"],n=["q","w","e","r","t","y","u","i","o","p","[","]","a","s","d","f","g","h","j","k","l",";","'","z","x","c","v","b","n","m",",","?","m"],e=0,i=r.length;e<i;e++)t=t.replace(new RegExp(r[e],"g"),n[e]);return this._str=t,this}}function a(t){var r,n,e,i,s,u,o,c;return isFinite(t)?("string"!=typeof t&&(t=t.toString()),s=["","هزار","میلیون","میلیارد","تریلیون","کوادریلیون","کویینتیلیون","سکستیلیون"],i={0:["","صد","دویست","سیصد","چهارصد","پانصد","ششصد","هفتصد","هشتصد","نهصد"],1:["","ده","بیست","سی","چهل","پنجاه","شصت","هفتاد","هشتاد","نود"],2:["","یک","دو","سه","چهار","پنج","شش","هفت","هشت","نه"],two:["ده","یازده","دوازده","سیزده","چهارده","پانزده","شانزده","هفده","هجده","نوزده"],zero:"صفر"},valueParts=t.split("").reverse().join("").replace(/\d{3}(?=\d)/g,"$&,").split("").reverse().join("").split(",").map(function(t){return Array(4-t.length).join("0")+t}),""===(u=(u=(u=function(){var t;for(e in t=[],valueParts){c=valueParts[e];var u=(o=(o=function(){var t,e,s;for(s=[],n=t=0,e=c.length;t<e;n=++t)if(r=c[n],1===n&&"1"===r)s.push(i.two[c[2]]);else{if(2===n&&"1"===c[1]||""===i[n][r])continue;s.push(i[n][r])}return s}()).join(" و "))?o+" "+s[valueParts.length-parseInt(e)-1]:o;t.push(u)}return t}()).filter(function(t){return""!==t.trim()})).join(" و ").trim())&&(u=i.zero),this._str=u,this):""}function p(t){var r;if(t)return r=/((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g,t=t.replace(new RegExp(r),"$2‌$4"),r=/(([\u0600-\u06EF]{1,})+( )+(ای|ایی|اند|ایم|اید|ام){1})/g,t=t.replace(new RegExp(r),"$2‌$4"),this._str=t,this}var g=function(t){if(!t||""===t)throw new Error("Input is null or empty.");return new i(t)};g.version="0.4.0",g.fn=i.prototype={clone:function(){return g(this)},value:function(){return this._str},toString:function(){return this._str.toString()},set:function(t){return this._str=String(t),this},arabicChar:function(){return s.call(this,this._str)},persianNumber:function(){return u.call(this,this._str)},arabicNumber:function(){return o.call(this,this._str)},englishNumber:function(){return c.call(this,this._str)},toEnglishNumber:function(){return f.call(this,this._str)},fixURL:function(){return h.call(this,this._str)},decodeURL:function(){return h.call(this,this._str)},switchKey:function(){return l.call(this,this._str)},digitsToWords:function(){return a.call(this,this._str)},halfSpace:function(){return p.call(this,this._str)}},t&&(module.exports=g),"undefined"==typeof ender&&(this.persianJs=g),"function"==typeof define&&define.amd&&define("persianJs",[],function(){return g})}();
