import{y as u,s as q}from"./scheduler.DQ2Geaz3.js";const i=[];function g(e,o){return{subscribe:h(e,o).subscribe}}function h(e,o=u){let n;const r=new Set;function b(t){if(q(e,t)&&(e=t,n)){const c=!i.length;for(const s of r)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(n=o(b,a)||u),t(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_qxz40q)==null?void 0:f.base)??"/cruse";var l;const z=((l=globalThis.__sveltekit_qxz40q)==null?void 0:l.assets)??p;export{z as a,p as b,g as r,h as w};
