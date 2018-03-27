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
    "url": "css/large.css",
    "revision": "9e96e36d17c93ad65bcfa82157f7e392"
  },
  {
    "url": "css/large.css.gz",
    "revision": "05d0bd0f33722155a75a3c3bb23eda2b"
  },
  {
    "url": "css/main.css",
    "revision": "136931892a84004be7ebfcd29c4a1f07"
  },
  {
    "url": "css/main.css.gz",
    "revision": "ae081688155c16941c28976e97e0048e"
  },
  {
    "url": "css/medium.css",
    "revision": "c4748738c27a158d0168eb2a93662d4c"
  },
  {
    "url": "css/medium.css.gz",
    "revision": "a3ffc3e50740f9cfa282ef4a813d7c76"
  },
  {
    "url": "css/restaurant_info.css",
    "revision": "183dc520d615b670b58c03eb3f4186f2"
  },
  {
    "url": "css/restaurant_info.css.gz",
    "revision": "efb4512429db748bbde967c4f88cd7d5"
  },
  {
    "url": "images/1_large.jpg",
    "revision": "bc2df7aed11aa73c2419fd85f6005e41"
  },
  {
    "url": "images/1_large.webp",
    "revision": "62b1caf89e485c0c3e416aaa5a9f118f"
  },
  {
    "url": "images/1_small.jpg",
    "revision": "b26d08bdde0476e49f472985d8656d34"
  },
  {
    "url": "images/1_small.webp",
    "revision": "8cc4e0a8912b76d87c2a19b940f4a1eb"
  },
  {
    "url": "images/10_large.jpg",
    "revision": "31fdcfd5104c069db9540d4508ecb1fb"
  },
  {
    "url": "images/10_large.webp",
    "revision": "3ae066c3c67b0b2a6cf92dde946297f5"
  },
  {
    "url": "images/10_small.jpg",
    "revision": "8425538fde573cc26364a918369252c3"
  },
  {
    "url": "images/10_small.webp",
    "revision": "825c90de24f13728c963cec130ababcb"
  },
  {
    "url": "images/2_large.jpg",
    "revision": "9ce4232398eb6690f89de530f91ab5fd"
  },
  {
    "url": "images/2_large.webp",
    "revision": "78946e7b0ce9b01cee73f25325f52b7e"
  },
  {
    "url": "images/2_small.jpg",
    "revision": "6c5aec6011a25e43675ee44094e4103f"
  },
  {
    "url": "images/2_small.webp",
    "revision": "bf0496bc7355ab8bf4542317c375ee49"
  },
  {
    "url": "images/3_large.jpg",
    "revision": "01e9eff0d079c35473884937b66f0e6e"
  },
  {
    "url": "images/3_large.webp",
    "revision": "354300dedd00b79bc6e12cbb1fed71dc"
  },
  {
    "url": "images/3_small.jpg",
    "revision": "f0bb13f0b562f1e1dbabf6832d9e0af2"
  },
  {
    "url": "images/3_small.webp",
    "revision": "4beeaf89c8d6fda42e33c41d7ef87284"
  },
  {
    "url": "images/4_large.jpg",
    "revision": "29b93b52ddfe0a6c650a9b0b1ceaa97a"
  },
  {
    "url": "images/4_large.webp",
    "revision": "409b768bf8b22e96131e2b280afc5db1"
  },
  {
    "url": "images/4_small.jpg",
    "revision": "df64f5750ca84bc0904a479f7758825d"
  },
  {
    "url": "images/4_small.webp",
    "revision": "d7b3f2bfb31a30dc6e93b88a3ce6d267"
  },
  {
    "url": "images/5_large.jpg",
    "revision": "828ded5779f74a466f22ed118436a317"
  },
  {
    "url": "images/5_large.webp",
    "revision": "621b45a40aa5115308b3e70a03b0add8"
  },
  {
    "url": "images/5_small.jpg",
    "revision": "5916698105d55d9900524de091afab42"
  },
  {
    "url": "images/5_small.webp",
    "revision": "0b21f3cfeb274b9dc95949f9026fa275"
  },
  {
    "url": "images/6_large.jpg",
    "revision": "e2a0861e69c51e1116a80ef2998a731f"
  },
  {
    "url": "images/6_large.webp",
    "revision": "75c477d2506c9bfff31e973b16c2d0a5"
  },
  {
    "url": "images/6_small.jpg",
    "revision": "cfb35569828aa5e8827336995ed12616"
  },
  {
    "url": "images/6_small.webp",
    "revision": "3911ba7c4eb690631611bc7aa920a005"
  },
  {
    "url": "images/7_large.jpg",
    "revision": "215d4b2443109493a42e7c7d9290cda2"
  },
  {
    "url": "images/7_large.webp",
    "revision": "5fcd87771bc828359d40b2bc605a9393"
  },
  {
    "url": "images/7_small.jpg",
    "revision": "f928124284936c8f9d2a586839d08b86"
  },
  {
    "url": "images/7_small.webp",
    "revision": "5691ba8f80d19a8b4ae545352479c845"
  },
  {
    "url": "images/8_large.jpg",
    "revision": "a00422951c7a8cc8c96231daff2e97c9"
  },
  {
    "url": "images/8_large.webp",
    "revision": "ca5e127887faa2db70d983373605c106"
  },
  {
    "url": "images/8_small.jpg",
    "revision": "ed8342d1dddf33a19ba74080a7b65e04"
  },
  {
    "url": "images/8_small.webp",
    "revision": "eeec54a3e5c32644f654a5dfb79b7dfc"
  },
  {
    "url": "images/9_large.jpg",
    "revision": "e6273bc19114112c83272ba66d152976"
  },
  {
    "url": "images/9_large.webp",
    "revision": "331390fb3698b3896b270729cd6b8f2a"
  },
  {
    "url": "images/9_small.jpg",
    "revision": "770e7d22224da956611ecab0a1ae721a"
  },
  {
    "url": "images/9_small.webp",
    "revision": "b0ba0acee3bc952dd60770ae89f86bc3"
  },
  {
    "url": "images/restaurant-1724294_640.webp",
    "revision": "ea54cf3f9dcd93c9818d7ff1d6f42bdd"
  },
  {
    "url": "images/touch/restaurant144.webp",
    "revision": "3d90e48b96c90e5d60badb488d198281"
  },
  {
    "url": "images/touch/restaurant48.webp",
    "revision": "fbb97175f52f55fe7ce85ddc2936347d"
  },
  {
    "url": "index.html",
    "revision": "99d0028e87124d12ee1d0c5eadce0068"
  },
  {
    "url": "index.html.gz",
    "revision": "85de77b63970ea71e8ba9ebc81861080"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "52e803e2debc100c71115878e143173a"
  },
  {
    "url": "js/dbhelper.js.gz",
    "revision": "a31ad42da6c305d11382c023b5469749"
  },
  {
    "url": "js/lazyload.min.js",
    "revision": "97581c97375435fa2cc8d0a77c7a33e3"
  },
  {
    "url": "js/lazyload.min.js.gz",
    "revision": "809cec45ca0d62d3d3f14790b4ba5e16"
  },
  {
    "url": "js/main.js",
    "revision": "9de0d7191befc8680bfce2582055c07a"
  },
  {
    "url": "js/main.js.gz",
    "revision": "d1111e5eee71deb110816155dcca43f1"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "d522d09b202070773e8cca394f488c97"
  },
  {
    "url": "js/restaurant_info.js.gz",
    "revision": "617467c2f1f8954e322bcf12bfac1987"
  },
  {
    "url": "restaurant.html",
    "revision": "9fc5edf3dded75cbdc3b4d6cd98010df"
  },
  {
    "url": "restaurant.html.gz",
    "revision": "9c45c3a313b6ef1e6b937c49e0da48ac"
  }
]);