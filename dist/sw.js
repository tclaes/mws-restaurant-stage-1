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
    "revision": "9e96e36d17c93ad65bcfa82157f7e392"
  },
  {
    "url": "css/main.css",
    "revision": "4e972cb5a6bd75e97fee772d60e5d6f5"
  },
  {
    "url": "css/medium.css",
    "revision": "c4748738c27a158d0168eb2a93662d4c"
  },
  {
    "url": "css/restaurant_info.css",
    "revision": "183dc520d615b670b58c03eb3f4186f2"
  },
  {
    "url": "index.html",
    "revision": "67fcdc908ed8f31543b8224384edee9f"
  },
  {
    "url": "manifest.json",
    "revision": "23ef107f9fe1281d9146daa6df649b94"
  },
  {
    "url": "restaurant.html",
    "revision": "35dd895e43511bc5ee81b0c002af0eca"
  },
  {
    "url": "/",
    "revision": "812d25d89dff51114dee87dd53de5461"
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
