import{y as u,s as p}from"./scheduler.31fq4JYr.js";const i=[];function k(e,o){return{subscribe:h(e,o).subscribe}}function h(e,o=u){let n;const r=new Set;function c(t){if(p(e,t)&&(e=t,n)){const b=!i.length;for(const s of r)s[1](),i.push(s,e);if(b){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){c(t(e))}function _(t,b=u){const s=[t,b];return r.add(s),r.size===1&&(n=o(c,a)||u),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:c,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_lc6spk)==null?void 0:f.base)??"/cruse";var l;const q=((l=globalThis.__sveltekit_lc6spk)==null?void 0:l.assets)??d;export{q as a,d as b,k as r,h as w};
