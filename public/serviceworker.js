let cahcheData = 'Trello';

this.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(cahcheData).then((data) => {
        data.addAll([
          'AppStateContect',
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