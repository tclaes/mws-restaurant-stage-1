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
    "revision": "4c3db26223789005185792b4a2b5e1f5"
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
    "revision": "e3f60ae4e760e6bc8db2401a7e6f5e03"
  },
  {
    "url": "js/main.min.js",
    "revision": "fd9cb0dfe93864f26f9206339ec30557"
  },
  {
    "url": "js/restaurant.min.js",
    "revision": "a81b23ffe69c78890016e90b35528050"
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
    "revision": "79d87d5c1583420312b190d03c351c8f"
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
