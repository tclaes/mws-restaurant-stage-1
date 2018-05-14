/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/large.css",
    "revision": "e9d6b93bdd7d90bca46e09a1edcdd649"
  },
  {
    "url": "css/main.css",
    "revision": "aa930b7ab3f7131711bc27ee1890205f"
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
    "revision": "8291f11e5c6c3e11a4baae6784b0d048"
  },
  {
    "url": "js/main.min.js",
    "revision": "9d79d3979176f2c51250ed11b5604095"
  },
  {
    "url": "js/restaurant.min.js",
    "revision": "cdddfdb28b9478ce12a7ee79c938e6bb"
  },
  {
    "url": "js/review.min.js",
    "revision": "49f60a9a72d83d457b79f0812b8ec9f9"
  },
  {
    "url": "manifest.json",
    "revision": "23ef107f9fe1281d9146daa6df649b94"
  },
  {
    "url": "restaurant.html",
    "revision": "d5194b6ba06c7a704dfad1577c91693c"
  },
  {
    "url": "review.html",
    "revision": "ff16b9bdf9434aba5d975753f9f551f9"
  },
  {
    "url": "/",
    "revision": "79d0d1a55dbd512a6efb4e611ee0fa18"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  "ignoreUrlParametersMatching": [/./]
});

workbox.routing.registerRoute(/https:\/\/fonts.googleapis.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts.googleapis.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/maps.googleapis.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/maps.gstatic.com/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/http:\/\/localhost:3000\/(.*)/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/\.(?:js|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|webp)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
