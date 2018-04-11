importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('https://fonts.googleapis.com'),
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('https://maps.googleapis.com'),
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('https://maps.gstatic.com'),
    workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
    new RegExp('http://localhost:3000/(.*)'),
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|webp)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheExpiration: {
            maxEntries: 50
        }
    })
);

self.addEventListener('push', (event) => {
    const title = 'Get Started With Workbox';
    const options = {
        body: event.data.text()
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute([
  {
    "url": "css/large.css",
    "revision": "e9d6b93bdd7d90bca46e09a1edcdd649"
  },
  {
    "url": "css/main.css",
    "revision": "3331c1386684dc64186b64ad09abb4e9"
  },
  {
    "url": "css/medium.css",
    "revision": "8611deb77cb13f151b2542014f189352"
  },
  {
    "url": "css/restaurant_info.css",
    "revision": "cb9490ab7557fddb983529ec5b28d587"
  },
  {
    "url": "index.html",
    "revision": "5af057b1ba95251539d7c8ef7f98065d"
  },
  {
    "url": "js/main.min.js",
    "revision": "869d9b4b8526fe7614ae29cdf8ab4bc9"
  },
  {
    "url": "js/restaurant.min.js",
    "revision": "d5ad43f4097fb2368901004ccdcb58fc"
  },
  {
    "url": "manifest.json",
    "revision": "23ef107f9fe1281d9146daa6df649b94"
  },
  {
    "url": "restaurant.html",
    "revision": "9ce086cf33f1bb39366698360ff18bd1"
  },
  {
    "url": "/",
    "revision": "c0d3976444bc9bb9cab28a2141011fed"
  }
]);