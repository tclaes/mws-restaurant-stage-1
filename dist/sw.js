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
    "revision": "e95d9f2f8786ab65cdfa69c36192bfdd"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "1ae71f71f61c178391ad61974d79c885"
  },
  {
    "url": "js/lazyload.min.js",
    "revision": "bda712d7a864e42ea7b07b6f5e80dec8"
  },
  {
    "url": "js/main.js",
    "revision": "2cc1d755cf439c1e2f095b54b306ffec"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "848e1036736e54502bd469ce5a07ec34"
  },
  {
    "url": "restaurant.html",
    "revision": "dee4697de9dd1f0d222ddc5e9ad0f349"
  },
  {
    "url": "/",
    "revision": "0dd92581a506d46f785b7f8a9cb6ab94"
  }
]);