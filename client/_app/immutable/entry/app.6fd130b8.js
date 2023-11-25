var U=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var l=(r,e,t)=>(U(r,e,"read from private field"),t?t.call(r):e.get(r)),P=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},q=(r,e,t,o)=>(U(r,e,"write to private field"),o?o.call(r,t):e.set(r,t),t);import{d as K,p as M,a as L,b as Q,u as X,c as Y,g as n,e as y,s as O,f as x,t as Z,m as T}from"../chunks/runtime.e09db590.js";import{c as $,i as A,a as R,b as C,t as ee,d as N,o as te,e as k,s as W,f as D,g as re,h as se,j as oe,k as F,l as I}from"../chunks/disclose-version.e3436084.js";import{o as ae}from"../chunks/main-client.3c111379.js";function ne(r){return class extends ie{constructor(e){super({component:r,...e})}}}var d,f;class ie{constructor(e){P(this,d,{});P(this,f,void 0);q(this,f,$(e.component,{target:e.target,props:{...e.props,$$events:l(this,d)},context:e.context,immutable:e.immutable,intro:e.intro,recover:e.recover}));for(const t of Object.keys(l(this,f)))t==="$set"||t==="$destroy"||K(this,t,{get(){return l(this,f)[t]},set(o){l(this,f)[t]=o},enumerable:!0})}$set(e){l(this,f).$set(e)}$on(e,t){l(this,d)[e]=l(this,d)[e]||[];const o=(...i)=>t.call(this,...i);return l(this,d)[e].push(o),()=>{l(this,d)[e]=l(this,d)[e].filter(i=>i!==o)}}$destroy(){l(this,f).$destroy()}}d=new WeakMap,f=new WeakMap;const le="modulepreload",ce=function(r,e){return new URL(r,e).href},z={},E=function(e,t,o){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=ce(s,o),s in z)return;z[s]=!0;const a=s.endsWith(".css"),b=a?'[rel="stylesheet"]':"";if(!!o)for(let _=i.length-1;_>=0;_--){const v=i[_];if(v.href===s&&(!a||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${b}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":le,a||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),a)return new Promise((_,v)=>{c.addEventListener("load",_),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},ge={};var ue=F('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),me=F("<!> <!>",!0);function de(r,e){M(e,!0);let t=y(e,"stores"),o=y(e,"page"),i=y(e,"constructors"),s=L(e,"components",()=>[],!0),a=y(e,"form"),b=L(e,"data_0",null,!1),w=L(e,"data_1",null,!1);Q(()=>t().page.set(o())),X(()=>{t(),o(),i(),n(s),a(),n(b),n(w),t().page.notify()});let c=O(!1),_=O(!1),v=O(null);ae(()=>{const u=t().page.subscribe(()=>{n(c)&&(x(_,!0),Z().then(()=>{x(v,document.title||"untitled page")}))});return x(c,!0),u});var V=te(r,!0,me),S=k(V),G=W(W(S));A(S,()=>i()[1],u=>{var h=D(u),p=k(h);C(p,()=>i()[0],g=>{I(g(p,{get data(){return n(b)},children:(m,fe)=>{var B=D(m),j=k(B);C(j,()=>i()[1],H=>{I(H(j,{get data(){return n(w)},get form(){return a()}}),J=>T(s,n(s)[1]=J),s[1])}),R(m,B)}}),m=>T(s,n(s)[0]=m),s[0])}),R(u,h)},u=>{var h=D(u),p=k(h);C(p,()=>i()[0],g=>{I(g(p,{get data(){return n(b)},get form(){return a()}}),m=>T(s,n(s)[0]=m),s[0])}),R(u,h)}),A(G,()=>n(c),u=>{var h=re(u,!0,ue),p=se(h);A(p,()=>n(_),g=>{var m=oe(g);ee(m,()=>n(v)),N(g,m)},null),N(u,h)},null),R(r,V),Y()}const Ee=ne(de),be=[()=>E(()=>import("../nodes/0.0bb1c485.js"),["../nodes/0.0bb1c485.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js","../chunks/stores.cd34f819.js","../chunks/singletons.10644159.js","../chunks/index.56af5967.js","../assets/0.c1785229.css"],import.meta.url),()=>E(()=>import("../nodes/1.e8d86119.js"),["../nodes/1.e8d86119.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js","../chunks/stores.cd34f819.js","../chunks/singletons.10644159.js","../chunks/index.56af5967.js"],import.meta.url),()=>E(()=>import("../nodes/2.98ff1cc3.js"),["../nodes/2.98ff1cc3.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js","../chunks/index.56af5967.js","../assets/2.57239003.css"],import.meta.url),()=>E(()=>import("../nodes/3.51f771f1.js"),["../nodes/3.51f771f1.js","../chunks/environment.9aa685ef.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js"],import.meta.url),()=>E(()=>import("../nodes/4.cc88c9bb.js"),["../nodes/4.cc88c9bb.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js","../chunks/parse.bee59afc.js","../chunks/singletons.10644159.js","../chunks/index.56af5967.js","../assets/4.8d9b445d.css"],import.meta.url),()=>E(()=>import("../nodes/5.d8a35b46.js"),["../nodes/5.d8a35b46.js","../chunks/environment.9aa685ef.js","../chunks/disclose-version.e3436084.js","../chunks/runtime.e09db590.js","../assets/5.89a9e780.css"],import.meta.url)],ye=[],Re={"/":[2],"/about":[3],"/sverdle":[-5],"/sverdle/how-to-play":[5]},ke={handleError:({error:r})=>{console.error(r)}};export{Re as dictionary,ke as hooks,ge as matchers,be as nodes,Ee as root,ye as server_loads};
