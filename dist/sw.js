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
    "revision": "dcd5fd7c499186337f70fbf3a1b85ebc"
  },
  {
    "url": "css/restaurant_info.css",
    "revision": "cb9490ab7557fddb983529ec5b28d587"
  },
  {
    "url": "images/1_large.jpg",
    "revision": "796225a2fd229c608223bdf0a3ce4fb9"
  },
  {
    "url": "images/1_small.jpg",
    "revision": "1b67c35dda2558884aa15985e94b4ddf"
  },
  {
    "url": "images/10_large.jpg",
    "revision": "bfa01a40c1edc3108c0269e3433df8cf"
  },
  {
    "url": "images/10_small.jpg",
    "revision": "59d95726b12f1561651753d6f5347fbb"
  },
  {
    "url": "images/2_large.jpg",
    "revision": "e4348683d8ba3357b577d8e73afd06a7"
  },
  {
    "url": "images/2_small.jpg",
    "revision": "48e0b9ad9c08399ad851f13f31a3c99d"
  },
  {
    "url": "images/3_large.jpg",
    "revision": "23a9fd30797d87d16e57bdd4064e2727"
  },
  {
    "url": "images/3_small.jpg",
    "revision": "7253eef596478568b57fded836f9399c"
  },
  {
    "url": "images/4_large.jpg",
    "revision": "f49f7a09840cfa81ed7b5928b1b6d6b2"
  },
  {
    "url": "images/4_small.jpg",
    "revision": "04224af125709b222256b96d94bb45e4"
  },
  {
    "url": "images/5_large.jpg",
    "revision": "304ff3733c02de9f5fbfd0b355485f7d"
  },
  {
    "url": "images/5_small.jpg",
    "revision": "6bd6e7197d01d225322db348f4a55c1f"
  },
  {
    "url": "images/6_large.jpg",
    "revision": "2545c649b86ace20ef4f86de7f37b222"
  },
  {
    "url": "images/6_small.jpg",
    "revision": "bc48075c77612d7778d765f9306f1c98"
  },
  {
    "url": "images/7_large.jpg",
    "revision": "d75efc834360bb702b88503edb21c8aa"
  },
  {
    "url": "images/7_small.jpg",
    "revision": "c0aa32c4c864bed0c73d65ce9b29d5d9"
  },
  {
    "url": "images/8_large.jpg",
    "revision": "837c2ace0f60a8d3d82b600257b9c554"
  },
  {
    "url": "images/8_small.jpg",
    "revision": "171cad095076009dc4e2e6c8c1b33239"
  },
  {
    "url": "images/9_large.jpg",
    "revision": "1686ad7b60e72af94be6d1cc60a8b384"
  },
  {
    "url": "images/9_small.jpg",
    "revision": "1d0fc1f0782a49f5ac9905878a1e89c6"
  },
  {
    "url": "index.html",
    "revision": "e95d9f2f8786ab65cdfa69c36192bfdd"
  },
  {
    "url": "js/dbhelper.js",
    "revision": "cb0cf554e7d26cea14e2d1cf21ba550b"
  },
  {
    "url": "js/lazyload.min.js",
    "revision": "bda712d7a864e42ea7b07b6f5e80dec8"
  },
  {
    "url": "js/main.js",
    "revision": "cd68c847abeee3e3efa03853bb49141a"
  },
  {
    "url": "js/restaurant_info.js",
    "revision": "848e1036736e54502bd469ce5a07ec34"
  },
  {
    "url": "restaurant.html",
    "revision": "dee4697de9dd1f0d222ddc5e9ad0f349"
  }
]);