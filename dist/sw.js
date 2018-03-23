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
    "url": "css/large.css",
    "revision": "d7ce516906bec3604d0a28f77f947e92"
  },
  {
    "url": "css/main.css",
    "revision": "c4a6adf07f6f3c70ba28f9093e42f1af"
  },
  {
    "url": "css/medium.css",
    "revision": "9bb4eae93d50cef71d6ef69930b40b7f"
  },
  {
    "url": "css/restaurant_info.css",
    "revision": "a4169176a15b75c8c8cade2db6399dc7"
  },
  {
    "url": "images/1-large_large.jpg",
    "revision": "2fd2d7eb3b1f540db1bf69c88c97bb57"
  },
  {
    "url": "images/1-small_small.jpg",
    "revision": "b1c59be7b249e281033ba54da7081d32"
  },
  {
    "url": "images/1.jpg",
    "revision": "cc074688becddd2725114187fba9471c"
  },
  {
    "url": "images/10-large_large.jpg",
    "revision": "7f728155f2355e7aabd1a1c3384a520e"
  },
  {
    "url": "images/10-small_small.jpg",
    "revision": "bee6f208c284d9ef32ca917a235ff3fd"
  },
  {
    "url": "images/10.jpg",
    "revision": "2bd68efbe70c926de6609946e359faa2"
  },
  {
    "url": "images/2-large_large.jpg",
    "revision": "daa66549a20a30e407006a89d2c97703"
  },
  {
    "url": "images/2-small_small.jpg",
    "revision": "76c60fd628a5eed5ee2b553f9d5d7dc4"
  },
  {
    "url": "images/2.jpg",
    "revision": "759b34e9a95647fbea0933207f8fc401"
  },
  {
    "url": "images/3-large_large.jpg",
    "revision": "6d61ca5865f6012337a6036cdcda1fb9"
  },
  {
    "url": "images/3-small_small.jpg",
    "revision": "e4d22b0555dd84e1863924f66be23c17"
  },
  {
    "url": "images/3.jpg",
    "revision": "81ee36a32bcfeea00db09f9e08d56cd8"
  },
  {
    "url": "images/4-large_large.jpg",
    "revision": "4ff3e641c4f727c44219af8b990bcb24"
  },
  {
    "url": "images/4-small_small.jpg",
    "revision": "0a92b57c5a1ebe2d36fb2f3036bc383a"
  },
  {
    "url": "images/4.jpg",
    "revision": "23f21d5c53cbd8b0fb2a37af79d0d37f"
  },
  {
    "url": "images/5-large_large.jpg",
    "revision": "5bbc9cb13dec2b79d47a46432be6a88f"
  },
  {
    "url": "images/5-small_small.jpg",
    "revision": "3170640f5f5871ad576dd090be891b62"
  },
  {
    "url": "images/5.jpg",
    "revision": "0a166f0f4e10c36882f97327b3835aec"
  },
  {
    "url": "images/6-large_large.jpg",
    "revision": "d8edc917abe823a95a6b5e5a6cbb40ff"
  },
  {
    "url": "images/6-small_small.jpg",
    "revision": "637acae76eb2e20593ab39f770bf2517"
  },
  {
    "url": "images/6.jpg",
    "revision": "eaf1fec4ee66e121cadc608435fec72f"
  },
  {
    "url": "images/7-large_large.jpg",
    "revision": "7618244e2f057832cfbcc7e27d698feb"
  },
  {
    "url": "images/7-small_small.jpg",
    "revision": "83450ec2e1f0df6947487d2d693b2189"
  },
  {
    "url": "images/7.jpg",
    "revision": "bd0ac197c58cf9853dc49b6d1d7581cd"
  },
  {
    "url": "images/8-large_large.jpg",
    "revision": "e43b090344133fa4c8bedfd1bdf9a0a6"
  },
  {
    "url": "images/8-small_small.jpg",
    "revision": "f5c955963b40231f330313e109d5592f"
  },
  {
    "url": "images/8.jpg",
    "revision": "6e0e6fb335ba49a4a732591f79000bb4"
  },
  {
    "url": "images/9-large_large.jpg",
    "revision": "52f6a8f0daf3c2794764508572d7ebc5"
  },
  {
    "url": "images/9-small_small.jpg",
    "revision": "f8a2154a27945801060bc75717ee3660"
  },
  {
    "url": "images/9.jpg",
    "revision": "ba4260dee2806745957f4ac41a20fa72"
  },
  {
    "url": "index.html",
    "revision": "833345a8d86dd5a2dafb70f1d09e5eed"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "b80dff77013b2920e44945df417e62ef"
  },
  {
    "url": "js/lazyload.min.js",
    "revision": "97581c97375435fa2cc8d0a77c7a33e3"
  },
  {
    "url": "js/main.js",
    "revision": "fc8d7fad0b21d9142ea3e0266c8f0c3b"
  },
  {
    "url": "js/main.min.js",
    "revision": "c655a356cc52417db3857631eba87b01"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "c01a92d0c0f6a229e9d00508e03d4654"
  },
  {
    "url": "restaurant.html",
    "revision": "2f8e866ab1788788e544d1ac5c3b43b8"
  }
]);