self.addEventListener('install',e=>{
  e.waitUntil(caches.open('pwa').then(c=>c.addAll([
    './','index.html','sys1.html','sys2.html','sys3.html','manifest.json'
  ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
