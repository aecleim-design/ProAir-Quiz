self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('proair-quiz-v1').then((cache) => cache.addAll(["./BG_ProAir_Parts_Quiz_PWA_Pixel7Pro.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-192.png", "./icons/maskable-512.png"]))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k === 'proair-quiz-v1' ? null : caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      const cache = await caches.open('proair-quiz-v1');
      const cached = await cache.match('./BG_ProAir_Parts_Quiz_PWA_Pixel7Pro.html');
      try {
        const fresh = await fetch(req);
        cache.put('./BG_ProAir_Parts_Quiz_PWA_Pixel7Pro.html', fresh.clone());
        return fresh;
      } catch (err) {
        return cached || Response.error();
      }
    })());
    return;
  }
  if (["BG_ProAir_Parts_Quiz_PWA_Pixel7Pro.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png"].includes(url.pathname.split('/').pop())) {
    event.respondWith(
      caches.match(req).then(resp => resp || fetch(req))
    );
  }
});
