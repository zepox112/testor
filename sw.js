const cacheName = 'iaa-v1';
const staticAssets = ['./', './index.html', './logo.jpg'];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});