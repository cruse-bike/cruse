import{y as u,s as h}from"./scheduler.31fq4JYr.js";const i=[];function w(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=u){let n;const r=new Set;function b(t){if(h(e,t)&&(e=t,n)){const c=!i.length;for(const s of r)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function f(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(n=o(b,f)||u),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:b,update:f,subscribe:_}}var a;const d=((a=globalThis.__sveltekit_1f6tewi)==null?void 0:a.base)??"/cruse";var l;const q=((l=globalThis.__sveltekit_1f6tewi)==null?void 0:l.assets)??d;export{q as a,d as b,w as r,p as w};
