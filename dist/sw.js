importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('https://hacker-news.firebaseio.com'),
    workbox.strategies.staleWhileRevalidate()
);

// workbox.routing.registerRoute(
//     'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb_fEJIMis9lXn5Iz3WR6E5IjnCIdIRnM&libraries=places&callback=initMap',
//         workbox.strategies.networkFirst()
// );

self.addEventListener('push', (event) => {
    const title = 'Get Started With Workbox';
    const options = {
        body: event.data.text()
    };
    event.waitUntil(self.registration.showNotification(title, options));
});


workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "66a91550a5744eaef066b427d08fce84"
  },
  {
    "url": "images/1.jpg",
    "revision": "cc074688becddd2725114187fba9471c"
  },
  {
    "url": "images/10.jpg",
    "revision": "2bd68efbe70c926de6609946e359faa2"
  },
  {
    "url": "images/2.jpg",
    "revision": "759b34e9a95647fbea0933207f8fc401"
  },
  {
    "url": "images/3.jpg",
    "revision": "81ee36a32bcfeea00db09f9e08d56cd8"
  },
  {
    "url": "images/4.jpg",
    "revision": "23f21d5c53cbd8b0fb2a37af79d0d37f"
  },
  {
    "url": "images/5.jpg",
    "revision": "0a166f0f4e10c36882f97327b3835aec"
  },
  {
    "url": "images/6.jpg",
    "revision": "eaf1fec4ee66e121cadc608435fec72f"
  },
  {
    "url": "images/7.jpg",
    "revision": "bd0ac197c58cf9853dc49b6d1d7581cd"
  },
  {
    "url": "images/8.jpg",
    "revision": "6e0e6fb335ba49a4a732591f79000bb4"
  },
  {
    "url": "images/9.jpg",
    "revision": "ba4260dee2806745957f4ac41a20fa72"
  },
  {
    "url": "index.html",
    "revision": "fecea3fb20dcdca84a531b0b351ee860"
  },
  {
    "url": "js/main.min.js",
    "revision": "59cd4ceed0a7cc97afcb96712f491cd6"
  },
  {
    "url": "restaurant.html",
    "revision": "e13e419f53a6fbe939f1374a86da91d6"
  }
]);