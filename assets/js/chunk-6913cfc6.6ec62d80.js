(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6913cfc6"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"26cb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"music-avatar",on:{click:t.play}},[n("div",{staticClass:"music-avatar__bottom"},[n("div",{staticClass:"bottom-border__white"}),n("img",{staticClass:"music-avatar__img",style:t.translate,attrs:{src:r("4341"),alt:"",oncontextmenu:"return false;",ondragstart:"return false;"}})])])},o=[],i=r("5530"),c=(r("d8ad"),r("2f62")),a={data:function(){return{interval:"",rotate:0}},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])({playStatus:function(t){return t.music.playStatus}})),{},{translate:function(){return"transform:rotate(".concat(this.rotate,"deg)  translateZ(0);")}}),watch:{playStatus:function(t){console.log("变化",t),"loading"!==t&&clearInterval(this.interval)}},methods:{play:function(){var t=this,e="loading"==this.playStatus?"pause":"loading";if(this.$store.commit("UPDATE_PLAYSTATUS",e),"loading"==e)return this.interval&&clearInterval(this.interval),void(this.interval=setInterval((function(){t.rotate+=.2}),30));clearInterval(this.interval)}}},f=a,u=(r("2987"),r("2877")),s=Object(u["a"])(f,n,o,!1,null,null,null);e["default"]=s.exports},2987:function(t,e,r){"use strict";r("41ba")},"41ba":function(t,e,r){},4341:function(t,e,r){t.exports=r.p+"assets/img/people.7c00c340.png"},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!a||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),l=r("5135"),b=r("e8b5"),d=r("861d"),p=r("825a"),v=r("7b0b"),y=r("fc6a"),g=r("c04e"),h=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),S=r("7418"),P=r("06cf"),_=r("9bf2"),k=r("d1e7"),D=r("9112"),E=r("6eeb"),x=r("5692"),C=r("f772"),I=r("d012"),N=r("90e3"),T=r("b622"),A=r("e538"),J=r("746f"),F=r("d44e"),U=r("69f3"),$=r("b727").forEach,B=C("hidden"),L="Symbol",Q="prototype",W=T("toPrimitive"),Y=U.set,Z=U.getterFor(L),q=Object[Q],z=o.Symbol,G=i("JSON","stringify"),H=P.f,K=_.f,M=j.f,R=k.f,V=x("symbols"),X=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=o.QObject,ot=!nt||!nt[Q]||!nt[Q].findChild,it=a&&s((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(q,e);n&&delete q[e],K(t,e,r),n&&t!==q&&K(q,e,n)}:K,ct=function(t,e){var r=V[t]=m(z[Q]);return Y(r,{type:L,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ft=function(t,e,r){t===q&&ft(X,e,r),p(t);var n=g(e,!0);return p(r),l(V,n)?(r.enumerable?(l(t,B)&&t[B][n]&&(t[B][n]=!1),r=m(r,{enumerable:h(0,!1)})):(l(t,B)||K(t,B,h(1,{})),t[B][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=y(e),n=O(r).concat(pt(r));return $(n,(function(e){a&&!lt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=g(t,!0),r=R.call(this,e);return!(this===q&&l(V,e)&&!l(X,e))&&(!(r||!l(this,e)||!l(V,e)||l(this,B)&&this[B][e])||r)},bt=function(t,e){var r=y(t),n=g(e,!0);if(r!==q||!l(V,n)||l(X,n)){var o=H(r,n);return!o||!l(V,n)||l(r,B)&&r[B][n]||(o.enumerable=!0),o}},dt=function(t){var e=M(y(t)),r=[];return $(e,(function(t){l(V,t)||l(I,t)||r.push(t)})),r},pt=function(t){var e=t===q,r=M(e?X:y(t)),n=[];return $(r,(function(t){!l(V,t)||e&&!l(q,t)||n.push(V[t])})),n};if(f||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),r=function(t){this===q&&r.call(X,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),it(this,e,h(1,t))};return a&&ot&&it(q,e,{configurable:!0,set:r}),ct(e,t)},E(z[Q],"toString",(function(){return Z(this).tag})),E(z,"withoutSetter",(function(t){return ct(N(t),t)})),k.f=lt,_.f=ft,P.f=bt,w.f=j.f=dt,S.f=pt,A.f=function(t){return ct(T(t),t)},a&&(K(z[Q],"description",{configurable:!0,get:function(){return Z(this).description}}),c||E(q,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:z}),$(O(rt),(function(t){J(t)})),n({target:L,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),G){var vt=!f||s((function(){var t=z();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,G.apply(null,o)}})}z[Q][W]||D(z[Q],W,z[Q].valueOf),F(z,L),I[B]=!0},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},d8ad:function(t,e,r){"use strict";var n=r("2b0e"),o=new n["default"];e["a"]=o},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,u=i(n),s={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),u=!a||f;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n}}]);