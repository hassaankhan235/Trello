let cahcheData = 'Trello';

this.addEventListener('install', (event) => {
  console.log("SUCCESS")
    event.waitUntil(
      caches.open(cahcheData).then((data) => {
        console.log('[Service Worker] Caching all: app shell and content');
        return data.addAll([
          'index.html',
          '/',
          './static/js/2.c02aa915.chunk.js',
          './static/js/runtime-main.bb9ee77d.js',
          './static/js/2.c02aa915.chunk.js.map', 
          './static/js/main.b05c7e06.chunk.js',
          './manifest.json'
        ])
      }).catch((err) => {
        console.log('err', err)
      })
    )
  })

  this.addEventListener('fetch', (event)=> {
    if(!navigator.onLine)
    {
      event.respondWith( 
        caches.match(event.request).then(resp => {
          if(resp)
          {
            return resp
          }
        })
         )
    }
  })