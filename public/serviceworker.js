let cacheName = 'Stop-Watch';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((data) => {
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


this.addEventListener('fetch', event => {
  event.respodWith(
    caches.match(event.request).then(function(response){
      if(response){
        return response
      }
      var requestToCache = event.request.clone()
      return fetch(requestToCache).then(
        function(response){
          if(!response || response.status !== 200 ){
            return response
          }
          var responseToCache = response.clone()
          caches.open(cacheName).then(function(cache){
            cache.put(requestToCache, responseToCache)
          })
          return response;
        }
      )
    })
  )
})
