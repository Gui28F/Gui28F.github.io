if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CuEIJZg5.css",revision:null},{url:"assets/index-sXKCzpvP.js",revision:null},{url:"index.html",revision:"642c432ca8f90c958e4745b6647f2f5f"},{url:"registerSW.js",revision:"10f213b06230203d4df3acd6eb7b6e58"},{url:"logo.png",revision:"81cb75a1fb9a9353c8f406242dd6c00c"},{url:"manifest.webmanifest",revision:"db9c0b8acfa52d3d174518bfb62d02a6"}],{}),e.cleanupOutdatedCaches()}));
