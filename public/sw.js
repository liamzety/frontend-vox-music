
console.log('Service Worker Registered!');

// This function build an array of urls,
// fetch them, and store the responses in the cache,
// example: key: 'main.js' value: 'alert(3)'
self.addEventListener('install', event => {

    console.log('Installing service worker...');

    const urlsToCache = [
        '/',
    ];
    event.waitUntil(
        caches.open('my-cache1').then(cache => {
            return cache.addAll(urlsToCache)
        })
    );

});


self.addEventListener('fetch', event => {
    console.log('Fetch of: ', event.request.url);

    event.respondWith(
        // the response is resolved to null if there is no match 
        caches.match(event.request)
            .then(response => {
                let res = response;

                if (!res) {
                    console.log('NOT IN CACHE, FETCHED FROM NETWORK!')
                    res = fetch(event.request)
                } else {
                    console.log('FOUND IN CACHE')
                }
                return res
            })
    );

})
