function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");function l(e,o){const t=Math.random()>.3;return new Promise(t?(t,n)=>{setTimeout((()=>t({position:e,delay:o})),o)}:(t,n)=>{setTimeout((()=>n({position:e,delay:o})),o)})}const u=document.querySelector("form");console.dir(u);const s=u[0],d=u[1],a=u[2];u[3];u.addEventListener("submit",(o=>{o.preventDefault();let t=Number(s.value);for(let o=1;o<=a.value;o+=1)l(o,t).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),t+=Number(d.value)}));
//# sourceMappingURL=03-promises.cf2678df.js.map
