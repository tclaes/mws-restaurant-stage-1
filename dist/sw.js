importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('http://localhost:3000'),
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb_fEJIMis9lXn5Iz3WR6E5IjnCIdIRnM&libraries=places&callback=initMap',
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate(),
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
    "url": "images/1_large.jpg",
    "revision": "bc2df7aed11aa73c2419fd85f6005e41"
  },
  {
    "url": "images/1_small.jpg",
    "revision": "b26d08bdde0476e49f472985d8656d34"
  },
  {
    "url": "images/10_large.jpg",
    "revision": "31fdcfd5104c069db9540d4508ecb1fb"
  },
  {
    "url": "images/10_small.jpg",
    "revision": "8425538fde573cc26364a918369252c3"
  },
  {
    "url": "images/2_large.jpg",
    "revision": "9ce4232398eb6690f89de530f91ab5fd"
  },
  {
    "url": "images/2_small.jpg",
    "revision": "6c5aec6011a25e43675ee44094e4103f"
  },
  {
    "url": "images/3_large.jpg",
    "revision": "01e9eff0d079c35473884937b66f0e6e"
  },
  {
    "url": "images/3_small.jpg",
    "revision": "f0bb13f0b562f1e1dbabf6832d9e0af2"
  },
  {
    "url": "images/4_large.jpg",
    "revision": "29b93b52ddfe0a6c650a9b0b1ceaa97a"
  },
  {
    "url": "images/4_small.jpg",
    "revision": "df64f5750ca84bc0904a479f7758825d"
  },
  {
    "url": "images/5_large.jpg",
    "revision": "828ded5779f74a466f22ed118436a317"
  },
  {
    "url": "images/5_small.jpg",
    "revision": "5916698105d55d9900524de091afab42"
  },
  {
    "url": "images/6_large.jpg",
    "revision": "e2a0861e69c51e1116a80ef2998a731f"
  },
  {
    "url": "images/6_small.jpg",
    "revision": "cfb35569828aa5e8827336995ed12616"
  },
  {
    "url": "images/7_large.jpg",
    "revision": "215d4b2443109493a42e7c7d9290cda2"
  },
  {
    "url": "images/7_small.jpg",
    "revision": "f928124284936c8f9d2a586839d08b86"
  },
  {
    "url": "images/8_large.jpg",
    "revision": "a00422951c7a8cc8c96231daff2e97c9"
  },
  {
    "url": "images/8_small.jpg",
    "revision": "ed8342d1dddf33a19ba74080a7b65e04"
  },
  {
    "url": "images/9_large.jpg",
    "revision": "e6273bc19114112c83272ba66d152976"
  },
  {
    "url": "images/9_small.jpg",
    "revision": "770e7d22224da956611ecab0a1ae721a"
  },
  {
    "url": "js/lazyload.min.js",
    "revision": "b8a13ad43117515f54be4856c1e1e786"
  }
]);