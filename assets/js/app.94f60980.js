(function(e){function t(t){for(var r,a,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"39c75460","chunk-99c23a82":"7449825c","chunk-b088808c":"202673a4","chunk-cfeee504":"313fe278","chunk-e079bb34":"59d47e2d","chunk-3ddcb792":"d848d58b","chunk-6913cfc6":"6ec62d80","chunk-82796ea6":"95e03d17"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-99c23a82":1,"chunk-b088808c":1,"chunk-cfeee504":1,"chunk-e079bb34":1,"chunk-3ddcb792":1,"chunk-6913cfc6":1,"chunk-82796ea6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({about:"about"}[e]||e)+"."+{about:"3a98a260","chunk-99c23a82":"56060121","chunk-b088808c":"42ab5557","chunk-cfeee504":"b6ea63d2","chunk-e079bb34":"d0411a27","chunk-3ddcb792":"7231219c","chunk-6913cfc6":"26a0e38f","chunk-82796ea6":"4ea8af73"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],f.parentNode.removeChild(f),n(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u=(n("034f"),n("2877")),c={},i=Object(u["a"])(c,a,o,!1,null,null,null),l=i.exports,s=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("router-view")],1)},f=[],p={name:"Home"},h=p,m=Object(u["a"])(h,d,f,!1,null,null,null),b=m.exports;r["default"].use(s["a"]);var v=[{path:"/",name:"Home",component:b,children:[{path:"/",name:"people",meta:{title:"快乐每一天"},component:function(){return n.e("about").then(n.bind(null,"e496"))}},{path:"/toImage",name:"ToImage",component:function(){return n.e("about").then(n.bind(null,"90e5"))}},{path:"/navigation",name:"Navigation",meta:{title:"导航"},component:function(){return n.e("about").then(n.bind(null,"e61d"))}},{path:"/svgLearn",name:"SvgLearn",component:function(){return n.e("about").then(n.bind(null,"b083"))}},{path:"/toWord",name:"ToWord",component:function(){return n.e("about").then(n.bind(null,"9deb"))}}]}],g=new s["a"]({mode:"hash",base:"",routes:v});g.beforeEach((function(e,t,n){var r;(null===e||void 0===e||null===(r=e.meta)||void 0===r?void 0:r.title)&&(document.title=e.meta.title),n()}));var y=g,k=n("2f62"),w=function(){return{playStatus:"play",lastIndex:0}},j={UPDATE_PLAYSTATUS:function(e,t){e.playStatus=t},UPDATE_LASTINDEX:function(e,t){e.lastIndex=t.lastIndex}},P={},S={state:w,mutations:j,actions:P};r["default"].use(k["a"]);var E=new k["a"].Store({state:{},mutations:{},actions:{},modules:{music:S}}),T=(n("812b"),n("5c96")),_=n.n(T),O=(n("0fae"),n("bc3a")),x=n.n(O),A=x.a.create({timeout:3e3,headers:{}});A.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),A.interceptors.response.use((function(e){return 200==e.status?200==e.data.code||204==e.data.code?e.data.data:(401==e.data.code||403==e.data.code||e.data.code,Promise.reject(e.data)):Promise.reject(e)}),(function(e){return Promise.reject(e)})),r["default"].prototype.$axios=A;n("77ed");r["default"].config.productionTip=!1,r["default"].use(_.a),new r["default"]({router:y,store:E,render:function(e){return e(l)}}).$mount("#app")},"812b":function(e,t,n){},"85ec":function(e,t,n){}});