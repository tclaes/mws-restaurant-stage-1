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
    "revision": "8fcb565fafe48c2834b34b3d9f28166c"
  },
  {
    "url": "js/main.min.js",
    "revision": "faa6ec39aba3dfd93cd81c4293c98e35"
  },
  {
    "url": "js/restaurant.min.js",
    "revision": "f50ac7058417727d3ce42895f62415fb"
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
    "revision": "df9d4c9970063ce7ed9d0abdc4fff4b4"
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
