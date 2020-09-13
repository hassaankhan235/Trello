let cahcheData = 'Stop-Watch';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cahcheData).then((data) => {
      data.addAll([
        'index.html',
        '/',
        '/static/js/bundle.js',
        '/static/js/0.chunk.js',
        '/static/js/main.chunk.js',
        '/manifest.json'
      ])
    }).catch((err) => {
      console.log('err', err)
    })
  )
})



this.addEventListener('fetch', function (event) {
  if(!navigator.onLine){
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          console.log("MATCH FOUND")
          // Cache hit - return response
          if (response) {
            return response;
          }
  
  
          return fetch(event.request);
        }
        )
    );
  }
});