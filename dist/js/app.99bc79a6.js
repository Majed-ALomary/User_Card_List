(function(){"use strict";var t={972:function(t,r,e){var s=e(6369),n=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"app"}},[r("UserList")],1)},i=[],a=function(){var t=this,r=t._self._c;return r("div",[r("h1",[t._v("User Card List")]),r("div",{staticClass:"user-list"},t._l(t.users,(function(e,s){return r("UserCard",{key:s,attrs:{user:e,"is-marker-visible":t.isMarkerVisible}})})),1),r("button",{staticClass:"btn",attrs:{disabled:t.loading},on:{click:t.loadNextPage}},[t._v(" "+t._s("Next")+" ")])])},o=[],l=e(1076),u=function(){var t=this,r=t._self._c;return r("div",{staticClass:"user-card"},[r("div",{staticClass:"container-img"},[r("img",{staticClass:"user-avatar",attrs:{src:t.user.picture.large,alt:"User Avatar"}})]),r("p",[r("strong",[t._v("Name:")]),t._v(" "+t._s(t.user.name.first)+" "+t._s(t.user.name.last))]),r("p",[r("strong",[t._v("Email:")]),t._v(" "+t._s(t.user.email))]),r("p",[r("strong",[t._v("Gender:")]),t._v(" "+t._s(t.user.gender))]),r("p",[r("strong",[t._v("Country:")]),t._v(" "+t._s(t.user.location.country))]),r("p",[r("strong",[t._v("Date of Birth:")]),t._v(" "+t._s(t.DateofBirth))]),r("UserMap",{attrs:{coordinates:t.user.location.coordinates,"is-marker-visible":t.isMarkerVisible}})],1)},c=[],d=function(){var t=this,r=t._self._c;return r("div",{staticClass:"user-map",on:{click:t.toggleMarkerVisibility}},[r("GmapMap",{staticStyle:{height:"200px",width:"100%"},attrs:{center:t.center,zoom:14}},[t.isMarkerVisible?r("GmapMarker",{attrs:{position:t.position}}):t._e()],1)],1)},p=[],f={props:{coordinates:Object},data(){return{isMarkerVisible:!1}},computed:{center(){return{lat:parseFloat(this.coordinates.latitude),lng:parseFloat(this.coordinates.longitude)}},position(){return{lat:parseFloat(this.coordinates.latitude),lng:parseFloat(this.coordinates.longitude)}}},watch:{isMarkerVisible(t){console.log("Marker visibility changed:",t)}},methods:{toggleMarkerVisibility(){this.isMarkerVisible=!this.isMarkerVisible}}},h=f,v=e(1001),g=(0,v.Z)(h,d,p,!1,null,null,null),m=g.exports;const b=t=>{const r={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,r)};var _={components:{UserMap:m},props:{user:Object,isMarkerVisible:Boolean},computed:{DateofBirth(){return b(this.user.dob.date)}}},y=_,k=(0,v.Z)(y,u,c,!1,null,null,null),M=k.exports;const w={URL:"https://randomuser.me/api/"};var P={components:{UserCard:M},data(){return{users:[],currentPage:1,usersPerPage:5,loading:!1}},computed:{isMarkerVisible(){return!0}},mounted(){return this.fetchUserData(),{loading:!1}},methods:{async fetchUserData(){try{this.loading=!0;const t=Array.from({length:this.usersPerPage},(()=>w.URL)),r=await Promise.all(t.map((t=>l.Z.get(t)))),e=r.flatMap((t=>t.data.results?t.data.results:[t.data]));this.users=[...this.users,...e],this.loading=!1,setTimeout((()=>{window.scrollTo(0,window.scrollY+1e3)}),100)}catch(t){console.error("Error fetching data:",t)}finally{this.loading=!1}},async loadNextPage(){this.currentPage++,await this.fetchUserData()}}},O=P,U=(0,v.Z)(O,a,o,!1,null,null,null),C=U.exports,x={name:"App",components:{UserList:C}},V=x,j=(0,v.Z)(V,n,i,!1,null,null,null),L=j.exports,S=e(1970);s.ZP.use(S,{load:{key:"AIzaSyBXS2PJgTzrNLEppaBEseBcQu91e2RyYEA",libraries:"places"}}),s.ZP.config.productionTip=!1,new s.ZP({render:t=>t(L)}).$mount("#app")}},r={};function e(s){var n=r[s];if(void 0!==n)return n.exports;var i=r[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(r,s,n,i){if(!s){var a=1/0;for(c=0;c<t.length;c++){s=t[c][0],n=t[c][1],i=t[c][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<a&&(a=i));if(o){t.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,n,i]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,s){var n,i,a=s[0],o=s[1],l=s[2],u=0;if(a.some((function(r){return 0!==t[r]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var c=l(e)}for(r&&r(s);u<a.length;u++)i=a[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},s=self["webpackChunkUser_Card_List"]=self["webpackChunkUser_Card_List"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(972)}));s=e.O(s)})();
//# sourceMappingURL=app.99bc79a6.js.map