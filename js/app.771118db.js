(function(e){function t(t){for(var c,r,u=t[0],l=t[1],i=t[2],b=0,s=[];b<u.length;b++)r=u[b],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(c=!1)}c&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},r={app:0},o={app:0},a=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-425cd266":"bff4aae4","chunk-45d4df10":"0a025405"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-425cd266":1,"chunk-45d4df10":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-425cd266":"65e87edf","chunk-45d4df10":"50c80365"}[e]+".css",o=l.p+c,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],b=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(b===c||b===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){i=s[u],b=i.getAttribute("data-href");if(b===c||b===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var a=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=a);var i,b=document.createElement("script");b.charset="utf-8",b.timeout=120,l.nc&&b.setAttribute("nonce",l.nc),b.src=u(e);var s=new Error;i=function(t){b.onerror=b.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",s.name="ChunkLoadError",s.type=c,s.request=r,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:b})}),12e4);b.onerror=b.onload=i,document.head.appendChild(b)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vuejs-learn/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],b=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=b;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"150b":function(e,t,n){},"38a9":function(e,t,n){},"41b3":function(e,t,n){},5058:function(e,t,n){e.exports=n.p+"img/todo-list.c6d5677c.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=n("cf05"),o=n.n(r),a=Object(c["G"])("data-v-b107f86c");Object(c["s"])("data-v-b107f86c");var u={class:"logo"},l=Object(c["g"])("img",{src:o.a,alt:"Логотип Vue.js",height:"40",width:"40"},null,-1),i=Object(c["g"])("h1",{class:"ghostwhite"},"Знакомство с Vue.js",-1),b={class:"card"},s=Object(c["f"])("Главная"),d=Object(c["f"])("Список дел"),f=Object(c["f"])("Крестики-Нолики"),g=Object(c["f"])("О проекте");Object(c["q"])();var j=a((function(e,t){var n=Object(c["w"])("router-link"),r=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",u,[Object(c["g"])(n,{to:{name:"Home"}},{default:a((function(){return[l]})),_:1}),i]),Object(c["g"])("div",b,[Object(c["g"])("nav",null,[Object(c["g"])(n,{to:{name:"Home"}},{default:a((function(){return[s]})),_:1}),Object(c["g"])(n,{to:{name:"TodoList"}},{default:a((function(){return[d]})),_:1}),Object(c["g"])(n,{to:{name:"TicTacToe"}},{default:a((function(){return[f]})),_:1}),Object(c["g"])(n,{to:{name:"About"}},{default:a((function(){return[g]})),_:1})]),Object(c["g"])(r)])],64)}));n("b93b");const p={};p.render=j,p.__scopeId="data-v-b107f86c";var O=p,h=(n("d3b7"),n("6c02")),v=n("5058"),m=n.n(v),y=n("a217"),w=n.n(y),T=Object(c["G"])("data-v-30b546ea");Object(c["s"])("data-v-30b546ea");var _=Object(c["g"])("h2",{class:"visually-hidden"},"Главная",-1),k=Object(c["g"])("figure",null,[Object(c["g"])("img",{src:m.a,alt:"Список дел",height:"200",width:"300"}),Object(c["g"])("figcaption",null,"Список дел")],-1),x=Object(c["g"])("figure",null,[Object(c["g"])("img",{src:w.a,alt:"Игра Крестики-Нолики",height:"200",width:"300"}),Object(c["g"])("figcaption",null,"Крестики-Нолики")],-1);Object(c["q"])();var A=T((function(e,t){var n=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[_,Object(c["g"])("nav",null,[Object(c["g"])(n,{to:{name:"TodoList"}},{default:T((function(){return[k]})),_:1}),Object(c["g"])(n,{to:{name:"TicTacToe"}},{default:T((function(){return[x]})),_:1})])],64)}));n("e2e9");const L={};L.render=A,L.__scopeId="data-v-30b546ea";var P=L,C=Object(c["g"])("h2",null,"Учебный проект по изученнию Vue.js",-1),E=Object(c["f"])(' Содержит в себе 2 "подпроекта", реализованных с использованием компонентов и маршрутизации, отображаемых на отдельных страницах: '),S=Object(c["f"])("Список дел (Todo List)"),N=Object(c["f"])('Игра "Крестики-Нолики"'),q=Object(c["g"])("h3",null,"Используемые технологии",-1),V=Object(c["g"])("ul",null,[Object(c["g"])("li",null,"Vue.js, Vue Cli"),Object(c["g"])("li",null,"Npm"),Object(c["g"])("li",null,"Git"),Object(c["g"])("li",null,"Html, Css, фиксированная верстка")],-1);function H(e,t){var n=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(c["a"],null,[C,E,Object(c["g"])("ul",null,[Object(c["g"])("li",null,[Object(c["g"])(n,{to:{name:"TodoList"}},{default:Object(c["D"])((function(){return[S]})),_:1})]),Object(c["g"])("li",null,[Object(c["g"])(n,{to:{name:"TicTacToe"}},{default:Object(c["D"])((function(){return[N]})),_:1})])]),q,V],64)}const D={};D.render=H;var G=D,I=n("be48"),M=n.n(I),B=Object(c["G"])("data-v-6b346d8e");Object(c["s"])("data-v-6b346d8e");var F=Object(c["g"])("h2",null,"Страница не найдена",-1),J=Object(c["g"])("p",null,"Возможно страница которую вы ищите была перемещена. Просим отнестись к этому с пониманием.",-1),K=Object(c["g"])("p",null,"Или она никогда не существовала.",-1),U=Object(c["g"])("p",null,"А как известно, существова́ние это аспект всякого сущего, в отличие от другого его аспекта — сущности. Сущность традиционно, начиная, как минимум, с эпохи Возрождения, исследуется научными дисциплинами. Традиционная наука пытается открыть сущность или субстанцию. Особенно в этом преуспела математика, для которой не так важно конкретное существование чего-либо, как возможности оперировать с сущностями. Вместе с тем, существование предполагает не отстранённый, абстрагированный взгляд на сущности, но делает акцент на их реальности. Таким образом, получается разрыв между абстрактными сущностями и экзистенциальной реальностью — существованием.",-1),z=Object(c["g"])("p",null,"Задумайтесь, вы смотрите сейчас в экран своего компьютера, планшета или смартфона.",-1),Q=Object(c["g"])("p",null,"А вы там есть? Вы существуете? Можете доказать это? К примеру, этот сайт есть и он существует. Любой человек на планете земля может его увидеть сразу в тот же момент как пожелает... А вас может увидить любой человек сразу? То-то же...",-1),R=Object(c["g"])("div",{class:"d-flex"},[Object(c["g"])("div",null,[Object(c["g"])("p",null,"Вот и получается, что сайт есть, а вас нет."),Object(c["g"])("p",null," Но тем не менее, попробуйте поискать на главной странице или воспользоваться меню. Если и там вам не удастся найти искомое, то вам останется только посочувствовать.")]),Object(c["g"])("div",null,[Object(c["g"])("img",{src:M.a,alt:"Логотип Vue.js",width:"400",height:"202",align:"right"})])],-1);Object(c["q"])();var W=B((function(e,t){return Object(c["p"])(),Object(c["d"])(c["a"],null,[F,J,K,U,z,Q,R],64)}));n("d5ca");const X={};X.render=W,X.__scopeId="data-v-6b346d8e";var Y=X,Z=[{path:"/vuejs-learn/",name:"Home",component:P},{path:"/vuejs-learn/todo-list",name:"TodoList",component:function(){return n.e("chunk-45d4df10").then(n.bind(null,"a7b9"))}},{path:"/vuejs-learn/game",name:"TicTacToe",component:function(){return n.e("chunk-425cd266").then(n.bind(null,"a178"))}},{path:"/vuejs-learn/about",name:"About",component:G},{path:"/:catchAll(.*)",name:"NotFound",component:Y,meta:{requiresAuth:!1}}],$=Object(h["a"])({mode:"history",base:"/vuejs-learn/",history:Object(h["b"])(),routes:Z}),ee=$;n("150b");Object(c["c"])(O).use(ee).mount("#app")},"6ab5":function(e,t,n){},a217:function(e,t,n){e.exports=n.p+"img/tic-tak-toe.13129fc9.jpg"},b93b:function(e,t,n){"use strict";n("41b3")},be48:function(e,t,n){e.exports=n.p+"img/freeman.7e9dac66.png"},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d5ca:function(e,t,n){"use strict";n("6ab5")},e2e9:function(e,t,n){"use strict";n("38a9")}});
//# sourceMappingURL=app.771118db.js.map