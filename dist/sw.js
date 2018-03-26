importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('https://hacker-news.firebaseio.com'),
    workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb_fEJIMis9lXn5Iz3WR6E5IjnCIdIRnM&libraries=places&callback=initMap',
        workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'static-resources',
    }),
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
    "url": "css/index.css.gz",
    "revision": "a59f70ed50da05a257c245bd023eae1b"
  },
  {
    "url": "css/large.css.gz",
    "revision": "3eb114d5546d91bc889b71b1e44b6c62"
  },
  {
    "url": "css/main.css.gz",
    "revision": "495c8b757706e394f0fd90e275ce1b08"
  },
  {
    "url": "css/medium.css.gz",
    "revision": "4fabf4843517a522c46d2b7e26c65839"
  },
  {
    "url": "css/restaurant_info.css.gz",
    "revision": "0d850a3617a12448170ba8d56225b20c"
  },
  {
    "url": "images/1-large_large.jpg",
    "revision": "2fd2d7eb3b1f540db1bf69c88c97bb57"
  },
  {
    "url": "images/1-large_large.webp",
    "revision": "8030df9377dc53f866a6d7576f2d22c5"
  },
  {
    "url": "images/1-small_small.jpg",
    "revision": "b1c59be7b249e281033ba54da7081d32"
  },
  {
    "url": "images/1-small_small.webp",
    "revision": "345044cd143dd1b60bc70622ac2c95e5"
  },
  {
    "url": "images/10-large_large.jpg",
    "revision": "7f728155f2355e7aabd1a1c3384a520e"
  },
  {
    "url": "images/10-large_large.webp",
    "revision": "342a271d4190148e91eb7cb0635a37ec"
  },
  {
    "url": "images/10-small_small.jpg",
    "revision": "bee6f208c284d9ef32ca917a235ff3fd"
  },
  {
    "url": "images/10-small_small.webp",
    "revision": "3e1fbdca9d62fc09523d347f80d6fe71"
  },
  {
    "url": "images/2-large_large.jpg",
    "revision": "daa66549a20a30e407006a89d2c97703"
  },
  {
    "url": "images/2-large_large.webp",
    "revision": "ac012d95b0578250bc4b5bd2be939318"
  },
  {
    "url": "images/2-small_small.jpg",
    "revision": "76c60fd628a5eed5ee2b553f9d5d7dc4"
  },
  {
    "url": "images/2-small_small.webp",
    "revision": "e80d424b4f255d07ee909076bd4ad74b"
  },
  {
    "url": "images/3-large_large.jpg",
    "revision": "6d61ca5865f6012337a6036cdcda1fb9"
  },
  {
    "url": "images/3-large_large.webp",
    "revision": "7e5ab7bdb6f963955ddeaf60a0e859ff"
  },
  {
    "url": "images/3-small_small.jpg",
    "revision": "e4d22b0555dd84e1863924f66be23c17"
  },
  {
    "url": "images/3-small_small.webp",
    "revision": "70c1766c4136f49431416e61940eee99"
  },
  {
    "url": "images/4-large_large.jpg",
    "revision": "4ff3e641c4f727c44219af8b990bcb24"
  },
  {
    "url": "images/4-large_large.webp",
    "revision": "96f9fdd2ceeb04d297ff012226d37e44"
  },
  {
    "url": "images/4-small_small.jpg",
    "revision": "0a92b57c5a1ebe2d36fb2f3036bc383a"
  },
  {
    "url": "images/4-small_small.webp",
    "revision": "4b0b0cf2002cd383971445a21b50ebad"
  },
  {
    "url": "images/5-large_large.jpg",
    "revision": "5bbc9cb13dec2b79d47a46432be6a88f"
  },
  {
    "url": "images/5-large_large.webp",
    "revision": "4ff4c02b0683b02d3fded88188d42288"
  },
  {
    "url": "images/5-small_small.jpg",
    "revision": "3170640f5f5871ad576dd090be891b62"
  },
  {
    "url": "images/5-small_small.webp",
    "revision": "a1371aee5b129f889c02b73aaece03c0"
  },
  {
    "url": "images/6-large_large.jpg",
    "revision": "d8edc917abe823a95a6b5e5a6cbb40ff"
  },
  {
    "url": "images/6-large_large.webp",
    "revision": "8bdba7b520e537b4b18ceb6d46ecbf5c"
  },
  {
    "url": "images/6-small_small.jpg",
    "revision": "637acae76eb2e20593ab39f770bf2517"
  },
  {
    "url": "images/6-small_small.webp",
    "revision": "0680ada63c18807fe2f3d35e3c80816d"
  },
  {
    "url": "images/7-large_large.jpg",
    "revision": "7618244e2f057832cfbcc7e27d698feb"
  },
  {
    "url": "images/7-large_large.webp",
    "revision": "3b1c22eabe85fe8d8bef93a515cb43c9"
  },
  {
    "url": "images/7-small_small.jpg",
    "revision": "83450ec2e1f0df6947487d2d693b2189"
  },
  {
    "url": "images/7-small_small.webp",
    "revision": "ec30de9116d7f2f3455c6462633b4dcd"
  },
  {
    "url": "images/8-large_large.jpg",
    "revision": "e43b090344133fa4c8bedfd1bdf9a0a6"
  },
  {
    "url": "images/8-large_large.webp",
    "revision": "f662bfc5d208170eaf9a6b963abc62fa"
  },
  {
    "url": "images/8-small_small.jpg",
    "revision": "f5c955963b40231f330313e109d5592f"
  },
  {
    "url": "images/8-small_small.webp",
    "revision": "44c74d7c74f2b8e077b72889a9393e0a"
  },
  {
    "url": "images/9-large_large.jpg",
    "revision": "52f6a8f0daf3c2794764508572d7ebc5"
  },
  {
    "url": "images/9-large_large.webp",
    "revision": "8b5f78772aceebe7c641b189df5c9b96"
  },
  {
    "url": "images/9-small_small.jpg",
    "revision": "f8a2154a27945801060bc75717ee3660"
  },
  {
    "url": "images/9-small_small.webp",
    "revision": "9c71a46bb4bf890faba54e02470ac8bb"
  },
  {
    "url": "images/restaurant-1724294_640.webp",
    "revision": "ea54cf3f9dcd93c9818d7ff1d6f42bdd"
  },
  {
    "url": "images/touch/restaurant48.webp",
    "revision": "fbb97175f52f55fe7ce85ddc2936347d"
  },
  {
    "url": "index.html.gz",
    "revision": "d0a88ac0cf4a2f7aa004bc67755dec1e"
  },
  {
    "url": "js/dbhelper.js.gz",
    "revision": "50fcbaf91d4972ed4b7dadeb859a3b72"
  },
  {
    "url": "js/lazyload.min.js.gz",
    "revision": "809cec45ca0d62d3d3f14790b4ba5e16"
  },
  {
    "url": "js/main.js.gz",
    "revision": "a912832ae84a6b009e0cec8525084bd5"
  },
  {
    "url": "js/restaurant_info.js.gz",
    "revision": "14e8b9700525566f51f40e34e5509c76"
  },
  {
    "url": "restaurant.html.gz",
    "revision": "6d81f4163405a70943ef7159a2f37c2f"
  }
]);