(function(){"use strict";var r={491:function(r,t,e){var n=e(9242),c=e(3396),o=e.p+"img/logo.283e5c75.png";const s={class:"card m-5"},a={class:"card-header bg-black d-flex flex-column align-items-center"},i=(0,c._)("img",{class:"w-25 img-fluid my-2",alt:"Logo",src:o},null,-1),u={class:"input-group my-3"},d=(0,c._)("button",{class:"btn btn-primary",type:"button",id:"searchButton"},[(0,c.Uk)(" Procurar "),(0,c._)("i",{class:"bi bi-search pl-2"})],-1),l={class:"card-body bg-white"};function p(r,t,e,o,p,f){const h=(0,c.up)("Showcase");return(0,c.wg)(),(0,c.iD)("div",s,[(0,c._)("div",a,[i,(0,c._)("div",u,[(0,c.wy)((0,c._)("input",{type:"text",class:"form-control bg-white",placeholder:"procure por produto...","onUpdate:modelValue":t[0]||(t[0]=r=>p.search=r)},null,512),[[n.nr,p.search]]),d])]),(0,c._)("div",l,[(0,c.Wm)(h,{search:p.search},null,8,["search"])])])}const f={class:"d-flex flex-wrap"};function h(r,t,e,n,o,s){const a=(0,c.up)("InfoProduct");return(0,c.wg)(),(0,c.iD)("div",f,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.filteredProducts,(r=>((0,c.wg)(),(0,c.iD)("div",{key:r.productId,class:"col-md-4"},[(0,c.Wm)(a,{product:r},null,8,["product"])])))),128))])}var m=e(7139);const v={class:"card m-1 border-0"},w=["src"],b={class:"card-body bg-white"},g={class:"card-title"},_={class:"card-text m-0 p-0"},y={class:"price"},x={class:"card-text old-price"},O={class:"card-title text-primary"};function P(r,t,e,n,o,s){return(0,c.wg)(),(0,c.iD)("div",v,[(0,c._)("img",{src:e.product.image,class:"card-img-top",alt:""},null,8,w),(0,c._)("div",b,[(0,c._)("h5",g,(0,m.zw)(e.product.productName),1),(0,c._)("div",null,[(0,c._)("p",_,(0,m.zw)(e.product.brand+" "+e.product.measurementUnit),1)]),(0,c._)("div",y,[(0,c._)("p",x,(0,m.zw)(s.price(e.product.listPrice)),1),(0,c._)("b",null,[(0,c._)("h5",O,(0,m.zw)(s.price(e.product.bestPrice)),1)])])])])}function j(r){const t=(r/100).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});return t}var L={name:"InfoProduct",props:{product:Object},methods:{price(r){return j(r)}}},k=e(89);const C=(0,k.Z)(L,[["render",P],["__scopeId","data-v-3a66121e"]]);var I=C,D=(e(1703),e(4161));const S=D.Z.create({baseURL:"https://desafio.xlow.com.br/",timeout:5e3});S.interceptors.request.use((r=>(r.headers["Content-Type"]="application/json",r)),(r=>Promise.reject(r)));var U=S;function z(r=!1){const t={};let e="/search";return r&&(e=e+"/"+r),U.get(e,{headers:t}).then((r=>r.data)).catch((r=>{throw new Error(r)}))}var Z={name:"ProductShowcase",props:{search:String},data(){return{products:[]}},async created(){this.products=await z()},computed:{filteredProducts(){if(this.search){const r=this.search.toLowerCase();return this.products.filter((t=>t.productName.toLowerCase().includes(r)||t.brand.toLowerCase().includes(r)||t.productId.toLowerCase().includes(r)||t.measurementUnit.toLowerCase().includes(r)))}return this.products}},components:{InfoProduct:I}};const B=(0,k.Z)(Z,[["render",h]]);var R=B,T={name:"App",components:{Showcase:R},data(){return{search:""}}};const E=(0,k.Z)(T,[["render",p]]);var N=E;(0,n.ri)(N).mount("#app")}},t={};function e(n){var c=t[n];if(void 0!==c)return c.exports;var o=t[n]={exports:{}};return r[n].call(o.exports,o,o.exports,e),o.exports}e.m=r,function(){var r=[];e.O=function(t,n,c,o){if(!n){var s=1/0;for(d=0;d<r.length;d++){n=r[d][0],c=r[d][1],o=r[d][2];for(var a=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(e.O).every((function(r){return e.O[r](n[i])}))?n.splice(i--,1):(a=!1,o<s&&(s=o));if(a){r.splice(d--,1);var u=c();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=r.length;d>0&&r[d-1][2]>o;d--)r[d]=r[d-1];r[d]=[n,c,o]}}(),function(){e.n=function(r){var t=r&&r.__esModule?function(){return r["default"]}:function(){return r};return e.d(t,{a:t}),t}}(),function(){e.d=function(r,t){for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"===typeof window)return window}}()}(),function(){e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)}}(),function(){e.p="/"}(),function(){var r={143:0};e.O.j=function(t){return 0===r[t]};var t=function(t,n){var c,o,s=n[0],a=n[1],i=n[2],u=0;if(s.some((function(t){return 0!==r[t]}))){for(c in a)e.o(a,c)&&(e.m[c]=a[c]);if(i)var d=i(e)}for(t&&t(n);u<s.length;u++)o=s[u],e.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return e.O(d)},n=self["webpackChunkexercicio_html_css_js_api"]=self["webpackChunkexercicio_html_css_js_api"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(491)}));n=e.O(n)})();
//# sourceMappingURL=app.c944607a.js.map