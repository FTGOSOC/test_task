(function(){"use strict";var t={6208:function(t,e,o){var n=o(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("h1",{staticClass:"title"},[t._v(" Test Task ")]),e("div",{staticClass:"card"},[e("nav",[e("router-link",{class:{active:t.$route.path.includes("select")},attrs:{to:"/select"}},[t._v("Component: BaseSelect")]),e("router-link",{class:{active:t.$route.path.includes("tooltip")},attrs:{to:"/tooltip"}},[t._v("Component: BaseTooltip")])],1),e("router-view")],1)])},s=[],r=o(1001),l={},a=(0,r.Z)(l,i,s,!1,null,null,null),c=a.exports,x=o(2631),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"selectView"},[e("base-select",{attrs:{options:t.options,title:"My awesome title",placeholder:"Text"},model:{value:t.baseValue,callback:function(e){t.baseValue=e},expression:"baseValue"}})],1)},u=[],f=o(4161);const d=async()=>{const{data:t}=await f.Z.get("https://60de1565878c890017fa2d5f.mockapi.io/api/v1/users");return t.map((t=>({value:t.id,content:t.name})))};var h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"baseSelect"},[e("div",{staticClass:"selectTitle"},[t._v(" "+t._s(t.title)+" ")]),e("div",{ref:"customSelect",staticClass:"customSelect",class:{empty:!t.value},on:{click:t.showOptions}},[e("div",{staticClass:"customSelectBody"},[t.content?e("p",[t._v(" "+t._s(t.label)+" ")]):e("p",[t._v(" "+t._s(t.placeholder)+" ")]),e("span",[e("img",{class:{reverse:t.isSelectOpened},attrs:{src:o(2651),alt:"arrow"}})])])]),e("transition",{attrs:{name:"fade"}},[t.isSelectOpened?e("div",{ref:"customSelectContent",staticClass:"customSelectContent",class:{showToTop:t.showToTop},on:{click:function(e){t.isSelectOpened=!1}}},t._l(t.options,(function(o){return e("div",{key:o.value,staticClass:"customSelectOption",on:{click:function(e){t.content=o.value}}},[t._v(" "+t._s(o.content)+" ")])})),0):t._e()])],1)},v=[],m={name:"SelectComponent",props:{options:{type:Array,require:!1,default:[]},value:{type:String,require:!1,default:""},placeholder:{type:String,require:!1,default:"Text"},title:{type:String,require:!1,default:"Title"}},data(){return{content:this.value,isSelectOpened:!1,showToTop:!1}},methods:{showOptions(){if(!this.options.length)return;this.showToTop=!1,this.isSelectOpened=!this.isSelectOpened;const t=this.$refs.customSelect.getBoundingClientRect().top,e=this.$refs.customSelect.offsetHeight;window.innerHeight-t-e<105&&(this.showToTop=!0)}},computed:{label(){return this.content?this.options.find((t=>t.value===this.content)).content:""}},watch:{content(){this.$emit("input",this.content)}}},g=m,w=(0,r.Z)(g,h,v,!1,null,"096b4e40",null),T=w.exports,b={name:"SelectView",components:{BaseSelect:T},created(){d().then((t=>{this.options=t}))},data(){return{baseValue:"",options:[]}}},_=b,C=(0,r.Z)(_,p,u,!1,null,"62d64b36",null),S=C.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tooltips"},[e("base-tooltip",{attrs:{position:"bot",tooltip:"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "}},[e("p",[t._v("Bottom")])]),e("base-tooltip",{attrs:{position:"top",tooltip:"text text text text text text text text text text text text text text text text text text "}},[e("p",[t._v("Top")])]),e("base-tooltip",{attrs:{position:"left",tooltip:"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "}},[e("p",[t._v("Left")])]),e("base-tooltip",{attrs:{position:"right",tooltip:"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "}},[e("p",[t._v("Right")])])],1)},O=[],k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"baseToolTip"},[e("div",{ref:"tooltipBody",staticClass:"tooltipBody",on:{mouseenter:t.openTooltip,mouseleave:function(e){t.isToolTipShown=!1}}},[t._t("default")],2),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isToolTipShown,expression:"isToolTipShown"}],ref:"tooltipContent",staticClass:"tooltipContent",class:t.factPosition},[t._v(" "+t._s(t.tooltip)+" ")])])],1)},B=[];const Z=(t,e,o)=>{const n=window.innerWidth;if("bot"===t){const t=e.getBoundingClientRect().top,n=e.offsetHeight,i=window.innerHeight-t-n,s=o.offsetHeight;return i<s?"top":"bot"}if("top"===t){const t=e.getBoundingClientRect().top,n=o.offsetHeight;return t<n?"bot":"top"}if("left"===t){const t=e.getBoundingClientRect().left,n=o.offsetWidth;return t<n?"right":"left"}if("right"===t){const t=e.getBoundingClientRect().left,i=e.offsetWidth,s=o.offsetWidth;return console.log(s),n-t-i<s?"left":"right"}};var P={name:"TooltipComponent",props:{position:{type:String,require:!1,default:"bot"},tooltip:{type:String,require:!1,default:"Title"}},data(){return{isToolTipShown:!1,factPosition:this.position}},methods:{openTooltip(){this.isToolTipShown=!0,this.$nextTick((()=>{this.factPosition=Z(this.position,this.$refs.tooltipBody,this.$refs.tooltipContent)}))}}},$=P,V=(0,r.Z)($,k,B,!1,null,"3472ab8d",null),j=V.exports,q={name:"TooltipView",components:{BaseTooltip:j}},H=q,R=(0,r.Z)(H,y,O,!1,null,"4adb1922",null),W=R.exports;n.ZP.use(x.ZP);const z=[{path:"/select",name:"select",component:S},{path:"/tooltip",name:"tooltip",component:W}],M=new x.ZP({mode:"history",base:"/test_task/",routes:z});var A=M;n.ZP.config.productionTip=!1,new n.ZP({router:A,render:t=>t(c)}).$mount("#app")},2651:function(t,e,o){t.exports=o.p+"img/arrow.0fd88962.svg"}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var r=1/0;for(x=0;x<t.length;x++){n=t[x][0],i=t[x][1],s=t[x][2];for(var l=!0,a=0;a<n.length;a++)(!1&s||r>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[a])}))?n.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(x--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var x=t.length;x>0&&t[x-1][2]>s;x--)t[x]=t[x-1];t[x]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/test_task/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,r=n[0],l=n[1],a=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(a)var x=a(o)}for(e&&e(n);c<r.length;c++)s=r[c],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(x)},n=self["webpackChunktz"]=self["webpackChunktz"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6208)}));n=o.O(n)})();
//# sourceMappingURL=app.10d3ba1e.js.map