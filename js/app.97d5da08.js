(function(){"use strict";var t={7265:function(t,n,e){var r=e(144),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("vue-life")],1)},o=[],u=function(){var t=this,n=t._self._c;return n("div",[n("h1",[t._v("Vue Life")]),n("table",t._l(t.grid,(function(e){return n("tr",{key:e},t._l(e,(function(t){return n("td",{key:t,class:{alive:1==t}})})),0)})),0),n("h3",[t._v("Conway's Game of Life - Versão 1.0")])])},l=[],f=(e(7658),{data(){return{grid:[[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,1,0,1,0,0,0,0,1,0,1,0],[0,0,0,0,1,1,0,0,0,0,0,0,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}},methods:{turnAlive(){this.grid=this.nextState(this.grid)},countNeighboorsAlive(t,n,e){const[r,i]=[e.length,e[0].length],o=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];let u=[];for(let f=0;f<o.length;f++)u.push([t+o[f][0],n+o[f][1]]);let l=u.filter((t=>t[0]>=0&&t[0]<r&&t[1]>=0&&t[1]<i&&1==e[t[0]][t[1]]));return l.length},nextState(t){const[n,e]=[t.length,t[0].length];let r=JSON.parse(JSON.stringify(this.grid));for(let i=0;i<n;i++)for(let n=0;n<e;n++){let e=this.countNeighboorsAlive(i,n,t);1==t[i][n]?r[i][n]=2==e||3==e?1:0:r[i][n]=3==e?1:0}return r}},mounted(){setInterval((()=>{this.turnAlive()}),1e3)}}),c=f,s=e(1001),a=(0,s.Z)(c,u,l,!1,null,null,null),h=a.exports,v={name:"App",components:{VueLife:h}},p=v,d=(0,s.Z)(p,i,o,!1,null,null,null),g=d.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(g)}).$mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var u=1/0;for(s=0;s<t.length;s++){r=t[s][0],i=t[s][1],o=t[s][2];for(var l=!0,f=0;f<r.length;f++)(!1&o||u>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[f])}))?r.splice(f--,1):(l=!1,o<u&&(u=o));if(l){t.splice(s--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var s=t.length;s>0&&t[s-1][2]>o;s--)t[s]=t[s-1];t[s]=[r,i,o]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,u=r[0],l=r[1],f=r[2],c=0;if(u.some((function(n){return 0!==t[n]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(f)var s=f(e)}for(n&&n(r);c<u.length;c++)o=u[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(s)},r=self["webpackChunkvuelife"]=self["webpackChunkvuelife"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(7265)}));r=e.O(r)})();
//# sourceMappingURL=app.97d5da08.js.map