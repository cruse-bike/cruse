function N(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function R(){return Object.create(null)}function L(t){t.forEach(B)}function M(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function X(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function Y(t){return Object.keys(t).length===0}function A(t,...n){if(t==null){for(const r of n)r(void 0);return N}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Z(t){let n;return A(t,e=>n=e)(),n}function $(t,n,e){t.$$.on_destroy.push(A(n,e))}function tt(t,n,e,r){if(t){const i=j(t,n,e,r);return t[0](i)}}function j(t,n,e,r){return t[1]&&r?P(e.ctx.slice(),t[1](r(n))):e.ctx}function nt(t,n,e,r){if(t[2]&&r){const i=t[2](r(e));if(n.dirty===void 0)return i;if(typeof i=="object"){const s=[],c=Math.max(n.dirty.length,i.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|i[u];return s}return n.dirty|i}return n.dirty}function et(t,n,e,r,i,s){if(i){const c=j(n,e,r,s);t.p(c,i)}}function rt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function it(t){const n={};for(const e in t)n[e]=!0;return n}function ct(t){return t??""}function lt(t,n,e){return t.set(e),n}function ut(t){return t&&M(t.destroy)?t.destroy:N}let b=!1;function st(){b=!0}function at(){b=!1}function O(t,n,e,r){for(;t<n;){const i=t+(n-t>>1);e(i)<=r?t=i+1:n=i}return t}function T(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let i=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(i>0&&n[e[i]].claim_order<=a?i+1:O(1,i,D=>n[e[D]].claim_order,a))-1;r[l]=e[o]+1;const w=o+1;e[w]=l,i=Math.max(w,i)}const s=[],c=[];let u=n.length-1;for(let l=e[i]+1;l!=0;l=r[l-1]){for(s.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<s.length&&c[l].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(c[l],o)}}function H(t,n){if(b){for(T(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ot(t,n,e){b&&!e?H(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function _t(){return k(" ")}function dt(){return k("")}function ht(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function mt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function bt(t){return t.dataset.svelteH}function yt(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,r,i=!1){F(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,i||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function S(t,n,e,r){return C(t,i=>i.nodeName===n,i=>{const s=[];for(let c=0;c<i.attributes.length;c++){const u=i.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>i.removeAttribute(c))},()=>r(n))}function gt(t,n,e){return S(t,n,e,I)}function xt(t,n,e){return S(t,n,e,z)}function U(t,n){return C(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>k(n),!0)}function vt(t){return U(t," ")}function kt(t,n){n=""+n,t.data!==n&&(t.data=n)}function wt(t,n){t.value=n??""}function Et(t,n,e,r){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function Nt(t,n,e){t.classList.toggle(n,!!e)}function W(t,n,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:r})}function At(t,n){return new t(n)}let p;function y(t){p=t}function d(){if(!p)throw new Error("Function called outside component initialization");return p}function jt(t){d().$$.on_mount.push(t)}function Ct(t){d().$$.after_update.push(t)}function St(t){d().$$.on_destroy.push(t)}function qt(){const t=d();return(n,e,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[n];if(i){const s=W(n,e,{cancelable:r});return i.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Dt(t,n){return d().$$.context.set(t,n),n}function Pt(t){return d().$$.context.get(t)}function Bt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(r=>r.call(this,n))}const h=[],E=[];let _=[];const x=[],q=Promise.resolve();let v=!1;function G(){v||(v=!0,q.then(K))}function Lt(){return G(),q}function J(t){_.push(t)}function Mt(t){x.push(t)}const g=new Set;let f=0;function K(){if(f!==0)return;const t=p;do{try{for(;f<h.length;){const n=h[f];f++,y(n),Q(n.$$)}}catch(n){throw h.length=0,f=0,n}for(y(null),h.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];g.has(e)||(g.add(e),e())}_.length=0}while(h.length);for(;x.length;)x.pop()();v=!1,g.clear(),y(t)}function Q(t){if(t.fragment!==null){t.update(),L(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}function Ot(t){const n=[],e=[];_.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),_=n}export{y as $,L as A,Dt as B,Pt as C,qt as D,St as E,lt as F,Z as G,Mt as H,Bt as I,ct as J,Nt as K,ut as L,it as M,z as N,xt as O,ht as P,X as Q,bt as R,wt as S,mt as T,R as U,K as V,M as W,Y as X,J as Y,Ot as Z,p as _,_t as a,B as a0,h as a1,G as a2,st as a3,at as a4,Ct as b,vt as c,ft as d,dt as e,I as f,gt as g,yt as h,ot as i,pt as j,Et as k,k as l,U as m,kt as n,jt as o,E as p,At as q,tt as r,V as s,Lt as t,et as u,rt as v,nt as w,H as x,N as y,$ as z};