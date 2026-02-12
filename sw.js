
const CACHE_NAME='proair-ghp-v1';
const CORE=[
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-192.png',
  'icons/maskable-512.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME && caches.delete(k))))) });
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return; const u=new URL(r.url);
  if(u.pathname.endsWith('.pdf')||u.pathname.endsWith('.html')){
    e.respondWith(fetch(r).then(resp=>{caches.open(CACHE_NAME).then(c=>c.put(r,resp.clone()));return resp;}).catch(()=>caches.match(r)));
  }else{
    e.respondWith(caches.match(r).then(c=>c||fetch(r).then(resp=>{caches.open(CACHE_NAME).then(cache=>cache.put(r,resp.clone()));return resp;})));
  }
});
