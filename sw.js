const CACHE_NAME = 'restaurant-cache';
let urlsToCache = [
    '/',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './data/restaurants.json',
    './imgages/1-small_small.jpg',
    './imgages/2-small_small.jpg',
    './imgages/3-small_small.jpg',
    './imgages/4-small_small.jpg',
    './imgages/5-small_small.jpg',
    './imgages/6-small_small.jpg',
    './imgages/7-small_small.jpg',
    './imgages/8-small_small.jpg',
    './imgages/9-small_small.jpg',
    './imgages/10-small_small.jpg',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
            return response || fetch(event.request);
        })
            .catch(err => console.log(err, event.request))
    );
});