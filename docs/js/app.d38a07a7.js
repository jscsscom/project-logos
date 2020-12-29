(function(t){function e(e){for(var o,a,l=e[0],s=e[1],i=e[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},c={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3e26":function(t){t.exports=JSON.parse('{"updateTime":1609217265909,"total":10,"list":["bootstrap","element-plus","element","jscss","nuxt-white","nuxt","nuxtjs-typo-white","nuxtjs-typo","tailwindcss-logotype","tailwindcss-mark"]}')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=Object(o["l"])('<div class="bg-gray-100"><div class="container mx-auto h-14 flex items-center justify-between"><div class="space-x-3"><span class="font-bold text-lg">Project Logos</span><span class="text-gray-700">Collection of awesome front-end project logos</span></div><div><a class="hover:underline" href="https://github.com/jscsscom/project-logos" target="_blank">GitHub</a></div></div></div>',1),r={class:"container mx-auto mt-5"},a={class:"border-b border-gray-200 flex items-center justify-between h-14 mb-4"},l=Object(o["m"])("Filter"),s={class:"flex space-x-3"},i={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"},u={class:"flex items-center justify-between px-4 py-3"},b=Object(o["m"])("svg"),d=Object(o["m"])("png"),p={class:"mt-5 py-3 bg-gray-100"},f={class:"container mx-auto flex items-center justify-between text-gray-700"},g=Object(o["n"])("div",null,"Project Logos",-1),j={class:"space-x-3"};function O(t,e,n,O,y,m){var v=Object(o["N"])("el-input"),h=Object(o["N"])("el-button"),x=Object(o["N"])("el-tooltip"),w=Object(o["N"])("el-button-group");return Object(o["E"])(),Object(o["i"])(o["b"],null,[c,Object(o["n"])("div",r,[Object(o["n"])("div",a,[Object(o["n"])("div",null,[Object(o["n"])(v,{modelValue:y.keyword,"onUpdate:modelValue":e[1]||(e[1]=function(t){return y.keyword=t}),placeholder:"Search in ".concat(y.logoData.total," logos"),size:"medium",clearable:""},{prepend:Object(o["bb"])((function(){return[l]})),_:1},8,["modelValue","placeholder"])]),Object(o["n"])("div",s,[(Object(o["E"])(!0),Object(o["i"])(o["b"],null,Object(o["L"])(y.backgrounds,(function(t,e){return Object(o["E"])(),Object(o["i"])("span",{onClick:function(e){return m.changeBackground(t)},key:e,class:[t,"h-6 w-6 border border-gray-400 cursor-pointer"]},null,10,["onClick"])})),128))])]),Object(o["n"])("div",i,[(Object(o["E"])(!0),Object(o["i"])(o["b"],null,Object(o["L"])(m.list,(function(t,e){return Object(o["E"])(),Object(o["i"])("div",{key:e,class:"border border-gray-200 rounded hover:shadow-lg"},[Object(o["n"])("div",{class:[y.background,"flex items-center justify-center h-40 px-3 py-3"]},[Object(o["n"])("img",{src:m.url("logos","png",t),alt:t,class:"max-h-full max-w-full"},null,8,["src","alt"])],2),Object(o["n"])("div",u,[Object(o["n"])("div",null,Object(o["R"])(t),1),Object(o["n"])("div",null,[Object(o["n"])(w,null,{default:Object(o["bb"])((function(){return[m.hasSvg(t)?(Object(o["E"])(),Object(o["i"])(x,{key:0,effect:"dark",content:"Copy svg url",placement:"bottom"},{default:Object(o["bb"])((function(){return[Object(o["n"])(h,{size:"mini",class:"btn-copy focus:outline-none px-2","data-clipboard-text":m.url("svgs","svg",t)},{default:Object(o["bb"])((function(){return[b]})),_:2},1032,["data-clipboard-text"])]})),_:2},1024)):Object(o["j"])("",!0),Object(o["n"])(x,{class:"item",effect:"dark",content:"Copy png url",placement:"bottom"},{default:Object(o["bb"])((function(){return[Object(o["n"])(h,{size:"mini","data-clipboard-text":m.url("logos","png",t),class:"btn-copy focus:outline-none px-2"},{default:Object(o["bb"])((function(){return[d]})),_:2},1032,["data-clipboard-text"])]})),_:2},1024)]})),_:2},1024)])])])})),128))])]),Object(o["n"])("div",p,[Object(o["n"])("div",f,[g,Object(o["n"])("div",j,[Object(o["n"])("span",null,"Logos: "+Object(o["R"])(y.logoData.total),1),Object(o["n"])("span",null,"Last updated: "+Object(o["R"])(m.lastUpdated),1)])])])],64)}n("99af"),n("4de4"),n("c975");var y=n("b311"),m=n.n(y),v=n("3fd4"),h=n("abe8"),x=n("3e26"),w={name:"App",components:{ElInput:v["c"],ElButton:v["a"],ElButtonGroup:v["b"],ElTooltip:v["d"]},data:function(){return{logoData:h,keyword:"",background:"bg-gray-300",backgrounds:["bg-white","bg-gray-100","bg-gray-300","bg-gray-500","bg-gray-700","bg-black"]}},computed:{lastUpdated:function(){var t=new Date(this.logoData.updateTime);return t.toLocaleString()},list:function(){var t=this;return this.keyword?this.logoData.list.filter((function(e){return e.indexOf(t.keyword)>-1})):this.logoData.list}},methods:{url:function(t,e,n){return"https://cdn.jsdelivr.net/gh/jscsscom/project-logos/".concat(t,"/").concat(n,".").concat(e)},hasSvg:function(t){return x.list.indexOf(t)>-1},changeBackground:function(t){this.background=t}},mounted:function(){new m.a(".btn-copy")}};w.render=O;var k=w;n("7dd6"),n("ba8c");Object(o["h"])(k).mount("#app")},abe8:function(t){t.exports=JSON.parse('{"updateTime":1609217265910,"total":11,"list":["bootstrap","element-plus","element","jscss","nuxt-white","nuxt","nuxtjs-typo-white","nuxtjs-typo","tailwindcss-logotype","tailwindcss-mark","vue"]}')},ba8c:function(t,e,n){}});
//# sourceMappingURL=app.d38a07a7.js.map