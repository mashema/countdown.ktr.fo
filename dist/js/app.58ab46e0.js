(function(n){function t(t){for(var i,o,a=t[0],s=t[1],l=t[2],p=0,d=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=s[i]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],i=!0,a=1;a<e.length;a++){var s=e[a];0!==u[s]&&(i=!1)}i&&(r.splice(t--,1),n=o(o.s=e[0]))}return n}var i={},u={app:0},r=[];function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)o.d(e,i,function(t){return n[t]}.bind(null,i));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=s;r.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";e("85ec")},"28ba":function(n,t,e){"use strict";e("624a")},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("CountDown")],1)},r=[],o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n.running?n._e():e("PlusMinusField",{attrs:{min:2,max:12,value:n.durationInMinutes},on:{input:n.minutes}}),n.running?e("div",{staticClass:"time",on:{click:n.stop}},[n._v(" "+n._s(n.formattedElapsedTime)+" ")]):n._e(),e("div",{staticClass:"button"},[n.running?n._e():e("span",[e("button",{on:{click:n.start}},[n._v("Continue")])]),n.running?n._e():e("span",[e("button",{on:{click:n.restart}},[n._v("Restart")])])])],1)},a=[],s=(e("d3b7"),e("25f0"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"minusplusnumber"},[e("div",{staticClass:"mpbtn minus",on:{click:function(t){return n.mpminus()}}},[n._v(" - ")]),e("div",{attrs:{id:"field_container"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.newValue,expression:"newValue"}],attrs:{type:"number",disabled:""},domProps:{value:n.newValue},on:{input:function(t){t.target.composing||(n.newValue=t.target.value)}}})]),e("div",{staticClass:"mpbtn plus",on:{click:function(t){return n.mpplus()}}},[n._v(" + ")])])}),l=[],c=(e("a9e3"),{props:{value:{default:0,type:Number},min:{default:0,type:Number},max:{default:void 0,type:Number}},data:function(){return{newValue:0}},methods:{getNotificationClass:function(n){return"alert alert-".concat(n.type)},mpplus:function(){(void 0===this.max||this.newValue<this.max)&&(this.newValue=this.newValue+1,this.$emit("input",this.newValue))},mpminus:function(){this.newValue>this.min&&(this.newValue=this.newValue-1,this.$emit("input",this.newValue))}},watch:{value:{handler:function(n){this.newValue=n}}},created:function(){this.newValue=this.value}}),p=c,d=(e("78a9"),e("2877")),f=Object(d["a"])(p,s,l,!1,null,"301d8106",null),m=f.exports,h=e("8129"),v=e("de35"),b={name:"CountDown",components:{PlusMinusField:m},data:function(){return{durationInMinutes:0,running:!1,elapsedTime:0,startSoundFile:h,oneMinSoundFile:v}},computed:{formattedElapsedTime:function(){var n=this.elapsedTime,t=Math.floor(this.elapsedTime/3600);t>=1?n-=3600*t:t="00";var e=Math.floor(n/60);return e>=1?n-=60*e:e="00",n<1&&(n="00"),1===e.toString().length&&(e="0"+e),1===n.toString().length&&(n="0"+n),e+":"+n}},methods:{minutes:function(n){this.durationInMinutes=n},start:function(){var n=this;this.running=!0,this.startSound(),this.timer=setInterval((function(){n.elapsedTime--}),1e3)},stop:function(){clearInterval(this.timer),this.running=!1},restart:function(){this.elapsedTime=60*this.durationInMinutes,this.start()},startSound:function(){if(this.running){var n=new Audio(this.startSoundFile);n.play()}},oneMinSound:function(){if(this.running){var n=new Audio(this.oneMinSoundFile);n.play()}}},created:function(){this.durationInMinutes=8},watch:{elapsedTime:{handler:function(n){60===n&&this.oneMinSound()}},durationInMinutes:{handler:function(n){this.elapsedTime=60*n}}}},w=b,g=(e("28ba"),Object(d["a"])(w,o,a,!1,null,"2d3f9c36",null)),y=g.exports,_={name:"App",components:{CountDown:y}},M=_,x=(e("034f"),Object(d["a"])(M,u,r,!1,null,null,null)),S=x.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(n){return n(S)}}).$mount("#app")},5937:function(n,t,e){},"624a":function(n,t,e){},"78a9":function(n,t,e){"use strict";e("5937")},8129:function(n,t,e){n.exports=e.p+"media/start_end.d3786f9b.mp3"},"85ec":function(n,t,e){},de35:function(n,t,e){n.exports=e.p+"media/onemin.27d97197.mp3"}});
//# sourceMappingURL=app.58ab46e0.js.map