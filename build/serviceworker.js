let cahcheData = 'Trello';

this.addEventListener('install', (event) => {
  console.log("SUCCESS")
    event.waitUntil(
      caches.open(cahcheData).then((data) => {
        console.log('[Service Worker] Caching all: app shell and content');
        return data.addAll([
          '/'
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